"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import BlogHero from "@/components/blog/BlogHero";
import BlogSearch from "@/components/blog/BlogSearch";
import BlogCategoryFilter from "@/components/blog/BlogCategoryFilter";
import FeaturedArticle from "@/components/blog/FeaturedArticle";
import ArticleGrid from "@/components/blog/ArticleGrid";
import TopicExplorer from "@/components/blog/TopicExplorer";
import BlogCTA from "@/components/blog/BlogCTA";
import { FileQuestion, ArrowRight } from "lucide-react";

const CATEGORIES = [
  "All",
  "Preventive Care",
  "Health Checkups",
  "Blood Tests",
  "Diagnostics",
  "Heart Health",
  "Diabetes",
  "Senior Health",
  "Women's Health",
  "Men's Health"
];

export default function BlogsListingClient({ initialBlogs = [] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAllArticles, setShowAllArticles] = useState(false);

  // Filter only active blogs
  const activeBlogs = useMemo(() => {
    return initialBlogs.filter((b) => b.active !== false);
  }, [initialBlogs]);

  // Filter blogs based on category and search query
  const filteredBlogs = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return activeBlogs.filter((post) => {
      // Category check
      const matchesCategory =
        selectedCategory === "All" ||
        post.category?.toLowerCase() === selectedCategory.toLowerCase() ||
        (selectedCategory === "Preventive Care" &&
          (post.category === "Preventive Care" || post.category === "Preventive Healthcare")) ||
        (selectedCategory === "Diagnostics" &&
          (post.category === "Diagnostics" || post.category === "Diagnostic Tests"));

      if (!matchesCategory) return false;

      // Search check
      if (!q) return true;

      const titleMatch = post.title?.toLowerCase().includes(q);
      const excerptMatch = post.excerpt?.toLowerCase().includes(q);
      const categoryMatch = post.category?.toLowerCase().includes(q);
      const primaryKwMatch = post.primaryKeyword?.toLowerCase().includes(q);
      const secondaryKwsMatch = post.secondaryKeywords?.some((kw) =>
        kw.toLowerCase().includes(q)
      );
      const tagsMatch = post.tags?.some((t) => t.toLowerCase().includes(q));
      const contentMatch = post.content?.toLowerCase().includes(q);

      return (
        titleMatch ||
        excerptMatch ||
        categoryMatch ||
        primaryKwMatch ||
        secondaryKwsMatch ||
        tagsMatch ||
        contentMatch
      );
    });
  }, [activeBlogs, selectedCategory, searchQuery]);

  const isDefaultView = selectedCategory === "All" && !searchQuery.trim();

  // Featured Article (Only in default view)
  const featuredArticle = useMemo(() => {
    if (!isDefaultView) return null;
    return activeBlogs.find((b) => b.featured) || activeBlogs[0] || null;
  }, [activeBlogs, isDefaultView]);

  // Latest 3 Articles (excluding featured in default view)
  const latestArticles = useMemo(() => {
    if (featuredArticle && isDefaultView) {
      return activeBlogs
        .filter((b) => b.id !== featuredArticle.id)
        .slice(0, 3);
    }
    return filteredBlogs.slice(0, 3);
  }, [activeBlogs, featuredArticle, isDefaultView, filteredBlogs]);

  // More Articles / Filtered Articles Grid
  const secondaryArticles = useMemo(() => {
    if (isDefaultView) {
      // Exclude featured + latest 3
      const excludeIds = new Set([
        featuredArticle?.id,
        ...latestArticles.map((a) => a.id)
      ]);
      const remaining = activeBlogs.filter((b) => !excludeIds.has(b.id));
      return showAllArticles ? remaining : remaining.slice(0, 6);
    }
    return filteredBlogs;
  }, [activeBlogs, featuredArticle, latestArticles, isDefaultView, filteredBlogs, showAllArticles]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setShowAllArticles(false);
  };

  const handleSelectCategory = (cat) => {
    setSelectedCategory(cat);
    setSearchQuery("");
    setShowAllArticles(false);
    // Smooth scroll to the article section
    const el = document.getElementById("articles-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleViewAllArticles = () => {
    setShowAllArticles(true);
    const el = document.getElementById("articles-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20 relative overflow-hidden">
      {/* Decorative Ambient Background Glows */}
      <div className="absolute top-[-8%] left-[-10%] w-[600px] h-[600px] bg-emerald-100/35 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute top-[25%] right-[-10%] w-[550px] h-[550px] bg-teal-100/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      {/* 1. HERO SECTION */}
      <BlogHero />

      {/* 2. SEARCH BAR & CATEGORY NAVIGATION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <BlogSearch
          searchQuery={searchQuery}
          setSearchQuery={(q) => {
            setSearchQuery(q);
            setShowAllArticles(true);
          }}
          totalResults={filteredBlogs.length}
          isFiltered={selectedCategory !== "All" || !!searchQuery}
          onClearSearch={handleResetFilters}
        />

        <BlogCategoryFilter
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          setSelectedCategory={handleSelectCategory}
          totalResults={filteredBlogs.length}
          searchQuery={searchQuery}
          onResetFilters={handleResetFilters}
        />
      </section>

      {/* 3. FEATURED STORY (Top Content Hero in Default View) */}
      {featuredArticle && isDefaultView && (
        <FeaturedArticle article={featuredArticle} />
      )}

      {/* 4. LATEST HEALTH INSIGHTS (Compact 3 Cards in Default View) */}
      {isDefaultView && (
        <ArticleGrid
          articles={latestArticles}
          title="Latest Health Insights"
          subtitle="Practical information to help you understand your health and make informed decisions."
          showViewAll={true}
          onViewAll={handleViewAllArticles}
        />
      )}

      {/* 5. TOPIC EXPLORER (Compact Topic Cards) */}
      <TopicExplorer onSelectTopic={handleSelectCategory} />

      {/* 6. SELECTED CATEGORY / FILTERED ARTICLES GRID */}
      <div id="articles-section">
        {filteredBlogs.length > 0 ? (
          <section className="max-w-7xl mx-auto mb-16 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-slate-200 gap-2">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-1">
                  {isDefaultView
                    ? showAllArticles
                      ? "All Health Articles"
                      : "More Health Guides"
                    : `${selectedCategory} Articles`}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  {isDefaultView
                    ? "Browse evidence-led medical insights and diagnostic screening guides."
                    : `Showing ${filteredBlogs.length} ${filteredBlogs.length === 1 ? "article" : "articles"} in ${selectedCategory}.`}
                </p>
              </div>

              {!isDefaultView && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 underline cursor-pointer"
                >
                  Show all topics
                </button>
              )}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {secondaryArticles.map((article) => (
                <article
                  key={article.id || article.slug}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all duration-300 flex flex-col group h-full relative"
                >
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

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <Link href={`/blogs/${article.slug}`}>
                        <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug tracking-tight mb-2 group-hover:text-emerald-700 transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                      </Link>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2 font-medium">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold mt-auto">
                      <span className="text-[11px] text-slate-500 font-medium">
                        {article.readTime || article.readingTime || "7 min read"}
                      </span>

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
              ))}
            </div>

            {/* Load More Button in Default View when not yet expanded */}
            {isDefaultView && !showAllArticles && activeBlogs.length > 10 && (
              <div className="mt-10 text-center">
                <button
                  type="button"
                  onClick={() => setShowAllArticles(true)}
                  className="px-8 py-3.5 rounded-2xl bg-white border border-slate-300 text-slate-900 font-bold text-xs uppercase tracking-wider hover:bg-slate-900 hover:text-white hover:border-slate-900 shadow-2xs hover:shadow transition-all duration-200 cursor-pointer active:scale-95"
                >
                  View All {activeBlogs.length} Articles
                </button>
              </div>
            )}
          </section>
        ) : (
          /* Empty Search / Filter State */
          <section className="max-w-2xl mx-auto my-12 px-4">
            <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 text-center shadow-xs">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-4 text-emerald-600">
                <FileQuestion className="w-7 h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                No Articles Found
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed font-medium">
                We couldn&apos;t find any articles matching &ldquo;
                <strong className="text-slate-900">{searchQuery}</strong>&rdquo;. Try
                searching for another health topic, test, or checkup.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Clear Search
                </button>
                <Link
                  href="/find-a-test"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-xs uppercase tracking-wider hover:bg-emerald-100 transition-colors"
                >
                  Explore Diagnostic Tests
                </Link>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* 7. MISSION100 SERVICE CTA */}
      <BlogCTA />
    </div>
  );
}
