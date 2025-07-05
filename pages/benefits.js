// pages/benefits.js
import React from 'react';
import SEO from '../components/SEO';
import { serviceSchema, generateBreadcrumbSchema } from '../utils/structuredData';

export default function Benefits() {
  const benefits = [
    {
      title: 'Flexible Stay Durations',
      description: 'Our accommodations are available for stays of 30+ days, perfect for relocations, extended business trips, and corporate projects.',
      icon: '📅'
    },
    {
      title: 'Fully Furnished & Equipped',
      description: 'Every property comes fully furnished with high-quality furniture, fully equipped kitchens, and all the amenities you need to feel at home.',
      icon: '🏠'
    },
    {
      title: 'Professional Weekly Cleaning',
      description: 'Our standard protocol includes professional cleaning services once per week, keeping your living space pristine throughout your stay.',
      icon: '✨'
    },
    {
      title: '24/7 Security & Support',
      description: 'We implement 24-hour surveillance for your safety and peace of mind, plus round-the-clock support for any issues that may arise.',
      icon: '🔒'
    },
    {
      title: 'Immediate Maintenance Response',
      description: 'Our 24-hour maintenance team responds quickly to any issues, ensuring your comfort and convenience are never compromised.',
      icon: '🔧'
    },
    {
      title: 'All-Inclusive Pricing',
      description: 'Our rates include utilities, high-speed internet, premium cable, and all the services you need for a hassle-free stay.',
      icon: '💼'
    }
  ];

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Corporate Benefits', url: '/benefits' }
  ];

  return (
    <>
      <SEO 
        title="Corporate Benefits - Why Choose Stillpoint Housing"
        description="Discover the benefits of choosing Stillpoint Corporate Housing for your extended business stays. All-inclusive pricing, fully furnished accommodations, and professional management services."
        canonicalUrl="/benefits"
        keywords="corporate housing benefits, extended stay advantages, business travel accommodations, furnished corporate rentals"
        structuredData={[
          serviceSchema,
          generateBreadcrumbSchema(breadcrumbs)
        ]}
      />
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center text-primary-blue">
        Why Corporate Clients Choose Stillpoint
      </h1>
      
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mb-8 sm:mb-10">
          <p className="text-base sm:text-lg text-center mb-8 sm:mb-10 text-gray-700 leading-relaxed">
            At Stillpoint Corporate Housing, we specialize in midterm and short-term accommodations for corporate clients.
            Here's why businesses trust us for their extended stay needs:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className="p-4 sm:p-6 rounded-lg transition-all duration-300 hover:shadow-md border-l-4 border-primary-gold"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{benefit.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-primary-blue">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center" style={{ color: 'var(--color-blue)' }}>
            Our Commitment to Corporate Clients
          </h2>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <p className="mb-4 text-gray-700">
                Our goal is to provide you with a seamless living experience during your extended stay. We understand that 
                business travel can be stressful, which is why we've designed our accommodations to feel like home from the moment you arrive.
              </p>
              <p className="mb-4 text-gray-700">
                We maintain strict house rules and 24-hour surveillance to ensure a peaceful, professional environment. 
                Our properties are strategically located near business centers, offering convenience without sacrificing comfort.
              </p>
              <p className="text-gray-700">
                With Stillpoint, you can focus on your work while we handle everything else. From weekly cleaning to immediate 
                maintenance response, we ensure your corporate housing experience exceeds expectations.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" 
                alt="Team meeting" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
