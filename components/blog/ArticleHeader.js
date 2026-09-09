import React from "react";
import { Calendar, Clock, Stethoscope, ShieldCheck } from "lucide-react";
import { ShareButtons } from "@/app/blogs/[slug]/BlogArticleInteractive";

export default function ArticleHeader({ article }) {
  if (!article) return null;

  return (
    <header className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-10 text-left">
      {/* Category Pill */}
      <div className="mb-4">
        <span className="inline-block px-3.5 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-black uppercase tracking-wider shadow-2xs">
          {article.category}
        </span>
      </div>

      {/* Main H1 Title */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.18] mb-6">
        {article.title}
      </h1>

      {/* Lead Excerpt */}
      {article.excerpt && (
        <p className="text-base sm:text-xl text-slate-600 font-medium leading-relaxed mb-8">
          {article.excerpt}
        </p>
      )}

      {/* Author, Clinical Reviewer & Date Bar */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-600 font-semibold">
          {/* Medical Reviewer */}
          {article.medicalReviewer ? (
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                <Stethoscope className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-1 text-emerald-800 font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>
                    Medically reviewed by {article.medicalReviewer.name}, {article.medicalReviewer.qualification}
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">
                  {article.medicalReviewer.specialty || "Clinical Reviewer"}
                </span>
              </div>
            </div>
          ) : (
            <div>
              <span className="font-bold text-slate-800 block">
                {article.author}
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                Mission100 Hospital
              </span>
            </div>
          )}

          <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>

          {/* Date */}
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-emerald-600" />
            <span>Updated {article.updatedAt || article.publishedAt || "Sep 2026"}</span>
          </div>

          {/* Read Time */}
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-emerald-600" />
            <span>{article.readTime || article.readingTime || "8 min read"}</span>
          </div>
        </div>

        {/* Social Share */}
        <div className="pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
          <ShareButtons title={article.title} slug={article.slug} />
        </div>
      </div>
    </header>
  );
}
