import React from 'react';
import Navbar from '../components/Navbar';

const Account = () => {
  return (
    <div className="container mx-auto p-4">
        <Navbar />
      <h1 className="text-3xl font-bold mb-4">Account</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Personal Information */}
        <div className="border rounded p-4">
          <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Enter your first name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Enter your last name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
            >
              Save Changes
            </button>
          </form>
        </div>

        {/* Order History */}
        <div className="border rounded p-4">
          <h2 className="text-lg font-semibold mb-4">Order History</h2>
          <ul className="divide-y">
            <li className="py-2">
              <span className="text-gray-600">Order #12345</span>
              <span className="text-green-600 font-semibold">Delivered</span>
            </li>
            <li className="py-2">
              <span className="text-gray-600">Order #67890</span>
              <span className="text-yellow-600 font-semibold">Processing</span>
            </li>
            <li className="py-2">
              <span className="text-gray-600">Order #54321</span>
              <span className="text-red-600 font-semibold">Cancelled</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Account;
