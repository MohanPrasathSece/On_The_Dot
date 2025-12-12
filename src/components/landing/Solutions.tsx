import { ArrowRight, Briefcase, Building2, Code2, GraduationCap, Gavel, Stethoscope, ShoppingBag, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Solutions() {
    return (
        <section id="solutions" className="py-24 bg-muted/30">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        Built for your specific needs.
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Whether you're a freelancer or running a small agency, Flowryte adapts to you.
                    </p>
                </div>

                {/* By Department */}
                <div className="mb-24">
                    <h3 className="text-2xl font-bold mb-10 border-l-4 border-primary pl-4">By Department</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Freelancers", desc: "Automate admin, focus on work." },
                            { title: "Small Agencies", desc: "Manage team roles & client branding." },
                            { title: "Project Managers", desc: "Track invoice status per project." },
                            { title: "Financial Teams", desc: "Reconcile payments & export reports." },
                            { title: "Client Managers", desc: "Review client history before calls." },
                            { title: "Business Owners", desc: "Bird's eye view of cash flow." }
                        ].map((item, i) => (
                            <div key={i} className="bg-background p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all">
                                <h4 className="font-semibold text-lg mb-2 text-foreground">{item.title}</h4>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* By Industry */}
                <div>
                    <h3 className="text-2xl font-bold mb-10 border-l-4 border-primary pl-4">By Industry</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Palette, title: "Creative & Design", desc: "Content Creators, Designers" },
                            { icon: Code2, title: "Tech & Dev", desc: "Web Development, SaaS" },
                            { icon: ShoppingBag, title: "E-Commerce", desc: "Retail, Dropshipping" },
                            { icon: GraduationCap, title: "Education", desc: "Training, Tutoring" },
                            { icon: Stethoscope, title: "Healthcare", desc: "Life Sciences, Wellness" },
                            { icon: Gavel, title: "Legal & Finance", desc: "Accounting Firms, Law" },
                            { icon: Building2, title: "Consulting", desc: "Strategy, Management" },
                            { icon: Briefcase, title: "Small Business", desc: "Services, Trades" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 bg-background p-5 rounded-xl border border-border/50 hover:shadow-md transition-all">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
