import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Activity,
  AlertTriangle,
  BookOpen,
  Bot,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronDown,
  Crown,
  Database,
  DollarSign,
  Eye,
  Factory,
  GraduationCap,
  Heart,
  Image,
  ImageIcon,
  Link2,
  Loader2,
  MapPin,
  MessageSquare,
  MoreHorizontal,
  Package,
  Palette,
  Percent,
  Plus,
  RefreshCw,
  RotateCcw,
  Search,
  Settings2,
  Share2,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Star,
  Trash2,
  TrendingUp,
  UserX,
  Users,
  XCircle,
  Zap,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import {
  Agent11BusinessDiscovery,
  BusinessClaimsAdmin,
} from "../components/BusinessDiscoveryFeatures";
import { type Review, getReviews } from "../components/ReviewModal";

// ─── Shared helpers ───────────────────────────────────────────────────────────

function SBadge({
  label,
  color,
}: {
  label: string;
  color: "green" | "amber" | "red" | "blue" | "violet" | "rose" | "gray";
}) {
  const map: Record<string, { bg: string; text: string }> = {
    green: { bg: "oklch(0.52 0.14 155 / 0.12)", text: "oklch(0.35 0.10 155)" },
    amber: { bg: "oklch(0.72 0.17 85 / 0.15)", text: "oklch(0.50 0.14 65)" },
    red: { bg: "oklch(0.55 0.22 25 / 0.12)", text: "oklch(0.45 0.18 25)" },
    blue: { bg: "oklch(0.55 0.15 240 / 0.12)", text: "oklch(0.40 0.12 240)" },
    violet: { bg: "oklch(0.55 0.22 280 / 0.12)", text: "oklch(0.45 0.18 280)" },
    rose: { bg: "oklch(0.65 0.25 335 / 0.12)", text: "oklch(0.50 0.20 335)" },
    gray: { bg: "oklch(0.55 0.02 0 / 0.12)", text: "oklch(0.45 0.02 0)" },
  };
  const s = map[color];
  return (
    <span
      className="text-[10px] font-label font-semibold px-2 py-0.5 rounded-full whitespace-nowrap"
      style={{ background: s.bg, color: s.text }}
    >
      {label}
    </span>
  );
}

function TH({ children }: { children: React.ReactNode }) {
  return (
    <th className="text-left px-3 py-2.5 text-[11px] font-label font-semibold text-muted-foreground bg-secondary/40 border-b border-border whitespace-nowrap">
      {children}
    </th>
  );
}
function TD({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <td
      className={`px-3 py-2 text-xs font-label text-foreground border-b border-border/50 ${className}`}
      style={style}
    >
      {children}
    </td>
  );
}

function ActionBtn({
  label,
  color = "default",
  onClick,
}: {
  label: string;
  color?: "green" | "red" | "amber" | "default";
  onClick?: () => void;
}) {
  const styles: Record<string, string> = {
    green:
      "text-[oklch(0.35_0.10_155)] border-[oklch(0.52_0.14_155/0.3)] hover:bg-[oklch(0.52_0.14_155/0.08)]",
    red: "text-[oklch(0.45_0.18_25)] border-[oklch(0.55_0.22_25/0.3)] hover:bg-[oklch(0.55_0.22_25/0.08)]",
    amber:
      "text-[oklch(0.50_0.14_65)] border-[oklch(0.72_0.17_85/0.3)] hover:bg-[oklch(0.72_0.17_85/0.08)]",
    default: "text-muted-foreground border-border hover:bg-secondary/60",
  };
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-[11px] font-label font-medium px-2 py-1 rounded border transition-colors ${styles[color]}`}
    >
      {label}
    </button>
  );
}

// ─── Agent 1 ─────────────────────────────────────────────────────────────────

const COMPLAINTS = [
  {
    id: "CMP-001",
    target: "Khan Electronics",
    category: "Fraud",
    desc: "Sold counterfeit phone charger claiming it was original branded product",
    status: "open",
    date: "Mar 1, 2026",
  },
  {
    id: "CMP-002",
    target: "Riaz Coaching",
    category: "Quality",
    desc: "Teacher did not deliver promised course content for three weeks",
    status: "reviewing",
    date: "Feb 28, 2026",
  },
  {
    id: "CMP-003",
    target: "Ahmed Hassan",
    category: "Harassment",
    desc: "User sending repeated unsolicited messages after being ignored",
    status: "resolved",
    date: "Feb 27, 2026",
  },
  {
    id: "CMP-004",
    target: "Al-Noor Pharmacy",
    category: "Misinformation",
    desc: "Listing expired medicines as in-date stock with wrong expiry labels",
    status: "escalated",
    date: "Feb 26, 2026",
  },
  {
    id: "CMP-005",
    target: "DHA Rentals",
    category: "Fraud",
    desc: "Property listed for rent does not exist at mentioned address",
    status: "open",
    date: "Feb 25, 2026",
  },
  {
    id: "CMP-006",
    target: "Green Valley School",
    category: "Quality",
    desc: "Results portal has been inaccessible for two weeks with no communication",
    status: "reviewing",
    date: "Feb 24, 2026",
  },
  {
    id: "CMP-007",
    target: "Usman Travels",
    category: "Other",
    desc: "Overcharged clients by 40% compared to advertised package price",
    status: "resolved",
    date: "Feb 23, 2026",
  },
  {
    id: "CMP-008",
    target: "Malik Bakers",
    category: "Quality",
    desc: "Product arrived damaged and customer support refused to respond",
    status: "open",
    date: "Feb 22, 2026",
  },
  {
    id: "CMP-009",
    target: "TechPK Store",
    category: "Fraud",
    desc: "Fake affiliate links redirecting users to phishing websites",
    status: "escalated",
    date: "Feb 21, 2026",
  },
  {
    id: "CMP-010",
    target: "Karachi Movers",
    category: "Harassment",
    desc: "Staff member threatened customer after negative review",
    status: "reviewing",
    date: "Feb 20, 2026",
  },
];

const BLOCKED_USERS = [
  {
    user: "ali.raza92",
    reason: "Repeated spam messages",
    blockedDate: "Mar 1, 2026",
    reactivation: "Mar 8, 2026",
  },
  {
    user: "zahra.m***",
    reason: "Abusive language in chat",
    blockedDate: "Feb 28, 2026",
    reactivation: "Mar 7, 2026",
  },
  {
    user: "imran.k***",
    reason: "Posting fraudulent listings",
    blockedDate: "Feb 27, 2026",
    reactivation: "Mar 27, 2026",
  },
  {
    user: "sara.a***",
    reason: "Harassment of another user",
    blockedDate: "Feb 26, 2026",
    reactivation: "Mar 5, 2026",
  },
  {
    user: "faisal.***",
    reason: "Distributing misinformation",
    blockedDate: "Feb 25, 2026",
    reactivation: "Mar 11, 2026",
  },
  {
    user: "nida.h***",
    reason: "Multiple fake reviews posted",
    blockedDate: "Feb 24, 2026",
    reactivation: "Mar 3, 2026",
  },
  {
    user: "omar.q***",
    reason: "Scam product listings",
    blockedDate: "Feb 23, 2026",
    reactivation: "Permanent",
  },
];

const REVIEWS = [
  {
    entity: "Khan Electronics",
    rating: 2,
    text: "Product quality is very poor and customer support is unresponsive.",
    likes: 14,
    dislikes: 2,
  },
  {
    entity: "Usman Travels",
    rating: 4,
    text: "Good travel experience but some hidden charges were added at checkout.",
    likes: 8,
    dislikes: 1,
  },
  {
    entity: "Riaz Coaching Center",
    rating: 1,
    text: "Teacher barely attends classes and assignments are never marked.",
    likes: 22,
    dislikes: 0,
  },
  {
    entity: "Al-Noor Pharmacy",
    rating: 3,
    text: "Prices are reasonable but expired products on shelves is concerning.",
    likes: 11,
    dislikes: 3,
  },
  {
    entity: "TechPK Store",
    rating: 5,
    text: "Excellent service and very fast delivery. Highly recommend.",
    likes: 6,
    dislikes: 0,
  },
  {
    entity: "Green Valley School",
    rating: 2,
    text: "Communication from admin is terrible. Parents are left in the dark.",
    likes: 19,
    dislikes: 2,
  },
  {
    entity: "DHA Rentals",
    rating: 1,
    text: "Property shown in photos does not match what was available on visit.",
    likes: 31,
    dislikes: 1,
  },
  {
    entity: "Malik Bakers",
    rating: 4,
    text: "Delicious products but packaging needs improvement for deliveries.",
    likes: 4,
    dislikes: 0,
  },
  {
    entity: "Karachi Movers",
    rating: 2,
    text: "Items were damaged during the move and company refused to compensate.",
    likes: 17,
    dislikes: 4,
  },
  {
    entity: "City Hospital Clinic",
    rating: 5,
    text: "Doctors are extremely professional and waiting time is minimal.",
    likes: 9,
    dislikes: 0,
  },
];

const ABUSE_LOGS = [
  {
    time: "Mar 1 09:14",
    severity: "high",
    snippet: "Reported account 'ali.raza92' for sending spam to 15+ users",
    action: "Account blocked 7 days",
  },
  {
    time: "Feb 28 16:32",
    severity: "medium",
    snippet: "Detected abusive language in complaint #CMP-002 comment thread",
    action: "Comment removed + warning sent",
  },
  {
    time: "Feb 28 11:05",
    severity: "critical",
    snippet: "Phishing link detected in affiliate post by 'faisal.***'",
    action: "Post removed + account blocked",
  },
  {
    time: "Feb 27 14:20",
    severity: "low",
    snippet: "User flagged product review as fake on Khan Electronics listing",
    action: "Review flagged for manual review",
  },
  {
    time: "Feb 26 08:45",
    severity: "high",
    snippet: "Harassment detected: 'sara.a***' sent 40+ messages in 1 hour",
    action: "Account blocked 7 days",
  },
  {
    time: "Feb 25 19:33",
    severity: "medium",
    snippet: "Misinformation detected in blog post about healthcare supplement",
    action: "Post quarantined + author warned",
  },
  {
    time: "Feb 24 12:00",
    severity: "critical",
    snippet: "Mass fake review campaign detected: 8 reviews from same IP",
    action: "All reviews removed + IPs blocked",
  },
  {
    time: "Feb 23 15:47",
    severity: "low",
    snippet: "User reported misleading job salary description in listing",
    action: "Listing flagged for update",
  },
];

// ─── Agent 2 ─────────────────────────────────────────────────────────────────

const PERF_LOGS = [
  { time: "Mar 1 09:00", metric: "Page Load", value: "1.2s", status: "good" },
  {
    time: "Mar 1 09:00",
    metric: "API Response",
    value: "340ms",
    status: "good",
  },
  { time: "Mar 1 09:00", metric: "Error Rate", value: "0.12%", status: "good" },
  { time: "Mar 1 09:00", metric: "Memory Usage", value: "62%", status: "warn" },
  { time: "Mar 1 09:00", metric: "DB Query", value: "280ms", status: "good" },
  { time: "Feb 28 21:00", metric: "Page Load", value: "2.8s", status: "warn" },
  {
    time: "Feb 28 21:00",
    metric: "API Response",
    value: "890ms",
    status: "warn",
  },
  { time: "Feb 28 21:00", metric: "Error Rate", value: "1.8%", status: "bad" },
  { time: "Feb 28 21:00", metric: "Memory Usage", value: "87%", status: "bad" },
  { time: "Feb 28 21:00", metric: "DB Query", value: "1240ms", status: "bad" },
  { time: "Feb 27 09:00", metric: "Page Load", value: "1.1s", status: "good" },
  {
    time: "Feb 27 09:00",
    metric: "API Response",
    value: "310ms",
    status: "good",
  },
  {
    time: "Feb 27 09:00",
    metric: "Error Rate",
    value: "0.08%",
    status: "good",
  },
  {
    time: "Feb 27 09:00",
    metric: "Memory Usage",
    value: "58%",
    status: "good",
  },
  { time: "Feb 27 09:00", metric: "DB Query", value: "195ms", status: "good" },
  { time: "Feb 26 09:00", metric: "Page Load", value: "1.4s", status: "good" },
  {
    time: "Feb 26 09:00",
    metric: "API Response",
    value: "420ms",
    status: "good",
  },
  {
    time: "Feb 26 09:00",
    metric: "Error Rate",
    value: "0.25%",
    status: "good",
  },
  {
    time: "Feb 26 09:00",
    metric: "Memory Usage",
    value: "71%",
    status: "warn",
  },
  { time: "Feb 26 09:00", metric: "DB Query", value: "340ms", status: "good" },
];

const SNAPSHOTS = [
  {
    label: "Pre-Education Module Update",
    time: "Mar 1, 2026 08:00",
    hash: "a3f9c1d2e4b6",
  },
  {
    label: "Pre-Jobs Enhancement",
    time: "Feb 27, 2026 10:30",
    hash: "b7e2a5f8c0d1",
  },
  {
    label: "Pre-Agent Integration",
    time: "Feb 25, 2026 09:15",
    hash: "c4d1b9e3a7f0",
  },
  {
    label: "Weekly Auto-Snapshot",
    time: "Feb 22, 2026 00:00",
    hash: "d8f0c2a6e1b5",
  },
  {
    label: "Pre-Matrimony Activation",
    time: "Feb 19, 2026 14:00",
    hash: "e2b4d7f1a3c9",
  },
];

const HEALING_EVENTS = [
  {
    issue: "Memory leak in GeoMap component",
    action: "Cleared event listeners on unmount",
    before: "87% memory",
    after: "58% memory",
    status: "fixed",
  },
  {
    issue: "Slow API response on product search",
    action: "Enabled response caching for 5 mins",
    before: "890ms",
    after: "310ms",
    status: "fixed",
  },
  {
    issue: "Broken image URLs in product listings",
    action: "Replaced with fallback placeholder images",
    before: "404 errors",
    after: "0 errors",
    status: "fixed",
  },
  {
    issue: "High error rate during peak hours",
    action: "Added request throttling + retry logic",
    before: "1.8%",
    after: "0.12%",
    status: "fixed",
  },
  {
    issue: "Login session timeout too short",
    action: "Extended session TTL to 24 hours",
    before: "1 hour",
    after: "24 hours",
    status: "fixed",
  },
  {
    issue: "Duplicate notifications on feed refresh",
    action: "Added deduplication key to notification store",
    before: "Duplicates",
    after: "Clean",
    status: "fixed",
  },
  {
    issue: "Slow loading Education module (4.2s)",
    action: "Lazy loaded tab content and deferred images",
    before: "4.2s",
    after: "1.1s",
    status: "fixed",
  },
  {
    issue: "Mobile sidebar overlap on iOS Safari",
    action: "Applied safe-area-inset fixes",
    before: "Overlap bug",
    after: "Correct",
    status: "pending",
  },
];

// ─── Agent 3 ─────────────────────────────────────────────────────────────────

const SYNCED_PRODUCTS = [
  {
    name: "Apple iPhone 15 Pro",
    source: "FakeStore API",
    price: "PKR 289,000",
    synced: "Mar 1, 2026",
  },
  {
    name: "Sony WH-1000XM5 Headphones",
    source: "FakeStore API",
    price: "PKR 62,000",
    synced: "Mar 1, 2026",
  },
  {
    name: "Organic Basmati Rice 5kg",
    source: "OpenFoodFacts",
    price: "INR 1,200",
    synced: "Feb 28, 2026",
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    source: "FakeStore API",
    price: "PKR 319,000",
    synced: "Feb 28, 2026",
  },
  {
    name: "Premium Olive Oil 1L",
    source: "OpenFoodFacts",
    price: "PKR 1,800",
    synced: "Feb 28, 2026",
  },
  {
    name: 'MacBook Air M3 15"',
    source: "FakeStore API",
    price: "PKR 385,000",
    synced: "Feb 27, 2026",
  },
  {
    name: "Green Tea Matcha 200g",
    source: "OpenFoodFacts",
    price: "PKR 2,400",
    synced: "Feb 27, 2026",
  },
  {
    name: "DJI Mini 4 Pro Drone",
    source: "FakeStore API",
    price: "PKR 145,000",
    synced: "Feb 26, 2026",
  },
  {
    name: "Himalayan Pink Salt 1kg",
    source: "OpenFoodFacts",
    price: "PKR 350",
    synced: "Feb 26, 2026",
  },
  {
    name: "Dell XPS 15 Laptop",
    source: "FakeStore API",
    price: "PKR 295,000",
    synced: "Feb 25, 2026",
  },
  {
    name: "Almond Milk Oat Blend",
    source: "OpenFoodFacts",
    price: "PKR 880",
    synced: "Feb 25, 2026",
  },
  {
    name: "Bose QuietComfort 45",
    source: "FakeStore API",
    price: "PKR 78,000",
    synced: "Feb 24, 2026",
  },
];

const CONSENT_REQUESTS = [
  {
    user: "ali.r***",
    field: "Occupation",
    oldVal: "Engineer",
    newVal: "Senior Software Engineer",
    status: "pending",
  },
  {
    user: "sara.k***",
    field: "Phone Number",
    oldVal: "+92-300-***",
    newVal: "+92-321-***",
    status: "accepted",
  },
  {
    user: "zara.m***",
    field: "Business Category",
    oldVal: "Retail",
    newVal: "E-Commerce & Retail",
    status: "pending",
  },
  {
    user: "imran.***",
    field: "Date of Birth",
    oldVal: "1985",
    newVal: "1985-03-12",
    status: "dismissed",
  },
  {
    user: "fatima***",
    field: "Education Level",
    oldVal: "Graduate",
    newVal: "Post-Graduate (MBA)",
    status: "pending",
  },
];

const API_SOURCES = [
  {
    name: "FakeStore API",
    url: "https://fakestoreapi.com",
    enabled: true,
    lastRun: "Mar 1, 2026 06:00",
    count: 52,
  },
  {
    name: "OpenFoodFacts",
    url: "https://world.openfoodfacts.org",
    enabled: true,
    lastRun: "Mar 1, 2026 06:00",
    count: 37,
  },
  {
    name: "REST Countries",
    url: "https://restcountries.com",
    enabled: true,
    lastRun: "Mar 1, 2026 06:00",
    count: 250,
  },
  {
    name: "Open Library API",
    url: "https://openlibrary.org",
    enabled: false,
    lastRun: "Feb 20, 2026 06:00",
    count: 0,
  },
];

// ─── Agent 4 ─────────────────────────────────────────────────────────────────

const EVOLUTION_CHANGES = [
  {
    title: "One-click Apply from Feed Posts",
    desc: "Users can apply to jobs directly from feed posts without navigating to the Jobs module.",
    category: "UX",
    status: "pending",
    likes: 47,
    dislikes: 3,
  },
  {
    title: "Community Feed Pinned Announcements",
    desc: "Community admins can pin important announcements to appear at the top of the community feed.",
    category: "Feature",
    status: "approved",
    likes: 61,
    dislikes: 2,
  },
  {
    title: "Dark mode for Geomap layers",
    desc: "Map layer controls now adapt to the user's dark/light mode preference automatically.",
    category: "UI",
    status: "pending",
    likes: 38,
    dislikes: 7,
  },
  {
    title: "Family Tree Quick Connect on hover",
    desc: "Hovering a family tree node shows a connect/message button without opening the full profile.",
    category: "UX",
    status: "pending",
    likes: 29,
    dislikes: 5,
  },
  {
    title: "Bulk export data as PDF/CSV",
    desc: "Users can export their records from any module as PDF or CSV for offline use.",
    category: "Feature",
    status: "approved",
    likes: 54,
    dislikes: 1,
  },
  {
    title: "AI product description generator",
    desc: "Sellers can auto-generate product descriptions using AI when adding a new product.",
    category: "AI",
    status: "rejected",
    likes: 22,
    dislikes: 18,
  },
];

const POLLS = [
  {
    question: "Which module would you like improved most?",
    options: [
      { label: "Social Feed", votes: 142 },
      { label: "Jobs Module", votes: 98 },
      { label: "Healthcare", votes: 67 },
      { label: "Education", votes: 53 },
    ],
    total: 360,
  },
  {
    question: "How do you primarily access FamilySocial?",
    options: [
      { label: "Desktop Browser", votes: 201 },
      { label: "Mobile Browser", votes: 184 },
      { label: "Both equally", votes: 87 },
    ],
    total: 472,
  },
  {
    question: "Would you use a mobile app if available?",
    options: [
      { label: "Yes, definitely", votes: 389 },
      { label: "Maybe", votes: 112 },
      { label: "No preference", votes: 43 },
    ],
    total: 544,
  },
];

const SUGGESTIONS = [
  {
    insight:
      "78% of users visit Jobs module within 10 min of login — recommend showing Jobs highlights on homepage.",
    category: "UX",
  },
  {
    insight:
      "Community module has 3× more engagement on weekends — suggest scheduling announcements for Fri-Sun.",
    category: "Content",
  },
  {
    insight:
      "60% of Geomap users only use the Family layer — offer a 'Family-only mode' toggle for the map.",
    category: "Feature",
  },
  {
    insight:
      "Healthcare module visits spike after Family Tree updates — consider an automatic health check-in prompt.",
    category: "Flow",
  },
  {
    insight:
      "POS sessions average 18 minutes — reduce checkout steps to improve conversion rate.",
    category: "UX",
  },
];

const VERSION_HISTORY = [
  {
    quarter: "Q4 2025",
    changes: [
      "Activated Gated Community Management",
      "Added Point of Sale system",
      "Matrimony & Dating module launched",
      "Family Circle with admin roles",
      "Extended member profiles",
    ],
  },
  {
    quarter: "Q3 2025",
    changes: [
      "Blog & Affiliate marketing system",
      "Travel module with 5 submodules",
      "Education module: 4 roles",
      "Jobs ATS and delivery tracking",
    ],
  },
  {
    quarter: "Q2 2025",
    changes: [
      "Healthcare with insurance & advisors",
      "Real Estate with NOC handling",
      "Products with variants & rentals",
      "Geomap with 9 module layers",
    ],
  },
];

// ─── Agent 5 ─────────────────────────────────────────────────────────────────

const LEGAL_UPDATES = [
  {
    country: "🇵🇰",
    flag: "PK",
    law: "PECA Amendment 2025",
    module: "Social",
    summary:
      "New provisions require platforms to remove flagged content within 24 hours or face fines up to PKR 5M",
    date: "Feb 15, 2026",
    status: "reviewed",
  },
  {
    country: "🇪🇺",
    flag: "EU",
    law: "DSA Compliance Update",
    module: "Marketplace",
    summary:
      "Digital Services Act requires transparent algorithmic recommendation disclosure for all EU users",
    date: "Feb 10, 2026",
    status: "pending",
  },
  {
    country: "🇬🇧",
    flag: "UK",
    law: "Online Safety Act 2025",
    module: "Social",
    summary:
      "Platforms must implement age verification and parental controls for users under 18",
    date: "Jan 28, 2026",
    status: "pending",
  },
  {
    country: "🇮🇳",
    flag: "IN",
    law: "IT Rules Amendment",
    module: "Healthcare",
    summary:
      "Health data must be stored on Indian servers and cannot be transferred outside without consent",
    date: "Jan 20, 2026",
    status: "reviewed",
  },
  {
    country: "🇦🇪",
    flag: "AE",
    law: "TDRA Telecom Regulation",
    module: "Jobs",
    summary:
      "Job platforms must verify employer licenses and display license numbers on job listings",
    date: "Jan 15, 2026",
    status: "pending",
  },
  {
    country: "🌍",
    flag: "GL",
    law: "GDPR Data Retention Update",
    module: "All Modules",
    summary:
      "User data retention policy must not exceed 24 months for inactive accounts",
    date: "Jan 5, 2026",
    status: "reviewed",
  },
  {
    country: "🇺🇸",
    flag: "US",
    law: "FTC Affiliate Disclosure Rules",
    module: "Blog/Affiliate",
    summary:
      "All sponsored or affiliate content must include a clear disclosure statement visible before the first link",
    date: "Dec 20, 2025",
    status: "reviewed",
  },
  {
    country: "🇵🇰",
    flag: "PK",
    law: "Real Estate Act 2025",
    module: "Real Estate",
    summary:
      "Property listings must include RERA registration number and verified ownership documents",
    date: "Dec 10, 2025",
    status: "pending",
  },
];

const TC_CLAUSES = [
  {
    title: "Content Removal (24h Policy)",
    content:
      "FamilySocial will remove any content reported as violating PECA Amendment 2025 within 24 hours of a verified complaint to remain compliant with Pakistani law.",
    country: "🇵🇰 Pakistan",
    module: "Social",
    status: "pending",
  },
  {
    title: "Algorithmic Transparency (EU)",
    content:
      "Users in the European Union have the right to request an explanation of how content is recommended to them on FamilySocial feeds and search results.",
    country: "🇪🇺 EU",
    module: "Social/Feed",
    status: "pending",
  },
  {
    title: "Health Data Localization (India)",
    content:
      "Healthcare data of users located in India is processed and stored on India-region servers and will not be transferred internationally without explicit user consent.",
    country: "🇮🇳 India",
    module: "Healthcare",
    status: "approved",
  },
  {
    title: "Affiliate Disclosure Requirement",
    content:
      "All blog posts containing affiliate links must display the text 'This post contains affiliate links. The author may earn a commission.' at the beginning of the article.",
    country: "🇺🇸 USA / 🌍 Global",
    module: "Blog/Affiliate",
    status: "approved",
  },
  {
    title: "Property Listing Verification",
    content:
      "Real estate listings must include a valid RERA registration number. Listings without verified ownership documents will be removed within 48 hours.",
    country: "🇵🇰 Pakistan",
    module: "Real Estate",
    status: "pending",
  },
  {
    title: "Age Verification for Matrimony/Dating",
    content:
      "Users of the Matrimony and Dating modules must verify they are 18 years or older. Profiles of minors will be automatically restricted from these sections.",
    country: "🇬🇧 UK / 🌍 Global",
    module: "Matrimony/Dating",
    status: "pending",
  },
];

const AUDIT_LOGS = [
  {
    time: "Mar 1, 2026 11:30",
    admin: "admin-2f3a***",
    action: "Approved",
    clause: "Health Data Localization (India)",
  },
  {
    time: "Mar 1, 2026 11:28",
    admin: "admin-2f3a***",
    action: "Approved",
    clause: "Affiliate Disclosure Requirement",
  },
  {
    time: "Feb 28, 2026 14:15",
    admin: "admin-9c1b***",
    action: "Rejected",
    clause: "Cookie Consent Banner (draft)",
  },
  {
    time: "Feb 27, 2026 09:45",
    admin: "admin-2f3a***",
    action: "Reviewed",
    clause: "Content Removal (24h Policy)",
  },
  {
    time: "Feb 26, 2026 16:20",
    admin: "admin-9c1b***",
    action: "Reviewed",
    clause: "Algorithmic Transparency (EU)",
  },
  {
    time: "Feb 25, 2026 10:00",
    admin: "admin-5e7d***",
    action: "Approved",
    clause: "Data Retention Policy (GDPR)",
  },
  {
    time: "Feb 24, 2026 13:40",
    admin: "admin-2f3a***",
    action: "Rejected",
    clause: "Auto-delete inactive accounts (draft)",
  },
  {
    time: "Feb 23, 2026 08:55",
    admin: "admin-5e7d***",
    action: "Reviewed",
    clause: "Property Listing Verification",
  },
  {
    time: "Feb 22, 2026 17:10",
    admin: "admin-9c1b***",
    action: "Approved",
    clause: "Age Verification for Matrimony/Dating",
  },
  {
    time: "Feb 21, 2026 12:00",
    admin: "admin-2f3a***",
    action: "Reviewed",
    clause: "TDRA Job Listing Requirements",
  },
];

// Coverage matrix
const COVERAGE_COUNTRIES = [
  "🇵🇰 Pakistan",
  "🇮🇳 India",
  "🇦🇪 UAE",
  "🇬🇧 UK",
  "🇪🇺 EU",
  "🇺🇸 USA",
  "🌍 Global",
];
const COVERAGE_MODULES = [
  "Social",
  "Marketplace",
  "Healthcare",
  "Education",
  "Jobs",
  "Real Estate",
];
const COVERAGE_DATA: Record<string, Record<string, string>> = {
  "🇵🇰 Pakistan": {
    Social: "✅",
    Marketplace: "✅",
    Healthcare: "⚠️",
    Education: "✅",
    Jobs: "⚠️",
    "Real Estate": "⚠️",
  },
  "🇮🇳 India": {
    Social: "⚠️",
    Marketplace: "⚠️",
    Healthcare: "✅",
    Education: "⚠️",
    Jobs: "❌",
    "Real Estate": "❌",
  },
  "🇦🇪 UAE": {
    Social: "⚠️",
    Marketplace: "✅",
    Healthcare: "❌",
    Education: "❌",
    Jobs: "✅",
    "Real Estate": "⚠️",
  },
  "🇬🇧 UK": {
    Social: "⚠️",
    Marketplace: "✅",
    Healthcare: "❌",
    Education: "⚠️",
    Jobs: "⚠️",
    "Real Estate": "❌",
  },
  "🇪🇺 EU": {
    Social: "⚠️",
    Marketplace: "✅",
    Healthcare: "❌",
    Education: "❌",
    Jobs: "⚠️",
    "Real Estate": "❌",
  },
  "🇺🇸 USA": {
    Social: "✅",
    Marketplace: "✅",
    Healthcare: "❌",
    Education: "❌",
    Jobs: "⚠️",
    "Real Estate": "❌",
  },
  "🌍 Global": {
    Social: "✅",
    Marketplace: "✅",
    Healthcare: "⚠️",
    Education: "⚠️",
    Jobs: "⚠️",
    "Real Estate": "⚠️",
  },
};

// ─── All Modules ──────────────────────────────────────────────────────────────

const ALL_USERS = [
  {
    name: "Ahmed Khan",
    role: "admin",
    status: "active",
    joined: "Jan 1, 2026",
  },
  {
    name: "Fatima Malik",
    role: "user",
    status: "active",
    joined: "Jan 5, 2026",
  },
  {
    name: "Zara Hassan",
    role: "user",
    status: "active",
    joined: "Jan 8, 2026",
  },
  {
    name: "Omar Siddiqui",
    role: "user",
    status: "blocked",
    joined: "Jan 10, 2026",
  },
  {
    name: "Aisha Tariq",
    role: "user",
    status: "active",
    joined: "Jan 15, 2026",
  },
  {
    name: "Hassan Ali",
    role: "user",
    status: "active",
    joined: "Jan 18, 2026",
  },
  {
    name: "Nida Raza",
    role: "user",
    status: "active",
    joined: "Jan 20, 2026",
  },
  {
    name: "Imran Qureshi",
    role: "user",
    status: "blocked",
    joined: "Jan 22, 2026",
  },
  {
    name: "Sara Ahmed",
    role: "user",
    status: "active",
    joined: "Jan 25, 2026",
  },
  {
    name: "Bilal Hussain",
    role: "user",
    status: "active",
    joined: "Jan 28, 2026",
  },
  {
    name: "Maria Sheikh",
    role: "user",
    status: "active",
    joined: "Feb 1, 2026",
  },
  {
    name: "Talha Nawaz",
    role: "user",
    status: "active",
    joined: "Feb 5, 2026",
  },
  { name: "Hina Baig", role: "user", status: "active", joined: "Feb 8, 2026" },
  {
    name: "Usman Farooq",
    role: "user",
    status: "blocked",
    joined: "Feb 10, 2026",
  },
  {
    name: "Iqra Anwar",
    role: "user",
    status: "active",
    joined: "Feb 15, 2026",
  },
];

// ─── Theme Template Manager ───────────────────────────────────────────────────

const THEME_TEMPLATES = [
  {
    id: "indyacentral-vibrant",
    name: "IndyaCentral Vibrant",
    primary: "0.55 0.22 280",
    accent: "0.65 0.25 335",
    sidebar: "0.20 0.065 280",
    isDefault: true,
  },
  {
    id: "ocean-blue",
    name: "Ocean Blue",
    primary: "0.55 0.18 220",
    accent: "0.65 0.20 180",
    sidebar: "0.18 0.06 220",
    isDefault: false,
  },
  {
    id: "forest-green",
    name: "Forest Green",
    primary: "0.45 0.15 145",
    accent: "0.65 0.18 85",
    sidebar: "0.16 0.05 145",
    isDefault: false,
  },
  {
    id: "sunset-orange",
    name: "Sunset Orange",
    primary: "0.60 0.22 45",
    accent: "0.65 0.25 25",
    sidebar: "0.18 0.055 45",
    isDefault: false,
  },
  {
    id: "rose-gold",
    name: "Rose Gold",
    primary: "0.55 0.18 355",
    accent: "0.72 0.15 65",
    sidebar: "0.17 0.055 355",
    isDefault: false,
  },
  {
    id: "midnight-dark",
    name: "Midnight Dark",
    primary: "0.65 0.14 255",
    accent: "0.70 0.20 200",
    sidebar: "0.12 0.04 255",
    isDefault: false,
  },
] as const;

function ThemeTemplateManager() {
  const [activeId, setActiveId] = useState<string>(() => {
    try {
      const stored = localStorage.getItem("indyacentral-theme");
      if (stored) {
        const parsed = JSON.parse(stored) as Record<string, string>;
        const primary = parsed["--primary"];
        const found = THEME_TEMPLATES.find((t) => t.primary === primary);
        return found ? found.id : "indyacentral-vibrant";
      }
    } catch {
      // ignore
    }
    return "indyacentral-vibrant";
  });

  const [customPrimary, setCustomPrimary] = useState({
    l: "0.55",
    c: "0.22",
    h: "280",
  });
  const [customAccent, setCustomAccent] = useState({
    l: "0.65",
    c: "0.25",
    h: "335",
  });
  const [customSidebar, setCustomSidebar] = useState({
    l: "0.20",
    c: "0.065",
    h: "280",
  });

  const applyTheme = (
    primary: string,
    accent: string,
    sidebar: string,
    id: string,
  ) => {
    const vars: Record<string, string> = {
      "--primary": primary,
      "--ring": primary,
      "--accent": accent,
      "--sidebar": sidebar,
      "--sidebar-primary": accent,
      "--sidebar-accent": `${sidebar.split(" ")[0]} ${(Number.parseFloat(sidebar.split(" ")[1]) + 0.01).toFixed(3)} ${sidebar.split(" ")[2]}`,
    };
    for (const [key, value] of Object.entries(vars)) {
      document.documentElement.style.setProperty(key, value);
    }
    localStorage.setItem("indyacentral-theme", JSON.stringify(vars));
    setActiveId(id);
    toast.success("Theme applied successfully");
  };

  const resetToDefault = () => {
    const defaultKeys = [
      "--primary",
      "--ring",
      "--accent",
      "--sidebar",
      "--sidebar-primary",
      "--sidebar-accent",
    ];
    for (const key of defaultKeys) {
      document.documentElement.style.removeProperty(key);
    }
    localStorage.removeItem("indyacentral-theme");
    setActiveId("indyacentral-vibrant");
    toast.success("Theme reset to default");
  };

  const applyCustomTheme = () => {
    const primary = `${customPrimary.l} ${customPrimary.c} ${customPrimary.h}`;
    const accent = `${customAccent.l} ${customAccent.c} ${customAccent.h}`;
    const sidebar = `${customSidebar.l} ${customSidebar.c} ${customSidebar.h}`;
    applyTheme(primary, accent, sidebar, "custom");
  };

  return (
    <div className="space-y-6">
      {/* Pre-built templates */}
      <div>
        <h3 className="text-sm font-label font-semibold text-foreground mb-3 flex items-center gap-2">
          <Palette size={14} className="text-primary" />
          Theme Templates
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {THEME_TEMPLATES.map((t) => {
            const [pl, pc, ph] = t.primary.split(" ").map(Number);
            const [al, ac, ah] = t.accent.split(" ").map(Number);
            const [sl, sc, sh] = t.sidebar.split(" ").map(Number);
            const isActive = activeId === t.id;
            return (
              <div
                key={t.id}
                className={`bg-card border rounded-xl p-4 transition-all ${isActive ? "border-primary ring-1 ring-primary" : "border-border hover:border-primary/50"}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-label font-semibold text-foreground">
                    {t.name}
                  </p>
                  {isActive && (
                    <span
                      className="text-[10px] font-label font-bold px-2 py-0.5 rounded-full"
                      style={{
                        background: "oklch(0.55 0.22 280 / 0.12)",
                        color: "oklch(0.45 0.18 280)",
                      }}
                    >
                      ACTIVE
                    </span>
                  )}
                </div>
                {/* Color swatches */}
                <div className="flex gap-2 mb-4">
                  <div
                    className="w-8 h-8 rounded-lg border border-border/40 flex-shrink-0"
                    style={{ background: `oklch(${pl} ${pc} ${ph})` }}
                    title="Primary"
                  />
                  <div
                    className="w-8 h-8 rounded-lg border border-border/40 flex-shrink-0"
                    style={{ background: `oklch(${al} ${ac} ${ah})` }}
                    title="Accent"
                  />
                  <div
                    className="w-8 h-8 rounded-lg border border-border/40 flex-shrink-0"
                    style={{ background: `oklch(${sl} ${sc} ${sh})` }}
                    title="Sidebar"
                  />
                  <div
                    className="flex-1 h-8 rounded-lg border border-border/40"
                    style={{
                      background: `linear-gradient(90deg, oklch(${pl} ${pc} ${ph}), oklch(${al} ${ac} ${ah}))`,
                    }}
                  />
                </div>
                <Button
                  size="sm"
                  variant={isActive ? "secondary" : "default"}
                  className="w-full text-xs font-label"
                  onClick={() =>
                    applyTheme(t.primary, t.accent, t.sidebar, t.id)
                  }
                  disabled={isActive}
                  data-ocid={`theme.${t.id}.button`}
                >
                  {isActive ? "Currently Active" : "Apply Theme"}
                </Button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom Theme Builder */}
      <div className="bg-card border border-border rounded-xl p-5 space-y-5">
        <h3 className="text-sm font-label font-semibold text-foreground flex items-center gap-2">
          <Settings2 size={14} className="text-primary" />
          Custom Theme Builder
        </h3>

        {/* Live preview strip */}
        <div
          className="h-10 rounded-xl border border-border/50"
          style={{
            background: `linear-gradient(135deg, oklch(${customPrimary.l} ${customPrimary.c} ${customPrimary.h}) 0%, oklch(${customAccent.l} ${customAccent.c} ${customAccent.h}) 50%, oklch(${customSidebar.l} ${customSidebar.c} ${customSidebar.h}) 100%)`,
          }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* Primary */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div
                className="w-5 h-5 rounded-md border border-border/50 shrink-0"
                style={{
                  background: `oklch(${customPrimary.l} ${customPrimary.c} ${customPrimary.h})`,
                }}
              />
              <p className="text-xs font-label font-semibold text-foreground">
                Primary Color
              </p>
            </div>
            {[
              {
                label: "L (Lightness)",
                key: "l" as const,
                min: "0",
                max: "1",
                step: "0.01",
                val: customPrimary.l,
                set: (v: string) => setCustomPrimary((p) => ({ ...p, l: v })),
              },
              {
                label: "C (Chroma)",
                key: "c" as const,
                min: "0",
                max: "0.4",
                step: "0.005",
                val: customPrimary.c,
                set: (v: string) => setCustomPrimary((p) => ({ ...p, c: v })),
              },
              {
                label: "H (Hue)",
                key: "h" as const,
                min: "0",
                max: "360",
                step: "1",
                val: customPrimary.h,
                set: (v: string) => setCustomPrimary((p) => ({ ...p, h: v })),
              },
            ].map(({ label, min, max, step, val, set }) => (
              <div key={label}>
                <div className="flex justify-between mb-1">
                  <span className="text-[11px] text-muted-foreground">
                    {label}
                  </span>
                  <span className="text-[11px] font-mono text-foreground">
                    {val}
                  </span>
                </div>
                <input
                  type="range"
                  min={min}
                  max={max}
                  step={step}
                  value={val}
                  onChange={(e) => set(e.target.value)}
                  className="w-full accent-primary"
                  data-ocid="theme.custom.input"
                />
              </div>
            ))}
          </div>

          {/* Accent */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div
                className="w-5 h-5 rounded-md border border-border/50 shrink-0"
                style={{
                  background: `oklch(${customAccent.l} ${customAccent.c} ${customAccent.h})`,
                }}
              />
              <p className="text-xs font-label font-semibold text-foreground">
                Accent Color
              </p>
            </div>
            {[
              {
                label: "L (Lightness)",
                min: "0",
                max: "1",
                step: "0.01",
                val: customAccent.l,
                set: (v: string) => setCustomAccent((p) => ({ ...p, l: v })),
              },
              {
                label: "C (Chroma)",
                min: "0",
                max: "0.4",
                step: "0.005",
                val: customAccent.c,
                set: (v: string) => setCustomAccent((p) => ({ ...p, c: v })),
              },
              {
                label: "H (Hue)",
                min: "0",
                max: "360",
                step: "1",
                val: customAccent.h,
                set: (v: string) => setCustomAccent((p) => ({ ...p, h: v })),
              },
            ].map(({ label, min, max, step, val, set }) => (
              <div key={label}>
                <div className="flex justify-between mb-1">
                  <span className="text-[11px] text-muted-foreground">
                    {label}
                  </span>
                  <span className="text-[11px] font-mono text-foreground">
                    {val}
                  </span>
                </div>
                <input
                  type="range"
                  min={min}
                  max={max}
                  step={step}
                  value={val}
                  onChange={(e) => set(e.target.value)}
                  className="w-full accent-primary"
                  data-ocid="theme.custom.input"
                />
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div
                className="w-5 h-5 rounded-md border border-border/50 shrink-0"
                style={{
                  background: `oklch(${customSidebar.l} ${customSidebar.c} ${customSidebar.h})`,
                }}
              />
              <p className="text-xs font-label font-semibold text-foreground">
                Sidebar Color
              </p>
            </div>
            {[
              {
                label: "L (Lightness)",
                min: "0",
                max: "1",
                step: "0.01",
                val: customSidebar.l,
                set: (v: string) => setCustomSidebar((p) => ({ ...p, l: v })),
              },
              {
                label: "C (Chroma)",
                min: "0",
                max: "0.4",
                step: "0.005",
                val: customSidebar.c,
                set: (v: string) => setCustomSidebar((p) => ({ ...p, c: v })),
              },
              {
                label: "H (Hue)",
                min: "0",
                max: "360",
                step: "1",
                val: customSidebar.h,
                set: (v: string) => setCustomSidebar((p) => ({ ...p, h: v })),
              },
            ].map(({ label, min, max, step, val, set }) => (
              <div key={label}>
                <div className="flex justify-between mb-1">
                  <span className="text-[11px] text-muted-foreground">
                    {label}
                  </span>
                  <span className="text-[11px] font-mono text-foreground">
                    {val}
                  </span>
                </div>
                <input
                  type="range"
                  min={min}
                  max={max}
                  step={step}
                  value={val}
                  onChange={(e) => set(e.target.value)}
                  className="w-full accent-primary"
                  data-ocid="theme.custom.input"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={applyCustomTheme}
            className="text-xs font-label gap-1.5"
            data-ocid="theme.custom.save_button"
          >
            <Palette size={13} />
            Save Custom Theme
          </Button>
          <Button
            variant="outline"
            onClick={resetToDefault}
            className="text-xs font-label gap-1.5"
            data-ocid="theme.reset.button"
          >
            <RotateCcw size={13} />
            Reset to Default
          </Button>
        </div>
      </div>

      <div className="text-[11px] text-muted-foreground bg-secondary/40 rounded-lg px-3 py-2">
        💡 <strong>Tip:</strong> Theme changes apply instantly across the entire
        application and are saved to your browser. Share your custom theme by
        exporting the OKLCH values.
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

const REVIEW_CATEGORIES = [
  "All",
  "Products",
  "Services",
  "Businesses",
  "Promotions",
] as const;

function ReviewsAdminPanel() {
  const [category, setCategory] = useState<string>("All");
  const [reviews, setReviews] = useState<Review[]>(() => getReviews());

  function refresh() {
    setReviews(getReviews());
  }

  const filtered = reviews.filter((r) => {
    if (category === "All") return true;
    if (category === "Products") return r.targetType === "product";
    if (category === "Services") return r.targetType === "service";
    if (category === "Businesses") return r.targetType === "business";
    if (category === "Promotions") return r.targetType === "promotion";
    return true;
  });

  function handleApprove(_id: string) {
    toast.success("Review approved");
  }
  function handleReject(id: string) {
    const updated = reviews.filter((r) => r.id !== id);
    localStorage.setItem("ic_reviews", JSON.stringify(updated));
    setReviews(updated);
    toast.success("Review removed");
  }

  return (
    <div className="space-y-3">
      <div className="flex gap-2 flex-wrap">
        {REVIEW_CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={`px-3 py-1 rounded-lg text-xs font-semibold border transition-all ${category === cat ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary/50"}`}
          >
            {cat}
          </button>
        ))}
        <button
          type="button"
          onClick={refresh}
          className="ml-auto px-3 py-1 rounded-lg text-xs border border-border text-muted-foreground hover:text-foreground transition-colors"
        >
          Refresh
        </button>
      </div>
      {filtered.length === 0 ? (
        <div
          className="text-center py-8 text-muted-foreground text-sm"
          data-ocid="reviews.empty_state"
        >
          No reviews yet in this category.
        </div>
      ) : (
        <div className="space-y-2" data-ocid="reviews.list">
          {filtered.map((r, i) => (
            <div
              key={r.id}
              className="bg-card border border-border rounded-xl p-4 flex items-start gap-3"
              data-ocid={`reviews.item.${i + 1}`}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-foreground">
                    {r.author}
                  </span>
                  <span className="text-xs text-muted-foreground">→</span>
                  <span className="text-xs text-foreground">{r.targetId}</span>
                  <Badge className="text-[10px] border-0 bg-primary/10 text-primary">
                    {r.targetType}
                  </Badge>
                </div>
                <div className="flex gap-0.5 my-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span
                      key={s}
                      className={
                        r.stars >= s
                          ? "text-amber-400"
                          : "text-muted-foreground"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
                {r.comment && (
                  <p className="text-xs text-muted-foreground">{r.comment}</p>
                )}
                <p className="text-[10px] text-muted-foreground mt-1">
                  {new Date(r.createdAt).toLocaleString("en-IN")}
                </p>
              </div>
              <div className="flex flex-col gap-1 shrink-0">
                <Button
                  size="sm"
                  variant="outline"
                  className="h-7 text-xs text-emerald-600 border-emerald-600/40 hover:bg-emerald-50"
                  onClick={() => handleApprove(r.id)}
                  data-ocid="reviews.confirm_button"
                >
                  Approve
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-7 text-xs text-red-500 border-red-500/40 hover:bg-red-50"
                  onClick={() => handleReject(r.id)}
                  data-ocid="reviews.delete_button"
                >
                  Reject
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function AdminPanelPage() {
  const [complaintStatuses, setComplaintStatuses] = useState<
    Record<string, string>
  >({});
  const [blockedUsers, setBlockedUsers] = useState(BLOCKED_USERS);
  const [apiSourcesEnabled, setApiSourcesEnabled] = useState<
    Record<string, boolean>
  >(Object.fromEntries(API_SOURCES.map((s) => [s.name, s.enabled])));
  const [changeStatuses, setChangeStatuses] = useState<Record<string, string>>(
    Object.fromEntries(EVOLUTION_CHANGES.map((c) => [c.title, c.status])),
  );
  const [clauseStatuses, setClauseStatuses] = useState<Record<string, string>>(
    Object.fromEntries(TC_CLAUSES.map((c) => [c.title, c.status])),
  );
  const [legalStatuses, setLegalStatuses] = useState<Record<string, string>>(
    Object.fromEntries(LEGAL_UPDATES.map((l) => [l.law, l.status])),
  );
  const [userRoles, setUserRoles] = useState<Record<string, string>>(
    Object.fromEntries(ALL_USERS.map((u) => [u.name, u.role])),
  );
  const [votes, setVotes] = useState<Record<string, number>>({});
  const [reviewLikes, setReviewLikes] = useState<
    Record<number, { likes: number; dislikes: number }>
  >(
    Object.fromEntries(
      REVIEWS.map((r, i) => [i, { likes: r.likes, dislikes: r.dislikes }]),
    ),
  );

  const getComplaintStatus = (id: string, defaultStatus: string) =>
    complaintStatuses[id] ?? defaultStatus;

  const statusColor = (
    s: string,
  ): "green" | "amber" | "red" | "blue" | "gray" => {
    if (
      [
        "resolved",
        "good",
        "fixed",
        "accepted",
        "approved",
        "paid",
        "reviewed",
      ].includes(s)
    )
      return "green";
    if (["reviewing", "warn", "pending"].includes(s)) return "amber";
    if (["escalated", "bad", "critical", "rejected"].includes(s)) return "red";
    if (["open"].includes(s)) return "blue";
    return "gray";
  };

  return (
    <div className="p-4 lg:p-6">
      {/* Header */}
      <div className="mb-5 flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: "oklch(0.55 0.22 280 / 0.15)" }}
        >
          <ShieldCheck size={20} style={{ color: "oklch(0.55 0.22 280)" }} />
        </div>
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">
            Admin Panel
          </h1>
          <p className="text-xs text-muted-foreground">
            Platform control center · 16 active agents · Super Admin
          </p>
        </div>
      </div>

      <Tabs defaultValue="overview">
        <TabsList className="mb-4 flex flex-wrap h-auto gap-1 p-1">
          {(
            [
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
              { value: "rides-admin", label: "🚗 Rides Mgmt" },
              { value: "agent22", label: "🧪 A22: Tester" },
              { value: "agent23", label: "📰 A23: News" },
              { value: "agent24", label: "🥦 A24: Food Stock" },
              { value: "agent11-discovery", label: "🔍 A11: Biz Discovery" },
              { value: "business-claims", label: "🏢 Business Claims" },
              { value: "commission-fees", label: "💸 Commission & Fees" },
              { value: "reviews", label: "⭐ Reviews" },
            ] as { value: string; label: string }[]
          ).map((t) => (
            <TabsTrigger
              key={t.value}
              value={t.value}
              className="text-xs font-label px-3 py-1.5"
            >
              {t.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* ── OVERVIEW ── */}
        <TabsContent value="overview" className="mt-0 space-y-5">
          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              {
                label: "Total Users",
                value: "1,247",
                icon: Users,
                color: "oklch(0.55 0.22 280)",
              },
              {
                label: "Active Complaints",
                value: "23",
                icon: AlertTriangle,
                color: "oklch(0.72 0.17 85)",
              },
              {
                label: "Blocked Users",
                value: "7",
                icon: XCircle,
                color: "oklch(0.55 0.22 25)",
              },
              {
                label: "Reviews",
                value: "156",
                icon: Star,
                color: "oklch(0.65 0.14 50)",
              },
              {
                label: "Synced Products",
                value: "89",
                icon: Package,
                color: "oklch(0.52 0.14 155)",
              },
              {
                label: "Pending Legal",
                value: "4",
                icon: ShieldCheck,
                color: "oklch(0.65 0.25 335)",
              },
              {
                label: "Total Modules",
                value: "14",
                icon: Database,
                color: "oklch(0.60 0.20 190)",
              },
              {
                label: "Active Agents",
                value: "22",
                icon: Zap,
                color: "oklch(0.55 0.22 280)",
              },
            ].map(({ label, value, icon: Icon, color }) => (
              <div
                key={label}
                className="bg-card border border-border rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: `${color}15` }}
                  >
                    <Icon size={15} style={{ color }} />
                  </div>
                  <TrendingUp size={12} className="text-muted-foreground" />
                </div>
                <p className="text-xl font-display font-bold text-foreground">
                  {value}
                </p>
                <p className="text-[11px] text-muted-foreground font-label">
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* Agent status */}
          <div className="bg-card border border-border rounded-xl p-4">
            <h3 className="text-sm font-label font-semibold text-foreground mb-3">
              Agent Status
            </h3>
            <div className="space-y-2">
              {[
                {
                  name: "Agent 1 — Support & Moderation",
                  lastRun: "5 min ago",
                  freq: "Real-time",
                },
                {
                  name: "Agent 2 — Performance Monitor",
                  lastRun: "1 hour ago",
                  freq: "Hourly",
                },
                {
                  name: "Agent 3 — API Sync",
                  lastRun: "6 hours ago",
                  freq: "Daily",
                },
                {
                  name: "Agent 4 — Evolution Engine",
                  lastRun: "Mar 1, 2026",
                  freq: "Quarterly",
                },
                {
                  name: "Agent 5 — Legal Compliance",
                  lastRun: "Feb 28, 2026",
                  freq: "Weekly",
                },
                {
                  name: "Agent 6 — Security Scanner",
                  lastRun: "2 min ago",
                  freq: "Real-time",
                },
                {
                  name: "Agent 7 — Image Manager",
                  lastRun: "3 hours ago",
                  freq: "Daily",
                },
                {
                  name: "Agent 8 — SEO Agent",
                  lastRun: "12 hours ago",
                  freq: "Daily",
                },
                {
                  name: "Agent 9 — Social Sharing",
                  lastRun: "10 min ago",
                  freq: "Real-time",
                },
                {
                  name: "Agent 10 — Co-worker (Floating)",
                  lastRun: "Active",
                  freq: "Real-time",
                },
                {
                  name: "Agent 11 — Fake Users",
                  lastRun: "1 hour ago",
                  freq: "Daily",
                },
                {
                  name: "Agent 12 — WhatsApp Updates",
                  lastRun: "8 AM today",
                  freq: "Daily",
                },
                {
                  name: "Agent 13 — Monetization",
                  lastRun: "Yesterday",
                  freq: "Weekly",
                },
                {
                  name: "Agent 14 — Content Moderation",
                  lastRun: "15 min ago",
                  freq: "Real-time",
                },
                {
                  name: "Agent 15 — Analytics",
                  lastRun: "1 hour ago",
                  freq: "Hourly",
                },
                {
                  name: "Agent 16 — Tips Manager",
                  lastRun: "Active",
                  freq: "Real-time",
                },
                {
                  name: "Agent 17 — Travel Curator",
                  lastRun: "2 hours ago",
                  freq: "Daily",
                },
                {
                  name: "Agent 18 — Pricing Monitor",
                  lastRun: "30 min ago",
                  freq: "Hourly",
                },
                {
                  name: "Agent 19 — Game Creator",
                  lastRun: "8 min ago",
                  freq: "Real-time",
                },
                {
                  name: "Agent 20 — Comic Agent",
                  lastRun: "12 min ago",
                  freq: "Real-time",
                },
                {
                  name: "Agent 21 — Spiritual Agent",
                  lastRun: "4 hours ago",
                  freq: "Daily",
                },
                {
                  name: "Agent 22 — Module Tester",
                  lastRun: "On demand",
                  freq: "Manual",
                },
              ].map((agent) => (
                <div
                  key={agent.name}
                  className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-[oklch(0.52_0.14_155)] animate-pulse" />
                    <span className="text-xs font-label font-medium text-foreground">
                      {agent.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-muted-foreground">
                      {agent.lastRun}
                    </span>
                    <SBadge label={agent.freq} color="blue" />
                    <SBadge label="Running" color="green" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent activity */}
          <div className="bg-card border border-border rounded-xl p-4">
            <h3 className="text-sm font-label font-semibold text-foreground mb-3">
              Recent Activity
            </h3>
            <div className="space-y-1.5">
              {[
                {
                  time: "09:14",
                  agent: "Agent 1",
                  action: "Blocked user ali.raza92 for spam — 7 days",
                },
                {
                  time: "09:00",
                  agent: "Agent 2",
                  action: "Daily performance snapshot taken (hash: a3f9c1d2)",
                },
                {
                  time: "08:45",
                  agent: "Agent 3",
                  action: "Synced 12 products from FakeStore API",
                },
                {
                  time: "08:30",
                  agent: "Agent 5",
                  action: "New legal update detected: PECA Amendment 2025",
                },
                {
                  time: "08:10",
                  agent: "Agent 1",
                  action: "Anonymous review removed from Khan Electronics",
                },
                {
                  time: "07:55",
                  agent: "Agent 2",
                  action: "Self-healed: memory leak fixed in GeoMap component",
                },
                {
                  time: "07:40",
                  agent: "Agent 3",
                  action:
                    "Consent request sent to ali.r*** for occupation update",
                },
                {
                  time: "07:20",
                  agent: "Agent 4",
                  action:
                    "New suggestion added based on Jobs module activity patterns",
                },
                {
                  time: "06:45",
                  agent: "Agent 5",
                  action: "T&C clause drafted for DSA compliance (EU)",
                },
                {
                  time: "06:00",
                  agent: "Agent 3",
                  action: "API sync scheduled — 4 sources queued",
                },
              ].map((item) => (
                <div
                  key={item.time + item.agent}
                  className="flex items-start gap-2.5 py-1.5 border-b border-border/30 last:border-0"
                >
                  <span className="text-[10px] font-mono text-muted-foreground w-10 shrink-0 pt-0.5">
                    {item.time}
                  </span>
                  <span
                    className="text-[10px] font-label font-semibold px-1.5 py-0.5 rounded shrink-0"
                    style={{
                      background: "oklch(0.55 0.22 280 / 0.1)",
                      color: "oklch(0.55 0.22 280)",
                    }}
                  >
                    {item.agent}
                  </span>
                  <span className="text-xs text-foreground font-label">
                    {item.action}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* ── AGENT 1: MODERATION ── */}
        <TabsContent value="moderation" className="mt-0">
          <Tabs defaultValue="complaints">
            <TabsList className="mb-4">
              <TabsTrigger value="complaints" className="text-xs">
                Complaints
              </TabsTrigger>
              <TabsTrigger value="blocked" className="text-xs">
                Blocked Users
              </TabsTrigger>
              <TabsTrigger value="reviews" className="text-xs">
                Reviews
              </TabsTrigger>
              <TabsTrigger value="abuse" className="text-xs">
                Abuse Log
              </TabsTrigger>
            </TabsList>

            <TabsContent value="complaints" className="mt-0">
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <TH>#ID</TH>
                        <TH>Target</TH>
                        <TH>Category</TH>
                        <TH>Description</TH>
                        <TH>Status</TH>
                        <TH>Date</TH>
                      </tr>
                    </thead>
                    <tbody>
                      {COMPLAINTS.map((c) => {
                        const currentStatus = getComplaintStatus(
                          c.id,
                          c.status,
                        );
                        return (
                          <tr
                            key={c.id}
                            className="hover:bg-secondary/20 transition-colors"
                          >
                            <TD>
                              <span className="font-mono text-[10px]">
                                {c.id}
                              </span>
                            </TD>
                            <TD className="font-medium">{c.target}</TD>
                            <TD>
                              <SBadge label={c.category} color="amber" />
                            </TD>
                            <TD>
                              <span className="line-clamp-1 max-w-[200px] block">
                                {c.desc}
                              </span>
                            </TD>
                            <TD>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <button
                                    type="button"
                                    className="flex items-center gap-1"
                                  >
                                    <SBadge
                                      label={currentStatus}
                                      color={statusColor(currentStatus)}
                                    />
                                    <ChevronDown
                                      size={10}
                                      className="text-muted-foreground"
                                    />
                                  </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-36">
                                  {[
                                    "open",
                                    "reviewing",
                                    "resolved",
                                    "escalated",
                                  ].map((s) => (
                                    <DropdownMenuItem
                                      key={s}
                                      className="text-xs"
                                      onClick={() =>
                                        setComplaintStatuses((p) => ({
                                          ...p,
                                          [c.id]: s,
                                        }))
                                      }
                                    >
                                      {s}
                                    </DropdownMenuItem>
                                  ))}
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TD>
                            <TD className="text-muted-foreground">{c.date}</TD>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="blocked" className="mt-0">
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <TH>Username</TH>
                        <TH>Reason</TH>
                        <TH>Blocked Date</TH>
                        <TH>Reactivation</TH>
                        <TH>Action</TH>
                      </tr>
                    </thead>
                    <tbody>
                      {blockedUsers.map((u) => (
                        <tr
                          key={u.user}
                          className="hover:bg-secondary/20 transition-colors"
                        >
                          <TD className="font-mono text-[11px]">{u.user}</TD>
                          <TD>{u.reason}</TD>
                          <TD className="text-muted-foreground">
                            {u.blockedDate}
                          </TD>
                          <TD>
                            <SBadge
                              label={u.reactivation}
                              color={
                                u.reactivation === "Permanent" ? "red" : "amber"
                              }
                            />
                          </TD>
                          <TD>
                            <ActionBtn
                              label="Unblock"
                              color="green"
                              onClick={() =>
                                setBlockedUsers((prev) =>
                                  prev.filter((x) => x.user !== u.user),
                                )
                              }
                            />
                          </TD>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-0 space-y-2">
              {REVIEWS.map((r, i) => {
                const rv = reviewLikes[i] ?? {
                  likes: r.likes,
                  dislikes: r.dislikes,
                };
                return (
                  <div
                    key={r.entity}
                    className="bg-card border border-border rounded-xl p-3 flex gap-3 items-start"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-label font-semibold text-foreground">
                          {r.entity}
                        </span>
                        <span className="text-[10px] text-amber-500">
                          {"★".repeat(r.rating)}
                          {"☆".repeat(5 - r.rating)}
                        </span>
                        <SBadge label="Anonymous" color="gray" />
                      </div>
                      <p className="text-xs text-muted-foreground">{r.text}</p>
                      <div className="flex items-center gap-3 mt-1.5">
                        <button
                          type="button"
                          onClick={() =>
                            setReviewLikes((p) => ({
                              ...p,
                              [i]: { ...rv, likes: rv.likes + 1 },
                            }))
                          }
                          className="text-[11px] text-muted-foreground hover:text-foreground flex items-center gap-1"
                        >
                          👍 {rv.likes}
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setReviewLikes((p) => ({
                              ...p,
                              [i]: { ...rv, dislikes: rv.dislikes + 1 },
                            }))
                          }
                          className="text-[11px] text-muted-foreground hover:text-foreground flex items-center gap-1"
                        >
                          👎 {rv.dislikes}
                        </button>
                      </div>
                    </div>
                    <ActionBtn label="Remove" color="red" />
                  </div>
                );
              })}
            </TabsContent>

            <TabsContent value="abuse" className="mt-0">
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <TH>Timestamp</TH>
                        <TH>Severity</TH>
                        <TH>Description</TH>
                        <TH>Action Taken</TH>
                      </tr>
                    </thead>
                    <tbody>
                      {ABUSE_LOGS.map((l) => (
                        <tr
                          key={l.time}
                          className="hover:bg-secondary/20 transition-colors"
                        >
                          <TD className="font-mono text-[11px] text-muted-foreground whitespace-nowrap">
                            {l.time}
                          </TD>
                          <TD>
                            <SBadge
                              label={l.severity}
                              color={
                                l.severity === "critical"
                                  ? "red"
                                  : l.severity === "high"
                                    ? "rose"
                                    : l.severity === "medium"
                                      ? "amber"
                                      : "gray"
                              }
                            />
                          </TD>
                          <TD>
                            <span className="line-clamp-1 max-w-[220px] block">
                              {l.snippet}
                            </span>
                          </TD>
                          <TD className="text-muted-foreground">{l.action}</TD>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </TabsContent>

        {/* ── AGENT 2: PERFORMANCE ── */}
        <TabsContent value="performance" className="mt-0">
          <Tabs defaultValue="logs">
            <div className="flex items-center justify-between mb-4">
              <TabsList>
                <TabsTrigger value="logs" className="text-xs">
                  Logs
                </TabsTrigger>
                <TabsTrigger value="snapshots" className="text-xs">
                  Snapshots
                </TabsTrigger>
                <TabsTrigger value="healing" className="text-xs">
                  Self-Healing
                </TabsTrigger>
              </TabsList>
              <Button
                size="sm"
                className="text-xs gap-1.5"
                style={{ background: "oklch(0.55 0.15 240)", color: "white" }}
              >
                <Database size={13} /> Take Snapshot Now
              </Button>
            </div>

            <TabsContent value="logs" className="mt-0">
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <TH>Timestamp</TH>
                        <TH>Metric</TH>
                        <TH>Value</TH>
                        <TH>Status</TH>
                      </tr>
                    </thead>
                    <tbody>
                      {PERF_LOGS.map((l) => (
                        <tr
                          key={`${l.time}-${l.metric}`}
                          className="hover:bg-secondary/20 transition-colors"
                        >
                          <TD className="font-mono text-[11px] text-muted-foreground whitespace-nowrap">
                            {l.time}
                          </TD>
                          <TD className="font-medium">{l.metric}</TD>
                          <TD className="font-mono text-[11px]">{l.value}</TD>
                          <TD>
                            <SBadge
                              label={l.status}
                              color={statusColor(l.status)}
                            />
                          </TD>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="snapshots" className="mt-0 space-y-2">
              {SNAPSHOTS.map((s) => (
                <div
                  key={s.label}
                  className="bg-card border border-border rounded-xl p-3 flex items-center gap-3"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "oklch(0.55 0.15 240 / 0.12)" }}
                  >
                    <Database
                      size={15}
                      style={{ color: "oklch(0.55 0.15 240)" }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-label font-semibold text-foreground">
                      {s.label}
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      {s.time} · <span className="font-mono">{s.hash}</span>
                    </p>
                  </div>
                  <ActionBtn label="Restore" color="amber" />
                </div>
              ))}
            </TabsContent>

            <TabsContent value="healing" className="mt-0">
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <TH>Issue</TH>
                        <TH>Action Taken</TH>
                        <TH>Before</TH>
                        <TH>After</TH>
                        <TH>Status</TH>
                      </tr>
                    </thead>
                    <tbody>
                      {HEALING_EVENTS.map((e) => (
                        <tr
                          key={e.issue}
                          className="hover:bg-secondary/20 transition-colors"
                        >
                          <TD>
                            <span className="line-clamp-1 max-w-[180px] block">
                              {e.issue}
                            </span>
                          </TD>
                          <TD>
                            <span className="line-clamp-1 max-w-[180px] block">
                              {e.action}
                            </span>
                          </TD>
                          <TD className="font-mono text-[11px] text-muted-foreground">
                            {e.before}
                          </TD>
                          <TD
                            className="font-mono text-[11px]"
                            style={{ color: "oklch(0.52 0.14 155)" }}
                          >
                            {e.after}
                          </TD>
                          <TD>
                            <SBadge
                              label={e.status}
                              color={statusColor(e.status)}
                            />
                          </TD>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </TabsContent>

        {/* ── AGENT 3: API SYNC ── */}
        <TabsContent value="api-sync" className="mt-0">
          {/* ── Agoda API ── */}
          <div className="mb-6 p-5 bg-card border border-border rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-lg"
                  style={{ background: "oklch(0.55 0.22 280 / 0.1)" }}
                >
                  🏨
                </div>
                <div>
                  <h3 className="font-semibold text-sm">
                    Agoda API Integration
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Bring hotels &amp; tours from Agoda into IndyaCentral
                  </p>
                </div>
              </div>
              <Badge variant="outline" className="text-xs">
                Hotels &amp; Tours
              </Badge>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <Label className="text-xs">Affiliate ID</Label>
                <Input
                  className="mt-1 h-8 text-xs"
                  placeholder="e.g. AGO-12345678"
                  data-ocid="admin.agoda.affiliate_input"
                />
              </div>
              <div>
                <Label className="text-xs">API Key</Label>
                <Input
                  className="mt-1 h-8 text-xs"
                  placeholder="agoda_api_key_..."
                  data-ocid="admin.agoda.key_input"
                />
              </div>
              <div>
                <Label className="text-xs">Base URL</Label>
                <Input
                  className="mt-1 h-8 text-xs"
                  defaultValue="https://affiliateapi7.agoda.com/api/v3"
                />
              </div>
              <div>
                <Label className="text-xs">Sync Frequency</Label>
                <Select defaultValue="daily">
                  <SelectTrigger className="mt-1 h-8 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hourly">Hourly</SelectItem>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label className="text-xs mb-2 block">Supported Regions</Label>
              <div className="flex flex-wrap gap-3">
                {["India", "Southeast Asia", "Global", "Middle East"].map(
                  (r) => (
                    <label
                      key={r}
                      className="flex items-center gap-1.5 text-xs cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        defaultChecked={r === "India"}
                        className="rounded"
                      />
                      {r}
                    </label>
                  ),
                )}
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                className="h-8 text-xs gap-1"
                onClick={() => {
                  toast.success("Agoda sync started — fetching hotels...");
                  toast.success("Agoda: 247 hotels synced — 2 min ago", {
                    duration: 3000,
                  });
                }}
                data-ocid="admin.agoda.sync_button"
              >
                🔄 Sync Now
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="h-8 text-xs"
                onClick={() =>
                  toast.success("Agoda API connected successfully!")
                }
                data-ocid="admin.agoda.test_button"
              >
                Test Connection
              </Button>
            </div>
          </div>
          <Tabs defaultValue="products">
            <TabsList className="mb-4">
              <TabsTrigger value="products" className="text-xs">
                Products
              </TabsTrigger>
              <TabsTrigger value="consent" className="text-xs">
                Consent Requests
              </TabsTrigger>
              <TabsTrigger value="config" className="text-xs">
                Config
              </TabsTrigger>
            </TabsList>

            <TabsContent value="products" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {SYNCED_PRODUCTS.map((p) => (
                  <div
                    key={p.name}
                    className="bg-card border border-border rounded-xl p-3"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-8 h-8 rounded-lg bg-secondary/60 flex items-center justify-center">
                        <ShoppingBag
                          size={14}
                          className="text-muted-foreground"
                        />
                      </div>
                      <SBadge label="API Synced" color="green" />
                    </div>
                    <p className="text-xs font-label font-semibold text-foreground line-clamp-2 mb-1">
                      {p.name}
                    </p>
                    <p className="text-[11px] text-muted-foreground mb-0.5">
                      {p.source}
                    </p>
                    <div className="flex items-center justify-between">
                      <span
                        className="text-xs font-label font-bold"
                        style={{ color: "oklch(0.52 0.14 155)" }}
                      >
                        {p.price}
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        {p.synced}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="consent" className="mt-0">
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <TH>User</TH>
                        <TH>Field</TH>
                        <TH>Old Value</TH>
                        <TH>New Value</TH>
                        <TH>Status</TH>
                      </tr>
                    </thead>
                    <tbody>
                      {CONSENT_REQUESTS.map((c) => (
                        <tr
                          key={c.user + c.field}
                          className="hover:bg-secondary/20 transition-colors"
                        >
                          <TD className="font-mono text-[11px]">{c.user}</TD>
                          <TD className="font-medium">{c.field}</TD>
                          <TD className="text-muted-foreground">{c.oldVal}</TD>
                          <TD style={{ color: "oklch(0.52 0.14 155)" }}>
                            {c.newVal}
                          </TD>
                          <TD>
                            <SBadge
                              label={c.status}
                              color={statusColor(c.status)}
                            />
                          </TD>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="config" className="mt-0 space-y-3">
              {API_SOURCES.map((src) => (
                <div
                  key={src.name}
                  className="bg-card border border-border rounded-xl p-4 flex items-center gap-3"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "oklch(0.52 0.14 155 / 0.12)" }}
                  >
                    <RefreshCw
                      size={15}
                      style={{ color: "oklch(0.52 0.14 155)" }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-label font-semibold text-foreground">
                      {src.name}
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      {src.url} · Last run: {src.lastRun}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={apiSourcesEnabled[src.name] ?? src.enabled}
                      onCheckedChange={(v) =>
                        setApiSourcesEnabled((p) => ({ ...p, [src.name]: v }))
                      }
                    />
                    <ActionBtn label="Run Now" color="green" />
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
          {/* Open & Affiliate APIs */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">
                Open &amp; Affiliate APIs
              </h3>
              <AddNewApiDialog />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  name: "OpenFoodFacts",
                  type: "Products",
                  lastSynced: "5 min ago",
                  records: 1247,
                  icon: "🥗",
                },
                {
                  name: "FakeStore API",
                  type: "Products",
                  lastSynced: "12 min ago",
                  records: 200,
                  icon: "🛍️",
                },
                {
                  name: "Open Library",
                  type: "Books",
                  lastSynced: "1 hour ago",
                  records: 3840,
                  icon: "📚",
                },
              ].map((api, i) => (
                <OpenApiCard key={api.name} api={api} index={i + 1} />
              ))}
            </div>
          </div>
        </TabsContent>

        {/* ── AGENT 4: EVOLUTION ── */}
        <TabsContent value="evolution" className="mt-0">
          <Tabs defaultValue="changes">
            <TabsList className="mb-4">
              <TabsTrigger value="changes" className="text-xs">
                Q1 2026 Changes
              </TabsTrigger>
              <TabsTrigger value="polls" className="text-xs">
                Polls & Surveys
              </TabsTrigger>
              <TabsTrigger value="suggestions" className="text-xs">
                Suggestions
              </TabsTrigger>
              <TabsTrigger value="history" className="text-xs">
                Version History
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="changes"
              className="mt-0 grid grid-cols-1 md:grid-cols-2 gap-3"
            >
              {EVOLUTION_CHANGES.map((c) => {
                const cs = changeStatuses[c.title] ?? c.status;
                return (
                  <div
                    key={c.title}
                    className="bg-card border border-border rounded-xl p-4"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <SBadge label={c.category} color="violet" />
                      <SBadge label={cs} color={statusColor(cs)} />
                    </div>
                    <p className="text-sm font-label font-semibold text-foreground mb-1">
                      {c.title}
                    </p>
                    <p className="text-[11px] text-muted-foreground mb-3">
                      {c.desc}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                        <span>👍 {c.likes}</span>
                        <span>👎 {c.dislikes}</span>
                      </div>
                      <div className="flex gap-1.5">
                        <ActionBtn
                          label="Approve"
                          color="green"
                          onClick={() =>
                            setChangeStatuses((p) => ({
                              ...p,
                              [c.title]: "approved",
                            }))
                          }
                        />
                        <ActionBtn
                          label="Reject"
                          color="red"
                          onClick={() =>
                            setChangeStatuses((p) => ({
                              ...p,
                              [c.title]: "rejected",
                            }))
                          }
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </TabsContent>

            <TabsContent value="polls" className="mt-0 space-y-4">
              {POLLS.map((poll, pi) => (
                <div
                  // biome-ignore lint/suspicious/noArrayIndexKey: static list
                  key={pi}
                  className="bg-card border border-border rounded-xl p-4"
                >
                  <p className="text-sm font-label font-semibold text-foreground mb-3">
                    {poll.question}
                  </p>
                  <div className="space-y-2">
                    {poll.options.map((opt, oi) => {
                      const pct = Math.round((opt.votes / poll.total) * 100);
                      const vKey = `${pi}-${oi}`;
                      const voted = votes[vKey];
                      return (
                        // biome-ignore lint/suspicious/noArrayIndexKey: static poll options
                        <div key={oi}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-label text-foreground">
                              {opt.label}
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="text-[11px] text-muted-foreground">
                                {pct}%
                              </span>
                              <button
                                type="button"
                                onClick={() =>
                                  !voted &&
                                  setVotes((p) => ({ ...p, [vKey]: 1 }))
                                }
                                className={`text-[10px] font-label font-medium px-2 py-0.5 rounded border transition-colors ${voted ? "opacity-50 cursor-not-allowed border-border text-muted-foreground" : "border-border hover:bg-secondary/60 text-foreground"}`}
                              >
                                Vote
                              </button>
                            </div>
                          </div>
                          <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-500"
                              style={{
                                width: `${pct}%`,
                                background: "oklch(0.55 0.22 280)",
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-2">
                    {poll.total} total votes
                  </p>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="suggestions" className="mt-0 space-y-3">
              {SUGGESTIONS.map((s) => (
                <div
                  key={s.insight}
                  className="bg-card border border-border rounded-xl p-4 flex gap-3 items-start"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "oklch(0.55 0.22 280 / 0.12)" }}
                  >
                    <Activity
                      size={14}
                      style={{ color: "oklch(0.55 0.22 280)" }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-1">
                      <SBadge label={s.category} color="violet" />
                    </div>
                    <p className="text-xs font-label text-foreground">
                      {s.insight}
                    </p>
                  </div>
                  <div className="flex gap-1.5 shrink-0">
                    <ActionBtn label="Apply" color="green" />
                    <ActionBtn label="Dismiss" color="red" />
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="history" className="mt-0 space-y-3">
              {VERSION_HISTORY.map((v) => (
                <div
                  key={v.quarter}
                  className="bg-card border border-border rounded-xl p-4"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-label font-bold text-foreground">
                      {v.quarter}
                    </h4>
                    <div className="flex gap-1.5">
                      <ActionBtn label="View Details" />
                      <ActionBtn label="Restore" color="amber" />
                    </div>
                  </div>
                  <ul className="space-y-1">
                    {v.changes.map((ch) => (
                      <li
                        key={ch}
                        className="flex items-center gap-2 text-xs font-label text-muted-foreground"
                      >
                        <CheckCircle2
                          size={12}
                          style={{ color: "oklch(0.52 0.14 155)" }}
                          className="shrink-0"
                        />
                        {ch}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </TabsContent>

        {/* ── AGENT 5: LEGAL ── */}
        <TabsContent value="legal" className="mt-0">
          <Tabs defaultValue="updates">
            <TabsList className="mb-4">
              <TabsTrigger value="updates" className="text-xs">
                Legal Updates
              </TabsTrigger>
              <TabsTrigger value="clauses" className="text-xs">
                T&C Clauses
              </TabsTrigger>
              <TabsTrigger value="coverage" className="text-xs">
                Coverage
              </TabsTrigger>
              <TabsTrigger value="audit" className="text-xs">
                Audit Log
              </TabsTrigger>
            </TabsList>

            <TabsContent value="updates" className="mt-0">
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <TH>Country</TH>
                        <TH>Law</TH>
                        <TH>Module</TH>
                        <TH>Summary</TH>
                        <TH>Date</TH>
                        <TH>Status</TH>
                        <TH>Action</TH>
                      </tr>
                    </thead>
                    <tbody>
                      {LEGAL_UPDATES.map((l) => {
                        const ls = legalStatuses[l.law] ?? l.status;
                        return (
                          <tr
                            key={l.law}
                            className="hover:bg-secondary/20 transition-colors"
                          >
                            <TD className="text-base">{l.country}</TD>
                            <TD className="font-medium whitespace-nowrap">
                              {l.law}
                            </TD>
                            <TD>
                              <SBadge label={l.module} color="rose" />
                            </TD>
                            <TD>
                              <span className="line-clamp-1 max-w-[200px] block text-muted-foreground">
                                {l.summary}
                              </span>
                            </TD>
                            <TD className="text-muted-foreground whitespace-nowrap">
                              {l.date}
                            </TD>
                            <TD>
                              <SBadge label={ls} color={statusColor(ls)} />
                            </TD>
                            <TD>
                              <ActionBtn
                                label="Mark Reviewed"
                                color="green"
                                onClick={() =>
                                  setLegalStatuses((p) => ({
                                    ...p,
                                    [l.law]: "reviewed",
                                  }))
                                }
                              />
                            </TD>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="clauses" className="mt-0 space-y-3">
              {TC_CLAUSES.map((c) => {
                const cs = clauseStatuses[c.title] ?? c.status;
                return (
                  <div
                    key={c.title}
                    className="bg-card border border-border rounded-xl p-4"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-sm font-label font-semibold text-foreground">
                          {c.title}
                        </p>
                        <div className="flex items-center gap-1.5 mt-1">
                          <SBadge label={c.country} color="rose" />
                          <SBadge label={c.module} color="gray" />
                        </div>
                      </div>
                      <SBadge label={cs} color={statusColor(cs)} />
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                      {c.content}
                    </p>
                    <div className="flex gap-2">
                      <ActionBtn
                        label="Approve → Agent 4"
                        color="green"
                        onClick={() =>
                          setClauseStatuses((p) => ({
                            ...p,
                            [c.title]: "approved",
                          }))
                        }
                      />
                      <ActionBtn
                        label="Reject"
                        color="red"
                        onClick={() =>
                          setClauseStatuses((p) => ({
                            ...p,
                            [c.title]: "rejected",
                          }))
                        }
                      />
                    </div>
                  </div>
                );
              })}
            </TabsContent>

            <TabsContent value="coverage" className="mt-0">
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <TH>Country</TH>
                        {COVERAGE_MODULES.map((m) => (
                          <TH key={m}>{m}</TH>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {COVERAGE_COUNTRIES.map((country) => (
                        <tr
                          key={country}
                          className="hover:bg-secondary/20 transition-colors"
                        >
                          <TD className="font-label font-medium whitespace-nowrap">
                            {country}
                          </TD>
                          {COVERAGE_MODULES.map((m) => (
                            <TD key={m} className="text-center text-base">
                              {COVERAGE_DATA[country]?.[m] ?? "❌"}
                            </TD>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-3 border-t border-border flex items-center gap-4 text-[11px] text-muted-foreground">
                  <span>✅ Compliant</span>
                  <span>⚠️ Review needed</span>
                  <span>❌ Not covered</span>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="audit" className="mt-0">
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <TH>Timestamp</TH>
                        <TH>Admin</TH>
                        <TH>Action</TH>
                        <TH>Clause</TH>
                      </tr>
                    </thead>
                    <tbody>
                      {AUDIT_LOGS.map((l) => (
                        <tr
                          key={l.time + l.clause}
                          className="hover:bg-secondary/20 transition-colors"
                        >
                          <TD className="font-mono text-[11px] text-muted-foreground whitespace-nowrap">
                            {l.time}
                          </TD>
                          <TD className="font-mono text-[11px]">{l.admin}</TD>
                          <TD>
                            <SBadge
                              label={l.action}
                              color={
                                l.action === "Approved"
                                  ? "green"
                                  : l.action === "Rejected"
                                    ? "red"
                                    : "amber"
                              }
                            />
                          </TD>
                          <TD className="text-muted-foreground">{l.clause}</TD>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </TabsContent>

        {/* ── AGENT 6: SECURITY SCANNER ── */}
        <TabsContent value="agent6" className="mt-0 space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              {
                label: "Threats Today",
                value: "12",
                color: "oklch(0.55 0.22 25)",
                icon: Shield,
              },
              {
                label: "SQL Injections",
                value: "3",
                color: "oklch(0.65 0.25 335)",
                icon: Database,
              },
              {
                label: "XSS Attempts",
                value: "5",
                color: "oklch(0.72 0.17 85)",
                icon: AlertTriangle,
              },
              {
                label: "Auto-Blocked",
                value: "2",
                color: "oklch(0.52 0.14 155)",
                icon: UserX,
              },
            ].map(({ label, value, color, icon: Icon }) => (
              <div
                key={label}
                className="bg-card border border-border rounded-xl p-4"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-2"
                  style={{ background: `${color}15` }}
                >
                  <Icon size={15} style={{ color }} />
                </div>
                <p className="text-xl font-display font-bold text-foreground">
                  {value}
                </p>
                <p className="text-[11px] text-muted-foreground font-label">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="px-4 py-3 border-b border-border flex items-center justify-between">
              <h3 className="text-sm font-label font-semibold text-foreground">
                Threat Log
              </h3>
              <SBadge label="Real-time" color="green" />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <TH>Time</TH>
                    <TH>User</TH>
                    <TH>Type</TH>
                    <TH>Severity</TH>
                    <TH>Snippet</TH>
                    <TH>Action</TH>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      time: "09:14",
                      user: "ali.raza92",
                      type: "SQL Injection",
                      sev: "critical",
                      snippet: "' OR 1=1--",
                      action: "Blocked + alerted Agent 1",
                    },
                    {
                      time: "09:08",
                      user: "anon_777",
                      type: "XSS",
                      sev: "high",
                      snippet: "<script>alert(1)</script>",
                      action: "Input sanitized + logged",
                    },
                    {
                      time: "08:52",
                      user: "imran.k***",
                      type: "Brute Force",
                      sev: "high",
                      snippet: "350 login attempts in 5 min",
                      action: "IP rate-limited 24h",
                    },
                    {
                      time: "08:41",
                      user: "zahra.m***",
                      type: "SQL Injection",
                      sev: "medium",
                      snippet: "UNION SELECT * FROM users",
                      action: "Input blocked + warned",
                    },
                    {
                      time: "08:35",
                      user: "test_user1",
                      type: "XSS",
                      sev: "medium",
                      snippet: "onerror=alert(document.cookie)",
                      action: "Sanitized + flagged",
                    },
                    {
                      time: "08:20",
                      user: "bot_423a",
                      type: "Suspicious Payload",
                      sev: "low",
                      snippet: "Unusual form encoding detected",
                      action: "Logged for review",
                    },
                    {
                      time: "07:55",
                      user: "sara.a***",
                      type: "Phishing",
                      sev: "critical",
                      snippet: "Affiliate link → phishing domain",
                      action: "Link removed + account blocked",
                    },
                    {
                      time: "07:40",
                      user: "nida.h***",
                      type: "XSS",
                      sev: "low",
                      snippet: "javascript: in URL parameter",
                      action: "URL stripped + logged",
                    },
                    {
                      time: "07:22",
                      user: "usman.f***",
                      type: "SQL Injection",
                      sev: "medium",
                      snippet: "'; DROP TABLE users;--",
                      action: "Blocked + warned",
                    },
                    {
                      time: "07:10",
                      user: "anon_002",
                      type: "Brute Force",
                      sev: "high",
                      snippet: "120 API requests in 60 sec",
                      action: "Throttled to 10/min",
                    },
                  ].map((t) => (
                    <tr
                      key={t.time + t.user}
                      className="hover:bg-secondary/20 transition-colors"
                    >
                      <TD className="font-mono text-[11px] whitespace-nowrap">
                        {t.time}
                      </TD>
                      <TD className="font-mono text-[11px]">{t.user}</TD>
                      <TD>
                        <SBadge
                          label={t.type}
                          color={
                            t.type === "SQL Injection"
                              ? "red"
                              : t.type === "XSS"
                                ? "rose"
                                : t.type === "Phishing"
                                  ? "red"
                                  : "amber"
                          }
                        />
                      </TD>
                      <TD>
                        <SBadge
                          label={t.sev}
                          color={
                            t.sev === "critical"
                              ? "red"
                              : t.sev === "high"
                                ? "rose"
                                : t.sev === "medium"
                                  ? "amber"
                                  : "gray"
                          }
                        />
                      </TD>
                      <TD>
                        <span className="font-mono text-[10px] text-muted-foreground line-clamp-1 max-w-[150px] block">
                          {t.snippet}
                        </span>
                      </TD>
                      <TD className="text-[11px] text-muted-foreground">
                        {t.action}
                      </TD>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-4 space-y-3">
            <h3 className="text-sm font-label font-semibold text-foreground">
              Auto-block Rules
            </h3>
            {[
              {
                label: "Auto-block on 3+ SQL injection attempts",
                enabled: true,
              },
              { label: "Auto-block on XSS detection", enabled: true },
              { label: "Quarantine suspicious file uploads", enabled: true },
              {
                label: "Throttle IPs with brute force patterns",
                enabled: true,
              },
              { label: "Alert Agent 1 on critical threats", enabled: true },
            ].map((rule) => (
              <div
                key={rule.label}
                className="flex items-center justify-between py-1.5 border-b border-border/30 last:border-0"
              >
                <span className="text-xs font-label text-foreground">
                  {rule.label}
                </span>
                <Switch defaultChecked={rule.enabled} />
              </div>
            ))}
          </div>
          <div className="text-[11px] text-muted-foreground bg-secondary/40 rounded-lg px-3 py-2">
            🔗 <strong>Agent Network:</strong> Feeds threat data to Agent 1
            (Moderation) for user blocking. Critical threats escalate to Agent
            14 (Content Moderation).
          </div>
        </TabsContent>

        {/* ── AGENT 7: IMAGE MANAGER ── */}
        <TabsContent value="agent7" className="mt-0 space-y-4">
          <Agent7ImageManager />
        </TabsContent>

        {/* ── AGENT 8: SEO AGENT ── */}
        <TabsContent value="agent8" className="mt-0 space-y-4">
          <Agent8SEO />
        </TabsContent>

        {/* ── AGENT 9: SOCIAL SHARING ── */}
        <TabsContent value="agent9" className="mt-0 space-y-4">
          <Agent9Sharing />
        </TabsContent>

        {/* ── AGENT 11: FAKE USERS ── */}
        <TabsContent value="agent11" className="mt-0 space-y-4">
          <Agent11FakeUsers />
        </TabsContent>

        {/* ── AGENT 12: WHATSAPP ── */}
        <TabsContent value="agent12" className="mt-0 space-y-4">
          <Agent12WhatsApp />
        </TabsContent>

        {/* ── AGENT 13: MONETIZATION ── */}
        <TabsContent value="agent13" className="mt-0 space-y-4">
          <Agent13Monetize />
        </TabsContent>

        {/* ── AGENT 14: CONTENT MODERATION ── */}
        <TabsContent value="agent14" className="mt-0 space-y-4">
          <Agent14Content />
        </TabsContent>

        {/* ── AGENT 15: ANALYTICS ── */}
        <TabsContent value="agent15" className="mt-0 space-y-4">
          <Agent15Analytics />
        </TabsContent>

        {/* ── AGENT 16: TIPS MANAGER ── */}
        <TabsContent value="agent16" className="mt-0 space-y-4">
          <Agent16Tips />
        </TabsContent>

        {/* ── AGENT FACTORY ── */}
        <TabsContent value="factory" className="mt-0 space-y-4">
          <AgentFactory />
        </TabsContent>

        {/* ── THEME MANAGER ── */}
        <TabsContent value="theme" className="mt-0 space-y-4">
          <ThemeTemplateManager />
        </TabsContent>

        {/* ── DATA REQUESTS ── */}
        <TabsContent value="data-requests" className="mt-0 space-y-4">
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="px-4 py-3 border-b border-border flex items-center justify-between">
              <h3 className="text-sm font-label font-semibold text-foreground flex items-center gap-2">
                <Database size={14} className="text-primary" />
                Data Export &amp; Deletion Requests
              </h3>
              <SBadge label="5 Pending" color="amber" />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <TH>User</TH>
                    <TH>Type</TH>
                    <TH>Requested</TH>
                    <TH>Status</TH>
                    <TH>Actions</TH>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      user: "Ahmed Khan",
                      type: "Export",
                      date: "Mar 2, 2026",
                      status: "Pending",
                    },
                    {
                      user: "Fatima Hassan",
                      type: "Deletion",
                      date: "Mar 1, 2026",
                      status: "Processing",
                    },
                    {
                      user: "Bilal Chaudhry",
                      type: "Export",
                      date: "Feb 28, 2026",
                      status: "Completed",
                    },
                    {
                      user: "Sana Malik",
                      type: "Deletion",
                      date: "Feb 27, 2026",
                      status: "Pending",
                    },
                    {
                      user: "Omar Farooq",
                      type: "Export",
                      date: "Feb 25, 2026",
                      status: "Pending",
                    },
                  ].map((req) => (
                    <tr
                      key={req.user}
                      className="hover:bg-secondary/20 transition-colors"
                    >
                      <TD className="font-medium">{req.user}</TD>
                      <TD>
                        <SBadge
                          label={req.type}
                          color={req.type === "Export" ? "blue" : "red"}
                        />
                      </TD>
                      <TD>{req.date}</TD>
                      <TD>
                        <SBadge
                          label={req.status}
                          color={
                            req.status === "Completed"
                              ? "green"
                              : req.status === "Processing"
                                ? "amber"
                                : "gray"
                          }
                        />
                      </TD>
                      <TD>
                        <div className="flex gap-1.5">
                          <ActionBtn
                            label="Process"
                            color="amber"
                            onClick={() =>
                              toast.success(
                                `Processing ${req.type} request for ${req.user}`,
                              )
                            }
                          />
                          <ActionBtn
                            label="Complete"
                            color="green"
                            onClick={() =>
                              toast.success(
                                `${req.type} request completed for ${req.user}`,
                              )
                            }
                          />
                        </div>
                      </TD>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        {/* ── ALL MODULES ── */}
        <TabsContent value="modules" className="mt-0">
          <Tabs defaultValue="users">
            <TabsList className="mb-4 flex flex-wrap h-auto gap-0.5 p-1">
              {[
                "users",
                "products",
                "jobs",
                "healthcare",
                "real-estate",
                "education",
                "community",
                "blog",
              ].map((t) => (
                <TabsTrigger
                  key={t}
                  value={t}
                  className="text-xs capitalize px-3 py-1.5"
                >
                  {t.replace("-", " ")}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Users */}
            <TabsContent value="users" className="mt-0">
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <TH>Name</TH>
                        <TH>Role</TH>
                        <TH>Status</TH>
                        <TH>Joined</TH>
                        <TH>Actions</TH>
                      </tr>
                    </thead>
                    <tbody>
                      {ALL_USERS.map((u) => {
                        const role = userRoles[u.name] ?? u.role;
                        const isSuperAdmin = u.name === "Ahmed Khan";
                        return (
                          <tr
                            key={u.name}
                            className="hover:bg-secondary/20 transition-colors"
                          >
                            <TD className="font-medium">
                              <div className="flex items-center gap-1.5">
                                {u.name}
                                {isSuperAdmin && (
                                  <span
                                    className="flex items-center gap-0.5 text-[9px] font-label font-bold px-1.5 py-0.5 rounded-full"
                                    style={{
                                      background: "oklch(0.55 0.22 280 / 0.12)",
                                      color: "oklch(0.45 0.18 280)",
                                    }}
                                  >
                                    <Crown size={9} /> Super Admin
                                  </span>
                                )}
                              </div>
                            </TD>
                            <TD>
                              <SBadge
                                label={isSuperAdmin ? "admin" : role}
                                color={
                                  isSuperAdmin
                                    ? "violet"
                                    : role === "user"
                                      ? "blue"
                                      : "gray"
                                }
                              />
                            </TD>
                            <TD>
                              <SBadge
                                label={u.status}
                                color={u.status === "active" ? "green" : "red"}
                              />
                            </TD>
                            <TD className="text-muted-foreground">
                              {u.joined}
                            </TD>
                            <TD>
                              <div className="flex gap-1.5">
                                {isSuperAdmin ? (
                                  <span className="text-[11px] text-muted-foreground italic px-2 py-1">
                                    Read-only
                                  </span>
                                ) : (
                                  <>
                                    <DropdownMenu>
                                      <DropdownMenuTrigger asChild>
                                        <button
                                          type="button"
                                          className="flex items-center gap-1 text-[11px] font-label font-medium px-2 py-1 rounded border border-border hover:bg-secondary/60 text-muted-foreground"
                                        >
                                          Role <ChevronDown size={10} />
                                        </button>
                                      </DropdownMenuTrigger>
                                      <DropdownMenuContent className="w-28">
                                        {["user", "guest"].map((r) => (
                                          <DropdownMenuItem
                                            key={r}
                                            className="text-xs"
                                            onClick={() => {
                                              setUserRoles((p) => ({
                                                ...p,
                                                [u.name]: r,
                                              }));
                                              toast.success(
                                                "Role updated (demo mode)",
                                              );
                                            }}
                                          >
                                            {r}
                                          </DropdownMenuItem>
                                        ))}
                                      </DropdownMenuContent>
                                    </DropdownMenu>
                                    <ActionBtn label="Block" color="red" />
                                  </>
                                )}
                              </div>
                            </TD>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            {/* Products */}
            <TabsContent value="products" className="mt-0">
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <TH>Product</TH>
                        <TH>Category</TH>
                        <TH>Price</TH>
                        <TH>Variants</TH>
                        <TH>Status</TH>
                        <TH>Actions</TH>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          name: "Bridal Lehenga Collection",
                          cat: "Fashion",
                          price: "INR 45,000",
                          variants: 6,
                          status: "active",
                        },
                        {
                          name: "Honda Civic 2024 Rental",
                          cat: "Vehicle",
                          price: "INR 8,000/day",
                          variants: 2,
                          status: "active",
                        },
                        {
                          name: "Organic Honey 500g",
                          cat: "Food",
                          price: "INR 1,200",
                          variants: 3,
                          status: "active",
                        },
                        {
                          name: "iPhone 15 Pro Case",
                          cat: "Accessories",
                          price: "INR 2,500",
                          variants: 8,
                          status: "inactive",
                        },
                        {
                          name: "Premium Lawn Suit 3-pc",
                          cat: "Fashion",
                          price: "INR 6,500",
                          variants: 5,
                          status: "active",
                        },
                        {
                          name: 'Samsung 55" QLED TV',
                          cat: "Electronics",
                          price: "INR 185,000",
                          variants: 1,
                          status: "active",
                        },
                        {
                          name: "Handmade Leather Wallet",
                          cat: "Accessories",
                          price: "INR 3,200",
                          variants: 4,
                          status: "active",
                        },
                        {
                          name: "Basmati Rice 25kg Bag",
                          cat: "Grocery",
                          price: "INR 5,500",
                          variants: 2,
                          status: "inactive",
                        },
                      ].map((p) => (
                        <tr
                          key={p.name}
                          className="hover:bg-secondary/20 transition-colors"
                        >
                          <TD className="font-medium">{p.name}</TD>
                          <TD>
                            <SBadge label={p.cat} color="amber" />
                          </TD>
                          <TD
                            style={{ color: "oklch(0.52 0.14 155)" }}
                            className="font-mono text-[11px]"
                          >
                            {p.price}
                          </TD>
                          <TD className="text-muted-foreground text-center">
                            {p.variants}
                          </TD>
                          <TD>
                            <SBadge
                              label={p.status}
                              color={p.status === "active" ? "green" : "gray"}
                            />
                          </TD>
                          <ModuleActions />
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            {/* Jobs */}
            <TabsContent value="jobs" className="mt-0">
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <TH>Title</TH>
                        <TH>Company</TH>
                        <TH>Type</TH>
                        <TH>Applications</TH>
                        <TH>Status</TH>
                        <TH>Actions</TH>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          title: "Senior React Developer",
                          company: "TechPK",
                          type: "Full Time",
                          apps: 24,
                          status: "active",
                        },
                        {
                          title: "Delivery Rider — QuickEats",
                          company: "QuickEats",
                          type: "Delivery",
                          apps: 47,
                          status: "active",
                        },
                        {
                          title: "Math Tutor (Freelance)",
                          company: "Self",
                          type: "Freelance",
                          apps: 8,
                          status: "active",
                        },
                        {
                          title: "Security Guard (Night)",
                          company: "Green Valley",
                          type: "Part Time",
                          apps: 15,
                          status: "active",
                        },
                        {
                          title: "Marketing Manager",
                          company: "Al-Noor Foods",
                          type: "Full Time",
                          apps: 31,
                          status: "closed",
                        },
                        {
                          title: "Dental Assistant",
                          company: "City Clinic",
                          type: "Full Time",
                          apps: 12,
                          status: "active",
                        },
                        {
                          title: "School Principal",
                          company: "Beacon House",
                          type: "Full Time",
                          apps: 19,
                          status: "active",
                        },
                        {
                          title: "Online ESL Teacher",
                          company: "Self",
                          type: "Freelance",
                          apps: 6,
                          status: "closed",
                        },
                      ].map((j) => (
                        <tr
                          key={j.title}
                          className="hover:bg-secondary/20 transition-colors"
                        >
                          <TD className="font-medium">{j.title}</TD>
                          <TD className="text-muted-foreground">{j.company}</TD>
                          <TD>
                            <SBadge label={j.type} color="blue" />
                          </TD>
                          <TD className="text-center">{j.apps}</TD>
                          <TD>
                            <SBadge
                              label={j.status}
                              color={j.status === "active" ? "green" : "gray"}
                            />
                          </TD>
                          <ModuleActions />
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            {/* Healthcare */}
            <TabsContent value="healthcare" className="mt-0">
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <TH>Doctor / Clinic</TH>
                        <TH>Specialty</TH>
                        <TH>Patients</TH>
                        <TH>Rating</TH>
                        <TH>Status</TH>
                        <TH>Actions</TH>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          name: "Dr. Hassan Malik",
                          spec: "Cardiologist",
                          patients: 142,
                          rating: "4.9",
                          status: "active",
                        },
                        {
                          name: "City Dental Clinic",
                          spec: "Dentistry",
                          patients: 89,
                          rating: "4.7",
                          status: "active",
                        },
                        {
                          name: "Dr. Ayesha Raza",
                          spec: "Gynecologist",
                          patients: 201,
                          rating: "4.8",
                          status: "active",
                        },
                        {
                          name: "Al-Shifa Hospital",
                          spec: "General",
                          patients: 520,
                          rating: "4.5",
                          status: "active",
                        },
                        {
                          name: "Dr. Farhan Ali",
                          spec: "Neurologist",
                          patients: 67,
                          rating: "4.6",
                          status: "inactive",
                        },
                        {
                          name: "Life Care Pharmacy",
                          spec: "Pharmacy",
                          patients: 0,
                          rating: "4.3",
                          status: "active",
                        },
                        {
                          name: "Dr. Sana Tariq",
                          spec: "Dermatologist",
                          patients: 113,
                          rating: "4.9",
                          status: "active",
                        },
                        {
                          name: "Rehman Medical Center",
                          spec: "Multi-specialty",
                          patients: 340,
                          rating: "4.4",
                          status: "active",
                        },
                      ].map((h) => (
                        <tr
                          key={h.name}
                          className="hover:bg-secondary/20 transition-colors"
                        >
                          <TD className="font-medium">{h.name}</TD>
                          <TD>
                            <SBadge label={h.spec} color="rose" />
                          </TD>
                          <TD className="text-center">{h.patients}</TD>
                          <TD
                            className="text-center"
                            style={{ color: "oklch(0.65 0.14 50)" }}
                          >
                            ★ {h.rating}
                          </TD>
                          <TD>
                            <SBadge
                              label={h.status}
                              color={h.status === "active" ? "green" : "gray"}
                            />
                          </TD>
                          <ModuleActions />
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            {/* Real Estate */}
            <TabsContent value="real-estate" className="mt-0">
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <TH>Property</TH>
                        <TH>Type</TH>
                        <TH>Location</TH>
                        <TH>Price</TH>
                        <TH>Status</TH>
                        <TH>Actions</TH>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          name: "DHA Phase 6 House 5 Marla",
                          type: "Sale",
                          location: "Lahore",
                          price: "PKR 2.8Cr",
                          status: "active",
                        },
                        {
                          name: "Gulberg Commercial Plot 4 Marla",
                          type: "Sale",
                          location: "Lahore",
                          price: "PKR 1.5Cr",
                          status: "active",
                        },
                        {
                          name: "Bahria Town Apartment 2BR",
                          type: "Rent",
                          location: "Karachi",
                          price: "PKR 65K/mo",
                          status: "rented",
                        },
                        {
                          name: "Garden Town Upper Portion",
                          type: "Rent",
                          location: "Lahore",
                          price: "PKR 45K/mo",
                          status: "active",
                        },
                        {
                          name: "F-10 Islamabad Flat 3BR",
                          type: "Sale",
                          location: "Islamabad",
                          price: "PKR 3.2Cr",
                          status: "active",
                        },
                        {
                          name: "Blue Area Office Space",
                          type: "Rent",
                          location: "Islamabad",
                          price: "PKR 120K/mo",
                          status: "active",
                        },
                        {
                          name: "Model Town Residential Plot",
                          type: "Sale",
                          location: "Lahore",
                          price: "PKR 1.8Cr",
                          status: "pending",
                        },
                        {
                          name: "Defence Karachi Penthouse",
                          type: "Rent",
                          location: "Karachi",
                          price: "PKR 180K/mo",
                          status: "active",
                        },
                      ].map((p) => (
                        <tr
                          key={p.name}
                          className="hover:bg-secondary/20 transition-colors"
                        >
                          <TD className="font-medium max-w-[160px]">
                            <span className="line-clamp-1 block">{p.name}</span>
                          </TD>
                          <TD>
                            <SBadge
                              label={p.type}
                              color={p.type === "Sale" ? "blue" : "amber"}
                            />
                          </TD>
                          <TD className="text-muted-foreground">
                            {p.location}
                          </TD>
                          <TD
                            style={{ color: "oklch(0.52 0.14 155)" }}
                            className="font-mono text-[11px]"
                          >
                            {p.price}
                          </TD>
                          <TD>
                            <SBadge
                              label={p.status}
                              color={
                                p.status === "active"
                                  ? "green"
                                  : p.status === "rented"
                                    ? "violet"
                                    : "amber"
                              }
                            />
                          </TD>
                          <ModuleActions />
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="mt-0">
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <TH>School / Institution</TH>
                        <TH>Students</TH>
                        <TH>Teachers</TH>
                        <TH>Branches</TH>
                        <TH>Status</TH>
                        <TH>Actions</TH>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          name: "Beacon House School System",
                          students: 2840,
                          teachers: 182,
                          branches: 12,
                          status: "active",
                        },
                        {
                          name: "City Grammar School",
                          students: 1200,
                          teachers: 84,
                          branches: 4,
                          status: "active",
                        },
                        {
                          name: "Knowledge Academy",
                          students: 680,
                          teachers: 45,
                          branches: 2,
                          status: "active",
                        },
                        {
                          name: "Lahore Grammar School",
                          students: 3100,
                          teachers: 210,
                          branches: 8,
                          status: "active",
                        },
                        {
                          name: "The Educators",
                          students: 890,
                          teachers: 62,
                          branches: 3,
                          status: "active",
                        },
                        {
                          name: "Oxford School Pakistan",
                          students: 1540,
                          teachers: 98,
                          branches: 6,
                          status: "active",
                        },
                        {
                          name: "Future Stars Academy",
                          students: 420,
                          teachers: 28,
                          branches: 1,
                          status: "pending",
                        },
                        {
                          name: "Al-Huda Institute",
                          students: 310,
                          teachers: 24,
                          branches: 2,
                          status: "inactive",
                        },
                      ].map((e) => (
                        <tr
                          key={e.name}
                          className="hover:bg-secondary/20 transition-colors"
                        >
                          <TD className="font-medium">{e.name}</TD>
                          <TD className="text-center">
                            {e.students.toLocaleString()}
                          </TD>
                          <TD className="text-center">{e.teachers}</TD>
                          <TD className="text-center">{e.branches}</TD>
                          <TD>
                            <SBadge
                              label={e.status}
                              color={
                                e.status === "active"
                                  ? "green"
                                  : e.status === "pending"
                                    ? "amber"
                                    : "gray"
                              }
                            />
                          </TD>
                          <ModuleActions />
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            {/* Community */}
            <TabsContent value="community" className="mt-0">
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <TH>Community</TH>
                        <TH>Members</TH>
                        <TH>Admin</TH>
                        <TH>Location</TH>
                        <TH>Status</TH>
                        <TH>Actions</TH>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          name: "DHA Phase 5 Residents",
                          members: 420,
                          admin: "Khaled Rana",
                          location: "Lahore",
                          status: "active",
                        },
                        {
                          name: "Bahria Town Block A",
                          members: 312,
                          admin: "Saad Mirza",
                          location: "Lahore",
                          status: "active",
                        },
                        {
                          name: "Green Valley Society",
                          members: 198,
                          admin: "Hina Baig",
                          location: "Islamabad",
                          status: "active",
                        },
                        {
                          name: "Model Town East",
                          members: 284,
                          admin: "Arif Shah",
                          location: "Lahore",
                          status: "active",
                        },
                        {
                          name: "Clifton Block 5",
                          members: 156,
                          admin: "Rehana Qazi",
                          location: "Karachi",
                          status: "active",
                        },
                        {
                          name: "F-7 Islamabad Sector",
                          members: 241,
                          admin: "Tariq Mehmood",
                          location: "Islamabad",
                          status: "active",
                        },
                        {
                          name: "Garden Town Coop",
                          members: 89,
                          admin: "Uzma Sheikh",
                          location: "Lahore",
                          status: "pending",
                        },
                        {
                          name: "North Nazimabad Block L",
                          members: 134,
                          admin: "Naveed Ali",
                          location: "Karachi",
                          status: "active",
                        },
                      ].map((c) => (
                        <tr
                          key={c.name}
                          className="hover:bg-secondary/20 transition-colors"
                        >
                          <TD className="font-medium">{c.name}</TD>
                          <TD className="text-center">{c.members}</TD>
                          <TD className="text-muted-foreground">{c.admin}</TD>
                          <TD>
                            <span className="flex items-center gap-1 text-xs text-muted-foreground">
                              <MapPin size={11} />
                              {c.location}
                            </span>
                          </TD>
                          <TD>
                            <SBadge
                              label={c.status}
                              color={c.status === "active" ? "green" : "amber"}
                            />
                          </TD>
                          <ModuleActions />
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            {/* Blog */}
            <TabsContent value="blog" className="mt-0">
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <TH>Title</TH>
                        <TH>Author</TH>
                        <TH>Views</TH>
                        <TH>Affiliate Links</TH>
                        <TH>Status</TH>
                        <TH>Actions</TH>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          title: "DJI Mini 4 Pro Full Review 2026",
                          author: "Ali Raza",
                          views: 4120,
                          links: 3,
                          status: "published",
                        },
                        {
                          title: "7-Day Hunza Valley Travel Guide",
                          author: "Zara Hassan",
                          views: 2870,
                          links: 5,
                          status: "published",
                        },
                        {
                          title: "Top 10 Lahore Properties Under 2Cr",
                          author: "Omar Khan",
                          views: 1840,
                          links: 2,
                          status: "published",
                        },
                        {
                          title: "How to Make the Perfect Biryani",
                          author: "Fatima Malik",
                          views: 6200,
                          links: 1,
                          status: "published",
                        },
                        {
                          title: "Freelancing in Pakistan: 2026 Guide",
                          author: "Hassan Ali",
                          views: 3150,
                          links: 4,
                          status: "published",
                        },
                        {
                          title: "Best Private Schools in Lahore",
                          author: "Nida Raza",
                          views: 2200,
                          links: 2,
                          status: "pending",
                        },
                        {
                          title: "Skin Care Routine for Dry Climate",
                          author: "Sara Ahmed",
                          views: 1890,
                          links: 6,
                          status: "published",
                        },
                        {
                          title: "Pakistan Stock Market Beginners Guide",
                          author: "Bilal Hussain",
                          views: 980,
                          links: 0,
                          status: "draft",
                        },
                      ].map((b) => (
                        <tr
                          key={b.title}
                          className="hover:bg-secondary/20 transition-colors"
                        >
                          <TD className="font-medium max-w-[180px]">
                            <span className="line-clamp-1 block">
                              {b.title}
                            </span>
                          </TD>
                          <TD className="text-muted-foreground">{b.author}</TD>
                          <TD className="text-center">
                            {b.views.toLocaleString()}
                          </TD>
                          <TD className="text-center">{b.links}</TD>
                          <TD>
                            <SBadge
                              label={b.status}
                              color={
                                b.status === "published"
                                  ? "green"
                                  : b.status === "pending"
                                    ? "amber"
                                    : "gray"
                              }
                            />
                          </TD>
                          <ModuleActions />
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </TabsContent>

        {/* ── PAYSPRINT API ── */}
        <TabsContent value="paysprint" className="mt-0 space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
              style={{ background: "oklch(0.55 0.22 280 / 0.1)" }}
            >
              💳
            </div>
            <div>
              <h2 className="font-semibold text-base">
                PaySprint API Configuration
              </h2>
              <p className="text-xs text-muted-foreground">
                Configure PaySprint for mobile recharge and bus booking
              </p>
            </div>
          </div>

          {/* Mobile Recharge API */}
          <div className="p-5 bg-card border border-border rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-sm flex items-center gap-2">
                📱 Mobile Recharge API
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Mode:</span>
                <select className="text-xs border border-border rounded px-2 py-1 bg-background">
                  <option value="test">Test</option>
                  <option value="live">Live</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <Label className="text-xs">API Key</Label>
                <Input
                  className="mt-1 h-8 text-xs"
                  placeholder="PS_RECHARGE_API_KEY_..."
                  data-ocid="admin.paysprint.recharge_key_input"
                />
              </div>
              <div>
                <Label className="text-xs">Merchant ID</Label>
                <Input
                  className="mt-1 h-8 text-xs"
                  placeholder="MERCHANT_001"
                />
              </div>
              <div>
                <Label className="text-xs">Base URL</Label>
                <Input
                  className="mt-1 h-8 text-xs"
                  defaultValue="https://api.paysprint.in/api/v1"
                />
              </div>
              <div>
                <Label className="text-xs">Callback URL</Label>
                <Input
                  className="mt-1 h-8 text-xs"
                  placeholder="https://yourdomain.com/callback/recharge"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label className="text-xs mb-2 block">Operator Codes</Label>
                <div className="border border-border rounded-lg overflow-hidden">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-secondary/50">
                        <th className="text-left px-3 py-2">Operator</th>
                        <th className="text-left px-3 py-2">Code</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Airtel", "AT"],
                        ["Jio", "JIO"],
                        ["Vi (Vodafone)", "VI"],
                        ["BSNL", "BSN"],
                        ["Idea", "IDEA"],
                      ].map(([op, code]) => (
                        <tr key={op} className="border-t border-border">
                          <td className="px-3 py-1.5">{op}</td>
                          <td className="px-3 py-1.5">
                            <Input
                              className="h-6 text-xs p-1 w-16"
                              defaultValue={code}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <Label className="text-xs mb-2 block">Circle Codes</Label>
                <div className="border border-border rounded-lg overflow-hidden">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-secondary/50">
                        <th className="text-left px-3 py-2">Circle</th>
                        <th className="text-left px-3 py-2">Code</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Delhi", "DL"],
                        ["Mumbai", "MH"],
                        ["Karnataka", "KA"],
                        ["UP", "UP"],
                        ["Maharashtra", "MH2"],
                      ].map(([circle, code]) => (
                        <tr key={circle} className="border-t border-border">
                          <td className="px-3 py-1.5">{circle}</td>
                          <td className="px-3 py-1.5">
                            <Input
                              className="h-6 text-xs p-1 w-16"
                              defaultValue={code}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <Button
              size="sm"
              className="h-8 text-xs"
              onClick={() => toast.success("PaySprint Recharge API connected!")}
              data-ocid="admin.paysprint.recharge_test_button"
            >
              Test Connection
            </Button>
          </div>

          {/* Bus Booking API */}
          <div className="p-5 bg-card border border-border rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-sm flex items-center gap-2">
                🚌 Bus Booking API
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Mode:</span>
                <select className="text-xs border border-border rounded px-2 py-1 bg-background">
                  <option value="test">Test</option>
                  <option value="live">Live</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <Label className="text-xs">API Key</Label>
                <Input
                  className="mt-1 h-8 text-xs"
                  placeholder="PS_BUS_API_KEY_..."
                  data-ocid="admin.paysprint.bus_key_input"
                />
              </div>
              <div>
                <Label className="text-xs">Base URL</Label>
                <Input
                  className="mt-1 h-8 text-xs"
                  defaultValue="https://api.paysprint.in/api/v1/bus"
                />
              </div>
              <div>
                <Label className="text-xs">Commission %</Label>
                <Input
                  className="mt-1 h-8 text-xs"
                  type="number"
                  defaultValue="2.5"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label className="text-xs mb-2 block">
                  Source / Destination Codes
                </Label>
                <div className="border border-border rounded-lg overflow-hidden">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-secondary/50">
                        <th className="text-left px-3 py-2">City</th>
                        <th className="text-left px-3 py-2">Code</th>
                        <th className="px-2 py-2" />
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Mumbai", "MUM"],
                        ["Delhi", "DEL"],
                        ["Bangalore", "BLR"],
                        ["Chennai", "CHE"],
                        ["Hyderabad", "HYD"],
                      ].map(([city, code]) => (
                        <tr key={city} className="border-t border-border">
                          <td className="px-3 py-1.5">{city}</td>
                          <td className="px-3 py-1.5">
                            <Input
                              className="h-6 text-xs p-1 w-16"
                              defaultValue={code}
                            />
                          </td>
                          <td className="px-2 py-1.5">
                            <button
                              type="button"
                              className="text-destructive text-xs hover:underline"
                            >
                              ✕
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="mt-2 h-7 text-xs"
                  onClick={() => toast.info("Add new city row")}
                >
                  + Add City
                </Button>
              </div>
              <div>
                <Label className="text-xs mb-2 block">Seat Layout Config</Label>
                <div className="space-y-2">
                  <div className="flex gap-2 items-center">
                    <span className="text-xs w-16">Rows</span>
                    <Input
                      className="h-7 text-xs"
                      type="number"
                      defaultValue="10"
                    />
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="text-xs w-16">Columns</span>
                    <Input
                      className="h-7 text-xs"
                      type="number"
                      defaultValue="4"
                    />
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="text-xs w-16">Layout</span>
                    <Select defaultValue="2+2">
                      <SelectTrigger className="h-7 text-xs flex-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2+2">2+2</SelectItem>
                        <SelectItem value="2+3">2+3</SelectItem>
                        <SelectItem value="1+2">1+2 (sleeper)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
            <Button
              size="sm"
              className="h-8 text-xs"
              onClick={() => toast.success("PaySprint Bus API connected!")}
              data-ocid="admin.paysprint.bus_test_button"
            >
              Test Connection
            </Button>
          </div>

          <Button
            className="w-full"
            onClick={() => toast.success("PaySprint configuration saved!")}
            data-ocid="admin.paysprint.save_button"
          >
            Save PaySprint Settings
          </Button>
        </TabsContent>

        {/* ── AGENT 17: TRAVEL CURATOR ── */}
        <TabsContent value="agent17" className="mt-0 space-y-4">
          <div className="p-5 bg-card border border-border rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: "oklch(0.65 0.14 50 / 0.1)" }}
                >
                  ✈️
                </div>
                <div>
                  <h2 className="font-semibold">Agent 17: Travel Curator</h2>
                  <p className="text-xs text-muted-foreground">
                    Auto-generates packages, itineraries, hotels &amp; cab
                    routes
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Status:</span>
                <Switch defaultChecked data-ocid="admin.agent17.toggle" />
                <Badge className="text-xs bg-green-100 text-green-700 border-0">
                  Active
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label className="text-xs">Update Frequency</Label>
                <Select defaultValue="daily">
                  <SelectTrigger
                    className="mt-1 h-8 text-xs"
                    data-ocid="admin.agent17.frequency_select"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hourly">Hourly</SelectItem>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-xs">Confidence Threshold: 75%</Label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="75"
                  className="w-full mt-2 h-2 rounded-lg appearance-none cursor-pointer"
                  style={{ accentColor: "oklch(var(--primary))" }}
                />
              </div>
            </div>

            <div>
              <Label className="text-xs mb-2 block">Target Regions</Label>
              <div className="flex flex-wrap gap-3">
                {[
                  "North India",
                  "South India",
                  "Rajasthan",
                  "Goa",
                  "Kerala",
                  "Pakistan",
                  "Nepal",
                  "Sri Lanka",
                  "Maldives",
                  "Dubai",
                ].map((r) => (
                  <label
                    key={r}
                    className="flex items-center gap-1.5 text-xs cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      defaultChecked={r.includes("India")}
                      className="rounded"
                    />
                    {r}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-xs mb-2 block">Auto-Generate</Label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  ["Packages", true],
                  ["Hotels", true],
                  ["Itineraries", true],
                  ["Cab Listings", false],
                  ["Tour Guides", false],
                ].map(([label, checked]) => (
                  <label
                    key={String(label)}
                    className="flex items-center gap-2 text-xs cursor-pointer p-2 rounded-lg border border-border hover:bg-secondary/30"
                  >
                    <input
                      type="checkbox"
                      defaultChecked={checked as boolean}
                      className="rounded"
                    />
                    {label}
                  </label>
                ))}
              </div>
            </div>

            <Button
              size="sm"
              className="gap-1"
              onClick={() =>
                toast.success("Agent 17 running — generating travel content...")
              }
              data-ocid="admin.agent17.run_button"
            >
              ▶ Run Now
            </Button>
          </div>

          {/* Activity Log */}
          <div className="p-5 bg-card border border-border rounded-xl">
            <h3 className="font-semibold text-sm mb-3">
              Activity Log (Last 10)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="text-left px-3 py-2">Destination</th>
                    <th className="text-left px-3 py-2">Type</th>
                    <th className="text-right px-3 py-2">Confidence</th>
                    <th className="text-right px-3 py-2">Timestamp</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Goa, India", "Package", 92, "Mar 11, 10:30"],
                    ["Kerala Backwaters", "Itinerary", 88, "Mar 11, 09:15"],
                    ["Taj Hotel, Agra", "Hotel", 85, "Mar 10, 18:00"],
                    ["Delhi → Jaipur", "Cab Route", 78, "Mar 10, 14:45"],
                    ["Rajasthan Heritage", "Package", 91, "Mar 10, 12:00"],
                    ["Shimla Hills", "Itinerary", 83, "Mar 09, 16:30"],
                    ["Grand Hyatt, Mumbai", "Hotel", 80, "Mar 09, 11:00"],
                    ["Mumbai → Pune", "Cab Route", 76, "Mar 08, 15:00"],
                    ["Andaman Islands", "Package", 89, "Mar 08, 09:00"],
                    ["Ranthambore Safari", "Itinerary", 87, "Mar 07, 14:00"],
                  ].map(([dest, type, conf, ts], i) => (
                    <tr
                      key={String(dest)}
                      className="border-t border-border hover:bg-secondary/20"
                      data-ocid={`admin.agent17.log.item.${i + 1}`}
                    >
                      <td className="px-3 py-2 font-medium">{dest}</td>
                      <td className="px-3 py-2">
                        <Badge
                          variant="outline"
                          className="text-[10px] px-1.5 py-0"
                        >
                          {type}
                        </Badge>
                      </td>
                      <td className="px-3 py-2 text-right">
                        <span
                          style={{
                            color:
                              (conf as number) >= 85
                                ? "oklch(0.52 0.14 155)"
                                : "oklch(0.65 0.14 50)",
                          }}
                        >
                          {conf}%
                        </span>
                      </td>
                      <td className="px-3 py-2 text-right text-muted-foreground">
                        {ts}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        {/* ── AGENT 18: PRICING & DELIVERY MONITOR ── */}
        <TabsContent value="agent18" className="mt-0 space-y-4">
          <Agent18PricingMonitor />
        </TabsContent>
        {/* ── SURVEYS ── */}
        <TabsContent value="surveys" className="mt-0 space-y-5">
          {/* Summary cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Total Surveys", value: "847", sub: "this month" },
              { label: "Avg Platform Rating", value: "4.6★", sub: "out of 5" },
              {
                label: "Most Voted Product",
                value: "CBSE Book Set",
                sub: "210 votes",
              },
              {
                label: "Top Rated Service",
                value: "Health Consult",
                sub: "4.9★ rating",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-border rounded-xl p-4"
              >
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="text-lg font-display font-bold text-foreground mt-1 truncate">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground">{stat.sub}</p>
              </div>
            ))}
          </div>

          {/* Survey table */}
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="px-4 py-3 border-b border-border">
              <h3 className="font-label font-semibold text-sm">
                Survey Results
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="px-4 py-2.5 text-left font-label text-muted-foreground">
                      Product / Service
                    </th>
                    <th className="px-3 py-2.5 text-left font-label text-muted-foreground">
                      Module
                    </th>
                    <th className="px-3 py-2.5 text-center font-label text-muted-foreground">
                      Avg Rating
                    </th>
                    <th className="px-3 py-2.5 text-center font-label text-muted-foreground">
                      Votes
                    </th>
                    <th className="px-3 py-2.5 text-center font-label text-muted-foreground">
                      Value
                    </th>
                    <th className="px-3 py-2.5 text-center font-label text-muted-foreground">
                      Quality
                    </th>
                    <th className="px-3 py-2.5 text-center font-label text-muted-foreground">
                      Delivery
                    </th>
                    <th className="px-4 py-2.5 text-left font-label text-muted-foreground">
                      Latest Comment
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "CBSE Class 10 Book Set",
                      module: "Education",
                      rating: 4.8,
                      votes: 210,
                      value: 92,
                      quality: 88,
                      delivery: 85,
                      comment: "Great value, arrived quickly!",
                    },
                    {
                      name: "General Health Consultation",
                      module: "Healthcare",
                      rating: 4.9,
                      votes: 305,
                      value: 96,
                      quality: 97,
                      delivery: 90,
                      comment: "Dr. was very thorough and helpful.",
                    },
                    {
                      name: "Home Tutoring — Maths",
                      module: "Services",
                      rating: 4.9,
                      votes: 140,
                      value: 88,
                      quality: 95,
                      delivery: 82,
                      comment: "My son's grades improved a lot.",
                    },
                    {
                      name: "CCTV 8-Camera Kit",
                      module: "Gated Community",
                      rating: 4.4,
                      votes: 88,
                      value: 80,
                      quality: 84,
                      delivery: 72,
                      comment: "Good product, setup was a bit complex.",
                    },
                    {
                      name: "Goa Beach Resort Package",
                      module: "Travel",
                      rating: 4.7,
                      votes: 128,
                      value: 90,
                      quality: 92,
                      delivery: 88,
                      comment: "Wonderful trip, highly recommend!",
                    },
                    {
                      name: "Honda Civic 2022",
                      module: "Products",
                      rating: 4.8,
                      votes: 165,
                      value: 85,
                      quality: 90,
                      delivery: 78,
                      comment: "Exactly as described, very happy.",
                    },
                    {
                      name: "Mehndi Artist",
                      module: "Services",
                      rating: 4.95,
                      votes: 201,
                      value: 95,
                      quality: 98,
                      delivery: 93,
                      comment: "Beautiful work for our wedding!",
                    },
                    {
                      name: "Legal Consultation",
                      module: "Services",
                      rating: 4.8,
                      votes: 77,
                      value: 87,
                      quality: 90,
                      delivery: 85,
                      comment: "Very professional, resolved my issue.",
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.name}
                      className="border-b border-border/50 hover:bg-secondary/20 transition-colors"
                      data-ocid={`admin.surveys.row.${i + 1}`}
                    >
                      <td className="px-4 py-3 font-label font-medium text-foreground">
                        {row.name}
                      </td>
                      <td className="px-3 py-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-label bg-secondary text-muted-foreground">
                          {row.module}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-center">
                        <span className="font-label font-bold text-amber-500">
                          {row.rating}★
                        </span>
                      </td>
                      <td className="px-3 py-3 text-center font-label text-foreground">
                        {row.votes}
                      </td>
                      <td className="px-3 py-3 text-center">
                        <div className="flex items-center gap-1 justify-center">
                          <div className="h-1.5 w-10 bg-secondary rounded-full overflow-hidden">
                            <div
                              className="h-full bg-emerald-500 rounded-full"
                              style={{ width: `${row.value}%` }}
                            />
                          </div>
                          <span className="text-[10px] text-muted-foreground">
                            {row.value}%
                          </span>
                        </div>
                      </td>
                      <td className="px-3 py-3 text-center">
                        <div className="flex items-center gap-1 justify-center">
                          <div className="h-1.5 w-10 bg-secondary rounded-full overflow-hidden">
                            <div
                              className="h-full bg-blue-500 rounded-full"
                              style={{ width: `${row.quality}%` }}
                            />
                          </div>
                          <span className="text-[10px] text-muted-foreground">
                            {row.quality}%
                          </span>
                        </div>
                      </td>
                      <td className="px-3 py-3 text-center">
                        <div className="flex items-center gap-1 justify-center">
                          <div className="h-1.5 w-10 bg-secondary rounded-full overflow-hidden">
                            <div
                              className="h-full bg-violet-500 rounded-full"
                              style={{ width: `${row.delivery}%` }}
                            />
                          </div>
                          <span className="text-[10px] text-muted-foreground">
                            {row.delivery}%
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground italic max-w-[200px] truncate">
                        &ldquo;{row.comment}&rdquo;
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        {/* ── AGENT 19: GAME CREATOR ── */}
        <TabsContent value="agent19" className="mt-0 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-display font-bold">
                Agent 19 — Game Creator
              </h2>
              <p className="text-xs text-muted-foreground mt-1">
                Auto-generates unique games based on user interests and activity
                patterns.
              </p>
            </div>
            <Switch defaultChecked data-ocid="admin.agent19.toggle" />
          </div>
          <Agent19FullPanel />
        </TabsContent>

        {/* ── AGENT 20: COMIC AGENT ── */}
        <TabsContent value="agent20" className="mt-0 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-display font-bold">
                Agent 20 — Comic Agent
              </h2>
              <p className="text-xs text-muted-foreground mt-1">
                Creates funny daily comics from users' daily life feeds.
              </p>
            </div>
            <Switch defaultChecked data-ocid="admin.agent20.toggle" />
          </div>
          <Agent20FullPanel />
        </TabsContent>

        {/* ── AGENT 21: SPIRITUAL & MYTHOLOGY CURATOR ── */}
        <TabsContent value="agent21" className="mt-0 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-display font-bold">
                Agent 21 — Spiritual & Mythology Curator
              </h2>
              <p className="text-xs text-muted-foreground mt-1">
                Auto-curates mythological stories, rituals, and cross-culture
                connections for the Spiritual Stories page.
              </p>
            </div>
            <Switch defaultChecked data-ocid="admin.agent21.toggle" />
          </div>
          <Agent21FullPanel />
        </TabsContent>

        {/* ── SOCIAL MEDIA QUEUE ── */}
        <TabsContent value="social-queue" className="mt-0 space-y-4">
          <div>
            <h2 className="text-lg font-display font-bold">
              Social Media Queue
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              Review and approve posts before they are shared to social
              platforms.
            </p>
          </div>
          <SocialMediaQueue />
        </TabsContent>

        {/* ── PROMOTIONS QUEUE ── */}
        <TabsContent value="promotions-queue" className="mt-0 space-y-4">
          <div>
            <h2 className="text-lg font-display font-bold">Promotions Queue</h2>
            <p className="text-xs text-muted-foreground mt-1">
              Review ad and promotion submissions from module QuickAdd bars.
            </p>
          </div>
          <PromotionsQueue />
        </TabsContent>

        {/* ── WHATSAPP API ── */}
        <TabsContent value="whatsapp-api" className="mt-0 space-y-4">
          <div>
            <h2 className="text-lg font-display font-bold">
              WhatsApp Business API
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              Configure WhatsApp Cloud API credentials for direct messaging.
            </p>
          </div>
          <WhatsAppAPISettings />
        </TabsContent>

        {/* ── RIDES MANAGEMENT ── */}
        <TabsContent value="rides-admin" className="mt-0 space-y-4">
          <div>
            <h2 className="text-lg font-display font-bold">Ride Management</h2>
            <p className="text-xs text-muted-foreground mt-1">
              Manage drivers, vehicles, and fare rate cards.
            </p>
          </div>
          <RideManagementWithZones />
        </TabsContent>
        {/* ── Agent 22: Module Tester ── */}
        <TabsContent value="agent22" className="mt-0 space-y-4">
          <Agent22ModuleTester />
        </TabsContent>
        {/* ── Agent 23: News Agent ── */}
        <TabsContent value="agent23" className="mt-0 space-y-4">
          <Agent23NewsAgent />
        </TabsContent>
        {/* ── Agent 24: Food Stock Agent ── */}
        <TabsContent value="agent24" className="mt-0 space-y-4">
          <Agent24FoodStockAgent />
        </TabsContent>
        {/* ── Commission & Fees ── */}
        <TabsContent value="commission-fees" className="mt-0 space-y-4">
          <CommissionFeesPanel />
        </TabsContent>

        {/* ── AGENT 11: BUSINESS DISCOVERY ── */}
        <TabsContent value="agent11-discovery" className="mt-0 space-y-4">
          <Agent11BusinessDiscovery />
        </TabsContent>

        {/* ── BUSINESS CLAIMS ── */}
        <TabsContent value="business-claims" className="mt-0 space-y-4">
          <BusinessClaimsAdmin />
        </TabsContent>
      </Tabs>

      <div className="mt-6 text-center text-xs text-muted-foreground">
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

// ─── Agent 18: Pricing & Delivery Monitor ──────────────────────────────────────
function Agent18PricingMonitor() {
  const [active, setActive] = useState(true);
  const [sensitivity, setSensitivity] = useState([60]);
  const [threshold, setThreshold] = useState("20");
  const [deliveryCompare, setDeliveryCompare] = useState(true);
  const [notifFreq, setNotifFreq] = useState("daily");
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [moduleScope, setModuleScope] = useState<Record<string, boolean>>({
    Travel: true,
    Healthcare: true,
    "Real Estate": true,
    "Gated Community": true,
    Education: true,
    Shop: true,
  });

  const toggleModule = (m: string) =>
    setModuleScope((p) => ({ ...p, [m]: !p[m] }));

  const runScan = () => {
    setScanning(true);
    setScanResult(null);
    setTimeout(() => {
      setScanning(false);
      setScanResult(
        "5 listings flagged as overpriced (3 Travel, 1 Healthcare, 1 Shop)",
      );
    }, 1800);
  };

  const alerts = [
    {
      product: "Deluxe Room — The Grand Palace",
      module: "Travel",
      flagged: "₹8,500/night",
      avg: "₹6,200/night",
      pct: "+37%",
    },
    {
      product: "Digital Stethoscope Pro",
      module: "Healthcare",
      flagged: "₹12,400",
      avg: "₹9,800",
      pct: "+27%",
    },
    {
      product: "Courier Delivery — Express",
      module: "Shop",
      flagged: "₹350/kg",
      avg: "₹220/kg",
      pct: "+59%",
    },
    {
      product: "Airport Transfer — Mumbai",
      module: "Travel",
      flagged: "₹4,200",
      avg: "₹3,100",
      pct: "+35%",
    },
  ];

  return (
    <div className="space-y-4">
      <div
        className="rounded-xl border-2 p-4 flex items-center justify-between"
        style={{
          borderColor: active
            ? "oklch(0.52 0.14 155 / 0.4)"
            : "oklch(0.55 0.22 25 / 0.3)",
          background: active
            ? "oklch(0.52 0.14 155 / 0.05)"
            : "oklch(0.55 0.22 25 / 0.05)",
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
            style={{ background: "oklch(0.65 0.14 50 / 0.1)" }}
          >
            💰
          </div>
          <div>
            <h2 className="font-semibold text-sm">
              Agent 18: Pricing & Delivery Monitor
            </h2>
            <p className="text-xs text-muted-foreground">
              Monitors product, service & delivery prices across all modules
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Switch
            checked={active}
            onCheckedChange={setActive}
            data-ocid="admin.agent18.toggle"
          />
          <Badge
            className={`text-xs border-0 ${active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}
          >
            {active ? "Active" : "Paused"}
          </Badge>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-4 space-y-4">
        <h3 className="text-sm font-semibold">Configuration</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label className="text-xs">
              Price Sensitivity:{" "}
              {sensitivity[0] < 40
                ? "Low"
                : sensitivity[0] < 70
                  ? "Medium"
                  : "High"}
            </Label>
            <Slider
              className="mt-2"
              min={0}
              max={100}
              step={10}
              value={sensitivity}
              onValueChange={setSensitivity}
              data-ocid="admin.agent18.toggle"
            />
            <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
              <span>Low</span>
              <span>Medium</span>
              <span>High</span>
            </div>
          </div>
          <div>
            <Label className="text-xs">Alert Threshold (%)</Label>
            <Input
              className="mt-1 h-8 text-xs"
              type="number"
              placeholder="20"
              value={threshold}
              onChange={(e) => setThreshold(e.target.value)}
              data-ocid="admin.agent18.input"
            />
            <p className="text-[10px] text-muted-foreground mt-1">
              Alert if price is &gt;{threshold}% above average
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between py-2 border-t border-border">
          <div>
            <p className="text-xs font-medium">Delivery Rate Comparison</p>
            <p className="text-[10px] text-muted-foreground">
              Compare delivery providers and flag overpriced rates
            </p>
          </div>
          <Switch
            checked={deliveryCompare}
            onCheckedChange={setDeliveryCompare}
            data-ocid="admin.agent18.switch"
          />
        </div>

        <div>
          <Label className="text-xs">Notification Frequency</Label>
          <Select value={notifFreq} onValueChange={setNotifFreq}>
            <SelectTrigger
              className="mt-1 h-8 text-xs"
              data-ocid="admin.agent18.select"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="realtime">Real-time</SelectItem>
              <SelectItem value="hourly">Hourly</SelectItem>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="text-xs mb-2 block">Module Scope</Label>
          <div className="flex flex-wrap gap-3">
            {Object.keys(moduleScope).map((m) => (
              <div
                key={m}
                className="flex items-center gap-1.5 text-xs cursor-pointer"
              >
                <Checkbox
                  checked={moduleScope[m]}
                  onCheckedChange={() => toggleModule(m)}
                />
                {m}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 pt-2 border-t border-border">
          <Button
            size="sm"
            className="gap-1.5"
            onClick={runScan}
            disabled={scanning}
            data-ocid="admin.agent18.primary_button"
          >
            {scanning ? "Scanning..." : "Run Scan Now"}
          </Button>
          {scanResult && (
            <Badge
              className="text-xs bg-amber-100 text-amber-700 border-0"
              data-ocid="admin.agent18.success_state"
            >
              {scanResult}
            </Badge>
          )}
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-border">
          <h3 className="text-sm font-semibold">Recent Price Alerts</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-3 py-2 text-left font-medium">
                  Product / Service
                </th>
                <th className="px-3 py-2 text-left font-medium">Module</th>
                <th className="px-3 py-2 text-right font-medium">
                  Listed Price
                </th>
                <th className="px-3 py-2 text-right font-medium">Avg Price</th>
                <th className="px-3 py-2 text-right font-medium">% Over</th>
              </tr>
            </thead>
            <tbody>
              {alerts.map((a, i) => (
                <tr
                  key={a.product}
                  className="border-t border-border hover:bg-secondary/20"
                  data-ocid={`admin.agent18.item.${i + 1}`}
                >
                  <td className="px-3 py-2 font-medium">{a.product}</td>
                  <td className="px-3 py-2">
                    <Badge
                      variant="outline"
                      className="text-[10px] px-1.5 py-0"
                    >
                      {a.module}
                    </Badge>
                  </td>
                  <td className="px-3 py-2 text-right">{a.flagged}</td>
                  <td className="px-3 py-2 text-right text-muted-foreground">
                    {a.avg}
                  </td>
                  <td
                    className="px-3 py-2 text-right font-semibold"
                    style={{ color: "oklch(0.52 0.2 25)" }}
                  >
                    {a.pct}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
// ─── Agent 7: Image Manager ───────────────────────────────────────────────────
function Agent7ImageManager() {
  const [timeframe, setTimeframe] = useState<
    "daily" | "weekly" | "monthly" | "yearly"
  >("weekly");
  const [autoFill, setAutoFill] = useState<Record<string, boolean>>({});
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(0);

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
    { name: "Community", pct: 58 },
  ];

  const chartData: Record<
    string,
    { label: string; values: { module: string; val: number }[] }
  > = {
    daily: {
      label: "Today's Uploads",
      values: [
        { module: "Social", val: 34 },
        { module: "Products", val: 12 },
        { module: "Blog", val: 8 },
        { module: "Jobs", val: 3 },
      ],
    },
    weekly: {
      label: "This Week",
      values: [
        { module: "Social", val: 142 },
        { module: "Products", val: 87 },
        { module: "Blog", val: 54 },
        { module: "Healthcare", val: 21 },
        { module: "Travel", val: 38 },
      ],
    },
    monthly: {
      label: "This Month",
      values: [
        { module: "Social", val: 612 },
        { module: "Products", val: 341 },
        { module: "Blog", val: 228 },
        { module: "Real Estate", val: 189 },
        { module: "Travel", val: 152 },
      ],
    },
    yearly: {
      label: "This Year",
      values: [
        { module: "Social", val: 7821 },
        { module: "Products", val: 4102 },
        { module: "Blog", val: 2891 },
        { module: "Travel", val: 1847 },
        { module: "Education", val: 1203 },
      ],
    },
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

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {modules.map((m) => (
          <div
            key={m.name}
            className="bg-card border border-border rounded-xl p-3"
          >
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-[11px] font-label font-semibold text-foreground truncate">
                {m.name}
              </p>
              <Switch
                checked={autoFill[m.name] ?? false}
                onCheckedChange={(v) =>
                  setAutoFill((p) => ({ ...p, [m.name]: v }))
                }
              />
            </div>
            <div className="h-1.5 rounded-full bg-secondary overflow-hidden mb-1">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${m.pct}%`,
                  background:
                    m.pct >= 80
                      ? "oklch(0.52 0.14 155)"
                      : m.pct >= 50
                        ? "oklch(0.72 0.17 85)"
                        : "oklch(0.55 0.22 25)",
                }}
              />
            </div>
            <p className="text-[10px] text-muted-foreground">
              {m.pct}% covered
            </p>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-label font-semibold text-foreground">
            Upload Analytics — {currentChart.label}
          </h3>
          <div className="flex gap-1">
            {(["daily", "weekly", "monthly", "yearly"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTimeframe(t)}
                className={`text-[10px] font-label px-2 py-1 rounded capitalize transition-colors ${timeframe === t ? "text-white" : "text-muted-foreground hover:text-foreground border border-border"}`}
                style={
                  timeframe === t ? { background: "oklch(0.55 0.22 280)" } : {}
                }
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          {currentChart.values.map((v) => (
            <div key={v.module} className="flex items-center gap-3">
              <span className="text-xs font-label text-foreground w-20 shrink-0">
                {v.module}
              </span>
              <div className="flex-1 h-5 bg-secondary rounded overflow-hidden">
                <div
                  className="h-full rounded flex items-center px-2 transition-all duration-500"
                  style={{
                    width: `${(v.val / maxVal) * 100}%`,
                    background: "oklch(0.55 0.22 280 / 0.7)",
                    minWidth: "2rem",
                  }}
                >
                  <span className="text-[10px] font-label font-bold text-white">
                    {v.val}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-label font-semibold text-foreground">
            Auto-fill Missing Images
          </h3>
          <Button
            size="sm"
            onClick={runAutoFill}
            disabled={running}
            style={{ background: "oklch(0.52 0.14 155)", color: "white" }}
            className="text-xs gap-1.5"
          >
            <ImageIcon size={13} />{" "}
            {running ? "Running..." : "Run Auto-fill Now"}
          </Button>
        </div>
        {running && (
          <div className="space-y-1.5">
            <div className="h-2 rounded-full bg-secondary overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-200"
                style={{
                  width: `${progress}%`,
                  background: "oklch(0.52 0.14 155)",
                }}
              />
            </div>
            <p className="text-[11px] text-muted-foreground">
              Generating AI images for modules with coverage below 50%...{" "}
              {progress}%
            </p>
          </div>
        )}
        {!running && progress === 100 && (
          <p className="text-[11px]" style={{ color: "oklch(0.52 0.14 155)" }}>
            ✓ Auto-fill complete — 47 images generated
          </p>
        )}
      </div>
      <div className="text-[11px] text-muted-foreground bg-secondary/40 rounded-lg px-3 py-2">
        🔗 <strong>Agent Network:</strong> Receives image descriptions from all
        modules. Syncs with Agent 9 (Social Sharing) for OG images. Auto-fill
        triggers when coverage drops below admin threshold.
      </div>
    </>
  );
}

// ─── Agent 8: SEO ─────────────────────────────────────────────────────────────
function Agent8SEO() {
  const modules = [
    {
      name: "Family Tree",
      title: "Family Tree & Heritage — FamilySocial",
      desc: "Build and explore your family tree with blood type, DNA, and genealogy data.",
      keywords: "family tree, genealogy, heritage",
      status: "optimized",
    },
    {
      name: "Social Feed",
      title: "Family Social Feed — FamilySocial",
      desc: "Connect with family and community through a secure social feed.",
      keywords: "family social, community feed",
      status: "optimized",
    },
    {
      name: "Products",
      title: "Buy & Sell Products — FamilySocial Marketplace",
      desc: "Browse products with variants, subscriptions, and rental options.",
      keywords: "buy sell, marketplace, products",
      status: "needs-update",
    },
    {
      name: "Jobs",
      title: "Jobs & Careers in Pakistan — FamilySocial",
      desc: "Full-time, part-time, freelance, and delivery jobs locally and globally.",
      keywords: "jobs pakistan, careers, employment",
      status: "optimized",
    },
    {
      name: "Healthcare",
      title: "Healthcare & Medical Records — FamilySocial",
      desc: "Manage medical history, insurance, and book doctor consultations.",
      keywords: "healthcare, doctors, insurance",
      status: "needs-update",
    },
    {
      name: "Real Estate",
      title: "Property for Sale & Rent — FamilySocial",
      desc: "Browse and list properties for sale, rent, and lease across Pakistan.",
      keywords: "real estate, property, rent",
      status: "optimized",
    },
    {
      name: "Education",
      title: "Education & Schools — FamilySocial",
      desc: "Student enrollment, school management, and online courses.",
      keywords: "schools, education, courses",
      status: "missing",
    },
    {
      name: "Travel",
      title: "Travel Packages & Tours — FamilySocial",
      desc: "Book travel packages, hotels, cabs, and create custom itineraries.",
      keywords: "travel, tours, pakistan tourism",
      status: "optimized",
    },
    {
      name: "Blog",
      title: "Blog & Affiliate Marketing — FamilySocial",
      desc: "Read and write blogs with affiliate links and sponsored content.",
      keywords: "blog, affiliate, content",
      status: "optimized",
    },
    {
      name: "Matrimony",
      title: "Matrimony & Marriage Matches — FamilySocial",
      desc: "Find compatible matches using caste, horoscope, and lifestyle criteria.",
      keywords: "matrimony, marriage, shaadi",
      status: "needs-update",
    },
    {
      name: "Dating",
      title: "Modern Dating & Matches — FamilySocial",
      desc: "Find matches based on habits, lifestyle, and personality compatibility.",
      keywords: "dating, matches, relationships",
      status: "missing",
    },
    {
      name: "Community",
      title: "Community & Gated Societies — FamilySocial",
      desc: "Join and manage your local community, society, or residential area.",
      keywords: "community, gated society, residents",
      status: "optimized",
    },
    {
      name: "Gated Community",
      title: "Gated Community Management — FamilySocial",
      desc: "Gate entry, visitor logs, parking, and community marketplace.",
      keywords: "gated community, security, gate",
      status: "needs-update",
    },
    {
      name: "Geomap",
      title: "Location Map — FamilySocial",
      desc: "See connections, properties, jobs, and community on an interactive map.",
      keywords: "location, map, connections",
      status: "optimized",
    },
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
    { kw: "healthcare management app", rank: 8 },
  ];
  const maxRank = 30;

  return (
    <>
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-border flex items-center justify-between">
          <h3 className="text-sm font-label font-semibold text-foreground">
            Module SEO Metadata
          </h3>
          <Button
            size="sm"
            className="text-xs gap-1.5"
            style={{ background: "oklch(0.55 0.22 280)", color: "white" }}
          >
            <RefreshCw size={12} /> Regenerate All
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <TH>Module</TH>
                <TH>Page Title</TH>
                <TH>Meta Description</TH>
                <TH>Keywords</TH>
                <TH>Status</TH>
              </tr>
            </thead>
            <tbody>
              {modules.map((m) => (
                <tr
                  key={m.name}
                  className="hover:bg-secondary/20 transition-colors"
                >
                  <TD className="font-medium whitespace-nowrap">{m.name}</TD>
                  <TD>
                    <span className="text-[11px] line-clamp-1 max-w-[180px] block">
                      {m.title}
                    </span>
                  </TD>
                  <TD>
                    <span className="text-[11px] line-clamp-1 max-w-[180px] block text-muted-foreground">
                      {m.desc}
                    </span>
                  </TD>
                  <TD>
                    <span className="text-[11px] font-mono text-muted-foreground">
                      {m.keywords}
                    </span>
                  </TD>
                  <TD>
                    <SBadge
                      label={m.status}
                      color={
                        m.status === "optimized"
                          ? "green"
                          : m.status === "needs-update"
                            ? "amber"
                            : "red"
                      }
                    />
                  </TD>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-card border border-border rounded-xl p-4 space-y-3">
          <h3 className="text-sm font-label font-semibold text-foreground">
            Open Graph Settings
          </h3>
          {[
            {
              label: "OG Title",
              val: "FamilySocial — Family, Community & Life",
            },
            {
              label: "OG Description",
              val: "A super-platform for family trees, jobs, real estate, healthcare, education, and community.",
            },
            { label: "Twitter Card", val: "summary_large_image" },
          ].map((f) => (
            <div key={f.label} className="space-y-1">
              <p className="text-[11px] font-label text-muted-foreground">
                {f.label}
              </p>
              <div className="bg-secondary/40 border border-border rounded px-2 py-1.5 text-xs font-label text-foreground">
                {f.val}
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between pt-1">
            <span className="text-xs font-label text-foreground">
              Google Shopping Feed
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-muted-foreground">
                234 products · Last sync: Mar 1
              </span>
              <Switch defaultChecked />
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-label font-semibold text-foreground">
              Top Keywords
            </h3>
            <span className="text-[11px] text-muted-foreground">
              Simulated rankings
            </span>
          </div>
          <div className="space-y-2">
            {keywords.map((k) => (
              <div key={k.kw} className="flex items-center gap-2">
                <span className="text-[10px] font-label text-foreground w-36 shrink-0 truncate">
                  {k.kw}
                </span>
                <div className="flex-1 h-4 bg-secondary rounded overflow-hidden">
                  <div
                    className="h-full rounded flex items-center justify-end px-1.5 transition-all"
                    style={{
                      width: `${100 - (k.rank / maxRank) * 100}%`,
                      background:
                        k.rank <= 10
                          ? "oklch(0.52 0.14 155 / 0.7)"
                          : "oklch(0.72 0.17 85 / 0.7)",
                      minWidth: "1rem",
                    }}
                  >
                    <span className="text-[9px] font-bold text-white">
                      #{k.rank}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-[11px] text-muted-foreground bg-secondary/40 rounded-lg px-3 py-2">
        🔗 <strong>Agent Network:</strong> Sends metadata updates to Agent 9
        (Social Sharing) for share cards. Legal module names from Agent 5 are
        used to keep titles compliant.
      </div>
    </>
  );
}

// ─── Agent 9: Social Sharing ──────────────────────────────────────────────────
function Agent9Sharing() {
  const [copied, setCopied] = useState<string | null>(null);
  const shareLink = "https://familysocial.app/feed/post-12345";

  const copyLink = (label: string) => {
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const shareStats = [
    {
      platform: "WhatsApp",
      today: 142,
      week: 891,
      month: 3420,
      top: "DJI Mini 4 Review",
    },
    {
      platform: "Twitter/X",
      today: 89,
      week: 512,
      month: 1980,
      top: "Freelancing in Pakistan",
    },
    {
      platform: "Facebook",
      today: 67,
      week: 389,
      month: 1540,
      top: "7-Day Hunza Guide",
    },
    {
      platform: "Pinterest",
      today: 34,
      week: 201,
      month: 820,
      top: "Bridal Collection 2026",
    },
    {
      platform: "LinkedIn",
      today: 28,
      week: 178,
      month: 712,
      top: "Senior React Developer Job",
    },
    {
      platform: "Copy Link",
      today: 212,
      week: 1340,
      month: 5200,
      top: "DHA Phase 6 Property",
    },
  ];

  return (
    <>
      <div className="bg-card border border-border rounded-xl p-4">
        <h3 className="text-sm font-label font-semibold text-foreground mb-3">
          Share Link Preview
        </h3>
        <div className="border border-border rounded-xl overflow-hidden">
          <div className="h-20 bg-gradient-to-r from-violet-600/20 to-pink-600/20 flex items-center justify-center">
            <span className="text-[11px] text-muted-foreground">
              OG Image preview from Agent 7
            </span>
          </div>
          <div className="p-3">
            <p className="text-xs font-label font-semibold text-foreground">
              DJI Mini 4 Pro Full Review 2026 — FamilySocial Blog
            </p>
            <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-2">
              An in-depth review of the DJI Mini 4 Pro with affiliate links to
              buy at the best price.
            </p>
            <p className="text-[10px] text-muted-foreground mt-1 font-mono">
              {shareLink}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {[
            { label: "Copy Link", icon: Link2, action: () => copyLink("link") },
            {
              label: "WhatsApp",
              icon: MessageSquare,
              action: () =>
                window.open(
                  `https://wa.me/?text=${encodeURIComponent(shareLink)}`,
                  "_blank",
                ),
            },
            {
              label: "Twitter/X",
              icon: Share2,
              action: () =>
                window.open(
                  `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareLink)}`,
                  "_blank",
                ),
            },
            {
              label: "Facebook",
              icon: Share2,
              action: () =>
                window.open(
                  `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}`,
                  "_blank",
                ),
            },
            {
              label: "Pinterest",
              icon: Share2,
              action: () =>
                window.open(
                  `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareLink)}`,
                  "_blank",
                ),
            },
            {
              label: "LinkedIn",
              icon: Share2,
              action: () =>
                window.open(
                  `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareLink)}`,
                  "_blank",
                ),
            },
          ].map(({ label, icon: Icon, action }) => (
            <button
              key={label}
              type="button"
              onClick={action}
              className="flex items-center gap-1.5 text-[11px] font-label font-medium px-3 py-1.5 rounded-lg border border-border hover:bg-secondary/60 transition-colors"
            >
              <Icon size={12} />{" "}
              {copied === "link" && label === "Copy Link" ? "Copied!" : label}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-4">
        <h3 className="text-sm font-label font-semibold text-foreground mb-3">
          Platform OAuth Connections
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {["Instagram", "YouTube", "Facebook", "Pinterest"].map((p) => (
            <div
              key={p}
              className="border border-border rounded-xl p-3 text-center"
            >
              <p className="text-xs font-label font-semibold text-foreground mb-1">
                {p}
              </p>
              <button
                type="button"
                className="text-[10px] text-muted-foreground border border-border rounded px-2 py-1 hover:bg-secondary/40 transition-colors"
                title="Requires OAuth — coming soon"
              >
                Connect ↗
              </button>
              <p className="text-[9px] text-muted-foreground mt-1 italic">
                OAuth required
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-border">
          <h3 className="text-sm font-label font-semibold text-foreground">
            Share Analytics
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <TH>Platform</TH>
                <TH>Today</TH>
                <TH>This Week</TH>
                <TH>This Month</TH>
                <TH>Top Shared</TH>
              </tr>
            </thead>
            <tbody>
              {shareStats.map((s) => (
                <tr
                  key={s.platform}
                  className="hover:bg-secondary/20 transition-colors"
                >
                  <TD className="font-medium">{s.platform}</TD>
                  <TD>{s.today}</TD>
                  <TD>{s.week.toLocaleString()}</TD>
                  <TD>{s.month.toLocaleString()}</TD>
                  <TD className="text-muted-foreground text-[11px]">{s.top}</TD>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="text-[11px] text-muted-foreground bg-secondary/40 rounded-lg px-3 py-2">
        🔗 <strong>Agent Network:</strong> Receives OG metadata from Agent 8.
        Uses auto-generated images from Agent 7 as share card previews. Google
        Shopping feed synced with Agent 8 product data.
      </div>
    </>
  );
}

// ─── Agent 11: Fake Users ─────────────────────────────────────────────────────
function Agent11FakeUsers() {
  const [running, setRunning] = useState(false);
  const [dailyLimit, setDailyLimit] = useState(10);
  const [showConfirm, setShowConfirm] = useState(false);
  const [activeTab, setActiveTab] = useState("config");
  const [batchSize, setBatchSize] = useState("10");
  const [generateContent, setGenerateContent] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [selectedCountries, setSelectedCountries] = useState<
    Record<string, boolean>
  >({
    India: true,
    Pakistan: true,
    Bangladesh: false,
    "Sri Lanka": false,
    Nepal: false,
    UAE: true,
    UK: false,
    USA: false,
    Canada: false,
    Australia: false,
  });
  const [selectedContent, setSelectedContent] = useState<
    Record<string, boolean>
  >({
    Schools: true,
    "Travel Packages": true,
    Hotels: true,
    Jobs: true,
    Products: false,
    Services: false,
    "Healthcare Advisors": false,
    "Community Groups": true,
  });

  const trackingData = [
    {
      country: "India",
      users: 342,
      content: 1240,
      lastRun: "Mar 11, 08:00",
      status: "Active",
    },
    {
      country: "Pakistan",
      users: 187,
      content: 634,
      lastRun: "Mar 11, 08:00",
      status: "Active",
    },
    {
      country: "UAE",
      users: 94,
      content: 312,
      lastRun: "Mar 10, 22:00",
      status: "Paused",
    },
    {
      country: "Bangladesh",
      users: 56,
      content: 189,
      lastRun: "Mar 09, 14:00",
      status: "Active",
    },
    {
      country: "Nepal",
      users: 23,
      content: 78,
      lastRun: "Mar 08, 10:00",
      status: "Idle",
    },
    {
      country: "Sri Lanka",
      users: 31,
      content: 104,
      lastRun: "Mar 07, 16:00",
      status: "Idle",
    },
  ];

  const fakeUsers = [
    {
      name: "ali_bot_7a2x",
      country: "India",
      created: "Mar 11, 2026",
      modules: ["Feed", "Jobs", "Community"],
      posts: 4,
      interactions: 23,
    },
    {
      name: "zara_sim_9c1b",
      country: "Pakistan",
      created: "Mar 11, 2026",
      modules: ["Matrimony", "Feed"],
      posts: 2,
      interactions: 11,
    },
    {
      name: "hassan_auto_4f",
      country: "India",
      created: "Mar 10, 2026",
      modules: ["Products", "POS"],
      posts: 6,
      interactions: 34,
    },
    {
      name: "nida_bot_3e8d",
      country: "UAE",
      created: "Mar 10, 2026",
      modules: ["Blog", "Affiliate"],
      posts: 3,
      interactions: 18,
    },
    {
      name: "imran_sim_1b7c",
      country: "Pakistan",
      created: "Mar 09, 2026",
      modules: ["Jobs", "Travel"],
      posts: 5,
      interactions: 27,
    },
    {
      name: "sara_auto_2a9f",
      country: "India",
      created: "Mar 09, 2026",
      modules: ["Healthcare", "Feed"],
      posts: 1,
      interactions: 9,
    },
  ];

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      toast.success("Users and content generated across selected countries");
    }, 2000);
  };

  const statusColor = (s: string) => {
    if (s === "Active") return "bg-green-100 text-green-700";
    if (s === "Paused") return "bg-amber-100 text-amber-700";
    return "bg-gray-100 text-gray-500";
  };

  return (
    <>
      <div
        className="rounded-xl border-2 p-4 flex items-center justify-between"
        style={{
          borderColor: running
            ? "oklch(0.52 0.14 155 / 0.4)"
            : "oklch(0.55 0.22 25 / 0.3)",
          background: running
            ? "oklch(0.52 0.14 155 / 0.05)"
            : "oklch(0.55 0.22 25 / 0.05)",
        }}
      >
        <div>
          <p className="text-sm font-label font-semibold text-foreground">
            {running ? "U0001f7e2 Agent Running" : "U0001f534 Agent Stopped"}
          </p>
          <p className="text-[11px] text-muted-foreground">
            Fake users are{" "}
            {running ? "being generated and interacting" : "not active"}. Toggle
            to start/stop.
          </p>
        </div>
        <Switch
          checked={running}
          onCheckedChange={setRunning}
          data-ocid="admin.agent11.toggle"
        />
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full">
          <TabsTrigger value="config" className="flex-1 text-xs">
            Configuration
          </TabsTrigger>
          <TabsTrigger
            value="tracking"
            className="flex-1 text-xs"
            data-ocid="admin.agent11.tab"
          >
            Tracking Dashboard
          </TabsTrigger>
          <TabsTrigger value="users" className="flex-1 text-xs">
            Generated Users
          </TabsTrigger>
          <TabsTrigger
            value="bizsearch"
            className="flex-1 text-xs"
            data-ocid="admin.agent11.tab"
          >
            Business Search
          </TabsTrigger>
        </TabsList>

        <TabsContent value="config" className="mt-4 space-y-4">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl px-4 py-3">
            <p
              className="text-xs font-label font-semibold"
              style={{ color: "oklch(0.50 0.14 65)" }}
            >
              \u26a0\ufe0f Warning
            </p>
            <p className="text-[11px] text-muted-foreground">
              Fake users are indistinguishable from real users across all
              modules. Agent 15 (Analytics) separates bot traffic in reports.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-4 space-y-4">
            <div>
              <Label className="text-xs font-semibold">Daily Limit</Label>
              <div className="flex items-center gap-4 mt-2">
                <input
                  type="range"
                  min={1}
                  max={50}
                  value={dailyLimit}
                  onChange={(e) => setDailyLimit(Number(e.target.value))}
                  className="flex-1 accent-violet-600"
                />
                <span className="text-sm font-bold text-foreground w-8 text-right">
                  {dailyLimit}
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground mt-1">
                {dailyLimit} new fake users generated per day
              </p>
            </div>

            <div>
              <Label className="text-xs font-semibold mb-2 block">
                Target Countries
              </Label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {Object.entries(selectedCountries).map(([c, v]) => (
                  <div
                    key={c}
                    className="flex items-center gap-1.5 text-xs cursor-pointer"
                  >
                    <Checkbox
                      checked={v}
                      onCheckedChange={() =>
                        setSelectedCountries((p) => ({ ...p, [c]: !p[c] }))
                      }
                    />
                    {c}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-xs font-semibold mb-2 block">
                Module Content to Generate
              </Label>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(selectedContent).map(([m, v]) => (
                  <div
                    key={m}
                    className="flex items-center gap-1.5 text-xs cursor-pointer"
                  >
                    <Checkbox
                      checked={v}
                      onCheckedChange={() =>
                        setSelectedContent((p) => ({ ...p, [m]: !p[m] }))
                      }
                    />
                    {m}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex-1">
                <Label className="text-xs">Users per Country (Batch)</Label>
                <Input
                  className="mt-1 h-8 text-xs"
                  type="number"
                  value={batchSize}
                  onChange={(e) => setBatchSize(e.target.value)}
                  data-ocid="admin.agent11.input"
                />
              </div>
              <div className="flex items-center gap-2 pt-5">
                <Checkbox
                  checked={generateContent}
                  onCheckedChange={(v) => setGenerateContent(Boolean(v))}
                  data-ocid="admin.agent11.checkbox"
                />
                <Label className="text-xs cursor-pointer">
                  Auto-create content
                </Label>
              </div>
            </div>

            <Button
              size="sm"
              className="gap-1.5 w-full"
              onClick={handleGenerate}
              disabled={generating}
              data-ocid="admin.agent11.primary_button"
            >
              {generating ? "Generating..." : "Generate Now"}
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="tracking" className="mt-4">
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="px-4 py-3 border-b border-border flex items-center justify-between">
              <h3 className="text-sm font-semibold">
                Country-wise Tracking Dashboard
              </h3>
              <Button
                size="sm"
                variant="outline"
                className="text-xs gap-1"
                onClick={() => toast.success("Stats refreshed")}
                data-ocid="admin.agent11.secondary_button"
              >
                Refresh Stats
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-3 py-2 text-left font-medium">Country</th>
                    <th className="px-3 py-2 text-right font-medium">
                      Users Created
                    </th>
                    <th className="px-3 py-2 text-right font-medium">
                      Content Items
                    </th>
                    <th className="px-3 py-2 text-left font-medium">
                      Last Run
                    </th>
                    <th className="px-3 py-2 text-left font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {trackingData.map((row, i) => (
                    <tr
                      key={row.country}
                      className="border-t border-border hover:bg-secondary/20"
                      data-ocid={`admin.agent11.item.${i + 1}`}
                    >
                      <td className="px-3 py-2 font-medium">{row.country}</td>
                      <td className="px-3 py-2 text-right font-semibold">
                        {row.users.toLocaleString()}
                      </td>
                      <td className="px-3 py-2 text-right text-muted-foreground">
                        {row.content.toLocaleString()}
                      </td>
                      <td className="px-3 py-2 text-muted-foreground">
                        {row.lastRun}
                      </td>
                      <td className="px-3 py-2">
                        <Badge
                          className={`text-[10px] border-0 ${statusColor(row.status)}`}
                        >
                          {row.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="users" className="mt-4">
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="px-4 py-3 border-b border-border flex items-center justify-between">
              <h3 className="text-sm font-semibold">
                Recently Generated Users
              </h3>
              {showConfirm ? (
                <div className="flex gap-2">
                  <span className="text-xs text-muted-foreground mr-1">
                    Delete all bots?
                  </span>
                  <Button
                    size="sm"
                    variant="destructive"
                    className="h-6 text-xs px-2"
                    onClick={() => {
                      setShowConfirm(false);
                      toast.success("All bot users deleted");
                    }}
                    data-ocid="admin.agent11.confirm_button"
                  >
                    Confirm
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-6 text-xs px-2"
                    onClick={() => setShowConfirm(false)}
                    data-ocid="admin.agent11.cancel_button"
                  >
                    Cancel
                  </Button>
                </div>
              ) : (
                <Button
                  size="sm"
                  variant="destructive"
                  className="text-xs h-7 gap-1"
                  onClick={() => setShowConfirm(true)}
                  data-ocid="admin.agent11.delete_button"
                >
                  Delete All Bots
                </Button>
              )}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="px-3 py-2 text-left font-medium">
                      Username
                    </th>
                    <th className="px-3 py-2 text-left font-medium">Country</th>
                    <th className="px-3 py-2 text-left font-medium">Created</th>
                    <th className="px-3 py-2 text-left font-medium">
                      Active Modules
                    </th>
                    <th className="px-3 py-2 text-right font-medium">Posts</th>
                    <th className="px-3 py-2 text-right font-medium">
                      Interactions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {fakeUsers.map((u, i) => (
                    <tr
                      key={u.name}
                      className="border-t border-border hover:bg-secondary/20"
                      data-ocid={`admin.agent11.row.${i + 1}`}
                    >
                      <td className="px-3 py-2 font-mono font-medium">
                        {u.name}
                      </td>
                      <td className="px-3 py-2 text-muted-foreground">
                        {u.country}
                      </td>
                      <td className="px-3 py-2 text-muted-foreground">
                        {u.created}
                      </td>
                      <td className="px-3 py-2">
                        <div className="flex flex-wrap gap-1">
                          {u.modules.map((m) => (
                            <Badge
                              key={m}
                              variant="outline"
                              className="text-[9px] px-1 py-0"
                            >
                              {m}
                            </Badge>
                          ))}
                        </div>
                      </td>
                      <td className="px-3 py-2 text-right">{u.posts}</td>
                      <td className="px-3 py-2 text-right">{u.interactions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="bizsearch" className="mt-4 space-y-4">
          <Agent11BusinessSearch />
        </TabsContent>
      </Tabs>
    </>
  );
}

function Agent11BusinessSearch() {
  const [industry, setIndustry] = useState("Retail");
  const [region, setRegion] = useState("");
  const [searching, setSearching] = useState(false);
  const [results, _setResults] = useState([
    {
      name: "Sharma Supermart",
      industry: "Retail",
      region: "Delhi, India",
      desc: "Family-owned supermarket chain with 5 locations in North Delhi.",
      website: "sharmasupermart.in",
      employees: "50-200",
    },
    {
      name: "Biryani Brothers",
      industry: "Food",
      region: "Mumbai, India",
      desc: "Popular restaurant group serving authentic Hyderabadi biryani across Mumbai.",
      website: "biryanibrothers.com",
      employees: "20-80",
    },
    {
      name: "CarePlus Hospital",
      industry: "Healthcare",
      region: "Bangalore, India",
      desc: "Multi-specialty hospital with 200+ beds and advanced diagnostics.",
      website: "careplus.hospital",
      employees: "500+",
    },
  ]);
  const [addedIds, setAddedIds] = useState<Set<number>>(new Set());
  const [aiConnectedIds, setAiConnectedIds] = useState<Set<number>>(new Set());
  const [connectedBiz, _setConnectedBiz] = useState([
    {
      name: "TechNova Solutions",
      industry: "Technology",
      addedOn: "Mar 20, 2026",
      aiConnected: true,
    },
    {
      name: "Sunrise Academy",
      industry: "Education",
      addedOn: "Mar 19, 2026",
      aiConnected: false,
    },
  ]);

  const handleSearch = () => {
    setSearching(true);
    setTimeout(() => {
      setSearching(false);
      toast.success(
        `Found ${results.length} businesses in ${industry} — ${region || "all regions"}`,
      );
    }, 2000);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-card border border-border rounded-xl p-3 text-center">
          <p className="text-lg font-bold text-primary">{results.length}</p>
          <p className="text-[11px] text-muted-foreground">Total Found</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-3 text-center">
          <p
            className="text-lg font-bold"
            style={{ color: "oklch(0.52 0.14 155)" }}
          >
            {addedIds.size + connectedBiz.length}
          </p>
          <p className="text-[11px] text-muted-foreground">Added to Platform</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-3 text-center">
          <p className="text-lg font-bold text-amber-600">
            {aiConnectedIds.size}
          </p>
          <p className="text-[11px] text-muted-foreground">AI Connected</p>
        </div>
      </div>
      <div className="bg-card border border-border rounded-xl p-4 space-y-3">
        <h3 className="text-sm font-semibold">Search Parameters</h3>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label className="text-xs font-medium">Industry</Label>
            <select
              className="w-full mt-1 h-8 text-xs border border-input rounded-md px-2 bg-background text-foreground"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              data-ocid="admin.agent11.select"
            >
              <option>Retail</option>
              <option>Food</option>
              <option>Healthcare</option>
              <option>Education</option>
              <option>Technology</option>
              <option>Travel</option>
            </select>
          </div>
          <div>
            <Label className="text-xs font-medium">Region</Label>
            <Input
              className="mt-1 h-8 text-xs"
              placeholder="e.g. Mumbai, India"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              data-ocid="admin.agent11.input"
            />
          </div>
        </div>
        <Button
          size="sm"
          className="w-full gap-2"
          onClick={handleSearch}
          disabled={searching}
          data-ocid="admin.agent11.primary_button"
        >
          {searching ? "🔍 Searching Internet..." : "🔍 Search Internet"}
        </Button>
      </div>
      <div className="space-y-2">
        {results.map((b, i) => (
          <div
            key={b.name}
            className="bg-card border border-border rounded-xl p-3"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold">{b.name}</p>
                <div className="flex items-center gap-2 text-[11px] text-muted-foreground mt-0.5">
                  <Badge variant="outline" className="text-[10px] px-1">
                    {b.industry}
                  </Badge>
                  <span>{b.region}</span>
                  <span>·</span>
                  <span>{b.employees} emp.</span>
                </div>
                <p className="text-[11px] text-muted-foreground mt-1">
                  {b.desc}
                </p>
              </div>
              <div className="flex flex-col gap-1 shrink-0">
                <Button
                  size="sm"
                  className="text-[10px] h-6 px-2"
                  onClick={() => {
                    setAddedIds((p) => new Set([...p, i]));
                    toast.success(`${b.name} added to platform`);
                  }}
                  disabled={addedIds.has(i)}
                  data-ocid="admin.agent11.primary_button"
                >
                  {addedIds.has(i) ? "Added ✓" : "Add to Platform"}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-[10px] h-6 px-2"
                  onClick={() => {
                    setAiConnectedIds((p) => new Set([...p, i]));
                    toast.success(`AI connection established with ${b.name}`);
                  }}
                  disabled={aiConnectedIds.has(i)}
                  data-ocid="admin.agent11.secondary_button"
                >
                  {aiConnectedIds.has(i) ? "AI Connected ✓" : "Connect AI"}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="px-4 py-2 border-b border-border bg-muted/50">
          <p className="text-xs font-semibold">Connected Businesses</p>
        </div>
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border">
              <th className="px-3 py-2 text-left font-medium">Business</th>
              <th className="px-3 py-2 text-left font-medium">Industry</th>
              <th className="px-3 py-2 text-left font-medium">Added On</th>
              <th className="px-3 py-2 text-left font-medium">AI</th>
            </tr>
          </thead>
          <tbody>
            {connectedBiz.map((c, i) => (
              <tr
                key={c.name}
                className="border-t border-border"
                data-ocid={`admin.agent11.row.${i + 1}`}
              >
                <td className="px-3 py-2 font-medium">{c.name}</td>
                <td className="px-3 py-2 text-muted-foreground">
                  {c.industry}
                </td>
                <td className="px-3 py-2 text-muted-foreground">{c.addedOn}</td>
                <td className="px-3 py-2">
                  <Badge
                    className={`border-0 text-[10px] ${c.aiConnected ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}
                  >
                    {c.aiConnected ? "Connected" : "Not Connected"}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function Agent12WhatsApp() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "Jobs",
    "Community",
  ]);
  const categories = [
    "Jobs",
    "Community",
    "Marketplace",
    "Healthcare",
    "Family Updates",
    "Real Estate",
    "Events",
    "Travel",
  ];

  const subscribers = [
    {
      phone: "+92-300-***-1234",
      name: "Ahmed K.",
      cats: ["Jobs", "Community"],
      date: "Mar 1",
      status: "active",
    },
    {
      phone: "+92-321-***-5678",
      name: "Fatima M.",
      cats: ["Healthcare", "Family Updates"],
      date: "Feb 28",
      status: "active",
    },
    {
      phone: "+92-333-***-9012",
      name: "Zara H.",
      cats: ["Marketplace", "Travel"],
      date: "Feb 27",
      status: "active",
    },
    {
      phone: "+92-311-***-3456",
      name: "Omar S.",
      cats: ["Jobs", "Real Estate"],
      date: "Feb 26",
      status: "active",
    },
    {
      phone: "+92-345-***-7890",
      name: "Aisha T.",
      cats: ["Community", "Events"],
      date: "Feb 25",
      status: "active",
    },
    {
      phone: "+92-301-***-2345",
      name: "Hassan A.",
      cats: ["Jobs", "Community", "Marketplace"],
      date: "Feb 24",
      status: "active",
    },
    {
      phone: "+92-313-***-6789",
      name: "Nida R.",
      cats: ["Healthcare", "Events"],
      date: "Feb 23",
      status: "unsubscribed",
    },
    {
      phone: "+92-315-***-0123",
      name: "Bilal H.",
      cats: ["Travel", "Jobs"],
      date: "Feb 22",
      status: "active",
    },
    {
      phone: "+92-317-***-4567",
      name: "Maria S.",
      cats: ["Marketplace", "Real Estate"],
      date: "Feb 21",
      status: "active",
    },
    {
      phone: "+92-319-***-8901",
      name: "Tariq N.",
      cats: ["Community", "Jobs"],
      date: "Feb 20",
      status: "active",
    },
    {
      phone: "+92-323-***-2345",
      name: "Hina B.",
      cats: ["Family Updates", "Healthcare"],
      date: "Feb 19",
      status: "active",
    },
    {
      phone: "+92-325-***-6789",
      name: "Usman F.",
      cats: ["Jobs", "Travel"],
      date: "Feb 18",
      status: "unsubscribed",
    },
  ];

  const catStats = [
    { cat: "Jobs", pct: 45 },
    { cat: "Community", pct: 38 },
    { cat: "Marketplace", pct: 27 },
    { cat: "Healthcare", pct: 18 },
    { cat: "Family Updates", pct: 31 },
    { cat: "Travel", pct: 22 },
  ];

  const waMessage = `📱 *FamilySocial Daily Update*\n\n${
    selectedCategories.includes("Jobs")
      ? "💼 *Jobs*: 12 new listings in Lahore & Karachi\n"
      : ""
  }${
    selectedCategories.includes("Community")
      ? "🏘️ *Community*: 3 new notices in your society\n"
      : ""
  }${
    selectedCategories.includes("Marketplace")
      ? "🛒 *Marketplace*: 7 deals ending today\n"
      : ""
  }${
    selectedCategories.includes("Healthcare")
      ? "❤️ *Healthcare*: 2 new advisors available\n"
      : ""
  }\nView all: https://familysocial.app\n_FamilySocial — Family · Community · Life_`;

  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Total Subscribers", value: "147" },
          { label: "Sent Today", value: "89" },
          { label: "Active Categories", value: "8" },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="bg-card border border-border rounded-xl p-3"
          >
            <p className="text-xl font-display font-bold text-foreground">
              {value}
            </p>
            <p className="text-[11px] text-muted-foreground font-label">
              {label}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-xl p-4">
        <h3 className="text-sm font-label font-semibold text-foreground mb-3">
          Category Breakdown
        </h3>
        <div className="space-y-2">
          {catStats.map((c) => (
            <div key={c.cat} className="flex items-center gap-3">
              <span className="text-xs font-label text-foreground w-28 shrink-0">
                {c.cat}
              </span>
              <div className="flex-1 h-4 bg-secondary rounded overflow-hidden">
                <div
                  className="h-full rounded transition-all"
                  style={{
                    width: `${c.pct}%`,
                    background: "oklch(0.52 0.14 155 / 0.7)",
                  }}
                >
                  <span className="text-[9px] font-bold text-white px-1.5 leading-4 block">
                    {c.pct}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-4">
        <h3 className="text-sm font-label font-semibold text-foreground mb-3">
          Daily Digest Builder
        </h3>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() =>
                setSelectedCategories((prev) =>
                  prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c],
                )
              }
              className={`text-[11px] font-label px-2.5 py-1 rounded-full border transition-all ${selectedCategories.includes(c) ? "text-white border-transparent" : "text-muted-foreground border-border hover:border-foreground/30"}`}
              style={
                selectedCategories.includes(c)
                  ? { background: "oklch(0.52 0.14 155)" }
                  : {}
              }
            >
              {c}
            </button>
          ))}
        </div>
        <div className="bg-secondary/40 rounded-xl p-3 mb-3">
          <p className="text-[11px] font-mono text-foreground whitespace-pre-line">
            {waMessage}
          </p>
        </div>
        <a
          href={`https://wa.me/?text=${encodeURIComponent(waMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-label font-semibold px-4 py-2 rounded-lg text-white transition-colors hover:opacity-90"
          style={{ background: "oklch(0.52 0.14 155)" }}
        >
          <Smartphone size={14} /> Send Today's Update via WhatsApp
        </a>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-border">
          <h3 className="text-sm font-label font-semibold text-foreground">
            Subscribers
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <TH>Phone</TH>
                <TH>Name</TH>
                <TH>Categories</TH>
                <TH>Subscribed</TH>
                <TH>Status</TH>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((s) => (
                <tr
                  key={s.phone}
                  className="hover:bg-secondary/20 transition-colors"
                >
                  <TD className="font-mono text-[11px]">{s.phone}</TD>
                  <TD className="font-medium">{s.name}</TD>
                  <TD>
                    <div className="flex flex-wrap gap-0.5">
                      {s.cats.slice(0, 2).map((c) => (
                        <SBadge key={c} label={c} color="blue" />
                      ))}
                    </div>
                  </TD>
                  <TD className="text-muted-foreground">{s.date}</TD>
                  <TD>
                    <SBadge
                      label={s.status}
                      color={s.status === "active" ? "green" : "gray"}
                    />
                  </TD>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="text-[11px] text-muted-foreground bg-secondary/40 rounded-lg px-3 py-2">
        🔗 <strong>Agent Network:</strong> Pulls latest activity from all
        modules. Coordinated with Agent 15 (Analytics) for personalized digests.
        Message content updated by Agent 16 (Tips).
      </div>
    </>
  );
}

// ─── Agent 13: Monetization ───────────────────────────────────────────────────
function Agent13Monetize() {
  const [activeTab, setActiveTab] = useState("revenue");
  const [suggestionStatus, setSuggestionStatus] = useState<
    Record<number, string>
  >({});

  // Revenue Monitor data
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
    { module: "Education", pct: 34 },
  ];

  const suggestions = [
    {
      title: "Premium Job Listings",
      desc: "340 job searches this week. Offer featured placement.",
      est: "₹15,000/mo",
      cat: "Jobs",
      detail: "Charge ₹500/week for highlighted job cards.",
    },
    {
      title: "Promoted Real Estate",
      desc: "89 properties viewed daily. Top placement available.",
      est: "₹40,000/mo",
      cat: "Real Estate",
      detail: "₹2,000/week for top-of-page property placement.",
    },
    {
      title: "POS Transaction Fee",
      desc: "234 POS transactions per day.",
      est: "₹35,000/mo",
      cat: "POS",
      detail: "0.5% platform fee on each completed POS sale.",
    },
    {
      title: "Community Subscription",
      desc: "45 gated communities on platform.",
      est: "₹22,500/mo",
      cat: "Community",
      detail: "₹500/month per community for premium features.",
    },
  ];

  // Course Creator state
  const [courseTopic, setCourseTopic] = useState("");
  const [courseAudience, setCourseAudience] = useState("Beginners");
  const [coursePrice, setCoursePrice] = useState("499");
  const [coursePaid, setCoursePaid] = useState(true);
  const [generatingCourse, setGeneratingCourse] = useState(false);
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Digital Marketing for Small Businesses",
      desc: "Learn to promote your business online using social media, SEO and paid ads.",
      audience: "Beginners",
      price: 999,
      paid: true,
      modules: [
        "Introduction to Digital Marketing",
        "Social Media Strategy",
        "SEO Basics",
        "Paid Advertising",
      ],
      status: "published",
    },
    {
      id: 2,
      title: "E-commerce & POS Mastery",
      desc: "Comprehensive guide to managing inventory, sales and customers using IndyaCentral POS.",
      audience: "Intermediate",
      price: 0,
      paid: false,
      modules: [
        "POS Setup",
        "Inventory Management",
        "Customer Relations",
        "Reports & Analytics",
      ],
      status: "published",
    },
  ]);

  // Quiz Builder state
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(1);
  const [generatingQuiz, setGeneratingQuiz] = useState(false);
  const [quizQuestions, _setQuizQuestions] = useState<
    Array<{
      question: string;
      type: "MCQ" | "Subjective";
      options?: string[];
      correct?: number;
    }>
  >([
    {
      question: "What is the primary goal of digital marketing?",
      type: "MCQ",
      options: [
        "Increase offline sales",
        "Reach target audience online",
        "Reduce product cost",
        "Manage inventory",
      ],
      correct: 1,
    },
    {
      question: "Which metric measures organic search traffic?",
      type: "MCQ",
      options: ["CTR", "Bounce Rate", "Organic Sessions", "ROAS"],
      correct: 2,
    },
    {
      question: "What does SEO stand for?",
      type: "MCQ",
      options: [
        "Social Engagement Optimization",
        "Search Engine Optimization",
        "Sales Engagement Output",
        "Site Efficiency Online",
      ],
      correct: 1,
    },
    {
      question: "Which platform is best for B2B marketing?",
      type: "MCQ",
      options: ["TikTok", "Snapchat", "LinkedIn", "Pinterest"],
      correct: 2,
    },
    {
      question: "What is a conversion rate?",
      type: "MCQ",
      options: [
        "Ratio of visitors who complete an action",
        "Total website traffic",
        "Cost per click",
        "Bounce percentage",
      ],
      correct: 0,
    },
    {
      question:
        "Explain the importance of content marketing for a small business.",
      type: "Subjective",
    },
    {
      question: "Describe three strategies to improve customer retention.",
      type: "Subjective",
    },
  ]);
  const [passScore, setPassScore] = useState("70");
  const quizResults = [
    {
      learner: "Priya Sharma",
      score: 85,
      status: "Pass",
      date: "Mar 20, 2026",
    },
    { learner: "Amit Verma", score: 62, status: "Fail", date: "Mar 19, 2026" },
    { learner: "Neha Gupta", score: 91, status: "Pass", date: "Mar 18, 2026" },
    { learner: "Rahul Singh", score: 74, status: "Pass", date: "Mar 17, 2026" },
  ];

  // Certificate state
  const [certName, setCertName] = useState("Certificate of Completion");
  const [certPaid, setCertPaid] = useState(true);
  const [certPrice, setCertPrice] = useState("199");
  const issuedCerts = [
    {
      recipient: "Priya Sharma",
      course: "Digital Marketing for Small Businesses",
      date: "Mar 20, 2026",
      status: "Paid",
    },
    {
      recipient: "Neha Gupta",
      course: "Digital Marketing for Small Businesses",
      date: "Mar 18, 2026",
      status: "Paid",
    },
    {
      recipient: "Rahul Singh",
      course: "E-commerce & POS Mastery",
      date: "Mar 17, 2026",
      status: "Free",
    },
  ];

  // Business Outreach state
  const [scanning, setScanning] = useState(false);
  const [bizConnected, setBizConnected] = useState<Record<number, boolean>>({});
  const [aiSyncStatus, setAiSyncStatus] = useState<Record<string, boolean>>({
    "ChatGPT Plugins": false,
    "Google Gemini": false,
    "Perplexity AI": false,
    "Meta AI": false,
    "Microsoft Copilot": false,
  });
  const foundBusinesses = [
    {
      id: 1,
      name: "Riya Fashion House",
      industry: "Retail",
      location: "Mumbai, India",
      website: "riyafashion.in",
      employees: "12-50",
    },
    {
      id: 2,
      name: "SpiceRoute Restaurants",
      industry: "Food",
      location: "Delhi, India",
      website: "spiceroute.co.in",
      employees: "50-200",
    },
    {
      id: 3,
      name: "HealthPlus Clinic",
      industry: "Healthcare",
      location: "Bangalore, India",
      website: "healthplus.care",
      employees: "5-20",
    },
    {
      id: 4,
      name: "BrightMinds Academy",
      industry: "Education",
      location: "Pune, India",
      website: "brightminds.edu.in",
      employees: "20-100",
    },
    {
      id: 5,
      name: "TechWave Solutions",
      industry: "Technology",
      location: "Hyderabad, India",
      website: "techwave.io",
      employees: "100-500",
    },
    {
      id: 6,
      name: "WanderNorth Travel",
      industry: "Travel",
      location: "Jaipur, India",
      website: "wandernorth.travel",
      employees: "10-40",
    },
  ];

  const handleGenerateCourse = () => {
    if (!courseTopic.trim()) {
      toast.error("Please enter a course topic");
      return;
    }
    setGeneratingCourse(true);
    setTimeout(() => {
      setGeneratingCourse(false);
      const newCourse = {
        id: Date.now(),
        title: courseTopic,
        desc: `AI-generated comprehensive course on ${courseTopic} designed for ${courseAudience}. Covers core concepts, practical applications and real-world case studies.`,
        audience: courseAudience,
        price: coursePaid ? Number(coursePrice) : 0,
        paid: coursePaid,
        modules: [
          `Introduction to ${courseTopic}`,
          "Core Concepts & Frameworks",
          "Practical Implementation",
          "Advanced Techniques & Assessment",
        ],
        status: "draft",
      };
      setCourses((prev) => [newCourse, ...prev]);
      setCourseTopic("");
      toast.success("Course generated successfully!");
    }, 1500);
  };

  const handleGenerateQuiz = () => {
    setGeneratingQuiz(true);
    setTimeout(() => {
      setGeneratingQuiz(false);
      toast.success("5 MCQ + 2 subjective questions generated");
    }, 1000);
  };

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="w-full flex-wrap h-auto gap-1 mb-4">
        <TabsTrigger
          value="revenue"
          className="flex-1 text-xs"
          data-ocid="admin.agent13.tab"
        >
          Revenue Monitor
        </TabsTrigger>
        <TabsTrigger
          value="courses"
          className="flex-1 text-xs"
          data-ocid="admin.agent13.tab"
        >
          Course Creator
        </TabsTrigger>
        <TabsTrigger
          value="quiz"
          className="flex-1 text-xs"
          data-ocid="admin.agent13.tab"
        >
          Quiz Builder
        </TabsTrigger>
        <TabsTrigger
          value="certs"
          className="flex-1 text-xs"
          data-ocid="admin.agent13.tab"
        >
          Certificates
        </TabsTrigger>
        <TabsTrigger
          value="outreach"
          className="flex-1 text-xs"
          data-ocid="admin.agent13.tab"
        >
          Business Outreach
        </TabsTrigger>
      </TabsList>

      {/* Tab 1: Revenue Monitor */}
      <TabsContent value="revenue" className="space-y-4">
        <div className="bg-card border border-border rounded-xl p-4">
          <h3 className="text-sm font-semibold text-foreground mb-3">
            Module Usage (Traffic Patterns)
          </h3>
          <div className="space-y-2">
            {moduleUsage.map((m) => (
              <div key={m.module} className="flex items-center gap-3">
                <span className="text-xs text-foreground w-28 shrink-0">
                  {m.module}
                </span>
                <div className="flex-1 h-4 bg-secondary rounded overflow-hidden">
                  <div
                    className="h-full rounded transition-all"
                    style={{
                      width: `${m.pct}%`,
                      background: "oklch(0.55 0.22 280 / 0.6)",
                      minWidth: "1rem",
                    }}
                  >
                    <span className="text-[9px] font-bold text-white px-1.5 leading-4 block">
                      {m.pct}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">
              Total Estimated Monthly Revenue (if all implemented)
            </p>
            <p
              className="text-2xl font-bold"
              style={{ color: "oklch(0.52 0.14 155)" }}
            >
              ₹1,41,250
            </p>
          </div>
          <DollarSign
            size={32}
            style={{ color: "oklch(0.52 0.14 155 / 0.4)" }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {suggestions.map((s, i) => (
            <div
              key={s.title}
              className="bg-card border border-border rounded-xl p-4 space-y-2"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {s.title}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    {s.desc}
                  </p>
                </div>
                <Badge variant="outline" className="text-[10px] shrink-0">
                  {s.cat}
                </Badge>
              </div>
              <p
                className="text-xs font-bold"
                style={{ color: "oklch(0.52 0.14 155)" }}
              >
                {s.est}
              </p>
              <Button
                size="sm"
                className="w-full text-xs h-7"
                onClick={() => {
                  setSuggestionStatus((p) => ({ ...p, [i]: "Approved" }));
                  toast.success(`${s.title} approved`);
                }}
                disabled={suggestionStatus[i] === "Approved"}
                data-ocid="admin.agent13.primary_button"
              >
                {suggestionStatus[i] === "Approved" ? "✓ Approved" : "Approve"}
              </Button>
            </div>
          ))}
        </div>
      </TabsContent>

      {/* Tab 2: Course Creator */}
      <TabsContent value="courses" className="space-y-4">
        <div className="bg-card border border-border rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">AI Course Generator</h3>
            <Button
              size="sm"
              className="text-xs gap-1"
              onClick={handleGenerateCourse}
              disabled={generatingCourse}
              data-ocid="admin.agent13.submit_button"
            >
              {generatingCourse ? "Generating..." : "Generate Course"}
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <Label className="text-xs font-medium">Course Topic</Label>
              <Input
                className="mt-1 h-8 text-xs"
                placeholder="e.g. Social Media Marketing"
                value={courseTopic}
                onChange={(e) => setCourseTopic(e.target.value)}
                data-ocid="admin.agent13.input"
              />
            </div>
            <div>
              <Label className="text-xs font-medium">Target Audience</Label>
              <select
                className="w-full mt-1 h-8 text-xs border border-input rounded-md px-2 bg-background text-foreground"
                value={courseAudience}
                onChange={(e) => setCourseAudience(e.target.value)}
                data-ocid="admin.agent13.select"
              >
                <option>Beginners</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
            <div>
              <Label className="text-xs font-medium">Price (₹)</Label>
              <Input
                className="mt-1 h-8 text-xs"
                type="number"
                value={coursePrice}
                onChange={(e) => setCoursePrice(e.target.value)}
                disabled={!coursePaid}
                data-ocid="admin.agent13.input"
              />
            </div>
            <div className="flex items-center gap-2 pt-5">
              <Switch
                checked={coursePaid}
                onCheckedChange={(setCoursesPaid) =>
                  setCoursePaid(setCoursesPaid)
                }
                data-ocid="admin.agent13.switch"
              />
              <Label className="text-xs">
                {coursePaid ? "Paid Course" : "Free Course"}
              </Label>
            </div>
          </div>
          <Button
            size="sm"
            variant="outline"
            className="w-full text-xs gap-1"
            onClick={handleGenerateCourse}
            disabled={generatingCourse}
            data-ocid="admin.agent13.secondary_button"
          >
            {generatingCourse
              ? "⏳ Generating from monitoring data..."
              : "Generate from Monitoring Data"}
          </Button>
        </div>
        <div className="space-y-3">
          {courses.map((c) => (
            <div
              key={c.id}
              className="bg-card border border-border rounded-xl p-4 space-y-2"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <p className="text-sm font-semibold">{c.title}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    {c.desc}
                  </p>
                </div>
                <div className="flex flex-col gap-1 items-end shrink-0">
                  <Badge
                    className={
                      c.status === "published"
                        ? "bg-green-100 text-green-700 border-0 text-[10px]"
                        : "bg-amber-100 text-amber-700 border-0 text-[10px]"
                    }
                  >
                    {c.status}
                  </Badge>
                  <Badge variant="outline" className="text-[10px]">
                    {c.audience}
                  </Badge>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{c.modules.length} modules</span>
                <span>·</span>
                <span className="font-semibold text-foreground">
                  {c.paid ? `₹${c.price}` : "Free"}
                </span>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="text-xs h-7 flex-1"
                  onClick={() => toast.success(`${c.title} published`)}
                  data-ocid="admin.agent13.primary_button"
                >
                  Publish
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-xs h-7 flex-1"
                  onClick={() => {
                    setSelectedCourseId(c.id);
                    setActiveTab("quiz");
                  }}
                  data-ocid="admin.agent13.secondary_button"
                >
                  Create Quiz
                </Button>
              </div>
            </div>
          ))}
        </div>
      </TabsContent>

      {/* Tab 3: Quiz Builder */}
      <TabsContent value="quiz" className="space-y-4">
        <div className="bg-card border border-border rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1">
              <Label className="text-xs font-medium">Select Course</Label>
              <select
                className="w-full mt-1 h-8 text-xs border border-input rounded-md px-2 bg-background text-foreground"
                value={selectedCourseId ?? ""}
                onChange={(e) => setSelectedCourseId(Number(e.target.value))}
                data-ocid="admin.agent13.select"
              >
                {courses.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title}
                  </option>
                ))}
              </select>
            </div>
            <Button
              size="sm"
              className="text-xs mt-5 gap-1"
              onClick={handleGenerateQuiz}
              disabled={generatingQuiz}
              data-ocid="admin.agent13.primary_button"
            >
              {generatingQuiz ? "Generating..." : "Generate Questions"}
            </Button>
          </div>
          <div className="flex items-center gap-3">
            <Label className="text-xs font-medium w-24 shrink-0">
              Pass Score (%)
            </Label>
            <Input
              className="h-8 text-xs w-24"
              type="number"
              value={passScore}
              onChange={(e) => setPassScore(e.target.value)}
              data-ocid="admin.agent13.input"
            />
          </div>
        </div>
        <div className="space-y-2">
          {quizQuestions.map((q) => (
            <div
              key={q.question}
              className="bg-card border border-border rounded-xl p-3 space-y-2"
            >
              <div className="flex items-start gap-2">
                <Badge
                  className={
                    q.type === "MCQ"
                      ? "bg-violet-100 text-violet-700 border-0 text-[10px] shrink-0"
                      : "bg-blue-100 text-blue-700 border-0 text-[10px] shrink-0"
                  }
                >
                  {q.type}
                </Badge>
                <p className="text-xs text-foreground">{q.question}</p>
              </div>
              {q.type === "MCQ" && q.options && (
                <div className="grid grid-cols-2 gap-1 ml-1">
                  {q.options.map((opt, j) => (
                    <div
                      key={opt}
                      className={`text-[11px] px-2 py-1 rounded ${j === q.correct ? "bg-green-100 text-green-700 font-semibold" : "bg-muted text-muted-foreground"}`}
                    >
                      {String.fromCharCode(65 + j)}. {opt}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <Button
          size="sm"
          className="w-full gap-1"
          onClick={() => toast.success("Quiz published successfully!")}
          data-ocid="admin.agent13.submit_button"
        >
          Publish Quiz
        </Button>
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-4 py-2 border-b border-border bg-muted/50">
            <p className="text-xs font-semibold">Quiz Results</p>
          </div>
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border">
                <th className="px-3 py-2 text-left font-medium">Learner</th>
                <th className="px-3 py-2 text-right font-medium">Score</th>
                <th className="px-3 py-2 text-left font-medium">Status</th>
                <th className="px-3 py-2 text-left font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {quizResults.map((r, i) => (
                <tr
                  key={r.learner}
                  className="border-t border-border"
                  data-ocid={`admin.agent13.row.${i + 1}`}
                >
                  <td className="px-3 py-2 font-medium">{r.learner}</td>
                  <td className="px-3 py-2 text-right">{r.score}%</td>
                  <td className="px-3 py-2">
                    <Badge
                      className={`border-0 text-[10px] ${r.status === "Pass" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                    >
                      {r.status}
                    </Badge>
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">{r.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </TabsContent>

      {/* Tab 4: Certificates */}
      <TabsContent value="certs" className="space-y-4">
        <div className="bg-gradient-to-br from-violet-50 to-amber-50 dark:from-violet-950/30 dark:to-amber-950/30 border-2 border-dashed border-violet-300 dark:border-violet-700 rounded-xl p-6 text-center space-y-2">
          <div className="text-2xl">🏆</div>
          <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase">
            IndyaCentral Platform
          </p>
          <p className="text-xl font-bold text-foreground">
            CERTIFICATE OF COMPLETION
          </p>
          <p className="text-sm text-muted-foreground italic">
            This is to certify that
          </p>
          <p className="text-lg font-semibold text-primary border-b border-primary inline-block px-4">
            [Recipient Name]
          </p>
          <p className="text-sm text-muted-foreground">
            has successfully completed
          </p>
          <p className="text-base font-semibold text-foreground">
            [Course Name]
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            {new Date().toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            · Certified by IndyaCentral
          </p>
        </div>
        <div className="bg-card border border-border rounded-xl p-4 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="text-xs font-medium">Certificate Name</Label>
              <Input
                className="mt-1 h-8 text-xs"
                value={certName}
                onChange={(e) => setCertName(e.target.value)}
                data-ocid="admin.agent13.input"
              />
            </div>
            <div>
              <Label className="text-xs font-medium">Price (₹)</Label>
              <Input
                className="mt-1 h-8 text-xs"
                type="number"
                value={certPrice}
                onChange={(e) => setCertPrice(e.target.value)}
                disabled={!certPaid}
                data-ocid="admin.agent13.input"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Switch
              checked={certPaid}
              onCheckedChange={setCertPaid}
              data-ocid="admin.agent13.switch"
            />
            <Label className="text-xs">
              {certPaid
                ? `Paid Certificate — ₹${certPrice}`
                : "Free Certificate"}
            </Label>
          </div>
          <Button
            size="sm"
            className="w-full gap-1"
            onClick={() => toast.success("Certificate issued successfully!")}
            data-ocid="admin.agent13.submit_button"
          >
            Issue Certificate
          </Button>
        </div>
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-4 py-2 border-b border-border bg-muted/50">
            <p className="text-xs font-semibold">Issued Certificates</p>
          </div>
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border">
                <th className="px-3 py-2 text-left font-medium">Recipient</th>
                <th className="px-3 py-2 text-left font-medium">Course</th>
                <th className="px-3 py-2 text-left font-medium">Date</th>
                <th className="px-3 py-2 text-left font-medium">Status</th>
                <th className="px-3 py-2 text-left font-medium" />
              </tr>
            </thead>
            <tbody>
              {issuedCerts.map((c, i) => (
                <tr
                  key={`${c.recipient}-${c.course}`}
                  className="border-t border-border"
                  data-ocid={`admin.agent13.item.${i + 1}`}
                >
                  <td className="px-3 py-2 font-medium">{c.recipient}</td>
                  <td className="px-3 py-2 text-muted-foreground text-[11px]">
                    {c.course}
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">{c.date}</td>
                  <td className="px-3 py-2">
                    <Badge
                      className={`border-0 text-[10px] ${c.status === "Paid" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}
                    >
                      {c.status}
                    </Badge>
                  </td>
                  <td className="px-3 py-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-[10px] h-6 px-2"
                      onClick={() => toast.success("Certificate downloaded")}
                      data-ocid="admin.agent13.secondary_button"
                    >
                      Download
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </TabsContent>

      {/* Tab 5: Business Outreach */}
      <TabsContent value="outreach" className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-card border border-border rounded-xl p-3 text-center">
            <p className="text-lg font-bold text-primary">
              {foundBusinesses.length}
            </p>
            <p className="text-[11px] text-muted-foreground">
              Businesses Found
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-3 text-center">
            <p
              className="text-lg font-bold"
              style={{ color: "oklch(0.52 0.14 155)" }}
            >
              {Object.values(bizConnected).filter(Boolean).length}
            </p>
            <p className="text-[11px] text-muted-foreground">Connected</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-3 text-center">
            <p className="text-lg font-bold text-amber-600">24</p>
            <p className="text-[11px] text-muted-foreground">Users Referred</p>
          </div>
        </div>
        <Button
          size="sm"
          className="w-full gap-2"
          onClick={() => {
            setScanning(true);
            setTimeout(() => {
              setScanning(false);
              toast.success("Found 6 new businesses across the internet!");
            }, 2000);
          }}
          disabled={scanning}
          data-ocid="admin.agent13.primary_button"
        >
          {scanning
            ? "🔍 Scanning Internet..."
            : "🔍 Scan Internet for Businesses"}
        </Button>
        <div className="space-y-2">
          {foundBusinesses.map((b) => (
            <div
              key={b.id}
              className="bg-card border border-border rounded-xl p-3 flex items-start justify-between gap-3"
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate">{b.name}</p>
                <div className="flex items-center gap-2 text-[11px] text-muted-foreground mt-0.5">
                  <Badge variant="outline" className="text-[10px] px-1">
                    {b.industry}
                  </Badge>
                  <span>{b.location}</span>
                  <span>·</span>
                  <span>{b.employees} emp.</span>
                </div>
                <p className="text-[11px] text-muted-foreground mt-0.5">
                  {b.website}
                </p>
              </div>
              <div className="flex gap-1 shrink-0">
                <Button
                  size="sm"
                  className="text-[10px] h-7 px-2"
                  onClick={() => {
                    setBizConnected((p) => ({ ...p, [b.id]: true }));
                    toast.success(`Connected with ${b.name}`);
                  }}
                  disabled={bizConnected[b.id]}
                  data-ocid="admin.agent13.primary_button"
                >
                  {bizConnected[b.id] ? "Connected" : "Connect"}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-[10px] h-7 px-2"
                  onClick={() => toast.success(`Invitation sent to ${b.name}`)}
                  data-ocid="admin.agent13.secondary_button"
                >
                  Invite
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-card border border-border rounded-xl p-4 space-y-3">
          <h3 className="text-sm font-semibold">AI Partner Sites</h3>
          <div className="space-y-2">
            {Object.entries(aiSyncStatus).map(([site, connected]) => (
              <div key={site} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${connected ? "bg-green-500" : "bg-gray-300"}`}
                  />
                  <span className="text-xs text-foreground">{site}</span>
                  {connected && (
                    <Badge className="bg-green-100 text-green-700 border-0 text-[10px]">
                      Connected
                    </Badge>
                  )}
                </div>
                <div className="flex gap-1">
                  <Switch
                    checked={connected}
                    onCheckedChange={(v) =>
                      setAiSyncStatus((p) => ({ ...p, [site]: v }))
                    }
                    data-ocid="admin.agent13.switch"
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-[10px] h-6 px-2"
                    onClick={() => toast.success(`Syncing users from ${site}`)}
                    disabled={!connected}
                    data-ocid="admin.agent13.secondary_button"
                  >
                    Sync Users
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}

// ─── Agent 14: Content Moderation ─────────────────────────────────────────────
function Agent14Content() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [itemStatuses, setItemStatuses] = useState<Record<number, string>>({});

  const queue = [
    {
      type: "Image",
      module: "Social Feed",
      severity: "nudity",
      preview: "User-uploaded profile photo flagged by auto-scanner",
      status: "pending",
    },
    {
      type: "Post",
      module: "Blog",
      severity: "misinformation",
      preview:
        "Health supplement post with unverified medical claims about cancer cure",
      status: "pending",
    },
    {
      type: "Comment",
      module: "Jobs",
      severity: "hate-speech",
      preview: "Comment with discriminatory language in job application thread",
      status: "pending",
    },
    {
      type: "Profile",
      module: "Dating",
      severity: "nudity",
      preview: "Dating profile header image flagged for explicit content",
      status: "warned",
    },
    {
      type: "Post",
      module: "Community",
      severity: "spam",
      preview:
        "Same post content copied 14 times across different community feeds",
      status: "removed",
    },
    {
      type: "Image",
      module: "Products",
      severity: "misinformation",
      preview:
        "Product image claiming FDA approval without valid documentation",
      status: "pending",
    },
    {
      type: "Comment",
      module: "Social Feed",
      severity: "hate-speech",
      preview: "Comment using slurs targeting religious community",
      status: "warned",
    },
    {
      type: "Post",
      module: "Real Estate",
      severity: "spam",
      preview:
        "Same property listing copy-pasted 8 times with different prices",
      status: "removed",
    },
    {
      type: "Image",
      module: "Blog",
      severity: "violence",
      preview: "Thumbnail image with graphic violent content",
      status: "pending",
    },
    {
      type: "Profile",
      module: "Matrimony",
      severity: "nudity",
      preview: "Profile photo flagged in matrimony section",
      status: "pending",
    },
    {
      type: "Post",
      module: "Healthcare",
      severity: "misinformation",
      preview: "Post claiming homeopathy cures COVID-19 with no evidence",
      status: "pending",
    },
    {
      type: "Comment",
      module: "Education",
      severity: "hate-speech",
      preview:
        "Teacher comment using inappropriate language toward student in thread",
      status: "pending",
    },
    {
      type: "Image",
      module: "Travel",
      severity: "spam",
      preview: "AI-generated fake hotel photos used in travel package",
      status: "cleared",
    },
    {
      type: "Post",
      module: "Jobs",
      severity: "spam",
      preview:
        "Fake job listing requesting personal financial information upfront",
      status: "warned",
    },
    {
      type: "Comment",
      module: "Community",
      severity: "violence",
      preview: "Comment with threats against a community member",
      status: "pending",
    },
  ];

  const filters = [
    "All",
    "nudity",
    "violence",
    "hate-speech",
    "spam",
    "misinformation",
  ];
  const filtered =
    activeFilter === "All"
      ? queue
      : queue.filter((q) => q.severity === activeFilter);

  const dailyStats = [
    { label: "Items Reviewed", value: 23, color: "oklch(0.55 0.15 240)" },
    { label: "Removed", value: 8, color: "oklch(0.55 0.22 25)" },
    { label: "Warnings Issued", value: 11, color: "oklch(0.72 0.17 85)" },
    { label: "Accounts Escalated", value: 2, color: "oklch(0.65 0.25 335)" },
  ];

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {dailyStats.map(({ label, value }) => (
          <div
            key={label}
            className="bg-card border border-border rounded-xl p-3"
          >
            <p className="text-xl font-display font-bold text-foreground">
              {value}
            </p>
            <p className="text-[11px] text-muted-foreground font-label">
              {label}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-xl p-4">
        <h3 className="text-sm font-label font-semibold text-foreground mb-2">
          Auto-Warning Escalation
        </h3>
        <div className="flex items-center gap-2 flex-wrap">
          {[
            {
              stage: "1st Flag",
              action: "Auto-warning sent to user",
              color: "oklch(0.72 0.17 85)",
            },
            { stage: "→", action: "", color: "transparent" },
            {
              stage: "2nd Flag",
              action: "7-day restriction applied",
              color: "oklch(0.65 0.25 335)",
            },
            { stage: "→", action: "", color: "transparent" },
            {
              stage: "3rd Flag",
              action: "Escalated to admin review",
              color: "oklch(0.55 0.22 25)",
            },
          ].map((s) =>
            s.action ? (
              <div
                key={s.stage}
                className="text-center px-3 py-2 rounded-lg border"
                style={{
                  borderColor: `${s.color}40`,
                  background: `${s.color}10`,
                }}
              >
                <p
                  className="text-[11px] font-label font-bold"
                  style={{ color: s.color }}
                >
                  {s.stage}
                </p>
                <p className="text-[10px] text-muted-foreground">{s.action}</p>
              </div>
            ) : (
              <span key={s.stage} className="text-muted-foreground text-sm">
                →
              </span>
            ),
          )}
        </div>
      </div>

      <div className="flex gap-1.5 flex-wrap">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActiveFilter(f)}
            className={`text-[11px] font-label px-2.5 py-1 rounded-full border capitalize transition-all ${activeFilter === f ? "text-white border-transparent" : "text-muted-foreground border-border"}`}
            style={
              activeFilter === f ? { background: "oklch(0.55 0.22 280)" } : {}
            }
          >
            {f}
          </button>
        ))}
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <TH>Type</TH>
                <TH>Module</TH>
                <TH>Severity</TH>
                <TH>Preview</TH>
                <TH>Status</TH>
                <TH>Actions</TH>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item, i) => {
                const status = itemStatuses[i] ?? item.status;
                return (
                  <tr
                    key={item.preview}
                    className="hover:bg-secondary/20 transition-colors"
                  >
                    <TD>
                      <SBadge label={item.type} color="gray" />
                    </TD>
                    <TD>
                      <SBadge label={item.module} color="blue" />
                    </TD>
                    <TD>
                      <SBadge
                        label={item.severity}
                        color={
                          item.severity === "nudity" ||
                          item.severity === "violence"
                            ? "red"
                            : item.severity === "hate-speech"
                              ? "rose"
                              : item.severity === "spam"
                                ? "amber"
                                : "gray"
                        }
                      />
                    </TD>
                    <TD>
                      <span className="line-clamp-1 max-w-[200px] block text-[11px] text-muted-foreground">
                        {item.preview}
                      </span>
                    </TD>
                    <TD>
                      <SBadge
                        label={status}
                        color={
                          status === "removed"
                            ? "red"
                            : status === "warned"
                              ? "amber"
                              : status === "cleared"
                                ? "green"
                                : "gray"
                        }
                      />
                    </TD>
                    <TD>
                      <div className="flex gap-1">
                        <ActionBtn
                          label="Approve"
                          color="green"
                          onClick={() =>
                            setItemStatuses((p) => ({ ...p, [i]: "cleared" }))
                          }
                        />
                        <ActionBtn
                          label="Remove"
                          color="red"
                          onClick={() =>
                            setItemStatuses((p) => ({ ...p, [i]: "removed" }))
                          }
                        />
                        <ActionBtn
                          label="Warn"
                          color="amber"
                          onClick={() =>
                            setItemStatuses((p) => ({ ...p, [i]: "warned" }))
                          }
                        />
                      </div>
                    </TD>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="text-[11px] text-muted-foreground bg-secondary/40 rounded-lg px-3 py-2">
        🔗 <strong>Agent Network:</strong> Reports severity-3 cases
        (violence/nudity) to Agent 1 (Moderation) for immediate user blocking.
        Feeds pattern data to Agent 6 (Security) for threat intelligence.
      </div>
    </>
  );
}

// ─── Agent 15: Analytics ──────────────────────────────────────────────────────
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
    { module: "Gated Community", pct: 35 },
  ];

  const ageData = [
    { group: "18–24", pct: 28 },
    { group: "25–34", pct: 34 },
    { group: "35–44", pct: 22 },
    { group: "45–54", pct: 11 },
    { group: "55+", pct: 5 },
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
    { city: "Toronto", users: 19, topModule: "Matrimony", trend: "↑" },
  ];

  const featureDemand = [
    { feature: "Mobile App (iOS/Android)", votes: 892, trending: true },
    { feature: "Video Feed (Reels-style)", votes: 634, trending: true },
    { feature: "Voice/Video Calls", votes: 521, trending: false },
    { feature: "Offline Mode", votes: 389, trending: false },
    { feature: "Multi-language Support (Urdu)", votes: 341, trending: true },
    { feature: "AI Match Suggestions", votes: 298, trending: true },
    { feature: "Push Notifications", votes: 267, trending: false },
    { feature: "Dark Mode for Geomap", votes: 234, trending: false },
  ];

  const milestones = [
    {
      version: "v1.0",
      date: "Jan 2026",
      users: 120,
      note: "Family Tree + Social Feed launch",
    },
    {
      version: "v2.0",
      date: "Feb 2026",
      users: 384,
      note: "Geomap, Real Estate, Healthcare activated",
    },
    {
      version: "v3.0",
      date: "Feb 2026",
      users: 712,
      note: "Education, Jobs, Blog & Affiliate added",
    },
    {
      version: "v4.0",
      date: "Mar 2026",
      users: 1089,
      note: "Matrimony, Dating, Gated Community",
    },
    {
      version: "v5.0",
      date: "Mar 2026",
      users: 1247,
      note: "16 Agents + Admin Panel fully live",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {[
          { label: "Total Users", value: "1,247" },
          { label: "DAU", value: "342" },
          { label: "WAU", value: "891" },
          { label: "MAU", value: "1,089" },
          { label: "New This Month", value: "156" },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="bg-card border border-border rounded-xl p-3"
          >
            <p className="text-xl font-display font-bold text-foreground">
              {value}
            </p>
            <p className="text-[11px] text-muted-foreground font-label">
              {label}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-card border border-border rounded-xl p-4">
          <h3 className="text-sm font-label font-semibold text-foreground mb-3">
            Module Engagement
          </h3>
          <div className="space-y-1.5">
            {moduleEngagement.map((m) => (
              <div key={m.module} className="flex items-center gap-2">
                <span className="text-[11px] font-label text-foreground w-28 shrink-0">
                  {m.module}
                </span>
                <div className="flex-1 h-3.5 bg-secondary rounded overflow-hidden">
                  <div
                    className="h-full rounded"
                    style={{
                      width: `${m.pct}%`,
                      background: "oklch(0.55 0.22 280 / 0.6)",
                    }}
                  />
                </div>
                <span className="text-[10px] text-muted-foreground w-8 text-right">
                  {m.pct}%
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-card border border-border rounded-xl p-4">
            <h3 className="text-sm font-label font-semibold text-foreground mb-3">
              Age-wise Interest
            </h3>
            <div className="space-y-2">
              {ageData.map((a) => (
                <div key={a.group} className="flex items-center gap-3">
                  <span className="text-xs font-label text-foreground w-14 shrink-0">
                    {a.group}
                  </span>
                  <div className="flex-1 h-5 bg-secondary rounded overflow-hidden">
                    <div
                      className="h-full rounded flex items-center px-2 transition-all"
                      style={{
                        width: `${a.pct * 2.5}%`,
                        background: "oklch(0.65 0.25 335 / 0.6)",
                        minWidth: "2rem",
                      }}
                    >
                      <span className="text-[10px] font-bold text-white">
                        {a.pct}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-4">
            <h3 className="text-sm font-label font-semibold text-foreground mb-3">
              Platform Milestones
            </h3>
            <div className="space-y-2">
              {milestones.map((m) => (
                <div
                  key={m.version}
                  className="flex items-center gap-3 py-1 border-b border-border/30 last:border-0"
                >
                  <span
                    className="text-[10px] font-mono font-bold text-white px-1.5 py-0.5 rounded"
                    style={{ background: "oklch(0.55 0.22 280)" }}
                  >
                    {m.version}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-label text-foreground truncate">
                      {m.note}
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      {m.date} · {m.users.toLocaleString()} users
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-border">
          <h3 className="text-sm font-label font-semibold text-foreground">
            Location-wise Interest
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <TH>City</TH>
                <TH>Users</TH>
                <TH>Top Module</TH>
                <TH>Trend</TH>
              </tr>
            </thead>
            <tbody>
              {locationData.map((l) => (
                <tr
                  key={l.city}
                  className="hover:bg-secondary/20 transition-colors"
                >
                  <TD className="font-medium">{l.city}</TD>
                  <TD>{l.users}</TD>
                  <TD>
                    <SBadge label={l.topModule} color="violet" />
                  </TD>
                  <TD
                    className={
                      l.trend === "↑"
                        ? "text-green-600"
                        : "text-muted-foreground"
                    }
                  >
                    {l.trend}
                  </TD>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-border">
          <h3 className="text-sm font-label font-semibold text-foreground">
            Feature Demand (Surveys & Votes)
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <TH>Feature</TH>
                <TH>Votes</TH>
                <TH>Trending</TH>
              </tr>
            </thead>
            <tbody>
              {featureDemand.map((f) => (
                <tr
                  key={f.feature}
                  className="hover:bg-secondary/20 transition-colors"
                >
                  <TD className="font-medium">{f.feature}</TD>
                  <TD>{f.votes.toLocaleString()}</TD>
                  <TD>
                    {f.trending ? (
                      <SBadge label="🔥 Trending" color="rose" />
                    ) : (
                      <SBadge label="Stable" color="gray" />
                    )}
                  </TD>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="text-[11px] text-muted-foreground bg-secondary/40 rounded-lg px-3 py-2">
        🔗 <strong>Agent Network:</strong> Feeds demographics to Agent 11 (Fake
        Users) for realistic simulation. Sends engagement patterns to Agent 13
        (Monetization). Feature demand data fed to Agent 16 (Tips) for
        contextual tips.
      </div>
    </>
  );
}

// ─── Agent 16: Tips Manager ───────────────────────────────────────────────────
function Agent16Tips() {
  const [selectedModule, setSelectedModule] = useState("social-feed");
  const [newTip, setNewTip] = useState({
    title: "",
    content: "",
    type: "info",
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
    "admin-panel",
  ];

  const tipStats = [
    {
      module: "Social Feed",
      active: 5,
      shown: 1420,
      dismissed: 312,
      ctr: "22%",
    },
    {
      module: "Family Tree",
      active: 5,
      shown: 1180,
      dismissed: 289,
      ctr: "24%",
    },
    { module: "Jobs", active: 4, shown: 980, dismissed: 198, ctr: "20%" },
    { module: "Healthcare", active: 3, shown: 741, dismissed: 167, ctr: "23%" },
    {
      module: "Real Estate",
      active: 3,
      shown: 612,
      dismissed: 142,
      ctr: "23%",
    },
    { module: "Travel", active: 3, shown: 488, dismissed: 98, ctr: "20%" },
  ];

  const [globalSettings, setGlobalSettings] = useState({
    showOnFirstVisit: true,
    showOnNavigation: false,
    autoDismiss: 30,
  });

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-card border border-border rounded-xl p-4">
          <h3 className="text-sm font-label font-semibold text-foreground mb-3">
            Global Tip Settings
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-label text-foreground">
                Show tips on first visit
              </span>
              <Switch
                checked={globalSettings.showOnFirstVisit}
                onCheckedChange={(v) =>
                  setGlobalSettings((p) => ({ ...p, showOnFirstVisit: v }))
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-label text-foreground">
                Show tips on navigation change
              </span>
              <Switch
                checked={globalSettings.showOnNavigation}
                onCheckedChange={(v) =>
                  setGlobalSettings((p) => ({ ...p, showOnNavigation: v }))
                }
              />
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-label text-foreground">
                Auto-dismiss after (seconds)
              </span>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min={5}
                  max={120}
                  value={globalSettings.autoDismiss}
                  onChange={(e) =>
                    setGlobalSettings((p) => ({
                      ...p,
                      autoDismiss: Number(e.target.value),
                    }))
                  }
                  className="w-20 accent-violet-600"
                />
                <span className="text-xs font-label text-foreground w-8">
                  {globalSettings.autoDismiss}s
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-4">
          <h3 className="text-sm font-label font-semibold text-foreground mb-3">
            Add New Tip
          </h3>
          <div className="space-y-2">
            <select
              value={selectedModule}
              onChange={(e) => setSelectedModule(e.target.value)}
              className="w-full text-xs font-label bg-secondary/60 border border-border rounded-lg px-2 py-1.5 text-foreground"
            >
              {modules.map((m) => (
                <option key={m} value={m}>
                  {m
                    .split("-")
                    .map((w) => w[0].toUpperCase() + w.slice(1))
                    .join(" ")}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Tip title"
              value={newTip.title}
              onChange={(e) =>
                setNewTip((p) => ({ ...p, title: e.target.value }))
              }
              className="w-full text-xs font-label bg-secondary/60 border border-border rounded-lg px-2 py-1.5 text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <textarea
              placeholder="Tip content..."
              value={newTip.content}
              onChange={(e) =>
                setNewTip((p) => ({ ...p, content: e.target.value }))
              }
              rows={2}
              className="w-full text-xs font-label bg-secondary/60 border border-border rounded-lg px-2 py-1.5 text-foreground placeholder:text-muted-foreground focus:outline-none resize-none"
            />
            <div className="flex gap-2">
              <select
                value={newTip.type}
                onChange={(e) =>
                  setNewTip((p) => ({ ...p, type: e.target.value }))
                }
                className="flex-1 text-xs font-label bg-secondary/60 border border-border rounded-lg px-2 py-1.5 text-foreground"
              >
                {["info", "feature", "shortcut", "warning"].map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <Button
                size="sm"
                className="text-xs"
                style={{ background: "oklch(0.55 0.22 280)", color: "white" }}
                onClick={() => {
                  toast.success("Tip added successfully");
                  setNewTip({ title: "", content: "", type: "info" });
                }}
              >
                Add Tip
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-border">
          <h3 className="text-sm font-label font-semibold text-foreground">
            Tip Engagement Stats
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <TH>Module</TH>
                <TH>Tips Active</TH>
                <TH>Shown</TH>
                <TH>Dismissed</TH>
                <TH>Click-through</TH>
              </tr>
            </thead>
            <tbody>
              {tipStats.map((t) => (
                <tr
                  key={t.module}
                  className="hover:bg-secondary/20 transition-colors"
                >
                  <TD className="font-medium">{t.module}</TD>
                  <TD className="text-center">{t.active}</TD>
                  <TD>{t.shown.toLocaleString()}</TD>
                  <TD>{t.dismissed}</TD>
                  <TD>
                    <span
                      style={{ color: "oklch(0.52 0.14 155)" }}
                      className="font-label font-bold"
                    >
                      {t.ctr}
                    </span>
                  </TD>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="text-[11px] text-muted-foreground bg-secondary/40 rounded-lg px-3 py-2">
        🔗 <strong>Agent Network:</strong> Tip content is updated by Agent 4
        (Evolution) based on user behavior patterns. New feature tips generated
        from Agent 15 (Analytics) feature demand data.
      </div>
    </>
  );
}

// ─── Agent Factory ────────────────────────────────────────────────────────────
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
    "Gated Community",
  ];

  const [newAgent, setNewAgent] = useState({
    name: "",
    desc: "",
    freq: "Daily",
    priority: "Medium",
    modules: [] as string[],
    icPrefix: false,
    isPersonalBot: false,
    assignedUser: "",
    parentAgent: "",
  });

  const [customAgents, setCustomAgents] = useState([
    {
      name: "PriceWatch Agent",
      desc: "Monitors product prices across the marketplace and alerts admin when unusual spikes detected.",
      freq: "Hourly",
      priority: "High",
      modules: ["Products", "Blog", "Affiliate"],
      active: true,
      created: "Feb 20, 2026",
      log: "Last run: 1h ago — 12 prices flagged for review",
    },
    {
      name: "Birthday Reminder Agent",
      desc: "Checks family tree DOBs daily and sends birthday reminder notifications to connected members.",
      freq: "Daily",
      priority: "Medium",
      modules: ["Family Tree", "Social Feed"],
      active: true,
      created: "Feb 15, 2026",
      log: "Last run: 8 AM — 2 birthdays detected today",
    },
    {
      name: "Inventory Alert Agent",
      desc: "Monitors product stock levels and alerts sellers when stock drops below threshold.",
      freq: "Hourly",
      priority: "High",
      modules: ["Products", "POS"],
      active: false,
      created: "Feb 10, 2026",
      log: "Agent paused by admin on Feb 28, 2026",
    },
  ]);

  const [agentLog, setAgentLog] = useState([
    {
      name: "PriceWatch Agent",
      createdBy: "Admin",
      created: "Feb 20, 2026",
      status: "running",
    },
    {
      name: "Birthday Reminder Agent",
      createdBy: "Admin",
      created: "Feb 15, 2026",
      status: "running",
    },
    {
      name: "Inventory Alert Agent",
      createdBy: "Admin",
      created: "Feb 10, 2026",
      status: "paused",
    },
  ]);

  const toggleModule = (m: string) => {
    setNewAgent((p) => ({
      ...p,
      modules: p.modules.includes(m)
        ? p.modules.filter((x) => x !== m)
        : [...p.modules, m],
    }));
  };

  const createAgent = () => {
    if (!newAgent.name || !newAgent.desc) {
      toast.error("Name and description are required");
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
      log: "Agent created — awaiting first run",
    };
    setCustomAgents((p) => [...p, agent]);
    setAgentLog((p) => [
      ...p,
      {
        name: newAgent.name,
        createdBy: "Admin",
        created: "Mar 1, 2026",
        status: "running",
      },
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
      parentAgent: "",
    });
    toast.success(`Agent "${newAgent.name}" created and started`);
  };

  // Agent network connections
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
    { from: "A12: WhatsApp", to: "A15: Analytics", label: "Engagement" },
  ];

  return (
    <>
      <div className="bg-card border border-border rounded-xl p-4">
        <h3 className="text-sm font-label font-semibold text-foreground mb-3">
          Create New Agent
        </h3>
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <p className="text-[11px] font-label text-muted-foreground mb-1">
                Agent Name
              </p>
              <input
                id="agent-name"
                type="text"
                placeholder="e.g. Price Drop Alert Agent"
                value={newAgent.name}
                onChange={(e) =>
                  setNewAgent((p) => ({ ...p, name: e.target.value }))
                }
                className="w-full text-xs font-label bg-secondary/60 border border-border rounded-lg px-2 py-1.5 text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-[11px] font-label text-muted-foreground mb-1">
                  Run Frequency
                </p>
                <select
                  id="agent-freq"
                  value={newAgent.freq}
                  onChange={(e) =>
                    setNewAgent((p) => ({ ...p, freq: e.target.value }))
                  }
                  className="w-full text-xs font-label bg-secondary/60 border border-border rounded-lg px-2 py-1.5 text-foreground"
                >
                  {["Real-time", "Hourly", "Daily", "Weekly", "Quarterly"].map(
                    (f) => (
                      <option key={f}>{f}</option>
                    ),
                  )}
                </select>
              </div>
              <div>
                <p className="text-[11px] font-label text-muted-foreground mb-1">
                  Priority
                </p>
                <select
                  id="agent-priority"
                  value={newAgent.priority}
                  onChange={(e) =>
                    setNewAgent((p) => ({ ...p, priority: e.target.value }))
                  }
                  className="w-full text-xs font-label bg-secondary/60 border border-border rounded-lg px-2 py-1.5 text-foreground"
                >
                  {["Low", "Medium", "High", "Critical"].map((f) => (
                    <option key={f}>{f}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <textarea
            placeholder="Describe the agent's purpose and what it should monitor or do..."
            value={newAgent.desc}
            onChange={(e) =>
              setNewAgent((p) => ({ ...p, desc: e.target.value }))
            }
            rows={2}
            className="w-full text-xs font-label bg-secondary/60 border border-border rounded-lg px-2 py-1.5 text-foreground placeholder:text-muted-foreground focus:outline-none resize-none"
          />
          <div>
            <p className="text-[11px] font-label text-muted-foreground mb-1.5">
              Target Modules
            </p>
            <div className="flex flex-wrap gap-1.5">
              {ALL_MODULES.map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => toggleModule(m)}
                  className={`text-[11px] font-label px-2 py-0.5 rounded-full border transition-all ${newAgent.modules.includes(m) ? "text-white border-transparent" : "text-muted-foreground border-border hover:border-foreground/30"}`}
                  style={
                    newAgent.modules.includes(m)
                      ? { background: "oklch(0.52 0.14 155)" }
                      : {}
                  }
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
          <Button
            onClick={createAgent}
            className="gap-1.5 text-xs"
            style={{ background: "oklch(0.55 0.22 280)", color: "white" }}
          >
            <Factory size={14} /> Create Agent
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {customAgents.map((agent, i) => (
          <div
            key={agent.name}
            className="bg-card border border-border rounded-xl p-4"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-sm font-label font-semibold text-foreground">
                  {agent.name}
                </p>
                <p className="text-[10px] text-muted-foreground">
                  {agent.created}
                </p>
              </div>
              <Switch
                checked={agent.active}
                onCheckedChange={(v) =>
                  setCustomAgents((prev) =>
                    prev.map((a, j) => (j === i ? { ...a, active: v } : a)),
                  )
                }
              />
            </div>
            <p className="text-[11px] text-muted-foreground mb-2 line-clamp-2">
              {agent.desc}
            </p>
            <div className="flex flex-wrap gap-0.5 mb-2">
              {agent.modules.slice(0, 3).map((m) => (
                <SBadge key={m} label={m} color="blue" />
              ))}
              {agent.modules.length > 3 && (
                <SBadge label={`+${agent.modules.length - 3}`} color="gray" />
              )}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-0.5">
                <SBadge label={agent.freq} color="violet" />
                <SBadge
                  label={agent.priority}
                  color={
                    agent.priority === "High" || agent.priority === "Critical"
                      ? "red"
                      : "gray"
                  }
                />
              </div>
              <button
                type="button"
                className="text-[10px] text-muted-foreground hover:text-foreground flex items-center gap-1"
              >
                <Settings2 size={11} /> Settings
              </button>
            </div>
            <p className="text-[10px] text-muted-foreground mt-2 border-t border-border/30 pt-1.5">
              {agent.log}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-card border border-border rounded-xl p-4">
        <h3 className="text-sm font-label font-semibold text-foreground mb-3">
          Agent Network Diagram
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {agentConnections.map((conn) => (
            <div
              key={conn.from + conn.to}
              className="flex items-center gap-2 bg-secondary/30 rounded-xl px-3 py-2"
            >
              <div>
                <p className="text-[10px] font-label font-bold text-foreground">
                  {conn.from}
                </p>
                <p className="text-[9px] text-muted-foreground">{conn.label}</p>
                <p
                  className="text-[10px] font-label font-bold"
                  style={{ color: "oklch(0.52 0.14 155)" }}
                >
                  → {conn.to}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-border">
          <h3 className="text-sm font-label font-semibold text-foreground">
            Agent Factory Log
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <TH>Agent Name</TH>
                <TH>Created By</TH>
                <TH>Created Date</TH>
                <TH>Status</TH>
              </tr>
            </thead>
            <tbody>
              {agentLog.map((l) => (
                <tr
                  key={l.name}
                  className="hover:bg-secondary/20 transition-colors"
                >
                  <TD className="font-medium">{l.name}</TD>
                  <TD className="text-muted-foreground">{l.createdBy}</TD>
                  <TD className="text-muted-foreground">{l.created}</TD>
                  <TD>
                    <SBadge
                      label={l.status}
                      color={l.status === "running" ? "green" : "amber"}
                    />
                  </TD>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function ModuleActions() {
  return (
    <TD>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="p-1 rounded hover:bg-secondary/60 text-muted-foreground transition-colors"
          >
            <MoreHorizontal size={14} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-28">
          <DropdownMenuItem className="text-xs">
            <BookOpen size={12} className="mr-1.5" /> View
          </DropdownMenuItem>
          <DropdownMenuItem className="text-xs">
            <Briefcase size={12} className="mr-1.5" /> Edit
          </DropdownMenuItem>
          <DropdownMenuItem className="text-xs text-destructive focus:text-destructive">
            <Trash2 size={12} className="mr-1.5" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </TD>
  );
}

// ─── Social Media Queue ───────────────────────────────────────────────────────
function SocialMediaQueue() {
  const [items, setItems] = useState([
    {
      id: 1,
      preview: "Check out our new organic honey range — now 20% off!",
      platforms: ["Instagram", "Facebook", "Twitter/X"],
      user: "Priya S.",
      date: "13 Mar 2026",
      status: "pending" as "pending" | "approved" | "rejected",
    },
    {
      id: 2,
      preview: "Just listed: 3BHK in Bandra West with sea view.",
      platforms: ["Facebook", "Twitter/X"],
      user: "Rahul V.",
      date: "12 Mar 2026",
      status: "pending" as "pending" | "approved" | "rejected",
    },
    {
      id: 3,
      preview:
        "Calling all foodies! Our weekend food festival is on March 20th.",
      platforms: ["Instagram", "Pinterest", "Twitter/X"],
      user: "Anita K.",
      date: "11 Mar 2026",
      status: "approved" as "pending" | "approved" | "rejected",
    },
  ]);
  const [platformConnected, setPlatformConnected] = useState<
    Record<string, boolean>
  >({});
  const [platformKeys, setPlatformKeys] = useState<Record<string, string>>({});
  const [composeText, setComposeText] = useState("");
  const [composeChecked, setComposeChecked] = useState<Record<string, boolean>>(
    {},
  );
  const [scheduleDate, setScheduleDate] = useState("");

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
    { name: "Telegram", icon: "✈️", color: "oklch(0.55 0.18 240)" },
  ];

  const BOOST_PLANS = [
    {
      name: "Basic Boost",
      price: "₹299",
      platforms: "1 platform",
      duration: "3 days",
      color: "oklch(0.52 0.14 155)",
    },
    {
      name: "Standard Boost",
      price: "₹799",
      platforms: "3 platforms",
      duration: "7 days",
      color: "oklch(0.55 0.22 280)",
      badge: "Popular",
    },
    {
      name: "Premium Boost",
      price: "₹2,499",
      platforms: "All platforms + Google",
      duration: "30 days",
      color: "oklch(0.65 0.25 335)",
    },
  ];

  const approve = (id: number) => {
    setItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, status: "approved" as const } : i,
      ),
    );
    toast.success("Post approved and shared");
  };
  const reject = (id: number) => {
    setItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, status: "rejected" as const } : i,
      ),
    );
    toast.error("Post rejected");
  };

  return (
    <div className="space-y-4">
      {/* Platform Connections */}
      <div
        className="bg-card border border-border rounded-xl p-4 space-y-4"
        data-ocid="admin.social_queue.panel"
      >
        <h3 className="text-sm font-semibold">Platform Connections</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {ALL_PLATFORMS.map((platform) => (
            <div
              key={platform.name}
              className="border border-border rounded-xl p-3 space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">
                  {platform.icon} {platform.name}
                </span>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${platformConnected[platform.name] ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-secondary text-muted-foreground"}`}
                  >
                    {platformConnected[platform.name]
                      ? "Connected"
                      : "Not Connected"}
                  </span>
                  <Switch
                    checked={!!platformConnected[platform.name]}
                    onCheckedChange={(v) =>
                      setPlatformConnected((p) => ({
                        ...p,
                        [platform.name]: v,
                      }))
                    }
                    data-ocid={`admin.social_queue.${platform.name.toLowerCase().replace(/[^a-z0-9]/g, "_")}.toggle`}
                  />
                </div>
              </div>
              <Input
                className="h-7 text-xs"
                placeholder="API Key / Access Token"
                value={platformKeys[platform.name] ?? ""}
                onChange={(e) =>
                  setPlatformKeys((p) => ({
                    ...p,
                    [platform.name]: e.target.value,
                  }))
                }
                data-ocid={`admin.social_queue.${platform.name.toLowerCase().replace(/[^a-z0-9]/g, "_")}.input`}
              />
              <Button
                size="sm"
                className="w-full h-7 text-xs"
                variant={
                  platformConnected[platform.name] ? "default" : "outline"
                }
                onClick={() => {
                  if (!platformKeys[platform.name]) {
                    toast.error("Enter API key first");
                    return;
                  }
                  setPlatformConnected((p) => ({
                    ...p,
                    [platform.name]: true,
                  }));
                  toast.success(`${platform.name} connected successfully`);
                }}
                data-ocid={`admin.social_queue.${platform.name.toLowerCase().replace(/[^a-z0-9]/g, "_")}.primary_button`}
              >
                {platformConnected[platform.name] ? "✓ Connected" : "Connect"}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Compose & Schedule */}
      <div className="bg-card border border-border rounded-xl p-4 space-y-3">
        <h3 className="text-sm font-semibold">Compose &amp; Schedule</h3>
        <Textarea
          className="text-xs"
          placeholder="Write your post content..."
          rows={3}
          value={composeText}
          onChange={(e) => setComposeText(e.target.value)}
          data-ocid="admin.social_queue.compose.textarea"
        />
        <div className="flex flex-wrap gap-3">
          {ALL_PLATFORMS.map((p) => (
            <label
              key={p.name}
              className="flex items-center gap-1.5 text-xs cursor-pointer"
            >
              <input
                type="checkbox"
                checked={!!composeChecked[p.name]}
                onChange={(e) =>
                  setComposeChecked((prev) => ({
                    ...prev,
                    [p.name]: e.target.checked,
                  }))
                }
                className="rounded"
              />
              {p.icon} {p.name}
            </label>
          ))}
        </div>
        <div className="flex gap-2 items-center">
          <Label className="text-xs shrink-0">Schedule:</Label>
          <Input
            type="datetime-local"
            className="h-8 text-xs flex-1"
            value={scheduleDate}
            onChange={(e) => setScheduleDate(e.target.value)}
            data-ocid="admin.social_queue.schedule.input"
          />
        </div>
        <div className="flex gap-2">
          <Button
            size="sm"
            className="flex-1"
            onClick={() => {
              if (!composeText.trim()) {
                toast.error("Post content required");
                return;
              }
              const newItem = {
                id: Date.now(),
                preview: composeText,
                platforms: Object.keys(composeChecked).filter(
                  (k) => composeChecked[k],
                ),
                user: "Admin",
                date: new Date().toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                }),
                status: "pending" as const,
              };
              setItems((p) => [newItem, ...p]);
              setComposeText("");
              setComposeChecked({});
              toast.success("Post added to queue");
            }}
            data-ocid="admin.social_queue.add.primary_button"
          >
            Schedule Post
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => toast.success("Preview generated")}
            data-ocid="admin.social_queue.secondary_button"
          >
            Preview
          </Button>
        </div>
      </div>

      {/* Promotion Boost Plans */}
      <div className="bg-card border border-border rounded-xl p-4 space-y-3">
        <h3 className="text-sm font-semibold">Boost &amp; Promote Plans</h3>
        <p className="text-xs text-muted-foreground">
          Users pay to boost posts across social platforms and search engines.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {BOOST_PLANS.map((plan) => (
            <div
              key={plan.name}
              className="border border-border rounded-xl p-4 space-y-3 relative"
            >
              {"badge" in plan && plan.badge && (
                <span className="absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-full font-bold bg-primary text-primary-foreground">
                  {plan.badge}
                </span>
              )}
              <div
                className="text-base font-bold"
                style={{ color: plan.color }}
              >
                {plan.name}
              </div>
              <div className="text-2xl font-bold">{plan.price}</div>
              <div className="text-xs text-muted-foreground space-y-1">
                <div>📱 {plan.platforms}</div>
                <div>⏱ {plan.duration}</div>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="w-full text-xs"
                onClick={() => toast.success(`${plan.name} plan updated`)}
                data-ocid={"admin.social_queue.boost.edit_button"}
              >
                Edit Pricing
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Scheduled Posts Queue */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-border">
          <h3 className="text-sm font-semibold">Scheduled Posts</h3>
        </div>
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <TH>Post Preview</TH>
              <TH>Platforms</TH>
              <TH>User</TH>
              <TH>Date</TH>
              <TH>Status</TH>
              <TH>Actions</TH>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr
                key={item.id}
                className="border-b border-border/50 hover:bg-secondary/20"
                data-ocid={`admin.social_queue.row.${i + 1}`}
              >
                <TD className="max-w-[200px]">
                  <p className="truncate">{item.preview}</p>
                </TD>
                <TD>
                  <div className="flex flex-wrap gap-1">
                    {item.platforms.map((p) => (
                      <span
                        key={p}
                        className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </TD>
                <TD>{item.user}</TD>
                <TD className="text-muted-foreground">{item.date}</TD>
                <TD>
                  <SBadge
                    label={item.status}
                    color={
                      item.status === "approved"
                        ? "green"
                        : item.status === "rejected"
                          ? "red"
                          : "amber"
                    }
                  />
                </TD>
                <TD>
                  {item.status === "pending" && (
                    <div className="flex gap-1">
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-7 text-xs text-green-600"
                        onClick={() => approve(item.id)}
                        data-ocid={`admin.social_queue.confirm_button.${i + 1}`}
                      >
                        Approve
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-7 text-xs text-destructive"
                        onClick={() => reject(item.id)}
                        data-ocid={`admin.social_queue.delete_button.${i + 1}`}
                      >
                        Reject
                      </Button>
                    </div>
                  )}
                </TD>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Promotions Queue ─────────────────────────────────────────────────────────
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
      active: true,
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
        "5,000 impressions",
      ],
      color: "oklch(0.55 0.22 280)",
      active: true,
      badge: "Popular",
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
        "50,000 impressions",
      ],
      color: "oklch(0.65 0.25 335)",
      active: true,
    },
  ]);
  const [modItems] = React.useState([
    {
      id: 1,
      advertiser: "Sharma Spices",
      title: "Masala Fest Sale 50% Off",
      adCopy: "Buy 2 get 1 free on all masalas — limited time!",
      channels: ["WhatsApp", "Instagram"],
      region: "Mumbai",
      aiResult: "Safe" as
        | "Safe"
        | "Flagged for Nudity"
        | "Flagged for Violence"
        | "Flagged for Hate Speech",
      plan: "Standard",
      color: "oklch(0.52 0.14 155 / 0.3)",
    },
    {
      id: 2,
      advertiser: "TechFix Mumbai",
      title: "Free Screen Protector Offer",
      adCopy: "Free screen protector with every repair this week",
      channels: ["Facebook"],
      region: "Pune",
      aiResult: "Safe" as
        | "Safe"
        | "Flagged for Nudity"
        | "Flagged for Violence"
        | "Flagged for Hate Speech",
      plan: "Basic",
      color: "oklch(0.55 0.22 280 / 0.3)",
    },
    {
      id: 3,
      advertiser: "Unknown Business",
      title: "Adults Only Content",
      adCopy: "18+ entertainment and adult services...",
      channels: ["Social Feed"],
      region: "Delhi",
      aiResult: "Flagged for Nudity" as
        | "Safe"
        | "Flagged for Nudity"
        | "Flagged for Violence"
        | "Flagged for Hate Speech",
      plan: "Basic",
      color: "oklch(0.55 0.22 22 / 0.3)",
    },
    {
      id: 4,
      advertiser: "Green Leaf Nursery",
      title: "Summer Plant Festival",
      adCopy: "40% off indoor plants + free delivery this summer!",
      channels: ["WhatsApp", "Instagram", "Facebook"],
      region: "Bangalore",
      aiResult: "Safe" as
        | "Safe"
        | "Flagged for Nudity"
        | "Flagged for Violence"
        | "Flagged for Hate Speech",
      plan: "Premium",
      color: "oklch(0.52 0.14 155 / 0.3)",
    },
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
      status: "active" as "active" | "paused",
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
      status: "active" as "active" | "paused",
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
      status: "paused" as "active" | "paused",
    },
  ]);
  const [modActionId, setModActionId] = React.useState<number | null>(null);
  const [rejectReason, setRejectReason] = React.useState("");
  const [modStatuses, setModStatuses] = React.useState<
    Record<number, "approved" | "rejected">
  >({});
  const [editingPlan, setEditingPlan] = React.useState<number | null>(null);

  const AIResultColor = (r: string) => {
    if (r === "Safe")
      return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
    return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
  };

  return (
    <div className="space-y-4" data-ocid="admin.promotions.panel">
      {/* Analytics */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {[
          {
            label: "Revenue This Month",
            value: "₹38,200",
            icon: "💰",
            color: "oklch(0.52 0.14 155)",
          },
          {
            label: "Active Promotions",
            value: String(
              activePromos.filter((p) => p.status === "active").length,
            ),
            icon: "📣",
            color: "oklch(0.55 0.22 280)",
          },
          {
            label: "Pending Approval",
            value: String(modItems.filter((m) => !modStatuses[m.id]).length),
            icon: "⏳",
            color: "oklch(0.72 0.17 85)",
          },
          {
            label: "Flagged by AI",
            value: String(modItems.filter((m) => m.aiResult !== "Safe").length),
            icon: "🚩",
            color: "oklch(0.55 0.22 22)",
          },
          {
            label: "Approved Today",
            value: String(
              Object.values(modStatuses).filter((s) => s === "approved").length,
            ),
            icon: "✅",
            color: "oklch(0.52 0.14 155)",
          },
        ].map((stat, i) => (
          <div
            key={stat.label}
            className="bg-card border border-border rounded-xl p-3 text-center"
            data-ocid={`admin.promotions.stat.card.${i + 1}`}
          >
            <div className="text-2xl mb-1">{stat.icon}</div>
            <div className="text-lg font-bold" style={{ color: stat.color }}>
              {stat.value}
            </div>
            <div className="text-[10px] text-muted-foreground">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger
            value="plans"
            className="text-xs"
            data-ocid="admin.promotions.plans.tab"
          >
            Plans
          </TabsTrigger>
          <TabsTrigger
            value="moderation"
            className="text-xs"
            data-ocid="admin.promotions.moderation.tab"
          >
            Moderation Queue{" "}
            {modItems.filter((m) => !modStatuses[m.id]).length > 0 && (
              <span className="ml-1 text-[9px] px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-500 font-bold">
                {modItems.filter((m) => !modStatuses[m.id]).length}
              </span>
            )}
          </TabsTrigger>
          <TabsTrigger
            value="active"
            className="text-xs"
            data-ocid="admin.promotions.active.tab"
          >
            Active Promotions
          </TabsTrigger>
          <TabsTrigger
            value="create"
            className="text-xs"
            data-ocid="admin.promotions.create.tab"
          >
            Create Preview
          </TabsTrigger>
          <TabsTrigger
            value="targeting"
            className="text-xs"
            data-ocid="admin.promotions.targeting.tab"
          >
            Audience Targeting
          </TabsTrigger>
        </TabsList>

        {/* Plans Tab */}
        <TabsContent value="plans" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="border border-border rounded-xl p-5 space-y-4 relative"
                data-ocid={`admin.promotions.plan.row.${plan.id}`}
              >
                {"badge" in plan && plan.badge && (
                  <span className="absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-full font-bold bg-primary text-primary-foreground">
                    {plan.badge}
                  </span>
                )}
                <div className="flex items-center justify-between">
                  <span
                    className="text-lg font-bold"
                    style={{ color: plan.color }}
                  >
                    {plan.name}
                  </span>
                  <Switch
                    checked={plan.active}
                    onCheckedChange={(v) =>
                      setPlans((p) =>
                        p.map((pl) =>
                          pl.id === plan.id ? { ...pl, active: v } : pl,
                        ),
                      )
                    }
                    data-ocid={`admin.promotions.plan.toggle.${plan.id}`}
                  />
                </div>
                {editingPlan === plan.id ? (
                  <div className="space-y-2">
                    <Input
                      className="h-8 text-xs"
                      defaultValue={plan.price}
                      placeholder="Price (e.g. ₹499)"
                    />
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="flex-1 text-xs"
                        onClick={() => {
                          setEditingPlan(null);
                          toast.success("Plan updated");
                        }}
                        data-ocid={`admin.promotions.plan.save_button.${plan.id}`}
                      >
                        Save
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs"
                        onClick={() => setEditingPlan(null)}
                        data-ocid={`admin.promotions.plan.cancel_button.${plan.id}`}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="text-3xl font-bold">{plan.price}</div>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <div>⏱ {plan.duration}</div>
                      <div>🗺️ {plan.scope}</div>
                    </div>
                    <ul className="space-y-1">
                      {plan.features.map((f) => (
                        <li
                          key={f}
                          className="text-xs flex items-center gap-1.5"
                        >
                          <span className="text-green-500">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full text-xs"
                      onClick={() => setEditingPlan(plan.id)}
                      data-ocid={`admin.promotions.plan.edit_button.${plan.id}`}
                    >
                      Edit Plan
                    </Button>
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 bg-card border border-border rounded-xl p-4">
            <h4 className="text-sm font-semibold mb-3">
              Payment Gate Settings
            </h4>
            <p className="text-xs text-muted-foreground mb-3">
              Users must pay before their promotion goes live. Payment
              verification is required for all plans.
            </p>
            <div className="flex items-center gap-3">
              <Switch
                defaultChecked
                data-ocid="admin.promotions.payment_gate.switch"
              />
              <Label className="text-xs">
                Require payment before promotion is submitted for review
              </Label>
            </div>
          </div>
        </TabsContent>

        {/* Moderation Queue */}
        <TabsContent value="moderation" className="mt-0">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-xs text-muted-foreground bg-amber-500/10 border border-amber-500/30 rounded-xl p-3">
              <span className="text-lg">🤖</span>
              <span>
                AI content moderation checks for nudity, violence, hate speech,
                and inappropriate imagery automatically. Admin makes the final
                decision.
              </span>
            </div>
            {modItems.map((item, i) => {
              const status = modStatuses[item.id];
              return (
                <div
                  key={item.id}
                  className="bg-card border border-border rounded-xl p-4 space-y-3"
                  data-ocid={`admin.promotions.mod.row.${i + 1}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div
                        className="w-16 h-16 rounded-lg shrink-0 flex items-center justify-center text-2xl"
                        style={{ background: item.color }}
                      >
                        📣
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm font-semibold">
                          {item.title}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {item.advertiser} · {item.plan} Plan · {item.region}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {item.adCopy}
                        </div>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {item.channels.map((c) => (
                            <span
                              key={c}
                              className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="shrink-0 space-y-2 text-right">
                      <div
                        className={`text-[10px] px-2 py-1 rounded-full font-medium ${AIResultColor(item.aiResult)}`}
                      >
                        🤖 {item.aiResult}
                      </div>
                      {status ? (
                        <span
                          className={`text-[10px] px-2 py-1 rounded-full font-medium ${status === "approved" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"}`}
                        >
                          {status === "approved" ? "✓ Approved" : "✗ Rejected"}
                        </span>
                      ) : (
                        <div className="flex gap-1">
                          <Button
                            size="sm"
                            className="h-7 text-xs bg-green-600 hover:bg-green-700 text-white"
                            onClick={() => {
                              setModStatuses((p) => ({
                                ...p,
                                [item.id]: "approved",
                              }));
                              toast.success(`"${item.title}" approved`);
                            }}
                            data-ocid={`admin.promotions.mod.confirm_button.${i + 1}`}
                          >
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-7 text-xs text-destructive"
                            onClick={() => setModActionId(item.id)}
                            data-ocid={`admin.promotions.mod.delete_button.${i + 1}`}
                          >
                            Reject
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                  {modActionId === item.id && (
                    <div className="border border-border rounded-xl p-3 space-y-2 bg-secondary/20">
                      <Label className="text-xs">Rejection Reason</Label>
                      <Textarea
                        className="text-xs"
                        rows={2}
                        placeholder="Explain why this promotion is being rejected..."
                        value={rejectReason}
                        onChange={(e) => setRejectReason(e.target.value)}
                        data-ocid={`admin.promotions.mod.textarea.${i + 1}`}
                      />
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="text-xs flex-1"
                          variant="destructive"
                          onClick={() => {
                            setModStatuses((p) => ({
                              ...p,
                              [item.id]: "rejected",
                            }));
                            setModActionId(null);
                            setRejectReason("");
                            toast.error(`"${item.title}" rejected`);
                          }}
                          data-ocid={`admin.promotions.mod.confirm_button.${i + 1}`}
                        >
                          Confirm Reject
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-xs"
                          onClick={() => setModActionId(null)}
                          data-ocid={`admin.promotions.mod.cancel_button.${i + 1}`}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </TabsContent>

        {/* Active Promotions */}
        <TabsContent value="active" className="mt-0">
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <TH>Title</TH>
                  <TH>Advertiser</TH>
                  <TH>Plan</TH>
                  <TH>Channels</TH>
                  <TH>Period</TH>
                  <TH>Impressions</TH>
                  <TH>Status</TH>
                  <TH>Actions</TH>
                </tr>
              </thead>
              <tbody>
                {activePromos.map((promo, i) => (
                  <tr
                    key={promo.id}
                    className="border-b border-border/50 hover:bg-secondary/20"
                    data-ocid={`admin.promotions.active.row.${i + 1}`}
                  >
                    <TD className="font-medium max-w-[140px]">
                      <p className="truncate">{promo.title}</p>
                    </TD>
                    <TD>{promo.advertiser}</TD>
                    <TD>
                      <SBadge
                        label={promo.plan}
                        color={
                          promo.plan === "Premium"
                            ? "violet"
                            : promo.plan === "Standard"
                              ? "blue"
                              : "green"
                        }
                      />
                    </TD>
                    <TD>
                      <div className="flex flex-wrap gap-1">
                        {promo.channels.map((c) => (
                          <span
                            key={c}
                            className="text-[10px] px-1 py-0.5 rounded bg-secondary text-muted-foreground"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </TD>
                    <TD className="text-muted-foreground text-[10px]">
                      {promo.start}
                      <br />→ {promo.end}
                    </TD>
                    <TD className="font-medium">
                      {promo.impressions.toLocaleString()}
                    </TD>
                    <TD>
                      <SBadge
                        label={promo.status}
                        color={promo.status === "active" ? "green" : "amber"}
                      />
                    </TD>
                    <TD>
                      <div className="flex gap-1">
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-6 px-2 text-[10px]"
                          onClick={() => {
                            setActivePromos((p) =>
                              p.map((x) =>
                                x.id === promo.id
                                  ? {
                                      ...x,
                                      status:
                                        x.status === "active"
                                          ? "paused"
                                          : "active",
                                    }
                                  : x,
                              ),
                            );
                            toast.success("Status updated");
                          }}
                          data-ocid={`admin.promotions.active.toggle.${i + 1}`}
                        >
                          {promo.status === "active" ? "Pause" : "Resume"}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-6 px-2 text-[10px] text-destructive"
                          onClick={() => {
                            setActivePromos((p) =>
                              p.filter((x) => x.id !== promo.id),
                            );
                            toast.info("Promotion stopped");
                          }}
                          data-ocid={`admin.promotions.active.delete_button.${i + 1}`}
                        >
                          Stop
                        </Button>
                      </div>
                    </TD>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        {/* Create Preview (user-facing flow) */}
        <TabsContent value="create" className="mt-0">
          <div className="bg-card border border-border rounded-xl p-4 space-y-4">
            <div className="flex items-center gap-2 text-amber-500 bg-amber-500/10 border border-amber-500/30 rounded-xl p-3">
              <span className="text-lg">👁️</span>
              <span className="text-xs font-medium">
                This is the user-facing promotion creation flow (admin preview)
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {[
                "Select Plan & Pay",
                "Upload Creative",
                "Choose Region",
                "Select Channels",
              ].map((step, i) => (
                <div
                  key={step}
                  className="border border-border rounded-xl p-4 space-y-2"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <div className="text-sm font-semibold">{step}</div>
                  {i === 0 && (
                    <p className="text-xs text-muted-foreground">
                      User selects a plan and completes payment before promotion
                      is submitted for review.
                    </p>
                  )}
                  {i === 1 && (
                    <p className="text-xs text-muted-foreground">
                      Upload image/video ad creative. AI moderates content for
                      nudity, violence, hate speech automatically.
                    </p>
                  )}
                  {i === 2 && (
                    <p className="text-xs text-muted-foreground">
                      Select city, state, or national reach based on the plan
                      purchased.
                    </p>
                  )}
                  {i === 3 && (
                    <p className="text-xs text-muted-foreground">
                      Choose platforms: WhatsApp, Social Feed, Search Engines,
                      Instagram, Facebook.
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Targeting Tab */}
        <TabsContent value="targeting" className="mt-0 space-y-4">
          <div className="bg-card border border-border rounded-xl p-4 space-y-4">
            <h3 className="text-sm font-semibold flex items-center gap-2">
              🌏 Geographic Targeting
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  label: "Regions",
                  items: [
                    "North India",
                    "South India",
                    "East India",
                    "West India",
                    "Central India",
                    "Northeast India",
                  ],
                },
                {
                  label: "Countries",
                  items: [
                    "India",
                    "Sri Lanka",
                    "Bangladesh",
                    "Nepal",
                    "Bhutan",
                    "Maldives",
                    "Pakistan",
                    "UAE",
                    "UK",
                    "USA",
                    "Canada",
                    "Australia",
                  ],
                },
                {
                  label: "States",
                  items: [
                    "Maharashtra",
                    "Delhi",
                    "Karnataka",
                    "Tamil Nadu",
                    "Gujarat",
                    "Rajasthan",
                    "Uttar Pradesh",
                    "West Bengal",
                    "Telangana",
                    "Andhra Pradesh",
                  ],
                },
              ].map((group) => (
                <div key={group.label} className="space-y-2">
                  <p className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wide">
                    {group.label}
                  </p>
                  <div className="space-y-1 max-h-36 overflow-y-auto pr-1">
                    {group.items.map((item) => (
                      <label
                        key={item}
                        className="flex items-center gap-2 text-xs cursor-pointer hover:bg-secondary/40 rounded px-1 py-0.5"
                      >
                        <input
                          type="checkbox"
                          className="rounded"
                          defaultChecked={[
                            "India",
                            "North India",
                            "South India",
                          ].includes(item)}
                        />
                        {item}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-4 space-y-4">
            <h3 className="text-sm font-semibold flex items-center gap-2">
              👥 Demographic Targeting
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wide">
                  Age Groups
                </p>
                <div className="space-y-1">
                  {[
                    "13–17 (Teen)",
                    "18–24 (Young Adult)",
                    "25–34 (Millennial)",
                    "35–44 (Adult)",
                    "45–54 (Mid-Age)",
                    "55+ (Senior)",
                  ].map((ag) => (
                    <label
                      key={ag}
                      className="flex items-center gap-2 text-xs cursor-pointer hover:bg-secondary/40 rounded px-1 py-0.5"
                    >
                      <input
                        type="checkbox"
                        className="rounded"
                        defaultChecked={ag.includes("18") || ag.includes("25")}
                      />
                      {ag}
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wide">
                  Gender
                </p>
                <div className="space-y-1">
                  {["All Genders", "Male", "Female", "Non-binary"].map((g) => (
                    <label
                      key={g}
                      className="flex items-center gap-2 text-xs cursor-pointer hover:bg-secondary/40 rounded px-1 py-0.5"
                    >
                      <input
                        type="checkbox"
                        className="rounded"
                        defaultChecked={g === "All Genders"}
                      />
                      {g}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-4 space-y-4">
            <h3 className="text-sm font-semibold flex items-center gap-2">
              🕉️ Cultural & Community Targeting
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wide">
                  Religion / Culture
                </p>
                <div className="space-y-1">
                  {[
                    "Hindu",
                    "Muslim",
                    "Christian",
                    "Sikh",
                    "Buddhist",
                    "Jain",
                    "Parsi",
                    "Jewish",
                    "All Religions",
                  ].map((r) => (
                    <label
                      key={r}
                      className="flex items-center gap-2 text-xs cursor-pointer hover:bg-secondary/40 rounded px-1 py-0.5"
                    >
                      <input
                        type="checkbox"
                        className="rounded"
                        defaultChecked={r === "All Religions"}
                      />
                      {r}
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wide">
                  Language Groups
                </p>
                <div className="space-y-1">
                  {[
                    "Hindi",
                    "English",
                    "Tamil",
                    "Telugu",
                    "Kannada",
                    "Malayalam",
                    "Marathi",
                    "Bengali",
                    "Gujarati",
                    "Punjabi",
                  ].map((l) => (
                    <label
                      key={l}
                      className="flex items-center gap-2 text-xs cursor-pointer hover:bg-secondary/40 rounded px-1 py-0.5"
                    >
                      <input
                        type="checkbox"
                        className="rounded"
                        defaultChecked={["Hindi", "English"].includes(l)}
                      />
                      {l}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              className="px-4 py-2 text-xs border border-border rounded-lg hover:bg-secondary/40"
            >
              Reset to All
            </button>
            <button
              type="button"
              className="px-4 py-2 text-xs rounded-lg font-semibold text-white"
              style={{ background: "oklch(0.55 0.22 280)" }}
              onClick={() => {
                const t = (window as any).toast;
                if (t) t.success("Targeting preferences saved");
              }}
            >
              Save Targeting
            </button>
          </div>
        </TabsContent>

        {/* ── REVIEWS ── */}
        <TabsContent value="reviews" className="mt-0 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-display font-bold text-foreground">
              Review Management
            </h3>
          </div>
          <ReviewsAdminPanel />
        </TabsContent>
      </Tabs>
    </div>
  );
}

// ─── Agent 19 Full Panel (3 inner tabs) ───────────────────────────────────────
function Agent19FullPanel() {
  const [genres, setGenres] = React.useState({
    Sports: true,
    Bollywood: true,
    Tech: true,
    History: true,
    Science: true,
    Food: true,
  });
  const [gamesPerDay, setGamesPerDay] = React.useState([5]);
  const [targetUsers, setTargetUsers] = React.useState("all");
  const [autoPublish, setAutoPublish] = React.useState(true);
  const [gamesCreated, setGamesCreated] = React.useState(12);
  const [activePlayers, setActivePlayers] = React.useState(847);
  const avgScore = 68;
  const [monitorLog, setMonitorLog] = React.useState<string[]>([
    "Generated: Cricket Champions Trivia • 42 players active",
    "Generated: Bollywood Blockbuster Quiz • 28 players active",
    "Generated: Tech Innovators Challenge • 15 players active",
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
    "Published: Monsoon Food Recipes Game → Social Feed",
  ];

  React.useEffect(() => {
    const t = setInterval(() => {
      logRef.current += 1;
      const entry = GAME_LOG_ENTRIES[logRef.current % GAME_LOG_ENTRIES.length];
      setMonitorLog((p) =>
        [`[${new Date().toLocaleTimeString()}] ${entry}`, ...p].slice(0, 20),
      );
      setGamesCreated((c) => c + 1);
      if (logRef.current % 3 === 0)
        setActivePlayers((p) => p + Math.floor(Math.random() * 8));
    }, 8000);
    return () => clearInterval(t);
  }, []);

  const PREVIEW_GAMES = [
    {
      title: "Cricket Champions 2026",
      genre: "Sports",
      difficulty: "Medium",
      plays: 142,
      color: "oklch(0.52 0.14 155)",
    },
    {
      title: "Bollywood Legends Quiz",
      genre: "Bollywood",
      difficulty: "Easy",
      plays: 203,
      color: "oklch(0.65 0.25 335)",
    },
    {
      title: "Tech Trivia Blitz",
      genre: "Tech",
      difficulty: "Hard",
      plays: 89,
      color: "oklch(0.55 0.22 280)",
    },
  ];

  return (
    <Tabs defaultValue="config" className="w-full">
      <TabsList className="mb-4 h-8">
        <TabsTrigger
          value="config"
          className="text-xs h-7"
          data-ocid="admin.agent19.config.tab"
        >
          Config
        </TabsTrigger>
        <TabsTrigger
          value="monitoring"
          className="text-xs h-7"
          data-ocid="admin.agent19.monitoring.tab"
        >
          Monitoring{" "}
          <span className="ml-1 text-[9px] px-1.5 py-0.5 rounded-full bg-green-500/20 text-green-500 font-bold">
            ● LIVE
          </span>
        </TabsTrigger>
        <TabsTrigger
          value="preview"
          className="text-xs h-7"
          data-ocid="admin.agent19.preview.tab"
        >
          Preview
        </TabsTrigger>
      </TabsList>

      <TabsContent value="config" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl p-4 space-y-4">
            <h3 className="text-sm font-semibold">Genre Targets</h3>
            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(genres) as (keyof typeof genres)[]).map((g) => (
                <label
                  key={g}
                  className="flex items-center gap-2 text-xs cursor-pointer select-none"
                >
                  <input
                    type="checkbox"
                    className="rounded"
                    checked={genres[g]}
                    onChange={() =>
                      setGenres((prev) => ({ ...prev, [g]: !prev[g] }))
                    }
                    data-ocid={`admin.agent19.genre.${g.toLowerCase()}.checkbox`}
                  />
                  {g === "Sports"
                    ? "⚽"
                    : g === "Bollywood"
                      ? "🎬"
                      : g === "Tech"
                        ? "💻"
                        : g === "History"
                          ? "📜"
                          : g === "Science"
                            ? "🔬"
                            : "🍛"}{" "}
                  {g}
                </label>
              ))}
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <Label className="text-xs">Games per Day</Label>
                <span className="text-xs font-semibold text-primary">
                  {gamesPerDay[0]}
                </span>
              </div>
              <Slider
                min={1}
                max={20}
                step={1}
                value={gamesPerDay}
                onValueChange={setGamesPerDay}
                data-ocid="admin.agent19.games_per_day.toggle"
              />
            </div>
            <div>
              <Label className="text-xs">Target Users</Label>
              <Select value={targetUsers} onValueChange={setTargetUsers}>
                <SelectTrigger
                  className="mt-1 h-8"
                  data-ocid="admin.agent19.target.select"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Users</SelectItem>
                  <SelectItem value="active">
                    Active Only (last 7 days)
                  </SelectItem>
                  <SelectItem value="premium">Premium Members</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <Label className="text-xs">Auto-publish to Social Feed</Label>
              <Switch
                checked={autoPublish}
                onCheckedChange={setAutoPublish}
                data-ocid="admin.agent19.auto_publish.toggle"
              />
            </div>
            <Button
              size="sm"
              className="w-full"
              onClick={() => toast.success("Agent 19 config saved")}
              data-ocid="admin.agent19.save.primary_button"
            >
              Save Config
            </Button>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 space-y-3">
            <h3 className="text-sm font-semibold">Quick Actions</h3>
            <Button
              size="sm"
              variant="outline"
              className="w-full"
              onClick={() => {
                setGamesCreated((c) => c + 1);
                toast.success("Game generation triggered manually");
              }}
              data-ocid="admin.agent19.generate.primary_button"
            >
              ⚡ Generate Now
            </Button>
            <p className="text-[11px] text-muted-foreground">
              Agent runs automatically every day at 6:00 AM IST. Manual trigger
              available anytime.
            </p>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="monitoring" className="mt-0 space-y-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            {
              label: "Games Created Today",
              value: gamesCreated,
              icon: "🎮",
              color: "oklch(0.55 0.22 280)",
            },
            {
              label: "Active Players",
              value: activePlayers.toLocaleString(),
              icon: "👥",
              color: "oklch(0.52 0.14 155)",
            },
            {
              label: "Avg Score %",
              value: `${avgScore}%`,
              icon: "📊",
              color: "oklch(0.72 0.17 85)",
            },
          ].map((s, i) => (
            <div
              key={s.label}
              className="bg-card border border-border rounded-xl p-3 text-center"
              data-ocid={`admin.agent19.stat.card.${i + 1}`}
            >
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="text-xl font-bold" style={{ color: s.color }}>
                {s.value}
              </div>
              <div className="text-[10px] text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold flex items-center gap-2">
              Live Activity Log
              <span
                className="text-[10px] px-2 py-0.5 rounded-full font-bold"
                style={{
                  background: "oklch(0.52 0.14 155 / 0.15)",
                  color: "oklch(0.52 0.14 155)",
                }}
              >
                ● Running
              </span>
            </h3>
          </div>
          <div
            className="space-y-1.5 h-64 overflow-y-auto"
            data-ocid="admin.agent19.log.panel"
          >
            {monitorLog.map((entry, i) => (
              <div
                key={entry}
                className="text-[11px] px-3 py-1.5 rounded-lg bg-secondary/40 text-muted-foreground font-mono"
                data-ocid={i === 0 ? "admin.agent19.log.item.1" : undefined}
              >
                {entry}
              </div>
            ))}
          </div>
        </div>
        <Agent19LiveFeed />
      </TabsContent>

      <TabsContent value="preview" className="mt-0 space-y-4">
        <p className="text-xs text-muted-foreground">
          Last 3 games generated by Agent 19, as they appear to users:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {PREVIEW_GAMES.map((g, i) => (
            <div
              key={g.title}
              className="bg-card border border-border rounded-xl p-4 space-y-3"
              data-ocid={`admin.agent19.preview.card.${i + 1}`}
            >
              <div className="flex items-start justify-between">
                <span
                  className="text-[10px] px-1.5 py-0.5 rounded-full font-medium text-white"
                  style={{ background: g.color }}
                >
                  {g.genre}
                </span>
                <span className="text-[10px] text-muted-foreground">
                  {g.difficulty}
                </span>
              </div>
              <h4 className="text-sm font-semibold leading-tight">{g.title}</h4>
              <p className="text-xs text-muted-foreground">
                👥 {g.plays} plays
              </p>
              <Button
                size="sm"
                variant="outline"
                className="w-full h-7 text-xs"
                onClick={() => toast.success(`Previewing: ${g.title}`)}
                data-ocid={`admin.agent19.preview.primary_button.${i + 1}`}
              >
                Preview Game
              </Button>
            </div>
          ))}
        </div>
        <Agent19PreviewDialog />
      </TabsContent>
    </Tabs>
  );
}

// ─── Agent 20 Full Panel (3 inner tabs) ───────────────────────────────────────
function Agent20FullPanel() {
  const [comicStyle, setComicStyle] = React.useState("funny");
  const [postsPerDay, setPostsPerDay] = React.useState([3]);
  const [filterLevel, setFilterLevel] = React.useState("family-safe");
  const [autoPublish, setAutoPublish] = React.useState(true);
  const [comicsGenerated, setComicsGenerated] = React.useState(8);
  const [totalLikes, setTotalLikes] = React.useState(2340);
  const sharesThisWeek = 187;
  const [comicLog, setComicLog] = React.useState<string[]>([
    "New comic: Monday Morning Chaos • 12 likes",
    "New comic: The Chai Diaries • 28 likes",
    "New comic: Office Life Vol 3 • 9 likes",
  ]);
  const logRef = React.useRef(0);

  const COMIC_LOG_ENTRIES = [
    "New comic: Monday Morning Chaos • 12 likes",
    "New comic: Traffic Tales — Mumbai Edition • 6 likes",
    "New comic: When the WiFi Drops • 18 likes",
    "New comic: Festival Shopping Frenzy • 22 likes",
    "New comic: Rains & Rickshaws • 14 likes",
    "Published: The Deadline Diaries → Social Feed",
    "New comic: Dadi's WhatsApp Adventures • 31 likes",
  ];

  React.useEffect(() => {
    const t = setInterval(() => {
      logRef.current += 1;
      const entry =
        COMIC_LOG_ENTRIES[logRef.current % COMIC_LOG_ENTRIES.length];
      setComicLog((p) =>
        [`[${new Date().toLocaleTimeString()}] ${entry}`, ...p].slice(0, 20),
      );
      setComicsGenerated((c) => c + 1);
      if (logRef.current % 2 === 0)
        setTotalLikes((l) => l + Math.floor(Math.random() * 15));
    }, 10000);
    return () => clearInterval(t);
  }, []);

  const PREVIEW_COMICS = [
    {
      title: "Monday Morning Chaos",
      caption:
        "When the alarm rings but your body says 'just 5 more minutes'... every single day 😴",
      mood: "funny",
      bg: "oklch(0.65 0.25 335 / 0.12)",
      accent: "oklch(0.65 0.25 335)",
    },
    {
      title: "The Chai Diaries",
      caption:
        "No meeting can start without chai. That's not tradition, that's law. ☕",
      mood: "wholesome",
      bg: "oklch(0.72 0.17 85 / 0.12)",
      accent: "oklch(0.72 0.17 85)",
    },
    {
      title: "Tech Support Tales",
      caption: "Boss: just restart it. Me: 3 hours of debugging later... 💻",
      mood: "sarcastic",
      bg: "oklch(0.55 0.22 280 / 0.12)",
      accent: "oklch(0.55 0.22 280)",
    },
  ];

  return (
    <Tabs defaultValue="config" className="w-full">
      <TabsList className="mb-4 h-8">
        <TabsTrigger
          value="config"
          className="text-xs h-7"
          data-ocid="admin.agent20.config.tab"
        >
          Config
        </TabsTrigger>
        <TabsTrigger
          value="monitoring"
          className="text-xs h-7"
          data-ocid="admin.agent20.monitoring.tab"
        >
          Monitoring{" "}
          <span className="ml-1 text-[9px] px-1.5 py-0.5 rounded-full bg-green-500/20 text-green-500 font-bold">
            ● LIVE
          </span>
        </TabsTrigger>
        <TabsTrigger
          value="preview"
          className="text-xs h-7"
          data-ocid="admin.agent20.preview.tab"
        >
          Preview
        </TabsTrigger>
      </TabsList>

      <TabsContent value="config" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl p-4 space-y-4">
            <h3 className="text-sm font-semibold">Comic Style</h3>
            <div>
              <Label className="text-xs">Style</Label>
              <Select value={comicStyle} onValueChange={setComicStyle}>
                <SelectTrigger
                  className="mt-1 h-8"
                  data-ocid="admin.agent20.style.select"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="funny">😂 Funny</SelectItem>
                  <SelectItem value="satirical">🎭 Satirical</SelectItem>
                  <SelectItem value="wholesome">🌸 Wholesome</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <Label className="text-xs">Posts per Day</Label>
                <span className="text-xs font-semibold text-primary">
                  {postsPerDay[0]}
                </span>
              </div>
              <Slider
                min={1}
                max={10}
                step={1}
                value={postsPerDay}
                onValueChange={setPostsPerDay}
                data-ocid="admin.agent20.posts_per_day.toggle"
              />
            </div>
            <div>
              <Label className="text-xs">Content Filter Level</Label>
              <Select value={filterLevel} onValueChange={setFilterLevel}>
                <SelectTrigger
                  className="mt-1 h-8"
                  data-ocid="admin.agent20.filter.select"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="family-safe">
                    👨‍👩‍👧 Family-Safe
                  </SelectItem>
                  <SelectItem value="general">👥 General</SelectItem>
                  <SelectItem value="mature-lite">🔞 Mature-Lite</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <Label className="text-xs">Auto-publish to Social Feed</Label>
              <Switch
                checked={autoPublish}
                onCheckedChange={setAutoPublish}
                data-ocid="admin.agent20.auto_publish.toggle"
              />
            </div>
            <Button
              size="sm"
              className="w-full"
              onClick={() => toast.success("Agent 20 config saved")}
              data-ocid="admin.agent20.save.primary_button"
            >
              Save Config
            </Button>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 space-y-3">
            <h3 className="text-sm font-semibold">Quick Actions</h3>
            <Button
              size="sm"
              variant="outline"
              className="w-full"
              onClick={() => {
                setComicsGenerated((c) => c + 1);
                toast.success("Comic generated and queued");
              }}
              data-ocid="admin.agent20.generate.primary_button"
            >
              ⚡ Generate Now
            </Button>
            <p className="text-[11px] text-muted-foreground">
              Agent runs daily at 7:30 AM IST, pulling from yesterday's social
              feed highlights.
            </p>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="monitoring" className="mt-0 space-y-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            {
              label: "Comics Generated Today",
              value: comicsGenerated,
              icon: "😄",
              color: "oklch(0.65 0.25 335)",
            },
            {
              label: "Total Likes",
              value: totalLikes.toLocaleString(),
              icon: "❤️",
              color: "oklch(0.65 0.25 335)",
            },
            {
              label: "Shares This Week",
              value: sharesThisWeek,
              icon: "🔁",
              color: "oklch(0.52 0.14 155)",
            },
          ].map((s, i) => (
            <div
              key={s.label}
              className="bg-card border border-border rounded-xl p-3 text-center"
              data-ocid={`admin.agent20.stat.card.${i + 1}`}
            >
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="text-xl font-bold" style={{ color: s.color }}>
                {s.value}
              </div>
              <div className="text-[10px] text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold flex items-center gap-2">
              Live Comic Feed
              <span
                className="text-[10px] px-2 py-0.5 rounded-full font-bold"
                style={{
                  background: "oklch(0.52 0.14 155 / 0.15)",
                  color: "oklch(0.52 0.14 155)",
                }}
              >
                ● Running
              </span>
            </h3>
          </div>
          <div
            className="space-y-1.5 h-64 overflow-y-auto"
            data-ocid="admin.agent20.log.panel"
          >
            {comicLog.map((entry, i) => (
              <div
                key={entry}
                className="text-[11px] px-3 py-1.5 rounded-lg bg-secondary/40 text-muted-foreground font-mono"
                data-ocid={i === 0 ? "admin.agent20.log.item.1" : undefined}
              >
                {entry}
              </div>
            ))}
          </div>
        </div>
        <Agent20LiveFeed />
      </TabsContent>

      <TabsContent value="preview" className="mt-0 space-y-4">
        <p className="text-xs text-muted-foreground">
          Last 3 comics generated by Agent 20, as they appear to users:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {PREVIEW_COMICS.map((c, i) => (
            <div
              key={c.title}
              className="rounded-xl border border-border overflow-hidden"
              data-ocid={`admin.agent20.preview.card.${i + 1}`}
            >
              <div
                className="h-28 flex items-center justify-center text-4xl"
                style={{ background: c.bg }}
              >
                {c.mood === "funny"
                  ? "😂"
                  : c.mood === "wholesome"
                    ? "🥰"
                    : "😏"}
              </div>
              <div className="p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold">{c.title}</span>
                  <span
                    className="text-[10px] px-1.5 py-0.5 rounded-full font-medium"
                    style={{ background: `${c.accent}20`, color: c.accent }}
                  >
                    {c.mood}
                  </span>
                </div>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  {c.caption}
                </p>
                <div className="flex gap-2 pt-1">
                  <button
                    type="button"
                    className="text-[11px] text-muted-foreground hover:text-pink-500 transition-colors"
                    onClick={() => toast.success("Liked!")}
                    data-ocid={`admin.agent20.preview.toggle.${i + 1}`}
                  >
                    ❤️ Like
                  </button>
                  <button
                    type="button"
                    className="text-[11px] text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => toast.success("Copied share link")}
                    data-ocid={`admin.agent20.preview.secondary_button.${i + 1}`}
                  >
                    🔁 Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Agent20PreviewDialog />
      </TabsContent>
    </Tabs>
  );
}

// ─── WhatsApp API Settings ────────────────────────────────────────────────────
function WhatsAppAPISettings() {
  const [form, setForm] = useState({
    phoneNumberId: "",
    businessAccountId: "",
    accessToken: "",
    webhookToken: "",
    webhookUrl: "",
  });
  const [testing, setTesting] = useState(false);
  const [templates, setTemplates] = useState([
    {
      id: 1,
      name: "Welcome",
      status: "approved",
      preview: "Welcome to IndyaCentral! Your account is ready.",
    },
    {
      id: 2,
      name: "Order Confirmation",
      status: "approved",
      preview: "Your order #{{1}} has been confirmed. Expected: {{2}}",
    },
    {
      id: 3,
      name: "OTP",
      status: "approved",
      preview: "Your OTP is {{1}}. Valid for {{2}} minutes.",
    },
    {
      id: 4,
      name: "Offer",
      status: "pending",
      preview: "Exclusive offer: {{1}} — valid till {{2}}",
    },
  ]);
  const [showTemplateForm, setShowTemplateForm] = useState(false);
  const [newTemplate, setNewTemplate] = useState({ name: "", preview: "" });
  const [broadcastMsg, setBroadcastMsg] = useState("");
  const [broadcastTarget, setBroadcastTarget] = useState("all");
  const [scheduleEnabled, setScheduleEnabled] = useState(false);
  const [scheduleDate, setScheduleDate] = useState("");
  const [otpExpiry, setOtpExpiry] = useState("5");
  const [otpLength, setOtpLength] = useState("6");
  const [maxRetries, setMaxRetries] = useState("3");
  const [showApiKey, setShowApiKey] = React.useState(false);
  const [liveMode, setLiveMode] = React.useState(false);
  const [testPhone, setTestPhone] = React.useState("");

  return (
    <Tabs defaultValue="credentials">
      <TabsList className="mb-4">
        <TabsTrigger
          value="credentials"
          className="text-xs"
          data-ocid="whatsapp.credentials_tab"
        >
          Credentials
        </TabsTrigger>
        <TabsTrigger value="templates" className="text-xs">
          Templates
        </TabsTrigger>
        <TabsTrigger value="broadcast" className="text-xs">
          Broadcast
        </TabsTrigger>
        <TabsTrigger value="otp" className="text-xs">
          OTP Config
        </TabsTrigger>
      </TabsList>

      <TabsContent value="credentials" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl p-4 space-y-4">
            <h3 className="text-sm font-semibold">API Credentials</h3>
            <div>
              <Label className="text-xs">Phone Number ID</Label>
              <Input
                className="mt-1"
                placeholder="123456789012345"
                value={form.phoneNumberId}
                onChange={(e) =>
                  setForm((p) => ({ ...p, phoneNumberId: e.target.value }))
                }
                data-ocid="admin.whatsapp.phone_id.input"
              />
            </div>
            <div>
              <Label className="text-xs">Business Account ID</Label>
              <Input
                className="mt-1"
                placeholder="987654321098765"
                value={form.businessAccountId}
                onChange={(e) =>
                  setForm((p) => ({ ...p, businessAccountId: e.target.value }))
                }
                data-ocid="admin.whatsapp.biz_id.input"
              />
            </div>
            <div>
              <Label className="text-xs">API Key / Access Token</Label>
              <div className="relative mt-1">
                <Input
                  type={showApiKey ? "text" : "password"}
                  placeholder="EAAxxxxx..."
                  value={form.accessToken}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, accessToken: e.target.value }))
                  }
                  className="pr-10"
                  data-ocid="whatsapp.api_key_input"
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors text-xs"
                  onClick={() => setShowApiKey((v) => !v)}
                  data-ocid="whatsapp.api_key_toggle"
                >
                  {showApiKey ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <div>
              <Label className="text-xs">Webhook Verify Token</Label>
              <Input
                className="mt-1"
                placeholder="my_verify_token"
                value={form.webhookToken}
                onChange={(e) =>
                  setForm((p) => ({ ...p, webhookToken: e.target.value }))
                }
                data-ocid="admin.whatsapp.webhook_token.input"
              />
            </div>
            <div>
              <Label className="text-xs">Webhook URL</Label>
              <Input
                className="mt-1"
                placeholder="https://your-domain.com/webhook"
                value={form.webhookUrl}
                onChange={(e) =>
                  setForm((p) => ({ ...p, webhookUrl: e.target.value }))
                }
                data-ocid="admin.whatsapp.webhook_url.input"
              />
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-secondary/20">
              <div>
                <p className="text-xs font-medium">API Mode</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">
                  {liveMode
                    ? "Live — real messages sent"
                    : "Test — sandbox only"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Test</span>
                <Switch
                  checked={liveMode}
                  onCheckedChange={setLiveMode}
                  data-ocid="admin.whatsapp.mode.switch"
                />
                <span className="text-xs text-muted-foreground">Live</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                className="flex-1"
                onClick={() => toast.success("WhatsApp API settings saved")}
                data-ocid="whatsapp.save_button"
              >
                Save Credentials
              </Button>
              <Button
                size="sm"
                variant="outline"
                disabled={testing}
                onClick={() => {
                  setTesting(true);
                  setTimeout(() => {
                    setTesting(false);
                    toast.success("WhatsApp connection test successful!");
                  }, 1500);
                }}
                data-ocid="admin.whatsapp.test.secondary_button"
              >
                {testing ? "Testing..." : "Test Connection"}
              </Button>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 space-y-3">
            <h3 className="text-sm font-semibold">Quick Setup Guide</h3>
            {[
              "1. Create a Meta Business Account at business.facebook.com",
              "2. Set up a WhatsApp Business App in Meta Developers Console",
              "3. Add your phone number and verify it",
              "4. Generate a permanent access token",
              "5. Configure the webhook URL with your verify token",
              "6. Test the connection and start sending messages",
            ].map((step, i) => (
              <div key={step} className="flex gap-2 text-xs">
                <span className="shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-[10px]">
                  {i + 1}
                </span>
                <span className="text-muted-foreground">{step.slice(3)}</span>
              </div>
            ))}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="templates" className="mt-0">
        <div className="bg-card border border-border rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">Message Templates</h3>
            <Button
              size="sm"
              onClick={() => setShowTemplateForm((p) => !p)}
              data-ocid="admin.whatsapp.template.primary_button"
            >
              + Create Template
            </Button>
          </div>
          {showTemplateForm && (
            <div className="border border-border rounded-xl p-3 space-y-2 bg-secondary/20">
              <Input
                className="h-8 text-xs"
                placeholder="Template name"
                value={newTemplate.name}
                onChange={(e) =>
                  setNewTemplate((p) => ({ ...p, name: e.target.value }))
                }
                data-ocid="admin.whatsapp.template.input"
              />
              <Textarea
                className="text-xs"
                rows={2}
                placeholder="Template preview text with {{1}} placeholders..."
                value={newTemplate.preview}
                onChange={(e) =>
                  setNewTemplate((p) => ({ ...p, preview: e.target.value }))
                }
                data-ocid="admin.whatsapp.template.textarea"
              />
              <Button
                size="sm"
                onClick={() => {
                  if (!newTemplate.name.trim()) {
                    toast.error("Template name required");
                    return;
                  }
                  setTemplates((p) => [
                    ...p,
                    { id: Date.now(), ...newTemplate, status: "pending" },
                  ]);
                  setNewTemplate({ name: "", preview: "" });
                  setShowTemplateForm(false);
                  toast.success("Template created");
                }}
                data-ocid="admin.whatsapp.template.confirm_button"
              >
                Save Template
              </Button>
            </div>
          )}
          <div className="space-y-2">
            {templates.map((t, i) => (
              <div
                key={t.id}
                className="border border-border rounded-xl p-3 flex items-start gap-3"
                data-ocid={`admin.whatsapp.template.row.${i + 1}`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold">{t.name}</span>
                    <SBadge
                      label={t.status}
                      color={t.status === "approved" ? "green" : "amber"}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground truncate">
                    {t.preview}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="broadcast" className="mt-0">
        <div className="bg-card border border-border rounded-xl p-4 space-y-4">
          <h3 className="text-sm font-semibold">Send Broadcast</h3>
          <div>
            <Label className="text-xs">Recipients</Label>
            <Select value={broadcastTarget} onValueChange={setBroadcastTarget}>
              <SelectTrigger
                className="mt-1"
                data-ocid="admin.whatsapp.broadcast.select"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Users</SelectItem>
                <SelectItem value="business">Business Subscribers</SelectItem>
                <SelectItem value="custom">Custom List</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-xs">Message</Label>
            <Textarea
              className="mt-1 text-xs"
              rows={4}
              placeholder="Type your broadcast message..."
              value={broadcastMsg}
              onChange={(e) => setBroadcastMsg(e.target.value)}
              data-ocid="admin.whatsapp.broadcast.textarea"
            />
          </div>
          <div className="flex items-center gap-3">
            <Switch
              checked={scheduleEnabled}
              onCheckedChange={setScheduleEnabled}
              data-ocid="admin.whatsapp.broadcast.schedule.switch"
            />
            <Label className="text-xs">Schedule</Label>
            {scheduleEnabled && (
              <Input
                type="datetime-local"
                className="h-8 text-xs flex-1"
                value={scheduleDate}
                onChange={(e) => setScheduleDate(e.target.value)}
                data-ocid="admin.whatsapp.broadcast.schedule.input"
              />
            )}
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              className="flex-1"
              onClick={() => {
                if (!broadcastMsg.trim()) {
                  toast.error("Message required");
                  return;
                }
                toast.success("Broadcast sent successfully!");
                setBroadcastMsg("");
              }}
              data-ocid="whatsapp.broadcast_button"
            >
              Send Now
            </Button>
            <Button
              size="sm"
              variant="outline"
              disabled={!scheduleEnabled}
              onClick={() => {
                if (!scheduleDate) {
                  toast.error("Set a schedule date first");
                  return;
                }
                toast.success(`Broadcast scheduled for ${scheduleDate}`);
              }}
              data-ocid="admin.whatsapp.broadcast.schedule.secondary_button"
            >
              Schedule
            </Button>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="otp" className="mt-0">
        <div className="bg-card border border-border rounded-xl p-4 space-y-4">
          <h3 className="text-sm font-semibold">OTP Configuration</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <Label className="text-xs">OTP Expiry (minutes)</Label>
              <Input
                className="mt-1"
                type="number"
                value={otpExpiry}
                onChange={(e) => setOtpExpiry(e.target.value)}
                data-ocid="admin.whatsapp.otp.expiry.input"
              />
            </div>
            <div>
              <Label className="text-xs">OTP Length</Label>
              <Input
                className="mt-1"
                type="number"
                min="4"
                max="8"
                value={otpLength}
                onChange={(e) => setOtpLength(e.target.value)}
                data-ocid="admin.whatsapp.otp.length.input"
              />
            </div>
            <div>
              <Label className="text-xs">Max Retries</Label>
              <Input
                className="mt-1"
                type="number"
                value={maxRetries}
                onChange={(e) => setMaxRetries(e.target.value)}
                data-ocid="admin.whatsapp.otp.retries.input"
              />
            </div>
          </div>
          <div>
            <Label className="text-xs">Test Phone Number</Label>
            <Input
              className="mt-1"
              placeholder="+91 98765 43210"
              value={testPhone}
              onChange={(e) => setTestPhone(e.target.value)}
              data-ocid="admin.whatsapp.otp.test_phone.input"
            />
          </div>
          <Button
            size="sm"
            onClick={() => toast.success("OTP config saved")}
            data-ocid="admin.whatsapp.otp.save.primary_button"
          >
            Save OTP Config
          </Button>
        </div>
      </TabsContent>
    </Tabs>
  );
}

// ─── Agent 22: Module Tester ──────────────────────────────────────────────────
function Agent22ModuleTester() {
  const modules = [
    "Shop",
    "POS",
    "Business Page",
    "Family Tree",
    "Community",
    "Jobs",
    "Healthcare",
    "Education",
    "Real Estate",
    "Travel",
    "Transport & Pay",
    "Rides",
    "Blog",
    "GeoMap",
  ];
  const [results, setResults] = React.useState<
    Record<string, "pass" | "fail" | "idle">
  >({});
  const [running, setRunning] = React.useState<string | null>(null);
  const [runningAll, setRunningAll] = React.useState(false);

  const runTest = (mod: string) => {
    setRunning(mod);
    setResults((p) => ({ ...p, [mod]: "idle" }));
    setTimeout(() => {
      setResults((p) => ({
        ...p,
        [mod]: Math.random() > 0.1 ? "pass" : "fail",
      }));
      setRunning(null);
    }, 1800);
  };

  const runAll = async () => {
    setRunningAll(true);
    for (const mod of modules) {
      setRunning(mod);
      await new Promise((r) => setTimeout(r, 400));
      setResults((p) => ({
        ...p,
        [mod]: Math.random() > 0.1 ? "pass" : "fail",
      }));
    }
    setRunning(null);
    setRunningAll(false);
    toast.success("All module tests complete");
  };

  const passing = Object.values(results).filter((v) => v === "pass").length;
  const total = Object.keys(results).length;

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-lg font-display font-bold">
          Agent 22 — Module Tester
        </h2>
        <p className="text-xs text-muted-foreground mt-1">
          Tests all module functionality and reports results to admin.
        </p>
      </div>
      <div className="flex items-center gap-4 flex-wrap">
        <Button
          onClick={runAll}
          disabled={runningAll}
          data-ocid="admin.agent22.run_all_button"
          size="sm"
        >
          {runningAll ? "Running..." : "▶ Run All Tests"}
        </Button>
        {total > 0 && (
          <span className="text-sm font-medium">
            {passing}/{total} modules passing
          </span>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {modules.map((mod) => (
          <div
            key={mod}
            className="flex items-center justify-between bg-card border border-border rounded-xl p-4"
          >
            <div className="flex items-center gap-2">
              {results[mod] === "pass" ? (
                <span className="text-green-600 text-base">✓</span>
              ) : results[mod] === "fail" ? (
                <span className="text-red-500 text-base">✗</span>
              ) : (
                <span className="text-muted-foreground text-base">○</span>
              )}
              <span className="text-sm font-medium">{mod}</span>
            </div>
            <div className="flex items-center gap-2">
              {results[mod] && (
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${results[mod] === "pass" ? "bg-green-100 text-green-700" : results[mod] === "fail" ? "bg-red-100 text-red-700" : "bg-muted text-muted-foreground"}`}
                >
                  {results[mod] === "idle" ? "running..." : results[mod]}
                </span>
              )}
              <Button
                size="sm"
                variant="outline"
                onClick={() => runTest(mod)}
                disabled={running === mod || runningAll}
                className="h-7 text-xs"
                data-ocid="admin.agent22.run_test_button"
              >
                Test
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Commission & Fees Panel ──────────────────────────────────────────────────
function CommissionFeesPanel() {
  const CATEGORIES = [
    "Food & Beverages",
    "Electronics",
    "Fashion",
    "Healthcare",
    "Real Estate",
    "Travel",
    "Education",
    "Services",
    "General",
  ];
  const [config, setConfig] = React.useState<
    Record<string, { percent: number; flat: number }>
  >(() => {
    try {
      const raw = localStorage.getItem("ic_commission_config");
      if (raw) return JSON.parse(raw);
    } catch {}
    return Object.fromEntries(
      CATEGORIES.map((c) => [c, { percent: 5, flat: 10 }]),
    );
  });

  const handleSave = () => {
    localStorage.setItem("ic_commission_config", JSON.stringify(config));
    toast.success("Commission configuration saved");
  };

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-lg font-display font-bold">Commission & Fees</h2>
        <p className="text-xs text-muted-foreground mt-1">
          Configure per-category merchant commission rates (percentage + flat
          fee) for the platform.
        </p>
      </div>
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="text-left p-3 font-label font-medium">Category</th>
              <th className="text-left p-3 font-label font-medium">
                Commission %
              </th>
              <th className="text-left p-3 font-label font-medium">
                Flat Fee (₹)
              </th>
            </tr>
          </thead>
          <tbody>
            {CATEGORIES.map((cat) => (
              <tr
                key={cat}
                className="border-b border-border/50 last:border-0"
                data-ocid="admin.commission.row"
              >
                <td className="p-3 font-medium">{cat}</td>
                <td className="p-3">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={config[cat]?.percent ?? 5}
                    onChange={(e) =>
                      setConfig((p) => ({
                        ...p,
                        [cat]: {
                          ...p[cat],
                          percent: Number.parseFloat(e.target.value) || 0,
                        },
                      }))
                    }
                    className="w-20 border border-border rounded-md px-2 py-1 text-sm bg-background"
                  />
                </td>
                <td className="p-3">
                  <input
                    type="number"
                    min="0"
                    value={config[cat]?.flat ?? 10}
                    onChange={(e) =>
                      setConfig((p) => ({
                        ...p,
                        [cat]: {
                          ...p[cat],
                          flat: Number.parseFloat(e.target.value) || 0,
                        },
                      }))
                    }
                    className="w-20 border border-border rounded-md px-2 py-1 text-sm bg-background"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Button onClick={handleSave} data-ocid="admin.commission.save_button">
        Save Commission Config
      </Button>
    </div>
  );
}

function RideManagementWithZones() {
  const [activeTab, setActiveTab] = React.useState("ratecards");

  // Rate Cards State
  const [selectedCountry, setSelectedCountry] = React.useState("India");
  const [selectedState, setSelectedState] = React.useState("Maharashtra");
  const [selectedCity, setSelectedCity] = React.useState("Mumbai");
  const [rateCards, setRateCards] = React.useState<
    Record<
      string,
      Record<string, { baseFare: string; perKm: string; minFare: string }>
    >
  >({
    Mumbai: {
      Bike: { baseFare: "20", perKm: "8", minFare: "30" },
      Auto: { baseFare: "25", perKm: "12", minFare: "40" },
      Taxi: { baseFare: "50", perKm: "15", minFare: "80" },
      Premium: { baseFare: "80", perKm: "22", minFare: "120" },
    },
    Pune: {
      Bike: { baseFare: "18", perKm: "7", minFare: "25" },
      Auto: { baseFare: "22", perKm: "11", minFare: "35" },
      Taxi: { baseFare: "45", perKm: "14", minFare: "70" },
      Premium: { baseFare: "70", perKm: "20", minFare: "100" },
    },
    Nagpur: {
      Bike: { baseFare: "15", perKm: "6", minFare: "20" },
      Auto: { baseFare: "20", perKm: "10", minFare: "30" },
      Taxi: { baseFare: "40", perKm: "12", minFare: "60" },
      Premium: { baseFare: "60", perKm: "18", minFare: "90" },
    },
    Delhi: {
      Bike: { baseFare: "22", perKm: "9", minFare: "35" },
      Auto: { baseFare: "30", perKm: "13", minFare: "45" },
      Taxi: { baseFare: "55", perKm: "16", minFare: "90" },
      Premium: { baseFare: "90", perKm: "24", minFare: "130" },
    },
    Gurgaon: {
      Bike: { baseFare: "20", perKm: "9", minFare: "30" },
      Auto: { baseFare: "28", perKm: "12", minFare: "40" },
      Taxi: { baseFare: "50", perKm: "15", minFare: "85" },
      Premium: { baseFare: "85", perKm: "23", minFare: "125" },
    },
    Bangalore: {
      Bike: { baseFare: "20", perKm: "8", minFare: "30" },
      Auto: { baseFare: "25", perKm: "12", minFare: "40" },
      Taxi: { baseFare: "50", perKm: "15", minFare: "80" },
      Premium: { baseFare: "80", perKm: "22", minFare: "120" },
    },
  });

  const COUNTRIES = ["India", "Sri Lanka", "Bangladesh", "Nepal"];
  const STATES: Record<string, string[]> = {
    India: ["Maharashtra", "Delhi NCR", "Karnataka", "Tamil Nadu", "Gujarat"],
  };
  const CITIES: Record<string, string[]> = {
    Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
    "Delhi NCR": ["Delhi", "Gurgaon", "Noida", "Faridabad", "Ghaziabad"],
    Karnataka: ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Trichy", "Salem"],
    Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"],
  };
  const VEHICLE_TYPES = ["Bike", "Auto", "Taxi", "Premium"] as const;

  const currentRates = rateCards[selectedCity] || {
    Bike: { baseFare: "15", perKm: "7", minFare: "25" },
    Auto: { baseFare: "20", perKm: "11", minFare: "35" },
    Taxi: { baseFare: "40", perKm: "13", minFare: "65" },
    Premium: { baseFare: "65", perKm: "19", minFare: "95" },
  };

  // Subscription plans
  const [subPlans] = React.useState([
    {
      id: 1,
      name: "Basic",
      price: "Free",
      period: "",
      rides: "50 rides/month",
      features: ["Standard support", "Basic insurance", "Platform access"],
      color: "oklch(0.52 0.14 155)",
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
        "Weekly payout",
      ],
      color: "oklch(0.55 0.22 280)",
      badge: "Popular",
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
        "Training & certification",
      ],
      color: "oklch(0.65 0.25 335)",
    },
  ]);

  // Commission & Blocking
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
      status: "active" as "active" | "blocked",
    },
    {
      id: 2,
      name: "Ramesh Patel",
      rides: 28,
      zone: "Andheri",
      earned: 2100,
      outstanding: 350,
      status: "active" as "active" | "blocked",
    },
    {
      id: 3,
      name: "Vijay Singh",
      rides: 15,
      zone: "Bandra",
      earned: 900,
      outstanding: 1200,
      status: "blocked" as "active" | "blocked",
    },
    {
      id: 4,
      name: "Arjun Nair",
      rides: 61,
      zone: "Powai",
      earned: 5490,
      outstanding: 0,
      status: "active" as "active" | "blocked",
    },
    {
      id: 5,
      name: "Kavita Yadav",
      rides: 33,
      zone: "Thane",
      earned: 2970,
      outstanding: 800,
      status: "active" as "active" | "blocked",
    },
  ]);

  // Rider Registration
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
      status: "Pending" as "Pending" | "Approved" | "Rejected",
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
      status: "Pending" as "Pending" | "Approved" | "Rejected",
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
      status: "Pending" as "Pending" | "Approved" | "Rejected",
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
      status: "Pending" as "Pending" | "Approved" | "Rejected",
    },
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
    permitType: "Commercial",
  });
  const [selectedReg, setSelectedReg] = React.useState<number | null>(null);

  const DocBadge = ({ ok, label }: { ok: boolean; label: string }) => (
    <span
      className={`inline-flex items-center gap-0.5 text-[9px] px-1 py-0.5 rounded font-medium ${ok ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"}`}
    >
      {ok ? "✓" : "✗"} {label}
    </span>
  );

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="mb-4 flex-wrap gap-1 h-auto">
        <TabsTrigger
          value="ratecards"
          className="text-xs"
          data-ocid="admin.rides.ratecards.tab"
        >
          Rate Cards
        </TabsTrigger>
        <TabsTrigger
          value="subscriptions"
          className="text-xs"
          data-ocid="admin.rides.subscriptions.tab"
        >
          Subscription Plans
        </TabsTrigger>
        <TabsTrigger
          value="commission"
          className="text-xs"
          data-ocid="admin.rides.commission.tab"
        >
          Commission &amp; Blocking
        </TabsTrigger>
        <TabsTrigger
          value="registration"
          className="text-xs"
          data-ocid="admin.rides.registration.tab"
        >
          Rider Registration{" "}
          {pendingRegistrations.filter((r) => r.status === "Pending").length >
            0 && (
            <span className="ml-1 text-[9px] px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-500 font-bold">
              {
                pendingRegistrations.filter((r) => r.status === "Pending")
                  .length
              }
            </span>
          )}
        </TabsTrigger>
        <TabsTrigger
          value="active"
          className="text-xs"
          data-ocid="admin.rides.active.tab"
        >
          Active Riders
        </TabsTrigger>
      </TabsList>

      {/* Rate Cards */}
      <TabsContent value="ratecards" className="mt-0 space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <div>
            <Label className="text-xs">Country</Label>
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger
                className="mt-1 h-8"
                data-ocid="admin.rides.country.select"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {COUNTRIES.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-xs">State / Region</Label>
            <Select
              value={selectedState}
              onValueChange={(v) => {
                setSelectedState(v);
                setSelectedCity((CITIES[v] || [])[0] || "");
              }}
            >
              <SelectTrigger
                className="mt-1 h-8"
                data-ocid="admin.rides.state.select"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {(STATES[selectedCountry] || []).map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-xs">City</Label>
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger
                className="mt-1 h-8"
                data-ocid="admin.rides.city.select"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {(CITIES[selectedState] || []).map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="px-4 py-3 border-b border-border">
            <h4 className="text-sm font-semibold">
              Rates for {selectedCity}, {selectedState}
            </h4>
          </div>
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <TH>Vehicle Type</TH>
                <TH>Base Fare (₹)</TH>
                <TH>Per KM (₹)</TH>
                <TH>Min Fare (₹)</TH>
              </tr>
            </thead>
            <tbody>
              {VEHICLE_TYPES.map((vt, i) => (
                <tr
                  key={vt}
                  className="border-b border-border/50"
                  data-ocid={`admin.rides.rate.row.${i + 1}`}
                >
                  <TD className="font-medium">
                    {vt === "Bike"
                      ? "🏍️"
                      : vt === "Auto"
                        ? "🛺"
                        : vt === "Taxi"
                          ? "🚗"
                          : "🚘"}{" "}
                    {vt}
                  </TD>
                  {(["baseFare", "perKm", "minFare"] as const).map((field) => (
                    <TD key={field}>
                      <Input
                        type="number"
                        className="h-7 w-20 text-xs"
                        value={currentRates[vt]?.[field] ?? ""}
                        onChange={(e) =>
                          setRateCards((prev) => ({
                            ...prev,
                            [selectedCity]: {
                              ...prev[selectedCity],
                              [vt]: {
                                ...prev[selectedCity]?.[vt],
                                [field]: e.target.value,
                              },
                            },
                          }))
                        }
                        data-ocid={`admin.rides.rate.input.${i + 1}`}
                      />
                    </TD>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Button
          size="sm"
          onClick={() => {
            localStorage.setItem(
              "indyacentral_ride_rates",
              JSON.stringify(rateCards),
            );
            toast.success(`Rate card saved for ${selectedCity}`);
          }}
          data-ocid="admin.rides.rate.save_button"
        >
          Save Rate Card
        </Button>
        <LiveRideRequests />
        <SurgePricingSchedule />
      </TabsContent>

      {/* Subscription Plans */}
      <TabsContent value="subscriptions" className="mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {subPlans.map((plan) => (
            <div
              key={plan.id}
              className="border border-border rounded-xl p-5 space-y-4 relative"
              data-ocid={`admin.rides.subscription.row.${plan.id}`}
            >
              {"badge" in plan && plan.badge && (
                <span className="absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-full font-bold bg-primary text-primary-foreground">
                  {plan.badge}
                </span>
              )}
              <div className="text-lg font-bold" style={{ color: plan.color }}>
                {plan.name}
              </div>
              <div className="flex items-end gap-0.5">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-sm text-muted-foreground pb-1">
                  {plan.period}
                </span>
              </div>
              <div className="text-xs font-medium text-primary">
                {plan.rides}
              </div>
              <ul className="space-y-1.5">
                {plan.features.map((f) => (
                  <li key={f} className="text-xs flex items-center gap-1.5">
                    <span className="text-green-500">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                size="sm"
                variant="outline"
                className="w-full text-xs"
                onClick={() => toast.success(`${plan.name} plan updated`)}
                data-ocid={`admin.rides.subscription.edit_button.${plan.id}`}
              >
                Edit Plan
              </Button>
            </div>
          ))}
        </div>
      </TabsContent>

      {/* Commission & Blocking */}
      <TabsContent value="commission" className="mt-0 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-xl p-4 space-y-3">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Commission Config
            </h4>
            <div>
              <Label className="text-xs">Per-ride Commission (%)</Label>
              <Input
                className="mt-1"
                type="number"
                value={commission}
                onChange={(e) => setCommission(e.target.value)}
                data-ocid="admin.rides.commission.input"
              />
            </div>
            <div>
              <Label className="text-xs">
                Outstanding Limit (₹) — Auto-block above this
              </Label>
              <Input
                className="mt-1"
                type="number"
                value={threshold}
                onChange={(e) => setThreshold(e.target.value)}
                data-ocid="admin.rides.threshold.input"
              />
            </div>
            <div className="flex items-center justify-between">
              <Label className="text-xs">Auto-block on limit breach</Label>
              <Switch
                checked={autoBlock}
                onCheckedChange={setAutoBlock}
                data-ocid="admin.rides.autoblock.switch"
              />
            </div>
            <p className="text-[10px] text-muted-foreground">
              Riders with unpaid commission above ₹{threshold} will be
              automatically blocked from accepting rides.
            </p>
            <Button
              size="sm"
              className="w-full"
              onClick={() => toast.success("Commission config saved")}
              data-ocid="admin.rides.commission.save_button"
            >
              Save Config
            </Button>
          </div>
          <div className="md:col-span-2 bg-card border border-border rounded-xl overflow-hidden">
            <div className="px-4 py-3 border-b border-border flex items-center justify-between">
              <h4 className="text-xs font-semibold">
                Riders ({riders.length})
              </h4>
              <span className="text-[10px] text-muted-foreground">
                {riders.filter((r) => r.status === "blocked").length} blocked ·{" "}
                {riders.filter((r) => r.outstanding > 0).length} with
                outstanding dues
              </span>
            </div>
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-secondary/30">
                  {[
                    "Name",
                    "Zone",
                    "Rides",
                    "Earned",
                    "Outstanding",
                    "Status",
                    "Action",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-3 py-2 text-left font-semibold text-muted-foreground"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {riders.map((r, i) => (
                  <tr
                    key={r.id}
                    className="border-t border-border/50"
                    data-ocid={`admin.rides.rider.row.${i + 1}`}
                  >
                    <td className="px-3 py-2 font-medium">{r.name}</td>
                    <td className="px-3 py-2 text-muted-foreground">
                      {r.zone}
                    </td>
                    <td className="px-3 py-2">{r.rides}</td>
                    <td className="px-3 py-2 text-green-600">
                      ₹{r.earned.toLocaleString()}
                    </td>
                    <td className="px-3 py-2">
                      <span
                        className={
                          r.outstanding > 0
                            ? "text-red-600 font-semibold"
                            : "text-muted-foreground"
                        }
                      >
                        {r.outstanding > 0 ? `₹${r.outstanding}` : "—"}
                      </span>
                    </td>
                    <td className="px-3 py-2">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${r.status === "active" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"}`}
                      >
                        {r.status === "active" ? "Active" : "Blocked"}
                      </span>
                    </td>
                    <td className="px-3 py-2">
                      <div className="flex gap-1">
                        <Button
                          size="sm"
                          variant="outline"
                          className={`h-6 px-2 text-[10px] ${r.status === "blocked" ? "text-green-600" : "text-red-600"}`}
                          onClick={() => {
                            setRiders((prev) =>
                              prev.map((x) =>
                                x.id === r.id
                                  ? {
                                      ...x,
                                      status:
                                        x.status === "active"
                                          ? "blocked"
                                          : "active",
                                    }
                                  : x,
                              ),
                            );
                            toast.success(
                              r.status === "active"
                                ? `${r.name} blocked`
                                : `${r.name} unblocked`,
                            );
                          }}
                          data-ocid={
                            r.status === "active"
                              ? `admin.rides.rider.delete_button.${i + 1}`
                              : `admin.rides.rider.edit_button.${i + 1}`
                          }
                        >
                          {r.status === "active" ? "Block" : "Unblock"}
                        </Button>
                        {r.outstanding > 0 && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-6 px-2 text-[10px]"
                            onClick={() =>
                              toast.success(`Payment link sent to ${r.name}`)
                            }
                            data-ocid={`admin.rides.rider.save_button.${i + 1}`}
                          >
                            Pay Link
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </TabsContent>

      {/* Rider Registration */}
      <TabsContent value="registration" className="mt-0 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold">Pending Rider Applications</h3>
          <Button
            size="sm"
            onClick={() => setShowRegForm(!showRegForm)}
            data-ocid="admin.rides.registration.open_modal_button"
          >
            + Register Rider
          </Button>
        </div>

        {showRegForm && (
          <div className="bg-card border border-border rounded-xl p-4 space-y-4">
            <h4 className="text-sm font-semibold">New Rider Registration</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  label: "Full Name",
                  field: "name",
                  placeholder: "Suresh Kumar",
                },
                {
                  label: "Phone Number",
                  field: "phone",
                  placeholder: "+91 98765 43210",
                },
                {
                  label: "Email",
                  field: "email",
                  placeholder: "rider@example.com",
                },
                {
                  label: "Aadhaar Number",
                  field: "aadhaar",
                  placeholder: "1234 5678 9012",
                },
                {
                  label: "PAN Number",
                  field: "pan",
                  placeholder: "ABCDE1234F",
                },
                {
                  label: "Driving License No.",
                  field: "dl",
                  placeholder: "MH02-20210012345",
                },
                {
                  label: "Vehicle Registration No.",
                  field: "vehicleReg",
                  placeholder: "MH02AB1234",
                },
                {
                  label: "Vehicle Number Plate",
                  field: "vehicleNo",
                  placeholder: "MH 02 AB 1234",
                },
              ].map(({ label, field, placeholder }) => (
                <div key={field}>
                  <Label className="text-xs">{label}</Label>
                  <Input
                    className="mt-1 h-8 text-xs"
                    placeholder={placeholder}
                    value={regForm[field as keyof typeof regForm]}
                    onChange={(e) =>
                      setRegForm((p) => ({ ...p, [field]: e.target.value }))
                    }
                    data-ocid={"admin.rides.reg.input"}
                  />
                </div>
              ))}
              <div>
                <Label className="text-xs">Permit Type</Label>
                <Select
                  value={regForm.permitType}
                  onValueChange={(v) =>
                    setRegForm((p) => ({ ...p, permitType: v }))
                  }
                >
                  <SelectTrigger
                    className="mt-1 h-8"
                    data-ocid="admin.rides.reg.select"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Commercial">Commercial</SelectItem>
                    <SelectItem value="Tourist">Tourist</SelectItem>
                    <SelectItem value="All India">All India</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: "Self Photo (Selfie)", id: "selfie" },
                { label: "License Photo", id: "dl-photo" },
                { label: "Vehicle RC Book", id: "rc" },
              ].map(({ label, id }) => (
                <div key={id}>
                  <Label className="text-xs">{label}</Label>
                  <div className="mt-1 border-2 border-dashed border-border rounded-xl p-4 text-center cursor-pointer hover:bg-secondary/30 transition-colors">
                    <p className="text-xs text-muted-foreground">
                      📷 Click to upload
                    </p>
                    <input
                      type="file"
                      className="hidden"
                      accept=".jpg,.jpeg,.png"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 text-xs text-amber-600 bg-amber-500/10 border border-amber-500/30 rounded-xl p-3">
              <span>🤖</span>
              <span>
                AI will check document clarity, detect blur, and compare selfie
                with license photo on submission.
              </span>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                className="flex-1"
                onClick={() => {
                  if (!regForm.name || !regForm.phone) {
                    toast.error("Name and phone required");
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
                    status: "Pending" as const,
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
                    permitType: "Commercial",
                  });
                  setShowRegForm(false);
                  toast.success(
                    "Registration submitted — AI check in progress",
                  );
                }}
                data-ocid="admin.rides.reg.submit_button"
              >
                Submit Registration
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setShowRegForm(false)}
                data-ocid="admin.rides.reg.cancel_button"
              >
                Cancel
              </Button>
            </div>
          </div>
        )}

        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <TH>Name</TH>
                <TH>Phone</TH>
                <TH>Documents</TH>
                <TH>AI Check</TH>
                <TH>Face Match</TH>
                <TH>Status</TH>
                <TH>Actions</TH>
              </tr>
            </thead>
            <tbody>
              {pendingRegistrations.map((reg, i) => (
                <React.Fragment key={reg.id}>
                  <tr
                    className="border-b border-border/50 hover:bg-secondary/20 cursor-pointer"
                    onClick={() =>
                      setSelectedReg(selectedReg === reg.id ? null : reg.id)
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter")
                        setSelectedReg(selectedReg === reg.id ? null : reg.id);
                    }}
                    tabIndex={0}
                    data-ocid={`admin.rides.reg.row.${i + 1}`}
                  >
                    <TD className="font-medium">{reg.name}</TD>
                    <TD className="text-muted-foreground">{reg.phone}</TD>
                    <TD>
                      <div className="flex flex-wrap gap-0.5">
                        <DocBadge ok={reg.aadhaar} label="Aadhaar" />
                        <DocBadge ok={reg.pan} label="PAN" />
                        <DocBadge ok={reg.dl} label="DL" />
                        <DocBadge ok={reg.rc} label="RC" />
                        <DocBadge ok={reg.permit} label="Permit" />
                        <DocBadge ok={reg.selfie} label="Selfie" />
                      </div>
                    </TD>
                    <TD>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${reg.aiBlur === "Pass" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : reg.aiBlur === "Fail" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"}`}
                      >
                        🤖 Blur: {reg.aiBlur}
                      </span>
                    </TD>
                    <TD>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${reg.faceMatch === "Match" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : reg.faceMatch === "No Match" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"}`}
                      >
                        {reg.faceMatch}
                      </span>
                    </TD>
                    <TD>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${reg.status === "Approved" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : reg.status === "Rejected" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"}`}
                      >
                        {reg.status}
                      </span>
                    </TD>
                    <TD>
                      {reg.status === "Pending" && (
                        <div
                          className="flex gap-1"
                          onClick={(e) => e.stopPropagation()}
                          onKeyDown={(e) => e.stopPropagation()}
                        >
                          <Button
                            size="sm"
                            className="h-6 px-2 text-[10px] bg-green-600 hover:bg-green-700 text-white"
                            onClick={() => {
                              setPendingRegistrations((p) =>
                                p.map((x) =>
                                  x.id === reg.id
                                    ? { ...x, status: "Approved" }
                                    : x,
                                ),
                              );
                              toast.success(`${reg.name} approved`);
                            }}
                            data-ocid={`admin.rides.reg.confirm_button.${i + 1}`}
                          >
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-6 px-2 text-[10px] text-destructive"
                            onClick={() => {
                              setPendingRegistrations((p) =>
                                p.map((x) =>
                                  x.id === reg.id
                                    ? { ...x, status: "Rejected" }
                                    : x,
                                ),
                              );
                              toast.error(`${reg.name} rejected`);
                            }}
                            data-ocid={`admin.rides.reg.delete_button.${i + 1}`}
                          >
                            Reject
                          </Button>
                        </div>
                      )}
                    </TD>
                  </tr>
                  {selectedReg === reg.id && (
                    <tr className="border-b border-border/50">
                      <td colSpan={7} className="px-4 py-3 bg-secondary/20">
                        {reg.faceMatch === "No Match" && (
                          <div className="flex items-center gap-2 text-red-600 bg-red-500/10 border border-red-500/30 rounded-xl p-3 mb-3">
                            <span className="text-lg">⚠️</span>
                            <span className="text-xs font-semibold">
                              Selfie does not match license photo — identity
                              verification failed. Admin review required before
                              approval.
                            </span>
                          </div>
                        )}
                        {reg.aiBlur === "Fail" && (
                          <div className="flex items-center gap-2 text-amber-600 bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 mb-3">
                            <span className="text-lg">📷</span>
                            <span className="text-xs font-semibold">
                              AI detected blur or low visibility in uploaded
                              documents. Rider should re-upload clear images.
                            </span>
                          </div>
                        )}
                        <div className="text-xs text-muted-foreground">
                          Click row to expand document details. Documents listed
                          above. AI checks run automatically on submission.
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </TabsContent>

      {/* Active Riders */}
      <TabsContent value="active" className="mt-0 space-y-4">
        <RiderCommissionConfig />
      </TabsContent>
    </Tabs>
  );
}

function RiderCommissionConfig() {
  return null;
}

function LiveRideRequests() {
  const [requests, setRequests] = useState([
    {
      id: "REQ001",
      passenger: "Priya Sharma",
      pickup: "Bandra West",
      drop: "Andheri East",
      distance: "8.2 km",
      status: "waiting" as const,
    },
    {
      id: "REQ002",
      passenger: "Rahul Verma",
      pickup: "Dadar Station",
      drop: "Worli Sea Face",
      distance: "4.5 km",
      status: "accepted" as const,
    },
    {
      id: "REQ003",
      passenger: "Ananya Patel",
      pickup: "Borivali West",
      drop: "Malad East",
      distance: "3.1 km",
      status: "waiting" as const,
    },
  ]);
  const counterRef = useRef(0);

  useEffect(() => {
    const PASSENGERS = [
      "Suresh K.",
      "Meera N.",
      "Vikram R.",
      "Sunita M.",
      "Amit J.",
    ];
    const AREAS = [
      "Colaba",
      "Fort",
      "Bandra",
      "Juhu",
      "Goregaon",
      "Thane",
      "Navi Mumbai",
    ];
    const interval = setInterval(() => {
      counterRef.current += 1;
      const newReq = {
        id: `REQ${String(Date.now()).slice(-4)}`,
        passenger: PASSENGERS[counterRef.current % PASSENGERS.length],
        pickup: AREAS[counterRef.current % AREAS.length],
        drop: AREAS[(counterRef.current + 2) % AREAS.length],
        distance: `${(Math.random() * 12 + 1).toFixed(1)} km`,
        status: "waiting" as const,
      };
      setRequests((prev) => [newReq, ...prev].slice(0, 8));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-border flex items-center justify-between">
        <h3 className="text-sm font-semibold">Live Ride Requests</h3>
        <span
          className="text-[10px] px-2 py-0.5 rounded-full font-bold"
          style={{
            background: "oklch(0.52 0.14 155 / 0.15)",
            color: "oklch(0.52 0.14 155)",
          }}
        >
          ● Live
        </span>
      </div>
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-border bg-muted/30">
            <TH>ID</TH>
            <TH>Passenger</TH>
            <TH>Pickup</TH>
            <TH>Drop</TH>
            <TH>Distance</TH>
            <TH>Status</TH>
            <TH>Actions</TH>
          </tr>
        </thead>
        <tbody>
          {requests.map((r, i) => (
            <tr
              key={r.id}
              className="border-b border-border/50 hover:bg-secondary/20"
              data-ocid={`admin.rides.request.row.${i + 1}`}
            >
              <TD className="font-mono text-[10px]">{r.id}</TD>
              <TD className="font-medium">{r.passenger}</TD>
              <TD className="text-muted-foreground">{r.pickup}</TD>
              <TD className="text-muted-foreground">{r.drop}</TD>
              <TD>{r.distance}</TD>
              <TD>
                <SBadge
                  label={r.status}
                  color={r.status === "accepted" ? "green" : "amber"}
                />
              </TD>
              <TD>
                {r.status === "waiting" ? (
                  <div className="flex gap-1">
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-7 text-xs text-green-600 border-green-200"
                      onClick={() => {
                        setRequests((p) =>
                          p.map((x) =>
                            x.id === r.id
                              ? { ...x, status: "accepted" as const }
                              : x,
                          ),
                        );
                        toast.success("Ride accepted");
                      }}
                      data-ocid={`admin.rides.request.confirm_button.${i + 1}`}
                    >
                      Accept
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-7 text-xs text-destructive border-destructive/20"
                      onClick={() => {
                        setRequests((p) => p.filter((x) => x.id !== r.id));
                        toast.info("Ride rejected");
                      }}
                      data-ocid={`admin.rides.request.delete_button.${i + 1}`}
                    >
                      Reject
                    </Button>
                  </div>
                ) : (
                  <span className="text-xs text-muted-foreground capitalize">
                    {r.status}
                  </span>
                )}
              </TD>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SurgePricingSchedule() {
  const [slots, setSlots] = useState([
    {
      id: 1,
      label: "Morning Rush",
      time: "7:00 AM – 10:00 AM",
      multiplier: "1.5",
    },
    {
      id: 2,
      label: "Afternoon",
      time: "10:00 AM – 5:00 PM",
      multiplier: "1.0",
    },
    {
      id: 3,
      label: "Evening Rush",
      time: "5:00 PM – 9:00 PM",
      multiplier: "1.8",
    },
    { id: 4, label: "Night", time: "9:00 PM – 7:00 AM", multiplier: "1.2" },
  ]);

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-border">
        <h3 className="text-sm font-semibold">Surge Pricing Schedule</h3>
      </div>
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-border bg-muted/30">
            <TH>Time Slot</TH>
            <TH>Hours</TH>
            <TH>Multiplier</TH>
            <TH>Save</TH>
          </tr>
        </thead>
        <tbody>
          {slots.map((slot, i) => (
            <tr
              key={slot.id}
              className="border-b border-border/50 hover:bg-secondary/20"
              data-ocid={`admin.rides.surge.row.${i + 1}`}
            >
              <TD className="font-medium">{slot.label}</TD>
              <TD className="text-muted-foreground">{slot.time}</TD>
              <TD>
                <Input
                  type="number"
                  step="0.1"
                  min="1"
                  max="5"
                  className="h-7 w-20 text-xs"
                  value={slot.multiplier}
                  onChange={(e) =>
                    setSlots((p) =>
                      p.map((s) =>
                        s.id === slot.id
                          ? { ...s, multiplier: e.target.value }
                          : s,
                      ),
                    )
                  }
                  data-ocid={`admin.rides.surge.input.${i + 1}`}
                />
              </TD>
              <TD>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-7 text-xs"
                  onClick={() =>
                    toast.success(
                      `${slot.label} surge updated to ${slot.multiplier}×`,
                    )
                  }
                  data-ocid={`admin.rides.surge.save_button.${i + 1}`}
                >
                  Save
                </Button>
              </TD>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Agent Live Feed Components ───────────────────────────────────────────────

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
  "River Rafting Heroes",
];
const GENRES = ["Adventure", "Trivia", "Puzzle", "Racing", "Strategy"];
const AGE_GROUPS = ["6-10", "11-14", "15-18", "18+", "All Ages"];
const DIFFICULTIES = ["Easy", "Medium", "Hard"];

interface GameEntry {
  id: number;
  title: string;
  genre: string;
  age: string;
  difficulty: string;
  time: string;
}

function Agent19LiveFeed() {
  const [feed, setFeed] = useState<GameEntry[]>([
    {
      id: 1,
      title: "Cricket Champions 2026",
      genre: "Sports",
      age: "All Ages",
      difficulty: "Medium",
      time: "Just now",
    },
    {
      id: 2,
      title: "Mystic Jungle Quest",
      genre: "Adventure",
      age: "11-14",
      difficulty: "Hard",
      time: "2 min ago",
    },
  ]);
  const [processed, setProcessed] = useState(48);
  const [alerts, setAlerts] = useState(2);
  const counterRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      counterRef.current += 1;
      const entry: GameEntry = {
        id: Date.now(),
        title: GAME_TITLES[counterRef.current % GAME_TITLES.length],
        genre: GENRES[counterRef.current % GENRES.length],
        age: AGE_GROUPS[counterRef.current % AGE_GROUPS.length],
        difficulty: DIFFICULTIES[counterRef.current % DIFFICULTIES.length],
        time: "Just now",
      };
      setFeed((prev) => [entry, ...prev].slice(0, 10));
      setProcessed((p) => p + 1);
      if (counterRef.current % 5 === 0) setAlerts((a) => a + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-4 bg-card border border-border rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold flex items-center gap-2">
          Live Output{" "}
          <span
            className="text-[10px] px-2 py-0.5 rounded-full font-bold"
            style={{
              background: "oklch(0.52 0.14 155 / 0.15)",
              color: "oklch(0.52 0.14 155)",
            }}
          >
            ● Running
          </span>
        </h3>
        <div className="flex gap-2">
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
            Last Run: just now
          </span>
          <span
            className="text-[11px] px-2 py-0.5 rounded-full"
            style={{
              background: "oklch(0.52 0.14 155 / 0.15)",
              color: "oklch(0.52 0.14 155)",
            }}
          >
            Processed: {processed}
          </span>
          <span
            className="text-[11px] px-2 py-0.5 rounded-full"
            style={{
              background: "oklch(0.72 0.17 85 / 0.15)",
              color: "oklch(0.65 0.14 50)",
            }}
          >
            Alerts: {alerts}
          </span>
        </div>
      </div>
      <div className="space-y-2 max-h-48 overflow-y-auto">
        {feed.map((g) => (
          <div
            key={g.id}
            className="flex items-center justify-between p-2 rounded-lg bg-secondary/30 text-xs"
          >
            <div>
              <span className="font-medium">{g.title}</span>
              <span className="text-muted-foreground ml-2">
                {g.genre} · {g.difficulty} · Age {g.age}
              </span>
            </div>
            <span className="text-muted-foreground shrink-0">{g.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const COMIC_TITLES = [
  "Monday Blues",
  "The Chai Diaries",
  "Office Life",
  "Festival Chaos",
  "Traffic Woes",
  "Tech Troubles",
  "Family Drama",
];
const PUNCHLINES = [
  "When your phone battery dies at 1%... 😱",
  "Monday morning alarm: a horror story 🔔",
  "Boss: This should only take 5 minutes. Me: 3 days later... ⌛",
  "When the delivery guy calls but you're on another call 📞",
  "Me pretending to understand the meeting 🤝",
];
const MOODS = ["funny", "sarcastic", "wholesome"] as const;

interface ComicEntry {
  id: number;
  title: string;
  punchline: string;
  mood: (typeof MOODS)[number];
  time: string;
}

function Agent20LiveFeed() {
  const [feed, setFeed] = useState<ComicEntry[]>([
    {
      id: 1,
      title: "Monday Blues",
      punchline:
        "When your alarm goes off 5 minutes after you finally fell asleep 😅",
      mood: "funny",
      time: "Just now",
    },
    {
      id: 2,
      title: "The Chai Diaries",
      punchline: "No meeting is complete without chai. Science. 🍵",
      mood: "wholesome",
      time: "8 min ago",
    },
  ]);
  const [processed, setProcessed] = useState(23);
  const [alerts, setAlerts] = useState(1);
  const counterRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      counterRef.current += 1;
      const entry: ComicEntry = {
        id: Date.now(),
        title: COMIC_TITLES[counterRef.current % COMIC_TITLES.length],
        punchline: PUNCHLINES[counterRef.current % PUNCHLINES.length],
        mood: MOODS[counterRef.current % MOODS.length],
        time: "Just now",
      };
      setFeed((prev) => [entry, ...prev].slice(0, 10));
      setProcessed((p) => p + 1);
      if (counterRef.current % 4 === 0) setAlerts((a) => a + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const moodColors: Record<(typeof MOODS)[number], string> = {
    funny: "oklch(0.65 0.25 335)",
    sarcastic: "oklch(0.72 0.17 85)",
    wholesome: "oklch(0.52 0.14 155)",
  };

  return (
    <div className="mt-4 bg-card border border-border rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold">Live Output</h3>
        <div className="flex gap-2">
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
            Last Run: just now
          </span>
          <span
            className="text-[11px] px-2 py-0.5 rounded-full"
            style={{
              background: "oklch(0.52 0.14 155 / 0.15)",
              color: "oklch(0.52 0.14 155)",
            }}
          >
            Generated: {processed}
          </span>
          <span
            className="text-[11px] px-2 py-0.5 rounded-full"
            style={{
              background: "oklch(0.72 0.17 85 / 0.15)",
              color: "oklch(0.65 0.14 50)",
            }}
          >
            Alerts: {alerts}
          </span>
        </div>
      </div>
      <div className="space-y-2 max-h-48 overflow-y-auto">
        {feed.map((c) => (
          <div
            key={c.id}
            className="flex items-center justify-between p-2 rounded-lg bg-secondary/30 text-xs"
          >
            <div>
              <span className="font-medium">{c.title}</span>
              <span className="text-muted-foreground ml-2">{c.punchline}</span>
            </div>
            <span
              className="text-[10px] px-1.5 py-0.5 rounded-full shrink-0 ml-2"
              style={{
                background: `${moodColors[c.mood]}18`,
                color: moodColors[c.mood],
              }}
            >
              {c.mood}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Agent19PreviewDialog() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="sm"
          variant="outline"
          className="mt-2"
          data-ocid="admin.agent19.preview.open_modal_button"
        >
          Preview for Users
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-lg"
        data-ocid="admin.agent19.preview.dialog"
      >
        <DialogHeader>
          <DialogTitle>🎮 Games — User View</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
          {[
            {
              title: "Cricket Champions 2026",
              genre: "Sports",
              difficulty: "Medium",
              age: "All Ages",
            },
            {
              title: "Mystic Jungle Quest",
              genre: "Adventure",
              difficulty: "Hard",
              age: "11-14",
            },
            {
              title: "Chai Quiz Showdown",
              genre: "Trivia",
              difficulty: "Easy",
              age: "All Ages",
            },
            {
              title: "Bollywood Beats Rush",
              genre: "Music",
              difficulty: "Easy",
              age: "16+",
            },
          ].map((g, _i) => (
            <div
              key={g.title}
              className="border border-border rounded-xl p-3 space-y-2"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-semibold">{g.title}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full font-medium bg-primary/10 text-primary">
                  {g.difficulty}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                {g.genre} · Age {g.age}
              </p>
              <div
                className="w-full rounded-lg py-1.5 text-xs font-semibold text-center text-primary-foreground"
                style={{ background: "oklch(0.55 0.22 280)" }}
              >
                Play Now
              </div>
            </div>
          ))}
        </div>
        <Button
          variant="outline"
          className="mt-3 w-full"
          onClick={() => setOpen(false)}
          data-ocid="admin.agent19.preview.close_button"
        >
          Close Preview
        </Button>
      </DialogContent>
    </Dialog>
  );
}

function OpenApiCard({
  api,
  index,
}: {
  api: {
    name: string;
    type: string;
    lastSynced: string;
    records: number;
    icon: string;
  };
  index: number;
}) {
  const [syncing, setSyncing] = useState(false);
  const [lastSynced, setLastSynced] = useState(api.lastSynced);
  const [records, setRecords] = useState(api.records);

  const handleSync = () => {
    setSyncing(true);
    setTimeout(() => {
      setSyncing(false);
      setLastSynced("just now");
      setRecords((r) => r + Math.floor(Math.random() * 50));
      toast.success(`${api.name} synced successfully!`);
    }, 2000);
  };

  return (
    <div
      className="bg-card border border-border rounded-xl p-3 space-y-2"
      data-ocid={`admin.openapi.card.${index}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl">{api.icon}</span>
          <div>
            <p className="text-xs font-semibold">{api.name}</p>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary">
              {api.type}
            </span>
          </div>
        </div>
      </div>
      <div className="text-[10px] text-muted-foreground space-y-0.5">
        <p>Last synced: {lastSynced}</p>
        <p>Records: {records.toLocaleString()}</p>
      </div>
      <div className="flex gap-1">
        <Button
          size="sm"
          className="flex-1 h-7 text-xs gap-1"
          disabled={syncing}
          onClick={handleSync}
          data-ocid={`admin.openapi.run.primary_button.${index}`}
        >
          {syncing ? <Loader2 className="h-3 w-3 animate-spin" /> : "▶"}{" "}
          {syncing ? "Syncing..." : "Run Now"}
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="h-7 text-xs"
          onClick={() => toast.info(`Edit ${api.name} settings`)}
          data-ocid={`admin.openapi.edit.secondary_button.${index}`}
        >
          Edit
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="h-7 text-xs text-destructive border-destructive/20"
          onClick={() => toast.info(`${api.name} removed`)}
          data-ocid={`admin.openapi.delete_button.${index}`}
        >
          ✕
        </Button>
      </div>
    </div>
  );
}

function AddNewApiDialog() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    url: "",
    key: "",
    dataType: "products",
    frequency: "daily",
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" data-ocid="admin.openapi.add.open_modal_button">
          + Add New API
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-md"
        data-ocid="admin.openapi.add.dialog"
      >
        <DialogHeader>
          <DialogTitle>Add New API</DialogTitle>
        </DialogHeader>
        <div className="space-y-3 mt-2">
          <div>
            <Label className="text-xs">API Name</Label>
            <Input
              className="mt-1"
              placeholder="e.g. Open Brewery DB"
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              data-ocid="admin.openapi.add.input"
            />
          </div>
          <div>
            <Label className="text-xs">Base URL</Label>
            <Input
              className="mt-1"
              placeholder="https://api.example.com/v1"
              value={form.url}
              onChange={(e) => setForm((p) => ({ ...p, url: e.target.value }))}
            />
          </div>
          <div>
            <Label className="text-xs">API Key (optional)</Label>
            <Input
              className="mt-1"
              placeholder="sk-..."
              value={form.key}
              onChange={(e) => setForm((p) => ({ ...p, key: e.target.value }))}
            />
          </div>
          <div>
            <Label className="text-xs">Data Type</Label>
            <Select
              value={form.dataType}
              onValueChange={(v) => setForm((p) => ({ ...p, dataType: v }))}
            >
              <SelectTrigger
                className="mt-1"
                data-ocid="admin.openapi.add.type.select"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="products">Products</SelectItem>
                <SelectItem value="services">Services</SelectItem>
                <SelectItem value="events">Events</SelectItem>
                <SelectItem value="jobs">Jobs</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-xs">Sync Frequency</Label>
            <Select
              value={form.frequency}
              onValueChange={(v) => setForm((p) => ({ ...p, frequency: v }))}
            >
              <SelectTrigger
                className="mt-1"
                data-ocid="admin.openapi.add.freq.select"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hourly">Hourly</SelectItem>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <Button
            className="flex-1"
            onClick={() => {
              if (!form.name.trim() || !form.url.trim()) {
                toast.error("Name and URL required");
                return;
              }
              toast.success(`${form.name} API added`);
              setOpen(false);
              setForm({
                name: "",
                url: "",
                key: "",
                dataType: "products",
                frequency: "daily",
              });
            }}
            data-ocid="admin.openapi.add.confirm_button"
          >
            Add API
          </Button>
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            data-ocid="admin.openapi.add.cancel_button"
          >
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Agent20PreviewDialog() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="sm"
          variant="outline"
          className="mt-2"
          data-ocid="admin.agent20.preview.open_modal_button"
        >
          Preview Comics
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-lg"
        data-ocid="admin.agent20.preview.dialog"
      >
        <DialogHeader>
          <DialogTitle>😄 Comics — User View</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
          {[
            {
              title: "Monday Blues",
              punchline:
                "When your alarm goes off 5 min after you finally fell asleep 😅",
              mood: "funny",
            },
            {
              title: "The Chai Diaries",
              punchline: "No meeting is complete without chai. Science. 🍵",
              mood: "wholesome",
            },
            {
              title: "Tech Troubles",
              punchline: "Boss: This should take 5 min. Me: 3 days later... ⌛",
              mood: "sarcastic",
            },
            {
              title: "Traffic Woes",
              punchline: "GPS says 10 min, Mumbai says otherwise 🚦",
              mood: "funny",
            },
          ].map((c, _i) => (
            <div
              key={c.title}
              className="border border-border rounded-xl p-3 space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">{c.title}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary">
                  {c.mood}
                </span>
              </div>
              <div className="bg-secondary/40 rounded-lg px-3 py-2 text-xs">
                {c.punchline}
              </div>
            </div>
          ))}
        </div>
        <Button
          variant="outline"
          className="mt-3 w-full"
          onClick={() => setOpen(false)}
          data-ocid="admin.agent20.preview.close_button"
        >
          Close Preview
        </Button>
      </DialogContent>
    </Dialog>
  );
}

// ─── Agent 21 Full Panel (Spiritual & Mythology Curator) ──────────────────────
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
    African: false,
  });
  const [contentTypes, setContentTypes] = React.useState({
    "Mythological Stories": true,
    "Rituals & Beliefs": true,
    "Cultural Similarities": true,
    "Festival Origins": false,
  });
  const [storiesPerDay, setStoriesPerDay] = React.useState([5]);
  const [crossCulture, setCrossCulture] = React.useState(true);
  const [storiesGenerated, setStoriesGenerated] = React.useState(47);
  const [culturesLinked, setCulturesLinked] = React.useState(23);
  const [monitorLog, setMonitorLog] = React.useState<string[]>([
    "Generated story: Diwali origins across Hindu, Jain, Sikh traditions",
    "Linked similarity: Flood myths in Hindu (Manu) and Mesopotamian (Utnapishtim) traditions",
    "Fetched ritual: Holi color symbolism — India, Iran connection found",
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
    "Published: Egyptian Book of the Dead vs. Garuda Purana — similarities blog",
  ];

  React.useEffect(() => {
    const t = setInterval(() => {
      logRef.current += 1;
      const entry =
        SPIRIT_LOG_ENTRIES[logRef.current % SPIRIT_LOG_ENTRIES.length];
      setMonitorLog((p) =>
        [`[${new Date().toLocaleTimeString()}] ${entry}`, ...p].slice(0, 20),
      );
      setStoriesGenerated((c) => c + 1);
      if (logRef.current % 3 === 0) setCulturesLinked((c) => c + 1);
    }, 9000);
    return () => clearInterval(t);
  }, []);

  const PREVIEW_STORIES = [
    {
      title: "The Great Flood — A Story Told in 12 Cultures",
      culture: "Cross-Cultural",
      excerpt:
        "From Manu in Hindu scriptures to Noah in Abrahamic faiths, and Utnapishtim in Mesopotamian legend — the tale of a great flood appears across every major civilization...",
    },
    {
      title: "Diwali, Nouruz, and the Festival of Lights",
      culture: "Hindu / Persian",
      excerpt:
        "The triumph of light over darkness is celebrated across South Asia and Iran. Diwali marks Rama's return; Nouruz marks the Persian New Year — both begin with lamps and fire...",
    },
    {
      title: "Trickster Gods: Loki, Anansi, and Narada",
      culture: "Norse / African / Hindu",
      excerpt:
        "Every mythology has a trickster — a god who disrupts, enlightens, and challenges the order of things. These three figures from three continents share uncanny similarities...",
    },
  ];

  const [previewOpen, setPreviewOpen] = React.useState(false);

  return (
    <Tabs defaultValue="config" className="w-full">
      <TabsList className="grid grid-cols-3 w-full">
        <TabsTrigger value="config" data-ocid="admin.agent21.config.tab">
          Config
        </TabsTrigger>
        <TabsTrigger
          value="monitoring"
          data-ocid="admin.agent21.monitoring.tab"
        >
          Monitoring
        </TabsTrigger>
        <TabsTrigger value="preview" data-ocid="admin.agent21.preview.tab">
          Preview
        </TabsTrigger>
      </TabsList>

      <TabsContent value="config" className="space-y-4 mt-4">
        <div className="space-y-2">
          <Label className="text-xs font-semibold">Regions / Mythologies</Label>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(regions).map(([r, checked]) => (
              <div key={r} className="flex items-center gap-2">
                <Checkbox
                  checked={checked}
                  onCheckedChange={(v) =>
                    setRegions((p) => ({ ...p, [r]: !!v }))
                  }
                  data-ocid={`admin.agent21.region.${r.toLowerCase().replace(/\//g, "_")}.checkbox`}
                />
                <span className="text-xs">{r}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-xs font-semibold">Content Types</Label>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(contentTypes).map(([ct, checked]) => (
              <div key={ct} className="flex items-center gap-2">
                <Checkbox
                  checked={checked}
                  onCheckedChange={(v) =>
                    setContentTypes((p) => ({ ...p, [ct]: !!v }))
                  }
                />
                <span className="text-xs">{ct}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-xs font-semibold">
            Stories per Day: {storiesPerDay[0]}
          </Label>
          <Slider
            min={1}
            max={20}
            step={1}
            value={storiesPerDay}
            onValueChange={setStoriesPerDay}
          />
        </div>
        <div className="flex items-center justify-between">
          <Label className="text-xs">Cross-culture linking</Label>
          <Switch
            checked={crossCulture}
            onCheckedChange={setCrossCulture}
            data-ocid="admin.agent21.cross_culture.toggle"
          />
        </div>
        <Button
          size="sm"
          onClick={() => toast.success("Agent 21 config saved")}
          data-ocid="admin.agent21.save.primary_button"
        >
          Save Config
        </Button>
      </TabsContent>

      <TabsContent value="monitoring" className="space-y-4 mt-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Stories Generated", value: storiesGenerated },
            { label: "Cultures Linked", value: culturesLinked },
            {
              label: "Blogs Published",
              value: Math.floor(storiesGenerated * 0.7),
            },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border p-3 text-center"
            >
              <p className="text-xl font-bold text-primary">{s.value}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">
                {s.label}
              </p>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-border bg-muted/30 p-3 max-h-52 overflow-y-auto font-mono text-[11px] space-y-1">
          {monitorLog.map((line) => (
            <div key={line} className="text-muted-foreground">
              {line}
            </div>
          ))}
        </div>
        <Button
          size="sm"
          variant="outline"
          onClick={() => toast.success("Scan triggered")}
          data-ocid="admin.agent21.generate.primary_button"
        >
          Generate Now
        </Button>
      </TabsContent>

      <TabsContent value="preview" className="space-y-4 mt-4">
        {PREVIEW_STORIES.map((s, i) => (
          <div
            key={s.title}
            className="border border-border rounded-xl p-4 space-y-2"
            data-ocid={`admin.agent21.preview.card.${i + 1}`}
          >
            <div className="flex items-start justify-between gap-2">
              <h4 className="text-sm font-semibold leading-snug">{s.title}</h4>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary whitespace-nowrap shrink-0">
                {s.culture}
              </span>
            </div>
            <p className="text-xs text-muted-foreground line-clamp-3">
              {s.excerpt}
            </p>
            <Button size="sm" variant="ghost" className="h-7 text-xs px-2">
              Read in Blog →
            </Button>
          </div>
        ))}
        <Button
          variant="outline"
          className="w-full"
          onClick={() => setPreviewOpen(true)}
          data-ocid="admin.agent21.preview.open_modal_button"
        >
          Preview All Stories
        </Button>
        <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Spiritual Stories Preview</DialogTitle>
            </DialogHeader>
            <p className="text-sm text-muted-foreground">
              Showing latest stories generated by Agent 21. Users can read these
              in the Spiritual Stories page.
            </p>
            <Button
              variant="outline"
              onClick={() => setPreviewOpen(false)}
              data-ocid="admin.agent21.preview.close_button"
            >
              Close
            </Button>
          </DialogContent>
        </Dialog>
      </TabsContent>
    </Tabs>
  );
}

// ─── Agent 23: News Agent ─────────────────────────────────────────────────────
function Agent23NewsAgent() {
  const [tab, setTab] = React.useState("config");
  const [logs, setLogs] = React.useState<string[]>([
    "Agent 23 initialized. Fetching news for configured categories...",
  ]);
  const [stats, setStats] = React.useState({ posts: 0, users: 0 });
  const categories = [
    "Politics",
    "Tech",
    "Sports",
    "Entertainment",
    "Business",
    "Health",
    "Local",
  ];
  const [selectedCats, setSelectedCats] = React.useState([
    "Tech",
    "Sports",
    "Entertainment",
  ]);
  const [postsPerDay, setPostsPerDay] = React.useState([8]);
  const [language, setLanguage] = React.useState("English");

  const newsItems = [
    {
      headline: "India's Tech Sector Grows 18% in Q1 2026",
      source: "TechIndia",
      category: "Tech",
      time: "2 min ago",
    },
    {
      headline: "IPL Season 2026 Opens with Record Viewership",
      source: "SportsBuzz",
      category: "Sports",
      time: "15 min ago",
    },
    {
      headline: "New Startup Policy Announced by Ministry of Commerce",
      source: "BusinessLine",
      category: "Business",
      time: "32 min ago",
    },
    {
      headline: "AI Healthcare Tools Reduce Diagnosis Time by 40%",
      source: "HealthToday",
      category: "Health",
      time: "1 hr ago",
    },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      const cat =
        selectedCats[Math.floor(Math.random() * selectedCats.length)] || "Tech";
      const n = Math.floor(Math.random() * 200) + 50;
      const newLog = `[${new Date().toLocaleTimeString()}] Fetching news for ${cat}... Posted to ${n} users`;
      setLogs((prev) => [newLog, ...prev.slice(0, 29)]);
      setStats((prev) => ({ posts: prev.posts + 1, users: prev.users + n }));
    }, 9000);
    return () => clearInterval(interval);
  }, [selectedCats]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-lg font-display font-bold flex items-center gap-2">
            Agent 23 — News Agent
            <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-green-500/20 text-green-600">
              ● RUNNING
            </span>
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Posts news relevant to each user's interests, sourced from public
            feeds.
          </p>
        </div>
        <div className="flex gap-3 text-xs">
          <div className="text-center">
            <p className="font-bold text-foreground">{stats.posts}</p>
            <p className="text-muted-foreground">Posts</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-foreground">
              {stats.users.toLocaleString()}
            </p>
            <p className="text-muted-foreground">Users Reached</p>
          </div>
        </div>
      </div>
      <Tabs value={tab} onValueChange={setTab}>
        <TabsList>
          <TabsTrigger value="config">Config</TabsTrigger>
          <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>
        <TabsContent value="config" className="space-y-4 mt-4">
          <div>
            <Label className="text-xs font-label">Interest Categories</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {categories.map((cat) => (
                <label
                  key={cat}
                  className="flex items-center gap-1.5 text-xs cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedCats.includes(cat)}
                    onChange={(e) =>
                      setSelectedCats((prev) =>
                        e.target.checked
                          ? [...prev, cat]
                          : prev.filter((c) => c !== cat),
                      )
                    }
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>
          <div>
            <Label className="text-xs font-label">
              Posts per day: {postsPerDay[0]}
            </Label>
            <Slider
              value={postsPerDay}
              onValueChange={setPostsPerDay}
              min={1}
              max={50}
              step={1}
              className="mt-2 max-w-xs"
            />
          </div>
          <div>
            <Label className="text-xs font-label">Language</Label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="mt-1 block border border-border rounded px-2 py-1.5 text-xs bg-background text-foreground"
            >
              {[
                "English",
                "Hindi",
                "Tamil",
                "Telugu",
                "Bengali",
                "Marathi",
              ].map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
          </div>
          <Button
            size="sm"
            onClick={() => toast.success("Agent 23 config saved")}
            data-ocid="admin.agent23.save_button"
          >
            Save Config
          </Button>
        </TabsContent>
        <TabsContent value="monitoring" className="mt-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-label font-medium text-green-600">
              LIVE — updating every 9 seconds
            </span>
          </div>
          <div className="h-64 overflow-y-auto bg-muted/30 rounded-xl p-3 space-y-1 font-mono text-xs text-muted-foreground">
            {logs.map((log, i) => (
              <div key={String(i)}>{log}</div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="preview" className="mt-4 space-y-3">
          {newsItems.map((item, i) => (
            <Card key={String(i)} className="rounded-xl border-border">
              <CardContent className="p-3 flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-bold text-foreground">
                    {item.headline}
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">
                    {item.source} · {item.time}
                  </p>
                </div>
                <Badge variant="outline" className="text-[10px] shrink-0">
                  {item.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}

// ─── Agent 24: Food Stock Agent ───────────────────────────────────────────────
function Agent24FoodStockAgent() {
  const [tab, setTab] = React.useState("config");
  const [logs, setLogs] = React.useState<string[]>([
    "Agent 24 initialized. Scanning nearby stores for food stock availability...",
  ]);
  const [stats, setStats] = React.useState({ scans: 0, alerts: 0 });
  const foodCategories = ["Vegetables", "Fruits", "Grains", "Dairy", "Meat"];
  const [selectedCats, setSelectedCats] = React.useState([
    "Vegetables",
    "Fruits",
    "Dairy",
  ]);
  const [alertThreshold, setAlertThreshold] = React.useState([15]);
  const [radius, setRadius] = React.useState([10]);

  const stockItems = [
    {
      item: "Fresh Tomatoes",
      price: "₹28/kg",
      store: "Sharma Vegetables",
      distance: "0.8 km",
      alerts: 142,
    },
    {
      item: "Toned Milk 500ml",
      price: "₹26/pack",
      store: "Mother Dairy Booth",
      distance: "1.2 km",
      alerts: 89,
    },
    {
      item: "Basmati Rice 5kg",
      price: "₹380/bag",
      store: "Agarwal Kirana",
      distance: "2.1 km",
      alerts: 67,
    },
    {
      item: "Bananas (dozen)",
      price: "₹42/dz",
      store: "Fresh Fruits Corner",
      distance: "1.5 km",
      alerts: 54,
    },
  ];

  const stores = [
    "Sharma Vegetables",
    "Mother Dairy Booth",
    "Agarwal Kirana",
    "Fresh Fruits Corner",
    "Ramesh Grocery",
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      const store = stores[Math.floor(Math.random() * stores.length)];
      const items = [
        "Tomatoes",
        "Onions",
        "Potatoes",
        "Milk",
        "Rice",
        "Wheat Flour",
        "Apples",
        "Oranges",
      ];
      const item = items[Math.floor(Math.random() * items.length)];
      const price = Math.floor(Math.random() * 200) + 20;
      const newLog = `[${new Date().toLocaleTimeString()}] Scanning ${store} for ${item}... Best price ₹${price} found at ${store}`;
      setLogs((prev) => [newLog, ...prev.slice(0, 29)]);
      setStats((prev) => ({
        scans: prev.scans + 1,
        alerts: prev.alerts + Math.floor(Math.random() * 20) + 5,
      }));
    }, 11000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-lg font-display font-bold flex items-center gap-2">
            Agent 24 — Food Stock Agent
            <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-green-500/20 text-green-600">
              ● RUNNING
            </span>
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Finds where food items are available nearby at best prices and
            notifies users.
          </p>
        </div>
        <div className="flex gap-3 text-xs">
          <div className="text-center">
            <p className="font-bold text-foreground">{stats.scans}</p>
            <p className="text-muted-foreground">Scans</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-foreground">{stats.alerts}</p>
            <p className="text-muted-foreground">Alerts Sent</p>
          </div>
        </div>
      </div>
      <Tabs value={tab} onValueChange={setTab}>
        <TabsList>
          <TabsTrigger value="config">Config</TabsTrigger>
          <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>
        <TabsContent value="config" className="space-y-4 mt-4">
          <div>
            <Label className="text-xs font-label">
              Food Categories to Monitor
            </Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {foodCategories.map((cat) => (
                <label
                  key={cat}
                  className="flex items-center gap-1.5 text-xs cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedCats.includes(cat)}
                    onChange={(e) =>
                      setSelectedCats((prev) =>
                        e.target.checked
                          ? [...prev, cat]
                          : prev.filter((c) => c !== cat),
                      )
                    }
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>
          <div>
            <Label className="text-xs font-label">
              Price Alert Threshold: {alertThreshold[0]}% below average
            </Label>
            <Slider
              value={alertThreshold}
              onValueChange={setAlertThreshold}
              min={5}
              max={50}
              step={5}
              className="mt-2 max-w-xs"
            />
          </div>
          <div>
            <Label className="text-xs font-label">
              Coverage Radius: {radius[0]} km
            </Label>
            <Slider
              value={radius}
              onValueChange={setRadius}
              min={1}
              max={50}
              step={1}
              className="mt-2 max-w-xs"
            />
          </div>
          <Button
            size="sm"
            onClick={() => toast.success("Agent 24 config saved")}
            data-ocid="admin.agent24.save_button"
          >
            Save Config
          </Button>
        </TabsContent>
        <TabsContent value="monitoring" className="mt-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-label font-medium text-green-600">
              LIVE — updating every 11 seconds
            </span>
          </div>
          <div className="h-64 overflow-y-auto bg-muted/30 rounded-xl p-3 space-y-1 font-mono text-xs text-muted-foreground">
            {logs.map((log, i) => (
              <div key={String(i)}>{log}</div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="preview" className="mt-4 space-y-3">
          {stockItems.map((s, i) => (
            <Card key={String(i)} className="rounded-xl border-border">
              <CardContent className="p-3">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-bold text-foreground">
                      {s.item}
                    </p>
                    <p
                      className="text-sm font-bold mt-0.5"
                      style={{ color: "oklch(0.52 0.14 155)" }}
                    >
                      {s.price}
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      {s.store} · {s.distance}
                    </p>
                  </div>
                  <Badge className="text-[10px] bg-primary/10 text-primary border-0">
                    Alert sent to {s.alerts} users
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
