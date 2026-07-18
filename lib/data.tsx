import {
  CreditCard,
  DollarSign,
  Package,
  ShieldCheck,
  ShoppingCart,
  UserPlus,
  Users,
} from "lucide-react";

export const dashboardStats = [
  {
    label: "Total Revenue",
    value: "₦2,456,890",
    change: "+12.5%",
    icon: DollarSign,
    tone: "green",
  },
  {
    label: "Active Users",
    value: "12,483",
    change: "+8.2%",
    icon: UserPlus,
    tone: "orange",
  },
  {
    label: "Orders Today",
    value: "847",
    change: "+15.3%",
    icon: ShoppingCart,
    tone: "purple",
  },
  {
    label: "Escrow Protected",
    value: "₦1,892,340",
    change: "+22.1%",
    icon: ShieldCheck,
    tone: "green",
  },
] as const;

export const userStats = [
  { label: "Total Users", value: "56,890", change: "+12.5%", icon: Users, tone: "green" },
  { label: "Active Users", value: "12,483", change: "+8.2%", icon: UserPlus, tone: "orange" },
  { label: "Vendors", value: "847", change: "+15.3%", icon: ShieldCheck, tone: "purple" },
  { label: "Buyers", value: "12,340", change: "-12.1%", icon: CreditCard, tone: "green", negative: true },
] as const;

export const productStats = [
  { label: "Total Products", value: "4,230", change: "+12.5%", icon: Package, tone: "green" },
  { label: "Active", value: "3,980", icon: BarSignal, tone: "purple" },
  { label: "Pending Approval", value: "120", icon: UserPlus, tone: "orange" },
  { label: "Flagged", value: "45", icon: ShieldCheck, tone: "green" },
] as const;

function BarSignal(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M8 9v6M12 6v12M16 9v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M5 7a10 10 0 0 0 0 10M19 7a10 10 0 0 1 0 10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export const activities = [
  {
    title: "New order placed",
    detail: "Order #12847 - iPhone 14 Pro Max",
    amount: "₦485,000",
    time: "2 min ago",
    icon: ShoppingCart,
    tone: "green",
  },
  {
    title: "New user registered",
    detail: "John Doe joined the platform",
    time: "5 min ago",
    icon: UserPlus,
    tone: "orange",
  },
  {
    title: "Escrow protection activated",
    detail: "Order #12845 - MacBook Pro M3",
    amount: "₦890,000",
    time: "8 min ago",
    icon: ShieldCheck,
    tone: "green",
  },
  {
    title: "Payment completed",
    detail: "Order #12843 - Samsung Galaxy S24",
    amount: "₦320,000",
    time: "12 min ago",
    icon: CreditCard,
    tone: "purple",
  },
];

export const users = [
  ["Okafor Chibuike", "Vendor", "Active", "540", "05/03/2026", "2 hrs ago"],
  ["Olamide Adeola", "Buyer", "Suspended", "305", "17/09/2023", "05 Dec"],
  ["Okafor Chibuike", "Vendor", "Active", "540", "05/03/2026", "2 hrs ago"],
  ["Emmanuel Jude", "Buyer", "Flagged", "165", "25/04/2024", "Yesterday"],
  ["Okafor Chibuike", "Vendor", "Active", "540", "05/03/2026", "2 hrs ago"],
  ["Okafor Chibuike", "Vendor", "Active", "540", "05/03/2026", "2 hrs ago"],
  ["Olamide Adeola", "Buyer", "Suspended", "305", "17/09/2023", "05 Dec"],
  ["Benjamin Franklin", "Vendor", "Pending", "305", "17/09/2023", "05 Dec"],
  ["Okafor Chibuike", "Vendor", "Active", "540", "05/03/2026", "2 hrs ago"],
  ["Zhiee Gadgets", "Vendor", "Active", "540", "05/03/2026", "2 hrs ago"],
];

export const products = Array.from({ length: 10 }, (_, index) => [
  "JBL Speaker",
  "Zhiee Gadgets",
  "Electronics",
  "₦120,000",
  "20 pcs",
  index % 3 === 0 ? "Active" : index % 3 === 1 ? "Flagged" : "Pending",
  "12 pcs sold",
  "05/03/2026",
]);
