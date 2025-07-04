// components/PropertyCard.js
import { motion } from 'framer-motion';

export default function PropertyCard({ property, idx }) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1 }}
    >
      <img src={property.image} alt={property.title} className="w-full h-40 object-cover rounded mb-4" />
      <h2 className="text-2xl font-semibold mb-2">{property.title}</h2>
      <p className="text-gray-600 mb-2">{property.location}</p>
      <p className="text-blue-700 font-bold text-lg mb-4">${property.price}</p>
      <p className="text-gray-700">{property.description}</p>
    </motion.div>
  );
}
