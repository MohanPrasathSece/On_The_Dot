import { useState } from "react";
import { Check, ExternalLink, RefreshCw, Settings as SettingsIcon, Zap, CreditCard, Building, BarChart3, TrendingUp, MessageSquare, Zap as ZapierIcon, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppLayout } from "@/components/app/AppLayout";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";

interface Integration {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  connected: boolean;
  autoSync: boolean;
  lastSync?: string;
}

const initialIntegrations: Integration[] = [
  { id: "razorpay", name: "Razorpay", description: "Accept payments in India & globally", icon: "🇮🇳", connected: false, autoSync: false },
  { id: "stripe", name: "Stripe", description: "Accept credit card payments globally", icon: "💳", connected: true, autoSync: true, lastSync: "2 min ago" },
  { id: "paypal", name: "PayPal", description: "Accept PayPal and Venmo payments", icon: "🅿️", connected: true, autoSync: false, lastSync: "1 hour ago" },
  { id: "plaid", name: "Plaid", description: "Connect bank accounts for ACH transfers", icon: "🏦", connected: false, autoSync: false },
  { id: "quickbooks", name: "QuickBooks", description: "Sync invoices with your accounting", icon: "📊", connected: false, autoSync: false },
  { id: "xero", name: "Xero", description: "Two-way sync with Xero accounting", icon: "📈", connected: false, autoSync: false },
  { id: "slack", name: "Slack", description: "Get payment notifications in Slack", icon: "💬", connected: true, autoSync: true, lastSync: "Just now" },
  { id: "zapier", name: "Zapier", description: "Connect to 5000+ apps", icon: "⚡", connected: false, autoSync: false },
  { id: "make", name: "Make.com", description: "Visual automation workflows", icon: "🟣", connected: false, autoSync: false },
  { id: "webhooks", name: "Webhooks", description: "Custom HTTP callbacks", icon: "🪝", connected: false, autoSync: false },
  { id: "gmail", name: "Gmail", description: "Send invoices from your email", icon: "✉️", connected: false, autoSync: false },
];

const mockSyncLogs = [
  { id: 1, integration: "Stripe", status: "success", message: " synced 14 payments", time: "2 min ago" },
  { id: 2, integration: "Slack", status: "success", message: " sent 3 notifications", time: "5 min ago" },
  { id: 3, integration: "PayPal", status: "success", message: " synced 2 transactions", time: "1 hour ago" },
  { id: 4, integration: "Stripe", status: "failed", message: " connection timeout", time: "4 hours ago" },
  { id: 5, integration: "QuickBooks", status: "success", message: " export completed", time: "Yesterday" },
];

