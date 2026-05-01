"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, FlaskConical, Wallet } from 'lucide-react';
import testsData from '@/data/tests.json';

export default function FindATest() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = testsData.filter(pkg =>
    pkg.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f3f4f6] py-10 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-10 text-gray-900">
          Health Packages
        </h1>

        {/* Search Box: Kept the pl-16 fix to prevent overlap */}
        <div className="relative max-w-2xl mx-auto mb-16">
          <input
            type="text"
            placeholder="Search Health Packages..."
            className="w-full p-5 pl-16 rounded-2xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-red-500 outline-none text-xl bg-white"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={28} />
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filtered.map((pkg) => (
            <div 
              key={pkg.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col hover:shadow-xl transition-all duration-300"
            >
              {/* Card Image */}
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="h-full w-full object-cover" 
                />
              </div>

              {/* Card Content */}
              <div className="p-6 grow">
                
                {/* Test Name: Truncate for single line */}
                <h2 
                  className="font-bold text-lg md:text-xl text-center text-gray-900 mb-8 truncate px-2" 
                  title={pkg.title}
                >
                  {pkg.title}
                </h2>

                {/* Info Row */}
                <div className="flex justify-between items-center mb-8">
                  
                  {/* Left: Parameters (Text size reduced for Desktop) */}
                  <div className="flex items-center gap-2">
                    <FlaskConical size={24} className="text-gray-500 shrink-0" />
                    <div>
                      <p className="font-bold text-gray-800 text-sm lg:text-[13px] whitespace-nowrap">
                        {pkg.totalParameters} Parameters
                      </p>
                      <p className="text-[10px] text-gray-500 font-medium">Included</p>
                    </div>
                  </div>

                  {/* Right: Amount (Text size reduced for Desktop) */}
                  <div className="flex items-center gap-2">
                    <Wallet size={24} className="text-gray-500 shrink-0" />
                    <div className="text-right">
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">Amount</p>
                      <p className="font-black text-gray-900 text-lg lg:text-base">
                        ₹{pkg.currentPrice}
                      </p>
                    </div>
                  </div>
                </div>

                {/* View Details Button */}
                <Link href={`/test/${pkg.slug}`}>
                  <button className="w-full bg-[#E50914] text-white py-3 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-red-700 transition-colors shadow-sm">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-500 text-2xl font-medium">
            No health packages found matching "{searchQuery}"
          </div>
        )}
      </div>
    </div>
  );
}