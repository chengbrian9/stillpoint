// pages/_error.js
import React from 'react';
import SEO from '../components/SEO';

function Error({ statusCode }) {
  return (
    <>
      <SEO 
        title={`${statusCode ? `${statusCode} Error` : 'Client Error'} - Stillpoint Property Group`}
        description={`${statusCode ? `Server error ${statusCode}` : 'Client error'} occurred. Please try again or contact Stillpoint Property Group support.`}
        ogImage="/Stillpoint Property Group Logo_B2.jpg"
        noindex={true}
        nofollow={true}
      />
      <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center text-primary-blue max-w-readable">
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </h1>
      <p className="text-base sm:text-lg text-center text-gray-700 max-w-readable leading-relaxed">Please try again later or contact support if the problem persists.</p>
      </div>
    </>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
