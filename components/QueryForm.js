"use client";

import React, { useState } from 'react';

const QueryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Custom validation for phone length (Optional but recommended)
    if (formData.phone.length !== 10) {
      setStatus('Please enter a valid 10-digit phone number.');
      return;
    }

    setStatus('Sending...');
    
    setTimeout(() => {
      console.log('Query Submitted:', formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <section className="flex justify-center items-center py-12 px-4 bg-slate-50 min-h-fit">
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 max-w-2xl w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#003366] tracking-tight">Drop a Query</h2>
          <p className="text-slate-500 mt-2 text-sm">
            Have questions about Mission100? We're here to help you.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number (10 digits) *"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{10}" // Only accepts exactly 10 digits
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              required // <--- THIS MAKES IT COMPULSORY
            />
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white text-slate-600"
              required
            >
              <option value="" disabled>Select Subject *</option>
              <option value="General">General</option>
              <option value="Inquiry">Inquiry</option>
              <option value="Consultation">Consultation</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="How can we help you? *"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
            required
          />

          <button 
            type="submit" 
            className="w-full bg-[#0056b3] hover:bg-[#003d7a] text-white font-semibold py-3.5 rounded-lg shadow-md transition-colors duration-300 transform active:scale-[0.98]"
          >
            {status === 'Sending...' ? 'Processing...' : 'Submit Query'}
          </button>
        </form>

        {status && (
          <div className={`mt-4 text-center p-3 rounded-md text-sm font-medium ${
            status.includes('successfully') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
          }`}>
            {status}
          </div>
        )}
      </div>
    </section>
  );
};

export default QueryForm;