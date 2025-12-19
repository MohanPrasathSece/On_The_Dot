
import { LucideIcon, MessageSquare, Users, Video, Paperclip, Search, Shield, Zap, Layout, List, FileText, Globe, Box, Lock, Database, PlayCircle, Code2, Laptop, Headphones, Briefcase, Megaphone, TrendingUp, BarChart, Tv, HelpCircle, BookOpen, Rss, Heart, UserPlus, Terminal, Server, Info, Newspaper, Image, Layers, ShoppingBag, Contact, Award, Building, Building2, Factory, GraduationCap, Stethoscope, HandHeart, Radio, Cloud, PenTool, CheckCircle, Clock, Activity, Coins, LineChart, Bell, PieChart, Smartphone, FileCheck, Scale, Ticket, Lightbulb, CheckSquare, RefreshCcw, CreditCard, Download, Mail, MessageCircle, AlertTriangle, Calendar, FileBarChart, Repeat, Sparkles } from "lucide-react";

export type TemplateType = "standard" | "solution" | "resource" | "enterprise";

export interface FeatureSection {
    title: string;
    content: string;
    image?: string;
    layout?: "left" | "right" | "center" | "grid";
}

export interface StatItem {
    value: string;
    label: string;
}

export interface FeatureData {
    title: string;
    subtitle: string;
    description: string;
    icon: LucideIcon;
    heroImage?: string;
    benefits: string[];
    template?: TemplateType;
    sections?: FeatureSection[];
    stats?: StatItem[];
}

