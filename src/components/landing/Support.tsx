import { MessageCircle, HelpCircle, Ticket, Lightbulb, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Support() {
    return (
        <section id="support" className="py-24 bg-muted/30">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        We're here to help
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Everything you need to resolve issues or ask questions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Live Chat */}
                    <div className="bg-background p-8 rounded-2xl border border-border/50 hover:shadow-lg transition-all text-center">
                        <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center mb-6">
                            <MessageCircle className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Live Chat Support</h3>
                        <p className="text-muted-foreground mb-6">Chat directly with our support team for quick answers.</p>
                        <Button variant="outline" className="w-full">Start Chat</Button>
                    </div>

                    {/* Help Center */}
                    <div className="bg-background p-8 rounded-2xl border border-border/50 hover:shadow-lg transition-all text-center">
                        <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 dark:bg-purple-900/20 text-purple-600 flex items-center justify-center mb-6">
                            <HelpCircle className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Help Center</h3>
                        <p className="text-muted-foreground mb-6">Search our knowledge base for self-help guides and FAQs.</p>
                        <Button variant="outline" className="w-full">Visit Help Center</Button>
                    </div>

                    {/* Ticketing System */}
                    <div className="bg-background p-8 rounded-2xl border border-border/50 hover:shadow-lg transition-all text-center">
                        <div className="w-16 h-16 mx-auto rounded-full bg-orange-100 dark:bg-orange-900/20 text-orange-600 flex items-center justify-center mb-6">
                            <Ticket className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Submit a Ticket</h3>
                        <p className="text-muted-foreground mb-6">For complex issues, submit a detailed support ticket.</p>
                        <Button variant="outline" className="w-full">Open Ticket</Button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
                    {/* Feature Request */}
                    <div className="flex items-center gap-6 bg-background p-6 rounded-xl border border-border/50">
                        <div className="w-12 h-12 rounded-lg bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 flex items-center justify-center shrink-0">
                            <Lightbulb className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">Have an idea?</h4>
                            <p className="text-sm text-muted-foreground mb-2">Submit new feature ideas or improvements.</p>
                            <Link to="#" className="text-sm font-semibold text-primary hover:underline">Submit Request →</Link>
                        </div>
                    </div>

                    {/* Status Page */}
                    <div className="flex items-center gap-6 bg-background p-6 rounded-xl border border-border/50">
                        <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/20 text-green-600 flex items-center justify-center shrink-0">
                            <Activity className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">System Status</h4>
                            <p className="text-sm text-muted-foreground mb-2">Monitor uptime and current platform status.</p>
                            <Link to="#" className="text-sm font-semibold text-primary hover:underline">Check Status →</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
