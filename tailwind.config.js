/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      // WCAG-compliant breakpoints
      'xs': '320px',   // Small mobile devices
      'sm': '480px',   // Large mobile devices
      'md': '768px',   // Tablets
      'lg': '1024px',  // Small desktops
      'xl': '1200px',  // Large desktops
      '2xl': '1440px', // Extra large screens
    },
    extend: {
      colors: {
        primary: {
          blue: '#0d3b66',
          gold: '#bf9e4b',
        },
      },
      spacing: {
        // Touch-friendly minimum sizes (WCAG 2.1 AA)
        'touch': '44px',
        'touch-sm': '32px',
      },
      fontSize: {
        // Responsive typography scale
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'lg': ['1.125rem', { lineHeight: '1.6' }],
        'xl': ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
      },
      maxWidth: {
        // Content width constraints for readability
        'readable': '65ch',
        'container': '1200px',
      },
    },
  },
  plugins: [],
};
