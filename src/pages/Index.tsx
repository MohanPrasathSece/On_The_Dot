import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Solutions } from "@/components/landing/Solutions";
import { Testimonials } from "@/components/landing/Testimonials";
import { Pricing } from "@/components/landing/Pricing";
import { Resources } from "@/components/landing/Resources";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-foreground/10">
      <Navbar />
      <Hero />
      <Features />
      <Solutions />
      <Testimonials />
      <Pricing />
      <Resources />
      <FAQ />
      <Footer />
    </div>
  );
}
