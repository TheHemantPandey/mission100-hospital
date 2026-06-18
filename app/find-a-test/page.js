"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

import {
  Search,
  FlaskConical,
  Wallet,
  ArrowRight,
  ShieldCheck,
  HeartPulse,
  Sparkles,
} from "lucide-react";

import testsData from "@/data/tests.json";

export default function FindATest() {
  const [searchQuery, setSearchQuery] = useState("");

  // FILTER TESTS
  const filteredTests = useMemo(() => {
    return testsData.filter((pkg) =>
      pkg.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-cyan-50/40 to-green-50/40">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-12 pt-14 sm:pt-20 pb-14">

        {/* BLUR EFFECTS */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-200/30 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto">

          {/* TOP LABEL */}
          <div className="flex justify-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-green-100 bg-white px-5 py-2 shadow-sm">

              <Sparkles className="w-4 h-4 text-green-600" />

              <span className="text-sm font-semibold text-green-700">
                Preventive Healthcare Packages
              </span>
            </div>
          </div>

          {/* HEADING */}
          <div className="mt-7 text-center">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
              Find The Right
              <span className="block bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">
                Health Test
              </span>
            </h1>

          </div>

          {/* FEATURES */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <div className="flex items-center gap-2 rounded-2xl bg-white px-5 py-3 shadow-sm border border-gray-100">
              <ShieldCheck className="w-5 h-5 text-green-600" />

              <span className="text-sm font-semibold text-gray-700">
                Trusted Diagnostics
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-2xl bg-white px-5 py-3 shadow-sm border border-gray-100">
              <HeartPulse className="w-5 h-5 text-cyan-600" />

              <span className="text-sm font-semibold text-gray-700">
                Preventive Health Focus
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-2xl bg-white px-5 py-3 shadow-sm border border-gray-100">
              <FlaskConical className="w-5 h-5 text-green-600" />

              <span className="text-sm font-semibold text-gray-700">
                Comprehensive Packages
              </span>
            </div>
          </div>

          {/* SEARCH BAR */}
          <div className="mt-12 max-w-3xl mx-auto">

            <div className="relative group">

              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-cyan-500 rounded-3xl blur-xl opacity-15 group-focus-within:opacity-25 transition-all"></div>

              <div className="relative bg-white rounded-3xl shadow-xl border border-white/60 overflow-hidden">

                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />

                <input
                  type="text"
                  placeholder="Search health packages..."
                  value={searchQuery}
                  onChange={(e) =>
                    setSearchQuery(e.target.value)
                  }
                  className="w-full bg-transparent pl-14 pr-5 py-5 sm:py-6 text-base sm:text-lg text-gray-800 placeholder:text-gray-400 outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEST GRID */}
      <section className="px-4 sm:px-6 lg:px-12 pb-20">

        <div className="max-w-7xl mx-auto">

          {/* RESULTS COUNT */}
          <div className="flex items-center justify-between mb-8 flex-wrap gap-3">

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Available Packages
            </h2>

            <div className="px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm text-sm font-semibold text-gray-700">
              {filteredTests.length} Packages Found
            </div>
          </div>

          {/* CARDS */}
          {filteredTests.length > 0 ? (

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-8">

              {filteredTests.map((pkg) => (
                <div
                  key={pkg.id}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/50 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >

                  {/* CARD GLOW */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-100/30 rounded-full blur-3xl"></div>

                  {/* IMAGE */}
                  <div className="relative aspect-[16/10] overflow-hidden">

                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

                    {/* BADGE */}
                    <div className="absolute top-4 left-4">

                      <div className="rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-green-700 shadow-sm">
                        Health Package
                      </div>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="relative p-6">

                    {/* TITLE */}
                    <h3 className="text-xl font-bold text-gray-900 leading-snug line-clamp-2 min-h-[60px]">
                      {pkg.title}
                    </h3>

                    {/* INFO */}
                    <div className="mt-6 grid grid-cols-2 gap-4">

                      {/* PARAMETERS */}
                      <div className="rounded-2xl bg-gradient-to-b from-green-50 to-white border border-green-100 p-4">

                        <div className="flex items-center gap-3">

                          <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm">
                            <FlaskConical className="w-5 h-5 text-green-600" />
                          </div>

                          <div>
                            <p className="text-xs uppercase tracking-wide text-gray-400 font-bold">
                              Parameters
                            </p>

                            <p className="text-lg font-black text-gray-900">
                              {pkg.totalParameters}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* PRICE */}
                      <div className="rounded-2xl bg-gradient-to-b from-cyan-50 to-white border border-cyan-100 p-4">

                        <div className="flex items-center gap-3">

                          <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm">
                            <Wallet className="w-5 h-5 text-cyan-600" />
                          </div>

                          <div>
                            <p className="text-xs uppercase tracking-wide text-gray-400 font-bold">
                              Price
                            </p>

                            <p className="text-lg font-black text-gray-900">
                              ₹{pkg.currentPrice}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* BUTTON */}

                    <Link
                      href={`/test/${pkg.slug}`}
                      className="mt-7 w-full flex items-center justify-center gap-2 rounded-xl bg-green-500 bg-gradient-to-r from-green-500 to-cyan-500 px-5 py-4 text-white font-bold shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                    >
                      View Details
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>                  </div>
                </div>
              ))}
            </div>
          ) : (

            /* EMPTY STATE */
            <div className="rounded-[2rem] bg-white border border-gray-100 shadow-lg p-10 sm:p-16 text-center">

              <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-green-500 to-cyan-500 flex items-center justify-center mx-auto shadow-lg">

                <Search className="w-10 h-10 text-white" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                No Packages Found
              </h3>

              <p className="mt-3 text-gray-600 max-w-xl mx-auto leading-relaxed">
                We could not find any health package matching
                <span className="font-semibold text-gray-900">
                  {" "}
                  "{searchQuery}"
                </span>
                . Try searching with another keyword.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}