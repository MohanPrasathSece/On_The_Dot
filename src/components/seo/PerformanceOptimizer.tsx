import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

const PerformanceOptimizer = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
  });

  useEffect(() => {
    // Image optimization
    const optimizeImages = () => {
      const images = document.querySelectorAll('img:not([loading])');
      images.forEach((img) => {
        img.setAttribute('loading', 'lazy');
        img.setAttribute('decoding', 'async');
      });
    };

    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalFonts = ['Inter', 'Roboto'];
      criticalFonts.forEach((font) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'font';
        link.type = 'font/woff2';
        link.crossOrigin = 'anonymous';
        link.href = `https://fonts.googleapis.com/css2?family=${font}:wght@400;500;600;700&display=swap`;
        document.head.appendChild(link);
      });
    };

    // Monitor performance metrics
    const observePerformance = () => {
      if ('PerformanceObserver' in window) {
        // First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcp = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lcp = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fid = entries[0];
          if (fid && 'processingStart' in fid) {
            setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Time to First Byte
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          setMetrics(prev => ({ ...prev, ttfb: navigation.responseStart - navigation.requestStart }));
        }
      }
    };

    // Initialize optimizations
    optimizeImages();
    preloadCriticalResources();
    observePerformance();

    // Cleanup
    return () => {
      // Cleanup observers if needed
    };
  }, []);

  // Log metrics in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && metrics.fcp > 0) {
      console.log('Performance Metrics:', metrics);
      
      // Performance recommendations
      if (metrics.fcp > 1800) {
        console.warn('FCP is slow (>1.8s). Consider optimizing critical resources.');
      }
      if (metrics.lcp > 2500) {
        console.warn('LCP is slow (>2.5s). Optimize images and reduce server response time.');
      }
      if (metrics.fid > 100) {
        console.warn('FID is slow (>100ms). Reduce JavaScript execution time.');
      }
      if (metrics.cls > 0.1) {
        console.warn('CLS is high (>0.1). Ensure proper image dimensions and avoid layout shifts.');
      }
      if (metrics.ttfb > 800) {
        console.warn('TTFB is slow (>800ms). Optimize server and CDN.');
      }
    }
  }, [metrics]);

  return null;
};

export default PerformanceOptimizer;
