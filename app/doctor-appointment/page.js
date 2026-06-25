"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams, useRouter } from "next/navigation";
import { 
  MapPin, 
  AlertCircle, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  User, 
  Video, 
  Building2,
  Sparkles,
  Mail,
  Languages,
  Users
} from "lucide-react"; 
import AboutMission100 from "@/components/AboutMission100";
import practitioners from "@/data/doctor.json";

function AppointmentFormContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [isSending, setIsSending] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [allowedModes, setAllowedModes] = useState(["Online", "Offline"]);

  // URL extraction fallback: read expert slug, default to first item if empty/not matched
  const expertQuery = searchParams.get("expert");
  const matchedExpert = practitioners.find(p => p.slug === expertQuery);
  const initialDoctorId = matchedExpert ? matchedExpert.id : "";

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "", lastName: "", email: "", dob: "", gender: "", contactNo: "",
      whatsappNo: "", sameAsMobile: false, patientType: "New", languagePreference: "Both",
      doctorId: initialDoctorId, consultationMode: "",
      appointmentDate: "", appointmentTime: "", reasonForConsultation: "",
      houseNo: "", street: "", state: "", city: "", pinCode: "",
      infoAccurate: false, contactConsent: false
    }
  });

  const selectedDoctorId = watch("doctorId");
  const selectedState = watch("state");
  const selectedMode = watch("consultationMode");
  const sameAsMobile = watch("sameAsMobile");
  const contactNo = watch("contactNo");

  const locations = {
    "Delhi": ["Delhi"],
    "Uttar Pradesh": ["Noida", "Greater Noida"]
  };

  const availableCities = selectedState ? locations[selectedState] : [];
  const today = new Date().toISOString().split('T')[0];

  // Sync WhatsApp number if checkbox is checked
  useEffect(() => {
    if (sameAsMobile && contactNo) {
      setValue("whatsappNo", contactNo);
    }
  }, [sameAsMobile, contactNo, setValue]);

  // Adjust modes dynamically when the chosen expert shifts
  useEffect(() => {
    if (!selectedDoctorId) {
      setAllowedModes(["Online", "Offline"]);
      return;
    }

    const currentDoc = practitioners.find(p => p.id === Number(selectedDoctorId));
    if (!currentDoc) return;

    const typeStr = currentDoc.consultationType; // e.g., "Online" or "Offline & Online"
    
    if (typeStr.includes("Offline") && typeStr.includes("Online")) {
      setAllowedModes(["Online", "Offline"]);
      setValue("consultationMode", "Online"); // Default choice fallback
    } else if (typeStr.includes("Online")) {
      setAllowedModes(["Online"]);
      setValue("consultationMode", "Online");
    } else {
      setAllowedModes(["Offline"]);
      setValue("consultationMode", "Offline");
    }
  }, [selectedDoctorId, setValue]);

  useEffect(() => {
    if (selectedState === "Delhi") setValue("city", "Delhi");
    else if (selectedMode === "Online") {
      // For online consultations, do not clear values if state is manually chosen
    } else {
      setValue("city", "");
    }
  }, [selectedState, selectedMode, setValue]);

  // Automated Age Calculator from DOB
  const calculateAge = (dobString) => {
    if (!dobString) return null;
    const todayDate = new Date();
    const birthDate = new Date(dobString);
    let calculatedAge = todayDate.getFullYear() - birthDate.getFullYear();
    const m = todayDate.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && todayDate.getDate() < birthDate.getDate())) {
      calculatedAge--;
    }
    return calculatedAge;
  };

  const onSubmit = async (data) => {
    setIsSending(true);
    try {
      const finalDoc = practitioners.find(p => p.id === Number(data.doctorId));
      const computedAge = calculateAge(data.dob);

      const submissionPayload = {
        ...data,
        calculatedAge: computedAge,
        doctorName: finalDoc ? finalDoc.name : "Unassigned",
        specialty: finalDoc ? finalDoc.specialty : "General"
      };

      // Clean address properties contextually if Online to reduce API payload payload burden
      if (data.consultationMode === "Online") {
        delete submissionPayload.houseNo;
        delete submissionPayload.street;
        delete submissionPayload.pinCode;
      }

      console.log("Processing Appointment Request Object:", submissionPayload);
      setShowSuccessPopup(true);
    } catch (error) {
      console.error("Submission error:", error);
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
    <div className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl p-6 md:p-10 border border-slate-100">
      
      {/* Success Modal Overlay */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm px-4">
          <div className="bg-white rounded-3xl p-8 md:p-10 max-w-md w-full shadow-2xl text-center transform transition-all">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-800 mb-2">Appointment Scheduled!</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Your appointment request has been logged successfully. A healthcare coordinator will contact you to verify details.
            </p>
            <button 
              onClick={handleClosePopup}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}

      <div className="mb-10 text-center">
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Book An Expert Consultation</h1>
        <p className="text-slate-500 mt-2 text-sm">Consult top healthcare practitioners and coaches from home or in-center.</p>
      </div>

      <AboutMission100 />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 mt-8">
        
        {/* SECTION 1: Patient Information */}
        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
            <User className="w-5 h-5 text-green-600" /> 1. Patient Demographics & Profile
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">First Name *</label>
              <input {...register("firstName", { required: "First name is required" })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none border-slate-200" placeholder="First name" />
              <ErrorMsg name="firstName" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Last Name *</label>
              <input {...register("lastName", { required: "Last name is required" })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none border-slate-200" placeholder="Last name" />
              <ErrorMsg name="lastName" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-slate-700 mb-1">Email Address *</label>
              <input type="email" {...register("email", { 
                required: "Email address is required",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address format" }
              })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none border-slate-200" placeholder="example@domain.com" />
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-1"><Mail className="w-3 h-3" /> Used for appointment confirmation, prescription sharing, and link tracking.</p>
              <ErrorMsg name="email" />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Date of Birth *</label>
              <input type="date" max={today} {...register("dob", { required: "Date of birth is required" })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none cursor-pointer border-slate-200" />
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
              <label className="block text-sm font-bold text-slate-700 mb-1">Mobile Contact Number *</label>
              <input type="tel" {...register("contactNo", { required: "Valid 10-digit number required", pattern: { value: /^[0-9]{10}$/, message: "Must be a 10-digit number" } })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none border-slate-200" placeholder="Enter 10-digit mobile number" />
              <ErrorMsg name="contactNo" />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-bold text-slate-700">WhatsApp Number</label>
                <label className="flex items-center gap-1 text-xs font-semibold text-green-600 cursor-pointer select-none">
                  <input type="checkbox" {...register("sameAsMobile")} className="w-3.5 h-3.5 accent-green-600 rounded" />
                  Same as Mobile Number
                </label>
              </div>
              <input type="tel" disabled={sameAsMobile} {...register("whatsappNo", { 
                required: !sameAsMobile ? "WhatsApp number is required for consultations" : false, 
                pattern: { value: /^[0-9]{10}$/, message: "Must be a 10-digit number" } 
              })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none border-slate-200 disabled:opacity-60" placeholder="Enter WhatsApp number" />
              <ErrorMsg name="whatsappNo" />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1 flex items-center gap-1.5"><Users className="w-4 h-4 text-slate-500" /> Patient Type *</label>
              <div className="grid grid-cols-2 gap-4 h-14.5">
                {["New", "Existing"].map((type) => (
                  <label key={type} className={`flex items-center justify-center border rounded-2xl cursor-pointer font-semibold text-sm transition-all select-none ${watch("patientType") === type ? "bg-slate-900 text-white border-slate-900 shadow-sm" : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"}`}>
                    <input type="radio" value={type} {...register("patientType")} className="sr-only" />
                    {type} Patient
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1 flex items-center gap-1.5"><Languages className="w-4 h-4 text-slate-500" /> Preferred Language *</label>
              <select {...register("languagePreference", { required: "Language preference required" })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none cursor-pointer border-slate-200">
                <option value="Both">Both (Hindi & English)</option>
                <option value="Hindi">Hindi</option>
                <option value="English">English</option>
              </select>
              <ErrorMsg name="languagePreference" />
            </div>
          </div>
        </div>

        {/* SECTION 2: Practitioner Selection */}
        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
            <Sparkles className="w-5 h-5 text-green-600" /> 2. Choose Wellness Expert
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Select Practitioner *</label>
              <select {...register("doctorId", { required: "Please select an expert" })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none cursor-pointer border-slate-200">
                <option value="">-- Click to review network practitioners --</option>
                {practitioners.map(p => (
                  <option key={p.id} value={p.id}>{p.name} ({p.specialty})</option>
                ))}
              </select>
              <ErrorMsg name="doctorId" />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Consultation Mode *</label>
              <div className="flex gap-4 h-14.5">
                {allowedModes.map(mode => (
                  <label 
                    key={mode} 
                    className={`flex-1 flex items-center justify-center gap-2 border rounded-2xl cursor-pointer font-bold text-sm transition-all select-none ${
                      selectedMode === mode 
                        ? "bg-slate-900 text-white border-slate-900 shadow-sm" 
                        : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    <input 
                      type="radio" 
                      value={mode} 
                      {...register("consultationMode", { required: "Mode selection required" })} 
                      className="sr-only" 
                    />
                    {mode === "Online" ? <Video className="w-4 h-4" /> : <Building2 className="w-4 h-4" />}
                    {mode} Visit
                  </label>
                ))}
              </div>
              <ErrorMsg name="consultationMode" />
            </div>
          </div>
        </div>

        {/* SECTION 3: Scheduling */}
        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
            <Calendar className="w-5 h-5 text-green-600" /> 3. Schedule Allocation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Preferred Date *</label>
              <input type="date" min={today} {...register("appointmentDate", { required: "Date is required" })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none cursor-pointer border-slate-200" />
              <ErrorMsg name="appointmentDate" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Time Window *</label>
              <select {...register("appointmentTime", { required: "Time slot choice required" })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none cursor-pointer border-slate-200">
                <option value="">Select preferred slot</option>
                <option value="09:00 AM - 12:00 PM">Morning (09:00 AM - 12:00 PM)</option>
                <option value="12:00 PM - 03:00 PM">Midday (12:00 PM - 03:00 PM)</option>
                <option value="03:00 PM - 06:00 PM">Evening (03:00 PM - 06:00 PM)</option>
              </select>
              <ErrorMsg name="appointmentTime" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-slate-700 mb-1">Reason for Consultation *</label>
              <input type="text" {...register("reasonForConsultation", { required: "Reason for consultation is required" })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none border-slate-200" placeholder="e.g. Fever, Diabetes Follow-up, Weight Loss Consultation, Skin Problem" />
              <ErrorMsg name="reasonForConsultation" />
            </div>
          </div>
        </div>

        {/* SECTION 4: Address Block (Dynamic Layout Configuration) */}
        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
            <MapPin className="w-5 h-5 text-green-600" /> 4. Patient Location Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Contextual verification rendering layout layer */}
            {selectedMode === "Offline" && (
              <>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-1">House / Flat / Building No. *</label>
                  <input { ...register("houseNo", { required: selectedMode === "Offline" ? "House number required" : false })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none border-slate-200" placeholder="Flat, House number, Building name" />
                  <ErrorMsg name="houseNo" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-1">Street / Locality / Area *</label>
                  <input { ...register("street", { required: selectedMode === "Offline" ? "Street name is required" : false })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none border-slate-200" placeholder="Street, area, sector name" />
                  <ErrorMsg name="street" />
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">State *</label>
              <select {...register("state", { required: "State choice required" })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none border-slate-200">
                <option value="">Select State</option>
                <option value="Delhi">Delhi</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
              </select>
              <ErrorMsg name="state" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">City *</label>
              <select {...register("city", { required: "City selection required" })} disabled={selectedState === "Delhi"} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none disabled:opacity-60 border-slate-200">
                <option value="">Select City</option>
                {availableCities.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <ErrorMsg name="city" />
            </div>

            {selectedMode === "Offline" && (
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">6-Digit Pincode *</label>
                <input {...register("pinCode", { required: selectedMode === "Offline" ? "Pincode required" : false, pattern: { value: /^[0-9]{6}$/, message: "Must be a 6-digit number" } })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none border-slate-200" placeholder="e.g. 110001" />
                <ErrorMsg name="pinCode" />
              </div>
            )}
          </div>
        </div>

        {/* SECTION 5: Mandatory Legal Declarations */}
        <div className="border-t border-slate-100 pt-6 space-y-4">
          <div className="flex items-start gap-3">
            <input 
              type="checkbox" 
              id="infoAccurate" 
              {...register("infoAccurate", { required: "You must confirm that all info provided is accurate." })}
              className="mt-1 w-4 h-4 accent-green-600 rounded cursor-pointer animate-none"
            />
            <label htmlFor="infoAccurate" className="text-sm font-medium text-slate-600 cursor-pointer select-none">
              I confirm that all information provided is accurate. <span className="text-red-500">*</span>
            </label>
          </div>
          <ErrorMsg name="infoAccurate" />

          <div className="flex items-start gap-3">
            <input 
              type="checkbox" 
              id="contactConsent" 
              {...register("contactConsent", { required: "You must consent to being contacted regarding this appointment." })}
              className="mt-1 w-4 h-4 accent-green-600 rounded cursor-pointer"
            />
            <label htmlFor="contactConsent" className="text-sm font-medium text-slate-600 cursor-pointer select-none">
              I consent to being contacted regarding this consultation request. <span className="text-red-500">*</span>
            </label>
          </div>
          <ErrorMsg name="contactConsent" />
        </div>

        {/* Submit Action */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-black py-5 rounded-2xl text-xl shadow-lg transition-all transform active:scale-[0.99] disabled:bg-slate-400 disabled:cursor-not-allowed"
          >
            {isSending ? "Processing Request..." : "Confirm Consultation Booking"}
          </button>
        </div>

      </form>
    </div>
  );
}

// Master wrapper with Suspense handling to catch URL queries on client execution safely
export default function AppointmentFormPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center py-16 px-4">
      <Suspense fallback={
        <div className="text-center py-12 text-slate-500 font-bold">
          Loading layout configurations...
        </div>
      }>
        <AppointmentFormContent />
      </Suspense>
    </main>
  );
}