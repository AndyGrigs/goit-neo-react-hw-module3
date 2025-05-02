
import React from "react";

const Hreader = () => {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="ml-2 text-xl font-bold text-gray-900">
              AndyGigs(🚀)
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {/* <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
                Get Started
              </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Hreader;
