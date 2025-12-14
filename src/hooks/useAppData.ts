import { useState, useEffect } from 'react';

export interface Client {
    id: string;
    name: string;
    email: string;
    phone: string;
    company: string;
    location: string;
    avatar: string;
    totalInvoiced: string;
    outstandingBalance: string;
    invoiceCount: number;
    lastInvoice: string;
    status: 'active' | 'inactive' | 'overdue';
    tags: string[];
    notes: string;
}

export interface Invoice {
    id: string;
    clientId: string;
    clientName: string;
    clientEmail: string;
    amount: string;
    status: 'paid' | 'pending' | 'overdue' | 'draft';
    dueDate: string;
    issueDate: string;
    items: number;
    avatar: string;
    isPinned: boolean;
}

export interface UserSettings {
    companyName: string;
    industry: string;
    monthlyGoal: string;
    setupCompleted: boolean;
}

const STORAGE_KEY = 'flowryte_app_data';

const initialSettings: UserSettings = {
    companyName: '',
    industry: '',
    monthlyGoal: '',
    setupCompleted: false,
};

export function useAppData() {
    const [clients, setClients] = useState<Client[]>([]);
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [settings, setSettings] = useState<UserSettings>(initialSettings);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadData();
        // Listen for storage events to sync across tabs/components
        window.addEventListener('storage', loadData);
        return () => window.removeEventListener('storage', loadData);
    }, []);

    const loadData = () => {
        try {
            const data = localStorage.getItem(STORAGE_KEY);
            if (data) {
                const parsed = JSON.parse(data);
                setClients(parsed.clients || []);
                setInvoices(parsed.invoices || []);
                setSettings(parsed.settings || initialSettings);
            }
        } catch (e) {
            console.error('Failed to load app data', e);
        } finally {
            setLoading(false);
        }
    };

    const saveData = (newClients: Client[], newInvoices: Invoice[], newSettings: UserSettings) => {
        try {
            const data = {
                clients: newClients,
                invoices: newInvoices,
                settings: newSettings,
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            setClients(newClients);
            setInvoices(newInvoices);
            setSettings(newSettings);
            // Dispatch event for other hooks
            window.dispatchEvent(new Event('storage'));
        } catch (e) {
            console.error('Failed to save app data', e);
        }
    };

    const addClient = (client: Omit<Client, 'id' | 'avatar' | 'totalInvoiced' | 'outstandingBalance' | 'invoiceCount' | 'lastInvoice'>) => {
        const newClient: Client = {
            ...client,
            id: Math.random().toString(36).substr(2, 9),
            avatar: client.name.charAt(0).toUpperCase(),
            totalInvoiced: '$0',
            outstandingBalance: '$0',
            invoiceCount: 0,
            lastInvoice: 'Never',
        };
        saveData([...clients, newClient], invoices, settings);
        return newClient;
    };

    const addInvoice = (invoice: Omit<Invoice, 'id' | 'avatar' | 'isPinned'>) => {
        const newInvoice: Invoice = {
            ...invoice,
            id: `INV-${Math.floor(1000 + Math.random() * 9000)}`,
            avatar: invoice.clientName.charAt(0).toUpperCase(),
            isPinned: false,
        };
        saveData(clients, [newInvoice, ...invoices], settings);
        return newInvoice;
    };

    const updateSettings = (updates: Partial<UserSettings>) => {
        saveData(clients, invoices, { ...settings, ...updates });
    };

    const clearData = () => {
        localStorage.removeItem(STORAGE_KEY);
        setClients([]);
        setInvoices([]);
        setSettings(initialSettings);
    };

    return {
        clients,
        invoices,
        settings,
        loading,
        addClient,
        addInvoice,
        updateSettings,
        clearData
    };
}
