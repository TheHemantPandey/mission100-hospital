"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Briefcase,
  ChevronRight,
  TrendingUp,
  GraduationCap,
  Users,
  Lightbulb,
  Heart,
  Send,
  Search,
  MapPin,
  Clock
} from "lucide-react";

export default function CareersLandingPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");

  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await fetch("/api/careers/jobs");
        const data = await res.json();
        setJobs(data.filter(j => j.active));
      } catch (err) {
        console.error("Failed to load jobs:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, []);

  const departments = ["All", ...Array.from(new Set(jobs.map(j => j.department)))];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === "All" || job.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  const whyMission100 = [
    {
      title: "Meaningful Impact",
      icon: Heart,
      desc: "Work on services that prevent chronic diseases and actively increase the quality and span of human life.",
      color: "text-red-500",
      bg: "bg-red-50"
    },
    {
      title: "Growth & Learning",
      icon: TrendingUp,
      desc: "Accelerate your career in a dynamic, fast-paced health-tech environment with continuous learning resources.",
      color: "text-emerald-500",
      bg: "bg-emerald-50"
    },
    {
      title: "Healthcare + Technology",
      icon: Lightbulb,
      desc: "Help combine advanced medical sciences, diagnostic tools, and state-of-the-art tech platforms.",
      color: "text-cyan-500",
      bg: "bg-cyan-50"
    },
    {
      title: "Collaboration",
      icon: Users,
      desc: "Work alongside verified doctors, fitness coaches, and technologists in a highly supportive team environment.",
      color: "text-indigo-500",
      bg: "bg-indigo-50"
    },
    {
      title: "Innovation",
      icon: GraduationCap,
      desc: "Be a part of pioneers setting modern standards in preventive medicine and health longevity modeling.",
      color: "text-amber-500",
      bg: "bg-amber-50"
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-white via-slate-50 to-green-50/50 pb-20">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-200/20 rounded-full blur-3xl -translate-y-12"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl translate-y-12"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
            Careers at Mission100
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Build a Healthier <span className="bg-linear-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">Future With Us</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Join Mission100 and help us transform the way people think about preventive healthcare. Together, we build tools and provide solutions for longevity and vitality.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#open-positions"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-linear-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-base shadow-lg shadow-emerald-500/20 hover:shadow-xl transition-all duration-300 text-center"
            >
              VIEW OPEN POSITIONS
            </a>
            <Link
              href="/careers/apply"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 text-center flex items-center justify-center gap-2"
            >
              SEND YOUR RESUME <Send className="w-4 h-4 text-slate-500" />
            </Link>
          </div>
        </div>
      </section>


      {/* OPEN POSITIONS */}
      <section id="open-positions" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-10">
        <div className="bg-white rounded-4xl border border-slate-100 shadow-xl overflow-hidden p-6 sm:p-10 md:p-14">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-100 mb-8">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 flex items-center gap-3">
                <Briefcase className="w-8 h-8 text-emerald-500" /> Open Opportunities
              </h2>
              <p className="text-slate-500 mt-2">Explore active vacancies and join our growing team.</p>
            </div>
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              {/* Search */}
              <div className="relative w-full sm:w-64">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 outline-none text-sm focus:ring-2 focus:ring-emerald-500 transition-all"
                />
              </div>
              {/* Department Select */}
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="px-4 py-3 rounded-xl border border-slate-200 outline-none text-sm focus:ring-2 focus:ring-emerald-500 bg-white"
              >
                {departments.map((dept, idx) => (
                  <option key={idx} value={dept}>{dept} Departments</option>
                ))}
              </select>
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-slate-500 text-sm">Loading open positions...</p>
            </div>
          ) : filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white p-6 md:p-8 flex flex-col justify-between hover:shadow-xl hover:border-emerald-100 transition-all duration-300 group"
                >
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-4">
                      {job.department}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-3">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-slate-500 text-sm mb-6">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" /> {job.employmentType}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4" /> {job.experience}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/careers/${job.slug}`}
                    className="w-full sm:w-auto self-start mt-4 px-5 py-3 rounded-xl bg-white group-hover:bg-linear-to-r group-hover:from-emerald-500 group-hover:to-teal-600 border border-slate-200 group-hover:border-transparent text-slate-700 group-hover:text-white font-bold text-sm shadow-xs transition-all duration-300 flex items-center justify-center gap-1.5"
                  >
                    VIEW POSITION <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg font-bold text-slate-800">No open positions right now.</p>
              <p className="text-slate-500 text-sm mt-2 max-w-lg mx-auto">
                Don't see the right opportunity? Send us your resume and we'll keep your profile in consideration for future opportunities.
              </p>
              <div className="mt-8">
                <Link
                  href="/careers/apply"
                  className="inline-flex items-center gap-2 rounded-2xl bg-linear-to-r from-emerald-500 to-teal-600 px-6 py-4 text-white font-bold text-base shadow-md hover:shadow-xl transition-all duration-300"
                >
                  SEND YOUR RESUME <Send className="w-4.5 h-4.5" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
