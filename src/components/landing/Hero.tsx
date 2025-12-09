import { ArrowRight, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-foreground/5 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-foreground/3 blur-3xl animate-float animation-delay-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-border/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-border/10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
            <span className="text-sm font-medium">Now with AI-powered invoicing</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 opacity-0 animate-fade-in-up">
            Invoicing. Reminders.
            <br />
            <span className="relative">
              Cash Flow
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 4 150 2 298 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-20" />
              </svg>
            </span>
            {" "}— On The Dot
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up animation-delay-200">
            The modern invoicing platform for freelancers and agencies. 
            Create beautiful invoices, automate reminders, and get paid faster.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-400">
            <Button size="lg" className="rounded-full px-8 h-12 text-base group">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base group">
              <Play className="mr-2 h-4 w-4" />
              Watch Video
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-16 opacity-0 animate-fade-in animation-delay-600">
            <p className="text-sm text-muted-foreground mb-4">Trusted by 10,000+ professionals</p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {["⭐⭐⭐⭐⭐", "4.9/5 on G2", "500+ Reviews"].map((item, i) => (
                <span key={i} className="text-sm font-medium text-muted-foreground">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Product Preview */}
        <div className="mt-20 max-w-5xl mx-auto opacity-0 animate-scale-in animation-delay-600">
          <div className="relative">
            {/* Glass frame */}
            <div className="glass-strong rounded-2xl p-2 sm:p-4">
              <div className="bg-background rounded-xl overflow-hidden border border-border/50">
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-muted/30">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-foreground/20" />
                    <div className="w-3 h-3 rounded-full bg-foreground/20" />
                    <div className="w-3 h-3 rounded-full bg-foreground/20" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-4 py-1.5 rounded-full bg-muted/50 text-xs text-muted-foreground">
                      app.onthedot.io
                    </div>
                  </div>
                </div>
                {/* Dashboard Preview */}
                <div className="p-6 sm:p-8 bg-gradient-to-b from-muted/20 to-transparent">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      { label: "Total Revenue", value: "$48,250", change: "+12.5%" },
                      { label: "Pending", value: "$5,420", change: "3 invoices" },
                      { label: "Overdue", value: "$1,200", change: "1 invoice" },
                    ].map((stat, i) => (
                      <div key={i} className="glass rounded-xl p-4">
                        <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                        <p className="text-lg sm:text-2xl font-semibold">{stat.value}</p>
                        <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                      </div>
                    ))}
                  </div>
                  <div className="glass rounded-xl p-4">
                    <div className="flex items-center justify-between mb-4">
                      <p className="font-medium">Recent Invoices</p>
                      <span className="text-xs text-muted-foreground">View all</span>
                    </div>
                    <div className="space-y-3">
                      {[
                        { client: "Rajesh Enterprises", amount: "$3,500", status: "Paid" },
                        { client: "Priya Tech Solutions", amount: "$2,800", status: "Pending" },
                        { client: "Amit Design Studio", amount: "$1,200", status: "Overdue" },
                      ].map((invoice, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-border/30 last:border-0">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-medium">
                              {invoice.client[0]}
                            </div>
                            <span className="text-sm font-medium">{invoice.client}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-sm font-medium">{invoice.amount}</span>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              invoice.status === "Paid" ? "bg-foreground/10 text-foreground" :
                              invoice.status === "Pending" ? "bg-muted text-muted-foreground" :
                              "bg-foreground/5 text-foreground/70"
                            }`}>
                              {invoice.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-foreground/5 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-foreground/5 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
