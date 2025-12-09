import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Check, Building, Globe, Palette, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const steps = [
    { id: 1, title: "Business Details", description: "Tell us about your work" },
    { id: 2, title: "Preferences", description: "Currency and region" },
    { id: 3, title: "Branding", description: "Make it yours" },
];

export default function Onboarding() {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        businessType: "freelancer",
        companyName: "",
        currency: "USD",
        brandColor: "#000000"
    });

    const handleNext = () => {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
        } else {
            navigate("/dashboard");
        }
    };

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-2xl bg-card border border-border/50 rounded-2xl shadow-xl overflow-hidden glass-strong">
                {/* Progress Bar */}
                <div className="bg-muted h-2 w-full">
                    <div
                        className="bg-primary h-full transition-all duration-500 ease-out"
                        style={{ width: `${(currentStep / 3) * 100}%` }}
                    />
                </div>

                <div className="p-8 md:p-12">
                    {/* Header */}
                    <div className="mb-8 text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 font-display font-bold text-xl">
                            {currentStep}
                        </div>
                        <h1 className="font-display text-3xl font-semibold mb-2">{steps[currentStep - 1].title}</h1>
                        <p className="text-muted-foreground">{steps[currentStep - 1].description}</p>
                    </div>

                    {/* Step 1: Business Details */}
                    {currentStep === 1 && (
                        <div className="space-y-6 animate-fade-in">
                            <RadioGroup
                                defaultValue="freelancer"
                                className="grid grid-cols-2 gap-4"
                                onValueChange={(val) => setFormData({ ...formData, businessType: val })}
                            >
                                <div>
                                    <RadioGroupItem value="freelancer" id="freelancer" className="peer sr-only" />
                                    <Label
                                        htmlFor="freelancer"
                                        className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-transparent p-4 hover:bg-muted/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer transition-all"
                                    >
                                        <Building className="mb-3 h-6 w-6" />
                                        <span className="font-medium">Freelancer</span>
                                    </Label>
                                </div>
                                <div>
                                    <RadioGroupItem value="agency" id="agency" className="peer sr-only" />
                                    <Label
                                        htmlFor="agency"
                                        className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-transparent p-4 hover:bg-muted/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 cursor-pointer transition-all"
                                    >
                                        <Globe className="mb-3 h-6 w-6" />
                                        <span className="font-medium">Agency</span>
                                    </Label>
                                </div>
                            </RadioGroup>

                            <div className="space-y-2">
                                <Label>Business / Company Name</Label>
                                <Input
                                    placeholder="Acme Inc."
                                    className="h-12 text-lg"
                                    value={formData.companyName}
                                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                />
                            </div>
                        </div>
                    )}

                    {/* Step 2: Preferences */}
                    {currentStep === 2 && (
                        <div className="space-y-6 animate-fade-in">
                            <div className="space-y-2">
                                <Label>Default Currency</Label>
                                <Select
                                    defaultValue="USD"
                                    onValueChange={(val) => setFormData({ ...formData, currency: val })}
                                >
                                    <SelectTrigger className="h-12">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="USD">USD ($)</SelectItem>
                                        <SelectItem value="EUR">EUR (€)</SelectItem>
                                        <SelectItem value="GBP">GBP (£)</SelectItem>
                                        <SelectItem value="AUD">AUD ($)</SelectItem>
                                    </SelectContent>
                                </Select>
                                <p className="text-sm text-muted-foreground">This will be used for your reporting dashboard.</p>
                            </div>

                            <div className="space-y-2">
                                <Label>Time Zone</Label>
                                <Select defaultValue="utc">
                                    <SelectTrigger className="h-12">
                                        <SelectValue placeholder="Select time zone" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="utc">UTC (Universal Coordinated Time)</SelectItem>
                                        <SelectItem value="est">EST (Eastern Standard Time)</SelectItem>
                                        <SelectItem value="pst">PST (Pacific Standard Time)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Branding */}
                    {currentStep === 3 && (
                        <div className="space-y-6 animate-fade-in">
                            <div className="flex items-center gap-6 p-6 border border-dashed border-border rounded-xl bg-muted/20">
                                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                                    <Upload className="h-6 w-6 text-muted-foreground" />
                                </div>
                                <div>
                                    <h3 className="font-medium">Upload Logo</h3>
                                    <p className="text-sm text-muted-foreground mb-2">Recommended size: 512x512px</p>
                                    <Button variant="outline" size="sm">Choose File</Button>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Label>Brand Accent Color</Label>
                                <div className="grid grid-cols-5 gap-3">
                                    {['#18181b', '#2563eb', '#0d9488', '#ea580c', '#7c3aed'].map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setFormData({ ...formData, brandColor: color })}
                                            className={`w-full h-12 rounded-lg border-2 transition-all ${formData.brandColor === color ? 'border-foreground scale-110' : 'border-transparent hover:scale-105'
                                                }`}
                                            style={{ backgroundColor: color }}
                                        >
                                            {formData.brandColor === color && <Check className="w-5 h-5 text-white mx-auto" />}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Navigation */}
                    <div className="mt-10 flex justify-end">
                        <Button onClick={handleNext} size="lg" className="px-8 rounded-full h-12 text-base group">
                            {currentStep === 3 ? "Complete Setup" : "Continue"}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
                Step {currentStep} of 3
            </p>
        </div>
    );
}
