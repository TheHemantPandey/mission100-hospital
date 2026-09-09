import React from "react";
import { Sparkles, ShieldCheck } from "lucide-react";

export default function BlogHero() {
  return (
    <section className="pt-20 sm:pt-24 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      {/* Eyebrow */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/90 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-4 shadow-2xs">
        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
        <span>MISSION100 HEALTH BLOG</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] mb-4 max-w-4xl mx-auto">
        Understand Your Health.{" "}
        <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
          Make Better Decisions.
        </span>
      </h1>

      {/* Supporting text */}
      <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto mb-6">
        Reliable information on preventive healthcare, diagnostic tests, health
        checkups, heart health and healthy aging.
      </p>

      {/* Subtle trust note */}
      <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
        <ShieldCheck className="w-4 h-4 text-emerald-600" />
        <span>Doctor-Verified Medical Guides &amp; Diagnostic Insights</span>
      </div>
    </section>
  );
}
