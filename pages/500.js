// pages/500.js
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function Custom500() {
  return (
    <>
      <SEO 
        title="Server Error - 500 Error"
        description="We're experiencing technical difficulties. Please try again later or contact Stillpoint Corporate Housing support."
        noindex={true}
        nofollow={true}
      />
      <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-center text-primary-blue">500 - Server Error</h1>
      <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-center max-w-readable">An error occurred on the server. Please try again later.</p>
      <Link 
        href="/" 
        className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-md text-white font-medium bg-primary-blue hover:bg-primary-blue/90 transition-colors duration-200 text-sm sm:text-base min-h-touch focus:outline-none"
        style={{ borderBottom: '3px solid var(--color-gold)' }}
      >
        Return to Home
      </Link>
      </div>
    </>
  );
}
