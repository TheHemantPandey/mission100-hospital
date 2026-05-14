"use client";

import { useState } from "react";
import {
  Stethoscope,
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  CalendarDays,
  FileText,
  Upload,
  Building2,
  Send,
  BadgeCheck,
} from "lucide-react";

export default function MedicalJoinPage() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    dob: "",
    city: "",
    qualification: "",
    experience: "",
    registrationId: "",
    specialization: "",
    consultationMode: "",
    hospital: "",
    about: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "fullName":
        if (value.trim().length < 3) {
          error = "Name must be at least 3 characters";
        }
        break;

      case "mobile":
        if (!/^[6-9]\d{9}$/.test(value)) {
          error = "Enter valid 10 digit mobile number";
        }
        break;

      case "email":
        if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
        ) {
          error = "Enter valid email address";
        }
        break;

      case "dob":
        const dobDate = new Date(value);
        const today = new Date();

        let age = today.getFullYear() - dobDate.getFullYear();

        const monthDiff =
          today.getMonth() - dobDate.getMonth();

        if (
          monthDiff < 0 ||
          (monthDiff === 0 &&
            today.getDate() < dobDate.getDate())
        ) {
          age--;
        }

        if (age < 18) {
          error = "Minimum age should be 18 years";
        }

        break;

      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    return error === "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let valid = true;

    Object.keys(formData).forEach((key) => {
      const isValid = validateField(key, formData[key]);

      if (!isValid) valid = false;
    });

    if (!valid) {
  const firstError = Object.values(errors).find(
    (error) => error
  );

  alert(firstError || "Please fix errors before submitting");

  return;
}

    setLoading(true);

    try {
      const form = new FormData();

      // TEXT DATA
      Object.keys(formData).forEach((key) => {
        form.append(key, formData[key]);
      });

      // PROFILE PHOTO
      if (e.target.photo.files[0]) {
        const photo = e.target.photo.files[0];

        if (photo.size > 5 * 1024 * 1024) {
          alert("Profile photo must be under 5MB");
          setLoading(false);
          return;
        }

        form.append("photo", photo);
      }

      // RESUME
      if (e.target.resume.files[0]) {
        const resume = e.target.resume.files[0];

        if (resume.size > 10 * 1024 * 1024) {
          alert("Resume must be under 10MB");
          setLoading(false);
          return;
        }

        form.append("resume", resume);
      }

      // EXTRA DOCUMENTS
      const documents = e.target.documents.files;

      if (documents.length > 10) {
        alert("Maximum 10 documents allowed");
        setLoading(false);
        return;
      }

      for (let i = 0; i < documents.length; i++) {
        const file = documents[i];

        if (file.size > 10 * 1024 * 1024) {
          alert(`${file.name} exceeds 10MB limit`);
          setLoading(false);
          return;
        }

        form.append("documents", file);
      }

      const response = await fetch("/api/join-medical", {
        method: "POST",
        body: form,
      });

      const data = await response.json();

      if (data.success) {
        alert("Application submitted successfully!");

        e.target.reset();

        setFormData({
          fullName: "",
          email: "",
          mobile: "",
          dob: "",
          city: "",
          qualification: "",
          experience: "",
          registrationId: "",
          specialization: "",
          consultationMode: "",
          hospital: "",
          about: "",
        });

      } else {
        alert(data.message || "Something went wrong");
      }

    } catch (error) {
      console.log(error);
      alert("Error submitting form");
    }

    setLoading(false);
  };

  const inputClass =
    "w-full rounded-2xl border bg-white px-4 py-4 outline-none transition-all duration-300 focus:ring-2 focus:ring-green-500";

  const errorInputClass =
    "border-red-400 focus:ring-red-400";

  return (
    <div className="min-h-screen bg-linear-to-b from-white via-cyan-50 to-green-50 py-10 sm:py-14 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        <div className="rounded-[30px] sm:rounded-[40px] overflow-hidden shadow-2xl border border-white/50 bg-white">

          {/* HEADER */}
          <div className="bg-linear-to-r from-green-500 via-emerald-500 to-cyan-500 p-6 sm:p-10 md:p-14 text-white relative overflow-hidden">

            <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">

              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-5 shadow-lg">
                <Stethoscope className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Join as Medical Expert
              </h1>

              <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90 max-w-3xl leading-relaxed">
                Become a verified healthcare professional on Mission100
                and help people improve their health and lifestyle.
              </p>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="p-4 sm:p-6 md:p-10 lg:p-12 space-y-8"
          >

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">

              {/* FULL NAME */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Full Name
                </label>

                <div className="relative mt-2">
                  <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Dr. John Doe"
                    className={`${inputClass} pl-12 ${
                      errors.fullName ? errorInputClass : "border-gray-200"
                    }`}
                  />
                </div>

                {errors.fullName && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Email Address
                </label>

                <div className="relative mt-2">
                  <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="doctor@example.com"
                    className={`${inputClass} pl-12 ${
                      errors.email ? errorInputClass : "border-gray-200"
                    }`}
                  />
                </div>

                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* MOBILE */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Mobile Number
                </label>

                <div className="relative mt-2">
                  <Phone className="absolute left-4 top-4 w-5 h-5 text-gray-400" />

                  <div className="flex">
                    <div className="px-4 rounded-l-2xl border border-r-0 border-gray-200 bg-gray-100 flex items-center text-gray-600 font-medium">
                      +91
                    </div>

                    <input
                      type="text"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      maxLength={10}
                      placeholder="9876543210"
                      className={`w-full rounded-r-2xl border px-4 py-4 outline-none ${
                        errors.mobile
                          ? errorInputClass
                          : "border-gray-200"
                      }`}
                    />
                  </div>
                </div>

                {errors.mobile && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.mobile}
                  </p>
                )}
              </div>

              {/* DOB */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Date of Birth
                </label>

                <div className="relative mt-2">
                  <CalendarDays className="absolute left-4 top-4 w-5 h-5 text-gray-400" />

                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                    className={`${inputClass} pl-12 ${
                      errors.dob ? errorInputClass : "border-gray-200"
                    }`}
                  />
                </div>

                {errors.dob && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.dob}
                  </p>
                )}
              </div>

              {/* CITY */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  City
                </label>

                <div className="relative mt-2">
                  <MapPin className="absolute left-4 top-4 w-5 h-5 text-gray-400" />

                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="Delhi"
                    className={`${inputClass} pl-12 border-gray-200`}
                  />
                </div>
              </div>

              {/* QUALIFICATION */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Qualification
                </label>

                <div className="relative mt-2">
                  <GraduationCap className="absolute left-4 top-4 w-5 h-5 text-gray-400" />

                  <input
                    type="text"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    required
                    placeholder="MBBS, MD"
                    className={`${inputClass} pl-12 border-gray-200`}
                  />
                </div>
              </div>

              {/* EXPERIENCE */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Experience
                </label>

                <div className="relative mt-2">
                  <Briefcase className="absolute left-4 top-4 w-5 h-5 text-gray-400" />

                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    placeholder="5+ Years"
                    className={`${inputClass} pl-12 border-gray-200`}
                  />
                </div>
              </div>

              {/* REGISTRATION ID */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Medical Registration ID
                </label>

                <div className="relative mt-2">
                  <BadgeCheck className="absolute left-4 top-4 w-5 h-5 text-gray-400" />

                  <input
                    type="text"
                    name="registrationId"
                    value={formData.registrationId}
                    onChange={handleChange}
                    required
                    placeholder="Registration ID"
                    className={`${inputClass} pl-12 border-gray-200`}
                  />
                </div>
              </div>

              {/* SPECIALIZATION */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Specialization
                </label>

                <select
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  required
                  className={`${inputClass} border-gray-200 mt-2`}
                >
                  <option value="">Select Specialization</option>
                  <option>General Physician</option>
                  <option>Cardiologist</option>
                  <option>Dermatologist</option>
                  <option>Orthopedic</option>
                  <option>Pediatrician</option>
                  <option>Gynecologist</option>
                  <option>Dentist</option>
                  <option>Neurologist</option>
                  <option>Physiotherapist</option>
                  <option>Ayurveda Doctor</option>
                </select>
              </div>

              {/* CONSULTATION */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Consultation Mode
                </label>

                <select
                  name="consultationMode"
                  value={formData.consultationMode}
                  onChange={handleChange}
                  required
                  className={`${inputClass} border-gray-200 mt-2`}
                >
                  <option value="">Select Mode</option>
                  <option>Online</option>
                  <option>Offline</option>
                  <option>Both</option>
                </select>
              </div>

              {/* HOSPITAL */}
              <div className="md:col-span-2">
                <label className="text-sm font-semibold text-gray-700">
                  Hospital / Clinic Name
                </label>

                <div className="relative mt-2">
                  <Building2 className="absolute left-4 top-4 w-5 h-5 text-gray-400" />

                  <input
                    type="text"
                    name="hospital"
                    value={formData.hospital}
                    onChange={handleChange}
                    required
                    placeholder="ABC Hospital"
                    className={`${inputClass} pl-12 border-gray-200`}
                  />
                </div>
              </div>

            </div>

            {/* ABOUT */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                About Yourself
              </label>

              <textarea
                name="about"
                value={formData.about}
                onChange={handleChange}
                rows="5"
                required
                placeholder="Tell us about yourself..."
                className={`${inputClass} border-gray-200 mt-2`}
              ></textarea>
            </div>

            {/* FILE UPLOADS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* PHOTO */}
              <div className="rounded-3xl border-2 border-dashed border-cyan-200 bg-cyan-50 p-6">
                <div className="flex items-center gap-3">
                  <Upload className="w-6 h-6 text-cyan-600" />

                  <h3 className="font-semibold text-gray-900">
                    Upload Profile Photo
                  </h3>
                </div>

                <p className="mt-2 text-sm text-gray-500">
                  JPG, PNG • Max 5MB
                </p>

                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  className="mt-5 block w-full rounded-xl border border-gray-200 bg-white p-3 text-sm"
                />
              </div>

              {/* RESUME */}
              <div className="rounded-3xl border-2 border-dashed border-green-200 bg-green-50 p-6">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-green-600" />

                  <h3 className="font-semibold text-gray-900">
                    Upload Resume / CV
                  </h3>
                </div>

                <p className="mt-2 text-sm text-gray-500">
                  PDF, DOC, DOCX • Max 10MB
                </p>

                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  className="mt-5 block w-full rounded-xl border border-gray-200 bg-white p-3 text-sm"
                />
              </div>

            </div>

            {/* EXTRA DOCUMENTS */}
            <div className="rounded-3xl border-2 border-dashed border-gray-200 bg-gray-50 p-6 sm:p-8">

              <div className="flex items-center gap-3">
                <Upload className="w-6 h-6 text-gray-700" />

                <h3 className="text-lg font-semibold text-gray-900">
                  Additional Certifications / Documents
                </h3>
              </div>

              <p className="mt-2 text-sm text-gray-500">
                Optional • Upload certificates, awards, licenses or
                other supporting documents.
              </p>

              <p className="mt-1 text-xs text-gray-400">
                Max 10 files • 10MB each
              </p>

              <input
                type="file"
                name="documents"
                multiple
                accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                className="mt-5 block w-full rounded-xl border border-gray-200 bg-white p-4 text-sm"
              />
            </div>

            <button
  type="submit"
  disabled={loading}
  className={`w-full rounded-2xl py-4 sm:py-5 text-white font-semibold text-base sm:text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-3 ${
    loading
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-linear-to-r from-green-500 to-cyan-500 hover:shadow-2xl"
  }`}
>
  {loading ? (
    <>
      {/* SPINNER */}
      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>

      Uploading Documents & Submitting...
    </>
  ) : (
    <>
      Submit Application

      <Send className="w-5 h-5" />
    </>
  )}
</button>
{loading && (
  <div className="text-center text-sm text-gray-500 mt-4">
    Please wait while we upload your files securely...
  </div>
)}

          </form>
        </div>
      </div>
    </div>
  );
}