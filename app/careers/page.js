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
  Clock,
  Code,
  Megaphone,
  Settings,
  ArrowRight,
  Sparkles
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

  const getDepartmentIcon = (dept) => {
    switch (dept.toLowerCase()) {
      case "technology":
        return <Code className="w-5 h-5 text-emerald-500" />;
      case "marketing":
        return <Megaphone className="w-5 h-5 text-cyan-500" />;
      case "operations":
        return <Settings className="w-5 h-5 text-indigo-500" />;
      default:
        return <Briefcase className="w-5 h-5 text-teal-500" />;
    }
  };

  const getDepartmentStyle = (dept) => {
    switch (dept.toLowerCase()) {
      case "technology":
        return "bg-emerald-50 text-emerald-700 border-emerald-100";
      case "marketing":
        return "bg-cyan-50 text-cyan-700 border-cyan-100";
      case "operations":
        return "bg-indigo-50 text-indigo-700 border-indigo-100";
      default:
        return "bg-teal-50 text-teal-700 border-teal-100";
    }
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === "All" || job.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-24 relative overflow-hidden">
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-200/35 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-cyan-200/25 rounded-full blur-3xl -z-10"></div>

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-white border border-emerald-100/80 shadow-md shadow-emerald-500/5 text-emerald-700 text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-8 animate-pulse">
            <Sparkles className="w-4 h-4 text-emerald-500" /> Careers at Mission100
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-none mb-6">
            Help Us Build A<br />
            <span className="bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Healthier Tomorrow
            </span>
          </h1>
          
          <p className="text-lg sm:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
            Join a pioneer health-tech network dedicated to disease prevention and extending healthy human lifespans. We value design, logic, and care.
          </p>


        </div>
      </section>

      {/* FILTER AND JOB LISTINGS SECTION */}
      <section id="open-positions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        
        {/* Search Panel */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-slate-200/60 p-6 md:p-8 shadow-xl shadow-slate-200/40 mb-12">
          <div className="relative w-full">
            <Search className="w-5.5 h-5.5 text-slate-400 absolute left-4.5 top-4" />
            <input
              type="text"
              placeholder="Search by title, department, or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-13 pr-4 py-4 rounded-2xl border border-slate-200 outline-none text-base text-slate-800 focus:ring-2 focus:ring-emerald-500/35 focus:border-emerald-500 bg-slate-50/50 focus:bg-white transition-all duration-300"
            />
          </div>
        </div>

        {/* Dynamic Jobs List */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-28 gap-4 bg-white/50 rounded-4xl border border-slate-200/50">
            <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-slate-400 font-bold text-sm tracking-wide">Loading Opportunities...</p>
          </div>
        ) : filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="group rounded-3xl border border-slate-200/60 bg-white hover:border-emerald-200 p-6 flex flex-col justify-between hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Visual hover border overlay */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-linear-to-r from-emerald-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    {/* Icon matching department */}
                    <div className="w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-emerald-50 border border-slate-100 group-hover:border-emerald-100 flex items-center justify-center transition-colors">
                      {getDepartmentIcon(job.department)}
                    </div>
                    {/* Badge */}
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-wider ${getDepartmentStyle(job.department)}`}>
                      {job.department}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors mb-2 leading-snug">
                    {job.title}
                  </h3>

                  <p className="text-sm text-slate-500 line-clamp-3 mb-4 leading-relaxed font-medium">
                    {job.description}
                  </p>

                  {/* Skills tags */}
                  {job.skills && job.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {job.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1.5 rounded-xl bg-slate-100/80 group-hover:bg-emerald-50 text-slate-600 group-hover:text-emerald-700 text-xs font-bold transition-all duration-300 border border-transparent group-hover:border-emerald-100/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="space-y-2 border-t border-slate-100 pt-4">
                    <div className="flex items-center gap-2.5 text-slate-600 text-sm font-semibold">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-slate-600 text-sm font-semibold">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{job.employmentType}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-slate-600 text-sm font-semibold">
                      <Briefcase className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{job.experience}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                  <Link
                    href={`/careers/${job.slug}`}
                    className="inline-flex items-center gap-1.5 font-extrabold text-sm text-slate-900 group-hover:text-emerald-500 transition-colors"
                  >
                    View Details 
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  
                  <Link
                    href={`/careers/apply?job=${job.slug}`}
                    className="px-4 py-2.5 rounded-xl bg-slate-50 group-hover:bg-emerald-500 text-slate-600 group-hover:text-white font-extrabold text-xs transition-all duration-300"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200/50 max-w-2xl mx-auto shadow-md">
            <Briefcase className="w-12 h-12 text-slate-350 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">No open positions matching your search</h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
              Try adjusting your keywords or search query to find open roles.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
