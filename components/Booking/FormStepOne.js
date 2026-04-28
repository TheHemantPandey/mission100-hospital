"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { MapPin, Dumbbell } from "lucide-react"; // Added Dumbbell icon
import AboutMission100 from "../AboutMission100";

const FormStepOne = ({ onNext }) => {
  const [isSending, setIsSending] = useState(false);
  
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      state: "",
      city: "",
      gymInfo: "" // New field
    }
  });

  const selectedState = watch("state");
  const locations = {
    "Delhi": ["Delhi"],
    "Uttar Pradesh": ["Noida", "Greater Noida"]
  };

  const availableCities = selectedState ? locations[selectedState] : [];

  useEffect(() => {
    if (selectedState === "Delhi") {
      setValue("city", "Delhi");
    } else {
      setValue("city", "");
    }
  }, [selectedState, setValue]);

  const onSubmit = async (data) => {
    // Parse price from gym selection (e.g., "Anytime Fitness|599")
    const [gymName, gymPrice] = data.gymInfo.split("|");
    const finalData = {
      ...data,
      gymName,
      amount: parseInt(gymPrice)
    };

    setIsSending(true);
    try {
      const response = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });
      if (response.ok) console.log("Enquiry sent successfully!");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSending(false);
      onNext(finalData); 
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <AboutMission100 />

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-2 md:p-8 rounded-3xl space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center uppercase tracking-tight underline decoration-green-500 underline-offset-8">
          Appointment Details
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700">First Name *</label>
            <input {...register("firstName", { required: "Required" })} className="mt-1 block w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 ring-green-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700">Last Name *</label>
            <input {...register("lastName", { required: "Required" })} className="mt-1 block w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700">Contact Number *</label>
            <input type="tel" {...register("contactNo", { required: "10 digits required", pattern: /^[0-9]{10}$/ })} className="mt-1 block w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700">Preferred Test *</label>
            <select {...register("testName", { required: "Required" })} className="mt-1 block w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none">
              <option value="">Select Test</option>
              <option value="Bone Test">Bone Test</option>
              <option value="Stress Test">Stress Test</option>
              <option value="Sugar Test">Sugar Test</option>
              <option value="Lft & Kft Test">Lft & Kft Test</option>
              <option value="Diabities Test">Diabities Test</option>
              <option value="Family Pack Test">Family Pack Test</option>
              <option value="Personality Test">Personality Test</option>
              <option value="Blood Group Test">Blood Group Test</option>
              <option value="Body Fitness Test">Body Fitness Test</option>
              <option value="Full Body Checkup">Full Body Checkup</option>
              <option value="Senior Citizen Checkup For Men">Senior Citizen Checkup For Men</option>
              <option value="Senior Citizen Checkup For Women">Senior Citizen Checkup For Women</option>
              <option value="Body Mineral and Vitamin Checkup">Body Mineral and Vitamin Checkup</option>
              </select>
          </div>
        </div>

        {/* --- NEW GYM SECTION --- */}
        <div className="border-t border-slate-100 pt-8">
          <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Dumbbell className="w-5 h-5 text-green-600" /> Select Your Gym
          </h3>
          <div className="w-full">
            <label className="block text-sm font-semibold text-slate-700">Gym Location & Price *</label>
            <select 
              {...register("gymInfo", { required: "Please select a gym" })} 
              className="mt-1 block w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none"
            >
              <option value="">Select a Gym</option>
              <option value="Anytime Fitness Preet Vihar|599">Anytime Fitness Preet Vihar</option>
              <option value="Cult Fit Preet Vihar|999">Cult Fit Preet Vihar</option>
              <option value="WTF Laxmi Nagar|699">WTF Laxmi Nagar</option>
              <option value="Inferno Laxmi Nagar|199">Inferno Laxmi Nagar</option>
              <option value="Neelkhand Laxmi Nagar|399">Neelkhand Laxmi Nagar</option>
              <option value="Vision Fitness Laxmi Nagar|499">Vision Fitness Laxmi Nagar</option>
            </select>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-green-600" /> Home Consultation Address
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700">House / Flat No. / Building Name *</label>
              <input {...register("houseNo", { required: "Required" })} className="mt-1 block w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700">Street / Area / Locality *</label>
              <input {...register("street", { required: "Required" })} className="mt-1 block w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700">State *</label>
              <select {...register("state", { required: "Required" })} className="mt-1 block w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none">
                <option value="">Select State</option>
                <option value="Delhi">Delhi</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700">City *</label>
              <select 
                {...register("city", { required: "Required" })} 
                disabled={selectedState === "Delhi"}
                className="mt-1 block w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none disabled:opacity-60"
              >
                <option value="">Select City</option>
                {availableCities.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700">Pincode *</label>
              <input {...register("pinCode", { required: "6 digits required", pattern: /^[0-9]{6}$/ })} className="mt-1 block w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700">Nearby Landmark</label>
              <input {...register("landmark")} className="mt-1 block w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none" placeholder="e.g. Near Metro Station" />
            </div>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isSending} 
          className={`w-full text-white py-5 rounded-2xl font-black text-lg transition-all shadow-xl active:scale-95 ${isSending ? 'bg-slate-400' : 'bg-green-600 hover:bg-slate-900'}`}
        >
          {isSending ? "Submitting Details..." : "Continue to Schedule"}
        </button>
      </form>
    </div>
  );
};

export default FormStepOne;