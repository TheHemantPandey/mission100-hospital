import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function ArticleCard({ article }) {
  if (!article) return null;

  return (
    <article className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all duration-300 flex flex-col group h-full relative">
      {/* Card Image */}
      <Link
        href={`/blogs/${article.slug}`}
        className="block relative aspect-16/10 bg-slate-100 overflow-hidden"
      >
        <img
          src={article.image || "/hospital-building.jpg"}
          alt={article.imageAlt || article.title}
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-0.5 rounded-md bg-slate-900/90 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs shadow-2xs">
            {article.category}
          </span>
        </div>
      </Link>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Title with strict 2-line clamp */}
          <Link href={`/blogs/${article.slug}`}>
            <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug tracking-tight mb-2 group-hover:text-emerald-700 transition-colors line-clamp-2">
              {article.title}
            </h3>
          </Link>

          {/* Short 1-2 line description with strict 2-line clamp */}
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2 font-medium">
            {article.excerpt}
          </p>
        </div>

        {/* Card Footer: Reviewer / Read Time & Subtle Arrow */}
        <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold mt-auto">
          {article.medicalReviewer ? (
            <div className="flex items-center gap-1 text-[11px] text-emerald-800 font-bold truncate max-w-[150px]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="truncate">{article.medicalReviewer.name}</span>
            </div>
          ) : (
            <span className="text-[11px] text-slate-500 font-medium">
              {article.readTime || article.readingTime || "7 min read"}
            </span>
          )}

          <Link
            href={`/blogs/${article.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors group/link shrink-0 ml-2"
          >
            <span>Read article</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
