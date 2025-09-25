// components/Footer.js
import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      className="bg-[#0d3b66] text-white py-8 sm:py-12 lg:py-16 mt-12 sm:mt-16 lg:mt-20 border-t-4 border-[#bf9e4b]"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 sm:gap-8">
          <div className="text-center sm:text-left">
            <h3 className="text-white text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3">
              Stillpoint Property Group
            </h3>
          </div>
          
          <div className="text-center sm:text-right">
            <p className="mb-2 sm:mb-3 text-sm sm:text-base font-medium">Contact us</p>
            <a 
              href="mailto:team@stillpointpropertygroup.com" 
              className="text-white hover:text-[#bf9e4b] transition-colors duration-200 text-sm sm:text-base underline focus:outline-none rounded px-1 py-1"
            >
              team@stillpointpropertygroup.com
            </a>
          </div>
        </div>
        
        {/* Additional Links Section */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-blue-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 text-sm">
              <a href="/about" className="hover:text-[#bf9e4b] transition-colors duration-200 focus:outline-none rounded px-1 py-1">
                About Us
              </a>
              <a href="/benefits" className="hover:text-[#bf9e4b] transition-colors duration-200 focus:outline-none rounded px-1 py-1">
                Corporate Benefits
              </a>
              <a href="/faqs" className="hover:text-[#bf9e4b] transition-colors duration-200 focus:outline-none rounded px-1 py-1">
                Client FAQs
              </a>
            </div>
            
            <p className="text-xs sm:text-sm opacity-70 text-center sm:text-right">
              © {currentYear} Stillpoint Property. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
