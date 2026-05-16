import React from "react";
import {
  Activity,
  Shield,
  Microscope,
  RefreshCcw,
  Zap,
  Dna,
  HeartPulse,
  ArrowRight,
  Sparkles,
  Brain,
  Atom,
} from "lucide-react";

export const metadata = {
  title: "Anti-Aging Science | Mission 100 Longevity Lab",
  description:
    "Mission 100 Longevity Lab uses cellular repair science, mitochondrial optimization, and epigenetic diagnostics to slow biological aging and enhance human lifespan.",
  keywords: [
    "Anti aging science",
    "Longevity lab India",
    "Epigenetic testing",
    "Cell regeneration",
    "Mitochondria health",
  ],
};

export default function AntiAgingSciencePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-emerald-50/40 text-slate-900 overflow-x-hidden">

      {/* ================= HERO - LAB STYLE ================= */}
      <section className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6 overflow-hidden border-b border-emerald-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.12),transparent_50%)] pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center relative z-10 flex flex-col items-center">

          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-4 sm:px-5 py-2 rounded-full text-[10px] sm:text-xs font-bold text-emerald-700 uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-6 w-fit shadow-sm">
            <Sparkles size={14} className="shrink-0" />
            Mission 100 Longevity Research Lab
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
            Stop Aging at the <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Cellular Level</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We don’t “treat aging.” We analyze, repair, and optimize biological
            systems responsible for degeneration, energy loss, and cellular decay.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-emerald-100 transition-all">
              Start Bio-Age Analysis <ArrowRight size={18} className="shrink-0" />
            </button>

            <button className="bg-white border border-slate-200 hover:border-emerald-300 px-8 py-4 rounded-2xl font-bold text-slate-700 hover:bg-emerald-50 transition-all w-full sm:w-auto flex items-center justify-center">
              View Lab Report Sample
            </button>
          </div>
        </div>
      </section>

      {/* ================= BIO AGE DASHBOARD ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 -mt-8 sm:-mt-14 relative z-20">
        <div className="bg-slate-900 text-white rounded-[24px] sm:rounded-[3rem] p-6 sm:p-10 shadow-2xl flex flex-col lg:flex-row justify-between items-center lg:items-center gap-8 lg:gap-10 border border-slate-800">

          <div className="text-center lg:text-left w-full lg:w-auto">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-emerald-400 font-bold mb-2">
              Biological Age Dashboard
            </p>
            <h2 className="text-xl sm:text-2xl font-bold">Your Cellular Health Score</h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-md mx-auto lg:mx-0">
              Based on DNA repair, mitochondrial energy & inflammation markers
            </p>
          </div>

          <div className="flex flex-col items-center shrink-0 w-full sm:w-auto">
            <div className="text-6xl sm:text-7xl font-black text-white tracking-tight">82%</div>
            <div className="w-full sm:w-64 h-2 bg-slate-700 rounded-full mt-3 sm:mt-4 overflow-hidden">
              <div className="w-[82%] h-full bg-emerald-500 rounded-full" />
            </div>
          </div>

          <div className="text-[10px] sm:text-xs space-y-3 uppercase tracking-widest font-bold w-full sm:w-auto max-w-xs sm:max-w-sm shrink-0 bg-white/5 p-4 rounded-2xl sm:p-0 sm:bg-transparent border border-white/5 sm:border-0">
            <div className="flex justify-between gap-10">
              <span className="text-slate-400">Inflammation</span>
              <span className="text-red-400 font-black">Moderate</span>
            </div>
            <div className="flex justify-between gap-10">
              <span className="text-slate-400">Cell Repair</span>
              <span className="text-emerald-400 font-black">Active</span>
            </div>
            <div className="flex justify-between gap-10">
              <span className="text-slate-400">Energy Output</span>
              <span className="text-cyan-400 font-black">Optimal</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SCIENCE PIPELINE ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">

        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Longevity Science Pipeline
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">
            A 3-step biological optimization framework used in Mission 100 research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              icon: Microscope,
              title: "1. Diagnose",
              desc: "Epigenetic age testing, DNA methylation mapping, biomarker scanning.",
            },
            {
              icon: Shield,
              title: "2. Repair",
              desc: "Mitochondrial recovery, inflammation control, oxidative damage reversal.",
            },
            {
              icon: RefreshCcw,
              title: "3. Optimize",
              desc: "Autophagy activation, hormonal balance, metabolic efficiency upgrade.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-slate-100 hover:border-emerald-100 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-5 shrink-0">
                <item.icon className="text-emerald-600" size={26} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-slate-800">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CORE BIOLOGY ================= */}
      <section className="bg-emerald-50/40 py-16 sm:py-24 px-4 sm:px-6 border-y border-emerald-100/30">

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-6 sm:mb-8 text-slate-900">
              Core Biological Systems We Target
            </h2>

            <div className="space-y-4 w-full max-w-xl text-left">
              {[
                {
                  icon: Dna,
                  title: "DNA Integrity",
                  desc: "Repair genetic damage and reduce mutation accumulation.",
                },
                {
                  icon: Atom,
                  title: "Mitochondrial Energy",
                  desc: "Increase ATP production for cellular vitality.",
                },
                {
                  icon: HeartPulse,
                  title: "Inflammation Control",
                  desc: "Reduce chronic inflammation linked to aging diseases.",
                },
                {
                  icon: Zap,
                  title: "Cellular Renewal",
                  desc: "Activate regeneration pathways for tissue repair.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 sm:p-5 bg-white rounded-xl sm:rounded-2xl border border-slate-100 hover:border-emerald-200 transition-all shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-base mb-0.5">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full max-w-md lg:max-w-none mx-auto">
            <div className="absolute -inset-4 sm:-inset-6 bg-emerald-200 blur-3xl opacity-30 rounded-full pointer-events-none" />

            <div className="relative bg-emerald-700 text-white p-8 sm:p-12 rounded-[24px] sm:rounded-[3rem] shadow-2xl overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-xl pointer-events-none" />
              
              <Brain className="mb-5 sm:mb-6 text-emerald-200 shrink-0" size={40} />

              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Biological Optimization Mode
              </h3>

              <p className="text-emerald-100 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed opacity-90">
                Every system in your body is measurable, adjustable, and optimizable
                using modern bio-science.
              </p>

              <button className="bg-white text-emerald-700 hover:bg-slate-50 px-6 py-3.5 rounded-xl font-black flex items-center justify-center gap-2 shadow-lg transition-all w-full sm:w-auto text-sm">
                Generate Full Report <ArrowRight size={16} className="shrink-0" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">

        <div className="max-w-6xl mx-auto bg-slate-900 text-white rounded-[24px] sm:rounded-[3rem] p-8 sm:p-16 text-center relative overflow-hidden shadow-2xl">

          <div className="absolute top-0 right-0 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-emerald-500 blur-[100px] sm:blur-[140px] opacity-20 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 leading-tight tracking-tight">
              Begin Your Longevity Transformation
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8 sm:mb-10 opacity-90 leading-relaxed">
              Join Mission 100 Longevity Lab and discover how your biological age
              can be scientifically optimized.
            </p>

            <button className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4 sm:px-10 sm:py-5 rounded-2xl font-black flex items-center justify-center gap-2 w-full sm:w-auto shadow-xl transition-all">
              Start Analysis Now <ArrowRight size={18} className="shrink-0" />
            </button>
          </div>

        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="py-8 sm:py-10 text-center text-[10px] sm:text-xs text-slate-400 border-t border-slate-100 px-4 sm:px-6 max-w-4xl mx-auto leading-relaxed">
        Mission 100 Longevity Science is a research-based wellness optimization
        system and does not replace clinical diagnosis or emergency treatment.
      </section>

    </main>
  );
}