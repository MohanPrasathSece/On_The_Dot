import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Pricing } from "@/components/landing/Pricing";
import SEOMeta from "@/components/seo/SEOMeta";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export default function PricingPage() {
  return (
    <>
      <SEOMeta
        title="Pricing Plans - Flowryte"
        description="Choose the perfect plan for your business. Free trial available for all plans."
        keywords="pricing, plans, subscription, invoicing software cost"
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
