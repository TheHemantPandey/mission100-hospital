"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  Link2,
  FileText,
  Upload,
  Send,
  ShieldCheck,
  CheckCircle,
  Building,
  Award
} from "lucide-react";
import { event } from "@/app/lib/gtag";

function ApplyFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const jobParam = searchParams.get("job");

  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
    position: "",
    qualification: "",
    college: "",
    experience: "",
    currentCompany: "",
    currentDesignation: "",
    skills: "",
    linkedin: "",
    portfolio: "",
    noticePeriod: "",
    expectedSalary: ""
  });

  const [additionalDocuments, setAdditionalDocuments] = useState([
    {
      name: "",
      file: null,
    },
  ]);

  // Load jobs list
  useEffect(() => {
    async function loadJobs() {
      try {
        const res = await fetch("/api/careers/jobs");
        const data = await res.json();
        const activeJobs = data.filter(j => j.active);
        setJobs(activeJobs);
        
        // If jobParam matches a job slug, pre-select it
        if (jobParam) {
          const matched = activeJobs.find(j => j.slug === jobParam);
          if (matched) {
            setFormData(prev => ({ ...prev, position: matched.title }));
          } else {
            setFormData(prev => ({ ...prev, position: "General Application" }));
          }
        }
      } catch (err) {
        console.error("Failed to load jobs list:", err);
      }
    }
    loadJobs();
  }, [jobParam]);

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "fullName":
        if (value.trim().length < 3) {
          error = "Please enter valid full name";
        }
        break;

      case "email":
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          error = "Please enter valid email";
        }
        break;

      case "mobile":
        if (!/^[6-9]\d{9}$/.test(value)) {
          error = "Enter valid 10 digit mobile number";
        }
        break;

      case "city":
        if (value.trim().length < 2) {
          error = "Please enter your current city";
        }
        break;

      case "position":
        if (!value) {
          error = "Please select the position you are applying for";
        }
        break;

      case "qualification":
        if (value.trim().length < 2) {
          error = "Please specify your highest qualification";
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
    if (additionalDocuments.length >= 5) return;
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

  const handleDocumentChange = (index, field, value) => {
    const updated = [...additionalDocuments];
    updated[index][field] = value;
    setAdditionalDocuments(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let valid = true;
    // Validate required fields
    const requiredFields = ["fullName", "email", "mobile", "city", "position", "qualification"];
    requiredFields.forEach((key) => {
      const isValid = validateField(key, formData[key]);
      if (!isValid) valid = false;
    });

    if (!valid) {
      alert("Please fix all errors before submitting");
      return;
    }

    const resume = e.target.resume.files[0];
    if (!resume) {
      alert("Resume / CV is required");
      return;
    }

    setLoading(true);

    try {
      const form = new FormData();
      Object.keys(formData).forEach((key) => {
        form.append(key, formData[key]);
      });

      // Validations for Resume
      if (resume.size > 10 * 1024 * 1024) {
        alert("Resume size should be under 10MB");
        setLoading(false);
        return;
      }
      form.append("resume", resume);

      // Validation for Optional Cover Letter
      const coverLetter = e.target.coverLetter.files[0];
      if (coverLetter) {
        if (coverLetter.size > 5 * 1024 * 1024) {
          alert("Cover Letter size should be under 5MB");
          setLoading(false);
          return;
        }
        form.append("coverLetter", coverLetter);
      }

      // Append additional documents
      for (let i = 0; i < additionalDocuments.length; i++) {
        const doc = additionalDocuments[i];
        if (doc.file) {
          form.append("additionalDocNames", doc.name || `Document ${i + 1}`);
          form.append("additionalDocuments", doc.file);
        }
      }

      const response = await fetch("/api/careers/applications", {
        method: "POST",
        body: form,
      });

      const data = await response.json();

      if (data.success) {
        event("career_application_submit", {
          position: formData.position || "General Application",
        });

        // Clear all form state
        e.target.reset();
        setFormData({
          fullName: "",
          email: "",
          mobile: "",
          city: "",
          position: "",
          qualification: "",
          college: "",
          experience: "",
          currentCompany: "",
          currentDesignation: "",
          skills: "",
          linkedin: "",
          github: "",
          portfolio: "",
          whyJoin: "",
          whyFit: "",
          noticePeriod: "",
          expectedSalary: ""
        });
        setAdditionalDocuments([{ name: "", file: null }]);
        
        // Redirect to thank-you page
        router.push("/careers/thank-you");
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting form");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-2xl border bg-white px-4 py-4 outline-none transition-all duration-300 focus:ring-2 focus:ring-emerald-500 text-slate-800 placeholder-slate-400";

  const errorInputClass =
    "border-red-400 focus:ring-red-400";

  return (
    <div className="min-h-screen bg-linear-to-b from-white via-cyan-50 to-green-50/50 py-8 sm:py-10 md:py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-4xl overflow-hidden shadow-2xl border border-white/60 bg-white">
          
          {/* HEADER */}
          <div className="bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 p-6 sm:p-10 md:p-14 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="w-18 h-18 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg mb-6">
                <Briefcase className="w-9 h-9 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                Careers Application
              </h1>
              <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90 max-w-2xl leading-relaxed">
                Join our mission to transform preventive healthcare. Provide your credentials and submit your resume below.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-10 md:p-12 space-y-10">
            
            {/* SECTION 1: PERSONAL INFORMATION */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <User className="w-5 h-5 text-emerald-500" /> 1. Personal Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* FULL NAME */}
                <div>
                  <label className="text-sm font-semibold text-slate-700">Full Name *</label>
                  <div className="relative mt-2">
                    <User className="absolute left-4 top-4.5 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`${inputClass} pl-12 ${errors.fullName ? errorInputClass : "border-slate-200"}`}
                      required
                    />
                  </div>
                  {errors.fullName && <p className="mt-2 text-sm text-red-500">{errors.fullName}</p>}
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-sm font-semibold text-slate-700">Email Address *</label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-4 top-4.5 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="johndoe@example.com"
                      className={`${inputClass} pl-12 ${errors.email ? errorInputClass : "border-slate-200"}`}
                      required
                    />
                  </div>
                  {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
                </div>

                {/* PHONE */}
                <div>
                  <label className="text-sm font-semibold text-slate-700">Phone Number *</label>
                  <div className="mt-2 flex">
                    <div className="px-4 rounded-l-2xl border border-r-0 border-slate-200 bg-slate-50 flex items-center text-slate-500 font-medium">
                      +91
                    </div>
                    <input
                      type="text"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      maxLength={10}
                      placeholder="9876543210"
                      className={`w-full rounded-r-2xl border px-4 py-4 outline-none text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 transition-all ${errors.mobile ? errorInputClass : "border-slate-200"}`}
                      required
                    />
                  </div>
                  {errors.mobile && <p className="mt-2 text-sm text-red-500">{errors.mobile}</p>}
                </div>

                {/* CURRENT CITY */}
                <div>
                  <label className="text-sm font-semibold text-slate-700">Current City *</label>
                  <div className="relative mt-2">
                    <MapPin className="absolute left-4 top-4.5 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="New Delhi"
                      className={`${inputClass} pl-12 ${errors.city ? errorInputClass : "border-slate-200"}`}
                      required
                    />
                  </div>
                  {errors.city && <p className="mt-2 text-sm text-red-500">{errors.city}</p>}
                </div>
              </div>
            </div>

            {/* SECTION 2: PROFESSIONAL INFORMATION */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-emerald-500" /> 2. Professional Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* POSITION */}
                <div>
                  <label className="text-sm font-semibold text-slate-700">Position Applying For *</label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className={`${inputClass} border-slate-200 mt-2 bg-white`}
                    required
                  >
                    <option value="">Select Position *</option>
                    {jobs.map((job) => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                  {errors.position && <p className="mt-2 text-sm text-red-500">{errors.position}</p>}
                </div>

                {/* HIGHEST QUALIFICATION */}
                <div>
                  <label className="text-sm font-semibold text-slate-700">Highest Qualification *</label>
                  <div className="relative mt-2">
                    <GraduationCap className="absolute left-4 top-4.5 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      placeholder="B.Tech, MBA, MCA, etc."
                      className={`${inputClass} pl-12 ${errors.qualification ? errorInputClass : "border-slate-200"}`}
                      required
                    />
                  </div>
                  {errors.qualification && <p className="mt-2 text-sm text-red-500">{errors.qualification}</p>}
                </div>

                {/* COLLEGE */}
                <div>
                  <label className="text-sm font-semibold text-slate-700">College / University</label>
                  <div className="relative mt-2">
                    <Building className="absolute left-4 top-4.5 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      name="college"
                      value={formData.college}
                      onChange={handleChange}
                      placeholder="IIT, DU, etc."
                      className={`${inputClass} pl-12 border-slate-200`}
                    />
                  </div>
                </div>

                {/* YEARS OF EXPERIENCE */}
                <div>
                  <label className="text-sm font-semibold text-slate-700">Years of Experience</label>
                  <div className="relative mt-2">
                    <Briefcase className="absolute left-4 top-4.5 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      placeholder="e.g. 2.5 Years"
                      className={`${inputClass} pl-12 border-slate-200`}
                    />
                  </div>
                </div>

                {/* PREVIOUS COMPANY */}
                <div>
                  <label className="text-sm font-semibold text-slate-700">Current / Previous Company</label>
                  <div className="relative mt-2">
                    <Building className="absolute left-4 top-4.5 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      name="currentCompany"
                      value={formData.currentCompany}
                      onChange={handleChange}
                      placeholder="Alphabet Inc."
                      className={`${inputClass} pl-12 border-slate-200`}
                    />
                  </div>
                </div>

                {/* PREVIOUS DESIGNATION */}
                <div>
                  <label className="text-sm font-semibold text-slate-700">Current / Previous Designation</label>
                  <div className="relative mt-2">
                    <Briefcase className="absolute left-4 top-4.5 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      name="currentDesignation"
                      value={formData.currentDesignation}
                      onChange={handleChange}
                      placeholder="Software Engineer"
                      className={`${inputClass} pl-12 border-slate-200`}
                    />
                  </div>
                </div>

                {/* SKILLS */}
                <div className="md:col-span-2">
                  <label className="text-sm font-semibold text-slate-700">Skills</label>
                  <div className="relative mt-2">
                    <Award className="absolute left-4 top-4.5 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      name="skills"
                      value={formData.skills}
                      onChange={handleChange}
                      placeholder="React, Next.js, Node.js, Project Management, Sales, Marketing"
                      className={`${inputClass} pl-12 border-slate-200`}
                    />
                  </div>
                </div>

                {/* LINKEDIN */}
                <div>
                  <label className="text-sm font-semibold text-slate-700">LinkedIn URL</label>
                  <div className="relative mt-2">
                    <Link2 className="absolute left-4 top-4.5 w-5 h-5 text-slate-400" />
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      placeholder="https://linkedin.com/in/username"
                      className={`${inputClass} pl-12 border-slate-200`}
                    />
                  </div>
                </div>



                {/* PORTFOLIO */}
                <div className="md:col-span-2">
                  <label className="text-sm font-semibold text-slate-700">Portfolio URL</label>
                  <div className="relative mt-2">
                    <Link2 className="absolute left-4 top-4.5 w-5 h-5 text-slate-400" />
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      placeholder="https://yourportfolio.com"
                      className={`${inputClass} pl-12 border-slate-200`}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 3: APPLICATION INFORMATION */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-500" /> 3. Application Information
              </h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* NOTICE PERIOD */}
                  <div>
                    <label className="text-sm font-semibold text-slate-700">Notice Period</label>
                    <input
                      type="text"
                      name="noticePeriod"
                      value={formData.noticePeriod}
                      onChange={handleChange}
                      placeholder="e.g. Immediate, 30 days"
                      className={`${inputClass} border-slate-200 mt-2`}
                    />
                  </div>

                  {/* EXPECTED SALARY */}
                  <div>
                    <label className="text-sm font-semibold text-slate-700">Expected Salary</label>
                    <input
                      type="text"
                      name="expectedSalary"
                      value={formData.expectedSalary}
                      onChange={handleChange}
                      placeholder="e.g. ₹6,00,000 LPA"
                      className={`${inputClass} border-slate-200 mt-2`}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 4: DOCUMENTS */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <Upload className="w-5 h-5 text-emerald-500" /> 4. Documents Upload
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* RESUME */}
                <div className="rounded-3xl border-2 border-dashed border-emerald-200 bg-emerald-50/50 p-6">
                  <div className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-emerald-600" />
                    <h3 className="font-semibold text-slate-900">Upload Resume / CV *</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">PDF, DOC, DOCX • Max 10MB</p>
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    className="mt-5 block w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-800"
                    required
                  />
                </div>

                {/* COVER LETTER */}
                <div className="rounded-3xl border-2 border-dashed border-cyan-200 bg-cyan-50/50 p-6">
                  <div className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-cyan-600" />
                    <h3 className="font-semibold text-slate-900">Upload Cover Letter</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">PDF, DOC, DOCX • Max 5MB (Optional)</p>
                  <input
                    type="file"
                    name="coverLetter"
                    accept=".pdf,.doc,.docx"
                    className="mt-5 block w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-800"
                  />
                </div>
              </div>

              {/* ADDITIONAL CERTIFICATIONS */}
              <div className="rounded-3xl border-2 border-dashed border-slate-200 bg-slate-50 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <Upload className="w-6 h-6 text-emerald-500" />
                  <h3 className="text-lg font-semibold text-slate-900">Additional Certifications / Documents</h3>
                </div>
                <p className="mt-2 text-sm text-slate-500">Optional • Upload licenses, portfolio designs, or performance records.</p>
                
                <div className="mt-6 space-y-5">
                  {additionalDocuments.map((doc, index) => (
                    <div key={index} className="rounded-2xl border border-slate-200 bg-white p-5">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <input
                          type="text"
                          placeholder="Certificate / Document Name"
                          value={doc.name}
                          onChange={(e) => handleDocumentChange(index, "name", e.target.value)}
                          className={`${inputClass} border-slate-200`}
                        />
                        <input
                          type="file"
                          accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                          onChange={(e) => handleDocumentChange(index, "file", e.target.files[0])}
                          className="block w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800"
                        />
                      </div>
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => removeDocument(index)}
                          className="mt-4 text-sm font-semibold text-red-500 hover:text-red-600"
                        >
                          Remove Document
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {additionalDocuments.length < 5 && (
                  <button
                    type="button"
                    onClick={addMoreDocument}
                    className="mt-6 rounded-2xl bg-linear-to-r from-emerald-500 to-teal-500 px-6 py-4 text-white font-semibold hover:shadow-md transition-all duration-300"
                  >
                    + Upload One More Document
                  </button>
                )}
              </div>
            </div>

            {/* REVIEW BOX */}
            <div className="rounded-3xl border border-emerald-100 bg-linear-to-r from-emerald-50/50 to-cyan-50/50 p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-7 h-7 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Application Review Disclaimer</h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                    By submitting, you consent to let Mission100 securely process your professional credentials and verify your history. If shortlisted, our human resources department will contact you directly via phone or email.
                  </p>
                </div>
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full rounded-2xl py-4 sm:py-5 text-white font-semibold text-base sm:text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                loading
                  ? "bg-slate-400 cursor-not-allowed"
                  : "bg-linear-to-r from-emerald-500 to-teal-500 hover:shadow-2xl"
              }`}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Submitting Application...
                </>
              ) : (
                <>
                  Submit Application <Send className="w-5 h-5" />
                </>
              )}
            </button>

            {loading && (
              <div className="text-center text-sm text-slate-500">
                Please wait while we transmit your details securely...
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-500 text-sm">Initializing form...</p>
        </div>
      </div>
    }>
      <ApplyFormContent />
    </Suspense>
  );
}
