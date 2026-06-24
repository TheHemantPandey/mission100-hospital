  "use client";

  import React, { useState, useEffect, useRef } from 'react';
  import { useRouter } from 'next/navigation';
  import Image from 'next/image';
  import {
    Ambulance,
    Home,
    Clock,
    Users,
    MessageCircle,
    ArrowRight,
    Stethoscope,
    Star,
    ChevronDown,
    CheckCircle2,
    ShieldCheck,
    PhoneCall,
    CalendarCheck
  } from "lucide-react";

  // --- PASTE YOUR IMAGE URLS HERE ---
  const posterImages = [
    { 
      id: 'silver', 
      name: 'Silver Care', 
      imgUrl: '/membership-plans/silver-plan.png', 
      pageUrl: '/membership-plans/silver-plan',
      btnColor: 'bg-slate-800 hover:bg-slate-700 text-white',
      costPerDay: 'Only ₹8/day',
      bestFor: 'Preventive Care'
    },
    { 
      id: 'gold', 
      name: 'Gold Care', 
      imgUrl: '/membership-plans/gold-plan.png', 
      pageUrl: '/membership-plans/gold-plan',
      btnColor: 'bg-amber-500 hover:bg-amber-600 text-white',
      costPerDay: 'Only ₹14/day',
      bestFor: 'minimal care'
    },
    { 
      id: 'platinum', 
      name: 'Platinum Care', 
      imgUrl: '/membership-plans/platinum-plan.png', 
      pageUrl: '/membership-plans/platinum-plan',
      btnColor: 'bg-blue-600 hover:bg-blue-700 text-white',
      costPerDay: 'Only ₹27/day',
      bestFor: 'Complete Health',
      isPopular: true
    },
    { 
      id: 'pro', 
      name: 'Pro Fitness Plan', 
      imgUrl: '/membership-plans/pro-fitness-plan.png', 
      pageUrl: '/membership-plans/pro-fitness-plan',
      btnColor: 'bg-green-600 hover:bg-green-700 text-white',
      costPerDay: 'Only ₹55/day',
      bestFor: 'Fitness Enthusiasts'
    }
  ];

  const comparisonImageUrl = "/membership-plans/comparison-plan.jpg";

  const testimonials = [
    {
      quote: "My father receives regular doctor visits right at home. Mission 100 saved us countless stressful hospital trips.",
      author: "Rajesh Kumar",
      plan: "Platinum Care Member"
    },
    {
      quote: "With two kids at home, getting online consultations instantly saved me a lot of trouble. Best preventive healthcare layout.",
      author: "Anjali Sharma",
      plan: "Gold Care Member"
    },
    {
      quote: "Incredibly fast appointments and zero queues. The home health monitoring feels like having a personal family clinic.",
      author: "Vikram Malhotra",
      plan: "Platinum Care Member"
    }
  ];

  const faqs = [
    { q: "Can I use this membership for my parents?", a: "Yes, absolutely! Our memberships can be explicitly assigned to cover your parents, ensuring they receive regular preventative home health checkups and on-call doctor assistance." },
    { q: "How quickly can I book a doctor visit?", a: "Home doctor visits and online consultations can be initiated almost immediately or scheduled at your preferred time window directly through our simplified patient priority channel." },
    { q: "What happens in a medical emergency?", a: "Members receive access to an emergency assistance workflow designed to coordinate support, bypass long registration lines, and streamline care arrangements." },
    { q: "Is there any hidden charge?", a: "No. Everything listed under your specific subscription tier—including the standard home visits and diagnostics outline—is completely covered with zero hidden fees." },
    { q: "Which plan is best for families?", a: "The Platinum Care plan is universally ideal for complete families, delivering an optimized balance of multiple home visits, diagnostics, and full year-round health coverage." },
    { q: "Can I upgrade my membership later?", a: "Yes, you can upgrade your membership status at any point throughout the year by simply balancing the marginal price tier difference via your dashboard configuration." },
    { q: "How much money can I save compared to paying separately?", a: "By bundling services, a Platinum member saves upwards of ₹17,001 annually compared to purchasing fragmented standalone hospital consultations, lab works, and regular checks." },
    { q: "Do services come to my home?", a: "Yes! Regular doctor checkups, vital monitoring adjustments, and specific lab sample tracking are brought straight to your doorstep." }
  ];

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

  export default function MembershipPlans() {
    const router = useRouter();
    const plansRef = useRef(null);
    
    const [openFaq, setOpenFaq] = useState(null);
    const [showStickyCta, setShowStickyCta] = useState(false);

    // Animated counters
    const membersCount = useAnimatedCounter(2000);
    const appointmentsCount = useAnimatedCounter(1000);
    const doctorsCount = useAnimatedCounter(50);

    // Handle intersection observer to toggle sticky bottom CTA on mobile
    useEffect(() => {
      const handleScroll = () => {
        if (!plansRef.current) return;
        const rect = plansRef.current.getBoundingClientRect();
        // Show sticky CTA only if user hasn't reached the plans yet
        if (rect.top > window.innerHeight) {
          setShowStickyCta(true);
        } else {
          setShowStickyCta(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToPlans = () => {
      plansRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-32 md:pb-24 overflow-x-hidden">

        {/* --- HERO SECTION --- */}
        <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 pt-20 pb-16 border-b border-slate-200">
          <div className="max-w-7xl mx-auto text-center px-4 relative z-10">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-xs sm:text-sm font-semibold shadow-sm mb-4">
              ❤️ Trusted by Many Members
            </span>

            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-slate-900 tracking-tight">
              Protect Your Health <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Without Hospital Hassles
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-medium px-2">
              Doctor consultations, home visits, health checkups and emergency support starting from <strong className="text-green-700">just ₹8/day.</strong>
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-700 px-4">
              <div className="flex items-center gap-2"><Ambulance className="text-red-500 w-5 h-5 flex-shrink-0" /> Emergency Support Available</div>
              <div className="flex items-center gap-2"><Home className="text-blue-500 w-5 h-5 flex-shrink-0" /> Doctor Visits at Home</div>
              <div className="flex items-center gap-2"><Clock className="text-green-500 w-5 h-5 flex-shrink-0" /> Zero Queue Healthcare</div>
            </div>
          </div>

          {/* Subtle blobs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </section>

        {/* --- SOCIAL PROOF / TRUST SECTION --- */}
        <section className="max-w-7xl mx-auto -mt-8 relative z-20 px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center md:divide-x md:divide-slate-100">
            <div className="p-2"><h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-800">{membersCount}+</h3><p className="text-slate-500 text-xs sm:text-sm font-medium mt-1">Active Members</p></div>
            <div className="p-2 border-l border-slate-100 md:border-l-0"><h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-800">{appointmentsCount}+</h3><p className="text-slate-500 text-xs sm:text-sm font-medium mt-1">Appointments Done</p></div>
            <div className="p-2 border-t border-slate-100 md:border-t-0"><h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-800">4.8/5</h3><p className="text-slate-500 text-xs sm:text-sm font-medium mt-1">User Satisfaction</p></div>
            <div className="p-2 border-t border-l border-slate-100 md:border-t-0 md:border-l-0"><h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-800">{doctorsCount}+</h3><p className="text-slate-500 text-xs sm:text-sm font-medium mt-1">Doctors Network</p></div>
          </div>
        </section>

        <div className="px-4 sm:px-6 lg:px-8">

          {/* --- WHY MISSION 100? --- */}
          <section className="max-w-7xl mx-auto mb-20 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-10">Why Choose Mission 100 Hospital?</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center">
                <Home className="w-9 h-9 text-blue-500 mb-3" />
                <span className="font-bold text-slate-800 text-xs sm:text-sm">Home Healthcare</span>
              </div>
              <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center">
                <Stethoscope className="w-9 h-9 text-green-500 mb-3" />
                <span className="font-bold text-slate-800 text-xs sm:text-sm">Qualified Doctors</span>
              </div>
              <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center">
                <Clock className="w-9 h-9 text-amber-500 mb-3" />
                <span className="font-bold text-slate-800 text-xs sm:text-sm">Fast Appointments</span>
              </div>
              <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center">
                <Users className="w-9 h-9 text-purple-500 mb-3" />
                <span className="font-bold text-slate-800 text-xs sm:text-sm">Patient Focused</span>
              </div>
              <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center col-span-2 sm:col-span-1">
                <Ambulance className="w-9 h-9 text-red-500 mb-3" />
                <span className="font-bold text-slate-800 text-xs sm:text-sm">Emergency Support</span>
              </div>
            </div>
          </section>

          {/* --- EMOTIONAL BANNER --- */}
          <section className="max-w-4xl mx-auto text-center mb-16 px-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Healthcare isn&apos;t expensive. <span className="text-red-500 block sm:inline">Ignoring health problems is.</span>
            </h3>
            <p className="text-slate-600 mt-3 font-medium text-sm sm:text-base md:text-lg">
              Choose a premium membership that protects your family comprehensively all year long.
            </p>
          </section>

          {/* --- POSTERS GRID SECTION (Responsive: 1 plan per row on Mobile/Tablet, 2 items on Desktop) --- */}
          <div ref={plansRef} className="max-w-7xl mx-auto mb-24 pt-4 px-2 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {posterImages.map((plan) => (
                <div 
                  key={plan.id} 
                  className={`flex flex-col items-center w-full rounded-3xl p-3 transition-all duration-300 max-w-xl mx-auto ${
                    plan.isPopular 
                      ? 'relative bg-gradient-to-b from-blue-100 to-transparent shadow-xl ring-2 ring-blue-500 ring-offset-4 lg:scale-[1.04]' 
                      : 'bg-white shadow-md border border-slate-100'
                  }`}
                >
                  {/* Most Popular Label */}
                  {plan.isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                      <span className="bg-blue-600 text-white px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-md">
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  {/* Poster Image - Wrapper with route clicks */}
                  <div 
                    onClick={() => router.push(plan.pageUrl)}
                    className="w-full rounded-2xl shadow-sm overflow-hidden border border-slate-200 bg-white cursor-pointer group relative"
                  >
                    <Image 
                      src={plan.imgUrl} 
                      alt={`${plan.name} Poster`} 
                      width={800}
                      height={1000}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.015]"
                    />
                  </div>

                  {/* Meta details, Savings, and Purchase Trigger Button */}
                  <div className="w-full px-2 mt-5 text-center">
                    <p className="text-xs font-bold text-slate-400 tracking-wide uppercase mb-1">
                      Best For: <span className="text-slate-700">{plan.bestFor}</span>
                    </p>
                    <p className="text-xl sm:text-2xl font-black text-green-600 tracking-tight mb-4">
                      {plan.costPerDay}
                    </p>
                    
                    <button 
                      onClick={() => router.push(plan.pageUrl)}
                      className={`w-full py-4 px-4 rounded-xl font-bold transition-all transform active:scale-95 shadow-md hover:shadow-lg ${plan.btnColor}`}
                    >
                      Buy {plan.name}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- REAL VALUE COMPARISON (PLATINUM HIGHLIGHT) --- */}
          <section className="max-w-5xl mx-auto bg-slate-900 text-white rounded-3xl p-6 sm:p-8 md:p-12 mb-24 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">WHY PLATINUM?</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">See The Real Value.</h2>
                <p className="text-slate-300 text-sm sm:text-base mb-6">Stop paying individual hospital bills. You deserve comprehensive care without the heavy price tag.</p>
                
                {/* Enhanced savings badge */}
                <div className="inline-block bg-green-500/20 border border-green-500 text-green-400 rounded-xl px-4 py-2 font-bold text-sm">
                  🎉 You Save ₹17,001 Every Year
                </div>
              </div>
              <div className="bg-slate-800 rounded-2xl p-5 sm:p-6 border border-slate-700">
                <ul className="space-y-3 mb-6 font-medium text-xs sm:text-sm text-slate-300">
                  <li className="flex justify-between"><span>12 Home Doctor Visits</span> <span className="text-white">₹12,000</span></li>
                  <li className="flex justify-between"><span>ECG at Home</span> <span className="text-white">₹1,500</span></li>
                  <li className="flex justify-between"><span>Dietician & Fitness</span> <span className="text-white">₹4,000</span></li>
                  <li className="flex justify-between"><span>Full Body Checkup</span> <span className="text-white">₹3,500</span></li>
                  <li className="flex justify-between"><span>Online Consultations</span> <span className="text-white">₹6,000</span></li>
                </ul>
                <div className="border-t border-slate-600 pt-4 flex justify-between items-center text-lg font-bold text-slate-400 line-through">
                  <span>Total Value</span> <span>₹27,000+</span>
                </div>
                <div className="mt-2 flex justify-between items-center text-xl sm:text-2xl md:text-3xl font-black text-green-400">
                  <span>You Pay</span> <span>₹9,999</span>
                </div>
              </div>
            </div>
          </section>

          {/* --- ONBOARDING TIMELINE: WHAT HAPPENS AFTER PURCHASE --- */}
          <section className="max-w-5xl mx-auto mb-24">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">What Happens After Purchase?</h2>
              <p className="text-slate-500 text-sm sm:text-base mt-2">Clear, reassuring onboarding timeline framework.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center relative">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg mb-4"><ShieldCheck className="w-6 h-6" /></div>
                <h4 className="font-bold text-slate-900 text-base mb-1">1️⃣ Buy Membership</h4>
                <p className="text-xs text-slate-500">Complete transaction seamlessly using secure channels.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center relative">
                <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-lg mb-4"><PhoneCall className="w-6 h-6" /></div>
                <h4 className="font-bold text-slate-900 text-base mb-1">2️⃣ Welcome Call</h4>
                <p className="text-xs text-slate-500">Our medical representative calls to map health priorities.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center relative">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-lg mb-4"><CheckCircle2 className="w-6 h-6" /></div>
                <h4 className="font-bold text-slate-900 text-base mb-1">3️⃣ Plan Activated</h4>
                <p className="text-xs text-slate-500">Digital profile goes active immediately with zero delays.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center relative">
                <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-lg mb-4"><CalendarCheck className="w-6 h-6" /></div>
                <h4 className="font-bold text-slate-900 text-base mb-1">4️⃣ Start Booking</h4>
                <p className="text-xs text-slate-500">Initiate targeted home healthcare features smoothly.</p>
              </div>
            </div>
          </section>

          {/* --- COMPARISON IMAGE SECTION --- */}
          <div className="max-w-7xl mx-auto mb-24">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Compare Plan Features</h2>
              <p className="mt-4 text-sm sm:text-lg text-slate-500">A detailed breakdown of everything included in your membership.</p>
            </div>

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

          {/* --- TESTIMONIALS SECTION --- */}
          <section className="max-w-6xl mx-auto mb-24">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Real Member Stories</h2>
              <p className="text-slate-500 text-sm sm:text-base mt-2">See how Mission 100 transforms lives daily.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, idx) => (
                <div key={idx} className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 mb-4">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-slate-600 italic font-medium text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-50">
                    <h4 className="font-bold text-slate-950 text-sm">{t.author}</h4>
                    <p className="text-xs font-semibold text-blue-600 mt-0.5">{t.plan}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* --- FAQ SECTION WITH PREMIUM UI ACCORDION --- */}
          <section className="max-w-4xl mx-auto mb-32">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
              <p className="text-slate-500 text-sm sm:text-base mt-2">Clear solutions targeting complete home health booking objections.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div 
                    key={index}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen 
                        ? 'bg-gradient-to-r from-blue-50 to-green-50 border-blue-300 shadow-sm' 
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full flex justify-between items-center px-5 sm:px-6 py-4 sm:py-5 text-left font-bold text-slate-900 text-sm sm:text-base md:text-lg focus:outline-none"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                    </button>
                    <div 
                      className={`transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-40 border-t border-blue-100/50 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                      }`}
                    >
                      <p className="px-5 sm:px-6 py-4 sm:py-5 text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

        </div>

        {/* --- MOBILE STICKY CTA ACTION BAR --- */}
        {showStickyCta && (
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 p-4 flex md:hidden shadow-2xl items-center justify-between animate-fade-in">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Complete Protection</span>
              <span className="text-xs sm:text-sm font-black text-slate-800">Starting from ₹8/day</span>
            </div>
            <button
              onClick={scrollToPlans}
              className="bg-blue-600 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 active:scale-95 transition-transform"
            >
              Choose Plan <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

      </div>
    );
  }