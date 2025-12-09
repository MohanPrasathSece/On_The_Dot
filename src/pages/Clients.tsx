import { useState } from "react";
import { Plus, Search, MoreHorizontal, Mail, FileText, Bell, Edit, Trash2, Copy, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AppLayout } from "@/components/app/AppLayout";
import { mockClients, Client, mockInvoices, mockReminders } from "@/data/mockData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export default function Clients() {
  const [clients, setClients] = useState<Client[]>(mockClients);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [search, setSearch] = useState("");
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [newClient, setNewClient] = useState({ name: "", email: "", company: "", phone: "" });

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(search.toLowerCase()) ||
    client.company.toLowerCase().includes(search.toLowerCase()) ||
    client.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddClient = () => {
    const client: Client = {
      id: `c${Date.now()}`,
      ...newClient,
      totalPaid: 0,
      totalOutstanding: 0,
      invoiceCount: 0,
    };
    setClients([client, ...clients]);
    setNewClient({ name: "", email: "", company: "", phone: "" });
    setIsAddOpen(false);
    toast({ title: "Client added", description: `${client.name} has been added.` });
  };

  const handleDelete = (id: string) => {
    setClients(clients.filter(c => c.id !== id));
    toast({ title: "Client deleted" });
  };

  return (
    <AppLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div>
            <h2 className="text-2xl font-display font-semibold">Clients</h2>
            <p className="text-muted-foreground">Manage your client relationships.</p>
          </div>
          <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Client
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Client</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div>
                  <Label>Name</Label>
                  <Input
                    value={newClient.name}
                    onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    value={newClient.email}
                    onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <Label>Company</Label>
                  <Input
                    value={newClient.company}
                    onChange={(e) => setNewClient({ ...newClient, company: e.target.value })}
                    placeholder="Company Inc."
                  />
                </div>
                <div>
                  <Label>Phone</Label>
                  <Input
                    value={newClient.phone}
                    onChange={(e) => setNewClient({ ...newClient, phone: e.target.value })}
                    placeholder="+1 555-0100"
                  />
                </div>
                <Button onClick={handleAddClient} className="w-full" disabled={!newClient.name || !newClient.email}>
                  Add Client
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search clients..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredClients.map((client) => (
            <div key={client.id} className="glass rounded-xl p-5 hover-lift cursor-pointer group" onClick={() => setSelectedClient(client)}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-sm font-medium">
                    {client.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-medium group-hover:text-primary transition-colors">{client.name}</h4>
                    <p className="text-sm text-muted-foreground">{client.company}</p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={(e) => e.stopPropagation()}>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={(e) => { e.stopPropagation(); /* In real app, nav to invoice builder */ }}>
                      <FileText className="h-4 w-4 mr-2" /> Create Invoice
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={(e) => { e.stopPropagation(); /* In real app, open reminder dialog */ }}>
                      <Bell className="h-4 w-4 mr-2" /> Send Reminder
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={(e) => { e.stopPropagation(); setSelectedClient(client); }}>
                      <Edit className="h-4 w-4 mr-2" /> View Details
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={(e) => { e.stopPropagation(); handleDelete(client.id); }} className="text-destructive">
                      <Trash2 className="h-4 w-4 mr-2" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  {client.email}
                </div>
                {client.tags && client.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {client.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-[10px] px-1.5 py-0 h-5 font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-border/50">
                <div>
                  <p className="text-xs text-muted-foreground">Paid</p>
                  <p className="font-medium">${client.totalPaid.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Outstanding</p>
                  <p className="font-medium">${client.totalOutstanding.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Invoices</p>
                  <p className="font-medium">{client.invoiceCount}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Sheet open={!!selectedClient} onOpenChange={(open) => !open && setSelectedClient(null)}>
          <SheetContent className="w-full sm:max-w-[540px] overflow-y-auto">
            <SheetHeader className="mb-6">
              <SheetTitle>Client Details</SheetTitle>
              <SheetDescription>View and manage client information.</SheetDescription>
            </SheetHeader>

            {selectedClient && (
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-foreground/5 flex items-center justify-center text-2xl font-medium">
                    {selectedClient.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{selectedClient.name}</h3>
                    <p className="text-muted-foreground">{selectedClient.company}</p>
                    <div className="flex gap-2 mt-2">
                      {selectedClient.tags?.map(tag => <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>)}
                    </div>
                  </div>
                </div>

                <Tabs defaultValue="overview" className="space-y-4">
                  <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="history">History</TabsTrigger>
                    <TabsTrigger value="settings">Notes & Settings</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-muted/30">
                        <p className="text-sm text-muted-foreground mb-1">Total Paid</p>
                        <p className="text-2xl font-semibold">${selectedClient.totalPaid.toLocaleString()}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-muted/30">
                        <p className="text-sm text-muted-foreground mb-1">Outstanding</p>
                        <p className="text-2xl font-semibold text-destructive">${selectedClient.totalOutstanding.toLocaleString()}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="group flex items-center justify-between p-3 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors">
                        <div className="flex items-center gap-3">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{selectedClient.email}</span>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100"><Copy className="h-3 w-3" /></Button>
                      </div>
                      <div className="group flex items-center justify-between p-3 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors">
                        <div className="flex items-center gap-3">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{selectedClient.phone || "No phone added"}</span>
                        </div>
                      </div>
                      <div className="group flex items-center justify-between p-3 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors">
                        <div className="flex items-center gap-3">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{selectedClient.address || "No address added"}</span>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="history" className="space-y-4">
                    <h4 className="text-sm font-medium text-muted-foreground">Recent Invoices</h4>
                    <div className="space-y-2">
                      {mockInvoices.filter(inv => inv.client.id === selectedClient.id).length === 0 ? (
                        <p className="text-sm text-muted-foreground">No invoices found for this client.</p>
                      ) : (
                        mockInvoices.filter(inv => inv.client.id === selectedClient.id).map(inv => (
                          <div key={inv.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                            <div className="flex items-center gap-3">
                              <FileText className="h-4 w-4 text-muted-foreground" />
                              <div>
                                <p className="text-sm font-medium">{inv.number}</p>
                                <p className="text-xs text-muted-foreground">{new Date(inv.createdAt).toLocaleDateString()}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium">${inv.amount.toLocaleString()}</p>
                              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${inv.status === 'paid' ? 'bg-green-500/10 text-green-600' : 'bg-yellow-500/10 text-yellow-600'}`}>
                                {inv.status}
                              </span>
                            </div>
                          </div>
                        )))}
                    </div>

                    <h4 className="text-sm font-medium text-muted-foreground mt-6">Reminder History</h4>
                    <div className="pl-4 border-l-2 border-border/50 space-y-6">
                      {mockReminders.filter(r => r.client === selectedClient.name).length === 0 ? (
                        <p className="text-sm text-muted-foreground">No reminders sent.</p>
                      ) : (
                        mockReminders.filter(r => r.client === selectedClient.name).map(reminder => (
                          <div key={reminder.id} className="relative">
                            <div className={`absolute -left-[21px] top-1 w-3 h-3 rounded-full ${reminder.status === 'delivered' ? 'bg-green-500' : 'bg-border'}`} />
                            <p className="text-sm">Reminder {reminder.type === 'email' ? 'Email' : 'SMS'} {reminder.status}</p>
                            <p className="text-xs text-muted-foreground">{new Date(reminder.scheduledDate).toLocaleDateString()} • {reminder.tone} tone</p>
                          </div>
                        )))}
                    </div>
                  </TabsContent>

                  <TabsContent value="settings" className="space-y-6">
                    <div className="space-y-2">
                      <Label>Internal Notes</Label>
                      <Textarea
                        placeholder="Add notes about this client..."
                        className="min-h-[100px]"
                        defaultValue={selectedClient.notes}
                      />
                      <p className="text-xs text-muted-foreground">These notes are private and only visible to your team.</p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-medium text-sm">Tax & Currency</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Tax ID / VAT</Label>
                          <Input defaultValue={selectedClient.taxId} placeholder="Optional" />
                        </div>
                        <div className="space-y-2">
                          <Label>Currency</Label>
                          <Input defaultValue={selectedClient.currency || "USD"} />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="pt-4 flex gap-3">
                  <Button className="flex-1">Create Invoice</Button>
                  <Button variant="outline" className="flex-1">Send Statement</Button>
                </div>
              </div>
            )}
          </SheetContent>
        </Sheet>

        {filteredClients.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No clients found</p>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
