"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { MapPin, Activity, AlertCircle } from "lucide-react"; 
import AboutMission100 from "../AboutMission100";

const FormStepOne = () => {
  const [isSending, setIsSending] = useState(false);
  
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset, 
    formState: { errors },
  } = useForm({
    defaultValues: {
      state: "",
      city: "",
      age: "",
      gender: "",
      testName: "Heart Attack Prevention Test" 
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
    setIsSending(true);
    try {
      // 1. Send data to your API for Nodemailer processing[cite: 4, 5]
      const response = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // 2. Open payment link in a new tab[cite: 5]
        window.open("https://rzp.io/rzp/dTEwA6is", "_blank");

        // 3. Clear the form[cite: 5]
        reset();

        // 4. Redirect current tab to the specific heart checkup page
        window.location.href = "/test/complete-heart-checkup-at-home"; 
      } else {
        alert("There was an issue sending your details. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
    } finally {
      setIsSending(false);
    }
  };

  const ErrorMsg = ({ name }) => (
    errors[name] ? (
      <p className="text-red-500 text-xs mt-1 flex items-center gap-1 font-medium">
        <AlertCircle className="w-3 h-3" /> {errors[name].message}
      </p>
    ) : null
  );

  return (
    <div className="max-w-4xl mx-auto">
      <AboutMission100 />

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-4 md:p-8 rounded-3xl space-y-8 shadow-sm border border-slate-50">
        <h2 className="text-2xl font-bold text-slate-800 text-center uppercase tracking-wider underline decoration-green-500 underline-offset-8">
          Appointment Details
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">First Name *</label>
            <input {...register("firstName", { required: "First name is required" })} className={`w-full p-4 bg-slate-50 border rounded-2xl outline-none ${errors.firstName ? 'border-red-500' : 'border-slate-200'}`} placeholder="First Name" />
            <ErrorMsg name="firstName" />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Last Name *</label>
            <input {...register("lastName", { required: "Last name is required" })} className={`w-full p-4 bg-slate-50 border rounded-2xl outline-none ${errors.lastName ? 'border-red-500' : 'border-slate-200'}`} placeholder="Last Name" />
            <ErrorMsg name="lastName" />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Age *</label>
            <input type="number" {...register("age", { required: "Age is required", min: { value: 1, message: "Valid age required" } })} className={`w-full p-4 bg-slate-50 border rounded-2xl outline-none ${errors.age ? 'border-red-500' : 'border-slate-200'}`} placeholder="Enter Age" />
            <ErrorMsg name="age" />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Gender *</label>
            <select {...register("gender", { required: "Gender is required" })} className={`w-full p-4 bg-slate-50 border rounded-2xl outline-none cursor-pointer ${errors.gender ? 'border-red-500' : 'border-slate-200'}`}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <ErrorMsg name="gender" />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Contact Number *</label>
            <input type="tel" {...register("contactNo", { 
              required: "10-digit mobile number required", 
              pattern: { value: /^[0-9]{10}$/, message: "Number must be exactly 10 digits" } 
            })} className={`w-full p-4 bg-slate-50 border rounded-2xl outline-none ${errors.contactNo ? 'border-red-500' : 'border-slate-200'}`} placeholder="Mobile Number" />
            <ErrorMsg name="contactNo" />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Preferred Test *</label>
            <div className="relative">
              <select {...register("testName", { required: "Required" })} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none appearance-none cursor-pointer">
                <option value="Heart Attack Prevention Test">Heart Attack Prevention Test</option>
              </select>
              <Activity className="absolute right-4 top-4 w-5 h-5 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-green-600" /> Home Consultation Address
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-slate-700 mb-1">House / Flat / Building *</label>
              <input {...register("houseNo", { required: "Building/House number is required" })} className={`w-full p-4 bg-slate-50 border rounded-2xl outline-none ${errors.houseNo ? 'border-red-500' : 'border-slate-200'}`} />
              <ErrorMsg name="houseNo" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-slate-700 mb-1">Street / Locality *</label>
              <input {...register("street", { required: "Street/Locality is required" })} className={`w-full p-4 bg-slate-50 border rounded-2xl outline-none ${errors.street ? 'border-red-500' : 'border-slate-200'}`} />
              <ErrorMsg name="street" />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">State *</label>
              <select {...register("state", { required: "State is required" })} className={`w-full p-4 bg-slate-50 border rounded-2xl outline-none ${errors.state ? 'border-red-500' : 'border-slate-200'}`}>
                <option value="">Select State</option>
                <option value="Delhi">Delhi</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
              </select>
              <ErrorMsg name="state" />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">City *</label>
              <select 
                {...register("city", { required: "City is required" })} 
                disabled={selectedState === "Delhi"}
                className={`w-full p-4 bg-slate-50 border rounded-2xl outline-none disabled:opacity-60 ${errors.city ? 'border-red-500' : 'border-slate-200'}`}
              >
                <option value="">Select City</option>
                {availableCities.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <ErrorMsg name="city" />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Pincode *</label>
              <input {...register("pinCode", { 
                required: "6-digit Pincode required", 
                pattern: { value: /^[0-9]{6}$/, message: "Pincode must be exactly 6 digits" } 
              })} className={`w-full p-4 bg-slate-50 border rounded-2xl outline-none ${errors.pinCode ? 'border-red-500' : 'border-slate-200'}`} placeholder="6-digit Pincode" />
              <ErrorMsg name="pinCode" />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Landmark</label>
              <input {...register("landmark")} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none" placeholder="Nearby Landmark" />
            </div>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isSending} 
          className={`w-full text-white py-5 rounded-2xl font-black text-xl transition-all shadow-lg active:scale-[0.98] ${isSending ? 'bg-slate-400 cursor-not-allowed' : 'bg-green-600 hover:bg-slate-900'}`}
        >
          {isSending ? "Processing..." : "Continue to Pay"}
        </button>
      </form>
    </div>
  );
};

export default FormStepOne;