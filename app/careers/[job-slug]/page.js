import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Clock,
  Briefcase,
  ChevronLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle
} from "lucide-react";

// Server-side helper to read jobs file
function getJob(slug) {
  try {
    const filePath = path.join(process.cwd(), "data", "jobs.json");
    if (!fs.existsSync(filePath)) return null;
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    return data.find(job => job.slug === slug);
  } catch (err) {
    console.error("Error reading jobs data:", err);
    return null;
  }
}

// Generate metadata dynamically for SEO
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams["job-slug"];
  const job = getJob(slug);

  if (!job) {
    return {
      title: "Job Not Found | Mission100",
      description: "The requested job position could not be found."
    };
  }

  return {
    title: `${job.title} | Careers at Mission100`,
    description: `Explore details and apply for the ${job.title} position in the ${job.department} department at Mission100 Hospital.`
  };
}

export default async function JobDetailsPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams["job-slug"];
  const job = getJob(slug);

  if (!job) {
    notFound();
  }

  // Structured Data (JSON-LD) for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "datePosted": job.createdAt || new Date().toISOString(),
    "validThrough": new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString(), // 60 days from now
    "employmentType": job.employmentType === "Full-Time" ? "FULL_TIME" : "PART_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Mission100 Hospital",
      "sameAs": "https://www.mission100hospital.com"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-white via-slate-50 to-green-50/50 pb-20 pt-8">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* BACK TO LISTING */}
        <div className="mb-8">
          <Link
            href="/careers"
            className="inline-flex items-center gap-1.5 text-slate-500 hover:text-emerald-600 text-sm font-semibold transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Careers
          </Link>
        </div>

        {/* JOB HEADER CARD */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-md p-6 sm:p-8 md:p-10 mb-10">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-5">
            {job.department}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            {job.title}
          </h1>

          <div className="flex flex-wrap gap-4 sm:gap-6 text-slate-500 text-sm mt-6 pb-6 border-b border-slate-100">
            <span className="flex items-center gap-2">
              <MapPin className="w-4.5 h-4.5 text-emerald-500" /> {job.location}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4.5 h-4.5 text-cyan-500" /> {job.employmentType}
            </span>
            <span className="flex items-center gap-2">
              <Briefcase className="w-4.5 h-4.5 text-indigo-500" /> {job.experience}
            </span>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-slate-600 text-sm">
                Posted on {new Date(job.createdAt).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })}
              </p>
            </div>
            {job.active ? (
              <Link
                href={`/careers/apply?job=${job.slug}`}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-linear-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-base shadow-lg shadow-emerald-500/20 hover:shadow-xl transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                Apply Now <ArrowRight className="w-4.5 h-4.5" />
              </Link>
            ) : (
              <div className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-slate-100 text-slate-500 font-semibold text-sm border border-slate-200 text-center">
                Closed / Not Accepting Applications
              </div>
            )}
          </div>
        </div>

        {/* JOB DETAILS CONTENT */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8 md:p-10 space-y-10">
          
          {/* ABOUT THE ROLE */}
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 border-b border-slate-100 pb-3 mb-4">
              About the Role
            </h2>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              {job.description}
            </p>
          </div>

          {/* RESPONSIBILITIES */}
          {job.responsibilities && job.responsibilities.length > 0 && (
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 border-b border-slate-100 pb-3 mb-4">
                Key Responsibilities
              </h2>
              <ul className="space-y-3.5">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600 leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* REQUIREMENTS */}
          {job.requirements && job.requirements.length > 0 && (
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 border-b border-slate-100 pb-3 mb-4">
                Requirements
              </h2>
              <ul className="space-y-3.5">
                {job.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600 leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* NICE TO HAVE */}
          {job.niceToHave && job.niceToHave.length > 0 && (
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 border-b border-slate-100 pb-3 mb-4">
                Nice to Have (Optional)
              </h2>
              <ul className="space-y-3.5">
                {job.niceToHave.map((nice, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <span className="text-slate-600 leading-relaxed">{nice}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* APPLICATION CTA */}
          <div className="pt-6 border-t border-slate-100 mt-10">
            {job.active ? (
              <div className="rounded-2xl bg-linear-to-r from-emerald-50 to-cyan-50 border border-emerald-100 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Ready to Join Mission100?
                  </h3>
                  <p className="text-slate-500 text-sm mt-1">
                    Fill out the application form with your professional qualifications and resume.
                  </p>
                </div>
                <Link
                  href={`/careers/apply?job=${job.slug}`}
                  className="w-full md:w-auto px-8 py-4 rounded-xl bg-linear-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-sm shadow-md transition-all duration-300 text-center"
                >
                  APPLY NOW
                </Link>
              </div>
            ) : (
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 text-center">
                <p className="text-slate-700 font-bold mb-4">
                  This position is no longer accepting applications.
                </p>
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-1 bg-white hover:bg-slate-100 text-slate-700 text-sm font-bold px-6 py-3 border border-slate-200 rounded-xl transition-all shadow-xs"
                >
                  VIEW OTHER OPEN POSITIONS
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
