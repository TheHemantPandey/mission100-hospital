import React from "react";
import ArticleCard from "./ArticleCard";
import { ArrowRight } from "lucide-react";

export default function CategorySection({
  categoryTitle,
  description,
  articles = [],
  onSelectCategory
}) {
  if (!articles || articles.length < 2) return null;

  const displayArticles = articles.slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto mb-20 px-4 sm:px-6 lg:px-8">
      {/* Category Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-200 gap-4">
        <div>
          <span className="text-emerald-700 text-xs font-black uppercase tracking-wider block mb-1">
            Category Spotlight
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-1">
            {categoryTitle}
          </h2>
          {description && (
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-2xl">
              {description}
            </p>
          )}
        </div>

        {onSelectCategory && (
          <button
            type="button"
            onClick={() => onSelectCategory(categoryTitle)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors cursor-pointer shrink-0 self-start sm:self-auto"
          >
            <span>View all {categoryTitle.toLowerCase()}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {displayArticles.map((article) => (
          <ArticleCard key={article.id || article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
