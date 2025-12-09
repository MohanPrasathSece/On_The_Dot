import { useNavigate, Link } from "react-router-dom";
import { ArrowRight, Moon, Sun, Apple, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/components/ThemeProvider";

export default function Signup() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const { theme, setTheme } = useTheme();

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        login(); // Simulate login token
        navigate("/onboarding");
    };

    return (
        <div className="min-h-screen bg-background flex">
            {/* Left Panel - Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-foreground text-background p-12 flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-40 h-40 rounded-full border border-current" />
                    <div className="absolute bottom-40 right-20 w-60 h-60 rounded-full border border-current" />
                    <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full border border-current -translate-x-1/2 -translate-y-1/2" />
                </div>

                <div className="relative z-10 w-full max-w-lg mx-auto">
                    <div className="flex items-center gap-2 mb-12">
                        <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
                            <span className="text-foreground font-display font-bold">O</span>
                        </div>
                        <span className="font-display text-2xl font-semibold">OnTheDot</span>
                    </div>

                    <h1 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6">
                        Join thousands of
                        <br />
                        freelancers getting
                        <br />
                        paid <span className="text-muted-foreground/80 italic">on the dot.</span>
                    </h1>

                    <ul className="space-y-4 mt-8">
                        <li className="flex items-center gap-3 text-lg opacity-80">
                            <div className="w-6 h-6 rounded-full bg-background/20 flex items-center justify-center text-sm">✓</div>
                            Start your 14-day free trial
                        </li>
                        <li className="flex items-center gap-3 text-lg opacity-80">
                            <div className="w-6 h-6 rounded-full bg-background/20 flex items-center justify-center text-sm">✓</div>
                            No credit card required
                        </li>
                        <li className="flex items-center gap-3 text-lg opacity-80">
                            <div className="w-6 h-6 rounded-full bg-background/20 flex items-center justify-center text-sm">✓</div>
                            Cancel anytime
                        </li>
                    </ul>
                </div>

                <div className="relative z-10">
                    <p className="text-sm opacity-60">"OnTheDot completely transformed how I handle my agency's finances. It's simply beautiful."</p>
                    <p className="text-sm font-semibold mt-2">— Sarah Jenkins, Design Lead</p>
                </div>
            </div>

            {/* Right Panel - Signup Form */}
            <div className="flex-1 flex flex-col">
                <div className="p-6 flex justify-end">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
                    </Button>
                </div>

                <div className="flex-1 flex items-center justify-center p-8">
                    <div className="w-full max-w-md space-y-8 animate-fade-in-up">
                        <div className="text-center">
                            <h2 className="font-display text-3xl font-semibold mb-2">Create an account</h2>
                            <p className="text-muted-foreground">Enter your details making your work life easier</p>
                        </div>

                        <div className="space-y-4">
                            <Button variant="outline" className="w-full h-11 relative" onClick={handleSignup}>
                                <svg className="w-5 h-5 absolute left-4" viewBox="0 0 24 24">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                                Sign up with Google
                            </Button>
                            <Button variant="outline" className="w-full h-11 relative" onClick={handleSignup}>
                                <Apple className="w-5 h-5 absolute left-4" />
                                Sign up with Apple
                            </Button>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <Separator />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">Or continue with email</span>
                            </div>
                        </div>

                        <form onSubmit={handleSignup} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="name@example.com" required className="h-11" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" required className="h-11" />
                            </div>
                            <Button type="submit" className="w-full h-11 text-base group mt-2">
                                Get Started
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </form>

                        <p className="text-center text-sm text-muted-foreground">
                            Already have an account?{" "}
                            <Link to="/login" className="text-primary hover:underline font-medium">
                                Log in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
