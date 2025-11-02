import React, { useState } from 'react';
import { createCheckoutSession } from '../../lib/stripe';
import { Button } from '../ui/Button';
import { Alert } from '../ui/Alert';
import type { StripeProduct } from '../../stripe-config';

interface ProductCardProps {
  product: StripeProduct;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePurchase = async () => {
    setLoading(true);
    setError('');

    try {
      const successUrl = `${window.location.origin}/success`;
      const cancelUrl = `${window.location.origin}/products`;
      
      const { url } = await createCheckoutSession(product, successUrl, cancelUrl);
      
      if (url) {
        window.location.href = url;
      }
    } catch (err: any) {
      setError(err.message || 'Failed to start checkout');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border">
      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4">{product.description}</p>
      
      <div className="mb-4">
        <span className="text-2xl font-bold text-blue-600">
          {product.currencySymbol}{product.price.toFixed(2)}
        </span>
        {product.mode === 'subscription' && (
          <span className="text-gray-500 ml-1">/month</span>
        )}
      </div>

      {error && (
        <Alert variant="destructive" className="mb-4">
          {error}
        </Alert>
      )}

      <Button
        onClick={handlePurchase}
        loading={loading}
        variant="primary"
        className="w-full"
      >
        {product.mode === 'subscription' ? 'Subscribe Now' : 'Buy Now'}
      </Button>
    </div>
  );
};