import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, User, Calendar, ShieldAlert, BookOpen } from "lucide-react";
import blogsData from "../../../data/blogs.json";

// Dynamic metadata generator for SEO matching Next.js 15+ specifications
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogsData.find((b) => b.slug === slug && b.active);
  if (!post) return { title: "Article Not Found | Mission100" };
  
  return {
    title: `${post.title} | Mission100 Insights`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author]
    }
  };
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  
  // Find current article
  const post = blogsData.find((b) => b.slug === slug && b.active);
  if (!post) {
    notFound();
  }

  // Find 3 related active articles
  const activeBlogs = blogsData.filter((b) => b.active && b.id !== post.id);
  let relatedBlogs = activeBlogs.filter((b) => b.category === post.category);
  
  // Fallback to other active articles if not enough in same category
  if (relatedBlogs.length < 3) {
    const diffCategory = activeBlogs.filter((b) => b.category !== post.category);
    relatedBlogs = [...relatedBlogs, ...diffCategory].slice(0, 3);
  } else {
    relatedBlogs = relatedBlogs.slice(0, 3);
  }

  // Schema Markup JSON-LD object
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mission100 Hospital",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mission100hospital.com/main-logo1.png"
      }
    },
    "datePublished": post.publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://mission100hospital.com/blog/${post.slug}`
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-24 relative overflow-hidden">
      
      {/* Inject JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <style>{`
        .blog-content-body h2 {
          font-size: 1.625rem;
          font-weight: 800;
          color: #0f172a;
          margin-top: 2.5rem;
          margin-bottom: 1.25rem;
          line-height: 1.3;
          letter-spacing: -0.02em;
        }
        .blog-content-body p {
          margin-bottom: 1.5rem;
        }
        .blog-content-body ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 1.75rem;
        }
        .blog-content-body li {
          margin-bottom: 0.625rem;
        }
        .blog-content-body strong {
          font-weight: 700;
          color: #0f172a;
        }
      `}</style>

      {/* Decorative Background Glows */}
      <div className="absolute top-[-10%] left-[-15%] w-[600px] h-[600px] bg-emerald-100/25 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-cyan-100/20 rounded-full blur-3xl -z-10"></div>

      {/* Content wrapper */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        
        {/* Back link */}
        <div className="mb-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-extrabold text-slate-500 hover:text-emerald-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Insights
          </Link>
        </div>

        {/* Category badge */}
        <span className="inline-block px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-black uppercase tracking-widest mb-6">
          {post.category}
        </span>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
          {post.title}
        </h1>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold text-slate-400 border-b border-slate-200/60 pb-8 mb-10">
          <span className="flex items-center gap-1.5">
            <User className="w-4.5 h-4.5 text-slate-350" /> {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4.5 h-4.5 text-slate-350" /> {post.publishedAt}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4.5 h-4.5 text-slate-350" /> {post.readTime}
          </span>
        </div>

        {/* Large Cover Image */}
        <div className="w-full h-[250px] sm:h-[450px] bg-slate-100 rounded-3xl mb-12 relative overflow-hidden shadow-md">
          <img
            src={post.image || "/hospital-building.jpg"}
            alt={post.title}
            className="w-full h-full object-fill"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent flex flex-col justify-end p-8 sm:p-12">
            <p className="text-sm sm:text-base font-bold text-white/90 italic max-w-2xl leading-relaxed border-l-4 border-emerald-400 pl-4">
              "{post.excerpt}"
            </p>
          </div>
        </div>

        {/* Body content */}
        <div className="max-w-3xl mx-auto">
          <div
            className="text-slate-650 text-base sm:text-lg leading-relaxed font-medium blog-content-body mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Medical Disclaimer */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-5 flex items-start gap-4 mb-16 shadow-xs">
            <ShieldAlert className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-amber-800 text-xs sm:text-sm font-semibold leading-relaxed">
              <strong>Medical Disclaimer:</strong> Health information shared in this article is intended for general educational purposes and should not replace professional medical advice, diagnosis or treatment. Always consult with a qualified physician regarding any health concerns or before changing your health routines.
            </p>
          </div>
        </div>

      </article>

      {/* Related Insights Section */}
      {relatedBlogs.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/50 pt-16 mb-20">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-10 text-center">
            Related Insights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedBlogs.map((rPost) => (
              <div
                key={rPost.id}
                className="group bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  <span className="text-emerald-600 text-xs font-black uppercase tracking-wider block mb-3">
                    {rPost.category}
                  </span>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-emerald-600 transition-colors mb-3 leading-snug">
                    {rPost.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 line-clamp-3 mb-6 leading-relaxed font-medium">
                    {rPost.excerpt}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4 mt-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-4">
                    <span>{rPost.publishedAt}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {rPost.readTime}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${rPost.slug}`}
                    className="inline-flex items-center gap-1.5 font-extrabold text-sm text-slate-950 hover:text-emerald-600 transition-colors"
                  >
                    READ ARTICLE <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-12 translate-x-12"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-4 uppercase">
              TAKE A PROACTIVE APPROACH TO YOUR HEALTH
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 font-medium">
              Explore Mission100 healthcare services, preventive medical checkups, and diagnostic screenings.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm mx-auto">
              <Link
                href="/memberships"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-all duration-300"
              >
                EXPLORE PLANS
              </Link>
              <Link
                href="/book-test"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/15 transition-all duration-300"
              >
                BOOK TEST NOW
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
