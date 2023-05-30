
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const Deals = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch data
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      // set state when the data is received
      setData(data);
    };

    fetchData();
  }, []);
  
  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <h1 className="text-3xl font-bold mb-4">Deals</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Deal 1 */}
        <div className="border rounded p-4">
          <img
            src="pink.jpg"
            alt="Deal 1"
            className="w-full mb-2"
          />
          <h2 className="text-lg font-semibold mb-1">Deal 1 Title</h2>
          <p className="text-gray-600 mb-2">Deal 1 description.</p>
          <span className="text-green-600 text-lg">$29.99</span>
        </div>

        {/* Deal 2 */}
        <div className="border rounded p-4">
          <img
            src="purple.jpg"
            alt="Deal 2"
            className="w-full mb-2"
          />
          <h2 className="text-lg font-semibold mb-1">Deal 2 Title</h2>
          <p className="text-gray-600 mb-2">Deal 2 description.</p>
          <span className="text-green-600 text-lg">$19.99</span>
        </div>

        {/* Deal 3 */}
        <div className="border rounded p-4">
          <img
            src="pods.jpg"
            alt="Deal 3"
            className="w-full mb-2"
          />
          <h2 className="text-lg font-semibold mb-1">Deal 3 Title</h2>
          <p className="text-gray-600 mb-2">Deal 3 description.</p>
          <span className="text-green-600 text-lg">$39.99</span>
        </div>

        {/* Deal 4 */}
        <div className="border rounded p-4">
          <img
            src="prod-2.jpg"
            alt="Deal 4"
            className="w-full mb-2"
          />
          <h2 className="text-lg font-semibold mb-1">Deal 4 Title</h2>
          <p className="text-gray-600 mb-2">Deal 4 description.</p>
          <span className="text-green-600 text-lg">$24.99</span>
        </div>
      </div>
    </div>
  );
};

export default Deals;
