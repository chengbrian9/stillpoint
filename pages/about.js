// pages/about.js
import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { organizationSchema, generateBreadcrumbSchema } from '../utils/structuredData';

export default function About() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' }
  ];

  return (
    <>
      <SEO 
        title="About Us - Premium Corporate Housing Solutions"
        description="Learn about Stillpoint Property Group's mission to provide exceptional mid-term and short-term accommodations for corporate clients with professional management and all-inclusive pricing."
        canonicalUrl="/about"
        ogImage="/Stillpoint Property Group Logo_B2.jpg"
        structuredData={[
          organizationSchema,
          generateBreadcrumbSchema(breadcrumbs)
        ]}
      />
      <motion.div 
        className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1 
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center text-[#0d3b66]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Where Corporate Serenity Meets Refined Hospitality
        </motion.h1>
        
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          whileHover={{ boxShadow: "0 25px 50px -12px rgba(13, 59, 102, 0.15)" }}
        >
          <motion.h2 
            className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-[#0d3b66]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Our Story
          </motion.h2>
          <motion.p 
            className="mb-6 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Stillpoint Property Group is your haven in the fast-paced world of business, where seamless professionalism and heartfelt comfort converge. Each accommodation is meticulously crafted to foster productivity and relaxation—merging the sophistication of executive living with the warmth of a personal retreat, delivering an unparalleled experience for corporate travelers seeking both efficiency and elegance.
          </motion.p>
          
          <motion.div 
            className="mb-8 rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80" 
              alt="Team meeting" 
              className="w-full h-64 object-cover"
            />
          </motion.div>
          
          <motion.h2 
            className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-[#0d3b66]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Our Mission
          </motion.h2>
          <motion.p 
            className="mb-6 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            At the heart of our mission is a dedication to transforming extended stays into opportunities for growth and rejuvenation. We curate spaces that balance the demands of business with touches of refined charm, ensuring every guest feels supported, inspired, and truly at home in an environment designed for success and serenity.
          </motion.p>
        </motion.div>
      </motion.div>
      </motion.div>
    </>
  );
}
