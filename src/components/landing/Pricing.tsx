import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const plans = [
  {
    name: "Starter",
    price: { monthly: 15, yearly: 12 },
    description: "Perfect for freelancers and small businesses",
    features: [
      "25 invoices per month",
      "3 clients maximum",
      "Basic email reminders",
      "PDF export",
      "Mobile app access",
      "Email support"
    ],
    cta: "Start 14-day free trial",
    highlight: false
  },
  {
    name: "Professional",
    price: { monthly: 35, yearly: 28 },
    description: "Most popular for growing businesses",
    features: [
      "Unlimited invoices",
      "Unlimited clients",
      "Smart email & SMS reminders",
      "AI writing assistant",
      "Advanced reporting",
      "Payment integrations",
      "Custom branding",
      "Recurring invoices",
      "Priority support"
    ],
    cta: "Start 14-day free trial",
    highlight: true,
    badge: "Most Popular"
  },
  {
    name: "Enterprise",
    price: { monthly: 75, yearly: 60 },
    description: "For large teams and agencies",
    features: [
      "Everything in Professional",
      "Team collaboration (up to 10 users)",
      "Advanced analytics",
      "API access",
      "White-label options",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "24/7 phone support"
    ],
    cta: "Start 14-day free trial",
    highlight: false
  }
];

const compareFeatures = [
  { name: "Monthly Invoices", starter: "25", pro: "Unlimited", ent: "Unlimited" },
  { name: "Active Clients", starter: "3", pro: "Unlimited", ent: "Unlimited" },
  { name: "Advanced Analytics", starter: false, pro: true, ent: true },
  { name: "API Access", starter: false, pro: false, ent: true },
  { name: "Support Level", starter: "Email", pro: "Priority", ent: "24/7 Phone" },
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Choose the perfect plan for your business. Start with our 14-day free trial, no credit card required.
          </p>

          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
            />
            <span className={`text-sm font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Yearly <span className="text-emerald-500 text-xs font-bold ml-1">Save up to 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${plan.highlight
                  ? "bg-[#4A154B] text-white shadow-2xl scale-105 z-10"
                  : "bg-background border border-border/50 hover:shadow-lg"
                }`}
            >
              {plan.badge && (
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-bold px-2 py-1 rounded-full bg-white text-[#4A154B]">
                    {plan.badge}
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.highlight ? "text-white/80" : "text-muted-foreground"}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-4xl font-bold">
                  ${isYearly ? plan.price.yearly : plan.price.monthly}
                </span>
                <span className={`text-sm ${plan.highlight ? "text-white/80" : "text-muted-foreground"}`}>
                  /month
                </span>
              </div>

              <Button
                className={`w-full mb-8 rounded-xl font-semibold h-12 ${plan.highlight
                    ? "bg-white text-[#4A154B] hover:bg-white/90"
                    : "bg-[#4A154B] text-white hover:bg-[#4A154B]/90"
                  }`}
                asChild
              >
                <Link to="/signup">{plan.cta}</Link>
              </Button>

              <p className={`text-sm font-semibold mb-4 ${plan.highlight ? "text-white" : "text-foreground"}`}>
                Everything included:
              </p>
              <ul className="space-y-4 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? "text-green-300" : "text-green-500"}`} />
                    <span className={`text-sm ${plan.highlight ? "text-white/90" : "text-muted-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto bg-background rounded-3xl border border-border/50 shadow-sm overflow-hidden mb-16">
          <div className="p-6 border-b bg-muted/20">
            <h3 className="text-xl font-bold text-center">Compare Plans</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/10">
                <tr>
                  <th className="p-4 text-left font-medium text-muted-foreground">Features</th>
                  <th className="p-4 text-center font-bold">Starter</th>
                  <th className="p-4 text-center font-bold text-[#4A154B]">Professional</th>
                  <th className="p-4 text-center font-bold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {compareFeatures.map((row, i) => (
                  <tr key={i} className="hover:bg-muted/5">
                    <td className="p-4 font-medium">{row.name}</td>
                    <td className="p-4 text-center text-muted-foreground">
                      {typeof row.starter === 'boolean' ? (row.starter ? <Check className="w-5 h-5 mx-auto text-green-500" /> : <X className="w-5 h-5 mx-auto text-muted-foreground/30" />) : row.starter}
                    </td>
                    <td className="p-4 text-center font-medium bg-[#4A154B]/5">
                      {typeof row.pro === 'boolean' ? (row.pro ? <Check className="w-5 h-5 mx-auto text-green-500" /> : <X className="w-5 h-5 mx-auto text-muted-foreground/30" />) : row.pro}
                    </td>
                    <td className="p-4 text-center text-muted-foreground">
                      {typeof row.ent === 'boolean' ? (row.ent ? <Check className="w-5 h-5 mx-auto text-green-500" /> : <X className="w-5 h-5 mx-auto text-muted-foreground/30" />) : row.ent}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg font-bold mb-2">30-day money-back guarantee</p>
          <p className="text-muted-foreground">Not satisfied? Get a full refund within 30 days, no questions asked.</p>
        </div>

      </div>
    </section>
  );
}
