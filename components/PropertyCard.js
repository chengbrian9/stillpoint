// components/PropertyCard.js
import { motion } from 'framer-motion';

export default function PropertyCard({ property, idx }) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1 }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-48 sm:h-52 md:h-48 lg:h-52 object-cover transition-transform duration-300 hover:scale-105" 
          loading="lazy"
        />
        {/* Optional: Add a gradient overlay for better text readability if needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Content Container */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 text-primary-blue line-clamp-2">
          {property.title}
        </h2>
        
        <p className="text-gray-700 text-sm sm:text-base flex-1 line-clamp-3 leading-relaxed mb-4">
          {property.description}
        </p>
        
        {/* Call to Action Button */}
        <button className="mt-4 w-full bg-primary-blue text-white py-2 px-4 rounded-md hover:bg-primary-blue/90 transition-colors duration-200 font-medium text-sm sm:text-base min-h-touch focus:outline-none">
          View Details
        </button>
      </div>
    </motion.div>
  );
}
