import { useState } from "react";
import { Download, Calendar, TrendingUp, TrendingDown, DollarSign, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppLayout } from "@/components/app/AppLayout";
import { useAppData } from "@/hooks/useAppData";
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

export default function Reports() {
  const { invoices } = useAppData();
  const [dateRange, setDateRange] = useState("6m");

  const handleExport = (format: string) => {
    toast({ title: "Export started", description: `Downloading report as ${format.toUpperCase()}...` });
  };

  const paidInvoices = invoices.filter(i => i.status === "paid").length;
  const totalInvoices = invoices.length;
  // Parse amount string "$1,234.56" to float
  const parseAmount = (amt: string) => parseFloat(amt.replace(/[^0-9.-]+/g, "")) || 0;

  const totalRevenue = invoices
    .filter(i => i.status === "paid")
    .reduce((sum, i) => sum + parseAmount(i.amount), 0);

  const overdueAmount = invoices
    .filter(i => i.status === "overdue")
    .reduce((sum, i) => sum + parseAmount(i.amount), 0);

  const avgInvoiceValue = totalInvoices > 0 ? totalRevenue / totalInvoices : 0;

  // Stats
  const stats = [
    { label: "Total Revenue", value: `$${totalRevenue.toLocaleString()}`, change: "+0%", trend: "up", icon: DollarSign },
    { label: "Avg. Invoice Value", value: `$${avgInvoiceValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}`, change: "0%", trend: "up", icon: FileText },
    { label: "Collection Rate", value: totalInvoices > 0 ? `${Math.round((paidInvoices / totalInvoices) * 100)}%` : "0%", change: "0%", trend: "up", icon: TrendingUp },
    { label: "Days to Payment", value: "0", change: "0", trend: "flat", icon: Calendar },
  ];

  // Group invoices by month for charts (Last 6 months placeholder logic)
  // In a real app, strict date parsing is needed. Here we just mock if empty or use issueDate.
  const chartData = invoices.length > 0 ?
    invoices.reduce((acc: any[], inv) => {
      const month = new Date(inv.issueDate).toLocaleString('default', { month: 'short' });
      const existing = acc.find(d => d.month === month);
      const amt = parseAmount(inv.amount);
      if (existing) {
        existing.revenue += (inv.status === 'paid' ? amt : 0);
        existing.invoices += 1;
      } else {
        acc.push({ month, revenue: (inv.status === 'paid' ? amt : 0), invoices: 1 });
      }
      return acc;
    }, []) :
    [
      { month: "Jan", revenue: 0, invoices: 0 },
      { month: "Feb", revenue: 0, invoices: 0 },
      { month: "Mar", revenue: 0, invoices: 0 },
    ];

  const invoiceStatusData = [
    { name: "Paid", value: paidInvoices, color: "#10B981" },
    { name: "Pending", value: invoices.filter(i => i.status === "pending").length, color: "#3B82F6" },
    { name: "Overdue", value: invoices.filter(i => i.status === "overdue").length, color: "#EF4444" },
    { name: "Draft", value: invoices.filter(i => i.status === "draft").length, color: "#9CA3AF" },
  ].filter(d => d.value > 0);

  if (invoiceStatusData.length === 0) {
    invoiceStatusData.push({ name: "No Data", value: 1, color: "#E5E7EB" });
  }

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
            <div key={i} className="stat-card p-4 border rounded-xl bg-card shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div className="p-2 rounded-lg bg-foreground/5">
                  <stat.icon className="h-5 w-5" />
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1 bg-muted text-muted-foreground`}>
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
          <div className="border shadow-sm rounded-xl p-5 bg-card">
            <h3 className="font-semibold mb-6">Revenue Trend</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorRevenue2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1164A3" stopOpacity={0.1} />
                      <stop offset="95%" stopColor="#1164A3" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} tickFormatter={(v) => `$${v}`} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#1164A3" strokeWidth={2} fill="url(#colorRevenue2)" />
                </AreaChart>
              </ResponsiveContainer>
              {invoices.length === 0 && <div className="text-center text-xs text-muted-foreground mt-2">No data available</div>}
            </div>
          </div>

          {/* Invoice Volume */}
          <div className="border shadow-sm rounded-xl p-5 bg-card">
            <h3 className="font-semibold mb-6">Invoice Volume</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="invoices" fill="#3F0E40" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Invoice Status Pie */}
          <div className="border shadow-sm rounded-xl p-5 bg-card">
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
            <div className="flex justify-center gap-6 mt-4 flex-wrap">
              {invoiceStatusData.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-muted-foreground">{item.name} ({item.value})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
