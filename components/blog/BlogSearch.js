"use client";

import React from "react";
import { Search, X } from "lucide-react";

export default function BlogSearch({
  searchQuery = "",
  setSearchQuery,
  totalResults = 0,
  isFiltered = false,
  onClearSearch,
  popularTopics = [
    "Full Body Checkup",
    "Heart ECG",
    "HbA1c",
    "Thyroid",
    "Vitamin D",
    "CBC Test",
    "Kidney KFT",
    "Liver LFT"
  ]
}) {
  return (
    <div className="w-full max-w-2xl mx-auto mb-4">
      <div className="relative group">
        <div className="relative flex items-center">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none transition-colors group-focus-within:text-emerald-600" />
          <input
            id="blog-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search health topics, tests, checkups..."
            className="w-full pl-12 pr-12 py-3.5 sm:py-4 bg-white border border-slate-200 rounded-2xl shadow-xs text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all font-medium"
            aria-label="Search health topics, tests, checkups"
          />
          {searchQuery && (
            <button
              onClick={() => {
                if (onClearSearch) onClearSearch();
                else setSearchQuery("");
              }}
              className="absolute right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Clear search"
              aria-label="Clear search input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Search Results Count when searching */}
        {searchQuery && (
          <div className="flex items-center justify-between mt-2.5 px-2 text-xs font-medium text-slate-500">
            <span>
              {totalResults > 0 ? (
                <span>
                  <strong className="text-slate-900 font-bold">{totalResults}</strong>{" "}
                  {totalResults === 1 ? "article found" : "articles found"}
                </span>
              ) : (
                <span className="text-amber-700 font-semibold">
                  No articles found. Try another health topic or test.
                </span>
              )}
            </span>
            <button
              type="button"
              onClick={() => {
                if (onClearSearch) onClearSearch();
                else setSearchQuery("");
              }}
              className="text-emerald-600 hover:text-emerald-800 font-bold underline cursor-pointer"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Popular Topics Quick Tags (Shown when not searching) */}
        {!searchQuery && (
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-2.5 text-xs text-slate-500">
            <span className="font-bold text-slate-600 mr-1 text-[11px] sm:text-xs">
              Popular:
            </span>
            {popularTopics.map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => setSearchQuery(topic)}
                className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:border-emerald-400 hover:text-emerald-700 transition-all font-medium text-[11px] shadow-2xs cursor-pointer"
              >
                {topic}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
