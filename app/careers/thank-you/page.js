"use client";

import Link from "next/link";
import { CheckCircle2, ChevronRight, Home } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-white via-slate-50 to-green-50/50 flex items-center justify-center py-16 px-4">
      <div className="max-w-xl w-full bg-white border border-slate-100 rounded-4xl shadow-2xl p-8 sm:p-12 text-center relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-200/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          {/* Animated Success Checkmark */}
          <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-emerald-100">
            <CheckCircle2 className="w-10 h-10 text-emerald-500 animate-bounce" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Application Submitted Successfully
          </h1>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Thank you for your interest in joining Mission100. We have received your details and your documents. Our HR team will review your profile and reach out if you are shortlisted.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/careers"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-linear-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-1.5"
            >
              VIEW OPEN POSITIONS <ChevronRight className="w-4.5 h-4.5" />
            </Link>
            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 flex items-center justify-center gap-1.5"
            >
              <Home className="w-4 h-4 text-slate-500" /> BACK TO MISSION100
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
