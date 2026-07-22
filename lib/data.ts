import {
  ChartNoAxesColumnIncreasing,
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
  { label: "Active", value: "3,980", icon: ChartNoAxesColumnIncreasing, tone: "purple" },
  { label: "Pending Approval", value: "120", icon: UserPlus, tone: "orange" },
  { label: "Flagged", value: "45", icon: ShieldCheck, tone: "green" },
] as const;

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

export function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export const userDetails = [
  {
    id: "zhiee-gadgets",
    name: "Zhiee Gadgets",
    role: "Vendor",
    status: "Active",
    verification: "Verified",
    memberSince: "05/04/2024",
    lastLogin: "2 hrs ago",
    orders: "32",
    completed: "30",
    walletBalance: "₦120,000",
    about:
      "I run a small gadget business and use this platform to connect with more customers and grow my reach. My focus is on providing authentic products, fast delivery, and dependable service.",
  },
  {
    id: "okafor-chibuike",
    name: "Okafor Chibuike",
    role: "Vendor",
    status: "Active",
    verification: "Verified",
    memberSince: "05/03/2026",
    lastLogin: "2 hrs ago",
    orders: "540",
    completed: "512",
    walletBalance: "₦485,000",
    about: "Vendor profile for marketplace operations, order tracking, and admin review.",
  },
  {
    id: "olamide-adeola",
    name: "Olamide Adeola",
    role: "Buyer",
    status: "Suspended",
    verification: "Unverified",
    memberSince: "17/09/2023",
    lastLogin: "05 Dec",
    orders: "305",
    completed: "288",
    walletBalance: "₦0",
    about: "Buyer account currently marked for admin review.",
  },
  {
    id: "emmanuel-jude",
    name: "Emmanuel Jude",
    role: "Buyer",
    status: "Flagged",
    verification: "Pending Review",
    memberSince: "25/04/2024",
    lastLogin: "Yesterday",
    orders: "165",
    completed: "151",
    walletBalance: "â‚¦32,000",
    about: "Buyer account flagged for manual review after recent marketplace activity.",
  },
  {
    id: "benjamin-franklin",
    name: "Benjamin Franklin",
    role: "Vendor",
    status: "Pending",
    verification: "In Progress",
    memberSince: "17/09/2023",
    lastLogin: "05 Dec",
    orders: "305",
    completed: "280",
    walletBalance: "â‚¦96,000",
    about: "Vendor account waiting for the final admin approval step.",
  },
];

export const productDetails = [
  {
    id: "jbl-speaker",
    name: "JBL Speaker",
    displayName: "Sky-Blue Jordan Sneakers",
    vendor: "Maeyluxery Stores",
    category: "Fashion",
    condition: "New",
    status: "Active",
    price: "₦120,000",
    discount: "-------",
    stock: "50",
    lowStockAlert: "10",
    deliveryTimeline: "7 days",
    shippingFee: "₦10,000",
    dateAdded: "05/03/2026",
    description:
      "Clean and stylish sky-blue Air Jordan sneakers crafted for comfort and everyday wear. Designed with breathable materials, soft cushioning, and a durable sole.",
  },
];

export const customerFeedback = Array.from({ length: 6 }, () => ({
  name: "Abiola Jude",
  message: "Delivery was fast and the product was original. Very smooth experience.",
  time: "2 min ago",
}));
