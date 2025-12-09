export interface Invoice {
  id: string;
  number: string;
  client: Client;
  amount: number;
  status: "draft" | "sent" | "viewed" | "paid" | "overdue";
  dueDate: string;
  createdAt: string;
  items: InvoiceItem[];
  currency: string;
}

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  company: string;
  phone?: string;
  address?: string;
  totalPaid: number;
  totalOutstanding: number;
  invoiceCount: number;
}

export interface Reminder {
  id: string;
  invoiceId: string;
  invoiceNumber: string;
  client: string;
  type: "email" | "sms";
  status: "scheduled" | "sent" | "delivered" | "failed";
  scheduledDate: string;
  tone: "polite" | "firm" | "urgent";
  message: string;
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: "admin" | "editor" | "viewer";
  avatar?: string;
  joinedAt: string;
}

export interface Activity {
  id: string;
  type: "invoice_created" | "invoice_sent" | "payment_received" | "reminder_sent" | "client_added";
  description: string;
  timestamp: string;
  user: string;
}

export const mockClients: Client[] = [
  { id: "c1", name: "Sarah Johnson", email: "sarah@techcorp.com", company: "TechCorp Inc.", phone: "+1 555-0101", totalPaid: 15400, totalOutstanding: 3500, invoiceCount: 8 },
  { id: "c2", name: "Michael Chen", email: "m.chen@designlab.io", company: "Design Lab", phone: "+1 555-0102", totalPaid: 28900, totalOutstanding: 0, invoiceCount: 12 },
  { id: "c3", name: "Emma Williams", email: "emma@startup.co", company: "Startup Co", phone: "+1 555-0103", totalPaid: 8200, totalOutstanding: 4200, invoiceCount: 5 },
  { id: "c4", name: "James Rodriguez", email: "james@agency.com", company: "Creative Agency", phone: "+1 555-0104", totalPaid: 45000, totalOutstanding: 7800, invoiceCount: 18 },
  { id: "c5", name: "Lisa Park", email: "lisa@ventures.io", company: "Park Ventures", phone: "+1 555-0105", totalPaid: 12300, totalOutstanding: 2100, invoiceCount: 6 },
];

export const mockInvoices: Invoice[] = [
  { id: "inv1", number: "INV-001", client: mockClients[0], amount: 3500, status: "overdue", dueDate: "2024-12-01", createdAt: "2024-11-15", items: [{ id: "i1", description: "Website Redesign", quantity: 1, rate: 3500 }], currency: "USD" },
  { id: "inv2", number: "INV-002", client: mockClients[1], amount: 2800, status: "paid", dueDate: "2024-12-10", createdAt: "2024-11-20", items: [{ id: "i2", description: "Brand Identity Package", quantity: 1, rate: 2800 }], currency: "USD" },
  { id: "inv3", number: "INV-003", client: mockClients[2], amount: 4200, status: "sent", dueDate: "2024-12-15", createdAt: "2024-11-25", items: [{ id: "i3", description: "Mobile App UI Design", quantity: 1, rate: 4200 }], currency: "USD" },
  { id: "inv4", number: "INV-004", client: mockClients[3], amount: 7800, status: "viewed", dueDate: "2024-12-20", createdAt: "2024-12-01", items: [{ id: "i4", description: "Marketing Campaign", quantity: 1, rate: 7800 }], currency: "USD" },
  { id: "inv5", number: "INV-005", client: mockClients[4], amount: 2100, status: "draft", dueDate: "2024-12-25", createdAt: "2024-12-05", items: [{ id: "i5", description: "Consulting Services", quantity: 7, rate: 300 }], currency: "USD" },
];

export const mockReminders: Reminder[] = [
  { id: "r1", invoiceId: "inv1", invoiceNumber: "INV-001", client: "Sarah Johnson", type: "email", status: "sent", scheduledDate: "2024-12-02", tone: "polite", message: "Friendly reminder about your invoice" },
  { id: "r2", invoiceId: "inv1", invoiceNumber: "INV-001", client: "Sarah Johnson", type: "email", status: "delivered", scheduledDate: "2024-12-05", tone: "firm", message: "Your payment is now overdue" },
  { id: "r3", invoiceId: "inv3", invoiceNumber: "INV-003", client: "Emma Williams", type: "email", status: "scheduled", scheduledDate: "2024-12-18", tone: "polite", message: "Payment reminder" },
  { id: "r4", invoiceId: "inv4", invoiceNumber: "INV-004", client: "James Rodriguez", type: "sms", status: "scheduled", scheduledDate: "2024-12-22", tone: "polite", message: "Invoice due soon" },
];

export const mockTeam: TeamMember[] = [
  { id: "t1", name: "Alex Morgan", email: "alex@company.com", role: "admin", joinedAt: "2024-01-15" },
  { id: "t2", name: "Jordan Lee", email: "jordan@company.com", role: "editor", joinedAt: "2024-03-20" },
  { id: "t3", name: "Sam Taylor", email: "sam@company.com", role: "viewer", joinedAt: "2024-06-10" },
];

export const mockActivities: Activity[] = [
  { id: "a1", type: "payment_received", description: "Payment of $2,800 received from Design Lab", timestamp: "2024-12-09T10:30:00", user: "System" },
  { id: "a2", type: "invoice_sent", description: "Invoice INV-004 sent to Creative Agency", timestamp: "2024-12-09T09:15:00", user: "Alex Morgan" },
  { id: "a3", type: "reminder_sent", description: "Reminder sent for INV-001 to TechCorp Inc.", timestamp: "2024-12-08T14:00:00", user: "System" },
  { id: "a4", type: "invoice_created", description: "Invoice INV-005 created for Park Ventures", timestamp: "2024-12-05T11:20:00", user: "Alex Morgan" },
  { id: "a5", type: "client_added", description: "New client Lisa Park added", timestamp: "2024-12-04T16:45:00", user: "Jordan Lee" },
];

export const monthlyRevenue = [
  { month: "Jul", revenue: 12400, invoices: 8 },
  { month: "Aug", revenue: 18200, invoices: 12 },
  { month: "Sep", revenue: 15800, invoices: 10 },
  { month: "Oct", revenue: 22100, invoices: 14 },
  { month: "Nov", revenue: 28400, invoices: 16 },
  { month: "Dec", revenue: 19800, invoices: 11 },
];

export const invoiceStatusData = [
  { name: "Paid", value: 45, color: "hsl(var(--foreground))" },
  { name: "Pending", value: 30, color: "hsl(var(--muted-foreground))" },
  { name: "Overdue", value: 15, color: "hsl(var(--foreground) / 0.5)" },
  { name: "Draft", value: 10, color: "hsl(var(--muted))" },
];
