import React from "react";
import { FiShoppingCart,FiUser } from "react-icons/fi";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative w-full rounded-sm flex flex-wrap items-center justify-center px-2 py-3 bg-green-800">
        <div className="container w-full px-4 mx-auto flex flex-wrap items-center justify-center">
          <div className="w-full relative flex justify-evenly items-center text-white">
            <div>
                <img
                src="logo.png"
                className="h-12"
                />
                
            </div>
            <div>
                <ul className="flex gap-3 cursor-pointer">
                    <li>Categories</li>
                    <li>Deals</li>
                    <li>Whats New</li>
                    <li>Delivery</li>
                </ul>
            </div>
            <div>
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
            </div>
            <div className="flex items-center cursor-pointer gap-3">
                <FiUser />
                <span>Account</span>
            </div>
            <div className="flex items-center cursor-pointer gap-3">
                <FiShoppingCart />
                <span>Cart</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}