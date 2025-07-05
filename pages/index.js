import properties from '../data/properties.json';
import React from 'react';
import PropertyCard from '../components/PropertyCard';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { organizationSchema, localBusinessSchema, websiteSchema } from '../utils/structuredData';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Stillpoint Corporate Housing"
        description="Premium midterm and short-term housing solutions for corporate clients"
        structuredData={[
          organizationSchema,
          localBusinessSchema,
          websiteSchema
        ]}
      />
      {/* Hero Section */}
      <div 
        className="relative w-full bg-cover bg-center h-64 sm:h-80 md:h-96 lg:h-[500px] flex items-center justify-center mb-8 sm:mb-12"
        style={{
          backgroundImage: 'url("/Asset 2.webp")',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}
      >
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
            Stillpoint Corporate Housing
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 max-w-readable mx-auto leading-relaxed">
            Premium midterm and short-term housing solutions for corporate clients
          </p>
          <a 
            href="#listings" 
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-md text-primary-blue font-medium bg-white hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base min-h-touch focus:outline-none"
            style={{ borderBottom: '3px solid var(--color-gold)' }}
          >
            View Listings
          </a>
        </div>
      </div>
      
      {/* Featured Properties Section */}
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12" id="listings">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 lg:mb-12 text-center text-primary-blue">
          Featured Corporate Accommodations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {properties.map((property, idx) => (
            <PropertyCard key={property.id} property={property} idx={idx} />
          ))}
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-white py-12 sm:py-16 lg:py-20 mt-8 sm:mt-12">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-primary-blue">
            Corporate Clients: Your Home Away From Home
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-readable mx-auto text-gray-700 leading-relaxed">
            We offer fully furnished, professionally managed accommodations for stays of 30+ days. Perfect for relocations, extended business trips, and corporate projects.
          </p>
          <a 
            href="mailto:team@stillpointproperty.com" 
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-md text-white font-medium bg-primary-blue hover:bg-primary-blue/90 transition-colors duration-200 text-sm sm:text-base min-h-touch focus:outline-none"
            style={{ borderBottom: '3px solid var(--color-gold)' }}
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
}
