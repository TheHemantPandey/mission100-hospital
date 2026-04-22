"use client";
import React, { useState } from "react";

const FormStepTwo = ({ prevData, onBack }) => {
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePaymentClick = async (e) => {
    e.preventDefault();
    
    if (!appointmentDate || !appointmentTime) {
      alert("Please select both a preferred Date and Time slot before proceeding.");
      return;
    }

    setIsProcessing(true);

    try {
      // 1. Call your backend API to create a Razorpay Order
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 500 }), // The fee shown below
      });

      const orderData = await res.json();

      if (!res.ok) throw new Error("Order creation failed");

      // 2. Configure Razorpay Options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, 
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Mission 100 Hospital",
        description: `Consultation with ${prevData.doctorName}`,
        order_id: orderData.id,
        handler: function (response) {
          // This runs after successful payment
          alert("Payment Successful! Transaction ID: " + response.razorpay_payment_id);
          // You can redirect to a success page here
          window.location.href = "/booking-success"; 
        },
        prefill: {
          name: `${prevData.firstName} ${prevData.lastName}`,
          contact: prevData.contactNo,
        },
        theme: {
          color: "#16a34a", // Mission 100 Green
        },
      };

      // 3. Open the Razorpay Modal
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

    } catch (error) {
      console.error("Payment Error:", error);
      alert("Unable to initialize payment. Please check your connection.");
    } finally {
      setIsProcessing(false);
    }
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
              min={new Date().toISOString().split("T")[0]} 
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
            type="button" 
            onClick={onBack}
            disabled={isProcessing}
            className="flex-1 px-6 py-3 border border-gray-300 text-gray-600 rounded-lg font-semibold hover:bg-gray-100 transition-all disabled:opacity-50"
          >
            Go Back
          </button>
          <button
            type="submit"
            disabled={isProcessing}
            className="flex-[2] px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 hover:shadow-lg transition-all disabled:bg-blue-400"
          >
            {isProcessing ? "Processing..." : "Make Payment"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormStepTwo;