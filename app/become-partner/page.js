"use client";

import React, { useState } from "react";
import {
  Building2,
  Phone,
  Mail,
  User,
  Landmark,
  BadgeIndianRupee,
  ShieldCheck,
  Sparkles,
  CreditCard,
  Fingerprint,
} from "lucide-react";

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
];

export default function BecomePartnerPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    aadhaar: "",
    pan: "",
    state: "",
    city: "",
    pincode: "",
    address: "",
    organizationName: "",
    designation: "",
    specialization: "",
    experience: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "fullName":
        if (!/^[A-Za-z\s]{3,}$/.test(value)) {
          error = "Name must be at least 3 characters";
        }
        break;

      case "phone":
        if (!/^[6-9]\d{9}$/.test(value)) {
          error = "Enter valid 10 digit mobile number";
        }
        break;

      case "email":
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          error = "Enter valid email address";
        }
        break;

      case "aadhaar":
        if (!/^\d{12}$/.test(value)) {
          error = "Aadhaar must be a 12-digit number";
        }
        break;

      case "pincode":
        if (!/^\d{6}$/.test(value)) {
          error = "Pincode must be 6 digits";
        }
        break;

      case "city":
        if (value.length < 2) {
          error = "Enter valid city";
        }
        break;

      case "address":
        if (value.length < 10) {
          error = "Address must be at least 10 characters";
        }
        break;

      // 'pan' field intentionally omitted from validation to remain unrestricted
      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const validateForm = () => {
    let newErrors = {};

    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    if (!formData.state) newErrors.state = "Select state";
    if (!formData.address) newErrors.address = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/become-partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Partner application submitted successfully!");

        setFormData({
          fullName: "",
          phone: "",
          email: "",
          aadhaar: "",
          pan: "",
          state: "",
          city: "",
          pincode: "",
          address: "",
          organizationName: "",
          designation: "",
          specialization: "",
          experience: "",
          message: "",
        });

        setErrors({});
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      alert("Submission failed");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-emerald-50 py-12 md:py-16 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-cyan-100 border border-emerald-200 text-emerald-700 px-6 py-2 rounded-full text-sm font-bold shadow-sm mb-6">
            <Sparkles size={16} />
            Mission100 Partner Program
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6">
            <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-cyan-500 bg-clip-text text-transparent">
              Become a Partner
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed">
            Join Mission100 Healthcare Network as a clinical, wellness, or
            medical partner and collaborate in preventive healthcare
            innovation.
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="bg-white rounded-[32px] md:rounded-[40px] shadow-2xl border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">

            {/* LEFT PANEL */}
            <div className="lg:col-span-2 bg-gradient-to-br from-emerald-600 via-green-600 to-cyan-600 text-white p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-3xl flex items-center justify-center mb-8 backdrop-blur-sm shadow-inner">
                  <ShieldCheck size={36} className="md:hidden" />
                  <ShieldCheck size={40} className="hidden md:block" />
                </div>

                <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                  Join Healthcare Network
                </h2>

                <p className="text-emerald-50 mb-10 text-sm sm:text-base leading-relaxed opacity-95">
                  Collaborate with Mission100 in preventive healthcare,
                  diagnostics, and wellness systems.
                </p>

                <div className="space-y-6 md:space-y-8">
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 shrink-0 p-2 bg-white/10 rounded-xl"><Building2 size={20} /></div>
                    <div>
                      <h4 className="font-bold text-lg">Clinical Collaboration</h4>
                      <p className="text-sm text-emerald-100 mt-0.5">
                        Work with advanced healthcare systems.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="mt-1 shrink-0 p-2 bg-white/10 rounded-xl"><Landmark size={20} /></div>
                    <div>
                      <h4 className="font-bold text-lg">Medical Ecosystem</h4>
                      <p className="text-sm text-emerald-100 mt-0.5">
                        Join preventive health infrastructure.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="mt-1 shrink-0 p-2 bg-white/10 rounded-xl"><BadgeIndianRupee size={20} /></div>
                    <div>
                      <h4 className="font-bold text-lg">Growth Opportunity</h4>
                      <p className="text-sm text-emerald-100 mt-0.5">
                        Expand your healthcare reach nationwide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="lg:col-span-3 p-6 sm:p-10 md:p-12">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
                Partner Application Form
              </h3>

              <p className="text-slate-500 mb-8 text-sm sm:text-base">
                Fill your professional details to join our network.
              </p>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <Input label="Full Name *" name="fullName" value={formData.fullName} onChange={handleChange} error={errors.fullName} icon={<User size={18} />} placeholder="Enter your full name" />

                <Input label="Mobile Number *" name="phone" value={formData.phone} onChange={handleChange} error={errors.phone} icon={<Phone size={18} />} placeholder="10-digit mobile number" maxLength={10} />

                <Input label="Email Address *" name="email" value={formData.email} onChange={handleChange} error={errors.email} icon={<Mail size={18} />} placeholder="name@example.com" />

                <Input label="Aadhaar Number *" name="aadhaar" value={formData.aadhaar} onChange={handleChange} error={errors.aadhaar} icon={<Fingerprint size={18} />} placeholder="12-digit Aadhaar number" maxLength={12} />

                <Input label="PAN Card Number" name="pan" value={formData.pan} onChange={handleChange} error={errors.pan} icon={<CreditCard size={18} />} placeholder="Enter PAN number" />

                <Select label="State *" name="state" value={formData.state} onChange={handleChange} options={indianStates} error={errors.state} />

                <Input label="City *" name="city" value={formData.city} onChange={handleChange} error={errors.city} placeholder="Enter your city" />

                <Input label="Pincode *" name="pincode" value={formData.pincode} onChange={handleChange} error={errors.pincode} placeholder="6-digit pincode" maxLength={6} />

                <Input label="Organization / Clinic Name" name="organizationName" value={formData.organizationName} onChange={handleChange} placeholder="Hospital or Company identity" />

                <Input label="Designation" name="designation" value={formData.designation} onChange={handleChange} placeholder="e.g. Director, MD, Consultant" />

                <div className="md:col-span-2">
                  <Input label="Specialization" name="specialization" value={formData.specialization} onChange={handleChange} placeholder="e.g. Cardiology, Wellness, Diagnostics" />
                </div>

                <div className="md:col-span-2">
                  <label className="font-bold text-sm text-slate-700 block mb-2">Professional Experience</label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="Briefly describe your medical/professional background..."
                    className="w-full p-4 border border-slate-200 outline-none focus:border-emerald-500 rounded-2xl transition-all resize-none text-slate-800"
                    rows={4}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="font-bold text-sm text-slate-700 block mb-2">Full Address *</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter full dynamic workplace/clinic location details..."
                    className="w-full p-4 border border-slate-200 outline-none focus:border-emerald-500 rounded-2xl transition-all resize-none text-slate-800"
                    rows={3}
                  />
                  {errors.address && <p className="text-red-500 text-xs mt-1 font-medium">{errors.address}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="font-bold text-sm text-slate-700 block mb-2">Why do you want to join?</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your goals or additional queries with our healthcare network team..."
                    className="w-full p-4 border border-slate-200 outline-none focus:border-emerald-500 rounded-2xl transition-all resize-none text-slate-800"
                    rows={3}
                  />
                </div>

                <div className="md:col-span-2 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-emerald-600 to-cyan-500 hover:from-emerald-700 hover:to-cyan-600 text-white py-4 sm:py-5 rounded-2xl font-black text-lg shadow-xl shadow-emerald-100 transition-all active:scale-[0.99] disabled:opacity-50"
                  >
                    {loading ? "Submitting Application..." : "Become a Partner"}
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* INPUT COMPONENT */
function Input({ label, name, value, onChange, error, icon, placeholder, maxLength }) {
  return (
    <div className="w-full">
      <label className="font-bold text-sm text-slate-700 block mb-2">{label}</label>
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors duration-200">
            {icon}
          </div>
        )}
        <input
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
          className={`w-full py-3.5 pr-4 rounded-2xl border outline-none text-slate-800 transition-all duration-200 ${
            icon ? "pl-11" : "pl-4"
          } ${
            error 
              ? "border-red-400 focus:border-red-500 bg-red-50/10" 
              : "border-slate-200 focus:border-emerald-500 focus:shadow-sm"
          }`}
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1 font-medium">{error}</p>}
    </div>
  );
}

/* SELECT COMPONENT */
function Select({ label, name, value, onChange, options, error }) {
  return (
    <div className="w-full">
      <label className="font-bold text-sm text-slate-700 block mb-2">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full p-3.5 border rounded-2xl outline-none bg-white text-slate-800 transition-all duration-200 appearance-none cursor-pointer ${
          error 
            ? "border-red-400 focus:border-red-500 bg-red-50/10" 
            : "border-slate-200 focus:border-emerald-500 focus:shadow-sm"
        }`}
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' h='24' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 16px center",
          backgroundSize: "16px",
          paddingRight: "40px"
        }}
      >
        <option value="">Select State</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-xs mt-1 font-medium">{error}</p>}
    </div>
  );
}