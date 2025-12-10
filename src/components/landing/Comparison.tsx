import { CheckCircle2, XCircle } from "lucide-react";

export function Comparison() {
    return (
        <section className="py-24 bg-muted/20">
            <div className="container mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        From chaos to clarity
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        See how OnTheDot transforms your invoicing workflow.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-0 max-w-5xl mx-auto overflow-hidden rounded-3xl shadow-xl">
                    {/* The Old Way */}
                    <div className="bg-red-50 dark:bg-red-900/10 p-10 md:p-12 relative">
                        <div className="absolute top-0 right-0 p-4 bg-red-100 rounded-bl-2xl">
                            <span className="text-xl">😩</span>
                        </div>
                        <h3 className="text-2xl font-bold text-red-800 dark:text-red-400 mb-2">The Old Way</h3>
                        <p className="text-red-600/80 font-medium mb-8">Stressful & Chaotic</p>

                        <ul className="space-y-6">
                            {[
                                "Hours spent creating invoices manually",
                                "Forgetting to follow up on overdue payments",
                                "No visibility into cash flow patterns",
                                "Awkward conversations about late payments"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-red-900/70 dark:text-red-300">
                                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <span className="text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* The OnTheDot Way */}
                    <div className="bg-[#4A154B] p-10 md:p-12 relative text-white">
                        <div className="absolute top-0 left-0 p-4 bg-white/10 rounded-br-2xl">
                            <span className="text-xl">✨</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">The OnTheDot Way</h3>
                        <p className="text-white/80 font-medium mb-8">Smooth & Professional</p>

                        <ul className="space-y-6">
                            {[
                                "Beautiful invoices created in 2 clicks",
                                "Automatic reminders sent at perfect timing",
                                "Real-time cash flow visibility",
                                "Professional payment processes"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                                    <span className="text-lg font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
