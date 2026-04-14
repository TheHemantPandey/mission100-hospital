import React from 'react';

const Mission100HeroCard = () => {
  const articleData = {
    title: "Mission 100: Advanced Heart Attack Prevention & Health Optimization",
    // Expanded description to take up more vertical space
    description: "Our 'Mission 100' initiative is a comprehensive preventive healthcare framework designed specifically for adults. We focus on early detection of critical risks, such as heart attacks, while providing specialized neuro-care and mental health support to preserve your long-term quality of life. By integrating modern diagnostics like ECG with holistic practices like Yoga and Ayurveda, we help you navigate the subtle shifts in your health before they become emergencies.",
    category: "Adult Health & Wellness",
    tagline: "LIVE 100 YEARS", 
    imageUrl: "https://www.venkateshwarhospitals.com/blog/wp-content/uploads/2020/03/Best-Cardiac-Surgeons-in-Delhi-Venkateshwar-Hospital.jpg",
  };

  // Content pulled directly from your PDF [cite: 9, 12, 13, 14, 23, 31, 35]
  const services = [
    "Heart Attack Prevention (Priority Focus)",
    "Stress & Mental Health Management",
    "Integrated Yoga & Ayurveda Consultation",
    "Happiness Measurement & Body Deficiency Checks"
  ];

  return (
    /* Increased max-width and min-height to help cover the screen */
    <div className="max-w-7xl mx-auto my-8 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row min-h-[60vh]">
      
      {/* Left Brand Accent Bar - Using Light Green from PDF [cite: 56] */}
      <div className="w-2 bg-green-500 hidden md:block"></div>

      {/* Image Section - Takes up 40% width for better balance */}
      <div className="md:w-2/5 shrink-0 relative">
        <img 
          src={articleData.imageUrl} 
          alt="Cardiac Specialist" 
          className="h-full w-full object-cover"
        />
        {/* Overlay Badge */}
        <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
          New Mission
        </div>
      </div>

      {/* Content Section - Flex grow ensures it fills the container */}
      <div className="p-10 flex flex-col justify-between md:w-3/5">
        <div>
          {/* Tagline [cite: 55] */}
          <p className="text-green-600 font-extrabold text-sm tracking-widest mb-3 uppercase">
            {articleData.tagline}
          </p>

          <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
            {articleData.title}
          </h2>
          
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            {articleData.description}
          </p>

          {/* New Expanded Section: Services & Focus */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {services.map((service, index) => (
              <div key={index} className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                <span className="text-gray-700 font-medium text-sm">{service}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center text-gray-500 font-medium mb-6 border-t pt-4">
            <span className="bg-gray-100 px-3 py-1 rounded">{articleData.category}</span>
            <span className="mx-3 text-gray-300">|</span>
            <span className="italic font-normal">Preventive Care Unit</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-lg transition-all transform hover:scale-105 shadow-lg">
            Check Heart Risk Now [cite: 37]
          </button>
          <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold py-4 px-10 rounded-lg transition-all">
            Download Brochure [cite: 63]
          </button>
        </div>
       
      </div>
    </div>
  );
};

export default Mission100HeroCard;