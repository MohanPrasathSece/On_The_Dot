
import { LucideIcon, MessageSquare, Users, Video, Paperclip, Search, Shield, Zap, Layout, List, FileText, Globe, Box, Lock, Database, PlayCircle, Code2, Laptop, Headphones, Briefcase, Megaphone, TrendingUp, BarChart, Tv, HelpCircle, BookOpen, Rss, Heart, UserPlus, Terminal, Server, Info, Newspaper, Image, Layers, ShoppingBag, Contact, Award, Building, Building2, Factory, GraduationCap, Stethoscope, HandHeart, Radio, Cloud, PenTool, CheckCircle, Clock, Activity, Coins, LineChart, Bell, PieChart, Smartphone, FileCheck, Scale, Ticket, Lightbulb, CheckSquare, RefreshCcw, CreditCard, Download, Mail, MessageCircle, AlertTriangle, Calendar, FileBarChart } from "lucide-react";

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
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop"
            },
            {
                title: "Recurring Invoices",
                content: "Set up retainers and subscriptions once. We'll automatically generate and send invoices on your schedule (weekly, monthly, annually). Perfect for subscription businesses and retainer clients. Never miss a billing cycle again - our system handles it all automatically.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
            },
            {
                title: "Custom Branding",
                content: "Make it yours. Upload your logo, choose your brand color scheme, and customize fonts to ensure every invoice reflects your professional identity. Stand out with personalized templates that impress clients and reinforce your brand every time you bill.",
                layout: "center"
            },
            {
                title: "GPT-Powered Messaging",
                content: "Stop stressing about what to write. Our AI generates polite initial emails, firm follow-ups, and urgent overdue notices automatically. Maintain professional tone without the mental effort. The AI adapts based on payment history and client behavior.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop"
            },
            {
                title: "Universal Export",
                content: "Send it your way. Email directly from the platform, download as PDF, or send via SMS link for faster mobile payments. Multiple export formats ensure compatibility with any workflow. Clients can pay directly from their email or SMS.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop"
            },
            {
                title: "Advanced Line Items",
                content: "Handle complex billing with ease. Add hourly rates, fixed fees, quantity-based items, and discounts automatically. Calculate taxes, apply late fees, and include payment terms - all done for you. Perfect for projects with multiple deliverables.",
                layout: "center"
            },
            {
                title: "Client Management",
                content: "Keep all client information organized. Store contact details, billing addresses, payment history, and communication logs in one place. Quick client selection makes invoicing faster than ever. Never hunt for client details again.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop"
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
                image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop"
            },
            {
                title: "Custom Reminder Cadence",
                content: "You're in control. Set reminders for 3 days before due, on due date, and 3, 7, or 14 days overdue. Different cadences for different client types.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop"
            },
            {
                title: "AI-Generated Messages",
                content: "Context-aware messaging that evolves from helpful reminders to firm requests based on how late the payment is. Messages adapt based on client history.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
            },
            {
                title: "Multi-Channel Delivery",
                content: "Reach clients where they are. Send reminders via email, SMS, or both automatically. Track what works best for each client.",
                layout: "center"
            },
            {
                title: "Reminder Logs & Analytics",
                content: "Full visibility into your collection efforts. See exactly when reminders were sent, delivered, opened, and track response rates.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
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
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
            },
            {
                title: "Overdue Invoice Indicators",
                content: "Spot trouble fast. Red indicators highlight late payments so you can take action immediately. Prevent cash flow issues before they become problems with early warning system.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
            },
            {
                title: "Upcoming Reminders & Tasks",
                content: "Stay ahead of your workload. See which invoices are due soon and what automated tasks the system has scheduled for today. Never miss a follow-up opportunity with your daily task overview.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
            },
            {
                title: "Cash Flow Forecasting",
                content: "Predict your financial future. Our AI analyzes payment patterns to forecast upcoming cash flow, helping you make better business decisions and plan for expenses.",
                layout: "center"
            },
            {
                title: "Client Payment Patterns",
                content: "Understand your clients better. See who pays on time, who needs reminders, and seasonal payment trends. Use this data to optimize your billing strategy and client relationships.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
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
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
            },
            {
                title: "Overdue Analysis",
                content: "Identify bottlenecks. See which clients are consistently late and how much revenue is currently locked up. Take targeted action to improve cash flow.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
            },
            {
                title: "Tax-Ready Exports",
                content: "Breeze through tax season. Export all your data to CSV, PDF, or XLS formats compatible with major accounting software like QuickBooks and Xero.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop"
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
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
            },
            {
                title: "Real-Time Tracking",
                content: "No more manual reconciliation. See payment statuses update instantly as money hits your account. Automatic matching saves hours of bookkeeping.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
            },
            {
                title: "Platform Connections",
                content: "Integrate with 50+ popular business tools. Connect your CRM, accounting software, and payment processors for seamless data flow across your entire tech stack.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop"
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
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
            },
            {
                title: "Real-Time Sync",
                content: "Collaborate without stepping on toes. Updates happen instantly across all devices via WebSockets. See changes as they happen, no refresh needed.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop"
            },
            {
                title: "Full Audit Logs",
                content: "Total accountability. Track every invoice created, edited, sent, or deleted by any team member. Complete transparency for compliance and security.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
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
                image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop"
            },
            {
                title: "Role-Based Access Control",
                content: "Granular permissions ensure employees only access the data necessary for their role. Configurable security policies protect sensitive information.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
            },
            {
                title: "Global Compliance",
                content: "Fully compliant with GDPR and PCI-DSS standards, ensuring your client data is handled legally and safely. Regular security audits and penetration testing.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop"
            }
        ],
        stats: [
            { value: "256-bit", label: "Encryption" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "GDPR", label: "Compliant" }
        ]
    },

    // ==========================================
    // 2. SOLUTIONS SECTION
    // ==========================================
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
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
            },
            {
                title: "Professional Branding",
                content: "Create stunning, branded invoices that reflect your professional quality. Custom templates, logos, and colors make every document impressive.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop"
            },
            {
                title: "Client Relationship Management",
                content: "Keep detailed client records, track communication history, and maintain professional relationships with automated follow-ups and reminders.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
            },
            {
                title: "Financial Freedom",
                content: "Get paid faster and predict your cash flow with real-time dashboards. No more guessing when payments will arrive.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop"
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
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
            },
            {
                title: "Multi-Client Management",
                content: "Handle dozens or hundreds of clients simultaneously. Advanced filtering, tagging, and search make client management effortless.",
                layout: "left",
                image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop"
            },
            {
                title: "Team Performance Analytics",
                content: "Track team productivity, individual performance, and client profitability. Make data-driven decisions about resource allocation.",
                layout: "right",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
            },
            {
                title: "Scalable Infrastructure",
                content: "From startup to enterprise, our system grows with you. No performance issues, no data limits, no workflow constraints.",
                layout: "center",
                image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=600&fit=crop"
            }
        ],
        stats: [
            { value: "50+", label: "Team Members" },
            { value: "1000+", label: "Clients Managed" },
            { value: "99.9%", label: "Uptime" }
        ]
    },
    "sol-pm": { title: "Project Managers", subtitle: "Track Deliverables", description: "Link payments to project milestones.", icon: List, benefits: ["Milestones", "Budgets"], template: "solution" },
    "sol-finance": { title: "Financial Teams", subtitle: "Control & Report", description: "Reconciliation and reporting made easy.", icon: FileBarChart, benefits: ["Compliance", "Speed"], template: "solution" },
    "sol-client-mgr": { title: "Client Managers", subtitle: "Relationship View", description: "Instant access to account status.", icon: Contact, benefits: ["CRM Sync", "History"], template: "solution" },
    "sol-owners": { title: "Business Owners", subtitle: "Executive View", description: "Master cash flow and runway.", icon: Briefcase, benefits: ["Overview", "Peace of Mind"], template: "solution" },

    // By Industry
    "ind-freelancers": { title: "Content Creators", subtitle: "Consultants & Creators", description: "Simple billing for creative work.", icon: Video, benefits: ["Fast", "Mobile"], template: "solution" },
    "ind-agencies": { title: "Design & Marketing", subtitle: "Creative Agencies", description: "Beautiful invoices for beautiful work.", icon: PenTool, benefits: ["Branding", "Style"], template: "solution" },
    "ind-ecommerce": { title: "E-Commerce", subtitle: "Online Retail", description: "Integrate sales data with accounting.", icon: ShoppingBag, benefits: ["Volume", "Auto"], template: "solution" },
    "ind-education": { title: "Education", subtitle: "Training & Courses", description: "Bill for time and materials effortlessly.", icon: GraduationCap, benefits: ["Recurring", "Students"], template: "solution" },
    "ind-healthcare": { title: "Healthcare", subtitle: "Life Sciences", description: "Secure, compliant billing solutions.", icon: Stethoscope, benefits: ["HIPAA", "Secure"], template: "solution" },
    "ind-legal": { title: "Legal & Accounting", subtitle: "Professional Firms", description: "Trust accounting and retainer management.", icon: Scale, benefits: ["Trust", "Retainers"], template: "solution" },

    // ==========================================
    // 3. PRICING SECTION (Usually handled by Pricing component, but adding data if needed for pages)
    // ==========================================
    // ... logic often in /pricing page directly, but let's add content if they click "Pro Plan" etc
    "plan-free": { title: "Free Trial", subtitle: "30 Days Free", description: "Experience the full power of Pro.", icon: CheckCircle, benefits: ["Invoicing", "Reports", "10 Team Members"], template: "standard" },
    "plan-pro": { title: "Pro Plan", subtitle: "$10/month", description: "Perfect for growing freelancers.", icon: Zap, benefits: ["10 Team Members", "1 Integration", "Analytics"], template: "standard" },
    "plan-premium": { title: "Premium Plan", subtitle: "$20/month", description: "For power users and agencies.", icon: Award, benefits: ["Unlimited Team", "Priority Support", "Multi-Integrations"], template: "standard" },
    "plan-lifetime": { title: "Lifetime Plan", subtitle: "$200 One-time", description: "Pay once, own it forever.", icon: Lock, benefits: ["All Features", "Early Access", "Exclusive Support"], template: "standard" },


    // ==========================================
    // 4. RESOURCES SECTION
    // ==========================================
    "res-library": { title: "Resource Library", subtitle: "Knowledge Base", description: "Detailed guides and FAQs.", icon: BookOpen, benefits: ["Guides", "Tutorials"], template: "resource" },
    "res-whats-new": { title: "What's New", subtitle: "Changelog", description: "Latest product updates.", icon: Rss, benefits: ["Features", "Fixes"], template: "standard" },
    "res-tour": { title: "Product Tour", subtitle: "Walkthrough", description: "Interactive app demo.", icon: PlayCircle, benefits: ["Interactive", "Fast"], template: "standard" },
    "res-events": { title: "Events", subtitle: "Webinars", description: "Workshops and demos.", icon: Calendar, benefits: ["Live", "Q&A"], template: "resource" },
    "res-devs": { title: "Developer Resources", subtitle: "Build", description: "API docs and SDKs.", icon: Code2, benefits: ["API", "Webhooks"], template: "standard" },
    "res-stories": { title: "Customer Stories", subtitle: "Success", description: "Case studies and testimonials.", icon: Heart, benefits: ["Growth", "Results"], template: "resource" },
    "res-community": { title: "Community", subtitle: "Connect", description: "Slack/Discord groups.", icon: MessageCircle, benefits: ["Network", "Help"], template: "resource" },
    "res-certified": { title: "Flowryte Certified", subtitle: "Certification", description: "Become a power user.", icon: Award, benefits: ["Badge", "Skills"], template: "standard" },
    "res-blog": { title: "Blog", subtitle: "Insights", description: "Financial management tips.", icon: Newspaper, benefits: ["Tips", "Trends"], template: "resource" },
    "res-marketplace": { title: "Marketplace", subtitle: "Add-ons", description: "Third-party integrations.", icon: Box, benefits: ["Apps", "Plugins"], template: "resource" },

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
            { title: "Simplicity First", content: "We focus on removing friction. No clunky menus, just the tools you need.", layout: "center" }
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
            { title: "Time-saving automation", content: "Stop copying and pasting into Word docs. Generate invoices in seconds.", layout: "right" },
            { title: "Automated Follow-ups", content: "Manual chasing is awkward. Let our AI do the polite nudging for you.", layout: "left" }
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
            { title: "Streamlined for small teams", content: "Big tools are bloated. We built this specifically for freelancers and small agencies.", layout: "left" },
            { title: "Minimalist Design", content: "Enjoy software that actually looks good and feels great to use.", layout: "right" }
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
                layout: "left"
            },
            {
                title: "Automated Workflow",
                content: "Reduce administrative overhead by 80%. From invoice creation to payment collection, every step is automated to save you hours each week.",
                layout: "right"
            },
            {
                title: "Focus Mode Integration",
                content: "Minimize distractions with batched notifications. Get all your updates at once, or pause notifications during deep work sessions.",
                layout: "center"
            },
            {
                title: "Smart Templates",
                content: "Create invoice templates for different client types and projects. One-click generation means you spend less time on paperwork and more on billable work.",
                layout: "left"
            },
            {
                title: "Productivity Analytics",
                content: "Track how much time you're saving with detailed metrics on invoice generation, follow-up automation, and payment collection efficiency.",
                layout: "right"
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
                layout: "left"
            },
            {
                title: "Actionable Dashboard",
                content: "Access all your urgent items directly from the homepage. See at a glance what needs your attention today, this week, and this month.",
                layout: "center"
            },
            {
                title: "Automated Task Creation",
                content: "Tasks are automatically generated when invoices are created, sent, or become overdue. No manual entry required - just focus on execution.",
                layout: "right"
            },
            {
                title: "Bulk Actions",
                content: "Handle multiple tasks at once. Send batch reminders, mark multiple invoices as paid, or export task lists for team coordination.",
                layout: "left"
            },
            {
                title: "Task History & Analytics",
                content: "Track your task completion rates and identify bottlenecks. See how quickly you're responding to clients and processing payments.",
                layout: "right"
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
    "com-about": { title: "About Us", subtitle: "Our Mission", description: "Helping freelancers and small businesses win.", icon: Info, benefits: ["Mission", "Vision"], template: "standard", sections: [{ title: "Our Vision", content: "Simplify invoicing so you can focus on what you do best.", layout: "center" }] },
    "com-news": { title: "News", subtitle: "Press Room", description: "Announcements and updates.", icon: Newspaper, benefits: [], template: "resource" },
    "com-careers": { title: "Careers", subtitle: "Join Us", description: "Help us build the future of work.", icon: UserPlus, benefits: ["Remote", "Equity"], template: "standard" },
    "com-swag": { title: "Swag Store", subtitle: "Merch", description: "Rep the brand.", icon: ShoppingBag, benefits: ["Hoodies", "Stickers"], template: "standard" },
    "com-brand": { title: "Brand Center", subtitle: "Assets", description: "Logos and guidelines.", icon: Image, benefits: ["Logos", "Colors"], template: "standard" },
    "com-eng-blog": { title: "Engineering Blog", subtitle: "Under the Hood", description: "Tech stack and challenges.", icon: Code2, benefits: [], template: "resource" },
    "com-design-blog": { title: "Design Blog", subtitle: "UX/UI", description: "Crafting the experience.", icon: PenTool, benefits: [], template: "resource" },
    "com-contact": { title: "Contact Us", subtitle: "Get in Touch", description: "Feedback and inquiries.", icon: Contact, benefits: [], template: "standard" },

    // ==========================================
    // 7. SUPPORT SECTION
    // ==========================================
    "sup-chat": { title: "Live Chat", subtitle: "Instant Support", description: "Chat with our team.", icon: MessageCircle, benefits: ["24/7", "Human"], template: "standard" },
    "sup-help": { title: "Help Center", subtitle: "Knowledge Base", description: "Search for answers.", icon: Search, benefits: ["FAQs", "Guides"], template: "resource" },
    "sup-ticket": { title: "Ticketing System", subtitle: "Submit Issue", description: "For complex problems.", icon: Ticket, benefits: ["Tracking", "Detail"], template: "standard" },
    "sup-request": { title: "Feature Request", subtitle: "Ideas", description: "Tell us what to build next.", icon: Lightbulb, benefits: ["Vote", "Suggest"], template: "standard" },
    "sup-status": { title: "Status Page", subtitle: "System Uptime", description: "Monitor platform health.", icon: Activity, benefits: ["Live", "History"], template: "standard" },

    // ==========================================
    // 8. LEGAL SECTION
    // ==========================================
    "leg-terms": { title: "Terms of Service", subtitle: "Rules", description: "Guidelines governing use.", icon: FileText, benefits: [], template: "standard" },
    "leg-privacy": { title: "Privacy Policy", subtitle: "Data", description: "How we handle your data.", icon: Lock, benefits: [], template: "standard" },
    "leg-cookie": { title: "Cookie Policy", subtitle: "Tracking", description: "Details on cookies used.", icon: AlertTriangle, benefits: [], template: "standard" },

    // Special
    "enterprise": { title: "Enterprise", subtitle: "Custom Solutions", description: "For large organizations.", icon: Building2, benefits: ["SLA", "Support"], template: "enterprise" }
};
