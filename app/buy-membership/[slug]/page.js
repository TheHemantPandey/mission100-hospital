"use client";

import React, { useState, useEffect, use } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { MapPin, ShieldCheck, AlertCircle, Calendar, Clock, CheckCircle2, XCircle, Tag } from "lucide-react"; 
import AboutMission100 from "@/components/AboutMission100";
import Script from "next/script";

// Pricing and plan internal keys mapping
const planPriceConfig = {
  "silver-plan": { name: "Silver Care", price: 2999 },
  "gold-plan": { name: "Gold Care", price: 4999 },
  "platinum-plan": { name: "Platinum Care", price: 9999 },
  "pro-fitness-plan": { name: "Pro Fitness Plan", price: 19999 }
};

export default function BuyMembershipPage({ params }) {
  // Safely unwrap page params matching Next.js structural frameworks
  const resolvedParams = use(params);
  const router = useRouter();

  const [isSending, setIsSending] = useState(false);
  const [appliedCode, setAppliedCode] = useState(null);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [isCheckingCode, setIsCheckingCode] = useState(false);
  const [referralInput, setReferralInput] = useState("");
  const [referralError, setReferralError] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Fallback pattern logic: Use path slug if valid, otherwise default directly to platinum-plan
  const initialPlanSlug = planPriceConfig[resolvedParams.slug] ? resolvedParams.slug : "platinum-plan";

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset, 
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "", lastName: "", state: "", city: "", age: "", gender: "", 
      contactNo: "", planSlug: initialPlanSlug, appointmentDate: "", appointmentTime: "", 
      houseNo: "", street: "", pinCode: "", landmark: ""
    }
  });

  const selectedState = watch("state");
  const selectedPlanSlug = watch("planSlug"); 
  
  const currentPlanDetails = planPriceConfig[selectedPlanSlug] || { name: "", price: 0 };
  const finalPrice = Math.max(0, currentPlanDetails.price - discountAmount);

  const locations = {
    "Delhi": ["Delhi"],
    "Uttar Pradesh": ["Noida", "Greater Noida"]
  };

  const availableCities = selectedState ? locations[selectedState] : [];
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (selectedState === "Delhi") setValue("city", "Delhi");
    else setValue("city", "");
  }, [selectedState, setValue]);

  // --- Apply Referral Function ---
  const handleApplyReferral = async (e) => {
    e.preventDefault();
    setReferralError("");
    
    if (!selectedPlanSlug) {
      setReferralError("Please select a Membership Plan before applying a coupon.");
      return;
    }

    if (!referralInput.trim()) return;

    setIsCheckingCode(true);
    try {
      const res = await fetch("/api/payment/check-referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          referralCode: referralInput,
          testName: currentPlanDetails.name // Passing name matching your backend structure
        }),
      });
      
      const data = await res.json();

      if (res.ok) {
        setAppliedCode(referralInput.toUpperCase());
        setDiscountAmount(data.discountAmount);
        setReferralInput("");
      } else {
        setReferralError(data.error); 
      }
    } catch (err) {
      setReferralError("Network error. Please try again.");
    } finally {
      setIsCheckingCode(false);
    }
  };

  const handleRemoveReferral = () => {
    setAppliedCode(null);
    setDiscountAmount(0);
    setReferralError("");
  };

  // Auto-remove coupon if user changes their selected layout
  useEffect(() => {
    if (appliedCode) {
      handleRemoveReferral();
    }
  }, [selectedPlanSlug]);

  const onSubmit = async (data) => {
    setIsSending(true);
    // Placeholder configuration framework waiting for your integrated payment flow callback
    try {
      console.log("Submitting Membership Details Form Data:", {
        ...data,
        planName: currentPlanDetails.name,
        finalPrice: finalPrice,
        referralCode: appliedCode
      });
      
      // Temporary successful window action layout state trigger
      setShowSuccessPopup(true);
    } catch (error) {
      console.error("Submission Error:", error);
    } finally {
      setIsSending(false);
    }
  };

  const handleClosePopup = () => {
    setShowSuccessPopup(false);
    reset();
    handleRemoveReferral();
    router.push("/membership-plans");
  };

  const ErrorMsg = ({ name }) => (
    errors[name] ? <p className="text-red-500 text-xs mt-1 flex items-center gap-1 font-medium"><AlertCircle className="w-3 h-3" /> {errors[name].message}</p> : null
  );

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center py-16 px-4 relative">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm px-4">
          <div className="bg-white rounded-3xl p-8 md:p-10 max-w-md w-full shadow-2xl transform transition-all text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-800 mb-2">Registration Confirmed!</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Thank you for choosing Mission 100 Hospital. Your membership request for <strong>{currentPlanDetails.name}</strong> has been securely logged.
            </p>
            <button 
              onClick={handleClosePopup}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      )}

      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl p-6 md:p-10 border border-slate-100">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Activate Membership Plan</h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <AboutMission100 />

          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-3xl space-y-8 mt-6">
            <h2 className="text-2xl font-bold text-slate-800 text-center uppercase tracking-wider underline decoration-green-500 underline-offset-8">
              Subscriber Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">First Name *</label>
                <input {...register("firstName", { required: "First name is required" })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none border-slate-200" placeholder="First Name" />
                <ErrorMsg name="firstName" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Last Name *</label>
                <input {...register("lastName", { required: "Last name is required" })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none border-slate-200" placeholder="Last Name" />
                <ErrorMsg name="lastName" />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Age *</label>
                <input type="number" {...register("age", { required: "Age is required", min: 1 })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none border-slate-200" placeholder="Enter Age" />
                <ErrorMsg name="age" />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Gender *</label>
                <select {...register("gender", { required: "Gender is required" })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none cursor-pointer border-slate-200">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <ErrorMsg name="gender" />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Contact Number *</label>
                <input type="tel" {...register("contactNo", { required: "10-digit number required", pattern: { value: /^[0-9]{10}$/ } })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none border-slate-200" placeholder="Mobile Number" />
                <ErrorMsg name="contactNo" />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Membership Plan *</label>
                <div className="relative">
                  <select {...register("planSlug", { required: "Plan selection is required" })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none appearance-none cursor-pointer border-slate-200">
                    <option value="silver-plan">Silver Care Plan — ₹2,999</option>
                    <option value="gold-plan">Gold Care Plan — ₹4,999</option>
                    <option value="platinum-plan">Platinum Care Plan — ₹9,999</option>
                    <option value="pro-fitness-plan">Pro Fitness Plan — ₹19,999</option>
                  </select>
                  <ShieldCheck className="absolute right-4 top-4 w-5 h-5 text-slate-400 pointer-events-none" />
                </div>
                <ErrorMsg name="planSlug" />
              </div>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-green-600" /> Pre-activation Check Date
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Select Date *</label>
                  <input type="date" min={today} {...register("appointmentDate", { required: "Date is required" })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none cursor-pointer border-slate-200" />
                  <ErrorMsg name="appointmentDate" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Select Time Slot *</label>
                  <div className="relative">
                    <select {...register("appointmentTime", { required: "Time slot is required" })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none appearance-none cursor-pointer border-slate-200">
                      <option value="">Choose preferred time</option>
                      <option value="07:00 AM - 09:00 AM">07:00 AM - 09:00 AM</option>
                      <option value="09:00 AM - 11:00 AM">09:00 AM - 11:00 AM</option>
                      <option value="11:00 AM - 01:00 PM">11:00 AM - 01:00 PM</option>
                    </select>
                    <Clock className="absolute right-4 top-4 w-5 h-5 text-slate-400 pointer-events-none" />
                  </div>
                  <ErrorMsg name="appointmentTime" />
                </div>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-600" /> Communication & Service Address
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-1">House / Flat / Building *</label>
                  <input {...register("houseNo", { required: "Required" })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none border-slate-200" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-1">Street / Locality *</label>
                  <input {...register("street", { required: "Required" })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none border-slate-200" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">State *</label>
                  <select {...register("state", { required: "Required" })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none border-slate-200">
                    <option value="">Select State</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">City *</label>
                  <select {...register("city", { required: "Required" })} disabled={selectedState === "Delhi"} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none disabled:opacity-60 border-slate-200">
                    <option value="">Select City</option>
                    {availableCities.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Pincode *</label>
                  <input {...register("pinCode", { required: "Required", pattern: /^[0-9]{6}$/ })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none border-slate-200" placeholder="6-digit Pincode" />
                </div>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-8 mt-6">
               <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                 <Tag className="w-5 h-5 text-green-600"/> Discount & Referrals
               </h3>
               
               {!appliedCode ? (
                 <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-700 mb-1">Referral Code (Optional)</label>
                    <div className="flex gap-3">
                      <input 
                        value={referralInput}
                        onChange={(e) => setReferralInput(e.target.value.toUpperCase())}
                        className="flex-1 p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none uppercase font-semibold" 
                        placeholder="ENTER CODE" 
                      />
                      <button 
                        onClick={handleApplyReferral}
                        disabled={isCheckingCode || !referralInput}
                        className="px-8 bg-slate-800 text-white font-bold rounded-2xl hover:bg-slate-700 disabled:opacity-50 transition-colors"
                      >
                        {isCheckingCode ? "Checking..." : "Apply"}
                      </button>
                    </div>
                    {referralError && <p className="text-red-500 text-sm font-medium mt-2">{referralError}</p>}
                 </div>
               ) : (
                 <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                      <div>
                        <p className="text-green-800 font-bold">Code '{appliedCode}' Applied!</p>
                        <p className="text-green-600 text-sm font-medium">You saved ₹{discountAmount}</p>
                      </div>
                    </div>
                    <button 
                      type="button" 
                      onClick={handleRemoveReferral}
                      className="text-red-500 hover:text-red-700 font-bold text-sm px-3 py-2 flex items-center gap-1"
                    >
                      <XCircle className="w-4 h-4" /> Remove
                    </button>
                 </div>
               )}
            </div>

            <button 
              type="submit" 
              disabled={isSending || !selectedPlanSlug} 
              className={`w-full mt-10 text-white py-5 rounded-2xl font-black text-xl transition-all shadow-lg active:scale-[0.98] ${isSending || !selectedPlanSlug ? 'bg-slate-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
            >
              {isSending ? "Processing..." : 
               !selectedPlanSlug ? "Select a plan to continue" :
               finalPrice === 0 ? "Activate Free Plan" : 
               `Continue to Pay - ₹${finalPrice}`}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}