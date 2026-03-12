import { o as createLucideIcon, F as useCurrency, j as jsxRuntimeExports, z as ShoppingBag, i as Briefcase, P as Plane, H as Heart, G as GraduationCap } from "./index-Daa_jkDV.js";
import { B as Badge } from "./badge-CgPShR5m.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-C44-sP5D.js";
import { T as TrendingUp } from "./trending-up-CN29-WRZ.js";
import { C as Calendar } from "./calendar-DYxx0An1.js";
import { P as Percent } from "./percent-B2lxsU3u.js";
import { T as Truck } from "./truck-B4ugHN7G.js";
import { E as Eye } from "./eye-DGxQqMzF.js";
import { B as Bookmark } from "./bookmark-BjjkSvdL.js";
import { S as Star } from "./star-QRKfelm0.js";
import { E as ExternalLink } from "./external-link-BTlYDj87.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m7 7 10 10", key: "1fmybs" }],
  ["path", { d: "M17 7v10H7", key: "6fjiku" }]
];
const ArrowDownRight = createLucideIcon("arrow-down-right", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
];
const ArrowUpRight = createLucideIcon("arrow-up-right", __iconNode);
const STATS = [
  {
    label: "Total Earnings",
    value: 284500,
    change: "+18.2%",
    positive: true,
    icon: TrendingUp,
    color: "oklch(0.52 0.14 155)"
  },
  {
    label: "Active Orders",
    value: "12",
    change: "+3",
    positive: true,
    icon: ShoppingBag,
    color: "oklch(0.65 0.14 50)"
  },
  {
    label: "Bookings",
    value: "8",
    change: "-2",
    positive: false,
    icon: Calendar,
    color: "oklch(0.48 0.12 260)"
  },
  {
    label: "Commission Earned",
    value: 18600,
    change: "+12.5%",
    positive: true,
    icon: Percent,
    color: "oklch(0.72 0.17 85)"
  },
  {
    label: "Delivery Income",
    value: 23500,
    change: "+8.4%",
    positive: true,
    icon: Truck,
    color: "oklch(0.72 0.17 55)"
  }
];
const TRANSACTIONS = [
  {
    id: 1,
    description: "Product Sale — Honda Civic Rental",
    type: "Product",
    amount: 15e3,
    date: "Mar 1, 2026",
    status: "completed"
  },
  {
    id: 2,
    description: "Service Booking — Math Tutoring",
    type: "Service",
    amount: 4500,
    date: "Feb 28, 2026",
    status: "completed"
  },
  {
    id: 3,
    description: "Affiliate Commission — TechPK",
    type: "Affiliate",
    amount: 2200,
    date: "Feb 27, 2026",
    status: "completed"
  },
  {
    id: 4,
    description: "Delivery Job — QuickEats x4",
    type: "Job",
    amount: 2800,
    date: "Feb 26, 2026",
    status: "completed"
  },
  {
    id: 5,
    description: "Property Rental — Johar Town Flat",
    type: "Real Estate",
    amount: 45e3,
    date: "Feb 25, 2026",
    status: "completed"
  },
  {
    id: 6,
    description: "Service Booking — AC Repair",
    type: "Service",
    amount: 6e3,
    date: "Feb 24, 2026",
    status: "pending"
  },
  {
    id: 7,
    description: "Product Sale — Bridal Lehenga",
    type: "Product",
    amount: 8e3,
    date: "Feb 23, 2026",
    status: "completed"
  },
  {
    id: 8,
    description: "Job Recruitment Commission",
    type: "Job",
    amount: 12e3,
    date: "Feb 22, 2026",
    status: "cancelled"
  }
];
const EARNINGS = [
  {
    label: "Products",
    amount: 98500,
    percentage: 34.6,
    color: "oklch(0.52 0.14 155)"
  },
  {
    label: "Services",
    amount: 82e3,
    percentage: 28.8,
    color: "oklch(0.65 0.14 50)"
  },
  {
    label: "Real Estate",
    amount: 65e3,
    percentage: 22.9,
    color: "oklch(0.48 0.12 260)"
  },
  {
    label: "Jobs",
    amount: 22400,
    percentage: 7.9,
    color: "oklch(0.72 0.17 85)"
  },
  {
    label: "Affiliates",
    amount: 16600,
    percentage: 5.8,
    color: "oklch(0.58 0.16 350)"
  }
];
const STATUS_STYLES = {
  completed: {
    bg: "oklch(0.52 0.14 155 / 0.12)",
    text: "oklch(0.32 0.085 155)",
    label: "Completed"
  },
  pending: {
    bg: "oklch(0.72 0.17 85 / 0.15)",
    text: "oklch(0.55 0.14 65)",
    label: "Pending"
  },
  cancelled: {
    bg: "oklch(0.55 0.22 25 / 0.12)",
    text: "oklch(0.45 0.18 25)",
    label: "Cancelled"
  }
};
const TYPE_COLORS = {
  Product: "oklch(0.52 0.14 155)",
  Service: "oklch(0.65 0.14 50)",
  Affiliate: "oklch(0.72 0.17 85)",
  Job: "oklch(0.48 0.12 260)",
  "Real Estate": "oklch(0.58 0.16 350)"
};
const MONTHLY_DATA = [
  { month: "Sep", value: 48 },
  { month: "Oct", value: 72 },
  { month: "Nov", value: 61 },
  { month: "Dec", value: 85 },
  { month: "Jan", value: 78 },
  { month: "Feb", value: 100 }
];
const AFFILIATE_SUMMARY_STATS = [
  {
    label: "Total Clicks",
    value: "5,847",
    color: "oklch(0.55 0.22 280)",
    icon: Eye
  },
  {
    label: "Total Conversions",
    value: "312",
    color: "oklch(0.52 0.14 155)",
    icon: TrendingUp
  },
  {
    label: "Affiliate Earned",
    value: 34200,
    color: "oklch(0.52 0.14 155)",
    icon: Percent
  },
  {
    label: "Pending Payout",
    value: 8400,
    color: "oklch(0.72 0.17 85)",
    icon: Calendar
  }
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
    icon: ShoppingBag
  },
  {
    module: "Travel",
    links: 5,
    clicks: 1204,
    conversions: 71,
    earned: 10200,
    share: 29.8,
    color: "oklch(0.55 0.22 280)",
    icon: Plane
  },
  {
    module: "Real Estate",
    links: 3,
    clicks: 748,
    conversions: 28,
    earned: 6800,
    share: 19.9,
    color: "oklch(0.58 0.16 350)",
    icon: Bookmark
  },
  {
    module: "Services",
    links: 4,
    clicks: 612,
    conversions: 45,
    earned: 3200,
    share: 9.4,
    color: "oklch(0.65 0.14 50)",
    icon: Star
  },
  {
    module: "Healthcare",
    links: 2,
    clicks: 291,
    conversions: 18,
    earned: 1200,
    share: 3.5,
    color: "oklch(0.65 0.25 335)",
    icon: Heart
  },
  {
    module: "Education",
    links: 2,
    clicks: 163,
    conversions: 12,
    earned: 1900,
    share: 5.6,
    color: "oklch(0.60 0.20 190)",
    icon: GraduationCap
  },
  {
    module: "External",
    links: 6,
    clicks: 987,
    conversions: 44,
    earned: 2100,
    share: 6.1,
    color: "oklch(0.65 0.14 50)",
    icon: ExternalLink
  }
];
const TOP_PERFORMING_LINKS = [
  {
    blog: "DJI Mini 4 Pro Review",
    affiliate: "DJI Mini 4 Pro Drone",
    clicks: 412,
    earnings: 18400,
    module: "Products",
    color: "oklch(0.52 0.14 155)"
  },
  {
    blog: "Hunza Valley Guide",
    affiliate: "7-Day Hunza Tour Package",
    clicks: 287,
    earnings: 9200,
    module: "Travel",
    color: "oklch(0.55 0.22 280)"
  },
  {
    blog: "Lahore Property Guide",
    affiliate: "DHA Phase 6 Apartment",
    clicks: 184,
    earnings: 4800,
    module: "Real Estate",
    color: "oklch(0.58 0.16 350)"
  },
  {
    blog: "Freelance Income Guide",
    affiliate: "Full-Stack Dev Course",
    clicks: 163,
    earnings: 1900,
    module: "Education",
    color: "oklch(0.60 0.20 190)"
  },
  {
    blog: "Home Renovation Tips",
    affiliate: "AC Installation Service",
    clicks: 201,
    earnings: 2400,
    module: "Services",
    color: "oklch(0.65 0.14 50)"
  }
];
const REFERRAL_ROWS = [
  {
    code: "FS-A2F3-2026",
    user: "Zara Malik",
    date: "Mar 1, 2026",
    action: "Product Purchase",
    commission: 850,
    status: "paid"
  },
  {
    code: "FS-A2F3-2026",
    user: "Ahmed Raza",
    date: "Feb 27, 2026",
    action: "Tour Booking",
    commission: 2400,
    status: "pending"
  },
  {
    code: "FS-A2F3-2026",
    user: "Fatima Khan",
    date: "Feb 24, 2026",
    action: "Course Enrollment",
    commission: 750,
    status: "paid"
  },
  {
    code: "FS-A2F3-2026",
    user: "Omar Siddiqui",
    date: "Feb 20, 2026",
    action: "Property Inquiry",
    commission: 1200,
    status: "pending"
  },
  {
    code: "FS-A2F3-2026",
    user: "Aisha Tariq",
    date: "Feb 15, 2026",
    action: "Service Booking",
    commission: 400,
    status: "paid"
  },
  {
    code: "FS-A2F3-2026",
    user: "Hassan Ali",
    date: "Feb 10, 2026",
    action: "Job Application",
    commission: 600,
    status: "pending"
  }
];
const AFFILIATE_MONTHLY = [
  { month: "Sep", value: 3200 },
  { month: "Oct", value: 4800 },
  { month: "Nov", value: 5100 },
  { month: "Dec", value: 6400 },
  { month: "Jan", value: 7200 },
  { month: "Feb", value: 8900 }
];
function ModuleBadge({ module, color }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "inline-flex items-center text-[10px] font-label font-semibold px-2 py-0.5 rounded-full",
      style: { background: `${color}18`, color },
      children: module
    }
  );
}
function StatusBadge({ status }) {
  const configs = {
    active: {
      bg: "oklch(0.52 0.14 155 / 0.12)",
      color: "oklch(0.32 0.10 155)",
      label: "Active"
    },
    pending: {
      bg: "oklch(0.72 0.17 85 / 0.15)",
      color: "oklch(0.48 0.14 65)",
      label: "Pending"
    },
    expired: {
      bg: "oklch(0.55 0.22 25 / 0.12)",
      color: "oklch(0.45 0.18 25)",
      label: "Expired"
    },
    paid: {
      bg: "oklch(0.52 0.14 155 / 0.12)",
      color: "oklch(0.32 0.10 155)",
      label: "Paid"
    }
  };
  const cfg = configs[status] || configs.pending;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "text-[10px] font-label font-semibold px-2 py-0.5 rounded-full",
      style: { background: cfg.bg, color: cfg.color },
      children: cfg.label
    }
  );
}
function DashboardPage() {
  const { formatCurrency } = useCurrency();
  const maxVal = Math.max(...MONTHLY_DATA.map((d) => d.value));
  const maxAffVal = Math.max(...AFFILIATE_MONTHLY.map((d) => d.value));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 lg:p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 animate-fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-display font-bold text-foreground", children: "Dashboard" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: "Your earnings and activity overview" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "overview", className: "animate-fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "mb-6 h-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "overview", className: "font-label text-sm", children: "📊 Overview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "delivery", className: "font-label text-sm", children: "🚚 Delivery Income" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "affiliate", className: "font-label text-sm", children: "🔗 Affiliate & Commissions" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "overview", className: "mt-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8", children: STATS.map((stat, i) => {
          const Icon = stat.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-xl shadow-card p-5 animate-fade-up",
              style: { animationDelay: `${i * 0.05}s` },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-9 h-9 rounded-lg flex items-center justify-center",
                      style: { background: `${stat.color}15` },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 17, style: { color: stat.color } })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-1 text-xs font-label font-semibold",
                      style: {
                        color: stat.positive ? "oklch(0.52 0.14 155)" : "oklch(0.55 0.22 25)"
                      },
                      children: [
                        stat.positive ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 13 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownRight, { size: 13 }),
                        stat.change
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-display font-bold text-foreground", children: typeof stat.value === "number" ? formatCurrency(stat.value) : stat.value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-label mt-0.5", children: stat.label })
              ]
            },
            stat.label
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "xl:col-span-2 bg-card border border-border rounded-xl shadow-card p-5 animate-fade-up animate-fade-up-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-label font-semibold text-foreground", children: "Monthly Revenue" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Last 6 months" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "font-label text-xs bg-primary/10 text-primary border-0", children: "₹284.5K total" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-3 h-36", children: MONTHLY_DATA.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex-1 flex flex-col items-center gap-1.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-full flex flex-col justify-end",
                      style: { height: "120px" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-full rounded-t-md chart-bar",
                          style: {
                            height: `${d.value / maxVal * 100}%`,
                            background: d.month === "Feb" ? "oklch(var(--primary))" : "oklch(var(--primary) / 0.3)"
                          }
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-label text-muted-foreground", children: d.month })
                ]
              },
              d.month
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl shadow-card p-5 animate-fade-up animate-fade-up-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-label font-semibold text-foreground mb-4", children: "Earnings by Category" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: EARNINGS.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-2 h-2 rounded-full",
                      style: { background: cat.color }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label text-foreground", children: cat.label })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-label font-semibold text-foreground", children: [
                  cat.percentage,
                  "%"
                ] }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-secondary overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-full rounded-full transition-all duration-700",
                  style: {
                    width: `${cat.percentage}%`,
                    background: cat.color
                  }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-0.5 font-label", children: formatCurrency(cat.amount) })
            ] }, cat.label)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl shadow-card animate-fade-up animate-fade-up-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-label font-semibold text-foreground", children: "Recent Transactions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Last 30 days of activity" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: TRANSACTIONS.map((tx) => {
            const typeColor = TYPE_COLORS[tx.type] || "oklch(0.52 0.14 155)";
            const statusStyle = STATUS_STYLES[tx.status];
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-4 px-5 py-3.5 hover:bg-secondary/30 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-8 h-8 rounded-lg flex items-center justify-center text-xs font-label font-bold shrink-0",
                      style: { background: `${typeColor}15`, color: typeColor },
                      children: tx.type.charAt(0)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-medium text-foreground truncate", children: tx.description }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: tx.date })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-sm font-label font-semibold",
                        style: { color: "oklch(0.52 0.14 155)" },
                        children: typeof tx.amount === "number" ? `+${formatCurrency(tx.amount)}` : tx.amount
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-[10px] font-label px-1.5 py-0.5 rounded",
                        style: {
                          background: statusStyle.bg,
                          color: statusStyle.text
                        },
                        children: statusStyle.label
                      }
                    )
                  ] })
                ]
              },
              tx.id
            );
          }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "delivery", className: "mt-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8", children: [
          {
            label: "Total Deliveries",
            value: "47",
            color: "oklch(0.72 0.17 55)",
            icon: Truck
          },
          {
            label: "This Month",
            value: 23500,
            color: "oklch(0.52 0.14 155)",
            icon: TrendingUp
          },
          {
            label: "Pending Payout",
            value: 4200,
            color: "oklch(0.72 0.17 85)",
            icon: Briefcase
          },
          {
            label: "Avg Per Delivery",
            value: 500,
            color: "oklch(0.60 0.20 190)",
            icon: Percent
          }
        ].map(({ label, value, color, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card border border-border rounded-xl p-5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-9 h-9 rounded-lg flex items-center justify-center mb-3",
                  style: { background: `${color}15` },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 17, style: { color } })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-display font-bold text-foreground", children: typeof value === "number" ? formatCurrency(value) : value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-label mt-0.5", children: label })
            ]
          },
          label
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl shadow-card mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-label font-semibold text-foreground", children: "Recent Deliveries" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Last 5 completed deliveries" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-secondary/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-5 py-3 text-xs font-label font-semibold text-muted-foreground", children: "Order #" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-xs font-label font-semibold text-muted-foreground", children: "Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-xs font-label font-semibold text-muted-foreground", children: "Platform" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 text-xs font-label font-semibold text-muted-foreground", children: "Amount" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center px-4 py-3 text-xs font-label font-semibold text-muted-foreground", children: "Status" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: [
              {
                order: "QE-2290",
                date: "Mar 1, 2026",
                platform: "QuickEats",
                amount: 700,
                status: "Paid"
              },
              {
                order: "QE-2245",
                date: "Feb 28, 2026",
                platform: "QuickEats",
                amount: 650,
                status: "Paid"
              },
              {
                order: "QE-2201",
                date: "Feb 28, 2026",
                platform: "QuickEats",
                amount: 700,
                status: "Pending"
              },
              {
                order: "QE-2188",
                date: "Feb 27, 2026",
                platform: "QuickEats",
                amount: 750,
                status: "Paid"
              },
              {
                order: "QE-2150",
                date: "Feb 26, 2026",
                platform: "QuickEats",
                amount: 700,
                status: "Paid"
              }
            ].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "hover:bg-secondary/20 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 text-xs font-label font-mono text-foreground", children: row.order }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs text-muted-foreground", children: row.date }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs font-label text-foreground", children: row.platform }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: "px-4 py-3 text-xs font-label font-semibold text-right",
                      style: { color: "oklch(0.52 0.14 155)" },
                      children: row.amount
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-[10px] font-label font-semibold px-2 py-0.5 rounded-full",
                      style: row.status === "Paid" ? {
                        background: "oklch(0.52 0.14 155 / 0.12)",
                        color: "oklch(0.32 0.085 155)"
                      } : {
                        background: "oklch(0.72 0.17 85 / 0.15)",
                        color: "oklch(0.55 0.14 65)"
                      },
                      children: row.status
                    }
                  ) })
                ]
              },
              row.order
            )) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl shadow-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-label font-semibold text-foreground", children: "Monthly Delivery Earnings" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Last 6 months" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                className: "font-label text-xs border-0",
                style: {
                  background: "oklch(0.72 0.17 55 / 0.15)",
                  color: "oklch(0.55 0.14 55)"
                },
                children: "₹23.5K this month"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-3 h-36", children: [
            { month: "Sep", value: 8400 },
            { month: "Oct", value: 14200 },
            { month: "Nov", value: 11800 },
            { month: "Dec", value: 18600 },
            { month: "Jan", value: 16400 },
            { month: "Feb", value: 23500 }
          ].map((d) => {
            const maxDelivery = 23500;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex-1 flex flex-col items-center gap-1.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-full flex flex-col justify-end",
                      style: { height: "120px" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-full rounded-t-md",
                          style: {
                            height: `${d.value / maxDelivery * 100}%`,
                            background: d.month === "Feb" ? "oklch(0.72 0.17 55)" : "oklch(0.72 0.17 55 / 0.3)"
                          }
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-label text-muted-foreground", children: d.month })
                ]
              },
              d.month
            );
          }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "affiliate", className: "mt-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8", children: AFFILIATE_SUMMARY_STATS.map(
          ({ label, value, color, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-xl p-5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-9 h-9 rounded-lg flex items-center justify-center mb-3",
                    style: { background: `${color}15` },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 17, style: { color } })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-display font-bold text-foreground", children: typeof value === "number" ? formatCurrency(value) : value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-label mt-0.5", children: label })
              ]
            },
            label
          )
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "xl:col-span-2 bg-card border border-border rounded-xl shadow-card p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-label font-semibold text-foreground", children: "Monthly Affiliate Earnings" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Last 6 months" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  className: "font-label text-xs border-0",
                  style: {
                    background: "oklch(0.55 0.22 280 / 0.15)",
                    color: "oklch(0.55 0.22 280)"
                  },
                  children: "₹35.6K total"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-3 h-36", children: AFFILIATE_MONTHLY.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex-1 flex flex-col items-center gap-1.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-full flex flex-col justify-end",
                      style: { height: "120px" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-full rounded-t-md chart-bar",
                          style: {
                            height: `${d.value / maxAffVal * 100}%`,
                            background: d.month === "Feb" ? "oklch(0.55 0.22 280)" : "oklch(0.55 0.22 280 / 0.3)"
                          }
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-label text-muted-foreground", children: d.month })
                ]
              },
              d.month
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl shadow-card p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-label font-semibold text-foreground mb-4", children: "By Module" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: MODULE_BREAKDOWN.slice(0, 5).map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-2 h-2 rounded-full",
                      style: { background: m.color }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label text-foreground", children: m.module })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-label font-semibold text-foreground", children: [
                  m.share,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-secondary overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-full rounded-full transition-all duration-700",
                  style: { width: `${m.share}%`, background: m.color }
                }
              ) })
            ] }, m.module)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl shadow-card mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-label font-semibold text-foreground", children: "Module Breakdown" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Performance by module" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-secondary/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-5 py-3 text-xs font-label font-semibold text-muted-foreground", children: "Module" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 text-xs font-label font-semibold text-muted-foreground", children: "Links" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 text-xs font-label font-semibold text-muted-foreground", children: "Clicks" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 text-xs font-label font-semibold text-muted-foreground", children: "Conversions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 text-xs font-label font-semibold text-muted-foreground", children: "Earned" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 text-xs font-label font-semibold text-muted-foreground", children: "% Share" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: MODULE_BREAKDOWN.map((m) => {
              const Icon = m.icon;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "tr",
                {
                  className: "hover:bg-secondary/20 transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-7 h-7 rounded-lg flex items-center justify-center",
                          style: { background: `${m.color}15` },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 13, style: { color: m.color } })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ModuleBadge, { module: m.module, color: m.color })
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs font-label text-right text-muted-foreground", children: m.links }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs font-label text-right text-foreground", children: m.clicks.toLocaleString() }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs font-label text-right text-foreground", children: m.conversions }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        className: "px-4 py-3 text-xs font-label font-semibold text-right",
                        style: { color: "oklch(0.52 0.14 155)" },
                        children: m.earned.toLocaleString()
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-xs font-label text-right text-muted-foreground", children: [
                      m.share,
                      "%"
                    ] })
                  ]
                },
                m.module
              );
            }) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-label font-semibold text-foreground mb-4", children: "Top Performing Links" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3", children: TOP_PERFORMING_LINKS.map((link, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-xl p-4 hover:shadow-md transition-shadow",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-8 h-8 rounded-lg flex items-center justify-center text-xs font-display font-bold",
                      style: {
                        background: `${link.color}15`,
                        color: link.color
                      },
                      children: idx + 1
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ModuleBadge, { module: link.module, color: link.color })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-label text-muted-foreground mb-0.5", children: link.blog }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground mb-2 line-clamp-1", children: link.affiliate }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs font-label", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 11 }),
                    " ",
                    link.clicks,
                    " clicks"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-semibold",
                      style: { color: "oklch(0.52 0.14 155)" },
                      children: formatCurrency(link.earnings)
                    }
                  )
                ] })
              ]
            },
            `${link.blog}-${link.affiliate}`
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-label font-semibold text-foreground", children: "Referral Tracking" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Commissions from your referral code" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-secondary/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-5 py-3 text-xs font-label font-semibold text-muted-foreground", children: "Referral Code" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-xs font-label font-semibold text-muted-foreground", children: "Referred User" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-xs font-label font-semibold text-muted-foreground", children: "Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-xs font-label font-semibold text-muted-foreground", children: "Action" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-4 py-3 text-xs font-label font-semibold text-muted-foreground", children: "Commission" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center px-4 py-3 text-xs font-label font-semibold text-muted-foreground", children: "Status" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: REFERRAL_ROWS.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "hover:bg-secondary/20 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 text-xs font-label font-mono text-foreground", children: row.code }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs font-label font-medium text-foreground", children: row.user }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs text-muted-foreground", children: row.date }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs text-muted-foreground", children: row.action }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: "px-4 py-3 text-xs font-label font-semibold text-right",
                      style: { color: "oklch(0.52 0.14 155)" },
                      children: typeof row.commission === "number" ? formatCurrency(row.commission) : row.commission
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: row.status }) })
                ]
              },
              `${row.user}-${row.date}`
            )) })
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 text-center text-xs text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      ".",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "underline underline-offset-2 hover:text-foreground transition-colors",
          children: "Built with ♥ using caffeine.ai"
        }
      )
    ] })
  ] });
}
export {
  DashboardPage as default
};
