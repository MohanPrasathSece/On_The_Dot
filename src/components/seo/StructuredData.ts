export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Flowryte",
  "url": "https://flowryte.io",
  "logo": "https://flowryte.io/logo.png",
  "description": "The modern invoicing platform for freelancers and agencies. Create beautiful invoices, automate reminders, and get paid faster.",
  "sameAs": [
    "https://twitter.com/flowryte",
    "https://linkedin.com/company/flowryte",
    "https://facebook.com/flowryte"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9876543210",
    "contactType": "customer service",
    "availableLanguage": ["English"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressRegion": "TN",
    "addressLocality": "Chennai",
    "postalCode": "600001"
  }
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Flowryte - Invoicing Platform",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Free trial available"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1250"
  },
  "featureList": [
    "Invoice Creation",
    "Automated Reminders", 
    "Payment Tracking",
    "Cash Flow Management",
    "Client Management",
    "Reporting & Analytics"
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Flowryte",
  "description": "Professional invoicing and payment tracking solutions for freelancers and agencies",
  "url": "https://flowryte.io",
  "telephone": "+91-9876543210",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressRegion": "TN", 
    "addressLocality": "Chennai",
    "postalCode": "600001",
    "streetAddress": "123 Business Park, Chennai"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "13.0827",
    "longitude": "80.2707"
  },
  "openingHours": "Mo-Fr 09:00-18:00",
  "priceRange": "$$"
};

export const faqSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const breadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});

export const serviceSchema = (serviceName: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "Flowryte",
    "url": "https://flowryte.io"
  },
  "serviceType": "Professional Service"
});
