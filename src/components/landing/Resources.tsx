import { Book, FileText, MessageSquare, Users, Code2, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Resources() {
    return (
        <section id="resources" className="py-24 bg-background">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                            Resources to help you grow.
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Everything you need to master invoicing, cash flow, and business growth.
                        </p>
                    </div>
                    <Button variant="outline" className="shrink-0">
                        View All Resources
                    </Button>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Help Center */}
                    <div className="group p-6 rounded-2xl border border-border/50 hover:border-[#4A154B]/30 hover:bg-[#4A154B]/5 transition-all cursor-pointer">
                        <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Book className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Help Center</h3>
                        <p className="text-muted-foreground mb-4">
                            Step-by-step tutorials on invoicing, settings, and reporting.
                        </p>
                        <span className="text-sm font-medium text-[#4A154B] group-hover:underline">Visit Help Center →</span>
                    </div>

                    {/* Resources Library */}
                    <div className="group p-6 rounded-2xl border border-border/50 hover:border-[#4A154B]/30 hover:bg-[#4A154B]/5 transition-all cursor-pointer">
                        <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <FileText className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Resources Library</h3>
                        <p className="text-muted-foreground mb-4">
                            E-books, guides, and templates like "The Ultimate Guide to Follow-Up Emails".
                        </p>
                        <span className="text-sm font-medium text-[#4A154B] group-hover:underline">Browse Library →</span>
                    </div>

                    {/* Blog */}
                    <div className="group p-6 rounded-2xl border border-border/50 hover:border-[#4A154B]/30 hover:bg-[#4A154B]/5 transition-all cursor-pointer">
                        <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <MessageSquare className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">OnTheDot Blog</h3>
                        <p className="text-muted-foreground mb-4">
                            Latest tips on freelancing, cash flow management, and business strategy.
                        </p>
                        <span className="text-sm font-medium text-[#4A154B] group-hover:underline">Read Articles →</span>
                    </div>

                    {/* Community */}
                    <div className="group p-6 rounded-2xl border border-border/50 hover:border-[#4A154B]/30 hover:bg-[#4A154B]/5 transition-all cursor-pointer">
                        <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Community</h3>
                        <p className="text-muted-foreground mb-4">
                            Connect with other freelancers and agency owners for peer support.
                        </p>
                        <span className="text-sm font-medium text-[#4A154B] group-hover:underline">Join Community →</span>
                    </div>

                    {/* API */}
                    <div className="group p-6 rounded-2xl border border-border/50 hover:border-[#4A154B]/30 hover:bg-[#4A154B]/5 transition-all cursor-pointer">
                        <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Code2 className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Developers</h3>
                        <p className="text-muted-foreground mb-4">
                            API documentation and developer tools for custom integrations.
                        </p>
                        <span className="text-sm font-medium text-[#4A154B] group-hover:underline">View Docs →</span>
                    </div>

                    {/* Partners */}
                    <div className="group p-6 rounded-2xl border border-border/50 hover:border-[#4A154B]/30 hover:bg-[#4A154B]/5 transition-all cursor-pointer">
                        <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Globe className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Partners</h3>
                        <p className="text-muted-foreground mb-4">
                            For accountants, payment processors, and solution providers.
                        </p>
                        <span className="text-sm font-medium text-[#4A154B] group-hover:underline">Become a Partner →</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