export default function Integrations() {
  const [integrations, setIntegrations] = useState<Integration[]>(initialIntegrations);

  const handleConnect = (id: string) => {
    setIntegrations(integrations.map(int =>
      int.id === id ? { ...int, connected: true, lastSync: "Just now" } : int
    ));
    const integration = integrations.find(i => i.id === id);
    toast({ title: "Connected!", description: `${integration?.name} has been connected successfully.` });
  };

  const handleDisconnect = (id: string) => {
    setIntegrations(integrations.map(int =>
      int.id === id ? { ...int, connected: false, autoSync: false, lastSync: undefined } : int
    ));
    const integration = integrations.find(i => i.id === id);
    toast({ title: "Disconnected", description: `${integration?.name} has been disconnected.` });
  };

  const handleAutoSync = (id: string, enabled: boolean) => {
    setIntegrations(integrations.map(int =>
      int.id === id ? { ...int, autoSync: enabled } : int
    ));
  };

  const handleSync = (id: string) => {
    setIntegrations(integrations.map(int =>
      int.id === id ? { ...int, lastSync: "Just now" } : int
    ));
    const integration = integrations.find(i => i.id === id);
    toast({ title: "Synced", description: `${integration?.name} data synced successfully.` });
  };

  const connectedCount = integrations.filter(i => i.connected).length;

  return (
    <AppLayout>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div>
            <h2 className="text-2xl font-display font-semibold">Integrations</h2>
            <p className="text-muted-foreground">Connect your favorite tools and services.</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Zap className="h-4 w-4" />
            {connectedCount} connected
          </div>
        </div>

        {/* Payment Integrations */}
        <div>
          <h3 className="font-semibold mb-4">Payment Gateways</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {integrations.filter(i => ["razorpay", "stripe", "paypal", "plaid"].includes(i.id)).map((integration) => (
              <IntegrationCard
                key={integration.id}
                integration={integration}
                onConnect={handleConnect}
                onDisconnect={handleDisconnect}
                onAutoSync={handleAutoSync}
                onSync={handleSync}
              />
            ))}
          </div>
        </div>

        {/* Accounting Integrations */}
        <div>
          <h3 className="font-semibold mb-4">Accounting & Finance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {integrations.filter(i => ["quickbooks", "xero"].includes(i.id)).map((integration) => (
              <IntegrationCard
                key={integration.id}
                integration={integration}
                onConnect={handleConnect}
                onDisconnect={handleDisconnect}
                onAutoSync={handleAutoSync}
                onSync={handleSync}
              />
            ))}
          </div>
        </div>

        {/* Other Integrations */}
        <div>
          <h3 className="font-semibold mb-4">Productivity & Automation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {integrations.filter(i => ["slack", "zapier", "make", "webhooks", "gmail"].includes(i.id)).map((integration) => (
              <IntegrationCard
                key={integration.id}
                integration={integration}
                onConnect={handleConnect}
                onDisconnect={handleDisconnect}
                onAutoSync={handleAutoSync}
                onSync={handleSync}
              />
            ))}
          </div>
        </div>

        {/* Sync Logs */}
        <div className="border shadow-sm bg-card rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Sync Logs</h3>
            <Button variant="ghost" size="sm" className="text-xs">View All</Button>
          </div>
          <div className="space-y-0">
            {mockSyncLogs.map((log) => (
              <div key={log.id} className="flex items-center justify-between py-3 border-b border-border/50 last:border-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${log.status === 'success' ? 'bg-green-500' : 'bg-destructive'}`} />
                  <p className="text-sm">
                    <span className="font-medium">{log.integration}</span>
                    {log.message}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground">{log.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

function IntegrationCard({
  integration,
  onConnect,
  onDisconnect,
  onAutoSync,
  onSync
}: {
  integration: Integration;
  onConnect: (id: string) => void;
  onDisconnect: (id: string) => void;
  onAutoSync: (id: string, enabled: boolean) => void;
  onSync: (id: string) => void;
}) {
  return (
    <div className="border shadow-sm bg-card rounded-xl p-5 hover:bg-muted/10 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{integration.icon}</span>
          <div>
            <h4 className="font-medium">{integration.name}</h4>
            <p className="text-sm text-muted-foreground">{integration.description}</p>
          </div>
        </div>
      </div>

      {integration.connected ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">Connected</span>
            </div>
            {integration.lastSync && (
              <span className="text-xs text-muted-foreground">Synced {integration.lastSync}</span>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Auto-sync</span>
            <Switch
              checked={integration.autoSync}
              onCheckedChange={(checked) => onAutoSync(integration.id, checked)}
            />
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1" onClick={() => onSync(integration.id)}>
              <RefreshCw className="h-3 w-3 mr-1" />
              Sync
            </Button>
            <Button variant="ghost" size="sm" onClick={() => onDisconnect(integration.id)}>
              <SettingsIcon className="h-3 w-3" />
            </Button>
          </div>
        </div>
      ) : (
        <Button className="w-full bg-[#4A154B] hover:bg-[#4A154B]/90 text-white" onClick={() => onConnect(integration.id)}>
          Connect
          <ExternalLink className="h-3 w-3 ml-1" />
        </Button>
      )}
    </div>
  );
}
