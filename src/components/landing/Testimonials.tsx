import { Star } from "lucide-react";

const testimonials = [
    {
        quote: "OnTheDot has completely transformed how I handle invoicing. What used to take me hours now takes minutes, and I get paid 50% faster thanks to their smart reminders.",
        author: "Sarah Chen",
        role: "Freelance Designer",
        company: "Design Studio"
    },
    {
        quote: "The automated reminder system is a game-changer. Our cash flow improved dramatically, and we spend zero time chasing payments. The branded invoices look incredibly professional.",
        author: "Marcus Rodriguez",
        role: "Digital Marketing Agency Owner",
        company: "Growth Labs"
    },
    {
        quote: "I love how OnTheDot integrates with my payment processors. Clients can pay immediately, and I get notified instantly. The dashboard gives me complete visibility into my finances.",
        author: "Emma Thompson",
        role: "Consultant",
        company: "Thompson Consulting"
    }
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-background">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        Loved by thousands of professionals
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        See what our users say about how OnTheDot has transformed their business operations.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-card p-8 rounded-3xl border border-border/50 hover:shadow-xl transition-all h-full flex flex-col justify-between">
                            <div>
                                <div className="flex gap-1 mb-6">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 text-orange-400 fill-current" />)}
                                </div>
                                <p className="text-lg leading-relaxed mb-8 font-medium">"{t.quote}"</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold text-primary text-lg">
                                        {t.author[0]}
                                    </div>
                                    <div>
                                        <div className="font-bold">{t.author}</div>
                                        <div className="text-sm text-muted-foreground">{t.role}</div>
                                        <div className="text-xs text-primary font-medium">{t.company}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
