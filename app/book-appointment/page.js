import FormStepOne from "@/components/Booking/FormStepOne";

export const metadata = {
  title: "Book Heart Attack Prevention Test | Mission 100 Hospital",
  description: "Secure your appointment for a Heart Attack Prevention Test at Mission 100 Hospital. Fast booking and secure payment.",
};

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center py-16 px-4">
      <div className="max-w-3xl w-full bg-white shadow-2xl rounded-3xl p-10 border border-slate-100">
        
        <div className="mb-10 text-center">
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Finalize Your Appointment</h1>
        </div>

        <FormStepOne />

      </div>
    </main>
  );
}