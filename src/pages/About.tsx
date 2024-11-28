import React from 'react';
import { Store, Users, Award, Clock } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About ShopHub</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your premier destination for cutting-edge electronics and tech accessories.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2024, ShopHub has grown from a small startup to a leading online electronics retailer. 
            We're passionate about bringing the latest technology to our customers at competitive prices.
          </p>
          <p className="text-gray-600">
            Our commitment to quality, customer service, and innovation has made us the trusted choice 
            for tech enthusiasts and casual users alike.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
            <h3 className="font-bold text-gray-900">10K+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Store className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
            <h3 className="font-bold text-gray-900">1000+</h3>
            <p className="text-gray-600">Products</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Award className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
            <h3 className="font-bold text-gray-900">50+</h3>
            <p className="text-gray-600">Awards</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Clock className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
            <h3 className="font-bold text-gray-900">24/7</h3>
            <p className="text-gray-600">Support</p>
          </div>
        </div>
      </div>

      <div className="bg-indigo-50 rounded-2xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Quality First</h3>
            <p className="text-gray-600">
              We carefully curate our product selection to ensure only the highest quality items.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Customer Focus</h3>
            <p className="text-gray-600">
              Your satisfaction is our top priority, with dedicated support and easy returns.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600">
              We stay ahead of tech trends to bring you the latest and greatest products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};