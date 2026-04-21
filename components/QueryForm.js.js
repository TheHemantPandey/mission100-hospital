import React from 'react';

const QueryForm = () => {
  return (
    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100">
      <div className="mb-8">
        <h2 className="text-3xl font-black text-gray-900 mb-2">Drop a Query</h2>
        <p className="text-gray-500">Have questions about Mission100? We're here to help you. [cite: 223]</p>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Your Name [cite: 219]</label>
            <input 
              type="text" 
              placeholder="Full Name"
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition-all"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Email Address [cite: 224]</label>
            <input 
              type="email" 
              placeholder="email@example.com"
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone Field */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Phone Number [cite: 225]</label>
            <input 
              type="tel" 
              placeholder="+91 00000 00000"
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition-all"
            />
          </div>

          {/* Subject Field */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Select Subject [cite: 226]</label>
            <select className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition-all appearance-none">
              <option>General Inquiry</option>
              <option>Heart Attack Prevention</option>
              <option>Mental Health & Stress</option>
              <option>Anti-Aging Science</option>
            </select>
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">How can we help you? [cite: 227]</label>
          <textarea 
            rows="4" 
            placeholder="Type your message here..."
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition-all resize-none"
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full py-5 bg-green-600 hover:bg-green-700 text-white font-black rounded-2xl transition-all shadow-lg shadow-green-200 uppercase tracking-widest"
        >
          Submit Query [cite: 228]
        </button>
      </form>
    </div>
  );
};

export default QueryForm;