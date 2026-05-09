"use client";
import React, { useState, memo } from "react";
import Image from "next/image";
import Link from "next/link";

// Memoized Service List to prevent re-calculating on every render
const demoServices = [
  {
    name: "Heart Attack Prevention",
    href: "/services/heart-attack-prevention",
  },
  { name: "Mental Health Stress", href: "/services/mental-health-stress" },
  { name: "Anti-Aging Science", href: "/services/anti-aging-science" },
  { name: "Body & Bone Strength", href: "/services/bone-strength" },
  { name: "Yoga & Ayurveda", href: "/services/yoga-ayurveda" },
  {
    name: "Metabolic & Sugar Control",
    href: "/services/metabolic-sugar-control",
  },
  { name: "Vitamins", href: "/services/Vitamins" },
  {
    name: "Happiness & Emotional Vitality",
    href: "/services/happiness-emotional-vitality",
  },
  { name: "Longevity Modeling", href: "/services/longevity-modeling" },
  { name: "Behavioral Analysis", href: "/services/behavioral-analysis" },
  { name: "Body Preservation", href: "/services/body-preservation" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav className="bg-white w-full border-b border-gray-100 sticky top-0 z-100 shadow-sm">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-3 px-4 sm:px-6">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center space-x-2"
          onClick={closeMenu}
        >
          <Image
            src="/main-logo1.png"
            alt="Mission100 Hospital Logo"
            width={54}
            height={54}
            className="shrink-0 object-contain"
          />
          <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-gray-900">
            Mission100 <span className="text-green-600">Hospital</span>
          </span>
        </Link>
        {/* Hamburger Icon for Mobile/Foldables */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg focus:outline-none"
          aria-label="Toggle menu"
        >
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
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${mobileMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:items-center font-medium mt-4 md:mt-0 md:space-x-6 lg:space-x-8 space-y-2 md:space-y-0 pb-4 md:pb-0">
            <li>
              <Link
                href="/"
                onClick={closeMenu}
                className="block py-2 text-gray-700 hover:text-green-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={closeMenu}
                className="block py-2 text-gray-700 hover:text-green-600"
              >
                About
              </Link>
            </li>

            {/* SERVICES DROPDOWN - Logic for Hover/Click */}
            <li
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full md:w-auto gap-1 text-gray-700 group-hover:text-green-600 py-2"
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* DATA OPTIMIZATION: Only render the list if Services is open (Mobile) or being hovered (Desktop) */}
              {servicesOpen && (
                <div className="md:absolute left-0 mt-0 w-full md:w-72 bg-white md:border border-gray-100 rounded-xl md:shadow-xl z-110 overflow-hidden">
                  <div className="py-2 pl-4 md:pl-0 border-l-2 border-green-100 md:border-l-0">
                    {demoServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        onClick={closeMenu}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors border-b border-gray-50 last:border-0"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>

            <li>
              <Link
                href="/find-a-test"
                onClick={closeMenu}
                className="block py-2 text-gray-700 hover:text-green-600"
              >
                Find a Test
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="block py-2 text-gray-700 hover:text-green-600"
              >
                Contact
              </Link>
            </li>

            {/* Call to Action Button */}
            <li className="pt-2 md:pt-0">
              <Link
                href="/book-appointment"
                className="block md:inline-block text-center px-6 py-2.5 bg-green-600 text-white rounded-full font-bold hover:bg-green-700 transition-all active:scale-95 text-sm lg:text-base"
                onClick={closeMenu}
              >
                Book consultation Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
