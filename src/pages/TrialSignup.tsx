import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowRight, Check, CreditCard, Mail, User, Lock, Eye, EyeOff, Shield, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";

const trialSteps = [
    { id: 1, title: "Email & Account", description: "Create your account" },
    { id: 2, title: "Business Details", description: "Tell us about your work" },
    { id: 3, title: "Payment Setup", description: "Secure your trial" },
];

const planFeatures = [
    "Unlimited invoices & clients",
    "Advanced analytics & reports",
    "Team collaboration (up to 10)",
    "Priority customer support",
    "Custom branding & templates",
    "API access & integrations",
];

export default function TrialSignup() {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        fullName: "",
        companyName: "",
        businessType: "freelancer",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        cardholderName: "",
        agreeToTerms: false
    });

    const handleNext = () => {
        // Validation for each step
        if (currentStep === 1) {
            if (!formData.email || !formData.password || !formData.fullName) {
                toast({
                    title: "Missing Information",
                    description: "Please fill in all required fields.",
                    variant: "destructive"
                });
                return;
            }
            if (formData.password.length < 8) {
                toast({
                    title: "Weak Password",
                    description: "Password must be at least 8 characters long.",
                    variant: "destructive"
                });
                return;
            }
        }

        if (currentStep === 2) {
            if (!formData.companyName) {
                toast({
                    title: "Missing Information",
                    description: "Please provide your company name.",
                    variant: "destructive"
                });
                return;
            }
        }

        if (currentStep === 3) {
            if (!formData.cardNumber || !formData.expiryDate || !formData.cvv || !formData.cardholderName) {
                toast({
                    title: "Missing Information",
                    description: "Please complete all payment details.",
                    variant: "destructive"
                });
                return;
            }
            if (!formData.agreeToTerms) {
                toast({
                    title: "Terms Required",
                    description: "Please agree to the terms and conditions.",
                    variant: "destructive"
                });
                return;
            }
            // Complete trial signup
            handleTrialSignup();
            return;
        }

        setCurrentStep(currentStep + 1);
    };

    const handleTrialSignup = () => {
        toast({
            title: "Trial Started!",
            description: "Your 30-day free trial has begun. Check your email for confirmation.",
        });
        // In a real app, this would process the payment setup and create the account
        setTimeout(() => {
            navigate("/dashboard");
        }, 2000);
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
            <div className="w-full max-w-4xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-10 h-10 rounded bg-primary flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-xl">F</span>
                        </div>
                        <span className="font-bold text-2xl tracking-tight">Flowryte</span>
                    </div>
                    <h1 className="text-3xl font-bold mb-2">Start Your 30-Day Free Trial</h1>
                    <p className="text-muted-foreground">No credit card required for the first 30 days</p>
                </div>

                {/* Progress Steps */}
                <div className="flex items-center justify-center mb-8">
                    {trialSteps.map((step, index) => (
                        <div key={step.id} className="flex items-center">
                            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${currentStep >= step.id
                                    ? 'bg-primary border-primary text-primary-foreground'
                                    : 'border-muted-foreground/30 text-muted-foreground'
                                }`}>
                                {currentStep > step.id ? <Check className="w-5 h-5" /> : step.id}
                            </div>
                            <div className="ml-3 mr-8">
                                <div className={`text-sm font-medium ${currentStep >= step.id ? 'text-foreground' : 'text-muted-foreground'
                                    }`}>
                                    {step.title}
                                </div>
                                <div className="text-xs text-muted-foreground">{step.description}</div>
                            </div>
                            {index < trialSteps.length - 1 && (
                                <div className={`w-12 h-0.5 mx-2 ${currentStep > step.id ? 'bg-primary' : 'bg-muted-foreground/30'
                                    }`} />
                            )}
                        </div>
                    ))}
                </div>

                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Form */}
                    <Card>
                        <CardHeader>
                            <CardTitle>{trialSteps[currentStep - 1].title}</CardTitle>
                            <CardDescription>{trialSteps[currentStep - 1].description}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {currentStep === 1 && (
                                <>
                                    <div>
                                        <Label htmlFor="fullName">Full Name</Label>
                                        <Input
                                            id="fullName"
                                            type="text"
                                            placeholder="John Doe"
                                            value={formData.fullName}
                                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="password">Password</Label>
                                        <div className="relative">
                                            <Input
                                                id="password"
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Create a strong password"
                                                value={formData.password}
                                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                            />
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="icon"
                                                className="absolute right-0 top-0 h-full px-3"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                            </Button>
                                        </div>
                                    </div>
                                </>
                            )}

                            {currentStep === 2 && (
                                <>
                                    <div>
                                        <Label htmlFor="companyName">Company Name</Label>
                                        <Input
                                            id="companyName"
                                            type="text"
                                            placeholder="Your Company LLC"
                                            value={formData.companyName}
                                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <Label>Business Type</Label>
                                        <div className="grid grid-cols-2 gap-2 mt-2">
                                            {["freelancer", "agency", "startup", "enterprise"].map((type) => (
                                                <Button
                                                    key={type}
                                                    type="button"
                                                    variant={formData.businessType === type ? "default" : "outline"}
                                                    className="capitalize"
                                                    onClick={() => setFormData({ ...formData, businessType: type })}
                                                >
                                                    {type}
                                                </Button>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}

                            {currentStep === 3 && (
                                <>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                                            <Shield className="w-5 h-5 text-blue-600" />
                                            <div className="text-sm">
                                                <div className="font-medium text-blue-900">Secure Payment Setup</div>
                                                <div className="text-blue-700">Your card won't be charged until after 30 days</div>
                                            </div>
                                        </div>

                                        <div>
                                            <Label htmlFor="cardholderName">Cardholder Name</Label>
                                            <Input
                                                id="cardholderName"
                                                type="text"
                                                placeholder="John Doe"
                                                value={formData.cardholderName}
                                                onChange={(e) => setFormData({ ...formData, cardholderName: e.target.value })}
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="cardNumber">Card Number</Label>
                                            <Input
                                                id="cardNumber"
                                                type="text"
                                                placeholder="1234 5678 9012 3456"
                                                value={formData.cardNumber}
                                                onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="expiryDate">Expiry Date</Label>
                                                <Input
                                                    id="expiryDate"
                                                    type="text"
                                                    placeholder="MM/YY"
                                                    value={formData.expiryDate}
                                                    onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="cvv">CVV</Label>
                                                <Input
                                                    id="cvv"
                                                    type="text"
                                                    placeholder="123"
                                                    value={formData.cvv}
                                                    onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                id="terms"
                                                checked={formData.agreeToTerms}
                                                onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                                                className="rounded"
                                            />
                                            <Label htmlFor="terms" className="text-sm">
                                                I agree to the <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                                            </Label>
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* Navigation Buttons */}
                            <div className="flex justify-between pt-4">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={handleBack}
                                    disabled={currentStep === 1}
                                >
                                    Back
                                </Button>
                                <Button type="button" onClick={handleNext}>
                                    {currentStep === 3 ? "Start Free Trial" : "Next"}
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Benefits Sidebar */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-500" />
                                    Pro Plan Features
                                </CardTitle>
                                <CardDescription>Everything you need to grow your business</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {planFeatures.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-green-500" />
                                            <span className="text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="pt-6">
                                <div className="text-center space-y-4">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100">
                                        <Clock className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <div className="font-semibold">30-Day Free Trial</div>
                                        <div className="text-sm text-muted-foreground">Full access to all features</div>
                                    </div>
                                    <Separator />
                                    <div className="text-sm text-muted-foreground">
                                        After trial: $20/month<br />
                                        Cancel anytime
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-8 text-sm text-muted-foreground">
                    Already have an account? <Link to="/login" className="text-primary hover:underline">Sign in</Link>
                </div>
            </div>
        </div>
    );
}
