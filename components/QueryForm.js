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
    setStatus('Sending...');
    
    // Simulate API Call
    setTimeout(() => {
      console.log('Query Submitted:', formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Clear status after 3 seconds
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
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white text-slate-600"
              required
            >
              <option value="" disabled>Select Subject</option>
              <option value="Admission">Admission Inquiry</option>
              <option value="Course">Course Details</option>
              <option value="Technical">Technical Support</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="How can we help you?"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
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
            status.includes('successfully') ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700'
          }`}>
            {status}
          </div>
        )}
      </div>
    </section>
  );
};

export default QueryForm;