"use client";
import React, { useState } from "react";

const FormStepTwo = ({ prevData, onBack }) => {
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  const handlePaymentClick = (e) => {
    e.preventDefault();
    
    // Manual validation check
    if (!appointmentDate || !appointmentTime) {
      alert("Please select both a preferred Date and Time slot before proceeding.");
      return;
    }

    // This is where you will eventually trigger Razorpay
    alert(`Redirecting to payment for ${prevData.firstName} on ${appointmentDate} at ${appointmentTime}`);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 text-center">Confirm & Schedule</h2>

      {/* Summary Box */}
      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
        <h3 className="text-green-800 font-semibold mb-2">Booking Summary:</h3>
        <p className="text-sm text-gray-700"><strong>Patient:</strong> {prevData.firstName} {prevData.lastName}</p>
        <p className="text-sm text-gray-700"><strong>Doctor:</strong> {prevData.doctorName} ({prevData.department})</p>
        <p className="text-sm text-gray-700"><strong>Contact:</strong> {prevData.contactNo}</p>
      </div>

      <form onSubmit={handlePaymentClick} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Appointment Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Select Date *</label>
            <input
              type="date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]} // Prevents selecting past dates
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Appointment Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Select Time Slot *</label>
            <select 
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" 
              required
            >
              <option value="">Choose a slot</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="04:00 PM">04:00 PM</option>
              <option value="06:00 PM">06:00 PM</option>
            </select>
          </div>
        </div>

        {/* Fee Section */}
        <div className="flex justify-between items-center py-4 border-t border-b">
          <span className="text-lg font-medium text-gray-700">Consultation Fee</span>
          <span className="text-2xl font-bold text-green-700">₹ 500.00</span>
        </div>

        <div className="flex gap-4">
          <button
            type="button" // Important: button type "button" prevents form submission
            onClick={onBack}
            className="flex-1 px-6 py-3 border border-gray-300 text-gray-600 rounded-lg font-semibold hover:bg-gray-100 transition-all"
          >
            Go Back
          </button>
          <button
            type="submit"
            className="flex-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 hover:shadow-lg transition-all"
          >
            Make Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormStepTwo;