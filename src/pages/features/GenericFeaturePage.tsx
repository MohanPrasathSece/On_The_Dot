
import { useParams, Link, useLocation } from "react-router-dom";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { featureData, TemplateType } from "@/data/featureData";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, PlayCircle, ShieldCheck, Lock, Search, BookOpen, ExternalLink, Users } from "lucide-react";
import { CTA } from "@/components/landing/CTA";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/components/ui/use-toast";
import SEOMeta from "@/components/seo/SEOMeta";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/components/seo/StructuredData";

export default function GenericFeaturePage() {
    const { isAuthenticated } = useAuth();
    const params = useParams<{ featureId: string }>();
    const location = useLocation();
    const pathname = location?.pathname || '';

    // Determine featureId based on route
    let featureId = params.featureId;
    if (pathname === "/enterprise") featureId = "enterprise";

    const data = featureId ? featureData[featureId] : null;

    // Premium content check - certain resources require authentication
    const isPremiumContent = featureId && ['res-stories', 'res-certified', 'res-devs'].includes(featureId);

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

    // Generate SEO metadata
    const generateSEOMetadata = () => {
        const baseTitle = data.title || 'Flowryte';
        const baseDescription = data.description || 'Professional invoicing and payment tracking solutions';
        const keywords = generateKeywords(data);

        // Generate structured data
        const structuredData: any[] = [
            serviceSchema(baseTitle, baseDescription),
            breadcrumbSchema(generateBreadcrumbItems())
        ];

        // Add FAQ schema if FAQs exist
        if ((data as any).faqs && (data as any).faqs.length > 0) {
            structuredData.push(faqSchema((data as any).faqs));
        }

        return {
            title: `${baseTitle} | Flowryte`,
            description: baseDescription,
            keywords: keywords.join(', '),
            structuredData: structuredData
        };
    };

    const generateKeywords = (pageData: any): string[] => {
        const baseKeywords = [
            'invoicing software', 'invoice management', 'payment tracking',
            'cash flow', 'freelance invoicing', 'agency billing', 'Flowryte'
        ];

        if (pageData.template === 'solution') {
            baseKeywords.push('business solutions', 'workflow automation', 'enterprise invoicing');
        } else if (pageData.template === 'resource') {
            baseKeywords.push('invoice templates', 'billing guides', 'payment tutorials');
        } else if (pageData.template === 'enterprise') {
            baseKeywords.push('enterprise invoicing', 'scale billing', 'corporate payments');
        }

        return baseKeywords;
    };

    const generateBreadcrumbItems = () => {
        const pathSegments = pathname.split('/').filter(Boolean);
        const items = [
            { name: 'Home', url: 'https://flowryte.io/' }
        ];

        let currentPath = '';
        pathSegments.forEach((segment) => {
            currentPath += `/${segment}`;
            const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
            items.push({ name, url: `https://flowryte.io${currentPath}` });
        });

        return items;
    };

    const seoMetadata = generateSEOMetadata();

    const template = data.template || "standard";

    const handleProtectedAction = (action: string) => {
        if (!isAuthenticated) {
            toast({
                title: "Authentication Required",
                description: "Please sign in to access this premium content.",
            });
            return false;
        }
        return true;
    };

    return (
        <>
            <SEOMeta
                title={seoMetadata.title}
                description={seoMetadata.description}
                keywords={seoMetadata.keywords}
                structuredData={seoMetadata.structuredData}
            />
            <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
                <Navbar />

                {/* Breadcrumbs */}
                <div className="container mx-auto px-6 sm:px-8 lg:px-12 pt-8">
                    <Breadcrumbs />
                </div>

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
                    <ProtectedContent
                        data={data}
                        isAuthenticated={isAuthenticated}
                        featureId={featureId || ''}
                    />
                ) : (
                    <StandardContent data={data} />
                )}

                <CTA />
                <Footer />
            </div>
        </>
    );
}

