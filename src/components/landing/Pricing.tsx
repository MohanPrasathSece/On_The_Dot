import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const plans = [
  {
    name: "Free Trial",
    price: { monthly: 0, yearly: 0 },
    description: "Limited features, 30-day free trial of the Pro plan.",
    features: [
      "2 Clients",
      "3 Invoices per month",
      "Basic Reporting",
      "Email Support"
    ],
    cta: "Start Free Trial",
    highlight: false,
    badge: "30 Days Free"
  },
  {
    name: "Pro",
    price: { monthly: 10, yearly: 100 },
    description: "Full Invoicing & Reminders for freelancers.",
    features: [
      "Full Invoicing & Reminders",
      "Access to Reports & Analytics",
      "Up to 10 team members",
      "1 Integration (Stripe/PayPal)",
      "Recurring Invoices"
    ],
    cta: "Get Started",
    highlight: true,
    badge: "Popular"
  },
  {
    name: "Premium",
    price: { monthly: 20, yearly: 200 },
    description: "Advanced features for growing agencies.",
    features: [
      "Everything in Pro",
      "Unlimited Team Members",
      "Priority Support",
      "Advanced Reporting & Custom Exports",
      "Multi-Integration (Stripe, PayPal, Plaid)"
    ],
    cta: "Go Premium",
    highlight: false
  },
  {
    name: "Lifetime",
    price: { monthly: 200, yearly: 200 },
    description: "One-time payment. Full features forever.",
    features: [
      "Full Features Forever",
      "Exclusive Support",
      "Early Access to New Features",
      "No Monthly Fees",
      "All Future Updates Included"
    ],
    cta: "Get Lifetime Access",
    highlight: false,
    badge: "Best Value"
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
            Choose the specific plan that fits your stage of growth.
          </p>

          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isYearly ? "text-white" : "text-white/60"}`}>Monthly</span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-white/20 data-[state=unchecked]:bg-white/20"
            />
            <span className={`text-sm font-medium ${isYearly ? "text-white" : "text-white/60"}`}>
              Yearly <span className="text-emerald-300 text-xs ml-1">(Save ~17%)</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-6 transition-all duration-300 flex flex-col ${plan.highlight
                  ? "bg-white text-[#4A154B] shadow-2xl scale-105 z-10"
                  : "bg-white/10 text-white border border-white/20 hover:bg-white/15"
                }`}
            >
              {plan.badge && (
                <div className="absolute top-4 right-4">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${plan.highlight ? "bg-[#4A154B]/10 text-[#4A154B]" : "bg-white/20 text-white"
                    }`}>
                    {plan.badge}
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-xs mb-6 h-8 ${plan.highlight ? "text-gray-600" : "text-white/70"}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                {plan.name === "Lifetime" ? (
                  <span className="text-3xl font-bold">$200</span>
                ) : (
                  <>
                    <span className="text-3xl font-bold">
                      ${isYearly && plan.price.yearly !== 0 ? (plan.price.yearly / 12).toFixed(0) : plan.price.monthly}
                    </span>
                    <span className={`text-xs ${plan.highlight ? "text-gray-500" : "text-white/60"}`}>
                      /mo
                    </span>
                  </>
                )}

                {isYearly && plan.price.monthly > 0 && plan.name !== "Lifetime" && (
                  <div className="text-xs text-emerald-500 font-medium mt-1">
                    Billed ${plan.price.yearly} yearly
                  </div>
                )}
                {plan.name === "Lifetime" && (
                  <div className="text-xs text-emerald-300 font-medium mt-1">
                    One-time payment
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className={`w-4 h-4 shrink-0 ${plan.highlight ? "text-green-600" : "text-white"}`} />
                    <span className={`text-xs ${plan.highlight ? "text-gray-700" : "text-white/80"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full h-10 text-sm font-semibold rounded-xl ${plan.highlight
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

        {/* Enterprise */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-white/80 text-lg">
            Need enterprise-grade solutions? <a href="#" className="underline font-semibold hover:text-white">Contact Sales</a> for custom pricing.
          </p>
        </div>

        {/* Subscription Management Details */}
        <div className="max-w-4xl mx-auto bg-white/5 rounded-2xl p-8 border border-white/10">
          <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <ArrowRight className="w-5 h-5" />
            Billing & Subscription Details
          </h4>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-white/80">
            <div>
              <strong className="block text-white mb-1">Razorpay Integration</strong>
              Seamless payments via Razorpay. Support for all major cards and UPI.
            </div>
            <div>
              <strong className="block text-white mb-1">Lifetime Plan</strong>
              Pay once, enjoy forever. Perfect for freelancers who hate subscriptions.
            </div>
            <div>
              <strong className="block text-white mb-1">Cancellation Policy</strong>
              Cancel anytime from your dashboard. Access remains until billing cycle ends.
            </div>
            <div>
              <strong className="block text-white mb-1">Upgrades</strong>
              Upgrade from Pro to Premium instantly. Prorated billing applies.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
