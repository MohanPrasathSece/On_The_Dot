import { Book, FileText, MessageSquare, Users, Code2, Globe, Sparkles, PlayCircle, Calendar, GraduationCap, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Resources() {
    return (
        <section id="resources" className="py-24 bg-background">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                            Resources & Community
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Everything you need to master OnTheDot and grow your business.
                        </p>
                    </div>
                    <Button variant="outline" className="shrink-0">
                        View All Resources
                    </Button>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Resource Library */}
                    <div className="group p-6 rounded-2xl border border-border/50 hover:bg-muted/30 transition-all cursor-pointer">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600">
                                <Book className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-lg">Resource Library</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">Detailed guides, FAQs, and knowledge base.</p>
                        <a href="#" className="text-sm font-semibold text-[#4A154B] hover:underline">Browse Library →</a>
                    </div>

                    {/* What's New */}
                    <div className="group p-6 rounded-2xl border border-border/50 hover:bg-muted/30 transition-all cursor-pointer">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600">
                                <Sparkles className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-lg">What's New</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">Latest product updates and feature releases.</p>
                        <a href="#" className="text-sm font-semibold text-[#4A154B] hover:underline">View Changelog →</a>
                    </div>

                    {/* Product Tour */}
                    <div className="group p-6 rounded-2xl border border-border/50 hover:bg-muted/30 transition-all cursor-pointer">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-2 rounded-lg bg-pink-100 dark:bg-pink-900/30 text-pink-600">
                                <PlayCircle className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-lg">Product Tour</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">Interactive walkthrough of the app.</p>
                        <a href="#" className="text-sm font-semibold text-[#4A154B] hover:underline">Start Tour →</a>
                    </div>

                    {/* Events */}
                    <div className="group p-6 rounded-2xl border border-border/50 hover:bg-muted/30 transition-all cursor-pointer">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600">
                                <Calendar className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-lg">Events</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">Webinars, workshops, and product demos.</p>
                        <a href="#" className="text-sm font-semibold text-[#4A154B] hover:underline">See Schedule →</a>
                    </div>

                    {/* Developers */}
                    <div className="group p-6 rounded-2xl border border-border/50 hover:bg-muted/30 transition-all cursor-pointer">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600">
                                <Code2 className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-lg">Developers</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">API documentation, SDKs, and integrations.</p>
                        <a href="#" className="text-sm font-semibold text-[#4A154B] hover:underline">View Docs →</a>
                    </div>

                    {/* Customer Stories */}
                    <div className="group p-6 rounded-2xl border border-border/50 hover:bg-muted/30 transition-all cursor-pointer">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600">
                                <FileText className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-lg">Customer Stories</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">Case studies and testimonials from users.</p>
                        <a href="#" className="text-sm font-semibold text-[#4A154B] hover:underline">Read Stories →</a>
                    </div>

                    {/* Community */}
                    <div className="group p-6 rounded-2xl border border-border/50 hover:bg-muted/30 transition-all cursor-pointer">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600">
                                <Users className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-lg">Community</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">Join our Slack/Discord channels and user groups.</p>
                        <a href="#" className="text-sm font-semibold text-[#4A154B] hover:underline">Join Now →</a>
                    </div>

                    {/* Certification */}
                    <div className="group p-6 rounded-2xl border border-border/50 hover:bg-muted/30 transition-all cursor-pointer">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/30 text-teal-600">
                                <GraduationCap className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-lg">OnTheDot Certified</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">Certification program for power users.</p>
                        <a href="#" className="text-sm font-semibold text-[#4A154B] hover:underline">Get Certified →</a>
                    </div>

                    {/* Marketplace */}
                    <div className="group p-6 rounded-2xl border border-border/50 hover:bg-muted/30 transition-all cursor-pointer">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600">
                                <ShoppingBag className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-lg">Marketplace</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">Third-party integrations and add-ons.</p>
                        <a href="#" className="text-sm font-semibold text-[#4A154B] hover:underline">Browse Apps →</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
