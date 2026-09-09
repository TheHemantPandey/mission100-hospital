import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function FeaturedArticle({ article }) {
  if (!article) return null;

  return (
    <section className="max-w-7xl mx-auto mb-16 px-4 sm:px-6 lg:px-8">
      <div className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-8 lg:p-9 shadow-xs hover:shadow-md transition-shadow duration-300 group">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Image Column (50-55% on desktop) */}
          <div className="lg:col-span-6 xl:col-span-7 overflow-hidden rounded-2xl bg-slate-100 relative aspect-16/10 sm:aspect-16/9 lg:aspect-16/10">
            <img
              src={article.image || "/hospital-building.jpg"}
              alt={article.imageAlt || article.title}
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
              loading="eager"
            />
            <div className="absolute top-3.5 left-3.5 z-10 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-lg bg-emerald-600 text-white text-xs font-black uppercase tracking-wider shadow-2xs">
                Featured Story
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900/90 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
                {article.category}
              </span>
            </div>
          </div>

          {/* Text Column (45-50% on desktop) */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
            {/* Category Eyebrow */}
            <div className="mb-2">
              <span className="text-emerald-700 text-xs font-black uppercase tracking-wider">
                {article.category}
              </span>
            </div>

            {/* Large Title */}
            <Link href={`/blogs/${article.slug}`}>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 leading-tight tracking-tight mb-3 group-hover:text-emerald-700 transition-colors line-clamp-3">
                {article.title}
              </h2>
            </Link>

            {/* Short Description (2-3 lines) */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-medium line-clamp-2">
              {article.excerpt}
            </p>

            {/* Reviewer / Meta info */}
            <div className="pt-3 border-t border-slate-100 mb-5 flex flex-wrap items-center gap-3 text-xs text-slate-500 font-semibold">
              {article.medicalReviewer ? (
                <span className="inline-flex items-center gap-1 text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/80">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Reviewed by {article.medicalReviewer.name}</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/80">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Medically Reviewed</span>
                </span>
              )}
              <span className="text-slate-400">•</span>
              <span>{article.readTime || article.readingTime || "8 min read"}</span>
              <span className="text-slate-400">•</span>
              <span>Updated {article.updatedAt || "Sep 2026"}</span>
            </div>

            {/* Read Article Action */}
            <div>
              <Link
                href={`/blogs/${article.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors group/btn"
              >
                <span>Read article</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
