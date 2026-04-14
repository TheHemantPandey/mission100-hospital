import React from "react";

const Brochure = () => {
  return (
    <div className="bg-green-600 rounded-3xl p-10 text-center text-white shadow-xl">
      <h2 className="text-3xl font-bold mb-4">
        Ready to start your journey to Mission100?
      </h2>
      <p className="mb-8 text-green-100 text-lg">
        Book an appointment or download our services.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-white text-green-700 px-8 py-3 rounded-full font-bold hover:bg-green-50 transition-colors">
          Book Appointment
        </button>
        <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-green-700 transition-all">
          Download Brochure
        </button>
      </div>
    </div>
  );
};

export default Brochure;
