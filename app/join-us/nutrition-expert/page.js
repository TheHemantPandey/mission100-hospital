"use client";

import { useState } from "react";

import {
  Apple,
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
  HeartHandshake,
  ShieldCheck,
  CheckCircle2,
  Salad,
  Award,
  Activity,
  ClipboardList,
} from "lucide-react";

export default function NutritionExpertJoinPage() {
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    dob: "",
    state: "",
    city: "",
    qualification: "",
    experience: "",
    specialization: "",
    otherSpecialization: "",
    consultationMode: "",
    currentOrganization: "",
    certificationId: "",
    instagram: "",
    youtube: "",
    clientsHandled: "",
    dietType: "",
    languages: "",
    consultationFees: "",
    whyJoin: "",
    about: "",
  });

  const [additionalDocuments, setAdditionalDocuments] = useState([
    {
      name: "",
      file: null,
    },
    
  ]);

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "fullName":
        if (value.trim().length < 3) {
          error = "Please enter valid full name";
        }
        break;

      case "email":
        if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
        ) {
          error = "Please enter valid email";
        }
        break;

      case "mobile":
        if (!/^[6-9]\d{9}$/.test(value)) {
          error = "Enter valid 10 digit mobile number";
        }
        break;

      case "dob":
        if (!value) {
          error = "Please select date of birth";
        } else {
          const dobDate = new Date(value);

          const today = new Date();

          let age =
            today.getFullYear() -
            dobDate.getFullYear();

          const monthDiff =
            today.getMonth() - dobDate.getMonth();

          if (
            monthDiff < 0 ||
            (monthDiff === 0 &&
              today.getDate() <
                dobDate.getDate())
          ) {
            age--;
          }

          if (age < 18) {
            error =
              "Minimum age should be 18 years";
          }
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

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    validateField(name, value);
  };

  const addMoreDocument = () => {
    if (additionalDocuments.length >= 5)
      return;

    setAdditionalDocuments([
      ...additionalDocuments,
      {
        name: "",
        file: null,
      },
    ]);
  };

  const removeDocument = (index) => {
    const updated = [...additionalDocuments];

    updated.splice(index, 1);

    setAdditionalDocuments(updated);
  };

  const handleDocumentChange = (
    index,
    field,
    value
  ) => {
    const updated = [...additionalDocuments];

    updated[index][field] = value;

    setAdditionalDocuments(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let valid = true;

    Object.keys(formData).forEach((key) => {
      const isValid = validateField(
        key,
        formData[key]
      );

      if (!isValid) valid = false;
    });

    if (!valid) {
      alert(
        "Please fix all errors before submitting"
      );

      return;
    }

    if (!e.target.photo.files[0]) {
      alert("Professional photo is required");

      return;
    }

    if (!e.target.resume.files[0]) {
      alert("Resume / CV is required");

      return;
    }

    setLoading(true);

    try {
      const form = new FormData();

      Object.keys(formData).forEach((key) => {
        form.append(key, formData[key]);
      });

      const photo = e.target.photo.files[0];

      if (photo.size > 5 * 1024 * 1024) {
        alert("Photo size should be under 5MB");

        setLoading(false);

        return;
      }

      form.append("photo", photo);

      const resume = e.target.resume.files[0];

      if (resume.size > 10 * 1024 * 1024) {
        alert("Resume size should be under 10MB");

        setLoading(false);

        return;
      }

      form.append("resume", resume);

      for (
        let i = 0;
        i < additionalDocuments.length;
        i++
      ) {
        const doc = additionalDocuments[i];

        if (doc.file) {
          form.append(
            "additionalDocNames",
            doc.name
          );

          form.append(
            "additionalDocuments",
            doc.file
          );
        }
      }

      const response = await fetch(
        "/api/join-nutrition-expert",
        {
          method: "POST",
          body: form,
        }
      );

      const data = await response.json();

      if (data.success) {
        alert(
          "Application submitted successfully!"
        );

        e.target.reset();

        setFormData({
          fullName: "",
          email: "",
          mobile: "",
          dob: "",
          state: "",
          city: "",
          qualification: "",
          experience: "",
          specialization: "",
          otherSpecialization: "",
          consultationMode: "",
          currentOrganization: "",
          certificationId: "",
          instagram: "",
          youtube: "",
          clientsHandled: "",
          dietType: "",
          languages: "",
          consultationFees: "",
          whyJoin: "",
          about: "",
        });

        setAdditionalDocuments([
          {
            name: "",
            file: null,
          },
        ]);
      } else {
        alert(
          data.message || "Something went wrong"
        );
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
    <div className="min-h-screen bg-linear-to-b from-white via-green-50 to-emerald-50 py-8 sm:py-10 md:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        <div className="rounded-4xl overflow-hidden shadow-2xl border border-white/60 bg-white">

          <div className="bg-linear-to-r from-green-500 via-emerald-500 to-lime-500 p-6 sm:p-10 md:p-14 text-white relative overflow-hidden">

            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">

              <div className="w-18 h-18 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg mb-6">
                <Apple className="w-9 h-9" />
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Join as Nutrition Expert
              </h1>

              <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90 max-w-3xl leading-relaxed">
                Become a verified nutrition expert on Mission100 Hospital and help people improve their health through proper nutrition and lifestyle guidance.
              </p>
            </div>
          </div>

          <div className="hidden lg:grid lg:grid-cols-3 gap-5 mb-4 mt-4 mx-4">

            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-4">
                <ShieldCheck className="w-7 h-7 text-green-600" />
              </div>

              <h3 className="text-lg font-bold text-gray-900">
                Verified Nutrition Profile
              </h3>

              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                Build trust and grow your professional nutrition profile.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-4">
                <HeartHandshake className="w-7 h-7 text-emerald-600" />
              </div>

              <h3 className="text-lg font-bold text-gray-900">
                Guide Healthy Lifestyle
              </h3>

              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                Help people achieve better health with proper diet and nutrition.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <div className="w-14 h-14 rounded-2xl bg-lime-100 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-7 h-7 text-lime-600" />
              </div>

              <h3 className="text-lg font-bold text-gray-900">
                Easy Application Process
              </h3>

              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                Submit your profile and get verified by our team.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-4 sm:p-6 md:p-10 lg:p-12 space-y-8"
          >

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Full Name *
                </label>

                <div className="relative mt-2">
                  <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`${inputClass} pl-12 ${
                      errors.fullName
                        ? errorInputClass
                        : "border-gray-200"
                    }`}
                    required
                  />
                </div>

                {errors.fullName && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Email Address *
                </label>

                <div className="relative mt-2">
                  <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nutrition@example.com"
                    className={`${inputClass} pl-12 ${
                      errors.email
                        ? errorInputClass
                        : "border-gray-200"
                    }`}
                    required
                  />
                </div>

                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Mobile Number *
                </label>

                <div className="mt-2 flex">
                  <div className="px-4 rounded-l-2xl border border-r-0 border-gray-200 bg-gray-100 flex items-center text-gray-700 font-medium">
                    +91
                  </div>

                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    maxLength={10}
                    placeholder="9876543210"
                    className={`w-full rounded-r-2xl border px-4 py-4 outline-none ${
                      errors.mobile
                        ? errorInputClass
                        : "border-gray-200"
                    }`}
                    required
                  />
                </div>

                {errors.mobile && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.mobile}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Date of Birth *
                </label>

                <div className="relative mt-2">
                  <CalendarDays className="absolute left-4 top-4 w-5 h-5 text-gray-400" />

                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className={`${inputClass} pl-12 ${
                      errors.dob
                        ? errorInputClass
                        : "border-gray-200"
                    }`}
                    required
                  />
                </div>

                {errors.dob && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.dob}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  State *
                </label>

                <div className="relative mt-2">
                  <MapPin className="absolute left-4 top-4 w-5 h-5 text-gray-400 z-10" />

                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className={`${inputClass} pl-12 border-gray-200 appearance-none`}
                    required
                  >
                    <option value="">
                      Select State
                    </option>

                    <option>Delhi</option>
                    <option>Uttar Pradesh</option>
                    <option>Haryana</option>
                    <option>Punjab</option>
                    <option>Maharashtra</option>
                    <option>Rajasthan</option>
                    <option>Bihar</option>
                    <option>West Bengal</option>
                    <option>Karnataka</option>
                    <option>Tamil Nadu</option>
                    <option>Gujarat</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  City *
                </label>

                <div className="relative mt-2">
                  <MapPin className="absolute left-4 top-4 w-5 h-5 text-gray-400" />

                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="New Delhi"
                    className={`${inputClass} pl-12 border-gray-200`}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Qualification / Certifications *
                </label>

                <div className="relative mt-2">
                  <GraduationCap className="absolute left-4 top-4 w-5 h-5 text-gray-400" />

                  <input
                    type="text"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    placeholder="B.Sc Nutrition, Dietitian, Diploma etc."
                    className={`${inputClass} pl-12 border-gray-200`}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Experience *
                </label>

                <div className="relative mt-2">
                  <Briefcase className="absolute left-4 top-4 w-5 h-5 text-gray-400" />

                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="5+ Years"
                    className={`${inputClass} pl-12 border-gray-200`}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Nutrition Specialization *
                </label>

                <select
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  className={`${inputClass} border-gray-200 mt-2`}
                  required
                >
                  <option value="">
                    Select Specialization
                  </option>

                  <option>Clinical Nutritionist</option>
                  <option>Dietitian</option>
                  <option>Sports Nutritionist</option>
                  <option>Weight Loss Expert</option>
                  <option>Pediatric Nutritionist</option>
                  <option>Diabetes Nutrition Expert</option>
                  <option>Therapeutic Diet Expert</option>
                  <option>Online Nutrition Coach</option>
                  <option>Pregnancy Nutrition Expert</option>
                  <option>Wellness Coach</option>
                  <option>Other</option>
                </select>

                {formData.specialization ===
                  "Other" && (
                  <input
                    type="text"
                    name="otherSpecialization"
                    value={
                      formData.otherSpecialization
                    }
                    onChange={handleChange}
                    placeholder="Enter specialization"
                    className={`${inputClass} border-gray-200 mt-4`}
                    required
                  />
                )}
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Consultation Mode *
                </label>

                <select
                  name="consultationMode"
                  value={formData.consultationMode}
                  onChange={handleChange}
                  className={`${inputClass} border-gray-200 mt-2`}
                  required
                >
                  <option value="">
                    Select Mode
                  </option>

                  <option>Online</option>
                  <option>Offline</option>
                  <option>Both</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Current Clinic / Organization
                </label>

                <div className="relative mt-2">
                  <Building2 className="absolute left-4 top-4 w-5 h-5 text-gray-400" />

                  <input
                    type="text"
                    name="currentOrganization"
                    value={formData.currentOrganization}
                    onChange={handleChange}
                    placeholder="Clinic / Hospital / Brand"
                    className={`${inputClass} pl-12 border-gray-200`}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Certification ID / License
                </label>

                <div className="relative mt-2">
                  <BadgeCheck className="absolute left-4 top-4 w-5 h-5 text-gray-400" />

                  <input
                    type="text"
                    name="certificationId"
                    value={formData.certificationId}
                    onChange={handleChange}
                    placeholder="Certification ID"
                    className={`${inputClass} pl-12 border-gray-200`}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Preferred Diet Type
                </label>

                <div className="relative mt-2">
                  <Salad className="absolute left-4 top-4 w-5 h-5 text-gray-400" />

                  <input
                    type="text"
                    name="dietType"
                    value={formData.dietType}
                    onChange={handleChange}
                    placeholder="Veg, Non-Veg, Keto, Vegan etc."
                    className={`${inputClass} pl-12 border-gray-200`}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Languages Known
                </label>

                <div className="relative mt-2">
                  <ClipboardList className="absolute left-4 top-4 w-5 h-5 text-gray-400" />

                  <input
                    type="text"
                    name="languages"
                    value={formData.languages}
                    onChange={handleChange}
                    placeholder="Hindi, English etc."
                    className={`${inputClass} pl-12 border-gray-200`}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Instagram Profile
                </label>

                <div className="relative mt-2">
                  <Activity className="absolute left-4 top-4 w-5 h-5 text-gray-400" />

                  <input
                    type="text"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                    placeholder="https://instagram.com/username"
                    className={`${inputClass} pl-12 border-gray-200`}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  YouTube Channel
                </label>

                <div className="relative mt-2">
                  <Award className="absolute left-4 top-4 w-5 h-5 text-gray-400" />

                  <input
                    type="text"
                    name="youtube"
                    value={formData.youtube}
                    onChange={handleChange}
                    placeholder="https://youtube.com/@channel"
                    className={`${inputClass} pl-12 border-gray-200`}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Approximate Clients Handled
                </label>

                <div className="relative mt-2">
                  <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />

                  <input
                    type="text"
                    name="clientsHandled"
                    value={formData.clientsHandled}
                    onChange={handleChange}
                    placeholder="500+ Clients"
                    className={`${inputClass} pl-12 border-gray-200`}
                  />
                </div>
              </div>

              

            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700">
                Why do you want to join Mission100 Hospital? *
              </label>

              <textarea
                name="whyJoin"
                value={formData.whyJoin}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us why you want to become part of Mission100 Hospital..."
                className={`${inputClass} border-gray-200 mt-2`}
                required
              ></textarea>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700">
                Tell us about your nutrition expertise and achievements *
              </label>

              <textarea
                name="about"
                value={formData.about}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us about yourself..."
                className={`${inputClass} border-gray-200 mt-2`}
                required
              ></textarea>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              <div className="rounded-3xl border-2 border-dashed border-green-200 bg-green-50 p-6">
                <div className="flex items-center gap-3">
                  <Upload className="w-6 h-6 text-green-600" />

                  <h3 className="font-semibold text-gray-900">
                    Upload Professional Photo *
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
                  required
                />
              </div>

              <div className="rounded-3xl border-2 border-dashed border-emerald-200 bg-emerald-50 p-6">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-emerald-600" />

                  <h3 className="font-semibold text-gray-900">
                    Upload Resume / Portfolio *
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
                  required
                />
              </div>
            </div>

            <div className="rounded-3xl border-2 border-dashed border-gray-200 bg-gray-50 p-6 sm:p-8">

              <div className="flex items-center gap-3">
                <Upload className="w-6 h-6 text-green-600" />

                <h3 className="text-lg font-semibold text-gray-900">
                  Additional Certifications / Documents
                </h3>
              </div>

              <p className="mt-2 text-sm text-gray-500">
                Optional • Upload certificates, diet plans, awards or achievements.
              </p>

              <div className="mt-6 space-y-5">

                {additionalDocuments.map(
                  (doc, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-gray-200 bg-white p-5"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                        <input
                          type="text"
                          placeholder="Certificate / Document Name"
                          value={doc.name}
                          onChange={(e) =>
                            handleDocumentChange(
                              index,
                              "name",
                              e.target.value
                            )
                          }
                          className={`${inputClass} border-gray-200`}
                        />

                        <input
                          type="file"
                          accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                          onChange={(e) =>
                            handleDocumentChange(
                              index,
                              "file",
                              e.target.files[0]
                            )
                          }
                          className="block w-full rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm"
                        />
                      </div>

                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() =>
                            removeDocument(index)
                          }
                          className="mt-4 text-sm font-semibold text-red-500"
                        >
                          Remove Document
                        </button>
                      )}
                    </div>
                  )
                )}
              </div>

              {additionalDocuments.length < 5 && (
                <button
                  type="button"
                  onClick={addMoreDocument}
                  className="mt-6 rounded-2xl bg-linear-to-r from-green-500 to-emerald-500 px-6 py-4 text-white font-semibold"
                >
                  + Upload One More Document
                </button>
              )}
            </div>

            <div className="rounded-3xl border border-green-100 bg-linear-to-r from-green-50 to-emerald-50 p-5 sm:p-6">

              <div className="flex items-start gap-4">

                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-7 h-7 text-green-600" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Application Review Process
                  </h3>

                  <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                    After submitting your application, our team will review your profile, certifications and nutrition expertise. Shortlisted experts will be contacted for the next steps.
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full rounded-2xl py-4 sm:py-5 text-white font-semibold text-base sm:text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-linear-to-r from-green-500 to-emerald-500 hover:shadow-2xl"
              }`}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>

                  Uploading & Submitting...
                </>
              ) : (
                <>
                  Submit Application

                  <Send className="w-5 h-5" />
                </>
              )}
            </button>

            {loading && (
              <div className="text-center text-sm text-gray-500">
                Please wait while we securely upload your files...
              </div>
            )}

          </form>
        </div>
      </div>
    </div>
  );
}