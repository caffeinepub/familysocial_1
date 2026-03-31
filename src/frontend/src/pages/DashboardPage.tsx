import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowDownRight,
  ArrowUpRight,
  Bookmark,
  Briefcase,
  Calendar,
  ExternalLink,
  Eye,
  GraduationCap,
  Heart,
  Percent,
  Plane,
  ShoppingBag,
  Star,
  TrendingUp,
  Truck,
} from "lucide-react";
import { useCurrency } from "../contexts/CurrencyContext";

interface StatCard {
  label: string;
  value: string | number;
  change: string;
  positive: boolean;
  icon: React.ElementType;
  color: string;
}

const STATS: StatCard[] = [
  {
    label: "Total Earnings",
    value: 284500,
    change: "+18.2%",
    positive: true,
    icon: TrendingUp,
    color: "oklch(0.52 0.14 155)",
  },
  {
    label: "Active Orders",
    value: String(
      (() => {
        try {
          return JSON.parse(localStorage.getItem("ic_user_orders") || "[]")
            .length;
        } catch {
          return 0;
        }
      })(),
    ),
    change: "+recent",
    positive: true,
    icon: ShoppingBag,
    color: "oklch(0.65 0.14 50)",
  },
  {
    label: "Bookings",
    value: "8",
    change: "-2",
    positive: false,
    icon: Calendar,
    color: "oklch(0.48 0.12 260)",
  },
  {
    label: "Commission Earned",
    value: 18600,
    change: "+12.5%",
    positive: true,
    icon: Percent,
    color: "oklch(0.72 0.17 85)",
  },
  {
    label: "Delivery Income",
    value: 23500,
    change: "+8.4%",
    positive: true,
    icon: Truck,
    color: "oklch(0.72 0.17 55)",
  },
];

interface Transaction {
  id: number;
  description: string;
  type: string;
  amount: number;
  date: string;
  status: "completed" | "pending" | "cancelled";
}

const TRANSACTIONS: Transaction[] = [
  {
    id: 1,
    description: "Product Sale — Honda Civic Rental",
    type: "Product",
    amount: 15000,
    date: "Mar 1, 2026",
    status: "completed",
  },
  {
    id: 2,
    description: "Service Booking — Math Tutoring",
    type: "Service",
    amount: 4500,
    date: "Feb 28, 2026",
    status: "completed",
  },
  {
    id: 3,
    description: "Affiliate Commission — TechPK",
    type: "Affiliate",
    amount: 2200,
    date: "Feb 27, 2026",
    status: "completed",
  },
  {
    id: 4,
    description: "Delivery Job — QuickEats x4",
    type: "Job",
    amount: 2800,
    date: "Feb 26, 2026",
    status: "completed",
  },
  {
    id: 5,
    description: "Property Rental — Johar Town Flat",
    type: "Real Estate",
    amount: 45000,
    date: "Feb 25, 2026",
    status: "completed",
  },
  {
    id: 6,
    description: "Service Booking — AC Repair",
    type: "Service",
    amount: 6000,
    date: "Feb 24, 2026",
    status: "pending",
  },
  {
    id: 7,
    description: "Product Sale — Bridal Lehenga",
    type: "Product",
    amount: 8000,
    date: "Feb 23, 2026",
    status: "completed",
  },
  {
    id: 8,
    description: "Job Recruitment Commission",
    type: "Job",
    amount: 12000,
    date: "Feb 22, 2026",
    status: "cancelled",
  },
];

interface EarningsCategory {
  label: string;
  amount: number;
  percentage: number;
  color: string;
}

