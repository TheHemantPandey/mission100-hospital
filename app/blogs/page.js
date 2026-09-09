import React from "react";
import blogsData from "@/data/blogs.json";
import BlogsListingClient from "./BlogsListingClient";

export const metadata = {
  title: "Health & Longevity Journal | Medical Guides & Diagnostics | Mission100 Hospital",
  description:
    "Explore evidence-led health guides, diagnostic test explanations, preventive healthcare protocols, and metabolic wellness insights verified by Mission100 Hospital's medical editorial team.",
  alternates: {
    canonical: "https://www.mission100hospital.com/blogs",
  },
  openGraph: {
    title: "Health & Longevity Journal | Mission100 Hospital",
    description:
      "Explore evidence-led health guides, diagnostic test explanations, and preventive healthcare strategies from Mission100 Hospital.",
    url: "https://www.mission100hospital.com/blogs",
    siteName: "Mission100 Hospital",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.mission100hospital.com/hospital-building.jpg",
        width: 1200,
        height: 630,
        alt: "Mission100 Hospital Health & Longevity Journal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Health & Longevity Journal | Mission100 Hospital",
    description:
      "Explore evidence-led health guides and diagnostic test explanations from Mission100 Hospital.",
    images: ["https://www.mission100hospital.com/hospital-building.jpg"],
  },
  keywords: [
    "Mission100 Hospital blog",
    "preventive health checkup guide",
    "heart health checkup",
    "how to reverse prediabetes",
    "how to read blood test report",
    "ECG test explained",
    "DEXA bone density scan",
    "vitamin D deficiency symptoms",
    "vitamin B12 deficiency in vegetarians",
    "healthspan vs lifespan",
    "corporate wellness programs India",
  ],
};

export default function BlogsPage() {
  // Schema markup for the Blog collection page
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Mission100 Hospital Health & Longevity Journal",
    "description":
      "Evidence-led healthcare guides, diagnostic testing resources, and longevity insights.",
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
