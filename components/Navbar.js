"use client";
import React, { useState, memo, useEffect, useRef } from "react";
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
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navRef = useRef(null);

  const closeMenu = () => {
    setMobileServicesOpen(false);
    setDesktopServicesOpen(false);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileServicesOpen(false);
        setDesktopServicesOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    // FIX APPLIED HERE: Moved sticky classes to the wrapper div
    <div ref={navRef} className="sticky top-0 z-100 w-full">
      {/* ========================================= */}
      {/* 1. TOP NAVBAR (Sticky on ALL devices)     */}
      {/* ========================================= */}
      <nav className="bg-white w-full border-b border-gray-100 shadow-sm relative">
        <div className="max-w-7xl flex items-center justify-between mx-auto p-3 px-4 sm:px-6">
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
              className="shrink-0 object-contain w-10 h-10 sm:w-12 sm:h-12"
            />
            <span className="text-base sm:text-xl lg:text-2xl font-extrabold tracking-tight text-gray-900 whitespace-nowrap">
              Mission100 <span className="hidden sm:inline text-green-600">Hospital</span>
            </span>
          </Link>

          {/* Hamburger Menu Button for Mobile & Tablet (visible on screens < xl) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden flex items-center justify-center p-2 text-gray-600 hover:text-green-600 focus:outline-none transition-colors rounded-lg hover:bg-gray-100"
            aria-label="Toggle navigation menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>

          {/* Desktop Only: Navigation Links */}
          <div className="hidden xl:block w-auto">
            <ul className="flex flex-row items-center font-medium space-x-4 lg:space-x-6 xl:space-x-8">
              <li className="hidden xl:block">
                <Link href="/" className="text-gray-700 hover:text-green-600">
                  Home
                </Link>
              </li>
              <li className="hidden xl:block">
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-green-600"
                >
                  About
                </Link>
              </li>
              <li className="hidden xl:block">
                <Link
                  href="/memberships"
                  className="text-gray-700 hover:text-green-600"
                >
                  Membership
                </Link>
              </li>

              {/* SERVICES DROPDOWN - Desktop Hover */}
              <li
                className="relative group"
                onMouseEnter={() => setDesktopServicesOpen(true)}
                onMouseLeave={() => setDesktopServicesOpen(false)}
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setDesktopServicesOpen(!desktopServicesOpen);
                  }}
                  className="flex items-center gap-1 text-gray-700 group-hover:text-green-600 py-2"
                >
                  Services
                  <svg
                    className={`w-4 h-4 transition-transform ${desktopServicesOpen ? "rotate-180" : ""}`}
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

                {desktopServicesOpen && (
                  <div className="absolute left-0 mt-0 w-72 bg-white border border-gray-100 rounded-xl shadow-xl z-110 overflow-hidden">
                    <div className="py-2">
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
                  className="text-gray-700 hover:text-green-600"
                >
                  Find a Test
                </Link>
              </li>

              <li className="hidden lg:block">
                <Link
                  href="/careers"
                  className="text-gray-700 hover:text-green-600"
                >
                  Careers
                </Link>
              </li>


              {/* Desktop Call to Action Button */}
              <li>
                <Link
                  href="/book-test"
                  className="inline-block text-center px-4 py-2 lg:px-5 lg:py-2.5 bg-green-600 text-white rounded-full font-bold hover:bg-green-700 transition-all active:scale-95 text-xs lg:text-sm xl:text-base whitespace-nowrap"
                >
                  <span className="md:inline lg:hidden xl:hidden">Book Appt</span>
                  <span className="hidden lg:inline xl:hidden">Book Consultation</span>
                  <span className="hidden xl:inline">Book consultation Now</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile & Tablet Dropdown Navigation Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 shadow-inner px-4 py-3">
            <ul className="flex flex-col space-y-2 font-bold text-gray-700">
              <li>
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="block py-2 px-3 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={closeMenu}
                  className="block py-2 px-3 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/memberships"
                  onClick={closeMenu}
                  className="block py-2 px-3 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors"
                >
                  Membership
                </Link>
              </li>
              <li>
                <Link
                  href="/find-a-test"
                  onClick={closeMenu}
                  className="block py-2 px-3 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors"
                >
                  Find a Test
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block py-2 px-3 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  onClick={closeMenu}
                  className="block py-2 px-3 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/book-test"
                  onClick={closeMenu}
                  className="block text-center py-2.5 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 active:scale-95 transition-all"
                >
                  Book Consultation Now
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* ========================================= */}
      {/* 2. MOBILE BOTTOM NAVIGATION BAR           */}
      {/* ========================================= */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-100 flex justify-around items-center px-1 py-1 pb-2 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        {/* 1. Find a Test */}
        <Link
          href="/find-a-test"
          onClick={closeMenu}
          className="flex flex-col items-center justify-center p-2 text-gray-600 hover:text-green-600 w-full"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
            <circle cx="11.5" cy="14.5" r="2.5" />
            <path d="M13.3 16.3 15 18" />
          </svg>
          <span className="text-[10px] mt-1 font-medium">Find a Test</span>
        </Link>

        {/* 2. Book Appt */}
        <Link
          href="/book-test"
          onClick={closeMenu}
          className="flex flex-col items-center justify-center p-2 text-gray-600 hover:text-green-600 w-full"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
          <span className="text-[10px] mt-1 font-medium">Book Appt</span>
        </Link>

        {/* 3. Home */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex flex-col items-center justify-center p-2 text-gray-600 hover:text-green-600 w-full"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span className="text-[10px] mt-1 font-medium">Home</span>
        </Link>

        {/* 4. Membership */}
        <Link
          href="/memberships"
          onClick={closeMenu}
          className="flex flex-col items-center justify-center p-2 text-gray-600 hover:text-green-600 w-full transition-colors"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
            <line x1="6" x2="10" y1="15" y2="15" />
          </svg>
          <span className="text-[10px] mt-1 font-medium">Membership</span>
        </Link>

        {/* 5. Compact Services Drop-up */}
        <div className="relative flex flex-col items-center justify-center w-full">
          {/* Floating Drop-up Box (Restricted Height) */}
          {mobileServicesOpen && (
            <div className="absolute bottom-full right-2 mb-2 w-56 max-h-90 overflow-y-auto bg-white border border-gray-200 rounded-xl shadow-[0_-10px_20px_rgba(0,0,0,0.1)] z-120">
              <div className="py-2">
                <div className="px-4 py-2 font-bold text-gray-900 text-sm border-b border-gray-100 sticky top-0 bg-white z-10">
                  Our Services
                </div>
                {demoServices.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    onClick={closeMenu}
                    className="block px-4 py-3 text-xs text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors border-b border-gray-50 last:border-0"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Toggle Button */}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className={`flex flex-col items-center justify-center p-2 w-full transition-colors ${mobileServicesOpen ? "text-green-600" : "text-gray-600"}`}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileServicesOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
            <span className="text-[10px] mt-1 font-medium">
              {mobileServicesOpen ? "Close" : "Services"}
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default memo(Navbar);
