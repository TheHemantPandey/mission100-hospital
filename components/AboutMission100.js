"use client";
import React from "react";
import { ShieldCheck, Clock, MapPin, HeartPulse, Activity, Microscope, Award } from "lucide-react";

const AboutMission100 = () => {
  return (
    <div className="mb-12 text-center">
      {/* Header Section */}
      <div className="space-y-4 mb-10">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
          Mission 100 <span className="text-green-600">Longevity Center</span>
        </h1>
        <div className="w-24 h-1.5 bg-green-500 mx-auto rounded-full"></div>
        <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed mt-4">
          Innovating for a longer, better life. Mission 100 is not just a hospital; it is a movement dedicated to 
          extending the human healthspan. By merging clinical excellence with preventative science, we bring 
          hospital-grade care directly to your home.
        </p>
      </div>
      
      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-12">
        {/* Clinical Excellence */}
        <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
            <Microscope className="w-6 h-6" />
          </div>
          <h4 className="font-bold text-lg text-slate-800">Advanced Diagnostics</h4>
          <p className="text-sm text-slate-500 leading-relaxed mt-2">
            Access to professional lab testing services and neurological mapping to track your biological age and vital markers.
          </p>
        </div>

        {/* Preventative Care */}
        <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-4">
            <Activity className="w-6 h-6" />
          </div>
          <h4 className="font-bold text-lg text-slate-800">Health Optimization</h4>
          <p className="text-sm text-slate-500 leading-relaxed mt-2">
            Specialized care in heart health, bone strength, and mental wellness designed to prevent illness before it starts.
          </p>
        </div>

        {/* Trusted Authority */}
        <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h4 className="font-bold text-lg text-slate-800">Trusted Doctors</h4>
          <p className="text-sm text-slate-500 leading-relaxed mt-2">
            Consult with our panel of verified clinical experts who specialize in long-term quality of life preservation.
          </p>
        </div>
      </div>

      {/* Quick Stats/Trust Bar */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 py-6 border-y border-slate-100 mb-12">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-slate-400" />
          <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">24/7 Support Available</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-slate-400" />
          <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">Serving Delhi & NCR</span>
        </div>
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-slate-400" />
          <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">ISO Certified Care</span>
        </div>
      </div>
    </div>
  );
};

export default AboutMission100;