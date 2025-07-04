// components/Footer.js
import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{
      background: 'var(--color-blue)',
      color: 'var(--color-white)',
      padding: '2rem 0',
      marginTop: '3rem',
      borderTop: '4px solid var(--color-gold)'
    }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'AdamCGPro', 'Montserrat', Arial, sans-serif" }}>
              Stillpoint Property
            </h3>
            <p className="text-sm opacity-80">
              Exceptional real estate services since {currentYear}
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="mb-2">Contact us</p>
            <a 
              href="mailto:team@stillpointproperty.com" 
              className="text-white hover:text-gold transition-colors"
              style={{ color: 'var(--color-white)', textDecoration: 'underline' }}
              onMouseOver={(e) => e.target.style.color = 'var(--color-gold)'}
              onMouseOut={(e) => e.target.style.color = 'var(--color-white)'}
            >
              team@stillpointproperty.com
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-blue-700 text-center text-sm opacity-70">
          <p>© {currentYear} Stillpoint Property. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
