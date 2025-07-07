// pages/404.js
import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import LuxuryButton from '../components/LuxuryButton';

export default function Custom404() {
  return (
    <>
      <SEO 
        title="Page Not Found - 404 Error"
        description="The page you're looking for doesn't exist. Return to Stillpoint Property Group homepage to find premium corporate accommodations."
        ogImage="/Stillpoint Property Group Logo_B2.jpg"
        noindex={true}
        nofollow={true}
      />
      <motion.div 
        className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-center text-[#0d3b66]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            404 - Page Not Found
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-center max-w-readable"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            The page you are looking for does not exist.
          </motion.p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <LuxuryButton 
            href="/"
            variant="primary"
            size="medium"
          >
            Return to Home
          </LuxuryButton>
        </motion.div>
      </motion.div>
    </>
  );
}
