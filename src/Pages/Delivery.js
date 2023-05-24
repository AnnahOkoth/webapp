import React from 'react';
import Navbar from '../components/Navbar';

const Delivery = () => {
  return (
    <div className="container mx-auto p-4">
        <Navbar />
      <h1 className="text-3xl font-bold mb-4">Delivery</h1>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-2">Shipping Information</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
            semper elit. Suspendisse nec convallis erat. Mauris varius rhoncus
            massa at cursus. Ut sed dapibus metus.
          </p>

          <h2 className="text-xl font-semibold mb-2">Delivery Options</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Standard Delivery - 3-5 business days</li>
            <li>Express Delivery - 1-2 business days</li>
            <li>Next Day Delivery - order before 12 PM</li>
          </ul>
        </div>

        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-2">Track Your Order</h2>
          <p className="text-gray-600 mb-4">
            Enter your order ID and email address to track your order.
          </p>

          <form className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Order ID"
              className="border border-gray-300 rounded p-2"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded p-2"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded"
            >
              Track Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
