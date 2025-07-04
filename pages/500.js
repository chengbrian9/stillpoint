// pages/500.js
import React from 'react';
import Link from 'next/link';

export default function Custom500() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold mb-6" style={{ color: 'var(--color-blue)' }}>500 - Server Error</h1>
      <p className="text-xl mb-8">An error occurred on the server. Please try again later.</p>
      <Link href="/" className="px-6 py-3 rounded-md text-white font-medium" style={{ 
          backgroundColor: 'var(--color-blue)',
          borderBottom: '3px solid var(--color-gold)'
        }}>
        Return to Home
      </Link>
    </div>
  );
}
