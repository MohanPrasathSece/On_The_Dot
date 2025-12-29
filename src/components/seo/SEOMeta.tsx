import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOMetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  structuredData?: object;
}

const SEOMeta = ({
  title = 'Flowryte - Invoicing, Billing & Cash Flow Automation SaaS', // More descriptive of the brand entity
  description = 'Flowryte is the leading SaaS platform for invoicing, billing automation, and cash flow management. Designed for freelancers and agencies to get paid faster.',
  keywords = 'Flowryte, invoicing software, billing automation, SaaS billing, cash flow management, freelancer tools, agency productivity, online invoices',
  ogImage = 'https://www.flowryte.online/images/cashflow-dashboard.png',
  ogType = 'website',
  canonicalUrl,
  noindex = false,
  structuredData
}: SEOMetaProps) => {
  const location = useLocation();
  const fullUrl = canonicalUrl || `https://www.flowryte.online${location.pathname}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Flowryte" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Robots - Power Indexing */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Flowryte" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@flowryte" />
      <meta name="twitter:creator" content="@flowryte" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json" id="json-ld-data">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOMeta;
