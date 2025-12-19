import { Link } from "react-router-dom";
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
          <div className="group p-8 rounded-3xl border border-border/50 bg-card hover:shadow-2xl hover:shadow-yellow-500/5 hover:-translate-y-1 transition-all duration-500">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 text-yellow-500 flex items-center justify-center mb-6">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">2-Click Branded Invoices</h3>
            <p className="text-muted-foreground mb-6 text-sm">Create stunning, professional invoices with your brand colors and logo in seconds. No design skills required.</p>
            <ul className="space-y-2 mb-6">
              {["Custom logo upload", "Brand color themes", "Professional templates", "PDF export"].map(f => (
                <li key={f} className="text-xs font-medium text-muted-foreground flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-yellow-500" /> {f}
                </li>
              ))}
            </ul>
            <Link to="/features/invoicing">
              <Button variant="link" className="p-0 text-yellow-500 h-auto font-semibold group-hover:gap-2 transition-all">
                Explore Feature <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          {/* Smart Reminders */}
          <div className="group p-8 rounded-3xl border border-border/50 bg-card hover:shadow-2xl hover:shadow-yellow-500/5 hover:-translate-y-1 transition-all duration-500">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 text-yellow-500 flex items-center justify-center mb-6">
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
            <Link to="/features/reminders">
              <Button variant="link" className="p-0 text-yellow-500 h-auto font-semibold group-hover:gap-2 transition-all">
                Explore Feature <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          {/* Overdue Dashboard */}
          <div className="group p-8 rounded-3xl border border-border/50 bg-card hover:shadow-2xl hover:shadow-yellow-500/5 hover:-translate-y-1 transition-all duration-500">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 text-yellow-500 flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Overdue Dashboard</h3>
            <p className="text-muted-foreground mb-6 text-sm">Visual overview of all outstanding payments with urgency indicators and one-click actions to follow up.</p>
            <ul className="space-y-2 mb-6">
              {["Visual dashboard", "Urgency indicators", "Payment tracking", "Quick actions"].map(f => (
                <li key={f} className="text-xs font-medium text-muted-foreground flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-yellow-500" /> {f}
                </li>
              ))}
            </ul>
            <Link to="/features/cash-flow">
              <Button variant="link" className="p-0 text-yellow-500 h-auto font-semibold group-hover:gap-2 transition-all">
                Explore Feature <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          {/* Recurring Invoices */}
          <div className="group p-8 rounded-3xl border border-border/50 bg-card hover:shadow-2xl hover:shadow-yellow-500/5 hover:-translate-y-1 transition-all duration-500">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 text-yellow-500 flex items-center justify-center mb-6">
              <Repeat className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Recurring Invoices</h3>
            <p className="text-muted-foreground mb-6 text-sm">Set up monthly retainers and subscriptions that invoice automatically, ensuring steady cash flow.</p>
            <ul className="space-y-2 mb-6">
              {["Auto-recurring", "Flexible schedules", "Subscription management", "Payment automation"].map(f => (
                <li key={f} className="text-xs font-medium text-muted-foreground flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-yellow-500" /> {f}
                </li>
              ))}
            </ul>
            <Link to="/features/recurring-invoices">
              <Button variant="link" className="p-0 text-yellow-500 h-auto font-semibold group-hover:gap-2 transition-all">
                Explore Feature <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          {/* Payment Integration */}
          <div className="group p-8 rounded-3xl border border-border/50 bg-card hover:shadow-2xl hover:shadow-yellow-500/5 hover:-translate-y-1 transition-all duration-500">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 text-yellow-500 flex items-center justify-center mb-6">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Payment Integration</h3>
            <p className="text-muted-foreground mb-6 text-sm">Stripe, PayPal, and bank connections for seamless payment processing. Get paid faster than ever.</p>
            <ul className="space-y-2 mb-6">
              {["Multiple processors", "Instant payments", "Bank connections", "Transaction fees"].map(f => (
                <li key={f} className="text-xs font-medium text-muted-foreground flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-yellow-500" /> {f}
                </li>
              ))}
            </ul>
            <Link to="/features/integrations">
              <Button variant="link" className="p-0 text-yellow-500 h-auto font-semibold group-hover:gap-2 transition-all">
                Explore Feature <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          {/* AI Writer */}
          <div className="group p-8 rounded-3xl border border-border/50 bg-card hover:shadow-2xl hover:shadow-yellow-500/5 hover:-translate-y-1 transition-all duration-500">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 text-yellow-500 flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">AI Writing Assistant</h3>
            <p className="text-muted-foreground mb-6 text-sm">Generate professional invoice descriptions and reminder messages with AI. Never struggle with words again.</p>
            <ul className="space-y-2 mb-6">
              {["AI-powered writing", "Professional tone", "Multiple templates", "Custom messaging"].map(f => (
                <li key={f} className="text-xs font-medium text-muted-foreground flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-yellow-500" /> {f}
                </li>
              ))}
            </ul>
            <Link to="/features/ai-writer">
              <Button variant="link" className="p-0 text-yellow-500 h-auto font-semibold group-hover:gap-2 transition-all">
                Explore Feature <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-28 grid md:grid-cols-3 gap-8">
          <div className="relative group overflow-hidden bg-gradient-to-br from-yellow-500/5 to-transparent p-10 rounded-[2.5rem] border border-yellow-500/10 hover:border-yellow-500/30 transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-yellow-500/10 transition-colors" />
            <div className="relative z-10">
              <div className="text-5xl font-extrabold text-yellow-500 mb-2 tabular-nums">10h+</div>
              <p className="text-foreground font-bold text-lg mb-2">Save Hours Weekly</p>
              <p className="text-muted-foreground text-sm leading-relaxed">Automate your entire invoicing workflow and recapture your time.</p>
            </div>
          </div>

          <div className="relative group overflow-hidden bg-gradient-to-br from-emerald-500/5 to-transparent p-10 rounded-[2.5rem] border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-emerald-500/10 transition-colors" />
            <div className="relative z-10">
              <div className="text-5xl font-extrabold text-emerald-500 mb-2 tabular-nums">60%</div>
              <p className="text-foreground font-bold text-lg mb-2">Get Paid Faster</p>
              <p className="text-muted-foreground text-sm leading-relaxed">Smart reminders accelerate payments and improve your cash flow.</p>
            </div>
          </div>

          <div className="relative group overflow-hidden bg-gradient-to-br from-blue-500/5 to-transparent p-10 rounded-[2.5rem] border border-blue-500/10 hover:border-blue-500/30 transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-blue-500/10 transition-colors" />
            <div className="relative z-10">
              <div className="text-5xl font-extrabold text-blue-500 mb-2 tabular-nums">99.9%</div>
              <p className="text-foreground font-bold text-lg mb-2">Maximum Uptime</p>
              <p className="text-muted-foreground text-sm leading-relaxed">Reliable, secure, and always available when you need to bill.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
