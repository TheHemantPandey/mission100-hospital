"use client";
import React, { useState } from "react";
import Link from "next/link"; // Recommended for Next.js

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Helper for nav links to keep code clean
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-green-100 w-full border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-2">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">M</span>
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-gray-900">
            Mission<span className="text-green-600">100</span>
          </span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none transition-colors"
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Menu Container */}
        <div
          className={`${mobileMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto mt-4 md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-8 font-semibold">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block py-2 px-3 text-gray-700 hover:text-green-600 transition-colors rounded md:p-0"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Dropdown */}
            <li className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between w-full py-2 px-3 text-gray-700 hover:text-green-600 transition-colors rounded md:p-0"
              >
                Features
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="md:absolute static top-full left-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl hover:shadow-green-500/10 transition-all w-full md:w-48 z-60 overflow-hidden">
                  <ul className="py-2 text-sm text-gray-600">
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 hover:bg-green-50 hover:text-green-600 transition-colors"
                      >
                        Vitality Testing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 hover:bg-green-50 hover:text-green-600 transition-colors"
                      >
                        Ayurveda Guide
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 hover:bg-green-50 hover:text-green-600 transition-colors"
                      >
                        Appointments
                      </Link>
                    </li>
                    <li className="border-t border-gray-50 mt-1">
                      <Link
                        href="#"
                        className="block px-4 py-2 text-red-500 hover:bg-red-50 transition-colors"
                      >
                        Sign out
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* CTA Button */}
            <li>
              <button className="w-full md:w-auto px-5 py-2 bg-green-600 text-white rounded-full font-bold hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30 transition-all active:scale-95">
                Join Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
