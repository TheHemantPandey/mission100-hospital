import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green border-t border-gray-100 mt-20">
      <div className="mx-auto w-full max-w-7xl px-4 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12">
          
          {/* Brand Identity Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
               <div className="w-9 h-9 bg-green-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20">
                <span className="text-white font-bold text-sm">M1</span>
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-gray-900">
                Mission<span className="text-green-600">100</span>
              </span>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed mb-6">
              Empowering your journey toward a 100-year life through preventive healthcare, 
              Ayurveda, and modern vitality science.
            </p>
            <div className="flex space-x-4">
               {/* Social Icons with custom hover colors */}
               <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-green-50 hover:text-green-600 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"/></svg>
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-green-50 hover:text-green-600 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
               </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase tracking-widest">
              Pages
            </h2>
            <ul className="text-gray-600 space-y-4 font-medium">
              <li><a href="#" className="hover:text-green-600 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* News & Social */}
          <div>
            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase tracking-widest">
              Social
            </h2>
            <ul className="text-gray-600 space-y-4 font-medium">
              <li><a href="#" className="hover:text-green-600 transition-colors">News and Media</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Facebook</a></li>
            </ul>
          </div>

          {/* Contact Details from Image */}
          <div>
            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase tracking-widest">
              Contact Us
            </h2>
            <div className="text-gray-600 space-y-5 text-sm leading-relaxed">
              <div>
                <p className="font-bold text-gray-900 mb-1">Email:</p>
                <a href="mailto:contact@mission200.in" className="hover:text-green-600 transition-colors">
                  contact@mission200.in
                </a>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Address:</p>
                <p>
                  Metroplex East Tower, Office No. 147,<br />
                  Laxmi Nagar, New Delhi 110092
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-100 py-8 flex flex-col md:flex-row items-center justify-between">
          <span className="text-sm text-gray-500">
            © 2026 <span className="font-semibold">Mission100™</span>. All Rights Reserved.
          </span>
          <p className="text-xs text-gray-400 mt-2 md:mt-0 italic">
            Revolutionizing the way we think about aging.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;