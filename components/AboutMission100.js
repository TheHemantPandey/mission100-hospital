"use client";
import React from "react";
import { ShieldCheck, Clock, MapPin, HeartPulse, Activity, Microscope, Award } from "lucide-react";

const AboutMission100 = () => {
  return (
    <div className="mb-12 text-center">
      {/* Header Section */}
      <div className="space-y-4 mb-10">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
          Mission 100 <span className="text-green-600">Hospital</span>
        </h1>
        <div className="text-green-900 font-bold mx-auto rounded-full">You can Live 100 Years</div>
        <div className="w-24 h-1.5 bg-green-500 mx-auto rounded-full"></div>
        <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed mt-4">
          Innovating for a longer, better life. Mission 100 is not just a hospital; it is a movement dedicated to 
          extending the human healthspan. By merging clinical excellence with preventative science, we bring 
          hospital-grade care directly to your home.
        </p>
      </div>
      
      
    </div>
  );
};

export default AboutMission100;