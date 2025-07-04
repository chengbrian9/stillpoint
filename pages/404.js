// pages/404.js
import React from 'react';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold mb-6" style={{ color: 'var(--color-blue)' }}>404 - Page Not Found</h1>
      <p className="text-xl mb-8">The page you are looking for does not exist.</p>
      <Link href="/" className="px-6 py-3 rounded-md text-white font-medium" style={{ 
          backgroundColor: 'var(--color-blue)',
          borderBottom: '3px solid var(--color-gold)'
        }}>
          Return to Home
      </Link>
    </div>
  );
}
