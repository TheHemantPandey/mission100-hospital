"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { MapPin, Activity, AlertCircle, Calendar, Clock, CheckCircle2, XCircle, Tag } from "lucide-react"; 
import AboutMission100 from "@/components/AboutMission100";
import Script from "next/script";

export default function BookingPage() {
  const [isSending, setIsSending] = useState(false);
  
  // --- NEW UI STATES ---
  const [appliedCode, setAppliedCode] = useState(null);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [isCheckingCode, setIsCheckingCode] = useState(false);
  const [referralInput, setReferralInput] = useState("");
  const [referralError, setReferralError] = useState("");
  
  // Custom Popup State
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const basePriceConfig = {
    "Heart Attack Prevention Test": 2000, 
    "Full Body Checkup": 899              
  };

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
      contactNo: "", testName: "", appointmentDate: "", appointmentTime: "", 
      houseNo: "", street: "", pinCode: "", landmark: ""
    }
  });

  const selectedState = watch("state");
  const selectedTest = watch("testName"); // Watch the test to update price dynamically
  
  // Calculate the live price for the button
  const currentBasePrice = basePriceConfig[selectedTest] || 0;
  const finalPrice = Math.max(0, currentBasePrice - discountAmount);

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

  // --- NEW: Apply Referral Function ---
  const handleApplyReferral = async (e) => {
    e.preventDefault();
    setReferralError("");
    if (!referralInput.trim()) return;

    setIsCheckingCode(true);
    try {
      const res = await fetch("/api/payment/check-referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ referralCode: referralInput }),
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

  // --- NEW: Remove Referral Function ---
  const handleRemoveReferral = () => {
    setAppliedCode(null);
    setDiscountAmount(0);
    setReferralError("");
  };

  const onSubmit = async (data) => {
    setIsSending(true);
    try {
      await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const orderResponse = await fetch("/api/payment/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          referralCode: appliedCode // Send the verified code
        }),
      });

      const orderData = await orderResponse.json();

      if (!orderResponse.ok) {
        alert(orderData.error || "Something went wrong.");
        setIsSending(false);
        return; 
      }

      // --- FREE TEST LOGIC (Trigger Custom Popup immediately) ---
      if (orderData.isFree) {
        setShowSuccessPopup(true);
        setIsSending(false);
        return; 
      }

      // --- PAID LOGIC ---
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, 
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        name: "Mission 100 Hospital",
        description: `Payment for ${data.testName}`,
        order_id: orderData.order.id,
        handler: async function (response) {
          const verifyResponse = await fetch('/api/payment/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                referralCode: appliedCode
            })
          });

          if (verifyResponse.ok) {
            // Trigger Custom Popup instead of alert!
            setShowSuccessPopup(true);
          } else {
            alert("Payment verification failed.");
          }
        },
        prefill: {
            name: `${data.firstName} ${data.lastName}`,
            contact: data.contactNo
        },
        theme: { color: "#16a34a" }
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();

    } catch (error) {
      console.error("Submission Error:", error);
      alert("An unexpected error occurred.");
    } finally {
      setIsSending(false);
    }
  };

  // Function to close popup and clear form
  const handleClosePopup = () => {
    setShowSuccessPopup(false);
    reset();
    handleRemoveReferral();
    window.scrollTo(0, 0);
  };

  const ErrorMsg = ({ name }) => (
    errors[name] ? <p className="text-red-500 text-xs mt-1 flex items-center gap-1 font-medium"><AlertCircle className="w-3 h-3" /> {errors[name].message}</p> : null
  );

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center py-16 px-4 relative">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      {/* --- CUSTOM SUCCESS POPUP --- */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm px-4">
          <div className="bg-white rounded-3xl p-8 md:p-10 max-w-md w-full shadow-2xl transform transition-all text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-800 mb-2">Booking Confirmed!</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Thank you for choosing Mission 100 Hospital. Your appointment details have been securely recorded. Our team will contact you shortly.
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
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Finalize Your Appointment</h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <AboutMission100 />

          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-3xl space-y-8 mt-6">
            <h2 className="text-2xl font-bold text-slate-800 text-center uppercase tracking-wider underline decoration-green-500 underline-offset-8">
              Appointment Details
            </h2>
            
            {/* --- Personal Details --- */}
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
                <label className="block text-sm font-bold text-slate-700 mb-1">Preferred Test *</label>
                <div className="relative">
                  <select {...register("testName", { required: "Test selection is required" })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none appearance-none cursor-pointer border-slate-200">
                    <option value="">Select a Test</option>
                    <option value="Heart Attack Prevention Test">Heart Attack Prevention Test</option>
                    <option value="Full Body Checkup">Full Body Checkup</option>
                  </select>
                  <Activity className="absolute right-4 top-4 w-5 h-5 text-slate-400 pointer-events-none" />
                </div>
                <ErrorMsg name="testName" />
              </div>
            </div>

            {/* --- Schedule Details --- */}
            <div className="border-t border-slate-100 pt-8">
              <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-green-600" /> Schedule Details
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

            {/* --- Address Details --- */}
            <div className="border-t border-slate-100 pt-8">
              <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-600" /> Home Consultation Address
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

            {/* --- UPGRADED: Referral Code Section --- */}
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

            {/* --- UPGRADED: Dynamic Submit Button --- */}
            <button 
              type="submit" 
              disabled={isSending || !selectedTest} 
              className={`w-full mt-10 text-white py-5 rounded-2xl font-black text-xl transition-all shadow-lg active:scale-[0.98] ${isSending || !selectedTest ? 'bg-slate-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
            >
              {isSending ? "Processing..." : 
               !selectedTest ? "Select a test to continue" :
               finalPrice === 0 ? "Book Free Appointment" : 
               `Continue to Pay - ₹${finalPrice}`}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}