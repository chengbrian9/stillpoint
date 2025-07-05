// components/AccessibilityFeatures.js
import React from 'react';
import { focusManagement, screenReader } from '../utils/accessibility';

const AccessibilityFeatures = () => {
  return (
    <>
      {/* Skip Links */}
      <div className="sr-only">
        <a 
          href="#main-content"
          className="skip-link"
          style={{
            ...focusManagement.skipLink,
            ':focus': focusManagement.skipLinkFocus
          }}
        >
          Skip to main content
        </a>
        <a 
          href="#main-navigation"
          className="skip-link"
          style={{
            ...focusManagement.skipLink,
            ':focus': focusManagement.skipLinkFocus
          }}
        >
          Skip to navigation
        </a>
      </div>

      {/* Screen Reader Announcements */}
      <div 
        id="sr-announcements" 
        aria-live="polite" 
        aria-atomic="true"
        style={screenReader.srOnly}
      />

      {/* Required Fields Note */}
      <div 
        id="required-fields-note" 
        style={screenReader.srOnly}
      >
        Fields marked with an asterisk (*) are required.
      </div>

      <style jsx>{`
        .skip-link:focus {
          position: absolute;
          left: 6px;
          top: 6px;
          z-index: 9999;
          padding: 8px 16px;
          background: #000;
          color: #fff;
          text-decoration: none;
          font-size: 14px;
          font-weight: bold;
          border-radius: 4px;
          outline: none;
        }
        
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      `}</style>
    </>
  );
};

export default AccessibilityFeatures;
