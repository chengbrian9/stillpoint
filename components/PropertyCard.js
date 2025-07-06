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
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        delay: idx * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for luxury feel
      }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 backdrop-blur-sm"
      style={{
        background: 'linear-gradient(145deg, #ffffff 0%, #fafafa 100%)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.8)'
      }}
    >
      <div className="flex flex-col lg:flex-row min-h-[400px] lg:min-h-[350px]">
        {/* Image Gallery Section */}
        <motion.div 
          className="relative lg:w-1/2 h-64 lg:h-auto group"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Mobile: Horizontal Scrolling Gallery with Peek */}
          <div className="lg:hidden relative w-full h-full">
            <div 
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide h-full"
              style={{
                scrollBehavior: 'smooth',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className="flex-none snap-center relative"
                  style={{
                    width: index === images.length - 1 ? '100%' : 'calc(100% - 60px)',
                    marginRight: index === images.length - 1 ? '0' : '12px'
                  }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <motion.img 
                    src={image} 
                    alt={`${property.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover rounded-2xl"
                    loading="lazy"
                    whileInView={{ scale: 1 }}
                    initial={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  
                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl" />
                  
                  {/* Image indicator dots */}
                  {index === 0 && images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {images.map((_, dotIndex) => (
                        <motion.div
                          key={dotIndex}
                          className="w-2 h-2 rounded-full bg-white/60 backdrop-blur-sm"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: dotIndex * 0.1 + 0.5 }}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* Peek indicator */}
            {images.length > 1 && (
              <motion.div 
                className="absolute right-2 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-white/40 to-white/80 rounded-full backdrop-blur-sm"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              />
            )}
            
            {/* Swipe hint */}
            <motion.div 
              className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg flex items-center space-x-2"
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
              style={{
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l4-4-4-4m6 8l4-4-4-4" />
              </svg>
              <span>Swipe</span>
            </motion.div>
          </div>
          
          {/* Desktop: Single Image with Hover Navigation */}
          <div className="hidden lg:block relative w-full h-full overflow-hidden rounded-l-2xl">
            <motion.img 
              key={currentImageIndex}
              src={images[currentImageIndex]} 
              alt={`${property.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ scale: 1.08 }}
            />
            
            {/* Elegant overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Desktop Navigation Arrows */}
            {images.length > 1 && (
              <>
                <motion.button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-xl opacity-0 group-hover:opacity-100 focus:outline-none"
                  aria-label="Previous image"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  <svg className="w-5 h-5 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
                <motion.button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-xl opacity-0 group-hover:opacity-100 focus:outline-none"
                  aria-label="Next image"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  initial={{ x: 10, opacity: 0 }}
                  animate={{ x: 0, opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  <svg className="w-5 h-5 text-primary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </>
            )}
            
            {/* Desktop Image Counter */}
            {images.length > 1 && (
              <motion.div 
                className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-lg"
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <motion.span
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentImageIndex + 1} / {images.length}
                </motion.span>
              </motion.div>
            )}
            
            {/* Desktop Thumbnail Strip */}
            {images.length > 1 && (
              <motion.div 
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 opacity-0 group-hover:opacity-100"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="flex space-x-3 overflow-x-auto scrollbar-hide pb-1">
                  {images.map((image, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-14 h-10 rounded-lg overflow-hidden border-2 transition-all duration-300 focus:outline-none relative group/thumb ${
                        index === currentImageIndex 
                          ? 'border-white shadow-lg scale-110' 
                          : 'border-white/40 hover:border-white/80 hover:scale-105'
                      }`}
                      whileHover={{ 
                        scale: index === currentImageIndex ? 1.1 : 1.05,
                        y: -2
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <img 
                        src={image} 
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover transition-all duration-300 group-hover/thumb:brightness-110"
                      />
                      {index === currentImageIndex && (
                        <motion.div
                          className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"
                          layoutId="activeThumb"
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
        
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
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { icon: 'users', label: 'Capacity', value: '4-6 Guests', delay: 0 },
                { icon: 'building', label: 'Size', value: '2,400 sq ft', delay: 0.1 },
                { icon: 'bed', label: 'Bedrooms', value: '3 Bedrooms', delay: 0.2 },
                { icon: 'calendar', label: 'Min Stay', value: '30+ Days', delay: 0.3 }
              ].map((detail, index) => (
                <motion.div 
                  key={detail.label}
                  className="flex items-center space-x-4 group/detail"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: detail.delay, duration: 0.5, ease: "easeOut" }}
                  whileHover={{ x: 4 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-primary-blue to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover/detail:shadow-xl"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      background: 'linear-gradient(135deg, #0d3b66 0%, #1e5f8b 100%)'
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {detail.icon === 'users' && (
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                    {detail.icon === 'building' && (
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    )}
                    {detail.icon === 'bed' && (
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 15h8" />
                      </svg>
                    )}
                    {detail.icon === 'calendar' && (
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    )}
                  </motion.div>
                  <div className="flex-1">
                    <motion.p 
                      className="text-sm text-gray-500 font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: detail.delay + 0.2 }}
                    >
                      {detail.label}
                    </motion.p>
                    <motion.p 
                      className="font-bold text-primary-blue text-lg group-hover/detail:text-blue-700 transition-colors duration-300"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: detail.delay + 0.3 }}
                    >
                      {detail.value}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Contact Section */}
          <motion.div 
            className="mt-auto pt-6 border-t border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.p 
              className="text-sm text-gray-600 mb-4 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Interested in this premium corporate housing? Let's discuss your needs.
            </motion.p>
            <motion.a 
              href="mailto:info@example.com" 
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-blue to-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 relative overflow-hidden"
              whileHover={{ 
                scale: 1.02, 
                y: -2,
                boxShadow: "0 25px 50px -12px rgba(13, 59, 102, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                initial={{ x: '-100%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              
              <motion.svg 
                className="w-5 h-5 mr-3 relative z-10" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </motion.svg>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Contact Us
              </span>
              
              {/* Arrow animation */}
              <motion.svg
                className="w-4 h-4 ml-2 relative z-10 opacity-0 group-hover:opacity-100"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ x: -10, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
