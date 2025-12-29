
import { useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { Briefcase, CheckCircle2, Send, ArrowRight } from "lucide-react";
import SEOMeta from "@/components/seo/SEOMeta";

import { jobPostingSchema } from "@/components/seo/StructuredData";

export default function ApplyAppointmentSetter() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitted(true);
            toast({
                title: "Application Received!",
                description: "Thank you for applying to Flowryte. Our team will review your application soon.",
            });
        }, 1000);
    };

    if (isSubmitted) {
        // ... (submission success view remains same)
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Navbar />
                <div className="flex-1 flex flex-col items-center justify-center p-10 text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h1 className="text-4xl font-bold mb-4">Application Submitted!</h1>
                    <p className="text-xl text-muted-foreground max-w-lg mb-8">
                        We've received your application for the Appointment Setter position.
                        Our team will review your profile and get back to you via email within 2-3 business days.
                    </p>
                    <a href="/">
                        <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400">Back to Home</Button>
                    </a>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <SEOMeta
                title="Hiring Appointment Setters - Remote | Flowryte Careers"
                description="Join Flowryte as a Remote Appointment Setter. High commissions, flexible hours, and growth opportunities. Apply now to help freelancers automate their billing."
                keywords="appointment setter jobs, remote sales job, high ticket sales, flowryte careers, work from home sales"
                structuredData={jobPostingSchema}
            />
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-6 max-w-4xl">
                <div className="flex items-center gap-3 mb-6 bg-yellow-500/10 text-yellow-600 px-4 py-2 rounded-full w-fit mx-auto">
                    <Briefcase className="w-4 h-4" />
                    <span className="text-sm font-bold uppercase tracking-wider">Careers @ Flowryte</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-6">
                    Become an <span className="text-yellow-500">Appointment Setter</span>
                </h1>

                <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
                    Help us connect with freelancers and agencies who need a better way to manage their cash flow. High commissions and flexible hours.
                </p>

                <div className="bg-white dark:bg-card border border-border/50 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-yellow-500/5">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <Label htmlFor="fullName">Full Name</Label>
                                <Input id="fullName" placeholder="John Doe" required className="h-12 rounded-xl" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" type="email" placeholder="john@example.com" required className="h-12 rounded-xl" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input id="phone" type="tel" placeholder="+91 98765 43210" required className="h-12 rounded-xl" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="experience">Years of Experience</Label>
                                <Input id="experience" type="number" placeholder="2" required className="h-12 rounded-xl" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="portfolio">LinkedIn Profile or Portfolio URL</Label>
                            <Input id="portfolio" type="url" placeholder="https://linkedin.com/in/johndoe" required className="h-12 rounded-xl" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="reason">Why do you want to join Flowryte?</Label>
                            <Textarea id="reason" placeholder="Tell us what excites you about this role..." required className="min-h-[150px] rounded-xl" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="skills">Relevant Skills</Label>
                            <Textarea id="skills" placeholder="Cold calling, lead generation, CRM management, etc." required className="min-h-[100px] rounded-xl" />
                        </div>

                        <Button type="submit" size="lg" className="w-full h-14 text-lg bg-yellow-500 text-black hover:bg-yellow-400 group">
                            Submit Application
                            <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Button>
                    </form>
                </div>

                <div className="mt-20 grid md:grid-cols-3 gap-8">
                    <div className="text-center p-6">
                        <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-yellow-500">
                            <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold mb-2">High Commissions</h3>
                        <p className="text-sm text-muted-foreground">Earn generous commissions for every qualified lead and deal closed.</p>
                    </div>
                    <div className="text-center p-6">
                        <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-yellow-500">
                            <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold mb-2">Remote Work</h3>
                        <p className="text-sm text-muted-foreground">Work from anywhere in the world on your own schedule.</p>
                    </div>
                    <div className="text-center p-6">
                        <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-yellow-500">
                            <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold mb-2">Growth Opportunity</h3>
                        <p className="text-sm text-muted-foreground">Level up to Team Lead or Account Executive roles as we scale.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
