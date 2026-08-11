"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Building2, 
  CheckCircle, 
  Users, 
  ShieldCheck, 
  ArrowRight, 
  MessageSquare,
  Sparkles,
  Building,
  HeartPulse
} from "lucide-react";
import { corporatePlans } from "../app/corporate-wellness-partnership/plansData";

export default function CorporateWellnessPreview() {
  const plansList = Object.values(corporatePlans);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    }
  };

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-green-50/20 border-y border-slate-100">
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-200/20 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-200/20 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          
          {/* LEFT COLUMN: Narrative & Benefits */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200 shadow-sm">
                <Building size={12} className="text-emerald-600" /> For Businesses
              </span>
              
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight tracking-tight">
                Healthy Employees.<br />
                <span className="bg-gradient-to-r from-emerald-600 to-indigo-600 bg-clip-text text-transparent">
                  Stronger Companies.
                </span>
              </h2>
              
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
                Mission100 helps organizations implement proactive preventive healthcare. By integrating on-site diagnostic screening camps, 24x7 emergency configurations, and custom lifestyle tracking, we increase engagement while reducing absenteeism.
              </p>
            </motion.div>

            {/* Benefit List */}
            <motion.ul variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Reduced Absenteeism", desc: "Catch risk factors early before symptoms evolve." },
                { title: "On-site Medical Camps", desc: "Regular pathology screening diagnostics at office campuses." },
                { title: "24x7 Ambulance Wrapper", desc: "Emergency assistance linkages matching corporate offices." },
                { title: "Premium Care Benefits", desc: "Priority doctor appointments & home sampling coordinates." }
              ].map((benefit, idx) => (
                <li key={idx} className="flex gap-3 items-start bg-white/60 backdrop-blur-sm border border-slate-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-1 rounded-lg bg-emerald-50 text-emerald-600 mt-0.5">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-950 text-sm">{benefit.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-snug">{benefit.desc}</p>
                  </div>
                </li>
              ))}
            </motion.ul>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link href="/corporate-wellness-partnership" className="grow sm:grow-0">
                <button className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white shadow-lg shadow-emerald-600/10 hover:shadow-emerald-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                  View Corporate Plans <ArrowRight size={18} />
                </button>
              </Link>
              
              <Link href="/corporate-wellness-partnership" className="grow sm:grow-0">
                <button className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                  <MessageSquare size={18} /> Talk to Our Team
                </button>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Plan Preview Cards */}
          <div className="lg:col-span-6 space-y-6">
            {plansList.map((plan) => {
              // Static mapping for colors to compile in Tailwind CSS correctly
              const accentBorderColor = 
                plan.slug === "free-plan" ? "bg-slate-500" : 
                plan.slug === "silver-plan" ? "bg-indigo-600" : "bg-amber-505 bg-amber-500";
              
              const iconTextColor = 
                plan.slug === "free-plan" ? "text-slate-500" : 
                plan.slug === "silver-plan" ? "text-indigo-600" : "text-amber-500";

              return (
                <Link 
                  href={`/corporate-wellness-partnership/${plan.slug}`} 
                  key={plan.slug}
                  className="block cursor-pointer"
                >
                  <motion.div 
                    variants={itemVariants}
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="group relative overflow-hidden bg-white hover:bg-slate-50/50 rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6"
                  >
                    
                    {/* Visual Accent Border */}
                    <div className={`absolute top-0 left-0 w-2 h-full ${accentBorderColor}`} />

                    {/* Plan Image/Thumbnail */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden shadow-inner">
                      <Image
                        src={plan.image}
                        alt={plan.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Plan Text Detail */}
                    <div className="grow space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-extrabold text-slate-950 group-hover:text-emerald-700 transition-colors">
                          {plan.name}
                        </h3>
                        <span className={`inline-block border text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${plan.theme.badge}`}>
                          {plan.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-sm">
                        {plan.subtitle}
                      </p>
                      <div className="flex items-baseline gap-1 pt-1">
                        <span className="text-lg font-black text-slate-950">{plan.price}</span>
                        <span className="text-[10px] text-slate-400 font-semibold">/{plan.duration.toLowerCase()}</span>
                      </div>
                    </div>

                    {/* Micro Action Indicator */}
                    <div className="self-stretch flex items-center justify-end sm:justify-center pr-2 shrink-0">
                      <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-colors">
                        <ArrowRight size={14} className="transform group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>

                  </motion.div>
                </Link>
              );
            })}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
