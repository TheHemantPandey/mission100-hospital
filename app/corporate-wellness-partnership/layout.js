import React from "react";

export const metadata = {
  title: "Corporate Wellness Partnership Program",
  description: "Mission100 Hospital helps organizations build healthier workplaces through customized preventive healthcare, employee health monitoring, and on-site corporate diagnostics camps.",
  alternates: {
    canonical: 'https://www.mission100hospital.com/corporate-wellness-partnership',
  },
  openGraph: {
    title: "Corporate Wellness Partnership Program | Mission100 Hospital",
    description: "Mission100 Hospital helps organizations build healthier workplaces through customized corporate wellness plans, annual screenings, and priority doctor coordinates.",
    url: "https://www.mission100hospital.com/corporate-wellness-partnership",
    type: "website",
  }
};

export default function CorporateWellnessLayout({ children }) {
  return <>{children}</>;
}
