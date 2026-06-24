"use client";

import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  HeartPulse,
  Crown,
  Sparkles,
  Check,
  Star,
  Ambulance,
  Home,
  Clock,
  HelpCircle,
  Users,
  Search,
  Phone,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Activity,
  CalendarCheck,
  Stethoscope
} from "lucide-react";

// --- DATA STRUCTURES ---
const plans = [
  {
    id: 'silver',
    name: 'Silver Care',
    price: '₹2,999',
    monthly: '₹249',
    dailyText: 'Only ₹8/day',
    duration: '/ YEAR',
    tagline: 'Basic Preventive Healthcare',
    bestFor: 'Young individuals',
    worth: '₹5,000+',
    badge: null,
    icon: ShieldCheck,
    highlight: false,
    themeColor: 'border-slate-200',
    iconColor: 'text-slate-600 bg-slate-100',
    btnColor: 'bg-slate-800 hover:bg-slate-700 text-white',
    features: [
      '12 Online Doctor Consultations',
      'Full Body Health Checkup at Home',
      'Blood Sugar Test at Home',
      'Blood Pressure Monitoring',
      'Oxygen (SpO2) Monitoring'
    ],
    buyBullets: ['12 Online Consultations', '1 Home Checkup', 'Vitals Monitoring']
  },
  {
    id: 'gold',
    name: 'Gold Care',
    price: '₹4,999',
    monthly: '₹416',
    dailyText: 'Only ₹14/day',
    duration: '/ YEAR',
    tagline: 'Doctor Access at Your Doorstep',
    bestFor: 'Parents & Families',
    worth: '₹12,000+',
    badge: null,
    icon: HeartPulse,
    highlight: false,
    themeColor: 'border-amber-200',
    iconColor: 'text-amber-600 bg-amber-50',
    btnColor: 'bg-amber-500 hover:bg-amber-600 text-white',
    features: [
      'Everything in Silver, plus:',
      '2 Home Doctor Visits Per Year',
      'Priority Appointment Booking',
      'Dedicated Health Coordinator',
      'Monthly Vitals Checkup at Home'
    ],
    buyBullets: ['2 Home Doctor Visits', 'Priority Booking', 'Dedicated Coordinator']
  },
  {
    id: 'platinum',
    name: 'Platinum Care',
    price: '₹9,999',
    monthly: '₹833',
    dailyText: 'Only ₹27/day',
    duration: '/ YEAR',
    tagline: 'Premium Healthcare & Wellness',
    bestFor: 'Senior Citizens',
    worth: '₹28,000+',
    save: '₹18,000+',
    badge: 'MOST POPULAR',
    popularityText: '95% of families choose this plan',
    icon: Sparkles,
    highlight: true,
    themeColor: 'border-blue-500 ring-4 ring-blue-500 shadow-2xl md:scale-105 z-10',
    iconColor: 'text-blue-600 bg-blue-100',
    btnColor: 'bg-blue-600 hover:bg-blue-700 text-white',
    features: [
      'Everything in Gold, plus:',
      '12 Home Doctor Visits (1/Month)',
      'ECG Heart Checkup at Home',
      'Dietician Consultation (2/Year)',
      'Fitness Consultation (2/Year)'
    ],
    buyBullets: ['12 Home Doctor Visits', 'ECG at Home', 'Dietician & Fitness']
  },
  {
    id: 'pro',
    name: 'Pro Fitness Plan',
    price: '₹19,999',
    monthly: '₹1,666',
    dailyText: 'Less than a cup of coffee ☕',
    duration: '/ YEAR',
    tagline: 'Complete Health, Fitness & Longevity',
    bestFor: 'Health Conscious Professionals',
    worth: '₹45,000+',
    badge: 'PREMIUM',
    icon: Crown,
    highlight: false,
    themeColor: 'border-green-500 shadow-xl',
    iconColor: 'text-green-600 bg-green-100',
    btnColor: 'bg-green-600 hover:bg-green-700 text-white',
    features: [
      'Everything in Platinum, plus:',
      'Dietician Consultation (4/Year)',
      'Fitness Consultation (4/Year)',
      'Personalized Fitness Plan',
      '24x7 Emergency Medical Support'
    ],
    buyBullets: ['Personalized Fitness', '24x7 Emergency', 'Ambulance Support']
  }
];

