import React from 'react';
import { Quote, Activity, Brain, HeartPulse, Microscope } from 'lucide-react';

const Philosophy = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text and Vision */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 text-green-600 font-bold uppercase tracking-[0.2em] text-sm">
              <Microscope size={20} />
              The Core Philosophy
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Shifting from <span className="text-slate-400 line-through decoration-red-400/50">Reactive</span> to <span className="text-green-600">Preventive</span> Care
            </h2>

            <div className="relative">
              <Quote className="absolute -top-4 -left-6 text-green-100" size={60} />
              <p className="text-xl text-slate-700 leading-relaxed relative z-10 font-medium">
                "At Mission 100, we are dedicated to the revolutionary idea that healthcare should be preventive rather than just reactive. "
              </p>
            </div>

            <p className="text-slate-600 leading-relaxed text-lg">
              Our mission is to provide the tools, data, and guidance necessary for every individual to achieve a healthy, vibrant century of life.  We ensure the aging process is managed with dignity, strength, and scientific precision. 
            </p>

            {/* Lifecycle Focus Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="text-green-600 font-bold text-xs uppercase mb-1">Phase I</div>
                <div className="text-slate-900 font-bold text-sm">Child before Birth </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="text-green-600 font-bold text-xs uppercase mb-1">Phase II</div>
                <div className="text-slate-900 font-bold text-sm">Active Adults </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="text-green-600 font-bold text-xs uppercase mb-1">Phase III</div>
                <div className="text-slate-900 font-bold text-sm">The Elderly </div>
              </div>
            </div>
          </div>

          {/* Right Side: Features/Pillars Cards */}
          <div className="relative">
            {/* Background Decorative Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-50 rounded-full blur-3xl -z-10 opacity-60" />
            
            <div className="grid gap-6">
              {/* Integration Card */}
              <div className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-50 flex gap-5 items-start translate-x-4">
                <div className="bg-green-600 p-3 rounded-2xl text-white shadow-lg shadow-green-200">
                  <Activity size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Modern & Vedic Integration</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Integration of modern Radiology and Pathology with traditional Ayurveda. 
                  </p>
                </div>
              </div>

              {/* Data Insights Card */}
              <div className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-50 flex gap-5 items-start">
                <div className="bg-slate-900 p-3 rounded-2xl text-white shadow-lg shadow-slate-200">
                  <HeartPulse size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Data-Driven Insights</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Utilizing ECG heart risk analysis and body deficiency monitoring for precise care. 
                  </p>
                </div>
              </div>

              {/* Peace of Mind Card */}
              <div className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-50 flex gap-5 items-start translate-x-4">
                <div className="bg-amber-500 p-3 rounded-2xl text-white shadow-lg shadow-amber-200">
                  <Brain size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Holistic Support</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Ensuring peace of mind through stress and happiness measurement. 
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;