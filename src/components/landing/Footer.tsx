import { Link } from "react-router-dom";
import { Twitter, Linkedin, Facebook, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Start Free Trial"],
  Support: ["FAQ", "Contact Support", "Give Feedback", "API Docs"],
};

export function Footer() {
  return (
    <footer id="footer" className="bg-background pt-20 pb-10 border-t border-border/50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">O</span>
              </div>
              <span className="font-bold text-xl tracking-tight">OnTheDot</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Professional invoicing made simple. Get paid faster with automated reminders, beautiful branded invoices, and powerful cash flow insights.
            </p>
            <div className="flex items-center gap-2 text-sm text-foreground font-medium mb-6">
              <Mail className="w-4 h-4" />
              <a href="mailto:support@onthedot.com" className="hover:underline">support@onthedot.com</a>
            </div>
            <div className="flex items-center gap-4">
              {[
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Facebook, label: "Facebook" },
                { icon: Github, label: "GitHub" },
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-foreground mb-6">{category}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Card */}
          <div className="lg:col-span-1">
            <div className="bg-muted/30 p-6 rounded-2xl border border-border/50">
              <h4 className="font-bold mb-2">Contact Support</h4>
              <p className="text-sm text-muted-foreground mb-4">Need help? We're available 24/7.</p>
              <Button variant="outline" className="w-full bg-background">Give Feedback</Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} OnTheDot. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
            <a href="#" className="hover:text-foreground">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
