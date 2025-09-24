import properties from '../data/properties.json';
import React from 'react';
import PropertyCard from '../components/PropertyCard';
import SEO from '../components/SEO';
import LuxuryButton from '../components/LuxuryButton';
import { motion } from 'framer-motion';
import { organizationSchema, localBusinessSchema, websiteSchema } from '../utils/structuredData';

export default function Home() {
  return (
    <motion.div 
      className="min-h-screen bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <SEO 
        title="Stillpoint Property Group"
        description="Premium mid-term and short-term housing solutions for corporate clients"
        ogImage="/Stillpoint Property Group Logo_B2.jpg"
        structuredData={[
          organizationSchema,
          localBusinessSchema,
          websiteSchema
        ]}
      />
      {/* Hero Section */}
      <motion.div 
        className="relative w-full bg-cover bg-center h-64 sm:h-80 md:h-96 lg:h-[500px] flex items-center justify-center mb-8 sm:mb-12"
        style={{
          backgroundImage: 'url("/Asset 2.webp")',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div 
          className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Stillpoint Property Group
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 max-w-readable mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Premium mid-term and short-term housing solutions for corporate clients
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <LuxuryButton 
              href="#listings"
              variant="secondary"
              size="medium"
            >
              View Listings
            </LuxuryButton>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Featured Properties Section */}
      <motion.div 
        className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12" 
        id="listings"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-[#0d3b66]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Premium Corporate Accommodations
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Explore our curated collection of fully furnished properties designed for extended business stays
          </motion.p>
        </motion.div>
        
        {/* Properties List */}
        <motion.div 
          className="space-y-8 lg:space-y-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {properties.map((property, idx) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.8 + (idx * 0.3), 
                ease: [0.25, 0.46, 0.45, 0.94] 
              }}
              className="max-w-6xl mx-auto"
            >
              <PropertyCard property={property} idx={idx} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Call to Action */}
      <motion.div 
        className="bg-white py-12 sm:py-16 lg:py-20 mt-8 sm:mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div 
          className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-[#0d3b66]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Corporate Clients: Your Home Away From Home
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-readable mx-auto text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            We offer fully furnished, professionally managed accommodations for stays of 30+ days. Perfect for relocations, extended business trips, and corporate projects.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <LuxuryButton 
              href="mailto:team@stillpointpropertygroup.com"
              variant="primary"
              size="large"
            >
              Contact Us Today
            </LuxuryButton>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
