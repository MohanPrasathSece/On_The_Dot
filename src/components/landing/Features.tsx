import { FileText, Bell, BarChart3, Zap, RefreshCw, CreditCard } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "2-Click Branded Invoices",
    description: "Create stunning, professional invoices in seconds. Add your logo, customize colors, and send with confidence.",
  },
  {
    icon: Bell,
    title: "Smart Auto-Reminders",
    description: "AI-powered payment reminders sent at the perfect time. Polite, firm, or urgent—you choose the tone.",
  },
  {
    icon: BarChart3,
    title: "Cash Flow Dashboard",
    description: "Real-time insights into your income, expenses, and projections. Know exactly where your money is.",
  },
  {
    icon: Zap,
    title: "AI Writing Assistance",
    description: "Generate professional invoice descriptions, email copy, and reminder messages with GPT-powered suggestions.",
  },
  {
    icon: RefreshCw,
    title: "Recurring Invoices",
    description: "Set it and forget it. Automate monthly, quarterly, or custom billing cycles for repeat clients.",
  },
  {
    icon: CreditCard,
    title: "Payment Integrations",
    description: "Connect Stripe, PayPal, and Plaid. Accept payments globally and track everything automatically.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
            Features
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Everything you need to get paid faster
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful tools designed for freelancers and agencies who want to spend less time on invoicing and more time on what they love.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass hover-lift rounded-2xl p-6 sm:p-8 cursor-default"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center mb-6 group-hover:bg-foreground/10 transition-colors">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Before vs After Section */}
        <div className="mt-24 sm:mt-32">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              Before vs After OnTheDot
            </h2>
            <p className="text-muted-foreground">
              See the difference automation makes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Before */}
            <div className="glass rounded-2xl p-6 sm:p-8 border-foreground/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center">
                  <span className="text-lg">😫</span>
                </div>
                <h3 className="font-display text-xl font-semibold">Before</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Manually tracking invoices in spreadsheets",
                  "Forgetting to send payment reminders",
                  "Chasing clients for weeks",
                  "No visibility into cash flow",
                  "Hours wasted on admin work",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-foreground/30 mt-1">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="glass-strong rounded-2xl p-6 sm:p-8 border-foreground/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
                  <span className="text-lg">✨</span>
                </div>
                <h3 className="font-display text-xl font-semibold">After</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Professional invoices in 2 clicks",
                  "Automated reminders at the right time",
                  "Clients pay 40% faster on average",
                  "Real-time cash flow dashboard",
                  "More time for meaningful work",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-foreground mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
