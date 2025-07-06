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
            Stillpoint Property Group
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 max-w-readable mx-auto leading-relaxed">
            Premium mid-term and short-term housing solutions for corporate clients
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
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-primary-blue">
            Featured Corporate Accommodation
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our premium furnished housing solution designed for extended business stays
          </p>
        </div>
        
        {/* Single Property Showcase */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            {properties.map((property, idx) => (
              <PropertyCard key={property.id} property={property} idx={idx} />
            ))}
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-sm sm:text-base text-gray-500 mb-4">
            More properties coming soon
          </p>
          <a 
            href="mailto:team@stillpointproperty.com" 
            className="inline-flex items-center text-primary-blue hover:text-primary-blue/80 font-medium transition-colors duration-200"
          >
            <span>Contact us for custom housing solutions</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
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
