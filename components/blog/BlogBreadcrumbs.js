import React from "react";
import Link from "next/link";
import { ChevronRight, ArrowLeft } from "lucide-react";

export default function BlogBreadcrumbs({ category, title }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="pt-20 sm:pt-24 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <ol className="flex items-center space-x-2 text-xs text-slate-500 font-semibold overflow-x-auto scrollbar-none py-1">
          <li>
            <Link href="/" className="hover:text-emerald-700 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          </li>
          <li>
            <Link
              href="/blogs"
              className="hover:text-emerald-700 transition-colors"
            >
              Blogs
            </Link>
          </li>
          {category && (
            <>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </li>
              <li className="text-emerald-700 font-bold">
                {category}
              </li>
            </>
          )}
        </ol>

        <Link
          href="/blogs"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-emerald-700 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all articles</span>
        </Link>
      </div>
    </nav>
  );
}
