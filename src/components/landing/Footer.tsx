import { Link } from "react-router-dom";
import { Twitter, Linkedin, Facebook, Globe, Mail, FileText, Layout, Package, Users, HelpCircle, Layers, ArrowRight } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Updated Footer Links based on "Header and Footer" Section 9 and others
const footerLinks = {
  Features: {
    icon: FileText,
    links: [
      { name: "Invoicing", to: "/features/invoicing" },
      { name: "Reminders", to: "/features/reminders" },
      { name: "Cash Flow Dashboard", to: "/features/cash-flow" },
      { name: "Reports & Analytics", to: "/features/reports" },
      { name: "Integrations", to: "/features/integrations" },
      { name: "Team Collaboration", to: "/features/team" },
      { name: "Security & Compliance", to: "/features/security" }
    ]
  },
  Solutions: {
    icon: Layers,
    links: [
      { name: "Freelancers", to: "/solutions/sol-freelancers" },
      { name: "Small Agencies", to: "/solutions/sol-agencies" },
      { name: "Project Managers", to: "/solutions/sol-pm" },
      { name: "Financial Teams", to: "/solutions/sol-finance" },
      { name: "E-Commerce", to: "/solutions/ind-ecommerce" },
      { name: "Healthcare", to: "/solutions/ind-healthcare" },
      { name: "Legal & Accounting", to: "/solutions/ind-legal" }
    ]
  },
  Product: {
    icon: Package,
    links: [
      { name: "Why Flowryte?", to: "/features/prod-why" },
      { name: "Vs. Manual Invoicing", to: "/features/prod-vs-manual" },
      { name: "Vs. Other Tools", to: "/features/prod-vs-tools" },
      { name: "Productivity", to: "/features/prod-productivity" },
      { name: "Task Management", to: "/features/prod-tasks" }
    ]
  },
  Resources: {
    icon: Globe,
    links: [
      { name: "Resource Library", to: "/resources/res-library" },
      { name: "What's New", to: "/resources/res-whats-new" },
      { name: "Product Tour", to: "/resources/res-tour" },
      { name: "Events", to: "/resources/res-events" },
      { name: "Developers", to: "/resources/res-devs" },
      { name: "Customer Stories", to: "/resources/res-stories" },
      { name: "Community", to: "/resources/res-community" },
      { name: "Marketplace", to: "/resources/res-marketplace" }
    ]
  },
  Company: {
    icon: Users,
    links: [
      { name: "About Us", to: "/company/com-about" },
      { name: "News", to: "/company/com-news" },
      { name: "Careers", to: "/company/com-careers" },
      { name: "Swag Store", to: "/company/com-swag" },
      { name: "Brand Center", to: "/company/com-brand" },
      { name: "Engineering Blog", to: "/company/com-eng-blog" },
      { name: "Design Blog", to: "/company/com-design-blog" },
      { name: "Contact Us", to: "/company/com-contact" }
    ]
  },
  Support: {
    icon: HelpCircle,
    links: [
      { name: "Live Chat Support", to: "/support/sup-chat" },
      { name: "Help Center", to: "/support/sup-help" },
      { name: "Ticketing System", to: "/support/sup-ticket" },
      { name: "Feature Request", to: "/support/sup-request" },
      { name: "Status Page", to: "/support/sup-status" }
    ]
  }
};

export function Footer() {
  const handleSocialClick = (platform: string) => {
    toast({
      title: "Social Media",
      description: `This would open Flowryte's ${platform} page in a new tab.`,
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-muted/30 pt-24 pb-12 border-t border-border/50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">

        {/* Top Section: Brand + Links Grid */}
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 mb-20">

          {/* Brand Info */}
          <div className="lg:w-1/4 shrink-0 space-y-8">
            <Link to="/" className="flex items-center gap-2 group" onClick={scrollToTop}>
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
                <span className="text-primary-foreground font-bold text-xl">F</span>
              </div>
              <span className="font-bold text-2xl tracking-tight">Flowryte</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              The complete financial operating system for freelancers and agencies. Invoicing, payments, and cash flow—all in one place.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Twitter, label: 'Twitter' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Mail, label: 'Email' }
              ].map((social) => (
                <button
                  key={social.label}
                  onClick={() => handleSocialClick(social.label)}
                  className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all hover:-translate-y-1"
                >
                  <social.icon className="w-4 h-4" />
                  <span className="sr-only">{social.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-8 gap-y-12">
            {Object.entries(footerLinks).map(([category, { icon: Icon, links }]) => (
              <div key={category} className="space-y-4">
                <div className="flex items-center gap-2 font-bold text-foreground mb-4">
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="uppercase text-xs tracking-wider">{category}</span>
                </div>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.to}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors block hover:translate-x-1 duration-200"
                        onClick={scrollToTop}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Flowryte, Inc. All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground font-medium">
            <Link to="/legal/leg-privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/legal/leg-terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/legal/leg-cookie" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>

          {/* Newsletter */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <Input
                type="email"
                placeholder="Subscribe to newsletter"
                className="pr-10 bg-background/50"
              />
              <Button
                size="sm"
                className="absolute right-0 top-0 h-full rounded-l-none px-3"
                onClick={() => toast({ title: "Subscribed!", description: "Thank you for subscribing to our newsletter." })}
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


