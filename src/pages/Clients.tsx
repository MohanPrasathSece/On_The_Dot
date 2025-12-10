import { useState } from "react";
import {
  Plus, Search, MoreHorizontal, Mail, Phone, MapPin, Building,
  DollarSign, FileText, Clock, Star, MessageSquare, Send,
  Edit, Trash2, User, Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AppLayout } from "@/components/app/AppLayout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

// Dummy Client Data
const clients = [
  {
    id: 1,
    name: "Acme Corporation",
    email: "billing@acme.com",
    phone: "+1 (555) 123-4567",
    company: "Acme Corp",
    location: "San Francisco, CA",
    avatar: "A",
    totalInvoiced: "$45,200",
    outstandingBalance: "$5,200",
    invoiceCount: 12,
    lastInvoice: "2 days ago",
    status: "active",
    tags: ["Enterprise", "Priority"],
    notes: "Key client - always pays on time. Prefers monthly billing cycle.",
  },
  {
    id: 2,
    name: "TechStart Inc",
    email: "accounts@techstart.io",
    phone: "+1 (555) 234-5678",
    company: "TechStart",
    location: "Austin, TX",
    avatar: "T",
    totalInvoiced: "$28,900",
    outstandingBalance: "$3,800",
    invoiceCount: 8,
    lastInvoice: "1 week ago",
    status: "active",
    tags: ["Startup", "Monthly"],
    notes: "Growing startup, increased project scope recently.",
  },
  {
    id: 3,
    name: "Creative Studios",
    email: "finance@creative.com",
    phone: "+1 (555) 345-6789",
    company: "Creative Studios LLC",
    location: "Los Angeles, CA",
    avatar: "C",
    totalInvoiced: "$15,600",
    outstandingBalance: "$2,100",
    invoiceCount: 6,
    lastInvoice: "3 days ago",
    status: "active",
    tags: ["Creative", "Quarterly"],
    notes: "Design agency, prefers detailed line items.",
  },
  {
    id: 4,
    name: "Digital Dynamics",
    email: "payments@digitald.com",
    phone: "+1 (555) 456-7890",
    company: "Digital Dynamics",
    location: "New York, NY",
    avatar: "D",
    totalInvoiced: "$52,300",
    outstandingBalance: "$0",
    invoiceCount: 15,
    lastInvoice: "1 month ago",
    status: "active",
    tags: ["Enterprise", "VIP"],
    notes: "Excellent payment history, largest client.",
  },
  {
    id: 5,
    name: "Startup Labs",
    email: "admin@startuplabs.co",
    phone: "+1 (555) 567-8901",
    company: "Startup Labs",
    location: "Seattle, WA",
    avatar: "S",
    totalInvoiced: "$12,400",
    outstandingBalance: "$3,500",
    invoiceCount: 4,
    lastInvoice: "Overdue",
    status: "overdue",
    tags: ["Startup"],
    notes: "Payment delays recently, follow up needed.",
  },
];

const recentMessages = {
  1: [
    { type: "sent", message: "Invoice #1250 has been sent", time: "2 days ago" },
    { type: "received", message: "Payment processed successfully", time: "1 day ago" },
  ],
  2: [
    { type: "sent", message: "Reminder: Invoice #1249 due soon", time: "5 hours ago" },
  ],
};