const EARNINGS: EarningsCategory[] = [
  {
    label: "Products",
    amount: 98500,
    percentage: 34.6,
    color: "oklch(0.52 0.14 155)",
  },
  {
    label: "Services",
    amount: 82000,
    percentage: 28.8,
    color: "oklch(0.65 0.14 50)",
  },
  {
    label: "Real Estate",
    amount: 65000,
    percentage: 22.9,
    color: "oklch(0.48 0.12 260)",
  },
  {
    label: "Jobs",
    amount: 22400,
    percentage: 7.9,
    color: "oklch(0.72 0.17 85)",
  },
  {
    label: "Affiliates",
    amount: 16600,
    percentage: 5.8,
    color: "oklch(0.58 0.16 350)",
  },
];

const STATUS_STYLES: Record<
  string,
  { bg: string; text: string; label: string }
> = {
  completed: {
    bg: "oklch(0.52 0.14 155 / 0.12)",
    text: "oklch(0.32 0.085 155)",
    label: "Completed",
  },
  pending: {
    bg: "oklch(0.72 0.17 85 / 0.15)",
    text: "oklch(0.55 0.14 65)",
    label: "Pending",
  },
  cancelled: {
    bg: "oklch(0.55 0.22 25 / 0.12)",
    text: "oklch(0.45 0.18 25)",
    label: "Cancelled",
  },
};

const TYPE_COLORS: Record<string, string> = {
  Product: "oklch(0.52 0.14 155)",
  Service: "oklch(0.65 0.14 50)",
  Affiliate: "oklch(0.72 0.17 85)",
  Job: "oklch(0.48 0.12 260)",
  "Real Estate": "oklch(0.58 0.16 350)",
};

// Monthly data for bar chart
const MONTHLY_DATA = [
  { month: "Sep", value: 48 },
  { month: "Oct", value: 72 },
  { month: "Nov", value: 61 },
  { month: "Dec", value: 85 },
  { month: "Jan", value: 78 },
  { month: "Feb", value: 100 },
];

// ─── Affiliate data ───────────────────────────────────────────────────────────

const AFFILIATE_SUMMARY_STATS = [
  {
    label: "Total Clicks",
    value: "5,847",
    color: "oklch(0.55 0.22 280)",
    icon: Eye,
  },
  {
    label: "Total Conversions",
    value: "312",
    color: "oklch(0.52 0.14 155)",
    icon: TrendingUp,
  },
  {
    label: "Affiliate Earned",
    value: 34200,
    color: "oklch(0.52 0.14 155)",
    icon: Percent,
  },
  {
    label: "Pending Payout",
    value: 8400,
    color: "oklch(0.72 0.17 85)",
    icon: Calendar,
  },
];

const MODULE_BREAKDOWN = [
  {
    module: "Products",
    links: 8,
    clicks: 1842,
    conversions: 94,
    earned: 12400,
    share: 36.3,
    color: "oklch(0.52 0.14 155)",
    icon: ShoppingBag,
  },
  {
    module: "Travel",
    links: 5,
    clicks: 1204,
    conversions: 71,
    earned: 10200,
    share: 29.8,
    color: "oklch(0.55 0.22 280)",
    icon: Plane,
  },
  {
    module: "Real Estate",
    links: 3,
    clicks: 748,
    conversions: 28,
    earned: 6800,
    share: 19.9,
    color: "oklch(0.58 0.16 350)",
    icon: Bookmark,
  },
  {
    module: "Services",
    links: 4,
    clicks: 612,
    conversions: 45,
    earned: 3200,
    share: 9.4,
    color: "oklch(0.65 0.14 50)",
    icon: Star,
  },
  {
    module: "Healthcare",
    links: 2,
    clicks: 291,
    conversions: 18,
    earned: 1200,
    share: 3.5,
    color: "oklch(0.65 0.25 335)",
    icon: Heart,
  },
  {
    module: "Education",
    links: 2,
    clicks: 163,
    conversions: 12,
    earned: 1900,
    share: 5.6,
    color: "oklch(0.60 0.20 190)",
    icon: GraduationCap,
  },
  {
    module: "External",
    links: 6,
    clicks: 987,
    conversions: 44,
    earned: 2100,
    share: 6.1,
    color: "oklch(0.65 0.14 50)",
    icon: ExternalLink,
  },
];

