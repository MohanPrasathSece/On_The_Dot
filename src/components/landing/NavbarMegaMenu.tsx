
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";
import { Link } from "react-router-dom";
import { FileText, Bell, BarChart3, Users, Shield, Zap, Briefcase, GraduationCap, ShoppingBag } from "lucide-react";

export function NavbarMegaMenu() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {/* FEATURES */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[active]:bg-transparent text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
                        Features
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[800px] gap-3 p-4 md:w-[900px] md:grid-cols-4 lg:w-[1000px] bg-background border border-border rounded-xl shadow-xl">
                            <li className="row-span-4">
                                <Link
                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/20 to-primary/5 p-6 no-underline outline-none focus:shadow-md"
                                    to="/features/overview"
                                >
                                    <div className="mb-2 mt-4 text-lg font-medium text-foreground">
                                        OnTheDot Platform
                                    </div>
                                    <p className="text-sm leading-tight text-muted-foreground">
                                        The complete financial operating system for freelancers and agencies.
                                    </p>
                                </Link>
                            </li>
                            <div className="col-span-3 grid grid-cols-3 gap-3">
                                <ListItem href="/features/invoicing" title="Invoicing" icon={FileText}>2-click branded invoices</ListItem>
                                <ListItem href="/features/reminders" title="Reminders" icon={Bell}>Smart auto-followups</ListItem>
                                <ListItem href="/features/cash-flow" title="Cash Flow" icon={BarChart3}>Real-time dashboard</ListItem>
                                <ListItem href="/features/reports" title="Reports" icon={BarChart3}>Interactive analytics</ListItem>
                                <ListItem href="/features/integrations" title="Integrations" icon={Zap}>Stripe, PayPal, Plaid</ListItem>
                                <ListItem href="/features/team" title="Team" icon={Users}>Collaboration tools</ListItem>
                                <ListItem href="/features/security" title="Security" icon={Shield}>Bank-grade encryption</ListItem>
                                <ListItem href="/features/audit-logs" title="Audit Logs">Track every action</ListItem>
                                <ListItem href="/features/mobile" title="Mobile App">Manage on the go</ListItem>
                            </div>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* SOLUTIONS */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[active]:bg-transparent text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
                        Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2 bg-background border border-border rounded-xl shadow-xl">
                            <div className="p-2">
                                <h4 className="font-bold text-sm mb-3 text-primary flex items-center gap-2">
                                    <Users className="w-4 h-4" /> By Department
                                </h4>
                                <div className="grid gap-2">
                                    <ListItem href="/solutions/freelancers" title="Freelancers" />
                                    <ListItem href="/solutions/agencies" title="Small Agencies" />
                                    <ListItem href="/solutions/project-managers" title="Project Managers" />
                                    <ListItem href="/solutions/finance" title="Financial Teams" />
                                    <ListItem href="/solutions/client-managers" title="Client Managers" />
                                    <ListItem href="/solutions/owners" title="Business Owners" />
                                </div>
                            </div>
                            <div className="p-2 border-l border-border/50 pl-4">
                                <h4 className="font-bold text-sm mb-3 text-primary flex items-center gap-2">
                                    <Briefcase className="w-4 h-4" /> By Industry
                                </h4>
                                <div className="grid gap-2">
                                    <ListItem href="/solutions/content-creators" title="Content Creators" />
                                    <ListItem href="/solutions/design-marketing" title="Design & Marketing" />
                                    <ListItem href="/solutions/ecommerce" title="E-Commerce" />
                                    <ListItem href="/solutions/education" title="Education & Training" />
                                    <ListItem href="/solutions/healthcare" title="Healthcare" />
                                    <ListItem href="/solutions/legal" title="Legal & Accounting" />
                                </div>
                            </div>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* RESOURCES */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[active]:bg-transparent text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
                        Resources
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2 bg-background border border-border rounded-xl shadow-xl">
                            <div className="p-2">
                                <h4 className="font-bold text-sm mb-3 text-primary flex items-center gap-2">
                                    <GraduationCap className="w-4 h-4" /> Learn
                                </h4>
                                <ListItem href="/resources/library" title="Resource Library">Guides & FAQs</ListItem>
                                <ListItem href="/resources/blog" title="Blog">Insights & News</ListItem>
                                <ListItem href="/resources/tour" title="Product Tour">Interactive walkthrough</ListItem>
                                <ListItem href="/resources/events" title="Events">Webinars & Demos</ListItem>
                                <ListItem href="/resources/certified" title="Certification">Become an expert</ListItem>
                            </div>
                            <div className="p-2 border-l border-border/50 pl-4">
                                <h4 className="font-bold text-sm mb-3 text-primary flex items-center gap-2">
                                    <ShoppingBag className="w-4 h-4" /> Connect
                                </h4>
                                <ListItem href="/resources/community" title="Community">User groups</ListItem>
                                <ListItem href="/resources/stories" title="Customer Stories">Success cases</ListItem>
                                <ListItem href="/resources/developers" title="Developers">API & SDKs</ListItem>
                                <ListItem href="/resources/marketplace" title="Marketplace">Integrations</ListItem>
                                <ListItem href="/support" title="Help Center">Get support</ListItem>
                            </div>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { title: string; icon?: React.ElementType }
>(({ className, title, children, icon: Icon, href, ...props }, ref) => {
    return (
        <li>
            <Link
                to={href || "#"}
                className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                    className
                )}
                {...props}
            >
                <div className="flex items-center gap-2">
                    {Icon && <Icon className="w-4 h-4 text-primary" />}
                    <div className="text-sm font-medium leading-none">{title}</div>
                </div>
                {children && <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1 pl-6">
                    {children}
                </p>}
            </Link>
        </li>
    );
});
ListItem.displayName = "ListItem";
