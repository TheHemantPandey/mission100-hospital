"use client";

import { useState } from "react";
import FormStepOne from "@/components/Booking/FormStepOne";
import FormStepTwo from "@/components/Booking/FormStepTwo";

export default function BookingPage() {
  // Step 1: Manage which form is visible (1 or 2)
  const [currentStep, setCurrentStep] = useState(1);

  // Step 2: Store data from the first form to pass it to the second
  const [formData, setFormData] = useState({});

  // Function to move to the next form
  const handleNextStep = (data) => {
    setFormData(data); // Save details like name, contact, etc.
    setCurrentStep(2); // Switch the view to FormStepTwo
  };

  // Function to go back if the user wants to edit details
  const handlePreviousStep = () => {
    setCurrentStep(1);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-2xl p-8">
        
        {/* Progress Indicator (Optional) */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className={`flex-1 text-center font-semibold ${currentStep === 1 ? 'text-blue-600' : 'text-gray-400'}`}>
              Step 1: Patient Details
            </div>
            <div className="w-12 h-px bg-gray-300 mx-4"></div>
            <div className={`flex-1 text-center font-semibold ${currentStep === 2 ? 'text-blue-600' : 'text-gray-400'}`}>
              Step 2: Schedule & Payment
            </div>
          </div>
        </div>

        {/* Conditional Rendering Logic */}
        {currentStep === 1 ? (
          <FormStepOne onNext={handleNextStep} />
        ) : (
          <FormStepTwo 
            prevData={formData} 
            onBack={handlePreviousStep} 
          />
        )}
      </div>
    </div>
  );
}