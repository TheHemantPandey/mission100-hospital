"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const demoServices = [
    { name: "Full Body Checkup", href: "/services/checkup" },
    { name: "DNA Longevity Test", href: "/services/dna" },
    { name: "Ayurvedic Consultation", href: "/services/ayurveda" },
    { name: "Vitality Indexing", href: "/services/vitality" },
    { name: "Nutritional Planning", href: "/services/nutrition" },
    { name: "Sleep Optimization", href: "/services/sleep" },
    { name: "Bio-Hacking Guide", href: "/services/bio-hacking" },
    { name: "Heart Health Monitor", href: "/services/heart" },
    { name: "Stress Management", href: "/services/stress" },
    { name: "Anti-Aging Therapy", href: "/services/anti-aging" },
  ];

  const aboutSubTabs = [
    { name: "Our Vision", href: "/about/vision" },
    { name: "The Team", href: "/about/team" },
    { name: "Scientific Research", href: "/about/science" },
    { name: "Success Stories", href: "/about/stories" },
    { name: "Contact Us", href: "/about/contact" },
  ];

  return (
    <nav className="bg-white w-full border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-3 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">M</span>
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-gray-900">
            Mission<span className="text-green-600">100</span>
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className={`${mobileMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:items-center font-medium mt-4 md:mt-0 md:space-x-8 space-y-4 md:space-y-0">
            <li>
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">Home</Link>
            </li>

            {/* ABOUT DROPDOWN */}
            <li className="relative group">
              <button className="flex items-center gap-1 text-gray-700 group-hover:text-green-600 transition-colors py-2">
                About
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-2 transition-all duration-300 z-50 overflow-hidden">
                <div className="py-2">
                  {aboutSubTabs.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors border-b border-gray-50 last:border-0"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {/* SERVICES DROPDOWN */}
            <li className="relative group">
              <button className="flex items-center gap-1 text-gray-700 group-hover:text-green-600 transition-colors py-2">
                Services
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-0 w-64 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-2 transition-all duration-300 z-50 overflow-hidden">
                <div className="py-2">
                  {demoServices.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors border-b border-gray-50 last:border-0"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            <li>
              <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</Link>
            </li>
            
            <li>
              <button className="px-6 py-2 bg-green-600 text-white rounded-full font-bold hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30 transition-all active:scale-95">
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