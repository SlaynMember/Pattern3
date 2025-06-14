import { describe, it, expect } from 'vitest';
import { createCheckoutSession } from './stripe';

describe('createCheckoutSession', () => {
  it('resolves to the hardcoded Stripe URL', async () => {
    await expect(createCheckoutSession()).resolves.toBe(
      'https://buy.stripe.com/28EcN51sZejV1KV3Yg0Ny01'
    );
  });
});
