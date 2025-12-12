
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { featureData, TemplateType } from "@/data/featureData";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, PlayCircle, ShieldCheck, Lock, Search, BookOpen, ExternalLink, Users } from "lucide-react";
import { CTA } from "@/components/landing/CTA";
import { cn } from "@/lib/utils";

export default function GenericFeaturePage() {
    const params = useParams<{ featureId: string }>();
    const location = window.location.pathname;

    // Determine featureId based on route
    let featureId = params.featureId;
    if (location === "/enterprise") featureId = "enterprise";

    const data = featureId ? featureData[featureId] : null;

    if (!data) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Navbar />
                <div className="flex-1 flex flex-col items-center justify-center p-10 text-center">
                    <h1 className="text-4xl font-bold mb-4">Page not found</h1>
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

            {/* Header / Hero Switcher */}
            {template === "solution" && <SolutionHeader data={data} />}
            {template === "enterprise" && <EnterpriseHeader data={data} />}
            {template === "resource" && <ResourceHeader data={data} />}
            {template === "standard" && <StandardHeader data={data} />}

            {/* Stats Section (Global) */}
            {data.stats && (
                <section className="py-16 border-y border-border/50 bg-muted/20">
                    <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {data.stats.map((stat, i) => (
                            <div key={i} className="text-center group hover:scale-105 transition-transform duration-300">
                                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Content Switcher */}
            {template === "resource" ? (
                <ResourceContent data={data} />
            ) : (
                <StandardContent data={data} />
            )}

            <CTA />
            <Footer />
        </div>
    );
}

// --- HEADERS ---

function StandardHeader({ data }: { data: any }) {
    const HeroIcon = data.icon;
    return (
        <section className="pt-32 pb-20 px-6 sm:px-8 lg:px-12 container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-primary/10 text-primary mb-8 shadow-sm">
                    <HeroIcon className="w-10 h-10" />
                </div>
                <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-8">
                    {data.title}
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                    {data.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="text-lg px-8 h-14 shadow-lg shadow-primary/20">Start for free</Button>
                    <Button size="lg" variant="outline" className="text-lg px-8 h-14">Talk to Sales</Button>
                </div>
            </div>
        </section>
    )
}

function SolutionHeader({ data }: { data: any }) {
    const HeroIcon = data.icon;
    return (
        <section className="pt-32 pb-24 px-6 sm:px-8 lg:px-12 container mx-auto bg-gradient-to-b from-primary/5 to-background">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div className="flex items-center gap-3 text-primary font-bold tracking-wide uppercase text-sm bg-primary/10 w-fit px-4 py-1 rounded-full">
                        <HeroIcon className="w-4 h-4" />
                        <span>Solutions for {data.title}</span>
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                        {data.subtitle}
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        {data.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button size="lg" className="text-lg px-8 h-14 shadow-xl">Get Started</Button>
                        <Button size="lg" variant="ghost" className="text-lg px-8 h-14 gap-3 bg-background/50 border border-border/50">
                            <PlayCircle className="w-5 h-5" /> Watch Demo
                        </Button>
                    </div>
                </div>
                <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl bg-background shadow-2xl border border-border p-2 rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="w-full h-full bg-muted/20 rounded-xl overflow-hidden relative">
                        {/* Mock UI Composition */}
                        <div className="absolute top-0 w-full h-12 border-b border-border/50 bg-background/80 backdrop-blur-sm flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        <div className="absolute top-16 left-4 right-4 bottom-4 grid grid-cols-3 gap-4">
                            <div className="col-span-1 bg-background rounded-lg border border-border/50 p-4 space-y-3">
                                <div className="w-12 h-12 rounded-full bg-primary/20" />
                                <div className="w-full h-2 rounded bg-muted-foreground/20" />
                                <div className="w-2/3 h-2 rounded bg-muted-foreground/20" />
                            </div>
                            <div className="col-span-2 bg-background rounded-lg border border-border/50 p-4 space-y-4">
                                <div className="flex justify-between">
                                    <div className="w-1/3 h-4 rounded bg-muted-foreground/20" />
                                    <div className="w-1/4 h-8 rounded bg-primary text-primary-foreground flex items-center justify-center text-xs">Action</div>
                                </div>
                                <div className="h-24 bg-muted/20 rounded border border-border/30" />
                                <div className="h-24 bg-muted/20 rounded border border-border/30" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function EnterpriseHeader({ data }: { data: any }) {
    return (
        <section className="pt-32 pb-20 px-6 sm:px-8 lg:px-12 container mx-auto bg-slate-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-slate-950 to-slate-950" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-primary mb-8">
                    <ShieldCheck className="w-4 h-4" /> Enterprise Grade Security
                </div>
                <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                    {data.title}
                </h1>
                <p className="text-xl sm:text-2xl text-slate-400 max-w-2xl mx-auto mb-12">
                    {data.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="text-lg px-8 h-14 bg-white text-slate-950 hover:bg-white/90">Contact Sales</Button>
                    <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-white/20 text-white hover:bg-white/10">Read Whitepaper</Button>
                </div>
            </div>
        </section>
    )
}

function ResourceHeader({ data }: { data: any }) {
    return (
        <section className="pt-32 pb-16 px-6 sm:px-8 lg:px-12 container mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">{data.title}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{data.description}</p>

            {/* Search Bar Visual */}
            <div className="max-w-md mx-auto mt-10 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input type="text" placeholder="Search..." className="w-full pl-12 pr-4 py-4 rounded-full border border-border shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
            </div>
        </section>
    )
}


// --- CONTENT RENDERERS ---

function StandardContent({ data }: { data: any }) {
    return (
        <div className="py-20 space-y-32">
            {data.sections?.map((section: any, i: number) => (
                <section key={i} className="container mx-auto px-6 sm:px-8 lg:px-12">
                    <div className={cn(
                        "flex flex-col gap-16 items-center",
                        section.layout === "right" ? "lg:flex-row-reverse" : "lg:flex-row",
                        section.layout === "center" ? "text-center" : ""
                    )}>
                        {/* Text Content */}
                        <div className={cn("flex-1 space-y-8", section.layout === "center" ? "max-w-3xl mx-auto" : "")}>
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight">{section.title}</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">{section.content}</p>

                            {section.layout !== "center" && (
                                <ul className="space-y-4 pt-4">
                                    <li className="flex items-center gap-3 text-lg font-medium">
                                        <CheckCircle2 className="w-6 h-6 text-primary" /> Integrated Workflow
                                    </li>
                                    <li className="flex items-center gap-3 text-lg font-medium">
                                        <CheckCircle2 className="w-6 h-6 text-primary" /> Enterprise Security
                                    </li>
                                </ul>
                            )}

                            <Button variant="link" className="text-primary p-0 h-auto font-semibold text-lg hover:gap-2 transition-all">
                                Learn more <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>

                        {/* Visual */}
                        {section.layout !== "center" && (
                            <div className="flex-1 w-full perspective-1000">
                                <div className={cn(
                                    "aspect-[4/3] rounded-3xl bg-gradient-to-br from-background to-muted border border-border/50 shadow-2xl relative overflow-hidden transform transition-all hover:scale-[1.02]",
                                    section.layout === "left" ? "rotate-y-3 hover:rotate-y-0" : "-rotate-y-3 hover:rotate-y-0"
                                )}>
                                    <div className="absolute inset-0 bg-grid-slate-500/[0.05]" />
                                    {/* Abstract UI Elements */}
                                    <div className="absolute top-10 left-10 right-10 bottom-0 bg-background rounded-t-xl shadow-lg border border-border/50 p-6">
                                        <div className="flex gap-4 mb-6">
                                            <div className="w-12 h-12 rounded-full bg-primary/10" />
                                            <div className="space-y-2">
                                                <div className="w-32 h-4 rounded bg-muted" />
                                                <div className="w-20 h-3 rounded bg-muted/50" />
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="w-full h-3 rounded bg-muted/30" />
                                            <div className="w-full h-3 rounded bg-muted/30" />
                                            <div className="w-3/4 h-3 rounded bg-muted/30" />
                                        </div>

                                        <div className="mt-8 grid grid-cols-2 gap-4">
                                            <div className="h-24 rounded-lg bg-primary/5 border border-primary/10" />
                                            <div className="h-24 rounded-lg bg-muted/20" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            ))}

            {/* Fallback if no sections */}
            {(!data.sections || data.sections.length === 0) && (
                <section className="py-10 container mx-auto px-6">
                    <div className="bg-muted/30 rounded-3xl p-12 text-center">
                        <h2 className="text-3xl font-bold mb-8">Capabilities</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            {data.benefits.map((benefit: string, i: number) => (
                                <div key={i} className="px-6 py-3 rounded-full bg-background border border-border shadow-sm text-lg font-medium flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-primary" /> {benefit}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}

function ResourceContent({ data }: { data: any }) {
    return (
        <div className="py-20 bg-muted/10 min-h-screen">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                <div className="bg-background rounded-2xl border border-border p-8 mb-16 shadow-sm flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/3 aspect-video bg-primary/10 rounded-xl flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-primary/40" />
                    </div>
                    <div className="flex-1 space-y-4">
                        <div className="text-sm font-bold text-primary uppercase tracking-wider">Featured</div>
                        <h2 className="text-3xl font-bold">The State of Work 2025</h2>
                        <p className="text-muted-foreground text-lg">New research reveals how AI and automation are reshaping the modern workplace.</p>
                        <Button>Read Report</Button>
                    </div>
                </div>

                <h3 className="text-2xl font-bold mb-8">Latest Articles</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="group bg-background rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all">
                            <div className="h-48 bg-muted relative">
                                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="text-xs font-semibold text-primary">Guide</div>
                                <h4 className="text-xl font-bold group-hover:text-primary transition-colors">Improving Team Collaboration in Hybrid Environments</h4>
                                <p className="text-muted-foreground text-sm line-clamp-3">Discover actionable strategies to keep your distributed team aligned and productive...</p>
                                <div className="pt-4 flex items-center text-sm font-medium text-foreground">
                                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
