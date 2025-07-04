import properties from '../data/properties.json';
import PropertyCard from '../components/PropertyCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="w-full bg-cover bg-center h-96 flex items-center justify-center mb-12"
        style={{
          backgroundImage: 'linear-gradient(rgba(13, 59, 102, 0.7), rgba(13, 59, 102, 0.7)), url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1500&q=80)',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}
      >
        <div className="text-center px-6">
          <h1 
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            style={{ fontFamily: "'AdamCGPro', 'Montserrat', Arial, sans-serif" }}
          >
            Stillpoint Corporate Housing
          </h1>
          <p className="text-xl text-white mb-8">Premium midterm and short-term housing solutions for corporate clients</p>
          <a 
            href="#listings" 
            className="px-8 py-3 rounded-md text-blue-900 font-medium bg-white hover:bg-gray-100 transition-colors"
            style={{ borderBottom: '3px solid var(--color-gold)' }}
          >
            View Listings
          </a>
        </div>
      </div>
      
      {/* Featured Properties Section */}
      <div className="container mx-auto px-6 py-8" id="listings">
        <h2 
          className="text-3xl font-bold mb-8 text-center"
          style={{ color: 'var(--color-blue)' }}
        >
          Featured Corporate Accommodations
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, idx) => (
            <PropertyCard key={property.id} property={property} idx={idx} />
          ))}
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-white py-16 mt-12">
        <div className="container mx-auto px-6 text-center">
          <h2 
            className="text-3xl font-bold mb-4"
            style={{ color: 'var(--color-blue)' }}
          >
            Corporate Clients: Your Home Away From Home
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
            We offer fully furnished, professionally managed accommodations for stays of 30+ days. Perfect for relocations, extended business trips, and corporate projects.
          </p>
          <a 
            href="mailto:team@stillpointproperty.com" 
            className="px-8 py-3 rounded-md text-white font-medium inline-block"
            style={{ 
              backgroundColor: 'var(--color-blue)',
              borderBottom: '3px solid var(--color-gold)'
            }}
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
}
