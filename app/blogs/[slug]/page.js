import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  HelpCircle,
  PhoneCall
} from "lucide-react";
import blogsData from "@/data/blogs.json";
import BlogBreadcrumbs from "@/components/blog/BlogBreadcrumbs";
import ArticleHeader from "@/components/blog/ArticleHeader";
import ArticleHero from "@/components/blog/ArticleHero";
import KeyTakeaways from "@/components/blog/KeyTakeaways";
import ArticleDisclaimer from "@/components/blog/ArticleDisclaimer";
import RelatedArticles from "@/components/blog/RelatedArticles";
import {
  TableOfContents,
  ShareButtons,
  FaqAccordion,
  SidebarDoctorCard,
  SidebarCtaCard
} from "./BlogArticleInteractive";

// Pre-render all 20 blog slugs statically at build time
export async function generateStaticParams() {
  return (blogsData || [])
    .filter((post) => post.active !== false && post.slug)
    .map((post) => ({
      slug: post.slug,
    }));
}

// Dynamic SEO metadata matching Next.js App Router specifications
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogsData.find((b) => b.slug === slug && b.active !== false);

  if (!post) {
    return {
      title: "Article Not Found | Mission100 Hospital",
      description: "The requested medical guide or blog article could not be found.",
    };
  }

  const siteUrl = "https://www.mission100hospital.com";
  const canonicalUrl = `${siteUrl}/blogs/${post.slug}`;
  const imageUrl = post.image?.startsWith("http")
    ? post.image
    : `${siteUrl}${post.image || "/hospital-building.jpg"}`;

  return {
    title: `${post.title} | Mission100 Hospital`,
    description: post.excerpt,
    keywords: [
      post.primaryKeyword,
      ...(post.secondaryKeywords || []),
      "Mission100 Hospital",
      "preventive healthcare",
      "health guide",
      post.category
    ].filter(Boolean),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${post.title} | Mission100 Hospital`,
      description: post.excerpt,
      url: canonicalUrl,
      siteName: "Mission100 Hospital",
      locale: "en_IN",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author || "Mission100 Medical Editorial Team"],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.imageAlt || post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Mission100 Hospital`,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;

  // Retrieve current post
  const post = blogsData.find((b) => b.slug === slug && b.active !== false);
  if (!post) {
    notFound();
  }

  // Extract Table of Contents items from <h2> tags in content or post.tableOfContents
  let tocItems = [];
  if (post.tableOfContents && post.tableOfContents.length > 0) {
    tocItems = post.tableOfContents.map((item) => ({
      id: item.id,
      text: item.title,
    }));
  } else {
    const h2Regex = /<h2[^>]*id="([^"]+)"[^>]*>([^<]+)<\/h2>/gi;
    let match;
    while ((match = h2Regex.exec(post.content || "")) !== null) {
      tocItems.push({
        id: match[1],
        text: match[2].replace(/&amp;/g, "&").trim(),
      });
    }
  }

  // Find 3 related active articles (prioritize same category)
  const activeBlogs = blogsData.filter(
    (b) => b.active !== false && b.slug !== post.slug
  );
  let relatedBlogs = activeBlogs.filter((b) => b.category === post.category);
  if (relatedBlogs.length < 3) {
    const diffCategory = activeBlogs.filter((b) => b.category !== post.category);
    relatedBlogs = [...relatedBlogs, ...diffCategory].slice(0, 3);
  } else {
    relatedBlogs = relatedBlogs.slice(0, 3);
  }

  const siteUrl = "https://www.mission100hospital.com";
  const canonicalUrl = `${siteUrl}/blogs/${post.slug}`;
  const imageUrl = post.image?.startsWith("http")
    ? post.image
    : `${siteUrl}${post.image || "/hospital-building.jpg"}`;

  // Structured Data (JSON-LD): Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "headline": post.title,
    "description": post.excerpt,
    "image": [imageUrl],
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt || post.publishedAt,
    "author": {
      "@type": "Organization",
      "name": post.author || "Mission100 Medical Editorial Team",
      "url": siteUrl,
    },
    "publisher": {
      "@type": "Hospital",
      "name": "Mission100 Hospital",
      "url": siteUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/main-logo1.png`,
      },
    },
    "reviewedBy": post.medicalReviewer
      ? {
          "@type": "Person",
          "name": post.medicalReviewer.name,
          "jobTitle": `${post.medicalReviewer.qualification} - ${post.medicalReviewer.specialty}`,
        }
      : undefined,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };

  // Structured Data (JSON-LD): BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blogs",
        "item": `${siteUrl}/blogs`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.category,
        "item": `${siteUrl}/blogs`,
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": post.title,
        "item": canonicalUrl,
      },
    ],
  };

  // Structured Data (JSON-LD): FAQPage Schema (if FAQs exist)
  const faqSchema =
    post.faqs && post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": post.faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer,
            },
          })),
        }
      : null;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-24 relative overflow-hidden">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Decorative Ambient Background Glows */}
      <div className="absolute top-[-5%] left-[-10%] w-[600px] h-[600px] bg-emerald-100/35 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute top-[30%] right-[-10%] w-[550px] h-[550px] bg-teal-100/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      {/* Embedded CSS for Rich Blog Content Body (680px-780px readable text width) */}
      <style>{`
        .blog-content-body {
          color: #334155;
          font-size: 1.0625rem;
          line-height: 1.8;
        }
        .blog-content-body h2 {
          font-size: 1.65rem;
          font-weight: 900;
          color: #0f172a;
          margin-top: 2.75rem;
          margin-bottom: 1.25rem;
          line-height: 1.3;
          letter-spacing: -0.02em;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #e2e8f0;
          scroll-margin-top: 100px;
        }
        .blog-content-body h3 {
          font-size: 1.25rem;
          font-weight: 800;
          color: #1e293b;
          margin-top: 2rem;
          margin-bottom: 0.875rem;
          line-height: 1.4;
          scroll-margin-top: 100px;
        }
        .blog-content-body p {
          margin-bottom: 1.5rem;
        }
        .blog-content-body ul {
          list-style-type: none;
          padding-left: 0;
          margin-bottom: 1.75rem;
        }
        .blog-content-body ul li {
          position: relative;
          padding-left: 1.75rem;
          margin-bottom: 0.75rem;
        }
        .blog-content-body ul li::before {
          content: "";
          position: absolute;
          left: 0.35rem;
          top: 0.65rem;
          width: 0.45rem;
          height: 0.45rem;
          border-radius: 50%;
          background-color: #059669;
        }
        .blog-content-body ol {
          list-style-type: decimal;
          padding-left: 1.5rem;
          margin-bottom: 1.75rem;
        }
        .blog-content-body ol li {
          margin-bottom: 0.75rem;
          padding-left: 0.35rem;
        }
        .blog-content-body strong {
          color: #0f172a;
          font-weight: 700;
        }
        .blog-content-body table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 1.5rem;
          margin-bottom: 2rem;
          font-size: 0.9375rem;
        }
        .blog-content-body th {
          background-color: #0f172a;
          color: #ffffff;
          padding: 0.875rem 1rem;
          text-align: left;
          font-weight: 700;
          font-size: 0.875rem;
          letter-spacing: 0.025em;
        }
        .blog-content-body td {
          padding: 0.875rem 1rem;
          border: 1px solid #e2e8f0;
          vertical-align: top;
        }
        .blog-content-body tbody tr:nth-child(even) {
          background-color: #f8fafc;
        }
        .blog-content-body tbody tr:hover {
          background-color: #f1f5f9;
        }
        .blog-content-body blockquote {
          border-left: 4px solid #10b981;
          padding-left: 1.25rem;
          margin: 1.75rem 0;
          font-style: italic;
          color: #475569;
        }
      `}</style>

      {/* 1. BREADCRUMBS */}
      <BlogBreadcrumbs category={post.category} title={post.title} />

      {/* 2. ARTICLE HEADER SECTION */}
      <ArticleHeader article={post} />

      {/* 3. HERO IMAGE */}
      <ArticleHero
        src={post.image}
        alt={post.imageAlt || post.title}
        caption={post.imageAlt}
      />

      {/* 4. KEY TAKEAWAYS BOX */}
      <KeyTakeaways takeaways={post.keyTakeaways} />

      {/* 5. MAIN TWO-COLUMN CONTENT & STICKY SIDEBAR */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Article Body (Col 8) */}
          <main className="lg:col-span-8">
            <article className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-2xs">
              {/* Mobile Table of Contents */}
              <TableOfContents tocItems={tocItems} />

              {/* Semantic HTML Article Body */}
              <div
                className="blog-content-body"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Contextual Mission100 CTA Box */}
              {post.cta && (
                <div className="my-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 text-white shadow-lg border border-slate-800">
                  {post.cta.badge && (
                    <span className="inline-block px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-400 text-xs font-black uppercase tracking-wider mb-3 border border-emerald-500/30">
                      {post.cta.badge}
                    </span>
                  )}
                  <h3 className="text-xl sm:text-2xl font-black mb-3 leading-snug">
                    {post.cta.headline}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                    {post.cta.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href={post.cta.buttonUrl || "/find-a-test"}
                      className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm tracking-wide shadow-md transition-all active:scale-95"
                    >
                      {post.cta.buttonText}
                    </Link>
                    {post.cta.secondaryUrl && (
                      <Link
                        href={post.cta.secondaryUrl}
                        className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/15 transition-all"
                      >
                        {post.cta.secondaryText || "Learn More"}
                      </Link>
                    )}
                  </div>
                </div>
              )}

              {/* FAQ Section */}
              {post.faqs && post.faqs.length > 0 && (
                <div className="mt-12 pt-8 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-slate-900 font-black text-2xl mb-2">
                    <HelpCircle className="w-6 h-6 text-emerald-600" />
                    <h2>Frequently Asked Questions</h2>
                  </div>
                  <p className="text-slate-500 text-sm mb-6 font-medium">
                    Common clinical questions answered by Mission100 physicians.
                  </p>
                  <FaqAccordion faqs={post.faqs} />
                </div>
              )}

              {/* Medical Disclaimer */}
              <ArticleDisclaimer />

              {/* Author & Reviewer Attribution Box */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
                <div>
                  <span className="font-bold text-slate-800">
                    Content Standard:
                  </span>{" "}
                  Mission100 Evidence-Led Editorial Policy
                </div>
                <div className="flex items-center gap-2">
                  <ShareButtons title={post.title} slug={post.slug} />
                </div>
              </div>
            </article>
          </main>

          {/* Sticky Sidebar (Col 4) */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 space-y-6">
              {/* Desktop Table of Contents Widget */}
              <div className="hidden lg:block">
                <TableOfContents tocItems={tocItems} />
              </div>

              {/* Medical Reviewer Doctor Profile Card */}
              {post.medicalReviewer && (
                <SidebarDoctorCard medicalReviewer={post.medicalReviewer} />
              )}

              {/* Sidebar CTA Card */}
              {post.cta && <SidebarCtaCard cta={post.cta} />}

              {/* Quick Helpline Support Widget */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-2xs">
                <h4 className="font-extrabold text-sm text-slate-900 mb-1">
                  Have Questions on Health Tests?
                </h4>
                <p className="text-xs text-slate-500 mb-3 font-medium">
                  Speak directly with a Mission100 healthcare counselor.
                </p>
                <a
                  href="tel:+918796471583"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Call +91 87964 71583</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* 6. RELATED HEALTH ARTICLES SECTION */}
      <RelatedArticles relatedArticles={relatedBlogs} />
    </div>
  );
}
