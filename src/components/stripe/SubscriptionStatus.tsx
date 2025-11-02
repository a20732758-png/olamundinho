import React from 'react';
import { useSubscription } from '../../hooks/useSubscription';
import { stripeProducts } from '../../stripe-config';

export const SubscriptionStatus: React.FC = () => {
  const { subscription, loading } = useSubscription();

  if (loading) {
    return (
      <div className="bg-gray-100 rounded-lg p-4">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
          <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (!subscription || subscription.subscription_status === 'not_started') {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h3 className="font-medium text-yellow-800">No Active Subscription</h3>
        <p className="text-yellow-700 text-sm">You don't have an active subscription yet.</p>
      </div>
    );
  }

  const product = stripeProducts.find(p => p.priceId === subscription.price_id);
  const statusColors = {
    active: 'bg-green-50 border-green-200 text-green-800',
    trialing: 'bg-blue-50 border-blue-200 text-blue-800',
    past_due: 'bg-red-50 border-red-200 text-red-800',
    canceled: 'bg-gray-50 border-gray-200 text-gray-800',
    incomplete: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  };

  const statusColor = statusColors[subscription.subscription_status as keyof typeof statusColors] || statusColors.incomplete;

  return (
    <div className={`border rounded-lg p-4 ${statusColor}`}>
      <h3 className="font-medium mb-2">Current Subscription</h3>
      {product && (
        <p className="text-sm mb-1">
          <strong>Plan:</strong> {product.name}
        </p>
      )}
      <p className="text-sm mb-1">
        <strong>Status:</strong> {subscription.subscription_status.replace('_', ' ')}
      </p>
      {subscription.current_period_end && (
        <p className="text-sm">
          <strong>Next billing:</strong> {new Date(subscription.current_period_end * 1000).toLocaleDateString()}
        </p>
      )}
      {subscription.cancel_at_period_end && (
        <p className="text-sm text-red-600 mt-2">
          Your subscription will cancel at the end of the current period.
        </p>
      )}
    </div>
  );
};