// pages/about.js
import React from 'react';

export default function About() {
  return (
    <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center text-primary-blue">
          About Stillpoint Corporate Housing
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-primary-blue">Our Story</h2>
          <p className="mb-6 text-gray-700">
            Founded in 2020, Stillpoint Corporate Housing has established itself as a premier provider of midterm and short-term
            accommodations for corporate clients. We specialize in stays of 30+ days, offering fully furnished, professionally
            maintained properties that provide all the comforts of home with the convenience of a hotel.
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
            At Stillpoint Corporate Housing, our mission is to provide corporate clients with exceptional accommodations that truly feel like home.
            We understand the challenges of extended business travel and relocations, which is why we've created living spaces that combine
            comfort, convenience, and professional management to ensure a seamless experience for every client.
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
  );
}
