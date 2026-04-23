"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormStepOne = ({ onNext }) => {
  const [isSending, setIsSending] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSending(true);
    try {
      // Sending data to our Next.js API route
      const response = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Enquiry sent to email successfully!");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsSending(false);
      // We call onNext even if mail fails so the user can finish the booking
      onNext(data); 
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Patient Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name *</label>
          <input
            {...register("firstName", { 
              required: "First name is required", 
              pattern: { value: /^[A-Za-z ]+$/, message: "Alphabetical characters only" },
              minLength: { value: 2, message: "Min 2 characters" }
            })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 shadow-sm"
          />
          {errors.firstName && <span className="text-red-500 text-xs mt-1">{errors.firstName.message}</span>}
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name *</label>
          <input
            {...register("lastName", { 
              required: "Last name is required",
              pattern: { value: /^[A-Za-z ]+$/, message: "Alphabetical characters only" },
              minLength: { value: 2, message: "Min 2 characters" }
            })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
          {errors.lastName && <span className="text-red-500 text-xs mt-1">{errors.lastName.message}</span>}
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Gender *</label>
          <select {...register("gender", { required: "Gender selection is required" })} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <span className="text-red-500 text-xs mt-1">{errors.gender.message}</span>}
        </div>

        {/* Age */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Age *</label>
          <input
            type="number"
            min="1"
            onKeyDown={(e) => ["e", "E", "-", "+"].includes(e.key) && e.preventDefault()}
            {...register("age", { 
                required: "Age is required", 
                min: { value: 1, message: "Age must be at least 1" } 
            })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
          {errors.age && <span className="text-red-500 text-xs mt-1">{errors.age.message}</span>}
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Number *</label>
          <input
            type="tel"
            {...register("contactNo", { 
              required: "Contact is required", 
              pattern: { value: /^[0-9]{10}$/, message: "Must be exactly 10 digits" } 
            })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
          {errors.contactNo && <span className="text-red-500 text-xs mt-1">{errors.contactNo.message}</span>}
        </div>

        {/* Guardian Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Guardian Name (Optional)</label>
          <input
            {...register("guardianName")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>

        {/* Department */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Department *</label>
          <select {...register("department", { required: "Please select a department" })} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500">
            <option value="">Select Department</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Ayurveda">Ayurveda</option>
            <option value="Mental Health">Mental Health</option>
          </select>
          {errors.department && <span className="text-red-500 text-xs mt-1">{errors.department.message}</span>}
        </div>

        {/* Doctor Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Doctor Name *</label>
          <select {...register("doctorName", { required: "Please select a doctor" })} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500">
            <option value="">Select Doctor</option>
            <option value="Dr. Hemant Pandey">Dr. Vishnu</option>
            <option value="Dr. Muskan Agrawal">Dr. Gaurav</option>
          </select>
          {errors.doctorName && <span className="text-red-500 text-xs mt-1">{errors.doctorName.message}</span>}
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Description / Reason for Visit *</label>
        <textarea
          {...register("description", { 
            required: "Description is required", 
            minLength: { value: 5, message: "Description must be at least 5 characters" } 
          })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          rows="3"
          placeholder="Briefly describe symptoms..."
        ></textarea>
        {errors.description && <span className="text-red-500 text-xs mt-1">{errors.description.message}</span>}
      </div>

      <button
        type="submit"
        disabled={isSending}
        className={`w-full text-white py-3 rounded-lg font-bold transition-all active:scale-95 shadow-md ${isSending ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'}`}
      >
        {isSending ? "Processing..." : "Continue to Schedule"}
      </button>
    </form>
  );
};

export default FormStepOne;