import React from 'react';
import Navbar from '../components/Navbar';

const WhatsNew = () => {
  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <h1 className="text-3xl font-bold mb-4">What's New</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* New Item 1 */}
        <div className="border rounded p-4">
          <img
            src="https://example.com/new1.jpg"
            alt="New Item 1"
            className="w-full mb-2"
          />
          <h2 className="text-lg font-semibold mb-1">New Item 1 Title</h2>
          <p className="text-gray-600 mb-2">New Item 1 description.</p>
          <span className="text-green-600 text-lg">$49.99</span>
        </div>

        {/* New Item 2 */}
        <div className="border rounded p-4">
          <img
            src="https://example.com/new2.jpg"
            alt="New Item 2"
            className="w-full mb-2"
          />
          <h2 className="text-lg font-semibold mb-1">New Item 2 Title</h2>
          <p className="text-gray-600 mb-2">New Item 2 description.</p>
          <span className="text-green-600 text-lg">$39.99</span>
        </div>

        {/* New Item 3 */}
        <div className="border rounded p-4">
          <img
            src="https://example.com/new3.jpg"
            alt="New Item 3"
            className="w-full mb-2"
          />
          <h2 className="text-lg font-semibold mb-1">New Item 3 Title</h2>
          <p className="text-gray-600 mb-2">New Item 3 description.</p>
          <span className="text-green-600 text-lg">$59.99</span>
        </div>

        {/* New Item 4 */}
        <div className="border rounded p-4">
          <img
            src="https://example.com/new4.jpg"
            alt="New Item 4"
            className="w-full mb-2"
          />
          <h2 className="text-lg font-semibold mb-1">New Item 4 Title</h2>
          <p className="text-gray-600 mb-2">New Item 4 description.</p>
          <span className="text-green-600 text-lg">$54.99</span>
        </div>
      </div>
    </div>
  );
};

export default WhatsNew;
