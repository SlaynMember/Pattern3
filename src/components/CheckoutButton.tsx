import { useState } from 'react';
import { createCheckoutSession } from '../lib/stripe';

export default function CheckoutButton() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    try {
      setLoading(true);
      const url = await createCheckoutSession();
      window.location.href = url;
    } catch (error) {
      console.error('Error during checkout:', error);
      setLoading(false);
      alert('Failed to start checkout process. Please try again.');
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className={`px-6 py-2 bg-primary text-white rounded-md transition-colors ${
        loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-dark'
      }`}
    >
      {loading ? 'Processing...' : 'Get Started'}
    </button>
  );
}
