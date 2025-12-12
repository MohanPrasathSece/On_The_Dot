
import { LucideIcon, MessageSquare, Users, Video, Paperclip, Search, Shield, Zap, Layout, List, FileText, Globe, Box, Lock, Database, PlayCircle, Code2, Laptop, Headphones, Briefcase, Megaphone, TrendingUp, BarChart, Tv, HelpCircle, BookOpen, Rss, Heart, UserPlus, Terminal, Server, Info, Newspaper, Image, Layers, ShoppingBag, Contact, Award, Building, Building2, Factory, GraduationCap, Stethoscope, HandHeart, Radio, Cloud, PenTool, CheckCircle, Clock, Activity, Coins, LineChart, Bell, PieChart, Smartphone, FileCheck, Scale, Ticket } from "lucide-react";

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
    // --- FEATURES ---
    "overview": {
        title: "Platform Overview",
        subtitle: "The Complete OS",
        description: "One platform to manage your entire financial workflow.",
        icon: Layout,
        benefits: ["Invoicing", "Payments", "Banking"],
        template: "standard",
        sections: [
            { title: "Everything in one place", content: "Stop switching between tools. manage invoices, payments, and clients in a single dashboard.", layout: "center" },
            { title: "Automation first", content: "Let our AI agents handle the chasing, reminding, and reconciliation.", layout: "right" }
        ],
        stats: [
            { value: "100%", label: "Visibility" },
            { value: "0", label: "Admin Headaches" }
        ]
    },
    "invoicing": {
        title: "Smart Invoicing",
        subtitle: "2-Click Billing",
        description: "Create stunning, professional invoices in seconds.",
        icon: FileText,
        benefits: ["Custom Branding", "Recurring Invoices", "Multi-currency"],
        template: "standard",
        sections: [
            { title: "Branded for you", content: "Customize logos, colors, and fonts to match your brand identity perfectly.", layout: "left" },
            { title: "Recurring billing", content: "Set up retainers and subscriptions once, and let them run on autopilot.", layout: "right" },
            { title: "Global ready", content: "Support for 135+ currencies and local tax compliance rules.", layout: "center" }
        ],
        stats: [
            { value: "30s", label: "To Create Invoice" },
            { value: "135+", label: "Currencies" }
        ]
    },
    "reminders": {
        title: "Auto-Reminders",
        subtitle: "Get Paid 2x Faster",
        description: "AI-powered follow-ups that preserve client relationships.",
        icon: Bell,
        benefits: ["Smart Cadence", "AI Messaging", "Multi-channel"],
        template: "standard",
        sections: [
            { title: "Polite but firm", content: "Our AI adjusts tone based on how overdue the payment is, from gentle nudges to firm notices.", layout: "right" },
            { title: "Set and forget", content: "Define your cadence (3, 7, 14 days) and let the system handle the rest.", layout: "left" }
        ]
    },
    "cash-flow": {
        title: "Cash Flow",
        subtitle: "Financial Health",
        description: "Real-time visibility into your income and expenses.",
        icon: Coins,
        benefits: ["Forecasting", "Trends", "Burn Rate"],
        template: "standard",
        sections: [
            { title: "Predict the future", content: "AI-driven forecasting tells you exactly when money will land in your account.", layout: "center" }
        ]
    },
    "reports": {
        title: "Reports & Analytics",
        subtitle: "Deep Insights",
        description: "Interactive dashboards for data-driven decisions.",
        icon: PieChart,
        benefits: ["Income Trends", "Client Value", "Tax Export"],
        template: "standard",
        stats: [
            { value: "15+", label: "Report Types" },
            { value: "CSV/PDF", label: "Export Formats" }
        ]
    },
    "integrations": {
        title: "Integrations",
        subtitle: "Connect Everything",
        description: "Sync with Stripe, PayPal, Plaid, and your favorite tools.",
        icon: Zap,
        benefits: ["Real-time Sync", "No-code setup", "Secure"],
        template: "standard",
        sections: [
            { title: "Payment Gateways", content: "Accept credit cards and bank transfers directly on your invoices.", layout: "right" },
            { title: "Accounting Sync", content: "Automatically push data to Xero or QuickBooks for tax time.", layout: "left" }
        ]
    },
    "team": {
        title: "Team Collaboration",
        subtitle: "Work Together",
        description: " invite team members with granular roles and permissions.",
        icon: Users,
        benefits: ["Admin/Editor Roles", "Activity Feed", "Comments"],
        template: "standard"
    },
    "security": {
        title: "Security",
        subtitle: "Bank-Grade Protection",
        description: "Your financial data is locked down with AES-256 encryption.",
        icon: Shield,
        benefits: ["SOC2 Type II", "GDPR", "2FA"],
        template: "enterprise",
        sections: [
            { title: "Encrypted at rest and in transit", content: "We use the same security standards as major banks.", layout: "center" }
        ]
    },
    "audit-logs": {
        title: "Audit Logs",
        subtitle: "Total Accountability",
        description: "Track every action, view, and edit across your workspace.",
        icon: FileCheck,
        benefits: ["Immutable Logs", "User Actions", "IP Tracking"],
        template: "standard"
    },
    "mobile": {
        title: "Mobile App",
        subtitle: "Business on the Go",
        description: "Manage invoices and check status from your pocket.",
        icon: Smartphone,
        benefits: ["iOS & Android", "Push Notifications", "Offline Mode"],
        template: "standard"
    },

    // --- SOLUTIONS ---
    "freelancers": {
        title: "Freelancers",
        subtitle: "Solo Freedom",
        description: "Automate the boring stuff so you can focus on your craft.",
        icon: Video, // Using Video as proxy for "Creator" vibe or just generic
        benefits: ["Time Saving", "Professional Image"],
        template: "solution",
        sections: [
            { title: "Look bigger than you are", content: "Send enterprise-grade invoices that build trust with clients.", layout: "right" }
        ]
    },
    "agencies": {
        title: "Small Agencies",
        subtitle: "Scale Up",
        description: "Manage multiple clients and team members with ease.",
        icon: Building,
        benefits: ["Team Roles", "Client Portal"],
        template: "solution"
    },
    "project-managers": {
        title: "Project Managers",
        subtitle: "Track Progress",
        description: "Link payments to milestones and deliverables.",
        icon: List,
        benefits: ["Milestone Billing", "Project Budgeting"],
        template: "solution"
    },
    "finance": {
        title: "Financial Teams",
        subtitle: "Control & Compliance",
        description: "Streamline reconciliation and reporting.",
        icon: LineChart,
        benefits: ["Audit Trail", "Bulk Actions"],
        template: "solution"
    },
    "client-managers": {
        title: "Client Managers",
        subtitle: "Relationship Focus",
        description: "Know exactly where every account stands before you call.",
        icon: Contact,
        benefits: ["CRM Sync", "History View"],
        template: "solution"
    },
    "owners": {
        title: "Business Owners",
        subtitle: "Bird's Eye View",
        description: "Master your cash flow and sleep better at night.",
        icon: Briefcase,
        benefits: ["Executive Dashboard", "Runway Calc"],
        template: "solution"
    },
    "content-creators": { title: "Content Creators", subtitle: "Creators", description: "Monetize your content.", icon: Video, benefits: [], template: "solution" },
    "design-marketing": { title: "Design & Marketing", subtitle: "Agencies", description: "Bill for your creativity.", icon: PenTool, benefits: [], template: "solution" },
    "ecommerce": { title: "E-Commerce", subtitle: "Retail", description: "Integrated sales tracking.", icon: ShoppingBag, benefits: [], template: "solution" },
    "education": { title: "Education", subtitle: "Training", description: "Bill for courses and time.", icon: GraduationCap, benefits: [], template: "solution" },
    "healthcare": { title: "Healthcare", subtitle: "Medical", description: "HIPAA compliant billing.", icon: Stethoscope, benefits: [], template: "solution" },
    "legal": { title: "Legal", subtitle: "Firms", description: "Trust accounting and retainers.", icon: Scale, benefits: [], template: "solution" },

    // --- RESOURCES ---
    "library": {
        title: "Resource Library",
        subtitle: "Knowledge Base",
        description: "Detailed guides, FAQs, and masterclasses.",
        icon: BookOpen,
        benefits: ["Guides", "Videos"],
        template: "resource"
    },
    "blog": {
        title: "Blog",
        subtitle: "Insights",
        description: "News, tips, and financial wisdom.",
        icon: Newspaper,
        benefits: [],
        template: "resource"
    },
    "tour": {
        title: "Product Tour",
        subtitle: "Walkthrough",
        description: "Interactive demo of the platform features.",
        icon: PlayCircle,
        benefits: [],
        template: "standard"
    },
    "events": {
        title: "Events",
        subtitle: "Webinars",
        description: "Join live sessions with experts.",
        icon: Tv,
        benefits: [],
        template: "resource"
    },
    "certified": {
        title: "Certification",
        subtitle: "Become an Expert",
        description: "Get certified in OTD workflows.",
        icon: Award,
        benefits: [],
        template: "standard"
    },
    "community": {
        title: "Community",
        subtitle: "Connect",
        description: "Join thousands of other founders.",
        icon: Users,
        benefits: [],
        template: "resource"
    },
    "stories": {
        title: "Customer Stories",
        subtitle: "Case Studies",
        description: "See how others are growing.",
        icon: Heart,
        benefits: [],
        template: "resource"
    },
    "developers": {
        title: "Developers",
        subtitle: "API Docs",
        description: "Build on top of OnTheDot.",
        icon: Code2,
        benefits: [],
        template: "standard"
    },
    "marketplace": {
        title: "Marketplace",
        subtitle: "Add-ons",
        description: "Extend power with third-party apps.",
        icon: Box,
        benefits: [],
        template: "resource"
    },
    "whats-new": {
        title: "What's New",
        subtitle: "Changelog",
        description: "Latest updates and improvements.",
        icon: Rss,
        benefits: [],
        template: "standard"
    },


    // --- COMPANY ---
    "about": { title: "About Us", subtitle: "Our Mission", description: "Helping small businesses win.", icon: Info, benefits: [], template: "standard" },
    "news": { title: "Newsroom", subtitle: "Press", description: "Latest announcements.", icon: Newspaper, benefits: [], template: "resource" },
    "careers": { title: "Careers", subtitle: "Join Us", description: "We're hiring builders.", icon: UserPlus, benefits: [], template: "standard" },
    "swag": { title: "Swag Store", subtitle: "Merch", description: "Rep the brand.", icon: ShoppingBag, benefits: [], template: "standard" },
    "brand": { title: "Brand Center", subtitle: "Assets", description: "Logos and guidelines.", icon: Image, benefits: [], template: "standard" },
    "engineering": { title: "Engineering Blog", subtitle: "Tech", description: "Under the hood.", icon: Code2, benefits: [], template: "resource" },
    "design": { title: "Design Blog", subtitle: "UX/UI", description: "Crafting the experience.", icon: PenTool, benefits: [], template: "resource" },
    "contact": { title: "Contact Us", subtitle: "Get in Touch", description: "We'd love to hear from you.", icon: Contact, benefits: [], template: "standard" },

    // --- SUPPORT ---
    "chat": { title: "Live Chat", subtitle: "Support", description: "Chat with our team.", icon: MessageSquare, benefits: [], template: "standard" },
    "tickets": { title: "Support Tickets", subtitle: "Help", description: "Track your issues.", icon: Ticket, benefits: [], template: "standard" },
    "requests": { title: "Feature Requests", subtitle: "Ideas", description: "Shape the roadmap.", icon: HelpCircle, benefits: [], template: "standard" },
    "status": { title: "System Status", subtitle: "Uptime", description: "All systems operational.", icon: Activity, benefits: [], template: "standard" },
    "help": { title: "Help Center", subtitle: "Knowledge Base", description: "Find answers fast.", icon: BookOpen, benefits: [], template: "resource" },

    // --- MAIN ---
    "enterprise": {
        title: "Enterprise",
        subtitle: "Scale with Confidence",
        description: "Custom solutions for large organizations.",
        icon: Building2,
        benefits: ["SLA", "Dedicated Support", "Custom Integ."],
        template: "enterprise",
        sections: [
            { title: "Security at scale", content: "Manage thousands of users with centralized controls.", layout: "center" }
        ],
        stats: [
            { value: "99.99%", label: "SLA" },
            { value: "24/7", label: "Support" }
        ]
    }
};
