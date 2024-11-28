import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useOrder } from '../context/OrderContext';
import { CheckCircle, Package, Truck, ShoppingBag } from 'lucide-react';

export const OrderConfirmation: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { state } = useOrder();
  const order = state.orders.find(o => o.id === orderId);

  if (!order) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Order not found</h2>
        <p className="mt-2 text-gray-600">The order you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center space-x-2 text-indigo-600 hover:text-indigo-500"
        >
          <ShoppingBag className="h-5 w-5" />
          <span>Continue Shopping</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
        <h1 className="mt-4 text-3xl font-bold text-gray-900">Order Confirmed!</h1>
        <p className="mt-2 text-lg text-gray-600">
          Thank you for your order. We'll send you shipping confirmation soon.
        </p>
      </div>

      <div className="mt-12 bg-white rounded-lg shadow-md p-6">
        <div className="border-b pb-4">
          <h2 className="text-lg font-semibold text-gray-900">Order #{order.id.slice(0, 8)}</h2>
          <p className="text-sm text-gray-500">Placed on {new Date(order.createdAt).toLocaleDateString()}</p>
        </div>

        <div className="mt-6">
          <h3 className="text-base font-medium text-gray-900 mb-4">Order Status</h3>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 text-green-500">
              <CheckCircle className="h-5 w-5" />
              <span>Order Confirmed</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Package className="h-5 w-5" />
              <span>Processing</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Truck className="h-5 w-5" />
              <span>Shipped</span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-base font-medium text-gray-900 mb-4">Order Details</h3>
          <div className="space-y-4">
            {order.items.map((item) => (
              <div key={item.id} className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                </div>
                <p className="font-medium text-gray-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t pt-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Total</p>
            <p>${order.total.toFixed(2)}</p>
          </div>
        </div>

        <div className="mt-8 border-t pt-6">
          <h3 className="text-base font-medium text-gray-900 mb-4">Shipping Address</h3>
          <address className="text-gray-600 not-italic">
            {order.shippingAddress.fullName}<br />
            {order.shippingAddress.streetAddress}<br />
            {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.postalCode}<br />
            {order.shippingAddress.country}
          </address>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-indigo-600 hover:text-indigo-500"
        >
          <ShoppingBag className="h-5 w-5" />
          <span>Continue Shopping</span>
        </Link>
      </div>
    </div>
  );
};