const TOP_PERFORMING_LINKS = [
  {
    blog: "DJI Mini 4 Pro Review",
    affiliate: "DJI Mini 4 Pro Drone",
    clicks: 412,
    earnings: 18400,
    module: "Products",
    color: "oklch(0.52 0.14 155)",
  },
  {
    blog: "Hunza Valley Guide",
    affiliate: "7-Day Hunza Tour Package",
    clicks: 287,
    earnings: 9200,
    module: "Travel",
    color: "oklch(0.55 0.22 280)",
  },
  {
    blog: "Lahore Property Guide",
    affiliate: "DHA Phase 6 Apartment",
    clicks: 184,
    earnings: 4800,
    module: "Real Estate",
    color: "oklch(0.58 0.16 350)",
  },
  {
    blog: "Freelance Income Guide",
    affiliate: "Full-Stack Dev Course",
    clicks: 163,
    earnings: 1900,
    module: "Education",
    color: "oklch(0.60 0.20 190)",
  },
  {
    blog: "Home Renovation Tips",
    affiliate: "AC Installation Service",
    clicks: 201,
    earnings: 2400,
    module: "Services",
    color: "oklch(0.65 0.14 50)",
  },
];

const REFERRAL_ROWS = [
  {
    code: "FS-A2F3-2026",
    user: "Zara Malik",
    date: "Mar 1, 2026",
    action: "Product Purchase",
    commission: 850,
    status: "paid",
  },
  {
    code: "FS-A2F3-2026",
    user: "Ahmed Raza",
    date: "Feb 27, 2026",
    action: "Tour Booking",
    commission: 2400,
    status: "pending",
  },
  {
    code: "FS-A2F3-2026",
    user: "Fatima Khan",
    date: "Feb 24, 2026",
    action: "Course Enrollment",
    commission: 750,
    status: "paid",
  },
  {
    code: "FS-A2F3-2026",
    user: "Omar Siddiqui",
    date: "Feb 20, 2026",
    action: "Property Inquiry",
    commission: 1200,
    status: "pending",
  },
  {
    code: "FS-A2F3-2026",
    user: "Aisha Tariq",
    date: "Feb 15, 2026",
    action: "Service Booking",
    commission: 400,
    status: "paid",
  },
  {
    code: "FS-A2F3-2026",
    user: "Hassan Ali",
    date: "Feb 10, 2026",
    action: "Job Application",
    commission: 600,
    status: "pending",
  },
];

// Monthly affiliate bar chart
const AFFILIATE_MONTHLY = [
  { month: "Sep", value: 3200 },
  { month: "Oct", value: 4800 },
  { month: "Nov", value: 5100 },
  { month: "Dec", value: 6400 },
  { month: "Jan", value: 7200 },
  { month: "Feb", value: 8900 },
];

