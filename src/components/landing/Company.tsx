import { Building2, Newspaper, Briefcase, Shirt, Palette, Mail, Code2, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Company() {
    return (
        <section id="company" className="py-24 bg-background">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        About Flowryte
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        We're on a mission to simplify invoicing and payment processes, so business owners can focus on what they do best.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {/* About Us */}
                    <div className="group p-6 rounded-2xl border border-border/50 hover:bg-muted/30 transition-all">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                            <Building2 className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">About Us</h3>
                        <p className="text-sm text-muted-foreground mb-4">Learn about our mission to help freelancers and small businesses manage cash flow with ease.</p>
                        <Link to="/company/com-about" className="text-sm font-semibold text-primary hover:underline">Read Story →</Link>
                    </div>

                    {/* News */}
                    <div className="group p-6 rounded-2xl border border-border/50 hover:bg-muted/30 transition-all">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                            <Newspaper className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Newsroom</h3>
                        <p className="text-sm text-muted-foreground mb-4">Announcements, press releases, and industry insights.</p>
                        <Link to="/company/com-news" className="text-sm font-semibold text-primary hover:underline">Latest News →</Link>
                    </div>

                    {/* Careers */}
                    <div className="group p-6 rounded-2xl border border-border/50 hover:bg-muted/30 transition-all">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                            <Briefcase className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Careers</h3>
                        <p className="text-sm text-muted-foreground mb-4">Join our team and help us build the future of invoicing.</p>
                        <Link to="/company/com-careers" className="text-sm font-semibold text-primary hover:underline">View Openings →</Link>
                    </div>

                    {/* Swag Store */}
                    <div className="group p-6 rounded-2xl border border-border/50 hover:bg-muted/30 transition-all">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                            <Shirt className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Swag Store</h3>
                        <p className="text-sm text-muted-foreground mb-4">Merchandise for loyal users and brand ambassadors.</p>
                        <button 
    className="text-sm font-semibold text-primary hover:underline" 
    onClick={() => window.open('https://flowryte.com/store', '_blank')}
>
    Shop Now →
</button>
                    </div>

                    {/* Brand Center */}
                    <div className="group p-6 rounded-2xl border border-border/50 hover:bg-muted/30 transition-all">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                            <Palette className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Brand Center</h3>
                        <p className="text-sm text-muted-foreground mb-4">Access to logos, branding guidelines, and media kit.</p>
                        <button 
    className="text-sm font-semibold text-primary hover:underline" 
    onClick={() => window.open('https://flowryte.com/brand', '_blank')}
>
    Download Assets →
</button>
                    </div>

                    {/* Engineering Blog */}
                    <div className="group p-6 rounded-2xl border border-border/50 hover:bg-muted/30 transition-all">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                            <Code2 className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Engineering Blog</h3>
                        <p className="text-sm text-muted-foreground mb-4">Insights from the product and engineering team.</p>
                        <Link to="/resources/res-blog" className="text-sm font-semibold text-primary hover:underline">Read Tech Blog →</Link>
                    </div>

                    {/* Design Blog */}
                    <div className="group p-6 rounded-2xl border border-border/50 hover:bg-muted/30 transition-all">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                            <PenTool className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Design Blog</h3>
                        <p className="text-sm text-muted-foreground mb-4">Thoughts on UX/UI design, best practices, and product design updates.</p>
                        <Link to="/resources/res-blog" className="text-sm font-semibold text-primary hover:underline">Read Design Blog →</Link>
                    </div>

                    {/* Contact Us */}
                    <div className="group p-6 rounded-2xl border border-border/50 hover:bg-muted/30 transition-all">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                            <Mail className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Contact Us</h3>
                        <p className="text-sm text-muted-foreground mb-4">Support, inquiries, and feedback forms.</p>
                        <Link to="/company/com-contact" className="text-sm font-semibold text-primary hover:underline">Get in Touch →</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
