"use client";

import React, { useState, useEffect, use } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { 
  MapPin, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  Mail, 
  Briefcase, 
  User, 
  Building,
  CreditCard,
  Check,
  HeartPulse,
  Award,
  Sparkles,
  PhoneCall
} from "lucide-react";
import AboutMission100 from "@/components/AboutMission100";
import Script from "next/script";
import { corporatePlans } from "@/data/corporatePlans";

const indianStates = [
  "Delhi",
  "Uttar Pradesh",
  "Haryana",
  "Maharashtra",
  "Karnataka",
  "Tamil Nadu",
  "Gujarat",
  "Telangana"
];

const getPerfectForChips = (slug) => {
  if (slug === "free-plan") {
    return ["Startups", "Early Teams", "NGOs", "Small Businesses"];
  }
  if (slug === "silver-plan") {
    return ["Growing Startups", "Medium Enterprises", "Educational Institutions"];
  }
  return ["Large Organizations", "Multinational Corporates", "Executive Teams"];
};

const getTrustPoints = () => [
  "Experienced Medical Team",
  "Affordable Plans",
  "Preventive Healthcare Experts",
  "Trusted by Organizations",
  "Modern Diagnostics",
  "Dedicated Support"
];

export default function BuyCorporateMembershipPage({ params }) {
  const resolvedParams = use(params);
  const router = useRouter();

  const [isSending, setIsSending] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Match configuration schema dynamically
  const planSlug = resolvedParams.slug || "free-plan";
  const plan = corporatePlans[planSlug] || corporatePlans["free-plan"];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      companyName: "",
      industryType: "",
      totalEmployees: "",
      state: "",
      city: "",
      companyAddress: "",
      pinCode: "",
      representativeName: "",
      designation: "",
      businessEmail: "",
      mobileNumber: "",
      planSlug: plan.slug,
      planName: plan.name,
      planPrice: plan.price,
      termsAccepted: false,
      authorizationAccepted: false,
    }
  });

  const selectedState = watch("state");
  
  // Extract number price from string e.g. "₹1,999" -> 1999
  const finalPrice = plan.price === "₹0" ? 0 : parseInt(plan.price.replace(/[^\d]/g, ""), 10);

  // Form Submit Action Handler
  const onSubmit = async (formData) => {
    setIsSending(true);
    try {
      event("membership_order_submit", {
        plan_slug: plan.slug,
        plan_name: plan.name,
        price: finalPrice,
        type: "corporate",
      });

      // SCENARIO A: FREE PLAN FLOW
      if (finalPrice === 0) {
        const response = await fetch("/api/corporate-membership/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            isFree: true
          })
        });

        if (response.ok) {
          event("payment_success", {
            currency: "INR",
            value: 0,
            transaction_id: `CORP-FREE-${Date.now()}`,
            item_name: plan.name,
            item_category: "Corporate Membership",
          });
          setShowSuccessPopup(true);
        } else {
          const errData = await response.json();
          alert(errData.error || "Failed to process Free plan registration.");
        }
        setIsSending(false);
        return;
      }

      // SCENARIO B: PAID PLAN FLOW (Silver / Gold)
      // 1. Initialized order configuration with backend payload
      const response = await fetch("/api/corporate-membership/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const orderData = await response.json();

      if (!response.ok) {
        alert(orderData.error || "Failed to create corporate order.");
        setIsSending(false);
        return;
      }

      // 2. Open Native Razorpay window overlay
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        name: "Mission 100 Hospital",
        description: `Corporate ${plan.name} Activation`,
        order_id: orderData.order.id,
        handler: async function (response) {
          try {
            // Trigger confirmation signature validation routine
            const verifyRes = await fetch("/api/corporate-membership/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ...formData,
                isFree: false,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature
              })
            });

            if (verifyRes.ok) {
              event("payment_success", {
                currency: "INR",
                value: finalPrice,
                transaction_id: response.razorpay_payment_id,
                item_name: plan.name,
                item_category: "Corporate Membership",
              });
              setShowSuccessPopup(true);
            } else {
              alert("Payment verification failed. Please contact our support team.");
            }
          } catch (err) {
            console.error("Signature verification crashed:", err);
          }
        },
        prefill: {
          name: formData.representativeName,
          email: formData.businessEmail,
          contact: formData.mobileNumber,
        },
        theme: {
          color: "#16a34a",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

    } catch (error) {
      console.error("Submission Error:", error);
      alert("Something went wrong processing checkouts.");
    } finally {
      setIsSending(false);
    }
  };

  const handleClosePopup = () => {
    setShowSuccessPopup(false);
    reset();
    router.push("/");
  };

  const ErrorMsg = ({ name }) => (
    errors[name] ? <p className="text-red-500 text-xs mt-1 flex items-center gap-1 font-medium"><AlertCircle className="w-3 h-3" /> {errors[name].message}</p> : null
  );

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 md:px-8 relative">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      {/* Success Modal */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm px-4">
          <div className="bg-white rounded-3xl p-8 md:p-10 max-w-md w-full shadow-2xl transform transition-all text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-800 mb-2">Partnership Confirmed!</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Thank you for partnering with Mission 100 Hospital. Your corporate wellness request for <strong>{plan.name}</strong> has been successfully registered. Check your business email for details and confirmation coordinates.
            </p>
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-left text-xs text-slate-500 mb-8 space-y-1">
              <p><strong>Selected Plan:</strong> {plan.name}</p>
              <p><strong>Reference Number:</strong> M100-CORP-{Date.now().toString().slice(-6)}</p>
              <p><strong>Next Step:</strong> Our account wellness manager will call you to coordinate the employee list setup and diagnostics camp scheduling.</p>
            </div>
            <button 
              onClick={handleClosePopup}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-colors"
            >
              Return to Homepage
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto space-y-12">
        <AboutMission100 />
        {/* REDESIGNED HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch bg-slate-50 p-2 rounded-3xl">
          
          {/* Left Column: Plan Poster Image Card */}
          <div className="lg:col-span-6 h-full">
            <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-md h-full flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">Selected Plan Poster</span>
                {/* Framed Image Container */}
                <div className="relative w-full rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 shadow-inner flex items-center justify-center p-2">
                  <div className="relative w-full aspect-[5/7] rounded-xl overflow-hidden border border-slate-100 bg-white">
                    <Image 
                      src={plan.image}
                      alt={plan.name}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
              
              {/* Details of the plan to fill space below */}
              <div className="mt-6 pt-6 border-t border-slate-100 space-y-4 text-left">
                <div className="flex items-center justify-between">
                  <span className={`inline-block border text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${plan.theme.badge}`}>
                    {plan.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-bold">12 Months Partnership</span>
                </div>
                
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">{plan.name}</h3>
                  <p className="text-xs text-slate-500 font-semibold mt-1">{plan.subtitle}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs font-semibold text-slate-650">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block mb-0.5">Price Tier</span>
                    <p className="text-sm font-black text-slate-900">{plan.price}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block mb-0.5">Billing</span>
                    <p className="text-sm font-black text-slate-900">{plan.duration}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Complete Plan Overview */}
          <div className="lg:col-span-6 space-y-8 bg-white border border-slate-150 p-6 md:p-8 rounded-3xl shadow-sm h-full flex flex-col justify-between">
            
            {/* Plan Overview */}
            <div className="space-y-3">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Plan Overview</span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-955 tracking-tight leading-tight text-slate-900">
                {plan.title}
              </h1>
              <p className="text-slate-600 text-sm font-semibold leading-relaxed">
                {plan.fullDescription || plan.shortDescription}
              </p>
            </div>

            {/* Perfect For */}
            <div className="space-y-3 border-t border-slate-100 pt-5">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wide block">Perfect For:</span>
              <div className="flex flex-wrap gap-2">
                {getPerfectForChips(plan.slug).map((chip, idx) => (
                  <span key={idx} className="bg-emerald-50 text-emerald-800 border border-emerald-100 px-3.5 py-1.5 rounded-full text-xs font-bold">
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Benefits Grid */}
            <div className="space-y-4 border-t border-slate-100 pt-5">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wide block">Key Benefits:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4.5 rounded-2xl border border-slate-150 flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-xs mb-0.5">Preventive Healthcare</h4>
                    <p className="text-[10px] text-slate-500 font-semibold leading-relaxed">Routine checks to catch complications early.</p>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-4.5 rounded-2xl border border-slate-150 flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-indigo-100 text-indigo-700 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-xs mb-0.5">Employee Wellness Tracking</h4>
                    <p className="text-[10px] text-slate-500 font-semibold leading-relaxed">Structured vitals logs and pathology trends.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Organization VS Employee Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-slate-100 pt-5">
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-850 uppercase tracking-wide block">Benefits for the Organization:</span>
                <ul className="space-y-2 text-xs text-slate-600 font-semibold pl-1">
                  <li>• Reduced absenteeism</li>
                  <li>• Higher workplace productivity</li>
                  <li>• Better employee retention</li>
                  <li>• Stronger employer branding</li>
                </ul>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-850 uppercase tracking-wide block">Benefits for Employees:</span>
                <ul className="space-y-2 text-xs text-slate-600 font-semibold pl-1">
                  <li>• Regular health screenings</li>
                  <li>• Early disease detection</li>
                  <li>• Expert doctor consultations</li>
                  <li>• Personalized wellness guidance</li>
                </ul>
              </div>
            </div>

            {/* Why Choose Mission100 */}
            <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl space-y-3 mt-6">
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">Why Choose Mission100</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] text-slate-500 font-bold">
                {getTrustPoints().map((pt, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">• {pt}</div>
                ))}
              </div>
            </div>

            {/* Bottom CTA Block with scroll triggers */}
            <div className="border-t border-slate-150 pt-8 text-center space-y-3">
              <p className="text-xs font-black text-slate-500 uppercase tracking-wider">Ready to protect your employees' health?</p>
              <button 
                type="button"
                onClick={() => {
                  const formEl = document.getElementById("registration-form-section");
                  if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 text-green-600 hover:text-green-700 font-extrabold text-sm sm:text-base transition-colors py-2 group focus:outline-none"
              >
                Continue below to complete your Corporate Registration
                <span className="inline-block animate-bounce text-lg group-hover:translate-y-0.5 transition-transform">↓</span>
              </button>
            </div>

          </div>

        </div>

        {/* Separated 50/50 details grid for What's Included and Why Mission100/Help */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm mt-8">
          {/* Left Column (50%): What's Included */}
          <div className="lg:col-span-6 bg-white border border-slate-200 p-6 rounded-3xl shadow-md space-y-4 h-full flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> What's Included
              </h4>
              <p className="text-[10px] text-slate-400 font-semibold mt-2">Dynamic deliverables covered under this tier:</p>
              <ul className="space-y-2.5 text-xs text-slate-700 font-semibold pl-1 mt-4">
                {plan.features.slice(0, 10).map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 leading-relaxed">
                    <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column (50%): Why Mission100 & Need Help stacked */}
          <div className="lg:col-span-6 space-y-6">
            {/* Why Mission100 */}
            <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-md space-y-4">
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider pb-2 border-b border-slate-100 flex items-center gap-2">
                <Building className="w-4 h-4 text-indigo-500" /> Why Mission100?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[10px] text-slate-500 font-bold">
                <div className="flex items-center gap-1.5">• Experienced Medical Professionals</div>
                <div className="flex items-center gap-1.5">• Preventive Healthcare Focus</div>
                <div className="flex items-center gap-1.5">• Trusted by Businesses</div>
                <div className="flex items-center gap-1.5">• Dedicated Corporate Wellness</div>
              </div>
            </div>

            {/* Need Help? support block */}
            <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-6 rounded-3xl shadow-md space-y-4">
              <div>
                <h4 className="text-sm font-black uppercase tracking-wider">Need Help?</h4>
                <p className="text-[10px] text-slate-400 font-semibold mt-0.5">Connect with our corporate accounts desk</p>
              </div>
              <div className="space-y-2 text-xs font-semibold text-slate-200">
                <p className="flex items-center gap-2">
                  <PhoneCall size={14} className="text-emerald-400 shrink-0" />
                  <span>+91 87964 71583</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={14} className="text-emerald-400 shrink-0" />
                  <span>info@mission100hospital.com</span>
                </p>
              </div>
              <a 
                href="/contact"
                className="block text-center w-full py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 text-xs font-black transition-colors"
              >
                Talk to Our Team
              </a>
            </div>
          </div>
        </div>

        {/* Repositioned Corporate Registration Form */}
        <div id="registration-form-section" className="max-w-4xl mx-auto bg-white border border-slate-200 p-6 md:p-10 rounded-3xl shadow-lg mt-12 scroll-mt-20">
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-wider underline decoration-green-555 decoration-green-500 underline-offset-8">
                Corporate Registration Form
              </h2>
              <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-2xl text-xs font-semibold text-emerald-800 text-center max-w-2xl mx-auto mt-4">
                Our Corporate Wellness team will review your submission and contact you shortly after successful registration.
              </div>
            </div>

            {/* SECTION 1: Company Details */}
            <div className="space-y-6 pt-4">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="text-md font-black text-slate-900 tracking-tight uppercase flex items-center gap-2">
                  <Building className="w-5 h-5 text-emerald-600" /> Section 1: Company Details
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Company Name *</label>
                  <input {...register("companyName", { required: "Company name is required" })} className={`w-full p-4 bg-slate-50 border rounded-2xl outline-none text-sm font-semibold transition-all ${errors.companyName ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50/10' : 'border-slate-200 focus:border-green-500'}`} placeholder="e.g. Acme Corporation" />
                  <ErrorMsg name="companyName" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">GST Number (Optional)</label>
                  <input {...register("gstNumber", { 
                    pattern: { value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, message: "Must be a valid GSTIN format" } 
                  })} className={`w-full p-4 bg-slate-50 border rounded-2xl outline-none text-sm font-semibold uppercase transition-all ${errors.gstNumber ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50/10' : 'border-slate-200 focus:border-green-500'}`} placeholder="22AAAAA1111A1Z1" />
                  <ErrorMsg name="gstNumber" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Number of Employees *</label>
                  <input type="number" {...register("employeeCount", { 
                    required: "Employee count is required",
                    min: { value: 1, message: "Must be at least 1 employee" }
                  })} className={`w-full p-4 bg-slate-50 border rounded-2xl outline-none text-sm font-semibold transition-all ${errors.employeeCount ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50/10' : 'border-slate-200 focus:border-green-500'}`} placeholder="e.g. 50" />
                  <ErrorMsg name="employeeCount" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">State *</label>
                  <select {...register("state", { required: "State selection is required" })} className={`w-full p-4 bg-slate-50 border rounded-2xl outline-none cursor-pointer text-sm font-semibold transition-all ${errors.state ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50/10' : 'border-slate-200 focus:border-green-500'}`}>
                    <option value="">Select State</option>
                    {indianStates.map(st => <option key={st} value={st}>{st}</option>)}
                  </select>
                  <ErrorMsg name="state" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">City *</label>
                  <input {...register("city", { required: "City is required" })} className={`w-full p-4 bg-slate-50 border rounded-2xl outline-none text-sm font-semibold transition-all ${errors.city ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50/10' : 'border-slate-200 focus:border-green-500'}`} placeholder="Enter City" />
                  <ErrorMsg name="city" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Pincode *</label>
                  <input {...register("pinCode", { 
                    required: "PIN code is required", 
                    pattern: { value: /^[0-9]{6}$/, message: "Must be a valid 6-digit PIN code" } 
                  })} className={`w-full p-4 bg-slate-50 border rounded-2xl outline-none text-sm font-semibold transition-all ${errors.pinCode ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50/10' : 'border-slate-200 focus:border-green-500'}`} placeholder="6-digit Pincode" />
                  <ErrorMsg name="pinCode" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-1">Company Address *</label>
                  <input {...register("companyAddress", { required: "Company address is required" })} className={`w-full p-4 bg-slate-50 border rounded-2xl outline-none text-sm font-semibold transition-all ${errors.companyAddress ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50/10' : 'border-slate-200 focus:border-green-500'}`} placeholder="Office floor, building name, street address" />
                  <ErrorMsg name="companyAddress" />
                </div>
              </div>
            </div>

            {/* SECTION 2: Representative Details */}
            <div className="space-y-6 pt-6 border-t border-slate-150 mt-8">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="text-md font-black text-slate-900 tracking-tight uppercase flex items-center gap-2">
                  <User className="w-5 h-5 text-emerald-600" /> Section 2: Representative Details
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Representative Name *</label>
                  <input {...register("representativeName", { required: "Representative name is required" })} className={`w-full p-4 bg-slate-50 border rounded-2xl outline-none text-sm font-semibold transition-all ${errors.representativeName ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50/10' : 'border-slate-200 focus:border-green-500'}`} placeholder="Representative Full Name" />
                  <ErrorMsg name="representativeName" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Designation *</label>
                  <input {...register("designation", { required: "Designation is required" })} className={`w-full p-4 bg-slate-50 border rounded-2xl outline-none text-sm font-semibold transition-all ${errors.designation ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50/10' : 'border-slate-200 focus:border-green-500'}`} placeholder="e.g. HR Representative / Manager" />
                  <ErrorMsg name="designation" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Business Email *</label>
                  <input type="email" {...register("businessEmail", { 
                    required: "Business email is required", 
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address format" } 
                  })} className={`w-full p-4 bg-slate-50 border rounded-2xl outline-none text-sm font-semibold transition-all ${errors.businessEmail ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50/10' : 'border-slate-200 focus:border-green-500'}`} placeholder="hr@domain.com" />
                  <p className="text-[10px] text-slate-400 mt-1 flex items-center gap-1"><Mail className="w-3 h-3 text-slate-400" /> Used for confirmations and PDF invoices.</p>
                  <ErrorMsg name="businessEmail" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Mobile Number *</label>
                  <input type="tel" {...register("mobileNumber", { 
                    required: "10-digit number required", 
                    pattern: { value: /^[0-9]{10}$/, message: "Must be a 10-digit mobile number" } 
                  })} className={`w-full p-4 bg-slate-50 border rounded-2xl outline-none text-sm font-semibold transition-all ${errors.mobileNumber ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50/10' : 'border-slate-200 focus:border-green-500'}`} placeholder="10-digit phone" />
                  <ErrorMsg name="mobileNumber" />
                </div>
              </div>
            </div>

            {/* SECTION 3: Corporate Membership Details */}
            <div className="space-y-6 pt-6 border-t border-slate-150 mt-8">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="text-md font-black text-slate-900 tracking-tight uppercase flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-emerald-600" /> Section 3: Corporate Membership Details
                </h3>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-xs space-y-1 text-slate-650 font-bold max-w-lg">
                <p>Selected Plan: <span className="text-emerald-700">{plan.name}</span></p>
                <p>Plan Price: <span className="text-emerald-750">{plan.price}</span></p>
                <p>Duration: <span className="text-slate-700 capitalize">{plan.duration}</span></p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Select Corporate Wellness Plan *</label>
                  <div className="relative">
                    <select {...register("planSlug", { required: "Plan selection is required" })} className={`w-full p-4 bg-slate-55 bg-slate-50 border rounded-2xl outline-none appearance-none cursor-pointer text-sm font-semibold transition-all ${errors.planSlug ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50/10' : 'border-slate-200 focus:border-green-500'}`}>
                      <option value="free-plan">Free Wellness Starter — ₹0</option>
                      <option value="silver-plan">Silver Corporate Care — ₹999</option>
                      <option value="gold-plan">Gold Corporate Care — ₹1,999</option>
                    </select>
                    <Briefcase className="absolute right-4 top-4.5 w-5 h-5 text-slate-400 pointer-events-none" />
                  </div>
                  <ErrorMsg name="planSlug" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-1">Additional Notes / Custom Requirements (Optional)</label>
                  <textarea rows={3} {...register("message")} className="w-full p-4 bg-slate-55 bg-slate-50 border rounded-2xl outline-none border-slate-200 resize-none text-sm font-semibold" placeholder="Detail any team preferences, coordination dates, or diagnostic camp scheduling times..." />
                </div>
              </div>
            </div>

            {/* SECTION 4: Declaration */}
            <div className="space-y-6 pt-6 border-t border-slate-150 mt-8">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="text-md font-black text-slate-900 tracking-tight uppercase flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" /> Section 4: Declaration
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="consentCheckbox" 
                    {...register("consentCheckbox", { required: "You must accept the terms of the corporate partnership." })}
                    className="mt-1 w-4 h-4 accent-green-600 rounded cursor-pointer"
                  />
                  <label htmlFor="consentCheckbox" className="text-sm font-semibold text-slate-600 cursor-pointer">
                    I agree to Mission100 Corporate Wellness Partnership Terms & Conditions and consent to receive email invoice copies. <span className="text-red-500">*</span>
                  </label>
                </div>
                <ErrorMsg name="consentCheckbox" />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSending || !selectedPlanSlug} 
              className={`w-full mt-10 text-white py-5 rounded-2xl font-black text-xl transition-all shadow-lg active:scale-[0.98] ${isSending || !selectedPlanSlug ? 'bg-slate-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
            >
              {isSending ? "Processing..." : 
               !selectedPlanSlug ? "Select a plan to continue" :
               finalPrice === 0 ? "Register Free Plan" : 
               `Continue to Pay - ${plan.price}`}
            </button>
          </form>

        </div>

      </div>
    </main>
  );
}
