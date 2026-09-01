"use client";

import React, { useState } from "react";
import { event } from "@/app/lib/gtag";
import {
  Building2,
  Phone,
  Mail,
  User,
  Landmark,
  ImageIcon,
  BadgeIndianRupee,
  CheckCircle,
  ShieldCheck,
  Sparkles,
  Plus,
  X,
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

export default function TakeFranchisePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    state: "",
    city: "",
    pincode: "",
    address: "",
    aadhar: "",
    pan: "",
    occupation: "",
    landSize: "",
    ownershipType: "",
    businessExperience: "",
    message: "",
  });

  // Track each entry as an object with a fallback unique ID
  const [propertyImages, setPropertyImages] = useState([
    { id: "initial-1", file: null },
  ]);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "fullName":
        if (!/^[A-Za-z\s]{3,}$/.test(value)) {
          error = "Name should contain at least 3 characters";
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

      case "aadhar":
        if (!/^\d{12}$/.test(value)) {
          error = "Aadhar number must be 12 digits";
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
          error = "Address should be minimum 10 characters";
        }
        break;

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

    const error = validateField(name, value);

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleImageChange = (id, file) => {
    setPropertyImages((prev) =>
      prev.map((img) => {
        if (img && img.id === id) {
          return { ...img, file };
        }
        return img;
      })
    );

    setErrors((prev) => ({
      ...prev,
      propertyImages: "",
    }));
  };

  const addMoreImageField = () => {
    if (propertyImages.length < 4) {
      setPropertyImages([
        ...propertyImages,
        { id: `img-${Date.now()}-${Math.random()}`, file: null },
      ]);
    }
  };

  const removeImageField = (id) => {
    if (propertyImages.length <= 1) {
      setPropertyImages([{ id: "initial-1", file: null }]);
    } else {
      setPropertyImages((prev) => prev.filter((img) => img && img.id !== id));
    }
  };

  const validateForm = () => {
    let newErrors = {};

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);

      if (error) {
        newErrors[key] = error;
      }
    });

    if (!formData.state) {
      newErrors.state = "Please select state";
    }

    if (!formData.landSize) {
      newErrors.landSize = "Please enter land/shop size";
    }

    const validImages = propertyImages.filter((img) => img && img.file);

    if (validImages.length === 0) {
      newErrors.propertyImages = "Please upload at least one property image";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const submitData = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        submitData.append(key, value);
      });

      propertyImages.forEach((image) => {
        if (image && image.file) {
          submitData.append("propertyImages", image.file);
        }
      });

      const res = await fetch("/api/take-franchise", {
        method: "POST",
        body: submitData,
      });

      if (res.ok) {
        event("partner_enquiry_submit", {
          partner_type: "franchise",
          state: formData.state,
          city: formData.city,
        });

        alert("Franchise application submitted successfully!");

        setFormData({
          fullName: "",
          phone: "",
          email: "",
          state: "",
          city: "",
          pincode: "",
          address: "",
          aadhar: "",
          pan: "",
          occupation: "",
          landSize: "",
          ownershipType: "",
          businessExperience: "",
          message: "",
        });

        setPropertyImages([{ id: "initial-1", file: null }]);

        setErrors({});
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      alert("Submission failed");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-emerald-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* HERO */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-cyan-100 border border-emerald-200 text-emerald-700 px-6 py-2 rounded-full text-sm font-bold shadow-sm mb-6">
            <Sparkles size={16} />
            Mission100 Healthcare Franchise Program
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-cyan-500 bg-clip-text text-transparent">
              Take Our Franchise
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-slate-600 text-lg md:text-xl leading-relaxed">
            Join Mission100 and start your healthcare & wellness franchise with
            complete business support, branding assistance, and growth
            opportunities across India.
          </p>
        </div>

        {/* MAIN BOX */}
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-100">
          <div className="grid lg:grid-cols-5">
            {/* LEFT SIDE */}
            <div className="lg:col-span-2 bg-gradient-to-br from-emerald-600 via-green-600 to-cyan-600 text-white p-10 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-8">
                  <ShieldCheck size={40} />
                </div>

                <h2 className="text-4xl font-black leading-tight mb-6">
                  Start Your
                  <br />
                  Mission100 Franchise
                </h2>

                <p className="text-emerald-50 leading-relaxed mb-10 text-lg">
                  Become a part of India's next-generation healthcare and
                  wellness ecosystem.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                      <Building2 size={24} />
                    </div>

                    <div>
                      <h4 className="font-bold text-lg mb-1">
                        Complete Setup Support
                      </h4>

                      <p className="text-emerald-100 text-sm">
                        Business setup, branding, operations and marketing
                        assistance.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                      <Landmark size={24} />
                    </div>

                    <div>
                      <h4 className="font-bold text-lg mb-1">
                        Trusted Healthcare Brand
                      </h4>

                      <p className="text-emerald-100 text-sm">
                        Build your business with a modern preventive healthcare
                        model.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                      <BadgeIndianRupee size={24} />
                    </div>

                    <div>
                      <h4 className="font-bold text-lg mb-1">
                        High Growth Opportunity
                      </h4>

                      <p className="text-emerald-100 text-sm">
                        Be part of India's rapidly growing wellness and
                        healthcare industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM SIDE */}
            <div className="lg:col-span-3 p-8 md:p-12">
              <div className="mb-10">
                <h3 className="text-3xl font-black text-slate-900 mb-3">
                  Franchise Application Form
                </h3>

                <p className="text-slate-500">
                  Fill all required details carefully.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* NAME */}
                <div>
                  <label className="font-bold text-slate-700 mb-2 block">
                    Full Name *
                  </label>

                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-4 top-4 text-slate-400"
                    />

                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 outline-none focus:border-emerald-500"
                    />
                  </div>

                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* MOBILE */}
                <div>
                  <label className="font-bold text-slate-700 mb-2 block">
                    Mobile Number *
                  </label>

                  <div className="relative">
                    <Phone
                      size={18}
                      className="absolute left-4 top-4 text-slate-400"
                    />

                    <input
                      type="tel"
                      name="phone"
                      maxLength={10}
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter mobile number"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 outline-none focus:border-emerald-500"
                    />
                  </div>

                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
                  )}
                </div>

                {/* EMAIL */}
                <div>
                  <label className="font-bold text-slate-700 mb-2 block">
                    Email Address *
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-4 text-slate-400"
                    />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 outline-none focus:border-emerald-500"
                    />
                  </div>

                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                  )}
                </div>

                {/* STATE */}
                <div>
                  <label className="font-bold text-slate-700 mb-2 block">
                    State *
                  </label>

                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-2xl border border-slate-200 outline-none focus:border-emerald-500"
                  >
                    <option value="">Select State</option>

                    {indianStates.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>

                  {errors.state && (
                    <p className="text-red-500 text-sm mt-2">{errors.state}</p>
                  )}
                </div>

                {/* CITY */}
                <div>
                  <label className="font-bold text-slate-700 mb-2 block">
                    City *
                  </label>

                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter city"
                    className="w-full px-4 py-4 rounded-2xl border border-slate-200 outline-none focus:border-emerald-500"
                  />

                  {errors.city && (
                    <p className="text-red-500 text-sm mt-2">{errors.city}</p>
                  )}
                </div>

                {/* PINCODE */}
                <div>
                  <label className="font-bold text-slate-700 mb-2 block">
                    Pincode *
                  </label>

                  <input
                    type="text"
                    maxLength={6}
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="Enter pincode"
                    className="w-full px-4 py-4 rounded-2xl border border-slate-200 outline-none focus:border-emerald-500"
                  />

                  {errors.pincode && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.pincode}
                    </p>
                  )}
                </div>

                {/* LAND SIZE */}
                <div>
                  <label className="font-bold text-slate-700 mb-2 block">
                    Land / Shop Size *
                  </label>

                  <input
                    type="text"
                    name="landSize"
                    value={formData.landSize}
                    onChange={handleChange}
                    placeholder="Example: 1200 sq ft"
                    className="w-full px-4 py-4 rounded-2xl border border-slate-200 outline-none focus:border-emerald-500"
                  />

                  {errors.landSize && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.landSize}
                    </p>
                  )}
                </div>

                {/* AADHAR */}
                <div>
                  <label className="font-bold text-slate-700 mb-2 block">
                    Aadhar Number *
                  </label>

                  <input
                    type="text"
                    maxLength={12}
                    name="aadhar"
                    value={formData.aadhar}
                    onChange={handleChange}
                    placeholder="12 digit Aadhar number"
                    className="w-full px-4 py-4 rounded-2xl border border-slate-200 outline-none focus:border-emerald-500"
                  />

                  {errors.aadhar && (
                    <p className="text-red-500 text-sm mt-2">{errors.aadhar}</p>
                  )}
                </div>

                {/* PAN */}
                <div>
                  <label className="font-bold text-slate-700 mb-2 block">
                    PAN Number *
                  </label>

                  <input
                    type="text"
                    maxLength={10}
                    name="pan"
                    value={formData.pan}
                    onChange={handleChange}
                    placeholder="ABCDE1234F"
                    className="w-full uppercase px-4 py-4 rounded-2xl border border-slate-200 outline-none focus:border-emerald-500"
                  />

                  {errors.pan && (
                    <p className="text-red-500 text-sm mt-2">{errors.pan}</p>
                  )}
                </div>

                {/* OWNERSHIP */}
                <div>
                  <label className="font-bold text-slate-700 mb-2 block">
                    Property Ownership
                  </label>

                  <select
                    name="ownershipType"
                    value={formData.ownershipType}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-2xl border border-slate-200 outline-none focus:border-emerald-500"
                  >
                    <option value="">Select Ownership Type</option>
                    <option value="Owned">Owned</option>
                    <option value="Rented">Rented</option>
                    <option value="Lease">Lease</option>
                  </select>
                </div>

                {/* OCCUPATION */}
                <div>
                  <label className="font-bold text-slate-700 mb-2 block">
                    Current Occupation
                  </label>

                  <input
                    type="text"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    placeholder="Businessman / Entrepreneur"
                    className="w-full px-4 py-4 rounded-2xl border border-slate-200 outline-none focus:border-emerald-500"
                  />
                </div>

                {/* EXPERIENCE */}
                <div className="md:col-span-2">
                  <label className="font-bold text-slate-700 mb-2 block">
                    Business Experience
                  </label>

                  <textarea
                    rows={4}
                    name="businessExperience"
                    value={formData.businessExperience}
                    onChange={handleChange}
                    placeholder="Tell us about your business experience"
                    className="w-full px-4 py-4 rounded-2xl border border-slate-200 outline-none focus:border-emerald-500 resize-none"
                  />
                </div>

                {/* ADDRESS */}
                <div className="md:col-span-2">
                  <label className="font-bold text-slate-700 mb-2 block">
                    Complete Address *
                  </label>

                  <textarea
                    rows={4}
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter complete address"
                    className="w-full px-4 py-4 rounded-2xl border border-slate-200 outline-none focus:border-emerald-500 resize-none"
                  />

                  {errors.address && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.address}
                    </p>
                  )}
                </div>

                {/* MULTIPLE IMAGES - ERROR REMOVED & SAFEGUARDED */}
                <div className="md:col-span-2">
                  <label className="font-bold text-slate-700 mb-2 block">
                    Shop / Property Images *
                  </label>

                  <div className="space-y-5">
                    {propertyImages &&
                      propertyImages.map((imageObj, index) => {
                        // Fallback safeguarding to prevent null references entirely
                        if (!imageObj) return null;
                        
                        return (
                          <div
                            key={imageObj.id || `fallback-${index}`}
                            className="relative overflow-hidden rounded-[30px] border-2 border-dashed border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 p-6 transition-all duration-300 hover:border-emerald-400 hover:shadow-xl"
                          >
                            {/* REMOVE BUTTON */}
                            {propertyImages.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeImageField(imageObj.id)}
                                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-red-100 hover:bg-red-500 text-red-500 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md"
                              >
                                <X size={16} />
                              </button>
                            )}

                            <div className="flex flex-col md:flex-row items-center gap-6">
                              {/* ICON */}
                              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-200 shrink-0">
                                <ImageIcon size={48} className="text-white" />
                              </div>

                              {/* CONTENT */}
                              <div className="flex-1 w-full">
                                <h4 className="text-xl font-bold text-slate-800 mb-2">
                                  Property Photo {index + 1}
                                </h4>

                                <p className="text-slate-500 text-sm mb-4 leading-relaxed">
                                  Upload clear photos of your shop, clinic, office,
                                  land or property location.
                                </p>

                                {/* FILE INPUT */}
                                <label className="flex items-center justify-center gap-3 cursor-pointer bg-white border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50 rounded-2xl px-5 py-4 transition-all duration-300 font-bold text-slate-700">
                                  <ImageIcon
                                    size={18}
                                    className="text-emerald-500"
                                  />

                                  <span>
                                    {imageObj.file ? "Change Photo" : "Choose Photo"}
                                  </span>

                                  <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) =>
                                      handleImageChange(imageObj.id, e.target.files[0])
                                    }
                                    className="hidden"
                                  />
                                </label>

                                {/* FILE NAME */}
                                <div className="mt-4">
                                  {imageObj.file ? (
                                    <div className="flex items-center gap-3 bg-emerald-100 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-2xl">
                                      <CheckCircle size={18} className="shrink-0" />

                                      <p className="text-sm font-semibold break-all">
                                        {imageObj.file.name}
                                      </p>
                                    </div>
                                  ) : (
                                    <div className="bg-slate-100 text-slate-500 px-4 py-3 rounded-2xl text-sm">
                                      No image selected yet
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                    {/* ADD MORE BUTTON */}
                    {propertyImages.length < 4 && (
                      <button
                        type="button"
                        onClick={addMoreImageField}
                        className="w-full group rounded-[26px] border-2 border-dashed border-cyan-300 bg-gradient-to-r from-cyan-50 to-emerald-50 py-5 px-6 hover:border-cyan-500 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-center justify-center gap-3 text-cyan-700 font-black text-lg">
                          <div className="w-10 h-10 rounded-full bg-cyan-100 group-hover:bg-cyan-500 group-hover:text-white flex items-center justify-center transition-all duration-300">
                            <Plus size={20} />
                          </div>
                          Add More Property Photos
                        </div>

                        <p className="text-sm text-slate-500 mt-2">
                          Upload up to 4 high-quality property images
                        </p>
                      </button>
                    )}

                    {/* INFO */}
                    <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-4">
                      <p className="text-sm text-cyan-700 leading-relaxed">
                        Upload clear exterior or interior photos of your
                        property/shop for faster franchise verification.
                      </p>
                    </div>

                    {/* ERROR */}
                    {errors.propertyImages && (
                      <p className="text-red-500 text-sm font-medium">
                        {errors.propertyImages}
                      </p>
                    )}
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="md:col-span-2">
                  <label className="font-bold text-slate-700 mb-2 block">
                    Additional Message
                  </label>

                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Anything else you want to share?"
                    className="w-full px-4 py-4 rounded-2xl border border-slate-200 outline-none focus:border-emerald-500 resize-none"
                  />
                </div>

                {/* BUTTON */}
                <div className="md:col-span-2 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-emerald-600 to-cyan-500 hover:from-emerald-700 hover:to-cyan-600 text-white font-black py-5 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-emerald-200 text-lg"
                  >
                    {loading
                      ? "Submitting Application..."
                      : "Submit Franchise Application"}
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