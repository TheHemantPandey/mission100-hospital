"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  Users,
  ShieldCheck,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  UserCheck,
  Award,
  Zap,
  Building,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  Briefcase,
  Layers,
  HeartPulse,
  Clock,
  Star,
  FileText,
  Sparkles,
  PhoneCall,
  CalendarCheck
} from "lucide-react";
import { corporatePlans } from "./plansData";

// Counter Hook to align with Reference page metrics
const useAnimatedCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return count;
};

export default function CorporateWellnessLandingPage() {
  const router = useRouter();
  const plansSectionRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  // Animated counters
  const activeCompanies = useAnimatedCounter(150);
  const employeesCovered = useAnimatedCounter(5500);
  const diagnosticsDone = useAnimatedCounter(12000);
  const satisfiesRate = 99; // 99% satisfaction rate

  const plansList = Object.values(corporatePlans);

  useEffect(() => {
    const handleScroll = () => {
      if (!plansSectionRef.current) return;
      const rect = plansSectionRef.current.getBoundingClientRect();
      if (rect.top > window.innerHeight) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPlans = () => {
    plansSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const whyWellness = [
    { title: "Reduce Sick Leaves", desc: "Prioritizing employee health risk diagnostics before symptoms develop.", icon: UserCheck, color: "text-emerald-600 bg-emerald-50" },
    { title: "Improve Productivity", desc: "Healthy minds and bodies perform better with enhanced cognitive levels.", icon: TrendingUp, color: "text-indigo-600 bg-indigo-50" },
    { title: "Annual Preventive Healthcare", desc: "Continuous baseline health vitals check lowers unexpected employee call-outs.", icon: HeartPulse, color: "text-blue-600 bg-blue-50" },
    { title: "Employee Wellness", desc: "Fosters an organizational culture of care, raising retention rates.", icon: Users, color: "text-pink-600 bg-pink-50" },
    { title: "Better Workplace Health", desc: "Group coverage reduces diagnostics costs by up to 60% compared to reactive care.", icon: ShieldCheck, color: "text-amber-600 bg-amber-50" },
    { title: "Affordable Healthcare Programs", desc: "Establish structured lifestyle routines, dietician links, and fitness goals.", icon: Zap, color: "text-purple-600 bg-purple-50" }
  ];

  const whyChooseMission100 = [
    { title: "Experienced Medical Team", desc: "Access to senior medical consultants, cardiologists, and diagnostics experts." },
    { title: "On-site Health Camps", desc: "Interactive diagnostic camps set up right inside your office premises." },
    { title: "Digital Health Records", desc: "Continuous vitals logging, online portals, and direct report delivery." },
    { title: "Preventive Screenings", desc: "Proactive full body screening to capture risk parameters early." },
    { title: "Dedicated Corporate Support", desc: "Bypass standard queues with a dedicated corporate coordinator link." },
    { title: "Affordable Annual Programs", desc: "Flexible subscription tiers customized for growing startups and enterprises." }
  ];

  const journeySteps = [
    { step: "1️⃣ Choose Plan", title: "Choose Plan", desc: "Select from Free, Silver, or Gold based on staff size." },
    { step: "2️⃣ Register Company", title: "Register Company", desc: "Enter business information and tax details." },
    { step: "3️⃣ Complete Payment", title: "Complete Payment", desc: "Seamless Razorpay verification or direct Free onboarding." },
    { step: "4️⃣ Schedule Health Camp", title: "Schedule Health Camp", desc: "Coordinate on-site screening camps and dates." },
    { step: "5️⃣ Employee Checkups", title: "Employee Checkups", desc: "Doorstep pathology collections and campus health checkups." },
    { step: "6️⃣ Reports & Support", title: "Reports & Ongoing Support", desc: "Receive analytics reports and ongoing coordinator guidelines." }
  ];

  const postPurchaseSteps = [
    { title: "Registration Confirmation", desc: "Get immediate transactional invoices and dynamic dashboard links.", icon: FileText, color: "bg-blue-100 text-blue-600" },
    { title: "Dedicated Coordinator Assigned", desc: "A personal manager takes over all diagnostics scheduling operations.", icon: Users, color: "bg-amber-100 text-amber-600" },
    { title: "Health Camp Scheduling", desc: "We coordinate dates to configure diagnostic camps inside your office.", icon: CalendarCheck, color: "bg-green-100 text-green-600" },
    { title: "Continuous Wellness Support", desc: "Unlimited online consultations and 24x7 priority emergency coordination.", icon: ShieldCheck, color: "bg-purple-100 text-purple-600" }
  ];

  const testimonials = [
    {
      quote: "Implementing Mission100's Silver Plan reduced our team's annual sick days by 25%. Onsite camps were incredibly smooth.",
      author: "Rajesh Kumar",
      plan: "HR Director, TechSolutions"
    },
    {
      quote: "Our employees love the home sample collection convenience. The Gold Plan dietician sessions have boosted overall office energy.",
      author: "Anjali Sharma",
      plan: "Managing Director, Zenith Digital"
    },
    {
      quote: "The 24x7 ambulance wrapper gives our warehouse team ultimate peace of mind. Excellent coordination!",
      author: "Vikram Malhotra",
      plan: "Operations VP, LogiExpress"
    }
  ];

  const faqs = [
    { q: "How does the onboarding process work for companies?", a: "Once registered, a dedicated corporate manager contacts your HR representative to collect employee rosters, schedule checkup camps, and activate individual portal credits." },
    { q: "Are the health checkups conducted on-site or at home?", a: "We offer both! Silver and Gold tiers combine on-site diagnostics camps at your office premises with individual home sample collections for staff convenience." },
    { q: "Is there a minimum employee count to join?", a: "The Free Starter plan has no group size requirements. The Silver and Gold plans are optimized for organizations of 10 or more employees to run diagnostics camps effectively." },
    { q: "What diagnostics are included in the annual checks?", a: "Depending on the selected plan, checkups cover basic vitals, blood parameters, heart assessments (ECG), kidney & liver functions, and vitamins profiling." },
    { q: "Do you support GST invoicing?", a: "Yes, standard GST details and business invoicing options are available during the registration flow for tax compliance." }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 85 } }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-32 md:pb-24 overflow-x-hidden selection:bg-emerald-100">

      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 pt-20 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-xs sm:text-sm font-semibold shadow-sm">
              🏢 Corporate Wellness Partnership
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-slate-900 tracking-tight">
              Healthy Employees. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-indigo-600">
                Stronger Companies.
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Mission100 Hospital helps organizations build healthier, more productive workplaces through customized preventive healthcare packages, regular employee wellness programs, annual screenings, and priority medical support.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={scrollToPlans}
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-emerald-500/10 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                View Plans <ArrowRight size={18} />
              </button>
              <button
                onClick={scrollToPlans}
                className="border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-750 px-8 py-4 rounded-xl font-bold active:scale-95 transition-all"
              >
                Contact Our Team
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 w-full max-w-md md:max-w-lg mx-auto relative">
            <div className="relative rounded-3xl shadow-2xl overflow-hidden border border-slate-200/80 p-2 bg-white/60 backdrop-blur-md">
              <Image
                src="/corporate-wellness/comparison-corporate-plan.jpeg"
                alt="Corporate Healthcare Coverage Brochure"
                width={600}
                height={800}
                className="rounded-2xl w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

        </div>

        {/* Decorative blur blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </section>

      {/* --- SOCIAL PROOF STATS SECTION --- */}
      <section className="max-w-7xl mx-auto -mt-8 relative z-20 px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center md:divide-x md:divide-slate-100">
          <div className="p-2">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-800">{activeCompanies}+</h3>
            <p className="text-slate-500 text-xs sm:text-sm font-semibold mt-1">Corporate Partners</p>
          </div>
          <div className="p-2 border-l border-slate-100 md:border-l-0">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-800">{employeesCovered}+</h3>
            <p className="text-slate-500 text-xs sm:text-sm font-semibold mt-1">Employees Covered</p>
          </div>
          <div className="p-2 border-t border-slate-100 md:border-t-0">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-800">{satisfiesRate}%</h3>
            <p className="text-slate-500 text-xs sm:text-sm font-semibold mt-1">Satisfaction Rate</p>
          </div>
          <div className="p-2 border-t border-l border-slate-100 md:border-t-0 md:border-l-0">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-800">{diagnosticsDone}+</h3>
            <p className="text-slate-500 text-xs sm:text-sm font-semibold mt-1">Diagnostics Done</p>
          </div>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8">

        {/* --- WHY CORPORATE WELLNESS --- */}
        <section className="max-w-7xl mx-auto mb-24 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-10">Why Corporate Wellness?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {whyWellness.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center hover:shadow-md transition-shadow">
                  <div className={`p-3.5 rounded-xl mb-3 ${item.color}`}>
                    <Icon className="w-6 h-6 shrink-0" />
                  </div>
                  <span className="font-extrabold text-slate-800 text-xs sm:text-sm text-center leading-snug">{item.title}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* --- EMOTIONAL BANNER --- */}
        <section className="max-w-4xl mx-auto text-center mb-20 px-4">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Employee health isn&apos;t a company expense. <span className="text-red-500 block sm:inline">Ignoring it is.</span>
          </h3>
          <p className="text-slate-600 mt-3 font-semibold text-sm sm:text-base md:text-lg">
            Protect your staff comprehensively all year long with diagnostic checkup camps and priority ambulance coordinators.
          </p>
        </section>

        {/* --- PLANS SECTION --- */}
        <section ref={plansSectionRef} className="max-w-7xl mx-auto mb-24 pt-4 px-4 sm:px-6 lg:px-8 scroll-mt-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Choose Corporate Wellness Plans</h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">Select the plan package that suits your company size and requirements.</p>
          </div>

          <div className="space-y-20 max-w-6xl mx-auto">
            
            {/* 1. FREE PLAN ROW: Left Image (Visible in Full), Right Details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm">
              <div className="lg:col-span-7 w-full">
                <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm bg-white">
                  <Image 
                    src={corporatePlans["free-plan"].image}
                    alt="Free Wellness Starter Flyer"
                    width={800}
                    height={1120}
                    className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                    priority
                  />
                </div>
              </div>
              
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6 py-2">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1 border px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-800 border-slate-200">
                      Startup Tier
                    </span>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {corporatePlans["free-plan"].name}
                    </h3>
                    <div className="text-2xl font-black text-slate-950">
                      {corporatePlans["free-plan"].price} <span className="text-xs text-slate-400 font-semibold">/year per employee</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                    The perfect start to employee wellness at no cost! Set up a basic preventative healthcare system for early startup teams.
                  </p>

                  <div className="space-y-3 border-t border-slate-100 pt-4">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-2">
                      <HeartPulse size={14} className="text-emerald-500" /> Vitals Checked (12 Office Visits)
                    </h4>
                    <p className="text-[10px] text-slate-500 font-semibold">Regular basic health monitoring conducted once a month at office premises for early risk detection:</p>
                    <ul className="grid grid-cols-2 gap-2 text-xs text-slate-700 font-bold pl-1 mt-1.5">
                      <li>• Blood Pressure (BP)</li>
                      <li>• Blood Sugar (Glucose)</li>
                      <li>• Body Weight index</li>
                      <li>• Oxygen Saturation (SpO2)</li>
                    </ul>
                  </div>

                  <div className="space-y-3 border-t border-slate-100 pt-4">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-2">
                      <ShieldCheck size={14} className="text-emerald-500" /> Why Start With Free Plan?
                    </h4>
                    <ul className="grid grid-cols-2 gap-2 text-[10px] text-slate-500 font-semibold pl-1">
                      <li>• Early risk detection</li>
                      <li>• Fosters employee wellness</li>
                      <li>• Boosts staff productivity</li>
                      <li>• Max impact, zero cost</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 border-t border-slate-100 pt-6">
                  <button 
                    onClick={() => router.push(`/buy-corporate-membership/free-plan`)}
                    className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-8 rounded-xl transition-all transform active:scale-95 shadow-md text-xs"
                  >
                    Buy Free Plan
                  </button>
                  <button 
                    onClick={() => router.push(`/corporate-wellness-partnership/free-plan`)}
                    className="w-full sm:w-auto border border-slate-200 hover:bg-slate-50 text-slate-750 font-bold py-3.5 px-8 rounded-xl transition-all transform active:scale-95 text-xs"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* 2. SILVER PLAN ROW: Left Details, Right Image (Visible in Full) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm">
              <div className="lg:col-span-5 lg:order-1 flex flex-col justify-between space-y-6 py-2">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1 border px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-indigo-100 text-indigo-850 border-indigo-200">
                      Best Value
                    </span>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {corporatePlans["silver-plan"].name}
                    </h3>
                    <div className="text-2xl font-black text-indigo-600">
                      {corporatePlans["silver-plan"].price} <span className="text-xs text-slate-400 font-semibold">/year per employee</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                    Prevent today, protect tomorrow. Advanced diagnostics coordinates that bring clinical checking directly to your team.
                  </p>

                  <div className="space-y-3 border-t border-slate-100 pt-4">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-2">
                      <Award size={14} className="text-indigo-500" /> Annual Health Benefit:
                    </h4>
                    <ul className="text-xs text-slate-700 font-bold space-y-1">
                      <li>• 1 Full Body Blood Checkup (Once a Year)</li>
                      <li className="text-[10px] text-slate-450 text-slate-400 font-semibold pl-3">A complete screen of vital chemistry checkups.</li>
                    </ul>
                  </div>

                  <div className="space-y-3 border-t border-slate-100 pt-4">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-2">
                      <HeartPulse size={14} className="text-indigo-500" /> Monthly Office Health Checkups:
                    </h4>
                    <p className="text-[10px] text-slate-500 font-semibold">BP Monitoring, Blood Sugar checks, Body Weight index, and SpO2 tracking (12 visits per year).</p>
                  </div>

                  <div className="space-y-3 border-t border-slate-100 pt-4">
                    <h4 className="text-xs font-bold text-slate-850 uppercase tracking-wide flex items-center gap-2">
                      <ShieldCheck size={14} className="text-indigo-500" /> Why Choose Silver Plan?
                    </h4>
                    <ul className="grid grid-cols-2 gap-2 text-[10px] text-slate-500 font-semibold pl-1">
                      <li>• Digital Health Records</li>
                      <li>• Health Trend reports</li>
                      <li>• Doctor Referrals</li>
                      <li>• Family Discounts</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 border-t border-slate-100 pt-6">
                  <button 
                    onClick={() => router.push(`/buy-corporate-membership/silver-plan`)}
                    className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-8 rounded-xl transition-all transform active:scale-95 shadow-md text-xs"
                  >
                    Buy Silver Plan
                  </button>
                  <button 
                    onClick={() => router.push(`/corporate-wellness-partnership/silver-plan`)}
                    className="w-full sm:w-auto border border-slate-200 hover:bg-slate-50 text-slate-750 font-bold py-3.5 px-8 rounded-xl transition-all transform active:scale-95 text-xs"
                  >
                    View Details
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 lg:order-2 w-full">
                <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm bg-white">
                  <Image 
                    src={corporatePlans["silver-plan"].image}
                    alt="Silver Corporate Care Flyer"
                    width={800}
                    height={1120}
                    className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* 3. GOLD PLAN ROW: Left Image (Visible in Full), Right Details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm">
              <div className="lg:col-span-7 w-full">
                <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm bg-white">
                  <Image 
                    src={corporatePlans["gold-plan"].image}
                    alt="Gold Corporate Care Flyer"
                    width={800}
                    height={1120}
                    className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                    priority
                  />
                </div>
              </div>
              
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6 py-2">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1 border px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-850 border-amber-200">
                      Most Premium
                    </span>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {corporatePlans["gold-plan"].name}
                    </h3>
                    <div className="text-2xl font-black text-amber-600">
                      {corporatePlans["gold-plan"].price} <span className="text-xs text-slate-400 font-semibold">/year per employee</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                    Invest in health, empower your team. Premium cardiac diagnostic profiling and full home clinical support.
                  </p>

                  <div className="space-y-3 border-t border-slate-100 pt-4">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-2">
                      <Award size={14} className="text-amber-500" /> Annual Health Benefits:
                    </h4>
                    <ul className="grid grid-cols-2 gap-2 text-xs text-slate-700 font-bold pl-1">
                      <li>• 1 Heart Checkup (ECG)</li>
                      <li>• 1 Full Body Blood Checkup</li>
                    </ul>
                  </div>

                  <div className="space-y-3 border-t border-slate-100 pt-4">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-2">
                      <Sparkles size={14} className="text-amber-500" /> Premium Value Additions:
                    </h4>
                    <ul className="grid grid-cols-2 gap-2 text-[10px] text-slate-500 font-semibold pl-1">
                      <li>• Diet Consultation</li>
                      <li>• Health Risk Assessment</li>
                      <li>• Personal Health Report</li>
                      <li>• HR Wellness Dashboard</li>
                      <li>• Home Sample Collection</li>
                      <li>• Tele / In-Person doctor</li>
                      <li>• Medicine Delivery</li>
                      <li>• Stress Management</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 border-t border-slate-100 pt-6">
                  <button 
                    onClick={() => router.push(`/buy-corporate-membership/gold-plan`)}
                    className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white font-bold py-3.5 px-8 rounded-xl transition-all transform active:scale-95 shadow-md text-xs"
                  >
                    Buy Gold Plan
                  </button>
                  <button 
                    onClick={() => router.push(`/corporate-wellness-partnership/gold-plan`)}
                    className="w-full sm:w-auto border border-slate-200 hover:bg-slate-50 text-slate-750 font-bold py-3.5 px-8 rounded-xl transition-all transform active:scale-95 text-xs"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- WHY BUSINESSES CHOOSE MISSION100 --- */}
        <section className="max-w-6xl mx-auto mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Businesses Choose Mission100
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">
              Bringing clinical excellence, on-site diagnostics, and doorstep logistics directly to your enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyChooseMission100.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-250 border-slate-200 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-lg mb-4">
                  <CheckCircle size={18} />
                </div>
                <h4 className="font-extrabold text-slate-900 text-base mb-1.5">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- TIMELINE: CORPORATE WELLNESS JOURNEY --- */}
        <section className="max-w-6xl mx-auto mb-24">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Corporate Wellness Journey</h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">Our structured coordinates mapping partnership from setup to ongoing care.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 relative">
            {journeySteps.map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm mb-4">
                  {idx + 1}
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm mb-1">{step.title}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- COMPARISON TABLE CHART --- */}
        <section className="max-w-6xl mx-auto mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Compare Plan Features</h2>
            <p className="mt-4 text-sm sm:text-lg text-slate-500">A detailed breakdown of everything included in your corporate membership.</p>
          </div>

          <div className="max-w-5xl mx-auto rounded-3xl border border-slate-200 shadow-xl bg-white p-2 md:p-4 group">
            <div className="relative w-full overflow-hidden rounded-xl cursor-zoom-in">
              <Image
                src="/corporate-wellness/comparison-corporate-plan.jpeg"
                alt="Corporate Plans Comparison Grid"
                width={1200}
                height={800}
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                priority
              />
            </div>
          </div>
        </section>

        {/* --- WHAT HAPPENS AFTER PURCHASE --- */}
        <section className="max-w-5xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What Happens After Purchase?</h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">Clear, reassuring onboarding coordinates post checkout activation.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {postPurchaseSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${step.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-sm mb-1">{idx + 1}. {step.title}</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* --- TESTIMONIALS SECTION --- */}
        <section className="max-w-6xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Real Partner Stories</h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">See how Mission100 transforms corporate wellness and productivity.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-slate-655 text-slate-600 italic font-semibold text-xs leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-50">
                  <h4 className="font-extrabold text-slate-950 text-xs sm:text-sm">{t.author}</h4>
                  <p className="text-[10px] font-black text-emerald-600 mt-0.5 uppercase tracking-wider">{t.plan}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- FAQ SECTION WITH PREMIUM UI ACCORDION --- */}
        <section className="max-w-4xl mx-auto mb-32">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">Clear solutions regarding onboarding, GST compliance, and screening logistics.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                      ? 'bg-gradient-to-r from-emerald-50 to-indigo-50 border-emerald-300 shadow-sm'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex justify-between items-center px-5 sm:px-6 py-4.5 text-left font-extrabold text-slate-900 text-sm sm:text-base md:text-lg focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? 'rotate-180 text-emerald-600' : ''}`} />
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 border-t border-emerald-100/50 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                      }`}
                  >
                    <p className="px-5 sm:px-6 py-4.5 text-xs sm:text-sm md:text-base text-slate-600 font-semibold leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>

      {/* --- FINAL CTA SECTION --- */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl relative overflow-hidden animate-fade-in">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full filter blur-2xl pointer-events-none"></div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight relative z-10 leading-tight">
              Ready to Build a Healthier Workplace?
            </h2>

            <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-medium relative z-10">
              Increase employee retention and lower diagnostic checkup costs today. Connect with the Mission100 team to arrange an onboarding call.
            </p>

            <div className="mt-8 relative z-10 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={scrollToPlans}
                className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-900 font-black px-8 py-4 rounded-xl transition-all transform active:scale-95 shadow-md flex items-center justify-center gap-2 mx-auto sm:mx-0 text-sm"
              >
                Explore Plans
              </button>
              <button
                onClick={scrollToPlans}
                className="w-full sm:w-auto border border-slate-700 hover:border-slate-600 bg-slate-800/40 hover:bg-slate-800/60 text-slate-350 hover:text-white px-8 py-4 rounded-xl font-black active:scale-95 transition-all text-sm"
              >
                Contact Mission100
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- MOBILE STICKY CTA ACTION BAR --- */}
      {showStickyCta && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 p-4 flex md:hidden shadow-2xl items-center justify-between animate-fade-in">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Corporate Wellness</span>
            <span className="text-xs sm:text-sm font-black text-slate-850">Protect your workplace today</span>
          </div>
          <button
            onClick={scrollToPlans}
            className="bg-emerald-600 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 active:scale-95 transition-transform"
          >
            Explore Plans <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* --- LIGHTBOX MODAL --- */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-55 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md cursor-zoom-out p-4 md:p-10"
        >
          <div className="relative max-w-4xl max-h-screen w-full h-full flex items-center justify-center">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 z-10 transition-colors font-bold"
            >
              ✕
            </button>
            <div className="relative w-full h-[90vh]">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
