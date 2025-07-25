import '../styles/globals.css';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import AccessibilityFeatures from '../components/AccessibilityFeatures';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function App({ Component, pageProps }) {
  return (
    <>
      <AccessibilityFeatures />
      <header>
        <NavBar />
      </header>
      <main id="main-content" role="main">
        <Component {...pageProps} />
      </main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
