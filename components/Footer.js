// components/Footer.js
import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      className="bg-primary-blue text-white py-8 sm:py-12 lg:py-16 mt-12 sm:mt-16 lg:mt-20 border-t-4 border-primary-gold"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 sm:gap-8">
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3">
              Stillpoint Property
            </h3>
            <p className="text-sm sm:text-base opacity-80 leading-relaxed">
              Exceptional corporate housing services
            </p>
          </div>
          
          <div className="text-center sm:text-right">
            <p className="mb-2 sm:mb-3 text-sm sm:text-base font-medium">Contact us</p>
            <a 
              href="mailto:team@stillpointproperty.com" 
              className="text-white hover:text-primary-gold transition-colors duration-200 text-sm sm:text-base underline focus:outline-none focus:ring-2 focus:ring-primary-gold focus:ring-offset-2 focus:ring-offset-primary-blue rounded px-1 py-1"
            >
              team@stillpointproperty.com
            </a>
          </div>
        </div>
        
        {/* Additional Links Section */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-blue-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 text-sm">
              <a href="/about" className="hover:text-primary-gold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-gold focus:ring-offset-2 focus:ring-offset-primary-blue rounded px-1 py-1">
                About Us
              </a>
              <a href="/benefits" className="hover:text-primary-gold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-gold focus:ring-offset-2 focus:ring-offset-primary-blue rounded px-1 py-1">
                Corporate Benefits
              </a>
              <a href="/faqs" className="hover:text-primary-gold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-gold focus:ring-offset-2 focus:ring-offset-primary-blue rounded px-1 py-1">
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
