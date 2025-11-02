export interface StripeProduct {
  priceId: string;
  name: string;
  description: string;
  mode: 'payment' | 'subscription';
  price: number;
  currency: string;
  currencySymbol: string;
}

export const stripeProducts: StripeProduct[] = [
  {
    priceId: 'price_1SOs3UDj52UDRLrilIZV0iJ5',
    name: 'kifitnutritionkids',
    description: 'kifitnutritionkids - aprendizagem nutricional para crianças.',
    mode: 'subscription',
    price: 19.90,
    currency: 'brl',
    currencySymbol: 'R$',
  },
];