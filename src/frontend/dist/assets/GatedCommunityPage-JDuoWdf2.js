import { j as jsxRuntimeExports, l as Building2, T as Tabs, c as TabsList, m as House, n as ShieldCheck, o as TriangleAlert, P as Package, p as Car, d as TabsTrigger, e as TabsContent, r as reactExports, q as Users, a as Button, s as Bell, t as Clock, U as User, v as CircleCheck, w as Separator, B as Badge, L as Label, I as Input, S as Select, f as SelectTrigger, g as SelectValue, h as SelectContent, i as SelectItem, u as ue, x as Briefcase, y as Settings, D as Dialog, z as DialogTrigger, E as DialogContent, F as DialogHeader, G as DialogTitle, J as DialogFooter, K as Plus, N as MapPin, O as addNotification } from "./index-DRWZCthO.js";
import { C as Card, a as CardHeader, c as CardTitle, b as CardContent } from "./card-B2LWIaFT.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-FmXh70w5.js";
import { T as Textarea } from "./textarea-BqOhMXsk.js";
import { E as EventsTab } from "./EventsTab-FQGmMU58.js";
import { Q as QuickAddBar } from "./QuickAddBar-D8NH2_67.js";
import { Q as QrCode } from "./qr-code-CNYLbSqm.js";
import { C as Calendar } from "./calendar-B2qvp0uO.js";
import { C as CreditCard } from "./credit-card-DdWX690z.js";
import { L as LogIn } from "./log-in-DG2l8U5i.js";
import { T as Tag } from "./tag-vAvZvME6.js";
import { W as Wrench } from "./wrench-CMCg4qCC.js";
import { P as Phone } from "./phone-XkrTUkG6.js";
import "./share-2-BDtgsbaB.js";
import "./lock-Df4o75t4.js";
import "./globe-QsckznU8.js";
import "./checkbox-DdbDMk6S.js";
import "./settings-2-KLIAf_By.js";
import "./upload--iPPMG2K.js";
const PENDING_MEMBERS = [
  { id: 1, name: "Farrukh Tashkentov", flat: "B-204", role: "Owner" },
  { id: 2, name: "Ayesha Siddiqui", flat: "C-112", role: "Tenant" },
  { id: 3, name: "Muhammad Bilal", flat: "A-301", role: "Owner" }
];
const ENTRY_LOGS = [
  {
    id: 1,
    name: "Tariq Mehmood",
    type: "Resident",
    flat: "A-101",
    checkIn: "08:15 AM",
    checkOut: "06:30 PM",
    purpose: "Resident"
  },
  {
    id: 2,
    name: "Delivery Boy (TCS)",
    type: "Visitor",
    flat: "B-204",
    checkIn: "10:45 AM",
    checkOut: "10:52 AM",
    purpose: "Parcel Delivery"
  },
  {
    id: 3,
    name: "Sara Khan",
    type: "Resident",
    flat: "C-305",
    checkIn: "09:00 AM",
    checkOut: null,
    purpose: "Resident"
  },
  {
    id: 4,
    name: "Plumber Hassan",
    type: "Visitor",
    flat: "D-102",
    checkIn: "11:20 AM",
    checkOut: null,
    purpose: "Maintenance Work"
  },
  {
    id: 5,
    name: "Ali Raza",
    type: "Resident",
    flat: "A-202",
    checkIn: "07:30 AM",
    checkOut: "09:00 PM",
    purpose: "Resident"
  },
  {
    id: 6,
    name: "Nabila Perveen",
    type: "Visitor",
    flat: "C-112",
    checkIn: "02:00 PM",
    checkOut: null,
    purpose: "Family Visit"
  },
  {
    id: 7,
    name: "Imran Butt",
    type: "Resident",
    flat: "B-301",
    checkIn: "08:45 AM",
    checkOut: "05:15 PM",
    purpose: "Resident"
  },
  {
    id: 8,
    name: "Food Rider (Foodpanda)",
    type: "Visitor",
    flat: "A-405",
    checkIn: "01:30 PM",
    checkOut: "01:38 PM",
    purpose: "Food Delivery"
  }
];
const STAFF = [
  {
    id: 1,
    name: "Ghulam Sarwar",
    role: "Guard",
    phone: "0312-3456789",
    shift: "Morning"
  },
  {
    id: 2,
    name: "Naseer Ahmad",
    role: "Guard",
    phone: "0333-9876543",
    shift: "Night"
  },
  {
    id: 3,
    name: "Akbar Ali",
    role: "Maintenance",
    phone: "0321-1122334",
    shift: "Morning"
  },
  {
    id: 4,
    name: "Rubina Bibi",
    role: "Housekeeping",
    phone: "0345-6677889",
    shift: "Afternoon"
  },
  {
    id: 5,
    name: "Zubair Hussain",
    role: "CCTV Operator",
    phone: "0311-2233445",
    shift: "Night"
  },
  {
    id: 6,
    name: "Pervez Akhtar",
    role: "Guard",
    phone: "0322-5544332",
    shift: "Afternoon"
  }
];
const SHIFT_TIMETABLE = {
  Morning: {
    Mon: ["Ghulam Sarwar", "Akbar Ali"],
    Tue: ["Ghulam Sarwar", "Akbar Ali"],
    Wed: ["Ghulam Sarwar"],
    Thu: ["Ghulam Sarwar", "Akbar Ali"],
    Fri: ["Akbar Ali"],
    Sat: ["Ghulam Sarwar"],
    Sun: ["Akbar Ali"]
  },
  Afternoon: {
    Mon: ["Pervez Akhtar", "Rubina Bibi"],
    Tue: ["Pervez Akhtar"],
    Wed: ["Pervez Akhtar", "Rubina Bibi"],
    Thu: ["Rubina Bibi"],
    Fri: ["Pervez Akhtar", "Rubina Bibi"],
    Sat: ["Pervez Akhtar"],
    Sun: ["Rubina Bibi"]
  },
  Night: {
    Mon: ["Naseer Ahmad", "Zubair Hussain"],
    Tue: ["Zubair Hussain"],
    Wed: ["Naseer Ahmad"],
    Thu: ["Naseer Ahmad", "Zubair Hussain"],
    Fri: ["Zubair Hussain"],
    Sat: ["Naseer Ahmad"],
    Sun: ["Naseer Ahmad", "Zubair Hussain"]
  }
};
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const INITIAL_COMPLAINTS = [
  {
    id: 1,
    flat: "A-101",
    category: "Plumbing",
    description: "Leaking pipe under kitchen sink",
    urgency: "High",
    status: "Assigned",
    assignedTo: "Akbar Ali"
  },
  {
    id: 2,
    flat: "B-204",
    category: "Electrical",
    description: "Corridor light not working since 3 days",
    urgency: "Medium",
    status: "Open",
    assignedTo: null
  },
  {
    id: 3,
    flat: "C-305",
    category: "Noise",
    description: "Loud music from floor above after midnight",
    urgency: "Medium",
    status: "Resolved",
    assignedTo: "Security Team"
  },
  {
    id: 4,
    flat: "D-102",
    category: "Cleaning",
    description: "Garbage not collected for 2 days",
    urgency: "Low",
    status: "Open",
    assignedTo: null
  },
  {
    id: 5,
    flat: "A-202",
    category: "Security",
    description: "Unknown vehicle parked in my slot",
    urgency: "High",
    status: "Assigned",
    assignedTo: "Ghulam Sarwar"
  },
  {
    id: 6,
    flat: "C-112",
    category: "Other",
    description: "Elevator buttons not responding on 3rd floor",
    urgency: "High",
    status: "Resolved",
    assignedTo: "Maintenance Vendor"
  }
];
const MAINTENANCE_DUES = [
  {
    id: 1,
    title: "Monthly Maintenance",
    amount: 2500,
    dueDate: "30 Jan 2026",
    paid: false
  },
  {
    id: 2,
    title: "Water Bill",
    amount: 450,
    dueDate: "15 Feb 2026",
    paid: false
  },
  {
    id: 3,
    title: "Security Upgrade Fund",
    amount: 1e3,
    dueDate: "28 Feb 2026",
    paid: true
  },
  {
    id: 4,
    title: "Generator Fuel",
    amount: 600,
    dueDate: "10 Jan 2026",
    paid: true
  }
];
const MARKETPLACE_ITEMS = [
  {
    id: 1,
    name: "Fresh Chicken Biryani",
    category: "Food",
    regularPrice: 350,
    communityPrice: 299,
    seller: "Fatima (A-202)",
    unit: "per portion",
    gradient: "from-orange-400 to-red-500"
  },
  {
    id: 2,
    name: "Organic Vegetables Pack",
    category: "Grocery",
    regularPrice: 600,
    communityPrice: 499,
    seller: "Green Basket (B-101)",
    unit: "2kg pack",
    gradient: "from-green-400 to-emerald-600"
  },
  {
    id: 3,
    name: "Panadol Extra (Pack of 10)",
    category: "Medical",
    regularPrice: 120,
    communityPrice: 99,
    seller: "Pharmacy Hub (C-GF)",
    unit: "per pack",
    gradient: "from-blue-400 to-cyan-500"
  },
  {
    id: 4,
    name: "Home Cleaning Service",
    category: "Services",
    regularPrice: 1500,
    communityPrice: 1200,
    seller: "CleanPro (D-104)",
    unit: "per session",
    gradient: "from-purple-400 to-violet-600"
  },
  {
    id: 5,
    name: "Dahi (Yogurt)",
    category: "Grocery",
    regularPrice: 180,
    communityPrice: 150,
    seller: "Dairy Fresh (A-GF)",
    unit: "500g tub",
    gradient: "from-yellow-300 to-amber-500"
  },
  {
    id: 6,
    name: "AC Repair & Service",
    category: "Services",
    regularPrice: 2500,
    communityPrice: 1999,
    seller: "TechCool (B-204)",
    unit: "per unit",
    gradient: "from-sky-400 to-blue-600"
  },
  {
    id: 7,
    name: "Shawarma Roll",
    category: "Food",
    regularPrice: 250,
    communityPrice: 199,
    seller: "Grill House (C-201)",
    unit: "per roll",
    gradient: "from-amber-400 to-orange-600"
  },
  {
    id: 8,
    name: "Nurofen (6 tablets)",
    category: "Medical",
    regularPrice: 95,
    communityPrice: 79,
    seller: "Pharmacy Hub (C-GF)",
    unit: "per strip",
    gradient: "from-teal-400 to-cyan-600"
  },
  {
    id: 9,
    name: "Handmade Cushion Covers",
    category: "Products",
    regularPrice: 800,
    communityPrice: 649,
    seller: "Crafts by Nadia (D-301)",
    unit: "set of 2",
    gradient: "from-pink-400 to-rose-600"
  }
];
const PARKING_SLOTS = [
  {
    id: 1,
    slotNo: "P-12",
    block: "A",
    type: "Covered",
    dailyRate: 200,
    monthlyRate: 3500,
    available: true,
    owner: "Tariq (A-101)"
  },
  {
    id: 2,
    slotNo: "P-27",
    block: "B",
    type: "Open",
    dailyRate: 100,
    monthlyRate: 1800,
    available: false,
    owner: "Sara (C-305)"
  },
  {
    id: 3,
    slotNo: "P-08",
    block: "A",
    type: "Covered",
    dailyRate: 250,
    monthlyRate: 4200,
    available: true,
    owner: "Ali (A-202)"
  },
  {
    id: 4,
    slotNo: "P-35",
    block: "C",
    type: "Open",
    dailyRate: 120,
    monthlyRate: 2e3,
    available: true,
    owner: "Imran (B-301)"
  },
  {
    id: 5,
    slotNo: "P-19",
    block: "D",
    type: "Covered",
    dailyRate: 220,
    monthlyRate: 3800,
    available: false,
    owner: "Nabila (C-112)"
  }
];
const COMMUNITY_PROPERTIES = [
  {
    id: 1,
    flatNo: "B-301",
    type: "Apartment",
    size: "1,200 sqft",
    listingType: "For Sale",
    price: "PKR 1.8 Cr",
    floor: 3
  },
  {
    id: 2,
    flatNo: "A-104",
    type: "Apartment",
    size: "950 sqft",
    listingType: "For Rent",
    price: "PKR 55,000/mo",
    floor: 1
  },
  {
    id: 3,
    flatNo: "D-Villa-2",
    type: "Villa",
    size: "3,500 sqft",
    listingType: "For Sale",
    price: "PKR 4.5 Cr",
    floor: 0
  },
  {
    id: 4,
    flatNo: "C-205",
    type: "Apartment",
    size: "1,050 sqft",
    listingType: "For Rent",
    price: "PKR 45,000/mo",
    floor: 2
  }
];
const RECENT_ACTIVITY = [
  {
    icon: LogIn,
    text: "Tariq Mehmood checked in via QR",
    time: "2 min ago",
    color: "text-green-500"
  },
  {
    icon: TriangleAlert,
    text: "New complaint: Plumbing issue in A-101",
    time: "15 min ago",
    color: "text-orange-500"
  },
  {
    icon: User,
    text: "Ayesha Siddiqui requested community access",
    time: "1 hr ago",
    color: "text-primary"
  },
  {
    icon: CreditCard,
    text: "Monthly maintenance payment received from B-204",
    time: "3 hrs ago",
    color: "text-accent"
  },
  {
    icon: CircleCheck,
    text: "Complaint #3 resolved — Noise issue C-305",
    time: "5 hrs ago",
    color: "text-green-500"
  }
];
const NOTICES = [
  {
    title: "Water Supply Interruption",
    body: "Water supply will be off on Sunday 10:00 AM – 2:00 PM for maintenance work on the main pipeline.",
    tag: "Utility",
    urgent: true,
    date: "2 Jan 2026"
  },
  {
    title: "Monthly Maintenance Due",
    body: "Monthly maintenance charges of PKR 2,500 are due by 30th January. Kindly pay via the app or at the management office.",
    tag: "Finance",
    urgent: false,
    date: "1 Jan 2026"
  },
  {
    title: "New CCTV Cameras Installed",
    body: "6 new HD cameras have been installed at main gate, parking area, and all stairwells. Footage accessible by management.",
    tag: "Security",
    urgent: false,
    date: "28 Dec 2025"
  }
];
function StatCard({
  icon: Icon,
  label,
  value,
  color
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "rounded-xl border-border shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
        style: { background: `${color}22` },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18, style: { color } })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-label text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-display font-bold text-foreground leading-none mt-0.5", children: value })
    ] })
  ] }) });
}
function UrgencyBadge({ urgency }) {
  const map = {
    High: {
      label: "High",
      style: {
        background: "oklch(0.55 0.22 25 / 0.15)",
        color: "oklch(0.55 0.22 25)",
        border: "1px solid oklch(0.55 0.22 25 / 0.3)"
      }
    },
    Medium: {
      label: "Medium",
      style: {
        background: "oklch(0.72 0.19 85 / 0.15)",
        color: "oklch(0.65 0.19 85)",
        border: "1px solid oklch(0.72 0.19 85 / 0.3)"
      }
    },
    Low: {
      label: "Low",
      style: {
        background: "oklch(0.60 0.22 150 / 0.15)",
        color: "oklch(0.50 0.22 150)",
        border: "1px solid oklch(0.60 0.22 150 / 0.3)"
      }
    }
  };
  const { label, style } = map[urgency];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-label font-semibold",
      style,
      children: label
    }
  );
}
function StatusBadge({ status }) {
  const map = {
    Open: {
      label: "Open",
      style: {
        background: "oklch(0.72 0.19 85 / 0.15)",
        color: "oklch(0.65 0.19 85)",
        border: "1px solid oklch(0.72 0.19 85 / 0.3)"
      }
    },
    Assigned: {
      label: "Assigned",
      style: {
        background: "oklch(0.55 0.22 280 / 0.15)",
        color: "oklch(0.55 0.22 280)",
        border: "1px solid oklch(0.55 0.22 280 / 0.3)"
      }
    },
    Resolved: {
      label: "Resolved",
      style: {
        background: "oklch(0.60 0.22 150 / 0.15)",
        color: "oklch(0.50 0.22 150)",
        border: "1px solid oklch(0.60 0.22 150 / 0.3)"
      }
    }
  };
  const { label, style } = map[status];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-label font-semibold",
      style,
      children: label
    }
  );
}
function BadgeCard({ badge }) {
  const colorMap = {
    Guest: {
      bg: "oklch(0.55 0.22 280 / 0.12)",
      fg: "oklch(0.45 0.22 280)",
      label: "GUEST"
    },
    Worker: {
      bg: "oklch(0.72 0.19 85 / 0.12)",
      fg: "oklch(0.60 0.22 85)",
      label: "WORKER"
    },
    Delivery: {
      bg: "oklch(0.60 0.22 150 / 0.12)",
      fg: "oklch(0.48 0.22 150)",
      label: "DELIVERY"
    },
    Emergency: {
      bg: "oklch(0.55 0.22 25 / 0.12)",
      fg: "oklch(0.50 0.22 25)",
      label: "EMERGENCY"
    }
  };
  const color = colorMap[badge.badgeType];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-xl border p-4 mt-4 animate-fade-up",
      style: { background: color.bg, borderColor: `${color.fg}44` },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "text-[10px] font-label font-bold tracking-widest",
                style: { color: color.fg },
                children: [
                  "VISITOR BADGE · ",
                  color.label
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-display font-bold text-foreground mt-0.5", children: badge.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-10 h-10 rounded-full flex items-center justify-center text-xs font-label font-bold",
              style: { background: color.fg, color: "oklch(0.99 0.002 280)" },
              children: badge.badgeNumber
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-label uppercase tracking-wide", children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: badge.phone })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-label uppercase tracking-wide", children: "Visiting" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-foreground", children: [
              "Flat ",
              badge.flat
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-label uppercase tracking-wide", children: "Purpose" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: badge.purpose })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-label uppercase tracking-wide", children: "Entry" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: badge.entryTime })
          ] })
        ] })
      ]
    }
  );
}
function OverviewTab() {
  const [pendingMembers, setPendingMembers] = reactExports.useState(PENDING_MEMBERS);
  const handleApprove = (id, name) => {
    setPendingMembers((prev) => prev.filter((m) => m.id !== id));
    ue.success(`${name} approved and added to community`);
  };
  const handleReject = (id, name) => {
    setPendingMembers((prev) => prev.filter((m) => m.id !== id));
    ue.error(`${name}'s request rejected`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          icon: Building2,
          label: "Total Units",
          value: "120",
          color: "oklch(0.55 0.22 280)"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          icon: Users,
          label: "Residents",
          value: "284",
          color: "oklch(0.65 0.25 335)"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          icon: TriangleAlert,
          label: "Active Complaints",
          value: "7",
          color: "oklch(0.65 0.19 85)"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          icon: CreditCard,
          label: "Pending Dues",
          value: "PKR 45K",
          color: "oklch(0.55 0.22 25)"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-xl border-border shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-label font-semibold flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 15, className: "text-primary" }),
          "Pending Member Approvals",
          pendingMembers.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "ml-auto text-xs rounded-full px-2 py-0.5 font-bold",
              style: {
                background: "oklch(0.65 0.25 335 / 0.15)",
                color: "oklch(0.65 0.25 335)"
              },
              children: pendingMembers.length
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-3", children: pendingMembers.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground py-4 text-center", children: "No pending approvals" }) : pendingMembers.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-3 p-3 rounded-lg bg-secondary/40",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-8 h-8 rounded-full flex items-center justify-center text-xs font-label font-bold shrink-0",
                  style: {
                    background: "oklch(0.55 0.22 280 / 0.15)",
                    color: "oklch(0.55 0.22 280)"
                  },
                  children: m.name.split(" ").map((n) => n[0]).slice(0, 2).join("")
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground truncate", children: m.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", children: [
                  "Flat ",
                  m.flat,
                  " · ",
                  m.role
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    className: "h-6 px-2 text-[10px] font-label",
                    onClick: () => handleApprove(m.id, m.name),
                    children: "Approve"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-6 px-2 text-[10px] font-label",
                    onClick: () => handleReject(m.id, m.name),
                    children: "Reject"
                  }
                )
              ] })
            ]
          },
          m.id
        )) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-xl border-border shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-label font-semibold flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { size: 15, className: "text-primary" }),
          "Notice Board"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-3", children: NOTICES.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex gap-3 p-3 rounded-lg",
            style: {
              background: n.urgent ? "oklch(0.55 0.22 25 / 0.07)" : "oklch(0.55 0.22 280 / 0.06)",
              borderLeft: `3px solid ${n.urgent ? "oklch(0.55 0.22 25)" : "oklch(0.55 0.22 280)"}`
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground", children: n.title }),
                n.urgent && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-[9px] font-label font-bold px-1.5 py-0.5 rounded",
                    style: {
                      background: "oklch(0.55 0.22 25 / 0.15)",
                      color: "oklch(0.50 0.22 25)"
                    },
                    children: "URGENT"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground leading-relaxed", children: n.body }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground/60 mt-1.5 font-label", children: [
                n.tag,
                " · ",
                n.date
              ] })
            ] })
          },
          n.title
        )) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-xl border-border shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-label font-semibold flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 15, className: "text-primary" }),
        "Recent Activity"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-0", children: RECENT_ACTIVITY.map((a, idx) => {
        const Icon = a.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 15, className: a.color }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "flex-1 text-sm text-foreground", children: a.text }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-label text-muted-foreground shrink-0", children: a.time })
          ] }),
          idx < RECENT_ACTIVITY.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "opacity-50" })
        ] }, a.text);
      }) })
    ] })
  ] });
}
function GateEntryTab() {
  const [visitorName, setVisitorName] = reactExports.useState("");
  const [visitorPhone, setVisitorPhone] = reactExports.useState("");
  const [badgeType, setBadgeType] = reactExports.useState("Guest");
  const [flatToVisit, setFlatToVisit] = reactExports.useState("");
  const [purpose, setPurpose] = reactExports.useState("");
  const [generatedBadge, setGeneratedBadge] = reactExports.useState(
    null
  );
  const [badgeCounter, setBadgeCounter] = reactExports.useState(87);
  const handleRegisterVisitor = () => {
    if (!visitorName || !visitorPhone || !flatToVisit || !purpose) {
      ue.error("Please fill in all fields");
      return;
    }
    const now = /* @__PURE__ */ new Date();
    const timeStr = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit"
    });
    const newCounter = badgeCounter + 1;
    setBadgeCounter(newCounter);
    const badge = {
      id: newCounter,
      name: visitorName,
      phone: visitorPhone,
      badgeType,
      flat: flatToVisit,
      purpose,
      entryTime: timeStr,
      badgeNumber: `V-${newCounter}`
    };
    setGeneratedBadge(badge);
    ue.success(
      `Visitor badge #V-${newCounter} generated and sent to ${visitorPhone}`
    );
    setVisitorName("");
    setVisitorPhone("");
    setFlatToVisit("");
    setPurpose("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-xl border-border shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-label font-semibold flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { size: 15, className: "text-primary" }),
          "My Resident QR Code"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex flex-col items-center gap-4 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "rounded-xl p-4",
              style: {
                background: "oklch(0.55 0.22 280 / 0.08)",
                border: "2px solid oklch(0.55 0.22 280 / 0.2)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  width: "140",
                  height: "140",
                  viewBox: "0 0 140 140",
                  fill: "none",
                  role: "img",
                  "aria-label": "Resident QR Code",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "140", height: "140", fill: "white", rx: "8" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "rect",
                      {
                        x: "10",
                        y: "10",
                        width: "36",
                        height: "36",
                        rx: "2",
                        fill: "oklch(0.55 0.22 280)"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "rect",
                      {
                        x: "16",
                        y: "16",
                        width: "24",
                        height: "24",
                        rx: "1",
                        fill: "white"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "rect",
                      {
                        x: "20",
                        y: "20",
                        width: "16",
                        height: "16",
                        rx: "1",
                        fill: "oklch(0.55 0.22 280)"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "rect",
                      {
                        x: "94",
                        y: "10",
                        width: "36",
                        height: "36",
                        rx: "2",
                        fill: "oklch(0.55 0.22 280)"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "rect",
                      {
                        x: "100",
                        y: "16",
                        width: "24",
                        height: "24",
                        rx: "1",
                        fill: "white"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "rect",
                      {
                        x: "104",
                        y: "20",
                        width: "16",
                        height: "16",
                        rx: "1",
                        fill: "oklch(0.55 0.22 280)"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "rect",
                      {
                        x: "10",
                        y: "94",
                        width: "36",
                        height: "36",
                        rx: "2",
                        fill: "oklch(0.55 0.22 280)"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "rect",
                      {
                        x: "16",
                        y: "100",
                        width: "24",
                        height: "24",
                        rx: "1",
                        fill: "white"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "rect",
                      {
                        x: "20",
                        y: "104",
                        width: "16",
                        height: "16",
                        rx: "1",
                        fill: "oklch(0.55 0.22 280)"
                      }
                    ),
                    [56, 62, 68, 74, 80, 86].map(
                      (x) => [
                        10,
                        16,
                        22,
                        28,
                        34,
                        40,
                        46,
                        56,
                        62,
                        68,
                        74,
                        80,
                        86,
                        94,
                        100,
                        106,
                        112,
                        118,
                        124,
                        130
                      ].map(
                        (y) => (x + y) % 11 < 4 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "rect",
                          {
                            x,
                            y,
                            width: "5",
                            height: "5",
                            fill: "oklch(0.55 0.22 280)"
                          },
                          `${x}-${y}`
                        ) : null
                      )
                    ),
                    [10, 16, 22, 28, 34, 40, 46].map(
                      (y) => [
                        56,
                        62,
                        68,
                        74,
                        80,
                        86,
                        94,
                        100,
                        106,
                        112,
                        118,
                        124,
                        130
                      ].map(
                        (x) => x * y % 13 < 5 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "rect",
                          {
                            x,
                            y,
                            width: "5",
                            height: "5",
                            fill: "oklch(0.55 0.22 280)"
                          },
                          `${x}-${y}`
                        ) : null
                      )
                    )
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground", children: "Ahmed Raza" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-label text-muted-foreground", children: "Flat A-101 · Resident Owner" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-label text-muted-foreground/60 mt-1", children: "ID: FS-2025-A101-001" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              className: "font-label text-[11px]",
              style: {
                background: "oklch(0.55 0.22 280 / 0.15)",
                color: "oklch(0.45 0.22 280)",
                border: "1px solid oklch(0.55 0.22 280 / 0.3)"
              },
              children: "Show at Gate for Entry/Exit"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-xl border-border shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-label font-semibold flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 15, className: "text-accent" }),
          "Register Visitor"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label", children: "Visitor Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  placeholder: "Full name",
                  value: visitorName,
                  onChange: (e) => setVisitorName(e.target.value),
                  className: "h-8 text-sm"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label", children: "Phone Number" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  placeholder: "03xx-xxxxxxx",
                  value: visitorPhone,
                  onChange: (e) => setVisitorPhone(e.target.value),
                  className: "h-8 text-sm"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label", children: "Badge Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: badgeType,
                  onValueChange: (v) => setBadgeType(v),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Guest", children: "Guest" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Worker", children: "Worker" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Delivery", children: "Delivery" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Emergency", children: "Emergency" })
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label", children: "Flat to Visit" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  placeholder: "e.g. A-101",
                  value: flatToVisit,
                  onChange: (e) => setFlatToVisit(e.target.value),
                  className: "h-8 text-sm"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label", children: "Purpose of Visit" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "e.g. Family visit, delivery, maintenance...",
                value: purpose,
                onChange: (e) => setPurpose(e.target.value),
                className: "h-8 text-sm"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              className: "w-full h-9 font-label font-semibold",
              onClick: handleRegisterVisitor,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { size: 14, className: "mr-2" }),
                "Register & Generate Badge"
              ]
            }
          ),
          generatedBadge && /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCard, { badge: generatedBadge })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-xl border-border shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-label font-semibold flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 15, className: "text-primary" }),
        "Entry / Exit Log — Today"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-label", children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-label", children: "Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-label", children: "Flat" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-label", children: "Check-In" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-label", children: "Check-Out" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-label", children: "Purpose" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: ENTRY_LOGS.map((log) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TableRow,
          {
            style: log.checkOut === null ? { borderLeft: "3px solid oklch(0.55 0.18 150)" } : {},
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm font-medium", children: log.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-[11px] font-label px-2 py-0.5 rounded-full font-semibold",
                  style: log.type === "Resident" ? {
                    background: "oklch(0.55 0.22 280 / 0.12)",
                    color: "oklch(0.45 0.22 280)"
                  } : {
                    background: "oklch(0.65 0.25 335 / 0.12)",
                    color: "oklch(0.55 0.25 335)"
                  },
                  children: log.type
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm font-label", children: log.flat }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm font-label text-muted-foreground", children: log.checkIn }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm font-label", children: log.checkOut ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: log.checkOut }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-[11px] font-label font-semibold px-2 py-0.5 rounded-full",
                  style: {
                    background: "oklch(0.55 0.18 150 / 0.15)",
                    color: "oklch(0.45 0.18 150)"
                  },
                  children: "Inside"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground", children: log.purpose })
            ]
          },
          log.id
        )) })
      ] }) }) })
    ] })
  ] });
}
function StaffTab() {
  const roleIcon = {
    Guard: ShieldCheck,
    Maintenance: Wrench,
    Housekeeping: House,
    "CCTV Operator": Settings
  };
  const shiftColor = {
    Morning: { bg: "oklch(0.72 0.19 85 / 0.15)", fg: "oklch(0.60 0.22 85)" },
    Afternoon: {
      bg: "oklch(0.65 0.25 335 / 0.15)",
      fg: "oklch(0.55 0.25 335)"
    },
    Night: { bg: "oklch(0.55 0.22 280 / 0.15)", fg: "oklch(0.45 0.22 280)" }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-label font-semibold text-foreground", children: "Staff & Security Management" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          className: "h-8 text-xs font-label",
          onClick: () => ue.success("Security job posted to Jobs module", {
            description: "Applicants can now apply from the Jobs page."
          }),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 13, className: "mr-1.5" }),
            "Post Security Job"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-xl border-border shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-label font-semibold flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 15, className: "text-primary" }),
        "Weekly Shift Timetable"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-label w-28", children: "Shift" }),
          DAYS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            TableHead,
            {
              className: "text-xs font-label text-center",
              children: d
            },
            d
          ))
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: ["Morning", "Afternoon", "Night"].map((shift) => {
          const sc = shiftColor[shift];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "text-[11px] font-label font-semibold px-2 py-1 rounded-md block text-center",
                style: { background: sc.bg, color: sc.fg },
                children: [
                  shift,
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-normal opacity-70", children: shift === "Morning" ? "6am–2pm" : shift === "Afternoon" ? "2pm–10pm" : "10pm–6am" })
                ]
              }
            ) }),
            DAYS.map((day) => {
              const names = SHIFT_TIMETABLE[shift][day] || [];
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                TableCell,
                {
                  className: "text-center align-top py-2",
                  children: names.map((name) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-[10px] font-label text-foreground leading-snug",
                      children: name.split(" ")[0]
                    },
                    name
                  ))
                },
                day
              );
            })
          ] }, shift);
        }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wide mb-3", children: "Staff Directory" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: STAFF.map((s) => {
        const RoleIcon = roleIcon[s.role];
        const sc = shiftColor[s.shift];
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "rounded-xl border-border shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
              style: {
                background: "oklch(0.55 0.22 280 / 0.12)"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                RoleIcon,
                {
                  size: 16,
                  style: { color: "oklch(0.55 0.22 280)" }
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground truncate", children: s.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: s.role }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 9, className: "text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-label text-muted-foreground", children: s.phone })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-[10px] font-label font-semibold px-2 py-0.5 rounded-full",
                style: { background: sc.bg, color: sc.fg },
                children: s.shift
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                className: "h-6 text-[10px] font-label px-2",
                onClick: () => ue.info(`Viewing ${s.name}'s profile`),
                children: "View Profile"
              }
            )
          ] })
        ] }) }, s.id);
      }) })
    ] })
  ] });
}
function ComplaintsTab() {
  const [complaints, setComplaints] = reactExports.useState(INITIAL_COMPLAINTS);
  const [dues, setDues] = reactExports.useState(MAINTENANCE_DUES);
  const [cFlat, setCFlat] = reactExports.useState("");
  const [cCategory, setCCategory] = reactExports.useState("Plumbing");
  const [cDesc, setCDesc] = reactExports.useState("");
  const [cUrgency, setCUrgency] = reactExports.useState("Medium");
  const [assignDialogId, setAssignDialogId] = reactExports.useState(null);
  const [assigneeName, setAssigneeName] = reactExports.useState("");
  const [payDialogId, setPayDialogId] = reactExports.useState(null);
  const [vendorAmount, setVendorAmount] = reactExports.useState("");
  const [receiptNo, setReceiptNo] = reactExports.useState("");
  const handleSubmitComplaint = () => {
    if (!cFlat || !cDesc) {
      ue.error("Please fill in flat number and description");
      return;
    }
    const newId = Math.max(...complaints.map((c) => c.id)) + 1;
    setComplaints((prev) => [
      ...prev,
      {
        id: newId,
        flat: cFlat,
        category: cCategory,
        description: cDesc,
        urgency: cUrgency,
        status: "Open",
        assignedTo: null
      }
    ]);
    ue.success(`Complaint #${newId} lodged successfully`);
    setCFlat("");
    setCDesc("");
    setCUrgency("Medium");
  };
  const handleAssign = () => {
    if (!assigneeName) return;
    setComplaints(
      (prev) => prev.map(
        (c) => c.id === assignDialogId ? { ...c, status: "Assigned", assignedTo: assigneeName } : c
      )
    );
    ue.success(`Complaint assigned to ${assigneeName}`);
    setAssignDialogId(null);
    setAssigneeName("");
  };
  const handleMarkResolved = (id) => {
    setComplaints(
      (prev) => prev.map((c) => c.id === id ? { ...c, status: "Resolved" } : c)
    );
    ue.success("Complaint marked as resolved");
  };
  const handlePayVendor = () => {
    if (!vendorAmount) return;
    ue.success(
      `Payment of PKR ${vendorAmount} recorded. Receipt: ${receiptNo || "N/A"}`
    );
    setPayDialogId(null);
    setVendorAmount("");
    setReceiptNo("");
  };
  const handlePayDue = (id, title) => {
    setDues(
      (prev) => prev.map((d) => d.id === id ? { ...d, paid: true } : d)
    );
    ue.success(`${title} payment processed successfully`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-xl border-border shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-label font-semibold flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { size: 15, className: "text-accent" }),
        "Lodge a Complaint"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label", children: "Flat Number" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "e.g. A-101",
              value: cFlat,
              onChange: (e) => setCFlat(e.target.value),
              className: "h-8 text-sm"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label", children: "Category" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: cCategory,
              onValueChange: (v) => setCCategory(v),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                  "Plumbing",
                  "Electrical",
                  "Cleaning",
                  "Noise",
                  "Security",
                  "Other"
                ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label", children: "Urgency" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: cUrgency,
              onValueChange: (v) => setCUrgency(v),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Low", children: "Low" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Medium", children: "Medium" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "High", children: "High" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 col-span-2 sm:col-span-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label", children: "Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                placeholder: "Describe the issue...",
                value: cDesc,
                onChange: (e) => setCDesc(e.target.value),
                className: "text-sm resize-none h-16 flex-1"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "h-16 px-5 font-label font-semibold self-end",
                onClick: handleSubmitComplaint,
                children: "Submit"
              }
            )
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-xl border-border shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-label font-semibold flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { size: 15, className: "text-primary" }),
        "All Complaints"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-label", children: "ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-label", children: "Flat" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-label", children: "Category" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-label hidden md:table-cell", children: "Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-label", children: "Urgency" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-label", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-label hidden lg:table-cell", children: "Assigned To" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-xs font-label", children: "Action" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: complaints.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { className: "text-xs font-label text-muted-foreground", children: [
            "#",
            c.id
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-sm font-label font-medium", children: c.flat }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs", children: c.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground max-w-[160px] truncate hidden md:table-cell", children: c.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(UrgencyBadge, { urgency: c.urgency }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: c.status }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs text-muted-foreground hidden lg:table-cell", children: c.assignedTo ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
            c.status === "Open" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Dialog,
              {
                open: assignDialogId === c.id,
                onOpenChange: (open) => {
                  if (!open) setAssignDialogId(null);
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      className: "h-7 text-xs font-label",
                      onClick: () => setAssignDialogId(c.id),
                      children: "Assign"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "text-sm font-label", children: [
                      "Assign Complaint #",
                      c.id
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label", children: "Assign To (Staff / Vendor)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          placeholder: "Staff or vendor name",
                          value: assigneeName,
                          onChange: (e) => setAssigneeName(e.target.value),
                          className: "h-8 text-sm"
                        }
                      )
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "sm",
                        className: "font-label",
                        onClick: handleAssign,
                        children: "Assign Complaint"
                      }
                    ) })
                  ] })
                ]
              }
            ),
            c.status === "Assigned" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                className: "h-7 text-xs font-label",
                onClick: () => handleMarkResolved(c.id),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 11, className: "mr-1" }),
                  "Resolve"
                ]
              }
            ),
            c.status === "Resolved" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Dialog,
              {
                open: payDialogId === c.id,
                onOpenChange: (open) => {
                  if (!open) setPayDialogId(null);
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      className: "h-7 text-xs font-label",
                      onClick: () => setPayDialogId(c.id),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { size: 11, className: "mr-1" }),
                        "Pay Vendor"
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "text-sm font-label", children: [
                      "Pay Vendor — Complaint #",
                      c.id
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 py-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label", children: "Amount (PKR)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            type: "number",
                            placeholder: "Enter amount",
                            value: vendorAmount,
                            onChange: (e) => setVendorAmount(e.target.value),
                            className: "h-8 text-sm"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label", children: "Receipt / Reference No" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            placeholder: "e.g. RCP-2025-001",
                            value: receiptNo,
                            onChange: (e) => setReceiptNo(e.target.value),
                            className: "h-8 text-sm"
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "sm",
                        className: "font-label",
                        onClick: handlePayVendor,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { size: 13, className: "mr-1.5" }),
                          "Record Payment"
                        ]
                      }
                    ) })
                  ] })
                ]
              }
            )
          ] })
        ] }, c.id)) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-sm font-label font-semibold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { size: 14, className: "text-primary" }),
          "Maintenance Dues Noticeboard"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "h-8 text-xs font-label",
            onClick: () => ue.info("Add Due form — coming soon"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 13, className: "mr-1" }),
              "Add Due"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3", children: dues.map((due) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: "rounded-xl border-border shadow-sm",
          style: due.paid ? { opacity: 0.65 } : { borderColor: "oklch(0.72 0.19 85 / 0.4)" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground", children: due.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "text-lg font-display font-bold mt-0.5",
                  style: { color: "oklch(0.55 0.22 280)" },
                  children: [
                    "PKR ",
                    due.amount.toLocaleString()
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] font-label text-muted-foreground mt-0.5", children: [
                "Due: ",
                due.dueDate
              ] })
            ] }),
            due.paid ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-[11px] font-label font-semibold px-2 py-1 rounded-full block text-center",
                style: {
                  background: "oklch(0.55 0.18 150 / 0.15)",
                  color: "oklch(0.45 0.18 150)"
                },
                children: "✓ Paid"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                className: "w-full h-7 text-xs font-label",
                onClick: () => handlePayDue(due.id, due.title),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { size: 11, className: "mr-1.5" }),
                  "Pay Online"
                ]
              }
            )
          ] })
        },
        due.id
      )) })
    ] })
  ] });
}
function MarketplaceTab() {
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const categories = [
    "All",
    "Food",
    "Grocery",
    "Medical",
    "Services",
    "Products"
  ];
  const filtered = activeCategory === "All" ? MARKETPLACE_ITEMS : MARKETPLACE_ITEMS.filter((i) => i.category === activeCategory);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 flex-wrap", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setActiveCategory(cat),
          className: "px-3 py-1.5 rounded-full text-xs font-label font-semibold transition-all",
          style: activeCategory === cat ? {
            background: "oklch(0.55 0.22 280)",
            color: "oklch(0.98 0.005 280)"
          } : {
            background: "oklch(0.55 0.22 280 / 0.08)",
            color: "oklch(0.45 0.15 280)"
          },
          children: cat
        },
        cat
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          variant: "outline",
          className: "h-8 text-xs font-label",
          onClick: () => ue.info("Opening Products & Services module", {
            description: "You can list your products there with community pricing."
          }),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 13, className: "mr-1.5" }),
            "List Your Product/Service"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: filtered.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "rounded-xl border-border shadow-sm overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `h-32 bg-gradient-to-br ${item.gradient} flex items-center justify-center relative`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/30 text-4xl font-display font-bold", children: item.name.slice(0, 2) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "absolute top-2 right-2 text-[9px] font-label font-bold px-2 py-0.5 rounded-full",
                    style: {
                      background: "oklch(0.55 0.22 280)",
                      color: "oklch(0.98 0.005 280)"
                    },
                    children: "COMMUNITY EXCLUSIVE"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: item.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-label text-muted-foreground", children: item.seller })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "text-base font-display font-bold",
                  style: { color: "oklch(0.50 0.22 150)" },
                  children: [
                    "PKR ",
                    item.communityPrice.toLocaleString()
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground line-through", children: [
                "PKR ",
                item.regularPrice.toLocaleString()
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-label text-muted-foreground", children: [
                "/ ",
                item.unit
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                className: "w-full h-7 text-xs font-label",
                onClick: () => ue.success("Order placed via Products module", {
                  description: `${item.name} ordered from ${item.seller}`
                }),
                children: "Order Now"
              }
            )
          ] })
        ]
      },
      item.id
    )) })
  ] });
}
function ParkingPropertyTab() {
  const [selectedProp, setSelectedProp] = reactExports.useState(null);
  const [bidOpen, setBidOpen] = reactExports.useState(false);
  const [bidItem, setBidItem] = reactExports.useState("");
  const [bidAmount, setBidAmount] = reactExports.useState("");
  const [bidderName, setBidderName] = reactExports.useState("");
  const [bids, setBids] = reactExports.useState([
    {
      id: 1,
      itemId: "A-101",
      itemName: "A-101 (Apartment)",
      itemType: "property",
      bidder: "Rahul Sharma",
      amount: 48e5,
      timestamp: "2 hrs ago",
      status: "Pending"
    },
    {
      id: 2,
      itemId: "A-101",
      itemName: "A-101 (Apartment)",
      itemType: "property",
      bidder: "Priya Patel",
      amount: 52e5,
      timestamp: "1 hr ago",
      status: "Pending"
    },
    {
      id: 3,
      itemId: "P-001",
      itemName: "Parking P-001",
      itemType: "parking",
      bidder: "Mohan Kumar",
      amount: 8e3,
      timestamp: "30 min ago",
      status: "Pending"
    }
  ]);
  const [viewBidsItem, setViewBidsItem] = reactExports.useState(null);
  const [addSlotOpen, setAddSlotOpen] = reactExports.useState(false);
  const [newSlotNo, setNewSlotNo] = reactExports.useState("");
  const [newBlock, setNewBlock] = reactExports.useState("");
  const [newSlotType, setNewSlotType] = reactExports.useState("Covered");
  const [newDailyRate, setNewDailyRate] = reactExports.useState("");
  const [newMonthlyRate, setNewMonthlyRate] = reactExports.useState("");
  const [bookSlotId, setBookSlotId] = reactExports.useState(null);
  const [bookFrom, setBookFrom] = reactExports.useState("");
  const [bookTo, setBookTo] = reactExports.useState("");
  const [slots, setSlots] = reactExports.useState(PARKING_SLOTS);
  const bookingSlot = slots.find((s) => s.id === bookSlotId);
  const totalDays = (() => {
    if (!bookFrom || !bookTo) return 0;
    const from = new Date(bookFrom);
    const to = new Date(bookTo);
    const diff = Math.ceil(
      (to.getTime() - from.getTime()) / (1e3 * 60 * 60 * 24)
    );
    return diff > 0 ? diff : 0;
  })();
  const totalCost = bookingSlot ? totalDays * bookingSlot.dailyRate : 0;
  const handleAcceptBid = (bid) => {
    setBids(
      (prev) => prev.map((b) => {
        if (b.itemId === bid.itemId) {
          return {
            ...b,
            status: b.id === bid.id ? "Accepted" : "Rejected"
          };
        }
        return b;
      })
    );
    addNotification({
      module: "GatedCommunity",
      text: `uD83CuDF89 Congratulations ${bid.bidder}! Your bid of u20b9${bid.amount.toLocaleString("en-IN")} for ${bid.itemName} has been accepted.`,
      timestamp: "Just now",
      unread: true,
      initials: bid.bidder.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()
    });
    ue.success(`Bid accepted! ${bid.bidder} has been notified.`);
    setViewBidsItem(null);
  };
  const handleRejectBid = (bidId) => {
    setBids(
      (prev) => prev.map(
        (b) => b.id === bidId ? { ...b, status: "Rejected" } : b
      )
    );
    ue.info("Bid rejected");
  };
  const handleAddSlot = () => {
    if (!newSlotNo || !newBlock) {
      ue.error("Please fill slot number and block");
      return;
    }
    const newSlot = {
      id: Date.now(),
      slotNo: newSlotNo,
      block: newBlock,
      type: newSlotType,
      dailyRate: Number(newDailyRate) || 0,
      monthlyRate: Number(newMonthlyRate) || 0,
      available: true,
      owner: "You"
    };
    setSlots((prev) => [...prev, newSlot]);
    ue.success(`Parking slot ${newSlotNo} listed successfully`);
    setAddSlotOpen(false);
    setNewSlotNo("");
    setNewBlock("");
    setNewDailyRate("");
    setNewMonthlyRate("");
  };
  const handleBookSlot = () => {
    if (!bookFrom || !bookTo || totalDays <= 0) {
      ue.error("Please select valid date range");
      return;
    }
    setSlots(
      (prev) => prev.map((s) => s.id === bookSlotId ? { ...s, available: false } : s)
    );
    ue.success(
      `Slot ${bookingSlot == null ? void 0 : bookingSlot.slotNo} booked for ${totalDays} days — PKR ${totalCost.toLocaleString()}`
    );
    setBookSlotId(null);
    setBookFrom("");
    setBookTo("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-label font-semibold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Car, { size: 15, className: "text-primary" }),
          "Parking Slots"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: addSlotOpen, onOpenChange: setAddSlotOpen, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "h-8 text-xs font-label", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 13, className: "mr-1.5" }),
            "Add My Parking Slot"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-sm font-label", children: "List Your Parking Slot" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 py-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label", children: "Slot Number" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      placeholder: "e.g. P-42",
                      value: newSlotNo,
                      onChange: (e) => setNewSlotNo(e.target.value),
                      className: "h-8 text-sm"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label", children: "Block" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      placeholder: "e.g. A",
                      value: newBlock,
                      onChange: (e) => setNewBlock(e.target.value),
                      className: "h-8 text-sm"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label", children: "Type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: newSlotType,
                    onValueChange: (v) => setNewSlotType(v),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Covered", children: "Covered" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Open", children: "Open" })
                      ] })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label", children: "Daily Rate (PKR)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "number",
                      placeholder: "200",
                      value: newDailyRate,
                      onChange: (e) => setNewDailyRate(e.target.value),
                      className: "h-8 text-sm"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label", children: "Monthly Rate (PKR)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "number",
                      placeholder: "3500",
                      value: newMonthlyRate,
                      onChange: (e) => setNewMonthlyRate(e.target.value),
                      className: "h-8 text-sm"
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                className: "font-label",
                onClick: handleAddSlot,
                children: "List Slot"
              }
            ) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4", children: slots.map((slot) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "rounded-xl border-border shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xl font-display font-bold",
                style: { color: "oklch(0.55 0.22 280)" },
                children: slot.slotNo
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-label text-muted-foreground", children: [
              "Block ",
              slot.block
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-[10px] font-label font-semibold px-2 py-0.5 rounded-full",
              style: slot.type === "Covered" ? {
                background: "oklch(0.55 0.22 280 / 0.12)",
                color: "oklch(0.45 0.22 280)"
              } : {
                background: "oklch(0.72 0.19 85 / 0.12)",
                color: "oklch(0.60 0.22 85)"
              },
              children: slot.type
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5 text-[11px] text-muted-foreground font-label", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "Daily:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
              "PKR ",
              slot.dailyRate
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "Monthly:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
              "PKR ",
              slot.monthlyRate.toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] opacity-70", children: slot.owner })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-[10px] font-label font-bold px-2 py-0.5 rounded-full",
              style: slot.available ? {
                background: "oklch(0.55 0.18 150 / 0.15)",
                color: "oklch(0.45 0.18 150)"
              } : {
                background: "oklch(0.55 0.22 25 / 0.15)",
                color: "oklch(0.50 0.22 25)"
              },
              children: slot.available ? "Available" : "Occupied"
            }
          ),
          slot.available && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Dialog,
            {
              open: bookSlotId === slot.id,
              onOpenChange: (open) => {
                if (!open) setBookSlotId(null);
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    className: "h-6 text-[10px] font-label px-2",
                    onClick: () => setBookSlotId(slot.id),
                    children: "Book"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "text-sm font-label", children: [
                    "Book Slot ",
                    slot.slotNo,
                    " — Block ",
                    slot.block
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 py-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label", children: "From" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            type: "date",
                            value: bookFrom,
                            onChange: (e) => setBookFrom(e.target.value),
                            className: "h-8 text-sm"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label", children: "To" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            type: "date",
                            value: bookTo,
                            onChange: (e) => setBookTo(e.target.value),
                            className: "h-8 text-sm"
                          }
                        )
                      ] })
                    ] }),
                    totalDays > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "rounded-lg p-3 text-sm",
                        style: {
                          background: "oklch(0.55 0.22 280 / 0.08)"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-label text-muted-foreground", children: [
                            "Duration:",
                            " ",
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
                              totalDays,
                              " days"
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-label text-muted-foreground", children: [
                            "Daily Rate:",
                            " ",
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
                              "PKR ",
                              slot.dailyRate
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-2" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-label font-bold text-foreground", children: [
                            "Total: PKR ",
                            totalCost.toLocaleString()
                          ] })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      className: "font-label",
                      onClick: handleBookSlot,
                      children: "Confirm Booking"
                    }
                  ) })
                ] })
              ]
            }
          )
        ] })
      ] }) }, slot.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-label font-semibold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 15, className: "text-primary" }),
          "Community Properties"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "h-8 text-xs font-label",
            onClick: () => ue.info("Opening Real Estate module", {
              description: "List your property for buy, sell, or rent."
            }),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 13, className: "mr-1.5" }),
              "List Property"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: COMMUNITY_PROPERTIES.map((prop) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: "rounded-xl border-border shadow-sm hover:shadow-md transition-shadow duration-200",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: prop.flatNo }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-label text-muted-foreground", children: [
                  prop.type,
                  " · Floor ",
                  prop.floor === 0 ? "G" : prop.floor
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-[10px] font-label font-bold px-2 py-0.5 rounded-full",
                  style: prop.listingType === "For Sale" ? {
                    background: "oklch(0.65 0.25 335 / 0.15)",
                    color: "oklch(0.55 0.25 335)"
                  } : {
                    background: "oklch(0.55 0.22 280 / 0.12)",
                    color: "oklch(0.45 0.22 280)"
                  },
                  children: prop.listingType
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[11px] text-muted-foreground font-label", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 10 }),
              prop.size
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-base font-display font-bold",
                style: { color: "oklch(0.55 0.22 280)" },
                children: prop.price
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "flex-1 h-7 text-xs font-label",
                  onClick: () => setSelectedProp(prop),
                  "data-ocid": "gated.property.primary_button",
                  children: "View Details"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "h-7 text-xs font-label",
                  onClick: () => {
                    setBidItem(prop.flatNo);
                    setBidOpen(true);
                  },
                  "data-ocid": "gated.property.secondary_button",
                  children: "Bid"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "ghost",
                  className: "h-7 text-xs font-label text-primary",
                  onClick: () => setViewBidsItem({ id: prop.flatNo, name: prop.flatNo }),
                  children: [
                    "View Bids (",
                    bids.filter((b) => b.itemId === prop.flatNo).length,
                    ")"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "ghost",
                className: "w-full h-6 text-xs font-label text-muted-foreground",
                onClick: () => ue.success(
                  `Inquiry sent to open market for ${prop.flatNo}`
                ),
                "data-ocid": "gated.property.button",
                children: "Send to Open Market"
              }
            )
          ] })
        },
        prop.id
      )) })
    ] }),
    selectedProp && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: !!selectedProp,
        onOpenChange: () => setSelectedProp(null),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { "data-ocid": "gated.property.dialog", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
            "Property Details — ",
            selectedProp.flatNo
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs", children: "Type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: selectedProp.type })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs", children: "Floor" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: selectedProp.floor === 0 ? "Ground" : `Floor ${selectedProp.floor}` })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs", children: "Size" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: selectedProp.size })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs", children: "Listing" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: selectedProp.listingType })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "p-3 rounded-xl",
                style: { background: "oklch(0.55 0.22 280 / 0.06)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Price" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-display font-bold text-primary", children: selectedProp.price })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  className: "flex-1",
                  onClick: () => {
                    ue.success(`Inquiry sent for ${selectedProp.flatNo}`);
                    setSelectedProp(null);
                  },
                  "data-ocid": "gated.property.confirm_button",
                  children: "Send Inquiry"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  onClick: () => setSelectedProp(null),
                  "data-ocid": "gated.property.close_button",
                  children: "Close"
                }
              )
            ] })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: !!viewBidsItem,
        onOpenChange: (o) => !o && setViewBidsItem(null),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
            "Bids — ",
            viewBidsItem == null ? void 0 : viewBidsItem.name
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 max-h-80 overflow-y-auto", children: bids.filter((b) => b.itemId === (viewBidsItem == null ? void 0 : viewBidsItem.id)).length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-center py-6", children: "No bids yet" }) : bids.filter((b) => b.itemId === (viewBidsItem == null ? void 0 : viewBidsItem.id)).map((bid) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center justify-between p-3 rounded-lg border border-border",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: bid.bidder }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: bid.timestamp })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold text-primary", children: [
                    "₹",
                    bid.amount.toLocaleString("en-IN")
                  ] }),
                  bid.status === "Pending" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "sm",
                        className: "h-7 text-xs",
                        onClick: () => handleAcceptBid(bid),
                        children: "Accept"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "sm",
                        variant: "outline",
                        className: "h-7 text-xs",
                        onClick: () => handleRejectBid(bid.id),
                        children: "Reject"
                      }
                    )
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: bid.status === "Accepted" ? "text-xs font-label font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700" : "text-xs font-label font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700",
                      children: bid.status
                    }
                  )
                ] })
              ]
            },
            bid.id
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: bidOpen, onOpenChange: setBidOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { "data-ocid": "gated.bid.dialog", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
        "Place Bid — ",
        bidItem
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Your Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "mt-1",
              placeholder: "e.g. Rahul Sharma",
              value: bidderName,
              onChange: (e) => setBidderName(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Your Bid Amount (INR)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "mt-1",
              type: "number",
              placeholder: "e.g. 1800000",
              value: bidAmount,
              onChange: (e) => setBidAmount(e.target.value),
              "data-ocid": "gated.bid.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Your bid will be submitted to the open market and visible to all interested parties." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              className: "flex-1",
              onClick: () => {
                if (!bidAmount) {
                  ue.error("Enter bid amount");
                  return;
                }
                const newBid = {
                  id: Date.now(),
                  itemId: bidItem,
                  itemName: bidItem,
                  itemType: "property",
                  bidder: bidderName || "You",
                  amount: Number(bidAmount),
                  timestamp: "Just now",
                  status: "Pending"
                };
                setBids((prev) => [...prev, newBid]);
                ue.success(
                  `Bid of ₹${Number(bidAmount).toLocaleString("en-IN")} placed successfully!`
                );
                setBidOpen(false);
                setBidAmount("");
                setBidderName("");
              },
              "data-ocid": "gated.bid.confirm_button",
              children: "Place Bid"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              onClick: () => setBidOpen(false),
              "data-ocid": "gated.bid.cancel_button",
              children: "Cancel"
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}
function GatedCommunityPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-full bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "px-6 py-5 border-b border-border",
        style: {
          background: "linear-gradient(135deg, oklch(0.55 0.22 280 / 0.06) 0%, oklch(0.65 0.25 335 / 0.04) 100%)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
              style: { background: "oklch(0.55 0.22 280 / 0.12)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 20, style: { color: "oklch(0.55 0.22 280)" } })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-display font-bold text-foreground", children: "Gated Community" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-label text-muted-foreground mt-0.5", children: "Green Valley Society · DHA Phase 5, Lahore" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-xs font-label font-semibold px-3 py-1 rounded-full",
                style: {
                  background: "oklch(0.55 0.18 150 / 0.12)",
                  color: "oklch(0.45 0.18 150)",
                  border: "1px solid oklch(0.55 0.18 150 / 0.25)"
                },
                children: "● Active Member"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-xs font-label font-semibold px-3 py-1 rounded-full hidden sm:inline-flex",
                style: {
                  background: "oklch(0.55 0.22 280 / 0.1)",
                  color: "oklch(0.45 0.22 280)",
                  border: "1px solid oklch(0.55 0.22 280 / 0.2)"
                },
                children: "Flat A-101 · Owner"
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(QuickAddBar, { moduleName: "Gated Community" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "overview", className: "w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border bg-card/50 px-6 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TabsList, { className: "bg-transparent gap-0 h-auto p-0 rounded-none", children: [
        { value: "overview", label: "Overview", icon: House },
        { value: "gate", label: "Gate Entry/Exit", icon: QrCode },
        { value: "staff", label: "Staff & Security", icon: ShieldCheck },
        { value: "complaints", label: "Complaints", icon: TriangleAlert },
        { value: "marketplace", label: "Marketplace", icon: Package },
        { value: "parking", label: "Parking & Property", icon: Car },
        { value: "events", label: "Events", icon: Calendar }
      ].map((tab) => {
        const Icon = tab.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: tab.value,
            className: "relative rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-3 text-xs font-label font-medium text-muted-foreground data-[state=active]:text-primary transition-colors gap-1.5 flex items-center whitespace-nowrap",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 13 }),
              tab.label
            ]
          },
          tab.value
        );
      }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "overview", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OverviewTab, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "gate", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GateEntryTab, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "staff", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StaffTab, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "complaints", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ComplaintsTab, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "marketplace", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MarketplaceTab, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "parking", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ParkingPropertyTab, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "events", className: "mt-0 p-4 lg:p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        EventsTab,
        {
          moduleName: "Gated Community",
          moduleColor: "oklch(0.55 0.18 240)"
        }
      ) })
    ] })
  ] });
}
export {
  GatedCommunityPage as default
};
