import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#4A154B]/5 to-background pt-20">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(74, 21, 75, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Headline */}
          <div className="mb-12 pt-16">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
              Invoicing. Reminders.
              <br />
              <span className="text-[#4A154B]">Cash Flow — On The Dot.</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Automate your invoicing, get paid faster with smart reminders, and master your cash flow.
              The all-in-one platform for freelancers and agencies.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <Link to="/signup">
                <Button
                  size="lg"
                  className="bg-[#4A154B] hover:bg-[#4A154B]/90 text-white px-8 h-14 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
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
                <Play className="w-4 h-4 mr-2 fill-current" />
                SEE DEMO
              </Button>
            </div>
          </div>

          {/* Product Preview / Visual */}
          <div className="relative mx-auto max-w-5xl rounded-xl border border-border/50 bg-background shadow-2xl overflow-hidden aspect-[16/9]">
            <div className="absolute inset-0 bg-muted/10 flex items-center justify-center">
              {/* Simulated Dashboard UI */}
              <div className="w-full h-full p-4 flex flex-col gap-4 bg-white dark:bg-black/20">
                <div className="h-12 w-full border-b flex items-center px-4 gap-4">
                  <div className="w-6 h-6 rounded bg-[#4A154B]"></div>
                  <div className="w-32 h-4 rounded bg-gray-200 dark:bg-gray-800"></div>
                  <div className="flex-1"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800"></div>
                </div>
                <div className="flex-1 flex gap-4">
                  <div className="w-64 border-r p-4 hidden md:block">
                    <div className="space-y-4">
                      <div className="h-4 w-32 bg-gray-100 dark:bg-gray-800 rounded"></div>
                      <div className="h-4 w-24 bg-gray-100 dark:bg-gray-800 rounded"></div>
                      <div className="h-4 w-28 bg-gray-100 dark:bg-gray-800 rounded"></div>
                    </div>
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex gap-4 mb-8">
                      <div className="h-32 flex-1 rounded-xl bg-[#4A154B]/5 border border-[#4A154B]/10 animate-pulse"></div>
                      <div className="h-32 flex-1 rounded-xl bg-green-500/5 border border-green-500/10"></div>
                      <div className="h-32 flex-1 rounded-xl bg-blue-500/5 border border-blue-500/10"></div>
                    </div>
                    <div className="h-64 rounded-xl border border-border/50 bg-muted/5"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-background/80 backdrop-blur-sm p-4 rounded-full border shadow-lg">
                <Play className="w-8 h-8 text-[#4A154B] fill-current ml-1" />
              </div>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="text-center mt-20 mb-12">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6">
              Trusted by 10,000+ freelancers and agencies
            </p>
            <div className="flex items-center justify-center gap-12 flex-wrap opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {["Stripe", "PayPal", "Plaid", "Slack", "QuickBooks", "Xero"].map((company) => (
                <div key={company} className="text-xl font-bold text-foreground/70">
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
