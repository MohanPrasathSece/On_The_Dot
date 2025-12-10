import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import { NavbarMegaMenu } from "./NavbarMegaMenu";

/* const navLinks = [
  { name: "About", href: "#why" },
  { name: "Features", href: "#features" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
]; */

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled || isMobileMenuOpen
          ? "bg-white/95 dark:bg-background/95 backdrop-blur-lg border-border/50"
          : "bg-white dark:bg-background border-transparent"
      )}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-primary-foreground font-bold text-lg">O</span>
            </div>
            <span className="font-bold text-xl tracking-tight">OnTheDot</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <NavbarMegaMenu />
            <Link to="/features/enterprise" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
              Enterprise
            </Link>
            <Link to="/pricing" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full text-muted-foreground hover:text-foreground"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <div className="h-4 w-[1px] bg-border" />
            <Link to="/login" className="text-sm font-semibold hover:text-primary transition-colors">
              Log In
            </Link>
            <Link to="/signup">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg px-6">
                Start Free Trial
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 animate-fade-in border-t border-border/50 h-screen bg-background">
            <div className="flex flex-col gap-6 px-4">
              <Link to="/features/features" className="text-lg font-medium text-foreground/80 hover:text-foreground">Features</Link>
              <Link to="/features/solutions" className="text-lg font-medium text-foreground/80 hover:text-foreground">Solutions</Link>
              <Link to="/features/enterprise" className="text-lg font-medium text-foreground/80 hover:text-foreground">Enterprise</Link>
              <Link to="/features/resources-library" className="text-lg font-medium text-foreground/80 hover:text-foreground">Resources</Link>
              <Link to="/pricing" className="text-lg font-medium text-foreground/80 hover:text-foreground">Pricing</Link>
              <div className="flex flex-col gap-4 pt-6 border-t border-border/50">
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full h-12 text-lg">Log In</Button>
                </Link>
                <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full h-12 text-lg bg-primary hover:bg-primary/90 text-primary-foreground">Start Free Trial</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