function ModuleBadge({ module, color }: { module: string; color: string }) {
  return (
    <span
      className="inline-flex items-center text-[10px] font-label font-semibold px-2 py-0.5 rounded-full"
      style={{ background: `${color}18`, color }}
    >
      {module}
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  const configs: Record<string, { bg: string; color: string; label: string }> =
    {
      active: {
        bg: "oklch(0.52 0.14 155 / 0.12)",
        color: "oklch(0.32 0.10 155)",
        label: "Active",
      },
      pending: {
        bg: "oklch(0.72 0.17 85 / 0.15)",
        color: "oklch(0.48 0.14 65)",
        label: "Pending",
      },
      expired: {
        bg: "oklch(0.55 0.22 25 / 0.12)",
        color: "oklch(0.45 0.18 25)",
        label: "Expired",
      },
      paid: {
        bg: "oklch(0.52 0.14 155 / 0.12)",
        color: "oklch(0.32 0.10 155)",
        label: "Paid",
      },
    };
  const cfg = configs[status] || configs.pending;
  return (
    <span
      className="text-[10px] font-label font-semibold px-2 py-0.5 rounded-full"
      style={{ background: cfg.bg, color: cfg.color }}
    >
      {cfg.label}
    </span>
  );
}

export default function DashboardPage() {
  const { formatCurrency } = useCurrency();
  const userOrders: Array<{
    id: string;
    date: string;
    items: Array<{ name: string; qty: number; price: number }>;
    total: number;
    status: string;
    billing?: unknown;
  }> = (() => {
    try {
      return JSON.parse(localStorage.getItem("ic_user_orders") || "[]");
    } catch {
      return [];
    }
  })();
  const maxVal = Math.max(...MONTHLY_DATA.map((d) => d.value));
  const maxAffVal = Math.max(...AFFILIATE_MONTHLY.map((d) => d.value));

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 animate-fade-up">
        <h1 className="text-3xl font-display font-bold text-foreground">
          Dashboard
        </h1>
        <p className="text-muted-foreground mt-1">
          Your earnings and activity overview
        </p>
      </div>

      <Tabs defaultValue="overview" className="animate-fade-up">
        <TabsList className="mb-6 h-10">
          <TabsTrigger value="overview" className="font-label text-sm">
            📊 Overview
          </TabsTrigger>
          <TabsTrigger value="delivery" className="font-label text-sm">
            🚚 Delivery Income
          </TabsTrigger>
          <TabsTrigger value="affiliate" className="font-label text-sm">
            🔗 Affiliate &amp; Commissions
          </TabsTrigger>
        </TabsList>

        {/* ── OVERVIEW TAB ─────────────────────────────────────────── */}
        <TabsContent value="overview" className="mt-0">
          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-card border border-border rounded-xl shadow-card p-5 animate-fade-up"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: `${stat.color}15` }}
                    >
                      <Icon size={17} style={{ color: stat.color }} />
                    </div>
                    <div
                      className="flex items-center gap-1 text-xs font-label font-semibold"
                      style={{
                        color: stat.positive
                          ? "oklch(0.52 0.14 155)"
                          : "oklch(0.55 0.22 25)",
                      }}
                    >
                      {stat.positive ? (
                        <ArrowUpRight size={13} />
                      ) : (
                        <ArrowDownRight size={13} />
                      )}
                      {stat.change}
                    </div>
                  </div>
                  <p className="text-2xl font-display font-bold text-foreground">
                    {typeof stat.value === "number"
                      ? formatCurrency(stat.value)
                      : stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground font-label mt-0.5">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
            {/* Bar Chart */}
            <div className="xl:col-span-2 bg-card border border-border rounded-xl shadow-card p-5 animate-fade-up animate-fade-up-1">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-label font-semibold text-foreground">
                    Monthly Revenue
                  </h2>
                  <p className="text-xs text-muted-foreground">Last 6 months</p>
                </div>
                <Badge className="font-label text-xs bg-primary/10 text-primary border-0">
                  ₹284.5K total
                </Badge>
              </div>
              <div className="flex items-end gap-3 h-36">
                {MONTHLY_DATA.map((d) => (
                  <div
                    key={d.month}
                    className="flex-1 flex flex-col items-center gap-1.5"
                  >
                    <div
                      className="w-full flex flex-col justify-end"
                      style={{ height: "120px" }}
                    >
                      <div
                        className="w-full rounded-t-md chart-bar"
                        style={{
                          height: `${(d.value / maxVal) * 100}%`,
                          background:
                            d.month === "Feb"
                              ? "oklch(var(--primary))"
                              : "oklch(var(--primary) / 0.3)",
                        }}
                      />
                    </div>
                    <span className="text-[10px] font-label text-muted-foreground">
                      {d.month}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Earnings breakdown */}
            <div className="bg-card border border-border rounded-xl shadow-card p-5 animate-fade-up animate-fade-up-2">
              <h2 className="font-label font-semibold text-foreground mb-4">
                Earnings by Category
              </h2>
              <div className="space-y-3">
                {EARNINGS.map((cat) => (
                  <div key={cat.label}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ background: cat.color }}
                        />
                        <span className="text-xs font-label text-foreground">
                          {cat.label}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-label font-semibold text-foreground">
                          {cat.percentage}%
                        </span>
                      </div>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${cat.percentage}%`,
                          background: cat.color,
                        }}
                      />
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-0.5 font-label">
                      {formatCurrency(cat.amount)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Transactions */}
          <div className="bg-card border border-border rounded-xl shadow-card animate-fade-up animate-fade-up-3">
            <div className="p-5 border-b border-border">
              <h2 className="font-label font-semibold text-foreground">
                Recent Transactions
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                Last 30 days of activity
              </p>
            </div>
            <div className="divide-y divide-border">
              {TRANSACTIONS.map((tx) => {
                const typeColor =
                  TYPE_COLORS[tx.type] || "oklch(0.52 0.14 155)";
                const statusStyle = STATUS_STYLES[tx.status];
                return (
                  <div
                    key={tx.id}
                    className="flex items-center gap-4 px-5 py-3.5 hover:bg-secondary/30 transition-colors"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-label font-bold shrink-0"
                      style={{ background: `${typeColor}15`, color: typeColor }}
                    >
                      {tx.type.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-label font-medium text-foreground truncate">
                        {tx.description}
                      </p>
                      <p className="text-xs text-muted-foreground">{tx.date}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p
                        className="text-sm font-label font-semibold"
                        style={{ color: "oklch(0.52 0.14 155)" }}
                      >
                        {typeof tx.amount === "number"
                          ? `+${formatCurrency(tx.amount)}`
                          : tx.amount}
                      </p>
                      <span
                        className="text-[10px] font-label px-1.5 py-0.5 rounded"
                        style={{
                          background: statusStyle.bg,
                          color: statusStyle.text,
                        }}
                      >
                        {statusStyle.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </TabsContent>

        {/* ── DELIVERY INCOME TAB ──────────────────────────────────── */}
        <TabsContent value="delivery" className="mt-0">
          {/* Delivery summary cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              {
                label: "Total Deliveries",
                value: "47",
                color: "oklch(0.72 0.17 55)",
                icon: Truck,
              },
              {
                label: "This Month",
                value: 23500,
                color: "oklch(0.52 0.14 155)",
                icon: TrendingUp,
              },
              {
                label: "Pending Payout",
                value: 4200,
                color: "oklch(0.72 0.17 85)",
                icon: Briefcase,
              },
              {
                label: "Avg Per Delivery",
                value: 500,
                color: "oklch(0.60 0.20 190)",
                icon: Percent,
              },
            ].map(({ label, value, color, icon: Icon }) => (
              <div
                key={label}
                className="bg-card border border-border rounded-xl p-5"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: `${color}15` }}
                >
                  <Icon size={17} style={{ color }} />
                </div>
                <p className="text-2xl font-display font-bold text-foreground">
                  {typeof value === "number" ? formatCurrency(value) : value}
                </p>
                <p className="text-xs text-muted-foreground font-label mt-0.5">
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* My Orders table */}
          <div
            className="bg-card border border-border rounded-xl shadow-card mb-8"
            data-ocid="dashboard.orders.table"
          >
            <div className="p-5 border-b border-border">
              <h2 className="font-label font-semibold text-foreground">
                My Orders
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                Orders placed from Shop
              </p>
            </div>
            <div className="overflow-x-auto">
              {userOrders.length === 0 ? (
                <div
                  className="p-8 text-center"
                  data-ocid="dashboard.orders.empty_state"
                >
                  <p className="text-sm font-semibold text-muted-foreground">
                    No orders yet
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Start shopping to see your orders here!
                  </p>
                </div>
              ) : (
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-secondary/30">
                      <th className="text-left px-5 py-3 text-xs font-label font-semibold text-muted-foreground">
                        Order #
                      </th>
                      <th className="text-left px-4 py-3 text-xs font-label font-semibold text-muted-foreground">
                        Date
                      </th>
                      <th className="text-left px-4 py-3 text-xs font-label font-semibold text-muted-foreground">
                        Items
                      </th>
                      <th className="text-right px-4 py-3 text-xs font-label font-semibold text-muted-foreground">
                        Total
                      </th>
                      <th className="text-center px-4 py-3 text-xs font-label font-semibold text-muted-foreground">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {userOrders.slice(0, 10).map((order, idx) => (
                      <tr
                        key={order.id}
                        className="hover:bg-secondary/20 transition-colors"
                        data-ocid={`dashboard.orders.item.${idx + 1}`}
                      >
                        <td className="px-5 py-3 text-xs font-label font-mono text-foreground">
                          {order.id}
                        </td>
                        <td className="px-4 py-3 text-xs text-muted-foreground">
                          {new Date(order.date).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </td>
                        <td className="px-4 py-3 text-xs font-label text-foreground">
                          {order.items
                            ?.slice(0, 2)
                            .map((it) => it.name)
                            .join(", ")}
                          {(order.items?.length ?? 0) > 2 &&
                            ` +${(order.items?.length ?? 0) - 2} more`}
                        </td>
                        <td
                          className="px-4 py-3 text-xs font-label font-semibold text-right"
                          style={{ color: "oklch(0.52 0.14 155)" }}
                        >
                          ₹{order.total?.toLocaleString()}
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span
                            className="text-[10px] font-label font-semibold px-2 py-0.5 rounded-full"
                            style={
                              order.status === "Delivered"
                                ? {
                                    background: "oklch(0.52 0.14 155 / 0.12)",
                                    color: "oklch(0.32 0.085 155)",
                                  }
                                : order.status === "Shipped"
                                  ? {
                                      background: "oklch(0.55 0.22 280 / 0.12)",
                                      color: "oklch(0.45 0.18 280)",
                                    }
                                  : order.status === "Confirmed"
                                    ? {
                                        background:
                                          "oklch(0.72 0.17 85 / 0.15)",
                                        color: "oklch(0.55 0.14 65)",
                                      }
                                    : {
                                        background:
                                          "oklch(0.62 0.2 230 / 0.12)",
                                        color: "oklch(0.45 0.15 230)",
                                      }
                            }
                          >
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>

          {/* Monthly delivery bar chart */}
          <div className="bg-card border border-border rounded-xl shadow-card p-5">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-label font-semibold text-foreground">
                  Monthly Delivery Earnings
                </h2>
                <p className="text-xs text-muted-foreground">Last 6 months</p>
              </div>
              <Badge
                className="font-label text-xs border-0"
                style={{
                  background: "oklch(0.72 0.17 55 / 0.15)",
                  color: "oklch(0.55 0.14 55)",
                }}
              >
                ₹23.5K this month
              </Badge>
            </div>
            <div className="flex items-end gap-3 h-36">
              {[
                { month: "Sep", value: 8400 },
                { month: "Oct", value: 14200 },
                { month: "Nov", value: 11800 },
                { month: "Dec", value: 18600 },
                { month: "Jan", value: 16400 },
                { month: "Feb", value: 23500 },
              ].map((d) => {
                const maxDelivery = 23500;
                return (
                  <div
                    key={d.month}
                    className="flex-1 flex flex-col items-center gap-1.5"
                  >
                    <div
                      className="w-full flex flex-col justify-end"
                      style={{ height: "120px" }}
                    >
                      <div
                        className="w-full rounded-t-md"
                        style={{
                          height: `${(d.value / maxDelivery) * 100}%`,
                          background:
                            d.month === "Feb"
                              ? "oklch(0.72 0.17 55)"
                              : "oklch(0.72 0.17 55 / 0.3)",
                        }}
                      />
                    </div>
                    <span className="text-[10px] font-label text-muted-foreground">
                      {d.month}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </TabsContent>

        {/* ── AFFILIATE & COMMISSIONS TAB ──────────────────────────── */}
        <TabsContent value="affiliate" className="mt-0">
          {/* Summary cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {AFFILIATE_SUMMARY_STATS.map(
              ({ label, value, color, icon: Icon }) => (
                <div
                  key={label}
                  className="bg-card border border-border rounded-xl p-5"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: `${color}15` }}
                  >
                    <Icon size={17} style={{ color }} />
                  </div>
                  <p className="text-2xl font-display font-bold text-foreground">
                    {typeof value === "number" ? formatCurrency(value) : value}
                  </p>
                  <p className="text-xs text-muted-foreground font-label mt-0.5">
                    {label}
                  </p>
                </div>
              ),
            )}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
            {/* Affiliate bar chart */}
            <div className="xl:col-span-2 bg-card border border-border rounded-xl shadow-card p-5">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-label font-semibold text-foreground">
                    Monthly Affiliate Earnings
                  </h2>
                  <p className="text-xs text-muted-foreground">Last 6 months</p>
                </div>
                <Badge
                  className="font-label text-xs border-0"
                  style={{
                    background: "oklch(0.55 0.22 280 / 0.15)",
                    color: "oklch(0.55 0.22 280)",
                  }}
                >
                  ₹35.6K total
                </Badge>
              </div>
              <div className="flex items-end gap-3 h-36">
                {AFFILIATE_MONTHLY.map((d) => (
                  <div
                    key={d.month}
                    className="flex-1 flex flex-col items-center gap-1.5"
                  >
                    <div
                      className="w-full flex flex-col justify-end"
                      style={{ height: "120px" }}
                    >
                      <div
                        className="w-full rounded-t-md chart-bar"
                        style={{
                          height: `${(d.value / maxAffVal) * 100}%`,
                          background:
                            d.month === "Feb"
                              ? "oklch(0.55 0.22 280)"
                              : "oklch(0.55 0.22 280 / 0.3)",
                        }}
                      />
                    </div>
                    <span className="text-[10px] font-label text-muted-foreground">
                      {d.month}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Module breakdown */}
            <div className="bg-card border border-border rounded-xl shadow-card p-5">
              <h2 className="font-label font-semibold text-foreground mb-4">
                By Module
              </h2>
              <div className="space-y-2.5">
                {MODULE_BREAKDOWN.slice(0, 5).map((m) => (
                  <div key={m.module}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ background: m.color }}
                        />
                        <span className="text-xs font-label text-foreground">
                          {m.module}
                        </span>
                      </div>
                      <span className="text-xs font-label font-semibold text-foreground">
                        {m.share}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${m.share}%`, background: m.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Per-module breakdown table */}
          <div className="bg-card border border-border rounded-xl shadow-card mb-8">
            <div className="p-5 border-b border-border">
              <h2 className="font-label font-semibold text-foreground">
                Module Breakdown
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                Performance by module
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="text-left px-5 py-3 text-xs font-label font-semibold text-muted-foreground">
                      Module
                    </th>
                    <th className="text-right px-4 py-3 text-xs font-label font-semibold text-muted-foreground">
                      Links
                    </th>
                    <th className="text-right px-4 py-3 text-xs font-label font-semibold text-muted-foreground">
                      Clicks
                    </th>
                    <th className="text-right px-4 py-3 text-xs font-label font-semibold text-muted-foreground">
                      Conversions
                    </th>
                    <th className="text-right px-4 py-3 text-xs font-label font-semibold text-muted-foreground">
                      Earned
                    </th>
                    <th className="text-right px-4 py-3 text-xs font-label font-semibold text-muted-foreground">
                      % Share
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {MODULE_BREAKDOWN.map((m) => {
                    const Icon = m.icon;
                    return (
                      <tr
                        key={m.module}
                        className="hover:bg-secondary/20 transition-colors"
                      >
                        <td className="px-5 py-3">
                          <div className="flex items-center gap-2">
                            <div
                              className="w-7 h-7 rounded-lg flex items-center justify-center"
                              style={{ background: `${m.color}15` }}
                            >
                              <Icon size={13} style={{ color: m.color }} />
                            </div>
                            <ModuleBadge module={m.module} color={m.color} />
                          </div>
                        </td>
                        <td className="px-4 py-3 text-xs font-label text-right text-muted-foreground">
                          {m.links}
                        </td>
                        <td className="px-4 py-3 text-xs font-label text-right text-foreground">
                          {m.clicks.toLocaleString()}
                        </td>
                        <td className="px-4 py-3 text-xs font-label text-right text-foreground">
                          {m.conversions}
                        </td>
                        <td
                          className="px-4 py-3 text-xs font-label font-semibold text-right"
                          style={{ color: "oklch(0.52 0.14 155)" }}
                        >
                          {m.earned.toLocaleString()}
                        </td>
                        <td className="px-4 py-3 text-xs font-label text-right text-muted-foreground">
                          {m.share}%
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Top performing links */}
          <div className="mb-8">
            <h2 className="font-label font-semibold text-foreground mb-4">
              Top Performing Links
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
              {TOP_PERFORMING_LINKS.map((link, idx) => (
                <div
                  key={`${link.blog}-${link.affiliate}`}
                  className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-display font-bold"
                      style={{
                        background: `${link.color}15`,
                        color: link.color,
                      }}
                    >
                      {idx + 1}
                    </div>
                    <ModuleBadge module={link.module} color={link.color} />
                  </div>
                  <p className="text-xs font-label text-muted-foreground mb-0.5">
                    {link.blog}
                  </p>
                  <p className="text-sm font-label font-semibold text-foreground mb-2 line-clamp-1">
                    {link.affiliate}
                  </p>
                  <div className="flex items-center justify-between text-xs font-label">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Eye size={11} /> {link.clicks} clicks
                    </span>
                    <span
                      className="font-semibold"
                      style={{ color: "oklch(0.52 0.14 155)" }}
                    >
                      {formatCurrency(link.earnings)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Referral tracking */}
          <div className="bg-card border border-border rounded-xl shadow-card">
            <div className="p-5 border-b border-border">
              <h2 className="font-label font-semibold text-foreground">
                Referral Tracking
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                Commissions from your referral code
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="text-left px-5 py-3 text-xs font-label font-semibold text-muted-foreground">
                      Referral Code
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-label font-semibold text-muted-foreground">
                      Referred User
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-label font-semibold text-muted-foreground">
                      Date
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-label font-semibold text-muted-foreground">
                      Action
                    </th>
                    <th className="text-right px-4 py-3 text-xs font-label font-semibold text-muted-foreground">
                      Commission
                    </th>
                    <th className="text-center px-4 py-3 text-xs font-label font-semibold text-muted-foreground">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {REFERRAL_ROWS.map((row) => (
                    <tr
                      key={`${row.user}-${row.date}`}
                      className="hover:bg-secondary/20 transition-colors"
                    >
                      <td className="px-5 py-3 text-xs font-label font-mono text-foreground">
                        {row.code}
                      </td>
                      <td className="px-4 py-3 text-xs font-label font-medium text-foreground">
                        {row.user}
                      </td>
                      <td className="px-4 py-3 text-xs text-muted-foreground">
                        {row.date}
                      </td>
                      <td className="px-4 py-3 text-xs text-muted-foreground">
                        {row.action}
                      </td>
                      <td
                        className="px-4 py-3 text-xs font-label font-semibold text-right"
                        style={{ color: "oklch(0.52 0.14 155)" }}
                      >
                        {typeof row.commission === "number"
                          ? formatCurrency(row.commission)
                          : row.commission}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <StatusBadge status={row.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Footer */}
      <div className="mt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()}.{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-foreground transition-colors"
        >
          Built with ♥ using caffeine.ai
        </a>
      </div>
    </div>
  );
}
