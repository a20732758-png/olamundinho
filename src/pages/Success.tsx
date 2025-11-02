import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const Success: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="bg-white py-8 px-6 shadow rounded-lg">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <svg
              className="h-6 w-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Payment Successful!
          </h2>
          
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. Your payment has been processed successfully.
          </p>
          
          <div className="space-y-3">
            <Link to="/products">
              <Button variant="primary" className="w-full">
                View Products
              </Button>
            </Link>
            
            <Link to="/">
              <Button variant="outline" className="w-full">
                Go to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};