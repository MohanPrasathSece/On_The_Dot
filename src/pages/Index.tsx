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

export default function Index() {
  return (
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
        <Comparison />
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
  );
}
