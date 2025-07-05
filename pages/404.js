// pages/404.js
import React from 'react';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-center text-primary-blue">404 - Page Not Found</h1>
      <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-center max-w-readable">The page you are looking for does not exist.</p>
      <Link 
        href="/" 
        className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-md text-white font-medium bg-primary-blue hover:bg-primary-blue/90 transition-colors duration-200 text-sm sm:text-base min-h-touch focus:outline-none focus:ring-2 focus:ring-primary-gold focus:ring-offset-2"
        style={{ borderBottom: '3px solid var(--color-gold)' }}
      >
        Return to Home
      </Link>
    </div>
  );
}
