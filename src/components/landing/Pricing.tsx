import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const plans = [
  {
    name: "Free Trial",
    price: { monthly: 0, yearly: 0 },
    description: "Perfect for testing the waters.",
    features: [
      "3 Clients",
      "5 Invoices per month",
      "Basic Reporting",
      "Email Support"
    ],
    cta: "Start Free Trial",
    highlight: false
  },
  {
    name: "Pro",
    price: { monthly: 15, yearly: 12 },
    description: "For freelancers growing their business.",
    features: [
      "Unlimited Clients",
      "Unlimited Invoices",
      "Auto-Reminders",
      "Custom Branding",
      "Stripe & PowerPoint Integration"
    ],
    cta: "Get Started",
    highlight: true
  },
  {
    name: "Premium",
    price: { monthly: 39, yearly: 29 },
    description: "Power features for scaling agencies.",
    features: [
      "Everything in Pro",
      "Team Roles & Permissions",
      "Advanced Cash Flow Charts",
      "Priority Support",
      "API Access"
    ],
    cta: "Go Premium",
    highlight: false
  }
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" className="py-24 bg-[#4A154B] text-white overflow-hidden relative">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Simple, transparent pricing.
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Choose the plan that fits your stage of growth. No hidden fees.
          </p>

          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isYearly ? "text-white" : "text-white/60"}`}>Monthly</span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-white/20 data-[state=unchecked]:bg-white/20"
            />
            <span className={`text-sm font-medium ${isYearly ? "text-white" : "text-white/60"}`}>
              Yearly <span className="text-emerald-300 text-xs ml-1">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${plan.highlight
                  ? "bg-white text-[#4A154B] shadow-2xl scale-105 z-10"
                  : "bg-white/10 text-white border border-white/20 hover:bg-white/15"
                }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.highlight ? "text-gray-600" : "text-white/70"}`}>
                {plan.description}
              </p>

              <div className="mb-8">
                <span className="text-4xl font-bold">
                  ${isYearly ? plan.price.yearly : plan.price.monthly}
                </span>
                <span className={`text-sm ${plan.highlight ? "text-gray-500" : "text-white/60"}`}>
                  /mo
                </span>
                {isYearly && plan.price.monthly > 0 && (
                  <div className="text-xs text-emerald-500 font-medium mt-1">
                    Billed ${plan.price.yearly * 12} yearly
                  </div>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? "text-green-600" : "text-white"}`} />
                    <span className={`text-sm ${plan.highlight ? "text-gray-700" : "text-white/80"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full h-12 text-base font-semibold rounded-xl ${plan.highlight
                    ? "bg-[#4A154B] hover:bg-[#4A154B]/90 text-white"
                    : "bg-white hover:bg-white/90 text-[#4A154B]"
                  }`}
                asChild
              >
                <Link to="/signup">{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Subscription Management Details */}
        <div className="max-w-4xl mx-auto bg-white/5 rounded-2xl p-8 border border-white/10">
          <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <ArrowRight className="w-5 h-5" />
            Frequently asked questions about billing
          </h4>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-white/80">
            <div>
              <strong className="block text-white mb-1">Payment Methods</strong>
              We accept all major credit cards via Stripe and Razorpay. Secure and encrypted.
            </div>
            <div>
              <strong className="block text-white mb-1">Cancellation Policy</strong>
              Cancel anytime from your dashboard. No questions asked. You'll retain access until the end of your billing cycle.
            </div>
            <div>
              <strong className="block text-white mb-1">Upgrades & Downgrades</strong>
              Change your plan instantly. We'll prorate the difference automatically.
            </div>
            <div>
              <strong className="block text-white mb-1">History & Invoices</strong>
              Access your full billing history and download tax-ready invoices from your Settings page.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
