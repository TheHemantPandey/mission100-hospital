import React from "react";
import Link from "next/link";
import ArticleCard from "./ArticleCard";
import { ArrowRight } from "lucide-react";

export default function RelatedArticles({ relatedArticles = [] }) {
  if (!relatedArticles || relatedArticles.length === 0) return null;

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-24">
      <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
        <div>
          <span className="text-emerald-600 text-xs font-black uppercase tracking-wider block mb-1">
            Continue Reading
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            You May Also Like
          </h2>
        </div>
        <Link
          href="/blogs"
          className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
        >
          <span>View all articles</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedArticles.slice(0, 3).map((article) => (
          <ArticleCard key={article.id || article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
