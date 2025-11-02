import React from 'react';
import { ProductCard } from '../components/stripe/ProductCard';
import { SubscriptionStatus } from '../components/stripe/SubscriptionStatus';
import { stripeProducts } from '../stripe-config';
import { useAuth } from '../hooks/useAuth';

export const Products: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Please sign in to view products
          </h2>
          <a
            href="/login"
            className="text-blue-600 hover:text-blue-500 font-medium"
          >
            Sign in here
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Our Products
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="mb-8">
          <SubscriptionStatus />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stripeProducts.map((product) => (
            <ProductCard key={product.priceId} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};