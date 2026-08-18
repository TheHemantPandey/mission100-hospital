"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MembershipsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-16">
      {/* Header section (Very compact) */}
      <header className="max-w-5xl mx-auto text-center px-4 pt-10 pb-8 sm:pt-14 sm:pb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Choose Your Membership
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-550 font-medium">
          Select a membership plan to continue.
        </p>
      </header>

      {/* Grid container */}
      <main className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-stretch">
          
          {/* 1. INDIVIDUAL PLANS CARD */}
          <Link 
            href="/individual-membership-plans" 
            className="group flex flex-col justify-between bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl border border-slate-100 hover:border-green-200 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="relative w-full rounded-xl overflow-hidden border border-slate-100 bg-white">
                <Image
                  src="/individual-plans.png"
                  alt="Individual Membership Plans"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                  priority
                />
              </div>
              <h2 className="text-xl font-bold text-center text-slate-900 group-hover:text-green-600 transition-colors duration-300">
                Individual Membership
              </h2>
            </div>
            <div className="mt-6">
              <div className="w-full py-3 px-4 rounded-xl font-bold text-sm text-center bg-green-600 text-white group-hover:bg-green-700 shadow-sm transition-colors duration-300">
                View Individual Plans
              </div>
            </div>
          </Link>

          {/* 2. CORPORATE PLANS CARD */}
          <Link 
            href="/buy-corporate-membership" 
            className="group flex flex-col justify-between bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl border border-slate-100 hover:border-indigo-200 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="relative w-full rounded-xl overflow-hidden border border-slate-100 bg-white">
                <Image
                  src="/corporate-plans.png"
                  alt="Corporate Membership Plans"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                  priority
                />
              </div>
              <h2 className="text-xl font-bold text-center text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">
                Corporate Membership
              </h2>
            </div>
            <div className="mt-6">
              <div className="w-full py-3 px-4 rounded-xl font-bold text-sm text-center bg-indigo-600 text-white group-hover:bg-indigo-700 shadow-sm transition-colors duration-300">
                View Corporate Plans
              </div>
            </div>
          </Link>

        </div>
      </main>
    </div>
  );
}
