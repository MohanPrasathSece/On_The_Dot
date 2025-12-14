import { Link } from "react-router-dom";
import { Twitter, Linkedin, Facebook, Globe, Mail } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

// Updated Footer Links based on "Header and Footer" Section 9 and others
const footerLinks = {
  Features: [
    { name: "Invoicing", to: "/features/invoicing" },
    { name: "Reminders", to: "/features/reminders" },
    { name: "Cash Flow Dashboard", to: "/features/cash-flow" },
    { name: "Reports & Analytics", to: "/features/reports" },
    { name: "Integrations", to: "/features/integrations" },
    { name: "Team Collaboration", to: "/features/team" },
    { name: "Security & Compliance", to: "/features/security" }
  ],
  Solutions: [
    { name: "Freelancers", to: "/solutions/sol-freelancers" },
    { name: "Small Agencies", to: "/solutions/sol-agencies" },
    { name: "Project Managers", to: "/solutions/sol-pm" },
    { name: "Financial Teams", to: "/solutions/sol-finance" },
    { name: "E-Commerce", to: "/solutions/ind-ecommerce" },
    { name: "Healthcare", to: "/solutions/ind-healthcare" },
    { name: "Legal & Accounting", to: "/solutions/ind-legal" }
  ],
  Product: [
    { name: "Why Flowryte?", to: "/features/prod-why" },
    { name: "Vs. Manual Invoicing", to: "/features/prod-vs-manual" },
    { name: "Vs. Other Tools", to: "/features/prod-vs-tools" },
    { name: "Productivity", to: "/features/prod-productivity" },
    { name: "Task Management", to: "/features/prod-tasks" }
  ],
  Resources: [
    { name: "Resource Library", to: "/resources/res-library" },
    { name: "What's New", to: "/resources/res-whats-new" },
    { name: "Product Tour", to: "/resources/res-tour" },
    { name: "Events", to: "/resources/res-events" },
    { name: "Developers", to: "/resources/res-devs" },
    { name: "Customer Stories", to: "/resources/res-stories" },
    { name: "Community", to: "/resources/res-community" },
    { name: "Marketplace", to: "/resources/res-marketplace" }
  ],
  Company: [
    { name: "About Us", to: "/company/com-about" },
    { name: "News", to: "/company/com-news" },
    { name: "Careers", to: "/company/com-careers" },
    { name: "Swag Store", to: "/company/com-swag" },
    { name: "Brand Center", to: "/company/com-brand" },
    { name: "Engineering Blog", to: "/company/com-eng-blog" },
    { name: "Design Blog", to: "/company/com-design-blog" },
    { name: "Contact Us", to: "/company/com-contact" }
  ],
  Support: [
    { name: "Live Chat Support", to: "/support/sup-chat" },
    { name: "Help Center", to: "/support/sup-help" },
    { name: "Ticketing System", to: "/support/sup-ticket" },
    { name: "Feature Request", to: "/support/sup-request" },
    { name: "Status Page", to: "/support/sup-status" }
  ]
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
    <footer id="footer" className="bg-background pt-20 pb-10 border-t border-border/50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">

        {/* Top Section: Brand + Links Grid */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16">

          {/* Brand Info (Mobile: Top, Desktop: Left) */}
          <div className="lg:w-1/5 shrink-0">
            <Link to="/" className="flex items-center gap-2 mb-6" onClick={scrollToTop}>
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">F</span>
              </div>
              <span className="font-bold text-xl tracking-tight">Flowryte</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Simplifying invoicing and payment processes for freelancers and small businesses worldwide.
            </p>
            <div className="flex items-center gap-4 text-muted-foreground">
              <button onClick={() => handleSocialClick('Facebook')} className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></button>
              <button onClick={() => handleSocialClick('Twitter')} className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></button>
              <button onClick={() => handleSocialClick('LinkedIn')} className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></button>
            </div>
          </div>

          {/* Links Grid - Grid Layout for new columns */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-bold text-foreground mb-4 uppercase text-xs tracking-wider">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.to}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors block"
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

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex items-center gap-4">
              <span>© {new Date().getFullYear()} Flowryte, Inc.</span>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/legal/leg-privacy" className="hover:text-primary font-medium">Privacy Policy</Link>
              <Link to="/legal/leg-terms" className="hover:text-primary font-medium">Terms of Service</Link>
              <Link to="/legal/leg-cookie" className="hover:text-primary font-medium">Cookie Policy</Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <h4 className="font-bold uppercase text-xs tracking-wider">Newsletter</h4>
            </div>
            {/* Simple signup concept as requested */}
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-background border rounded px-2 py-1 text-sm outline-none w-32" />
              <button className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">Sub</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
