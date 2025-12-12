import { useNavigate, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";

export default function Signup() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSignup = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        login();
        navigate("/onboarding");
    };

    return (
        <div className="min-h-screen bg-white dark:bg-background flex flex-col">
            {/* Header */}
            <header className="p-6">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-sidebar flex items-center justify-center">
                        <span className="text-white font-bold text-lg">O</span>
                    </div>
                    <span className="font-bold text-xl">Flowryte</span>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="w-full max-w-2xl space-y-8">
                    {/* Logo and Title */}
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                            First, enter your email
                        </h1>
                        <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto">
                            We suggest using the <strong>email address you use at work</strong>.
                        </p>
                    </div>

                    {/* Sign Up Form */}
                    <div className="space-y-6 pt-8 max-w-md mx-auto">
                        {/* Email Input */}
                        <form onSubmit={handleSignup} className="space-y-4">
                            <div>
                                <Input
                                    type="email"
                                    placeholder="name@work-email.com"
                                    className="h-14 text-lg border-2"
                                    required
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-14 text-lg bg-sidebar hover:bg-sidebar/90 text-white font-semibold"
                            >
                                Continue
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </form>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-border" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-white dark:bg-background px-2 text-muted-foreground">
                                    OR
                                </span>
                            </div>
                        </div>

                        {/* OAuth Buttons */}
                        <div className="space-y-3">
                            <Button
                                onClick={() => handleSignup()}
                                variant="outline"
                                className="w-full h-14 text-base border-2 font-semibold"
                            >
                                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                Continue with Google
                            </Button>

                            <Button
                                onClick={() => handleSignup()}
                                variant="outline"
                                className="w-full h-14 text-base border-2 font-semibold"
                            >
                                <svg className="w-5 h-5 mr-3 fill-current" viewBox="0 0 24 24">
                                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                </svg>
                                Continue with Apple
                            </Button>
                        </div>

                        {/* Footer Links */}
                        <div className="text-center text-sm text-muted-foreground pt-6">
                            <p>
                                Already using Flowryte?{" "}
                                <Link to="/login" className="text-primary hover:underline font-medium">
                                    Sign in to an existing workspace
                                </Link>
                            </p>
                        </div>
                    </div>

                    {/* Privacy notice */}
                    <div className="text-center text-xs text-muted-foreground pt-8 max-w-2xl mx-auto">
                        <p>
                            By continuing, you're agreeing to our{" "}
                            <a href="#" className="text-primary hover:underline">Customer Terms of Service</a>,{" "}
                            <a href="#" className="text-primary hover:underline">Privacy Policy</a>, and{" "}
                            <a href="#" className="text-primary hover:underline">Cookie Policy</a>.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="p-6 text-center text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} Flowryte. All rights reserved.</p>
            </footer>
        </div>
    );
}
