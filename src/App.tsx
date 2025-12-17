import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { HelmetProvider } from "react-helmet-async";
import SEOAnalytics from "@/components/seo/SEOAnalytics";
import WebVitals from "@/components/seo/WebVitals";
import PerformanceOptimizer from "@/components/seo/PerformanceOptimizer";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TrialSignup from "./pages/TrialSignup";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import Invoices from "./pages/Invoices";
import InvoiceBuilder from "./pages/InvoiceBuilder";
import Clients from "./pages/Clients";
import Reminders from "./pages/Reminders";
import Reports from "./pages/Reports";
import Integrations from "./pages/Integrations";
import Team from "./pages/Team";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import GenericFeaturePage from "./pages/features/GenericFeaturePage";
import PricingPage from "./pages/Pricing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

function AppRoutes() {
  const { isAuthenticated } = useAuth();
  useScrollToTop();

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Index />} />
      <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
      <Route path="/signup" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Signup />} />
      <Route path="/trial" element={isAuthenticated ? <Navigate to="/dashboard" /> : <TrialSignup />} />
      <Route path="/pricing" element={<PricingPage />} />

      {/* Public Pages routed to Generic Landing Template */}
      <Route path="/features/:featureId" element={<GenericFeaturePage />} />
      <Route path="/solutions/:featureId" element={<GenericFeaturePage />} />
      <Route path="/resources/:featureId" element={<GenericFeaturePage />} />
      <Route path="/company/:featureId" element={<GenericFeaturePage />} />
      <Route path="/support/:featureId" element={<GenericFeaturePage />} />
      <Route path="/legal/:featureId" element={<GenericFeaturePage />} />
      <Route path="/enterprise" element={<GenericFeaturePage />} /> {/* Special case, might need id param handling */}

      {/* App Routes */}
      <Route path="/onboarding" element={<ProtectedRoute><Onboarding /></ProtectedRoute>} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/invoices" element={<ProtectedRoute><Invoices /></ProtectedRoute>} />
      <Route path="/invoices/new" element={<ProtectedRoute><InvoiceBuilder /></ProtectedRoute>} />
      <Route path="/invoices/:id" element={<ProtectedRoute><Invoices /></ProtectedRoute>} />
      <Route path="/clients" element={<ProtectedRoute><Clients /></ProtectedRoute>} />
      <Route path="/reminders" element={<ProtectedRoute><Reminders /></ProtectedRoute>} />
      <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
      <Route path="/integrations" element={<ProtectedRoute><Integrations /></ProtectedRoute>} />
      <Route path="/team" element={<ProtectedRoute><Team /></ProtectedRoute>} />
      <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
      {/* Private Support Page - Renamed to avoid partial match conflict if desired, but exact match /support works */}
      <Route path="/app-support" element={<ProtectedRoute><Support /></ProtectedRoute>} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="flowryte-theme">
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <SEOAnalytics />
            <WebVitals />
            <PerformanceOptimizer />
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