const comparisonData = [
  { feature: '12 Online Doctor Consultations Per Year', silver: '✔', gold: '✔', platinum: '✔', pro: '✔' },
  { feature: 'Home Doctor Visits', silver: '—', gold: '2 / Year', platinum: '12 / Year (1 Visit Every Month)', pro: '12 / Year (1 Visit Every Month)' },
  { feature: 'Full Body Health Checkup at Home', silver: '✔', gold: '✔', platinum: '✔', pro: '✔' },
  { feature: 'Blood Sugar Test at Home', silver: '✔', gold: '✔', platinum: '✔', pro: '✔' },
  { feature: 'Blood Pressure Monitoring', silver: '✔', gold: '✔', platinum: '✔', pro: '✔' },
  { feature: 'Oxygen (SpO2) Monitoring at Home', silver: '✔', gold: '✔', platinum: '✔', pro: '✔' },
  { feature: 'ECG Heart Checkup at Home', silver: '—', gold: '—', platinum: '✔', pro: '✔' },
  { feature: 'Dietician Consultation', silver: '—', gold: '—', platinum: '✔', pro: '✔' },
  { feature: 'Fitness Consultation', silver: '—', gold: '—', platinum: '✔', pro: '✔' },
  { feature: 'Mental Wellness Session', silver: '—', gold: '—', platinum: '✔', pro: '✔' },
  { feature: 'Medicine Delivery Support', silver: '—', gold: '—', platinum: '✔', pro: '✔' },
  { feature: 'Priority Appointment Booking', silver: '—', gold: '✔', platinum: '✔', pro: '✔' },
  { feature: 'Dedicated Health Coordinator', silver: '—', gold: '—', platinum: '✔', pro: '✔' },
  { feature: 'Physiotherapy Consultation', silver: '—', gold: '—', platinum: '—', pro: '✔' },
  { feature: 'Weight Management Coaching', silver: '—', gold: '—', platinum: '—', pro: '✔' },
  { feature: 'Lifestyle Modification Program', silver: '—', gold: '—', platinum: '—', pro: '✔' },
  { feature: 'Anti-Ageing & Longevity Guidance', silver: '—', gold: '—', platinum: '—', pro: '✔' },
  { feature: 'Dedicated Health & Fitness Coach', silver: '—', gold: '—', platinum: '—', pro: '✔' },
  { feature: '24x7 Emergency Medical Support', silver: '—', gold: '—', platinum: '—', pro: '✔' },
  { feature: 'Ambulance Support', silver: '—', gold: '—', platinum: '—', pro: '✔' },
];

const testimonials = [
  {
    name: 'Rajesh Kumar',
    initials: 'RK',
    plan: 'Platinum Care Member',
    location: 'Aligarh',
    text: '"My father needed regular checkups. Mission 100 saved us multiple hospital visits and long waiting lines."'
  },
  {
    name: 'Priya Sharma',
    initials: 'PS',
    plan: 'Gold Care Member',
    location: 'Delhi',
    text: '"The Platinum plan is incredible. Having a doctor visit home every month gives me total peace of mind for my parents."'
  },
  {
    name: 'Amit Patel',
    initials: 'AP',
    plan: 'Pro Fitness Member',
    location: 'Noida',
    text: '"Best investment for my family\'s health. The emergency support and quick online consultations are a lifesaver."'
  }
];

const faqs = [
  {
    icon: Users,
    q: "Who should choose Platinum Care?",
    a: "Platinum Care is ideal for senior citizens, parents, and families who need regular healthcare monitoring and physical doctor visits without the hassle of traveling to a clinic."
  },
  {
    icon: Sparkles,
    q: "How much can I save compared to paying separately?",
    a: "Most members save between ₹15,000 and ₹25,000 every year compared to booking individual online consultations, full-body checkups, and home doctor visits separately."
  },
  {
    icon: Ambulance,
    q: "What happens during a medical emergency?",
    a: "Our team provides immediate medical guidance over the phone and coordinates emergency ambulance support (included in the Pro plan) to the nearest network hospital."
  },
  {
    icon: ShieldCheck,
    q: "Can my entire family use one membership?",
    a: "Membership usage and benefits are assigned to the primary registered beneficiary. However, online consultations can often be utilized for general family medical advice."
  },
  {
    icon: Clock,
    q: "How quickly can I book a doctor consultation?",
    a: "With our Priority Booking (Gold, Platinum, Pro), most online consultations are scheduled instantly or within a few hours. Home visits are scheduled as per your convenience and doctor availability."
  }
];

