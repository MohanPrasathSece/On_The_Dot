import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 bg-muted text-foreground overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-500/10 skew-x-12 translate-x-12" />
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-yellow-500/10 -skew-x-12 -translate-x-12" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Need a custom solution?
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          Contact our sales team for enterprise-grade solutions, custom features, and volume pricing tailored to your organization's needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <Link to="/signup">
            <Button size="lg" className="h-14 px-8 text-lg bg-yellow-500 text-black hover:bg-yellow-400 font-bold w-full sm:w-auto">
              Contact Sales
            </Button>
          </Link>
          <Link to="/pricing">
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 font-bold w-full sm:w-auto">
              View Pricing
            </Button>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
            <span>Enterprise support</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
            <span>Custom integrations</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
            <span>Volume discounts</span>
          </div>
        </div>
      </div>
    </section>
  );
}
