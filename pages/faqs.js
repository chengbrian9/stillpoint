// pages/faqs.js
import React, { useState } from 'react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = [
    {
      question: "What is the minimum length of stay for your corporate housing?",
      answer: "Our accommodations are designed for stays of 30 days or longer, making them perfect for corporate relocations, extended business trips, project-based assignments, and temporary housing needs. For specific situations requiring flexibility, please contact us to discuss your needs."
    },
    {
      question: "What's included in your corporate housing packages?",
      answer: "Our all-inclusive packages feature fully furnished accommodations with high-quality furniture, fully equipped kitchens, utilities, high-speed internet, premium cable TV, weekly professional cleaning, 24/7 maintenance support, and security monitoring. Everything is ready for you to simply arrive and begin living."
    },
    {
      question: "How does the check-in/check-out process work?",
      answer: "We offer a streamlined process with flexible check-in times. Upon booking, you'll receive detailed arrival instructions. Our team will meet you at the property for a brief orientation and to provide keys. For check-out, we conduct a simple walkthrough inspection after you've removed your personal belongings."
    },
    {
      question: "Can my company directly book multiple units for employees?",
      answer: "Absolutely! We work with many corporations to provide housing solutions for multiple employees. We can create customized corporate accounts with streamlined billing, reporting, and dedicated account management to simplify the process for your HR or mobility team."
    },
    {
      question: "What security measures are in place at your properties?",
      answer: "We implement 24-hour surveillance systems to monitor all entrances and common areas. Additionally, we have noise detection technology to ensure a peaceful environment, secure entry systems, and strict house rules. Our properties are regularly inspected to maintain safety standards."
    },
    {
      question: "How do I book a corporate housing unit with Stillpoint?",
      answer: "Simply contact us via email at team@stillpointproperty.com with your requirements including desired location, length of stay, number of bedrooms needed, and any special requests. We'll respond promptly with available options and guide you through our simple booking process."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center" style={{ color: 'var(--color-blue)' }}>
        Corporate Client FAQs
      </h1>
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-10">
          {faqs.map((faq, idx) => (
            <div key={idx} className="mb-4">
              <button
                className="w-full text-left p-4 rounded-lg flex justify-between items-center focus:outline-none"
                style={{ 
                  backgroundColor: openIndex === idx ? 'var(--color-blue)' : '#f8f8f8',
                  color: openIndex === idx ? 'white' : 'inherit',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => toggleFAQ(idx)}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <span>{openIndex === idx ? '−' : '+'}</span>
              </button>
              
              {openIndex === idx && (
                <div 
                  className="p-4 bg-gray-50 rounded-b-lg"
                  style={{ borderLeft: '3px solid var(--color-gold)' }}
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--color-blue)' }}>
            Still Have Questions?
          </h2>
          <p className="mb-6 text-gray-700">
            Our team is here to help with any additional questions you might have.
          </p>
          <a 
            href="mailto:team@stillpointproperty.com"
            className="inline-block px-6 py-3 rounded-md text-white font-medium"
            style={{ 
              backgroundColor: 'var(--color-blue)',
              borderBottom: '3px solid var(--color-gold)'
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
