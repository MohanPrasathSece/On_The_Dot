
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { featureData, TemplateType } from "@/data/featureData";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, PlayCircle } from "lucide-react";
import { CTA } from "@/components/landing/CTA";
import { cn } from "@/lib/utils";

export default function GenericFeaturePage() {
    const { featureId } = useParams<{ featureId: string }>();
    // Default to a basic entry if not found, or show 404
    // We can also try to "guess" content if key is missing but that's risky.
    const data = featureId ? featureData[featureId] : null;

    if (!data) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Navbar />
                <div className="flex-1 flex flex-col items-center justify-center p-10 text-center">
                    <h1 className="text-4xl font-bold mb-4">Feature not found</h1>
                    <p className="text-muted-foreground mb-8">The feature you are looking for does not exist.</p>
                    <Link to="/">
                        <Button>Go Home</Button>
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    const template = data.template || "standard";

    return (
        <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
            <Navbar />

            {/* Template Switcher */}
            {template === "solution" ? <SolutionHeader data={data} /> : <StandardHeader data={data} />}

            {/* Stats Section (if available) */}
            {data.stats && (
                <section className="py-12 border-y border-border/50 bg-muted/20">
                    <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {data.stats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Dynamic Sections */}
            <div className="py-20 space-y-20">
                {data.sections?.map((section, i) => (
                    <section key={i} className="container mx-auto px-6 sm:px-8 lg:px-12">
                        <div className={cn(
                            "flex flex-col gap-12 items-center",
                            section.layout === "right" ? "lg:flex-row-reverse" : "lg:flex-row",
                            section.layout === "center" ? "text-center" : ""
                        )}>
                            {/* Text Content */}
                            <div className={cn("flex-1 space-y-6", section.layout === "center" ? "max-w-3xl mx-auto" : "")}>
                                <h2 className="text-3xl md:text-4xl font-bold leading-tight">{section.title}</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">{section.content}</p>
                                <Button variant="link" className="text-primary p-0 h-auto font-semibold text-lg hover:gap-2 transition-all">
                                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>

                            {/* Image Placeholder */}
                            {section.layout !== "center" && (
                                <div className="flex-1 w-full aspect-video rounded-2xl bg-muted/50 border border-border flex items-center justify-center relative overflow-hidden group">
                                    {/* Abstract UI representation */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                                    <div className="w-3/4 h-3/4 bg-background rounded-xl shadow-2xl border border-border/50 p-6 flex flex-col gap-4 transform group-hover:scale-105 transition-transform duration-500">
                                        <div className="w-1/3 h-4 rounded bg-muted" />
                                        <div className="w-full h-2 rounded bg-muted/50" />
                                        <div className="w-full h-2 rounded bg-muted/50" />
                                        <div className="w-2/3 h-2 rounded bg-muted/50" />

                                        <div className="mt-auto flex gap-2">
                                            <div className="w-8 h-8 rounded-full bg-primary/20" />
                                            <div className="flex-1 h-8 rounded-lg bg-muted/30" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>
                ))}
            </div>

            {/* Benefits fallback if no sections */}
            {(!data.sections || data.sections.length === 0) && (
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold mb-10 text-center">Key Benefits</h2>
                            <div className="grid gap-6">
                                {data.benefits.map((benefit, i) => (
                                    <div key={i} className="flex items-center gap-4 p-6 bg-background rounded-xl border border-border/50 shadow-sm">
                                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                                        <span className="text-lg font-medium">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <CTA />
            <Footer />
        </div>
    );
}

function StandardHeader({ data }: { data: any }) {
    const HeroIcon = data.icon;
    return (
        <section className="pt-32 pb-20 px-6 sm:px-8 lg:px-12 container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 text-primary mb-8">
                    <HeroIcon className="w-8 h-8" />
                </div>
                <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
                    {data.title}
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10">
                    {data.subtitle}. {data.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="text-lg px-8 h-14">Start for free</Button>
                    <Button size="lg" variant="outline" className="text-lg px-8 h-14">Talk to Sales</Button>
                </div>
            </div>
        </section>
    )
}

function SolutionHeader({ data }: { data: any }) {
    const HeroIcon = data.icon;
    return (
        <section className="pt-32 pb-20 px-6 sm:px-8 lg:px-12 container mx-auto bg-primary/5 border-b border-primary/10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="flex items-center gap-2 text-primary font-bold mb-6 tracking-wide uppercase text-sm">
                        <HeroIcon className="w-5 h-5" />
                        <span>Solutions for {data.title}</span>
                    </div>
                    <h1 className="text-5xl font-bold tracking-tight mb-6">
                        {data.subtitle}
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        {data.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="text-lg px-8 h-12">Get Started</Button>
                        <Button size="lg" variant="ghost" className="text-lg px-8 h-12 gap-2">
                            <PlayCircle className="w-5 h-5" /> Watch Demo
                        </Button>
                    </div>
                </div>
                <div className="relative aspect-square lg:aspect-video rounded-xl bg-background shadow-2xl border border-border p-8 flex items-center justify-center">
                    {/* Mock Dashboard */}
                    <div className="w-full h-full border border-border/50 rounded-lg bg-muted/10 p-4 space-y-4">
                        <div className="flex gap-4">
                            <div className="w-1/4 h-24 bg-primary/10 rounded-lg" />
                            <div className="w-1/4 h-24 bg-muted rounded-lg" />
                            <div className="w-1/4 h-24 bg-muted rounded-lg" />
                            <div className="w-1/4 h-24 bg-muted rounded-lg" />
                        </div>
                        <div className="flex gap-4 h-40">
                            <div className="w-2/3 h-full bg-background border border-border/50 rounded-lg" />
                            <div className="w-1/3 h-full bg-background border border-border/50 rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
