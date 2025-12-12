
import { LucideIcon, MessageSquare, Users, Video, Paperclip, Search, Shield, Zap, Layout, List, FileText, Globe, Box, Lock, Database, PlayCircle, Code2, Laptop, Headphones, Briefcase, Megaphone, TrendingUp, BarChart, Tv, HelpCircle, BookOpen, Rss, Heart, UserPlus, Terminal, Server, Info, Newspaper, Image, Layers, ShoppingBag, Contact, Award, Building, Building2, Factory, GraduationCap, Stethoscope, HandHeart, Radio, Cloud, PenTool, CheckCircle, Clock, Activity, Coins, LineChart } from "lucide-react";

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
    // --- PRODUCT ---
    "watch-demo": {
        title: "Watch Demo",
        subtitle: "See OnTheDot",
        description: "Get a guided tour of the productivity platform.",
        icon: Tv,
        benefits: ["Product walkthrough", "Feature deep dives"],
        template: "standard",
        sections: [
            { title: "Everything you need", content: "From channels to huddles, see how the platform comes together to create a unified digital HQ that connects everyone.", layout: "left" },
            { title: "Integrate your tools", content: "Don't switch contexts. Bring your calendar, Jira, and GitHub right into the conversation to stay in flow.", layout: "right" }
        ]
    },
    "paid-vs-free": {
        title: "Paid vs Free",
        subtitle: "Compare Plans",
        description: "Find the right plan for your team's needs.",
        icon: Coins,
        benefits: ["Limits", "Features", "Support"],
        template: "standard",
        stats: [
            { value: "Unlimited", label: "History" },
            { value: "50+", label: "Apps" },
            { value: "99.99%", label: "Uptime" },
            { value: "24/7", label: "Support" }
        ]
    },

    // --- ENTERPRISE ---
    "enterprise": {
        title: "Enterprise",
        subtitle: "Scale with confidence",
        description: "Security, control, and compliance for huge organizations.",
        icon: Building2,
        benefits: ["Enterprise grid", "Data residency", "SSO"],
        template: "enterprise",
        stats: [
            { value: "500K+", label: "Daily Users" },
            { value: "99.999%", label: "Uptime SLA" },
            { value: "ISO", label: "Certified" },
            { value: "24/7", label: "Priority Support" }
        ],
        sections: [
            { title: "Security at scale", content: "Manage thousands of users with centralized controls, audit logs, and data residency.", layout: "center" },
            { title: "Unify your organization", content: "Connect workspace siloes with Enterprise Grid to create a single, searchable network.", layout: "right" }
        ]
    },
    "security": {
        title: "Security",
        subtitle: "Enterprise Grade",
        description: "Protecting your data at every layer.",
        icon: Shield,
        benefits: ["SSO", "Audit logs", "DLP"],
        template: "enterprise",
        sections: [
            { title: "Compliance built-in", content: "We meet global standards including GDPR, HIPAA, and FINRA so you can work worry-free.", layout: "left" },
            { title: "Data Loss Prevention", content: "Scan messages and files for sensitive data to prevent accidental leaks.", layout: "right" }
        ]
    },

    // --- FEATURES ---
    "channels": {
        title: "Channels",
        subtitle: "Organised work",
        description: "Channels bring order to your work by organizing conversations.",
        icon: MessageSquare,
        benefits: ["Transparent work", "Searchable history"],
        template: "standard",
        sections: [
            { title: "Create a channel for anything", content: "A project, a team, or just 'Lunch'. Channels keep topics organized and searchable.", layout: "left" },
            { title: "Public or Private", content: "Make work transparent by default, or lock it down when sensitivity matters.", layout: "right" },
            { title: "Connect tools", content: "Pipe alerts, approvals, and commits directly into the relevant channel.", layout: "center" }
        ],
        stats: [
            { value: "12m+", label: "Active Channels" },
            { value: "30%", label: "Less Email" }
        ]
    },
    "huddles": {
        title: "Huddles",
        subtitle: "Live Audio & Video",
        description: "Quick informal conversations with your team, just like in the office.",
        icon: Video,
        benefits: ["Screen share", "Live cursor", "Drawing"],
        template: "standard",
        sections: [
            { title: "Drop in, drop out", content: "Start a huddle in any channel. Teammates can hop in instantly without scheduling a meeting.", layout: "left" },
            { title: "Share your screen", content: "Multi-person screen sharing and drawing tools make remote collaboration feel like whiteboard sessions.", layout: "right" }
        ]
    },
    "messaging": {
        title: "Messaging",
        subtitle: "Team Chat",
        description: "The core of collaboration. Communicating efficiently.",
        icon: MessageSquare,
        benefits: ["Threads", "Formatting", "Emoji"],
        template: "standard",
        sections: [
            { title: "Threaded conversations", content: "Keep the main channel clean by organizing discussions into side threads.", layout: "right" },
            { title: "Rich formatting", content: "Code blocks, bold text, bullet points. Communicate with clarity.", layout: "left" }
        ]
    },

    // --- SOLUTIONS ---
    "engineering": {
        title: "Engineering",
        subtitle: "Ship faster",
        description: "Integrate deployments and incidents.",
        icon: Code2,
        benefits: ["CI/CD alerts", "Incidentswarming"],
        template: "solution",
        stats: [
            { value: "2x", label: "Deploy Frequency" },
            { value: "-33%", label: "Resolution Time" }
        ],
        sections: [
            { title: "Automate your pipeline", content: "Pipe alerts from PagerDuty, Jira, and GitHub directly into incident channels.", layout: "right" },
            { title: "Review code together", content: "Discuss pull requests and code snippets without leaving your IDE context.", layout: "left" }
        ]
    },
    "sales": {
        title: "Sales",
        subtitle: "Close Deals",
        description: "Speed up sales cycles with real-time collaboration.",
        icon: TrendingUp,
        template: "solution",
        benefits: [],
        stats: [
            { value: "13%", label: "Higher Win Rate" },
            { value: "29%", label: "Faster Cycles" }
        ],
        sections: [
            { title: "Deal Rooms", content: "Spin up a channel for every major deal to bring in legal, product, and execs.", layout: "left" },
            { title: "CRM Sync", content: "Update Salesforce records directly from OnTheDot using slash commands.", layout: "right" }
        ]
    },

    // --- RESOURCES ---
    "resources-library": {
        title: "Library",
        subtitle: "Guides & Reports",
        description: "E-books, webinars, and more.",
        icon: BookOpen,
        benefits: ["Deep dives", "Trends"],
        template: "resource",
    },
    "help-centre": {
        title: "Help Centre",
        subtitle: "Support",
        description: "How can we help you today?",
        icon: HelpCircle,
        benefits: [],
        template: "resource" // Reusing resource template for now implies article list
    },
    "slack-blog": {
        title: "Blog",
        subtitle: "News",
        description: "Latest stories from the team.",
        icon: PenTool,
        benefits: [],
        template: "resource"
    },

    // Fallbacks for others (simplified for file length, but preserving keys)
    "slack-connect": { title: "Connect", subtitle: "Work External", description: "Collaborate with partners.", icon: Users, benefits: ["Secure"], template: "standard", sections: [{ title: "Shared Channels", content: "Connect two organizations securely.", layout: "left" }] },
    "canvas": { title: "Canvas", subtitle: "Docs", description: "Knowledge base.", icon: FileText, benefits: ["Persistent"], template: "standard" },
    "lists": { title: "Lists", subtitle: "Tracking", description: "Manage tasks.", icon: List, benefits: ["Views"], template: "standard" },
    "clips": { title: "Clips", subtitle: "Video", description: "Async updates.", icon: PlayCircle, benefits: ["Easy"], template: "standard" },
    "apps-integrations": { title: "Apps", subtitle: "Integrations", description: "Connect tools.", icon: Box, benefits: ["2500+"], template: "standard" },
    "workflow-builder": { title: "Workflows", subtitle: "Automation", description: "No-code.", icon: Zap, benefits: ["Easy"], template: "standard" },
    "slack-ai": { title: "AI", subtitle: "Intelligence", description: "Work smarter.", icon: Zap, benefits: ["Summaries"], template: "standard" },
    "agentforce": { title: "Agentforce", subtitle: "Agents", description: "Autonomous.", icon: Users, benefits: ["Scale"], template: "standard" },
    "enterprise-search": { title: "Search", subtitle: "Find", description: "Everything.", icon: Search, benefits: ["Fast"], template: "standard" },
    "enterprise-key-management": { title: "EKM", subtitle: "Keys", description: "Control.", icon: Lock, benefits: ["Safety"], template: "enterprise" },
    "slack-atlas": { title: "Atlas", subtitle: "Profiles", description: "Org charts.", icon: Users, benefits: ["Visual"], template: "standard" },

    // Solutions continued
    "it": { title: "IT", subtitle: "Support", description: "Modernize helpdesk.", icon: Laptop, benefits: [], template: "solution" },
    "customer-service": { title: "Service", subtitle: "Support", description: "Solve faster.", icon: Headphones, benefits: [], template: "solution" },
    "project-management": { title: "PM", subtitle: "Deliver", description: "On time.", icon: Briefcase, benefits: [], template: "solution" },
    "marketing": { title: "Marketing", subtitle: "Campaigns", description: "Launch.", icon: Megaphone, benefits: [], template: "solution" },

    // Company / Misc
    "about-us": { title: "About", subtitle: "Us", description: "Our story.", icon: Info, benefits: [], template: "standard" },
    "careers": { title: "Careers", subtitle: "Join Us", description: "We are hiring.", icon: UserPlus, benefits: [], template: "standard", sections: [{ title: "Work with us", content: "We are looking for great people.", layout: "center" }] },
    "contact-us": { title: "Contact", subtitle: "Touch", description: "Get in touch.", icon: Contact, benefits: [], template: "standard" },
};
