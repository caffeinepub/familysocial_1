import { h as createLucideIcon, r as reactExports, j as jsxRuntimeExports, l as ShieldCheck, n as Users, T as TriangleAlert, g as Star, Z as Zap, ah as DropdownMenu, ai as DropdownMenuTrigger, Q as ChevronDown, aj as DropdownMenuContent, ak as DropdownMenuItem, a as Button, B as Badge, L as Label, I as Input, S as Select, c as SelectTrigger, d as SelectValue, e as SelectContent, f as SelectItem, u as ue, _ as ShoppingBag, R as Switch, s as CircleCheck, ag as Shield, G as MapPin, D as Dialog, x as DialogTrigger, y as DialogContent, z as DialogHeader, E as DialogTitle, ae as LoaderCircle, v as Briefcase, a1 as React } from "./index-BYT7ZeT6.js";
import { C as Checkbox } from "./checkbox-D_hDvmpj.js";
import { S as Slider } from "./slider-Cjbh92kn.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-8GFJnLkh.js";
import { T as Textarea } from "./textarea-DMZdGyJf.js";
import { C as CircleX } from "./circle-x-DBDdEk53.js";
import { P as Package } from "./package-EjUaf3wr.js";
import { D as Database } from "./index-B8HS3j0-.js";
import { T as TrendingUp } from "./trending-up-DKu_ar1X.js";
import { A as Activity } from "./activity-B7iUsQ-I.js";
import { C as Crown } from "./crown-Yb9Pj38U.js";
import { I as Image } from "./image-DX1sslIM.js";
import { L as Link2 } from "./link-2-C06U2BsY.js";
import { M as MessageSquare } from "./message-square-C1eJ-fiz.js";
import { S as Share2 } from "./share-2-CWF083GM.js";
import { S as Smartphone } from "./smartphone-DK5Qw5HI.js";
import { D as DollarSign } from "./dollar-sign-C48zfLhz.js";
import { S as Settings2 } from "./settings-2-Dfrd-f7s.js";
import { P as Palette } from "./palette-BJbiOTnw.js";
import { E as Ellipsis } from "./ellipsis-OtcVgIQI.js";
import { B as BookOpen } from "./book-open-Sg6mv_cf.js";
import { T as Trash2 } from "./trash-2-DVH2JACN.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M12 16h.01", key: "1drbdi" }],
  ["path", { d: "M16 16h.01", key: "1f9h7w" }],
  [
    "path",
    {
      d: "M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z",
      key: "1iv0i2"
    }
  ],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
];
const Factory = createLucideIcon("factory", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
];
const RefreshCw = createLucideIcon("refresh-cw", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = createLucideIcon("rotate-ccw", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "17", x2: "22", y1: "8", y2: "13", key: "3nzzx3" }],
  ["line", { x1: "22", x2: "17", y1: "8", y2: "13", key: "1swrse" }]
];
const UserX = createLucideIcon("user-x", __iconNode);
function SBadge({
  label,
  color
}) {
  const map = {
    green: { bg: "oklch(0.52 0.14 155 / 0.12)", text: "oklch(0.35 0.10 155)" },
    amber: { bg: "oklch(0.72 0.17 85 / 0.15)", text: "oklch(0.50 0.14 65)" },
    red: { bg: "oklch(0.55 0.22 25 / 0.12)", text: "oklch(0.45 0.18 25)" },
    blue: { bg: "oklch(0.55 0.15 240 / 0.12)", text: "oklch(0.40 0.12 240)" },
    violet: { bg: "oklch(0.55 0.22 280 / 0.12)", text: "oklch(0.45 0.18 280)" },
    rose: { bg: "oklch(0.65 0.25 335 / 0.12)", text: "oklch(0.50 0.20 335)" },
    gray: { bg: "oklch(0.55 0.02 0 / 0.12)", text: "oklch(0.45 0.02 0)" }
  };
  const s = map[color];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "text-[10px] font-label font-semibold px-2 py-0.5 rounded-full whitespace-nowrap",
      style: { background: s.bg, color: s.text },
      children: label
    }
  );
}
function TH({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2.5 text-[11px] font-label font-semibold text-muted-foreground bg-secondary/40 border-b border-border whitespace-nowrap", children });
}
function TD({
  children,
  className = "",
  style
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "td",
    {
      className: `px-3 py-2 text-xs font-label text-foreground border-b border-border/50 ${className}`,
      style,
      children
    }
  );
}
function ActionBtn({
  label,
  color = "default",
  onClick
}) {
  const styles = {
    green: "text-[oklch(0.35_0.10_155)] border-[oklch(0.52_0.14_155/0.3)] hover:bg-[oklch(0.52_0.14_155/0.08)]",
    red: "text-[oklch(0.45_0.18_25)] border-[oklch(0.55_0.22_25/0.3)] hover:bg-[oklch(0.55_0.22_25/0.08)]",
    amber: "text-[oklch(0.50_0.14_65)] border-[oklch(0.72_0.17_85/0.3)] hover:bg-[oklch(0.72_0.17_85/0.08)]",
    default: "text-muted-foreground border-border hover:bg-secondary/60"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick,
      className: `text-[11px] font-label font-medium px-2 py-1 rounded border transition-colors ${styles[color]}`,
      children: label
    }
  );
}
const COMPLAINTS = [
  {
    id: "CMP-001",
    target: "Khan Electronics",
    category: "Fraud",
    desc: "Sold counterfeit phone charger claiming it was original branded product",
    status: "open",
    date: "Mar 1, 2026"
  },
  {
    id: "CMP-002",
    target: "Riaz Coaching",
    category: "Quality",
    desc: "Teacher did not deliver promised course content for three weeks",
    status: "reviewing",
    date: "Feb 28, 2026"
  },
  {
    id: "CMP-003",
    target: "Ahmed Hassan",
    category: "Harassment",
    desc: "User sending repeated unsolicited messages after being ignored",
    status: "resolved",
    date: "Feb 27, 2026"
  },
  {
    id: "CMP-004",
    target: "Al-Noor Pharmacy",
    category: "Misinformation",
    desc: "Listing expired medicines as in-date stock with wrong expiry labels",
    status: "escalated",
    date: "Feb 26, 2026"
  },
  {
    id: "CMP-005",
    target: "DHA Rentals",
    category: "Fraud",
    desc: "Property listed for rent does not exist at mentioned address",
    status: "open",
    date: "Feb 25, 2026"
  },
  {
    id: "CMP-006",
    target: "Green Valley School",
    category: "Quality",
    desc: "Results portal has been inaccessible for two weeks with no communication",
    status: "reviewing",
    date: "Feb 24, 2026"
  },
  {
    id: "CMP-007",
    target: "Usman Travels",
    category: "Other",
    desc: "Overcharged clients by 40% compared to advertised package price",
    status: "resolved",
    date: "Feb 23, 2026"
  },
  {
    id: "CMP-008",
    target: "Malik Bakers",
    category: "Quality",
    desc: "Product arrived damaged and customer support refused to respond",
    status: "open",
    date: "Feb 22, 2026"
  },
  {
    id: "CMP-009",
    target: "TechPK Store",
    category: "Fraud",
    desc: "Fake affiliate links redirecting users to phishing websites",
    status: "escalated",
    date: "Feb 21, 2026"
  },
  {
    id: "CMP-010",
    target: "Karachi Movers",
    category: "Harassment",
    desc: "Staff member threatened customer after negative review",
    status: "reviewing",
    date: "Feb 20, 2026"
  }
];
const BLOCKED_USERS = [
  {
    user: "ali.raza92",
    reason: "Repeated spam messages",
    blockedDate: "Mar 1, 2026",
    reactivation: "Mar 8, 2026"
  },
  {
    user: "zahra.m***",
    reason: "Abusive language in chat",
    blockedDate: "Feb 28, 2026",
    reactivation: "Mar 7, 2026"
  },
  {
    user: "imran.k***",
    reason: "Posting fraudulent listings",
    blockedDate: "Feb 27, 2026",
    reactivation: "Mar 27, 2026"
  },
  {
    user: "sara.a***",
    reason: "Harassment of another user",
    blockedDate: "Feb 26, 2026",
    reactivation: "Mar 5, 2026"
  },
  {
    user: "faisal.***",
    reason: "Distributing misinformation",
    blockedDate: "Feb 25, 2026",
    reactivation: "Mar 11, 2026"
  },
  {
    user: "nida.h***",
    reason: "Multiple fake reviews posted",
    blockedDate: "Feb 24, 2026",
    reactivation: "Mar 3, 2026"
  },
  {
    user: "omar.q***",
    reason: "Scam product listings",
    blockedDate: "Feb 23, 2026",
    reactivation: "Permanent"
  }
];
const REVIEWS = [
  {
    entity: "Khan Electronics",
    rating: 2,
    text: "Product quality is very poor and customer support is unresponsive.",
    likes: 14,
    dislikes: 2
  },
  {
    entity: "Usman Travels",
    rating: 4,
    text: "Good travel experience but some hidden charges were added at checkout.",
    likes: 8,
    dislikes: 1
  },
  {
    entity: "Riaz Coaching Center",
    rating: 1,
    text: "Teacher barely attends classes and assignments are never marked.",
    likes: 22,
    dislikes: 0
  },
  {
    entity: "Al-Noor Pharmacy",
    rating: 3,
    text: "Prices are reasonable but expired products on shelves is concerning.",
    likes: 11,
    dislikes: 3
  },
  {
    entity: "TechPK Store",
    rating: 5,
    text: "Excellent service and very fast delivery. Highly recommend.",
    likes: 6,
    dislikes: 0
  },
  {
    entity: "Green Valley School",
    rating: 2,
    text: "Communication from admin is terrible. Parents are left in the dark.",
    likes: 19,
    dislikes: 2
  },
  {
    entity: "DHA Rentals",
    rating: 1,
    text: "Property shown in photos does not match what was available on visit.",
    likes: 31,
    dislikes: 1
  },
  {
    entity: "Malik Bakers",
    rating: 4,
    text: "Delicious products but packaging needs improvement for deliveries.",
    likes: 4,
    dislikes: 0
  },
  {
    entity: "Karachi Movers",
    rating: 2,
    text: "Items were damaged during the move and company refused to compensate.",
    likes: 17,
    dislikes: 4
  },
  {
    entity: "City Hospital Clinic",
    rating: 5,
    text: "Doctors are extremely professional and waiting time is minimal.",
    likes: 9,
    dislikes: 0
  }
];
const ABUSE_LOGS = [
  {
    time: "Mar 1 09:14",
    severity: "high",
    snippet: "Reported account 'ali.raza92' for sending spam to 15+ users",
    action: "Account blocked 7 days"
  },
  {
    time: "Feb 28 16:32",
    severity: "medium",
    snippet: "Detected abusive language in complaint #CMP-002 comment thread",
    action: "Comment removed + warning sent"
  },
  {
    time: "Feb 28 11:05",
    severity: "critical",
    snippet: "Phishing link detected in affiliate post by 'faisal.***'",
    action: "Post removed + account blocked"
  },
  {
    time: "Feb 27 14:20",
    severity: "low",
    snippet: "User flagged product review as fake on Khan Electronics listing",
    action: "Review flagged for manual review"
  },
  {
    time: "Feb 26 08:45",
    severity: "high",
    snippet: "Harassment detected: 'sara.a***' sent 40+ messages in 1 hour",
    action: "Account blocked 7 days"
  },
  {
    time: "Feb 25 19:33",
    severity: "medium",
    snippet: "Misinformation detected in blog post about healthcare supplement",
    action: "Post quarantined + author warned"
  },
  {
    time: "Feb 24 12:00",
    severity: "critical",
    snippet: "Mass fake review campaign detected: 8 reviews from same IP",
    action: "All reviews removed + IPs blocked"
  },
  {
    time: "Feb 23 15:47",
    severity: "low",
    snippet: "User reported misleading job salary description in listing",
    action: "Listing flagged for update"
  }
];
const PERF_LOGS = [
  { time: "Mar 1 09:00", metric: "Page Load", value: "1.2s", status: "good" },
  {
    time: "Mar 1 09:00",
    metric: "API Response",
    value: "340ms",
    status: "good"
  },
  { time: "Mar 1 09:00", metric: "Error Rate", value: "0.12%", status: "good" },
  { time: "Mar 1 09:00", metric: "Memory Usage", value: "62%", status: "warn" },
  { time: "Mar 1 09:00", metric: "DB Query", value: "280ms", status: "good" },
  { time: "Feb 28 21:00", metric: "Page Load", value: "2.8s", status: "warn" },
  {
    time: "Feb 28 21:00",
    metric: "API Response",
    value: "890ms",
    status: "warn"
  },
  { time: "Feb 28 21:00", metric: "Error Rate", value: "1.8%", status: "bad" },
  { time: "Feb 28 21:00", metric: "Memory Usage", value: "87%", status: "bad" },
  { time: "Feb 28 21:00", metric: "DB Query", value: "1240ms", status: "bad" },
  { time: "Feb 27 09:00", metric: "Page Load", value: "1.1s", status: "good" },
  {
    time: "Feb 27 09:00",
    metric: "API Response",
    value: "310ms",
    status: "good"
  },
  {
    time: "Feb 27 09:00",
    metric: "Error Rate",
    value: "0.08%",
    status: "good"
  },
  {
    time: "Feb 27 09:00",
    metric: "Memory Usage",
    value: "58%",
    status: "good"
  },
  { time: "Feb 27 09:00", metric: "DB Query", value: "195ms", status: "good" },
  { time: "Feb 26 09:00", metric: "Page Load", value: "1.4s", status: "good" },
  {
    time: "Feb 26 09:00",
    metric: "API Response",
    value: "420ms",
    status: "good"
  },
  {
    time: "Feb 26 09:00",
    metric: "Error Rate",
    value: "0.25%",
    status: "good"
  },
  {
    time: "Feb 26 09:00",
    metric: "Memory Usage",
    value: "71%",
    status: "warn"
  },
  { time: "Feb 26 09:00", metric: "DB Query", value: "340ms", status: "good" }
];
const SNAPSHOTS = [
  {
    label: "Pre-Education Module Update",
    time: "Mar 1, 2026 08:00",
    hash: "a3f9c1d2e4b6"
  },
  {
    label: "Pre-Jobs Enhancement",
    time: "Feb 27, 2026 10:30",
    hash: "b7e2a5f8c0d1"
  },
  {
    label: "Pre-Agent Integration",
    time: "Feb 25, 2026 09:15",
    hash: "c4d1b9e3a7f0"
  },
  {
    label: "Weekly Auto-Snapshot",
    time: "Feb 22, 2026 00:00",
    hash: "d8f0c2a6e1b5"
  },
  {
    label: "Pre-Matrimony Activation",
    time: "Feb 19, 2026 14:00",
    hash: "e2b4d7f1a3c9"
  }
];
const HEALING_EVENTS = [
  {
    issue: "Memory leak in GeoMap component",
    action: "Cleared event listeners on unmount",
    before: "87% memory",
    after: "58% memory",
    status: "fixed"
  },
  {
    issue: "Slow API response on product search",
    action: "Enabled response caching for 5 mins",
    before: "890ms",
    after: "310ms",
    status: "fixed"
  },
  {
    issue: "Broken image URLs in product listings",
    action: "Replaced with fallback placeholder images",
    before: "404 errors",
    after: "0 errors",
    status: "fixed"
  },
  {
    issue: "High error rate during peak hours",
    action: "Added request throttling + retry logic",
    before: "1.8%",
    after: "0.12%",
    status: "fixed"
  },
  {
    issue: "Login session timeout too short",
    action: "Extended session TTL to 24 hours",
    before: "1 hour",
    after: "24 hours",
    status: "fixed"
  },
  {
    issue: "Duplicate notifications on feed refresh",
    action: "Added deduplication key to notification store",
    before: "Duplicates",
    after: "Clean",
    status: "fixed"
  },
  {
    issue: "Slow loading Education module (4.2s)",
    action: "Lazy loaded tab content and deferred images",
    before: "4.2s",
    after: "1.1s",
    status: "fixed"
  },
  {
    issue: "Mobile sidebar overlap on iOS Safari",
    action: "Applied safe-area-inset fixes",
    before: "Overlap bug",
    after: "Correct",
    status: "pending"
  }
];
const SYNCED_PRODUCTS = [
  {
    name: "Apple iPhone 15 Pro",
    source: "FakeStore API",
    price: "PKR 289,000",
    synced: "Mar 1, 2026"
  },
  {
    name: "Sony WH-1000XM5 Headphones",
    source: "FakeStore API",
    price: "PKR 62,000",
    synced: "Mar 1, 2026"
  },
  {
    name: "Organic Basmati Rice 5kg",
    source: "OpenFoodFacts",
    price: "INR 1,200",
    synced: "Feb 28, 2026"
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    source: "FakeStore API",
    price: "PKR 319,000",
    synced: "Feb 28, 2026"
  },
  {
    name: "Premium Olive Oil 1L",
    source: "OpenFoodFacts",
    price: "PKR 1,800",
    synced: "Feb 28, 2026"
  },
  {
    name: 'MacBook Air M3 15"',
    source: "FakeStore API",
    price: "PKR 385,000",
    synced: "Feb 27, 2026"
  },
  {
    name: "Green Tea Matcha 200g",
    source: "OpenFoodFacts",
    price: "PKR 2,400",
    synced: "Feb 27, 2026"
  },
  {
    name: "DJI Mini 4 Pro Drone",
    source: "FakeStore API",
    price: "PKR 145,000",
    synced: "Feb 26, 2026"
  },
  {
    name: "Himalayan Pink Salt 1kg",
    source: "OpenFoodFacts",
    price: "PKR 350",
    synced: "Feb 26, 2026"
  },
  {
    name: "Dell XPS 15 Laptop",
    source: "FakeStore API",
    price: "PKR 295,000",
    synced: "Feb 25, 2026"
  },
  {
    name: "Almond Milk Oat Blend",
    source: "OpenFoodFacts",
    price: "PKR 880",
    synced: "Feb 25, 2026"
  },
  {
    name: "Bose QuietComfort 45",
    source: "FakeStore API",
    price: "PKR 78,000",
    synced: "Feb 24, 2026"
  }
];
const CONSENT_REQUESTS = [
  {
    user: "ali.r***",
    field: "Occupation",
    oldVal: "Engineer",
    newVal: "Senior Software Engineer",
    status: "pending"
  },
  {
    user: "sara.k***",
    field: "Phone Number",
    oldVal: "+92-300-***",
    newVal: "+92-321-***",
    status: "accepted"
  },
  {
    user: "zara.m***",
    field: "Business Category",
    oldVal: "Retail",
    newVal: "E-Commerce & Retail",
    status: "pending"
  },
  {
    user: "imran.***",
    field: "Date of Birth",
    oldVal: "1985",
    newVal: "1985-03-12",
    status: "dismissed"
  },
  {
    user: "fatima***",
    field: "Education Level",
    oldVal: "Graduate",
    newVal: "Post-Graduate (MBA)",
    status: "pending"
  }
];
const API_SOURCES = [
  {
    name: "FakeStore API",
    url: "https://fakestoreapi.com",
    enabled: true,
    lastRun: "Mar 1, 2026 06:00",
    count: 52
  },
  {
    name: "OpenFoodFacts",
    url: "https://world.openfoodfacts.org",
    enabled: true,
    lastRun: "Mar 1, 2026 06:00",
    count: 37
  },
  {
    name: "REST Countries",
    url: "https://restcountries.com",
    enabled: true,
    lastRun: "Mar 1, 2026 06:00",
    count: 250
  },
  {
    name: "Open Library API",
    url: "https://openlibrary.org",
    enabled: false,
    lastRun: "Feb 20, 2026 06:00",
    count: 0
  }
];
const EVOLUTION_CHANGES = [
  {
    title: "One-click Apply from Feed Posts",
    desc: "Users can apply to jobs directly from feed posts without navigating to the Jobs module.",
    category: "UX",
    status: "pending",
    likes: 47,
    dislikes: 3
  },
  {
    title: "Community Feed Pinned Announcements",
    desc: "Community admins can pin important announcements to appear at the top of the community feed.",
    category: "Feature",
    status: "approved",
    likes: 61,
    dislikes: 2
  },
  {
    title: "Dark mode for Geomap layers",
    desc: "Map layer controls now adapt to the user's dark/light mode preference automatically.",
    category: "UI",
    status: "pending",
    likes: 38,
    dislikes: 7
  },
  {
    title: "Family Tree Quick Connect on hover",
    desc: "Hovering a family tree node shows a connect/message button without opening the full profile.",
    category: "UX",
    status: "pending",
    likes: 29,
    dislikes: 5
  },
  {
    title: "Bulk export data as PDF/CSV",
    desc: "Users can export their records from any module as PDF or CSV for offline use.",
    category: "Feature",
    status: "approved",
    likes: 54,
    dislikes: 1
  },
  {
    title: "AI product description generator",
    desc: "Sellers can auto-generate product descriptions using AI when adding a new product.",
    category: "AI",
    status: "rejected",
    likes: 22,
    dislikes: 18
  }
];
const POLLS = [
  {
    question: "Which module would you like improved most?",
    options: [
      { label: "Social Feed", votes: 142 },
      { label: "Jobs Module", votes: 98 },
      { label: "Healthcare", votes: 67 },
      { label: "Education", votes: 53 }
    ],
    total: 360
  },
  {
    question: "How do you primarily access FamilySocial?",
    options: [
      { label: "Desktop Browser", votes: 201 },
      { label: "Mobile Browser", votes: 184 },
      { label: "Both equally", votes: 87 }
    ],
    total: 472
  },
  {
    question: "Would you use a mobile app if available?",
    options: [
      { label: "Yes, definitely", votes: 389 },
      { label: "Maybe", votes: 112 },
      { label: "No preference", votes: 43 }
    ],
    total: 544
  }
];
const SUGGESTIONS = [
  {
    insight: "78% of users visit Jobs module within 10 min of login — recommend showing Jobs highlights on homepage.",
    category: "UX"
  },
  {
    insight: "Community module has 3× more engagement on weekends — suggest scheduling announcements for Fri-Sun.",
    category: "Content"
  },
  {
    insight: "60% of Geomap users only use the Family layer — offer a 'Family-only mode' toggle for the map.",
    category: "Feature"
  },
  {
    insight: "Healthcare module visits spike after Family Tree updates — consider an automatic health check-in prompt.",
    category: "Flow"
  },
  {
    insight: "POS sessions average 18 minutes — reduce checkout steps to improve conversion rate.",
    category: "UX"
  }
];
const VERSION_HISTORY = [
  {
    quarter: "Q4 2025",
    changes: [
      "Activated Gated Community Management",
      "Added Point of Sale system",
      "Matrimony & Dating module launched",
      "Family Circle with admin roles",
      "Extended member profiles"
    ]
  },
  {
    quarter: "Q3 2025",
    changes: [
      "Blog & Affiliate marketing system",
      "Travel module with 5 submodules",
      "Education module: 4 roles",
      "Jobs ATS and delivery tracking"
    ]
  },
  {
    quarter: "Q2 2025",
    changes: [
      "Healthcare with insurance & advisors",
      "Real Estate with NOC handling",
      "Products with variants & rentals",
      "Geomap with 9 module layers"
    ]
  }
];
const LEGAL_UPDATES = [
  {
    country: "🇵🇰",
    flag: "PK",
    law: "PECA Amendment 2025",
    module: "Social",
    summary: "New provisions require platforms to remove flagged content within 24 hours or face fines up to PKR 5M",
    date: "Feb 15, 2026",
    status: "reviewed"
  },
  {
    country: "🇪🇺",
    flag: "EU",
    law: "DSA Compliance Update",
    module: "Marketplace",
    summary: "Digital Services Act requires transparent algorithmic recommendation disclosure for all EU users",
    date: "Feb 10, 2026",
    status: "pending"
  },
  {
    country: "🇬🇧",
    flag: "UK",
    law: "Online Safety Act 2025",
    module: "Social",
    summary: "Platforms must implement age verification and parental controls for users under 18",
    date: "Jan 28, 2026",
    status: "pending"
  },
  {
    country: "🇮🇳",
    flag: "IN",
    law: "IT Rules Amendment",
    module: "Healthcare",
    summary: "Health data must be stored on Indian servers and cannot be transferred outside without consent",
    date: "Jan 20, 2026",
    status: "reviewed"
  },
  {
    country: "🇦🇪",
    flag: "AE",
    law: "TDRA Telecom Regulation",
    module: "Jobs",
    summary: "Job platforms must verify employer licenses and display license numbers on job listings",
    date: "Jan 15, 2026",
    status: "pending"
  },
  {
    country: "🌍",
    flag: "GL",
    law: "GDPR Data Retention Update",
    module: "All Modules",
    summary: "User data retention policy must not exceed 24 months for inactive accounts",
    date: "Jan 5, 2026",
    status: "reviewed"
  },
  {
    country: "🇺🇸",
    flag: "US",
    law: "FTC Affiliate Disclosure Rules",
    module: "Blog/Affiliate",
    summary: "All sponsored or affiliate content must include a clear disclosure statement visible before the first link",
    date: "Dec 20, 2025",
    status: "reviewed"
  },
  {
    country: "🇵🇰",
    flag: "PK",
    law: "Real Estate Act 2025",
    module: "Real Estate",
    summary: "Property listings must include RERA registration number and verified ownership documents",
    date: "Dec 10, 2025",
    status: "pending"
  }
];
const TC_CLAUSES = [
  {
    title: "Content Removal (24h Policy)",
    content: "FamilySocial will remove any content reported as violating PECA Amendment 2025 within 24 hours of a verified complaint to remain compliant with Pakistani law.",
    country: "🇵🇰 Pakistan",
    module: "Social",
    status: "pending"
  },
  {
    title: "Algorithmic Transparency (EU)",
    content: "Users in the European Union have the right to request an explanation of how content is recommended to them on FamilySocial feeds and search results.",
    country: "🇪🇺 EU",
    module: "Social/Feed",
    status: "pending"
  },
  {
    title: "Health Data Localization (India)",
    content: "Healthcare data of users located in India is processed and stored on India-region servers and will not be transferred internationally without explicit user consent.",
    country: "🇮🇳 India",
    module: "Healthcare",
    status: "approved"
  },
  {
    title: "Affiliate Disclosure Requirement",
    content: "All blog posts containing affiliate links must display the text 'This post contains affiliate links. The author may earn a commission.' at the beginning of the article.",
    country: "🇺🇸 USA / 🌍 Global",
    module: "Blog/Affiliate",
    status: "approved"
  },
  {
    title: "Property Listing Verification",
    content: "Real estate listings must include a valid RERA registration number. Listings without verified ownership documents will be removed within 48 hours.",
    country: "🇵🇰 Pakistan",
    module: "Real Estate",
    status: "pending"
  },
  {
    title: "Age Verification for Matrimony/Dating",
    content: "Users of the Matrimony and Dating modules must verify they are 18 years or older. Profiles of minors will be automatically restricted from these sections.",
    country: "🇬🇧 UK / 🌍 Global",
    module: "Matrimony/Dating",
    status: "pending"
  }
];
const AUDIT_LOGS = [
  {
    time: "Mar 1, 2026 11:30",
    admin: "admin-2f3a***",
    action: "Approved",
    clause: "Health Data Localization (India)"
  },
  {
    time: "Mar 1, 2026 11:28",
    admin: "admin-2f3a***",
    action: "Approved",
    clause: "Affiliate Disclosure Requirement"
  },
  {
    time: "Feb 28, 2026 14:15",
    admin: "admin-9c1b***",
    action: "Rejected",
    clause: "Cookie Consent Banner (draft)"
  },
  {
    time: "Feb 27, 2026 09:45",
    admin: "admin-2f3a***",
    action: "Reviewed",
    clause: "Content Removal (24h Policy)"
  },
  {
    time: "Feb 26, 2026 16:20",
    admin: "admin-9c1b***",
    action: "Reviewed",
    clause: "Algorithmic Transparency (EU)"
  },
  {
    time: "Feb 25, 2026 10:00",
    admin: "admin-5e7d***",
    action: "Approved",
    clause: "Data Retention Policy (GDPR)"
  },
  {
    time: "Feb 24, 2026 13:40",
    admin: "admin-2f3a***",
    action: "Rejected",
    clause: "Auto-delete inactive accounts (draft)"
  },
  {
    time: "Feb 23, 2026 08:55",
    admin: "admin-5e7d***",
    action: "Reviewed",
    clause: "Property Listing Verification"
  },
  {
    time: "Feb 22, 2026 17:10",
    admin: "admin-9c1b***",
    action: "Approved",
    clause: "Age Verification for Matrimony/Dating"
  },
  {
    time: "Feb 21, 2026 12:00",
    admin: "admin-2f3a***",
    action: "Reviewed",
    clause: "TDRA Job Listing Requirements"
  }
];
const COVERAGE_COUNTRIES = [
  "🇵🇰 Pakistan",
  "🇮🇳 India",
  "🇦🇪 UAE",
  "🇬🇧 UK",
  "🇪🇺 EU",
  "🇺🇸 USA",
  "🌍 Global"
];
const COVERAGE_MODULES = [
  "Social",
  "Marketplace",
  "Healthcare",
  "Education",
  "Jobs",
  "Real Estate"
];
const COVERAGE_DATA = {
  "🇵🇰 Pakistan": {
    Social: "✅",
    Marketplace: "✅",
    Healthcare: "⚠️",
    Education: "✅",
    Jobs: "⚠️",
    "Real Estate": "⚠️"
  },
  "🇮🇳 India": {
    Social: "⚠️",
    Marketplace: "⚠️",
    Healthcare: "✅",
    Education: "⚠️",
    Jobs: "❌",
    "Real Estate": "❌"
  },
  "🇦🇪 UAE": {
    Social: "⚠️",
    Marketplace: "✅",
    Healthcare: "❌",
    Education: "❌",
    Jobs: "✅",
    "Real Estate": "⚠️"
  },
  "🇬🇧 UK": {
    Social: "⚠️",
    Marketplace: "✅",
    Healthcare: "❌",
    Education: "⚠️",
    Jobs: "⚠️",
    "Real Estate": "❌"
  },
  "🇪🇺 EU": {
    Social: "⚠️",
    Marketplace: "✅",
    Healthcare: "❌",
    Education: "❌",
    Jobs: "⚠️",
    "Real Estate": "❌"
  },
  "🇺🇸 USA": {
    Social: "✅",
    Marketplace: "✅",
    Healthcare: "❌",
    Education: "❌",
    Jobs: "⚠️",
    "Real Estate": "❌"
  },
  "🌍 Global": {
    Social: "✅",
    Marketplace: "✅",
    Healthcare: "⚠️",
    Education: "⚠️",
    Jobs: "⚠️",
    "Real Estate": "⚠️"
  }
};
const ALL_USERS = [
  {
    name: "Ahmed Khan",
    role: "admin",
    status: "active",
    joined: "Jan 1, 2026"
  },
  {
    name: "Fatima Malik",
    role: "user",
    status: "active",
    joined: "Jan 5, 2026"
  },
  {
    name: "Zara Hassan",
    role: "user",
    status: "active",
    joined: "Jan 8, 2026"
  },
  {
    name: "Omar Siddiqui",
    role: "user",
    status: "blocked",
    joined: "Jan 10, 2026"
  },
  {
    name: "Aisha Tariq",
    role: "user",
    status: "active",
    joined: "Jan 15, 2026"
  },
  {
    name: "Hassan Ali",
    role: "user",
    status: "active",
    joined: "Jan 18, 2026"
  },
  {
    name: "Nida Raza",
    role: "user",
    status: "active",
    joined: "Jan 20, 2026"
  },
  {
    name: "Imran Qureshi",
    role: "user",
    status: "blocked",
    joined: "Jan 22, 2026"
  },
  {
    name: "Sara Ahmed",
    role: "user",
    status: "active",
    joined: "Jan 25, 2026"
  },
  {
    name: "Bilal Hussain",
    role: "user",
    status: "active",
    joined: "Jan 28, 2026"
  },
  {
    name: "Maria Sheikh",
    role: "user",
    status: "active",
    joined: "Feb 1, 2026"
  },
  {
    name: "Talha Nawaz",
    role: "user",
    status: "active",
    joined: "Feb 5, 2026"
  },
  { name: "Hina Baig", role: "user", status: "active", joined: "Feb 8, 2026" },
  {
    name: "Usman Farooq",
    role: "user",
    status: "blocked",
    joined: "Feb 10, 2026"
  },
  {
    name: "Iqra Anwar",
    role: "user",
    status: "active",
    joined: "Feb 15, 2026"
  }
];
const THEME_TEMPLATES = [
  {
    id: "indyacentral-vibrant",
    name: "IndyaCentral Vibrant",
    primary: "0.55 0.22 280",
    accent: "0.65 0.25 335",
    sidebar: "0.20 0.065 280",
    isDefault: true
  },
  {
    id: "ocean-blue",
    name: "Ocean Blue",
    primary: "0.55 0.18 220",
    accent: "0.65 0.20 180",
    sidebar: "0.18 0.06 220",
    isDefault: false
  },
  {
    id: "forest-green",
    name: "Forest Green",
    primary: "0.45 0.15 145",
    accent: "0.65 0.18 85",
    sidebar: "0.16 0.05 145",
    isDefault: false
  },
  {
    id: "sunset-orange",
    name: "Sunset Orange",
    primary: "0.60 0.22 45",
    accent: "0.65 0.25 25",
    sidebar: "0.18 0.055 45",
    isDefault: false
  },
  {
    id: "rose-gold",
    name: "Rose Gold",
    primary: "0.55 0.18 355",
    accent: "0.72 0.15 65",
    sidebar: "0.17 0.055 355",
    isDefault: false
  },
  {
    id: "midnight-dark",
    name: "Midnight Dark",
    primary: "0.65 0.14 255",
    accent: "0.70 0.20 200",
    sidebar: "0.12 0.04 255",
    isDefault: false
  }
];
function ThemeTemplateManager() {
  const [activeId, setActiveId] = reactExports.useState(() => {
    try {
      const stored = localStorage.getItem("indyacentral-theme");
      if (stored) {
        const parsed = JSON.parse(stored);
        const primary = parsed["--primary"];
        const found = THEME_TEMPLATES.find((t) => t.primary === primary);
        return found ? found.id : "indyacentral-vibrant";
      }
    } catch {
    }
    return "indyacentral-vibrant";
  });
  const [customPrimary, setCustomPrimary] = reactExports.useState({
    l: "0.55",
    c: "0.22",
    h: "280"
  });
  const [customAccent, setCustomAccent] = reactExports.useState({
    l: "0.65",
    c: "0.25",
    h: "335"
  });
  const [customSidebar, setCustomSidebar] = reactExports.useState({
    l: "0.20",
    c: "0.065",
    h: "280"
  });
  const applyTheme = (primary, accent, sidebar, id) => {
    const vars = {
      "--primary": primary,
      "--ring": primary,
      "--accent": accent,
      "--sidebar": sidebar,
      "--sidebar-primary": accent,
      "--sidebar-accent": `${sidebar.split(" ")[0]} ${(Number.parseFloat(sidebar.split(" ")[1]) + 0.01).toFixed(3)} ${sidebar.split(" ")[2]}`
    };
    for (const [key, value] of Object.entries(vars)) {
      document.documentElement.style.setProperty(key, value);
    }
    localStorage.setItem("indyacentral-theme", JSON.stringify(vars));
    setActiveId(id);
    ue.success("Theme applied successfully");
  };
  const resetToDefault = () => {
    const defaultKeys = [
      "--primary",
      "--ring",
      "--accent",
      "--sidebar",
      "--sidebar-primary",
      "--sidebar-accent"
    ];
    for (const key of defaultKeys) {
      document.documentElement.style.removeProperty(key);
    }
    localStorage.removeItem("indyacentral-theme");
    setActiveId("indyacentral-vibrant");
    ue.success("Theme reset to default");
  };
  const applyCustomTheme = () => {
    const primary = `${customPrimary.l} ${customPrimary.c} ${customPrimary.h}`;
    const accent = `${customAccent.l} ${customAccent.c} ${customAccent.h}`;
    const sidebar = `${customSidebar.l} ${customSidebar.c} ${customSidebar.h}`;
    applyTheme(primary, accent, sidebar, "custom");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-label font-semibold text-foreground mb-3 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Palette, { size: 14, className: "text-primary" }),
        "Theme Templates"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3", children: THEME_TEMPLATES.map((t) => {
        const [pl, pc, ph] = t.primary.split(" ").map(Number);
        const [al, ac, ah] = t.accent.split(" ").map(Number);
        const [sl, sc, sh] = t.sidebar.split(" ").map(Number);
        const isActive = activeId === t.id;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `bg-card border rounded-xl p-4 transition-all ${isActive ? "border-primary ring-1 ring-primary" : "border-border hover:border-primary/50"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground", children: t.name }),
                isActive && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-[10px] font-label font-bold px-2 py-0.5 rounded-full",
                    style: {
                      background: "oklch(0.55 0.22 280 / 0.12)",
                      color: "oklch(0.45 0.18 280)"
                    },
                    children: "ACTIVE"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-8 h-8 rounded-lg border border-border/40 flex-shrink-0",
                    style: { background: `oklch(${pl} ${pc} ${ph})` },
                    title: "Primary"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-8 h-8 rounded-lg border border-border/40 flex-shrink-0",
                    style: { background: `oklch(${al} ${ac} ${ah})` },
                    title: "Accent"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-8 h-8 rounded-lg border border-border/40 flex-shrink-0",
                    style: { background: `oklch(${sl} ${sc} ${sh})` },
                    title: "Sidebar"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "flex-1 h-8 rounded-lg border border-border/40",
                    style: {
                      background: `linear-gradient(90deg, oklch(${pl} ${pc} ${ph}), oklch(${al} ${ac} ${ah}))`
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: isActive ? "secondary" : "default",
                  className: "w-full text-xs font-label",
                  onClick: () => applyTheme(t.primary, t.accent, t.sidebar, t.id),
                  disabled: isActive,
                  "data-ocid": `theme.${t.id}.button`,
                  children: isActive ? "Currently Active" : "Apply Theme"
                }
              )
            ]
          },
          t.id
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5 space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-label font-semibold text-foreground flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { size: 14, className: "text-primary" }),
        "Custom Theme Builder"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "h-10 rounded-xl border border-border/50",
          style: {
            background: `linear-gradient(135deg, oklch(${customPrimary.l} ${customPrimary.c} ${customPrimary.h}) 0%, oklch(${customAccent.l} ${customAccent.c} ${customAccent.h}) 50%, oklch(${customSidebar.l} ${customSidebar.c} ${customSidebar.h}) 100%)`
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-5 h-5 rounded-md border border-border/50 shrink-0",
                style: {
                  background: `oklch(${customPrimary.l} ${customPrimary.c} ${customPrimary.h})`
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-label font-semibold text-foreground", children: "Primary Color" })
          ] }),
          [
            {
              label: "L (Lightness)",
              key: "l",
              min: "0",
              max: "1",
              step: "0.01",
              val: customPrimary.l,
              set: (v) => setCustomPrimary((p) => ({ ...p, l: v }))
            },
            {
              label: "C (Chroma)",
              key: "c",
              min: "0",
              max: "0.4",
              step: "0.005",
              val: customPrimary.c,
              set: (v) => setCustomPrimary((p) => ({ ...p, c: v }))
            },
            {
              label: "H (Hue)",
              key: "h",
              min: "0",
              max: "360",
              step: "1",
              val: customPrimary.h,
              set: (v) => setCustomPrimary((p) => ({ ...p, h: v }))
            }
          ].map(({ label, min, max, step, val, set }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground", children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-mono text-foreground", children: val })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "range",
                min,
                max,
                step,
                value: val,
                onChange: (e) => set(e.target.value),
                className: "w-full accent-primary",
                "data-ocid": "theme.custom.input"
              }
            )
          ] }, label))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-5 h-5 rounded-md border border-border/50 shrink-0",
                style: {
                  background: `oklch(${customAccent.l} ${customAccent.c} ${customAccent.h})`
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-label font-semibold text-foreground", children: "Accent Color" })
          ] }),
          [
            {
              label: "L (Lightness)",
              min: "0",
              max: "1",
              step: "0.01",
              val: customAccent.l,
              set: (v) => setCustomAccent((p) => ({ ...p, l: v }))
            },
            {
              label: "C (Chroma)",
              min: "0",
              max: "0.4",
              step: "0.005",
              val: customAccent.c,
              set: (v) => setCustomAccent((p) => ({ ...p, c: v }))
            },
            {
              label: "H (Hue)",
              min: "0",
              max: "360",
              step: "1",
              val: customAccent.h,
              set: (v) => setCustomAccent((p) => ({ ...p, h: v }))
            }
          ].map(({ label, min, max, step, val, set }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground", children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-mono text-foreground", children: val })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "range",
                min,
                max,
                step,
                value: val,
                onChange: (e) => set(e.target.value),
                className: "w-full accent-primary",
                "data-ocid": "theme.custom.input"
              }
            )
          ] }, label))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-5 h-5 rounded-md border border-border/50 shrink-0",
                style: {
                  background: `oklch(${customSidebar.l} ${customSidebar.c} ${customSidebar.h})`
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-label font-semibold text-foreground", children: "Sidebar Color" })
          ] }),
          [
            {
              label: "L (Lightness)",
              min: "0",
              max: "1",
              step: "0.01",
              val: customSidebar.l,
              set: (v) => setCustomSidebar((p) => ({ ...p, l: v }))
            },
            {
              label: "C (Chroma)",
              min: "0",
              max: "0.4",
              step: "0.005",
              val: customSidebar.c,
              set: (v) => setCustomSidebar((p) => ({ ...p, c: v }))
            },
            {
              label: "H (Hue)",
              min: "0",
              max: "360",
              step: "1",
              val: customSidebar.h,
              set: (v) => setCustomSidebar((p) => ({ ...p, h: v }))
            }
          ].map(({ label, min, max, step, val, set }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground", children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-mono text-foreground", children: val })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "range",
                min,
                max,
                step,
                value: val,
                onChange: (e) => set(e.target.value),
                className: "w-full accent-primary",
                "data-ocid": "theme.custom.input"
              }
            )
          ] }, label))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            onClick: applyCustomTheme,
            className: "text-xs font-label gap-1.5",
            "data-ocid": "theme.custom.save_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Palette, { size: 13 }),
              "Save Custom Theme"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            onClick: resetToDefault,
            className: "text-xs font-label gap-1.5",
            "data-ocid": "theme.reset.button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { size: 13 }),
              "Reset to Default"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground bg-secondary/40 rounded-lg px-3 py-2", children: [
      "💡 ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tip:" }),
      " Theme changes apply instantly across the entire application and are saved to your browser. Share your custom theme by exporting the OKLCH values."
    ] })
  ] });
}
function AdminPanelPage() {
  const [complaintStatuses, setComplaintStatuses] = reactExports.useState({});
  const [blockedUsers, setBlockedUsers] = reactExports.useState(BLOCKED_USERS);
  const [apiSourcesEnabled, setApiSourcesEnabled] = reactExports.useState(Object.fromEntries(API_SOURCES.map((s) => [s.name, s.enabled])));
  const [changeStatuses, setChangeStatuses] = reactExports.useState(
    Object.fromEntries(EVOLUTION_CHANGES.map((c) => [c.title, c.status]))
  );
  const [clauseStatuses, setClauseStatuses] = reactExports.useState(
    Object.fromEntries(TC_CLAUSES.map((c) => [c.title, c.status]))
  );
  const [legalStatuses, setLegalStatuses] = reactExports.useState(
    Object.fromEntries(LEGAL_UPDATES.map((l) => [l.law, l.status]))
  );
  const [userRoles, setUserRoles] = reactExports.useState(
    Object.fromEntries(ALL_USERS.map((u) => [u.name, u.role]))
  );
  const [votes, setVotes] = reactExports.useState({});
  const [reviewLikes, setReviewLikes] = reactExports.useState(
    Object.fromEntries(
      REVIEWS.map((r, i) => [i, { likes: r.likes, dislikes: r.dislikes }])
    )
  );
  const getComplaintStatus = (id, defaultStatus) => complaintStatuses[id] ?? defaultStatus;
  const statusColor = (s) => {
    if ([
      "resolved",
      "good",
      "fixed",
      "accepted",
      "approved",
      "paid",
      "reviewed"
    ].includes(s))
      return "green";
    if (["reviewing", "warn", "pending"].includes(s)) return "amber";
    if (["escalated", "bad", "critical", "rejected"].includes(s)) return "red";
    if (["open"].includes(s)) return "blue";
    return "gray";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 lg:p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "w-10 h-10 rounded-xl flex items-center justify-center",
          style: { background: "oklch(0.55 0.22 280 / 0.15)" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 20, style: { color: "oklch(0.55 0.22 280)" } })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-bold text-foreground", children: "Admin Panel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Platform control center · 16 active agents · Super Admin" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "overview", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsList, { className: "mb-4 flex flex-wrap h-auto gap-1 p-1", children: [
        { value: "overview", label: "📊 Overview" },
        { value: "moderation", label: "🛡️ A1: Moderation" },
        { value: "performance", label: "⚡ A2: Performance" },
        { value: "api-sync", label: "🔄 A3: API Sync" },
        { value: "evolution", label: "🧬 A4: Evolution" },
        { value: "legal", label: "⚖️ A5: Legal" },
        { value: "agent6", label: "🔐 A6: Security" },
        { value: "agent7", label: "🖼️ A7: Images" },
        { value: "agent8", label: "🔍 A8: SEO" },
        { value: "agent9", label: "📤 A9: Sharing" },
        { value: "agent11", label: "🤖 A11: Fake Users" },
        { value: "agent12", label: "💬 A12: WhatsApp" },
        { value: "agent13", label: "💰 A13: Monetize" },
        { value: "agent14", label: "👁️ A14: Content" },
        { value: "agent15", label: "📈 A15: Analytics" },
        { value: "agent16", label: "💡 A16: Tips" },
        { value: "factory", label: "🏭 Agent Factory" },
        { value: "theme", label: "🎨 Theme" },
        { value: "data-requests", label: "📂 Data Requests" },
        { value: "modules", label: "📦 All Modules" },
        { value: "paysprint", label: "💳 PaySprint API" },
        { value: "agent17", label: "✈️ A17: Travel" },
        { value: "agent18", label: "💰 A18: Pricing" },
        { value: "agent19", label: "🎮 A19: Games" },
        { value: "agent20", label: "😂 A20: Comics" },
        { value: "agent21", label: "🕉️ A21: Spiritual" },
        { value: "social-queue", label: "📱 Social Queue" },
        { value: "promotions-queue", label: "📣 Promotions" },
        { value: "whatsapp-api", label: "📲 WhatsApp API" },
        { value: "rides-admin", label: "🚗 Rides Mgmt" }
      ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        TabsTrigger,
        {
          value: t.value,
          className: "text-xs font-label px-3 py-1.5",
          children: t.label
        },
        t.value
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "overview", className: "mt-0 space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
          {
            label: "Total Users",
            value: "1,247",
            icon: Users,
            color: "oklch(0.55 0.22 280)"
          },
          {
            label: "Active Complaints",
            value: "23",
            icon: TriangleAlert,
            color: "oklch(0.72 0.17 85)"
          },
          {
            label: "Blocked Users",
            value: "7",
            icon: CircleX,
            color: "oklch(0.55 0.22 25)"
          },
          {
            label: "Reviews",
            value: "156",
            icon: Star,
            color: "oklch(0.65 0.14 50)"
          },
          {
            label: "Synced Products",
            value: "89",
            icon: Package,
            color: "oklch(0.52 0.14 155)"
          },
          {
            label: "Pending Legal",
            value: "4",
            icon: ShieldCheck,
            color: "oklch(0.65 0.25 335)"
          },
          {
            label: "Total Modules",
            value: "14",
            icon: Database,
            color: "oklch(0.60 0.20 190)"
          },
          {
            label: "Active Agents",
            value: "16",
            icon: Zap,
            color: "oklch(0.55 0.22 280)"
          }
        ].map(({ label, value, icon: Icon, color }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card border border-border rounded-xl p-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-8 h-8 rounded-lg flex items-center justify-center",
                    style: { background: `${color}15` },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 15, style: { color } })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 12, className: "text-muted-foreground" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-display font-bold text-foreground", children: value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground font-label", children: label })
            ]
          },
          label
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-label font-semibold text-foreground mb-3", children: "Agent Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
            {
              name: "Agent 1 — Support & Moderation",
              lastRun: "5 min ago",
              freq: "Real-time"
            },
            {
              name: "Agent 2 — Performance Monitor",
              lastRun: "1 hour ago",
              freq: "Hourly"
            },
            {
              name: "Agent 3 — API Sync",
              lastRun: "6 hours ago",
              freq: "Daily"
            },
            {
              name: "Agent 4 — Evolution Engine",
              lastRun: "Mar 1, 2026",
              freq: "Quarterly"
            },
            {
              name: "Agent 5 — Legal Compliance",
              lastRun: "Feb 28, 2026",
              freq: "Weekly"
            },
            {
              name: "Agent 6 — Security Scanner",
              lastRun: "2 min ago",
              freq: "Real-time"
            },
            {
              name: "Agent 7 — Image Manager",
              lastRun: "3 hours ago",
              freq: "Daily"
            },
            {
              name: "Agent 8 — SEO Agent",
              lastRun: "12 hours ago",
              freq: "Daily"
            },
            {
              name: "Agent 9 — Social Sharing",
              lastRun: "10 min ago",
              freq: "Real-time"
            },
            {
              name: "Agent 10 — Co-worker (Floating)",
              lastRun: "Active",
              freq: "Real-time"
            },
            {
              name: "Agent 11 — Fake Users",
              lastRun: "1 hour ago",
              freq: "Daily"
            },
            {
              name: "Agent 12 — WhatsApp Updates",
              lastRun: "8 AM today",
              freq: "Daily"
            },
            {
              name: "Agent 13 — Monetization",
              lastRun: "Yesterday",
              freq: "Weekly"
            },
            {
              name: "Agent 14 — Content Moderation",
              lastRun: "15 min ago",
              freq: "Real-time"
            },
            {
              name: "Agent 15 — Analytics",
              lastRun: "1 hour ago",
              freq: "Hourly"
            },
            {
              name: "Agent 16 — Tips Manager",
              lastRun: "Active",
              freq: "Real-time"
            }
          ].map((agent) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center justify-between py-2 border-b border-border/50 last:border-0",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-[oklch(0.52_0.14_155)] animate-pulse" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label font-medium text-foreground", children: agent.name })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground", children: agent.lastRun }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SBadge, { label: agent.freq, color: "blue" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SBadge, { label: "Running", color: "green" })
                ] })
              ]
            },
            agent.name
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-label font-semibold text-foreground mb-3", children: "Recent Activity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: [
            {
              time: "09:14",
              agent: "Agent 1",
              action: "Blocked user ali.raza92 for spam — 7 days"
            },
            {
              time: "09:00",
              agent: "Agent 2",
              action: "Daily performance snapshot taken (hash: a3f9c1d2)"
            },
            {
              time: "08:45",
              agent: "Agent 3",
              action: "Synced 12 products from FakeStore API"
            },
            {
              time: "08:30",
              agent: "Agent 5",
              action: "New legal update detected: PECA Amendment 2025"
            },
            {
              time: "08:10",
              agent: "Agent 1",
              action: "Anonymous review removed from Khan Electronics"
            },
            {
              time: "07:55",
              agent: "Agent 2",
              action: "Self-healed: memory leak fixed in GeoMap component"
            },
            {
              time: "07:40",
              agent: "Agent 3",
              action: "Consent request sent to ali.r*** for occupation update"
            },
            {
              time: "07:20",
              agent: "Agent 4",
              action: "New suggestion added based on Jobs module activity patterns"
            },
            {
              time: "06:45",
              agent: "Agent 5",
              action: "T&C clause drafted for DSA compliance (EU)"
            },
            {
              time: "06:00",
              agent: "Agent 3",
              action: "API sync scheduled — 4 sources queued"
            }
          ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-start gap-2.5 py-1.5 border-b border-border/30 last:border-0",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-muted-foreground w-10 shrink-0 pt-0.5", children: item.time }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-[10px] font-label font-semibold px-1.5 py-0.5 rounded shrink-0",
                    style: {
                      background: "oklch(0.55 0.22 280 / 0.1)",
                      color: "oklch(0.55 0.22 280)"
                    },
                    children: item.agent
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground font-label", children: item.action })
              ]
            },
            item.time + item.agent
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "moderation", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "complaints", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "complaints", className: "text-xs", children: "Complaints" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "blocked", className: "text-xs", children: "Blocked Users" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "reviews", className: "text-xs", children: "Reviews" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "abuse", className: "text-xs", children: "Abuse Log" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "complaints", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "#ID" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Target" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Category" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Description" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Date" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: COMPLAINTS.map((c) => {
            const currentStatus = getComplaintStatus(
              c.id,
              c.status
            );
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "hover:bg-secondary/20 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px]", children: c.id }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-medium", children: c.target }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SBadge, { label: c.category, color: "amber" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-1 max-w-[200px] block", children: c.desc }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "flex items-center gap-1",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            SBadge,
                            {
                              label: currentStatus,
                              color: statusColor(currentStatus)
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            ChevronDown,
                            {
                              size: 10,
                              className: "text-muted-foreground"
                            }
                          )
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuContent, { className: "w-36", children: [
                      "open",
                      "reviewing",
                      "resolved",
                      "escalated"
                    ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      DropdownMenuItem,
                      {
                        className: "text-xs",
                        onClick: () => setComplaintStatuses((p) => ({
                          ...p,
                          [c.id]: s
                        })),
                        children: s
                      },
                      s
                    )) })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "text-muted-foreground", children: c.date })
                ]
              },
              c.id
            );
          }) })
        ] }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "blocked", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Username" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Reason" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Blocked Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Reactivation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Action" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: blockedUsers.map((u) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "hover:bg-secondary/20 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-mono text-[11px]", children: u.user }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: u.reason }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "text-muted-foreground", children: u.blockedDate }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SBadge,
                  {
                    label: u.reactivation,
                    color: u.reactivation === "Permanent" ? "red" : "amber"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ActionBtn,
                  {
                    label: "Unblock",
                    color: "green",
                    onClick: () => setBlockedUsers(
                      (prev) => prev.filter((x) => x.user !== u.user)
                    )
                  }
                ) })
              ]
            },
            u.user
          )) })
        ] }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "reviews", className: "mt-0 space-y-2", children: REVIEWS.map((r, i) => {
          const rv = reviewLikes[i] ?? {
            likes: r.likes,
            dislikes: r.dislikes
          };
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-xl p-3 flex gap-3 items-start",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label font-semibold text-foreground", children: r.entity }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-amber-500", children: [
                      "★".repeat(r.rating),
                      "☆".repeat(5 - r.rating)
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SBadge, { label: "Anonymous", color: "gray" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: r.text }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => setReviewLikes((p) => ({
                          ...p,
                          [i]: { ...rv, likes: rv.likes + 1 }
                        })),
                        className: "text-[11px] text-muted-foreground hover:text-foreground flex items-center gap-1",
                        children: [
                          "👍 ",
                          rv.likes
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => setReviewLikes((p) => ({
                          ...p,
                          [i]: { ...rv, dislikes: rv.dislikes + 1 }
                        })),
                        className: "text-[11px] text-muted-foreground hover:text-foreground flex items-center gap-1",
                        children: [
                          "👎 ",
                          rv.dislikes
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ActionBtn, { label: "Remove", color: "red" })
              ]
            },
            r.entity
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "abuse", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Timestamp" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Severity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Description" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Action Taken" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: ABUSE_LOGS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "hover:bg-secondary/20 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-mono text-[11px] text-muted-foreground whitespace-nowrap", children: l.time }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SBadge,
                  {
                    label: l.severity,
                    color: l.severity === "critical" ? "red" : l.severity === "high" ? "rose" : l.severity === "medium" ? "amber" : "gray"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-1 max-w-[220px] block", children: l.snippet }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "text-muted-foreground", children: l.action })
              ]
            },
            l.time
          )) })
        ] }) }) }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "performance", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "logs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "logs", className: "text-xs", children: "Logs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "snapshots", className: "text-xs", children: "Snapshots" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "healing", className: "text-xs", children: "Self-Healing" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: "text-xs gap-1.5",
              style: { background: "oklch(0.55 0.15 240)", color: "white" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { size: 13 }),
                " Take Snapshot Now"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "logs", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Timestamp" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Metric" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Value" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Status" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: PERF_LOGS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "hover:bg-secondary/20 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-mono text-[11px] text-muted-foreground whitespace-nowrap", children: l.time }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-medium", children: l.metric }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-mono text-[11px]", children: l.value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SBadge,
                  {
                    label: l.status,
                    color: statusColor(l.status)
                  }
                ) })
              ]
            },
            `${l.time}-${l.metric}`
          )) })
        ] }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "snapshots", className: "mt-0 space-y-2", children: SNAPSHOTS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card border border-border rounded-xl p-3 flex items-center gap-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-9 h-9 rounded-lg flex items-center justify-center shrink-0",
                  style: { background: "oklch(0.55 0.15 240 / 0.12)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Database,
                    {
                      size: 15,
                      style: { color: "oklch(0.55 0.15 240)" }
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-label font-semibold text-foreground", children: s.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground", children: [
                  s.time,
                  " · ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: s.hash })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ActionBtn, { label: "Restore", color: "amber" })
            ]
          },
          s.label
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "healing", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Issue" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Action Taken" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Before" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "After" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Status" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: HEALING_EVENTS.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "hover:bg-secondary/20 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-1 max-w-[180px] block", children: e.issue }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-1 max-w-[180px] block", children: e.action }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-mono text-[11px] text-muted-foreground", children: e.before }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TD,
                  {
                    className: "font-mono text-[11px]",
                    style: { color: "oklch(0.52 0.14 155)" },
                    children: e.after
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SBadge,
                  {
                    label: e.status,
                    color: statusColor(e.status)
                  }
                ) })
              ]
            },
            e.issue
          )) })
        ] }) }) }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "api-sync", className: "mt-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 p-5 bg-card border border-border rounded-xl space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-8 h-8 rounded-lg flex items-center justify-center text-lg",
                  style: { background: "oklch(0.55 0.22 280 / 0.1)" },
                  children: "🏨"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm", children: "Agoda API Integration" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Bring hotels & tours from Agoda into IndyaCentral" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: "Hotels & Tours" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Affiliate ID" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  className: "mt-1 h-8 text-xs",
                  placeholder: "e.g. AGO-12345678",
                  "data-ocid": "admin.agoda.affiliate_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "API Key" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  className: "mt-1 h-8 text-xs",
                  placeholder: "agoda_api_key_...",
                  "data-ocid": "admin.agoda.key_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Base URL" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  className: "mt-1 h-8 text-xs",
                  defaultValue: "https://affiliateapi7.agoda.com/api/v3"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Sync Frequency" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { defaultValue: "daily", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1 h-8 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "hourly", children: "Hourly" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "daily", children: "Daily" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "weekly", children: "Weekly" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs mb-2 block", children: "Supported Regions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: ["India", "Southeast Asia", "Global", "Middle East"].map(
              (r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "label",
                {
                  className: "flex items-center gap-1.5 text-xs cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "checkbox",
                        defaultChecked: r === "India",
                        className: "rounded"
                      }
                    ),
                    r
                  ]
                },
                r
              )
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                className: "h-8 text-xs gap-1",
                onClick: () => {
                  ue.success("Agoda sync started — fetching hotels...");
                  ue.success("Agoda: 247 hotels synced — 2 min ago", {
                    duration: 3e3
                  });
                },
                "data-ocid": "admin.agoda.sync_button",
                children: "🔄 Sync Now"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "h-8 text-xs",
                onClick: () => ue.success("Agoda API connected successfully!"),
                "data-ocid": "admin.agoda.test_button",
                children: "Test Connection"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "products", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "products", className: "text-xs", children: "Products" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "consent", className: "text-xs", children: "Consent Requests" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "config", className: "text-xs", children: "Config" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "products", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3", children: SYNCED_PRODUCTS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-xl p-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-secondary/60 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ShoppingBag,
                    {
                      size: 14,
                      className: "text-muted-foreground"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SBadge, { label: "API Synced", color: "green" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-label font-semibold text-foreground line-clamp-2 mb-1", children: p.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mb-0.5", children: p.source }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-xs font-label font-bold",
                      style: { color: "oklch(0.52 0.14 155)" },
                      children: p.price
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: p.synced })
                ] })
              ]
            },
            p.name
          )) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "consent", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "User" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Field" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Old Value" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "New Value" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Status" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: CONSENT_REQUESTS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "hover:bg-secondary/20 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-mono text-[11px]", children: c.user }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-medium", children: c.field }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "text-muted-foreground", children: c.oldVal }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { style: { color: "oklch(0.52 0.14 155)" }, children: c.newVal }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SBadge,
                    {
                      label: c.status,
                      color: statusColor(c.status)
                    }
                  ) })
                ]
              },
              c.user + c.field
            )) })
          ] }) }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "config", className: "mt-0 space-y-3", children: API_SOURCES.map((src) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-xl p-4 flex items-center gap-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-9 h-9 rounded-lg flex items-center justify-center shrink-0",
                    style: { background: "oklch(0.52 0.14 155 / 0.12)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      RefreshCw,
                      {
                        size: 15,
                        style: { color: "oklch(0.52 0.14 155)" }
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground", children: src.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground", children: [
                    src.url,
                    " · Last run: ",
                    src.lastRun
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Switch,
                    {
                      checked: apiSourcesEnabled[src.name] ?? src.enabled,
                      onCheckedChange: (v) => setApiSourcesEnabled((p) => ({ ...p, [src.name]: v }))
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ActionBtn, { label: "Run Now", color: "green" })
                ] })
              ]
            },
            src.name
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Open & Affiliate APIs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AddNewApiDialog, {})
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: [
            {
              name: "OpenFoodFacts",
              type: "Products",
              lastSynced: "5 min ago",
              records: 1247,
              icon: "🥗"
            },
            {
              name: "FakeStore API",
              type: "Products",
              lastSynced: "12 min ago",
              records: 200,
              icon: "🛍️"
            },
            {
              name: "Open Library",
              type: "Books",
              lastSynced: "1 hour ago",
              records: 3840,
              icon: "📚"
            }
          ].map((api, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(OpenApiCard, { api, index: i + 1 }, api.name)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "evolution", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "changes", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "changes", className: "text-xs", children: "Q1 2026 Changes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "polls", className: "text-xs", children: "Polls & Surveys" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "suggestions", className: "text-xs", children: "Suggestions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "history", className: "text-xs", children: "Version History" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsContent,
          {
            value: "changes",
            className: "mt-0 grid grid-cols-1 md:grid-cols-2 gap-3",
            children: EVOLUTION_CHANGES.map((c) => {
              const cs = changeStatuses[c.title] ?? c.status;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "bg-card border border-border rounded-xl p-4",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SBadge, { label: c.category, color: "violet" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SBadge, { label: cs, color: statusColor(cs) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground mb-1", children: c.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mb-3", children: c.desc }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-[11px] text-muted-foreground", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          "👍 ",
                          c.likes
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                          "👎 ",
                          c.dislikes
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          ActionBtn,
                          {
                            label: "Approve",
                            color: "green",
                            onClick: () => setChangeStatuses((p) => ({
                              ...p,
                              [c.title]: "approved"
                            }))
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          ActionBtn,
                          {
                            label: "Reject",
                            color: "red",
                            onClick: () => setChangeStatuses((p) => ({
                              ...p,
                              [c.title]: "rejected"
                            }))
                          }
                        )
                      ] })
                    ] })
                  ]
                },
                c.title
              );
            })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "polls", className: "mt-0 space-y-4", children: POLLS.map((poll, pi) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card border border-border rounded-xl p-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground mb-3", children: poll.question }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: poll.options.map((opt, oi) => {
                const pct = Math.round(opt.votes / poll.total * 100);
                const vKey = `${pi}-${oi}`;
                const voted = votes[vKey];
                return (
                  // biome-ignore lint/suspicious/noArrayIndexKey: static poll options
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label text-foreground", children: opt.label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-muted-foreground", children: [
                          pct,
                          "%"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => !voted && setVotes((p) => ({ ...p, [vKey]: 1 })),
                            className: `text-[10px] font-label font-medium px-2 py-0.5 rounded border transition-colors ${voted ? "opacity-50 cursor-not-allowed border-border text-muted-foreground" : "border-border hover:bg-secondary/60 text-foreground"}`,
                            children: "Vote"
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-secondary overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "h-full rounded-full transition-all duration-500",
                        style: {
                          width: `${pct}%`,
                          background: "oklch(0.55 0.22 280)"
                        }
                      }
                    ) })
                  ] }, oi)
                );
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground mt-2", children: [
                poll.total,
                " total votes"
              ] })
            ]
          },
          pi
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "suggestions", className: "mt-0 space-y-3", children: SUGGESTIONS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card border border-border rounded-xl p-4 flex gap-3 items-start",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                  style: { background: "oklch(0.55 0.22 280 / 0.12)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Activity,
                    {
                      size: 14,
                      style: { color: "oklch(0.55 0.22 280)" }
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5 mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SBadge, { label: s.category, color: "violet" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-label text-foreground", children: s.insight })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ActionBtn, { label: "Apply", color: "green" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ActionBtn, { label: "Dismiss", color: "red" })
              ] })
            ]
          },
          s.insight
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "history", className: "mt-0 space-y-3", children: VERSION_HISTORY.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card border border-border rounded-xl p-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-label font-bold text-foreground", children: v.quarter }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ActionBtn, { label: "View Details" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ActionBtn, { label: "Restore", color: "amber" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: v.changes.map((ch) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-center gap-2 text-xs font-label text-muted-foreground",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CircleCheck,
                      {
                        size: 12,
                        style: { color: "oklch(0.52 0.14 155)" },
                        className: "shrink-0"
                      }
                    ),
                    ch
                  ]
                },
                ch
              )) })
            ]
          },
          v.quarter
        )) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "legal", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "updates", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "updates", className: "text-xs", children: "Legal Updates" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "clauses", className: "text-xs", children: "T&C Clauses" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "coverage", className: "text-xs", children: "Coverage" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "audit", className: "text-xs", children: "Audit Log" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "updates", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Country" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Law" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Module" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Summary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Action" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: LEGAL_UPDATES.map((l) => {
            const ls = legalStatuses[l.law] ?? l.status;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "hover:bg-secondary/20 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "text-base", children: l.country }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-medium whitespace-nowrap", children: l.law }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SBadge, { label: l.module, color: "rose" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-1 max-w-[200px] block text-muted-foreground", children: l.summary }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "text-muted-foreground whitespace-nowrap", children: l.date }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SBadge, { label: ls, color: statusColor(ls) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ActionBtn,
                    {
                      label: "Mark Reviewed",
                      color: "green",
                      onClick: () => setLegalStatuses((p) => ({
                        ...p,
                        [l.law]: "reviewed"
                      }))
                    }
                  ) })
                ]
              },
              l.law
            );
          }) })
        ] }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "clauses", className: "mt-0 space-y-3", children: TC_CLAUSES.map((c) => {
          const cs = clauseStatuses[c.title] ?? c.status;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-xl p-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground", children: c.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SBadge, { label: c.country, color: "rose" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SBadge, { label: c.module, color: "gray" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SBadge, { label: cs, color: statusColor(cs) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2 mb-3", children: c.content }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ActionBtn,
                    {
                      label: "Approve → Agent 4",
                      color: "green",
                      onClick: () => setClauseStatuses((p) => ({
                        ...p,
                        [c.title]: "approved"
                      }))
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ActionBtn,
                    {
                      label: "Reject",
                      color: "red",
                      onClick: () => setClauseStatuses((p) => ({
                        ...p,
                        [c.title]: "rejected"
                      }))
                    }
                  )
                ] })
              ]
            },
            c.title
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "coverage", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Country" }),
              COVERAGE_MODULES.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: m }, m))
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: COVERAGE_COUNTRIES.map((country) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "hover:bg-secondary/20 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-label font-medium whitespace-nowrap", children: country }),
                  COVERAGE_MODULES.map((m) => {
                    var _a;
                    return /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "text-center text-base", children: ((_a = COVERAGE_DATA[country]) == null ? void 0 : _a[m]) ?? "❌" }, m);
                  })
                ]
              },
              country
            )) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border-t border-border flex items-center gap-4 text-[11px] text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "✅ Compliant" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "⚠️ Review needed" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "❌ Not covered" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "audit", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Timestamp" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Admin" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Action" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Clause" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: AUDIT_LOGS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "hover:bg-secondary/20 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-mono text-[11px] text-muted-foreground whitespace-nowrap", children: l.time }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-mono text-[11px]", children: l.admin }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SBadge,
                  {
                    label: l.action,
                    color: l.action === "Approved" ? "green" : l.action === "Rejected" ? "red" : "amber"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "text-muted-foreground", children: l.clause })
              ]
            },
            l.time + l.clause
          )) })
        ] }) }) }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "agent6", className: "mt-0 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
          {
            label: "Threats Today",
            value: "12",
            color: "oklch(0.55 0.22 25)",
            icon: Shield
          },
          {
            label: "SQL Injections",
            value: "3",
            color: "oklch(0.65 0.25 335)",
            icon: Database
          },
          {
            label: "XSS Attempts",
            value: "5",
            color: "oklch(0.72 0.17 85)",
            icon: TriangleAlert
          },
          {
            label: "Auto-Blocked",
            value: "2",
            color: "oklch(0.52 0.14 155)",
            icon: UserX
          }
        ].map(({ label, value, color, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card border border-border rounded-xl p-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-8 h-8 rounded-lg flex items-center justify-center mb-2",
                  style: { background: `${color}15` },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 15, style: { color } })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-display font-bold text-foreground", children: value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground font-label", children: label })
            ]
          },
          label
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 border-b border-border flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-label font-semibold text-foreground", children: "Threat Log" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SBadge, { label: "Real-time", color: "green" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Time" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "User" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Severity" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Snippet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Action" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [
              {
                time: "09:14",
                user: "ali.raza92",
                type: "SQL Injection",
                sev: "critical",
                snippet: "' OR 1=1--",
                action: "Blocked + alerted Agent 1"
              },
              {
                time: "09:08",
                user: "anon_777",
                type: "XSS",
                sev: "high",
                snippet: "<script>alert(1)<\/script>",
                action: "Input sanitized + logged"
              },
              {
                time: "08:52",
                user: "imran.k***",
                type: "Brute Force",
                sev: "high",
                snippet: "350 login attempts in 5 min",
                action: "IP rate-limited 24h"
              },
              {
                time: "08:41",
                user: "zahra.m***",
                type: "SQL Injection",
                sev: "medium",
                snippet: "UNION SELECT * FROM users",
                action: "Input blocked + warned"
              },
              {
                time: "08:35",
                user: "test_user1",
                type: "XSS",
                sev: "medium",
                snippet: "onerror=alert(document.cookie)",
                action: "Sanitized + flagged"
              },
              {
                time: "08:20",
                user: "bot_423a",
                type: "Suspicious Payload",
                sev: "low",
                snippet: "Unusual form encoding detected",
                action: "Logged for review"
              },
              {
                time: "07:55",
                user: "sara.a***",
                type: "Phishing",
                sev: "critical",
                snippet: "Affiliate link → phishing domain",
                action: "Link removed + account blocked"
              },
              {
                time: "07:40",
                user: "nida.h***",
                type: "XSS",
                sev: "low",
                snippet: "javascript: in URL parameter",
                action: "URL stripped + logged"
              },
              {
                time: "07:22",
                user: "usman.f***",
                type: "SQL Injection",
                sev: "medium",
                snippet: "'; DROP TABLE users;--",
                action: "Blocked + warned"
              },
              {
                time: "07:10",
                user: "anon_002",
                type: "Brute Force",
                sev: "high",
                snippet: "120 API requests in 60 sec",
                action: "Throttled to 10/min"
              }
            ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "hover:bg-secondary/20 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-mono text-[11px] whitespace-nowrap", children: t.time }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-mono text-[11px]", children: t.user }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SBadge,
                    {
                      label: t.type,
                      color: t.type === "SQL Injection" ? "red" : t.type === "XSS" ? "rose" : t.type === "Phishing" ? "red" : "amber"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SBadge,
                    {
                      label: t.sev,
                      color: t.sev === "critical" ? "red" : t.sev === "high" ? "rose" : t.sev === "medium" ? "amber" : "gray"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-muted-foreground line-clamp-1 max-w-[150px] block", children: t.snippet }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "text-[11px] text-muted-foreground", children: t.action })
                ]
              },
              t.time + t.user
            )) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-label font-semibold text-foreground", children: "Auto-block Rules" }),
          [
            {
              label: "Auto-block on 3+ SQL injection attempts",
              enabled: true
            },
            { label: "Auto-block on XSS detection", enabled: true },
            { label: "Quarantine suspicious file uploads", enabled: true },
            {
              label: "Throttle IPs with brute force patterns",
              enabled: true
            },
            { label: "Alert Agent 1 on critical threats", enabled: true }
          ].map((rule) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center justify-between py-1.5 border-b border-border/30 last:border-0",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label text-foreground", children: rule.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { defaultChecked: rule.enabled })
              ]
            },
            rule.label
          ))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground bg-secondary/40 rounded-lg px-3 py-2", children: [
          "🔗 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Agent Network:" }),
          " Feeds threat data to Agent 1 (Moderation) for user blocking. Critical threats escalate to Agent 14 (Content Moderation)."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "agent7", className: "mt-0 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Agent7ImageManager, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "agent8", className: "mt-0 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Agent8SEO, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "agent9", className: "mt-0 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Agent9Sharing, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "agent11", className: "mt-0 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Agent11FakeUsers, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "agent12", className: "mt-0 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Agent12WhatsApp, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "agent13", className: "mt-0 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Agent13Monetize, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "agent14", className: "mt-0 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Agent14Content, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "agent15", className: "mt-0 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Agent15Analytics, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "agent16", className: "mt-0 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Agent16Tips, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "factory", className: "mt-0 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AgentFactory, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "theme", className: "mt-0 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeTemplateManager, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "data-requests", className: "mt-0 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 border-b border-border flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-label font-semibold text-foreground flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { size: 14, className: "text-primary" }),
            "Data Export & Deletion Requests"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SBadge, { label: "5 Pending", color: "amber" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "User" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Requested" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [
            {
              user: "Ahmed Khan",
              type: "Export",
              date: "Mar 2, 2026",
              status: "Pending"
            },
            {
              user: "Fatima Hassan",
              type: "Deletion",
              date: "Mar 1, 2026",
              status: "Processing"
            },
            {
              user: "Bilal Chaudhry",
              type: "Export",
              date: "Feb 28, 2026",
              status: "Completed"
            },
            {
              user: "Sana Malik",
              type: "Deletion",
              date: "Feb 27, 2026",
              status: "Pending"
            },
            {
              user: "Omar Farooq",
              type: "Export",
              date: "Feb 25, 2026",
              status: "Pending"
            }
          ].map((req) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "hover:bg-secondary/20 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-medium", children: req.user }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SBadge,
                  {
                    label: req.type,
                    color: req.type === "Export" ? "blue" : "red"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: req.date }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SBadge,
                  {
                    label: req.status,
                    color: req.status === "Completed" ? "green" : req.status === "Processing" ? "amber" : "gray"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ActionBtn,
                    {
                      label: "Process",
                      color: "amber",
                      onClick: () => ue.success(
                        `Processing ${req.type} request for ${req.user}`
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ActionBtn,
                    {
                      label: "Complete",
                      color: "green",
                      onClick: () => ue.success(
                        `${req.type} request completed for ${req.user}`
                      )
                    }
                  )
                ] }) })
              ]
            },
            req.user
          )) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "modules", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "users", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsList, { className: "mb-4 flex flex-wrap h-auto gap-0.5 p-1", children: [
          "users",
          "products",
          "jobs",
          "healthcare",
          "real-estate",
          "education",
          "community",
          "blog"
        ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: t,
            className: "text-xs capitalize px-3 py-1.5",
            children: t.replace("-", " ")
          },
          t
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "users", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Role" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Joined" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: ALL_USERS.map((u) => {
            const role = userRoles[u.name] ?? u.role;
            const isSuperAdmin = u.name === "Ahmed Khan";
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "hover:bg-secondary/20 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-medium", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                    u.name,
                    isSuperAdmin && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: "flex items-center gap-0.5 text-[9px] font-label font-bold px-1.5 py-0.5 rounded-full",
                        style: {
                          background: "oklch(0.55 0.22 280 / 0.12)",
                          color: "oklch(0.45 0.18 280)"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { size: 9 }),
                          " Super Admin"
                        ]
                      }
                    )
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SBadge,
                    {
                      label: isSuperAdmin ? "admin" : role,
                      color: isSuperAdmin ? "violet" : role === "user" ? "blue" : "gray"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SBadge,
                    {
                      label: u.status,
                      color: u.status === "active" ? "green" : "red"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "text-muted-foreground", children: u.joined }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", children: isSuperAdmin ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground italic px-2 py-1", children: "Read-only" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          type: "button",
                          className: "flex items-center gap-1 text-[11px] font-label font-medium px-2 py-1 rounded border border-border hover:bg-secondary/60 text-muted-foreground",
                          children: [
                            "Role ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 10 })
                          ]
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuContent, { className: "w-28", children: ["user", "guest"].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        DropdownMenuItem,
                        {
                          className: "text-xs",
                          onClick: () => {
                            setUserRoles((p) => ({
                              ...p,
                              [u.name]: r
                            }));
                            ue.success(
                              "Role updated (demo mode)"
                            );
                          },
                          children: r
                        },
                        r
                      )) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ActionBtn, { label: "Block", color: "red" })
                  ] }) }) })
                ]
              },
              u.name
            );
          }) })
        ] }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "products", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Product" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Category" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Variants" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [
            {
              name: "Bridal Lehenga Collection",
              cat: "Fashion",
              price: "INR 45,000",
              variants: 6,
              status: "active"
            },
            {
              name: "Honda Civic 2024 Rental",
              cat: "Vehicle",
              price: "INR 8,000/day",
              variants: 2,
              status: "active"
            },
            {
              name: "Organic Honey 500g",
              cat: "Food",
              price: "INR 1,200",
              variants: 3,
              status: "active"
            },
            {
              name: "iPhone 15 Pro Case",
              cat: "Accessories",
              price: "INR 2,500",
              variants: 8,
              status: "inactive"
            },
            {
              name: "Premium Lawn Suit 3-pc",
              cat: "Fashion",
              price: "INR 6,500",
              variants: 5,
              status: "active"
            },
            {
              name: 'Samsung 55" QLED TV',
              cat: "Electronics",
              price: "INR 185,000",
              variants: 1,
              status: "active"
            },
            {
              name: "Handmade Leather Wallet",
              cat: "Accessories",
              price: "INR 3,200",
              variants: 4,
              status: "active"
            },
            {
              name: "Basmati Rice 25kg Bag",
              cat: "Grocery",
              price: "INR 5,500",
              variants: 2,
              status: "inactive"
            }
          ].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "hover:bg-secondary/20 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-medium", children: p.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SBadge, { label: p.cat, color: "amber" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TD,
                  {
                    style: { color: "oklch(0.52 0.14 155)" },
                    className: "font-mono text-[11px]",
                    children: p.price
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "text-muted-foreground text-center", children: p.variants }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SBadge,
                  {
                    label: p.status,
                    color: p.status === "active" ? "green" : "gray"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ModuleActions, {})
              ]
            },
            p.name
          )) })
        ] }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "jobs", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Company" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Applications" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [
            {
              title: "Senior React Developer",
              company: "TechPK",
              type: "Full Time",
              apps: 24,
              status: "active"
            },
            {
              title: "Delivery Rider — QuickEats",
              company: "QuickEats",
              type: "Delivery",
              apps: 47,
              status: "active"
            },
            {
              title: "Math Tutor (Freelance)",
              company: "Self",
              type: "Freelance",
              apps: 8,
              status: "active"
            },
            {
              title: "Security Guard (Night)",
              company: "Green Valley",
              type: "Part Time",
              apps: 15,
              status: "active"
            },
            {
              title: "Marketing Manager",
              company: "Al-Noor Foods",
              type: "Full Time",
              apps: 31,
              status: "closed"
            },
            {
              title: "Dental Assistant",
              company: "City Clinic",
              type: "Full Time",
              apps: 12,
              status: "active"
            },
            {
              title: "School Principal",
              company: "Beacon House",
              type: "Full Time",
              apps: 19,
              status: "active"
            },
            {
              title: "Online ESL Teacher",
              company: "Self",
              type: "Freelance",
              apps: 6,
              status: "closed"
            }
          ].map((j) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "hover:bg-secondary/20 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-medium", children: j.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "text-muted-foreground", children: j.company }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SBadge, { label: j.type, color: "blue" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "text-center", children: j.apps }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SBadge,
                  {
                    label: j.status,
                    color: j.status === "active" ? "green" : "gray"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ModuleActions, {})
              ]
            },
            j.title
          )) })
        ] }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "healthcare", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Doctor / Clinic" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Specialty" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Patients" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Rating" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [
            {
              name: "Dr. Hassan Malik",
              spec: "Cardiologist",
              patients: 142,
              rating: "4.9",
              status: "active"
            },
            {
              name: "City Dental Clinic",
              spec: "Dentistry",
              patients: 89,
              rating: "4.7",
              status: "active"
            },
            {
              name: "Dr. Ayesha Raza",
              spec: "Gynecologist",
              patients: 201,
              rating: "4.8",
              status: "active"
            },
            {
              name: "Al-Shifa Hospital",
              spec: "General",
              patients: 520,
              rating: "4.5",
              status: "active"
            },
            {
              name: "Dr. Farhan Ali",
              spec: "Neurologist",
              patients: 67,
              rating: "4.6",
              status: "inactive"
            },
            {
              name: "Life Care Pharmacy",
              spec: "Pharmacy",
              patients: 0,
              rating: "4.3",
              status: "active"
            },
            {
              name: "Dr. Sana Tariq",
              spec: "Dermatologist",
              patients: 113,
              rating: "4.9",
              status: "active"
            },
            {
              name: "Rehman Medical Center",
              spec: "Multi-specialty",
              patients: 340,
              rating: "4.4",
              status: "active"
            }
          ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "hover:bg-secondary/20 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-medium", children: h.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SBadge, { label: h.spec, color: "rose" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "text-center", children: h.patients }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  TD,
                  {
                    className: "text-center",
                    style: { color: "oklch(0.65 0.14 50)" },
                    children: [
                      "★ ",
                      h.rating
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SBadge,
                  {
                    label: h.status,
                    color: h.status === "active" ? "green" : "gray"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ModuleActions, {})
              ]
            },
            h.name
          )) })
        ] }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "real-estate", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Property" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Location" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [
            {
              name: "DHA Phase 6 House 5 Marla",
              type: "Sale",
              location: "Lahore",
              price: "PKR 2.8Cr",
              status: "active"
            },
            {
              name: "Gulberg Commercial Plot 4 Marla",
              type: "Sale",
              location: "Lahore",
              price: "PKR 1.5Cr",
              status: "active"
            },
            {
              name: "Bahria Town Apartment 2BR",
              type: "Rent",
              location: "Karachi",
              price: "PKR 65K/mo",
              status: "rented"
            },
            {
              name: "Garden Town Upper Portion",
              type: "Rent",
              location: "Lahore",
              price: "PKR 45K/mo",
              status: "active"
            },
            {
              name: "F-10 Islamabad Flat 3BR",
              type: "Sale",
              location: "Islamabad",
              price: "PKR 3.2Cr",
              status: "active"
            },
            {
              name: "Blue Area Office Space",
              type: "Rent",
              location: "Islamabad",
              price: "PKR 120K/mo",
              status: "active"
            },
            {
              name: "Model Town Residential Plot",
              type: "Sale",
              location: "Lahore",
              price: "PKR 1.8Cr",
              status: "pending"
            },
            {
              name: "Defence Karachi Penthouse",
              type: "Rent",
              location: "Karachi",
              price: "PKR 180K/mo",
              status: "active"
            }
          ].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "hover:bg-secondary/20 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-medium max-w-[160px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-1 block", children: p.name }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SBadge,
                  {
                    label: p.type,
                    color: p.type === "Sale" ? "blue" : "amber"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "text-muted-foreground", children: p.location }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TD,
                  {
                    style: { color: "oklch(0.52 0.14 155)" },
                    className: "font-mono text-[11px]",
                    children: p.price
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SBadge,
                  {
                    label: p.status,
                    color: p.status === "active" ? "green" : p.status === "rented" ? "violet" : "amber"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ModuleActions, {})
              ]
            },
            p.name
          )) })
        ] }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "education", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "School / Institution" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Students" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Teachers" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Branches" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [
            {
              name: "Beacon House School System",
              students: 2840,
              teachers: 182,
              branches: 12,
              status: "active"
            },
            {
              name: "City Grammar School",
              students: 1200,
              teachers: 84,
              branches: 4,
              status: "active"
            },
            {
              name: "Knowledge Academy",
              students: 680,
              teachers: 45,
              branches: 2,
              status: "active"
            },
            {
              name: "Lahore Grammar School",
              students: 3100,
              teachers: 210,
              branches: 8,
              status: "active"
            },
            {
              name: "The Educators",
              students: 890,
              teachers: 62,
              branches: 3,
              status: "active"
            },
            {
              name: "Oxford School Pakistan",
              students: 1540,
              teachers: 98,
              branches: 6,
              status: "active"
            },
            {
              name: "Future Stars Academy",
              students: 420,
              teachers: 28,
              branches: 1,
              status: "pending"
            },
            {
              name: "Al-Huda Institute",
              students: 310,
              teachers: 24,
              branches: 2,
              status: "inactive"
            }
          ].map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "hover:bg-secondary/20 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-medium", children: e.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "text-center", children: e.students.toLocaleString() }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "text-center", children: e.teachers }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "text-center", children: e.branches }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SBadge,
                  {
                    label: e.status,
                    color: e.status === "active" ? "green" : e.status === "pending" ? "amber" : "gray"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ModuleActions, {})
              ]
            },
            e.name
          )) })
        ] }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "community", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Community" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Members" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Admin" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Location" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [
            {
              name: "DHA Phase 5 Residents",
              members: 420,
              admin: "Khaled Rana",
              location: "Lahore",
              status: "active"
            },
            {
              name: "Bahria Town Block A",
              members: 312,
              admin: "Saad Mirza",
              location: "Lahore",
              status: "active"
            },
            {
              name: "Green Valley Society",
              members: 198,
              admin: "Hina Baig",
              location: "Islamabad",
              status: "active"
            },
            {
              name: "Model Town East",
              members: 284,
              admin: "Arif Shah",
              location: "Lahore",
              status: "active"
            },
            {
              name: "Clifton Block 5",
              members: 156,
              admin: "Rehana Qazi",
              location: "Karachi",
              status: "active"
            },
            {
              name: "F-7 Islamabad Sector",
              members: 241,
              admin: "Tariq Mehmood",
              location: "Islamabad",
              status: "active"
            },
            {
              name: "Garden Town Coop",
              members: 89,
              admin: "Uzma Sheikh",
              location: "Lahore",
              status: "pending"
            },
            {
              name: "North Nazimabad Block L",
              members: 134,
              admin: "Naveed Ali",
              location: "Karachi",
              status: "active"
            }
          ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "hover:bg-secondary/20 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-medium", children: c.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "text-center", children: c.members }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "text-muted-foreground", children: c.admin }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 11 }),
                  c.location
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SBadge,
                  {
                    label: c.status,
                    color: c.status === "active" ? "green" : "amber"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ModuleActions, {})
              ]
            },
            c.name
          )) })
        ] }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "blog", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Author" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Views" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Affiliate Links" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [
            {
              title: "DJI Mini 4 Pro Full Review 2026",
              author: "Ali Raza",
              views: 4120,
              links: 3,
              status: "published"
            },
            {
              title: "7-Day Hunza Valley Travel Guide",
              author: "Zara Hassan",
              views: 2870,
              links: 5,
              status: "published"
            },
            {
              title: "Top 10 Lahore Properties Under 2Cr",
              author: "Omar Khan",
              views: 1840,
              links: 2,
              status: "published"
            },
            {
              title: "How to Make the Perfect Biryani",
              author: "Fatima Malik",
              views: 6200,
              links: 1,
              status: "published"
            },
            {
              title: "Freelancing in Pakistan: 2026 Guide",
              author: "Hassan Ali",
              views: 3150,
              links: 4,
              status: "published"
            },
            {
              title: "Best Private Schools in Lahore",
              author: "Nida Raza",
              views: 2200,
              links: 2,
              status: "pending"
            },
            {
              title: "Skin Care Routine for Dry Climate",
              author: "Sara Ahmed",
              views: 1890,
              links: 6,
              status: "published"
            },
            {
              title: "Pakistan Stock Market Beginners Guide",
              author: "Bilal Hussain",
              views: 980,
              links: 0,
              status: "draft"
            }
          ].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "hover:bg-secondary/20 transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-medium max-w-[180px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-1 block", children: b.title }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "text-muted-foreground", children: b.author }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "text-center", children: b.views.toLocaleString() }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "text-center", children: b.links }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SBadge,
                  {
                    label: b.status,
                    color: b.status === "published" ? "green" : b.status === "pending" ? "amber" : "gray"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ModuleActions, {})
              ]
            },
            b.title
          )) })
        ] }) }) }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "paysprint", className: "mt-0 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-10 h-10 rounded-xl flex items-center justify-center text-xl",
              style: { background: "oklch(0.55 0.22 280 / 0.1)" },
              children: "💳"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-base", children: "PaySprint API Configuration" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Configure PaySprint for mobile recharge and bus booking" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-card border border-border rounded-xl space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm flex items-center gap-2", children: "📱 Mobile Recharge API" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Mode:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "text-xs border border-border rounded px-2 py-1 bg-background", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "test", children: "Test" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "live", children: "Live" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "API Key" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  className: "mt-1 h-8 text-xs",
                  placeholder: "PS_RECHARGE_API_KEY_...",
                  "data-ocid": "admin.paysprint.recharge_key_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Merchant ID" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  className: "mt-1 h-8 text-xs",
                  placeholder: "MERCHANT_001"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Base URL" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  className: "mt-1 h-8 text-xs",
                  defaultValue: "https://api.paysprint.in/api/v1"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Callback URL" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  className: "mt-1 h-8 text-xs",
                  placeholder: "https://yourdomain.com/callback/recharge"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs mb-2 block", children: "Operator Codes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-secondary/50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2", children: "Operator" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2", children: "Code" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [
                  ["Airtel", "AT"],
                  ["Jio", "JIO"],
                  ["Vi (Vodafone)", "VI"],
                  ["BSNL", "BSN"],
                  ["Idea", "IDEA"]
                ].map(([op, code]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5", children: op }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      className: "h-6 text-xs p-1 w-16",
                      defaultValue: code
                    }
                  ) })
                ] }, op)) })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs mb-2 block", children: "Circle Codes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-secondary/50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2", children: "Circle" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2", children: "Code" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [
                  ["Delhi", "DL"],
                  ["Mumbai", "MH"],
                  ["Karnataka", "KA"],
                  ["UP", "UP"],
                  ["Maharashtra", "MH2"]
                ].map(([circle, code]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5", children: circle }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      className: "h-6 text-xs p-1 w-16",
                      defaultValue: code
                    }
                  ) })
                ] }, circle)) })
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              className: "h-8 text-xs",
              onClick: () => ue.success("PaySprint Recharge API connected!"),
              "data-ocid": "admin.paysprint.recharge_test_button",
              children: "Test Connection"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-card border border-border rounded-xl space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm flex items-center gap-2", children: "🚌 Bus Booking API" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Mode:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "text-xs border border-border rounded px-2 py-1 bg-background", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "test", children: "Test" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "live", children: "Live" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "API Key" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  className: "mt-1 h-8 text-xs",
                  placeholder: "PS_BUS_API_KEY_...",
                  "data-ocid": "admin.paysprint.bus_key_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Base URL" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  className: "mt-1 h-8 text-xs",
                  defaultValue: "https://api.paysprint.in/api/v1/bus"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Commission %" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  className: "mt-1 h-8 text-xs",
                  type: "number",
                  defaultValue: "2.5"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs mb-2 block", children: "Source / Destination Codes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-secondary/50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2", children: "City" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2", children: "Code" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-2 py-2" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [
                  ["Mumbai", "MUM"],
                  ["Delhi", "DEL"],
                  ["Bangalore", "BLR"],
                  ["Chennai", "CHE"],
                  ["Hyderabad", "HYD"]
                ].map(([city, code]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5", children: city }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      className: "h-6 text-xs p-1 w-16",
                      defaultValue: code
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-2 py-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      className: "text-destructive text-xs hover:underline",
                      children: "✕"
                    }
                  ) })
                ] }, city)) })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "mt-2 h-7 text-xs",
                  onClick: () => ue.info("Add new city row"),
                  children: "+ Add City"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs mb-2 block", children: "Seat Layout Config" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs w-16", children: "Rows" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      className: "h-7 text-xs",
                      type: "number",
                      defaultValue: "10"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs w-16", children: "Columns" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      className: "h-7 text-xs",
                      type: "number",
                      defaultValue: "4"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs w-16", children: "Layout" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { defaultValue: "2+2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-7 text-xs flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "2+2", children: "2+2" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "2+3", children: "2+3" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "1+2", children: "1+2 (sleeper)" })
                    ] })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              className: "h-8 text-xs",
              onClick: () => ue.success("PaySprint Bus API connected!"),
              "data-ocid": "admin.paysprint.bus_test_button",
              children: "Test Connection"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            className: "w-full",
            onClick: () => ue.success("PaySprint configuration saved!"),
            "data-ocid": "admin.paysprint.save_button",
            children: "Save PaySprint Settings"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "agent17", className: "mt-0 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-card border border-border rounded-xl space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-10 h-10 rounded-xl flex items-center justify-center text-xl",
                  style: { background: "oklch(0.65 0.14 50 / 0.1)" },
                  children: "✈️"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold", children: "Agent 17: Travel Curator" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Auto-generates packages, itineraries, hotels & cab routes" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Status:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { defaultChecked: true, "data-ocid": "admin.agent17.toggle" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-xs bg-green-100 text-green-700 border-0", children: "Active" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Update Frequency" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { defaultValue: "daily", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    className: "mt-1 h-8 text-xs",
                    "data-ocid": "admin.agent17.frequency_select",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "hourly", children: "Hourly" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "daily", children: "Daily" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "weekly", children: "Weekly" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Confidence Threshold: 75%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "range",
                  min: "0",
                  max: "100",
                  defaultValue: "75",
                  className: "w-full mt-2 h-2 rounded-lg appearance-none cursor-pointer",
                  style: { accentColor: "oklch(var(--primary))" }
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs mb-2 block", children: "Target Regions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: [
              "North India",
              "South India",
              "Rajasthan",
              "Goa",
              "Kerala",
              "Pakistan",
              "Nepal",
              "Sri Lanka",
              "Maldives",
              "Dubai"
            ].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "label",
              {
                className: "flex items-center gap-1.5 text-xs cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "checkbox",
                      defaultChecked: r.includes("India"),
                      className: "rounded"
                    }
                  ),
                  r
                ]
              },
              r
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs mb-2 block", children: "Auto-Generate" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: [
              ["Packages", true],
              ["Hotels", true],
              ["Itineraries", true],
              ["Cab Listings", false],
              ["Tour Guides", false]
            ].map(([label, checked]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "label",
              {
                className: "flex items-center gap-2 text-xs cursor-pointer p-2 rounded-lg border border-border hover:bg-secondary/30",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "checkbox",
                      defaultChecked: checked,
                      className: "rounded"
                    }
                  ),
                  label
                ]
              },
              String(label)
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              className: "gap-1",
              onClick: () => ue.success("Agent 17 running — generating travel content..."),
              "data-ocid": "admin.agent17.run_button",
              children: "▶ Run Now"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-card border border-border rounded-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm mb-3", children: "Activity Log (Last 10)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-secondary/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2", children: "Destination" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2", children: "Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-3 py-2", children: "Confidence" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-3 py-2", children: "Timestamp" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [
              ["Goa, India", "Package", 92, "Mar 11, 10:30"],
              ["Kerala Backwaters", "Itinerary", 88, "Mar 11, 09:15"],
              ["Taj Hotel, Agra", "Hotel", 85, "Mar 10, 18:00"],
              ["Delhi → Jaipur", "Cab Route", 78, "Mar 10, 14:45"],
              ["Rajasthan Heritage", "Package", 91, "Mar 10, 12:00"],
              ["Shimla Hills", "Itinerary", 83, "Mar 09, 16:30"],
              ["Grand Hyatt, Mumbai", "Hotel", 80, "Mar 09, 11:00"],
              ["Mumbai → Pune", "Cab Route", 76, "Mar 08, 15:00"],
              ["Andaman Islands", "Package", 89, "Mar 08, 09:00"],
              ["Ranthambore Safari", "Itinerary", 87, "Mar 07, 14:00"]
            ].map(([dest, type, conf, ts], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "border-t border-border hover:bg-secondary/20",
                "data-ocid": `admin.agent17.log.item.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-medium", children: dest }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "outline",
                      className: "text-[10px] px-1.5 py-0",
                      children: type
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      style: {
                        color: conf >= 85 ? "oklch(0.52 0.14 155)" : "oklch(0.65 0.14 50)"
                      },
                      children: [
                        conf,
                        "%"
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-right text-muted-foreground", children: ts })
                ]
              },
              String(dest)
            )) })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "agent18", className: "mt-0 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Agent18PricingMonitor, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "surveys", className: "mt-0 space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
          { label: "Total Surveys", value: "847", sub: "this month" },
          { label: "Avg Platform Rating", value: "4.6★", sub: "out of 5" },
          {
            label: "Most Voted Product",
            value: "CBSE Book Set",
            sub: "210 votes"
          },
          {
            label: "Top Rated Service",
            value: "Health Consult",
            sub: "4.9★ rating"
          }
        ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card border border-border rounded-xl p-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: stat.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-display font-bold text-foreground mt-1 truncate", children: stat.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: stat.sub })
            ]
          },
          stat.label
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-label font-semibold text-sm", children: "Survey Results" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-secondary/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 text-left font-label text-muted-foreground", children: "Product / Service" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5 text-left font-label text-muted-foreground", children: "Module" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5 text-center font-label text-muted-foreground", children: "Avg Rating" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5 text-center font-label text-muted-foreground", children: "Votes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5 text-center font-label text-muted-foreground", children: "Value" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5 text-center font-label text-muted-foreground", children: "Quality" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2.5 text-center font-label text-muted-foreground", children: "Delivery" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 text-left font-label text-muted-foreground", children: "Latest Comment" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [
              {
                name: "CBSE Class 10 Book Set",
                module: "Education",
                rating: 4.8,
                votes: 210,
                value: 92,
                quality: 88,
                delivery: 85,
                comment: "Great value, arrived quickly!"
              },
              {
                name: "General Health Consultation",
                module: "Healthcare",
                rating: 4.9,
                votes: 305,
                value: 96,
                quality: 97,
                delivery: 90,
                comment: "Dr. was very thorough and helpful."
              },
              {
                name: "Home Tutoring — Maths",
                module: "Services",
                rating: 4.9,
                votes: 140,
                value: 88,
                quality: 95,
                delivery: 82,
                comment: "My son's grades improved a lot."
              },
              {
                name: "CCTV 8-Camera Kit",
                module: "Gated Community",
                rating: 4.4,
                votes: 88,
                value: 80,
                quality: 84,
                delivery: 72,
                comment: "Good product, setup was a bit complex."
              },
              {
                name: "Goa Beach Resort Package",
                module: "Travel",
                rating: 4.7,
                votes: 128,
                value: 90,
                quality: 92,
                delivery: 88,
                comment: "Wonderful trip, highly recommend!"
              },
              {
                name: "Honda Civic 2022",
                module: "Products",
                rating: 4.8,
                votes: 165,
                value: 85,
                quality: 90,
                delivery: 78,
                comment: "Exactly as described, very happy."
              },
              {
                name: "Mehndi Artist",
                module: "Services",
                rating: 4.95,
                votes: 201,
                value: 95,
                quality: 98,
                delivery: 93,
                comment: "Beautiful work for our wedding!"
              },
              {
                name: "Legal Consultation",
                module: "Services",
                rating: 4.8,
                votes: 77,
                value: 87,
                quality: 90,
                delivery: 85,
                comment: "Very professional, resolved my issue."
              }
            ].map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "border-b border-border/50 hover:bg-secondary/20 transition-colors",
                "data-ocid": `admin.surveys.row.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-label font-medium text-foreground", children: row.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-full text-[10px] font-label bg-secondary text-muted-foreground", children: row.module }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-label font-bold text-amber-500", children: [
                    row.rating,
                    "★"
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-center font-label text-foreground", children: row.votes }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 justify-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-10 bg-secondary rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "h-full bg-emerald-500 rounded-full",
                        style: { width: `${row.value}%` }
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
                      row.value,
                      "%"
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 justify-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-10 bg-secondary rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "h-full bg-blue-500 rounded-full",
                        style: { width: `${row.quality}%` }
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
                      row.quality,
                      "%"
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 justify-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-10 bg-secondary rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "h-full bg-violet-500 rounded-full",
                        style: { width: `${row.delivery}%` }
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
                      row.delivery,
                      "%"
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-muted-foreground italic max-w-[200px] truncate", children: [
                    "“",
                    row.comment,
                    "”"
                  ] })
                ]
              },
              row.name
            )) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "agent19", className: "mt-0 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-display font-bold", children: "Agent 19 — Game Creator" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Auto-generates unique games based on user interests and activity patterns." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { defaultChecked: true, "data-ocid": "admin.agent19.toggle" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Agent19FullPanel, {})
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "agent20", className: "mt-0 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-display font-bold", children: "Agent 20 — Comic Agent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Creates funny daily comics from users' daily life feeds." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { defaultChecked: true, "data-ocid": "admin.agent20.toggle" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Agent20FullPanel, {})
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "agent21", className: "mt-0 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-display font-bold", children: "Agent 21 — Spiritual & Mythology Curator" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Auto-curates mythological stories, rituals, and cross-culture connections for the Spiritual Stories page." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { defaultChecked: true, "data-ocid": "admin.agent21.toggle" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Agent21FullPanel, {})
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "social-queue", className: "mt-0 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-display font-bold", children: "Social Media Queue" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Review and approve posts before they are shared to social platforms." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SocialMediaQueue, {})
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "promotions-queue", className: "mt-0 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-display font-bold", children: "Promotions Queue" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Review ad and promotion submissions from module QuickAdd bars." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PromotionsQueue, {})
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "whatsapp-api", className: "mt-0 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-display font-bold", children: "WhatsApp Business API" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Configure WhatsApp Cloud API credentials for direct messaging." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppAPISettings, {})
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "rides-admin", className: "mt-0 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-display font-bold", children: "Ride Management" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Manage drivers, vehicles, and fare rate cards." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(RideManagementWithZones, {})
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 text-center text-xs text-muted-foreground", children: [
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
function Agent18PricingMonitor() {
  const [active, setActive] = reactExports.useState(true);
  const [sensitivity, setSensitivity] = reactExports.useState([60]);
  const [threshold, setThreshold] = reactExports.useState("20");
  const [deliveryCompare, setDeliveryCompare] = reactExports.useState(true);
  const [notifFreq, setNotifFreq] = reactExports.useState("daily");
  const [scanning, setScanning] = reactExports.useState(false);
  const [scanResult, setScanResult] = reactExports.useState(null);
  const [moduleScope, setModuleScope] = reactExports.useState({
    Travel: true,
    Healthcare: true,
    "Real Estate": true,
    "Gated Community": true,
    Education: true,
    Shop: true
  });
  const toggleModule = (m) => setModuleScope((p) => ({ ...p, [m]: !p[m] }));
  const runScan = () => {
    setScanning(true);
    setScanResult(null);
    setTimeout(() => {
      setScanning(false);
      setScanResult(
        "5 listings flagged as overpriced (3 Travel, 1 Healthcare, 1 Shop)"
      );
    }, 1800);
  };
  const alerts = [
    {
      product: "Deluxe Room — The Grand Palace",
      module: "Travel",
      flagged: "₹8,500/night",
      avg: "₹6,200/night",
      pct: "+37%"
    },
    {
      product: "Digital Stethoscope Pro",
      module: "Healthcare",
      flagged: "₹12,400",
      avg: "₹9,800",
      pct: "+27%"
    },
    {
      product: "Courier Delivery — Express",
      module: "Shop",
      flagged: "₹350/kg",
      avg: "₹220/kg",
      pct: "+59%"
    },
    {
      product: "Airport Transfer — Mumbai",
      module: "Travel",
      flagged: "₹4,200",
      avg: "₹3,100",
      pct: "+35%"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-xl border-2 p-4 flex items-center justify-between",
        style: {
          borderColor: active ? "oklch(0.52 0.14 155 / 0.4)" : "oklch(0.55 0.22 25 / 0.3)",
          background: active ? "oklch(0.52 0.14 155 / 0.05)" : "oklch(0.55 0.22 25 / 0.05)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-10 h-10 rounded-xl flex items-center justify-center text-xl",
                style: { background: "oklch(0.65 0.14 50 / 0.1)" },
                children: "💰"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-semibold text-sm", children: "Agent 18: Pricing & Delivery Monitor" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Monitors product, service & delivery prices across all modules" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Switch,
              {
                checked: active,
                onCheckedChange: setActive,
                "data-ocid": "admin.agent18.toggle"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                className: `text-xs border-0 ${active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`,
                children: active ? "Active" : "Paused"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Configuration" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs", children: [
            "Price Sensitivity:",
            " ",
            sensitivity[0] < 40 ? "Low" : sensitivity[0] < 70 ? "Medium" : "High"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Slider,
            {
              className: "mt-2",
              min: 0,
              max: 100,
              step: 10,
              value: sensitivity,
              onValueChange: setSensitivity,
              "data-ocid": "admin.agent18.toggle"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] text-muted-foreground mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Low" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Medium" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "High" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Alert Threshold (%)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "mt-1 h-8 text-xs",
              type: "number",
              placeholder: "20",
              value: threshold,
              onChange: (e) => setThreshold(e.target.value),
              "data-ocid": "admin.agent18.input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground mt-1", children: [
            "Alert if price is >",
            threshold,
            "% above average"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-2 border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium", children: "Delivery Rate Comparison" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Compare delivery providers and flag overpriced rates" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Switch,
          {
            checked: deliveryCompare,
            onCheckedChange: setDeliveryCompare,
            "data-ocid": "admin.agent18.switch"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Notification Frequency" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: notifFreq, onValueChange: setNotifFreq, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectTrigger,
            {
              className: "mt-1 h-8 text-xs",
              "data-ocid": "admin.agent18.select",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "realtime", children: "Real-time" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "hourly", children: "Hourly" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "daily", children: "Daily" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "weekly", children: "Weekly" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs mb-2 block", children: "Module Scope" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: Object.keys(moduleScope).map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-1.5 text-xs cursor-pointer",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Checkbox,
                {
                  checked: moduleScope[m],
                  onCheckedChange: () => toggleModule(m)
                }
              ),
              m
            ]
          },
          m
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pt-2 border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            className: "gap-1.5",
            onClick: runScan,
            disabled: scanning,
            "data-ocid": "admin.agent18.primary_button",
            children: scanning ? "Scanning..." : "Run Scan Now"
          }
        ),
        scanResult && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Badge,
          {
            className: "text-xs bg-amber-100 text-amber-700 border-0",
            "data-ocid": "admin.agent18.success_state",
            children: scanResult
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Recent Price Alerts" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left font-medium", children: "Product / Service" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left font-medium", children: "Module" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-right font-medium", children: "Listed Price" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-right font-medium", children: "Avg Price" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-right font-medium", children: "% Over" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: alerts.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: "border-t border-border hover:bg-secondary/20",
            "data-ocid": `admin.agent18.item.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-medium", children: a.product }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: "text-[10px] px-1.5 py-0",
                  children: a.module
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-right", children: a.flagged }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-right text-muted-foreground", children: a.avg }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "td",
                {
                  className: "px-3 py-2 text-right font-semibold",
                  style: { color: "oklch(0.52 0.2 25)" },
                  children: a.pct
                }
              )
            ]
          },
          a.product
        )) })
      ] }) })
    ] })
  ] });
}
function Agent7ImageManager() {
  const [timeframe, setTimeframe] = reactExports.useState("weekly");
  const [autoFill, setAutoFill] = reactExports.useState({});
  const [running, setRunning] = reactExports.useState(false);
  const [progress, setProgress] = reactExports.useState(0);
  const modules = [
    { name: "Family Tree", pct: 72 },
    { name: "Social Feed", pct: 88 },
    { name: "Products", pct: 95 },
    { name: "Healthcare", pct: 45 },
    { name: "Real Estate", pct: 81 },
    { name: "Education", pct: 34 },
    { name: "Travel", pct: 67 },
    { name: "Blog", pct: 91 },
    { name: "Jobs", pct: 22 },
    { name: "Community", pct: 58 }
  ];
  const chartData = {
    daily: {
      label: "Today's Uploads",
      values: [
        { module: "Social", val: 34 },
        { module: "Products", val: 12 },
        { module: "Blog", val: 8 },
        { module: "Jobs", val: 3 }
      ]
    },
    weekly: {
      label: "This Week",
      values: [
        { module: "Social", val: 142 },
        { module: "Products", val: 87 },
        { module: "Blog", val: 54 },
        { module: "Healthcare", val: 21 },
        { module: "Travel", val: 38 }
      ]
    },
    monthly: {
      label: "This Month",
      values: [
        { module: "Social", val: 612 },
        { module: "Products", val: 341 },
        { module: "Blog", val: 228 },
        { module: "Real Estate", val: 189 },
        { module: "Travel", val: 152 }
      ]
    },
    yearly: {
      label: "This Year",
      values: [
        { module: "Social", val: 7821 },
        { module: "Products", val: 4102 },
        { module: "Blog", val: 2891 },
        { module: "Travel", val: 1847 },
        { module: "Education", val: 1203 }
      ]
    }
  };
  const currentChart = chartData[timeframe];
  const maxVal = Math.max(...currentChart.values.map((v) => v.val));
  const runAutoFill = () => {
    setRunning(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setRunning(false);
          return 100;
        }
        return p + 5;
      });
    }, 100);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-5 gap-2", children: modules.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border rounded-xl p-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-label font-semibold text-foreground truncate", children: m.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Switch,
              {
                checked: autoFill[m.name] ?? false,
                onCheckedChange: (v) => setAutoFill((p) => ({ ...p, [m.name]: v }))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-secondary overflow-hidden mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-full rounded-full",
              style: {
                width: `${m.pct}%`,
                background: m.pct >= 80 ? "oklch(0.52 0.14 155)" : m.pct >= 50 ? "oklch(0.72 0.17 85)" : "oklch(0.55 0.22 25)"
              }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", children: [
            m.pct,
            "% covered"
          ] })
        ]
      },
      m.name
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-label font-semibold text-foreground", children: [
          "Upload Analytics — ",
          currentChart.label
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: ["daily", "weekly", "monthly", "yearly"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setTimeframe(t),
            className: `text-[10px] font-label px-2 py-1 rounded capitalize transition-colors ${timeframe === t ? "text-white" : "text-muted-foreground hover:text-foreground border border-border"}`,
            style: timeframe === t ? { background: "oklch(0.55 0.22 280)" } : {},
            children: t
          },
          t
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: currentChart.values.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label text-foreground w-20 shrink-0", children: v.module }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-5 bg-secondary rounded overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-full rounded flex items-center px-2 transition-all duration-500",
            style: {
              width: `${v.val / maxVal * 100}%`,
              background: "oklch(0.55 0.22 280 / 0.7)",
              minWidth: "2rem"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-label font-bold text-white", children: v.val })
          }
        ) })
      ] }, v.module)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-label font-semibold text-foreground", children: "Auto-fill Missing Images" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            onClick: runAutoFill,
            disabled: running,
            style: { background: "oklch(0.52 0.14 155)", color: "white" },
            className: "text-xs gap-1.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { size: 13 }),
              " ",
              running ? "Running..." : "Run Auto-fill Now"
            ]
          }
        )
      ] }),
      running && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-secondary overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-full rounded-full transition-all duration-200",
            style: {
              width: `${progress}%`,
              background: "oklch(0.52 0.14 155)"
            }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground", children: [
          "Generating AI images for modules with coverage below 50%...",
          " ",
          progress,
          "%"
        ] })
      ] }),
      !running && progress === 100 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px]", style: { color: "oklch(0.52 0.14 155)" }, children: "✓ Auto-fill complete — 47 images generated" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground bg-secondary/40 rounded-lg px-3 py-2", children: [
      "🔗 ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Agent Network:" }),
      " Receives image descriptions from all modules. Syncs with Agent 9 (Social Sharing) for OG images. Auto-fill triggers when coverage drops below admin threshold."
    ] })
  ] });
}
function Agent8SEO() {
  const modules = [
    {
      name: "Family Tree",
      title: "Family Tree & Heritage — FamilySocial",
      desc: "Build and explore your family tree with blood type, DNA, and genealogy data.",
      keywords: "family tree, genealogy, heritage",
      status: "optimized"
    },
    {
      name: "Social Feed",
      title: "Family Social Feed — FamilySocial",
      desc: "Connect with family and community through a secure social feed.",
      keywords: "family social, community feed",
      status: "optimized"
    },
    {
      name: "Products",
      title: "Buy & Sell Products — FamilySocial Marketplace",
      desc: "Browse products with variants, subscriptions, and rental options.",
      keywords: "buy sell, marketplace, products",
      status: "needs-update"
    },
    {
      name: "Jobs",
      title: "Jobs & Careers in Pakistan — FamilySocial",
      desc: "Full-time, part-time, freelance, and delivery jobs locally and globally.",
      keywords: "jobs pakistan, careers, employment",
      status: "optimized"
    },
    {
      name: "Healthcare",
      title: "Healthcare & Medical Records — FamilySocial",
      desc: "Manage medical history, insurance, and book doctor consultations.",
      keywords: "healthcare, doctors, insurance",
      status: "needs-update"
    },
    {
      name: "Real Estate",
      title: "Property for Sale & Rent — FamilySocial",
      desc: "Browse and list properties for sale, rent, and lease across Pakistan.",
      keywords: "real estate, property, rent",
      status: "optimized"
    },
    {
      name: "Education",
      title: "Education & Schools — FamilySocial",
      desc: "Student enrollment, school management, and online courses.",
      keywords: "schools, education, courses",
      status: "missing"
    },
    {
      name: "Travel",
      title: "Travel Packages & Tours — FamilySocial",
      desc: "Book travel packages, hotels, cabs, and create custom itineraries.",
      keywords: "travel, tours, pakistan tourism",
      status: "optimized"
    },
    {
      name: "Blog",
      title: "Blog & Affiliate Marketing — FamilySocial",
      desc: "Read and write blogs with affiliate links and sponsored content.",
      keywords: "blog, affiliate, content",
      status: "optimized"
    },
    {
      name: "Matrimony",
      title: "Matrimony & Marriage Matches — FamilySocial",
      desc: "Find compatible matches using caste, horoscope, and lifestyle criteria.",
      keywords: "matrimony, marriage, shaadi",
      status: "needs-update"
    },
    {
      name: "Dating",
      title: "Modern Dating & Matches — FamilySocial",
      desc: "Find matches based on habits, lifestyle, and personality compatibility.",
      keywords: "dating, matches, relationships",
      status: "missing"
    },
    {
      name: "Community",
      title: "Community & Gated Societies — FamilySocial",
      desc: "Join and manage your local community, society, or residential area.",
      keywords: "community, gated society, residents",
      status: "optimized"
    },
    {
      name: "Gated Community",
      title: "Gated Community Management — FamilySocial",
      desc: "Gate entry, visitor logs, parking, and community marketplace.",
      keywords: "gated community, security, gate",
      status: "needs-update"
    },
    {
      name: "Geomap",
      title: "Location Map — FamilySocial",
      desc: "See connections, properties, jobs, and community on an interactive map.",
      keywords: "location, map, connections",
      status: "optimized"
    }
  ];
  const keywords = [
    { kw: "family social network", rank: 4 },
    { kw: "pakistan matrimony", rank: 7 },
    { kw: "family tree online", rank: 12 },
    { kw: "jobs in lahore", rank: 9 },
    { kw: "property for rent karachi", rank: 15 },
    { kw: "gated community management", rank: 3 },
    { kw: "travel packages pakistan", rank: 11 },
    { kw: "affiliate marketing pakistan", rank: 18 },
    { kw: "school management system", rank: 22 },
    { kw: "healthcare management app", rank: 8 }
  ];
  const maxRank = 30;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 border-b border-border flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-label font-semibold text-foreground", children: "Module SEO Metadata" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            className: "text-xs gap-1.5",
            style: { background: "oklch(0.55 0.22 280)", color: "white" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 12 }),
              " Regenerate All"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Module" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Page Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Meta Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Keywords" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Status" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: modules.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: "hover:bg-secondary/20 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-medium whitespace-nowrap", children: m.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] line-clamp-1 max-w-[180px] block", children: m.title }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] line-clamp-1 max-w-[180px] block text-muted-foreground", children: m.desc }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-mono text-muted-foreground", children: m.keywords }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                SBadge,
                {
                  label: m.status,
                  color: m.status === "optimized" ? "green" : m.status === "needs-update" ? "amber" : "red"
                }
              ) })
            ]
          },
          m.name
        )) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-label font-semibold text-foreground", children: "Open Graph Settings" }),
        [
          {
            label: "OG Title",
            val: "FamilySocial — Family, Community & Life"
          },
          {
            label: "OG Description",
            val: "A super-platform for family trees, jobs, real estate, healthcare, education, and community."
          },
          { label: "Twitter Card", val: "summary_large_image" }
        ].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-label text-muted-foreground", children: f.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-secondary/40 border border-border rounded px-2 py-1.5 text-xs font-label text-foreground", children: f.val })
        ] }, f.label)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label text-foreground", children: "Google Shopping Feed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground", children: "234 products · Last sync: Mar 1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { defaultChecked: true })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-label font-semibold text-foreground", children: "Top Keywords" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground", children: "Simulated rankings" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: keywords.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-label text-foreground w-36 shrink-0 truncate", children: k.kw }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-4 bg-secondary rounded overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-full rounded flex items-center justify-end px-1.5 transition-all",
              style: {
                width: `${100 - k.rank / maxRank * 100}%`,
                background: k.rank <= 10 ? "oklch(0.52 0.14 155 / 0.7)" : "oklch(0.72 0.17 85 / 0.7)",
                minWidth: "1rem"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] font-bold text-white", children: [
                "#",
                k.rank
              ] })
            }
          ) })
        ] }, k.kw)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground bg-secondary/40 rounded-lg px-3 py-2", children: [
      "🔗 ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Agent Network:" }),
      " Sends metadata updates to Agent 9 (Social Sharing) for share cards. Legal module names from Agent 5 are used to keep titles compliant."
    ] })
  ] });
}
function Agent9Sharing() {
  const [copied, setCopied] = reactExports.useState(null);
  const shareLink = "https://familysocial.app/feed/post-12345";
  const copyLink = (label) => {
    setCopied(label);
    setTimeout(() => setCopied(null), 2e3);
  };
  const shareStats = [
    {
      platform: "WhatsApp",
      today: 142,
      week: 891,
      month: 3420,
      top: "DJI Mini 4 Review"
    },
    {
      platform: "Twitter/X",
      today: 89,
      week: 512,
      month: 1980,
      top: "Freelancing in Pakistan"
    },
    {
      platform: "Facebook",
      today: 67,
      week: 389,
      month: 1540,
      top: "7-Day Hunza Guide"
    },
    {
      platform: "Pinterest",
      today: 34,
      week: 201,
      month: 820,
      top: "Bridal Collection 2026"
    },
    {
      platform: "LinkedIn",
      today: 28,
      week: 178,
      month: 712,
      top: "Senior React Developer Job"
    },
    {
      platform: "Copy Link",
      today: 212,
      week: 1340,
      month: 5200,
      top: "DHA Phase 6 Property"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-label font-semibold text-foreground mb-3", children: "Share Link Preview" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-xl overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 bg-gradient-to-r from-violet-600/20 to-pink-600/20 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground", children: "OG Image preview from Agent 7" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-label font-semibold text-foreground", children: "DJI Mini 4 Pro Full Review 2026 — FamilySocial Blog" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mt-0.5 line-clamp-2", children: "An in-depth review of the DJI Mini 4 Pro with affiliate links to buy at the best price." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-1 font-mono", children: shareLink })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-3", children: [
        { label: "Copy Link", icon: Link2, action: () => copyLink("link") },
        {
          label: "WhatsApp",
          icon: MessageSquare,
          action: () => window.open(
            `https://wa.me/?text=${encodeURIComponent(shareLink)}`,
            "_blank"
          )
        },
        {
          label: "Twitter/X",
          icon: Share2,
          action: () => window.open(
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareLink)}`,
            "_blank"
          )
        },
        {
          label: "Facebook",
          icon: Share2,
          action: () => window.open(
            `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}`,
            "_blank"
          )
        },
        {
          label: "Pinterest",
          icon: Share2,
          action: () => window.open(
            `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareLink)}`,
            "_blank"
          )
        },
        {
          label: "LinkedIn",
          icon: Share2,
          action: () => window.open(
            `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareLink)}`,
            "_blank"
          )
        }
      ].map(({ label, icon: Icon, action }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: action,
          className: "flex items-center gap-1.5 text-[11px] font-label font-medium px-3 py-1.5 rounded-lg border border-border hover:bg-secondary/60 transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 12 }),
            " ",
            copied === "link" && label === "Copy Link" ? "Copied!" : label
          ]
        },
        label
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-label font-semibold text-foreground mb-3", children: "Platform OAuth Connections" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-2", children: ["Instagram", "YouTube", "Facebook", "Pinterest"].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "border border-border rounded-xl p-3 text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-label font-semibold text-foreground mb-1", children: p }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "text-[10px] text-muted-foreground border border-border rounded px-2 py-1 hover:bg-secondary/40 transition-colors",
                title: "Requires OAuth — coming soon",
                children: "Connect ↗"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-muted-foreground mt-1 italic", children: "OAuth required" })
          ]
        },
        p
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-label font-semibold text-foreground", children: "Share Analytics" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Platform" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Today" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "This Week" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "This Month" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Top Shared" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: shareStats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: "hover:bg-secondary/20 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-medium", children: s.platform }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: s.today }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: s.week.toLocaleString() }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: s.month.toLocaleString() }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "text-muted-foreground text-[11px]", children: s.top })
            ]
          },
          s.platform
        )) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground bg-secondary/40 rounded-lg px-3 py-2", children: [
      "🔗 ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Agent Network:" }),
      " Receives OG metadata from Agent 8. Uses auto-generated images from Agent 7 as share card previews. Google Shopping feed synced with Agent 8 product data."
    ] })
  ] });
}
function Agent11FakeUsers() {
  const [running, setRunning] = reactExports.useState(false);
  const [dailyLimit, setDailyLimit] = reactExports.useState(10);
  const [showConfirm, setShowConfirm] = reactExports.useState(false);
  const [activeTab, setActiveTab] = reactExports.useState("config");
  const [batchSize, setBatchSize] = reactExports.useState("10");
  const [generateContent, setGenerateContent] = reactExports.useState(true);
  const [generating, setGenerating] = reactExports.useState(false);
  const [selectedCountries, setSelectedCountries] = reactExports.useState({
    India: true,
    Pakistan: true,
    Bangladesh: false,
    "Sri Lanka": false,
    Nepal: false,
    UAE: true,
    UK: false,
    USA: false,
    Canada: false,
    Australia: false
  });
  const [selectedContent, setSelectedContent] = reactExports.useState({
    Schools: true,
    "Travel Packages": true,
    Hotels: true,
    Jobs: true,
    Products: false,
    Services: false,
    "Healthcare Advisors": false,
    "Community Groups": true
  });
  const trackingData = [
    {
      country: "India",
      users: 342,
      content: 1240,
      lastRun: "Mar 11, 08:00",
      status: "Active"
    },
    {
      country: "Pakistan",
      users: 187,
      content: 634,
      lastRun: "Mar 11, 08:00",
      status: "Active"
    },
    {
      country: "UAE",
      users: 94,
      content: 312,
      lastRun: "Mar 10, 22:00",
      status: "Paused"
    },
    {
      country: "Bangladesh",
      users: 56,
      content: 189,
      lastRun: "Mar 09, 14:00",
      status: "Active"
    },
    {
      country: "Nepal",
      users: 23,
      content: 78,
      lastRun: "Mar 08, 10:00",
      status: "Idle"
    },
    {
      country: "Sri Lanka",
      users: 31,
      content: 104,
      lastRun: "Mar 07, 16:00",
      status: "Idle"
    }
  ];
  const fakeUsers = [
    {
      name: "ali_bot_7a2x",
      country: "India",
      created: "Mar 11, 2026",
      modules: ["Feed", "Jobs", "Community"],
      posts: 4,
      interactions: 23
    },
    {
      name: "zara_sim_9c1b",
      country: "Pakistan",
      created: "Mar 11, 2026",
      modules: ["Matrimony", "Feed"],
      posts: 2,
      interactions: 11
    },
    {
      name: "hassan_auto_4f",
      country: "India",
      created: "Mar 10, 2026",
      modules: ["Products", "POS"],
      posts: 6,
      interactions: 34
    },
    {
      name: "nida_bot_3e8d",
      country: "UAE",
      created: "Mar 10, 2026",
      modules: ["Blog", "Affiliate"],
      posts: 3,
      interactions: 18
    },
    {
      name: "imran_sim_1b7c",
      country: "Pakistan",
      created: "Mar 09, 2026",
      modules: ["Jobs", "Travel"],
      posts: 5,
      interactions: 27
    },
    {
      name: "sara_auto_2a9f",
      country: "India",
      created: "Mar 09, 2026",
      modules: ["Healthcare", "Feed"],
      posts: 1,
      interactions: 9
    }
  ];
  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      ue.success("Users and content generated across selected countries");
    }, 2e3);
  };
  const statusColor = (s) => {
    if (s === "Active") return "bg-green-100 text-green-700";
    if (s === "Paused") return "bg-amber-100 text-amber-700";
    return "bg-gray-100 text-gray-500";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-xl border-2 p-4 flex items-center justify-between",
        style: {
          borderColor: running ? "oklch(0.52 0.14 155 / 0.4)" : "oklch(0.55 0.22 25 / 0.3)",
          background: running ? "oklch(0.52 0.14 155 / 0.05)" : "oklch(0.55 0.22 25 / 0.05)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground", children: running ? "U0001f7e2 Agent Running" : "U0001f534 Agent Stopped" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground", children: [
              "Fake users are",
              " ",
              running ? "being generated and interacting" : "not active",
              ". Toggle to start/stop."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Switch,
            {
              checked: running,
              onCheckedChange: setRunning,
              "data-ocid": "admin.agent11.toggle"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "config", className: "flex-1 text-xs", children: "Configuration" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "tracking",
            className: "flex-1 text-xs",
            "data-ocid": "admin.agent11.tab",
            children: "Tracking Dashboard"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "users", className: "flex-1 text-xs", children: "Generated Users" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "config", className: "mt-4 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-amber-500/10 border border-amber-500/30 rounded-xl px-4 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-xs font-label font-semibold",
              style: { color: "oklch(0.50 0.14 65)" },
              children: "\\u26a0\\ufe0f Warning"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Fake users are indistinguishable from real users across all modules. Agent 15 (Analytics) separates bot traffic in reports." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Daily Limit" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "range",
                  min: 1,
                  max: 50,
                  value: dailyLimit,
                  onChange: (e) => setDailyLimit(Number(e.target.value)),
                  className: "flex-1 accent-violet-600"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-foreground w-8 text-right", children: dailyLimit })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground mt-1", children: [
              dailyLimit,
              " new fake users generated per day"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold mb-2 block", children: "Target Countries" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2", children: Object.entries(selectedCountries).map(([c, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-1.5 text-xs cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Checkbox,
                    {
                      checked: v,
                      onCheckedChange: () => setSelectedCountries((p) => ({ ...p, [c]: !p[c] }))
                    }
                  ),
                  c
                ]
              },
              c
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold mb-2 block", children: "Module Content to Generate" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: Object.entries(selectedContent).map(([m, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-1.5 text-xs cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Checkbox,
                    {
                      checked: v,
                      onCheckedChange: () => setSelectedContent((p) => ({ ...p, [m]: !p[m] }))
                    }
                  ),
                  m
                ]
              },
              m
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Users per Country (Batch)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  className: "mt-1 h-8 text-xs",
                  type: "number",
                  value: batchSize,
                  onChange: (e) => setBatchSize(e.target.value),
                  "data-ocid": "admin.agent11.input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pt-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Checkbox,
                {
                  checked: generateContent,
                  onCheckedChange: (v) => setGenerateContent(Boolean(v)),
                  "data-ocid": "admin.agent11.checkbox"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs cursor-pointer", children: "Auto-create content" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              className: "gap-1.5 w-full",
              onClick: handleGenerate,
              disabled: generating,
              "data-ocid": "admin.agent11.primary_button",
              children: generating ? "Generating..." : "Generate Now"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "tracking", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 border-b border-border flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Country-wise Tracking Dashboard" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "text-xs gap-1",
              onClick: () => ue.success("Stats refreshed"),
              "data-ocid": "admin.agent11.secondary_button",
              children: "Refresh Stats"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left font-medium", children: "Country" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-right font-medium", children: "Users Created" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-right font-medium", children: "Content Items" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left font-medium", children: "Last Run" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left font-medium", children: "Status" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: trackingData.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "border-t border-border hover:bg-secondary/20",
              "data-ocid": `admin.agent11.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-medium", children: row.country }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-right font-semibold", children: row.users.toLocaleString() }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-right text-muted-foreground", children: row.content.toLocaleString() }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-muted-foreground", children: row.lastRun }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    className: `text-[10px] border-0 ${statusColor(row.status)}`,
                    children: row.status
                  }
                ) })
              ]
            },
            row.country
          )) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "users", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 border-b border-border flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Recently Generated Users" }),
          showConfirm ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground mr-1", children: "Delete all bots?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "destructive",
                className: "h-6 text-xs px-2",
                onClick: () => {
                  setShowConfirm(false);
                  ue.success("All bot users deleted");
                },
                "data-ocid": "admin.agent11.confirm_button",
                children: "Confirm"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "h-6 text-xs px-2",
                onClick: () => setShowConfirm(false),
                "data-ocid": "admin.agent11.cancel_button",
                children: "Cancel"
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "destructive",
              className: "text-xs h-7 gap-1",
              onClick: () => setShowConfirm(true),
              "data-ocid": "admin.agent11.delete_button",
              children: "Delete All Bots"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left font-medium", children: "Username" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left font-medium", children: "Country" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left font-medium", children: "Created" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left font-medium", children: "Active Modules" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-right font-medium", children: "Posts" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-right font-medium", children: "Interactions" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: fakeUsers.map((u, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "border-t border-border hover:bg-secondary/20",
              "data-ocid": `admin.agent11.row.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-mono font-medium", children: u.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-muted-foreground", children: u.country }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-muted-foreground", children: u.created }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: u.modules.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: "text-[9px] px-1 py-0",
                    children: m
                  },
                  m
                )) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-right", children: u.posts }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-right", children: u.interactions })
              ]
            },
            u.name
          )) })
        ] }) })
      ] }) })
    ] })
  ] });
}
function Agent12WhatsApp() {
  const [selectedCategories, setSelectedCategories] = reactExports.useState([
    "Jobs",
    "Community"
  ]);
  const categories = [
    "Jobs",
    "Community",
    "Marketplace",
    "Healthcare",
    "Family Updates",
    "Real Estate",
    "Events",
    "Travel"
  ];
  const subscribers = [
    {
      phone: "+92-300-***-1234",
      name: "Ahmed K.",
      cats: ["Jobs", "Community"],
      date: "Mar 1",
      status: "active"
    },
    {
      phone: "+92-321-***-5678",
      name: "Fatima M.",
      cats: ["Healthcare", "Family Updates"],
      date: "Feb 28",
      status: "active"
    },
    {
      phone: "+92-333-***-9012",
      name: "Zara H.",
      cats: ["Marketplace", "Travel"],
      date: "Feb 27",
      status: "active"
    },
    {
      phone: "+92-311-***-3456",
      name: "Omar S.",
      cats: ["Jobs", "Real Estate"],
      date: "Feb 26",
      status: "active"
    },
    {
      phone: "+92-345-***-7890",
      name: "Aisha T.",
      cats: ["Community", "Events"],
      date: "Feb 25",
      status: "active"
    },
    {
      phone: "+92-301-***-2345",
      name: "Hassan A.",
      cats: ["Jobs", "Community", "Marketplace"],
      date: "Feb 24",
      status: "active"
    },
    {
      phone: "+92-313-***-6789",
      name: "Nida R.",
      cats: ["Healthcare", "Events"],
      date: "Feb 23",
      status: "unsubscribed"
    },
    {
      phone: "+92-315-***-0123",
      name: "Bilal H.",
      cats: ["Travel", "Jobs"],
      date: "Feb 22",
      status: "active"
    },
    {
      phone: "+92-317-***-4567",
      name: "Maria S.",
      cats: ["Marketplace", "Real Estate"],
      date: "Feb 21",
      status: "active"
    },
    {
      phone: "+92-319-***-8901",
      name: "Tariq N.",
      cats: ["Community", "Jobs"],
      date: "Feb 20",
      status: "active"
    },
    {
      phone: "+92-323-***-2345",
      name: "Hina B.",
      cats: ["Family Updates", "Healthcare"],
      date: "Feb 19",
      status: "active"
    },
    {
      phone: "+92-325-***-6789",
      name: "Usman F.",
      cats: ["Jobs", "Travel"],
      date: "Feb 18",
      status: "unsubscribed"
    }
  ];
  const catStats = [
    { cat: "Jobs", pct: 45 },
    { cat: "Community", pct: 38 },
    { cat: "Marketplace", pct: 27 },
    { cat: "Healthcare", pct: 18 },
    { cat: "Family Updates", pct: 31 },
    { cat: "Travel", pct: 22 }
  ];
  const waMessage = `📱 *FamilySocial Daily Update*

${selectedCategories.includes("Jobs") ? "💼 *Jobs*: 12 new listings in Lahore & Karachi\n" : ""}${selectedCategories.includes("Community") ? "🏘️ *Community*: 3 new notices in your society\n" : ""}${selectedCategories.includes("Marketplace") ? "🛒 *Marketplace*: 7 deals ending today\n" : ""}${selectedCategories.includes("Healthcare") ? "❤️ *Healthcare*: 2 new advisors available\n" : ""}
View all: https://familysocial.app
_FamilySocial — Family · Community · Life_`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: [
      { label: "Total Subscribers", value: "147" },
      { label: "Sent Today", value: "89" },
      { label: "Active Categories", value: "8" }
    ].map(({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border rounded-xl p-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-display font-bold text-foreground", children: value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground font-label", children: label })
        ]
      },
      label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-label font-semibold text-foreground mb-3", children: "Category Breakdown" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: catStats.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label text-foreground w-28 shrink-0", children: c.cat }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-4 bg-secondary rounded overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-full rounded transition-all",
            style: {
              width: `${c.pct}%`,
              background: "oklch(0.52 0.14 155 / 0.7)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] font-bold text-white px-1.5 leading-4 block", children: [
              c.pct,
              "%"
            ] })
          }
        ) })
      ] }, c.cat)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-label font-semibold text-foreground mb-3", children: "Daily Digest Builder" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mb-3", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setSelectedCategories(
            (prev) => prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
          ),
          className: `text-[11px] font-label px-2.5 py-1 rounded-full border transition-all ${selectedCategories.includes(c) ? "text-white border-transparent" : "text-muted-foreground border-border hover:border-foreground/30"}`,
          style: selectedCategories.includes(c) ? { background: "oklch(0.52 0.14 155)" } : {},
          children: c
        },
        c
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-secondary/40 rounded-xl p-3 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-mono text-foreground whitespace-pre-line", children: waMessage }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: `https://wa.me/?text=${encodeURIComponent(waMessage)}`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-2 text-xs font-label font-semibold px-4 py-2 rounded-lg text-white transition-colors hover:opacity-90",
          style: { background: "oklch(0.52 0.14 155)" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { size: 14 }),
            " Send Today's Update via WhatsApp"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-label font-semibold text-foreground", children: "Subscribers" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Categories" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Subscribed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Status" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: subscribers.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: "hover:bg-secondary/20 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-mono text-[11px]", children: s.phone }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-medium", children: s.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-0.5", children: s.cats.slice(0, 2).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SBadge, { label: c, color: "blue" }, c)) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "text-muted-foreground", children: s.date }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                SBadge,
                {
                  label: s.status,
                  color: s.status === "active" ? "green" : "gray"
                }
              ) })
            ]
          },
          s.phone
        )) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground bg-secondary/40 rounded-lg px-3 py-2", children: [
      "🔗 ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Agent Network:" }),
      " Pulls latest activity from all modules. Coordinated with Agent 15 (Analytics) for personalized digests. Message content updated by Agent 16 (Tips)."
    ] })
  ] });
}
function Agent13Monetize() {
  const [suggestionStatus, setSuggestionStatus] = reactExports.useState({});
  const moduleUsage = [
    { module: "Social Feed", pct: 94 },
    { module: "Jobs", pct: 82 },
    { module: "Products", pct: 78 },
    { module: "Community", pct: 71 },
    { module: "Real Estate", pct: 65 },
    { module: "Matrimony", pct: 58 },
    { module: "Healthcare", pct: 49 },
    { module: "Travel", pct: 44 },
    { module: "Blog", pct: 38 },
    { module: "Education", pct: 34 }
  ];
  const suggestions = [
    {
      title: "Premium Job Listings",
      desc: "340 job searches this week. Offer featured placement.",
      est: "PKR 15,000/mo",
      cat: "Jobs",
      detail: "Charge PKR 500/week for highlighted job cards."
    },
    {
      title: "Promoted Real Estate",
      desc: "89 properties viewed daily. Top placement available.",
      est: "PKR 40,000/mo",
      cat: "Real Estate",
      detail: "PKR 2,000/week for top-of-page property placement."
    },
    {
      title: "Matrimony Boost",
      desc: "156 matrimony profile views daily.",
      est: "PKR 8,000/mo",
      cat: "Matrimony",
      detail: "PKR 300/month for highlighted profile with badge."
    },
    {
      title: "Community Subscription",
      desc: "45 gated communities on platform.",
      est: "PKR 22,500/mo",
      cat: "Community",
      detail: "PKR 500/month per community for premium features."
    },
    {
      title: "Affiliate Commission Fee",
      desc: "Top 20 affiliates generating PKR 200K/mo traffic.",
      est: "PKR 10,000/mo",
      cat: "Affiliate",
      detail: "5% platform fee on affiliate-driven sales."
    },
    {
      title: "Sponsored Blog Posts",
      desc: "78 blogs published this month.",
      est: "PKR 8,500/mo",
      cat: "Blog",
      detail: "PKR 1,500 per sponsored blog placement."
    },
    {
      title: "POS Transaction Fee",
      desc: "234 POS transactions per day.",
      est: "PKR 35,000/mo",
      cat: "POS",
      detail: "0.5% platform fee on each completed POS sale."
    },
    {
      title: "Healthcare Booking Fee",
      desc: "45 advisor bookings this week.",
      est: "PKR 2,250/mo",
      cat: "Healthcare",
      detail: "PKR 50 per consultation booking platform fee."
    }
  ];
  const totalEst = "PKR 1,41,250";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-label font-semibold text-foreground mb-3", children: "Module Usage (Traffic Patterns)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: moduleUsage.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label text-foreground w-28 shrink-0", children: m.module }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-4 bg-secondary rounded overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-full rounded transition-all",
            style: {
              width: `${m.pct}%`,
              background: "oklch(0.55 0.22 280 / 0.6)",
              minWidth: "1rem"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] font-bold text-white px-1.5 leading-4 block", children: [
              m.pct,
              "%"
            ] })
          }
        ) })
      ] }, m.module)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-label", children: "Total Estimated Monthly Revenue (if all implemented)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-2xl font-display font-bold",
            style: { color: "oklch(0.52 0.14 155)" },
            children: totalEst
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { size: 32, style: { color: "oklch(0.52 0.14 155 / 0.4)" } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: suggestions.map((s, i) => {
      const status = suggestionStatus[i] ?? "pending";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-xl p-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SBadge, { label: s.cat, color: "violet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SBadge, { label: status, color: statusColorHelper(status) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground mb-0.5", children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mb-1", children: s.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: s.detail }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-sm font-display font-bold",
                  style: { color: "oklch(0.52 0.14 155)" },
                  children: s.est
                }
              ),
              status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ActionBtn,
                  {
                    label: "Approve",
                    color: "green",
                    onClick: () => setSuggestionStatus((p) => ({ ...p, [i]: "approved" }))
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ActionBtn,
                  {
                    label: "Defer",
                    color: "amber",
                    onClick: () => setSuggestionStatus((p) => ({ ...p, [i]: "deferred" }))
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ActionBtn,
                  {
                    label: "Reject",
                    color: "red",
                    onClick: () => setSuggestionStatus((p) => ({ ...p, [i]: "rejected" }))
                  }
                )
              ] })
            ] })
          ]
        },
        s.title
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground bg-secondary/40 rounded-lg px-3 py-2", children: [
      "🔗 ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Agent Network:" }),
      " Monitors all module activity patterns. Approved suggestions are sent to Agent 4 (Evolution) for inclusion in the next quarterly update. Uses Agent 15 (Analytics) data for traffic analysis."
    ] })
  ] });
}
function statusColorHelper(s) {
  if (["resolved", "approved", "active"].includes(s)) return "green";
  if (["reviewing", "pending", "deferred"].includes(s)) return "amber";
  if (["rejected", "critical", "escalated"].includes(s)) return "red";
  return "gray";
}
function Agent14Content() {
  const [activeFilter, setActiveFilter] = reactExports.useState("All");
  const [itemStatuses, setItemStatuses] = reactExports.useState({});
  const queue = [
    {
      type: "Image",
      module: "Social Feed",
      severity: "nudity",
      preview: "User-uploaded profile photo flagged by auto-scanner",
      status: "pending"
    },
    {
      type: "Post",
      module: "Blog",
      severity: "misinformation",
      preview: "Health supplement post with unverified medical claims about cancer cure",
      status: "pending"
    },
    {
      type: "Comment",
      module: "Jobs",
      severity: "hate-speech",
      preview: "Comment with discriminatory language in job application thread",
      status: "pending"
    },
    {
      type: "Profile",
      module: "Dating",
      severity: "nudity",
      preview: "Dating profile header image flagged for explicit content",
      status: "warned"
    },
    {
      type: "Post",
      module: "Community",
      severity: "spam",
      preview: "Same post content copied 14 times across different community feeds",
      status: "removed"
    },
    {
      type: "Image",
      module: "Products",
      severity: "misinformation",
      preview: "Product image claiming FDA approval without valid documentation",
      status: "pending"
    },
    {
      type: "Comment",
      module: "Social Feed",
      severity: "hate-speech",
      preview: "Comment using slurs targeting religious community",
      status: "warned"
    },
    {
      type: "Post",
      module: "Real Estate",
      severity: "spam",
      preview: "Same property listing copy-pasted 8 times with different prices",
      status: "removed"
    },
    {
      type: "Image",
      module: "Blog",
      severity: "violence",
      preview: "Thumbnail image with graphic violent content",
      status: "pending"
    },
    {
      type: "Profile",
      module: "Matrimony",
      severity: "nudity",
      preview: "Profile photo flagged in matrimony section",
      status: "pending"
    },
    {
      type: "Post",
      module: "Healthcare",
      severity: "misinformation",
      preview: "Post claiming homeopathy cures COVID-19 with no evidence",
      status: "pending"
    },
    {
      type: "Comment",
      module: "Education",
      severity: "hate-speech",
      preview: "Teacher comment using inappropriate language toward student in thread",
      status: "pending"
    },
    {
      type: "Image",
      module: "Travel",
      severity: "spam",
      preview: "AI-generated fake hotel photos used in travel package",
      status: "cleared"
    },
    {
      type: "Post",
      module: "Jobs",
      severity: "spam",
      preview: "Fake job listing requesting personal financial information upfront",
      status: "warned"
    },
    {
      type: "Comment",
      module: "Community",
      severity: "violence",
      preview: "Comment with threats against a community member",
      status: "pending"
    }
  ];
  const filters = [
    "All",
    "nudity",
    "violence",
    "hate-speech",
    "spam",
    "misinformation"
  ];
  const filtered = activeFilter === "All" ? queue : queue.filter((q) => q.severity === activeFilter);
  const dailyStats = [
    { label: "Items Reviewed", value: 23, color: "oklch(0.55 0.15 240)" },
    { label: "Removed", value: 8, color: "oklch(0.55 0.22 25)" },
    { label: "Warnings Issued", value: 11, color: "oklch(0.72 0.17 85)" },
    { label: "Accounts Escalated", value: 2, color: "oklch(0.65 0.25 335)" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: dailyStats.map(({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border rounded-xl p-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-display font-bold text-foreground", children: value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground font-label", children: label })
        ]
      },
      label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-label font-semibold text-foreground mb-2", children: "Auto-Warning Escalation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 flex-wrap", children: [
        {
          stage: "1st Flag",
          action: "Auto-warning sent to user",
          color: "oklch(0.72 0.17 85)"
        },
        { stage: "→", action: "", color: "transparent" },
        {
          stage: "2nd Flag",
          action: "7-day restriction applied",
          color: "oklch(0.65 0.25 335)"
        },
        { stage: "→", action: "", color: "transparent" },
        {
          stage: "3rd Flag",
          action: "Escalated to admin review",
          color: "oklch(0.55 0.22 25)"
        }
      ].map(
        (s) => s.action ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "text-center px-3 py-2 rounded-lg border",
            style: {
              borderColor: `${s.color}40`,
              background: `${s.color}10`
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-[11px] font-label font-bold",
                  style: { color: s.color },
                  children: s.stage
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: s.action })
            ]
          },
          s.stage
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: "→" }, s.stage)
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 flex-wrap", children: filters.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setActiveFilter(f),
        className: `text-[11px] font-label px-2.5 py-1 rounded-full border capitalize transition-all ${activeFilter === f ? "text-white border-transparent" : "text-muted-foreground border-border"}`,
        style: activeFilter === f ? { background: "oklch(0.55 0.22 280)" } : {},
        children: f
      },
      f
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Module" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Severity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Preview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: filtered.map((item, i) => {
        const status = itemStatuses[i] ?? item.status;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: "hover:bg-secondary/20 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SBadge, { label: item.type, color: "gray" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SBadge, { label: item.module, color: "blue" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                SBadge,
                {
                  label: item.severity,
                  color: item.severity === "nudity" || item.severity === "violence" ? "red" : item.severity === "hate-speech" ? "rose" : item.severity === "spam" ? "amber" : "gray"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "line-clamp-1 max-w-[200px] block text-[11px] text-muted-foreground", children: item.preview }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                SBadge,
                {
                  label: status,
                  color: status === "removed" ? "red" : status === "warned" ? "amber" : status === "cleared" ? "green" : "gray"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ActionBtn,
                  {
                    label: "Approve",
                    color: "green",
                    onClick: () => setItemStatuses((p) => ({ ...p, [i]: "cleared" }))
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ActionBtn,
                  {
                    label: "Remove",
                    color: "red",
                    onClick: () => setItemStatuses((p) => ({ ...p, [i]: "removed" }))
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ActionBtn,
                  {
                    label: "Warn",
                    color: "amber",
                    onClick: () => setItemStatuses((p) => ({ ...p, [i]: "warned" }))
                  }
                )
              ] }) })
            ]
          },
          item.preview
        );
      }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground bg-secondary/40 rounded-lg px-3 py-2", children: [
      "🔗 ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Agent Network:" }),
      " Reports severity-3 cases (violence/nudity) to Agent 1 (Moderation) for immediate user blocking. Feeds pattern data to Agent 6 (Security) for threat intelligence."
    ] })
  ] });
}
function Agent15Analytics() {
  const moduleEngagement = [
    { module: "Social Feed", pct: 94 },
    { module: "Family Tree", pct: 88 },
    { module: "Jobs", pct: 82 },
    { module: "Community", pct: 75 },
    { module: "Products", pct: 71 },
    { module: "Real Estate", pct: 65 },
    { module: "Matrimony", pct: 61 },
    { module: "Healthcare", pct: 55 },
    { module: "Geomap", pct: 52 },
    { module: "Travel", pct: 48 },
    { module: "Blog", pct: 44 },
    { module: "Education", pct: 41 },
    { module: "Dating", pct: 38 },
    { module: "Gated Community", pct: 35 }
  ];
  const ageData = [
    { group: "18–24", pct: 28 },
    { group: "25–34", pct: 34 },
    { group: "35–44", pct: 22 },
    { group: "45–54", pct: 11 },
    { group: "55+", pct: 5 }
  ];
  const locationData = [
    { city: "Lahore", users: 412, topModule: "Jobs", trend: "↑" },
    { city: "Karachi", users: 318, topModule: "Real Estate", trend: "↑" },
    { city: "Islamabad", users: 241, topModule: "Community", trend: "↑" },
    { city: "Rawalpindi", users: 134, topModule: "Jobs", trend: "→" },
    { city: "Faisalabad", users: 89, topModule: "Products", trend: "↑" },
    { city: "Peshawar", users: 62, topModule: "Jobs", trend: "→" },
    { city: "Quetta", users: 41, topModule: "Family Tree", trend: "↑" },
    { city: "Dubai", users: 38, topModule: "Real Estate", trend: "↑" },
    { city: "London", users: 27, topModule: "Matrimony", trend: "→" },
    { city: "Toronto", users: 19, topModule: "Matrimony", trend: "↑" }
  ];
  const featureDemand = [
    { feature: "Mobile App (iOS/Android)", votes: 892, trending: true },
    { feature: "Video Feed (Reels-style)", votes: 634, trending: true },
    { feature: "Voice/Video Calls", votes: 521, trending: false },
    { feature: "Offline Mode", votes: 389, trending: false },
    { feature: "Multi-language Support (Urdu)", votes: 341, trending: true },
    { feature: "AI Match Suggestions", votes: 298, trending: true },
    { feature: "Push Notifications", votes: 267, trending: false },
    { feature: "Dark Mode for Geomap", votes: 234, trending: false }
  ];
  const milestones = [
    {
      version: "v1.0",
      date: "Jan 2026",
      users: 120,
      note: "Family Tree + Social Feed launch"
    },
    {
      version: "v2.0",
      date: "Feb 2026",
      users: 384,
      note: "Geomap, Real Estate, Healthcare activated"
    },
    {
      version: "v3.0",
      date: "Feb 2026",
      users: 712,
      note: "Education, Jobs, Blog & Affiliate added"
    },
    {
      version: "v4.0",
      date: "Mar 2026",
      users: 1089,
      note: "Matrimony, Dating, Gated Community"
    },
    {
      version: "v5.0",
      date: "Mar 2026",
      users: 1247,
      note: "16 Agents + Admin Panel fully live"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-5 gap-3", children: [
      { label: "Total Users", value: "1,247" },
      { label: "DAU", value: "342" },
      { label: "WAU", value: "891" },
      { label: "MAU", value: "1,089" },
      { label: "New This Month", value: "156" }
    ].map(({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border rounded-xl p-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-display font-bold text-foreground", children: value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground font-label", children: label })
        ]
      },
      label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-label font-semibold text-foreground mb-3", children: "Module Engagement" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: moduleEngagement.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-label text-foreground w-28 shrink-0", children: m.module }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-3.5 bg-secondary rounded overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-full rounded",
              style: {
                width: `${m.pct}%`,
                background: "oklch(0.55 0.22 280 / 0.6)"
              }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground w-8 text-right", children: [
            m.pct,
            "%"
          ] })
        ] }, m.module)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-label font-semibold text-foreground mb-3", children: "Age-wise Interest" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: ageData.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label text-foreground w-14 shrink-0", children: a.group }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-5 bg-secondary rounded overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-full rounded flex items-center px-2 transition-all",
                style: {
                  width: `${a.pct * 2.5}%`,
                  background: "oklch(0.65 0.25 335 / 0.6)",
                  minWidth: "2rem"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-bold text-white", children: [
                  a.pct,
                  "%"
                ] })
              }
            ) })
          ] }, a.group)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-label font-semibold text-foreground mb-3", children: "Platform Milestones" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: milestones.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-3 py-1 border-b border-border/30 last:border-0",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-[10px] font-mono font-bold text-white px-1.5 py-0.5 rounded",
                    style: { background: "oklch(0.55 0.22 280)" },
                    children: m.version
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-label text-foreground truncate", children: m.note }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", children: [
                    m.date,
                    " · ",
                    m.users.toLocaleString(),
                    " users"
                  ] })
                ] })
              ]
            },
            m.version
          )) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-label font-semibold text-foreground", children: "Location-wise Interest" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "City" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Users" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Top Module" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Trend" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: locationData.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: "hover:bg-secondary/20 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-medium", children: l.city }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: l.users }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SBadge, { label: l.topModule, color: "violet" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                TD,
                {
                  className: l.trend === "↑" ? "text-green-600" : "text-muted-foreground",
                  children: l.trend
                }
              )
            ]
          },
          l.city
        )) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-label font-semibold text-foreground", children: "Feature Demand (Surveys & Votes)" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Feature" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Votes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Trending" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: featureDemand.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: "hover:bg-secondary/20 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-medium", children: f.feature }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: f.votes.toLocaleString() }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: f.trending ? /* @__PURE__ */ jsxRuntimeExports.jsx(SBadge, { label: "🔥 Trending", color: "rose" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(SBadge, { label: "Stable", color: "gray" }) })
            ]
          },
          f.feature
        )) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground bg-secondary/40 rounded-lg px-3 py-2", children: [
      "🔗 ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Agent Network:" }),
      " Feeds demographics to Agent 11 (Fake Users) for realistic simulation. Sends engagement patterns to Agent 13 (Monetization). Feature demand data fed to Agent 16 (Tips) for contextual tips."
    ] })
  ] });
}
function Agent16Tips() {
  const [selectedModule, setSelectedModule] = reactExports.useState("social-feed");
  const [newTip, setNewTip] = reactExports.useState({
    title: "",
    content: "",
    type: "info"
  });
  const modules = [
    "family-tree",
    "social-feed",
    "jobs",
    "healthcare",
    "real-estate",
    "education",
    "travel",
    "blog",
    "products",
    "community",
    "matrimony",
    "dating",
    "dashboard",
    "admin-panel"
  ];
  const tipStats = [
    {
      module: "Social Feed",
      active: 5,
      shown: 1420,
      dismissed: 312,
      ctr: "22%"
    },
    {
      module: "Family Tree",
      active: 5,
      shown: 1180,
      dismissed: 289,
      ctr: "24%"
    },
    { module: "Jobs", active: 4, shown: 980, dismissed: 198, ctr: "20%" },
    { module: "Healthcare", active: 3, shown: 741, dismissed: 167, ctr: "23%" },
    {
      module: "Real Estate",
      active: 3,
      shown: 612,
      dismissed: 142,
      ctr: "23%"
    },
    { module: "Travel", active: 3, shown: 488, dismissed: 98, ctr: "20%" }
  ];
  const [globalSettings, setGlobalSettings] = reactExports.useState({
    showOnFirstVisit: true,
    showOnNavigation: false,
    autoDismiss: 30
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-label font-semibold text-foreground mb-3", children: "Global Tip Settings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label text-foreground", children: "Show tips on first visit" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Switch,
              {
                checked: globalSettings.showOnFirstVisit,
                onCheckedChange: (v) => setGlobalSettings((p) => ({ ...p, showOnFirstVisit: v }))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label text-foreground", children: "Show tips on navigation change" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Switch,
              {
                checked: globalSettings.showOnNavigation,
                onCheckedChange: (v) => setGlobalSettings((p) => ({ ...p, showOnNavigation: v }))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label text-foreground", children: "Auto-dismiss after (seconds)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "range",
                  min: 5,
                  max: 120,
                  value: globalSettings.autoDismiss,
                  onChange: (e) => setGlobalSettings((p) => ({
                    ...p,
                    autoDismiss: Number(e.target.value)
                  })),
                  className: "w-20 accent-violet-600"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-label text-foreground w-8", children: [
                globalSettings.autoDismiss,
                "s"
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-label font-semibold text-foreground mb-3", children: "Add New Tip" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "select",
            {
              value: selectedModule,
              onChange: (e) => setSelectedModule(e.target.value),
              className: "w-full text-xs font-label bg-secondary/60 border border-border rounded-lg px-2 py-1.5 text-foreground",
              children: modules.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: m, children: m.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ") }, m))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: "Tip title",
              value: newTip.title,
              onChange: (e) => setNewTip((p) => ({ ...p, title: e.target.value })),
              className: "w-full text-xs font-label bg-secondary/60 border border-border rounded-lg px-2 py-1.5 text-foreground placeholder:text-muted-foreground focus:outline-none"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              placeholder: "Tip content...",
              value: newTip.content,
              onChange: (e) => setNewTip((p) => ({ ...p, content: e.target.value })),
              rows: 2,
              className: "w-full text-xs font-label bg-secondary/60 border border-border rounded-lg px-2 py-1.5 text-foreground placeholder:text-muted-foreground focus:outline-none resize-none"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "select",
              {
                value: newTip.type,
                onChange: (e) => setNewTip((p) => ({ ...p, type: e.target.value })),
                className: "flex-1 text-xs font-label bg-secondary/60 border border-border rounded-lg px-2 py-1.5 text-foreground",
                children: ["info", "feature", "shortcut", "warning"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: t, children: t }, t))
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                className: "text-xs",
                style: { background: "oklch(0.55 0.22 280)", color: "white" },
                onClick: () => {
                  ue.success("Tip added successfully");
                  setNewTip({ title: "", content: "", type: "info" });
                },
                children: "Add Tip"
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-label font-semibold text-foreground", children: "Tip Engagement Stats" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Module" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Tips Active" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Shown" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Dismissed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Click-through" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: tipStats.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: "hover:bg-secondary/20 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-medium", children: t.module }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "text-center", children: t.active }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: t.shown.toLocaleString() }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: t.dismissed }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  style: { color: "oklch(0.52 0.14 155)" },
                  className: "font-label font-bold",
                  children: t.ctr
                }
              ) })
            ]
          },
          t.module
        )) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground bg-secondary/40 rounded-lg px-3 py-2", children: [
      "🔗 ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Agent Network:" }),
      " Tip content is updated by Agent 4 (Evolution) based on user behavior patterns. New feature tips generated from Agent 15 (Analytics) feature demand data."
    ] })
  ] });
}
function AgentFactory() {
  const ALL_MODULES = [
    "Family Tree",
    "Social Feed",
    "Jobs",
    "Healthcare",
    "Real Estate",
    "Education",
    "Travel",
    "Blog",
    "Products",
    "Community",
    "Matrimony",
    "Dating",
    "Dashboard",
    "Gated Community"
  ];
  const [newAgent, setNewAgent] = reactExports.useState({
    name: "",
    desc: "",
    freq: "Daily",
    priority: "Medium",
    modules: [],
    icPrefix: false,
    isPersonalBot: false,
    assignedUser: "",
    parentAgent: ""
  });
  const [customAgents, setCustomAgents] = reactExports.useState([
    {
      name: "PriceWatch Agent",
      desc: "Monitors product prices across the marketplace and alerts admin when unusual spikes detected.",
      freq: "Hourly",
      priority: "High",
      modules: ["Products", "Blog", "Affiliate"],
      active: true,
      created: "Feb 20, 2026",
      log: "Last run: 1h ago — 12 prices flagged for review"
    },
    {
      name: "Birthday Reminder Agent",
      desc: "Checks family tree DOBs daily and sends birthday reminder notifications to connected members.",
      freq: "Daily",
      priority: "Medium",
      modules: ["Family Tree", "Social Feed"],
      active: true,
      created: "Feb 15, 2026",
      log: "Last run: 8 AM — 2 birthdays detected today"
    },
    {
      name: "Inventory Alert Agent",
      desc: "Monitors product stock levels and alerts sellers when stock drops below threshold.",
      freq: "Hourly",
      priority: "High",
      modules: ["Products", "POS"],
      active: false,
      created: "Feb 10, 2026",
      log: "Agent paused by admin on Feb 28, 2026"
    }
  ]);
  const [agentLog, setAgentLog] = reactExports.useState([
    {
      name: "PriceWatch Agent",
      createdBy: "Admin",
      created: "Feb 20, 2026",
      status: "running"
    },
    {
      name: "Birthday Reminder Agent",
      createdBy: "Admin",
      created: "Feb 15, 2026",
      status: "running"
    },
    {
      name: "Inventory Alert Agent",
      createdBy: "Admin",
      created: "Feb 10, 2026",
      status: "paused"
    }
  ]);
  const toggleModule = (m) => {
    setNewAgent((p) => ({
      ...p,
      modules: p.modules.includes(m) ? p.modules.filter((x) => x !== m) : [...p.modules, m]
    }));
  };
  const createAgent = () => {
    if (!newAgent.name || !newAgent.desc) {
      ue.error("Name and description are required");
      return;
    }
    const agent = {
      name: newAgent.name,
      desc: newAgent.desc,
      freq: newAgent.freq,
      priority: newAgent.priority,
      modules: newAgent.modules,
      active: true,
      created: "Mar 1, 2026",
      log: "Agent created — awaiting first run"
    };
    setCustomAgents((p) => [...p, agent]);
    setAgentLog((p) => [
      ...p,
      {
        name: newAgent.name,
        createdBy: "Admin",
        created: "Mar 1, 2026",
        status: "running"
      }
    ]);
    setNewAgent({
      name: "",
      desc: "",
      freq: "Daily",
      priority: "Medium",
      modules: [],
      icPrefix: false,
      isPersonalBot: false,
      assignedUser: "",
      parentAgent: ""
    });
    ue.success(`Agent "${newAgent.name}" created and started`);
  };
  const agentConnections = [
    { from: "A5: Legal", to: "A4: Evolution", label: "Legal updates" },
    { from: "A1: Moderation", to: "A6: Security", label: "Blocked users" },
    { from: "A3: API Sync", to: "A7: Images", label: "Product data" },
    { from: "A14: Content", to: "A1: Moderation", label: "Content flags" },
    { from: "A8: SEO", to: "A9: Sharing", label: "OG metadata" },
    { from: "A13: Monetize", to: "A4: Evolution", label: "Revenue ideas" },
    { from: "A15: Analytics", to: "A13: Monetize", label: "Traffic data" },
    { from: "A16: Tips", to: "A4: Evolution", label: "User patterns" },
    { from: "A11: FakeUsers", to: "A15: Analytics", label: "Bot traffic" },
    { from: "A12: WhatsApp", to: "A15: Analytics", label: "Engagement" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-label font-semibold text-foreground mb-3", children: "Create New Agent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-label text-muted-foreground mb-1", children: "Agent Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "agent-name",
                type: "text",
                placeholder: "e.g. Price Drop Alert Agent",
                value: newAgent.name,
                onChange: (e) => setNewAgent((p) => ({ ...p, name: e.target.value })),
                className: "w-full text-xs font-label bg-secondary/60 border border-border rounded-lg px-2 py-1.5 text-foreground placeholder:text-muted-foreground focus:outline-none"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-label text-muted-foreground mb-1", children: "Run Frequency" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "select",
                {
                  id: "agent-freq",
                  value: newAgent.freq,
                  onChange: (e) => setNewAgent((p) => ({ ...p, freq: e.target.value })),
                  className: "w-full text-xs font-label bg-secondary/60 border border-border rounded-lg px-2 py-1.5 text-foreground",
                  children: ["Real-time", "Hourly", "Daily", "Weekly", "Quarterly"].map(
                    (f) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: f }, f)
                  )
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-label text-muted-foreground mb-1", children: "Priority" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "select",
                {
                  id: "agent-priority",
                  value: newAgent.priority,
                  onChange: (e) => setNewAgent((p) => ({ ...p, priority: e.target.value })),
                  className: "w-full text-xs font-label bg-secondary/60 border border-border rounded-lg px-2 py-1.5 text-foreground",
                  children: ["Low", "Medium", "High", "Critical"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: f }, f))
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            placeholder: "Describe the agent's purpose and what it should monitor or do...",
            value: newAgent.desc,
            onChange: (e) => setNewAgent((p) => ({ ...p, desc: e.target.value })),
            rows: 2,
            className: "w-full text-xs font-label bg-secondary/60 border border-border rounded-lg px-2 py-1.5 text-foreground placeholder:text-muted-foreground focus:outline-none resize-none"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-label text-muted-foreground mb-1.5", children: "Target Modules" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: ALL_MODULES.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => toggleModule(m),
              className: `text-[11px] font-label px-2 py-0.5 rounded-full border transition-all ${newAgent.modules.includes(m) ? "text-white border-transparent" : "text-muted-foreground border-border hover:border-foreground/30"}`,
              style: newAgent.modules.includes(m) ? { background: "oklch(0.52 0.14 155)" } : {},
              children: m
            },
            m
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            onClick: createAgent,
            className: "gap-1.5 text-xs",
            style: { background: "oklch(0.55 0.22 280)", color: "white" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Factory, { size: 14 }),
              " Create Agent"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: customAgents.map((agent, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border rounded-xl p-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground", children: agent.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: agent.created })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Switch,
              {
                checked: agent.active,
                onCheckedChange: (v) => setCustomAgents(
                  (prev) => prev.map((a, j) => j === i ? { ...a, active: v } : a)
                )
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mb-2 line-clamp-2", children: agent.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-0.5 mb-2", children: [
            agent.modules.slice(0, 3).map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(SBadge, { label: m, color: "blue" }, m)),
            agent.modules.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsx(SBadge, { label: `+${agent.modules.length - 3}`, color: "gray" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SBadge, { label: agent.freq, color: "violet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SBadge,
                {
                  label: agent.priority,
                  color: agent.priority === "High" || agent.priority === "Critical" ? "red" : "gray"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "text-[10px] text-muted-foreground hover:text-foreground flex items-center gap-1",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { size: 11 }),
                  " Settings"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-2 border-t border-border/30 pt-1.5", children: agent.log })
        ]
      },
      agent.name
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-label font-semibold text-foreground mb-3", children: "Agent Network Diagram" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2", children: agentConnections.map((conn) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex items-center gap-2 bg-secondary/30 rounded-xl px-3 py-2",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-label font-bold text-foreground", children: conn.from }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-muted-foreground", children: conn.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "p",
              {
                className: "text-[10px] font-label font-bold",
                style: { color: "oklch(0.52 0.14 155)" },
                children: [
                  "→ ",
                  conn.to
                ]
              }
            )
          ] })
        },
        conn.from + conn.to
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-label font-semibold text-foreground", children: "Agent Factory Log" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Agent Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Created By" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Created Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Status" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: agentLog.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: "hover:bg-secondary/20 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-medium", children: l.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "text-muted-foreground", children: l.createdBy }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "text-muted-foreground", children: l.created }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                SBadge,
                {
                  label: l.status,
                  color: l.status === "running" ? "green" : "amber"
                }
              ) })
            ]
          },
          l.name
        )) })
      ] }) })
    ] })
  ] });
}
function ModuleActions() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        className: "p-1 rounded hover:bg-secondary/60 text-muted-foreground transition-colors",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ellipsis, { size: 14 })
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { className: "w-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { className: "text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 12, className: "mr-1.5" }),
        " View"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { className: "text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 12, className: "mr-1.5" }),
        " Edit"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { className: "text-xs text-destructive focus:text-destructive", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12, className: "mr-1.5" }),
        " Delete"
      ] })
    ] })
  ] }) });
}
function SocialMediaQueue() {
  const [items, setItems] = reactExports.useState([
    {
      id: 1,
      preview: "Check out our new organic honey range — now 20% off!",
      platforms: ["Instagram", "Facebook", "Twitter/X"],
      user: "Priya S.",
      date: "13 Mar 2026",
      status: "pending"
    },
    {
      id: 2,
      preview: "Just listed: 3BHK in Bandra West with sea view.",
      platforms: ["Facebook", "Twitter/X"],
      user: "Rahul V.",
      date: "12 Mar 2026",
      status: "pending"
    },
    {
      id: 3,
      preview: "Calling all foodies! Our weekend food festival is on March 20th.",
      platforms: ["Instagram", "Pinterest", "Twitter/X"],
      user: "Anita K.",
      date: "11 Mar 2026",
      status: "approved"
    }
  ]);
  const [platformConnected, setPlatformConnected] = reactExports.useState({});
  const [platformKeys, setPlatformKeys] = reactExports.useState({});
  const [composeText, setComposeText] = reactExports.useState("");
  const [composeChecked, setComposeChecked] = reactExports.useState(
    {}
  );
  const [scheduleDate, setScheduleDate] = reactExports.useState("");
  const ALL_PLATFORMS = [
    { name: "Instagram", icon: "📸", color: "oklch(0.65 0.25 335)" },
    { name: "Facebook", icon: "📘", color: "oklch(0.52 0.18 260)" },
    { name: "YouTube", icon: "▶️", color: "oklch(0.55 0.22 22)" },
    { name: "LinkedIn", icon: "💼", color: "oklch(0.48 0.18 245)" },
    { name: "Twitter/X", icon: "🐦", color: "oklch(0.30 0.05 230)" },
    { name: "Pinterest", icon: "📌", color: "oklch(0.52 0.22 12)" },
    { name: "Google Shopping", icon: "🛒", color: "oklch(0.55 0.22 155)" },
    { name: "Google Events", icon: "📅", color: "oklch(0.52 0.20 100)" },
    { name: "Snapchat", icon: "👻", color: "oklch(0.85 0.20 88)" },
    { name: "Telegram", icon: "✈️", color: "oklch(0.55 0.18 240)" }
  ];
  const BOOST_PLANS = [
    {
      name: "Basic Boost",
      price: "₹299",
      platforms: "1 platform",
      duration: "3 days",
      color: "oklch(0.52 0.14 155)"
    },
    {
      name: "Standard Boost",
      price: "₹799",
      platforms: "3 platforms",
      duration: "7 days",
      color: "oklch(0.55 0.22 280)",
      badge: "Popular"
    },
    {
      name: "Premium Boost",
      price: "₹2,499",
      platforms: "All platforms + Google",
      duration: "30 days",
      color: "oklch(0.65 0.25 335)"
    }
  ];
  const approve = (id) => {
    setItems(
      (prev) => prev.map(
        (i) => i.id === id ? { ...i, status: "approved" } : i
      )
    );
    ue.success("Post approved and shared");
  };
  const reject = (id) => {
    setItems(
      (prev) => prev.map(
        (i) => i.id === id ? { ...i, status: "rejected" } : i
      )
    );
    ue.error("Post rejected");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border rounded-xl p-4 space-y-4",
        "data-ocid": "admin.social_queue.panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Platform Connections" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3", children: ALL_PLATFORMS.map((platform) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "border border-border rounded-xl p-3 space-y-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium", children: [
                    platform.icon,
                    " ",
                    platform.name
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `text-[10px] px-1.5 py-0.5 rounded-full font-medium ${platformConnected[platform.name] ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-secondary text-muted-foreground"}`,
                        children: platformConnected[platform.name] ? "Connected" : "Not Connected"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Switch,
                      {
                        checked: !!platformConnected[platform.name],
                        onCheckedChange: (v) => setPlatformConnected((p) => ({
                          ...p,
                          [platform.name]: v
                        })),
                        "data-ocid": `admin.social_queue.${platform.name.toLowerCase().replace(/[^a-z0-9]/g, "_")}.toggle`
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    className: "h-7 text-xs",
                    placeholder: "API Key / Access Token",
                    value: platformKeys[platform.name] ?? "",
                    onChange: (e) => setPlatformKeys((p) => ({
                      ...p,
                      [platform.name]: e.target.value
                    })),
                    "data-ocid": `admin.social_queue.${platform.name.toLowerCase().replace(/[^a-z0-9]/g, "_")}.input`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    className: "w-full h-7 text-xs",
                    variant: platformConnected[platform.name] ? "default" : "outline",
                    onClick: () => {
                      if (!platformKeys[platform.name]) {
                        ue.error("Enter API key first");
                        return;
                      }
                      setPlatformConnected((p) => ({
                        ...p,
                        [platform.name]: true
                      }));
                      ue.success(`${platform.name} connected successfully`);
                    },
                    "data-ocid": `admin.social_queue.${platform.name.toLowerCase().replace(/[^a-z0-9]/g, "_")}.primary_button`,
                    children: platformConnected[platform.name] ? "✓ Connected" : "Connect"
                  }
                )
              ]
            },
            platform.name
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Compose & Schedule" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Textarea,
        {
          className: "text-xs",
          placeholder: "Write your post content...",
          rows: 3,
          value: composeText,
          onChange: (e) => setComposeText(e.target.value),
          "data-ocid": "admin.social_queue.compose.textarea"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: ALL_PLATFORMS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "label",
        {
          className: "flex items-center gap-1.5 text-xs cursor-pointer",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "checkbox",
                checked: !!composeChecked[p.name],
                onChange: (e) => setComposeChecked((prev) => ({
                  ...prev,
                  [p.name]: e.target.checked
                })),
                className: "rounded"
              }
            ),
            p.icon,
            " ",
            p.name
          ]
        },
        p.name
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs shrink-0", children: "Schedule:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "datetime-local",
            className: "h-8 text-xs flex-1",
            value: scheduleDate,
            onChange: (e) => setScheduleDate(e.target.value),
            "data-ocid": "admin.social_queue.schedule.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            className: "flex-1",
            onClick: () => {
              if (!composeText.trim()) {
                ue.error("Post content required");
                return;
              }
              const newItem = {
                id: Date.now(),
                preview: composeText,
                platforms: Object.keys(composeChecked).filter(
                  (k) => composeChecked[k]
                ),
                user: "Admin",
                date: (/* @__PURE__ */ new Date()).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric"
                }),
                status: "pending"
              };
              setItems((p) => [newItem, ...p]);
              setComposeText("");
              setComposeChecked({});
              ue.success("Post added to queue");
            },
            "data-ocid": "admin.social_queue.add.primary_button",
            children: "Schedule Post"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            variant: "outline",
            onClick: () => ue.success("Preview generated"),
            "data-ocid": "admin.social_queue.secondary_button",
            children: "Preview"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Boost & Promote Plans" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Users pay to boost posts across social platforms and search engines." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: BOOST_PLANS.map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "border border-border rounded-xl p-4 space-y-3 relative",
          children: [
            "badge" in plan && plan.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-full font-bold bg-primary text-primary-foreground", children: plan.badge }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "text-base font-bold",
                style: { color: plan.color },
                children: plan.name
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold", children: plan.price }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                "📱 ",
                plan.platforms
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                "⏱ ",
                plan.duration
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "w-full text-xs",
                onClick: () => ue.success(`${plan.name} plan updated`),
                "data-ocid": "admin.social_queue.boost.edit_button",
                children: "Edit Pricing"
              }
            )
          ]
        },
        plan.name
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Scheduled Posts" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Post Preview" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Platforms" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "User" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: "border-b border-border/50 hover:bg-secondary/20",
            "data-ocid": `admin.social_queue.row.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "max-w-[200px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate", children: item.preview }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: item.platforms.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-[10px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary",
                  children: p
                },
                p
              )) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: item.user }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "text-muted-foreground", children: item.date }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                SBadge,
                {
                  label: item.status,
                  color: item.status === "approved" ? "green" : item.status === "rejected" ? "red" : "amber"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: item.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-7 text-xs text-green-600",
                    onClick: () => approve(item.id),
                    "data-ocid": `admin.social_queue.confirm_button.${i + 1}`,
                    children: "Approve"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-7 text-xs text-destructive",
                    onClick: () => reject(item.id),
                    "data-ocid": `admin.social_queue.delete_button.${i + 1}`,
                    children: "Reject"
                  }
                )
              ] }) })
            ]
          },
          item.id
        )) })
      ] })
    ] })
  ] });
}
function PromotionsQueue() {
  const [activeTab, setActiveTab] = React.useState("plans");
  const [plans, setPlans] = React.useState([
    {
      id: 1,
      name: "Basic",
      price: "₹499",
      duration: "7 days",
      scope: "City-level",
      features: ["Shop listing boost", "1 image", "500 impressions"],
      color: "oklch(0.52 0.14 155)",
      active: true
    },
    {
      id: 2,
      name: "Standard",
      price: "₹1,499",
      duration: "15 days",
      scope: "State-level",
      features: [
        "Priority listing",
        "3 images",
        "WhatsApp blast",
        "5,000 impressions"
      ],
      color: "oklch(0.55 0.22 280)",
      active: true,
      badge: "Popular"
    },
    {
      id: 3,
      name: "Premium",
      price: "₹4,999",
      duration: "30 days",
      scope: "National",
      features: [
        "Top placement",
        "Video support",
        "WhatsApp + Social push",
        "Google Shopping",
        "50,000 impressions"
      ],
      color: "oklch(0.65 0.25 335)",
      active: true
    }
  ]);
  const [modItems] = React.useState([
    {
      id: 1,
      advertiser: "Sharma Spices",
      title: "Masala Fest Sale 50% Off",
      adCopy: "Buy 2 get 1 free on all masalas — limited time!",
      channels: ["WhatsApp", "Instagram"],
      region: "Mumbai",
      aiResult: "Safe",
      plan: "Standard",
      color: "oklch(0.52 0.14 155 / 0.3)"
    },
    {
      id: 2,
      advertiser: "TechFix Mumbai",
      title: "Free Screen Protector Offer",
      adCopy: "Free screen protector with every repair this week",
      channels: ["Facebook"],
      region: "Pune",
      aiResult: "Safe",
      plan: "Basic",
      color: "oklch(0.55 0.22 280 / 0.3)"
    },
    {
      id: 3,
      advertiser: "Unknown Business",
      title: "Adults Only Content",
      adCopy: "18+ entertainment and adult services...",
      channels: ["Social Feed"],
      region: "Delhi",
      aiResult: "Flagged for Nudity",
      plan: "Basic",
      color: "oklch(0.55 0.22 22 / 0.3)"
    },
    {
      id: 4,
      advertiser: "Green Leaf Nursery",
      title: "Summer Plant Festival",
      adCopy: "40% off indoor plants + free delivery this summer!",
      channels: ["WhatsApp", "Instagram", "Facebook"],
      region: "Bangalore",
      aiResult: "Safe",
      plan: "Premium",
      color: "oklch(0.52 0.14 155 / 0.3)"
    }
  ]);
  const [activePromos, setActivePromos] = React.useState([
    {
      id: 1,
      title: "Mumbai Bites Food Festival",
      advertiser: "Mumbai Bites",
      plan: "Premium",
      channels: ["WhatsApp", "Instagram", "Facebook"],
      region: "Mumbai",
      start: "1 Mar 2026",
      end: "30 Mar 2026",
      impressions: 34520,
      status: "active"
    },
    {
      id: 2,
      title: "Sharma Spices Masala Dhamaka",
      advertiser: "Sharma Spices",
      plan: "Standard",
      channels: ["WhatsApp", "Social Feed"],
      region: "Delhi",
      start: "15 Mar 2026",
      end: "30 Mar 2026",
      impressions: 8240,
      status: "active"
    },
    {
      id: 3,
      title: "TechFix Repair Offer",
      advertiser: "TechFix Solutions",
      plan: "Basic",
      channels: ["Facebook"],
      region: "Pune",
      start: "10 Mar 2026",
      end: "17 Mar 2026",
      impressions: 1205,
      status: "paused"
    }
  ]);
  const [modActionId, setModActionId] = React.useState(null);
  const [rejectReason, setRejectReason] = React.useState("");
  const [modStatuses, setModStatuses] = React.useState({});
  const [editingPlan, setEditingPlan] = React.useState(null);
  const AIResultColor = (r) => {
    if (r === "Safe")
      return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
    return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "admin.promotions.panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-3", children: [
      {
        label: "Revenue This Month",
        value: "₹38,200",
        icon: "💰",
        color: "oklch(0.52 0.14 155)"
      },
      {
        label: "Active Promotions",
        value: String(
          activePromos.filter((p) => p.status === "active").length
        ),
        icon: "📣",
        color: "oklch(0.55 0.22 280)"
      },
      {
        label: "Pending Approval",
        value: String(modItems.filter((m) => !modStatuses[m.id]).length),
        icon: "⏳",
        color: "oklch(0.72 0.17 85)"
      },
      {
        label: "Flagged by AI",
        value: String(modItems.filter((m) => m.aiResult !== "Safe").length),
        icon: "🚩",
        color: "oklch(0.55 0.22 22)"
      },
      {
        label: "Approved Today",
        value: String(
          Object.values(modStatuses).filter((s) => s === "approved").length
        ),
        icon: "✅",
        color: "oklch(0.52 0.14 155)"
      }
    ].map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-card border border-border rounded-xl p-3 text-center",
        "data-ocid": `admin.promotions.stat.card.${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-1", children: stat.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold", style: { color: stat.color }, children: stat.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: stat.label })
        ]
      },
      stat.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "plans",
            className: "text-xs",
            "data-ocid": "admin.promotions.plans.tab",
            children: "Plans"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: "moderation",
            className: "text-xs",
            "data-ocid": "admin.promotions.moderation.tab",
            children: [
              "Moderation Queue",
              " ",
              modItems.filter((m) => !modStatuses[m.id]).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-[9px] px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-500 font-bold", children: modItems.filter((m) => !modStatuses[m.id]).length })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "active",
            className: "text-xs",
            "data-ocid": "admin.promotions.active.tab",
            children: "Active Promotions"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "create",
            className: "text-xs",
            "data-ocid": "admin.promotions.create.tab",
            children: "Create Preview"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "plans", className: "mt-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: plans.map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "border border-border rounded-xl p-5 space-y-4 relative",
            "data-ocid": `admin.promotions.plan.row.${plan.id}`,
            children: [
              "badge" in plan && plan.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-full font-bold bg-primary text-primary-foreground", children: plan.badge }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-lg font-bold",
                    style: { color: plan.color },
                    children: plan.name
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Switch,
                  {
                    checked: plan.active,
                    onCheckedChange: (v) => setPlans(
                      (p) => p.map(
                        (pl) => pl.id === plan.id ? { ...pl, active: v } : pl
                      )
                    ),
                    "data-ocid": `admin.promotions.plan.toggle.${plan.id}`
                  }
                )
              ] }),
              editingPlan === plan.id ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    className: "h-8 text-xs",
                    defaultValue: plan.price,
                    placeholder: "Price (e.g. ₹499)"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      className: "flex-1 text-xs",
                      onClick: () => {
                        setEditingPlan(null);
                        ue.success("Plan updated");
                      },
                      "data-ocid": `admin.promotions.plan.save_button.${plan.id}`,
                      children: "Save"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      className: "text-xs",
                      onClick: () => setEditingPlan(null),
                      "data-ocid": `admin.promotions.plan.cancel_button.${plan.id}`,
                      children: "Cancel"
                    }
                  )
                ] })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold", children: plan.price }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground space-y-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    "⏱ ",
                    plan.duration
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    "🗺️ ",
                    plan.scope
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: plan.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "li",
                  {
                    className: "text-xs flex items-center gap-1.5",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-500", children: "✓" }),
                      f
                    ]
                  },
                  f
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "w-full text-xs",
                    onClick: () => setEditingPlan(plan.id),
                    "data-ocid": `admin.promotions.plan.edit_button.${plan.id}`,
                    children: "Edit Plan"
                  }
                )
              ] })
            ]
          },
          plan.id
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 bg-card border border-border rounded-xl p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold mb-3", children: "Payment Gate Settings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3", children: "Users must pay before their promotion goes live. Payment verification is required for all plans." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Switch,
              {
                defaultChecked: true,
                "data-ocid": "admin.promotions.payment_gate.switch"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Require payment before promotion is submitted for review" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "moderation", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground bg-amber-500/10 border border-amber-500/30 rounded-xl p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: "🤖" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "AI content moderation checks for nudity, violence, hate speech, and inappropriate imagery automatically. Admin makes the final decision." })
        ] }),
        modItems.map((item, i) => {
          const status = modStatuses[item.id];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-xl p-4 space-y-3",
              "data-ocid": `admin.promotions.mod.row.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-16 h-16 rounded-lg shrink-0 flex items-center justify-center text-2xl",
                        style: { background: item.color },
                        children: "📣"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: item.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                        item.advertiser,
                        " · ",
                        item.plan,
                        " Plan · ",
                        item.region
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: item.adCopy }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mt-1", children: item.channels.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-[10px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary",
                          children: c
                        },
                        c
                      )) })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 space-y-2 text-right", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: `text-[10px] px-2 py-1 rounded-full font-medium ${AIResultColor(item.aiResult)}`,
                        children: [
                          "🤖 ",
                          item.aiResult
                        ]
                      }
                    ),
                    status ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `text-[10px] px-2 py-1 rounded-full font-medium ${status === "approved" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"}`,
                        children: status === "approved" ? "✓ Approved" : "✗ Rejected"
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          size: "sm",
                          className: "h-7 text-xs bg-green-600 hover:bg-green-700 text-white",
                          onClick: () => {
                            setModStatuses((p) => ({
                              ...p,
                              [item.id]: "approved"
                            }));
                            ue.success(`"${item.title}" approved`);
                          },
                          "data-ocid": `admin.promotions.mod.confirm_button.${i + 1}`,
                          children: "Approve"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          size: "sm",
                          variant: "outline",
                          className: "h-7 text-xs text-destructive",
                          onClick: () => setModActionId(item.id),
                          "data-ocid": `admin.promotions.mod.delete_button.${i + 1}`,
                          children: "Reject"
                        }
                      )
                    ] })
                  ] })
                ] }),
                modActionId === item.id && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-xl p-3 space-y-2 bg-secondary/20", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Rejection Reason" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Textarea,
                    {
                      className: "text-xs",
                      rows: 2,
                      placeholder: "Explain why this promotion is being rejected...",
                      value: rejectReason,
                      onChange: (e) => setRejectReason(e.target.value),
                      "data-ocid": `admin.promotions.mod.textarea.${i + 1}`
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "sm",
                        className: "text-xs flex-1",
                        variant: "destructive",
                        onClick: () => {
                          setModStatuses((p) => ({
                            ...p,
                            [item.id]: "rejected"
                          }));
                          setModActionId(null);
                          setRejectReason("");
                          ue.error(`"${item.title}" rejected`);
                        },
                        "data-ocid": `admin.promotions.mod.confirm_button.${i + 1}`,
                        children: "Confirm Reject"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "sm",
                        variant: "outline",
                        className: "text-xs",
                        onClick: () => setModActionId(null),
                        "data-ocid": `admin.promotions.mod.cancel_button.${i + 1}`,
                        children: "Cancel"
                      }
                    )
                  ] })
                ] })
              ]
            },
            item.id
          );
        })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "active", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Advertiser" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Plan" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Channels" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Period" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Impressions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: activePromos.map((promo, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: "border-b border-border/50 hover:bg-secondary/20",
            "data-ocid": `admin.promotions.active.row.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-medium max-w-[140px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate", children: promo.title }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: promo.advertiser }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                SBadge,
                {
                  label: promo.plan,
                  color: promo.plan === "Premium" ? "violet" : promo.plan === "Standard" ? "blue" : "green"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: promo.channels.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-[10px] px-1 py-0.5 rounded bg-secondary text-muted-foreground",
                  children: c
                },
                c
              )) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TD, { className: "text-muted-foreground text-[10px]", children: [
                promo.start,
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "→ ",
                promo.end
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-medium", children: promo.impressions.toLocaleString() }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                SBadge,
                {
                  label: promo.status,
                  color: promo.status === "active" ? "green" : "amber"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-6 px-2 text-[10px]",
                    onClick: () => {
                      setActivePromos(
                        (p) => p.map(
                          (x) => x.id === promo.id ? {
                            ...x,
                            status: x.status === "active" ? "paused" : "active"
                          } : x
                        )
                      );
                      ue.success("Status updated");
                    },
                    "data-ocid": `admin.promotions.active.toggle.${i + 1}`,
                    children: promo.status === "active" ? "Pause" : "Resume"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-6 px-2 text-[10px] text-destructive",
                    onClick: () => {
                      setActivePromos(
                        (p) => p.filter((x) => x.id !== promo.id)
                      );
                      ue.info("Promotion stopped");
                    },
                    "data-ocid": `admin.promotions.active.delete_button.${i + 1}`,
                    children: "Stop"
                  }
                )
              ] }) })
            ]
          },
          promo.id
        )) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "create", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-amber-500 bg-amber-500/10 border border-amber-500/30 rounded-xl p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: "👁️" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", children: "This is the user-facing promotion creation flow (admin preview)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-4 gap-3", children: [
          "Select Plan & Pay",
          "Upload Creative",
          "Choose Region",
          "Select Channels"
        ].map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "border border-border rounded-xl p-4 space-y-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm", children: i + 1 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: step }),
              i === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "User selects a plan and completes payment before promotion is submitted for review." }),
              i === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Upload image/video ad creative. AI moderates content for nudity, violence, hate speech automatically." }),
              i === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Select city, state, or national reach based on the plan purchased." }),
              i === 3 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Choose platforms: WhatsApp, Social Feed, Search Engines, Instagram, Facebook." })
            ]
          },
          step
        )) })
      ] }) })
    ] })
  ] });
}
function Agent19FullPanel() {
  const [genres, setGenres] = React.useState({
    Sports: true,
    Bollywood: true,
    Tech: true,
    History: true,
    Science: true,
    Food: true
  });
  const [gamesPerDay, setGamesPerDay] = React.useState([5]);
  const [targetUsers, setTargetUsers] = React.useState("all");
  const [autoPublish, setAutoPublish] = React.useState(true);
  const [gamesCreated, setGamesCreated] = React.useState(12);
  const [activePlayers, setActivePlayers] = React.useState(847);
  const avgScore = 68;
  const [monitorLog, setMonitorLog] = React.useState([
    "Generated: Cricket Champions Trivia • 42 players active",
    "Generated: Bollywood Blockbuster Quiz • 28 players active",
    "Generated: Tech Innovators Challenge • 15 players active"
  ]);
  const logRef = React.useRef(0);
  const GAME_LOG_ENTRIES = [
    "Generated: Bollywood Trivia Round 3 • 2 players active",
    "Generated: Sports Quiz — Cricket Edition • 7 players active",
    "Generated: Tech MCQ Blitz 2026 • 11 players active",
    "Generated: History of India Challenge • 5 players active",
    "Generated: Food & Spice Trivia • 9 players active",
    "Generated: Science Wonders Quiz • 14 players active",
    "Generated: IPL Champions 2026 Quiz • 19 players active",
    "Published: Monsoon Food Recipes Game → Social Feed"
  ];
  React.useEffect(() => {
    const t = setInterval(() => {
      logRef.current += 1;
      const entry = GAME_LOG_ENTRIES[logRef.current % GAME_LOG_ENTRIES.length];
      setMonitorLog(
        (p) => [`[${(/* @__PURE__ */ new Date()).toLocaleTimeString()}] ${entry}`, ...p].slice(0, 20)
      );
      setGamesCreated((c) => c + 1);
      if (logRef.current % 3 === 0)
        setActivePlayers((p) => p + Math.floor(Math.random() * 8));
    }, 8e3);
    return () => clearInterval(t);
  }, []);
  const PREVIEW_GAMES = [
    {
      title: "Cricket Champions 2026",
      genre: "Sports",
      difficulty: "Medium",
      plays: 142,
      color: "oklch(0.52 0.14 155)"
    },
    {
      title: "Bollywood Legends Quiz",
      genre: "Bollywood",
      difficulty: "Easy",
      plays: 203,
      color: "oklch(0.65 0.25 335)"
    },
    {
      title: "Tech Trivia Blitz",
      genre: "Tech",
      difficulty: "Hard",
      plays: 89,
      color: "oklch(0.55 0.22 280)"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "config", className: "w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "mb-4 h-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TabsTrigger,
        {
          value: "config",
          className: "text-xs h-7",
          "data-ocid": "admin.agent19.config.tab",
          children: "Config"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        TabsTrigger,
        {
          value: "monitoring",
          className: "text-xs h-7",
          "data-ocid": "admin.agent19.monitoring.tab",
          children: [
            "Monitoring",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-[9px] px-1.5 py-0.5 rounded-full bg-green-500/20 text-green-500 font-bold", children: "● LIVE" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TabsTrigger,
        {
          value: "preview",
          className: "text-xs h-7",
          "data-ocid": "admin.agent19.preview.tab",
          children: "Preview"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "config", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Genre Targets" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: Object.keys(genres).map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "label",
          {
            className: "flex items-center gap-2 text-xs cursor-pointer select-none",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "rounded",
                  checked: genres[g],
                  onChange: () => setGenres((prev) => ({ ...prev, [g]: !prev[g] })),
                  "data-ocid": `admin.agent19.genre.${g.toLowerCase()}.checkbox`
                }
              ),
              g === "Sports" ? "⚽" : g === "Bollywood" ? "🎬" : g === "Tech" ? "💻" : g === "History" ? "📜" : g === "Science" ? "🔬" : "🍛",
              " ",
              g
            ]
          },
          g
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Games per Day" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-primary", children: gamesPerDay[0] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Slider,
            {
              min: 1,
              max: 20,
              step: 1,
              value: gamesPerDay,
              onValueChange: setGamesPerDay,
              "data-ocid": "admin.agent19.games_per_day.toggle"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Target Users" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: targetUsers, onValueChange: setTargetUsers, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SelectTrigger,
              {
                className: "mt-1 h-8",
                "data-ocid": "admin.agent19.target.select",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Users" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "active", children: "Active Only (last 7 days)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "premium", children: "Premium Members" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Auto-publish to Social Feed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Switch,
            {
              checked: autoPublish,
              onCheckedChange: setAutoPublish,
              "data-ocid": "admin.agent19.auto_publish.toggle"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            className: "w-full",
            onClick: () => ue.success("Agent 19 config saved"),
            "data-ocid": "admin.agent19.save.primary_button",
            children: "Save Config"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Quick Actions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "w-full",
            onClick: () => {
              setGamesCreated((c) => c + 1);
              ue.success("Game generation triggered manually");
            },
            "data-ocid": "admin.agent19.generate.primary_button",
            children: "⚡ Generate Now"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Agent runs automatically every day at 6:00 AM IST. Manual trigger available anytime." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "monitoring", className: "mt-0 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: [
        {
          label: "Games Created Today",
          value: gamesCreated,
          icon: "🎮",
          color: "oklch(0.55 0.22 280)"
        },
        {
          label: "Active Players",
          value: activePlayers.toLocaleString(),
          icon: "👥",
          color: "oklch(0.52 0.14 155)"
        },
        {
          label: "Avg Score %",
          value: `${avgScore}%`,
          icon: "📊",
          color: "oklch(0.72 0.17 85)"
        }
      ].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-xl p-3 text-center",
          "data-ocid": `admin.agent19.stat.card.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-1", children: s.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold", style: { color: s.color }, children: s.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: s.label })
          ]
        },
        s.label
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-semibold flex items-center gap-2", children: [
          "Live Activity Log",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-[10px] px-2 py-0.5 rounded-full font-bold",
              style: {
                background: "oklch(0.52 0.14 155 / 0.15)",
                color: "oklch(0.52 0.14 155)"
              },
              children: "● Running"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "space-y-1.5 h-64 overflow-y-auto",
            "data-ocid": "admin.agent19.log.panel",
            children: monitorLog.map((entry, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "text-[11px] px-3 py-1.5 rounded-lg bg-secondary/40 text-muted-foreground font-mono",
                "data-ocid": i === 0 ? "admin.agent19.log.item.1" : void 0,
                children: entry
              },
              entry
            ))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Agent19LiveFeed, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "preview", className: "mt-0 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Last 3 games generated by Agent 19, as they appear to users:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: PREVIEW_GAMES.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-xl p-4 space-y-3",
          "data-ocid": `admin.agent19.preview.card.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-[10px] px-1.5 py-0.5 rounded-full font-medium text-white",
                  style: { background: g.color },
                  children: g.genre
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: g.difficulty })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold leading-tight", children: g.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              "👥 ",
              g.plays,
              " plays"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "w-full h-7 text-xs",
                onClick: () => ue.success(`Previewing: ${g.title}`),
                "data-ocid": `admin.agent19.preview.primary_button.${i + 1}`,
                children: "Preview Game"
              }
            )
          ]
        },
        g.title
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Agent19PreviewDialog, {})
    ] })
  ] });
}
function Agent20FullPanel() {
  const [comicStyle, setComicStyle] = React.useState("funny");
  const [postsPerDay, setPostsPerDay] = React.useState([3]);
  const [filterLevel, setFilterLevel] = React.useState("family-safe");
  const [autoPublish, setAutoPublish] = React.useState(true);
  const [comicsGenerated, setComicsGenerated] = React.useState(8);
  const [totalLikes, setTotalLikes] = React.useState(2340);
  const sharesThisWeek = 187;
  const [comicLog, setComicLog] = React.useState([
    "New comic: Monday Morning Chaos • 12 likes",
    "New comic: The Chai Diaries • 28 likes",
    "New comic: Office Life Vol 3 • 9 likes"
  ]);
  const logRef = React.useRef(0);
  const COMIC_LOG_ENTRIES = [
    "New comic: Monday Morning Chaos • 12 likes",
    "New comic: Traffic Tales — Mumbai Edition • 6 likes",
    "New comic: When the WiFi Drops • 18 likes",
    "New comic: Festival Shopping Frenzy • 22 likes",
    "New comic: Rains & Rickshaws • 14 likes",
    "Published: The Deadline Diaries → Social Feed",
    "New comic: Dadi's WhatsApp Adventures • 31 likes"
  ];
  React.useEffect(() => {
    const t = setInterval(() => {
      logRef.current += 1;
      const entry = COMIC_LOG_ENTRIES[logRef.current % COMIC_LOG_ENTRIES.length];
      setComicLog(
        (p) => [`[${(/* @__PURE__ */ new Date()).toLocaleTimeString()}] ${entry}`, ...p].slice(0, 20)
      );
      setComicsGenerated((c) => c + 1);
      if (logRef.current % 2 === 0)
        setTotalLikes((l) => l + Math.floor(Math.random() * 15));
    }, 1e4);
    return () => clearInterval(t);
  }, []);
  const PREVIEW_COMICS = [
    {
      title: "Monday Morning Chaos",
      caption: "When the alarm rings but your body says 'just 5 more minutes'... every single day 😴",
      mood: "funny",
      bg: "oklch(0.65 0.25 335 / 0.12)",
      accent: "oklch(0.65 0.25 335)"
    },
    {
      title: "The Chai Diaries",
      caption: "No meeting can start without chai. That's not tradition, that's law. ☕",
      mood: "wholesome",
      bg: "oklch(0.72 0.17 85 / 0.12)",
      accent: "oklch(0.72 0.17 85)"
    },
    {
      title: "Tech Support Tales",
      caption: "Boss: just restart it. Me: 3 hours of debugging later... 💻",
      mood: "sarcastic",
      bg: "oklch(0.55 0.22 280 / 0.12)",
      accent: "oklch(0.55 0.22 280)"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "config", className: "w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "mb-4 h-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TabsTrigger,
        {
          value: "config",
          className: "text-xs h-7",
          "data-ocid": "admin.agent20.config.tab",
          children: "Config"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        TabsTrigger,
        {
          value: "monitoring",
          className: "text-xs h-7",
          "data-ocid": "admin.agent20.monitoring.tab",
          children: [
            "Monitoring",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-[9px] px-1.5 py-0.5 rounded-full bg-green-500/20 text-green-500 font-bold", children: "● LIVE" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TabsTrigger,
        {
          value: "preview",
          className: "text-xs h-7",
          "data-ocid": "admin.agent20.preview.tab",
          children: "Preview"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "config", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Comic Style" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Style" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: comicStyle, onValueChange: setComicStyle, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SelectTrigger,
              {
                className: "mt-1 h-8",
                "data-ocid": "admin.agent20.style.select",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "funny", children: "😂 Funny" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "satirical", children: "🎭 Satirical" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "wholesome", children: "🌸 Wholesome" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Posts per Day" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-primary", children: postsPerDay[0] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Slider,
            {
              min: 1,
              max: 10,
              step: 1,
              value: postsPerDay,
              onValueChange: setPostsPerDay,
              "data-ocid": "admin.agent20.posts_per_day.toggle"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Content Filter Level" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: filterLevel, onValueChange: setFilterLevel, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SelectTrigger,
              {
                className: "mt-1 h-8",
                "data-ocid": "admin.agent20.filter.select",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "family-safe", children: "👨‍👩‍👧 Family-Safe" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "general", children: "👥 General" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "mature-lite", children: "🔞 Mature-Lite" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Auto-publish to Social Feed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Switch,
            {
              checked: autoPublish,
              onCheckedChange: setAutoPublish,
              "data-ocid": "admin.agent20.auto_publish.toggle"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            className: "w-full",
            onClick: () => ue.success("Agent 20 config saved"),
            "data-ocid": "admin.agent20.save.primary_button",
            children: "Save Config"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Quick Actions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "w-full",
            onClick: () => {
              setComicsGenerated((c) => c + 1);
              ue.success("Comic generated and queued");
            },
            "data-ocid": "admin.agent20.generate.primary_button",
            children: "⚡ Generate Now"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Agent runs daily at 7:30 AM IST, pulling from yesterday's social feed highlights." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "monitoring", className: "mt-0 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: [
        {
          label: "Comics Generated Today",
          value: comicsGenerated,
          icon: "😄",
          color: "oklch(0.65 0.25 335)"
        },
        {
          label: "Total Likes",
          value: totalLikes.toLocaleString(),
          icon: "❤️",
          color: "oklch(0.65 0.25 335)"
        },
        {
          label: "Shares This Week",
          value: sharesThisWeek,
          icon: "🔁",
          color: "oklch(0.52 0.14 155)"
        }
      ].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card border border-border rounded-xl p-3 text-center",
          "data-ocid": `admin.agent20.stat.card.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-1", children: s.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold", style: { color: s.color }, children: s.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: s.label })
          ]
        },
        s.label
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-semibold flex items-center gap-2", children: [
          "Live Comic Feed",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-[10px] px-2 py-0.5 rounded-full font-bold",
              style: {
                background: "oklch(0.52 0.14 155 / 0.15)",
                color: "oklch(0.52 0.14 155)"
              },
              children: "● Running"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "space-y-1.5 h-64 overflow-y-auto",
            "data-ocid": "admin.agent20.log.panel",
            children: comicLog.map((entry, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "text-[11px] px-3 py-1.5 rounded-lg bg-secondary/40 text-muted-foreground font-mono",
                "data-ocid": i === 0 ? "admin.agent20.log.item.1" : void 0,
                children: entry
              },
              entry
            ))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Agent20LiveFeed, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "preview", className: "mt-0 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Last 3 comics generated by Agent 20, as they appear to users:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: PREVIEW_COMICS.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-xl border border-border overflow-hidden",
          "data-ocid": `admin.agent20.preview.card.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-28 flex items-center justify-center text-4xl",
                style: { background: c.bg },
                children: c.mood === "funny" ? "😂" : c.mood === "wholesome" ? "🥰" : "😏"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold", children: c.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-[10px] px-1.5 py-0.5 rounded-full font-medium",
                    style: { background: `${c.accent}20`, color: c.accent },
                    children: c.mood
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground leading-relaxed", children: c.caption }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "text-[11px] text-muted-foreground hover:text-pink-500 transition-colors",
                    onClick: () => ue.success("Liked!"),
                    "data-ocid": `admin.agent20.preview.toggle.${i + 1}`,
                    children: "❤️ Like"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "text-[11px] text-muted-foreground hover:text-primary transition-colors",
                    onClick: () => ue.success("Copied share link"),
                    "data-ocid": `admin.agent20.preview.secondary_button.${i + 1}`,
                    children: "🔁 Share"
                  }
                )
              ] })
            ] })
          ]
        },
        c.title
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Agent20PreviewDialog, {})
    ] })
  ] });
}
function WhatsAppAPISettings() {
  const [form, setForm] = reactExports.useState({
    phoneNumberId: "",
    businessAccountId: "",
    accessToken: "",
    webhookToken: "",
    webhookUrl: ""
  });
  const [testing, setTesting] = reactExports.useState(false);
  const [templates, setTemplates] = reactExports.useState([
    {
      id: 1,
      name: "Welcome",
      status: "approved",
      preview: "Welcome to IndyaCentral! Your account is ready."
    },
    {
      id: 2,
      name: "Order Confirmation",
      status: "approved",
      preview: "Your order #{{1}} has been confirmed. Expected: {{2}}"
    },
    {
      id: 3,
      name: "OTP",
      status: "approved",
      preview: "Your OTP is {{1}}. Valid for {{2}} minutes."
    },
    {
      id: 4,
      name: "Offer",
      status: "pending",
      preview: "Exclusive offer: {{1}} — valid till {{2}}"
    }
  ]);
  const [showTemplateForm, setShowTemplateForm] = reactExports.useState(false);
  const [newTemplate, setNewTemplate] = reactExports.useState({ name: "", preview: "" });
  const [broadcastMsg, setBroadcastMsg] = reactExports.useState("");
  const [broadcastTarget, setBroadcastTarget] = reactExports.useState("all");
  const [scheduleEnabled, setScheduleEnabled] = reactExports.useState(false);
  const [scheduleDate, setScheduleDate] = reactExports.useState("");
  const [otpExpiry, setOtpExpiry] = reactExports.useState("5");
  const [otpLength, setOtpLength] = reactExports.useState("6");
  const [maxRetries, setMaxRetries] = reactExports.useState("3");
  const [showApiKey, setShowApiKey] = React.useState(false);
  const [liveMode, setLiveMode] = React.useState(false);
  const [testPhone, setTestPhone] = React.useState("");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "credentials", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TabsTrigger,
        {
          value: "credentials",
          className: "text-xs",
          "data-ocid": "whatsapp.credentials_tab",
          children: "Credentials"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "templates", className: "text-xs", children: "Templates" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "broadcast", className: "text-xs", children: "Broadcast" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "otp", className: "text-xs", children: "OTP Config" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "credentials", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "API Credentials" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Phone Number ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "mt-1",
              placeholder: "123456789012345",
              value: form.phoneNumberId,
              onChange: (e) => setForm((p) => ({ ...p, phoneNumberId: e.target.value })),
              "data-ocid": "admin.whatsapp.phone_id.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Business Account ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "mt-1",
              placeholder: "987654321098765",
              value: form.businessAccountId,
              onChange: (e) => setForm((p) => ({ ...p, businessAccountId: e.target.value })),
              "data-ocid": "admin.whatsapp.biz_id.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "API Key / Access Token" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: showApiKey ? "text" : "password",
                placeholder: "EAAxxxxx...",
                value: form.accessToken,
                onChange: (e) => setForm((p) => ({ ...p, accessToken: e.target.value })),
                className: "pr-10",
                "data-ocid": "whatsapp.api_key_input"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors text-xs",
                onClick: () => setShowApiKey((v) => !v),
                "data-ocid": "whatsapp.api_key_toggle",
                children: showApiKey ? "Hide" : "Show"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Webhook Verify Token" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "mt-1",
              placeholder: "my_verify_token",
              value: form.webhookToken,
              onChange: (e) => setForm((p) => ({ ...p, webhookToken: e.target.value })),
              "data-ocid": "admin.whatsapp.webhook_token.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Webhook URL" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "mt-1",
              placeholder: "https://your-domain.com/webhook",
              value: form.webhookUrl,
              onChange: (e) => setForm((p) => ({ ...p, webhookUrl: e.target.value })),
              "data-ocid": "admin.whatsapp.webhook_url.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 rounded-lg border border-border bg-secondary/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium", children: "API Mode" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-0.5", children: liveMode ? "Live — real messages sent" : "Test — sandbox only" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Test" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Switch,
              {
                checked: liveMode,
                onCheckedChange: setLiveMode,
                "data-ocid": "admin.whatsapp.mode.switch"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Live" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              className: "flex-1",
              onClick: () => ue.success("WhatsApp API settings saved"),
              "data-ocid": "whatsapp.save_button",
              children: "Save Credentials"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              disabled: testing,
              onClick: () => {
                setTesting(true);
                setTimeout(() => {
                  setTesting(false);
                  ue.success("WhatsApp connection test successful!");
                }, 1500);
              },
              "data-ocid": "admin.whatsapp.test.secondary_button",
              children: testing ? "Testing..." : "Test Connection"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Quick Setup Guide" }),
        [
          "1. Create a Meta Business Account at business.facebook.com",
          "2. Set up a WhatsApp Business App in Meta Developers Console",
          "3. Add your phone number and verify it",
          "4. Generate a permanent access token",
          "5. Configure the webhook URL with your verify token",
          "6. Test the connection and start sending messages"
        ].map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-[10px]", children: i + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: step.slice(3) })
        ] }, step))
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "templates", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Message Templates" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            onClick: () => setShowTemplateForm((p) => !p),
            "data-ocid": "admin.whatsapp.template.primary_button",
            children: "+ Create Template"
          }
        )
      ] }),
      showTemplateForm && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-xl p-3 space-y-2 bg-secondary/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            className: "h-8 text-xs",
            placeholder: "Template name",
            value: newTemplate.name,
            onChange: (e) => setNewTemplate((p) => ({ ...p, name: e.target.value })),
            "data-ocid": "admin.whatsapp.template.input"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            className: "text-xs",
            rows: 2,
            placeholder: "Template preview text with {{1}} placeholders...",
            value: newTemplate.preview,
            onChange: (e) => setNewTemplate((p) => ({ ...p, preview: e.target.value })),
            "data-ocid": "admin.whatsapp.template.textarea"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            onClick: () => {
              if (!newTemplate.name.trim()) {
                ue.error("Template name required");
                return;
              }
              setTemplates((p) => [
                ...p,
                { id: Date.now(), ...newTemplate, status: "pending" }
              ]);
              setNewTemplate({ name: "", preview: "" });
              setShowTemplateForm(false);
              ue.success("Template created");
            },
            "data-ocid": "admin.whatsapp.template.confirm_button",
            children: "Save Template"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: templates.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "border border-border rounded-xl p-3 flex items-start gap-3",
          "data-ocid": `admin.whatsapp.template.row.${i + 1}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: t.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SBadge,
                {
                  label: t.status,
                  color: t.status === "approved" ? "green" : "amber"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: t.preview })
          ] })
        },
        t.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "broadcast", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Send Broadcast" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Recipients" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: broadcastTarget, onValueChange: setBroadcastTarget, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectTrigger,
            {
              className: "mt-1",
              "data-ocid": "admin.whatsapp.broadcast.select",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "all", children: "All Users" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "business", children: "Business Subscribers" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "custom", children: "Custom List" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            className: "mt-1 text-xs",
            rows: 4,
            placeholder: "Type your broadcast message...",
            value: broadcastMsg,
            onChange: (e) => setBroadcastMsg(e.target.value),
            "data-ocid": "admin.whatsapp.broadcast.textarea"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Switch,
          {
            checked: scheduleEnabled,
            onCheckedChange: setScheduleEnabled,
            "data-ocid": "admin.whatsapp.broadcast.schedule.switch"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Schedule" }),
        scheduleEnabled && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "datetime-local",
            className: "h-8 text-xs flex-1",
            value: scheduleDate,
            onChange: (e) => setScheduleDate(e.target.value),
            "data-ocid": "admin.whatsapp.broadcast.schedule.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            className: "flex-1",
            onClick: () => {
              if (!broadcastMsg.trim()) {
                ue.error("Message required");
                return;
              }
              ue.success("Broadcast sent successfully!");
              setBroadcastMsg("");
            },
            "data-ocid": "whatsapp.broadcast_button",
            children: "Send Now"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            variant: "outline",
            disabled: !scheduleEnabled,
            onClick: () => {
              if (!scheduleDate) {
                ue.error("Set a schedule date first");
                return;
              }
              ue.success(`Broadcast scheduled for ${scheduleDate}`);
            },
            "data-ocid": "admin.whatsapp.broadcast.schedule.secondary_button",
            children: "Schedule"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "otp", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "OTP Configuration" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "OTP Expiry (minutes)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "mt-1",
              type: "number",
              value: otpExpiry,
              onChange: (e) => setOtpExpiry(e.target.value),
              "data-ocid": "admin.whatsapp.otp.expiry.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "OTP Length" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "mt-1",
              type: "number",
              min: "4",
              max: "8",
              value: otpLength,
              onChange: (e) => setOtpLength(e.target.value),
              "data-ocid": "admin.whatsapp.otp.length.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Max Retries" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "mt-1",
              type: "number",
              value: maxRetries,
              onChange: (e) => setMaxRetries(e.target.value),
              "data-ocid": "admin.whatsapp.otp.retries.input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Test Phone Number" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            className: "mt-1",
            placeholder: "+91 98765 43210",
            value: testPhone,
            onChange: (e) => setTestPhone(e.target.value),
            "data-ocid": "admin.whatsapp.otp.test_phone.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          onClick: () => ue.success("OTP config saved"),
          "data-ocid": "admin.whatsapp.otp.save.primary_button",
          children: "Save OTP Config"
        }
      )
    ] }) })
  ] });
}
function RideManagementWithZones() {
  const [activeTab, setActiveTab] = React.useState("ratecards");
  const [selectedCountry, setSelectedCountry] = React.useState("India");
  const [selectedState, setSelectedState] = React.useState("Maharashtra");
  const [selectedCity, setSelectedCity] = React.useState("Mumbai");
  const [rateCards, setRateCards] = React.useState({
    Mumbai: {
      Bike: { baseFare: "20", perKm: "8", minFare: "30" },
      Auto: { baseFare: "25", perKm: "12", minFare: "40" },
      Taxi: { baseFare: "50", perKm: "15", minFare: "80" },
      Premium: { baseFare: "80", perKm: "22", minFare: "120" }
    },
    Pune: {
      Bike: { baseFare: "18", perKm: "7", minFare: "25" },
      Auto: { baseFare: "22", perKm: "11", minFare: "35" },
      Taxi: { baseFare: "45", perKm: "14", minFare: "70" },
      Premium: { baseFare: "70", perKm: "20", minFare: "100" }
    },
    Nagpur: {
      Bike: { baseFare: "15", perKm: "6", minFare: "20" },
      Auto: { baseFare: "20", perKm: "10", minFare: "30" },
      Taxi: { baseFare: "40", perKm: "12", minFare: "60" },
      Premium: { baseFare: "60", perKm: "18", minFare: "90" }
    },
    Delhi: {
      Bike: { baseFare: "22", perKm: "9", minFare: "35" },
      Auto: { baseFare: "30", perKm: "13", minFare: "45" },
      Taxi: { baseFare: "55", perKm: "16", minFare: "90" },
      Premium: { baseFare: "90", perKm: "24", minFare: "130" }
    },
    Gurgaon: {
      Bike: { baseFare: "20", perKm: "9", minFare: "30" },
      Auto: { baseFare: "28", perKm: "12", minFare: "40" },
      Taxi: { baseFare: "50", perKm: "15", minFare: "85" },
      Premium: { baseFare: "85", perKm: "23", minFare: "125" }
    },
    Bangalore: {
      Bike: { baseFare: "20", perKm: "8", minFare: "30" },
      Auto: { baseFare: "25", perKm: "12", minFare: "40" },
      Taxi: { baseFare: "50", perKm: "15", minFare: "80" },
      Premium: { baseFare: "80", perKm: "22", minFare: "120" }
    }
  });
  const COUNTRIES = ["India", "Sri Lanka", "Bangladesh", "Nepal"];
  const STATES = {
    India: ["Maharashtra", "Delhi NCR", "Karnataka", "Tamil Nadu", "Gujarat"]
  };
  const CITIES = {
    Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
    "Delhi NCR": ["Delhi", "Gurgaon", "Noida", "Faridabad", "Ghaziabad"],
    Karnataka: ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Trichy", "Salem"],
    Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"]
  };
  const VEHICLE_TYPES = ["Bike", "Auto", "Taxi", "Premium"];
  const currentRates = rateCards[selectedCity] || {
    Bike: { baseFare: "15", perKm: "7", minFare: "25" },
    Auto: { baseFare: "20", perKm: "11", minFare: "35" },
    Taxi: { baseFare: "40", perKm: "13", minFare: "65" },
    Premium: { baseFare: "65", perKm: "19", minFare: "95" }
  };
  const [subPlans] = React.useState([
    {
      id: 1,
      name: "Basic",
      price: "Free",
      period: "",
      rides: "50 rides/month",
      features: ["Standard support", "Basic insurance", "Platform access"],
      color: "oklch(0.52 0.14 155)"
    },
    {
      id: 2,
      name: "Standard",
      price: "₹299",
      period: "/month",
      rides: "Unlimited rides",
      features: [
        "Priority support",
        "Enhanced insurance",
        "Lower commission rate (13%)",
        "Weekly payout"
      ],
      color: "oklch(0.55 0.22 280)",
      badge: "Popular"
    },
    {
      id: 3,
      name: "Premium",
      price: "₹999",
      period: "/month",
      rides: "Unlimited + bonuses",
      features: [
        "Dedicated support",
        "Full insurance",
        "Lowest commission (10%)",
        "Daily payout",
        "Priority assignments",
        "Training & certification"
      ],
      color: "oklch(0.65 0.25 335)"
    }
  ]);
  const [commission, setCommission] = React.useState("15");
  const [threshold, setThreshold] = React.useState("1000");
  const [autoBlock, setAutoBlock] = React.useState(true);
  const [riders, setRiders] = React.useState([
    {
      id: 1,
      name: "Suresh Kumar",
      rides: 42,
      zone: "Mumbai Central",
      earned: 3780,
      outstanding: 0,
      status: "active"
    },
    {
      id: 2,
      name: "Ramesh Patel",
      rides: 28,
      zone: "Andheri",
      earned: 2100,
      outstanding: 350,
      status: "active"
    },
    {
      id: 3,
      name: "Vijay Singh",
      rides: 15,
      zone: "Bandra",
      earned: 900,
      outstanding: 1200,
      status: "blocked"
    },
    {
      id: 4,
      name: "Arjun Nair",
      rides: 61,
      zone: "Powai",
      earned: 5490,
      outstanding: 0,
      status: "active"
    },
    {
      id: 5,
      name: "Kavita Yadav",
      rides: 33,
      zone: "Thane",
      earned: 2970,
      outstanding: 800,
      status: "active"
    }
  ]);
  const [pendingRegistrations, setPendingRegistrations] = React.useState([
    {
      id: 1,
      name: "Deepak Sharma",
      phone: "+91 98765 43210",
      aadhaar: true,
      pan: true,
      dl: true,
      rc: true,
      permit: true,
      selfie: true,
      aiBlur: "Pass",
      faceMatch: "Match",
      status: "Pending"
    },
    {
      id: 2,
      name: "Sunita Devi",
      phone: "+91 87654 32109",
      aadhaar: true,
      pan: false,
      dl: true,
      rc: true,
      permit: true,
      selfie: true,
      aiBlur: "Fail",
      faceMatch: "Pending",
      status: "Pending"
    },
    {
      id: 3,
      name: "Mohan Lal",
      phone: "+91 76543 21098",
      aadhaar: true,
      pan: true,
      dl: true,
      rc: false,
      permit: false,
      selfie: true,
      aiBlur: "Pass",
      faceMatch: "No Match",
      status: "Pending"
    },
    {
      id: 4,
      name: "Priya Gupta",
      phone: "+91 65432 10987",
      aadhaar: true,
      pan: true,
      dl: true,
      rc: true,
      permit: true,
      selfie: true,
      aiBlur: "Pass",
      faceMatch: "Match",
      status: "Pending"
    }
  ]);
  const [showRegForm, setShowRegForm] = React.useState(false);
  const [regForm, setRegForm] = React.useState({
    name: "",
    aadhaar: "",
    pan: "",
    dl: "",
    vehicleReg: "",
    vehicleNo: "",
    phone: "",
    email: "",
    permitType: "Commercial"
  });
  const [selectedReg, setSelectedReg] = React.useState(null);
  const DocBadge = ({ ok, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: `inline-flex items-center gap-0.5 text-[9px] px-1 py-0.5 rounded font-medium ${ok ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"}`,
      children: [
        ok ? "✓" : "✗",
        " ",
        label
      ]
    }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "mb-4 flex-wrap gap-1 h-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TabsTrigger,
        {
          value: "ratecards",
          className: "text-xs",
          "data-ocid": "admin.rides.ratecards.tab",
          children: "Rate Cards"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TabsTrigger,
        {
          value: "subscriptions",
          className: "text-xs",
          "data-ocid": "admin.rides.subscriptions.tab",
          children: "Subscription Plans"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TabsTrigger,
        {
          value: "commission",
          className: "text-xs",
          "data-ocid": "admin.rides.commission.tab",
          children: "Commission & Blocking"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        TabsTrigger,
        {
          value: "registration",
          className: "text-xs",
          "data-ocid": "admin.rides.registration.tab",
          children: [
            "Rider Registration",
            " ",
            pendingRegistrations.filter((r) => r.status === "Pending").length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-[9px] px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-500 font-bold", children: pendingRegistrations.filter((r) => r.status === "Pending").length })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TabsTrigger,
        {
          value: "active",
          className: "text-xs",
          "data-ocid": "admin.rides.active.tab",
          children: "Active Riders"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "ratecards", className: "mt-0 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Country" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: selectedCountry, onValueChange: setSelectedCountry, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SelectTrigger,
              {
                className: "mt-1 h-8",
                "data-ocid": "admin.rides.country.select",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: COUNTRIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "State / Region" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: selectedState,
              onValueChange: (v) => {
                setSelectedState(v);
                setSelectedCity((CITIES[v] || [])[0] || "");
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    className: "mt-1 h-8",
                    "data-ocid": "admin.rides.state.select",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: (STATES[selectedCountry] || []).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "City" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: selectedCity, onValueChange: setSelectedCity, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SelectTrigger,
              {
                className: "mt-1 h-8",
                "data-ocid": "admin.rides.city.select",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: (CITIES[selectedState] || []).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-sm font-semibold", children: [
          "Rates for ",
          selectedCity,
          ", ",
          selectedState
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Vehicle Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Base Fare (₹)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Per KM (₹)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Min Fare (₹)" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: VEHICLE_TYPES.map((vt, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "border-b border-border/50",
              "data-ocid": `admin.rides.rate.row.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TD, { className: "font-medium", children: [
                  vt === "Bike" ? "🏍️" : vt === "Auto" ? "🛺" : vt === "Taxi" ? "🚗" : "🚘",
                  " ",
                  vt
                ] }),
                ["baseFare", "perKm", "minFare"].map((field) => {
                  var _a;
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "number",
                      className: "h-7 w-20 text-xs",
                      value: ((_a = currentRates[vt]) == null ? void 0 : _a[field]) ?? "",
                      onChange: (e) => setRateCards((prev) => {
                        var _a2;
                        return {
                          ...prev,
                          [selectedCity]: {
                            ...prev[selectedCity],
                            [vt]: {
                              ...(_a2 = prev[selectedCity]) == null ? void 0 : _a2[vt],
                              [field]: e.target.value
                            }
                          }
                        };
                      }),
                      "data-ocid": `admin.rides.rate.input.${i + 1}`
                    }
                  ) }, field);
                })
              ]
            },
            vt
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          onClick: () => {
            localStorage.setItem(
              "indyacentral_ride_rates",
              JSON.stringify(rateCards)
            );
            ue.success(`Rate card saved for ${selectedCity}`);
          },
          "data-ocid": "admin.rides.rate.save_button",
          children: "Save Rate Card"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LiveRideRequests, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SurgePricingSchedule, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "subscriptions", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: subPlans.map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "border border-border rounded-xl p-5 space-y-4 relative",
        "data-ocid": `admin.rides.subscription.row.${plan.id}`,
        children: [
          "badge" in plan && plan.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-full font-bold bg-primary text-primary-foreground", children: plan.badge }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold", style: { color: plan.color }, children: plan.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-bold", children: plan.price }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground pb-1", children: plan.period })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium text-primary", children: plan.rides }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: plan.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-xs flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-500", children: "✓" }),
            f
          ] }, f)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "w-full text-xs",
              onClick: () => ue.success(`${plan.name} plan updated`),
              "data-ocid": `admin.rides.subscription.edit_button.${plan.id}`,
              children: "Edit Plan"
            }
          )
        ]
      },
      plan.id
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "commission", className: "mt-0 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Commission Config" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Per-ride Commission (%)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "mt-1",
              type: "number",
              value: commission,
              onChange: (e) => setCommission(e.target.value),
              "data-ocid": "admin.rides.commission.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Outstanding Limit (₹) — Auto-block above this" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "mt-1",
              type: "number",
              value: threshold,
              onChange: (e) => setThreshold(e.target.value),
              "data-ocid": "admin.rides.threshold.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Auto-block on limit breach" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Switch,
            {
              checked: autoBlock,
              onCheckedChange: setAutoBlock,
              "data-ocid": "admin.rides.autoblock.switch"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", children: [
          "Riders with unpaid commission above ₹",
          threshold,
          " will be automatically blocked from accepting rides."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            className: "w-full",
            onClick: () => ue.success("Commission config saved"),
            "data-ocid": "admin.rides.commission.save_button",
            children: "Save Config"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 bg-card border border-border rounded-xl overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 border-b border-border flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs font-semibold", children: [
            "Riders (",
            riders.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
            riders.filter((r) => r.status === "blocked").length,
            " blocked ·",
            " ",
            riders.filter((r) => r.outstanding > 0).length,
            " with outstanding dues"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "bg-secondary/30", children: [
            "Name",
            "Zone",
            "Rides",
            "Earned",
            "Outstanding",
            "Status",
            "Action"
          ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "th",
            {
              className: "px-3 py-2 text-left font-semibold text-muted-foreground",
              children: h
            },
            h
          )) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: riders.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "border-t border-border/50",
              "data-ocid": `admin.rides.rider.row.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-medium", children: r.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-muted-foreground", children: r.zone }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: r.rides }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2 text-green-600", children: [
                  "₹",
                  r.earned.toLocaleString()
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: r.outstanding > 0 ? "text-red-600 font-semibold" : "text-muted-foreground",
                    children: r.outstanding > 0 ? `₹${r.outstanding}` : "—"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `px-2 py-0.5 rounded-full text-[10px] font-medium ${r.status === "active" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"}`,
                    children: r.status === "active" ? "Active" : "Blocked"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      className: `h-6 px-2 text-[10px] ${r.status === "blocked" ? "text-green-600" : "text-red-600"}`,
                      onClick: () => {
                        setRiders(
                          (prev) => prev.map(
                            (x) => x.id === r.id ? {
                              ...x,
                              status: x.status === "active" ? "blocked" : "active"
                            } : x
                          )
                        );
                        ue.success(
                          r.status === "active" ? `${r.name} blocked` : `${r.name} unblocked`
                        );
                      },
                      "data-ocid": r.status === "active" ? `admin.rides.rider.delete_button.${i + 1}` : `admin.rides.rider.edit_button.${i + 1}`,
                      children: r.status === "active" ? "Block" : "Unblock"
                    }
                  ),
                  r.outstanding > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      className: "h-6 px-2 text-[10px]",
                      onClick: () => ue.success(`Payment link sent to ${r.name}`),
                      "data-ocid": `admin.rides.rider.save_button.${i + 1}`,
                      children: "Pay Link"
                    }
                  )
                ] }) })
              ]
            },
            r.id
          )) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "registration", className: "mt-0 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Pending Rider Applications" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            onClick: () => setShowRegForm(!showRegForm),
            "data-ocid": "admin.rides.registration.open_modal_button",
            children: "+ Register Rider"
          }
        )
      ] }),
      showRegForm && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold", children: "New Rider Registration" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
          [
            {
              label: "Full Name",
              field: "name",
              placeholder: "Suresh Kumar"
            },
            {
              label: "Phone Number",
              field: "phone",
              placeholder: "+91 98765 43210"
            },
            {
              label: "Email",
              field: "email",
              placeholder: "rider@example.com"
            },
            {
              label: "Aadhaar Number",
              field: "aadhaar",
              placeholder: "1234 5678 9012"
            },
            {
              label: "PAN Number",
              field: "pan",
              placeholder: "ABCDE1234F"
            },
            {
              label: "Driving License No.",
              field: "dl",
              placeholder: "MH02-20210012345"
            },
            {
              label: "Vehicle Registration No.",
              field: "vehicleReg",
              placeholder: "MH02AB1234"
            },
            {
              label: "Vehicle Number Plate",
              field: "vehicleNo",
              placeholder: "MH 02 AB 1234"
            }
          ].map(({ label, field, placeholder }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                className: "mt-1 h-8 text-xs",
                placeholder,
                value: regForm[field],
                onChange: (e) => setRegForm((p) => ({ ...p, [field]: e.target.value })),
                "data-ocid": "admin.rides.reg.input"
              }
            )
          ] }, field)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Permit Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: regForm.permitType,
                onValueChange: (v) => setRegForm((p) => ({ ...p, permitType: v })),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      className: "mt-1 h-8",
                      "data-ocid": "admin.rides.reg.select",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Commercial", children: "Commercial" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Tourist", children: "Tourist" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "All India", children: "All India" })
                  ] })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: [
          { label: "Self Photo (Selfie)", id: "selfie" },
          { label: "License Photo", id: "dl-photo" },
          { label: "Vehicle RC Book", id: "rc" }
        ].map(({ label, id }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 border-2 border-dashed border-border rounded-xl p-4 text-center cursor-pointer hover:bg-secondary/30 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "📷 Click to upload" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "file",
                className: "hidden",
                accept: ".jpg,.jpeg,.png"
              }
            )
          ] })
        ] }, id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-amber-600 bg-amber-500/10 border border-amber-500/30 rounded-xl p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🤖" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "AI will check document clarity, detect blur, and compare selfie with license photo on submission." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              className: "flex-1",
              onClick: () => {
                if (!regForm.name || !regForm.phone) {
                  ue.error("Name and phone required");
                  return;
                }
                const newReg = {
                  id: Date.now(),
                  name: regForm.name,
                  phone: regForm.phone,
                  aadhaar: true,
                  pan: !!regForm.pan,
                  dl: !!regForm.dl,
                  rc: !!regForm.vehicleReg,
                  permit: true,
                  selfie: true,
                  aiBlur: "Pending",
                  faceMatch: "Pending",
                  status: "Pending"
                };
                setPendingRegistrations((p) => [newReg, ...p]);
                setRegForm({
                  name: "",
                  aadhaar: "",
                  pan: "",
                  dl: "",
                  vehicleReg: "",
                  vehicleNo: "",
                  phone: "",
                  email: "",
                  permitType: "Commercial"
                });
                setShowRegForm(false);
                ue.success(
                  "Registration submitted — AI check in progress"
                );
              },
              "data-ocid": "admin.rides.reg.submit_button",
              children: "Submit Registration"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              onClick: () => setShowRegForm(false),
              "data-ocid": "admin.rides.reg.cancel_button",
              children: "Cancel"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Documents" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "AI Check" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Face Match" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: pendingRegistrations.map((reg, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "border-b border-border/50 hover:bg-secondary/20 cursor-pointer",
              onClick: () => setSelectedReg(selectedReg === reg.id ? null : reg.id),
              onKeyDown: (e) => {
                if (e.key === "Enter")
                  setSelectedReg(selectedReg === reg.id ? null : reg.id);
              },
              tabIndex: 0,
              "data-ocid": `admin.rides.reg.row.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-medium", children: reg.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "text-muted-foreground", children: reg.phone }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DocBadge, { ok: reg.aadhaar, label: "Aadhaar" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DocBadge, { ok: reg.pan, label: "PAN" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DocBadge, { ok: reg.dl, label: "DL" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DocBadge, { ok: reg.rc, label: "RC" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DocBadge, { ok: reg.permit, label: "Permit" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DocBadge, { ok: reg.selfie, label: "Selfie" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: `text-[10px] px-1.5 py-0.5 rounded font-medium ${reg.aiBlur === "Pass" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : reg.aiBlur === "Fail" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"}`,
                    children: [
                      "🤖 Blur: ",
                      reg.aiBlur
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `text-[10px] px-1.5 py-0.5 rounded font-medium ${reg.faceMatch === "Match" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : reg.faceMatch === "No Match" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"}`,
                    children: reg.faceMatch
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `text-[10px] px-1.5 py-0.5 rounded font-medium ${reg.status === "Approved" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : reg.status === "Rejected" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"}`,
                    children: reg.status
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: reg.status === "Pending" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex gap-1",
                    onClick: (e) => e.stopPropagation(),
                    onKeyDown: (e) => e.stopPropagation(),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          size: "sm",
                          className: "h-6 px-2 text-[10px] bg-green-600 hover:bg-green-700 text-white",
                          onClick: () => {
                            setPendingRegistrations(
                              (p) => p.map(
                                (x) => x.id === reg.id ? { ...x, status: "Approved" } : x
                              )
                            );
                            ue.success(`${reg.name} approved`);
                          },
                          "data-ocid": `admin.rides.reg.confirm_button.${i + 1}`,
                          children: "Approve"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          size: "sm",
                          variant: "outline",
                          className: "h-6 px-2 text-[10px] text-destructive",
                          onClick: () => {
                            setPendingRegistrations(
                              (p) => p.map(
                                (x) => x.id === reg.id ? { ...x, status: "Rejected" } : x
                              )
                            );
                            ue.error(`${reg.name} rejected`);
                          },
                          "data-ocid": `admin.rides.reg.delete_button.${i + 1}`,
                          children: "Reject"
                        }
                      )
                    ]
                  }
                ) })
              ]
            }
          ),
          selectedReg === reg.id && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-border/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { colSpan: 7, className: "px-4 py-3 bg-secondary/20", children: [
            reg.faceMatch === "No Match" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-red-600 bg-red-500/10 border border-red-500/30 rounded-xl p-3 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: "⚠️" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold", children: "Selfie does not match license photo — identity verification failed. Admin review required before approval." })
            ] }),
            reg.aiBlur === "Fail" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-amber-600 bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: "📷" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold", children: "AI detected blur or low visibility in uploaded documents. Rider should re-upload clear images." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Click row to expand document details. Documents listed above. AI checks run automatically on submission." })
          ] }) })
        ] }, reg.id)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "active", className: "mt-0 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RiderCommissionConfig, {}) })
  ] });
}
function RiderCommissionConfig() {
  return null;
}
function LiveRideRequests() {
  const [requests, setRequests] = reactExports.useState([
    {
      id: "REQ001",
      passenger: "Priya Sharma",
      pickup: "Bandra West",
      drop: "Andheri East",
      distance: "8.2 km",
      status: "waiting"
    },
    {
      id: "REQ002",
      passenger: "Rahul Verma",
      pickup: "Dadar Station",
      drop: "Worli Sea Face",
      distance: "4.5 km",
      status: "accepted"
    },
    {
      id: "REQ003",
      passenger: "Ananya Patel",
      pickup: "Borivali West",
      drop: "Malad East",
      distance: "3.1 km",
      status: "waiting"
    }
  ]);
  const counterRef = reactExports.useRef(0);
  reactExports.useEffect(() => {
    const PASSENGERS = [
      "Suresh K.",
      "Meera N.",
      "Vikram R.",
      "Sunita M.",
      "Amit J."
    ];
    const AREAS = [
      "Colaba",
      "Fort",
      "Bandra",
      "Juhu",
      "Goregaon",
      "Thane",
      "Navi Mumbai"
    ];
    const interval = setInterval(() => {
      counterRef.current += 1;
      const newReq = {
        id: `REQ${String(Date.now()).slice(-4)}`,
        passenger: PASSENGERS[counterRef.current % PASSENGERS.length],
        pickup: AREAS[counterRef.current % AREAS.length],
        drop: AREAS[(counterRef.current + 2) % AREAS.length],
        distance: `${(Math.random() * 12 + 1).toFixed(1)} km`,
        status: "waiting"
      };
      setRequests((prev) => [newReq, ...prev].slice(0, 8));
    }, 6e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 border-b border-border flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Live Ride Requests" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "text-[10px] px-2 py-0.5 rounded-full font-bold",
          style: {
            background: "oklch(0.52 0.14 155 / 0.15)",
            color: "oklch(0.52 0.14 155)"
          },
          children: "● Live"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "ID" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Passenger" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Pickup" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Drop" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Distance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: requests.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "tr",
        {
          className: "border-b border-border/50 hover:bg-secondary/20",
          "data-ocid": `admin.rides.request.row.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-mono text-[10px]", children: r.id }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-medium", children: r.passenger }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "text-muted-foreground", children: r.pickup }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "text-muted-foreground", children: r.drop }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: r.distance }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              SBadge,
              {
                label: r.status,
                color: r.status === "accepted" ? "green" : "amber"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: r.status === "waiting" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "h-7 text-xs text-green-600 border-green-200",
                  onClick: () => {
                    setRequests(
                      (p) => p.map(
                        (x) => x.id === r.id ? { ...x, status: "accepted" } : x
                      )
                    );
                    ue.success("Ride accepted");
                  },
                  "data-ocid": `admin.rides.request.confirm_button.${i + 1}`,
                  children: "Accept"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "h-7 text-xs text-destructive border-destructive/20",
                  onClick: () => {
                    setRequests((p) => p.filter((x) => x.id !== r.id));
                    ue.info("Ride rejected");
                  },
                  "data-ocid": `admin.rides.request.delete_button.${i + 1}`,
                  children: "Reject"
                }
              )
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground capitalize", children: r.status }) })
          ]
        },
        r.id
      )) })
    ] })
  ] });
}
function SurgePricingSchedule() {
  const [slots, setSlots] = reactExports.useState([
    {
      id: 1,
      label: "Morning Rush",
      time: "7:00 AM – 10:00 AM",
      multiplier: "1.5"
    },
    {
      id: 2,
      label: "Afternoon",
      time: "10:00 AM – 5:00 PM",
      multiplier: "1.0"
    },
    {
      id: 3,
      label: "Evening Rush",
      time: "5:00 PM – 9:00 PM",
      multiplier: "1.8"
    },
    { id: 4, label: "Night", time: "9:00 PM – 7:00 AM", multiplier: "1.2" }
  ]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Surge Pricing Schedule" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Time Slot" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Hours" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Multiplier" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TH, { children: "Save" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: slots.map((slot, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "tr",
        {
          className: "border-b border-border/50 hover:bg-secondary/20",
          "data-ocid": `admin.rides.surge.row.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "font-medium", children: slot.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { className: "text-muted-foreground", children: slot.time }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "number",
                step: "0.1",
                min: "1",
                max: "5",
                className: "h-7 w-20 text-xs",
                value: slot.multiplier,
                onChange: (e) => setSlots(
                  (p) => p.map(
                    (s) => s.id === slot.id ? { ...s, multiplier: e.target.value } : s
                  )
                ),
                "data-ocid": `admin.rides.surge.input.${i + 1}`
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TD, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "h-7 text-xs",
                onClick: () => ue.success(
                  `${slot.label} surge updated to ${slot.multiplier}×`
                ),
                "data-ocid": `admin.rides.surge.save_button.${i + 1}`,
                children: "Save"
              }
            ) })
          ]
        },
        slot.id
      )) })
    ] })
  ] });
}
const GAME_TITLES = [
  "Mystic Jungle Quest",
  "Cricket Champions 2026",
  "Bollywood Trivia Blitz",
  "Spice Route Adventure",
  "Mumbai Street Puzzle",
  "Space Warrior India",
  "Ramayana Quest",
  "Chai Time Challenge",
  "Festival Frenzy",
  "River Rafting Heroes"
];
const GENRES = ["Adventure", "Trivia", "Puzzle", "Racing", "Strategy"];
const AGE_GROUPS = ["6-10", "11-14", "15-18", "18+", "All Ages"];
const DIFFICULTIES = ["Easy", "Medium", "Hard"];
function Agent19LiveFeed() {
  const [feed, setFeed] = reactExports.useState([
    {
      id: 1,
      title: "Cricket Champions 2026",
      genre: "Sports",
      age: "All Ages",
      difficulty: "Medium",
      time: "Just now"
    },
    {
      id: 2,
      title: "Mystic Jungle Quest",
      genre: "Adventure",
      age: "11-14",
      difficulty: "Hard",
      time: "2 min ago"
    }
  ]);
  const [processed, setProcessed] = reactExports.useState(48);
  const [alerts, setAlerts] = reactExports.useState(2);
  const counterRef = reactExports.useRef(0);
  reactExports.useEffect(() => {
    const interval = setInterval(() => {
      counterRef.current += 1;
      const entry = {
        id: Date.now(),
        title: GAME_TITLES[counterRef.current % GAME_TITLES.length],
        genre: GENRES[counterRef.current % GENRES.length],
        age: AGE_GROUPS[counterRef.current % AGE_GROUPS.length],
        difficulty: DIFFICULTIES[counterRef.current % DIFFICULTIES.length],
        time: "Just now"
      };
      setFeed((prev) => [entry, ...prev].slice(0, 10));
      setProcessed((p) => p + 1);
      if (counterRef.current % 5 === 0) setAlerts((a) => a + 1);
    }, 8e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 bg-card border border-border rounded-xl p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-semibold flex items-center gap-2", children: [
        "Live Output",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "text-[10px] px-2 py-0.5 rounded-full font-bold",
            style: {
              background: "oklch(0.52 0.14 155 / 0.15)",
              color: "oklch(0.52 0.14 155)"
            },
            children: "● Running"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground", children: "Last Run: just now" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: "text-[11px] px-2 py-0.5 rounded-full",
            style: {
              background: "oklch(0.52 0.14 155 / 0.15)",
              color: "oklch(0.52 0.14 155)"
            },
            children: [
              "Processed: ",
              processed
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: "text-[11px] px-2 py-0.5 rounded-full",
            style: {
              background: "oklch(0.72 0.17 85 / 0.15)",
              color: "oklch(0.65 0.14 50)"
            },
            children: [
              "Alerts: ",
              alerts
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 max-h-48 overflow-y-auto", children: feed.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center justify-between p-2 rounded-lg bg-secondary/30 text-xs",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: g.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground ml-2", children: [
              g.genre,
              " · ",
              g.difficulty,
              " · Age ",
              g.age
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground shrink-0", children: g.time })
        ]
      },
      g.id
    )) })
  ] });
}
const COMIC_TITLES = [
  "Monday Blues",
  "The Chai Diaries",
  "Office Life",
  "Festival Chaos",
  "Traffic Woes",
  "Tech Troubles",
  "Family Drama"
];
const PUNCHLINES = [
  "When your phone battery dies at 1%... 😱",
  "Monday morning alarm: a horror story 🔔",
  "Boss: This should only take 5 minutes. Me: 3 days later... ⌛",
  "When the delivery guy calls but you're on another call 📞",
  "Me pretending to understand the meeting 🤝"
];
const MOODS = ["funny", "sarcastic", "wholesome"];
function Agent20LiveFeed() {
  const [feed, setFeed] = reactExports.useState([
    {
      id: 1,
      title: "Monday Blues",
      punchline: "When your alarm goes off 5 minutes after you finally fell asleep 😅",
      mood: "funny",
      time: "Just now"
    },
    {
      id: 2,
      title: "The Chai Diaries",
      punchline: "No meeting is complete without chai. Science. 🍵",
      mood: "wholesome",
      time: "8 min ago"
    }
  ]);
  const [processed, setProcessed] = reactExports.useState(23);
  const [alerts, setAlerts] = reactExports.useState(1);
  const counterRef = reactExports.useRef(0);
  reactExports.useEffect(() => {
    const interval = setInterval(() => {
      counterRef.current += 1;
      const entry = {
        id: Date.now(),
        title: COMIC_TITLES[counterRef.current % COMIC_TITLES.length],
        punchline: PUNCHLINES[counterRef.current % PUNCHLINES.length],
        mood: MOODS[counterRef.current % MOODS.length],
        time: "Just now"
      };
      setFeed((prev) => [entry, ...prev].slice(0, 10));
      setProcessed((p) => p + 1);
      if (counterRef.current % 4 === 0) setAlerts((a) => a + 1);
    }, 8e3);
    return () => clearInterval(interval);
  }, []);
  const moodColors = {
    funny: "oklch(0.65 0.25 335)",
    sarcastic: "oklch(0.72 0.17 85)",
    wholesome: "oklch(0.52 0.14 155)"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 bg-card border border-border rounded-xl p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Live Output" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground", children: "Last Run: just now" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: "text-[11px] px-2 py-0.5 rounded-full",
            style: {
              background: "oklch(0.52 0.14 155 / 0.15)",
              color: "oklch(0.52 0.14 155)"
            },
            children: [
              "Generated: ",
              processed
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: "text-[11px] px-2 py-0.5 rounded-full",
            style: {
              background: "oklch(0.72 0.17 85 / 0.15)",
              color: "oklch(0.65 0.14 50)"
            },
            children: [
              "Alerts: ",
              alerts
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 max-h-48 overflow-y-auto", children: feed.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center justify-between p-2 rounded-lg bg-secondary/30 text-xs",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: c.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground ml-2", children: c.punchline })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-[10px] px-1.5 py-0.5 rounded-full shrink-0 ml-2",
              style: {
                background: `${moodColors[c.mood]}18`,
                color: moodColors[c.mood]
              },
              children: c.mood
            }
          )
        ]
      },
      c.id
    )) })
  ] });
}
function Agent19PreviewDialog() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        size: "sm",
        variant: "outline",
        className: "mt-2",
        "data-ocid": "admin.agent19.preview.open_modal_button",
        children: "Preview for Users"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      DialogContent,
      {
        className: "sm:max-w-lg",
        "data-ocid": "admin.agent19.preview.dialog",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "🎮 Games — User View" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2", children: [
            {
              title: "Cricket Champions 2026",
              genre: "Sports",
              difficulty: "Medium",
              age: "All Ages"
            },
            {
              title: "Mystic Jungle Quest",
              genre: "Adventure",
              difficulty: "Hard",
              age: "11-14"
            },
            {
              title: "Chai Quiz Showdown",
              genre: "Trivia",
              difficulty: "Easy",
              age: "All Ages"
            },
            {
              title: "Bollywood Beats Rush",
              genre: "Music",
              difficulty: "Easy",
              age: "16+"
            }
          ].map((g, _i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "border border-border rounded-xl p-3 space-y-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: g.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-1.5 py-0.5 rounded-full font-medium bg-primary/10 text-primary", children: g.difficulty })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  g.genre,
                  " · Age ",
                  g.age
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-full rounded-lg py-1.5 text-xs font-semibold text-center text-primary-foreground",
                    style: { background: "oklch(0.55 0.22 280)" },
                    children: "Play Now"
                  }
                )
              ]
            },
            g.title
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              className: "mt-3 w-full",
              onClick: () => setOpen(false),
              "data-ocid": "admin.agent19.preview.close_button",
              children: "Close Preview"
            }
          )
        ]
      }
    )
  ] });
}
function OpenApiCard({
  api,
  index
}) {
  const [syncing, setSyncing] = reactExports.useState(false);
  const [lastSynced, setLastSynced] = reactExports.useState(api.lastSynced);
  const [records, setRecords] = reactExports.useState(api.records);
  const handleSync = () => {
    setSyncing(true);
    setTimeout(() => {
      setSyncing(false);
      setLastSynced("just now");
      setRecords((r) => r + Math.floor(Math.random() * 50));
      ue.success(`${api.name} synced successfully!`);
    }, 2e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card border border-border rounded-xl p-3 space-y-2",
      "data-ocid": `admin.openapi.card.${index}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: api.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold", children: api.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary", children: api.type })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground space-y-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "Last synced: ",
            lastSynced
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "Records: ",
            records.toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: "flex-1 h-7 text-xs gap-1",
              disabled: syncing,
              onClick: handleSync,
              "data-ocid": `admin.openapi.run.primary_button.${index}`,
              children: [
                syncing ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-3 w-3 animate-spin" }) : "▶",
                " ",
                syncing ? "Syncing..." : "Run Now"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "h-7 text-xs",
              onClick: () => ue.info(`Edit ${api.name} settings`),
              "data-ocid": `admin.openapi.edit.secondary_button.${index}`,
              children: "Edit"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "h-7 text-xs text-destructive border-destructive/20",
              onClick: () => ue.info(`${api.name} removed`),
              "data-ocid": `admin.openapi.delete_button.${index}`,
              children: "✕"
            }
          )
        ] })
      ]
    }
  );
}
function AddNewApiDialog() {
  const [open, setOpen] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    url: "",
    key: "",
    dataType: "products",
    frequency: "daily"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", "data-ocid": "admin.openapi.add.open_modal_button", children: "+ Add New API" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      DialogContent,
      {
        className: "sm:max-w-md",
        "data-ocid": "admin.openapi.add.dialog",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Add New API" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "API Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  className: "mt-1",
                  placeholder: "e.g. Open Brewery DB",
                  value: form.name,
                  onChange: (e) => setForm((p) => ({ ...p, name: e.target.value })),
                  "data-ocid": "admin.openapi.add.input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Base URL" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  className: "mt-1",
                  placeholder: "https://api.example.com/v1",
                  value: form.url,
                  onChange: (e) => setForm((p) => ({ ...p, url: e.target.value }))
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "API Key (optional)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  className: "mt-1",
                  placeholder: "sk-...",
                  value: form.key,
                  onChange: (e) => setForm((p) => ({ ...p, key: e.target.value }))
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Data Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: form.dataType,
                  onValueChange: (v) => setForm((p) => ({ ...p, dataType: v })),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectTrigger,
                      {
                        className: "mt-1",
                        "data-ocid": "admin.openapi.add.type.select",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "products", children: "Products" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "services", children: "Services" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "events", children: "Events" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "jobs", children: "Jobs" })
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Sync Frequency" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: form.frequency,
                  onValueChange: (v) => setForm((p) => ({ ...p, frequency: v })),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectTrigger,
                      {
                        className: "mt-1",
                        "data-ocid": "admin.openapi.add.freq.select",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "hourly", children: "Hourly" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "daily", children: "Daily" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "weekly", children: "Weekly" })
                    ] })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "flex-1",
                onClick: () => {
                  if (!form.name.trim() || !form.url.trim()) {
                    ue.error("Name and URL required");
                    return;
                  }
                  ue.success(`${form.name} API added`);
                  setOpen(false);
                  setForm({
                    name: "",
                    url: "",
                    key: "",
                    dataType: "products",
                    frequency: "daily"
                  });
                },
                "data-ocid": "admin.openapi.add.confirm_button",
                children: "Add API"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                onClick: () => setOpen(false),
                "data-ocid": "admin.openapi.add.cancel_button",
                children: "Cancel"
              }
            )
          ] })
        ]
      }
    )
  ] });
}
function Agent20PreviewDialog() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        size: "sm",
        variant: "outline",
        className: "mt-2",
        "data-ocid": "admin.agent20.preview.open_modal_button",
        children: "Preview Comics"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      DialogContent,
      {
        className: "sm:max-w-lg",
        "data-ocid": "admin.agent20.preview.dialog",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "😄 Comics — User View" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2", children: [
            {
              title: "Monday Blues",
              punchline: "When your alarm goes off 5 min after you finally fell asleep 😅",
              mood: "funny"
            },
            {
              title: "The Chai Diaries",
              punchline: "No meeting is complete without chai. Science. 🍵",
              mood: "wholesome"
            },
            {
              title: "Tech Troubles",
              punchline: "Boss: This should take 5 min. Me: 3 days later... ⌛",
              mood: "sarcastic"
            },
            {
              title: "Traffic Woes",
              punchline: "GPS says 10 min, Mumbai says otherwise 🚦",
              mood: "funny"
            }
          ].map((c, _i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "border border-border rounded-xl p-3 space-y-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: c.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary", children: c.mood })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-secondary/40 rounded-lg px-3 py-2 text-xs", children: c.punchline })
              ]
            },
            c.title
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              className: "mt-3 w-full",
              onClick: () => setOpen(false),
              "data-ocid": "admin.agent20.preview.close_button",
              children: "Close Preview"
            }
          )
        ]
      }
    )
  ] });
}
function Agent21FullPanel() {
  const [regions, setRegions] = React.useState({
    India: true,
    Greece: true,
    Egypt: true,
    Norse: true,
    Japan: true,
    China: true,
    Mesopotamia: false,
    Celtic: false,
    "Aztec/Maya": false,
    African: false
  });
  const [contentTypes, setContentTypes] = React.useState({
    "Mythological Stories": true,
    "Rituals & Beliefs": true,
    "Cultural Similarities": true,
    "Festival Origins": false
  });
  const [storiesPerDay, setStoriesPerDay] = React.useState([5]);
  const [crossCulture, setCrossCulture] = React.useState(true);
  const [storiesGenerated, setStoriesGenerated] = React.useState(47);
  const [culturesLinked, setCulturesLinked] = React.useState(23);
  const [monitorLog, setMonitorLog] = React.useState([
    "Generated story: Diwali origins across Hindu, Jain, Sikh traditions",
    "Linked similarity: Flood myths in Hindu (Manu) and Mesopotamian (Utnapishtim) traditions",
    "Fetched ritual: Holi color symbolism — India, Iran connection found"
  ]);
  const logRef = React.useRef(0);
  const SPIRIT_LOG_ENTRIES = [
    "Generated: The Churning of the Ocean (Hindu) — linked to Greek Titan wars",
    "Similarity found: Trickster gods — Loki (Norse) and Narada (Hindu)",
    "Ritual documented: Pongal harvest festival — parallels with Japanese Niiname-sai",
    "Story published: Ramayana — The Bridge to Lanka • Blog post live",
    "Cross-culture link: Creation myths in 9 cultures mapped",
    "Fetched: Aztec calendar system — connection to Hindu Kalachakra noted",
    "Generated: Zeus & Indra — Thunder gods across cultures analysis",
    "Published: Egyptian Book of the Dead vs. Garuda Purana — similarities blog"
  ];
  React.useEffect(() => {
    const t = setInterval(() => {
      logRef.current += 1;
      const entry = SPIRIT_LOG_ENTRIES[logRef.current % SPIRIT_LOG_ENTRIES.length];
      setMonitorLog(
        (p) => [`[${(/* @__PURE__ */ new Date()).toLocaleTimeString()}] ${entry}`, ...p].slice(0, 20)
      );
      setStoriesGenerated((c) => c + 1);
      if (logRef.current % 3 === 0) setCulturesLinked((c) => c + 1);
    }, 9e3);
    return () => clearInterval(t);
  }, []);
  const PREVIEW_STORIES = [
    {
      title: "The Great Flood — A Story Told in 12 Cultures",
      culture: "Cross-Cultural",
      excerpt: "From Manu in Hindu scriptures to Noah in Abrahamic faiths, and Utnapishtim in Mesopotamian legend — the tale of a great flood appears across every major civilization..."
    },
    {
      title: "Diwali, Nouruz, and the Festival of Lights",
      culture: "Hindu / Persian",
      excerpt: "The triumph of light over darkness is celebrated across South Asia and Iran. Diwali marks Rama's return; Nouruz marks the Persian New Year — both begin with lamps and fire..."
    },
    {
      title: "Trickster Gods: Loki, Anansi, and Narada",
      culture: "Norse / African / Hindu",
      excerpt: "Every mythology has a trickster — a god who disrupts, enlightens, and challenges the order of things. These three figures from three continents share uncanny similarities..."
    }
  ];
  const [previewOpen, setPreviewOpen] = React.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "config", className: "w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid grid-cols-3 w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "config", "data-ocid": "admin.agent21.config.tab", children: "Config" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TabsTrigger,
        {
          value: "monitoring",
          "data-ocid": "admin.agent21.monitoring.tab",
          children: "Monitoring"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "preview", "data-ocid": "admin.agent21.preview.tab", children: "Preview" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "config", className: "space-y-4 mt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Regions / Mythologies" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: Object.entries(regions).map(([r, checked]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Checkbox,
            {
              checked,
              onCheckedChange: (v) => setRegions((p) => ({ ...p, [r]: !!v })),
              "data-ocid": `admin.agent21.region.${r.toLowerCase().replace(/\//g, "_")}.checkbox`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: r })
        ] }, r)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Content Types" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: Object.entries(contentTypes).map(([ct, checked]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Checkbox,
            {
              checked,
              onCheckedChange: (v) => setContentTypes((p) => ({ ...p, [ct]: !!v }))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: ct })
        ] }, ct)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs font-semibold", children: [
          "Stories per Day: ",
          storiesPerDay[0]
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Slider,
          {
            min: 1,
            max: 20,
            step: 1,
            value: storiesPerDay,
            onValueChange: setStoriesPerDay
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Cross-culture linking" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Switch,
          {
            checked: crossCulture,
            onCheckedChange: setCrossCulture,
            "data-ocid": "admin.agent21.cross_culture.toggle"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          onClick: () => ue.success("Agent 21 config saved"),
          "data-ocid": "admin.agent21.save.primary_button",
          children: "Save Config"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "monitoring", className: "space-y-4 mt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: [
        { label: "Stories Generated", value: storiesGenerated },
        { label: "Cultures Linked", value: culturesLinked },
        {
          label: "Blogs Published",
          value: Math.floor(storiesGenerated * 0.7)
        }
      ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-xl border border-border p-3 text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-primary", children: s.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-0.5", children: s.label })
          ]
        },
        s.label
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border bg-muted/30 p-3 max-h-52 overflow-y-auto font-mono text-[11px] space-y-1", children: monitorLog.map((line) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: line }, line)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          variant: "outline",
          onClick: () => ue.success("Scan triggered"),
          "data-ocid": "admin.agent21.generate.primary_button",
          children: "Generate Now"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "preview", className: "space-y-4 mt-4", children: [
      PREVIEW_STORIES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "border border-border rounded-xl p-4 space-y-2",
          "data-ocid": `admin.agent21.preview.card.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold leading-snug", children: s.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary whitespace-nowrap shrink-0", children: s.culture })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-clamp-3", children: s.excerpt }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "ghost", className: "h-7 text-xs px-2", children: "Read in Blog →" })
          ]
        },
        s.title
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "outline",
          className: "w-full",
          onClick: () => setPreviewOpen(true),
          "data-ocid": "admin.agent21.preview.open_modal_button",
          children: "Preview All Stories"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: previewOpen, onOpenChange: setPreviewOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Spiritual Stories Preview" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Showing latest stories generated by Agent 21. Users can read these in the Spiritual Stories page." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            onClick: () => setPreviewOpen(false),
            "data-ocid": "admin.agent21.preview.close_button",
            children: "Close"
          }
        )
      ] }) })
    ] })
  ] });
}
export {
  AdminPanelPage as default
};
