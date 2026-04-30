import React from 'react';
import MissionHero from "@/components/about/MissionHero";
import Philosophy from "@/components/about/Philosophy";
import HybridApproach from "@/components/about/HybridApproach";
import CorePillars from "@/components/about/CorePillars";
import LongevityModeling from "@/components/about/LongevityModeling";
import TrustSection from "@/components/about/TrustSection";
import DoctorSection from "@/components/DoctorCard";

// --- UPDATED METADATA ---
export const metadata = {
  title: "About Us", 
  description: "Mission 100 is dedicated to preventive healthcare, blending ancient Ayurveda with modern longevity science to help you live a vibrant 100-year life.",
  keywords: ["Preventive Healthcare", "Longevity Science", "Ayurveda and Modern Medicine", "Mission 100 Team"],
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* 1. Introduction: The "100-Year Life" Vision */}
      <MissionHero />

      {/* 2. Deep Dive: Shifting from Reactive to Preventive Care */}
      <Philosophy />

      {/* 3. The Science: Blending Modern Medicine & Ayurveda */}
      <HybridApproach />

      {/* 4. Clinical Focus: Heart, Bone, and Mental Health Pillars */}
      <CorePillars />

      {/* 5. The Team: India's Top Specialists */}
      <div className="bg-slate-50 py-12">
        <DoctorSection />
      </div>

      {/* 6. Advanced Tech: Biological Age & Longevity Modeling */}
      <LongevityModeling />

      {/* 7. Footer Info: Contact, Address, and Medical Disclaimers */}
      <TrustSection />
    </div>
  );
}