"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-green-500 w-full border-b border-green-200 relative z-50">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3">
          <span className="text-2xl font-bold text-green-900">Mission100</span>
        </a>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-green-900 rounded-lg md:hidden hover:bg-green-600 focus:outline-none"
          aria-expanded={mobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

        {/* Desktop Menu & Mobile Dropdown Container */}
        <div className={`${mobileMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto mt-4 md:mt-0`}>
          <ul className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8 font-medium bg-green-500 md:bg-transparent p-4 md:p-0 rounded-lg md:border-0 border border-green-400">
            <li>
              <a href="#" className="block text-green-900 hover:text-white md:hover:text-green-800 font-bold">
                Home
              </a>
            </li>

            {/* Dropdown */}
            <li className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between w-full text-green-900 hover:text-white md:hover:text-green-800 font-bold"
              >
                Dropdown ⌄
              </button>

              {dropdownOpen && (
                <div className="md:absolute static top-8 left-0 mt-2 md:mt-0 bg-white border border-green-200 rounded-md shadow-md w-full md:w-40 z-10">
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-green-100">Dashboard</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-green-100">Settings</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-green-100">Earnings</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-green-100">Sign out</a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li>
              <a href="#" className="block text-green-900 hover:text-white md:hover:text-green-800 font-bold">
                Services
              </a>
            </li>

            <li>
              <a href="#" className="block text-green-900 hover:text-white md:hover:text-green-800 font-bold">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;