import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Tag, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Our E-Commerce Store
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover amazing products at great prices. Shop with confidence and enjoy
          our secure shopping experience.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <ShoppingBag className="h-12 w-12 mx-auto text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Quality Products</h2>
          <p className="text-gray-600">
            Browse through our carefully curated collection of products
          </p>
          <Link
            to="/products"
            className="mt-4 inline-block text-blue-600 hover:text-blue-800"
          >
            Shop Now →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Tag className="h-12 w-12 mx-auto text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Great Deals</h2>
          <p className="text-gray-600">
            Find the best prices and exclusive offers on our products
          </p>
          <Link
            to="/products"
            className="mt-4 inline-block text-blue-600 hover:text-blue-800"
          >
            View Deals →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Users className="h-12 w-12 mx-auto text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Join Us</h2>
          <p className="text-gray-600">
            Create an account to enjoy member benefits and faster checkout
          </p>
          <Link
            to="/register"
            className="mt-4 inline-block text-blue-600 hover:text-blue-800"
          >
            Register →
          </Link>
        </div>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-8">
          Why Choose Our Store?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            'Secure Payments',
            'Fast Shipping',
            '24/7 Support',
            'Easy Returns',
          ].map((feature) => (
            <div
              key={feature}
              className="text-center p-4 border border-gray-200 rounded-lg"
            >
              <span className="font-medium text-gray-800">{feature}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}