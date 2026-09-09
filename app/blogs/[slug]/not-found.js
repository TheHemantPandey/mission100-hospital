import React from "react";
import Link from "next/link";
import { FileQuestion, ArrowLeft, BookOpen, Search } from "lucide-react";

export default function BlogNotFound() {
  return (
    <div className="min-h-[70vh] bg-slate-50 text-slate-800 flex items-center justify-center px-4 py-20">
      <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 text-center max-w-lg mx-auto shadow-md">
        <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto mb-6 text-amber-600">
          <FileQuestion className="w-8 h-8" />
        </div>

        <span className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-2 block">
          404 Error • Article Not Found
        </span>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 tracking-tight">
          Health Guide Not Found
        </h1>

        <p className="text-slate-600 text-sm leading-relaxed mb-8">
          The medical guide or diagnostic article you are looking for may have
          been moved, archived, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/blogs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Blogs</span>
          </Link>
          <Link
            href="/find-a-test"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-all"
          >
            <Search className="w-4 h-4" />
            <span>Explore Tests</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
