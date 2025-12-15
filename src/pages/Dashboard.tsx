import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Building2, Users, CreditCard, Activity, ArrowUpRight,
  Plus, Search, Grip, LayoutGrid, CheckCircle2,
  DollarSign, BarChart3, ArrowRight, Wallet, MoreHorizontal, Clock, Mail, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { AppLayout } from "@/components/app/AppLayout";
import { useAppData } from "@/hooks/useAppData";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { toast } from "@/components/ui/use-toast";

export default function Dashboard() {
  const { clients, invoices, settings, loading, updateSettings, addClient } = useAppData();
  const navigate = useNavigate();
  const [setupStep, setSetupStep] = useState(0);
  const [activityFilter, setActivityFilter] = useState("all");
  const [goalDialogOpen, setGoalDialogOpen] = useState(false);
  const [newGoal, setNewGoal] = useState("");

  // Setup Form States
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [monthlyGoal, setMonthlyGoal] = useState("");

  // First Client Form
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientCompany, setClientCompany] = useState("");

  const totalRevenue = invoices
    .filter(inv => inv.status === 'paid')
    .reduce((acc, inv) => acc + parseFloat(inv.amount.replace(/[^0-9.-]+/g, "")), 0);

  const outstandingRevenue = invoices
    .filter(inv => inv.status === 'pending' || inv.status === 'overdue')
    .reduce((acc, inv) => acc + parseFloat(inv.amount.replace(/[^0-9.-]+/g, "")), 0);

  const goalProgress = settings.monthlyGoal
    ? (totalRevenue / parseFloat(settings.monthlyGoal.replace(/[^0-9.-]+/g, ""))) * 100
    : 0;

  const handleSetupComplete = () => {
    updateSettings({
      companyName,
      industry,
      monthlyGoal,
      setupCompleted: true
    });

    if (clientName) {
      addClient({
        name: clientName,
        email: clientEmail,
        company: clientCompany,
        location: 'Remote', // Default
        phone: '',
        status: 'active',
        tags: ['New'],
        notes: 'First client added during setup'
      });
    }
  };

  if (loading) return null;

  // New User Onboarding Wizard
  if (!settings.setupCompleted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-lg border-2 shadow-xl">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-2xl">Welcome to Flowryte HQ</CardTitle>
            <CardDescription>
              Let's get your workspace set up in just a few steps.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            {setupStep === 0 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="space-y-2">
                  <Label>What is your company or workspace name?</Label>
                  <Input
                    placeholder="e.g. Acme Design Studio"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>What industry are you in?</Label>
                  <Select onValueChange={setIndustry} value={industry}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="design">Design & Creative</SelectItem>
                      <SelectItem value="development">Software Development</SelectItem>
                      <SelectItem value="marketing">Marketing & Sales</SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  className="w-full mt-4"
                  disabled={!companyName || !industry}
                  onClick={() => setSetupStep(1)}
                >
                  Next: Set Goals
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}

            {setupStep === 1 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="space-y-2">
                  <Label>What is your monthly revenue goal?</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      className="pl-9"
                      placeholder="e.g. 10000"
                      type="number"
                      value={monthlyGoal}
                      onChange={(e) => setMonthlyGoal(e.target.value)}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">This helps us track your progress.</p>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" className="w-full" onClick={() => setSetupStep(0)}>Back</Button>
                  <Button
                    className="w-full"
                    disabled={!monthlyGoal}
                    onClick={() => setSetupStep(2)}
                  >
                    Next: Add Client
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {setupStep === 2 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="bg-muted/30 p-4 rounded-lg border mb-4">
                  <h4 className="font-semibold text-sm mb-1">Add your first client</h4>
                  <p className="text-xs text-muted-foreground">Optional, but helps you create invoices faster.</p>
                </div>
                <div className="space-y-2">
                  <Label>Client Name</Label>
                  <Input
                    placeholder="John Doe"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Company</Label>
                  <Input
                    placeholder="Client Company Ltd"
                    value={clientCompany}
                    onChange={(e) => setClientCompany(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input
                    placeholder="john@example.com"
                    type="email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                  />
                </div>
                <div className="flex gap-2 mt-6">
                  <Button variant="outline" className="w-full" onClick={() => setSetupStep(1)}>Back</Button>
                  <Button
                    className="w-full"
                    onClick={handleSetupComplete}
                  >
                    Complete Setup
                    <CheckCircle2 className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  className="w-full text-xs text-muted-foreground"
                  onClick={handleSetupComplete}
                >
                  Skip adding client for now
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  // Main Dashboard
  return (
    <AppLayout>
      <div className="space-y-8 animate-in fade-in duration-500">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              {settings.companyName} HQ
            </h1>
            <p className="text-muted-foreground flex items-center gap-2 mt-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Overview • {settings.industry}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/clients">
              <Button variant="outline">
                <Users className="w-4 h-4 mr-2" />
                Manage Clients
              </Button>
            </Link>
            <Link to="/invoices">
              <Button className="bg-primary hover:bg-primary/90">
                <Sparkles className="w-4 h-4 mr-2" />
                Create Invoice
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="shadow-sm hover:shadow-md transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between space-y-0 pb-2">
                <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {goalProgress > 0 ? `${goalProgress.toFixed(0)}% of monthly goal` : "No revenue yet"}
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-sm hover:shadow-md transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between space-y-0 pb-2">
                <p className="text-sm font-medium text-muted-foreground">Active Clients</p>
                <Users className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="text-2xl font-bold">{clients.length}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Total active accounts
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-sm hover:shadow-md transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between space-y-0 pb-2">
                <p className="text-sm font-medium text-muted-foreground">Outstanding</p>
                <Wallet className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="text-2xl font-bold text-amber-600">${outstandingRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Unpaid invoices
              </p>
            </CardContent>
          </Card>
          <Card className="border-dashed bg-muted/40 shadow-none">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
              <p className="text-sm font-medium text-muted-foreground mb-2">Monthly Goal</p>
              <div className="text-xl font-bold text-foreground/80">${parseInt(settings.monthlyGoal || "0").toLocaleString()}</div>
              <Dialog open={goalDialogOpen} onOpenChange={setGoalDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="link" size="sm" className="h-auto p-0 text-xs mt-1 text-primary">
                    Adjust Goal
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Update Monthly Goal</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label>New Monthly Revenue Goal</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          className="pl-9"
                          type="number"
                          placeholder={settings.monthlyGoal || "10000"}
                          value={newGoal}
                          onChange={(e) => setNewGoal(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setGoalDialogOpen(false)}>Cancel</Button>
                    <Button onClick={() => {
                      if (newGoal) {
                        updateSettings({ monthlyGoal: newGoal });
                        toast({ title: "Goal Updated", description: `Monthly goal set to $${parseInt(newGoal).toLocaleString()}` });
                        setGoalDialogOpen(false);
                        setNewGoal("");
                      }
                    }}>Update Goal</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>

        {/* Empty State or Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Feed Area */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Activity Feed</h3>
              <Select value={activityFilter} onValueChange={setActivityFilter}>
                <SelectTrigger className="w-[120px] h-8 text-xs">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Activity</SelectItem>
                  <SelectItem value="invoices">Invoices</SelectItem>
                  <SelectItem value="clients">Clients</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {invoices.length === 0 && clients.length === 0 ? (
              <Card className="border-dashed py-12 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                  <Activity className="w-8 h-8 text-muted-foreground/50" />
                </div>
                <h3 className="text-lg font-semibold mb-2">No activity yet</h3>
                <p className="text-muted-foreground max-w-sm mb-6">
                  Your dasbhoard is looking a bit empty. Start by creating an invoice or adding more clients to see your activity here.
                </p>
                <div className="flex gap-3">
                  <Link to="/clients">
                    <Button variant="outline">Add Client</Button>
                  </Link>
                  <Link to="/invoices">
                    <Button>Create Invoice</Button>
                  </Link>
                </div>
              </Card>
            ) : (
              <div className="space-y-4">
                {/* Recent Invoices */}
                {(activityFilter === 'all' || activityFilter === 'invoices') && invoices.slice(0, 5).map(invoice => (
                  <div key={invoice.id} className="flex items-center justify-between p-4 bg-card border rounded-lg hover:bg-muted/30 transition-colors group">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">New Invoice for {invoice.clientName}</p>
                        <p className="text-sm text-muted-foreground">{invoice.issueDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-bold">{invoice.amount}</p>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-muted uppercase font-medium">{invoice.status}</span>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => navigate(`/invoices/${invoice.id}`)}>
                            <CreditCard className="mr-2 h-4 w-4" />
                            View Invoice
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => {
                            toast({ title: "Sending reminder...", description: `Reminder sent to ${invoice.clientName}` });
                          }}>
                            <Mail className="mr-2 h-4 w-4" />
                            Send Reminder
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => {
                            toast({ title: "Message Client", description: "Opening message composer..." });
                          }}>
                            <Mail className="mr-2 h-4 w-4" />
                            Message Client
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}

                {/* Recent Clients */}
                {(activityFilter === 'all' || activityFilter === 'clients') && clients.slice(0, 3).map(client => (
                  <div key={client.id} className="flex items-center justify-between p-4 bg-card border rounded-lg hover:bg-muted/30 transition-colors group">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Users className="w-5 h-5 text-secondary-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">New Client: {client.name}</p>
                        <p className="text-sm text-muted-foreground">Added to {client.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" asChild>
                        <Link to="/clients">View</Link>
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => navigate('/clients')}>
                            <Users className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => {
                            toast({ title: "Message Client", description: `Opening chat with ${client.name}...` });
                          }}>
                            <Mail className="mr-2 h-4 w-4" />
                            Send Message
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar / Quick Actions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <Link to="/trial-signup" className="flex items-center gap-4 p-3 rounded-lg border hover:bg-muted transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium">Upgrade Plan</p>
                    <p className="text-xs text-muted-foreground">Start 30-day free trial</p>
                  </div>
                </Link>
                <Link to="/invoices/new" className="flex items-center gap-4 p-3 rounded-lg border hover:bg-muted transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CreditCard className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium">Send Invoice</p>
                    <p className="text-xs text-muted-foreground">Get paid faster</p>
                  </div>
                </Link>
                <div className="p-4 bg-muted/20 rounded-lg mt-2">
                  <h4 className="font-semibold mb-2 text-sm">Flowryte Tip</h4>
                  <p className="text-xs text-muted-foreground">
                    Connect your bank account to automatically reconcile payments and track expenses in real-time.
                  </p>
                  <Button
                    variant="link"
                    className="px-0 text-xs h-auto mt-2"
                    onClick={() => {
                      toast({
                        title: "Bank Integration",
                        description: "This feature is coming soon! You'll be able to connect Plaid, Stripe, and PayPal."
                      });
                    }}
                  >
                    Connect Bank Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
