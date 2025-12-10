
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Facebook, Github, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

// The exact structure requested by the user
const footerLinks = {
  Product: [
    "Watch demo",
    "Pricing",
    "Paid vs Free",
    "Accessibility",
    "Featured releases",
    "Change log",
    "Status"
  ],
  "Why Slack?": [
    "Slack vs email",
    "Enterprise",
    "Small business",
    "Productivity",
    "Task management",
    "Scale",
    "Trust"
  ],
  Features: [
    "Channels",
    "Slack Connect",
    "Workflow Builder",
    "Messaging",
    "Huddles",
    "Canvas",
    "Lists",
    "Clips",
    "Apps & integrations",
    "File sharing",
    "Slack AI",
    "Agentforce",
    "Enterprise search",
    "Security",
    "Enterprise Key Management",
    "Slack Atlas",
    "See all features"
  ],
  Solutions: [
    "Engineering",
    "IT",
    "Customer service",
    "Sales",
    "Project management",
    "Marketing",
    "Security", // This might duplicate the key 'security', handled by unique paths usually or shared page
    "Manufacturing, auto and energy",
    "Technology",
    "Media",
    "Financial services",
    "Retail",
    "Public sector",
    "Education",
    "Health and life sciences",
    "See all solutions"
  ],
  Resources: [
    "Help Centre",
    "What’s new",
    "Resources library",
    "Slack blog",
    "Community",
    "Customer stories",
    "Events",
    "Developers",
    "Partners",
    "Partner offers",
    "Slack Marketplace",
    "Slack Certified"
  ],
  Company: [
    "About us",
    "News",
    "Media kit",
    "Brand centre",
    "Careers",
    "Slack shop",
    "Engineering blog",
    "Design blog",
    "Contact us"
  ]
};

export function Footer() {
  return (
    <footer id="footer" className="bg-background pt-20 pb-10 border-t border-border/50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12 mb-16">

          {/* Brand - forced to top on mobile, maybe specialized placement */}
          <div className="col-span-2 md:col-span-3 lg:col-span-6 mb-4">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">O</span>
              </div>
              <span className="font-bold text-xl tracking-tight">OnTheDot</span>
            </Link>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-foreground mb-4 uppercase text-xs tracking-wider">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => {
                  // Advanced Slugify to match keys
                  let path = link.toLowerCase()
                    .replace(/['’]/g, "") // Remove quotes like What's -> Whats
                    .replace(/&/g, "and")
                    .replace(/,/g, "")
                    .replace(/\s+/g, "-");

                  // Handle special known discrepancies if any
                  // e.g. "Slack AI" -> "slack-ai" (handled by simple slugify)
                  // "Manufacturing, auto and energy" -> "manufacturing-auto-and-energy" (handled)

                  // Route logic
                  const isMainPage = ["pricing", "status"].includes(path);
                  const effectiveTo = isMainPage ? `/${path}` : `/features/${path}`;

                  return (
                    <li key={link + category}> {/* Added category to key to avoid duplicate key issues if 'Security' appears twice */}
                      <Link
                        to={effectiveTo}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                      >
                        {link}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-foreground hover:underline cursor-pointer">Status</span>
              <span className="font-semibold text-foreground hover:underline cursor-pointer">Privacy</span>
              <span className="font-semibold text-foreground hover:underline cursor-pointer">Terms</span>
              <span className="font-semibold text-foreground hover:underline cursor-pointer">Cookie Preferences</span>
              <span className="font-semibold text-foreground hover:underline cursor-pointer">Contact Us</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-foreground font-bold cursor-pointer hover:text-primary transition-colors">
              <Globe className="w-4 h-4" />
              <span>Change Region</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#"><Twitter className="w-4 h-4" /></a>
              <a href="#"><Facebook className="w-4 h-4" /></a>
              <a href="#"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-xs text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} OnTheDot, Inc. All rights reserved. OnTheDot is a registered trademark of OnTheDot, Inc.
        </div>
      </div>
    </footer>
  );
}
