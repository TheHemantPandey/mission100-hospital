"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Check,
  CheckCircle2,
  ShieldCheck,
  Home,
  Stethoscope,
  PhoneCall,
  ArrowRight,
  Sparkles,
  ChevronRight,
  ChevronDown,
  Building,
  HeartPulse,
  Award,
  Users,
  Briefcase
} from "lucide-react";

const getPerfectForChips = (slug) => {
  if (slug === "free-plan") {
    return ["Startups", "Early Teams", "NGOs", "Small Businesses"];
  }
  if (slug === "silver-plan") {
    return ["Growing Startups", "Medium Enterprises", "Educational Institutions"];
  }
  return ["Large Organizations", "Multinational Corporates", "Executive Teams"];
};

const getTrustPoints = () => [
  "Experienced Medical Team",
  "Affordable Plans",
  "Preventive Healthcare Experts",
  "Trusted by Organizations",
  "Modern Diagnostics",
  "Dedicated Support"
];

export default function CorporatePlanDetailsClient({ plan, relatedPlans }) {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(null);

  // Plan specific FAQs based on slug
  const planFaqs = {
    "free-plan": [
      { q: "Is the Free Starter Plan really free forever?", a: "Yes. The Free Starter plan does not require credit card details or setup subscriptions. It is designed to provide basic medical checklist trackers and digital wellness webinars for early-stage teams." },
      { q: "How do employees access the self-help webinars?", a: "Once registered, your representative receives a digital access link that can be distributed to up to 10 employees." },
      { q: "Can we upgrade to Silver or Gold later?", a: "Yes, you can upgrade to premium diagnostics packages at any time to unlock doorstep vitals checkup camps." }
    ],
    "silver-plan": [
      { q: "How do doorstep sample collections work?", a: "Our clinical representatives schedule home visits with individual employees at their convenience to collect samples, minimizing work hour interruptions." },
      { q: "What parameters are checked in the annual camps?", a: "The Silver plan includes on-site screening camps focusing on standard blood pressure, oxygen, blood sugar, and basic health metrics." },
      { q: "Do you supply GST billing receipts?", a: "Yes! All business details can be logged during checkout to generate official tax invoice receipts." }
    ],
    "gold-plan": [
      { q: "What premium parameters are included in the Gold checkups?", a: "In addition to standard pathology variables, Gold members receive Vitamin D & B12 checks, lipid profiles, and on-site ECG heart checks." },
      { q: "How does the office ambulance coordinate work?", a: "We link your office locations with local emergency networks to ensure priority transport and direct medical coordinators in critical situations." },
      { q: "Is dietician support individual or group-based?", a: "Diet and wellness coaching sessions are scheduled as 1-on-1 consultations per employee annually to outline personalized health parameters." }
    ]
  }[plan.slug] || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-16 overflow-x-hidden selection:bg-emerald-100">

      {/* --- HERO BANNER --- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white py-16 md:py-20 border-b border-slate-800">
        <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

            {/* Left Column: Plan Poster Image */}
            <div className="lg:col-span-6 h-full">
              <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-3xl shadow-xl backdrop-blur-md h-full flex flex-col justify-between text-left">
                <div>
                  <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest block mb-3">Selected Plan Poster</span>
                  {/* Framed Image Container */}
                  <div className="relative w-full rounded-2xl border border-slate-800 overflow-hidden bg-slate-950 shadow-inner flex items-center justify-center p-2">
                    <div className="relative w-full aspect-[5/7] rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
                      <Image
                        src={plan.image}
                        alt={plan.name}
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Details of the plan to fill space below */}
                <div className="mt-6 pt-6 border-t border-slate-800 space-y-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 border px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-800/80 border-slate-700 text-emerald-400">
                      {plan.badge} Package
                    </span>
                    <span className="text-xs text-slate-400 font-bold">12 Months Partnership</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-white">{plan.name}</h3>
                    <p className="text-xs text-slate-400 font-semibold mt-1">{plan.subtitle}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 bg-slate-900/40 p-4 rounded-2xl border border-slate-800 text-xs font-semibold text-slate-350">
                    <div>
                      <span className="text-[10px] text-slate-550 uppercase font-bold block mb-0.5">Price Tier</span>
                      <p className="text-sm font-black text-white">{plan.price}</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-550 uppercase font-bold block mb-0.5">Billing</span>
                      <p className="text-sm font-black text-white">{plan.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Complete Plan Overview */}
            <div className="lg:col-span-6 space-y-8 bg-slate-900/60 border border-slate-800 p-6 md:p-8 rounded-3xl shadow-lg backdrop-blur-md text-left h-full flex flex-col justify-between">

              {/* Plan Overview */}
              <div className="space-y-3 text-left">
                <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest block">Plan Overview</span>
                <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  {plan.title}
                </h1>
                <p className="text-slate-300 text-sm font-semibold leading-relaxed">
                  {plan.fullDescription || plan.shortDescription}
                </p>
              </div>

              {/* Perfect For */}
              <div className="space-y-3 border-t border-slate-800 pt-5">
                <span className="text-xs font-bold text-slate-200 uppercase tracking-wide block">Perfect For:</span>
                <div className="flex flex-wrap gap-2">
                  {getPerfectForChips(plan.slug).map((chip, idx) => (
                    <span key={idx} className="bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-xs font-bold">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Benefits Grid */}
              <div className="space-y-4 border-t border-slate-800 pt-5">
                <span className="text-xs font-bold text-slate-200 uppercase tracking-wide block">Key Benefits:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-850 p-4.5 rounded-2xl border border-slate-800 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                      <HeartPulse className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white text-xs mb-0.5">Preventive Healthcare</h4>
                      <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">Routine checks to catch complications early.</p>
                    </div>
                  </div>

                  <div className="bg-slate-850 p-4.5 rounded-2xl border border-slate-800 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white text-xs mb-0.5">Employee Wellness Tracking</h4>
                      <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">Structured vitals logs and pathology trends.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Organization VS Employee Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-slate-800 pt-5">
                <div className="space-y-3">
                  <span className="text-xs font-bold text-slate-200 uppercase tracking-wide block">Benefits for the Organization:</span>
                  <ul className="space-y-2 text-xs text-slate-350 font-semibold pl-1">
                    <li>• Reduced absenteeism</li>
                    <li>• Higher workplace productivity</li>
                    <li>• Better employee retention</li>
                    <li>• Stronger employer branding</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-bold text-slate-200 uppercase tracking-wide block">Benefits for Employees:</span>
                  <ul className="space-y-2 text-xs text-slate-350 font-semibold pl-1">
                    <li>• Regular health screenings</li>
                    <li>• Early disease detection</li>
                    <li>• Expert doctor consultations</li>
                    <li>• Personalized wellness guidance</li>
                  </ul>
                </div>
              </div>

              {/* What's Included */}
              <div className="space-y-4 border-t border-slate-800 pt-5">
                <span className="text-xs font-bold text-slate-200 uppercase tracking-wide block">What's Included:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-350 font-semibold pl-1">
                  {plan.features.slice(0, 8).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Mission100 */}
              <div className="bg-slate-850 border border-slate-800 p-5 rounded-2xl space-y-3 mt-6">
                <h4 className="text-xs font-black text-slate-250 uppercase tracking-wider">Why Choose Mission100</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] text-slate-400 font-bold">
                  {getTrustPoints().map((pt, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">• {pt}</div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Block with purchase trigger */}
              <div className="border-t border-slate-800 pt-8 text-center space-y-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <p className="text-xs font-black text-slate-400 uppercase tracking-wider">Ready to protect your employees' health?</p>
                  <p className="text-[10px] text-slate-500 font-semibold">Start your team partnership process instantly.</p>
                </div>
                <button
                  onClick={() => router.push(`/buy-corporate-membership/${plan.slug}`)}
                  className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-bold transition-all transform active:scale-95 shadow-lg flex items-center justify-center gap-2 text-xs"
                >
                  Continue to Registration <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* --- ABOUT THIS PLAN --- */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="text-emerald-600 font-extrabold text-sm uppercase tracking-wider">About This Plan</span>
          <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">Proactive Employee Care Redefined</h2>
          <p className="text-slate-600 text-base leading-relaxed">
            {plan.fullDescription} This program is tailored to provide comprehensive corporate oversight, ensuring employee baseline stats are actively monitored to capture risk coordinates early.
          </p>
        </div>
      </section>

      {/* --- WHAT'S INCLUDED --- */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">What's Included in the Program</h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">Comprehensive health deliverables packaged to protect your workplace.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {plan.features.map((feature, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                  <Check className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <p className="text-sm font-bold text-slate-800 leading-tight pt-1.5">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BENEFITS FOR ORGANIZATION VS EMPLOYEES --- */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">Benefits Breakdown</h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">Fostering a two-fold value model mapping organizational productivity and individual employee care.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* Organization Benefits */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-black text-slate-950 flex items-center gap-2 border-b border-slate-200 pb-3">
                <Building size={20} className="text-emerald-600" /> For the Organization
              </h3>
              <ul className="space-y-4">
                {plan.benefits.organization.map((b, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-sm text-slate-700 leading-relaxed font-semibold">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Employee Benefits */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-black text-slate-950 flex items-center gap-2 border-b border-slate-200 pb-3">
                <Users size={20} className="text-indigo-600" /> For the Employees
              </h3>
              <ul className="space-y-4">
                {plan.benefits.employees.map((b, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-sm text-slate-700 leading-relaxed font-semibold">
                    <CheckCircle2 size={16} className="text-indigo-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE THIS PLAN --- */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">Why Choose {plan.name}?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100">
              <Award className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <h4 className="font-extrabold text-slate-900 text-sm mb-1">Elite Standard</h4>
              <p className="text-xs text-slate-500 font-medium">Clinically backed checkups matching standard healthcare parameters.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100">
              <ShieldCheck className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
              <h4 className="font-extrabold text-slate-900 text-sm mb-1">Max Safety</h4>
              <p className="text-xs text-slate-500 font-medium">Comprehensive emergency coordination wrappers and direct lines.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100">
              <Sparkles className="w-8 h-8 text-amber-500 mx-auto mb-3" />
              <h4 className="font-extrabold text-slate-900 text-sm mb-1">High Savings</h4>
              <p className="text-xs text-slate-500 font-medium">Bundled wellness tests significantly reduce overall diagnostic costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">Plan Specific FAQs</h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">Clear solutions regarding the {plan.name} setup guidelines.</p>
          </div>

          <div className="space-y-4">
            {planFaqs.map((faq, index) => {
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
                    className="w-full flex justify-between items-center px-6 py-4.5 text-left font-bold text-slate-900 text-sm sm:text-base focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? 'rotate-180 text-emerald-600' : ''}`} />
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 border-t border-emerald-100/55 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                      }`}
                  >
                    <p className="px-6 py-4 text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- RELATED PLANS --- */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">Compare Other Corporate Plans</h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">Explore alternative tiers for customized coverage configurations.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedPlans.map((item) => (
              <div
                key={item.slug}
                className="bg-white border border-slate-200 p-6 rounded-3xl flex flex-col justify-between hover:shadow-md transition-shadow shadow-sm"
              >
                <div>
                  <h4 className="font-extrabold text-slate-950 text-base">{item.name}</h4>
                  <p className="text-xs text-slate-500 mt-1 font-medium leading-relaxed">{item.subtitle}</p>
                  <p className="text-lg font-black text-emerald-600 mt-3">{item.price}</p>
                </div>
                <button
                  onClick={() => router.push(`/corporate-wellness-partnership/${item.slug}`)}
                  className="w-full mt-6 py-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold border border-slate-200 text-xs shadow-sm transition-all"
                >
                  View Plan Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA BANNER --- */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl relative overflow-hidden animate-fade-in">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full filter blur-2xl pointer-events-none"></div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight relative z-10 leading-tight">
              Ready to Protect Your Team with the {plan.name}?
            </h2>

            <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-medium relative z-10">
              Provide premium preventive checkups, diagnostic camps, and emergency coordinator parameters today.
            </p>

            <div className="mt-8 relative z-10">
              <button
                onClick={() => router.push(`/buy-corporate-membership/${plan.slug}`)}
                className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-900 font-black px-8 py-4 rounded-xl transition-all transform active:scale-95 shadow-md flex items-center justify-center gap-2 mx-auto"
              >
                Buy This Plan <ArrowRight size={18} className="text-emerald-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
