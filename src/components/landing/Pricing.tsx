import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const plans = [
  {
    name: "Pro Plan",
    price: 10,
    description: "Full Invoicing & Reminders",
    features: [
      "Access to Reports & Analytics",
      "Up to 10 team members",
      "1 Integration (Stripe/PayPal)"
    ],
    cta: "Start 30-day free trial",
    highlight: false
  },
  {
    name: "Premium Plan",
    price: 20,
    description: "Everything in Pro, plus advanced features",
    features: [
      "Unlimited Team Members",
      "Priority Support",
      "Advanced Reporting & Custom Export Options",
      "Multi-Integration (Stripe, PayPal, Plaid)"
    ],
    cta: "Start 30-day free trial",
    highlight: true,
    badge: "Most Popular"
  },
  {
    name: "Lifetime Plan",
    price: 200,
    oneTime: true,
    description: "Full Features Forever",
    features: [
      "Exclusive Support",
      "Early Access to New Features",
      "All Premium Features",
      "One-time payment"
    ],
    cta: "Get Lifetime Access",
    highlight: false
  }
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            30-day free trial of the Pro plan. No credit card required.
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
            />
            <span className={`text-sm font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Yearly <span className="text-emerald-500 text-xs font-bold ml-1">Save 17%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${plan.highlight
                ? "bg-primary text-primary-foreground shadow-2xl scale-105 z-10"
                : "bg-background border border-border/50 hover:shadow-lg"
                }`}
            >
              {plan.badge && (
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-bold px-2 py-1 rounded-full bg-primary-foreground text-primary">
                    {plan.badge}
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-4xl font-bold">
                  ${plan.oneTime ? plan.price : (isYearly ? Math.round(plan.price * 0.83) : plan.price)}
                </span>
                <span className={`text-sm ${plan.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {plan.oneTime ? " one-time" : "/month"}
                </span>
              </div>

              <Button
                className={`w-full mb-8 rounded-xl font-semibold h-12 ${plan.highlight
                  ? "bg-background text-primary hover:bg-background/90"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                asChild
              >
                <Link to="/signup">{plan.cta}</Link>
              </Button>

              <p className={`text-sm font-semibold mb-4 ${plan.highlight ? "text-primary-foreground" : "text-foreground"}`}>
                What's included:
              </p>
              <ul className="space-y-4 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? "text-primary-foreground/70" : "text-green-500"}`} />
                    <span className={`text-sm ${plan.highlight ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enterprise Pricing */}
        <div className="max-w-3xl mx-auto bg-background rounded-3xl border border-border/50 p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Enterprise Pricing</h3>
          <p className="text-muted-foreground mb-8">Need a custom solution? Contact our sales team for enterprise-grade solutions tailored to your organization.</p>
          <Button size="lg" variant="outline" className="px-8">Contact Sales</Button>
        </div>

      </div>
    </section>
  );
}
