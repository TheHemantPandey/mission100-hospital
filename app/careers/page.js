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
  ArrowRight,
  Sparkles,
  ChevronDown,
  Code,
  HeartPulse,
  Megaphone,
  LineChart,
  Settings,
  UserCheck,
  CircleDollarSign,
  Palette,
  FileText
} from "lucide-react";

export default function CareersLandingPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedDept, setExpandedDept] = useState(null);

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

  // Department definitions
  const departmentsConfig = [
    {
      number: "01",
      name: "Healthcare / Clinical",
      description: "Help us deliver meaningful healthcare experiences to patients and members.",
      aliases: ["healthcare / clinical", "healthcare & clinical", "healthcare", "clinical", "medical"],
      icon: <HeartPulse className="w-5 h-5" />
    },
    {
      number: "02",
      name: "Technology",
      description: "Build the digital infrastructure and experiences powering Mission100.",
      aliases: ["technology", "tech", "development", "it"],
      icon: <Code className="w-5 h-5" />
    },
    {
      number: "03",
      name: "Marketing & Growth",
      description: "Drive brand awareness, member registrations, and spread the message of healthy longevity.",
      aliases: ["marketing & growth", "marketing", "growth"],
      icon: <Megaphone className="w-5 h-5" />
    },
    {
      number: "04",
      name: "Sales & Business Development",
      description: "Expand our partner network, hospital franchises, and corporate membership offerings.",
      aliases: ["sales & business development", "business & sales", "business development", "sales", "business"],
      icon: <LineChart className="w-5 h-5" />
    },
    {
      number: "05",
      name: "Operations",
      description: "Coordinate appointments, manage onboarding, and support our diagnostics and partners.",
      aliases: ["operations", "ops"],
      icon: <Settings className="w-5 h-5" />
    },
    {
      number: "06",
      name: "HR & Administration",
      description: "Help us support, train, and build our growing team.",
      aliases: ["hr & administration", "people & administration", "people", "hr", "admin", "administration"],
      icon: <UserCheck className="w-5 h-5" />
    },
    {
      number: "07",
      name: "Finance & Accounts",
      description: "Manage billing, hospital financial planning, and accounts operations.",
      aliases: ["finance & accounts", "finance", "accounts", "billing"],
      icon: <CircleDollarSign className="w-5 h-5" />
    },
    {
      number: "08",
      name: "Design & Creative",
      description: "Shape the visual identity, UI/UX designs, and motion assets of Mission100.",
      aliases: ["design & creative", "design", "creative", "ui/ux"],
      icon: <Palette className="w-5 h-5" />
    },
    {
      number: "09",
      name: "Customer / Patient Experience",
      description: "Build deep, trusted relationships with patients, members, and hospital users.",
      aliases: ["customer / patient experience", "customer support", "customer success", "patient relationship", "patient experience"],
      icon: <Users className="w-5 h-5" />
    },
    {
      number: "10",
      name: "Management",
      description: "Steer product strategy, project coordination, and technical or operational leadership.",
      aliases: ["management", "lead", "manager"],
      icon: <FileText className="w-5 h-5" />
    }
  ];

  // Map job to department key
  const getDeptNameForJob = (jobDept) => {
    if (!jobDept) return null;
    const normalized = jobDept.toLowerCase().trim();
    for (const dept of departmentsConfig) {
      if (dept.aliases.includes(normalized) || dept.name.toLowerCase() === normalized) {
        return dept.name;
      }
    }
    return null;
  };

  // Group active jobs under their respective department
  const getJobsForDept = (deptName) => {
    return jobs.filter((job) => {
      const mappedName = getDeptNameForJob(job.department);
      const matchesSearch = searchTerm.trim() === "" ||
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase());
      return mappedName === deptName && matchesSearch;
    });
  };

  const handleToggleDept = (deptName) => {
    setExpandedDept(prev => (prev === deptName ? null : deptName));
  };

  const whyMission100 = [
    {
      number: "01",
      title: "Purpose Driven",
      desc: "Work on products and services that have a meaningful impact on people's health and wellbeing.",
      color: "text-emerald-500",
      bg: "bg-emerald-50/50 border-emerald-100"
    },
    {
      number: "02",
      title: "Build & Innovate",
      desc: "Solve real healthcare problems using technology, creativity and practical thinking.",
      color: "text-cyan-500",
      bg: "bg-cyan-50/50 border-cyan-100"
    },
    {
      number: "03",
      title: "People First",
      desc: "Work with a collaborative team where ideas, ownership and teamwork matter.",
      color: "text-indigo-500",
      bg: "bg-indigo-50/50 border-indigo-100"
    },
    {
      number: "04",
      title: "Grow With Us",
      desc: "Learn, take responsibility and grow alongside a rapidly developing organization.",
      color: "text-purple-500",
      bg: "bg-purple-50/50 border-purple-100"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20 relative overflow-hidden">
      
      {/* Decorative Background Blur Elements */}
      <div className="absolute top-[-10%] left-[-15%] w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-cyan-100/30 rounded-full blur-3xl -z-10"></div>

      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 text-center max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow Badge */}
          <span className="inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full bg-white border border-emerald-100 shadow-md shadow-emerald-500/5 text-emerald-700 text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-8">
            <Sparkles className="w-4 h-4 text-emerald-500 animate-pulse" /> Careers at Mission100
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-none mb-6">
            Build a Healthier<br />
            <span className="bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Future With Us.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
            Join a team that's building technology, healthcare and experiences that make better health accessible to everyone.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href="#open-positions"
              className="w-full sm:w-auto px-8 py-4.5 rounded-2xl bg-linear-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-base shadow-lg shadow-emerald-500/10 hover:shadow-xl transition-all duration-300 text-center"
            >
              EXPLORE OPPORTUNITIES
            </a>
            <Link
              href="/careers/apply"
              className="w-full sm:w-auto px-8 py-4.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 text-center flex items-center justify-center gap-2"
            >
              SEND YOUR RESUME <Send className="w-4 h-4 text-slate-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. WHY MISSION100 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Why Mission100?</h2>
          <p className="mt-4 text-lg text-slate-500 font-medium">
            We are a mission-driven organization dedicated to extending the healthy human lifespan. Join a culture built on excellence and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyMission100.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 border ${item.bg} shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full bg-white`}
            >
              <div>
                <span className={`text-3xl font-black ${item.color} block mb-6`}>{item.number}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. EXPLORE CAREER AREAS (MAIN ACCORDION SECTION) */}
      <section id="open-positions" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/50 scroll-mt-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Explore Opportunities Across Mission100
          </h2>
          <p className="mt-4 text-lg text-slate-500 font-medium">
            From healthcare and technology to operations, marketing and business, find the area where you can make your biggest impact.
          </p>
        </div>

        {/* Dynamic Search Box */}
        <div className="max-w-xl mx-auto mb-12 relative">
          <Search className="w-5.5 h-5.5 text-slate-400 absolute left-4.5 top-4" />
          <input
            type="text"
            placeholder="Search open positions by keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-13 pr-4 py-4 rounded-2xl border border-slate-200 outline-none text-base text-slate-800 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white shadow-xs focus:shadow-md transition-all duration-300"
          />
        </div>

        {/* Department Accordion List */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100 max-w-5xl mx-auto">
          {departmentsConfig
            .filter((dept) => getJobsForDept(dept.name).length > 0)
            .map((dept, idx) => {
              const activeJobs = getJobsForDept(dept.name);
              const isExpanded = expandedDept === dept.name;

              return (
                <div key={idx} className="transition-colors duration-300">
                  {/* Accordion Header row */}
                  <button
                    onClick={() => handleToggleDept(dept.name)}
                    className="w-full text-left px-6 sm:px-10 py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors group"
                  >
                    <div className="flex items-center gap-5">
                      <span className="text-sm font-extrabold text-slate-400 tracking-wider w-8">
                        {dept.number}
                      </span>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                          {dept.name}
                        </h3>
                        <p className="text-slate-500 text-sm mt-1 max-w-lg hidden sm:block font-medium">
                          {dept.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pl-13 sm:pl-0">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                        activeJobs.length > 0
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                          : "bg-slate-50 text-slate-400 border border-slate-100"
                      }`}>
                        {activeJobs.length} {activeJobs.length === 1 ? "OPEN ROLE" : "OPEN ROLES"}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-slate-100/80 group-hover:bg-emerald-50 flex items-center justify-center transition-colors">
                        <ChevronDown className={`w-5 h-5 text-slate-500 group-hover:text-emerald-600 transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`} />
                      </div>
                    </div>
                  </button>

                  {/* Accordion Expandable Jobs List */}
                  {isExpanded && (
                    <div className="bg-slate-50/35 px-6 sm:px-10 pb-10 pt-2 border-t border-slate-100/60 animate-fadeIn">
                      {/* Mobile Only: Show description inside expanded area */}
                      <p className="text-slate-500 text-sm mb-6 sm:hidden font-medium">
                        {dept.description}
                      </p>

                      {activeJobs.length > 0 ? (
                        <div className="space-y-12 pt-6">
                          {activeJobs.map((job, jIdx) => (
                            <div
                              key={job.id}
                              className={`pb-12 ${
                                jIdx !== activeJobs.length - 1 ? "border-b border-slate-200/60" : ""
                              }`}
                            >
                              {/* Job Title */}
                              <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight mb-1.5 uppercase">
                                {job.title}
                              </h4>
                              
                              {/* Location, Type, Experience */}
                              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-slate-500 mb-4">
                                <span>{job.location}</span>
                                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                <span>{job.employmentType} &middot; {job.experience}</span>
                              </div>

                              {/* Job Description */}
                              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-3xl mb-6 font-medium line-clamp-3">
                                {job.description}
                              </p>

                              {/* Skills Tags list */}
                              {job.skills && job.skills.length > 0 && (
                                <div className="mb-6">
                                  <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                                    SKILLS
                                  </h5>
                                  <div className="flex flex-wrap gap-1.5">
                                    {job.skills.map((skill, sIdx) => (
                                      <span
                                        key={sIdx}
                                        className="px-2 py-1 rounded-lg bg-slate-100/80 text-slate-650 text-[10px] sm:text-xs font-bold border border-slate-200/50"
                                      >
                                        {skill}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Responsibilities list (What you'll do) */}
                              {job.responsibilities && job.responsibilities.length > 0 && (
                                <div className="mb-6 max-w-3xl">
                                  <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                                    WHAT YOU'LL DO
                                  </h5>
                                  <ul className="space-y-2 text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                                    {job.responsibilities.slice(0, 4).map((resp, rIdx) => (
                                      <li key={rIdx} className="flex items-start gap-2">
                                        <span className="text-emerald-500 shrink-0 mt-1">&bull;</span>
                                        <span>{resp}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {/* Actions block */}
                              <div className="flex items-center gap-6 pt-2">
                                <Link
                                  href={`/careers/${job.slug}`}
                                  className="inline-flex items-center gap-1.5 font-extrabold text-xs text-slate-900 hover:text-emerald-500 transition-colors group/link"
                                >
                                  VIEW FULL DETAILS 
                                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                                </Link>
                                
                                <Link
                                  href={`/careers/apply?job=${job.slug}`}
                                  className="inline-flex items-center gap-1.5 font-extrabold text-xs text-emerald-600 hover:text-emerald-500 transition-colors"
                                >
                                  APPLY NOW
                                </Link>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : null}

                      <div className="mt-6 text-right">
                        <Link
                          href={`/careers/apply?dept=${encodeURIComponent(dept.name)}`}
                          className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-emerald-500 transition-colors"
                        >
                          VIEW {dept.name} OPPORTUNITIES <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </section>

      {/* 4. HOW WE HIRE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">How We Hire</h2>
          <p className="mt-4 text-lg text-slate-500 font-medium">
            Our hiring process is straightforward, transparent, and built to help us find long-term partners.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
          {[
            { step: "01", name: "APPLY", desc: "Submit your application and resume." },
            { step: "02", name: "REVIEW", desc: "Our team reviews your profile and experience." },
            { step: "03", name: "INTERVIEW", desc: "Meet the team and discuss the opportunity." },
            { step: "04", name: "JOIN", desc: "Welcome to Mission100." }
          ].map((item, idx) => (
            <div key={idx} className="relative bg-white rounded-3xl p-8 border border-slate-200/60 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-sm font-black text-emerald-500 tracking-wider">STEP {item.step}</span>
                <h3 className="text-xl font-bold text-slate-900 mt-4 mb-2">{item.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. LIFE AT MISSION100 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/50">
        <div className="bg-slate-900 text-white rounded-4xl p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl translate-y-16 -translate-x-16"></div>
          
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
              Our Culture
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6">
              Where People, Technology & Healthcare Meet
            </h2>
            <p className="text-slate-350 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
              We're building a team that brings together healthcare professionals, engineers, designers, operators and people who care deeply about making an impact.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto border-t border-slate-200/50">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
          YOUR NEXT CHAPTER STARTS HERE.
        </h2>
        <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium mb-12">
          If you're passionate about building a healthier future, we'd love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href="#open-positions"
            className="w-full sm:w-auto px-8 py-4.5 rounded-2xl bg-linear-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-base shadow-lg shadow-emerald-500/10 hover:shadow-xl transition-all duration-300 text-center"
          >
            EXPLORE OPPORTUNITIES
          </a>
          <Link
            href="/careers/apply"
            className="w-full sm:w-auto px-8 py-4.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 text-center flex items-center justify-center gap-2"
          >
            SEND YOUR RESUME <Send className="w-4 h-4 text-slate-400" />
          </Link>
        </div>
      </section>

    </div>
  );
}
