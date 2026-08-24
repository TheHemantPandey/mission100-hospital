"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, ArrowRight, Clock, User, Calendar, Sparkles, ChevronRight } from "lucide-react";
import blogsData from "../../data/blogs.json";

export default function BlogLandingPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get active articles
  const activeBlogs = blogsData.filter((b) => b.active);

  // Extract unique categories dynamically
  const categories = ["All", ...new Set(activeBlogs.map((b) => b.category))];

  // Identify featured article
  const featuredArticle = activeBlogs.find((b) => b.featured) || activeBlogs[0];

  // Filtered articles (excluding the main featured one from latest listing)
  const filteredBlogs = activeBlogs.filter((b) => {
    const matchesCategory = selectedCategory === "All" || b.category === selectedCategory;
    const isNotFeatured = b.id !== featuredArticle?.id;
    return matchesCategory && isNotFeatured;
  });

  // Split into secondary and standard weights for hierarchical grid layout
  const secondaryBlogs = filteredBlogs.slice(0, 2);
  const remainingBlogs = filteredBlogs.slice(2);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-24 relative overflow-hidden">
      
      {/* Decorative Background Glows */}
      <div className="absolute top-[-10%] left-[-15%] w-[600px] h-[600px] bg-emerald-100/35 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-[30%] right-[-10%] w-[600px] h-[600px] bg-cyan-100/30 rounded-full blur-3xl -z-10"></div>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/60 shadow-xs text-slate-500 text-xs font-extrabold uppercase tracking-widest mb-6">
          <Sparkles className="w-4 h-4 text-emerald-500" /> Mission100 Health & Longevity Journal
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-none mb-6">
          Knowledge for a Longer,<br />
          <span className="bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
            Healthier Life.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
          Evidence-led perspectives on preventive healthcare, longevity, nutrition, fitness and everyday wellbeing.
        </p>
      </section>

      {/* Category Filter Navigation */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 scrollbar-none gap-2 border-b border-slate-250/50">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4.5 py-2.5 rounded-xl font-bold text-xs border whitespace-nowrap transition-all duration-300 uppercase tracking-wider ${
                selectedCategory === cat
                  ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                  : "bg-white text-slate-550 border-slate-200 hover:border-slate-350 hover:bg-slate-50"
              }`}
            >
              {cat === "All" ? "All Insights" : cat}
            </button>
          ))}
        </div>
      </section>

      {/* FEATURED ARTICLE (Large Aspect Ratio) */}
      {featuredArticle && (
        <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-24">
          <div className="flex flex-col gap-8 group">
            
            {/* Visual Cover Image */}
            <div className="w-full aspect-16/9 bg-slate-100 rounded-3xl overflow-hidden relative shadow-md">
              <img
                src={featuredArticle.image || "/hospital-building.jpg"}
                alt={featuredArticle.title}
                className="w-full h-full object-fill group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                loading="eager"
              />
              <div className="absolute top-6 left-6 z-10">
                <span className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 text-white text-xs font-black uppercase tracking-wider border border-white/10 backdrop-blur-xs">
                  Featured Article
                </span>
              </div>
            </div>

            {/* Featured Article Text Block */}
            <div className="max-w-4xl">
              <span className="text-emerald-600 text-xs font-black uppercase tracking-widest block mb-3">
                {featuredArticle.category}
              </span>
              <Link href={`/blog/${featuredArticle.slug}`}>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight mb-4 hover:text-emerald-600 transition-colors">
                  {featuredArticle.title}
                </h2>
              </Link>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium mb-6 max-w-3xl">
                {featuredArticle.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-semibold text-slate-400 mb-6">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-slate-350" /> {featuredArticle.author}
                </span>
                <span className="w-1.5 h-1.5 bg-slate-200 rounded-full"></span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-slate-350" /> {featuredArticle.publishedAt}
                </span>
                <span className="w-1.5 h-1.5 bg-slate-200 rounded-full"></span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-slate-350" /> {featuredArticle.readTime}
                </span>
              </div>

              <Link
                href={`/blog/${featuredArticle.slug}`}
                className="inline-flex items-center gap-1.5 font-black text-sm text-slate-900 hover:text-emerald-600 transition-colors group/link"
              >
                READ ARTICLE <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>

          </div>
        </section>
      )}

      {/* LATEST INSIGHTS SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/50 pt-20 mb-24">
        
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">Latest Insights</h2>
        </div>

        {filteredBlogs.length > 0 ? (
          <div className="space-y-20">
            
            {/* Visual Weight 2: Secondary 2-Column Grid */}
            {secondaryBlogs.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {secondaryBlogs.map((post) => (
                  <div key={post.id} className="group flex flex-col gap-6">
                    <div className="aspect-3/2 bg-slate-100 rounded-3xl overflow-hidden shadow-xs relative">
                      <img
                        src={post.image || "/hospital-building.jpg"}
                        alt={post.title}
                        className="w-full h-full object-fill group-hover:scale-[1.03] transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <span className="text-emerald-600 text-xs font-black uppercase tracking-wider block mb-2">
                        {post.category}
                      </span>
                      <Link href={`/blog/${post.slug}`}>
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors mb-3 leading-snug tracking-tight">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3 font-medium">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-400 border-t border-slate-100 pt-4 mt-2">
                        <span>{post.publishedAt} &middot; {post.readTime}</span>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1.5 font-extrabold text-sm text-slate-950 hover:text-emerald-650 transition-colors"
                        >
                          READ ARTICLE <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Visual Weight 3: Standard 3-Column Grid */}
            {remainingBlogs.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {remainingBlogs.map((post) => (
                  <div key={post.id} className="group bg-white rounded-3xl border border-slate-200/80 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                    <div>
                      <div className="aspect-3/2 bg-slate-100 rounded-2xl overflow-hidden mb-5 shadow-2xs">
                        <img
                          src={post.image || "/hospital-building.jpg"}
                          alt={post.title}
                          className="w-full h-full object-fill group-hover:scale-[1.03] transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <span className="text-emerald-600 text-xs font-black uppercase tracking-wider block mb-2">
                        {post.category}
                      </span>
                      <Link href={`/blog/${post.slug}`}>
                        <h3 className="text-lg font-black text-slate-900 group-hover:text-emerald-600 transition-colors mb-3 leading-snug">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-xs sm:text-sm text-slate-500 line-clamp-3 mb-6 leading-relaxed font-medium">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="border-t border-slate-100 pt-4 mt-2">
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-4">
                        <span>{post.publishedAt}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> {post.readTime}
                        </span>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 font-extrabold text-xs sm:text-sm text-slate-950 hover:text-emerald-600 transition-colors"
                      >
                        READ ARTICLE <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200/50 max-w-2xl mx-auto shadow-xs">
            <BookOpen className="w-12 h-12 text-slate-350 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">No articles found</h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
              Try selecting another category to view health and wellness insights.
            </p>
          </div>
        )}

      </section>

      {/* FROM MISSION100 SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200/50 pt-20 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider mb-3">
            Corporate Resources
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase">
            From Mission100
          </h2>
          <p className="mt-4 text-base text-slate-500 font-medium">
            Practical health information and resources from the Mission100 Hospital network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="group bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div className="aspect-16/10 bg-slate-100 overflow-hidden">
              <img
                src="/hospital-building.jpg"
                alt="Preventive Health & Regular Checkups"
                className="w-full h-full object-fill group-hover:scale-[1.03] transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-black text-slate-900 mb-3 uppercase">
                Preventive Health & Regular Checkups
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6">
                Understand why regular health monitoring can help you take a more proactive approach to your health.
              </p>
              <Link
                href="/memberships"
                className="inline-flex items-center gap-1 font-extrabold text-sm text-slate-900 hover:text-emerald-500 transition-colors group/link1"
              >
                EXPLORE <ChevronRight className="w-4 h-4 transition-transform group-hover/link1:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div className="aspect-16/10 bg-slate-100 overflow-hidden">
              <img
                src="/nurse.png"
                alt="Our Medical Experts"
                className="w-full h-full object-fill group-hover:scale-[1.03] transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-black text-slate-900 mb-3 uppercase">
                Our Medical Experts
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6">
                Meet the professionals helping Mission100 deliver comprehensive health and wellness support.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1 font-extrabold text-sm text-slate-900 hover:text-emerald-500 transition-colors group/link2"
              >
                EXPLORE <ChevronRight className="w-4 h-4 transition-transform group-hover/link2:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROACTIVE HEALTH CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-slate-950 text-white rounded-4xl p-8 sm:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl translate-y-16 -translate-x-16"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight mb-4 uppercase">
              TAKE A MORE PROACTIVE APPROACH TO YOUR HEALTH
            </h3>
            <p className="text-slate-405 text-sm sm:text-base leading-relaxed mb-10 font-medium">
              Your health is more than treating symptoms. Understand your health. Monitor your risks. Make informed decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm mx-auto">
              <Link
                href="/memberships"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-all duration-300"
              >
                EXPLORE PLANS
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/15 transition-all duration-300"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
