// pages/faqs.js
import React, { useState } from 'react';
import SEO from '../components/SEO';
import { faqSchema, generateBreadcrumbSchema } from '../utils/structuredData';

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

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Client FAQs', url: '/faqs' }
  ];

  return (
    <>
      <SEO 
        title="Corporate Client FAQs - Stillpoint Housing Questions"
        description="Find answers to frequently asked questions about Stillpoint Corporate Housing services, booking process, amenities, and corporate account management."
        canonicalUrl="/faqs"
        keywords="corporate housing FAQ, extended stay questions, business travel housing, corporate accommodation answers"
        structuredData={[
          faqSchema,
          generateBreadcrumbSchema(breadcrumbs)
        ]}
      />
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center text-primary-blue">
        Corporate Client FAQs
      </h1>
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mb-8 sm:mb-10">
          {faqs.map((faq, idx) => (
            <div key={idx} className="mb-4">
              <button
                className={`w-full text-left p-3 sm:p-4 rounded-lg flex justify-between items-center transition-all duration-300 min-h-touch focus:outline-none focus:ring-2 focus:ring-primary-gold focus:ring-offset-2 ${
                  openIndex === idx 
                    ? 'bg-primary-blue text-white' 
                    : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                }`}
                onClick={() => toggleFAQ(idx)}
                aria-expanded={openIndex === idx}
              >
                <span className="font-medium text-sm sm:text-base lg:text-lg pr-4">{faq.question}</span>
                <span className="text-xl flex-shrink-0">{openIndex === idx ? '−' : '+'}</span>
              </button>
              
              {openIndex === idx && (
                <div className="p-3 sm:p-4 bg-gray-50 rounded-b-lg border-l-4 border-primary-gold">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-primary-blue">
            Still Have Questions?
          </h2>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-700 leading-relaxed">
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
    </>
  );
}
