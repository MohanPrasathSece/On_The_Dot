import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the free trial work?",
    answer: "Start with our free plan that includes up to 5 invoices per month. No credit card required. When you're ready for more, upgrade to Pro or Premium with just one click.",
  },
  {
    question: "Can I customize my invoice templates?",
    answer: "Absolutely! Add your logo, choose your brand colors, customize fonts, and even add custom fields. Pro and Premium plans offer advanced branding options including custom domains.",
  },
  {
    question: "What payment methods do you support?",
    answer: "We integrate with Stripe, PayPal, and Plaid to accept payments globally. Your clients can pay via credit card, bank transfer, or their preferred payment method.",
  },
  {
    question: "How do smart auto-reminders work?",
    answer: "Our AI analyzes payment patterns and sends reminders at optimal times. You set the cadence (3, 7, or 14 days) and tone (polite, firm, or urgent). We handle the rest automatically.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we take security seriously. All data is encrypted at rest and in transit. We're SOC 2 compliant and never share your information with third parties.",
  },
  {
    question: "Can I invite my team?",
    answer: "Premium plans include team collaboration. Invite members, assign roles (Admin, Editor, Viewer), and work together in real-time with full audit logs.",
  },
  {
    question: "What happens if I cancel?",
    answer: "You can cancel anytime. You'll keep access until the end of your billing period. All your data can be exported before cancellation.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, just reach out to our support team.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
              FAQ
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Frequently asked questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about OnTheDot
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-xl px-6 border-0"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
