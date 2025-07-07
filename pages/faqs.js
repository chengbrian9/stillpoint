// pages/faqs.js
import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import LuxuryButton from '../components/LuxuryButton';
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
      answer: "Simply contact us via email at team@stillpointpropertygroup.com with your requirements including desired location, length of stay, number of bedrooms needed, and any special requests. We'll respond promptly with available options and guide you through our simple booking process."
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
        title="Corporate Client FAQs - Stillpoint Property Group Questions"
        description="Find answers to frequently asked questions about Stillpoint Property Group services, booking process, amenities, and corporate account management."
        canonicalUrl="/faqs"
        ogImage="/Stillpoint Property Group Logo_B2.jpg"
        keywords="corporate housing FAQ, extended stay questions, business travel housing, corporate accommodation answers"
        structuredData={[
          faqSchema,
          generateBreadcrumbSchema(breadcrumbs)
        ]}
      />
      <motion.div 
        className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
      <motion.h1 
        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center text-[#0d3b66]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        Corporate Client FAQs
      </motion.h1>
      
      <motion.div 
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          whileHover={{ boxShadow: "0 25px 50px -12px rgba(13, 59, 102, 0.15)" }}
        >
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx} 
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + idx * 0.1 }}
            >
              <motion.button
                className={`w-full text-left p-3 sm:p-4 rounded-lg flex justify-between items-center transition-all duration-300 min-h-touch focus:outline-none ${
                  openIndex === idx 
                    ? 'bg-[#0d3b66] text-white' 
                    : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                }`}
                onClick={() => toggleFAQ(idx)}
                aria-expanded={openIndex === idx}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <span className="font-medium text-sm sm:text-base lg:text-lg pr-4">{faq.question}</span>
                <motion.span 
                  className="text-xl flex-shrink-0"
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === idx ? '−' : '+'}
                </motion.span>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    className="p-3 sm:p-4 bg-gray-50 rounded-b-lg border-l-4 border-primary-gold"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.p 
                      className="text-sm sm:text-base text-gray-700 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          whileHover={{ boxShadow: "0 25px 50px -12px rgba(13, 59, 102, 0.15)" }}
        >
          <motion.h2 
            className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-[#0d3b66]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            Still Have Questions?
          </motion.h2>
          <motion.p 
            className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            Our team is here to help with any additional questions you might have.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <LuxuryButton 
              href="mailto:team@stillpointpropertygroup.com"
              variant="primary"
              size="medium"
            >
              Contact Us
            </LuxuryButton>
          </motion.div>
        </motion.div>
      </motion.div>
      </motion.div>
    </>
  );
}
