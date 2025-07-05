// components/SEO.js
import Head from 'next/head';

export default function SEO({
  title = 'Stillpoint Corporate Housing - Premium Corporate Accommodations',
  description = 'Stillpoint Corporate Housing provides premium midterm and short-term accommodations for corporate clients. Fully furnished properties with 30+ day stays, all-inclusive pricing, and professional management.',
  keywords = 'corporate housing, corporate accommodations, extended stay, business travel, furnished apartments, temporary housing, corporate relocation, midterm rentals',
  canonicalUrl,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  structuredData,
  noindex = false,
  nofollow = false,
}) {
  const siteUrl = 'https://stillpointproperty.com'; // Replace with actual domain
  const fullTitle = title.includes('Stillpoint') ? title : `${title} | Stillpoint Corporate Housing`;
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Stillpoint Corporate Housing" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      
      {/* Robots Meta */}
      <meta 
        name="robots" 
        content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} 
      />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Stillpoint Corporate Housing" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Favicon and Icons */}
      <link rel="icon" href="/logo.svg" />
      <link rel="icon" type="image/png" sizes="32x32" href="/logo.svg" />
      <link rel="icon" type="image/png" sizes="16x16" href="/logo.svg" />
      <link rel="apple-touch-icon" href="/logo.svg" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#1e40af" />
      
      {/* Preconnect to External Domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      
      {/* Structured Data */}
      {structuredData && (
        Array.isArray(structuredData) ? (
          structuredData.map((schema, index) => (
            <script
              key={index}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
          ))
        ) : (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        )
      )}
      
      {/* Additional SEO Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      <meta name="language" content="English" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
    </Head>
  );
}
