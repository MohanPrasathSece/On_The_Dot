import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Check, ArrowRight, X, Star, Zap, Shield, Headphones, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";

const plans = [
  {
    id: "pro",
    name: "Pro Plan",
    price: 10,
    yearlyPrice: 100,
    description: "Perfect for freelancers and small teams",
    icon: <Star className="w-6 h-6" />,
    features: [
      "Unlimited Invoices & Estimates",
      "Automated Payment Reminders",
      "Basic Analytics & Reporting",
      "Up to 10 team members",
      "1 Payment Integration (Stripe or PayPal)",
      "Mobile App Access",
      "Email Support"
    ],
    notIncluded: [
      "Custom Branding",
      "Advanced Analytics",
      "Priority Support",
      "API Access"
    ],
    cta: "Start 30-day free trial",
    highlight: false,
    popular: false
  },
  {
    id: "premium",
    name: "Premium Plan",
    price: 20,
    yearlyPrice: 200,
    description: "Ideal for growing businesses",
    icon: <Zap className="w-6 h-6" />,
    features: [
      "Everything in Pro, plus:",
      "Unlimited Team Members",
      "Advanced Analytics & Custom Reports",
      "Multiple Payment Integrations",
      "Custom Branding & Templates",
      "Priority Email & Chat Support",
      "Automated Workflows",
      "Client Portal Access"
    ],
    notIncluded: [
      "Dedicated Account Manager",
      "Custom API Development",
      "White-label Solutions"
    ],
    cta: "Start 30-day free trial",
    highlight: true,
    popular: true,
    badge: "Most Popular"
  },
  {
    id: "lifetime",
    name: "Lifetime Plan",
    price: 499,
    oneTime: true,
    description: "Ultimate value for lifetime access",
    icon: <Shield className="w-6 h-6" />,
    features: [
      "All Premium Features Forever",
      "All Future Updates Included",
      "Priority Lifetime Support",
      "Advanced API Access",
      "Custom Integrations Setup",
      "Exclusive Feature Requests",
      "1:1 Onboarding Session"
    ],
    notIncluded: [
      "Custom Development",
      "Hosting Services"
    ],
    cta: "Get Lifetime Access",
    highlight: false,
    popular: false
  }
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showDemoDialog, setShowDemoDialog] = useState(false);
  const [demoDate, setDemoDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | undefined>();
  const navigate = useNavigate();

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    // Navigate to trial signup with plan selection
    navigate(`/trial?plan=${planId}&billing=${isYearly ? 'yearly' : 'monthly'}`);
  };

  const handleScheduleDemo = () => {
    if (!demoDate || !selectedTime) {
      return;
    }
    // In a real app, this would submit the selected date and time to a backend
    // For now, we simulate success and redirect to signup
    setShowDemoDialog(false);
    navigate("/signup");
  };

  const getDisplayPrice = (plan: any) => {
    if (plan.oneTime) return plan.price;
    const price = isYearly ? plan.yearlyPrice / 12 : plan.price;
    // Always show 2 decimal places for consistency
    return price.toFixed(2);
  };

  const getBillingText = (plan: any) => {
    if (plan.oneTime) return "one-time";
    return isYearly ? "/month (billed yearly)" : "/month";
  };

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start with a 30-day free trial. No credit card required. Upgrade or downgrade anytime.
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm font-medium transition-colors ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
            />
            <span className={`text-sm font-medium transition-colors ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Yearly <span className="text-emerald-500 text-xs font-bold ml-1">Save 17%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 cursor-pointer ${plan.highlight
                  ? "bg-black text-white shadow-2xl scale-105 z-10 border-2 border-yellow-500/50"
                  : selectedPlan === plan.id
                    ? "bg-background border-2 border-yellow-500 shadow-lg"
                    : "bg-background border border-border/50 hover:shadow-lg hover:border-yellow-500/50"
                }`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {plan.badge && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-yellow-500 text-black px-3 py-1">
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${plan.highlight ? "bg-yellow-500/20" : "bg-yellow-100"}`}>
                  {plan.icon}
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${plan.highlight ? "text-white" : "text-foreground"}`}>{plan.name}</h3>
                  {plan.popular && (
                    <div className="flex items-center gap-1 mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className={`text-xs ml-1 ${plan.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>4.9/5</span>
                    </div>
                  )}
                </div>
              </div>

              <p className={`text-sm mb-6 ${plan.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className={`text-4xl font-bold ${plan.highlight ? "text-white" : "text-foreground"}`}>
                    ${getDisplayPrice(plan)}
                  </span>
                  <span className={`text-sm ${plan.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {getBillingText(plan)}
                  </span>
                </div>
                {isYearly && !plan.oneTime && (
                  <p className={`text-xs mt-1 ${plan.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    Save ${(plan.price * 12 - plan.yearlyPrice)} per year
                  </p>
                )}
              </div>

              <Button
                className={`w-full mb-8 rounded-xl font-semibold h-12 transition-all ${plan.highlight
                    ? "bg-yellow-500 text-black hover:bg-yellow-400"
                    : selectedPlan === plan.id
                      ? "bg-black text-white hover:bg-black/90"
                      : "bg-black text-white hover:bg-black/90"
                  }`}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlanSelect(plan.id);
                }}
              >
                {selectedPlan === plan.id ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Selected
                  </>
                ) : (
                  <>
                    {plan.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>

              <div className="space-y-4 flex-1">
                <p className={`text-sm font-semibold ${plan.highlight ? "text-primary-foreground" : "text-foreground"}`}>
                  What's included:
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 shrink-0 mt-0.5 ${plan.highlight ? "text-primary-foreground/70" : "text-green-500"
                        }`} />
                      <span className={`text-sm ${plan.highlight ? "text-primary-foreground/90" : "text-muted-foreground"
                        } ${feature.startsWith("Everything in") ? "font-semibold" : ""}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {plan.notIncluded && plan.notIncluded.length > 0 && (
                  <div className="pt-4 border-t border-border/50">
                    <p className={`text-sm font-semibold mb-3 ${plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      Not included:
                    </p>
                    <ul className="space-y-2">
                      {plan.notIncluded.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <X className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlight ? "text-primary-foreground/50" : "text-muted-foreground/50"
                            }`} />
                          <span className={`text-sm ${plan.highlight ? "text-primary-foreground/60" : "text-muted-foreground/60"
                            }`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="max-w-7xl mx-auto mb-20 hidden md:block">
          <h3 className="text-2xl font-bold text-center mb-8">Compare all features</h3>
          <div className="bg-background rounded-2xl border border-border/50 overflow-hidden">
            <div className="grid grid-cols-4 border-b border-border/50">
              <div className="p-4 font-semibold text-foreground">Feature</div>
              {plans.map((plan) => (
                <div key={plan.id} className="p-4 text-center font-semibold text-foreground">
                  {plan.name}
                </div>
              ))}
            </div>
            {[
              { feature: "Unlimited Invoices", pro: true, premium: true, lifetime: true },
              { feature: "Team Members", pro: "Up to 10", premium: "Unlimited", lifetime: "Unlimited" },
              { feature: "Payment Integrations", pro: "1", premium: "Multiple", lifetime: "Unlimited" },
              { feature: "Custom Branding", pro: false, premium: true, lifetime: true },
              { feature: "Advanced Analytics", pro: false, premium: true, lifetime: true },
              { feature: "Priority Support", pro: false, premium: true, lifetime: true },
              { feature: "API Access", pro: false, premium: false, lifetime: true },
              { feature: "Mobile App", pro: true, premium: true, lifetime: true },
              { feature: "Client Portal", pro: false, premium: true, lifetime: true },
              { feature: "Automated Workflows", pro: false, premium: true, lifetime: true }
            ].map((row, index) => (
              <div key={index} className="grid grid-cols-4 border-b border-border/30 last:border-b-0">
                <div className="p-4 text-sm font-medium text-foreground">{row.feature}</div>
                <div className="p-4 text-center">
                  {row.pro === true ? (
                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                  ) : row.pro === false ? (
                    <X className="w-4 h-4 text-muted-foreground/50 mx-auto" />
                  ) : (
                    <span className="text-sm text-foreground">{row.pro}</span>
                  )}
                </div>
                <div className="p-4 text-center">
                  {row.premium === true ? (
                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                  ) : row.premium === false ? (
                    <X className="w-4 h-4 text-muted-foreground/50 mx-auto" />
                  ) : (
                    <span className="text-sm text-foreground">{row.premium}</span>
                  )}
                </div>
                <div className="p-4 text-center">
                  {row.lifetime === true ? (
                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                  ) : row.lifetime === false ? (
                    <X className="w-4 h-4 text-muted-foreground/50 mx-auto" />
                  ) : (
                    <span className="text-sm text-foreground">{row.lifetime}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="max-w-4xl mx-auto bg-muted rounded-3xl border border-yellow-500/50 p-8 md:p-12 text-foreground">
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Headphones className="w-6 h-6 text-yellow-500" />
              <h3 className="text-2xl font-bold">Need a custom solution?</h3>
            </div>
            <p className="text-muted-foreground mb-8">
              Contact our sales team for enterprise-grade solutions, custom features, and volume pricing tailored to your organization's needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/company/com-contact">
                <Button size="lg" variant="outline" className="px-8 border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 w-full sm:w-auto">
                  Contact Sales
                </Button>
              </Link>
              <Button
                size="lg"
                className="px-8 bg-yellow-500 text-black hover:bg-yellow-400 w-full sm:w-auto"
                onClick={() => setShowDemoDialog(true)}
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Schedule Demo Dialog */}
        <Dialog open={showDemoDialog} onOpenChange={setShowDemoDialog}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Schedule a Demo</DialogTitle>
              <DialogDescription>
                Select a date and time to schedule a live walkthrough with our product team.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6">
              {/* Calendar */}
              <div className="flex flex-col items-center justify-center p-4">
                <CalendarComponent
                  mode="single"
                  selected={demoDate}
                  onSelect={setDemoDate}
                  className="rounded-md border shadow-sm"
                  disabled={(date) => 
                    date < new Date() || 
                    date.getDay() === 0 || 
                    date.getDay() === 6
                  }
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Weekdays only. Demo times: 9AM - 5PM EST
                </p>
              </div>

              {/* Time Slots */}
              {demoDate && (
                <div className="space-y-2">
                  <p className="text-sm font-medium">Available Time Slots:</p>
                  <div className="grid grid-cols-3 gap-2">
                    {["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"].map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        size="sm"
                        className="text-xs"
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <Button variant="outline" onClick={() => setShowDemoDialog(false)}>Cancel</Button>
              <Button 
                onClick={handleScheduleDemo} 
                disabled={!demoDate || !selectedTime}
                className="bg-yellow-500 text-black hover:bg-yellow-400"
              >
                Confirm & Sign Up
              </Button>
            </div>
          </DialogContent>
        </Dialog>

      </div>
    </section>
  );
}
