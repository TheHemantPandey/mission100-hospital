"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  Ambulance,
  Home,
  Clock,
  Users,
  MessageCircle,
  ArrowRight,
  Stethoscope
} from "lucide-react";

// --- PASTE YOUR IMAGE URLS HERE ---
const posterImages = [
  { id: 'silver', name: 'Silver Care', imgUrl: '/membership-plans/silver-plan.png', btnColor: 'bg-slate-800 hover:bg-slate-700 text-white' },
  { id: 'gold', name: 'Gold Care', imgUrl: '/membership-plans/gold-plan.png', btnColor: 'bg-amber-500 hover:bg-amber-600 text-white' },
  { id: 'platinum', name: 'Platinum Care', imgUrl: '/membership-plans/platinum-plan.png', btnColor: 'bg-blue-600 hover:bg-blue-700 text-white' },
  { id: 'pro', name: 'Pro Fitness Plan', imgUrl: '/membership-plans/pro-fitness-plan.png', btnColor: 'bg-green-600 hover:bg-green-700 text-white' }
];

const comparisonImageUrl = "/membership-plans/comparison.jpg";

// --- Simple hook for animating numbers ---
const useAnimatedCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return count;
};

// --- MAIN COMPONENT ---
export default function MembershipPlans() {
  const router = useRouter();

  // Animated counters
  const membersCount = useAnimatedCounter(2000);
  const appointmentsCount = useAnimatedCounter(1000);
  const doctorsCount = useAnimatedCounter(50);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-32 md:pb-24 overflow-x-hidden">

      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 pt-20 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto text-center px-4 relative z-10">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold shadow-sm mb-4">
            ❤️ Trusted by Many Members
          </span>

          <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-slate-900">
            Protect Your Health <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Without Hospital Hassles
            </span>
          </h1>

          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            Doctor consultations, home visits, health checkups and emergency support starting from <strong className="text-green-700">just ₹8/day.</strong>
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6 text-sm font-semibold text-slate-700">
            <div className="flex items-center gap-2"><Ambulance className="text-red-500 w-5 h-5" /> Emergency Support Available</div>
            <div className="flex items-center gap-2"><Home className="text-blue-500 w-5 h-5" /> Doctor Visits at Home</div>
            <div className="flex items-center gap-2"><Clock className="text-green-500 w-5 h-5" /> Zero Queue Healthcare</div>
          </div>
        </div>

        {/* Subtle blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </section>

      {/* --- SOCIAL PROOF / TRUST SECTION --- */}
      <section className="max-w-7xl mx-auto -mt-8 relative z-20 px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:divide-x md:divide-slate-100">
          <div className="p-2"><h3 className="text-3xl md:text-4xl font-black text-slate-800">{membersCount}+</h3><p className="text-slate-500 text-sm font-medium mt-1">Active Members</p></div>
          <div className="p-2 border-l border-slate-100 md:border-l-0"><h3 className="text-3xl md:text-4xl font-black text-slate-800">{appointmentsCount}+</h3><p className="text-slate-500 text-sm font-medium mt-1">Appointments Done</p></div>
          <div className="p-2 border-t border-slate-100 md:border-t-0"><h3 className="text-3xl md:text-4xl font-black text-slate-800">4.8/5</h3><p className="text-slate-500 text-sm font-medium mt-1">User Satisfaction</p></div>
          <div className="p-2 border-t border-l border-slate-100 md:border-t-0 md:border-l-0"><h3 className="text-3xl md:text-4xl font-black text-slate-800">{doctorsCount}+</h3><p className="text-slate-500 text-sm font-medium mt-1">Doctors Network</p></div>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8">

        {/* --- WHY MISSION 100? --- */}
        <section className="max-w-7xl mx-auto mb-20 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-10">Why Choose Mission 100 Hospital?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center">
              <Home className="w-10 h-10 text-blue-500 mb-3" />
              <span className="font-bold text-slate-800 text-sm">Home Healthcare</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center">
              <Stethoscope className="w-10 h-10 text-green-500 mb-3" />
              <span className="font-bold text-slate-800 text-sm">Qualified Doctors</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center">
              <Clock className="w-10 h-10 text-amber-500 mb-3" />
              <span className="font-bold text-slate-800 text-sm">Fast Appointments</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center">
              <Users className="w-10 h-10 text-purple-500 mb-3" />
              <span className="font-bold text-slate-800 text-sm">Patient Focused</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center col-span-2 sm:col-span-1">
              <Ambulance className="w-10 h-10 text-red-500 mb-3" />
              <span className="font-bold text-slate-800 text-sm">Emergency Support</span>
            </div>
          </div>
        </section>

        {/* --- PROTECTION BANNER --- */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 text-center mb-12 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900 flex items-center justify-center gap-2 mb-2">
            🛡️ Protect Your Health For Less Than ₹10 Per Day
          </h2>
          <p className="text-blue-700 font-medium">
            Regular doctor consultations, health monitoring, and preventive healthcare delivered right at your home.
          </p>
        </div>

        {/* --- POSTERS GRID SECTION --- */}
        <div className="max-w-7xl mx-auto mb-24">
          {/* Responsive Grid: 1 col mobile, 2 col tablet/desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {posterImages.map((plan) => (
              <div key={plan.id} className="flex flex-col items-center w-full">
                {/* Poster Image */}
                <div className="w-full rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 mb-5 overflow-hidden border border-slate-200 bg-white">
                  <Image 
                    src={plan.imgUrl} 
                    alt={`${plan.name} Poster`} 
                    width={800}
                    height={1000}
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Buy Button */}
                <button 
                  onClick={() => router.push(`/buy-membership?plan=${plan.id}`)}
                  className={`w-full py-4 px-4 rounded-xl font-bold transition-all transform active:scale-95 shadow-md hover:shadow-lg ${plan.btnColor}`}
                >
                  Buy {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* --- REAL VALUE COMPARISON (PLATINUM HIGHLIGHT) --- */}
        <section className="max-w-5xl mx-auto bg-slate-900 text-white rounded-3xl p-8 md:p-12 mb-24 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">WHY PLATINUM?</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">See The Real Value.</h2>
              <p className="text-slate-300 mb-6">Stop paying individual hospital bills. You deserve comprehensive care without the heavy price tag.</p>
            </div>
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <ul className="space-y-3 mb-6 font-medium text-slate-300">
                <li className="flex justify-between"><span>12 Home Doctor Visits</span> <span className="text-white">₹12,000</span></li>
                <li className="flex justify-between"><span>ECG at Home</span> <span className="text-white">₹1,500</span></li>
                <li className="flex justify-between"><span>Dietician & Fitness</span> <span className="text-white">₹4,000</span></li>
                <li className="flex justify-between"><span>Full Body Checkup</span> <span className="text-white">₹3,500</span></li>
                <li className="flex justify-between"><span>Online Consultations</span> <span className="text-white">₹6,000</span></li>
              </ul>
              <div className="border-t border-slate-600 pt-4 flex justify-between items-center text-xl font-bold text-slate-400 line-through">
                <span>Total Value</span> <span>₹27,000+</span>
              </div>
              <div className="mt-2 flex justify-between items-center text-2xl md:text-3xl font-black text-green-400">
                <span>You Pay</span> <span>₹9,999</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- COMPARISON IMAGE SECTION --- */}
        <div className="max-w-7xl mx-auto mb-24">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-slate-900">Compare Plan Features</h2>
            <p className="mt-4 text-lg text-slate-500">A detailed breakdown of everything included in your membership.</p>
          </div>

          {/* Full responsive view without horizontal scrolling */}
          <div className="w-full rounded-3xl border border-slate-200 shadow-xl bg-white p-2 md:p-4">
            <div className="w-full">
              <Image 
                src={comparisonImageUrl} 
                alt="Plans Comparison Table" 
                width={1200}
                height={800}
                className="w-full h-auto rounded-xl object-contain"
                priority
              />
            </div>
          </div>
          
        </div>

      </div>

    </div>
  );
}