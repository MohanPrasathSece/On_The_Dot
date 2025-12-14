
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
                content: "Generate professional invoices instantly. Save your line items and client details to creates invoices with just two clicks.",
                layout: "left",
                image: "https://placehold.co/600x400/png?text=Invoice+Preview"
            },
            {
                title: "Recurring Invoices",
                content: "Set up retainers and subscriptions once. We'll automatically generate and send invoices on your schedule (weekly, monthly, annually).",
                layout: "right"
            },
            {
                title: "Custom Branding",
                content: "Make it yours. Upload your logo, choose your brand color scheme, and customize fonts to ensure every invoice reflects your professional identity.",
                layout: "center"
            },
            {
                title: "GPT-Powered Messaging",
                content: "Stop stressing about what to write. Our AI generates polite initial emails, firm follow-ups, and urgent overdue notices automatically.",
                layout: "left"
            },
            {
                title: "Universal Export",
                content: "Send it your way. Email directly from the platform, download as PDF, or send via SMS link for faster mobile payments.",
                layout: "right"
            }
        ]
    },
    "reminders": {
        title: "Reminders",
        subtitle: "Smart Auto-Reminders",
        description: "Get paid 2x faster with automated, intelligent follow-ups.",
        icon: Bell,
        benefits: ["Smart Cadence", "AI Messages", "Detailed Logs"],
        template: "standard",
        sections: [
            {
                title: "Smart Auto-Reminders",
                content: "Never chase a client manually again. Our system detects unpaid invoices and initiates a follow-up sequence automatically.",
                layout: "right"
            },
            {
                title: "Custom Reminder Cadence",
                content: "You're in control. Set reminders for 3 days before due, on due date, and 3, 7, or 14 days overdue.",
                layout: "left"
            },
            {
                title: "AI-Generated Messages",
                content: "Context-aware messaging that evolves from helpful reminders to firm requests based on how late the payment is.",
                layout: "right"
            },
            {
                title: "Reminder Logs",
                content: "Full visibility. See exactly when reminders were Sent, Delivered, and if they Failed, so you're never in the dark.",
                layout: "left"
            }
        ]
    },
    "cash-flow": {
        title: "Cash Flow Dashboard",
        subtitle: "Financial Clarity",
        description: "Real-time visibility into your business's financial health.",
        icon: Coins,
        benefits: ["Real-Time Summaries", "Overdue Alerts", "Task View"],
        template: "standard",
        sections: [
            {
                title: "Real-Time Income Summaries",
                content: "Know exactly how much you've made this month, quarter, and year with live updating dashboards.",
                layout: "center"
            },
            {
                title: "Overdue Invoice Indicators",
                content: "Spot trouble fast. Red indicators highlight late payments so you can take action immediately.",
                layout: "left"
            },
            {
                title: "Upcoming Reminders & Tasks",
                content: "Stay ahead. See which invoices are due soon and what automated tasks the system has scheduled for today.",
                layout: "right"
            }
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
                content: "Visualize your growth. diverse charts showing revenue month-over-month and year-over-year.",
                layout: "left"
            },
            {
                title: "Overdue Analysis",
                content: "Identify bottlenecks. See which clients are consistently late and how much revenue is currently locked up.",
                layout: "right"
            },
            {
                title: "Tax-Ready Exports",
                content: "Breeze through tax season. Export all your data to CSV, PDF, or XLS formats compatible with major accounting software.",
                layout: "center"
            }
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
                content: "Connect Stripe, PayPal, and Plaid directly. Payments made through these platforms automatically mark invoices as paid.",
                layout: "right"
            },
            {
                title: "Real-Time Tracking",
                content: "No more manual reconciliation. See payment statuses update instantly as money hits your account.",
                layout: "left"
            }
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
                content: "Scale securely. Add Admin, Editor, or Viewer roles to control who can see and do what.",
                layout: "left"
            },
            {
                title: "Real-Time Sync",
                content: "Collaborate without stepping on toes. Updates happen instantly across all devices via WebSockets.",
                layout: "right"
            },
            {
                title: "Full Audit Logs",
                content: "Total accountability. Track every invoice created, edited, sent, or deleted by any team member.",
                layout: "center"
            }
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
                content: "All data is encrypted in transit and at rest using industry-standard SSL/TLS protocols.",
                layout: "center"
            },
            {
                title: "Role-Based Access Control",
                content: "Granular permissions ensure employees only access the data necessary for their role.",
                layout: "left"
            },
            {
                title: "Global Compliance",
                content: "Fully compliant with GDPR and PCI-DSS standards, ensuring your client data is handled legally and safely.",
                layout: "right"
            }
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
                layout: "center"
            },
            {
                title: "Professional Branding",
                content: "Create stunning, branded invoices that reflect your professional quality. Custom templates, logos, and colors make every document impressive.",
                layout: "left"
            },
            {
                title: "Client Relationship Management",
                content: "Keep detailed client records, track communication history, and maintain professional relationships with automated follow-ups and reminders.",
                layout: "right"
            },
            {
                title: "Financial Freedom",
                content: "Get paid faster and predict your cash flow with real-time dashboards. No more guessing when payments will arrive.",
                layout: "center"
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
                layout: "center"
            },
            {
                title: "Multi-Client Management",
                content: "Handle dozens or hundreds of clients simultaneously. Advanced filtering, tagging, and search make client management effortless.",
                layout: "left"
            },
            {
                title: "Team Performance Analytics",
                content: "Track team productivity, individual performance, and client profitability. Make data-driven decisions about resource allocation.",
                layout: "right"
            },
            {
                title: "Scalable Infrastructure",
                content: "From startup to enterprise, our system grows with you. No performance issues, no data limits, no workflow constraints.",
                layout: "center"
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
