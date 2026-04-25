"use client";
import React, { useState } from "react";

const FormStepTwo = ({ prevData, onBack }) => {
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const timeSlots = ["10:00 AM", "12:00 PM", "04:00 PM", "06:00 PM"];

  const getFilteredSlots = () => {
    if (!appointmentDate) return timeSlots;
    const today = new Date().toISOString().split("T")[0];
    if (appointmentDate !== today) return timeSlots;
    const currentHour = new Date().getHours();
    return timeSlots.filter((slot) => {
      const hour = parseInt(slot);
      if (slot.includes("PM") && hour !== 12) return hour + 12 > currentHour;
      return hour > currentHour;
    });
  };

  const handlePaymentClick = async (e) => {
    e.preventDefault();
    if (isProcessing) return;

    if (!appointmentDate || !appointmentTime) {
      alert("Please select both Date and Time.");
      return;
    }

    setIsProcessing(true);

    try {
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: prevData.amount }), // DYNAMIC AMOUNT
      });

      const orderData = await res.json();
      if (!res.ok) throw new Error("Order creation failed");

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Mission 100 Hospital",
        description: `Consultation at ${prevData.gymName}`,
        order_id: orderData.id,
        handler: function (response) {
          alert("Payment Successful! ID: " + response.razorpay_payment_id);
          window.location.href = "/booking-success";
        },
        prefill: {
          name: `${prevData.firstName} ${prevData.lastName}`,
          contact: prevData.contactNo,
        },
        theme: { color: "#16a34a" },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

    } catch (error) {
      console.error("Payment Error:", error);
      alert("Payment failed. Try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 text-center">Confirm & Schedule</h2>

      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
        <h3 className="text-green-800 font-semibold mb-2">Booking Summary:</h3>
        <p className="text-sm text-gray-700"><strong>Patient:</strong> {prevData.firstName} {prevData.lastName}</p>
        <p className="text-sm text-gray-700"><strong>Selected Gym:</strong> {prevData.gymName}</p>
        <p className="text-sm text-gray-700"><strong>Test:</strong> {prevData.testName}</p>
        <p className="text-sm text-gray-700 mt-2">
          <strong>Address:</strong> {prevData.houseNo}, {prevData.street}, {prevData.city}, {prevData.state} - {prevData.pinCode}
        </p>
      </div>

      <form onSubmit={handlePaymentClick} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Select Date *</label>
            <input
              type="date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Select Time Slot *</label>
            <select
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Choose a slot</option>
              {getFilteredSlots().map((slot) => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
          </div>
        </div>

        {/* DYNAMIC FEE DISPLAY */}
        <div className="flex justify-between items-center py-4 border-t border-b">
          <span className="text-lg font-medium text-gray-700">Total Amount</span>
          <span className="text-2xl font-bold text-green-700">₹ {prevData.amount}.00</span>
        </div>

        <div className="flex gap-4">
          <button type="button" onClick={onBack} disabled={isProcessing} className="flex-1 px-6 py-3 border border-gray-300 text-gray-600 rounded-lg font-semibold hover:bg-gray-100 disabled:opacity-50">
            Go Back
          </button>
          <button type="submit" disabled={isProcessing} className="flex-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 disabled:bg-blue-400">
            {isProcessing ? "Processing..." : `Confirm & Pay ₹${prevData.amount}`}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormStepTwo;