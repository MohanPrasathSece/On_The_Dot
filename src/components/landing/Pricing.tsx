import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free Trial",
    description: "Perfect for trying out OnTheDot",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "Up to 5 invoices/month",
      "Basic templates",
      "Email reminders",
      "1 payment integration",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    description: "For growing freelancers",
    monthlyPrice: 10,
    yearlyPrice: 96,
    features: [
      "Unlimited invoices",
      "Custom branding",
      "Smart auto-reminders",
      "AI writing assistance",
      "All payment integrations",
      "Cash flow dashboard",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Premium",
    description: "For agencies & teams",
    monthlyPrice: 20,
    yearlyPrice: 192,
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Priority support",
      "Advanced reports",
      "API access",
      "Custom workflows",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Lifetime",
    description: "Pay once, use forever",
    monthlyPrice: 200,
    yearlyPrice: 200,
    isLifetime: true,
    features: [
      "Everything in Premium",
      "Lifetime updates",
      "No recurring fees",
      "Early access to features",
      "Founder's badge",
    ],
    cta: "Buy Now",
    highlighted: false,
  },
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
            Pricing
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start free, upgrade when you're ready. No hidden fees, cancel anytime.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={cn("text-sm font-medium transition-colors", !isYearly ? "text-foreground" : "text-muted-foreground")}>
              Monthly
            </span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} />
            <span className={cn("text-sm font-medium transition-colors", isYearly ? "text-foreground" : "text-muted-foreground")}>
              Yearly
              <span className="ml-2 px-2 py-0.5 rounded-full bg-foreground/10 text-xs">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "rounded-2xl p-6 sm:p-8 transition-all duration-300",
                plan.highlighted
                  ? "glass-strong border-2 border-foreground/20 scale-105"
                  : "glass hover-lift"
              )}
            >
              {plan.highlighted && (
                <div className="text-center mb-4">
                  <span className="px-3 py-1 rounded-full bg-foreground text-background text-xs font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="font-display text-xl font-semibold mb-2">
                {plan.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="font-display text-4xl font-semibold">
                  ${plan.isLifetime ? plan.monthlyPrice : (isYearly ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice)}
                </span>
                {!plan.isLifetime && plan.monthlyPrice > 0 && (
                  <span className="text-muted-foreground text-sm">/month</span>
                )}
                {plan.isLifetime && (
                  <span className="text-muted-foreground text-sm ml-2">one-time</span>
                )}
              </div>

              <Button
                className={cn(
                  "w-full rounded-full mb-6",
                  plan.highlighted
                    ? ""
                    : "bg-foreground/10 text-foreground hover:bg-foreground/20"
                )}
                variant={plan.highlighted ? "default" : "ghost"}
              >
                {plan.cta}
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-foreground/70 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
