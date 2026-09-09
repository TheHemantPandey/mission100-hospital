import React from "react";
import ArticleCard from "./ArticleCard";
import { BookOpen, ArrowRight } from "lucide-react";

export default function ArticleGrid({
  articles = [],
  title = "Latest Health Insights",
  subtitle = "Practical information to help you understand your health and make informed decisions.",
  maxItems = null,
  onViewAll,
  showViewAll = false
}) {
  const displayedArticles = maxItems ? articles.slice(0, maxItems) : articles;

  return (
    <section className="max-w-7xl mx-auto mb-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-slate-200 gap-2">
        <div>
          <div className="flex items-center gap-2 text-slate-900 font-black text-xl sm:text-2xl tracking-tight mb-1">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <h2>{title}</h2>
          </div>
          {subtitle && (
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              {subtitle}
            </p>
          )}
        </div>

        {showViewAll && onViewAll && (
          <button
            type="button"
            onClick={onViewAll}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors cursor-pointer self-start sm:self-auto shrink-0"
          >
            <span>View all articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Grid: 3-column Desktop, 2-column Tablet, 1-column Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {displayedArticles.map((article) => (
          <ArticleCard key={article.id || article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
