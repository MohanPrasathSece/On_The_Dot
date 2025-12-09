import { Link } from "react-router-dom";
import { Plus, Send, TrendingUp, Clock, AlertCircle, CheckCircle, ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppLayout } from "@/components/app/AppLayout";
import { mockInvoices, mockActivities, monthlyRevenue, mockReminders, mockSuggestions } from "@/data/mockData";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const stats = [
  { label: "Total Revenue", value: "$116,800", change: "+12.5%", icon: TrendingUp },
  { label: "Pending Invoices", value: "$17,600", count: "4", icon: Clock },
  { label: "Overdue", value: "$3,500", count: "1", icon: AlertCircle },
  { label: "Paid This Month", value: "$28,400", count: "16", icon: CheckCircle },
];

export default function Dashboard() {
  return (
    <AppLayout>
      <div className="space-y-6 animate-fade-in dashboard-page">
        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div>
            <h2 className="text-2xl font-display font-semibold">Welcome back, Alex</h2>
            <p className="text-muted-foreground">Here's what's happening with your invoices.</p>
          </div>
          <div className="flex gap-3">
            <Button asChild>
              <Link to="/invoices/new">
                <Plus className="h-4 w-4 mr-2" />
                New Invoice
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/reminders">
                <Send className="h-4 w-4 mr-2" />
                Send Reminder
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/clients">
                <div className="flex items-center">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Client
                </div>
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card">
              <div className="flex items-start justify-between mb-3">
                <div className="p-2 rounded-lg bg-foreground/5">
                  <stat.icon className="h-5 w-5" />
                </div>
                {stat.change && (
                  <span className="text-xs font-medium text-foreground/70 bg-foreground/5 px-2 py-1 rounded-full">
                    {stat.change}
                  </span>
                )}
              </div>
              <p className="text-2xl font-semibold">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">
                {stat.label}
                {stat.count && <span className="ml-1">({stat.count})</span>}
              </p>
            </div>
          ))}
        </div>

        {/* AI Smart Suggestions */}
        <div className="glass rounded-xl p-5 border-l-4 border-l-primary/70 animate-fade-in-up animation-delay-200">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-primary/10 rounded-full text-primary mt-1">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                AI Smart Suggestions
                <span className="text-xs font-normal text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">Beta</span>
              </h3>
              <div className="space-y-3 mt-3">
                {mockSuggestions.map((suggestion) => (
                  <div key={suggestion.id} className="flex flex-col sm:flex-row sm:items-center justify-between bg-background/40 p-3 rounded-lg border border-border/50 gap-3">
                    <p className="text-sm">
                      <span className="font-medium text-foreground">Insight:</span> {suggestion.message}
                    </p>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-primary hover:text-primary hover:bg-primary/10 whitespace-nowrap shrink-0"
                    >
                      {suggestion.action}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Charts and Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue Chart */}
          <div className="lg:col-span-2 glass rounded-xl p-5">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold">Revenue Overview</h3>
              <Button variant="ghost" size="sm" className="text-xs">
                View Report <ArrowUpRight className="h-3 w-3 ml-1" />
              </Button>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyRevenue}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--foreground))" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="hsl(var(--foreground))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} tickFormatter={(v) => `$${v / 1000}k`} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="hsl(var(--foreground))"
                    strokeWidth={2}
                    fill="url(#colorRevenue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-6">
            {/* Recent Activity */}
            <div className="glass rounded-xl p-5">
              <h3 className="font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {mockActivities.slice(0, 5).map((activity) => (
                  <div key={activity.id} className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-foreground/50 mt-2 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm">{activity.description}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {new Date(activity.timestamp).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Reminders */}
            <div className="glass rounded-xl p-5">
              <h3 className="font-semibold mb-4">Upcoming Reminders</h3>
              <div className="space-y-3">
                {mockReminders.slice(0, 3).map((reminder) => (
                  <div key={reminder.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-background">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{reminder.client}</p>
                        <p className="text-xs text-muted-foreground">Due: {new Date(reminder.scheduledDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full text-xs" size="sm" asChild>
                  <Link to="/reminders">View All</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Invoices */}
        <div className="glass rounded-xl overflow-hidden">
          <div className="flex items-center justify-between p-5 border-b border-border/50">
            <h3 className="font-semibold">Recent Invoices</h3>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/invoices">View all</Link>
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50 bg-muted/30">
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Invoice</th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Client</th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Amount</th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Status</th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Due Date</th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Urgency</th>
                </tr>
              </thead>
              <tbody>
                {mockInvoices.slice(0, 5).map((invoice) => (
                  <tr key={invoice.id} className="table-row">
                    <td className="px-5 py-4">
                      <Link to={`/invoices/${invoice.id}`} className="font-medium hover:underline">
                        {invoice.number}
                      </Link>
                    </td>
                    <td className="px-5 py-4">
                      <div>
                        <p className="font-medium">{invoice.client.name}</p>
                        <p className="text-sm text-muted-foreground">{invoice.client.company}</p>
                      </div>
                    </td>
                    <td className="px-5 py-4 font-medium">${invoice.amount.toLocaleString()}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${invoice.status === 'paid' ? 'bg-foreground/10 text-foreground' :
                        invoice.status === 'overdue' ? 'bg-foreground/5 text-foreground/70' :
                          invoice.status === 'sent' ? 'bg-muted text-muted-foreground' :
                            invoice.status === 'viewed' ? 'bg-muted text-foreground' :
                              'bg-muted/50 text-muted-foreground'
                        }`}>
                        {invoice.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-muted-foreground">
                      {new Date(invoice.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </td>
                    <td className="px-5 py-4">
                      {invoice.status === 'overdue' && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                          Urgent
                        </span>
                      )}
                      {invoice.status !== 'overdue' && invoice.status !== 'paid' && new Date(invoice.dueDate) < new Date(Date.now() + 3 * 86400000) && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                          Due Soon
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppLayout >
  );
}
