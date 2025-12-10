import { Link } from "react-router-dom";

const footerLinks = {
  Product: ["Features", "Solutions", "Pricing", "Enterprise", "Changelog", "Status Page"],
  Resources: ["Help Center", "Resources Library", "Blog", "Customer Stories", "Community", "Developers"],
  Company: ["About Us", "Careers", "News / Media Kit", "Contact Us", "Trust Center"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"]
};

export function Footer() {
  return (
    <footer id="footer" className="border-t border-border/50 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-[#4A154B] flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="font-bold text-xl tracking-tight">OnTheDot</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              The modern invoicing platform for freelancers and agencies.
            </p>

            {/* Newsletter */}
            <div className="mb-8">
              <h5 className="font-semibold text-sm mb-2">Stay up to date</h5>
              <div className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#4A154B] text-white shadow hover:bg-[#4A154B]/90 h-9 px-4 py-2">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {["X", "LinkedIn", "GitHub"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center text-xs font-medium text-muted-foreground hover:bg-foreground/10 hover:text-foreground transition-colors"
                  aria-label={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-sm mb-4 text-foreground">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-[#4A154B] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} OnTheDot. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              System Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
