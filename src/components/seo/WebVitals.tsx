import { useEffect } from 'react';

interface WebVitalsProps {
  onReport?: (metric: any) => void;
}

const WebVitals = ({ onReport }: WebVitalsProps) => {
  useEffect(() => {
    // Report Web Vitals
    const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
      if (onPerfEntry && onPerfEntry instanceof Function) {
        import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
          onCLS(onPerfEntry);
          onINP(onPerfEntry);
          onFCP(onPerfEntry);
          onLCP(onPerfEntry);
          onTTFB(onPerfEntry);
        });
      }
    };

    reportWebVitals((metric) => {
      // Log to console in development
      if (import.meta.env.DEV) {
        console.log('Web Vital:', metric);
      }

      // Send to analytics service in production
      if (onReport) {
        onReport(metric);
      }

      // Send to Google Analytics
      if (window.gtag) {
        window.gtag('event', metric.name, {
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_category: 'Web Vitals',
          event_label: metric.id,
          non_interaction: true,
        });
      }
    });
  }, [onReport]);

  return null;
};

// Extend window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default WebVitals;
