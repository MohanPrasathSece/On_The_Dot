import { Link } from "react-router-dom";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Text Content */}
          <div className="max-w-2xl lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-yellow-500" />
              The future of invoicing is here
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Professional Invoicing
              <br />
              <span className="text-yellow-500">Made Simple.</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Effortless Invoicing, Timely Reminders, and Seamless Cash Flow Tracking for Freelancers and Small Agencies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/trial">
                <Button size="lg" className="h-14 px-8 text-lg bg-black text-white hover:bg-black/90 w-full sm:w-auto">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/resources/res-tour">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-black text-black hover:bg-black/10 w-full sm:w-auto">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>30-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="lg:w-1/2 w-full">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white dark:bg-card border shadow-2xl rounded-2xl p-6 relative z-10 animate-fade-in-up">
                <div className="flex items-center justify-between mb-6 border-b pb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Invoice #001</p>
                    <p className="font-bold text-lg">Web Design Project</p>
                  </div>
                  <div className="px-3 py-1 bg-green-100 text-green-700 text-sm font-bold rounded-full">
                    Paid
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span>Web Design</span>
                    <span className="font-mono">$2,500.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Branding</span>
                    <span className="font-mono">$1,200.00</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t font-bold text-lg">
                    <span>Total</span>
                    <span className="text-primary">$3,700.00</span>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -right-4 top-10 bg-white dark:bg-card shadow-xl border rounded-xl p-4 z-20 animate-fade-in-left hidden sm:block">
                <p className="text-xs text-muted-foreground mb-1">This month</p>
                <p className="text-2xl font-bold text-green-600 flex items-center gap-1">
                  +156% <ArrowRight className="w-4 h-4 -rotate-45" />
                </p>
              </div>

              <div className="absolute -left-8 bottom-20 bg-white dark:bg-card shadow-xl border rounded-xl p-4 z-20 animate-fade-in-right hidden sm:block">
                <p className="text-xs text-muted-foreground mb-1">Avg. create time</p>
                <p className="text-2xl font-bold text-primary">
                  2 min
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
