"use client";

import React, { useState } from "react";

import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  HeartPulse,
} from "lucide-react";

const QueryForm = () => {
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    // PHONE ONLY DIGITS
    if (name === "phone") {
      const cleaned = value.replace(/\D/g, "");

      if (cleaned.length <= 10) {
        setFormData({
          ...formData,
          [name]: cleaned,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    // CLEAR ERROR
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // VALIDATION
  const validateForm = () => {
    const newErrors = {};

    // NAME
    if (formData.name.trim().length < 3) {
      newErrors.name = "Name should be at least 3 characters";
    }

    // EMAIL
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter valid email address";
    }

    // PHONE
    if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit mobile number";
    }

    // SUBJECT
    if (!formData.subject) {
      newErrors.subject = "Please select subject";
    }

    // MESSAGE
    if (formData.message.trim().length < 10) {
      newErrors.message =
        "Message should be at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch("/api/general-query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message:
            "Your query has been submitted successfully!",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

        setErrors({});
      } else {
        setStatus({
          type: "error",
          message:
            "Failed to submit query. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Something went wrong. Please try again later.",
      });
    }

    setLoading(false);
  };

  return (
    <section className="w-full">

      <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-white/50 bg-white shadow-2xl">

        {/* BACKGROUND BLUR */}
        <div className="absolute top-0 right-0 w-56 h-56 bg-cyan-100/40 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 left-0 w-56 h-56 bg-green-100/40 rounded-full blur-3xl"></div>

        {/* CONTENT */}
        <div className="relative z-10 p-5 sm:p-8 lg:p-10">

          {/* HEADER */}
          <div className="text-center">

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-cyan-500 flex items-center justify-center mx-auto shadow-lg">
              <HeartPulse className="w-8 h-8 text-white" />
            </div>

            <h2 className="mt-5 text-3xl sm:text-4xl font-bold text-gray-900">
              Drop a Query
            </h2>

            <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
              Have questions about Mission100? Our team is here
              to help you with healthcare, wellness and support.
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >

            {/* NAME + EMAIL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* NAME */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Full Name
                </label>

                <div className="relative mt-2">

                  <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`w-full rounded-2xl border bg-white pl-12 pr-4 py-4 outline-none transition-all duration-300 ${
                      errors.name
                        ? "border-red-400 focus:ring-2 focus:ring-red-200"
                        : "border-gray-200 focus:ring-2 focus:ring-green-500"
                    }`}
                  />
                </div>

                {errors.name && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.name}
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
                    placeholder="Enter your email"
                    className={`w-full rounded-2xl border bg-white pl-12 pr-4 py-4 outline-none transition-all duration-300 ${
                      errors.email
                        ? "border-red-400 focus:ring-2 focus:ring-red-200"
                        : "border-gray-200 focus:ring-2 focus:ring-green-500"
                    }`}
                  />
                </div>

                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* PHONE + SUBJECT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* PHONE */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Mobile Number
                </label>

                <div className="relative mt-2">

                  <Phone className="absolute left-4 top-4 w-5 h-5 text-gray-400" />

                  <div className="absolute left-12 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                    +91
                  </div>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                    className={`w-full rounded-2xl border bg-white pl-24 pr-4 py-4 outline-none transition-all duration-300 ${
                      errors.phone
                        ? "border-red-400 focus:ring-2 focus:ring-red-200"
                        : "border-gray-200 focus:ring-2 focus:ring-green-500"
                    }`}
                  />
                </div>

                {errors.phone && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* SUBJECT */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Subject
                </label>

                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full mt-2 rounded-2xl border bg-white px-4 py-4 outline-none transition-all duration-300 ${
                    errors.subject
                      ? "border-red-400 focus:ring-2 focus:ring-red-200"
                      : "border-gray-200 focus:ring-2 focus:ring-green-500"
                  }`}
                >
                  <option value="">
                    Select Subject
                  </option>

                  <option value="General Inquiry">
                    General Inquiry
                  </option>

                  <option value="Health Consultation">
                    Health Consultation
                  </option>

                  <option value="Preventive Healthcare">
                    Preventive Healthcare
                  </option>

                  <option value="Appointment Support">
                    Appointment Support
                  </option>

                  <option value="Website Feedback">
                    Website Feedback
                  </option>
                </select>

                {errors.subject && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.subject}
                  </p>
                )}
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Your Message
              </label>

              <div className="relative mt-2">

                <MessageSquare className="absolute left-4 top-5 w-5 h-5 text-gray-400" />

                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  className={`w-full rounded-2xl border bg-white pl-12 pr-4 py-4 outline-none resize-none transition-all duration-300 ${
                    errors.message
                      ? "border-red-400 focus:ring-2 focus:ring-red-200"
                      : "border-gray-200 focus:ring-2 focus:ring-green-500"
                  }`}
                ></textarea>
              </div>

              {errors.message && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.message}
                </p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full rounded-2xl py-4 text-white font-semibold text-base sm:text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-green-500 to-cyan-500 hover:shadow-2xl"
              }`}
            >

              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>

                  Sending Query...
                </>
              ) : (
                <>
                  Submit Query

                  <Send className="w-5 h-5" />
                </>
              )}
            </button>

            {/* STATUS */}
            {status.message && (
              <div
                className={`rounded-2xl px-5 py-4 flex items-center gap-3 text-sm sm:text-base font-medium ${
                  status.type === "success"
                    ? "bg-green-50 text-green-700 border border-green-100"
                    : "bg-red-50 text-red-700 border border-red-100"
                }`}
              >

                {status.type === "success" ? (
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 shrink-0" />
                )}

                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default QueryForm;