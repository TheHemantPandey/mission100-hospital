"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  X,
  Sparkles,
  Calendar,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileQuestion,
  PhoneCall,
  Activity,
  ChevronRight,
  BookOpen
} from "lucide-react";

export default function BlogsListingClient({ initialBlogs = [] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter only active blogs
  const activeBlogs = useMemo(() => {
    return initialBlogs.filter((b) => b.active !== false);
  }, [initialBlogs]);

  // Extract unique categories dynamically
  const categories = useMemo(() => {
    const cats = new Set(activeBlogs.map((b) => b.category).filter(Boolean));
    return ["All", ...Array.from(cats)];
  }, [activeBlogs]);

  // Filter blogs based on category and search query
  const filteredBlogs = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return activeBlogs.filter((post) => {
      // Category check
      const matchesCategory =
        selectedCategory === "All" ||
        post.category?.toLowerCase() === selectedCategory.toLowerCase();

      if (!matchesCategory) return false;

      // Search query check
      if (!q) return true;

      const titleMatch = post.title?.toLowerCase().includes(q);
      const excerptMatch = post.excerpt?.toLowerCase().includes(q);
      const categoryMatch = post.category?.toLowerCase().includes(q);
      const primaryKwMatch = post.primaryKeyword?.toLowerCase().includes(q);
      const secondaryKwsMatch = post.secondaryKeywords?.some((kw) =>
        kw.toLowerCase().includes(q)
      );
      const contentSnippetMatch = post.content?.toLowerCase().includes(q);

      return (
        titleMatch ||
        excerptMatch ||
        categoryMatch ||
        primaryKwMatch ||
        secondaryKwsMatch ||
        contentSnippetMatch
      );
    });
  }, [activeBlogs, selectedCategory, searchQuery]);

  // Identify featured article (only shown when on "All" and no search query)
  const isDefaultView = selectedCategory === "All" && !searchQuery.trim();
  const featuredArticle = useMemo(() => {
    if (!isDefaultView) return null;
    return activeBlogs.find((b) => b.featured) || activeBlogs[0] || null;
  }, [activeBlogs, isDefaultView]);

  // List of remaining articles in the grid
  const gridArticles = useMemo(() => {
    if (featuredArticle && isDefaultView) {
      return filteredBlogs.filter((b) => b.id !== featuredArticle.id);
    }
    return filteredBlogs;
  }, [filteredBlogs, featuredArticle, isDefaultView]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-24 relative overflow-hidden">
      {/* Decorative Brand Ambient Background Glows */}
      <div className="absolute top-[-8%] left-[-10%] w-[650px] h-[650px] bg-emerald-100/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-10%] w-[550px] h-[550px] bg-teal-100/35 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-8%] w-[500px] h-[500px] bg-cyan-100/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      {/* ========================================================================= */}
      {/* 1. HERO & SEARCH SECTION                                                  */}
      {/* ========================================================================= */}
      <section className="pt-20 sm:pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        {/* Breadcrumb indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs text-slate-600 text-xs font-bold uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
          <span>Mission100 Health &amp; Longevity Journal</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
          Health &amp; Wellness Insights for a{" "}
          <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
            Longer, Stronger Life.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium mb-10">
          Explore evidence-led medical guides, diagnostic test explanations,
          preventive health protocols, and longevity insights clinically verified
          by Mission100 Hospital.
        </p>

        {/* Live Client-Side Search Box */}
        <div className="max-w-2xl mx-auto relative group">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none transition-colors group-focus-within:text-emerald-600" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search diagnostic tests, heart health, prediabetes, vitamins, DEXA..."
              className="w-full pl-12 pr-12 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all"
              aria-label="Search articles by title, topic, or keyword"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                title="Clear search"
                aria-label="Clear search query"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick topic tags suggestion */}
          {!searchQuery && (
            <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs text-slate-500">
              <span className="font-semibold text-slate-600">Popular:</span>
              {[
                "Preventive Checkup",
                "Heart ECG",
                "Prediabetes",
                "Blood Test Report",
                "Vitamin D",
                "DEXA Bone Density"
              ].map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSearchQuery(topic)}
                  className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:border-emerald-400 hover:text-emerald-700 transition-all"
                >
                  {topic}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CATEGORY NAVIGATION PILLS                                              */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 pt-1 scrollbar-none gap-2 border-b border-slate-200/70">
          {categories.map((cat) => {
            const isSelected =
              selectedCategory.toLowerCase() === cat.toLowerCase();
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider whitespace-nowrap transition-all duration-200 border ${
                  isSelected
                    ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:bg-slate-50"
                }`}
              >
                {cat === "All" ? "All Insights" : cat}
              </button>
            );
          })}
        </div>

        {/* Results summary when filtered or searching */}
        {(selectedCategory !== "All" || searchQuery) && (
          <div className="flex items-center justify-between mt-4 text-xs text-slate-500 font-medium">
            <span>
              Showing{" "}
              <strong className="text-slate-900 font-bold">
                {filteredBlogs.length}
              </strong>{" "}
              {filteredBlogs.length === 1 ? "article" : "articles"}
              {selectedCategory !== "All" && (
                <>
                  {" "}
                  in <span className="text-emerald-700 font-bold">{selectedCategory}</span>
                </>
              )}
              {searchQuery && (
                <>
                  {" "}
                  matching &ldquo;<span className="text-slate-900 font-bold">{searchQuery}</span>&rdquo;
                </>
              )}
            </span>
            <button
              onClick={handleResetFilters}
              className="text-emerald-600 hover:text-emerald-800 font-bold underline transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* 3. FEATURED ARTICLE BANNER (Top Spotlight)                                */}
      {/* ========================================================================= */}
      {featuredArticle && isDefaultView && (
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Image Column */}
              <div className="lg:col-span-6 overflow-hidden rounded-2xl bg-slate-100 relative aspect-16/10">
                <img
                  src={featuredArticle.image || "/hospital-building.jpg"}
                  alt={featuredArticle.imageAlt || featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                <div className="absolute top-4 left-4 z-10 flex gap-2">
                  <span className="px-3 py-1 rounded-lg bg-emerald-600 text-white text-xs font-black uppercase tracking-wider shadow-sm">
                    Featured Guide
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-slate-900/90 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
                    {featuredArticle.category}
                  </span>
                </div>
              </div>

              {/* Text Column */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                {/* Meta info */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                    {featuredArticle.publishedAt}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    {featuredArticle.readTime}
                  </span>
                  {featuredArticle.medicalReviewer && (
                    <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Clinically Reviewed
                    </span>
                  )}
                </div>

                <Link href={`/blogs/${featuredArticle.slug}`}>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4 group-hover:text-emerald-700 transition-colors">
                    {featuredArticle.title}
                  </h2>
                </Link>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-medium line-clamp-3">
                  {featuredArticle.excerpt}
                </p>

                {/* Key takeaway snippet */}
                {featuredArticle.keyTakeaways && featuredArticle.keyTakeaways.length > 0 && (
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-150 mb-6 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5 font-bold text-slate-800 mb-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Key Clinical Insight:
                    </div>
                    <p className="line-clamp-2">
                      {featuredArticle.keyTakeaways[0]}
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between pt-2">
                  <Link
                    href={`/blogs/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm hover:shadow transition-all group/btn"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                  <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                    By {featuredArticle.author}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 4. ARTICLES GRID (3-Col Desktop, 2-Col Tablet, 1-Col Mobile)               */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        {gridArticles.length > 0 ? (
          <div>
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-600" />
                {isDefaultView ? "Latest Medical Guides" : "Search Results"}
              </h2>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                {gridArticles.length} {gridArticles.length === 1 ? "Guide" : "Guides"} Available
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {gridArticles.map((post) => (
                <article
                  key={post.id || post.slug}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md hover:border-emerald-300 transition-all duration-300 flex flex-col group"
                >
                  {/* Card Image */}
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="block relative aspect-16/10 bg-slate-100 overflow-hidden"
                  >
                    <img
                      src={post.image || "/hospital-building.jpg"}
                      alt={post.imageAlt || post.title}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-lg bg-slate-900/90 text-white text-[11px] font-bold uppercase tracking-wider backdrop-blur-xs shadow-xs">
                        {post.category}
                      </span>
                    </div>
                  </Link>

                  {/* Card Content Body */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Meta Date & Read Time */}
                      <div className="flex items-center gap-3 text-xs text-slate-500 font-semibold mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                          {post.publishedAt}
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-emerald-600" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Card Title */}
                      <Link href={`/blogs/${post.slug}`}>
                        <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug tracking-tight mb-2.5 group-hover:text-emerald-700 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                      </Link>

                      {/* Excerpt */}
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 font-medium">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Footer / CTA & Reviewer badge */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                      {post.medicalReviewer ? (
                        <div className="flex items-center gap-1.5 text-[11px] text-slate-600 font-bold">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{post.medicalReviewer.name}</span>
                        </div>
                      ) : (
                        <span className="text-[11px] text-slate-500 font-semibold">
                          Mission100 Editorial
                        </span>
                      )}

                      <Link
                        href={`/blogs/${post.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors group/link"
                      >
                        <span>Read Guide</span>
                        <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : (
          /* ========================================================================= */
          /* 5. EMPTY SEARCH STATE                                                     */
          /* ========================================================================= */
          <div className="bg-white rounded-3xl border border-slate-200 p-10 sm:p-14 text-center max-w-2xl mx-auto shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-5 text-emerald-600">
              <FileQuestion className="w-8 h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
              No Health Guides Found
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              We couldn&apos;t find any articles matching &ldquo;
              <strong className="text-slate-900">{searchQuery}</strong>&rdquo; in{" "}
              {selectedCategory === "All" ? "all categories" : selectedCategory}.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleResetFilters}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors"
              >
                Reset Search Filters
              </button>
              <Link
                href="/find-a-test"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-xs uppercase tracking-wider hover:bg-emerald-100 transition-colors"
              >
                Explore Diagnostic Tests
              </Link>
            </div>
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* 6. CONTEXTUAL HEALTH CHECKUP PROMOTIONAL BANNER                           */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-slate-800">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/30">
              <Activity className="w-3.5 h-3.5" />
              Proactive Diagnostic Care
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-4 leading-tight">
              Don&apos;t Wait for Symptoms to Show. Check Your Health Today.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              Book our doctor-curated 69-parameter Complete Health Checkup or
              doorstep Heart ECG test across Delhi NCR. Certified phlebotomists,
              hygienic doorstep collection, and digital reports reviewed by senior physicians.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/test/complete-health-checkup"
                className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm tracking-wide shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
              >
                Book Complete Checkup (₹1,999)
              </Link>
              <Link
                href="/find-a-test"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/15 transition-all"
              >
                Browse 60+ Diagnostic Tests
              </Link>
              <a
                href="tel:+918796471583"
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white px-3 py-2 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Helpline: +91 87964 71583</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