// --- HEADERS ---


function StandardHeader({ data }: { data: any }) {
    const HeroIcon = data.icon;
    return (
        <section className="pt-32 pb-20 px-6 sm:px-8 lg:px-12 container mx-auto relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blob-1 -z-10 opacity-50" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blob-2 -z-10 opacity-50" />

            <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
                <div className="flex-1 text-left">
                    {HeroIcon && (
                        <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-primary/10 text-primary mb-8 shadow-sm">
                            <HeroIcon className="w-10 h-10" />
                        </div>
                    )}
                    <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-8">
                        {data.title}
                    </h1>
                    <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
                        {data.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/signup">
                            <Button size="lg" className="text-lg px-8 h-14 shadow-lg shadow-black/20 bg-black text-white hover:bg-black/90">Start Free Trial</Button>
                        </Link>
                        <Link to="/signup">
                            <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-black text-black hover:bg-black/10">Talk to Sales</Button>
                        </Link>
                    </div>
                </div>

                {data.image && (
                    <div className="flex-1 w-full relative">
                        <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-border shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500">
                            <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-500/20 rounded-full blur-3xl -z-10" />
                    </div>
                )}
            </div>
        </section>
    )
}

function SolutionHeader({ data }: { data: any }) {
    const HeroIcon = data.icon;
    return (
        <section className="pt-32 pb-24 px-6 sm:px-8 lg:px-12 container mx-auto bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-blob-3 opacity-20 -z-10" />

            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <div className="space-y-8">
                    <div className="flex items-center gap-3 text-primary font-bold tracking-wide uppercase text-sm bg-primary/10 w-fit px-4 py-1 rounded-full">
                        {HeroIcon && <HeroIcon className="w-4 h-4" />}
                        <span>Solutions for {data.title}</span>
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                        {data.subtitle}
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        {data.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link to="/signup">
                            <Button size="lg" className="text-lg px-8 h-14 shadow-xl bg-black text-white hover:bg-black/90">Get Started</Button>
                        </Link>
                        <Link to="/resources/res-tour">
                            <Button size="lg" variant="outline" className="text-lg px-8 h-14 gap-3 border-black text-black hover:bg-black/10">
                                <PlayCircle className="w-5 h-5" /> Watch Demo
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl bg-background shadow-2xl border border-border p-2 rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden">
                    {data.image ? (
                        <div className="w-full h-full rounded-xl overflow-hidden">
                            <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
                        </div>
                    ) : (
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
                    )}
                </div>
            </div>
        </section>
    )
}

function EnterpriseHeader({ data }: { data: any }) {
    return (
        <section className="pt-32 pb-20 px-6 sm:px-8 lg:px-12 container mx-auto bg-slate-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-slate-950 to-slate-950" />

            {/* Abstract Grid Background */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-primary mb-8 animate-fade-in-up">
                    <ShieldCheck className="w-4 h-4" /> Enterprise Grade Security
                </div>
                <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 animate-fade-in-up delay-100">
                    {data.title}
                </h1>
                <p className="text-xl sm:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 animate-fade-in-up delay-200">
                    {data.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
                    <Link to="/company/com-contact">
                        <Button size="lg" className="text-lg px-8 h-14 bg-white text-slate-950 hover:bg-white/90">Contact Sales</Button>
                    </Link>
                    <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-white/20 text-white hover:bg-white/10">Read Whitepaper</Button>
                </div>

                <div className="mt-20 pt-10 border-t border-white/10 animate-fade-in-up delay-500">
                    <p className="text-sm text-slate-500 mb-6 uppercase tracking-widest">Trusted by industry leaders</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Realistic Brand Logos */}
                        <div className="text-xl font-black tracking-tighter text-white">TECHSTREAM</div>
                        <div className="text-xl font-bold tracking-tight text-white italic">QUANTUM</div>
                        <div className="text-xl font-extrabold tracking-widest text-white uppercase">Nexus</div>
                        <div className="text-xl font-semibold tracking-normal text-white">Cloudly</div>
                        <div className="text-xl font-medium tracking-tight text-white border-2 border-white px-2 py-0.5">APEX</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function ResourceHeader({ data }: { data: any }) {
    return (
        <section className="pt-32 pb-16 px-6 sm:px-8 lg:px-12 container mx-auto text-center relative max-w-5xl">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">{data.title}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">{data.description}</p>

            {data.image && (
                <div className="max-w-4xl mx-auto mb-16 aspect-[21/9] rounded-3xl overflow-hidden border border-border shadow-2xl">
                    <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
                </div>
            )}

            {/* Search Bar Visual */}
            <div className="max-w-md mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input type="text" placeholder="Search resources..." className="w-full pl-12 pr-4 py-4 rounded-full border border-border shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
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

                            <Link to="/signup">
                                <Button variant="link" className="text-primary p-0 h-auto font-semibold text-lg hover:gap-2 transition-all">
                                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </div>

                        {/* Visual */}
                        <div className={cn(
                            "flex-1 w-full perspective-1000",
                            section.layout === "center" ? "max-w-4xl mx-auto" : ""
                        )}>
                            {section.image ? (
                                <div className={cn(
                                    "aspect-[16/9] rounded-3xl bg-muted border border-border/50 shadow-2xl relative overflow-hidden transform transition-all hover:scale-[1.01]",
                                    section.layout === "center" ? "" : (section.layout === "left" ? "rotate-y-3 hover:rotate-y-0" : "-rotate-y-3 hover:rotate-y-0")
                                )}>
                                    <img
                                        src={section.image}
                                        alt={section.title}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            e.currentTarget.parentElement?.classList.add('bg-gradient-to-br', 'from-yellow-500/10', 'to-black/10', 'border-yellow-500/20');
                                            // Add a placeholder icon or text
                                            const placeholder = document.createElement('div');
                                            placeholder.className = 'absolute inset-0 flex items-center justify-center text-yellow-500/30';
                                            placeholder.innerHTML = '<svg class="w-16 h-16" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" /></svg>';
                                            e.currentTarget.parentElement?.appendChild(placeholder);
                                        }}
                                    />
                                </div>
                            ) : (
                                section.layout !== "center" && (
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
                                )
                            )}
                        </div>
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
    const { isAuthenticated } = useAuth();

    const handleArticleClick = (articleTitle: string) => {
        if (!isAuthenticated) {
            toast({
                title: "Authentication Required",
                description: "Please sign in to read premium articles.",
            });
            return;
        }
        // In a real app, this would navigate to the article
        toast({
            title: "Article Access",
            description: `Opening article: ${articleTitle}`,
        });
    };

    return (
        <div className="py-20 bg-muted/10 min-h-screen">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">

                {/* Dynamically render sections from data if they exist */}
                {data.sections && data.sections.length > 0 && (
                    <div className="space-y-32 mb-32">
                        {data.sections.map((section: any, i: number) => (
                            <section key={i} className="flex flex-col lg:flex-row gap-16 items-center">
                                <div className={cn(
                                    "flex-1 space-y-6",
                                    section.layout === "right" ? "lg:order-2" : "",
                                    section.layout === "center" ? "text-center max-w-3xl mx-auto" : ""
                                )}>
                                    <h2 className="text-3xl font-bold">{section.title}</h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed">{section.content}</p>
                                    <Button variant="link" className="p-0 text-primary h-auto font-semibold" onClick={() => handleArticleClick(section.title)}>
                                        Read more <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                                {section.image && (
                                    <div className={cn(
                                        "flex-1 w-full aspect-video rounded-2xl overflow-hidden border border-border shadow-xl transform transition-all hover:scale-[1.02]",
                                        section.layout === "right" ? "lg:order-1" : "",
                                        section.layout === "center" ? "order-last w-full mt-8" : ""
                                    )}>
                                        <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
                                    </div>
                                )}
                            </section>
                        ))}
                    </div>
                )}

                <div className="bg-background rounded-2xl border border-border p-8 mb-16 shadow-sm flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/3 aspect-video bg-primary/10 rounded-xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                            alt="Featured Report"
                            className="w-full h-full object-cover opacity-80"
                        />
                    </div>
                    <div className="flex-1 space-y-4">
                        <div className="text-sm font-bold text-primary uppercase tracking-wider">Featured</div>
                        <h2 className="text-3xl font-bold">The State of Invoicing 2025</h2>
                        <p className="text-muted-foreground text-lg">Our annual research report on how freelancers and small agencies are managing their cash flow in an increasingly automated world.</p>
                        <Button onClick={() => handleArticleClick("The State of Invoicing 2025")}>Read Whitepaper</Button>
                    </div>
                </div>

                <h3 className="text-2xl font-bold mb-8">Latest Articles</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Improving Team Collaboration in Hybrid Environments",
                            description: "Discover actionable strategies to keep your distributed team aligned and productive...",
                            type: "Guide",
                            image: "https://images.unsplash.com/photo-1522071823991-b9671f3d47ce?auto=format&fit=crop&q=80&w=600"
                        },
                        {
                            title: "Advanced Financial Planning for Startups",
                            description: "Learn how to manage cash flow and create sustainable financial models for growth...",
                            type: "Finance",
                            image: "https://images.unsplash.com/photo-1554224155-1696413575b9?auto=format&fit=crop&q=80&w=600"
                        },
                        {
                            title: "Building Scalable Invoice Systems",
                            description: "Best practices for creating invoice management systems that grow with your business...",
                            type: "Technical",
                            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
                        },
                        {
                            title: "Customer Success Stories: Q4 2024",
                            description: "How leading companies transformed their billing processes with Flowryte...",
                            type: "Case Study",
                            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"
                        },
                        {
                            title: "Security Best Practices for SaaS Platforms",
                            description: "Essential security measures every SaaS company should implement...",
                            type: "Security",
                            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600"
                        },
                        {
                            title: "The Future of Remote Work Tools",
                            description: "Exploring emerging trends in remote collaboration and productivity tools...",
                            type: "Trends",
                            image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=600"
                        }
                    ].map((article, i) => (
                        <div key={i} className="group bg-background rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all cursor-pointer" onClick={() => handleArticleClick(article.title)}>
                            <div className="h-48 bg-muted relative overflow-hidden">
                                <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                                {!isAuthenticated && (
                                    <div className="absolute top-4 right-4">
                                        <div className="bg-black/60 backdrop-blur-md text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                                            <Lock className="w-3 h-3" />
                                            Premium
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="text-xs font-semibold text-primary">{article.type}</div>
                                <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{article.title}</h4>
                                <p className="text-muted-foreground text-sm line-clamp-3">{article.description}</p>
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

function ProtectedContent({ data, isAuthenticated, featureId }: { data: any; isAuthenticated: boolean; featureId: string }) {
    const premiumFeatures = ['res-stories', 'res-certified', 'res-devs'];
    const isPremium = premiumFeatures.includes(featureId);

    if (isPremium && !isAuthenticated) {
        return (
            <div className="py-20 bg-muted/10 min-h-screen">
                <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="bg-background rounded-2xl border border-border p-8 mb-16 shadow-sm">
                        <div className="text-center max-w-2xl mx-auto">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                                <Lock className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Premium Content</h2>
                            <p className="text-muted-foreground text-lg mb-8">
                                This content requires authentication. Please sign in to access premium resources, articles, and exclusive content.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/login">
                                    <Button size="lg" className="px-8">Sign In</Button>
                                </Link>
                                <Link to="/signup">
                                    <Button size="lg" variant="outline" className="px-8">Create Account</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Show regular resource content if authenticated or not premium
    return <ResourceContent data={data} />;
}