// Simple hook for animating numbers
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
  const [openFaq, setOpenFaq] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  // Animated counters
  const membersCount = useAnimatedCounter(2000);
  const appointmentsCount = useAnimatedCounter(1000);
  const doctorsCount = useAnimatedCounter(50);

  const filteredFaqs = faqs.filter(faq =>
    faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderValue = (val) => {
    if (val === '✔') {
      return (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-sm">
          <Check className="w-4 h-4" strokeWidth={3} />
        </span>
      );
    }
    return val;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-32 md:pb-24 overflow-x-hidden">

      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 pt-20 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto text-center px-4 relative z-10">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold shadow-sm mb-4">
            ❤️ Trusted by {membersCount}+ Families
          </span>

          <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-slate-900">
            Protect Your Family's Health <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Without Hospital Hassles
            </span>
          </h1>

          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            Doctor consultations, home visits, health checkups and emergency support starting from <strong className="text-green-700">just ₹8/day.</strong>
          </p>

          <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6 text-sm font-semibold text-slate-700">
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
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-slate-100">
          <div><h3 className="text-3xl md:text-4xl font-black text-slate-800">{membersCount}+</h3><p className="text-slate-500 text-sm font-medium mt-1">Active Members</p></div>
          <div><h3 className="text-3xl md:text-4xl font-black text-slate-800">{appointmentsCount}+</h3><p className="text-slate-500 text-sm font-medium mt-1">Appointments Done</p></div>
          <div><h3 className="text-3xl md:text-4xl font-black text-slate-800">4.8/5</h3><p className="text-slate-500 text-sm font-medium mt-1">User Satisfaction</p></div>
          <div><h3 className="text-3xl md:text-4xl font-black text-slate-800">{doctorsCount}+</h3><p className="text-slate-500 text-sm font-medium mt-1">Doctors Network</p></div>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8">

        {/* --- WHY MISSION 100? --- */}
        <section className="max-w-7xl mx-auto mb-20 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-10">Why Choose Mission 100 Hospital?</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
              <Home className="w-10 h-10 text-blue-500 mb-3" />
              <span className="font-bold text-slate-800 text-sm">Home Healthcare</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
              <Stethoscope className="w-10 h-10 text-green-500 mb-3" />
              <span className="font-bold text-slate-800 text-sm">Qualified Doctors</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
              <Clock className="w-10 h-10 text-amber-500 mb-3" />
              <span className="font-bold text-slate-800 text-sm">Fast Appointments</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
              <Users className="w-10 h-10 text-purple-500 mb-3" />
              <span className="font-bold text-slate-800 text-sm">Family Focused</span>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center col-span-2 md:col-span-1">
              <Ambulance className="w-10 h-10 text-red-500 mb-3" />
              <span className="font-bold text-slate-800 text-sm">Emergency Support</span>
            </div>
          </div>
        </section>

        {/* --- FAMILY PROTECTION BANNER --- */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 text-center mb-12 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900 flex items-center justify-center gap-2 mb-2">
            🛡️ Protect Your Family For Less Than ₹10 Per Day
          </h2>
          <p className="text-blue-700 font-medium">
            Regular doctor consultations, health monitoring, and preventive healthcare delivered right at your home.
          </p>
        </div>

        {/* --- PRICING CARDS GRID --- */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 items-start">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={plan.id}
                className={`group relative flex flex-col p-8 rounded-3xl border bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${plan.themeColor}`}
              >
                {/* Popularity Text (For Platinum) */}
                {plan.popularityText && (
                  <div className="absolute -top-10 left-0 right-0 text-center">
                    <span className="bg-blue-100 text-blue-800 text-sm font-bold px-4 py-1.5 rounded-t-lg">
                      {plan.popularityText}
                    </span>
                  </div>
                )}

                {/* Premium Badge */}
                {plan.badge && (
                  <span className={`absolute top-0 right-0 -translate-y-1/2 translate-x-2 md:translate-x-4 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-md z-20 ${plan.highlight ? 'bg-blue-600' : 'bg-slate-800'}`}>
                    {plan.badge}
                  </span>
                )}

                <div className="relative z-10 flex flex-col h-full">

                  {/* Who Is This For? */}
                  <div className="mb-4 inline-block bg-slate-50 border border-slate-100 rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-600 self-start">
                    Best For: {plan.bestFor}
                  </div>

                  {/* Card Header with Icon */}
                  <div className="mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${plan.iconColor}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                    <p className="text-sm text-slate-500 mt-1 h-10">{plan.tagline}</p>
                  </div>

                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                      <span className="text-slate-500 font-medium mb-1">{plan.duration}</span>
                    </div>
                    <div className="mt-2 text-sm font-bold text-green-700 bg-green-50 inline-block px-3 py-1 rounded-lg">
                      {plan.dailyText}
                    </div>
                  </div>

                  {/* Savings Block */}
                  <div className="mb-6 p-3 bg-slate-50 rounded-xl text-center border border-slate-100">
                    <p className="text-sm text-slate-500 line-through">Worth {plan.worth}</p>
                    {plan.save ? (
                      <p className="font-bold text-green-600 text-sm">Save {plan.save} Every Year</p>
                    ) : (
                      <p className="font-bold text-slate-700 text-sm">High Value Plan</p>
                    )}
                  </div>

                  <hr className="border-slate-100 mb-6" />

                  {/* Features List */}
                  <ul className="flex-1 space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        {!feature.startsWith('Everything') ? (
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mr-3" strokeWidth={2.5} />
                        ) : (
                          <div className="w-5 h-5 mr-3 flex-shrink-0"></div>
                        )}
                        <span className={`text-slate-700 leading-tight ${feature.startsWith('Everything') ? 'font-semibold italic text-slate-900' : ''}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Urgency */}
                  <p className="text-xs text-center text-red-500 font-semibold mb-3">
                    Limited memberships available
                  </p>

                  {/* CTA Button */}
                  <button className={`w-full py-4 px-4 rounded-xl font-bold transition-all transform active:scale-95 shadow-md hover:shadow-lg ${plan.btnColor}`}>
                    Join {plan.name}
                  </button>

                  {/* Risk Reversal */}
                  <div className="mt-4 flex flex-col items-center justify-center text-xs text-slate-500 space-y-1 font-medium">
                    <div className="flex items-center gap-1"><Check className="w-3 h-3 text-green-500" /> No hidden charges</div>
                    <div className="flex items-center gap-1"><Check className="w-3 h-3 text-green-500" /> 100% transparent pricing</div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* --- REAL VALUE COMPARISON (PLATINUM HIGHLIGHT) --- */}
        <section className="max-w-5xl mx-auto bg-slate-900 text-white rounded-3xl p-8 md:p-12 mb-24 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">WHY PLATINUM?</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">See The Real Value.</h2>
              <p className="text-slate-300 mb-6">Stop paying individual hospital bills. Your family deserves comprehensive care without the heavy price tag.</p>
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

        {/* --- TESTIMONIALS SECTION --- */}
        <section className="max-w-7xl mx-auto mb-24">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Hear From Our Verified Members</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-md border border-slate-100 relative hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-6 text-amber-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-slate-600 italic mb-8 leading-relaxed text-lg">{t.text}</p>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-green-100 border border-slate-200 flex items-center justify-center font-bold text-slate-700">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 flex items-center gap-1">
                      {t.name} <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    </div>
                    <div className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded inline-block mt-1">
                      {t.plan}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- COMPARISON TABLE SECTION --- */}
        <div className="max-w-7xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900">Compare Plan Features</h2>
            <p className="mt-4 text-lg text-slate-500">A detailed breakdown of everything included in your membership.</p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-xl bg-white relative max-h-[800px] overflow-y-auto">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead className="sticky top-0 z-30 bg-white shadow-sm ring-1 ring-slate-200">
                <tr>
                  <th className="p-6 bg-slate-50 border-r border-slate-200 sticky left-0 z-40 w-1/4 align-top">
                    <h2 className="text-2xl font-black text-center text-slate-900 tracking-tight leading-tight">
                      Find the perfect fit <br /> for you
                    </h2>
                  </th>

                  <th className="p-6 border-r border-slate-200 text-center align-top bg-white">
                    <div className="flex flex-col items-center">
                      <ShieldCheck className="w-8 h-8 text-slate-400 mb-2" />
                      <span className="text-lg font-bold text-slate-700">SILVER CARE</span>
                    </div>
                  </th>

                  <th className="p-6 border-r border-slate-200 text-center align-top bg-amber-50/50">
                    <div className="flex flex-col items-center">
                      <HeartPulse className="w-8 h-8 text-amber-500 mb-2" />
                      <span className="text-lg font-bold text-amber-700">GOLD CARE</span>
                    </div>
                  </th>

                  <th className="p-6 border-r border-blue-200 text-center align-top bg-blue-50 border-t-4 border-t-blue-500 shadow-inner">
                    <div className="flex flex-col items-center mt-2 relative">
                      <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full absolute -top-8">RECOMMENDED</span>
                      <Sparkles className="w-8 h-8 text-blue-600 mb-2" />
                      <span className="text-lg font-bold text-blue-800">PLATINUM</span>
                    </div>
                  </th>

                  <th className="p-6 border-b border-slate-200 text-center align-top bg-green-50">
                    <div className="flex flex-col items-center mt-2">
                      <Crown className="w-8 h-8 text-green-600 mb-2" />
                      <span className="text-lg font-bold text-green-800">PRO FITNESS</span>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody className="text-sm">
                {comparisonData.map((row, index) => (
                  <tr key={index} className={`transition-colors hover:bg-slate-100 ${index % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                    <td className={`py-5 px-6 font-semibold text-slate-700 border-r border-slate-200 sticky left-0 z-20 ${index % 2 === 0 ? "bg-white" : "bg-slate-50"} shadow-[1px_0_0_0_#e2e8f0]`}>
                      {row.feature}
                    </td>
                    <td className="py-5 px-6 text-center text-slate-600 border-r border-slate-200 font-medium">
                      {renderValue(row.silver)}
                    </td>
                    <td className="py-5 px-6 text-center text-slate-600 border-r border-slate-200 font-medium">
                      {renderValue(row.gold)}
                    </td>
                    <td className="py-5 px-6 text-center text-slate-600 border-r border-blue-200 bg-blue-50/20 font-medium">
                      {renderValue(row.platinum)}
                    </td>
                    <td className="py-5 px-6 text-center text-slate-800 font-bold bg-green-50/30">
                      {renderValue(row.pro)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* --- BUY SECTION (BOTTOM) --- */}
        <section className="max-w-7xl mx-auto mb-24">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
            Ready to secure your family's health?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map(plan => (
              <div
                key={plan.id + '-bottom'}
                className="bg-white rounded-3xl border border-slate-200 shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
              >
                <h3 className="text-xl font-bold text-slate-800">{plan.name}</h3>
                <div className="mt-4 text-4xl font-black text-slate-900">
                  {plan.price}
                </div>
                <div className="text-sm text-slate-500 mt-1 mb-6">per year</div>

                {/* Buy Bullets added here */}
                <div className="mb-8 flex-grow text-sm text-slate-600 text-left px-2">
                  <ul className="space-y-2">
                    {plan.buyBullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" /> {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className={`w-full py-4 rounded-xl font-bold transition-colors ${plan.btnColor}`}>
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* --- FAQ SECTION (SMART/INTERACTIVE) --- */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-500">Everything you need to know about the plans and billing.</p>
          </div>

          {/* Trust Banner before FAQ */}
          <div className="grid md:grid-cols-3 gap-4 mb-8 text-center text-sm font-semibold text-slate-700 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> No Hidden Charges</div>
            <div className="flex items-center justify-center gap-2 border-y md:border-y-0 md:border-x border-slate-100 py-2 md:py-0"><Users className="w-4 h-4 text-blue-500" /> Verified Doctors</div>
            <div className="flex items-center justify-center gap-2"><ShieldCheck className="w-4 h-4 text-amber-500" /> Secure Health Data</div>
          </div>


          {/* Accordion List */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isOpen = openFaq === index;
                const FaqIcon = faq.icon;

                return (
                  <div
                    key={index}
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-gradient-to-r from-blue-50 to-green-50 border-blue-200 shadow-md' : 'bg-white border-slate-200 shadow-sm'}`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                    >
                      <span className="font-bold text-lg text-slate-800 flex items-center gap-3">
                        <FaqIcon className={`w-5 h-5 ${isOpen ? 'text-blue-600' : 'text-slate-400'}`} />
                        {faq.q}
                      </span>
                      <span className={`transform transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`}>
                        <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                      </span>
                    </button>

                    {/* Animated Answer Body */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-blue-100/50 mt-2">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-8 text-slate-500 bg-white rounded-2xl border border-slate-200">
                No matching questions found.
              </div>
            )}
          </div>
        </section>


      </div>


      {/* --- STICKY MOBILE CTA --- */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-slate-200 p-4 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold shadow-md active:scale-95 transition-transform flex items-center justify-center gap-2">
          Choose Your Membership <ArrowRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}