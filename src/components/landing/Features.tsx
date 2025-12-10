import { FileText, Bell, BarChart3, Repeat, CreditCard, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Features() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Everything you need to get paid
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed to streamline your invoicing workflow and accelerate your cash flow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 2-Click Invoices */}
          <div className="group p-8 rounded-3xl border border-border/50 bg-card hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 flex items-center justify-center mb-6">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">2-Click Branded Invoices</h3>
            <p className="text-muted-foreground mb-6 text-sm">Create stunning, professional invoices with your brand colors and logo in seconds. No design skills required.</p>
            <ul className="space-y-2 mb-6">
              {["Custom logo upload", "Brand color themes", "Professional templates", "PDF export"].map(f => (
                <li key={f} className="text-xs font-medium text-muted-foreground flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-amber-500" /> {f}
                </li>
              ))}
            </ul>
            <Button variant="link" className="p-0 text-amber-600 h-auto font-semibold group-hover:gap-2 transition-all">
              Explore Feature <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Smart Reminders */}
          <div className="group p-8 rounded-3xl border border-border/50 bg-card hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 flex items-center justify-center mb-6">
              <Bell className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Smart Reminder Cadence</h3>
            <p className="text-muted-foreground mb-6 text-sm">Automated email and SMS reminders with intelligent timing to maximize payment rates without being pushy.</p>
            <ul className="space-y-2 mb-6">
              {["Email & SMS reminders", "Intelligent timing", "Customizable tones", "Delivery tracking"].map(f => (
                <li key={f} className="text-xs font-medium text-muted-foreground flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-yellow-500" /> {f}
                </li>
              ))}
            </ul>
            <Button variant="link" className="p-0 text-yellow-600 h-auto font-semibold group-hover:gap-2 transition-all">
              Explore Feature <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Overdue Dashboard */}
          <div className="group p-8 rounded-3xl border border-border/50 bg-card hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Overdue Dashboard</h3>
            <p className="text-muted-foreground mb-6 text-sm">Visual overview of all outstanding payments with urgency indicators and one-click actions to follow up.</p>
            <ul className="space-y-2 mb-6">
              {["Visual dashboard", "Urgency indicators", "Payment tracking", "Quick actions"].map(f => (
                <li key={f} className="text-xs font-medium text-muted-foreground flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-orange-500" /> {f}
                </li>
              ))}
            </ul>
            <Button variant="link" className="p-0 text-orange-600 h-auto font-semibold group-hover:gap-2 transition-all">
              Explore Feature <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Recurring Invoices */}
          <div className="group p-8 rounded-3xl border border-border/50 bg-card hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center mb-6">
              <Repeat className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Recurring Invoices</h3>
            <p className="text-muted-foreground mb-6 text-sm">Set up monthly retainers and subscriptions that invoice automatically, ensuring steady cash flow.</p>
            <ul className="space-y-2 mb-6">
              {["Auto-recurring", "Flexible schedules", "Subscription management", "Payment automation"].map(f => (
                <li key={f} className="text-xs font-medium text-muted-foreground flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-orange-500" /> {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Integration */}
          <div className="group p-8 rounded-3xl border border-border/50 bg-card hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-lime-100 dark:bg-lime-900/30 text-lime-600 flex items-center justify-center mb-6">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Payment Integration</h3>
            <p className="text-muted-foreground mb-6 text-sm">Stripe, PayPal, and bank connections for seamless payment processing. Get paid faster than ever.</p>
            <ul className="space-y-2 mb-6">
              {["Multiple processors", "Instant payments", "Bank connections", "Transaction fees"].map(f => (
                <li key={f} className="text-xs font-medium text-muted-foreground flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-lime-500" /> {f}
                </li>
              ))}
            </ul>
          </div>

          {/* AI Writer */}
          <div className="group p-8 rounded-3xl border border-border/50 bg-card hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-amber-200 dark:bg-amber-800/30 text-amber-700 flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">AI Writing Assistant</h3>
            <p className="text-muted-foreground mb-6 text-sm">Generate professional invoice descriptions and reminder messages with AI. Never struggle with words again.</p>
            <ul className="space-y-2 mb-6">
              {["AI-powered writing", "Professional tone", "Multiple templates", "Custom messaging"].map(f => (
                <li key={f} className="text-xs font-medium text-muted-foreground flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-amber-600" /> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 py-12 border-y border-border/50 divide-y md:divide-y-0 md:divide-x divide-border/50">
          <div className="text-center px-4">
            <div className="text-4xl font-bold text-primary mb-2">Save 10+ Hours</div>
            <p className="text-muted-foreground text-sm uppercase tracking-wide">Weekly</p>
            <p className="text-sm text-muted-foreground mt-2">Automate your entire invoicing workflow</p>
          </div>
          <div className="text-center px-4 pt-8 md:pt-0">
            <div className="text-4xl font-bold text-primary mb-2">Get Paid 60%</div>
            <p className="text-muted-foreground text-sm uppercase tracking-wide">Faster</p>
            <p className="text-sm text-muted-foreground mt-2">Smart reminders accelerate payments</p>
          </div>
          <div className="text-center px-4 pt-8 md:pt-0">
            <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
            <p className="text-muted-foreground text-sm uppercase tracking-wide">Uptime</p>
            <p className="text-sm text-muted-foreground mt-2">Reliable, secure, always available</p>
          </div>
        </div>
      </div>
    </section>
  );
}
