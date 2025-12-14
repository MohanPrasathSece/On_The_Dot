import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowRight, Eye, EyeOff, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";

export default function Signup() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        fullName: "",
        company: "",
        password: "",
        confirmPassword: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validateEmail = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateAccount = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.fullName) {
            newErrors.fullName = "Full name is required";
        }

        if (!formData.company) {
            newErrors.company = "Company name is required";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateEmail()) {
            setStep(2);
        }
    };

    const handleAccountSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validateAccount()) {
            setIsLoading(true);
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1500));
                login();
                navigate("/onboarding");
            } catch (error) {
                console.error("Signup failed:", error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: "" }));
        }
    };

    const handleOAuthSignup = async (provider: string) => {
        setIsLoading(true);
        try {
            // Simulate OAuth flow
            await new Promise(resolve => setTimeout(resolve, 1000));
            login();
            navigate("/onboarding");
        } catch (error) {
            console.error(`${provider} signup failed:`, error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-background flex flex-col">
            {/* Header */}
            <header className="p-6">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">F</span>
                    </div>
                    <span className="font-bold text-xl">Flowryte</span>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="w-full max-w-2xl space-y-8">
                    {/* Progress Indicator */}
                    <div className="flex items-center justify-center gap-2 mb-8">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                            }`}>
                            {step > 1 ? <Check className="w-4 h-4" /> : "1"}
                        </div>
                        <div className={`w-12 h-1 ${step >= 2 ? "bg-primary" : "bg-muted"
                            }`} />
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                            }`}>
                            2
                        </div>
                    </div>

                    {/* Step 1: Email */}
                    {step === 1 && (
                        <div className="space-y-6">
                            <div className="text-center space-y-4">
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                                    First, enter your email
                                </h1>
                                <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto">
                                    We suggest using the <strong>email address you use at work</strong>.
                                </p>
                            </div>

                            <form onSubmit={handleEmailSubmit} className="space-y-4 max-w-md mx-auto">
                                <div className="space-y-2">
                                    <Input
                                        type="email"
                                        placeholder="name@work-email.com"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange("email", e.target.value)}
                                        className={`h-14 text-lg border-2 ${errors.email ? "border-red-500" : ""}`}
                                        disabled={isLoading}
                                    />
                                    {errors.email && (
                                        <p className="text-sm text-red-500">{errors.email}</p>
                                    )}
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full h-14 text-lg bg-sidebar hover:bg-sidebar/90 text-white font-semibold"
                                    disabled={isLoading}
                                >
                                    Continue
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </form>
                        </div>
                    )}

                    {/* Step 2: Account Details */}
                    {step === 2 && (
                        <div className="space-y-6">
                            <div className="text-center space-y-4">
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                                    Create your account
                                </h1>
                                <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto">
                                    Just a few more details to get started with Flowryte.
                                </p>
                            </div>

                            <form onSubmit={handleAccountSubmit} className="space-y-4 max-w-md mx-auto">
                                <div className="space-y-2">
                                    <Label htmlFor="fullName">Full Name</Label>
                                    <Input
                                        id="fullName"
                                        placeholder="John Doe"
                                        value={formData.fullName}
                                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                                        className={`h-12 text-base border-2 ${errors.fullName ? "border-red-500" : ""}`}
                                        disabled={isLoading}
                                    />
                                    {errors.fullName && (
                                        <p className="text-sm text-red-500">{errors.fullName}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="company">Company Name</Label>
                                    <Input
                                        id="company"
                                        placeholder="Acme Corp"
                                        value={formData.company}
                                        onChange={(e) => handleInputChange("company", e.target.value)}
                                        className={`h-12 text-base border-2 ${errors.company ? "border-red-500" : ""}`}
                                        disabled={isLoading}
                                    />
                                    {errors.company && (
                                        <p className="text-sm text-red-500">{errors.company}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="password">Password</Label>
                                    <div className="relative">
                                        <Input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Create a strong password"
                                            value={formData.password}
                                            onChange={(e) => handleInputChange("password", e.target.value)}
                                            className={`h-12 text-base border-2 pr-10 ${errors.password ? "border-red-500" : ""}`}
                                            disabled={isLoading}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                        >
                                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                        </button>
                                    </div>
                                    {errors.password && (
                                        <p className="text-sm text-red-500">{errors.password}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                                    <div className="relative">
                                        <Input
                                            id="confirmPassword"
                                            type={showConfirmPassword ? "text" : "password"}
                                            placeholder="Confirm your password"
                                            value={formData.confirmPassword}
                                            onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                                            className={`h-12 text-base border-2 pr-10 ${errors.confirmPassword ? "border-red-500" : ""}`}
                                            disabled={isLoading}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                        >
                                            {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                        </button>
                                    </div>
                                    {errors.confirmPassword && (
                                        <p className="text-sm text-red-500">{errors.confirmPassword}</p>
                                    )}
                                </div>

                                <div className="flex gap-3 pt-4">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => setStep(1)}
                                        className="flex-1 h-14 text-lg border-2 font-semibold"
                                        disabled={isLoading}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        type="submit"
                                        className="flex-1 h-14 text-lg bg-sidebar hover:bg-sidebar/90 text-white font-semibold"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? "Creating Account..." : "Create Account"}
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* OAuth Buttons */}
                    <div className="space-y-3">
                        <Button
                            onClick={() => handleOAuthSignup("Google")}
                            variant="outline"
                            className="w-full h-14 text-base border-2 font-semibold"
                            disabled={isLoading}
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
                            onClick={() => handleOAuthSignup("Apple")}
                            variant="outline"
                            className="w-full h-14 text-base border-2 font-semibold"
                            disabled={isLoading}
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
