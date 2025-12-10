const testimonials = [
    {
        content: "OnTheDot is a crucial enabler for our growth, bringing our people, processes and payment data together in the flow of work.",
        author: "Sarah Jenkins",
        role: "CFO",
        company: "OpenAI"
    },
    {
        content: "The 'single pane of glass' has always been the holy grail for finance teams: less toggling, less friction and more focus. If people can stay in OnTheDot and get their invoicing and payments done, the productivity lift is significant.",
        author: "Michael Chen",
        role: "CTO",
        company: "Box"
    },
    {
        content: "Having automated reminders working alongside our team directly in OnTheDot is really powerful. They become really intelligent assistants that take actions right in the flow of work.",
        author: "Elena Rodriguez",
        role: "VP of Finance",
        company: "Wayfair"
    },
    {
        content: "We use OnTheDot every day. The fact that I can see exactly what's happening with our cash flow from one single source of truth is invaluable.",
        author: "Raj Patel",
        role: "Head of Operations",
        company: "IBM"
    },
    {
        content: "OnTheDot allows our people to bring their authentic selves to work and manage client relationships seamlessly. From automations to integrations, it's a true productivity platform.",
        author: "Jessica Wong",
        role: "Director of Finance",
        company: "Rivian"
    },
    {
        content: "We're pleased to integrate our payment solutions even closer to where work happens in OnTheDot – so teams can access payment data as naturally as talking to a teammate.",
        author: "David Martinez",
        role: "Product Lead",
        company: "Stripe"
    }
];

export function Testimonials() {
    return (
        <section className="py-32 sm:py-40 bg-[#F8F5F2] dark:bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center mb-20">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                        The world's most innovative
                        <br />
                        companies work with OnTheDot.
                    </h2>
                </div>

                {/* Testimonial Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {testimonials.map((testimonial, i) => (
                        <div
                            key={i}
                            className="bg-white dark:bg-card p-8 rounded-2xl border border-border/50 hover:border-[#4A154B]/20 transition-all duration-300 hover:-translate-y-1"
                        >
                            <p className="text-lg text-foreground/80 leading-relaxed mb-8 italic">
                                "{testimonial.content}"
                            </p>

                            <div className="border-t border-border/50 pt-6">
                                <p className="font-semibold text-lg mb-1">{testimonial.author}</p>
                                <p className="text-sm text-muted-foreground mb-2">{testimonial.role}</p>
                                <p className="text-xl font-bold text-[#4A154B]">{testimonial.company}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
