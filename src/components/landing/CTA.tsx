import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 bg-[#4A154B] text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-12" />
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-white/5 -skew-x-12 -translate-x-12" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Ready to transform your business?
          <br />
          <span className="text-emerald-300">Ready to get paid On The Dot?</span>
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
          Join thousands of freelancers and agencies who've already transformed their invoicing process. Start your free trial today and see the difference in just 7 days.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <Link to="/signup">
            <Button size="lg" className="h-14 px-8 text-lg bg-white text-[#4A154B] hover:bg-white/90 font-bold w-full sm:w-auto">
              Start Free Trial
            </Button>
          </Link>
          <Link to="/demo">
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white text-white hover:bg-white/10 w-full sm:w-auto">
              <Play className="w-4 h-4 mr-2" />
              Schedule Demo
            </Button>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>7-day free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
