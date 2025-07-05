// utils/accessibility.js

// WCAG 2.1 AA compliant color contrast ratios
export const colorContrast = {
  // Minimum contrast ratio for normal text (4.5:1)
  normalText: 4.5,
  // Minimum contrast ratio for large text (3:1)
  largeText: 3.0,
  // Enhanced contrast ratio for AAA compliance (7:1)
  enhanced: 7.0
};

// WCAG compliant breakpoints for responsive design
export const wcagBreakpoints = {
  xs: '320px',   // Minimum mobile width
  sm: '480px',   // Small mobile
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1200px',  // Large desktop
  xxl: '1440px'  // Extra large desktop
};

// Minimum touch target sizes (44px x 44px per WCAG)
export const touchTargets = {
  minimum: '44px',
  recommended: '48px',
  comfortable: '56px'
};

// Focus management utilities
export const focusManagement = {
  // Skip link styles
  skipLink: {
    position: 'absolute',
    left: '-9999px',
    zIndex: 999,
    padding: '8px 16px',
    background: '#000',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 'bold',
    borderRadius: '4px',
    transition: 'left 0.3s ease'
  },
  
  skipLinkFocus: {
    left: '6px',
    top: '6px'
  },

  // Focus ring styles
  focusRing: {
    outline: '2px solid #005fcc',
    outlineOffset: '2px',
    borderRadius: '4px'
  }
};

// ARIA label generators
export const ariaLabels = {
  navigation: (section) => `${section} navigation`,
  button: (action, context) => `${action}${context ? ` ${context}` : ''}`,
  link: (destination, newWindow = false) => 
    `${destination}${newWindow ? ' (opens in new window)' : ''}`,
  form: (purpose) => `${purpose} form`,
  status: (message) => message,
  alert: (message) => message
};

// Screen reader utilities
export const screenReader = {
  // Screen reader only text
  srOnly: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: '0'
  },
  
  // Show on focus for screen readers
  srOnlyFocusable: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: '0',
    
    '&:active, &:focus': {
      position: 'static',
      width: 'auto',
      height: 'auto',
      padding: '8px 16px',
      margin: '0',
      overflow: 'visible',
      clip: 'auto',
      whiteSpace: 'normal'
    }
  }
};

// Keyboard navigation helpers
export const keyboardNavigation = {
  // Common key codes
  keys: {
    ENTER: 13,
    SPACE: 32,
    ESCAPE: 27,
    ARROW_UP: 38,
    ARROW_DOWN: 40,
    ARROW_LEFT: 37,
    ARROW_RIGHT: 39,
    TAB: 9,
    HOME: 36,
    END: 35
  },
  
  // Trap focus within an element
  trapFocus: (element) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    return (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };
  }
};

// Form accessibility helpers
export const formAccessibility = {
  // Generate unique IDs for form elements
  generateId: (prefix = 'field') => `${prefix}-${Math.random().toString(36).substr(2, 9)}`,
  
  // Error message patterns
  errorMessage: (fieldName, error) => ({
    id: `${fieldName}-error`,
    role: 'alert',
    'aria-live': 'polite',
    message: error
  }),
  
  // Required field indicator
  requiredIndicator: {
    'aria-required': 'true',
    'aria-describedby': 'required-fields-note'
  }
};

// Image accessibility
export const imageAccessibility = {
  // Decorative images
  decorative: {
    alt: '',
    role: 'presentation',
    'aria-hidden': 'true'
  },
  
  // Informative images
  informative: (description) => ({
    alt: description,
    role: 'img'
  }),
  
  // Complex images (charts, diagrams)
  complex: (shortDescription, longDescriptionId) => ({
    alt: shortDescription,
    'aria-describedby': longDescriptionId,
    role: 'img'
  })
};

export default {
  colorContrast,
  wcagBreakpoints,
  touchTargets,
  focusManagement,
  ariaLabels,
  screenReader,
  keyboardNavigation,
  formAccessibility,
  imageAccessibility
};
