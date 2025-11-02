import { supabase } from './supabase';
import type { StripeProduct } from '../stripe-config';

export interface SubscriptionData {
  subscription_status: string;
  price_id: string | null;
  current_period_start: number | null;
  current_period_end: number | null;
  cancel_at_period_end: boolean;
  payment_method_brand: string | null;
  payment_method_last4: string | null;
}

export const createCheckoutSession = async (
  product: StripeProduct,
  successUrl: string,
  cancelUrl: string
) => {
  const { data: { session }, error: sessionError } = await supabase.auth.getSession();
  
  if (sessionError || !session?.access_token) {
    throw new Error('User not authenticated');
  }

  const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-checkout`;
  
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${session.access_token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      price_id: product.priceId,
      success_url: successUrl,
      cancel_url: cancelUrl,
      mode: product.mode,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to create checkout session');
  }

  const data = await response.json();
  return data;
};

export const getUserSubscription = async (): Promise<SubscriptionData | null> => {
  const { data, error } = await supabase
    .from('stripe_user_subscriptions')
    .select('*')
    .maybeSingle();

  if (error) {
    console.error('Error fetching subscription:', error);
    return null;
  }

  return data;
};

export const redirectToCheckout = (sessionId: string) => {
  // This would typically use Stripe.js to redirect to checkout
  // For now, we'll use the session URL directly
  window.location.href = `https://checkout.stripe.com/pay/${sessionId}`;
};