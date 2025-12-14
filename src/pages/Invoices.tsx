import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Plus, Search, Filter, MoreHorizontal, Download, Send,
  Eye, Edit, Trash2, Copy, CheckCircle, Clock, AlertCircle,
  DollarSign, Calendar, User, Mail, Pin, ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AppLayout } from "@/components/app/AppLayout";
import { cn } from "@/lib/utils";
import { useAppData, Invoice } from "@/hooks/useAppData";

const statusConfig = {
  paid: { color: "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400", icon: CheckCircle },
  pending: { color: "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400", icon: Clock },
  overdue: { color: "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400", icon: AlertCircle },
  draft: { color: "bg-gray-100 text-gray-700 dark:bg-gray-900/20 dark:text-gray-400", icon: Edit },
};

export default function Invoices() {
  const { invoices } = useAppData();
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.clientEmail.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = selectedStatus === "all" || invoice.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const pinnedInvoices = filteredInvoices.filter(inv => inv.isPinned);
  const regularInvoices = filteredInvoices.filter(inv => !inv.isPinned);

  const InvoiceCard = ({ invoice }: { invoice: Invoice }) => {
    const StatusIcon = statusConfig[invoice.status as keyof typeof statusConfig].icon;

    return (
      <div className="group flex gap-3 py-2 px-2 hover:bg-muted/40 -mx-2 rounded-lg transition-colors relative">
        {/* Avatar */}
        <div className="flex-shrink-0 mt-1">
          <div className="w-9 h-9 rounded bg-primary flex items-center justify-center font-bold text-primary-foreground text-sm cursor-pointer hover:opacity-80">
            {invoice.avatar}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-[15px] cursor-pointer hover:underline">{invoice.clientName}</span>
            <span className="text-xs text-muted-foreground">at {invoice.issueDate}</span>
          </div>

          <div className="text-[15px] text-foreground/90 mt-0.5">
            <div className="flex items-center gap-2">
              Created invoice <span className="font-semibold hover:underline text-[#1264A3] cursor-pointer">{invoice.id}</span>
              for <span className="font-bold">{invoice.amount}</span>
              <span className={cn(
                "px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border",
                statusConfig[invoice.status as keyof typeof statusConfig].color.replace("bg-", "border-").replace("text-", "text-")
              )}>
                {invoice.status}
              </span>
            </div>

            <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {invoice.clientEmail}</span>
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Due {invoice.dueDate}</span>
              <span>• {invoice.items} items</span>
            </div>
          </div>

          {/* Hover Actions */}
          <div className="absolute right-4 top-2 opacity-0 group-hover:opacity-100 bg-background border shadow-sm rounded-md flex items-center p-0.5 transition-opacity">
            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-muted text-muted-foreground" title="View Details">
              <Eye className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-muted text-muted-foreground" title="Send Email">
              <Send className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-muted text-muted-foreground" title="Download PDF">
              <Download className="w-4 h-4" />
            </Button>
            <div className="w-[1px] h-4 bg-border mx-1" />
            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-muted text-muted-foreground">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <AppLayout>
      {/* Channel Header / Filter Bar */}
      <div className="flex items-center justify-between py-2 border-b sticky top-0 bg-background/95 backdrop-blur z-10 px-6 -mx-6 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground mr-2">Sort by:</span>
          <Button variant="ghost" size="sm" className="h-7 text-xs font-medium">Date <ArrowUpRight className="w-3 h-3 ml-1" /></Button>
          <div className="h-4 w-[1px] bg-border mx-1" />
          <Button
            variant={selectedStatus === "all" ? "secondary" : "ghost"}
            size="sm"
            className="h-7 text-xs"
            onClick={() => setSelectedStatus("all")}
          >
            All
          </Button>
          <Button
            variant={selectedStatus === "unpaid" ? "secondary" : "ghost"}
            size="sm"
            className="h-7 text-xs"
            onClick={() => setSelectedStatus("pending")}
          >
            Unpaid
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground" />
            <Input
              placeholder="Search invoices..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-7 w-48 pl-8 text-xs bg-muted/50 border-transparent focus:bg-background transition-all"
            />
          </div>
          <Link to="/invoices/new">
            <Button size="sm" className="h-7 bg-[#007a5a] hover:bg-[#007a5a]/90 text-white text-xs px-3">
              <Plus className="h-3 w-3 mr-1" />
              New Invoice
            </Button>
          </Link>
        </div>
      </div>

      {/* Invoice Feed (Slack Style) */}
      <div className="space-y-6 pb-20">

        {/* Pinned Section */}
        {pinnedInvoices.length > 0 && (
          <div className="mb-8 bg-[#FFF8E1] border border-[#FFECB3] rounded-md p-4 dark:bg-yellow-900/10 dark:border-yellow-900/30">
            <div className="flex items-center gap-2 text-xs font-bold text-yellow-700 dark:text-yellow-500 mb-3 uppercase tracking-wide">
              <Pin className="h-3 w-3 fill-current" />
              Pinned Items
            </div>
            <div className="space-y-4">
              {pinnedInvoices.map(invoice => <InvoiceCard key={invoice.id} invoice={invoice} />)}
            </div>
          </div>
        )}

        {/* Date Divider - Today */}
        {(regularInvoices.length > 0 || pinnedInvoices.length > 0) && (
          <div className="relative flex items-center justify-center py-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border/60" />
            </div>
            <div className="relative flex justify-center text-xs font-bold text-muted-foreground">
              <span className="bg-background px-4 border rounded-full py-0.5 shadow-sm">Today</span>
            </div>
          </div>
        )}

        {/* Regular Invoices */}
        <div className="space-y-1">
          {regularInvoices.map(invoice => <InvoiceCard key={invoice.id} invoice={invoice} />)}
        </div>

        {regularInvoices.length === 0 && pinnedInvoices.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 opacity-20" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No invoices found</h3>
            <p className="mb-6">Create your first invoice to get started.</p>
            <Link to="/invoices/new">
              <Button>Create Invoice</Button>
            </Link>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
