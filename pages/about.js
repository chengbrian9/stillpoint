// pages/about.js
import React from 'react';
import SEO from '../components/SEO';
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
        description="Learn about Stillpoint Corporate Housing's mission to provide exceptional midterm and short-term accommodations for corporate clients with professional management and all-inclusive pricing."
        canonicalUrl="/about"
        structuredData={[
          organizationSchema,
          generateBreadcrumbSchema(breadcrumbs)
        ]}
      />
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center text-primary-blue">
          Where Corporate Serenity Meets Refined Hospitality
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-primary-blue">Our Story</h2>
          <p className="mb-6 text-gray-700">
            Stillpoint Corporate Housing is your haven in the fast-paced world of business, where seamless professionalism and heartfelt comfort converge. Each accommodation is meticulously crafted to foster productivity and relaxation—merging the sophistication of executive living with the warmth of a personal retreat, delivering an unparalleled experience for corporate travelers seeking both efficiency and elegance.
          </p>
          
          <div className="mb-8 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80" 
              alt="Team meeting" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-primary-blue">Our Mission</h2>
          <p className="mb-6 text-gray-700">
            At the heart of our mission is a dedication to transforming extended stays into opportunities for growth and rejuvenation. We curate spaces that balance the demands of business with touches of refined charm, ensuring every guest feels supported, inspired, and truly at home in an environment designed for success and serenity.
          </p>
          
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-primary-blue">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { name: 'Jane Smith', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80' },
              { name: 'Michael Johnson', role: 'Corporate Relations Director', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=300&q=80' },
              { name: 'Sarah Williams', role: 'Guest Experience Manager', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80' }
            ].map((member, idx) => (
              <div key={idx} className="text-center">
                <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg text-primary-blue">{member.name}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
