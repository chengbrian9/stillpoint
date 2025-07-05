// components/PropertyCard.js
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PropertyCard({ property, idx }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = property.gallery || [property.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1 }}
    >
      <div className="flex flex-col lg:flex-row min-h-[400px] lg:min-h-[350px]">
        {/* Image Gallery Section */}
        <div className="relative lg:w-1/2 h-64 lg:h-auto">
          <div className="relative w-full h-full overflow-hidden">
            <img 
              src={images[currentImageIndex]} 
              alt={`${property.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
            
            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200 focus:outline-none"
                  aria-label="Previous image"
                >
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200 focus:outline-none"
                  aria-label="Next image"
                >
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
            
            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute bottom-3 right-3 bg-black/60 text-white px-2 py-1 rounded-full text-xs">
                {currentImageIndex + 1} / {images.length}
              </div>
            )}
          </div>
          
          {/* Thumbnail Strip */}
          {images.length > 1 && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
              <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-12 h-8 rounded overflow-hidden border-2 transition-all duration-200 focus:outline-none ${
                      index === currentImageIndex ? 'border-white' : 'border-white/50 hover:border-white/80'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Content Section */}
        <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-primary-blue">
              {property.title}
            </h2>
            
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-6">
              {property.description}
            </p>
            
            {/* Property Details with Icons */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="bg-primary-blue/10 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Capacity</p>
                  <p className="font-semibold text-gray-900">4-6 Guests</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-primary-blue/10 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Size</p>
                  <p className="font-semibold text-gray-900">2,400 sq ft</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-primary-blue/10 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M10.5 3L12 2l1.5 1H21l-3 6v2a1 1 0 01-1 1H7a1 1 0 01-1-1V9L3 3h7.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Bedrooms</p>
                  <p className="font-semibold text-gray-900">3 Bedrooms</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-primary-blue/10 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Min Stay</p>
                  <p className="font-semibold text-gray-900">30+ Days</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="border-t pt-6">
            <p className="text-sm text-gray-600 mb-3">
              Ready to book your extended stay?
            </p>
            <a 
              href="mailto:team@stillpointproperty.com" 
              className="inline-flex items-center px-6 py-3 rounded-lg text-white font-medium bg-primary-blue hover:bg-primary-blue/90 transition-all duration-200 focus:outline-none group"
              style={{ borderBottom: '3px solid var(--color-gold)' }}
            >
              <span>Contact Us</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
