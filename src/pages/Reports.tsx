import { useState } from "react";
import { Download, Calendar, TrendingUp, TrendingDown, DollarSign, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppLayout } from "@/components/app/AppLayout";
import { monthlyRevenue, invoiceStatusData, mockInvoices } from "@/data/mockData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
} from "recharts";
import { toast } from "@/hooks/use-toast";

const stats = [
  { label: "Total Revenue", value: "$116,800", change: "+12.5%", trend: "up", icon: DollarSign },
  { label: "Avg. Invoice Value", value: "$4,273", change: "+8.2%", trend: "up", icon: FileText },
  { label: "Collection Rate", value: "94.2%", change: "+2.1%", trend: "up", icon: TrendingUp },
  { label: "Days to Payment", value: "8.3", change: "-1.5", trend: "down", icon: Calendar },
];

export default function Reports() {
  const [dateRange, setDateRange] = useState("6m");

  const handleExport = (format: string) => {
    toast({ title: "Export started", description: `Downloading report as ${format.toUpperCase()}...` });
  };

  const paidInvoices = mockInvoices.filter(i => i.status === "paid").length;
  const totalInvoices = mockInvoices.length;
  const overdueAmount = mockInvoices.filter(i => i.status === "overdue").reduce((sum, i) => sum + i.amount, 0);

  return (
    <AppLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div>
            <h2 className="text-2xl font-display font-semibold">Reports</h2>
            <p className="text-muted-foreground">Analyze your business performance.</p>
          </div>
          <div className="flex gap-3">
            <Select value={dateRange} onValueChange={setDateRange}>
              <SelectTrigger className="w-32">
                <Calendar className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1m">Last Month</SelectItem>
                <SelectItem value="3m">Last 3 Months</SelectItem>
                <SelectItem value="6m">Last 6 Months</SelectItem>
                <SelectItem value="1y">Last Year</SelectItem>
              </SelectContent>
            </Select>
            <Select onValueChange={handleExport}>
              <SelectTrigger className="w-32">
                <Download className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Export" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="csv">CSV</SelectItem>
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="xlsx">Excel</SelectItem>
              </SelectContent>
            </Select>
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
                <span className={`text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1 ${stat.trend === 'up' ? 'bg-foreground/10 text-foreground' : 'bg-muted text-muted-foreground'
                  }`}>
                  {stat.trend === 'up' ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-semibold">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Chart */}
          <div className="glass rounded-xl p-5">
            <h3 className="font-semibold mb-6">Revenue Trend</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyRevenue}>
                  <defs>
                    <linearGradient id="colorRevenue2" x1="0" y1="0" x2="0" y2="1">
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
                      borderRadius: '8px'
                    }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="hsl(var(--foreground))" strokeWidth={2} fill="url(#colorRevenue2)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Invoice Volume */}
          <div className="glass rounded-xl p-5">
            <h3 className="font-semibold mb-6">Invoice Volume</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyRevenue}>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="invoices" fill="hsl(var(--foreground))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Invoice Status Pie */}
          <div className="glass rounded-xl p-5">
            <h3 className="font-semibold mb-6">Invoice Status</h3>
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={invoiceStatusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {invoiceStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              {invoiceStatusData.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-muted-foreground">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cash Flow Forecast */}
        <div className="glass rounded-xl p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold">Cash Flow Forecast</h3>
              <p className="text-sm text-muted-foreground">Projected revenue vs expenses (AI-based)</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1"><div className="w-3 h-3 bg-foreground/80 rounded-full"></div> In</div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 bg-muted-foreground/30 rounded-full"></div> Out</div>
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={[
                { month: "Jul", in: 12400, out: 8200 },
                { month: "Aug", in: 18200, out: 9100 },
                { month: "Sep", in: 15800, out: 8800 },
                { month: "Oct", in: 22100, out: 12400 },
                { month: "Nov", in: 28400, out: 14500 },
                { month: "Dec", in: 19800, out: 11200 },
                { month: "Jan (Est)", in: 24500, out: 13000, projected: true },
                { month: "Feb (Est)", in: 26800, out: 13500, projected: true },
              ]}>
                <defs>
                  <linearGradient id="colorIn" x1="0" y1="0" x2="0" y2="1">
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
                    borderRadius: '8px'
                  }}
                  formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
                />
                <Area type="monotone" dataKey="in" stroke="hsl(var(--foreground))" strokeWidth={2} fill="url(#colorIn)" fillOpacity={1} />
                <Area type="monotone" dataKey="out" stroke="hsl(var(--muted-foreground))" strokeDasharray="5 5" strokeWidth={2} fill="transparent" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Tax Summary */}
        <div className="glass rounded-xl p-5">
          <h3 className="font-semibold mb-6">Est. Tax Liability</h3>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Taxable Income</p>
                <p className="text-2xl font-semibold">$97,000</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Est. Tax (20%)</p>
                <p className="text-xl font-medium text-destructive">$19,400</p>
              </div>
            </div>
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-foreground w-[75%]"></div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1 p-3 bg-muted/50 rounded-lg">
                <p className="text-xs text-muted-foreground">Next Payment</p>
                <p className="font-medium mt-1">Jan 15</p>
              </div>
              <div className="flex-1 p-3 bg-muted/50 rounded-lg">
                <p className="text-xs text-muted-foreground">Deductions</p>
                <p className="font-medium mt-1">$4,300</p>
              </div>
            </div>
            <Button variant="outline" className="w-full">Download Tax Report</Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="glass rounded-xl p-5">
          <h3 className="font-semibold mb-6">Quick Insights</h3>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Payment Rate</p>
                <p className="text-2xl font-semibold">{Math.round((paidInvoices / totalInvoices) * 100)}%</p>
              </div>
              <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-foreground rounded-full"
                  style={{ width: `${(paidInvoices / totalInvoices) * 100}%` }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Overdue Amount</p>
                <p className="text-2xl font-semibold">${overdueAmount.toLocaleString()}</p>
              </div>
              <Button variant="outline" size="sm">Send Reminders</Button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Top Client</p>
                <p className="text-lg font-semibold">Creative Agency</p>
              </div>
              <span className="text-sm text-muted-foreground">$45,000 total</span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Recurring Revenue</p>
                <p className="text-2xl font-semibold">$8,400/mo</p>
              </div>
              <span className="text-xs bg-foreground/10 text-foreground px-2 py-1 rounded-full">4 clients</span>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
