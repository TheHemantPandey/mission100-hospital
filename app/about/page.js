import React from 'react';
import { Target, Users, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">
            About <span className="text-green-600">Mission 100</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            We are dedicated to revolutionizing healthcare by connecting patients 
            with India's top specialists. Our mission is to ensure quality medical 
            consultation is accessible to everyone, everywhere.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <Target className="text-green-600 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <p className="text-slate-500 text-sm">To increase the average lifespan by providing early and accurate diagnosis.</p>
          </div>
          
          <div className="p-8 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <Users className="text-green-600 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Expert Team</h3>
            <p className="text-slate-500 text-sm">A curated network of doctors from India's most prestigious medical institutions.</p>
          </div>

          <div className="p-8 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <ShieldCheck className="text-green-600 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Secure Care</h3>
            <p className="text-slate-500 text-sm">Your health data is protected with enterprise-grade security protocols.</p>
          </div>
        </div>
      </section>
    </div>
  );
}