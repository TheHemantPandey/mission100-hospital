"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Shield,
  Activity,
  Layers,
  TrendingUp,
  ChevronRight,
  Plus,
  Weight,
  Zap,
  ArrowDownCircle,
  Dna,
} from "lucide-react";

export default function BoneStrengthLongevity() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-6 lg:px-12 pt-28 pb-20 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:26px_26px] opacity-40"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">

          {/* LEFT */}
          <div>
            <span className="inline-flex px-4 py-1 text-xs font-bold bg-blue-600 text-white rounded-full">
              Bone Strength Program
            </span>

            <h1 className="mt-6 text-4xl sm:text-6xl font-black leading-tight">
              Strong Bones.
              <br />
              <span className="text-blue-600">Stronger Life Longevity.</span>
            </h1>

            <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-xl">
              Bone health is the foundation of lifelong mobility. We use advanced DXA scanning, nutrition correction, and exercise therapy to prevent fractures before they happen.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/book-test"
                className="bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-blue-600 transition"
              >
                Book DXA Scan <ChevronRight size={18} />
              </Link>

              <button className="border border-slate-300 px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition">
                Download Report Sample
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"
              className="rounded-3xl w-full h-[380px] object-cover"
              alt="Bone Health"
            />

            <div className="absolute -bottom-5 -right-5 bg-blue-600 text-white p-5 rounded-2xl shadow-xl">
              <p className="text-xs uppercase tracking-widest">T-Score</p>
              <p className="text-3xl font-black">Stable</p>
            </div>
          </div>

        </div>
      </section>

      {/* WHY BONE HEALTH MATTERS */}
      <section className="py-20 px-6 lg:px-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-black">
            Why Bone Strength Matters
          </h2>

          <p className="mt-6 text-slate-300 max-w-3xl mx-auto">
            Bone density loss is silent. Most people only discover osteoporosis after fractures occur. Our system prevents that through early detection.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-14 text-left">

            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
              <Shield className="text-blue-400 mb-4" />
              <h3 className="font-bold text-xl">Fracture Prevention</h3>
              <p className="text-slate-300 mt-2 text-sm">
                Reduce risk of hip, spine, and wrist fractures through early intervention.
              </p>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
              <Activity className="text-blue-400 mb-4" />
              <h3 className="font-bold text-xl">Mobility Preservation</h3>
              <p className="text-slate-300 mt-2 text-sm">
                Maintain independence and movement even in advanced age.
              </p>
            </div>

            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
              <TrendingUp className="text-blue-400 mb-4" />
              <h3 className="font-bold text-xl">Healthy Aging</h3>
              <p className="text-slate-300 mt-2 text-sm">
                Strong bones support a longer, healthier, active life.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* DIAGNOSTIC PROCESS */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl sm:text-5xl font-black text-center">
            Bone Health Diagnostic Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-16">

            {[
              {
                title: "Step 1",
                desc: "DXA Bone Scan",
                icon: <Layers />,
              },
              {
                title: "Step 2",
                desc: "Risk Analysis",
                icon: <Dna />,
              },
              {
                title: "Step 3",
                desc: "Nutrition Plan",
                icon: <Zap />,
              },
              {
                title: "Step 4",
                desc: "Strength Training",
                icon: <Weight />,
              },
            ].map((step, i) => (
              <div
                key={i}
                className="p-8 bg-slate-50 rounded-2xl border hover:shadow-md transition"
              >
                <div className="text-blue-600 mb-4">{step.icon}</div>
                <h3 className="font-bold">{step.title}</h3>
                <p className="text-slate-600 mt-2 text-sm">{step.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* LIFESTYLE SECTION */}
      <section className="py-24 px-6 lg:px-12 bg-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          <img
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514"
            className="rounded-3xl h-[420px] object-cover"
            alt="Medical scan"
          />

          <div>
            <h2 className="text-4xl font-black">
              Lifestyle & Bone Strength Optimization
            </h2>

            <p className="mt-6 text-slate-600">
              Bone health is not just medical — it is lifestyle driven. We combine movement science, nutrition, and monitoring systems.
            </p>

            <ul className="mt-8 space-y-4 text-slate-700">
              <li>✔ Daily calcium & Vitamin D balance tracking</li>
              <li>✔ Weight-bearing exercise programs</li>
              <li>✔ Posture correction & mobility training</li>
              <li>✔ Fall prevention education</li>
            </ul>
          </div>

        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className="py-24 px-6 lg:px-12 bg-green-600 text-white text-center">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl sm:text-5xl font-black">
            Real Bone Health Outcomes
          </h2>

          <p className="mt-6 text-blue-100">
            Continuous monitoring shows measurable improvement in bone density and mobility.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mt-14">

            <div className="bg-white/10 p-10 rounded-2xl">
              <p className="text-5xl font-black">94%</p>
              <p className="mt-2 text-blue-100">Bone Health Score</p>
            </div>

            <div className="bg-white/10 p-10 rounded-2xl">
              <p className="text-5xl font-black">Low</p>
              <p className="mt-2 text-blue-100">Fracture Risk Index</p>
            </div>

          </div>

        </div>
      </section>

      
    </main>
  );
}