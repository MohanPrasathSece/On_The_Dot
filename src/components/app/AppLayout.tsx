import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Home, FileText, Users, Bell, BarChart3,
  Plug, UsersRound, Settings, HelpCircle,
  Search, Plus, Hash, ChevronDown,
  MessageSquare, MoreHorizontal, History,
  Menu, X, Smile, Paperclip, Mic, Video,
  Sun, Moon, LogOut, User, Sparkles, PlusCircle, Zap, UserPlus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/use-toast";

interface NavSection {
  title?: string;
  items: {
    icon: any;
    label: string;
    href: string;
    variant?: "channel" | "dm" | "app";
    isActive?: boolean;
    badge?: number;
    status?: "online" | "offline" | "busy";
  }[];
}

export function AppLayout({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userStatus, setUserStatus] = useState<'online' | 'offline' | 'busy'>('online');

  useEffect(() => {
    // Check initial preference
    if (document.documentElement.classList.contains('dark')) {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Slack-like Navigation Structure
  const mainNav: NavSection[] = [
    {
      items: [
        { icon: Home, label: "Home", href: "/dashboard", variant: "app" },
        { icon: MessageSquare, label: "DMs", href: "/clients", variant: "app" },
        { icon: Bell, label: "Activity", href: "/reminders", variant: "app", badge: 3 },
      ]
    },
    {
      title: "Channels",
      items: [
        { icon: Hash, label: "invoices", href: "/invoices", variant: "channel" },
        { icon: Hash, label: "reports", href: "/reports", variant: "channel" },
        { icon: Hash, label: "integrations", href: "/integrations", variant: "channel" },
        { icon: Hash, label: "team-updates", href: "/team", variant: "channel" },
        { icon: Hash, label: "general", href: "/dashboard", variant: "channel" },
      ]
    },
    {
      title: "Direct Messages",
      items: [
        { icon: Users, label: "Client Manager (Clients)", href: "/clients", variant: "dm", status: "online" },
        { icon: HelpCircle, label: "Support Bot", href: "/app-support", variant: "dm", status: "online" },
        { icon: Settings, label: "Settings", href: "/settings", variant: "dm", status: "offline" },
      ]
    }
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground">
      {/* 1. WORKSPACE SWITCHER (Left Rail) */}
      <div className="w-[70px] bg-sidebar flex flex-col items-center py-3 space-y-4 z-20 flex-shrink-0 border-r border-sidebar-border">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="w-10 h-10 rounded-xl bg-sidebar-accent flex items-center justify-center cursor-pointer hover:bg-sidebar-accent/80 transition-all border-2 border-transparent hover:border-sidebar-primary/20">
              <span className="font-bold text-sidebar-primary text-lg">FR</span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="right" align="start" sideOffset={10}>
            <DropdownMenuLabel>Workspace</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate('/settings')}>
              <Settings className="mr-2 h-4 w-4" />
              Workspace Settings
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => {
              toast({ title: "Add Workspace", description: "Create a new workspace for different projects" });
            }}>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Workspace
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate('/team')}>
              <Users className="mr-2 h-4 w-4" />
              Invite Team
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link to="/invoices/new" className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-all text-primary group relative" title="Create New Invoice">
          <Sparkles className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </Link>
        <div className="flex-1" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border-2 border-primary">
              <Avatar>
                <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(user?.name || 'User')}`} alt={user?.name || 'User'} />
                <AvatarFallback className="bg-blue-600 text-white">{user?.name?.[0] || 'U'}</AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" side="right" className="w-56" sideOffset={10}>
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">{user?.name || 'User'}</p>
                <p className="text-xs text-muted-foreground">{user?.email || 'user@example.com'}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate('/settings')}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate('/settings')}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => {
              setUserStatus('online');
              toast({ title: "Status Updated", description: "You are now online" });
            }}>
              <div className={cn("h-2 w-2 rounded-full mr-2", userStatus === 'online' ? 'bg-green-500' : 'bg-gray-300')} />
              <span>Set as Active</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => {
              setUserStatus('busy');
              toast({ title: "Status Updated", description: "You are now busy" });
            }}>
              <div className={cn("h-2 w-2 rounded-full mr-2", userStatus === 'busy' ? 'bg-red-500' : 'bg-gray-300')} />
              <span>Set as Busy</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => {
              setUserStatus('offline');
              toast({ title: "Status Updated", description: "You are now offline" });
            }}>
              <div className={cn("h-2 w-2 rounded-full mr-2", userStatus === 'offline' ? 'bg-gray-500' : 'bg-gray-300')} />
              <span>Set as Offline</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600 focus:text-red-600 focus:bg-red-50" onClick={logout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sign Out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* 2. SIDEBAR (Channel List) */}
      <div className={cn(
        "w-[260px] bg-sidebar flex flex-col flex-shrink-0 transition-all duration-300 absolute md:relative z-10 h-full",
        mobileMenuOpen ? "translate-x-[70px]" : "-translate-x-full md:translate-x-0 md:left-0"
      )}>
        {/* Sidebar Header */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="h-12 flex items-center justify-between px-4 border-b border-sidebar-border hover:bg-sidebar-accent/50 cursor-pointer transition-colors text-sidebar-foreground">
              <div className="flex items-center gap-2 font-bold truncate">
                <span className="truncate">Flowryte HQ</span>
                <ChevronDown className="w-3 h-3 opacity-70" />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="w-8 h-8 rounded-full bg-sidebar-accent text-sidebar-primary flex items-center justify-center hover:bg-primary/20 transition-colors" onClick={(e) => e.stopPropagation()}>
                    <Zap className="w-4 h-4" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="right" align="start" sideOffset={5}>
                  <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate('/invoices/new')}>
                    <Sparkles className="mr-2 h-4 w-4" />
                    New Invoice
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/clients')}>
                    <UserPlus className="mr-2 h-4 w-4" />
                    Add Client
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/reminders')}>
                    <Bell className="mr-2 h-4 w-4" />
                    Set Reminder
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/reports')}>
                    <BarChart3 className="mr-2 h-4 w-4" />
                    View Reports
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="right" align="start" className="w-56" sideOffset={10}>
            <DropdownMenuLabel>Workspace Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate('/settings')}>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate('/team')}>
              <Users className="mr-2 h-4 w-4" />
              Manage Team
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => {
              toast({ title: "Preferences", description: "Opening workspace preferences..." });
            }}>
              <Settings className="mr-2 h-4 w-4" />
              Preferences
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Scrollable Nav Area */}
        <ScrollArea className="flex-1 py-3">
          <div className="space-y-6 px-3">
            {mainNav.map((section, idx) => (
              <div key={idx}>
                {section.title && (
                  <div className="flex items-center justify-between group px-3 mb-1 text-sidebar-foreground/70 hover:text-sidebar-foreground cursor-pointer" onClick={() => {
                    if (section.title === 'Channels') {
                      toast({ title: "Add Channel", description: "Create a new channel for team discussions" });
                    } else if (section.title === 'Direct Messages') {
                      toast({ title: "New Direct Message", description: "Start a conversation with a team member" });
                    }
                  }}>
                    <span className="text-xs font-medium uppercase tracking-wider">{section.title}</span>
                    <PlusCircle className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                )}
                <div className="space-y-[1px]">
                  {section.items.map((item, itemIdx) => {
                    const isActive = location.pathname.startsWith(item.href);
                    return (
                      <Link
                        key={itemIdx}
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center gap-2 px-3 py-1.5 rounded transition-all group relative",
                          isActive
                            ? "bg-sidebar-accent text-sidebar-primary font-bold"
                            : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                        )}
                      >
                        {item.variant === 'channel' && <Hash className="w-4 h-4 opacity-70" />}
                        {item.variant === 'dm' && (
                          <div className="relative">
                            <div className={cn(
                              "w-2.5 h-2.5 rounded-full border-2 border-sidebar",
                              item.status === 'online' ? "bg-primary" : "bg-transparent border-white/50"
                            )} />
                          </div>
                        )}
                        {item.variant === 'app' && <item.icon className="w-4 h-4" />}

                        <span className={cn("truncate text-[15px]", isActive ? "font-bold" : "font-normal")}>
                          {item.label}
                        </span>

                        {item.badge && (
                          <Badge variant="destructive" className="ml-auto h-5 px-1.5 text-[10px] bg-red-600 hover:bg-red-700">
                            {item.badge}
                          </Badge>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* 3. MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0 bg-background transition-colors duration-300">
        {/* Slack-style Global Header */}
        <div className="h-12 bg-sidebar md:bg-background flex items-center justify-between px-4 border-b border-border shadow-sm flex-shrink-0 z-10 text-white md:text-foreground">
          {/* Mobile Toggle */}
          <Button variant="ghost" size="icon" className="md:hidden mr-2 text-white hover:bg-white/10" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="w-5 h-5" />
          </Button>

          {/* History/Navigation */}
          <div className="hidden md:flex items-center gap-2 text-muted-foreground">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:bg-muted"
              onClick={() => {
                navigate(-1);
                toast({ title: "Navigating Back", description: "Going to previous page" });
              }}
            >
              <History className="w-4 h-4" />
            </Button>
          </div>

          {/* Search Bar - Center */}
          <div className="flex-1 max-w-xl mx-4">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 md:text-muted-foreground group-focus-within:text-foreground transition-colors" />
              <Input
                placeholder={`Search ${location.pathname.split('/')[1] || 'Flowryte'}...`}
                className="bg-white/10 md:bg-muted border-0 md:border-transparent text-white md:text-foreground placeholder:text-white/50 md:placeholder:text-muted-foreground h-8 pl-9 focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:bg-background focus-visible:text-foreground transition-all rounded-md"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-white/80 md:text-muted-foreground hover:bg-white/10 md:hover:bg-muted" onClick={toggleTheme}>
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-white/80 md:text-muted-foreground hover:bg-white/10 md:hover:bg-muted"
              onClick={() => navigate('/app-support')}
            >
              <HelpCircle className="w-4 h-4" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="w-8 h-8 rounded-lg border-2 border-primary/20 cursor-pointer hover:border-primary/40 transition-colors">
                  <AvatarFallback className="bg-gradient-to-br from-orange-500 to-amber-600 text-white font-semibold text-sm">
                    {user?.name?.split(' ').map(n => n[0]).join('').toUpperCase() || 'U'}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">{user?.name || 'User'}</p>
                    <p className="text-xs text-muted-foreground">{user?.email || 'user@example.com'}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/settings')}>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/settings')}>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => {
                  setUserStatus('online');
                  toast({ title: "Status Updated", description: "You are now online" });
                }}>
                  <div className={cn("h-2 w-2 rounded-full mr-2", userStatus === 'online' ? 'bg-green-500' : 'bg-gray-300')} />
                  <span>Set as Active</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => {
                  setUserStatus('busy');
                  toast({ title: "Status Updated", description: "You are now busy" });
                }}>
                  <div className={cn("h-2 w-2 rounded-full mr-2", userStatus === 'busy' ? 'bg-red-500' : 'bg-gray-300')} />
                  <span>Set as Busy</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600 focus:text-red-600 focus:bg-red-50" onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sign Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Content Viewport */}
        <div className="flex-1 flex flex-col overflow-hidden relative">
          {/* Section Header (Like Channel Header) */}
          <div className="h-14 border-b border-border flex items-center justify-between px-5 py-2 flex-shrink-0 bg-background text-foreground">
            <div className="flex items-center gap-2 overflow-hidden">
              <div className="flex items-center gap-1 font-bold text-lg whitespace-nowrap">
                {location.pathname.includes('clients') || location.pathname.includes('users') ? (
                  <Users className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <Hash className="w-5 h-5 text-muted-foreground" />
                )}
                <h1 className="capitalize">{location.pathname.split('/')[1] || 'dashboard'}</h1>
              </div>
              <div className="w-[1px] h-4 bg-border mx-2" />
              <span className="text-sm text-muted-foreground truncate">
                {getChannelDescription(location.pathname)}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2 overflow-hidden py-1">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-gradient-to-br from-orange-500 to-red-600 text-white font-semibold text-sm">
                    FE
                  </AvatarFallback>
                </Avatar>
                <Avatar className="inline-block h-6 w-6 ring-2 ring-background">
                  <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-600 text-white font-semibold text-xs">
                    AN
                  </AvatarFallback>
                </Avatar>
                <div className="h-6 w-6 rounded-full bg-muted ring-2 ring-background flex items-center justify-center text-[10px] font-medium text-muted-foreground max-w-fit px-1">
                  +24
                </div>
              </div>
              <Separator orientation="vertical" className="h-4" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-muted">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => {
                    toast({ title: "Page Settings", description: "Opening page settings..." });
                  }}>
                    <Settings className="mr-2 h-4 w-4" />
                    Page Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => {
                    toast({ title: "Notifications", description: "Manage your notification preferences" });
                  }}>
                    <Bell className="mr-2 h-4 w-4" />
                    Notifications
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate('/team')}>
                    <Users className="mr-2 h-4 w-4" />
                    View Team Members
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/app-support')}>
                    <HelpCircle className="mr-2 h-4 w-4" />
                    Get Help
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Actual Page Content comes here */}
          <main className="flex-1 overflow-y-auto bg-background p-6 scroll-smooth">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

function getChannelDescription(path: string): string {
  if (path.includes('invoices')) return 'Track active, pending, and paid invoices';
  if (path.includes('clients')) return 'Manage client relationships and contracts';
  if (path.includes('reminders')) return 'Automated collection reminders';
  if (path.includes('reports')) return 'Financial analytics and reporting';
  return 'Company announcements and daily overview';
}
