import { ShieldCheck, Zap, Users, Target } from "lucide-react";

export function Why() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                {/* Why OnTheDot */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                        Why OnTheDot?
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        We understand the frustration of chasing payments, managing cash flow, and spending hours on administrative tasks. OnTheDot transforms your invoicing process from chaos to clarity, giving you more time to focus on what you do best.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {[
                        { icon: Target, title: "Precision", desc: "Every invoice, reminder, and payment tracked with military precision." },
                        { icon: Zap, title: "Speed", desc: "Create professional invoices in 2 clicks. Get paid in days, not weeks." },
                        { icon: ShieldCheck, title: "Security", desc: "Bank-level encryption protects your financial data and client information." },
                        { icon: Users, title: "Community", desc: "Join thousands of freelancers and agencies who trust OnTheDot." }
                    ].map((item, i) => (
                        <div key={i} className="bg-background p-6 rounded-2xl border border-border/50 hover:shadow-lg transition-all">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Born from Frustration */}
                <div className="bg-primary text-primary-foreground rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h3 className="text-3xl font-bold mb-6">Born from Freelancer Frustration</h3>
                        <p className="text-primary-foreground/80 mb-8 text-lg">OnTheDot was created by freelancers who were tired of:</p>
                        <ul className="space-y-4">
                            {[
                                "Spending hours creating invoices manually",
                                "Forgetting to follow up on overdue payments",
                                "Having no visibility into cash flow patterns"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center shrink-0">
                                        <span className="w-2 h-2 rounded-full bg-primary-foreground" />
                                    </div>
                                    <span className="text-primary-foreground/90 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:w-1/2 relative">
                        <div className="aspect-square rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 p-8 flex items-center justify-center">
                            <div className="text-center">
                                <p className="text-6xl font-bold mb-2">10hrs+</p>
                                <p className="text-primary-foreground/60">Saved weekly per user</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
