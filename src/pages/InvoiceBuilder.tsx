import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Trash2, Sparkles, Save, Send, FileDown, ArrowLeft, Upload, Palette, Type, MoveUp, MoveDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AppLayout } from "@/components/app/AppLayout";
import { useAppData } from "@/hooks/useAppData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";

interface LineItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
}

const aiSuggestions = {
  polite: "Thank you for your business. Please find attached the invoice for the services rendered. We appreciate your prompt payment.",
  firm: "Please review the attached invoice for services completed. Payment is due by the date specified. Contact us with any questions.",
  urgent: "URGENT: Invoice attached requires immediate attention. Payment is overdue. Please process payment immediately to avoid service interruption.",
};

export default function InvoiceBuilder() {
  const { clients, addInvoice } = useAppData();
  const navigate = useNavigate();
  const [selectedClient, setSelectedClient] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("INV-00" + Math.floor(Math.random() * 100));
  const [dueDate, setDueDate] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [taxRate, setTaxRate] = useState(0);
  const [isRecurring, setIsRecurring] = useState(false);
  const [recurringInterval, setRecurringInterval] = useState("monthly");
  const [language, setLanguage] = useState("English");
  const [lateFee, setLateFee] = useState(0);
  const [notes, setNotes] = useState("");
  const [items, setItems] = useState<LineItem[]>([
    { id: "1", description: "", quantity: 1, rate: 0 }
  ]);
  const [brandColor, setBrandColor] = useState("#000000");
  const [font, setFont] = useState("Inter");

  const addItem = () => {
    setItems([...items, { id: Date.now().toString(), description: "", quantity: 1, rate: 0 }]);
  };

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const updateItem = (id: string, field: keyof LineItem, value: string | number) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const moveItem = (index: number, direction: 'up' | 'down') => {
    if ((direction === 'up' && index === 0) || (direction === 'down' && index === items.length - 1)) return;
    const newItems = [...items];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    [newItems[index], newItems[targetIndex]] = [newItems[targetIndex], newItems[index]];
    setItems(newItems);
  };

  const subtotal = items.reduce((sum, item) => sum + (item.quantity * item.rate), 0);
  const tax = subtotal * (taxRate / 100);
  const total = subtotal + tax + lateFee;

  const handleAISuggest = (tone: keyof typeof aiSuggestions) => {
    setNotes(aiSuggestions[tone]);
    toast({ title: "AI Suggestion Applied", description: `${tone} tone message generated.` });
  };

  const saveInvoice = (status: 'draft' | 'pending') => {
    if (!selectedClient) {
      toast({ title: "Error", description: "Please select a client", variant: "destructive" });
      return;
    }

    const client = clients.find(c => c.id === selectedClient);
    if (!client) return;

    addInvoice({
      clientId: client.id,
      clientName: client.name,
      clientEmail: client.email,
      amount: `$${total.toFixed(2)}`,
      status: status,
      dueDate: dueDate || new Date().toISOString().split('T')[0],
      issueDate: new Date().toISOString().split('T')[0],
      items: items.length,
    });

    toast({ title: status === 'draft' ? "Invoice Saved" : "Invoice Sent", description: `Invoice ${invoiceNumber} created successfully.` });
    navigate("/invoices");
  };

  return (
    <AppLayout>
      <div className="space-y-6 animate-fade-in max-w-4xl">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/invoices")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex-1">
            <h2 className="text-2xl font-display font-semibold">Create Invoice</h2>
            <p className="text-muted-foreground">Build and send professional invoices.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => saveInvoice('draft')}>
              <Save className="h-4 w-4 mr-2" />
              Save Draft
            </Button>
            <Button onClick={() => saveInvoice('pending')} disabled={!selectedClient}>
              <Send className="h-4 w-4 mr-2" />
              Send Invoice
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="content" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="content">Invoice Content</TabsTrigger>
                <TabsTrigger value="design">Design & Branding</TabsTrigger>
              </TabsList>

              <TabsContent value="content" className="space-y-6">
                {/* Client & Basic Info */}
                <div className="border shadow-sm bg-card rounded-xl p-6 space-y-4">
                  <h3 className="font-semibold">Invoice Details</h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <Label>Client</Label>
                      <Select value={selectedClient} onValueChange={setSelectedClient}>
                        <SelectTrigger>
                          <SelectValue placeholder={clients.length === 0 ? "No clients found" : "Select a client"} />
                        </SelectTrigger>
                        <SelectContent>
                          {clients.map((client) => (
                            <SelectItem key={client.id} value={client.id}>
                              {client.name} - {client.company}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {clients.length === 0 && (
                        <p className="text-xs text-muted-foreground mt-1">
                          No clients available. <Button variant="link" className="p-0 h-auto text-xs" onClick={() => navigate('/clients')}>Add a client first.</Button>
                        </p>
                      )}
                    </div>

                    <div>
                      <Label>Invoice Number</Label>
                      <Input value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} />
                    </div>

                    <div>
                      <Label>Due Date</Label>
                      <Input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                    </div>

                    <div>
                      <Label>Currency</Label>
                      <Select value={currency} onValueChange={setCurrency}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="USD">USD ($)</SelectItem>
                          <SelectItem value="EUR">EUR (€)</SelectItem>
                          <SelectItem value="GBP">GBP (£)</SelectItem>
                          <SelectItem value="INR">INR (₹)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Tax Rate (%)</Label>
                      <Input
                        type="number"
                        value={taxRate}
                        onChange={(e) => setTaxRate(Number(e.target.value))}
                        min="0"
                        max="100"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2">
                      <Switch checked={isRecurring} onCheckedChange={setIsRecurring} />
                      <Label>Recurring Invoice</Label>
                    </div>
                    {isRecurring && (
                      <Select value={recurringInterval} onValueChange={setRecurringInterval}>
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="quarterly">Quarterly</SelectItem>
                          <SelectItem value="yearly">Yearly</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <Label>Language</Label>
                    <Select value={language} onValueChange={setLanguage}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="English">English</SelectItem>
                        <SelectItem value="Spanish">Spanish</SelectItem>
                        <SelectItem value="French">French</SelectItem>
                        <SelectItem value="German">German</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center gap-2">
                    <Label>Late Fee</Label>
                    <div className="relative w-32">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                      <Input
                        type="number"
                        value={lateFee}
                        onChange={(e) => setLateFee(Number(e.target.value))}
                        className="pl-8"
                      />
                    </div>
                  </div>
                </div>


                {/* Line Items */}
                <div className="border shadow-sm bg-card rounded-xl p-6 space-y-4">
                  <h3 className="font-semibold">Line Items</h3>

                  <div className="space-y-3">
                    {items.map((item, index) => (
                      <div key={item.id} className="grid grid-cols-2 md:grid-cols-12 gap-3 items-end group p-4 border border-border/50 rounded-lg md:border-none md:p-0 mb-4 md:mb-0 bg-muted/10 md:bg-transparent">
                        <div className="col-span-2 md:col-span-1 flex flex-row md:flex-col gap-1 items-center justify-end md:justify-center pb-2">
                          <Button
                            variant="ghost" size="icon" className="h-4 w-4 text-muted-foreground hover:text-foreground"
                            onClick={() => moveItem(index, 'up')}
                            disabled={index === 0}
                          >
                            <MoveUp className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost" size="icon" className="h-4 w-4 text-muted-foreground hover:text-foreground"
                            onClick={() => moveItem(index, 'down')}
                            disabled={index === items.length - 1}
                          >
                            <MoveDown className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="col-span-2 md:col-span-5">
                          <Label className="text-xs md:hidden mb-1.5 block">Description</Label>
                          {index === 0 && <Label className="text-xs hidden md:block">Description</Label>}
                          <Input
                            placeholder="Service description"
                            value={item.description}
                            onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                          />
                        </div>
                        <div className="col-span-1 md:col-span-2">
                          <Label className="text-xs md:hidden mb-1.5 block">Qty</Label>
                          {index === 0 && <Label className="text-xs hidden md:block">Qty</Label>}
                          <Input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateItem(item.id, 'quantity', Number(e.target.value))}
                            min="1"
                          />
                        </div>
                        <div className="col-span-1 md:col-span-3">
                          <Label className="text-xs md:hidden mb-1.5 block">Rate</Label>
                          {index === 0 && <Label className="text-xs hidden md:block">Rate</Label>}
                          <Input
                            type="number"
                            value={item.rate}
                            onChange={(e) => updateItem(item.id, 'rate', Number(e.target.value))}
                            min="0"
                          />
                        </div>
                        <div className="col-span-2 md:col-span-1 pb-1 flex justify-end md:block">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                            disabled={items.length === 1}
                            className="text-destructive hover:bg-destructive/10"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" onClick={addItem} className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Line Item
                  </Button>
                </div>

                {/* Notes with AI */}
                <div className="border shadow-sm bg-card rounded-xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Notes & Terms</h3>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" onClick={() => handleAISuggest('polite')}>
                        <Sparkles className="h-3 w-3 mr-1" /> Polite
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleAISuggest('firm')}>
                        <Sparkles className="h-3 w-3 mr-1" /> Firm
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleAISuggest('urgent')}>
                        <Sparkles className="h-3 w-3 mr-1" /> Urgent
                      </Button>
                    </div>
                  </div>
                  <Textarea
                    placeholder="Add notes or payment terms..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={4}
                  />
                </div>
              </TabsContent>

              <TabsContent value="design" className="space-y-6">
                <div className="border shadow-sm bg-card rounded-xl p-6 space-y-6">
                  <div>
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Upload className="h-4 w-4" /> Company Logo
                    </h3>
                    <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                        <Upload className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <p className="font-medium">Click to upload logo</p>
                      <p className="text-sm text-muted-foreground mt-1">PNG, JPG up to 5MB</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Palette className="h-4 w-4" /> Brand Color
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {['#000000', '#2563eb', '#7c3aed', '#db2777', '#dc2626', '#d97706', '#059669'].map(color => (
                        <button
                          key={color}
                          className={`w-10 h-10 rounded-full border-2 transition-all ${brandColor === color ? 'border-foreground scale-110' : 'border-transparent'}`}
                          style={{ backgroundColor: color }}
                          onClick={() => setBrandColor(color)}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Type className="h-4 w-4" /> Typography
                    </h3>
                    <Select value={font} onValueChange={setFont}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select font" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Inter">Inter (Sans-serif)</SelectItem>
                        <SelectItem value="Spectral">Spectral (Serif)</SelectItem>
                        <SelectItem value="Roboto">Roboto</SelectItem>
                        <SelectItem value="Mono">Monospace</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Preview & Summary */}
          <div className="space-y-6">
            <div className="border shadow-sm bg-card rounded-xl p-6 space-y-4 sticky top-24 transition-all duration-300" style={{ borderTopColor: brandColor, borderTopWidth: 4, fontFamily: font === 'Mono' ? 'monospace' : font === 'Spectral' ? 'serif' : 'sans-serif' }}>
              <h3 className="font-semibold" style={{ color: brandColor }}>Success Summary</h3>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax ({taxRate}%)</span>
                  <span>${tax.toLocaleString()}</span>
                </div>
              </div>
              {lateFee > 0 && (
                <div className="flex justify-between text-muted-foreground">
                  <span>Late Fee</span>
                  <span>${lateFee.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between pt-2 border-t border-border/50 text-lg font-semibold">
                <span>Total</span>
                <span>${(total + lateFee).toLocaleString()}</span>
              </div>
            </div>

            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full">
                <FileDown className="h-4 w-4 mr-2" />
                Export as PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

    </AppLayout >
  );
}
