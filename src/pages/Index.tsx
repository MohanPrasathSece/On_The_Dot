import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Why } from "@/components/landing/Why";
import { Features } from "@/components/landing/Features";
import { Solutions } from "@/components/landing/Solutions";
import { Comparison } from "@/components/landing/Comparison";
import { Testimonials } from "@/components/landing/Testimonials";
import { Pricing } from "@/components/landing/Pricing";
import { Resources } from "@/components/landing/Resources";
import { Company } from "@/components/landing/Company";
import { Support } from "@/components/landing/Support";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";
import SEOMeta from "@/components/seo/SEOMeta";
import { organizationSchema, softwareApplicationSchema, webSiteSchema, faqSchema } from "@/components/seo/StructuredData";
import { info } from "autoprefixer"; // Unused, removing if present or ignoring
import { faqs } from "@/components/landing/FAQ";

export default function Index() {
  const structuredData = [
    organizationSchema,
    softwareApplicationSchema,
    webSiteSchema,
    faqSchema(faqs)
  ];

  return (
    <>
      <SEOMeta
        title="Flowryte - Professional SaaS Invoicing & Billing Automation Software"
        description="Flowryte is the ultimate SaaS platform for invoicing, billing automation, and cash flow management. Trusted by freelancers and agencies for professional financial tools."
        keywords="Flowryte, SaaS invoicing, billing automation, invoicing software, cash flow management, freelancer tools, agency billing, online payments, Flowrite, Flowryte app"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
        <Navbar />
        <Hero />

        <div id="features">
          <Features />
        </div>

        <div id="solutions">
          <Solutions />
        </div>

        <div id="pricing">
          <Pricing />
        </div>

        <div id="resources">
          <Resources />
        </div>

        {/* Product Section: Why + Comparison */}
        <div id="product">
          <Why />
        </div>

        <div id="testimonials">
          <Testimonials />
        </div>

        <div id="company">
          <Company />
        </div>

        <div id="support">
          <Support />
        </div>

        <div id="faq">
          <FAQ />
        </div>

        <CTA />
        <Footer />
      </div>
    </>
  );
}
