import React from "react";
import { notFound } from "next/navigation";
import { corporatePlans } from "../plansData";
import CorporatePlanDetailsClient from "./CorporatePlanDetailsClient";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const currentSlug = resolvedParams.slug;
  const plan = corporatePlans[currentSlug];

  if (!plan) return {};

  return {
    title: `${plan.name} | Mission 100 Hospital`,
    description: plan.seo.description,
    keywords: plan.seo.keywords,
    alternates: {
      canonical: `https://www.mission100hospital.com/corporate-wellness-partnership/${plan.slug}`,
    },
    openGraph: {
      title: `${plan.name} | Mission 100 Hospital`,
      description: plan.seo.description,
      url: `https://www.mission100hospital.com/corporate-wellness-partnership/${plan.slug}`,
      images: [
        {
          url: "/icon.png",
          width: 1200,
          height: 630,
          alt: `${plan.name} Cover`,
        },
      ],
      type: "website",
    },
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const currentSlug = resolvedParams.slug;
  const plan = corporatePlans[currentSlug];

  if (!plan) {
    notFound();
  }

  // Get related corporate plans (excluding the current one)
  const relatedPlans = Object.values(corporatePlans).filter(
    (p) => p.slug !== currentSlug
  );

  return (
    <CorporatePlanDetailsClient plan={plan} relatedPlans={relatedPlans} />
  );
}