export default function Clients() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClient, setSelectedClient] = useState<typeof clients[0] | null>(null);
  const [messageInput, setMessageInput] = useState("");

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Clients</h1>
            <p className="text-muted-foreground">
              Manage your client relationships and communication
            </p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Plus className="h-5 w-5 mr-2" />
                Add Client
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Add New Client</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <Input placeholder="Client Name" />
                <Input placeholder="Email Address" type="email" />
                <Input placeholder="Phone Number" />
                <Input placeholder="Company Name" />
                <Input placeholder="Location" />
                <Textarea placeholder="Notes" rows={3} />
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Add Client
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-card rounded-xl border border-border/50 p-4">
            <p className="text-sm text-muted-foreground mb-1">Total Clients</p>
            <p className="text-2xl font-bold">{clients.length}</p>
          </div>
          <div className="bg-white dark:bg-card rounded-xl border border-border/50 p-4">
            <p className="text-sm text-muted-foreground mb-1">Active</p>
            <p className="text-2xl font-bold text-green-600">
              {clients.filter(c => c.status === "active").length}
            </p>
          </div>
          <div className="bg-white dark:bg-card rounded-xl border border-border/50 p-4">
            <p className="text-sm text-muted-foreground mb-1">Total Revenue</p>
            <p className="text-2xl font-bold">$154,400</p>
          </div>
          <div className="bg-white dark:bg-card rounded-xl border border-border/50 p-4">
            <p className="text-sm text-muted-foreground mb-1">Outstanding</p>
            <p className="text-2xl font-bold text-amber-600">$14,600</p>
          </div>
        </div>

        {/* Main Content - Slack DM Style */}
        <div className="grid lg:grid-cols-3 gap-0 h-[calc(100vh-180px)] border rounded-lg overflow-hidden bg-background shadow-sm">
          {/* Client List - Left Sidebar */}
          <div className="lg:col-span-1 border-r bg-muted/10 flex flex-col">
            {/* Search */}
            <div className="p-3 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Find a conversation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 bg-background border-transparent focus:border-border transition-colors h-9"
                />
              </div>
            </div>

            {/* Client List */}
            <div className="flex-1 overflow-y-auto">
              {filteredClients.map((client) => (
                <div
                  key={client.id}
                  onClick={() => setSelectedClient(client)}
                  className={cn(
                    "px-4 py-3 cursor-pointer hover:bg-muted/50 transition-colors flex items-center gap-3",
                    selectedClient?.id === client.id && "bg-primary/10 text-foreground hover:bg-primary/20"
                  )}
                >
                  <div className="relative">
                    <div className={cn(
                      "w-9 h-9 rounded bg-muted flex items-center justify-center font-bold text-sm flex-shrink-0",
                      selectedClient?.id === client.id ? "bg-primary/20 text-primary" : "bg-gray-200 text-gray-600"
                    )}>
                      {client.avatar}
                    </div>
                    {client.status === "active" && (
                      <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-background"></span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className={cn("font-medium text-sm truncate", selectedClient?.id === client.id ? "text-foreground font-semibold" : "text-foreground")}>
                        {client.name}
                      </h4>
                      <span className={cn("text-[10px]", selectedClient?.id === client.id ? "text-muted-foreground" : "text-muted-foreground")}>
                        {client.lastInvoice}
                      </span>
                    </div>
                    <p className={cn("text-xs truncate", selectedClient?.id === client.id ? "text-muted-foreground" : "text-muted-foreground")}>
                      {client.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area - Right Panel */}
          <div className="lg:col-span-2 flex flex-col bg-background">
            {selectedClient ? (
              <>
                {/* Chat Header */}
                <div className="h-14 border-b flex items-center justify-between px-4 flex-shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="font-bold cursor-pointer hover:underline flex items-center gap-1">
                      {selectedClient.name}
                      <span className="w-2 h-2 rounded-full bg-green-500 inline-block ml-1"></span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Button variant="ghost" size="icon" className="h-8 w-8"><Phone className="w-4 h-4" /></Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="w-4 h-4" /></Button>
                  </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {/* Client Profile Summary at top of chat */}
                  <div className="pb-8 mb-4 border-b border-border/40">
                    <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center text-2xl font-bold mb-3">
                      {selectedClient.avatar}
                    </div>
                    <h2 className="text-xl font-bold">This is the very beginning of your direct message history with {selectedClient.name}.</h2>
                    <p className="text-muted-foreground text-sm mt-1">
                      {selectedClient.company} • {selectedClient.location} • {selectedClient.email}
                    </p>
                    <div className="flex gap-2 mt-3">
                      <div className="px-2 py-1 bg-muted rounded text-xs">Total Invoiced: <span className="font-semibold">{selectedClient.totalInvoiced}</span></div>
                      <div className="px-2 py-1 bg-muted rounded text-xs">Outstanding: <span className="font-semibold">{selectedClient.outstandingBalance}</span></div>
                    </div>
                  </div>

                  {/* Messages */}
                  {recentMessages[selectedClient.id as keyof typeof recentMessages]?.map((msg, i) => (
                    <div key={i} className="flex gap-3 group hover:bg-muted/20 -mx-4 px-4 py-1">
                      {msg.type === "received" ? (
                        <div className="w-9 h-9 rounded bg-primary flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">
                          {selectedClient.avatar}
                        </div>
                      ) : (
                        <div className="w-9 h-9 rounded bg-blue-600 flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">
                          You
                        </div>
                      )}
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-bold text-sm">
                            {msg.type === "received" ? selectedClient.name : "You"}
                          </span>
                          <span className="text-xs text-muted-foreground">{msg.time}</span>
                        </div>
                        <p className="text-[15px] leading-relaxed text-foreground/90">{msg.message}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 pt-0">
                  <div className="border rounded-md shadow-sm overflow-hidden focus-within:ring-1 focus-within:ring-ring focus-within:border-ring transition-all">
                    <div className="bg-muted/30 flex items-center gap-1 border-b px-2 py-1">
                      <Button variant="ghost" size="icon" className="h-6 w-6"><span className="font-bold text-xs">B</span></Button>
                      <Button variant="ghost" size="icon" className="h-6 w-6"><span className="italic text-xs">I</span></Button>
                      <Button variant="ghost" size="icon" className="h-6 w-6"><span className="line-through text-xs">S</span></Button>
                    </div>
                    <Input
                      placeholder={`Message ${selectedClient.name}...`}
                      className="border-0 focus-visible:ring-0 rounded-none bg-background px-3 py-3 h-auto min-h-[44px]"
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                    />
                    <div className="flex justify-between items-center p-2 bg-background">
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" className="h-7 w-7"><Plus className="w-4 h-4" /></Button>
                      </div>
                      <Button size="sm" className="h-7 bg-success hover:bg-success/90 text-white">
                        <Send className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-muted-foreground p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-muted mb-4 flex items-center justify-center">
                  <MessageSquare className="w-8 h-8 opacity-20" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Select a conversation</h3>
                <p>Choose a client from the left to start chatting or view details.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
