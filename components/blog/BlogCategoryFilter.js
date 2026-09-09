"use client";

import React from "react";

export default function BlogCategoryFilter({
  categories = [],
  selectedCategory = "All",
  setSelectedCategory,
  totalResults = 0,
  searchQuery = "",
  onResetFilters
}) {
  return (
    <div className="w-full max-w-7xl mx-auto mb-10">
      {/* Editorial Category Navigation Pills (Single row, horizontally scrollable on mobile) */}
      <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-2 pt-1 scrollbar-none gap-1.5 sm:gap-2 border-b border-slate-200/80">
        {categories.map((cat) => {
          const isSelected =
            selectedCategory.toLowerCase() === cat.toLowerCase();
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 rounded-xl font-bold text-xs whitespace-nowrap transition-all duration-200 border cursor-pointer ${
                isSelected
                  ? "bg-slate-900 text-white border-slate-900 shadow-2xs"
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Filter Status Summary when a category is selected (and not already in search results view) */}
      {selectedCategory !== "All" && !searchQuery && (
        <div className="flex items-center justify-between mt-3 px-2 text-xs text-slate-500 font-medium">
          <span>
            Showing <strong className="text-slate-900 font-bold">{totalResults}</strong>{" "}
            {totalResults === 1 ? "article" : "articles"} in{" "}
            <span className="text-emerald-700 font-bold">{selectedCategory}</span>
          </span>
          <button
            type="button"
            onClick={onResetFilters}
            className="text-emerald-600 hover:text-emerald-800 font-bold underline cursor-pointer"
          >
            Show all articles
          </button>
        </div>
      )}
    </div>
  );
}
