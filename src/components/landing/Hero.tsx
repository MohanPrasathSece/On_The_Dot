import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#4A154B]/5 to-background">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(74, 21, 75, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Headline */}
          <div className="text-center mb-16 pt-32">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
              Reimagine invoicing
              <br />
              <span className="text-[#4A154B]">for your entire business.</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              The modern invoicing platform where work happens. Create invoices,
              automate reminders, and get paid—all in one place.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/signup">
                <Button
                  size="lg"
                  className="bg-[#4A154B] hover:bg-[#4A154B]/90 text-white px-8 h-14 text-lg font-semibold rounded-lg"
                >
                  GET STARTED
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#4A154B] text-[#4A154B] hover:bg-[#4A154B]/5 px-8 h-14 text-lg font-semibold rounded-lg"
              >
                WATCH DEMO
              </Button>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="text-center mb-20">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6">
              Trusted by innovative companies worldwide
            </p>
            <div className="flex items-center justify-center gap-12 flex-wrap opacity-60">
              {["IBM", "OpenAI", "Box", "Wayfair", "Rivian", "ezCater"].map((company) => (
                <div key={company} className="text-2xl font-bold text-foreground/70">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
