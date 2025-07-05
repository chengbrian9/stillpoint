// utils/structuredData.js

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Stillpoint Corporate Housing",
  "description": "Premium corporate housing and extended stay accommodations for business travelers and corporate clients.",
  "url": "https://stillpointproperty.com",
  "logo": "https://stillpointproperty.com/logo.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-XXX-XXX-XXXX", // Replace with actual phone
    "contactType": "customer service",
    "email": "team@stillpointproperty.com",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US",
    "addressRegion": "State", // Replace with actual state
    "addressLocality": "City" // Replace with actual city
  },
  "sameAs": [
    // Add social media URLs when available
    // "https://www.facebook.com/stillpointhousing",
    // "https://www.linkedin.com/company/stillpoint-corporate-housing"
  ]
};

// Local Business Schema
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Stillpoint Corporate Housing",
  "description": "Specialized corporate housing provider offering fully furnished accommodations for extended business stays of 30+ days.",
  "url": "https://stillpointproperty.com",
  "telephone": "+1-XXX-XXX-XXXX", // Replace with actual phone
  "email": "team@stillpointproperty.com",
  "priceRange": "$$$",
  "paymentAccepted": ["Cash", "Credit Card", "Corporate Account"],
  "currenciesAccepted": "USD",
  "openingHours": "Mo-Fr 09:00-17:00",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US",
    "addressRegion": "State", // Replace with actual state
    "addressLocality": "City" // Replace with actual city
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "XX.XXXXX", // Replace with actual coordinates
    "longitude": "-XX.XXXXX"
  },
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Fully Furnished",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification", 
      "name": "High-Speed Internet",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Utilities Included",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Weekly Cleaning",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "24/7 Maintenance",
      "value": true
    }
  ]
};

// Service Schema
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Corporate Housing Services",
  "description": "Premium corporate housing and extended stay accommodations with all-inclusive pricing and professional management.",
  "provider": {
    "@type": "Organization",
    "name": "Stillpoint Corporate Housing",
    "url": "https://stillpointproperty.com"
  },
  "serviceType": "Corporate Housing",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Corporate Housing Options",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Extended Stay Corporate Housing",
          "description": "Fully furnished accommodations for stays of 30+ days"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate Relocation Services",
          "description": "Temporary housing solutions for employee relocations"
        }
      }
    ]
  }
};

// FAQ Schema
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the minimum length of stay for your corporate housing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our accommodations are designed for stays of 30 days or longer, making them perfect for corporate relocations, extended business trips, project-based assignments, and temporary housing needs."
      }
    },
    {
      "@type": "Question",
      "name": "What's included in your corporate housing packages?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our all-inclusive packages feature fully furnished accommodations with high-quality furniture, fully equipped kitchens, utilities, high-speed internet, premium cable TV, weekly professional cleaning, 24/7 maintenance support, and security monitoring."
      }
    },
    {
      "@type": "Question",
      "name": "Can my company directly book multiple units for employees?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! We work with many corporations to provide housing solutions for multiple employees. We can create customized corporate accounts with streamlined billing, reporting, and dedicated account management."
      }
    }
  ]
};

// Breadcrumb Schema Generator
export const generateBreadcrumbSchema = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": `https://stillpointproperty.com${crumb.url}`
  }))
});

// Website Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Stillpoint Corporate Housing",
  "description": "Premium corporate housing and extended stay accommodations for business travelers.",
  "url": "https://stillpointproperty.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://stillpointproperty.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};
