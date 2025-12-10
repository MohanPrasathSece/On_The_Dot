import {
  CreditCard,
  Bell,
  BarChart3,
  Layers,
  Users,
  CheckCircle2,
  XCircle,
  Zap,
  ShieldCheck,
  Accessibility,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Features() {
  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Everything you need to run your business.
          </h2>
          <p className="text-xl text-muted-foreground">
            From sending that first invoice to closing the books for tax season, OnTheDot handles the heavy lifting.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {[
            {
              icon: CreditCard,
              title: "Smart Invoicing",
              desc: "2-Click Branded Invoices, Custom Templates, Tax Fields, and PDF Export.",
              color: "bg-blue-500"
            },
            {
              icon: Bell,
              title: "Auto-Reminders",
              desc: "Set polite or firm cadences. Let AI write the follow-up emails for you.",
              color: "bg-purple-500"
            },
            {
              icon: BarChart3,
              title: "Cash Flow & Reporting",
              desc: "Real-time dashboard with income charts and tax-ready exports.",
              color: "bg-green-500"
            },
            {
              icon: Layers,
              title: "Integrations",
              desc: "Sync with Stripe, PayPal, and Plaid. API Access for custom needs.",
              color: "bg-orange-500"
            },
            {
              icon: Users,
              title: "Team Collaboration",
              desc: "Manage roles, permissions, and view audit logs of all activity.",
              color: "bg-pink-500"
            },
            {
              icon: Zap,
              title: "AI Assistance",
              desc: "AI-powered writing for clear, professional communication.",
              color: "bg-yellow-500"
            }
          ].map((f, i) => (
            <div key={i} className="p-8 rounded-3xl bg-muted/20 border border-border/50 hover:bg-muted/40 transition-colors">
              <div className={`w-12 h-12 rounded-xl ${f.color} bg-opacity-10 flex items-center justify-center mb-6`}>
                <f.icon className={`w-6 h-6 text-${f.color.replace('bg-', '')}`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Why OnTheDot? Comparison */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Why upgrade from spreadsheets?</h3>
            <p className="text-muted-foreground">The difference is in the details.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* The Old Way */}
            <div className="p-8 rounded-3xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20">
              <h4 className="text-xl font-bold text-red-700 dark:text-red-400 mb-6 flex items-center gap-2">
                <XCircle className="w-5 h-5" /> Spreadsheets & Manual Docs
              </h4>
              <ul className="space-y-4">
                {[
                  "Manual data entry errors",
                  "Chasing payments awkwardness",
                  "No professional branding",
                  "Scattered files & lost receipts",
                  "Stressful tax season"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-red-900/70 dark:text-red-300">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* The OnTheDot Way */}
            <div className="p-8 rounded-3xl bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/20 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-300 text-xs font-bold px-3 py-1 rounded-full">
                  RECOMMENDED
                </span>
              </div>
              <h4 className="text-xl font-bold text-emerald-700 dark:text-emerald-400 mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" /> OnTheDot Automation
              </h4>
              <ul className="space-y-4">
                {[
                  "Automated recurring invoices",
                  "Polite, AI-written reminders",
                  "Quiet Luxury design that impresses",
                  "Centralized dashboard & history",
                  "1-click tax exports"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-emerald-900/70 dark:text-emerald-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Quiet Luxury & Accessibility */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h3 className="text-3xl font-bold mb-6">The "Quiet Luxury" difference.</h3>
            <p className="text-lg text-muted-foreground mb-6">
              We believe business software shouldn't feel like work. OnTheDot is designed with a "Quiet Luxury" aesthetic—minimal, focused, and removing cognitive load.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              It's not just about looks; it's about <strong className="text-foreground">accessibility</strong>. High contrast modes, screen reader support, and keyboard navigation are built-in from day one.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted">
                <ShieldCheck className="w-4 h-4 text-[#4A154B]" />
                <span className="text-sm font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted">
                <Accessibility className="w-4 h-4 text-[#4A154B]" />
                <span className="text-sm font-medium">Fully Accessible</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#4A154B]/5 to-muted rounded-3xl aspect-square flex items-center justify-center p-12 border border-border/50">
            {/* Abstract Visual for Quiet Luxury */}
            <div className="w-full h-full bg-background rounded-xl shadow-2xl p-6 flex flex-col gap-4 opacity-90 rotate-3 transition-transform hover:rotate-0 duration-500">
              <div className="h-4 w-1/3 bg-muted rounded animate-pulse" />
              <div className="h-32 bg-muted/50 rounded" />
              <div className="flex gap-4">
                <div className="h-4 w-1/4 bg-muted rounded" />
                <div className="h-4 w-1/4 bg-muted rounded" />
              </div>
            </div>
          </div>
        </div>

        {/* Status / Changelog Links */}
        <div className="border-t border-border/50 pt-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            All systems operational. <a href="#" className="underline hover:text-foreground">View Status Page</a>
          </div>
          <div>
            Latest release: v2.4 (Dark Mode & AI Writer). <a href="#" className="underline hover:text-foreground">View Changelog</a>
          </div>
        </div>

      </div>
    </section>
  );
}
