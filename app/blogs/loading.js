import React from "react";

export default function BlogsLoading() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-24 pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-pulse">
      {/* Hero Skeleton */}
      <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center">
        <div className="h-6 w-48 bg-slate-200 rounded-full mb-6"></div>
        <div className="h-12 w-3/4 bg-slate-200 rounded-2xl mb-4"></div>
        <div className="h-5 w-full bg-slate-200 rounded-lg mb-8"></div>
        <div className="h-14 w-full max-w-xl bg-slate-200 rounded-2xl"></div>
      </div>

      {/* Category Pills Skeleton */}
      <div className="flex justify-center gap-2 mb-16 overflow-hidden">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-9 w-24 bg-slate-200 rounded-xl shrink-0"></div>
        ))}
      </div>

      {/* Featured Card Skeleton */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 aspect-16/10 bg-slate-200 rounded-2xl"></div>
        <div className="lg:col-span-6 flex flex-col justify-center gap-4">
          <div className="h-4 w-32 bg-slate-200 rounded-md"></div>
          <div className="h-8 w-full bg-slate-200 rounded-xl"></div>
          <div className="h-4 w-full bg-slate-200 rounded-md"></div>
          <div className="h-4 w-2/3 bg-slate-200 rounded-md"></div>
          <div className="h-10 w-40 bg-slate-200 rounded-xl mt-4"></div>
        </div>
      </div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
          >
            <div className="aspect-16/10 bg-slate-200"></div>
            <div className="p-6 space-y-3">
              <div className="h-4 w-24 bg-slate-200 rounded-md"></div>
              <div className="h-6 w-full bg-slate-200 rounded-lg"></div>
              <div className="h-4 w-full bg-slate-200 rounded-md"></div>
              <div className="h-4 w-3/4 bg-slate-200 rounded-md"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
