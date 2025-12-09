import { Star } from "lucide-react";

const testimonials = [
    {
        content: "OnTheDot has completely transformed how we handle invoicing. The interface is stunning and the automation saves us hours every week.",
        author: "Sarah Jenkins",
        role: "Design Lead, Studio Alpha",
        rating: 5,
        avatar: "S"
    },
    {
        content: "The 'Quiet Luxury' design isn't just a buzzword—it's genuinely the most pleasant enterprise software I've ever used. Getting paid is finally Stress-free.",
        author: "Michael Chen",
        role: "Freelance Developer",
        rating: 5,
        avatar: "M"
    },
    {
        content: "The smart reminders are a game changer. My late payments dropped by 40% in the first month. Highly recommended.",
        author: "Elena Rodriguez",
        role: "Consultant",
        rating: 5,
        avatar: "E"
    }
];

export function Testimonials() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4">Loved by 10,000+ creators</h2>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                        <div className="flex text-amber-500">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                        </div>
                        <span className="font-medium">4.9/5 Average Rating</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <div key={i} className="glass p-8 rounded-2xl hover-lift">
                            <div className="flex gap-1 text-amber-500 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <p className="text-lg mb-8 text-foreground/80 leading-relaxed">"{testimonial.content}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <p className="font-medium">{testimonial.author}</p>
                                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Brand Logos Strip */}
                <div className="mt-20 pt-10 border-t border-border/50">
                    <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest">Trusted by teams at</p>
                    <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
                        {['Linear', 'Spotify', 'Shopify', 'Intercom', 'Framer'].map((brand) => (
                            <span key={brand} className="text-xl font-display font-semibold">{brand}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
