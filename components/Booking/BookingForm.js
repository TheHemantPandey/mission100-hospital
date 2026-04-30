"use client";

import { useState } from "react";
import FormStepOne from "@/components/Booking/FormStepOne";
import FormStepTwo from "@/components/Booking/FormStepTwo";

export default function BookingForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNextStep = (data) => {
    setFormData(data);
    setCurrentStep(2);
  };

  const handlePreviousStep = () => {
    setCurrentStep(1);
  };

  return (
    <>
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className={`flex-1 text-center text-sm font-bold uppercase tracking-wider ${currentStep === 1 ? 'text-green-600' : 'text-gray-400'}`}>
            1. Patient Details
          </div>
          <div className="w-12 h-px bg-gray-200 mx-4"></div>
          <div className={`flex-1 text-center text-sm font-bold uppercase tracking-wider ${currentStep === 2 ? 'text-green-600' : 'text-gray-400'}`}>
            2. Schedule & Payment
          </div>
        </div>
      </div>

      {/* Logic */}
      {currentStep === 1 ? (
        <FormStepOne onNext={handleNextStep} />
      ) : (
        <FormStepTwo 
          prevData={formData} 
          onBack={handlePreviousStep} 
        />
      )}
    </>
  );
}