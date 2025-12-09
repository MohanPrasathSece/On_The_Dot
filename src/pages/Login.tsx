import { useNavigate } from "react-router-dom";
import { ArrowRight, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/components/ThemeProvider";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { theme, setTheme } = useTheme();

  const handleLogin = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex login-page">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-foreground text-background p-12 flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 rounded-full border border-current" />
          <div className="absolute bottom-40 right-20 w-60 h-60 rounded-full border border-current" />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full border border-current -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-12">
            <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
              <span className="text-foreground font-display font-bold">O</span>
            </div>
            <span className="font-display text-2xl font-semibold">OnTheDot</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Invoicing. Reminders.
            <br />
            Cash Flow —
            <br />
            <span className="opacity-70">On The Dot.</span>
          </h1>
          
          <p className="text-lg opacity-80 max-w-md">
            The modern invoicing platform for freelancers and agencies who want to get paid faster.
          </p>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-8">
            <div>
              <p className="text-3xl font-semibold">10,000+</p>
              <p className="opacity-70">Professionals</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">$50M+</p>
              <p className="opacity-70">Invoiced</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">40%</p>
              <p className="opacity-70">Faster Payments</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Login */}
      <div className="flex-1 flex flex-col">
        <div className="p-6 flex justify-between items-center">
          <div className="flex items-center gap-2 lg:hidden">
            <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
              <span className="text-background font-display font-bold text-sm">O</span>
            </div>
            <span className="font-display text-lg font-semibold">OnTheDot</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-auto"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
          </Button>
        </div>

        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <h2 className="font-display text-3xl font-semibold mb-2">Welcome back</h2>
              <p className="text-muted-foreground">Sign in to continue to your dashboard</p>
            </div>

            <div className="space-y-4">
              <Button onClick={handleLogin} className="w-full h-12 text-base rounded-full group">
                Click to Login
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Quick Access</span>
                </div>
              </div>

              <p className="text-center text-sm text-muted-foreground">
                Click the button above to explore the full application with sample data.
              </p>
            </div>

            <div className="space-y-4 pt-8">
              <div className="glass rounded-xl p-4 text-center">
                <p className="text-sm text-muted-foreground mb-2">Experience the full product</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {["Dashboard", "Invoices", "Clients", "Reports", "Team"].map((feature) => (
                    <span key={feature} className="px-3 py-1 bg-muted rounded-full text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} OnTheDot. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
