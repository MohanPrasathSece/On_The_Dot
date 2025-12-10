import { useState } from "react";
import { User, Building, FileText, Bell, CreditCard, Palette, Upload, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AppLayout } from "@/components/app/AppLayout";
import { Switch } from "@/components/ui/switch";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Settings() {
  const { user } = useAuth();
  const [profile, setProfile] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "+1 555-0100",
  });
  const [company, setCompany] = useState({
    name: user?.company || "",
    address: "123 Business St, Suite 100\nNew York, NY 10001",
    website: "https://morgandesign.com",
    taxId: "XX-XXXXXXX",
  });
  const [invoiceDefaults, setInvoiceDefaults] = useState({
    currency: "USD",
    dueDays: "30",
    taxRate: "0",
    notes: "Thank you for your business!",
  });
  const [notifications, setNotifications] = useState({
    invoicePaid: true,
    invoiceViewed: true,
    reminderSent: true,
    weeklyReport: false,
    marketingEmails: false,
  });

  const handleSave = (section: string) => {
    toast({ title: "Settings saved", description: `${section} settings have been updated.` });
  };

  return (
    <AppLayout>
      <div className="space-y-6 animate-fade-in max-w-4xl">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-display font-semibold">Settings</h2>
          <p className="text-muted-foreground">Manage your account and preferences.</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="flex-wrap h-auto gap-2">
            <TabsTrigger value="profile" className="gap-2">
              <User className="h-4 w-4" /> Profile
            </TabsTrigger>
            <TabsTrigger value="company" className="gap-2">
              <Building className="h-4 w-4" /> Company
            </TabsTrigger>
            <TabsTrigger value="invoices" className="gap-2">
              <FileText className="h-4 w-4" /> Invoices
            </TabsTrigger>
            <TabsTrigger value="notifications" className="gap-2">
              <Bell className="h-4 w-4" /> Notifications
            </TabsTrigger>
            <TabsTrigger value="billing" className="gap-2">
              <CreditCard className="h-4 w-4" /> Billing
            </TabsTrigger>
            <TabsTrigger value="localization" className="gap-2">
              <Globe className="h-4 w-4" /> Localization
            </TabsTrigger>
          </TabsList>

          {/* Profile Settings */}
          <TabsContent value="profile">
            <div className="border shadow-sm bg-card rounded-xl p-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-foreground/10 flex items-center justify-center text-2xl font-medium">
                  {profile.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Photo
                  </Button>
                  <p className="text-xs text-muted-foreground mt-1">JPG, PNG up to 2MB</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Full Name</Label>
                  <Input
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  />
                </div>
                <div>
                  <Label>Phone</Label>
                  <Input
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  />
                </div>
              </div>

              <Button onClick={() => handleSave("Profile")}>Save Changes</Button>
            </div>
          </TabsContent>

          {/* Company Settings */}
          <TabsContent value="company">
            <div className="border shadow-sm bg-card rounded-xl p-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-xl bg-foreground/10 flex items-center justify-center border-2 border-dashed border-border">
                  <Palette className="h-8 w-8 text-muted-foreground" />
                </div>
                <div>
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Logo
                  </Button>
                  <p className="text-xs text-muted-foreground mt-1">Used on invoices</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Company Name</Label>
                  <Input
                    value={company.name}
                    onChange={(e) => setCompany({ ...company, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label>Website</Label>
                  <Input
                    value={company.website}
                    onChange={(e) => setCompany({ ...company, website: e.target.value })}
                  />
                </div>
                <div className="md:col-span-2">
                  <Label>Address</Label>
                  <Textarea
                    value={company.address}
                    onChange={(e) => setCompany({ ...company, address: e.target.value })}
                    rows={2}
                  />
                </div>
                <div>
                  <Label>Tax ID</Label>
                  <Input
                    value={company.taxId}
                    onChange={(e) => setCompany({ ...company, taxId: e.target.value })}
                  />
                </div>
              </div>

              <Button onClick={() => handleSave("Company")}>Save Changes</Button>
            </div>
          </TabsContent>

          {/* Invoice Defaults */}
          <TabsContent value="invoices">
            <div className="border shadow-sm bg-card rounded-xl p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Default Currency</Label>
                  <Select value={invoiceDefaults.currency} onValueChange={(v) => setInvoiceDefaults({ ...invoiceDefaults, currency: v })}>
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
                  <Label>Payment Due (days)</Label>
                  <Select value={invoiceDefaults.dueDays} onValueChange={(v) => setInvoiceDefaults({ ...invoiceDefaults, dueDays: v })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7">7 days</SelectItem>
                      <SelectItem value="14">14 days</SelectItem>
                      <SelectItem value="30">30 days</SelectItem>
                      <SelectItem value="60">60 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Default Tax Rate (%)</Label>
                  <Input
                    type="number"
                    value={invoiceDefaults.taxRate}
                    onChange={(e) => setInvoiceDefaults({ ...invoiceDefaults, taxRate: e.target.value })}
                  />
                </div>
                <div className="md:col-span-2">
                  <Label>Default Notes</Label>
                  <Textarea
                    value={invoiceDefaults.notes}
                    onChange={(e) => setInvoiceDefaults({ ...invoiceDefaults, notes: e.target.value })}
                    rows={3}
                  />
                </div>
              </div>

              <Button onClick={() => handleSave("Invoice defaults")}>Save Changes</Button>
            </div>
          </TabsContent>

          {/* Notifications */}
          <TabsContent value="notifications">
            <div className="border shadow-sm bg-card rounded-xl p-6 space-y-6">
              <div className="space-y-4">
                {Object.entries(notifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between py-2">
                    <div>
                      <p className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                      <p className="text-sm text-muted-foreground">
                        {key === "invoicePaid" && "Get notified when an invoice is paid"}
                        {key === "invoiceViewed" && "Get notified when a client views an invoice"}
                        {key === "reminderSent" && "Get notified when reminders are sent"}
                        {key === "weeklyReport" && "Receive weekly summary reports"}
                        {key === "marketingEmails" && "Receive product updates and tips"}
                      </p>
                    </div>
                    <Switch
                      checked={value}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, [key]: checked })}
                    />
                  </div>
                ))}
              </div>

              <Button onClick={() => handleSave("Notification")}>Save Changes</Button>
            </div>
          </TabsContent>

          {/* Billing */}
          <TabsContent value="billing">
            <div className="space-y-6">
              <div className="border shadow-sm bg-card rounded-xl p-6">
                <h3 className="font-semibold mb-4">Current Plan</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-semibold">Pro Plan</p>
                    <p className="text-muted-foreground">$10/month • Renews Dec 15, 2024</p>
                  </div>
                  <Button variant="outline">Upgrade to Premium</Button>
                </div>
              </div>

              <div className="border shadow-sm bg-card rounded-xl p-6">
                <h3 className="font-semibold mb-4">Payment Method</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8 rounded bg-foreground/10 flex items-center justify-center text-xs font-medium">
                      VISA
                    </div>
                    <div>
                      <p className="font-medium">•••• •••• •••• 4242</p>
                      <p className="text-sm text-muted-foreground">Expires 12/25</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">Update</Button>
                </div>
              </div>

              <div className="border shadow-sm bg-card rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Billing History</h3>
                  <Button variant="ghost" size="sm">Download All</Button>
                </div>
                <div className="space-y-3">
                  {[
                    { date: "Dec 1, 2024", amount: "$10.00", status: "Paid" },
                    { date: "Nov 1, 2024", amount: "$10.00", status: "Paid" },
                    { date: "Oct 1, 2024", amount: "$10.00", status: "Paid" },
                  ].map((invoice, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                      <div>
                        <p className="font-medium">{invoice.date}</p>
                        <p className="text-sm text-muted-foreground">{invoice.amount}</p>
                      </div>
                      <Button variant="ghost" size="sm">Download</Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>


          {/* Localization Settings */}
          <TabsContent value="localization">
            <div className="border shadow-sm bg-card rounded-xl p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English (US)</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Timezone</Label>
                  <Select defaultValue="utc">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utc">UTC</SelectItem>
                      <SelectItem value="est">EST (UTC-5)</SelectItem>
                      <SelectItem value="pst">PST (UTC-8)</SelectItem>
                      <SelectItem value="ist">IST (UTC+5:30)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Date Format</Label>
                  <Select defaultValue="mdy">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                      <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                      <SelectItem value="ymd">YYYY-MM-DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button onClick={() => handleSave("Localization")}>Save Changes</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout >
  );
}
