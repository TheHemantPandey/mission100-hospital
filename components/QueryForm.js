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

  const handleSubmit = async (e) => {
    // PREVENTS REFRESH & HYDRATION ERRORS
    e.preventDefault();
    
    if (formData.phone.length !== 10) {
      setStatus('Please enter a valid 10-digit phone number.');
      return;
    }

    setStatus('Sending...');

    try {
      // Connects to the NEW general-query route
      const response = await fetch('/api/general-query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('Failed to send. Please check your connection.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <section className="flex justify-center items-center py-12 px-4 bg-slate-50">
      {/* PC: Fixed 1100px width and mx-32
          Mobile: Full width and auto height */}
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 w-full h-auto lg:w-275 lg:mx-32">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003366]">Drop a Query</h2>
          <p className="text-slate-500 mt-2">Have questions about Mission100? We're here to help.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="name" placeholder="Name *" value={formData.name} onChange={handleChange} className="p-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500" required />
            <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} className="p-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="tel" name="phone" placeholder="Phone *" value={formData.phone} onChange={handleChange} pattern="[0-9]{10}" className="p-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500" required />
            <select name="subject" value={formData.subject} onChange={handleChange} className="p-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 bg-white" required>
              <option value="" disabled>Select Subject *</option>
              <option value="General">General Inquiry</option>
              <option value="Consultation">Health Consultation</option>
              <option value="Feedback">Website Feedback</option>
            </select>
          </div>

          <textarea name="message" placeholder="How can we help? *" value={formData.message} onChange={handleChange} rows="4" className="p-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 resize-none" required />

          <button type="submit" disabled={status === 'Sending...'} className="w-full bg-[#0056b3] text-white font-bold py-4 rounded-xl hover:bg-[#003d7a] transition-all active:scale-95 disabled:bg-slate-400">
            {status === 'Sending...' ? 'Sending...' : 'Submit Query'}
          </button>
        </form>

        {status && (
          <div className={`mt-4 text-center p-3 rounded-xl font-bold ${status.includes('successfully') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            {status}
          </div>
        )}
      </div>
    </section>
  );
};

export default QueryForm;