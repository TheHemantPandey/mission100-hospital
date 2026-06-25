"use client";

import React, { use } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";
import { plans, comparisonImageUrl } from "../plansData";
import {
  CheckCircle2,
  ShieldCheck,
  Home,
  Stethoscope,
  PhoneCall,
  ArrowRight,
  Sparkles,
  ChevronRight
} from "lucide-react";

export default function PlanPage({ params }) {
  // Safe unwrapping of current path parameters
  const resolvedParams = use(params);
  const currentSlug = resolvedParams.slug;
  const plan = plans[currentSlug];

  if (!plan) {
    notFound();
  }

  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-12 overflow-x-hidden">

      {/* --- HERO SECTION --- */}
<section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white py-16 md:py-24 border-b border-slate-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
    
    {/* Left Side: Text Content */}
    <div className="text-center lg:text-left">
      <span className="inline-flex items-center gap-1.5 border px-4 py-2 rounded-full text-xs font-black tracking-wider uppercase backdrop-blur-sm shadow-inner bg-slate-800/80 border-slate-700 text-slate-300">
        <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> {plan.name} Package
      </span>

      <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight text-white">
        Premium Healthcare <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 via-indigo-200 to-white">
          Built Around Your Needs
        </span>
      </h1>

      <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
        Experience elite preventive medical solutions with scheduled expert doctor calls, comprehensive diagnostic support updates, and home convenience protocols.
      </p>

      {/* DESKTOP ONLY: Pricing & CTA Box (Hidden on mobile/tablet, visible on large screens) */}
      <div className="hidden lg:flex flex-col gap-6 mt-8">
        <div className="bg-slate-800/40 border border-slate-800 p-6 rounded-2xl inline-flex items-center justify-start gap-6 w-auto self-start">
          <div>
            <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              {plan.price}<span className="text-xs text-slate-400 font-semibold">/year</span>
            </div>
            <div className="text-green-400 font-black text-sm uppercase tracking-wider mt-1">
              {plan.costPerDay}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push(`/buy-membership/${currentSlug}`)}
            className="bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-bold transition-all transform active:scale-95 shadow-lg flex items-center justify-center gap-2"
          >
            Activate {plan.name} <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

    {/* Right Side: Image Column */}
    <div className="w-full max-w-md md:max-w-xl mx-auto">
      <div className="relative rounded-3xl shadow-2xl overflow-hidden border border-slate-800 p-2 bg-slate-900/60 backdrop-blur-md">
        {plan.isPopular && (
          <div className="absolute top-6 right-6 z-20">
            <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-md">
              MOST POPULAR
            </span>
          </div>
        )}
        <Image
          src={plan.image}
          alt={`${plan.name} Poster`}
          width={800}
          height={1000}
          className="rounded-2xl w-full h-auto object-cover"
          priority
        />
      </div>

      {/* MOBILE/TABLET ONLY: Pricing & CTA Box (Visible on small screens, hidden on desktop) */}
      <div className="flex lg:hidden flex-col items-center gap-6 mt-8 w-full">
        <div className="bg-slate-800/40 border border-slate-800 p-6 rounded-2xl flex flex-col items-center justify-center gap-2 w-full sm:w-auto sm:px-12">
          <div className="text-4xl font-black text-white tracking-tight">
            {plan.price}<span className="text-xs text-slate-400 font-semibold">/year</span>
          </div>
          <div className="text-green-400 font-black text-sm uppercase tracking-wider">
            {plan.costPerDay}
          </div>
        </div>

        <button
          onClick={() => router.push(`/buy-membership/${currentSlug}`)}
          className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-bold transition-all transform active:scale-95 shadow-lg flex items-center justify-center gap-2"
        >
          Activate {plan.name} <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>

  </div>

  {/* Dynamic Glow Effect */}
  <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl opacity-10 ${plan.theme.glow}`}></div>
</section>
      {/* --- WHO IS THIS PLAN FOR --- */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">Who Is This Plan For?</h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">Explicit target configurations tailored seamlessly around your lifestyle priorities.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-md mx-auto lg:max-w-none">
            {plan.bestFor.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 hover:bg-slate-900 hover:text-white rounded-2xl p-6 border border-slate-200/60 transition-all duration-300 group flex flex-col items-center text-center shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-slate-800 group-hover:text-indigo-400 transition-colors mb-4 shadow-inner">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 group-hover:text-white transition-colors text-base">{item.title}</h4>
                <p className="text-slate-500 group-hover:text-slate-400 transition-colors text-xs mt-1.5 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHAT'S INCLUDED BENEFITS --- */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">Core Inclusions & Benefits</h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">Everything fully bundled inside your medical membership plan wrapper.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5"><Stethoscope className="w-6 h-6" /></div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Doctor Consultation</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">Direct premium priority link to qualified medical consultation pathways whenever required.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60">
              <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-5"><Home className="w-6 h-6" /></div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Home Support</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">Routine tracking coordinates, sampling profiles and testing structures delivered right to your home.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5"><ShieldCheck className="w-6 h-6" /></div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Preventive Care</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">Continuous baseline checks monitor trends to fix health issues before severe symptoms develop.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-5"><PhoneCall className="w-6 h-6" /></div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Priority Assistance</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">Bypass generic queues entirely with dedicated client registration channels for rapid configurations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- COMPLETE DEEP DIVE PLAN DETAILS IMAGE --- */}
      <section className="py-20 bg-white border-y border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">Complete Plan Details</h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">A complete visual breakdown of itemized inclusions under the {plan.name} structure.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-2 sm:p-4">
            <div className="w-full">
              <Image
                src={plan.image}
                alt={`Complete ${plan.name} Structural Inclusions`}
                width={1200}
                height={1600}
                className="rounded-2xl w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- VALUE OPTIMIZATION FINANCIAL CARD --- */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white opacity-5"></div>
            
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8 relative z-10 text-center md:text-left">
              Save More Every Year
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
              <div className="bg-slate-800/50 border border-slate-800 rounded-2xl p-6 sm:p-8">
                <ul className="space-y-4 font-semibold text-slate-300 text-sm sm:text-base">
                  <li className="flex items-center gap-2.5"><ChevronRight className="w-4 h-4 text-indigo-400" /> Comprehensive Consultations Pack</li>
                  <li className="flex items-center gap-2.5"><ChevronRight className="w-4 h-4 text-indigo-400" /> Specialized Diagnostics Alignment</li>
                  <li className="flex items-center gap-2.5"><ChevronRight className="w-4 h-4 text-indigo-400" /> Routine Strategic Screenings</li>
                  <li className="flex items-center gap-2.5"><ChevronRight className="w-4 h-4 text-indigo-400" /> Priority Support Routing Access</li>
                </ul>
              </div>

              <div className="text-center md:text-left md:pl-6">
                <div className="line-through text-slate-500 text-lg sm:text-xl font-bold">
                  Individual Services Cost: {plan.originalPrice}+
                </div>

                <div className="mt-3 text-4xl sm:text-5xl font-black text-green-400 tracking-tight">
                  You Pay: {plan.price}
                </div>

                <div className="mt-5 inline-flex bg-green-500/10 border border-green-500/30 text-green-400 px-5 py-2.5 rounded-xl font-black text-sm uppercase tracking-wide">
                  🎉 {plan.savings}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ALL MATRIX COMPARISON MASTER TABLE --- */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">Compare All Plans</h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">See how your current choice stands up against the entire hospital operational framework matrix.</p>
          </div>

          <div className="w-full rounded-3xl border border-slate-200 shadow-xl bg-white p-2 md:p-4">
            <div className="w-full">
              <Image
                src={comparisonImageUrl}
                alt="Comprehensive Membership Comparison Table Layout"
                width={1400}
                height={1000}
                className="w-full h-auto rounded-xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- CLOSING FINAL CONVERSION ACTION --- */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full filter blur-2xl"></div>
            
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight relative z-10 leading-tight">
              Ready To Start Your <br className="sm:hidden" /> Healthcare Journey?
            </h2>

            <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-medium relative z-10">
              Join Mission 100 members today to access direct, continuous, and highly structured preventive care right from your pocket.
            </p>

            <div className="mt-8 relative z-10">
              <button
                onClick={() => router.push(`/buy-membership/${currentSlug}`)}
                className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-900 font-black px-8 py-4 rounded-xl transition-all transform active:scale-95 shadow-md flex items-center justify-center gap-2 mx-auto"
              >
                Buy {plan.name} Now <ArrowRight className="w-4 h-4 text-indigo-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}