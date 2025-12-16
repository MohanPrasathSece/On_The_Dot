import { useEffect } from 'react';

interface SEOAnalyticsProps {
  trackingId?: string;
}

const SEOAnalytics = ({ trackingId = 'G-XXXXXXXXXX' }: SEOAnalyticsProps) => {
  useEffect(() => {
    // Google Analytics 4
    const loadGA = () => {
      // Create script tag
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href,
      });

      // Track page views on route changes
      const trackPageView = () => {
        window.gtag('config', trackingId, {
          page_title: document.title,
          page_location: window.location.href,
        });
      };

      // Listen for navigation events (for SPA)
      let lastPath = window.location.pathname;
      const checkPathChange = () => {
        if (window.location.pathname !== lastPath) {
          lastPath = window.location.pathname;
          trackPageView();
        }
      };

      // Check for path changes periodically
      const interval = setInterval(checkPathChange, 100);

      return () => clearInterval(interval);
    };

    // Load GA only in production or if explicitly enabled
    if (process.env.NODE_ENV === 'production' || process.env.REACT_APP_GA_ENABLED === 'true') {
      loadGA();
    }
  }, [trackingId]);

  return null;
};

// Extend window interface
declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export default SEOAnalytics;
