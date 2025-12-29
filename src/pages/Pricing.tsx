import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Pricing } from "@/components/landing/Pricing";
import SEOMeta from "@/components/seo/SEOMeta";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

import { productSchema } from "@/components/seo/StructuredData";

export default function PricingPage() {
  return (
    <>
      <SEOMeta
        title="Pricing Plans - Flowryte | Affordable SaaS Invoicing & Billing"
        description="Choose the perfect plan for your business. Transparent pricing for freelancers and agencies. Start with a free trial of Flowryte's premium invoicing tools."
        keywords="Flowryte pricing, SaaS invoicing plans, billing software cost, freelance invoice subscription, agency billing plans"
        structuredData={productSchema}
      />
      <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
        <Navbar />

        {/* Breadcrumbs */}
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 pt-8">
          <Breadcrumbs />
        </div>

        {/* Pricing Section */}
        <section className="py-20">
          <Pricing />
        </section>

        <Footer />
      </div>
    </>
  );
}
