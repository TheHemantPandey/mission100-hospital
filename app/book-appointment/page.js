import BookingForm from "@/components/Booking/BookingForm";

// --- METADATA (Google can read this) ---
export const metadata = {
  title: "Book an Appointment",
  description: "Schedule your health consultation or laboratory test at Mission 100 Hospital. Secure and easy online booking for patients in New Delhi.",
  keywords: ["Book Doctor Appointment", "Online Lab Test Booking", "Mission 100 Hospital Scheduling"],
};

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-2xl p-8">
        
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Schedule Your Visit</h1>
          <p className="text-gray-500 mt-2">Take the first step towards a 100-year healthy life.</p>
        </div>

        {/* This is your actual form logic */}
        <BookingForm />

      </div>
    </main>
  );
}