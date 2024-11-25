import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Truck } from 'lucide-react';

export default function OrderConfirmation() {
  const orderNumber = Math.floor(Math.random() * 1000000);

  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Order Confirmed!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order #{orderNumber} has been confirmed.
        </p>

        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <Package className="h-5 w-5" />
            <span>Order is being processed</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <Truck className="h-5 w-5" />
            <span>Estimated delivery: 3-5 business days</span>
          </div>
        </div>

        <div className="space-x-4">
          <Link
            to="/products"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Continue Shopping
          </Link>
          <Link
            to="/profile"
            className="inline-block text-blue-600 hover:text-blue-800"
          >
            View Order Status
          </Link>
        </div>
      </div>
    </div>
  );
}