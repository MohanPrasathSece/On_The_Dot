import { useState } from "react";
import { Plus, Search, Calendar, Mail, MessageSquare, Clock, CheckCircle, XCircle, AlertCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AppLayout } from "@/components/app/AppLayout";
import { mockReminders, mockInvoices, Reminder } from "@/data/mockData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const aiMessages = {
  polite: "Hi [Client], I hope this message finds you well. This is a friendly reminder about invoice [Number] for $[Amount], due on [Date]. Please let me know if you have any questions. Thank you!",
  firm: "Dear [Client], This is a reminder that invoice [Number] for $[Amount] is due on [Date]. Please ensure timely payment to avoid any late fees. Contact us if you need assistance.",
  urgent: "IMPORTANT: Invoice [Number] for $[Amount] is now overdue. Immediate payment is required to avoid service interruption. Please process this payment today.",
};

export default function Reminders() {
  const [reminders, setReminders] = useState<Reminder[]>(mockReminders);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [autoReminders, setAutoReminders] = useState(true);
  const [newReminder, setNewReminder] = useState({
    invoiceId: "",
    type: "email" as "email" | "sms",
    scheduledDate: "",
    tone: "polite" as "polite" | "firm" | "urgent",
    message: "",
  });

  const handleAddReminder = () => {
    const invoice = mockInvoices.find(i => i.id === newReminder.invoiceId);
    if (!invoice) return;

    const reminder: Reminder = {
      id: `r${Date.now()}`,
      invoiceId: newReminder.invoiceId,
      invoiceNumber: invoice.number,
      client: invoice.client.name,
      type: newReminder.type,
      status: "scheduled",
      scheduledDate: newReminder.scheduledDate,
      tone: newReminder.tone,
      message: newReminder.message,
    };
    setReminders([reminder, ...reminders]);
    setNewReminder({ invoiceId: "", type: "email", scheduledDate: "", tone: "polite", message: "" });
    setIsAddOpen(false);
    toast({ title: "Reminder scheduled", description: `Reminder for ${invoice.number} scheduled.` });
  };

  const handleAIGenerate = (tone: "polite" | "firm" | "urgent") => {
    setNewReminder({ ...newReminder, tone, message: aiMessages[tone] });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered": return <CheckCircle className="h-4 w-4 text-foreground" />;
      case "sent": return <Clock className="h-4 w-4 text-muted-foreground" />;
      case "failed": return <XCircle className="h-4 w-4 text-destructive" />;
      default: return <AlertCircle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const scheduledReminders = reminders.filter(r => r.status === "scheduled");
  const sentReminders = reminders.filter(r => r.status !== "scheduled");

  return (
    <AppLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div>
            <h2 className="text-2xl font-display font-semibold">Reminders</h2>
            <p className="text-muted-foreground">Manage payment reminders for your invoices.</p>
          </div>
          <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Reminder
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>Schedule Reminder</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div>
                  <Label>Invoice</Label>
                  <Select value={newReminder.invoiceId} onValueChange={(v) => setNewReminder({ ...newReminder, invoiceId: v })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select invoice" />
                    </SelectTrigger>
                    <SelectContent>
                      {mockInvoices.filter(i => i.status !== "paid").map((inv) => (
                        <SelectItem key={inv.id} value={inv.id}>
                          {inv.number} - {inv.client.name} (${inv.amount})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Type</Label>
                    <Select value={newReminder.type} onValueChange={(v: "email" | "sms" | "whatsapp") => setNewReminder({ ...newReminder, type: v as any })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="sms">SMS</SelectItem>
                        <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center gap-2 pt-8">
                    <Switch id="ab-test" />
                    <Label htmlFor="ab-test">A/B Test Message</Label>
                  </div>


                  <div>
                    <Label>Schedule Date</Label>
                    <Input
                      type="date"
                      value={newReminder.scheduledDate}
                      onChange={(e) => setNewReminder({ ...newReminder, scheduledDate: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label>Message</Label>
                    <div className="flex gap-1">
                      <Button variant="outline" size="sm" onClick={() => handleAIGenerate('polite')}>
                        <Sparkles className="h-3 w-3 mr-1" /> Polite
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleAIGenerate('firm')}>
                        <Sparkles className="h-3 w-3 mr-1" /> Firm
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleAIGenerate('urgent')}>
                        <Sparkles className="h-3 w-3 mr-1" /> Urgent
                      </Button>
                    </div>
                  </div>
                  <Textarea
                    value={newReminder.message}
                    onChange={(e) => setNewReminder({ ...newReminder, message: e.target.value })}
                    placeholder="Enter reminder message..."
                    rows={4}
                  />
                </div>

                <Button
                  onClick={handleAddReminder}
                  className="w-full"
                  disabled={!newReminder.invoiceId || !newReminder.scheduledDate}
                >
                  Schedule Reminder
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Auto Reminders Toggle & Configuration */}
        <div className="border shadow-sm bg-card rounded-xl p-5 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                Smart Auto-Reminders
              </h3>
              <p className="text-sm text-muted-foreground">Automatically send reminders based on a set cadence.</p>
            </div>
            <Switch checked={autoReminders} onCheckedChange={setAutoReminders} />
          </div>

          {autoReminders && (
            <div className="border-t border-border/50 pt-4 animate-fade-in">
              <h4 className="text-sm font-medium mb-3">Reminder Cadence</h4>
              <div className="space-y-3">
                {[
                  { id: 1, when: "3 days before due date", channel: "Email", icon: Mail },
                  { id: 2, when: "On due date", channel: "Email & SMS", icon: MessageSquare },
                  { id: 3, when: "3 days after due date", channel: "Email", icon: Mail },
                  { id: 4, when: "7 days after due date", channel: "Email & SMS", icon: MessageSquare },
                  { id: 5, when: "14 days after due date", channel: "Email & SMS + Urgent Tone", icon: AlertCircle },
                ].map((rule) => (
                  <div key={rule.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-background">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{rule.when}</p>
                        <p className="text-xs text-muted-foreground">Via {rule.channel}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                ))}
                <Button variant="outline" className="w-full text-xs border-dashed">
                  <Plus className="h-3 w-3 mr-1" /> Add Cadence Rule
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Reminders Tabs */}
        <Tabs defaultValue="scheduled" className="space-y-4">
          <TabsList>
            <TabsTrigger value="scheduled">Scheduled ({scheduledReminders.length})</TabsTrigger>
            <TabsTrigger value="sent">Sent ({sentReminders.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="scheduled" className="space-y-4">
            {scheduledReminders.length === 0 ? (
              <div className="border shadow-sm bg-card rounded-xl p-12 text-center">
                <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No scheduled reminders</p>
              </div>
            ) : (
              scheduledReminders.map((reminder) => (
                <div key={reminder.id} className="border shadow-sm bg-card rounded-xl p-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-foreground/5">
                      {reminder.type === "email" ? <Mail className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
                    </div>
                    <div>
                      <p className="font-medium">{reminder.invoiceNumber} - {reminder.client}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(reminder.scheduledDate).toLocaleDateString('en-US', {
                          month: 'short', day: 'numeric', year: 'numeric'
                        })} • {reminder.tone} tone
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
              ))
            )}
          </TabsContent>

          <TabsContent value="sent" className="space-y-4">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="p-4 rounded-xl bg-muted/30 text-center">
                <p className="text-sm text-muted-foreground">Open Rate</p>
                <p className="text-2xl font-semibold">68%</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/30 text-center">
                <p className="text-sm text-muted-foreground">Click Rate</p>
                <p className="text-2xl font-semibold">24%</p>
              </div>
              <div className="p-4 rounded-xl bg-muted/30 text-center">
                <p className="text-sm text-muted-foreground">Delivered</p>
                <p className="text-2xl font-semibold">98%</p>
              </div>
            </div>
            {sentReminders.map((reminder) => (
              <div key={reminder.id} className="border shadow-sm bg-card rounded-xl p-5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-foreground/5">
                    {reminder.type === "email" ? <Mail className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
                  </div>
                  <div>
                    <p className="font-medium">{reminder.invoiceNumber} - {reminder.client}</p>
                    <p className="text-sm text-muted-foreground">
                      Sent on {new Date(reminder.scheduledDate).toLocaleDateString('en-US', {
                        month: 'short', day: 'numeric', year: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusIcon(reminder.status)}
                  <span className="text-sm capitalize">{reminder.status}</span>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
