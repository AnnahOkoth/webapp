import React from 'react';
import { Link } from 'react-router-dom';
export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-xl text-gray-800 mb-4">Oops! Page not found.</p>
        <p className="text-gray-600 mb-4">The page you are looking for does not exist.</p>
        <Link to="/" className="text-blue-500 hover:underline">Go back to home</Link>
      </div>
    </div>
  );
}