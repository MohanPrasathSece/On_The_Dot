
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

export function NavbarMegaMenu() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {/* FEATURES (Existing) */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[active]:bg-transparent text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
                        Features
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[800px] gap-3 p-4 md:w-[900px] md:grid-cols-4 lg:w-[1000px] bg-background border border-border rounded-xl shadow-xl">
                            <li className="row-span-3">
                                <Link
                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/20 to-primary/5 p-6 no-underline outline-none focus:shadow-md"
                                    to="/features/features"
                                >
                                    <div className="mb-2 mt-4 text-lg font-medium text-foreground">
                                        OnTheDot Platform
                                    </div>
                                    <p className="text-sm leading-tight text-muted-foreground">
                                        Collaboration, Intelligence, and Automation.
                                    </p>
                                </Link>
                            </li>
                            <ListItem href="/features/channels" title="Channels">Organize teams and work</ListItem>
                            <ListItem href="/features/workflow-builder" title="Workflow Builder">Automate tasks</ListItem>
                            <ListItem href="/features/slack-ai" title="AI">Built-in intelligence</ListItem>
                            <ListItem href="/features/huddles" title="Huddles">Audio & Video</ListItem>
                            <ListItem href="/features/canvas" title="Canvas">Rich docs</ListItem>
                            <ListItem href="/features/security" title="Security">Enterprise grade</ListItem>
                            <ListItem href="/features/apps-integrations" title="Apps">Connect your tools</ListItem>
                            <ListItem href="/features/slack-connect" title="Connect">Work externally</ListItem>
                            <ListItem href="/features/status" title="Status" className="text-muted-foreground">System health</ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* SOLUTIONS (New) */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[active]:bg-transparent text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
                        Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2 bg-background border border-border rounded-xl shadow-xl">
                            <div className="p-2">
                                <h4 className="font-bold text-sm mb-2 text-primary">By Department</h4>
                                <ListItem href="/features/engineering" title="Engineering">Ship faster</ListItem>
                                <ListItem href="/features/it" title="IT">Modernize support</ListItem>
                                <ListItem href="/features/sales" title="Sales">Close deals</ListItem>
                                <ListItem href="/features/marketing" title="Marketing">Campaigns</ListItem>
                            </div>
                            <div className="p-2">
                                <h4 className="font-bold text-sm mb-2 text-primary">By Industry</h4>
                                <ListItem href="/features/financial-services" title="Financial Services" />
                                <ListItem href="/features/retail" title="Retail" />
                                <ListItem href="/features/technology" title="Technology" />
                                <ListItem href="/features/media" title="Media" />
                            </div>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* RESOURCES (New) */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[active]:bg-transparent text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
                        Resources
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2 bg-background border border-border rounded-xl shadow-xl">
                            <ListItem href="/features/help-centre" title="Help Centre" />
                            <ListItem href="/features/resources-library" title="Library" />
                            <ListItem href="/features/slack-blog" title="Blog" />
                            <ListItem href="/features/community" title="Community" />
                            <ListItem href="/features/partners" title="Partners" />
                            <ListItem href="/features/developers" title="Developers" />
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, href, ...props }, ref) => {
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
                <div className="text-sm font-medium leading-none">{title}</div>
                {children && <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
                    {children}
                </p>}
            </Link>
        </li>
    );
});
ListItem.displayName = "ListItem";
