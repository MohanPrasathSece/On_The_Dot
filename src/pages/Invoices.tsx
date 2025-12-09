import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Search, Filter, Download, MoreHorizontal, Eye, Edit, Trash2, Send, Copy, CheckSquare, Archive, Check } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AppLayout } from "@/components/app/AppLayout";
import { mockInvoices, Invoice } from "@/data/mockData";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

export default function Invoices() {
  const [invoices, setInvoices] = useState<Invoice[]>(mockInvoices);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const [sortConfig, setSortConfig] = useState<{ key: string, direction: 'asc' | 'desc' } | null>(null);

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const filteredInvoices = invoices.filter((inv) => {
    const matchesSearch = inv.number.toLowerCase().includes(search.toLowerCase()) ||
      inv.client.name.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || inv.status === statusFilter;
    return matchesSearch && matchesStatus;
  }).sort((a, b) => {
    if (!sortConfig) return 0;
    const { key, direction } = sortConfig;

    let aValue: any = a[key as keyof Invoice];
    let bValue: any = b[key as keyof Invoice];

    // Handle nested properties if needed (e.g., client.name)
    if (key === 'client') {
      aValue = a.client.name;
      bValue = b.client.name;
    }

    if (aValue < bValue) return direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return direction === 'asc' ? 1 : -1;
    return 0;
  });

  const handleDelete = (id: string) => {
    setInvoices(invoices.filter(inv => inv.id !== id));
    toast({ title: "Invoice deleted", description: "The invoice has been moved to trash." });
  };

  const handleDuplicate = (invoice: Invoice) => {
    const newInvoice = {
      ...invoice,
      id: `inv${Date.now()}`,
      number: `INV-${String(invoices.length + 1).padStart(3, '0')}`,
      status: "draft" as const,
      createdAt: new Date().toISOString().split('T')[0],
    };
    setInvoices([newInvoice, ...invoices]);
    toast({ title: "Invoice duplicated", description: `Created ${newInvoice.number}` });
  };

  const handleSend = (invoice: Invoice) => {
    setInvoices(invoices.map(inv =>
      inv.id === invoice.id ? { ...inv, status: "sent" as const } : inv
    ));
    toast({ title: "Invoice sent", description: `${invoice.number} sent to ${invoice.client.email}` });
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === filteredInvoices.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredInvoices.map(i => i.id));
    }
  };

  const toggleSelect = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(i => i !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleBulkAction = (action: 'send' | 'paid' | 'archive') => {
    if (action === 'archive') {
      // For mock purposes, we'll just filter them out as "Archived" isn't a status type yet
      setInvoices(invoices.filter(inv => !selectedIds.includes(inv.id)));
    } else {
      const newStatus = action === 'send' ? 'sent' : 'paid';
      setInvoices(invoices.map(inv =>
        selectedIds.includes(inv.id) ? { ...inv, status: newStatus as any } : inv // keeping as any to bypass strict literal check for now if needed, though 'sent'|'paid' matches.
      ));
    }

    toast({
      title: "Bulk Action Applied",
      description: `${action === 'send' ? 'Sent' : action === 'paid' ? 'Marked as paid' : 'Archived'} ${selectedIds.length} invoices.`
    });
    setSelectedIds([]);
  };

  return (
    <AppLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div>
            <h2 className="text-2xl font-display font-semibold">Invoices</h2>
            <p className="text-muted-foreground">Manage and track all your invoices.</p>
          </div>
          <Button asChild>
            <Link to="/invoices/new">
              <Plus className="h-4 w-4 mr-2" />
              New Invoice
            </Link>
          </Button>
        </div>

        {/* Filters & Bulk Actions */}
        {selectedIds.length > 0 ? (
          <div className="flex items-center justify-between bg-primary/5 p-4 rounded-lg border border-primary/20 animate-fade-in">
            <div className="flex items-center gap-2">
              <span className="font-medium text-primary">{selectedIds.length} selected</span>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={() => handleBulkAction('send')} className="bg-background">
                <Send className="h-4 w-4 mr-2" /> Send
              </Button>
              <Button size="sm" variant="outline" onClick={() => handleBulkAction('paid')} className="bg-background">
                <Check className="h-4 w-4 mr-2" /> Mark Paid
              </Button>
              <Button size="sm" variant="outline" onClick={() => handleBulkAction('archive')} className="bg-background text-destructive hover:text-destructive">
                <Archive className="h-4 w-4 mr-2" /> Archive
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search invoices..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-40">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="sent">Sent</SelectItem>
                <SelectItem value="viewed">Viewed</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        )}

        {/* Table */}
        <div className="glass rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50 bg-muted/30">
                  <th className="px-5 py-3 w-[50px]">
                    <Checkbox
                      checked={selectedIds.length === filteredInvoices.length && filteredInvoices.length > 0}
                      onCheckedChange={toggleSelectAll}
                    />
                  </th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3 cursor-pointer hover:bg-muted/50" onClick={() => handleSort('number')}>
                    Invoice {sortConfig?.key === 'number' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3 cursor-pointer hover:bg-muted/50" onClick={() => handleSort('client')}>
                    Client {sortConfig?.key === 'client' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3 cursor-pointer hover:bg-muted/50" onClick={() => handleSort('amount')}>
                    Amount {sortConfig?.key === 'amount' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3 cursor-pointer hover:bg-muted/50" onClick={() => handleSort('status')}>
                    Status {sortConfig?.key === 'status' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3 cursor-pointer hover:bg-muted/50" onClick={() => handleSort('dueDate')}>
                    Due Date {sortConfig?.key === 'dueDate' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3 cursor-pointer hover:bg-muted/50" onClick={() => handleSort('createdAt')}>
                    Created {sortConfig?.key === 'createdAt' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                  </th>
                  <th className="text-right text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredInvoices.map((invoice) => (
                  <tr key={invoice.id} className={`table-row ${selectedIds.includes(invoice.id) ? 'bg-primary/5' : ''}`}>
                    <td className="px-5 py-4">
                      <Checkbox
                        checked={selectedIds.includes(invoice.id)}
                        onCheckedChange={() => toggleSelect(invoice.id)}
                      />
                    </td>
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
                      {new Date(invoice.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </td>
                    <td className="px-5 py-4 text-muted-foreground">
                      {new Date(invoice.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </td>
                    <td className="px-5 py-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link to={`/invoices/${invoice.id}`}>
                              <Eye className="h-4 w-4 mr-2" /> View
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link to={`/invoices/${invoice.id}/edit`}>
                              <Edit className="h-4 w-4 mr-2" /> Edit
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleDuplicate(invoice)}>
                            <Copy className="h-4 w-4 mr-2" /> Duplicate
                          </DropdownMenuItem>
                          {invoice.status === 'draft' && (
                            <DropdownMenuItem onClick={() => handleSend(invoice)}>
                              <Send className="h-4 w-4 mr-2" /> Send
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => handleDelete(invoice.id)} className="text-destructive">
                            <Trash2 className="h-4 w-4 mr-2" /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredInvoices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No invoices found</p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
