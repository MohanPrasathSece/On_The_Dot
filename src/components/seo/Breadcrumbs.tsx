import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

const Breadcrumbs = ({ items, className }: BreadcrumbsProps) => {
  const location = useLocation();
  
  // Generate breadcrumbs from current path if not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'Home', href: '/' }
    ];

    // Map path segments to readable names
    const segmentNames: Record<string, string> = {
      'features': 'Features',
      'solutions': 'Solutions',
      'resources': 'Resources',
      'company': 'Company',
      'support': 'Support',
      'legal': 'Legal',
      'login': 'Sign In',
      'signup': 'Sign Up',
      'trial': 'Free Trial',
      'dashboard': 'Dashboard',
      'invoices': 'Invoices',
      'clients': 'Clients',
      'reports': 'Reports',
      'settings': 'Settings',
      'enterprise': 'Enterprise',
      'invoicing': 'Invoice Management',
      'automated-reminders': 'Automated Reminders',
      'payment-tracking': 'Payment Tracking',
      'freelancers': 'For Freelancers',
      'agencies': 'For Agencies',
      'small-business': 'For Small Business',
      'about': 'About Us',
      'contact': 'Contact',
      'privacy': 'Privacy Policy',
      'terms': 'Terms of Service',
      'help': 'Help Center'
    };

    let currentPath = '';
    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`;
      const name = segmentNames[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
      breadcrumbs.push({ name, href: currentPath });
    });

    return breadcrumbs;
  };

  const breadcrumbItems = items || generateBreadcrumbs();

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={cn("flex items-center space-x-1 text-sm text-muted-foreground", className)}
    >
      {breadcrumbItems.map((item, index) => (
        <div key={index} className="flex items-center">
          {index === 0 && <Home className="w-4 h-4 mr-1" />}
          {item.href ? (
            <Link
              to={item.href}
              className="hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ) : (
            <span className="text-foreground font-medium">{item.name}</span>
          )}
          {index < breadcrumbItems.length - 1 && (
            <ChevronRight className="w-4 h-4 mx-1 text-muted-foreground" />
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
