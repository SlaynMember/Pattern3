export interface Product {
  id: string;
  priceId: string;
  name: string;
  description: string;
  mode: 'payment' | 'subscription';
}

export const products: Product[] = [
  {
    id: 'prod_SNHh3SBwiIQSVc',
    priceId: 'price_1RSX86F8Z8VBd96ITlFXKWoo',
    name: 'P3 Starter Kit (Free Beta Access)',
    description: 'Everything you need to start building your own AI assistant — custom prompt templates, brand voice setup, and a starter workflow that actually sounds like you. Free while I\'m building it. Feedback welcome.',
    mode: 'payment',
  },
];