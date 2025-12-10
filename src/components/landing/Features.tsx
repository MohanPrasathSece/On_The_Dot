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
  Lock,
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
            Everything you need. Nothing you don't.
          </h2>
          <p className="text-xl text-muted-foreground">
            A complete suite of tools designed to help you get paid faster and manage cash flow smarter.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {[
            {
              icon: CreditCard,
              title: "Smart Invoicing",
              desc: "2-Click Branded Invoices, Custom Branding (Logo, Colors), GPT-Powered Messaging, and Multi-format Export (PDF, Email, SMS).",
              color: "bg-blue-500"
            },
            {
              icon: Bell,
              title: "Auto-Reminders",
              desc: "Smart 3/7/14 day cadence with polite, firm, or urgent AI-generated messages. Detailed delivery logs.",
              color: "bg-purple-500"
            },
            {
              icon: BarChart3,
              title: "Cash Flow Dashboard",
              desc: "Real-time income trends, overdue indicators, upcoming tasks, and tax-ready CSV/XLS exports.",
              color: "bg-green-500"
            },
            {
              icon: Layers,
              title: "Integrations & Sync",
              desc: "Seamlessly sync with Stripe, PayPal, and Plaid. Real-time tracking via WebSockets.",
              color: "bg-orange-500"
            },
            {
              icon: Users,
              title: "Team Collaboration",
              desc: "Invite members with Admin/Editor/Viewer roles. Full audit logs for every action.",
              color: "bg-pink-500"
            },
            {
              icon: Lock,
              title: "Security & Compliance",
              desc: "Bank-grade SSL/TLS encryption, RBAC, and full GDPR/PCI-DSS compliance.",
              color: "bg-red-500"
            }
          ].map((f, i) => (
            <div key={i} className="p-8 rounded-3xl bg-muted/20 border border-border/50 hover:bg-muted/40 transition-colors group">
              <div className={`w-12 h-12 rounded-xl ${f.color} bg-opacity-10 flex items-center justify-center mb-6`}>
                <f.icon className={`w-6 h-6 text-${f.color.replace('bg-', '')}`} />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#4A154B] transition-colors">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Why OnTheDot? Comparison */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Why upgrade to OnTheDot?</h3>
            <p className="text-muted-foreground">Focus on simplicity, design, and efficiency.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Productivity */}
            <div className="p-8 rounded-3xl border border-border/50 bg-card hover:shadow-lg transition-all">
              <Zap className="w-10 h-10 text-yellow-500 mb-6" />
              <h4 className="text-xl font-bold mb-4">Productivity First</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Smart reminders avoid late payments. Creating an invoice takes seconds, not minutes.
              </p>
              <ul className="text-sm space-y-2">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Task Management</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Quick Actions</li>
              </ul>
            </div>

            {/* Vs Manual */}
            <div className="p-8 rounded-3xl border border-border/50 bg-card hover:shadow-lg transition-all">
              <XCircle className="w-10 h-10 text-red-500 mb-6" />
              <h4 className="text-xl font-bold mb-4">Vs. Spreadsheets</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Manual entry leads to errors. Chasing payments is awkward. Spreadsheets don't remind clients.
              </p>
              <ul className="text-sm space-y-2">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Automated Follow-ups</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Professional Branding</li>
              </ul>
            </div>

            {/* Vs Others */}
            <div className="p-8 rounded-3xl border border-[#4A154B]/20 bg-[#4A154B]/5 hover:shadow-lg transition-all">
              <ShieldCheck className="w-10 h-10 text-[#4A154B] mb-6" />
              <h4 className="text-xl font-bold mb-4">Vs. Clunky Tools</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Other tools are bloated and hard to use. OnTheDot is minimalist, fast, and designed for small teams.
              </p>
              <ul className="text-sm space-y-2">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Streamlined Interface</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Zero Learning Curve</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
