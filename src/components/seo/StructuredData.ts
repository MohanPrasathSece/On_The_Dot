export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Flowryte",
  "url": "https://www.flowryte.online",
  "logo": "https://www.flowryte.online/logo.png",
  "description": "Flowryte is a leading SaaS invoicing and billing automation platform for freelancers, agencies, and small businesses. We provide cloud-based cash flow management, automated reminders, and professional digital finance tools.",
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
  },
  "knowsAbout": [
    "SaaS Invoicing",
    "Financial Technology",
    "Billing Automation",
    "Cash Flow Management"
  ]
};

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Flowryte",
  "url": "https://www.flowryte.online",
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
    "ratingValue": "4.9",
    "ratingCount": "1250"
  },
  "description": "Flowryte is a comprehensive SaaS invoicing and billing automation solution. Designed for freelancers and agencies, it streamlines cash flow management with automated reminders, online payments, and professional financial reporting.",
  "featureList": [
    "SaaS Invoicing",
    "Billing Automation",
    "Cash Flow Management",
    "Automated Payment Reminders",
    "Freelancer Productivity Tools",
    "Agency Billing System",
    "Online One-Click Payments",
    "Financial Reporting"
  ],
  "brand": {
    "@type": "Brand",
    "name": "Flowryte"
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Flowryte",
  "description": "Professional SaaS invoicing and payment tracking solutions for freelancers and agencies",
  "url": "https://www.flowryte.online",
  "telephone": "+91-9876543210",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressRegion": "TN",
    "addressLocality": "Chennai",
    "postalCode": "600001",
    "streetAddress": "123 Business Park, Chennai"
  }
};

export const faqSchema = (faqs: Array<{ question: string, answer: string }>) => ({
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

export const breadcrumbSchema = (breadcrumbs: Array<{ name: string, url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": `https://www.flowryte.online${crumb.url}`
  }))
});

export const structuredDataUnion = (
  data: any
): any => {
  return data;
};

export const serviceSchema = (serviceName: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "Flowryte",
    "url": "https://www.flowryte.online"
  },
  "serviceType": "SaaS Platform"
});

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Flowryte",
  "url": "https://www.flowryte.online",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.flowryte.online/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Flowryte Pro",
  "image": "https://www.flowryte.online/images/cashflow-dashboard.png",
  "description": "Professional invoicing and automation for power users. Save 10+ hours a week.",
  "brand": {
    "@type": "Brand",
    "name": "Flowryte"
  },
  "offers": {
    "@type": "AggregateOffer",
    "url": "https://www.flowryte.online/pricing",
    "priceCurrency": "USD",
    "lowPrice": "0",
    "highPrice": "20",
    "offerCount": "3"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1250"
  }
};

export const articleSchema = (headline: string, description: string, image: string, datePublished?: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": headline,
  "description": description,
  "image": image,
  "author": {
    "@type": "Organization",
    "name": "Flowryte",
    "url": "https://www.flowryte.online"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Flowryte",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.flowryte.online/logo.png"
    }
  },
  "datePublished": datePublished || new Date().toISOString()
});
