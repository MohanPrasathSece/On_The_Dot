import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import {
  Plus, TrendingUp, Clock, AlertCircle, CheckCircle,
  ArrowUpRight, Filter, MoreHorizontal, Send, FileText,
  DollarSign, Users, Calendar, Search, Star, Pin,
  MessageSquare, Smile, Paperclip, Link as LinkIcon, X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AppLayout } from "@/components/app/AppLayout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export default function Dashboard() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [showSetupForm, setShowSetupForm] = useState(false);

  // User data state
  const [userData, setUserData] = useState({
    businessName: "",
    currency: "USD",
    businessType: "freelancer",
    clients: [] as Array<{ name: string; email: string; totalInvoiced: number }>,
    invoices: [] as Array<{ id: string; client: string; amount: number; status: string; dueDate: string }>,
  });

  // Calculate stats based on user data
  const calculateStats = () => {
    const totalRevenue = userData.invoices
      .filter(inv => inv.status === 'paid')
      .reduce((sum, inv) => sum + inv.amount, 0);
    
    const pending = userData.invoices
      .filter(inv => inv.status === 'pending')
      .reduce((sum, inv) => sum + inv.amount, 0);
    
    const overdue = userData.invoices
      .filter(inv => inv.status === 'overdue')
      .reduce((sum, inv) => sum + inv.amount, 0);

    return [
      { label: "Total Revenue", value: `$${totalRevenue.toLocaleString()}`, change: "+12.5%", icon: DollarSign, color: "text-green-600", link: "/reports" },
      { label: "Pending", value: `$${pending.toLocaleString()}`, count: `${userData.invoices.filter(inv => inv.status === 'pending').length} invoices`, icon: Clock, color: "text-yellow-600", link: "/invoices" },
      { label: "Overdue", value: `$${overdue.toLocaleString()}`, count: `${userData.invoices.filter(inv => inv.status === 'overdue').length} invoice${overdue !== 1 ? 's' : ''}`, icon: AlertCircle, color: "text-red-600", link: "/invoices?filter=overdue" },
      { label: "Active Clients", value: userData.clients.length.toString(), count: "Total", icon: Users, color: "text-blue-600", link: "/clients" },
    ];
  };

  const stats = calculateStats();

  const feedItems = [
    {
      id: 1,
      user: "Stripe Integration",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Stripe",
      time: "10:42 AM",
      content: (
        <span>
          Payment received from <Link to="/clients" className="font-semibold text-[#1264A3] hover:underline cursor-pointer">@Acme Corp</Link> for <Link to="/invoices/1024" className="font-semibold hover:underline">Invoice #1024</Link>. Amount: <span className="font-bold">$1,200.00</span> 💸
        </span>
      ),
      reactions: [
        { emoji: "🤑", count: 2 },
        { emoji: "🔥", count: 1 }
      ]
    },
    {
      id: 2,
      user: "System Bot",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=System",
      time: "11:15 AM",
      content: (
        <span>
          New invoice generated for <Link to="/clients" className="font-semibold text-[#1264A3] hover:underline cursor-pointer">@Design Studio</Link>. <br />
          <span className="inline-block mt-2 p-3 bg-muted/40 rounded border border-border/50 text-sm font-mono text-muted-foreground">
            INV-2024-001 • $4,500.00 • Due in 14 days
          </span>
        </span>
      ),
      reactions: []
    },
    {
      id: 3,
      user: "Sarah Jenkins",
      avatar: "",
      initials: "SJ",
      time: "11:30 AM",
      content: "Just spoke with the client, they promised to pay the overdue invoice by tomorrow! 👍",
      reactions: [
        { emoji: "🙌", count: 4 }
      ]
    },
    {
      id: 4,
      user: "Reminder Bot",
      avatar: "",
      initials: "RB",
      time: "12:05 PM",
      content: (
        <span>
          <span className="text-red-500 font-bold">Alert:</span> Invoice #998 for <span className="font-semibold">Global Tech</span> is now 3 days overdue.
          <Button variant="link" className="h-auto p-0 ml-2 text-[#1264A3]" onClick={() => toast({ title: "Reminder Sent", description: "Client has been notified via email and SMS." })}>Send Reminder</Button>
        </span>
      ),
      reactions: []
    }
  ];

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-8">

        {/* "Welcome Home" Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-black tracking-tight">Good afternoon, Mohan! 👋</h1>
          <p className="text-muted-foreground text-lg">Here's what's happening in your workspace today.</p>
        </div>

        {/* Stats Grid - "Canvas" Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              onClick={() => navigate(stat.link)}
              className="bg-card hover:bg-muted/50 transition-colors p-4 rounded-xl border shadow-sm cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
                <stat.icon className={cn("w-4 h-4 opacity-70", stat.color)} />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">{stat.value}</span>
                {stat.change && (
                  <span className="text-xs font-medium text-green-600 bg-green-100 px-1.5 py-0.5 rounded-full">
                    {stat.change}
                  </span>
                )}
              </div>
              {stat.count && (
                <p className="text-xs text-muted-foreground mt-1">{stat.count}</p>
              )}
            </div>
          ))}
        </div>

        <Separator />

        {/* Activity Feed - Slack Message Style */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Recent Activity
            </h2>
            <Button variant="outline" size="sm" className="h-8">Filter</Button>
          </div>

          <div className="space-y-1">
            {/* Date Divider */}
            <div className="relative flex items-center justify-center py-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs font-bold uppercase">
                <span className="bg-background px-4 text-muted-foreground rounded-full border shadow-sm">Today</span>
              </div>
            </div>

            {/* Messages */}
            {feedItems.map((item) => (
              <div key={item.id} className="group flex gap-3 py-2 px-2 hover:bg-muted/40 -mx-2 rounded-lg transition-colors">
                <div className="flex-shrink-0 mt-1">
                  <Avatar className="w-9 h-9 rounded-md cursor-pointer hover:opacity-80">
                    {item.avatar ? (
                      <AvatarImage src={item.avatar} alt={item.user} />
                    ) : null}
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
                      {item.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-[15px] cursor-pointer hover:underline">{item.user}</span>
                    <span className="text-xs text-muted-foreground">{item.time}</span>
                  </div>

                  <div className="text-[15px] text-foreground/90 leading-relaxed">
                    {item.content}
                  </div>

                  {/* Reactions */}
                  {item.reactions.length > 0 && (
                    <div className="flex gap-1 mt-1">
                      {item.reactions.map((reaction, rIdx) => (
                        <div key={rIdx} className="flex items-center gap-1 bg-muted/50 hover:bg-muted border border-transparent hover:border-border rounded-full px-1.5 py-0.5 cursor-pointer transition-colors">
                          <span className="text-sm">{reaction.emoji}</span>
                          <span className="text-xs font-medium text-muted-foreground">{reaction.count}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Hover Actions */}
                  <div className="absolute right-4 top-2 opacity-0 group-hover:opacity-100 bg-background border shadow-sm rounded-md flex items-center p-0.5 transition-opacity">
                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-muted text-muted-foreground">
                      <Smile className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-muted text-muted-foreground">
                      <MessageSquare className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-muted text-muted-foreground">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Input Box */}
          <div className="mt-4 border rounded-xl overflow-hidden shadow-sm focus-within:shadow-md transition-shadow group">
            <div className="bg-muted/30 px-2 py-1.5 flex gap-1 border-b">
              <Button variant="ghost" size="icon" className="h-7 w-7"><span className="font-bold text-sm">B</span></Button>
              <Button variant="ghost" size="icon" className="h-7 w-7"><span className="italic text-sm">I</span></Button>
              <Button variant="ghost" size="icon" className="h-7 w-7"><span className="line-through text-sm">S</span></Button>
              <Separator orientation="vertical" className="h-4 my-auto mx-1" />
              <Button variant="ghost" size="icon" className="h-7 w-7"><LinkIcon className="w-4 h-4" /></Button>
            </div>
            <Input
              className="border-0 focus-visible:ring-0 rounded-none bg-background px-4 py-3 h-auto min-h-[50px] text-[15px]"
              placeholder="Jot down a note or update status..."
            />
            <div className="flex items-center justify-between px-2 py-1.5 bg-background">
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground rounded-full hover:bg-muted"><Plus className="w-4 h-4" /></Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground rounded-full hover:bg-muted"><Smile className="w-4 h-4" /></Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground rounded-full hover:bg-muted"><Paperclip className="w-4 h-4" /></Button>
              </div>
              <Button size="sm" className="bg-[#007a5a] hover:bg-[#007a5a]/90 text-white h-7 px-4">
                <Send className="w-3 h-3 mr-2" />
                Send
              </Button>
            </div>
            <div className="absolute inset-0 bg-white/50 hidden group-has-[:disabled]:block"></div>
          </div>
        </div>

      </div>
    </AppLayout>
  );
}
