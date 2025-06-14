export async function createCheckoutSession() {
  try {
    // Redirect to the direct Stripe checkout URL
    return 'https://buy.stripe.com/28EcN51sZejV1KV3Yg0Ny01';
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
}
