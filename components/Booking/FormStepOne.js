"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { MapPin } from "lucide-react";
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
      city: ""
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
      const response = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) console.log("Enquiry sent successfully!");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSending(false);
      onNext(data); 
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* ✅ Use the separated About component here */}
      <AboutMission100 />

      {/* --- FORM SECTION --- */}
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-2 md:p-8 rounded-3xl space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center uppercase tracking-tight underline decoration-green-500 underline-offset-8">
          Appointment Details
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700">First Name *</label>
            <input {...register("firstName", { required: "Required" })} className="mt-1 block w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 ring-green-500 outline-none transition-all" />
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
              <option value="Blood Test">Blood Test</option>
              <option value="complete test Test">Urine Test</option>
            </select>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 mt-4">
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

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700">Additional Note</label>
              <textarea 
                {...register("additionalNote")} 
                className="mt-1 block w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none" 
                rows="2" 
                placeholder="Specific instructions for finding your location..."
              ></textarea>
            </div>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isSending} 
          className={`w-full text-white py-5 rounded-2xl font-black text-lg transition-all shadow-xl active:scale-95 ${isSending ? 'bg-slate-400' : 'bg-green-600 hover:bg-slate-900'}`}
        >
          {isSending ? "RECEIVING DETAILS..." : "CONTINUE TO SCHEDULE"}
        </button>
      </form>
    </div>
  );
};

export default FormStepOne;