import React from "react";
import Link from "next/link";
import { Activity, ArrowRight, ShieldCheck, PhoneCall } from "lucide-react";

export default function BlogCTA() {
  return (
    <section className="max-w-7xl mx-auto mb-16 px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-slate-800">
        {/* Ambient Glows */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/30">
            <Activity className="w-3.5 h-3.5" />
            <span>Mission100 Healthcare</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-4 leading-tight">
            Take the Next Step for Your Health
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 font-medium">
            From preventive checkups to diagnostic testing, Mission100 helps you
            understand your health and take informed action with certified
            phlebotomists, hygienic doorstep sample collection, and doctor-verified reports.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/test/complete-health-checkup"
              className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm tracking-wide shadow-lg shadow-emerald-500/20 transition-all active:scale-95 inline-flex items-center gap-2"
            >
              <span>Explore Health Checkups</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/find-a-test"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/15 transition-all"
            >
              Explore Diagnostic Tests
            </Link>

            <a
              href="tel:+918796471583"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white px-3 py-2 transition-colors ml-auto sm:ml-0"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>Helpline: +91 87964 71583</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Free Doorstep Sample Collection</span>
            </div>
            <span>•</span>
            <div>Same-Day Digital Reports</div>
            <span>•</span>
            <div>Doctor Review Included</div>
          </div>
        </div>
      </div>
    </section>
  );
}
