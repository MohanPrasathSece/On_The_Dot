import { useState } from "react";
import {
  Plus, Search, MoreHorizontal, Phone,
  MessageSquare, Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AppLayout } from "@/components/app/AppLayout";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useAppData, Client } from "@/hooks/useAppData";

export default function Clients() {
  const { clients, addClient } = useAppData();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [messageInput, setMessageInput] = useState("");

  // New Client Form State
  const [newClientName, setNewClientName] = useState("");
  const [newClientEmail, setNewClientEmail] = useState("");
  const [newClientCompany, setNewClientCompany] = useState("");
  const [newClientPhone, setNewClientPhone] = useState("");
  const [newClientNotes, setNewClientNotes] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddClient = () => {
    addClient({
      name: newClientName,
      email: newClientEmail,
      company: newClientCompany,
      phone: newClientPhone,
      location: 'Remote',
      status: 'active',
      tags: [],
      notes: newClientNotes
    });
    setNewClientName("");
    setNewClientEmail("");
    setNewClientCompany("");
    setNewClientPhone("");
    setNewClientNotes("");
    setIsDialogOpen(false);
  };

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
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
                <Input
                  placeholder="Client Name"
                  value={newClientName}
                  onChange={(e) => setNewClientName(e.target.value)}
                />
                <Input
                  placeholder="Email Address"
                  type="email"
                  value={newClientEmail}
                  onChange={(e) => setNewClientEmail(e.target.value)}
                />
                <Input
                  placeholder="Phone Number"
                  value={newClientPhone}
                  onChange={(e) => setNewClientPhone(e.target.value)}
                />
                <Input
                  placeholder="Company Name"
                  value={newClientCompany}
                  onChange={(e) => setNewClientCompany(e.target.value)}
                />
                <Textarea
                  placeholder="Notes"
                  rows={3}
                  value={newClientNotes}
                  onChange={(e) => setNewClientNotes(e.target.value)}
                />
                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={handleAddClient}
                  disabled={!newClientName || !newClientEmail}
                >
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
            <p className="text-2xl font-bold">$0</p>
          </div>
          <div className="bg-white dark:bg-card rounded-xl border border-border/50 p-4">
            <p className="text-sm text-muted-foreground mb-1">Outstanding</p>
            <p className="text-2xl font-bold text-amber-600">$0</p>
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
              {filteredClients.length === 0 ? (
                <div className="p-4 text-center text-muted-foreground text-sm">
                  No clients found. Add one to get started.
                </div>
              ) : (
                filteredClients.map((client) => (
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
                ))
              )}
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
                    <h2 className="text-xl font-bold">This is the beginning of your history with {selectedClient.name}.</h2>
                    <p className="text-muted-foreground text-sm mt-1">
                      {selectedClient.company} • {selectedClient.location} • {selectedClient.email}
                    </p>
                    <div className="flex gap-2 mt-3">
                      <div className="px-2 py-1 bg-muted rounded text-xs">Total Invoiced: <span className="font-semibold">{selectedClient.totalInvoiced}</span></div>
                    </div>
                  </div>

                  <div className="flex justify-center my-4">
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">No messages yet</span>
                  </div>
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
                      <Button size="sm" className="h-7 bg-green-600 hover:bg-green-700 text-white">
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
