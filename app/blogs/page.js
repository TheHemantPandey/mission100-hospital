import React from "react";
import blogsData from "@/data/blogs.json";
import BlogsListingClient from "./BlogsListingClient";

export const metadata = {
  title: "Health & Longevity Blog | Diagnostic Guides & Preventive Care | Mission100 Hospital",
  description:
    "Explore expert-backed health guides, diagnostic test explanations, preventive checkup schedules, and metabolic wellness insights verified by Mission100 Hospital's medical team.",
  alternates: {
    canonical: "https://www.mission100hospital.com/blogs",
  },
  openGraph: {
    title: "Health & Longevity Blog | Mission100 Hospital",
    description:
      "Explore expert-backed health guides, diagnostic test explanations, and preventive healthcare strategies from Mission100 Hospital.",
    url: "https://www.mission100hospital.com/blogs",
    siteName: "Mission100 Hospital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.mission100hospital.com/hospital-building.jpg",
        width: 1200,
        height: 630,
        alt: "Mission100 Hospital Health Blog Knowledge Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Health & Longevity Blog | Mission100 Hospital",
    description:
      "Explore expert-backed health guides and diagnostic test explanations from Mission100 Hospital.",
    images: ["https://www.mission100hospital.com/hospital-building.jpg"],
  },
  keywords: [
    "Mission100 Hospital blog",
    "preventive health checkup guide",
    "full body checkup delhi",
    "blood test at home delhi",
    "heart health checkup",
    "hba1c test normal range",
    "thyroid test guide",
    "vitamin d deficiency",
    "cbc blood test explained",
    "lipid profile test",
    "kidney function test kft",
    "liver function test lft",
  ],
};

export default function BlogsPage() {
  // CollectionPage JSON-LD Schema
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Mission100 Hospital Health Knowledge Hub",
    "description":
      "Evidence-led healthcare guides, diagnostic testing resources, and preventive health insights.",
    "url": "https://www.mission100hospital.com/blogs",
    "publisher": {
      "@type": "Hospital",
      "name": "Mission100 Hospital",
      "url": "https://www.mission100hospital.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.mission100hospital.com/main-logo1.png",
      },
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": (blogsData || [])
        .filter((b) => b.active !== false)
        .map((post, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "url": `https://www.mission100hospital.com/blogs/${post.slug}`,
          "name": post.title,
        })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <BlogsListingClient initialBlogs={blogsData} />
    </>
  );
}
