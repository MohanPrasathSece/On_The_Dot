import { useState } from "react";
import { MessageCircle, Book, Ticket, Lightbulb, CheckCircle, Clock, Search, ExternalLink, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AppLayout } from "@/components/app/AppLayout";
import { toast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const helpArticles = [
  { id: 1, title: "Getting Started with Flowryte", category: "Basics" },
  { id: 2, title: "How to Create Your First Invoice", category: "Invoices" },
  { id: 3, title: "Setting Up Payment Integrations", category: "Payments" },
  { id: 4, title: "Understanding Smart Reminders", category: "Reminders" },
  { id: 5, title: "Managing Your Team", category: "Team" },
  { id: 6, title: "Exporting Reports for Tax Season", category: "Reports" },
];

const tickets = [
  { id: "T-001", subject: "Invoice PDF not generating", status: "open", created: "Dec 8, 2024" },
  { id: "T-002", subject: "Stripe integration question", status: "resolved", created: "Dec 5, 2024" },
];

export default function Support() {
  const [searchQuery, setSearchQuery] = useState("");
  const [newTicket, setNewTicket] = useState({ subject: "", category: "", description: "" });
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { role: "bot", message: "Hi! I'm here to help. What can I assist you with today?" }
  ]);

  const filteredArticles = helpArticles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmitTicket = () => {
    toast({ title: "Ticket submitted", description: "We'll get back to you within 24 hours." });
    setNewTicket({ subject: "", category: "", description: "" });
  };

  const handleSendChat = () => {
    if (!chatMessage.trim()) return;
    setChatHistory([
      ...chatHistory,
      { role: "user", message: chatMessage },
      { role: "bot", message: "Thanks for your message! A support agent will respond shortly. In the meantime, you might find our help articles useful." }
    ]);
    setChatMessage("");
  };

  return (
    <AppLayout>
      <div className="space-y-6 animate-fade-in max-w-4xl">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-display font-semibold">Support</h2>
          <p className="text-muted-foreground">Get help and find answers.</p>
        </div>

        <Tabs defaultValue="help" className="space-y-6">
          <TabsList className="flex-wrap h-auto gap-2">
            <TabsTrigger value="help" className="gap-2">
              <Book className="h-4 w-4" /> Help Center
            </TabsTrigger>
            <TabsTrigger value="chat" className="gap-2">
              <MessageCircle className="h-4 w-4" /> Live Chat
            </TabsTrigger>
            <TabsTrigger value="tickets" className="gap-2">
              <Ticket className="h-4 w-4" /> Tickets
            </TabsTrigger>
            <TabsTrigger value="feature" className="gap-2">
              <Lightbulb className="h-4 w-4" /> Feature Request
            </TabsTrigger>
          </TabsList>

          {/* Help Center */}
          <TabsContent value="help" className="space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="border shadow-sm bg-card rounded-xl p-6">
              <h3 className="font-semibold mb-4">Popular Articles</h3>
              <div className="space-y-3">
                {filteredArticles.map((article) => (
                  <a
                    key={article.id}
                    href="#"
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div>
                      <p className="font-medium">{article.title}</p>
                      <p className="text-sm text-muted-foreground">{article.category}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </a>
                ))}
              </div>
            </div>

            <div className="border shadow-sm bg-card rounded-xl p-6">
              <h3 className="font-semibold mb-4">Frequently Asked Questions</h3>
              <Accordion type="single" collapsible className="space-y-2">
                <AccordionItem value="1" className="border-0 bg-muted/30 rounded-lg px-4">
                  <AccordionTrigger>How do I send an invoice?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Go to Invoices, click "New Invoice", fill in the details, and click "Send". The invoice will be emailed to your client immediately.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="2" className="border-0 bg-muted/30 rounded-lg px-4">
                  <AccordionTrigger>How do automatic reminders work?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Enable Smart Auto-Reminders in the Reminders section. The system will automatically send reminders for overdue invoices based on your configured schedule.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="3" className="border-0 bg-muted/30 rounded-lg px-4">
                  <AccordionTrigger>Can I customize my invoice template?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes! Go to Settings → Company to upload your logo and set brand colors. These will appear on all your invoices automatically.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>

          {/* Live Chat */}
          <TabsContent value="chat">
            <div className="border shadow-sm bg-card rounded-xl h-[500px] flex flex-col">
              <div className="p-4 border-b border-border/50">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-sm font-medium">Support Team</span>
                  <span className="text-xs text-muted-foreground">• Online</span>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {chatHistory.map((chat, i) => (
                  <div key={i} className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-xl ${chat.role === 'user'
                      ? 'bg-foreground text-background'
                      : 'bg-muted'
                      }`}>
                      <p className="text-sm">{chat.message}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-border/50">
                <div className="flex gap-2">
                  <Input
                    placeholder="Type your message..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendChat()}
                  />
                  <Button onClick={handleSendChat}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Tickets */}
          <TabsContent value="tickets" className="space-y-6">
            <div className="border shadow-sm bg-card rounded-xl p-6 space-y-4">
              <h3 className="font-semibold">Submit a Ticket</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Subject</Label>
                  <Input
                    value={newTicket.subject}
                    onChange={(e) => setNewTicket({ ...newTicket, subject: e.target.value })}
                    placeholder="Brief description of your issue"
                  />
                </div>
                <div>
                  <Label>Category</Label>
                  <Select value={newTicket.category} onValueChange={(v) => setNewTicket({ ...newTicket, category: v })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="billing">Billing</SelectItem>
                      <SelectItem value="technical">Technical Issue</SelectItem>
                      <SelectItem value="account">Account</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-2">
                  <Label>Description</Label>
                  <Textarea
                    value={newTicket.description}
                    onChange={(e) => setNewTicket({ ...newTicket, description: e.target.value })}
                    placeholder="Describe your issue in detail..."
                    rows={4}
                  />
                </div>
              </div>
              <Button onClick={handleSubmitTicket} disabled={!newTicket.subject || !newTicket.category}>
                Submit Ticket
              </Button>
            </div>

            <div className="border shadow-sm bg-card rounded-xl p-6">
              <h3 className="font-semibold mb-4">Your Tickets</h3>
              <div className="space-y-3">
                {tickets.map((ticket) => (
                  <div key={ticket.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                    <div className="flex items-center gap-3">
                      {ticket.status === 'resolved'
                        ? <CheckCircle className="h-5 w-5 text-foreground" />
                        : <Clock className="h-5 w-5 text-muted-foreground" />
                      }
                      <div>
                        <p className="font-medium">{ticket.subject}</p>
                        <p className="text-sm text-muted-foreground">{ticket.id} • {ticket.created}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${ticket.status === 'resolved' ? 'bg-foreground/10 text-foreground' : 'bg-muted text-muted-foreground'
                      }`}>
                      {ticket.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Feature Request */}
          <TabsContent value="feature">
            <div className="border shadow-sm bg-card rounded-xl p-6 space-y-4">
              <div className="text-center py-8">
                <Lightbulb className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="font-semibold text-lg mb-2">Have an idea?</h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-6">
                  We'd love to hear your suggestions for improving Flowryte. Your feedback helps shape our roadmap.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label>Feature Title</Label>
                  <Input placeholder="What would you like to see?" />
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea
                    placeholder="Describe the feature and how it would help you..."
                    rows={4}
                  />
                </div>
                <Button onClick={() => toast({ title: "Thanks!", description: "Your feature request has been submitted." })}>
                  Submit Request
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Status */}
        <div className="border shadow-sm bg-card rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-success" />
              <div>
                <p className="font-medium">All Systems Operational</p>
                <p className="text-sm text-muted-foreground">Last checked 2 minutes ago</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <a href="#">View Status Page</a>
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
