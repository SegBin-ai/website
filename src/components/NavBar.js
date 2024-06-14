import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-200 shadow-lg fixed w-full z-50 opacity-90">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold text-blue-500">
          <a href="/">TerraVortex</a>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="/offer" className="text-gray-700 hover:text-blue-500">Products</a>
          <a href="/contact" className="text-gray-700 hover:text-blue-500">Contact</a>
          <a href="/about" className="text-gray-700 hover:text-blue-500">About Us</a>
        </div>
        <div className="hidden md:block">
          <a href="/" className="border border-blue-500 px-4 py-2 rounded text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300">Home</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <a href="/offer" className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white">Products</a>
          <a href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white">Contact</a>
          <a href="/about" className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white">About Us</a>
          <a href="/" className="block px-4 py-2 text-blue-500 border border-blue-500 rounded mt-2 mx-4 text-center hover:bg-blue-500 hover:text-white">Home</a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;