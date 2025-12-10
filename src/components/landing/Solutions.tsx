import { ArrowRight, CheckCircle2, TrendingUp, Zap, Target, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Solutions() {
    return (
        <section id="solutions" className="py-24 bg-muted/30">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        Solutions for every stage of growth.
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Whether you're a solo creative or scaling agency, OnTheDot evolves with you.
                    </p>
                </div>

                {/* By Profession */}
                <div className="mb-24">
                    <h3 className="text-2xl font-bold mb-10 text-center">By Profession</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Creative Agencies",
                                description: "Streamline client billing and team permissions.",
                                icon: Zap,
                                features: ["Branded Invoices", "Team Roles", "Audit Logs"]
                            },
                            {
                                title: "Freelancers",
                                description: "Automate admin work and get paid faster.",
                                icon: Target,
                                features: ["Auto-Reminders", "Recurring Invoices", "Fast Payouts"]
                            },
                            {
                                title: "Consultants",
                                description: "Professional retainers and detailed reporting.",
                                icon: BookOpen,
                                features: ["Retainer Agreements", "Time Tracking", "Tax Reports"]
                            },
                            {
                                title: "Service Business",
                                description: "Manage high volume of small transactions.",
                                icon: TrendingUp,
                                features: ["Bulk Invoicing", "Client Portal", "SMS Notifications"]
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-background p-6 rounded-2xl border border-border/50 hover:shadow-lg transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-[#4A154B]/10 flex items-center justify-center mb-6">
                                    <item.icon className="w-6 h-6 text-[#4A154B]" />
                                </div>
                                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                                <p className="text-muted-foreground text-sm mb-6">{item.description}</p>
                                <ul className="space-y-2">
                                    {item.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground/80">
                                            <CheckCircle2 className="w-4 h-4 text-[#4A154B]" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* By Goal */}
                <div>
                    <h3 className="text-2xl font-bold mb-10 text-center">By Goal</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-[#4A154B] text-white p-8 sm:p-12 rounded-3xl overflow-hidden relative">
                            <div className="relative z-10">
                                <h4 className="text-2xl font-bold mb-4">Eliminate Late Payments</h4>
                                <p className="text-white/80 mb-8 max-w-md">
                                    Stop chasing clients. Our smart reminders and polite nudges reduce overdue invoices by an average of 40%.
                                </p>
                                <Button className="bg-white text-[#4A154B] hover:bg-white/90">
                                    See How It Works
                                </Button>
                            </div>
                            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/3 translate-y-1/3">
                                <TrendingUp className="w-64 h-64" />
                            </div>
                        </div>

                        <div className="bg-card border border-border/50 p-8 sm:p-12 rounded-3xl overflow-hidden relative">
                            <div className="relative z-10">
                                <h4 className="text-2xl font-bold mb-4">Scale Your Agency</h4>
                                <p className="text-muted-foreground mb-8 max-w-md">
                                    From one freelancer to a team of twenty. Manage roles, permissions, and consolidate cash flow in one dashboard.
                                </p>
                                <Button variant="outline">
                                    Explore Enterprise
                                </Button>
                            </div>
                            <div className="absolute right-0 bottom-0 opacity-5 transform translate-x-1/3 translate-y-1/3">
                                <Zap className="w-64 h-64" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
