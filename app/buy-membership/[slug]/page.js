"use client";

import React, { useState, useEffect, use } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { MapPin, ShieldCheck, AlertCircle, Calendar, Clock, CheckCircle2, XCircle, Tag, Mail, HeartPulse, ShieldAlert } from "lucide-react";
import AboutMission100 from "@/components/AboutMission100";
import Script from "next/script";
import { event } from "@/app/lib/gtag";

const planPriceConfig = {
  "free-plan": { name: "Free Employee Plan", price: 0 },
  "silver-plan": { name: "Silver Care", price: 2999 },
  "gold-plan": { name: "Gold Care", price: 4999 },
  "platinum-plan": { name: "Platinum Care", price: 9999 },
  "pro-fitness-plan": { name: "Pro Fitness Plan", price: 19999 }
};

export default function BuyMembershipPage({ params }) {
  const resolvedParams = use(params);
  const router = useRouter();

  const [isSending, setIsSending] = useState(false);
  const [appliedCode, setAppliedCode] = useState(null);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [isCheckingCode, setIsCheckingCode] = useState(false);
  const [referralInput, setReferralInput] = useState("");
  const [referralError, setReferralError] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

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
      firstName: "", lastName: "", email: "", state: "", city: "", dob: "", gender: "",
      bloodGroup: "", contactNo: "", emergencyName: "", emergencyContactNo: "", emergencyRelationship: "",
      medicalConditions: "", planSlug: initialPlanSlug, appointmentDate: "", appointmentTime: "",
      houseNo: "", street: "", pinCode: "", landmark: "", termsAccepted: false, infoAccurate: false, marketingConsent: false
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
          testName: currentPlanDetails.name
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setAppliedCode(referralInput.toUpperCase());
        setDiscountAmount(data.discountAmount);
        event("coupon_applied", {
          coupon_code: referralInput.toUpperCase(),
          discount: data.discountAmount,
          context: "membership",
        });
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

  useEffect(() => {
    if (appliedCode) {
      handleRemoveReferral();
    }
  }, [selectedPlanSlug]);

  // --- CONNECTED OVERLAY ON SUBMIT HANDLING ---
  const onSubmit = async (formData) => {
    setIsSending(true);
    try {
      // 1. Initialized order configuration with backend payload signature mapping
      const response = await fetch("/api/membership/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          referralCode: appliedCode || ""
        })
      });

      const orderData = await response.json();

      if (!response.ok) {
        alert(orderData.error || "Failed to create membership order layout.");
        setIsSending(false);
        return;
      }

      event("membership_order_submit", {
        plan_slug: selectedPlanSlug,
        plan_name: currentPlanDetails.name,
        price: finalPrice,
      });

      // If it is entirely free due to referral discount deduction logic
      if (orderData.isFree) {
        event("payment_success", {
          currency: "INR",
          value: 0,
          transaction_id: `FREE-${Date.now()}`,
          item_name: currentPlanDetails.name,
          item_category: "Individual Membership",
        });
        setShowSuccessPopup(true);
        setIsSending(false);
        return;
      }

      // 2. Open Native Razorpay window overlay mapping
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        name: "Mission 100 Hospital",
        description: `${currentPlanDetails.name} Activation`,
        order_id: orderData.order.id,
        handler: async function (response) {
          try {
            // Trigger confirmation signature validation routine
            const verifyRes = await fetch("/api/membership/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                referralCode: appliedCode || "None"
              })
            });

            if (verifyRes.ok) {
              event("payment_success", {
                currency: "INR",
                value: finalPrice,
                transaction_id: response.razorpay_payment_id,
                item_name: currentPlanDetails.name,
                item_category: "Individual Membership",
              });
              setShowSuccessPopup(true);
            } else {
              alert("Payment verification failed. Please reach support team.");
            }
          } catch (err) {
            console.error("Signature verification step call crashed:", err);
          }
        },
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          contact: formData.contactNo,
        },
        theme: {
          color: "#16a34a", // Clean green matching branding guidelines
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
    handleRemoveReferral();
    router.push("/individual-membership-plans");
  };

  const ErrorMsg = ({ name }) => (
    errors[name] ? <p className="text-red-500 text-xs mt-1 flex items-center gap-1 font-medium"><AlertCircle className="w-3 h-3" /> {errors[name].message}</p> : null
  );

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center py-16 px-4 relative">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

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

              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 mb-1">Email Address *</label>
                <input type="email" {...register("email", {
                  required: "Email address is required",
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address format" }
                })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none border-slate-200" placeholder="example@domain.com" />
                <p className="text-xs text-slate-400 mt-1 flex items-center gap-1"><Mail className="w-3 h-3" /> Used for confirmations, invoices, reports, and portal access.</p>
                <ErrorMsg name="email" />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Date of Birth *</label>
                <input type="date" max={today} {...register("dob", { required: "Date of Birth is required" })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none cursor-pointer border-slate-200" />
                <ErrorMsg name="dob" />
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
                <input type="tel" {...register("contactNo", { required: "10-digit number required", pattern: { value: /^[0-9]{10}$/, message: "Must be a valid 10-digit mobile layout" } })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none border-slate-200" placeholder="Mobile Number" />
                <ErrorMsg name="contactNo" />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Blood Group (Optional)</label>
                <select {...register("bloodGroup")} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none cursor-pointer border-slate-200">
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="Unknown">Unknown</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 mb-1">Membership Plan *</label>
                <div className="relative">
                  <select {...register("planSlug", { required: "Plan selection is required" })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none appearance-none cursor-pointer border-slate-200">
                    <option value="free-plan">Free Employee Plan — ₹0</option>
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
                <ShieldAlert className="w-5 h-5 text-red-500" /> Emergency Contact Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Contact Name *</label>
                  <input {...register("emergencyName", { required: "Emergency name is required" })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none border-slate-200" placeholder="Full Name" />
                  <ErrorMsg name="emergencyName" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Contact Number *</label>
                  <input type="tel" {...register("emergencyContactNo", { required: "Emergency number required", pattern: { value: /^[0-9]{10}$/, message: "Must be a 10-digit number" } })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none border-slate-200" placeholder="10-digit Mobile" />
                  <ErrorMsg name="emergencyContactNo" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Relationship *</label>
                  <select {...register("emergencyRelationship", { required: "Select relationship status" })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none cursor-pointer border-slate-200">
                    <option value="">Select Relationship</option>
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Spouse">Spouse</option>
                    <option value="Son/Daughter">Son/Daughter</option>
                    <option value="Other">Other</option>
                  </select>
                  <ErrorMsg name="emergencyRelationship" />
                </div>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <HeartPulse className="w-5 h-5 text-indigo-600" /> Existing Medical Conditions (Optional)
              </h3>
              <p className="text-xs text-slate-400 mb-3">Helps our medical professionals assess your parameters accurately.</p>
              <div>
                <textarea rows={3} {...register("medicalConditions")} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none border-slate-200 resize-none" placeholder="Mention past diagnosis, conditions, allergies or ongoing treatments..." />
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
                <Tag className="w-5 h-5 text-green-600" /> Discount & Referrals
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

            <div className="border-t border-slate-100 pt-8 space-y-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="infoAccurate"
                  {...register("infoAccurate", { required: "You must confirm the accuracy of information provided." })}
                  className="mt-1 w-4 h-4 accent-green-600 rounded cursor-pointer"
                />
                <label htmlFor="infoAccurate" className="text-sm font-medium text-slate-600 cursor-pointer">
                  I confirm that all information provided is accurate. <span className="text-red-500">*</span>
                </label>
              </div>
              <ErrorMsg name="infoAccurate" />

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="termsAccepted"
                  {...register("termsAccepted", { required: "You must accept the terms and conditions." })}
                  className="mt-1 w-4 h-4 accent-green-600 rounded cursor-pointer"
                />
                <label htmlFor="termsAccepted" className="text-sm font-medium text-slate-600 cursor-pointer">
                  I agree to Mission100 Membership Terms & Conditions. <span className="text-red-500">*</span>
                </label>
              </div>
              <ErrorMsg name="termsAccepted" />

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="marketingConsent"
                  {...register("marketingConsent")}
                  className="mt-1 w-4 h-4 accent-green-600 rounded cursor-pointer"
                />
                <label htmlFor="marketingConsent" className="text-sm font-medium text-slate-600 cursor-pointer">
                  I consent to receive SMS, WhatsApp and Email updates.
                </label>
              </div>
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