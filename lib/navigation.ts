import {
  AlertTriangle,
  BarChart3,
  CreditCard,
  Home,
  Package,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Users,
} from "lucide-react";

export const navigationItems = [
  { label: "Dashboard", href: "/", icon: Home },
  { label: "Users", href: "/users", icon: Users },
  { label: "Products", href: "/products", icon: Package },
  { label: "Orders", href: "/orders", icon: ShoppingCart },
  { label: "Payments", href: "/payments", icon: CreditCard },
  { label: "Escrow", href: "/escrow", icon: ShieldCheck },
  { label: "Pending Actions", href: "/pending-actions", icon: AlertTriangle },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Settings", href: "/settings", icon: Settings },
] as const;

export const routeTitles = Object.fromEntries(
  navigationItems.map((item) => [item.href, item.label]),
) as Record<(typeof navigationItems)[number]["href"], string>;
