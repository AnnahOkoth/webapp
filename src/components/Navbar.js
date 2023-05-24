import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiUser, FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="relative w-full rounded-sm flex flex-wrap items-center justify-center px-2 py-3 bg-green-800">
        <div className="container w-full flex flex-wrap items-center justify-evenly">
          <div className="w-full relative flex items-center text-white">
            <div>
              <img src="logo.png" className="h-12" alt="Logo" />
            </div>
            <div className="hidden md:block">
              <ul className="flex gap-3 cursor-pointer">
                <Link to="/Category">Category</Link>
                <Link to="/Deals">Deals</Link>
                <Link to="/WhatsNew">Whats New</Link>
                <Link to="/Delivery">Delivery</Link>
              </ul>
            </div>
            {/* <div>
              <form className="max-w-sm px-4">
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full h-4 py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                  />
                </div>
              </form>
            </div> */}
            <div className="flex items-center cursor-pointer gap-3 md:hidden" onClick={toggleMobileMenu}>
              <FiMenu />
              <span>Menu</span>
            </div>
            <div className="flex items-center cursor-pointer gap-3">
              <FiUser />
              <Link to="/Account">Account</Link>
            </div>
            <div className="flex items-center cursor-pointer gap-3">
              <FiShoppingCart />
              <Link to="/Cart">Cart</Link>

            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 transform translate-x-full transition-transform duration-300 ease-in-out">
            <div className="flex flex-col items-center gap-3 mt-6">
              <li>Categories</li>
              <li>Deals</li>
              <li>Whats New</li>
              <li>Delivery</li>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
