
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Facebook, Globe, Mail } from "lucide-react";

// Structure reflecting the user's detailed list, organized by category
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
    { name: "Freelancers", to: "/solutions/freelancers" },
    { name: "Small Agencies", to: "/solutions/agencies" },
    { name: "Project Managers", to: "/solutions/project-managers" },
    { name: "Financial Teams", to: "/solutions/finance" },
    { name: "E-Commerce", to: "/solutions/ecommerce" },
    { name: "Healthcare & Life Sciences", to: "/solutions/healthcare" },
    { name: "Legal & Accounting", to: "/solutions/legal" }
  ],
  Resources: [
    { name: "Resource Library", to: "/resources/library" },
    { name: "What's New", to: "/resources/whats-new" },
    { name: "Product Tour", to: "/resources/tour" },
    { name: "Events", to: "/resources/events" },
    { name: "Developer Resources", to: "/resources/developers" },
    { name: "Customer Stories", to: "/resources/stories" },
    { name: "Community", to: "/resources/community" },
    { name: "Marketplace", to: "/resources/marketplace" }
  ],
  Company: [
    { name: "About Us", to: "/company/about" },
    { name: "News", to: "/company/news" },
    { name: "Careers", to: "/company/careers" },
    { name: "Swag Store", to: "/company/swag" },
    { name: "Brand Center", to: "/company/brand" },
    { name: "Engineering Blog", to: "/company/engineering" },
    { name: "Design Blog", to: "/company/design" },
    { name: "Contact Us", to: "/company/contact" }
  ],
  Support: [
    { name: "Live Chat Support", to: "/support/chat" },
    { name: "Help Center", to: "/support/help" },
    { name: "Ticketing System", to: "/support/tickets" },
    { name: "Feature Request", to: "/support/requests" },
    { name: "Status Page", to: "/support/status" }
  ]
};

export function Footer() {
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
                <span className="text-primary-foreground font-bold text-lg">O</span>
              </div>
              <span className="font-bold text-xl tracking-tight">OnTheDot</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Simplifying invoicing and payment processes for freelancers and small businesses worldwide.
            </p>
            <div className="flex items-center gap-4 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
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
              <span>© {new Date().getFullYear()} OnTheDot, Inc.</span>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/legal/privacy" className="hover:text-primary font-medium">Privacy</Link>
              <Link to="/legal/terms" className="hover:text-primary font-medium">Terms</Link>
              <Link to="/legal/cookie" className="hover:text-primary font-medium">Cookie Preferences</Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-foreground font-bold cursor-pointer hover:text-primary transition-colors">
              <Globe className="w-4 h-4" />
              <span>English (US)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
