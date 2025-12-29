import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const faqs = [
  {
    question: "How does the 14-day free trial work?",
    answer: "You get full access to the plan you choose for 14 days. No credit card is required to sign up. Detailed features are available for testing immediately."
  },
  {
    question: "Can I customize my invoice templates?",
    answer: "Yes! All plans include PDF export, but Professional and Enterprise plans allow deep customization with your logo, brand colors, and custom fonts."
  },
  {
    question: "How do payment reminders work?",
    answer: "You can set up automated email and SMS reminders. For example, send a polite email 3 days before the due date, and a firmer SMS on the due date if unpaid."
  },
  {
    question: "Which payment processors do you support?",
    answer: "We support direct integration with Stripe, PayPal, and standard Bank Transfers. You can connect your accounts to automatically reconcile payments."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use bank-level 256-bit encryption for all data transmission and storage. We are fully GDPR and PCI-DSS compliant."
  },
  {
    question: "Can I collaborate with my team?",
    answer: "Yes, the Enterprise plan supports up to 10 team members with specific roles (Admin, Editor, Viewer)."
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your first month's payment, no questions asked."
  },
  {
    question: "Can I export my data?",
    answer: "Yes, you can export all your invoices, client data, and financial reports as CSV, PDF, or Excel files at any time."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Flowryte
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center bg-muted/30 p-8 rounded-2xl max-w-2xl mx-auto">
          <h4 className="font-bold text-lg mb-2">Still have questions?</h4>
          <p className="text-muted-foreground mb-6">Can't find the answer you're looking for? Please chat to our friendly team.</p>
          <Link to="/support/sup-contact">
            <Button variant="default">Contact Support</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
