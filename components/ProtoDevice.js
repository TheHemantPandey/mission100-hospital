"use client";
import React, { useState } from "react";

const ProtoShowcase = () => {
  // State to control whether the thumbnail or the video is showing
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="w-full font-sans">
      
      {/* HEADER SECTION */}
      <div className="w-full text-center pt-10 pb-8 bg-slate-50 px-6">
        <div className="inline-block px-5 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-bold tracking-wider uppercase w-max mb-6 shadow-sm ring-1 ring-emerald-200">
          Mission 100 Innovation
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          Our Advanced <span className="text-emerald-600">Emergency Kit</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          The future of rapid medical intervention. We are bringing hospital-grade first aid directly to the scene of an accident before the ambulance even arrives.
        </p>
      </div>

      {/* SECTION 1: Introduction & Video Embed */}
      <section className="relative w-full pb-16 lg:pb-24 flex flex-col lg:flex-row items-center justify-center p-6 lg:px-16 bg-slate-50 gap-10">
        
        {/* Text Content */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center space-y-6 z-10">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-center text-slate-900 leading-tight">
            Meet <span className="text-emerald-600">PROTO</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            An autonomous rapid-response unit designed to provide immediate
            first aid and medical services during critical emergencies and
            accident conditions. When every second counts, PROTO is already on
            the way.
          </p>
          <div className="pt-4">
            <ul className="space-y-4 text-slate-800 font-semibold text-lg">
              <li className="flex items-center gap-4 bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                100% Autonomous Navigation
              </li>
              <li className="flex items-center gap-4 bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                Immediate First-Aid Deployment
              </li>
              <li className="flex items-center gap-4 bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                All-Terrain Accessibility
              </li>
            </ul>
          </div>
        </div>

        {/* Video Embed Container with Thumbnail Preview Logic */}
        <div className="w-full lg:w-3/5 flex justify-center items-center">
          <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-white/30 backdrop-blur-lg border border-white/40 p-2 relative">
            
            {!isVideoPlaying ? (
              /* THUMBNAIL STATE: Shows image and play button */
              <div 
                className="relative w-full h-full rounded-xl overflow-hidden cursor-pointer group bg-slate-800"
                onClick={() => setIsVideoPlaying(true)}
              >
                {/* Make sure you put a picture named proto-thumbnail.jpg in your public folder! */}
                <img 
                  src="/proto-thumbnail.jpg" 
                  alt="PROTO Medical Device Thumbnail" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                
                {/* Dark gradient overlay so the play button stands out */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-600/90 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(5,150,105,0.6)] transform group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10 text-white ml-1">
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              /* VIDEO STATE: Shows Google Drive iframe ONLY when clicked */
              <iframe
                className="w-full h-full rounded-xl bg-slate-900"
                src="https://drive.google.com/file/d/1aJpTMSoUyBk6BBlhq8faJwHvRarZiYt5/preview?autoplay=1"
                title="PROTO Medical Device Concept"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            )}

          </div>
        </div>
      </section>

      {/* SECTION 2: Features Grid */}
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center p-6 lg:p-16 bg-white border-t border-slate-100">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl">
          <h3 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6">
            Equipped to <span className="text-emerald-600">Save Lives</span>
          </h3>
          <p className="text-slate-600 text-lg lg:text-xl">
            PROTO houses state-of-the-art medical and navigational technology within its rugged exterior, ready to deploy the moment it arrives at the scene.
          </p>
        </div>

        {/* 2x2 Grid for Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
          
          {/* Feature 1: Smart Sensors */}
          <div className="bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-lg shadow-slate-200/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-100 transition-all duration-300 flex flex-col lg:flex-row items-start gap-6">
            <div className="bg-emerald-100 p-4 rounded-2xl text-emerald-600 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-3 text-slate-900">Smart Sensors</h4>
              <p className="text-slate-600 leading-relaxed">
                Equipped with high-precision radar, 360-degree cameras, and emergency sirens to safely navigate through traffic and locate patients in complex terrains.
              </p>
            </div>
          </div>

          {/* Feature 2: Scout Drone */}
          <div className="bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-lg shadow-slate-200/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-100 transition-all duration-300 flex flex-col lg:flex-row items-start gap-6">
            <div className="bg-emerald-100 p-4 rounded-2xl text-emerald-600 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 14 9-5-9-5-9 5 9 5z"/><path d="m12 14 9-5-9-5-9 5 9 5z"/><path d="m12 21 9-5-9-5-9 5 9 5z"/>
              </svg>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-3 text-slate-900">Scout Drone</h4>
              <p className="text-slate-600 leading-relaxed">
                An integrated quadcopter drone can be deployed instantly to assess the emergency situation from above or deliver lightweight, critical supplies ahead of the main unit.
              </p>
            </div>
          </div>

          {/* Feature 3: Medical Bay */}
          <div className="bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-lg shadow-slate-200/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-100 transition-all duration-300 flex flex-col lg:flex-row items-start gap-6">
            <div className="bg-emerald-100 p-4 rounded-2xl text-emerald-600 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><path d="M9 14h6"/><path d="M12 11v6"/>
              </svg>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-3 text-slate-900">Medical Bay</h4>
              <p className="text-slate-600 leading-relaxed">
                Automated internal compartments safely store essential life-saving medicines, bandages, and a comprehensive first-aid kit, completely protected from external elements.
              </p>
            </div>
          </div>

          {/* Feature 4: Telemedicine */}
          <div className="bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-lg shadow-slate-200/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-100 transition-all duration-300 flex flex-col lg:flex-row items-start gap-6">
            <div className="bg-emerald-100 p-4 rounded-2xl text-emerald-600 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="24" x="3" y="0" rx="2" ry="2" transform="rotate(90 12 12)"/><path d="M3 12h5l1.5-3 3 6 1.5-3h5"/>
              </svg>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-3 text-slate-900">Telemedicine</h4>
              <p className="text-slate-600 leading-relaxed">
                A built-in interactive tablet automatically connects bystanders with live doctors, allowing for real-time guidance through life-saving CPR or immediate first-aid procedures.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ProtoShowcase;