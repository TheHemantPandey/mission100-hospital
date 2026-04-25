import React from "react";
import Link from "next/link";

const Brochure = () => {
  return (
    <section className="py-12 px-4">
      {/* FIXED: Added mx-auto and max-w-7xl to keep it centered on large windows while fitting mobile screens */}
      <div className="bg-green-600 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
          Ready to start your journey to Mission100?
        </h2>
        <p className="mb-10 text-green-100 text-base md:text-xl max-w-2xl mx-auto">
          Take the first step toward a healthier century. Book an appointment or download our full service guide today.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* Navigation to Booking Page */}
          <Link 
            href="/book-appointment"
            className="w-full sm:w-fit bg-white text-green-700 px-10 py-4 rounded-full font-bold hover:bg-green-50 transition-all active:scale-95 shadow-md"
          >
            Book Appointment
          </Link>

          {/* Download PDF Link */}
          <a 
            href="/mission100-brochure.pdf" 
            download="Mission100_Hospital_Brochure.pdf"
            className="w-full sm:w-fit bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-green-700 transition-all active:scale-95"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
};

export default Brochure;