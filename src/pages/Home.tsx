import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { SubscriptionStatus } from '../components/stripe/SubscriptionStatus';
import { Button } from '../components/ui/Button';
import { signOut } from '../lib/auth';

export const Home: React.FC = () => {
  const { user, loading } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">KiFit Nutrition</h1>
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <span className="text-gray-700">Welcome, {user.email}</span>
                  <Link to="/products">
                    <Button variant="outline">Products</Button>
                  </Link>
                  <Button onClick={handleSignOut} variant="secondary">
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="outline">Sign In</Button>
                  </Link>
                  <Link to="/signup">
                    <Button variant="primary">Sign Up</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Welcome to KiFit Nutrition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aprendizagem nutricional para crianças - Educational nutrition content designed specifically for children
          </p>
        </div>

        {user && (
          <div className="max-w-2xl mx-auto mb-8">
            <SubscriptionStatus />
          </div>
        )}

        <div className="text-center">
          {user ? (
            <Link to="/products">
              <Button variant="primary" size="lg">
                View Our Products
              </Button>
            </Link>
          ) : (
            <div className="space-x-4">
              <Link to="/signup">
                <Button variant="primary" size="lg">
                  Get Started
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg">
                  Sign In
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};