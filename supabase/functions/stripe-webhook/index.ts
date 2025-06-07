import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import Stripe from 'npm:stripe@17.7.0';
import { createClient } from 'npm:@supabase/supabase-js@2.49.1';

// Environment variable validation
const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
const STRIPE_SECRET_KEY = Deno.env.get('STRIPE_SECRET_KEY');
const STRIPE_WEBHOOK_SECRET = Deno.env.get('STRIPE_WEBHOOK_SECRET');

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !STRIPE_SECRET_KEY || !STRIPE_WEBHOOK_SECRET) {
  console.error('Missing required environment variables');
  Deno.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
const stripe = new Stripe(STRIPE_SECRET_KEY, {
  appInfo: {
    name: 'Bolt Integration',
    version: '1.0.0',
  },
});

interface WebhookResponse {
  received: boolean;
}

interface ErrorResponse {
  error: string;
}

Deno.serve(async (req) => {
  try {
    if (req.method === 'OPTIONS') {
      return new Response(null, { status: 204 });
    }

    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), { 
        status: 405,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const signature = req.headers.get('stripe-signature');
    if (!signature) {
      return new Response(JSON.stringify({ error: 'No signature found' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const body = await req.text();
    let event: Stripe.Event;

    try {
      event = await stripe.webhooks.constructEventAsync(
        body,
        signature,
        STRIPE_WEBHOOK_SECRET
      );
    } catch (error) {
      console.error('Webhook signature verification failed:', error);
      return new Response(
        JSON.stringify({ error: 'Webhook signature verification failed' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const stripeObject = event.data.object as Stripe.Checkout.Session;
    
    if (!stripeObject) {
      throw new Error('Invalid Stripe event object');
    }

    // Handle the event
    try {
      await handleStripeEvent(event);
      return new Response(JSON.stringify({ received: true }), {
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      console.error('Error handling webhook event:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to process webhook' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    console.error('Webhook error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
});

async function handleStripeEvent(event: Stripe.Event) {
  const stripeObject = event.data.object as Stripe.Checkout.Session;

  if (!('customer' in stripeObject)) {
    throw new Error('No customer found in Stripe event');
  }

  const customerId = stripeObject.customer as string;
  if (!customerId) {
    throw new Error('Invalid customer ID');
  }

  switch (event.type) {
    case 'checkout.session.completed':
      await handleCheckoutCompleted(stripeObject);
      break;
    case 'customer.subscription.updated':
      await handleSubscriptionUpdated(stripeObject as unknown as Stripe.Subscription);
      break;
    case 'customer.subscription.deleted':
      await handleSubscriptionDeleted(stripeObject as unknown as Stripe.Subscription);
      break;
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  if (!session.customer) {
    throw new Error('No customer ID in session');
  }

  const customerId = typeof session.customer === 'string' ? session.customer : session.customer.id;

  if (session.mode === 'subscription') {
    await syncSubscription(customerId);
  } else if (session.mode === 'payment') {
    await createOrder(session);
  }
}

async function syncSubscription(customerId: string) {
  const subscriptions = await stripe.subscriptions.list({
    customer: customerId,
    limit: 1,
    status: 'all',
    expand: ['data.default_payment_method'],
  });

  const subscription = subscriptions.data[0];
  if (!subscription) {
    throw new Error('No subscription found');
  }

  const { error } = await supabase.from('stripe_subscriptions').upsert({
    customer_id: customerId,
    subscription_id: subscription.id,
    price_id: subscription.items.data[0].price.id,
    current_period_start: subscription.current_period_start,
    current_period_end: subscription.current_period_end,
    cancel_at_period_end: subscription.cancel_at_period_end,
    status: subscription.status,
  }, {
    onConflict: 'customer_id',
  });

  if (error) {
    throw new Error(`Failed to sync subscription: ${error.message}`);
  }
}

async function createOrder(session: Stripe.Checkout.Session) {
  if (!session.payment_intent || !session.customer) {
    throw new Error('Invalid session data');
  }

  const { error } = await supabase.from('stripe_orders').insert({
    checkout_session_id: session.id,
    payment_intent_id: typeof session.payment_intent === 'string' ? session.payment_intent : session.payment_intent.id,
    customer_id: typeof session.customer === 'string' ? session.customer : session.customer.id,
    amount_subtotal: session.amount_subtotal,
    amount_total: session.amount_total,
    currency: session.currency,
    payment_status: session.payment_status,
    status: 'completed',
  });

  if (error) {
    throw new Error(`Failed to create order: ${error.message}`);
  }
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  await syncSubscription(subscription.customer as string);
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  const { error } = await supabase.from('stripe_subscriptions')
    .update({ status: 'canceled', deleted_at: new Date().toISOString() })
    .eq('subscription_id', subscription.id);

  if (error) {
    throw new Error(`Failed to mark subscription as deleted: ${error.message}`);
  }
}