export const featureData: Record<string, FeatureData> = {
    // ==========================================
    // 1. FEATURES SECTION
    // ==========================================
    "invoicing": {
        title: "Invoicing",
        subtitle: "2-click Branded Invoices",
        description: "Create and send professional invoices in seconds, not hours.",
        icon: FileText,
        benefits: ["2-Click Creation", "Custom Branding", "GPT Messaging", "Multi-format Export"],
        template: "standard",
        sections: [
            {
                title: "2-click Branded Invoices",
                content: "Generate professional invoices instantly. Save your line items and client details to create invoices with just two clicks. Our intelligent system remembers your preferences and auto-fills common fields. Perfect for busy freelancers who need to focus on their work, not paperwork.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1554224155-1696413575b9?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Recurring Invoices",
                content: "Set up retainers and subscriptions once. We'll automatically generate and send invoices on your schedule (weekly, monthly, annually). Perfect for subscription businesses and retainer clients. Never miss a billing cycle again - our system handles it all automatically.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1586762524442-45e07662991a?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Custom Branding",
                content: "Make it yours. Upload your logo, choose your brand color scheme, and customize fonts to ensure every invoice reflects your professional identity. Stand out with personalized templates that impress clients and reinforce your brand every time you bill.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1586762524442-45e07662991a?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "GPT-Powered Messaging",
                content: "Stop stressing about what to write. Our AI generates polite initial emails, firm follow-ups, and urgent overdue notices automatically. Maintain professional tone without the mental effort. The AI adapts based on payment history and client behavior.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Universal Export",
                content: "Send it your way. Email directly from the platform, download as PDF, or send via SMS link for faster mobile payments. Multiple export formats ensure compatibility with any workflow. Clients can pay directly from their email or SMS.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Advanced Line Items",
                content: "Handle complex billing with ease. Add hourly rates, fixed fees, quantity-based items, and discounts automatically. Calculate taxes, apply late fees, and include payment terms - all done for you. Perfect for projects with multiple deliverables.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Client Management",
                content: "Keep all client information organized. Store contact details, billing addresses, payment history, and communication logs in one place. Quick client selection makes invoicing faster than ever. Never hunt for client details again.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "2 clicks", label: "Average Invoice Time" },
            { value: "95%", label: "Faster Than Manual" },
            { value: "10,000+", label: "Invoices Generated" }
        ]
    },
    "reminders": {
        title: "Smart Reminders",
        subtitle: "Intelligent Auto-Reminders",
        description: "Get paid 2x faster with automated, intelligent follow-ups that adapt to your clients.",
        icon: Bell,
        benefits: ["Smart Cadence", "AI Messages", "Detailed Logs", "Multi-Channel"],
        template: "standard",
        sections: [
            {
                title: "Smart Auto-Reminders",
                content: "Never chase a client manually again. Our system detects unpaid invoices and initiates a follow-up sequence automatically. The system learns from payment patterns to optimize timing.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Custom Reminder Cadence",
                content: "You're in control. Set reminders for 3 days before due, on due date, and 3, 7, or 14 days overdue. Different cadences for different client types.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "AI-Generated Messages",
                content: "Context-aware messaging that evolves from helpful reminders to firm requests based on how late the payment is. Messages adapt based on client history.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Multi-Channel Delivery",
                content: "Reach clients where they are. Send reminders via email, SMS, or both automatically. Track what works best for each client.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Reminder Logs & Analytics",
                content: "Full visibility into your collection efforts. See exactly when reminders were sent, delivered, opened, and track response rates.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "2x faster", label: "Payment Collection" },
            { value: "90%", label: "Automation Rate" },
            { value: "24/7", label: "Active Monitoring" },
            { value: "95%", label: "Delivery Rate" }
        ]
    },
    "cash-flow": {
        title: "Cash Flow Dashboard",
        subtitle: "Real-Time Financial Clarity",
        description: "Complete visibility into your business's financial health with live updating dashboards.",
        icon: Coins,
        benefits: ["Real-Time Summaries", "Overdue Alerts", "Task View", "Forecasting"],
        template: "standard",
        sections: [
            {
                title: "Real-Time Income Summaries",
                content: "Know exactly how much you've made this month, quarter, and year with live updating dashboards. Track your financial health at a glance with intuitive visualizations that update as payments come in.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Overdue Invoice Indicators",
                content: "Spot trouble fast. Red indicators highlight late payments so you can take action immediately. Prevent cash flow issues before they become problems with early warning system.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Upcoming Reminders & Tasks",
                content: "Stay ahead of your workload. See which invoices are due soon and what automated tasks the system has scheduled for today. Never miss a follow-up opportunity with your daily task overview.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Cash Flow Forecasting",
                content: "Predict your financial future. Our AI analyzes payment patterns to forecast upcoming cash flow, helping you make better business decisions and plan for expenses.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Client Payment Patterns",
                content: "Understand your clients better. See who pays on time, who needs reminders, and seasonal payment trends. Use this data to optimize your billing strategy and client relationships.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "Real-time", label: "Updates" },
            { value: "360°", label: "Financial View" },
            { value: "< 1 sec", label: "Refresh Time" },
            { value: "95%", label: "Accuracy Rate" }
        ]
    },
    "reports": {
        title: "Reports & Analytics",
        subtitle: "Data-Driven Decisions",
        description: "Deep dive into your numbers with interactive reports.",
        icon: BarChart,
        benefits: ["Income Trends", "Overdue Analysis", "Tax Exports"],
        template: "standard",
        sections: [
            {
                title: "Interactive Income Trends",
                content: "Visualize your growth with diverse charts showing revenue month-over-month and year-over-year. Identify patterns and make data-driven decisions.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Overdue Analysis",
                content: "Identify bottlenecks. See which clients are consistently late and how much revenue is currently locked up. Take targeted action to improve cash flow.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Tax-Ready Exports",
                content: "Breeze through tax season. Export all your data to CSV, PDF, or XLS formats compatible with major accounting software like QuickBooks and Xero.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "15+", label: "Report Types" },
            { value: "100%", label: "Export Compatible" },
            { value: "3 formats", label: "CSV, PDF, XLS" }
        ]
    },
    "integrations": {
        title: "Integrations",
        subtitle: "Connect Everything",
        description: "Seamlessly sync with the tools you already use.",
        icon: Zap,
        benefits: ["Payment Sync", "Live Tracking", "Multi-Platform"],
        template: "standard",
        sections: [
            {
                title: "Payment Sync",
                content: "Connect Stripe, PayPal, and Plaid directly. Payments made through these platforms automatically mark invoices as paid. Real-time synchronization keeps everything up-to-date.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1556742049-13473568652c?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Real-Time Tracking",
                content: "No more manual reconciliation. See payment statuses update instantly as money hits your account. Automatic matching saves hours of bookkeeping.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Platform Connections",
                content: "Integrate with 50+ popular business tools. Connect your CRM, accounting software, and payment processors for seamless data flow across your entire tech stack.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "50+", label: "Integrations" },
            { value: "< 5 min", label: "Setup Time" },
            { value: "Real-time", label: "Sync Speed" }
        ]
    },
    "team": {
        title: "Team Collaboration",
        subtitle: "Work Together",
        description: "Built for agencies and growing teams.",
        icon: Users,
        benefits: ["Role Access", "Real-Time Sync", "Audit Logs"],
        template: "standard",
        sections: [
            {
                title: "Invite Team Members",
                content: "Scale securely. Add Admin, Editor, or Viewer roles to control who can see and do what. Granular permissions ensure the right people have the right access.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Real-Time Sync",
                content: "Collaborate without stepping on toes. Updates happen instantly across all devices via WebSockets. See changes as they happen, no refresh needed.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1522071823991-b9671f3d47ce?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Full Audit Logs",
                content: "Total accountability. Track every invoice created, edited, sent, or deleted by any team member. Complete transparency for compliance and security.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "Unlimited", label: "Team Members" },
            { value: "3 roles", label: "Permission Levels" },
            { value: "100%", label: "Activity Logged" }
        ]
    },
    "security": {
        title: "Security & Compliance",
        subtitle: "Bank-Grade Protection",
        description: "Your data's safety is our top priority.",
        icon: Shield,
        benefits: ["Encryption", "RBAC", "GDPR/PCI"],
        template: "enterprise",
        sections: [
            {
                title: "Data Encryption",
                content: "All data is encrypted in transit and at rest using industry-standard SSL/TLS protocols with 256-bit encryption. Military-grade security for your financial data.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Role-Based Access Control",
                content: "Granular permissions ensure employees only access the data necessary for their role. Configurable security policies protect sensitive information.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1586762524442-45e07662991a?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Global Compliance",
                content: "Fully compliant with GDPR and PCI-DSS standards, ensuring your client data is handled legally and safely. Regular security audits and penetration testing.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "256-bit", label: "Encryption" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "GDPR", label: "Compliant" }
        ]
    },

    "recurring-invoices": {
        title: "Recurring Invoices",
        subtitle: "Automated Billing",
        description: "Set up recurring invoices for retainers and subscriptions.",
        icon: Repeat,
        benefits: ["Auto-recurring", "Flexible Schedules", "Subscription Management"],
        template: "standard",
        sections: [
            {
                title: "Configure Recurring Invoices",
                content: "Configure recurring invoices once and let Flowryte handle the rest. Perfect for monthly retainers, subscription services, and ongoing projects.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1554224155-1696413575b9?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Flexible Scheduling",
                content: "Set up weekly, monthly, quarterly, or custom billing cycles. Automatic invoice generation with personalized messages.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1586762524442-45e07662991a?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Subscription Management",
                content: "Track all recurring revenue in one place. Monitor active subscriptions, cancellations, and revenue projections.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Smart Invoicing",
                content: "Automatically adjust invoice amounts based on usage, hours worked, or custom metrics. Dynamic billing for dynamic businesses.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Payment Automation",
                content: "Integrate with payment processors for automatic collection. Reduce manual work and improve cash flow predictability.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "Unlimited", label: "Recurring Plans" },
            { value: "Custom", label: "Schedules" },
            { value: "Auto", label: "Billing" }
        ]
    },
    "ai-writer": {
        title: "AI Writing Assistant",
        subtitle: "Smart Content",
        description: "Generate professional invoice descriptions with AI.",
        icon: Sparkles,
        benefits: ["AI-Powered", "Professional Tone", "Custom Templates"],
        template: "standard",
        sections: [
            {
                title: "AI-Powered Content",
                content: "Our AI understands your business context and generates professional, personalized invoice descriptions that impress clients.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Professional Tone",
                content: "Maintain consistent, professional communication across all invoices. AI ensures the right tone for every client relationship.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Custom Templates",
                content: "Create AI templates for different types of work. Project descriptions, service explanations, and value propositions tailored to your offerings.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Multi-Language Support",
                content: "Generate descriptions in multiple languages. Perfect for international clients and global business expansion.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1586762524442-45e07662991a?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Learning & Improvement",
                content: "AI learns from your feedback and improves over time. Better descriptions with each use, tailored to your unique business voice.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1551288569-ee513d61f123?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "10+", label: "Languages" },
            { value: "Smart", label: "Learning" },
            { value: "Professional", label: "Quality" }
        ]
    },
    // By Department
    "sol-freelancers": {
        title: "Freelancers",
        subtitle: "For Solo Talent",
        description: "Automate the admin, focus on the craft.",
        icon: UserPlus,
        benefits: ["Time Savings", "Pro Image", "Client Management"],
        template: "solution",
        sections: [
            {
                title: "Designed for Solo Professionals",
                content: "Built specifically for freelancers who need to focus on their craft, not paperwork. Every feature is optimized for solo workflows.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Professional Branding",
                content: "Create stunning, branded invoices that reflect your professional quality. Custom templates, logos, and colors make every document impressive.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1554224155-1696413575b9?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Client Relationship Management",
                content: "Keep detailed client records, track communication history, and maintain professional relationships with automated follow-ups and reminders.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Financial Freedom",
                content: "Get paid faster and predict your cash flow with real-time dashboards. No more guessing when payments will arrive.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "20+ hrs", label: "Saved Weekly" },
            { value: "95%", label: "On-Time Payments" },
            { value: "500+", label: "Happy Freelancers" }
        ]
    },
    "sol-agencies": {
        title: "Small Agencies",
        subtitle: "For Teams",
        description: "Manage multiple clients and team members.",
        icon: Building2,
        benefits: ["Collaboration", "Scale", "Team Management"],
        template: "solution",
        sections: [
            {
                title: "Built for Team Collaboration",
                content: "Perfect for agencies with 2-50 team members. Role-based access, real-time sync, and collaborative workflows keep everyone aligned.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1522071823991-b9671f3d47ce?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Multi-Client Management",
                content: "Handle dozens or hundreds of clients simultaneously. Advanced filtering, tagging, and search make client management effortless.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Team Performance Analytics",
                content: "Track team productivity, individual performance, and client profitability. Make data-driven decisions about resource allocation.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Scalable Infrastructure",
                content: "From startup to enterprise, our system grows with you. No performance issues, no data limits, no workflow constraints.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "50+", label: "Team Members" },
            { value: "1000+", label: "Clients Managed" },
            { value: "99.9%", label: "Uptime" }
        ]
    },
    "sol-pm": {
        title: "Project Managers",
        subtitle: "Track Deliverables",
        description: "Link payments to project milestones.",
        icon: List,
        benefits: ["Milestones", "Budgets"],
        template: "solution",
        sections: [
            {
                title: "Milestone-Based Invoicing",
                content: "Automatically generate invoices when project milestones are completed. Perfect for waterfall and agile project management.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Budget Tracking",
                content: "Track project budgets in real-time. See how much has been billed versus the total project value.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Progress Integration",
                content: "Connect with project management tools to sync progress and automate billing based on completion percentages.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Client Visibility",
                content: "Give clients transparent access to project progress and billing milestones without revealing sensitive financial data.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Resource Allocation",
                content: "Track team hours and resources against project budgets to ensure profitability and accurate forecasting.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "100%", label: "Milestone Tracking" },
            { value: "Real-time", label: "Budget Updates" },
            { value: "Integrated", label: "PM Tools" }
        ]
    },
    "sol-finance": {
        title: "Financial Teams",
        subtitle: "Control & Report",
        description: "Reconciliation and reporting made easy.",
        icon: FileBarChart,
        benefits: ["Compliance", "Speed"],
        template: "solution",
        sections: [
            {
                title: "Automated Reconciliation",
                content: "Match payments to invoices automatically. Reduce manual reconciliation time by 90% with smart matching algorithms.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Financial Reporting",
                content: "Generate comprehensive financial reports with one click. P&L, cash flow, and aging reports ready for board meetings.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Compliance Management",
                content: "Stay compliant with tax regulations and accounting standards. Automatic tax calculations and audit trails.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Multi-Entity Support",
                content: "Manage multiple business entities and departments. Consolidated reporting and inter-entity transactions handled seamlessly.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1522071823991-b9671f3d47ce?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Data Export",
                content: "Export financial data to your accounting software. QuickBooks, Xero, and CSV formats supported.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1586762524442-45e07662991a?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "90%", label: "Time Saved" },
            { value: "100%", label: "Audit Ready" },
            { value: "Real-time", label: "Reporting" }
        ]
    },
    "sol-client-mgr": {
        title: "Client Managers",
        subtitle: "Relationship View",
        description: "Instant access to account status.",
        icon: Contact,
        benefits: ["CRM Sync", "History"],
        template: "solution",
        sections: [
            {
                title: "360° Client View",
                content: "See everything about a client in one dashboard. Invoices, payments, communication history, and project status.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "CRM Integration",
                content: "Sync with your CRM system automatically. Client data flows seamlessly between sales and finance.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1556742049-13473568652c?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Communication Tracking",
                content: "All client communications automatically logged. Email, calls, and meetings linked to specific invoices and projects.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Account Health Scoring",
                content: "AI-powered scoring shows which clients need attention. Identify at-risk accounts and growth opportunities.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Relationship Analytics",
                content: "Track client lifetime value, payment patterns, and satisfaction metrics to improve retention.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "360°", label: "Client View" },
            { value: "100%", label: "CRM Sync" },
            { value: "AI", label: "Insights" }
        ]
    },
    "sol-owners": {
        title: "Business Owners",
        subtitle: "Executive View",
        description: "Master cash flow and runway.",
        icon: Briefcase,
        benefits: ["Overview", "Peace of Mind"],
        template: "solution",
        sections: [
            {
                title: "Executive Dashboard",
                content: "High-level view of your entire business. Revenue, expenses, cash flow, and profitability in one glance.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Cash Flow Forecasting",
                content: "Predict cash flow 90 days into the future. Make informed decisions about hiring, investments, and expenses.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Runway Analysis",
                content: "Know exactly how long your cash will last. Scenario planning for different growth rates and expense levels.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Profitability Insights",
                content: "Understand which clients, projects, and services drive your profits. Make data-driven strategic decisions.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Business Health Score",
                content: "AI-powered health score based on revenue trends, customer retention, and financial metrics.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1551288569-ee513d61f123?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "90 days", label: "Cash Forecast" },
            { value: "Real-time", label: "Insights" },
            { value: "Strategic", label: "Decisions" }
        ]
    },

    // By Industry
    "ind-freelancers": {
        title: "Content Creators",
        subtitle: "Consultants & Creators",
        description: "Simple billing for creative work.",
        icon: Video,
        benefits: ["Fast", "Mobile"],
        template: "solution",
        sections: [
            {
                title: "Creator-Focused Invoicing",
                content: "Designed for YouTubers, podcasters, writers, and consultants. Bill for content creation, sponsorships, and consulting.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Mobile-First Design",
                content: "Create and send invoices from your phone. Perfect for creators who work on the go and need flexibility.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Revenue Tracking",
                content: "Track income from multiple platforms. YouTube, Patreon, sponsorships, and freelance work all in one place.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Brand Partnerships",
                content: "Professional invoices for brand deals and sponsorships. Include deliverables, timelines, and usage rights.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1517245327032-9e4e64f2666a?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Tax Preparation",
                content: "Automated expense tracking and categorization. Ready-to-export data for tax season and quarterly payments.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1554224155-1696413575b9?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "Mobile", label: "Optimized" },
            { value: "Multi-platform", label: "Tracking" },
            { value: "Creator", label: "Focused" }
        ]
    },
    "ind-agencies": {
        title: "Design & Marketing",
        subtitle: "Creative Agencies",
        description: "Beautiful invoices for beautiful work.",
        icon: PenTool,
        benefits: ["Branding", "Style"],
        template: "solution",
        sections: [
            {
                title: "Agency-Grade Branding",
                content: "Fully customizable invoices that match your agency's visual identity. Impress clients with professional billing.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Project-Based Billing",
                content: "Handle complex agency projects with milestone billing, retainers, and performance-based pricing.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1522071823991-b9671f3d47ce?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Client Portals",
                content: "Give clients access to their own portal. View project progress, invoices, and payment history.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Team Collaboration",
                content: "Multiple team members can collaborate on invoices. Role-based access and approval workflows.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1522071823991-b9671f3d47ce?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Revenue Recognition",
                content: "Advanced revenue recognition for agency accounting. Match revenue with project completion dates.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "Custom", label: "Branding" },
            { value: "Project", label: "Based" },
            { value: "Client", label: "Portals" }
        ]
    },
    "ind-ecommerce": {
        title: "E-Commerce",
        subtitle: "Online Retail",
        description: "Integrate sales data with accounting.",
        icon: ShoppingBag,
        benefits: ["Volume", "Auto"],
        template: "solution",
        sections: [
            {
                title: "Platform Integration",
                content: "Connect with Shopify, WooCommerce, and other e-commerce platforms. Automatic sales data sync.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1556742049-13473568652c?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Multi-Channel Sales",
                content: "Track sales across multiple channels. Online, marketplace, and retail sales unified in one system.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Inventory Billing",
                content: "Automated invoicing for inventory purchases and supplier payments. Track cost of goods sold.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Sales Tax Management",
                content: "Automatic sales tax calculation and reporting. Multi-state and international tax compliance.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Dropshipping Support",
                content: "Specialized invoicing for dropshipping businesses. Track supplier costs and customer payments separately.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "Multi", label: "Platform" },
            { value: "Auto", label: "Sync" },
            { value: "Tax", label: "Compliant" }
        ]
    },
    "ind-education": {
        title: "Education",
        subtitle: "Training & Courses",
        description: "Bill for time and materials effortlessly.",
        icon: GraduationCap,
        benefits: ["Recurring", "Students"],
        template: "solution",
        sections: [
            {
                title: "Course Billing",
                content: "Automated billing for online courses, workshops, and training programs. Handle one-time and recurring payments.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Student Management",
                content: "Track student enrollment, progress, and payment status. Automatic payment reminders for overdue tuition.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Subscription Models",
                content: "Flexible subscription billing for membership sites and ongoing education programs.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Instructor Payments",
                content: "Split payments automatically between platform and instructors. Handle commission-based revenue sharing.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Compliance Reporting",
                content: "Generate reports for educational accreditation and tax compliance. Student payment histories and revenue tracking.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "Auto", label: "Enrollment" },
            { value: "Flexible", label: "Billing" },
            { value: "Compliant", label: "Reporting" }
        ]
    },
    "ind-healthcare": {
        title: "Healthcare",
        subtitle: "Life Sciences",
        description: "Secure, compliant billing solutions.",
        icon: Stethoscope,
        benefits: ["HIPAA", "Secure"],
        template: "solution",
        sections: [
            {
                title: "HIPAA Compliant Billing",
                content: "Fully HIPAA-compliant invoicing system for healthcare providers. Patient data protection and privacy.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1505751172107-59c35904fc7c?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Insurance Claims",
                content: "Streamlined insurance claim processing. Automatic coding and submission for medical services.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Patient Billing",
                content: "Clear, professional patient billing. Co-pays, deductibles, and out-of-pocket expenses tracked accurately.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1505751172107-59c35904fc7c?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Medical Records Integration",
                content: "Secure integration with EMR systems. Patient data flows securely between clinical and billing systems.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Compliance Reporting",
                content: "Automated compliance reporting for healthcare regulations. Audit trails and documentation ready.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1505751172107-59c35904fc7c?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "HIPAA", label: "Compliant" },
            { value: "Secure", label: "Data" },
            { value: "Audit", label: "Ready" }
        ]
    },
    "ind-legal": {
        title: "Legal & Accounting",
        subtitle: "Professional Firms",
        description: "Trust accounting and retainer management.",
        icon: Scale,
        benefits: ["Trust", "Retainers"],
        template: "solution",
        sections: [
            {
                title: "Trust Accounting",
                content: "Compliant trust accounting for law firms. Client fund management with complete audit trails.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Retainer Management",
                content: "Automated retainer invoicing and tracking. Bill against retainers with detailed time entries.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Billable Hours",
                content: "Precise time tracking and billing. Six-minute increments with detailed task descriptions.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Client Matter Billing",
                content: "Organize billing by client matters and cases. Clear separation of different legal matters.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Compliance Reporting",
                content: "Bar association compliance reporting. IOLTA account management and regulatory compliance.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "IOLTA", label: "Compliant" },
            { value: "6-min", label: "Increments" },
            { value: "Audit", label: "Ready" }
        ]
    },

    // ==========================================
    // 3. PRICING SECTION (Usually handled by Pricing component, but adding data if needed for pages)
    // ==========================================
    // ... logic often in /pricing page directly, but let's add content if they click "Pro Plan" etc
    "plan-free": {
        title: "Free Trial",
        subtitle: "30 Days Free",
        description: "Experience the full power of Pro.",
        icon: CheckCircle,
        benefits: ["Invoicing", "Reports", "10 Team Members"],
        template: "standard",
        sections: [
            {
                title: "Start Risk-Free",
                content: "Try every feature of Flowryte Pro for 30 days. No credit card required, no hidden fees.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1554224155-1696413575b9?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Full Feature Access",
                content: "During your trial, you'll have access to unlimited invoices, automated reminders, team collaboration, and advanced analytics.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Easy Setup",
                content: "Get started in minutes. Import existing clients, customize your branding, and send your first invoice today.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1556742049-13473568652c?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Seamless Transition",
                content: "When your trial ends, choose the plan that fits your needs. All your data and settings are preserved.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Support Included",
                content: "Get help during your trial with priority email support and access to our comprehensive knowledge base.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "30 days", label: "Free Trial" },
            { value: "No card", label: "Required" },
            { value: "Full access", label: "To Features" }
        ]
    },
    "plan-pro": {
        title: "Pro Plan",
        subtitle: "$10/month",
        description: "Perfect for growing freelancers.",
        icon: Zap,
        benefits: ["10 Team Members", "1 Integration", "Analytics"],
        template: "standard",
        sections: [
            {
                title: "Professional Growth",
                content: "Scale your business with tools designed for growing freelancers and small teams.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Advanced Invoicing",
                content: "Create unlimited custom invoices with recurring billing, partial payments, and multi-currency support.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Smart Automation",
                content: "Automated reminders, late fees, and thank you messages. Set it up once and let it run.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Team Collaboration",
                content: "Add up to 10 team members with role-based access. Collaborate on invoices and track performance.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1522071823991-b9671f3d47ce?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Payment Integration",
                content: "Connect one payment processor (Stripe or PayPal) for seamless online payments and automatic tracking.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "$10", label: "Per Month" },
            { value: "10", label: "Team Members" },
            { value: "Unlimited", label: "Invoices" }
        ]
    },
    "plan-premium": {
        title: "Premium Plan",
        subtitle: "$20/month",
        description: "For power users and agencies.",
        icon: Award,
        benefits: ["Unlimited Team", "Priority Support", "Multi-Integrations"],
        template: "standard",
        sections: [
            {
                title: "Enterprise Power",
                content: "Everything you need to run a successful agency or growing business at scale.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Unlimited Everything",
                content: "Unlimited team members, invoices, clients, and storage. Grow without limits or additional costs.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1522071823991-b9671f3d47ce?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Priority Support",
                content: "Get priority email and chat support with guaranteed response times. Access to dedicated account manager.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Advanced Integrations",
                content: "Connect multiple payment processors, accounting software, and custom API integrations for complete workflow automation.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Custom Branding",
                content: "Advanced customization options including custom domains, white-labeling options, and personalized invoice templates.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1586762524442-45e07662991a?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "$20", label: "Per Month" },
            { value: "Unlimited", label: "Team Members" },
            { value: "Priority", label: "Support" }
        ]
    },
    "plan-lifetime": {
        title: "Lifetime Plan",
        subtitle: "$200 One-time",
        description: "Pay once, own it forever.",
        icon: Lock,
        benefits: ["All Features", "Early Access", "Exclusive Support"],
        template: "standard",
        sections: [
            {
                title: "Own Forever",
                content: "Pay once and use Flowryte forever. No monthly fees, no subscriptions, just lifetime access to all features.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1554224155-1696413575b9?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "All Future Updates",
                content: "Get every new feature, update, and improvement we release. Your lifetime plan includes all future enhancements.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Early Access",
                content: "Be the first to try new features. Get beta access to upcoming releases and help shape the product's future.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1556742049-13473568652c?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Exclusive Support",
                content: "Dedicated lifetime support with priority queue. Direct access to our founding team for personalized assistance.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Best Value",
                content: "Less than 2 years of Premium pricing for lifetime access. The smartest investment for long-term business growth.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "$200", label: "One Time" },
            { value: "Lifetime", label: "Access" },
            { value: "$2400+", label: "Value Saved" }
        ]
    },


    // ==========================================
    // 4. RESOURCES SECTION
    // ==========================================
    "res-library": {
        title: "Resource Library",
        subtitle: "Knowledge Base",
        description: "Detailed guides and FAQs.",
        icon: BookOpen,
        benefits: ["Guides", "Tutorials"],
        template: "resource",
        sections: [
            {
                title: "Comprehensive Guides",
                content: "Step-by-step tutorials covering every feature of Flowryte. From basic setup to advanced automation.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Video Tutorials",
                content: "Watch and learn with our comprehensive video library. See exactly how to use each feature with real examples.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "FAQ Center",
                content: "Quick answers to common questions. Search our database of frequently asked questions and instant solutions.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Best Practices",
                content: "Learn proven strategies for invoicing, cash flow management, and client communication from industry experts.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Troubleshooting",
                content: "Solve common issues quickly with our troubleshooting guides and diagnostic tools.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "100+", label: "Guides" },
            { value: "50+", label: "Videos" },
            { value: "24/7", label: "Available" }
        ]
    },
    "res-whats-new": {
        title: "What's New",
        subtitle: "Changelog",
        description: "Latest product updates.",
        icon: Rss,
        benefits: ["Features", "Fixes"],
        template: "standard",
        sections: [
            {
                title: "Latest Updates",
                content: "Stay informed about the newest features, improvements, and bug fixes in Flowryte.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Feature Releases",
                content: "Discover new capabilities and enhancements that make invoicing easier and more powerful.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Bug Fixes & Improvements",
                content: "Learn about recent bug fixes, performance improvements, and stability enhancements.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Upcoming Features",
                content: "Get a sneak peek at what we're working on and features coming in future releases.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Release Notes",
                content: "Detailed technical notes for each release, including API changes and migration guides.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1586762524442-45e07662991a?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "Weekly", label: "Updates" },
            { value: "50+", label: "Features" },
            { value: "100+", label: "Fixes" }
        ]
    },
    "res-tour": {
        title: "Product Tour",
        subtitle: "Walkthrough",
        description: "Interactive app demo.",
        icon: PlayCircle,
        benefits: ["Interactive", "Fast"],
        template: "standard",
        sections: [
            {
                title: "Interactive Demo",
                content: "Experience Flowryte hands-on with our interactive product tour. No signup required.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Dashboard Overview",
                content: "Explore the main dashboard and see how all your financial information is organized in one place.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1556742049-13473568652c?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Invoice Creation",
                content: "Watch how easy it is to create professional invoices in just two clicks with our smart templates.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Automation Features",
                content: "See automated reminders, payment tracking, and cash flow insights in action.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Team Collaboration",
                content: "Learn how teams work together with role-based access and real-time collaboration tools.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1522071823991-b9671f3d47ce?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "5 min", label: "Tour Length" },
            { value: "Interactive", label: "Experience" },
            { value: "No signup", label: "Required" }
        ]
    },
    "res-events": {
        title: "Events",
        subtitle: "Webinars",
        description: "Workshops and demos.",
        icon: Calendar,
        benefits: ["Live", "Q&A"],
        template: "resource",
        sections: [
            {
                title: "Live Webinars",
                content: "Join our regular webinars to learn new features, best practices, and industry insights.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Product Demos",
                content: "Live demonstrations of new features and workflows. Ask questions and get real-time answers.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Workshop Sessions",
                content: "Hands-on workshops to help you master specific features and workflows in Flowryte.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1522071823991-b9671f3d47ce?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Expert Panels",
                content: "Industry experts discuss invoicing trends, cash flow management, and business growth strategies.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Community Meetups",
                content: "Connect with other Flowryte users, share experiences, and learn from the community.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1522071823991-b9671f3d47ce?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "Weekly", label: "Webinars" },
            { value: "Live", label: "Q&A" },
            { value: "Free", label: "To Attend" }
        ]
    },
    "res-devs": {
        title: "Developer Resources",
        subtitle: "Build",
        description: "API docs and SDKs.",
        icon: Code2,
        benefits: ["API", "Webhooks"],
        template: "standard",
        sections: [
            {
                title: "API Documentation",
                content: "Comprehensive API documentation with endpoints, authentication, and code examples.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "SDKs & Libraries",
                content: "Official SDKs for popular programming languages. Integrations made simple with ready-to-use libraries.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Webhooks Guide",
                content: "Set up webhooks to receive real-time notifications about invoices, payments, and events.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1517245327032-9e4e64f2666a?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Code Examples",
                content: "Ready-to-use code snippets and sample applications to accelerate your development.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Developer Community",
                content: "Join our developer community, ask questions, and share your integrations with other developers.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1522071823991-b9671f3d47ce?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "RESTful", label: "API" },
            { value: "5+", label: "SDKs" },
            { value: "100%", label: "Documented" }
        ]
    },
    "res-stories": {
        title: "Customer Stories",
        subtitle: "Success",
        description: "Case studies and testimonials from users.",
        icon: Heart,
        benefits: ["Growth", "Results"],
        template: "resource",
        sections: [
            {
                title: "Success Stories",
                content: "Real stories from real customers who transformed their business with Flowryte.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Sarah's Design Studio",
                content: "Sarah reduced her invoice creation time by 80% and gets paid 3x faster. 'I used to spend hours every month on invoicing. Now it's literally 2 clicks.'",
                layout: "left",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Mike's Consulting Firm",
                content: "Mike's team of 5 consultants now handles 100+ clients seamlessly. 'Flowryte scaled with us. The automated reminders alone saved us thousands in late payments.'",
                layout: "right",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "10,000+", label: "Happy Customers" },
            { value: "95%", label: "Satisfaction Rate" },
            { value: "3x", label: "Faster Payments" }
        ]
    },
    "res-community": {
        title: "Community",
        subtitle: "Connect",
        description: "Slack/Discord groups.",
        icon: MessageCircle,
        benefits: ["Network", "Help"],
        template: "resource",
        sections: [
            {
                title: "Join the Conversation",
                content: "Connect with thousands of Flowryte users in our active Slack and Discord communities.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1522071823991-b9671f3d47ce?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Get Help Fast",
                content: "Quick answers from experienced users. Our community is always ready to help with questions and tips.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Share Your Ideas",
                content: "Suggest features, share workflows, and help shape the future of Flowryte with other power users.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Learn from Peers",
                content: "Discover how other freelancers and agencies use Flowryte to solve real business challenges.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Exclusive Events",
                content: "Community-only webinars, AMAs with the product team, and virtual meetups.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1522071823991-b9671f3d47ce?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "5000+", label: "Members" },
            { value: "24/7", label: "Active" },
            { value: "Free", label: "To Join" }
        ]
    },
    "res-certified": {
        title: "Flowryte Certified",
        subtitle: "Certification",
        description: "Become a power user.",
        icon: Award,
        benefits: ["Badge", "Skills"],
        template: "standard",
        sections: [
            {
                title: "Master Flowryte",
                content: "Become a certified Flowryte expert and demonstrate your proficiency in invoicing automation.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Comprehensive Training",
                content: "In-depth training covering all features, best practices, and advanced workflows.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Hands-on Assessment",
                content: "Practical exams and real-world scenarios to test your knowledge and skills.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Certification Benefits",
                content: "Exclusive access to beta features, priority support, and a listing in our certified professionals directory.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Community Recognition",
                content: "Join an elite group of Flowryte experts and get recognized for your expertise.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1522071823991-b9671f3d47ce?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "Expert", label: "Level" },
            { value: "Lifetime", label: "Valid" },
            { value: "Premium", label: "Benefits" }
        ]
    },
    "res-blog": {
        title: "Blog",
        subtitle: "Insights",
        description: "Financial management tips.",
        icon: Newspaper,
        benefits: ["Tips", "Trends"],
        template: "resource",
        sections: [
            {
                title: "Expert Insights",
                content: "Financial management tips, invoicing strategies, and business growth advice from industry experts.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Case Studies",
                content: "Deep dives into how successful businesses use Flowryte to streamline their financial operations.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Industry Trends",
                content: "Stay updated on the latest trends in freelancing, small business finance, and fintech innovations.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Product Updates",
                content: "Behind-the-scenes looks at new features, development insights, and product roadmap updates.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1504868584819-f8e90ece2cd1?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Guest Contributors",
                content: "Thought leadership from successful entrepreneurs, accountants, and business consultants.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "Weekly", label: "Posts" },
            { value: "100+", label: "Articles" },
            { value: "Expert", label: "Authors" }
        ]
    },
    "res-marketplace": {
        title: "Marketplace",
        subtitle: "Add-ons",
        description: "Third-party integrations.",
        icon: Box,
        benefits: ["Apps", "Plugins"],
        template: "resource",
        sections: [
            {
                title: "Extend Flowryte",
                content: "Discover apps and integrations that extend Flowryte's capabilities and connect with your favorite tools.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Accounting Integrations",
                content: "Connect with QuickBooks, Xero, and other accounting software for seamless data synchronization.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1517245327032-9e4e64f2666a?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Payment Processors",
                content: "Integrate with additional payment processors beyond our built-in Stripe and PayPal support.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "CRM & Project Management",
                content: "Connect with tools like HubSpot, Asana, and Trello to keep your workflows connected.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Custom Solutions",
                content: "Build and sell your own Flowryte integrations or hire certified developers for custom solutions.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "50+", label: "Integrations" },
            { value: "Growing", label: "Ecosystem" },
            { value: "Verified", label: "Apps" }
        ]
    },

    // ==========================================
    // 5. PRODUCT SECTION
    // ==========================================
    "prod-why": {
        title: "Why Flowryte?",
        subtitle: "Simplicity & Power",
        description: "Automated invoicing, reminders, and cash flow for the modern era.",
        icon: Lightbulb,
        benefits: ["Simplicity", "Design", "Efficiency"],
        template: "standard",
        sections: [
            {
                title: "Simplicity First", content: "We focus on removing friction. No clunky menus, just the tools you need.", layout: "center",
                image: "https://images.unsplash.com/photo-1554224155-1696413575b9?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Built for Freelancers", content: "Designed by freelancers who understand the pain points of running a small business.", layout: "left",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Automation at Core", content: "Every feature is designed to save you time and reduce manual work.", layout: "right",
                image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Beautiful Design", content: "Software that's actually pleasant to use. Clean, intuitive, and professional.", layout: "left",
                image: "https://images.unsplash.com/photo-1586762524442-45e07662991a?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Powerful Insights", content: "Understand your business better with smart analytics and cash flow forecasting.", layout: "right",
                image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "2 clicks", label: "Invoice Creation" },
            { value: "90%", label: "Time Saved" },
            { value: "10,000+", label: "Happy Users" }
        ]
    },
    "prod-vs-manual": {
        title: "Vs. Manual Invoicing",
        subtitle: "Stop Wasting Time",
        description: "Why automation beats spreadsheets every time.",
        icon: CheckSquare,
        benefits: ["Time Saving", "Professionalism", "Consistency"],
        template: "standard",
        sections: [
            {
                title: "Time-saving automation", content: "Stop copying and pasting into Word docs. Generate invoices in seconds.", layout: "right",
                image: "https://images.unsplash.com/photo-1554224155-1696413575b9?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Automated Follow-ups", content: "Manual chasing is awkward. Let our AI do the polite nudging for you.", layout: "left",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Professional Templates", content: "No more design struggles. Access beautiful, professional templates that impress clients.", layout: "right",
                image: "https://images.unsplash.com/photo-1586762524442-45e07662991a?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Error Reduction", content: "Eliminate calculation errors and typos. Automated calculations ensure accuracy every time.", layout: "left",
                image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Cash Flow Insights", content: "Manual tracking misses patterns. Get instant insights into your payment trends and cash flow.", layout: "right",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "10 hours", label: "Saved Weekly" },
            { value: "95%", label: "Fewer Errors" },
            { value: "3x", label: "Faster Payments" }
        ]
    },
    "prod-vs-tools": {
        title: "Vs. Other Tools",
        subtitle: "The Modern Choice",
        description: "See how we compare to QuickBooks and FreshBooks.",
        icon: RefreshCcw,
        benefits: ["Better Design", "Easier to Use", "Lower Cost"],
        template: "standard",
        sections: [
            {
                title: "Streamlined for small teams", content: "Big tools are bloated. We built this specifically for freelancers and small agencies.", layout: "left",
                image: "https://images.unsplash.com/photo-1522071823991-b9671f3d47ce?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Minimalist Design", content: "Enjoy software that actually looks good and feels great to use.", layout: "right",
                image: "https://images.unsplash.com/photo-1586762524442-45e07662991a?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "No Hidden Fees", content: "Transparent pricing with no surprise charges. What you see is what you pay.", layout: "left",
                image: "https://images.unsplash.com/photo-1554224155-1696413575b9?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Modern Technology", content: "Built with the latest tech for faster performance and better reliability.", layout: "right",
                image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Focused Features", content: "No overwhelming feature bloat. Just the tools you actually need to run your business.", layout: "left",
                image: "https://images.unsplash.com/photo-1522071823991-b9671f3d47ce?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "50%", label: "Lower Cost" },
            { value: "10x", label: "Faster Setup" },
            { value: "Modern", label: "Design" }
        ]
    },
    "prod-productivity": {
        title: "Productivity",
        subtitle: "Manage Time",
        description: "Smart reminders to avoid late payments and save mental energy.",
        icon: Zap,
        benefits: ["Focus", "Flow", "Time Savings"],
        template: "standard",
        sections: [
            {
                title: "Intelligent Time Management",
                content: "Our system learns your patterns and suggests optimal times for invoicing and follow-ups, maximizing your productivity peaks.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Automated Workflow",
                content: "Reduce administrative overhead by 80%. From invoice creation to payment collection, every step is automated to save you hours each week.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Focus Mode Integration",
                content: "Minimize distractions with batched notifications. Get all your updates at once, or pause notifications during deep work sessions.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Smart Templates",
                content: "Create invoice templates for different client types and projects. One-click generation means you spend less time on paperwork and more on billable work.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Productivity Analytics",
                content: "Track how much time you're saving with detailed metrics on invoice generation, follow-up automation, and payment collection efficiency.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1551288569-ee513d61f123?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "15+ hrs", label: "Saved Monthly" },
            { value: "80%", label: "Less Admin Work" },
            { value: "2x", label: "Faster Payments" }
        ]
    },
    "prod-tasks": {
        title: "Task Management",
        subtitle: "Stay Organized",
        description: "Keep track of overdue invoices and to-dos.",
        icon: CheckSquare,
        benefits: ["Actionable", "Fast", "Priority-Based"],
        template: "standard",
        sections: [
            {
                title: "Smart Task Prioritization",
                content: "Our AI automatically prioritizes tasks based on urgency and impact. Overdue invoices and critical follow-ups always appear at the top.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Actionable Dashboard",
                content: "Access all your urgent items directly from the homepage. See at a glance what needs your attention today, this week, and this month.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Automated Task Creation",
                content: "Tasks are automatically generated when invoices are created, sent, or become overdue. No manual entry required - just focus on execution.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Bulk Actions",
                content: "Handle multiple tasks at once. Send batch reminders, mark multiple invoices as paid, or export task lists for team coordination.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Task History & Analytics",
                content: "Track your task completion rates and identify bottlenecks. See how quickly you're responding to clients and processing payments.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1551288569-ee513d61f123?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "95%", label: "Task Completion" },
            { value: "24hrs", label: "Avg Response Time" },
            { value: "50+", label: "Automated Tasks" }
        ]
    },

    // ==========================================
    // 6. COMPANY SECTION
    // ==========================================
    "com-about": {
        title: "About Us",
        subtitle: "Our Mission",
        description: "Helping freelancers and small businesses win.",
        icon: Info,
        benefits: ["Mission", "Vision"],
        template: "standard",
        sections: [
            { title: "Our Vision", content: "Simplify invoicing so you can focus on what you do best.", layout: "center", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" },
            { title: "Our Story", content: "Founded by freelancers who experienced the pain of manual invoicing firsthand. We built the solution we wished existed.", layout: "left", image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800" },
            { title: "Core Values", content: "Simplicity, automation, and customer success guide every decision we make.", layout: "right", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" },
            { title: "Our Team", content: "A diverse group of designers, developers, and finance experts passionate about helping small businesses thrive.", layout: "left", image: "https://images.unsplash.com/photo-1522071823991-b9671f3d47ce?auto=format&fit=crop&q=80&w=800" },
            { title: "Our Commitment", content: "We're dedicated to continuously improving Flowryte based on your feedback and evolving business needs.", layout: "right", image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800" }
        ],
        stats: [
            { value: "2019", label: "Founded" },
            { value: "10,000+", label: "Users" },
            { value: "Global", label: "Reach" }
        ]
    },
    "com-news": {
        title: "News",
        subtitle: "Press Room",
        description: "Announcements and updates.",
        icon: Newspaper,
        benefits: ["Latest", "Updates"],
        template: "resource",
        sections: [
            {
                title: "Latest Announcements",
                content: "Stay up to date with Flowryte's latest features, partnerships, and company milestones.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Press Coverage",
                content: "See what industry leaders are saying about Flowryte's innovative approach to invoicing automation.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            }
        ]
    },
    "com-careers": {
        title: "Careers",
        subtitle: "Join Us",
        description: "Help us build the future of work.",
        icon: UserPlus,
        benefits: ["Remote", "Equity"],
        template: "standard",
        sections: [
            {
                title: "Work With Us",
                content: "Join a team that's passionate about simplifying financial operations for freelancers and small businesses.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1522071823991-b9671f3d47ce?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Open Positions",
                content: "We're always looking for talented individuals who share our vision. Check our current openings and see if you're a fit.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Our Culture",
                content: "Remote-first, collaborative, and focused on impact. We believe in work-life balance and continuous learning.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "100%", label: "Remote" },
            { value: "Unlimited", label: "PTO" },
            { value: "Competitive", label: "Equity" }
        ]
    },
    "com-swag": {
        title: "Swag Store",
        subtitle: "Merch",
        description: "Rep the brand.",
        icon: ShoppingBag,
        benefits: ["Hoodies", "Stickers"],
        template: "standard",
        sections: [
            {
                title: "Flowryte Merchandise",
                content: "Show your love for Flowryte with our exclusive merchandise collection.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Available Items",
                content: "From premium hoodies to sleek laptop stickers, we have something for every Flowryte fan.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1556742049-13473568652c?auto=format&fit=crop&q=80&w=800"
            }
        ]
    },
    "com-brand": {
        title: "Brand Center",
        subtitle: "Assets",
        description: "Logos and guidelines.",
        icon: Image,
        benefits: ["Logos", "Colors"],
        template: "standard",
        sections: [
            {
                title: "Brand Guidelines",
                content: "Download our official logos, color palettes, and brand guidelines.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1558403191-2244b6716fd0?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Media Kit",
                content: "Everything you need to represent Flowryte consistently across all platforms.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1586762524442-45e07662991a?auto=format&fit=crop&q=80&w=800"
            }
        ]
    },
    "com-eng-blog": {
        title: "Engineering Blog",
        subtitle: "Under the Hood",
        description: "Tech stack and challenges.",
        icon: Code2,
        benefits: ["Tech", "Challenges"],
        template: "resource",
        sections: [
            {
                title: "Technical Insights",
                content: "Deep dives into our architecture, challenges, and solutions.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Open Source Contributions",
                content: "Learn about our open source projects and how we give back to the community.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=800"
            }
        ]
    },
    "com-design-blog": {
        title: "Design Blog",
        subtitle: "UX/UI",
        description: "Crafting the experience.",
        icon: PenTool,
        benefits: ["Design", "UX"],
        template: "resource",
        sections: [
            {
                title: "Design Philosophy",
                content: "Our approach to creating intuitive and beautiful user experiences.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1586762524442-45e07662991a?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Case Studies",
                content: "Behind the scenes of our design process and decision making.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            }
        ]
    },
    "com-contact": {
        title: "Contact Us",
        subtitle: "Get in Touch",
        description: "Feedback and inquiries.",
        icon: Contact,
        benefits: ["Support", "Sales"],
        template: "standard",
        sections: [
            {
                title: "Get in Touch",
                content: "We're here to help. Reach out with questions, feedback, or partnership opportunities.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Contact Methods",
                content: "Multiple ways to reach us - email, phone, or through our support portal.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800"
            }
        ]
    },

    // ==========================================
    // 7. SUPPORT SECTION
    // ==========================================
    "sup-chat": {
        title: "Live Chat",
        subtitle: "Instant Support",
        description: "Chat with our team.",
        icon: MessageCircle,
        benefits: ["24/7", "Human"],
        template: "standard",
        sections: [
            {
                title: "Real-Time Support",
                content: "Get instant help from our support team through live chat.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Available 24/7",
                content: "Our support team is always here to help you with any questions or issues.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1522071823991-b9671f3d47ce?auto=format&fit=crop&q=80&w=800"
            }
        ]
    },
    "sup-help": {
        title: "Help Center",
        subtitle: "Knowledge Base",
        description: "Search for answers.",
        icon: Search,
        benefits: ["FAQs", "Guides"],
        template: "resource",
        sections: [
            {
                title: "Self-Service Support",
                content: "Find answers to common questions and learn how to use Flowryte effectively.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Comprehensive Guides",
                content: "Step-by-step tutorials and detailed documentation for all features.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
            }
        ]
    },
    "sup-ticket": {
        title: "Ticketing System",
        subtitle: "Submit Issue",
        description: "For complex problems.",
        icon: Ticket,
        benefits: ["Tracking", "Detail"],
        template: "standard",
        sections: [
            {
                title: "Track Your Issues",
                content: "Submit and track support tickets for complex technical issues.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Priority Support",
                content: "Get dedicated support for critical issues with guaranteed response times.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
            }
        ]
    },
    "sup-request": {
        title: "Feature Request",
        subtitle: "Ideas",
        description: "Tell us what to build next.",
        icon: Lightbulb,
        benefits: ["Vote", "Suggest"],
        template: "standard",
        sections: [
            {
                title: "Shape Our Future",
                content: "Help us prioritize features by voting and suggesting new ideas.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1586762524442-45e07662991a?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Community Driven",
                content: "See what others are requesting and join the conversation.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1522071823991-b9671f3d47ce?auto=format&fit=crop&q=80&w=800"
            }
        ]
    },
    "sup-status": {
        title: "Status Page",
        subtitle: "System Uptime",
        description: "Monitor platform health.",
        icon: Activity,
        benefits: ["Live", "History"],
        template: "standard",
        sections: [
            {
                title: "Real-Time Monitoring",
                content: "Check the current status of all Flowryte services and systems.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1551288569-ee513d61f123?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Historical Data",
                content: "View uptime history and past incidents with detailed reports.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1551288569-ee513d61f123?auto=format&fit=crop&q=80&w=800"
            }
        ],
        stats: [
            { value: "99.9%", label: "Uptime" },
            { value: "< 1min", label: "Response Time" },
            { value: "24/7", label: "Monitoring" }
        ]
    },

    // ==========================================
    // 8. LEGAL SECTION
    // ==========================================
    "leg-terms": {
        title: "Terms of Service",
        subtitle: "Rules",
        description: "Guidelines governing use.",
        icon: FileText,
        benefits: ["Legal", "Compliance"],
        template: "standard",
        sections: [
            {
                title: "User Agreement",
                content: "Terms and conditions for using Flowryte's services and platform.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Service Terms",
                content: "Detailed terms regarding account usage, payments, and service levels.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800"
            }
        ]
    },
    "leg-privacy": {
        title: "Privacy Policy",
        subtitle: "Data",
        description: "How we handle your data.",
        icon: Lock,
        benefits: ["Security", "Privacy"],
        template: "standard",
        sections: [
            {
                title: "Data Protection",
                content: "How we collect, use, and protect your personal information.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Your Rights",
                content: "Information about your data rights and how to exercise them.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800"
            }
        ]
    },
    "leg-cookie": {
        title: "Cookie Policy",
        subtitle: "Tracking",
        description: "Details on cookies used.",
        icon: AlertTriangle,
        benefits: ["Transparency", "Control"],
        template: "standard",
        sections: [
            {
                title: "Cookie Usage",
                content: "Information about cookies we use and why we use them.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Managing Cookies",
                content: "How to control and manage your cookie preferences.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800"
            }
        ]
    },

    // Special
    "enterprise": { title: "Enterprise", subtitle: "Custom Solutions", description: "For large organizations.", icon: Building2, benefits: ["SLA", "Support"], template: "enterprise" }
};
