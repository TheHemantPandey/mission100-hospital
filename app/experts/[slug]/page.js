import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import practitioners from "@/data/doctor.json";
import {
  GraduationCap,
  Clock3,
  CalendarCheck,
  Video,
  MapPin,
  Globe2,
  Sparkles,
  ArrowLeft,
  Award,
  CheckCircle2,
  ShieldCheck,
  Activity,
  HeartHandshake
} from "lucide-react";

export default async function ExpertProfilePage({ params }) {
  const { slug } = await params;

  // Locate the specific expert matching the URL parameter
  const expert = practitioners.find((p) => p.slug === slug);

  if (!expert) {
    notFound();
  }

  const areasOfFocus = expert.areasOfFocus || [];
  const certifications = expert.certifications || [];

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      
      {/* 1. Premium Gradient Hero Banner */}
      <div className="h-56 md:h-72 bg-gradient-to-r from-slate-900 via-slate-800 to-green-900 w-full relative">
        <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Experts
          </Link>
        </div>
      </div>

      {/* 2. Main Content Container (Expanded to max-w-7xl) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-28 md:-mt-32 relative z-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left/Center Content Column */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Primary Profile Card (Overlapping the banner) */}
            <div className="bg-white rounded-3xl border border-slate-100 p-6 md:p-8 shadow-xl flex flex-col md:flex-row gap-8 md:items-center">
              
              {/* Profile Image with Ring Highlight */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 border-4 border-white shadow-lg ring-1 ring-slate-100">
                <Image
                  src={expert.img}
                  alt={expert.name}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Core Details */}
              <div className="space-y-4 flex-1">
                <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-800 text-[10px] md:text-xs px-3 py-1.5 rounded-full font-bold uppercase tracking-widest border border-green-100/50">
                  <Sparkles size={12} className="text-green-600" /> {expert.specialty}
                </div>
                
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {expert.name}
                </h1>

                {/* Quick Trust Stats Row */}
                <div className="flex flex-wrap items-center gap-4 text-slate-600 text-sm font-medium">
                  <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                    <GraduationCap size={16} className="text-green-600" />
                    {expert.qualification}
                  </div>
                  <div className="flex items-center gap-1.5 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md border border-blue-100">
                    <ShieldCheck size={16} />
                    Mission100 Verified
                  </div>
                </div>

                <p className="text-slate-700 text-sm md:text-base font-medium leading-relaxed italic border-l-4 border-green-500 pl-4 py-1">
                  "{expert.expertise}"
                </p>
              </div>
            </div>

            {/* Comprehensive Information Blocks */}
            <div className="bg-white rounded-3xl border border-slate-100 p-6 md:p-8 shadow-sm space-y-10">
              
              {expert.about && (
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                    About the Expert
                  </h2>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {expert.about}
                  </p>
                </div>
              )}

              {areasOfFocus.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                    Areas of Clinical Focus
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {areasOfFocus.map((focus, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-2 bg-slate-50 hover:bg-green-50 transition-colors text-slate-700 text-sm font-semibold px-4 py-2.5 rounded-xl border border-slate-200"
                      >
                        <CheckCircle2 size={15} className="text-green-600" />
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {certifications.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                    Professional Accreditations
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certifications.map((cert, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100"
                      >
                        <Award size={20} className="text-amber-500 flex-shrink-0" />
                        <span className="font-medium text-sm leading-tight">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Universal "How it Works" Section */}
            <div className="bg-slate-900 rounded-3xl p-6 md:p-8 shadow-lg text-white">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Activity className="text-green-400" /> How Mission100 Consultations Work
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold mb-3 border border-green-500/30">1</div>
                  <h3 className="font-bold text-sm">Book Your Slot</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">Choose a time that works for you based on the expert's real-time availability.</p>
                </div>
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold mb-3 border border-green-500/30">2</div>
                  <h3 className="font-bold text-sm">Connect Directly</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">Meet securely via HD video call or visit in-person at designated centers.</p>
                </div>
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold mb-3 border border-green-500/30">3</div>
                  <h3 className="font-bold text-sm">Get Your Plan</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">Receive personalized prescriptions, diet charts, or lifestyle plans instantly.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Sidebar: Sticky Booking Card */}
          <div className="space-y-6 lg:sticky lg:top-8">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl overflow-hidden">
              
              {/* Card Top Accent Line */}
              <div className="h-2 w-full bg-green-600"></div>
              
              <div className="p-6 md:p-8 space-y-6">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider text-center">
                  Consultation Overview
                </h3>

                <div className="space-y-5 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  
                  {/* Mode */}
                  <div className="flex items-center justify-between border-b border-slate-200/60 pb-3">
                    <div className="flex items-center gap-2.5 text-slate-500 text-sm font-medium">
                      {expert.consultationType.includes("Online") ? (
                        <Video size={18} className="text-slate-400" />
                      ) : (
                        <MapPin size={18} className="text-slate-400" />
                      )}
                      <span>Mode</span>
                    </div>
                    <span className="text-sm font-bold text-slate-900 bg-white px-3 py-1 rounded-lg border border-slate-200">
                      {expert.consultationType}
                    </span>
                  </div>

                  {/* Languages */}
                  <div className="flex items-center justify-between border-b border-slate-200/60 pb-3">
                    <div className="flex items-center gap-2.5 text-slate-500 text-sm font-medium">
                      <Globe2 size={18} className="text-slate-400" />
                      <span>Languages</span>
                    </div>
                    <span className="text-sm font-bold text-slate-900 max-w-[140px] truncate text-right">
                      {expert.languages.join(", ")}
                    </span>
                  </div>

                  {/* Availability */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5 text-slate-500 text-sm font-medium">
                      <Clock3 size={18} className="text-slate-400" />
                      <span>Next Slot</span>
                    </div>
                    <span className="text-sm font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-lg">
                      {expert.nextSlot}
                    </span>
                  </div>
                </div>

                {/* Updated Route Link Passing Expert Slug via Query String */}
                <Link
                  href={`/doctor-appointment?expert=${expert.slug}`}
                  className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-4 rounded-xl text-base font-bold hover:bg-green-700 transition-all active:scale-[0.98] shadow-lg shadow-green-600/20"
                >
                  <CalendarCheck size={20} /> Book Consultation Now
                </Link>

                {/* Security Trust Note */}
                <p className="text-xs text-center text-slate-400 flex items-center justify-center gap-1.5 font-medium">
                  <ShieldCheck size={14} className="text-green-500" /> 100% Secure & Confidential
                </p>
              </div>
            </div>

            {/* Secondary Contact Prompt */}
            <div className="bg-green-50 rounded-2xl p-5 border border-green-100 flex items-start gap-4">
              <div className="bg-white p-2 rounded-full shadow-sm text-green-600 flex-shrink-0">
                <HeartHandshake size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Need help choosing?</h4>
                <p className="text-xs text-slate-600 mb-3 leading-relaxed">Our wellness coordinators can help you find the perfect expert for your needs.</p>
                <Link href="/#Contact-Support" className="text-xs font-bold text-green-700 hover:underline">
                  Contact Support →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}