import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertTriangle,
  Bell,
  Briefcase,
  Building2,
  Calendar,
  Car,
  CheckCircle2,
  ChevronRight,
  Clock,
  CreditCard,
  Home,
  LogIn,
  LogOut,
  MapPin,
  Package,
  Phone,
  Plus,
  QrCode,
  Settings,
  ShieldCheck,
  Tag,
  Truck,
  User,
  Users,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import EventsTab from "../components/EventsTab";
import QuickAddBar from "../components/QuickAddBar";
import { addNotification } from "../stores/notificationStore";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
type BadgeType = "Guest" | "Worker" | "Delivery" | "Emergency";
type ComplaintStatus = "Open" | "Assigned" | "Resolved";
type ComplaintCategory =
  | "Plumbing"
  | "Electrical"
  | "Cleaning"
  | "Noise"
  | "Security"
  | "Other";
type Urgency = "Low" | "Medium" | "High";

interface VisitorBadge {
  id: number;
  name: string;
  phone: string;
  badgeType: BadgeType;
  flat: string;
  purpose: string;
  entryTime: string;
  badgeNumber: string;
}

interface EntryLog {
  id: number;
  name: string;
  type: "Resident" | "Visitor";
  flat: string;
  checkIn: string;
  checkOut: string | null;
  purpose: string;
}

interface StaffMember {
  id: number;
  name: string;
  role: "Guard" | "Maintenance" | "Housekeeping" | "CCTV Operator";
  phone: string;
  shift: "Morning" | "Afternoon" | "Night";
}

interface Complaint {
  id: number;
  flat: string;
  category: ComplaintCategory;
  description: string;
  urgency: Urgency;
  status: ComplaintStatus;
  assignedTo: string | null;
}

interface MaintenanceDue {
  id: number;
  title: string;
  amount: number;
  dueDate: string;
  paid: boolean;
}

interface ParkingSlot {
  id: number;
  slotNo: string;
  block: string;
  type: "Covered" | "Open";
  dailyRate: number;
  monthlyRate: number;
  available: boolean;
  owner: string;
}

interface CommunityProperty {
  id: number;
  flatNo: string;
  type: "Apartment" | "Villa";
  size: string;
  listingType: "For Sale" | "For Rent";
  price: string;
  floor: number;
}

interface BidEntry {
  id: number;
  itemId: string;
  itemName: string;
  itemType: "property" | "parking";
  bidder: string;
  amount: number;
  timestamp: string;
  status: "Pending" | "Accepted" | "Rejected";
}

interface MarketplaceItem {
  id: number;
  name: string;
  category: "Food" | "Grocery" | "Medical" | "Services" | "Products";
  regularPrice: number;
  communityPrice: number;
  seller: string;
  unit: string;
  gradient: string;
}

interface PendingMember {
  id: number;
  name: string;
  flat: string;
  role: "Owner" | "Tenant";
}

// ─────────────────────────────────────────────
// Sample Data
// ─────────────────────────────────────────────
const PENDING_MEMBERS: PendingMember[] = [
  { id: 1, name: "Farrukh Tashkentov", flat: "B-204", role: "Owner" },
  { id: 2, name: "Ayesha Siddiqui", flat: "C-112", role: "Tenant" },
  { id: 3, name: "Muhammad Bilal", flat: "A-301", role: "Owner" },
];

const ENTRY_LOGS: EntryLog[] = [
  {
    id: 1,
    name: "Tariq Mehmood",
    type: "Resident",
    flat: "A-101",
    checkIn: "08:15 AM",
    checkOut: "06:30 PM",
    purpose: "Resident",
  },
  {
    id: 2,
    name: "Delivery Boy (TCS)",
    type: "Visitor",
    flat: "B-204",
    checkIn: "10:45 AM",
    checkOut: "10:52 AM",
    purpose: "Parcel Delivery",
  },
  {
    id: 3,
    name: "Sara Khan",
    type: "Resident",
    flat: "C-305",
    checkIn: "09:00 AM",
    checkOut: null,
    purpose: "Resident",
  },
  {
    id: 4,
    name: "Plumber Hassan",
    type: "Visitor",
    flat: "D-102",
    checkIn: "11:20 AM",
    checkOut: null,
    purpose: "Maintenance Work",
  },
  {
    id: 5,
    name: "Ali Raza",
    type: "Resident",
    flat: "A-202",
    checkIn: "07:30 AM",
    checkOut: "09:00 PM",
    purpose: "Resident",
  },
  {
    id: 6,
    name: "Nabila Perveen",
    type: "Visitor",
    flat: "C-112",
    checkIn: "02:00 PM",
    checkOut: null,
    purpose: "Family Visit",
  },
  {
    id: 7,
    name: "Imran Butt",
    type: "Resident",
    flat: "B-301",
    checkIn: "08:45 AM",
    checkOut: "05:15 PM",
    purpose: "Resident",
  },
  {
    id: 8,
    name: "Food Rider (Foodpanda)",
    type: "Visitor",
    flat: "A-405",
    checkIn: "01:30 PM",
    checkOut: "01:38 PM",
    purpose: "Food Delivery",
  },
];

const STAFF: StaffMember[] = [
  {
    id: 1,
    name: "Ghulam Sarwar",
    role: "Guard",
    phone: "0312-3456789",
    shift: "Morning",
  },
  {
    id: 2,
    name: "Naseer Ahmad",
    role: "Guard",
    phone: "0333-9876543",
    shift: "Night",
  },
  {
    id: 3,
    name: "Akbar Ali",
    role: "Maintenance",
    phone: "0321-1122334",
    shift: "Morning",
  },
  {
    id: 4,
    name: "Rubina Bibi",
    role: "Housekeeping",
    phone: "0345-6677889",
    shift: "Afternoon",
  },
  {
    id: 5,
    name: "Zubair Hussain",
    role: "CCTV Operator",
    phone: "0311-2233445",
    shift: "Night",
  },
  {
    id: 6,
    name: "Pervez Akhtar",
    role: "Guard",
    phone: "0322-5544332",
    shift: "Afternoon",
  },
];

const SHIFT_TIMETABLE: Record<
  "Morning" | "Afternoon" | "Night",
  Record<string, string[]>
> = {
  Morning: {
    Mon: ["Ghulam Sarwar", "Akbar Ali"],
    Tue: ["Ghulam Sarwar", "Akbar Ali"],
    Wed: ["Ghulam Sarwar"],
    Thu: ["Ghulam Sarwar", "Akbar Ali"],
    Fri: ["Akbar Ali"],
    Sat: ["Ghulam Sarwar"],
    Sun: ["Akbar Ali"],
  },
  Afternoon: {
    Mon: ["Pervez Akhtar", "Rubina Bibi"],
    Tue: ["Pervez Akhtar"],
    Wed: ["Pervez Akhtar", "Rubina Bibi"],
    Thu: ["Rubina Bibi"],
    Fri: ["Pervez Akhtar", "Rubina Bibi"],
    Sat: ["Pervez Akhtar"],
    Sun: ["Rubina Bibi"],
  },
  Night: {
    Mon: ["Naseer Ahmad", "Zubair Hussain"],
    Tue: ["Zubair Hussain"],
    Wed: ["Naseer Ahmad"],
    Thu: ["Naseer Ahmad", "Zubair Hussain"],
    Fri: ["Zubair Hussain"],
    Sat: ["Naseer Ahmad"],
    Sun: ["Naseer Ahmad", "Zubair Hussain"],
  },
};

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const INITIAL_COMPLAINTS: Complaint[] = [
  {
    id: 1,
    flat: "A-101",
    category: "Plumbing",
    description: "Leaking pipe under kitchen sink",
    urgency: "High",
    status: "Assigned",
    assignedTo: "Akbar Ali",
  },
  {
    id: 2,
    flat: "B-204",
    category: "Electrical",
    description: "Corridor light not working since 3 days",
    urgency: "Medium",
    status: "Open",
    assignedTo: null,
  },
  {
    id: 3,
    flat: "C-305",
    category: "Noise",
    description: "Loud music from floor above after midnight",
    urgency: "Medium",
    status: "Resolved",
    assignedTo: "Security Team",
  },
  {
    id: 4,
    flat: "D-102",
    category: "Cleaning",
    description: "Garbage not collected for 2 days",
    urgency: "Low",
    status: "Open",
    assignedTo: null,
  },
  {
    id: 5,
    flat: "A-202",
    category: "Security",
    description: "Unknown vehicle parked in my slot",
    urgency: "High",
    status: "Assigned",
    assignedTo: "Ghulam Sarwar",
  },
  {
    id: 6,
    flat: "C-112",
    category: "Other",
    description: "Elevator buttons not responding on 3rd floor",
    urgency: "High",
    status: "Resolved",
    assignedTo: "Maintenance Vendor",
  },
];

const MAINTENANCE_DUES: MaintenanceDue[] = [
  {
    id: 1,
    title: "Monthly Maintenance",
    amount: 2500,
    dueDate: "30 Jan 2026",
    paid: false,
  },
  {
    id: 2,
    title: "Water Bill",
    amount: 450,
    dueDate: "15 Feb 2026",
    paid: false,
  },
  {
    id: 3,
    title: "Security Upgrade Fund",
    amount: 1000,
    dueDate: "28 Feb 2026",
    paid: true,
  },
  {
    id: 4,
    title: "Generator Fuel",
    amount: 600,
    dueDate: "10 Jan 2026",
    paid: true,
  },
];

const MARKETPLACE_ITEMS: MarketplaceItem[] = [
  {
    id: 1,
    name: "Fresh Chicken Biryani",
    category: "Food",
    regularPrice: 350,
    communityPrice: 299,
    seller: "Fatima (A-202)",
    unit: "per portion",
    gradient: "from-orange-400 to-red-500",
  },
  {
    id: 2,
    name: "Organic Vegetables Pack",
    category: "Grocery",
    regularPrice: 600,
    communityPrice: 499,
    seller: "Green Basket (B-101)",
    unit: "2kg pack",
    gradient: "from-green-400 to-emerald-600",
  },
  {
    id: 3,
    name: "Panadol Extra (Pack of 10)",
    category: "Medical",
    regularPrice: 120,
    communityPrice: 99,
    seller: "Pharmacy Hub (C-GF)",
    unit: "per pack",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    id: 4,
    name: "Home Cleaning Service",
    category: "Services",
    regularPrice: 1500,
    communityPrice: 1200,
    seller: "CleanPro (D-104)",
    unit: "per session",
    gradient: "from-purple-400 to-violet-600",
  },
  {
    id: 5,
    name: "Dahi (Yogurt)",
    category: "Grocery",
    regularPrice: 180,
    communityPrice: 150,
    seller: "Dairy Fresh (A-GF)",
    unit: "500g tub",
    gradient: "from-yellow-300 to-amber-500",
  },
  {
    id: 6,
    name: "AC Repair & Service",
    category: "Services",
    regularPrice: 2500,
    communityPrice: 1999,
    seller: "TechCool (B-204)",
    unit: "per unit",
    gradient: "from-sky-400 to-blue-600",
  },
  {
    id: 7,
    name: "Shawarma Roll",
    category: "Food",
    regularPrice: 250,
    communityPrice: 199,
    seller: "Grill House (C-201)",
    unit: "per roll",
    gradient: "from-amber-400 to-orange-600",
  },
  {
    id: 8,
    name: "Nurofen (6 tablets)",
    category: "Medical",
    regularPrice: 95,
    communityPrice: 79,
    seller: "Pharmacy Hub (C-GF)",
    unit: "per strip",
    gradient: "from-teal-400 to-cyan-600",
  },
  {
    id: 9,
    name: "Handmade Cushion Covers",
    category: "Products",
    regularPrice: 800,
    communityPrice: 649,
    seller: "Crafts by Nadia (D-301)",
    unit: "set of 2",
    gradient: "from-pink-400 to-rose-600",
  },
];

const PARKING_SLOTS: ParkingSlot[] = [
  {
    id: 1,
    slotNo: "P-12",
    block: "A",
    type: "Covered",
    dailyRate: 200,
    monthlyRate: 3500,
    available: true,
    owner: "Tariq (A-101)",
  },
  {
    id: 2,
    slotNo: "P-27",
    block: "B",
    type: "Open",
    dailyRate: 100,
    monthlyRate: 1800,
    available: false,
    owner: "Sara (C-305)",
  },
  {
    id: 3,
    slotNo: "P-08",
    block: "A",
    type: "Covered",
    dailyRate: 250,
    monthlyRate: 4200,
    available: true,
    owner: "Ali (A-202)",
  },
  {
    id: 4,
    slotNo: "P-35",
    block: "C",
    type: "Open",
    dailyRate: 120,
    monthlyRate: 2000,
    available: true,
    owner: "Imran (B-301)",
  },
  {
    id: 5,
    slotNo: "P-19",
    block: "D",
    type: "Covered",
    dailyRate: 220,
    monthlyRate: 3800,
    available: false,
    owner: "Nabila (C-112)",
  },
];

const COMMUNITY_PROPERTIES: CommunityProperty[] = [
  {
    id: 1,
    flatNo: "B-301",
    type: "Apartment",
    size: "1,200 sqft",
    listingType: "For Sale",
    price: "PKR 1.8 Cr",
    floor: 3,
  },
  {
    id: 2,
    flatNo: "A-104",
    type: "Apartment",
    size: "950 sqft",
    listingType: "For Rent",
    price: "PKR 55,000/mo",
    floor: 1,
  },
  {
    id: 3,
    flatNo: "D-Villa-2",
    type: "Villa",
    size: "3,500 sqft",
    listingType: "For Sale",
    price: "PKR 4.5 Cr",
    floor: 0,
  },
  {
    id: 4,
    flatNo: "C-205",
    type: "Apartment",
    size: "1,050 sqft",
    listingType: "For Rent",
    price: "PKR 45,000/mo",
    floor: 2,
  },
];

const RECENT_ACTIVITY = [
  {
    icon: LogIn,
    text: "Tariq Mehmood checked in via QR",
    time: "2 min ago",
    color: "text-green-500",
  },
  {
    icon: AlertTriangle,
    text: "New complaint: Plumbing issue in A-101",
    time: "15 min ago",
    color: "text-orange-500",
  },
  {
    icon: User,
    text: "Ayesha Siddiqui requested community access",
    time: "1 hr ago",
    color: "text-primary",
  },
  {
    icon: CreditCard,
    text: "Monthly maintenance payment received from B-204",
    time: "3 hrs ago",
    color: "text-accent",
  },
  {
    icon: CheckCircle2,
    text: "Complaint #3 resolved — Noise issue C-305",
    time: "5 hrs ago",
    color: "text-green-500",
  },
];

const NOTICES = [
  {
    title: "Water Supply Interruption",
    body: "Water supply will be off on Sunday 10:00 AM – 2:00 PM for maintenance work on the main pipeline.",
    tag: "Utility",
    urgent: true,
    date: "2 Jan 2026",
  },
  {
    title: "Monthly Maintenance Due",
    body: "Monthly maintenance charges of PKR 2,500 are due by 30th January. Kindly pay via the app or at the management office.",
    tag: "Finance",
    urgent: false,
    date: "1 Jan 2026",
  },
  {
    title: "New CCTV Cameras Installed",
    body: "6 new HD cameras have been installed at main gate, parking area, and all stairwells. Footage accessible by management.",
    tag: "Security",
    urgent: false,
    date: "28 Dec 2025",
  },
];

// ─────────────────────────────────────────────
// Helper Components
// ─────────────────────────────────────────────
function StatCard({
  icon: Icon,
  label,
  value,
  color,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <Card className="rounded-xl border-border shadow-sm">
      <CardContent className="p-4 flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: `${color}22` }}
        >
          <Icon size={18} style={{ color }} />
        </div>
        <div>
          <p className="text-xs font-label text-muted-foreground">{label}</p>
          <p className="text-lg font-display font-bold text-foreground leading-none mt-0.5">
            {value}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

function UrgencyBadge({ urgency }: { urgency: Urgency }) {
  const map: Record<Urgency, { label: string; style: React.CSSProperties }> = {
    High: {
      label: "High",
      style: {
        background: "oklch(0.55 0.22 25 / 0.15)",
        color: "oklch(0.55 0.22 25)",
        border: "1px solid oklch(0.55 0.22 25 / 0.3)",
      },
    },
    Medium: {
      label: "Medium",
      style: {
        background: "oklch(0.72 0.19 85 / 0.15)",
        color: "oklch(0.65 0.19 85)",
        border: "1px solid oklch(0.72 0.19 85 / 0.3)",
      },
    },
    Low: {
      label: "Low",
      style: {
        background: "oklch(0.60 0.22 150 / 0.15)",
        color: "oklch(0.50 0.22 150)",
        border: "1px solid oklch(0.60 0.22 150 / 0.3)",
      },
    },
  };
  const { label, style } = map[urgency];
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-label font-semibold"
      style={style}
    >
      {label}
    </span>
  );
}

function StatusBadge({ status }: { status: ComplaintStatus }) {
  const map: Record<
    ComplaintStatus,
    { label: string; style: React.CSSProperties }
  > = {
    Open: {
      label: "Open",
      style: {
        background: "oklch(0.72 0.19 85 / 0.15)",
        color: "oklch(0.65 0.19 85)",
        border: "1px solid oklch(0.72 0.19 85 / 0.3)",
      },
    },
    Assigned: {
      label: "Assigned",
      style: {
        background: "oklch(0.55 0.22 280 / 0.15)",
        color: "oklch(0.55 0.22 280)",
        border: "1px solid oklch(0.55 0.22 280 / 0.3)",
      },
    },
    Resolved: {
      label: "Resolved",
      style: {
        background: "oklch(0.60 0.22 150 / 0.15)",
        color: "oklch(0.50 0.22 150)",
        border: "1px solid oklch(0.60 0.22 150 / 0.3)",
      },
    },
  };
  const { label, style } = map[status];
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-label font-semibold"
      style={style}
    >
      {label}
    </span>
  );
}

function BadgeCard({ badge }: { badge: VisitorBadge }) {
  const colorMap: Record<BadgeType, { bg: string; fg: string; label: string }> =
    {
      Guest: {
        bg: "oklch(0.55 0.22 280 / 0.12)",
        fg: "oklch(0.45 0.22 280)",
        label: "GUEST",
      },
      Worker: {
        bg: "oklch(0.72 0.19 85 / 0.12)",
        fg: "oklch(0.60 0.22 85)",
        label: "WORKER",
      },
      Delivery: {
        bg: "oklch(0.60 0.22 150 / 0.12)",
        fg: "oklch(0.48 0.22 150)",
        label: "DELIVERY",
      },
      Emergency: {
        bg: "oklch(0.55 0.22 25 / 0.12)",
        fg: "oklch(0.50 0.22 25)",
        label: "EMERGENCY",
      },
    };
  const color = colorMap[badge.badgeType];
  return (
    <div
      className="rounded-xl border p-4 mt-4 animate-fade-up"
      style={{ background: color.bg, borderColor: `${color.fg}44` }}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <span
            className="text-[10px] font-label font-bold tracking-widest"
            style={{ color: color.fg }}
          >
            VISITOR BADGE · {color.label}
          </span>
          <p className="text-base font-display font-bold text-foreground mt-0.5">
            {badge.name}
          </p>
        </div>
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-label font-bold"
          style={{ background: color.fg, color: "oklch(0.99 0.002 280)" }}
        >
          {badge.badgeNumber}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
        <div>
          <span className="text-[10px] font-label uppercase tracking-wide">
            Phone
          </span>
          <p className="font-semibold text-foreground">{badge.phone}</p>
        </div>
        <div>
          <span className="text-[10px] font-label uppercase tracking-wide">
            Visiting
          </span>
          <p className="font-semibold text-foreground">Flat {badge.flat}</p>
        </div>
        <div>
          <span className="text-[10px] font-label uppercase tracking-wide">
            Purpose
          </span>
          <p className="font-semibold text-foreground">{badge.purpose}</p>
        </div>
        <div>
          <span className="text-[10px] font-label uppercase tracking-wide">
            Entry
          </span>
          <p className="font-semibold text-foreground">{badge.entryTime}</p>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Tab 1: Overview
// ─────────────────────────────────────────────
function OverviewTab() {
  const [pendingMembers, setPendingMembers] = useState(PENDING_MEMBERS);

  const handleApprove = (id: number, name: string) => {
    setPendingMembers((prev) => prev.filter((m) => m.id !== id));
    toast.success(`${name} approved and added to community`);
  };

  const handleReject = (id: number, name: string) => {
    setPendingMembers((prev) => prev.filter((m) => m.id !== id));
    toast.error(`${name}'s request rejected`);
  };

  return (
    <div className="space-y-6 p-6">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={Building2}
          label="Total Units"
          value="120"
          color="oklch(0.55 0.22 280)"
        />
        <StatCard
          icon={Users}
          label="Residents"
          value="284"
          color="oklch(0.65 0.25 335)"
        />
        <StatCard
          icon={AlertTriangle}
          label="Active Complaints"
          value="7"
          color="oklch(0.65 0.19 85)"
        />
        <StatCard
          icon={CreditCard}
          label="Pending Dues"
          value="PKR 45K"
          color="oklch(0.55 0.22 25)"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pending Approvals */}
        <div className="lg:col-span-1">
          <Card className="rounded-xl border-border shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-label font-semibold flex items-center gap-2">
                <Users size={15} className="text-primary" />
                Pending Member Approvals
                {pendingMembers.length > 0 && (
                  <span
                    className="ml-auto text-xs rounded-full px-2 py-0.5 font-bold"
                    style={{
                      background: "oklch(0.65 0.25 335 / 0.15)",
                      color: "oklch(0.65 0.25 335)",
                    }}
                  >
                    {pendingMembers.length}
                  </span>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {pendingMembers.length === 0 ? (
                <p className="text-xs text-muted-foreground py-4 text-center">
                  No pending approvals
                </p>
              ) : (
                pendingMembers.map((m) => (
                  <div
                    key={m.id}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/40"
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-label font-bold shrink-0"
                      style={{
                        background: "oklch(0.55 0.22 280 / 0.15)",
                        color: "oklch(0.55 0.22 280)",
                      }}
                    >
                      {m.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-foreground truncate">
                        {m.name}
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        Flat {m.flat} · {m.role}
                      </p>
                    </div>
                    <div className="flex gap-1 shrink-0">
                      <Button
                        size="sm"
                        className="h-6 px-2 text-[10px] font-label"
                        onClick={() => handleApprove(m.id, m.name)}
                      >
                        Approve
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-6 px-2 text-[10px] font-label"
                        onClick={() => handleReject(m.id, m.name)}
                      >
                        Reject
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </div>

        {/* Notice Board */}
        <div className="lg:col-span-2">
          <Card className="rounded-xl border-border shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-label font-semibold flex items-center gap-2">
                <Bell size={15} className="text-primary" />
                Notice Board
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {NOTICES.map((n) => (
                <div
                  key={n.title}
                  className="flex gap-3 p-3 rounded-lg"
                  style={{
                    background: n.urgent
                      ? "oklch(0.55 0.22 25 / 0.07)"
                      : "oklch(0.55 0.22 280 / 0.06)",
                    borderLeft: `3px solid ${n.urgent ? "oklch(0.55 0.22 25)" : "oklch(0.55 0.22 280)"}`,
                  }}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-xs font-semibold text-foreground">
                        {n.title}
                      </p>
                      {n.urgent && (
                        <span
                          className="text-[9px] font-label font-bold px-1.5 py-0.5 rounded"
                          style={{
                            background: "oklch(0.55 0.22 25 / 0.15)",
                            color: "oklch(0.50 0.22 25)",
                          }}
                        >
                          URGENT
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      {n.body}
                    </p>
                    <p className="text-[10px] text-muted-foreground/60 mt-1.5 font-label">
                      {n.tag} · {n.date}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Activity */}
      <Card className="rounded-xl border-border shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-label font-semibold flex items-center gap-2">
            <Clock size={15} className="text-primary" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-0">
          {RECENT_ACTIVITY.map((a, idx) => {
            const Icon = a.icon;
            return (
              <div key={a.text}>
                <div className="flex items-center gap-3 py-3">
                  <Icon size={15} className={a.color} />
                  <p className="flex-1 text-sm text-foreground">{a.text}</p>
                  <span className="text-[11px] font-label text-muted-foreground shrink-0">
                    {a.time}
                  </span>
                </div>
                {idx < RECENT_ACTIVITY.length - 1 && (
                  <Separator className="opacity-50" />
                )}
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}

// ─────────────────────────────────────────────
// Tab 2: Gate Entry/Exit
// ─────────────────────────────────────────────
function GateEntryTab() {
  const [visitorName, setVisitorName] = useState("");
  const [visitorPhone, setVisitorPhone] = useState("");
  const [badgeType, setBadgeType] = useState<BadgeType>("Guest");
  const [flatToVisit, setFlatToVisit] = useState("");
  const [purpose, setPurpose] = useState("");
  const [generatedBadge, setGeneratedBadge] = useState<VisitorBadge | null>(
    null,
  );
  const [badgeCounter, setBadgeCounter] = useState(87);

  const handleRegisterVisitor = () => {
    if (!visitorName || !visitorPhone || !flatToVisit || !purpose) {
      toast.error("Please fill in all fields");
      return;
    }
    const now = new Date();
    const timeStr = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const newCounter = badgeCounter + 1;
    setBadgeCounter(newCounter);
    const badge: VisitorBadge = {
      id: newCounter,
      name: visitorName,
      phone: visitorPhone,
      badgeType,
      flat: flatToVisit,
      purpose,
      entryTime: timeStr,
      badgeNumber: `V-${newCounter}`,
    };
    setGeneratedBadge(badge);
    toast.success(
      `Visitor badge #V-${newCounter} generated and sent to ${visitorPhone}`,
    );
    setVisitorName("");
    setVisitorPhone("");
    setFlatToVisit("");
    setPurpose("");
  };

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Resident QR Code */}
        <Card className="rounded-xl border-border shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-label font-semibold flex items-center gap-2">
              <QrCode size={15} className="text-primary" />
              My Resident QR Code
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4 py-2">
            {/* Mock QR SVG */}
            <div
              className="rounded-xl p-4"
              style={{
                background: "oklch(0.55 0.22 280 / 0.08)",
                border: "2px solid oklch(0.55 0.22 280 / 0.2)",
              }}
            >
              <svg
                width="140"
                height="140"
                viewBox="0 0 140 140"
                fill="none"
                role="img"
                aria-label="Resident QR Code"
              >
                <rect width="140" height="140" fill="white" rx="8" />
                {/* QR corner squares */}
                <rect
                  x="10"
                  y="10"
                  width="36"
                  height="36"
                  rx="2"
                  fill="oklch(0.55 0.22 280)"
                />
                <rect
                  x="16"
                  y="16"
                  width="24"
                  height="24"
                  rx="1"
                  fill="white"
                />
                <rect
                  x="20"
                  y="20"
                  width="16"
                  height="16"
                  rx="1"
                  fill="oklch(0.55 0.22 280)"
                />
                <rect
                  x="94"
                  y="10"
                  width="36"
                  height="36"
                  rx="2"
                  fill="oklch(0.55 0.22 280)"
                />
                <rect
                  x="100"
                  y="16"
                  width="24"
                  height="24"
                  rx="1"
                  fill="white"
                />
                <rect
                  x="104"
                  y="20"
                  width="16"
                  height="16"
                  rx="1"
                  fill="oklch(0.55 0.22 280)"
                />
                <rect
                  x="10"
                  y="94"
                  width="36"
                  height="36"
                  rx="2"
                  fill="oklch(0.55 0.22 280)"
                />
                <rect
                  x="16"
                  y="100"
                  width="24"
                  height="24"
                  rx="1"
                  fill="white"
                />
                <rect
                  x="20"
                  y="104"
                  width="16"
                  height="16"
                  rx="1"
                  fill="oklch(0.55 0.22 280)"
                />
                {/* QR data modules (mock pattern) */}
                {[56, 62, 68, 74, 80, 86].map((x) =>
                  [
                    10, 16, 22, 28, 34, 40, 46, 56, 62, 68, 74, 80, 86, 94, 100,
                    106, 112, 118, 124, 130,
                  ].map((y) =>
                    (x + y) % 11 < 4 ? (
                      <rect
                        key={`${x}-${y}`}
                        x={x}
                        y={y}
                        width="5"
                        height="5"
                        fill="oklch(0.55 0.22 280)"
                      />
                    ) : null,
                  ),
                )}
                {[10, 16, 22, 28, 34, 40, 46].map((y) =>
                  [
                    56, 62, 68, 74, 80, 86, 94, 100, 106, 112, 118, 124, 130,
                  ].map((x) =>
                    (x * y) % 13 < 5 ? (
                      <rect
                        key={`${x}-${y}`}
                        x={x}
                        y={y}
                        width="5"
                        height="5"
                        fill="oklch(0.55 0.22 280)"
                      />
                    ) : null,
                  ),
                )}
              </svg>
            </div>
            <div className="text-center">
              <p className="font-display font-bold text-foreground">
                Ahmed Raza
              </p>
              <p className="text-xs font-label text-muted-foreground">
                Flat A-101 · Resident Owner
              </p>
              <p className="text-[10px] font-label text-muted-foreground/60 mt-1">
                ID: FS-2025-A101-001
              </p>
            </div>
            <Badge
              className="font-label text-[11px]"
              style={{
                background: "oklch(0.55 0.22 280 / 0.15)",
                color: "oklch(0.45 0.22 280)",
                border: "1px solid oklch(0.55 0.22 280 / 0.3)",
              }}
            >
              Show at Gate for Entry/Exit
            </Badge>
          </CardContent>
        </Card>

        {/* Visitor Registration */}
        <Card className="rounded-xl border-border shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-label font-semibold flex items-center gap-2">
              <User size={15} className="text-accent" />
              Register Visitor
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label className="text-xs font-label">Visitor Name</Label>
                <Input
                  placeholder="Full name"
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value)}
                  className="h-8 text-sm"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-label">Phone Number</Label>
                <Input
                  placeholder="03xx-xxxxxxx"
                  value={visitorPhone}
                  onChange={(e) => setVisitorPhone(e.target.value)}
                  className="h-8 text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label className="text-xs font-label">Badge Type</Label>
                <Select
                  value={badgeType}
                  onValueChange={(v) => setBadgeType(v as BadgeType)}
                >
                  <SelectTrigger className="h-8 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Guest">Guest</SelectItem>
                    <SelectItem value="Worker">Worker</SelectItem>
                    <SelectItem value="Delivery">Delivery</SelectItem>
                    <SelectItem value="Emergency">Emergency</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-label">Flat to Visit</Label>
                <Input
                  placeholder="e.g. A-101"
                  value={flatToVisit}
                  onChange={(e) => setFlatToVisit(e.target.value)}
                  className="h-8 text-sm"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-label">Purpose of Visit</Label>
              <Input
                placeholder="e.g. Family visit, delivery, maintenance..."
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="h-8 text-sm"
              />
            </div>
            <Button
              className="w-full h-9 font-label font-semibold"
              onClick={handleRegisterVisitor}
            >
              <Tag size={14} className="mr-2" />
              Register &amp; Generate Badge
            </Button>
            {generatedBadge && <BadgeCard badge={generatedBadge} />}
          </CardContent>
        </Card>
      </div>

      {/* Entry/Exit Log */}
      <Card className="rounded-xl border-border shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-label font-semibold flex items-center gap-2">
            <Clock size={15} className="text-primary" />
            Entry / Exit Log — Today
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs font-label">Name</TableHead>
                  <TableHead className="text-xs font-label">Type</TableHead>
                  <TableHead className="text-xs font-label">Flat</TableHead>
                  <TableHead className="text-xs font-label">Check-In</TableHead>
                  <TableHead className="text-xs font-label">
                    Check-Out
                  </TableHead>
                  <TableHead className="text-xs font-label">Purpose</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ENTRY_LOGS.map((log) => (
                  <TableRow
                    key={log.id}
                    style={
                      log.checkOut === null
                        ? { borderLeft: "3px solid oklch(0.55 0.18 150)" }
                        : {}
                    }
                  >
                    <TableCell className="text-sm font-medium">
                      {log.name}
                    </TableCell>
                    <TableCell>
                      <span
                        className="text-[11px] font-label px-2 py-0.5 rounded-full font-semibold"
                        style={
                          log.type === "Resident"
                            ? {
                                background: "oklch(0.55 0.22 280 / 0.12)",
                                color: "oklch(0.45 0.22 280)",
                              }
                            : {
                                background: "oklch(0.65 0.25 335 / 0.12)",
                                color: "oklch(0.55 0.25 335)",
                              }
                        }
                      >
                        {log.type}
                      </span>
                    </TableCell>
                    <TableCell className="text-sm font-label">
                      {log.flat}
                    </TableCell>
                    <TableCell className="text-sm font-label text-muted-foreground">
                      {log.checkIn}
                    </TableCell>
                    <TableCell className="text-sm font-label">
                      {log.checkOut ? (
                        <span className="text-muted-foreground">
                          {log.checkOut}
                        </span>
                      ) : (
                        <span
                          className="text-[11px] font-label font-semibold px-2 py-0.5 rounded-full"
                          style={{
                            background: "oklch(0.55 0.18 150 / 0.15)",
                            color: "oklch(0.45 0.18 150)",
                          }}
                        >
                          Inside
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">
                      {log.purpose}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ─────────────────────────────────────────────
// Tab 3: Staff & Security
// ─────────────────────────────────────────────
function StaffTab() {
  const roleIcon: Record<StaffMember["role"], React.ElementType> = {
    Guard: ShieldCheck,
    Maintenance: Wrench,
    Housekeeping: Home,
    "CCTV Operator": Settings,
  };

  const shiftColor: Record<string, { bg: string; fg: string }> = {
    Morning: { bg: "oklch(0.72 0.19 85 / 0.15)", fg: "oklch(0.60 0.22 85)" },
    Afternoon: {
      bg: "oklch(0.65 0.25 335 / 0.15)",
      fg: "oklch(0.55 0.25 335)",
    },
    Night: { bg: "oklch(0.55 0.22 280 / 0.15)", fg: "oklch(0.45 0.22 280)" },
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-label font-semibold text-foreground">
          Staff &amp; Security Management
        </h3>
        <Button
          size="sm"
          className="h-8 text-xs font-label"
          onClick={() =>
            toast.success("Security job posted to Jobs module", {
              description: "Applicants can now apply from the Jobs page.",
            })
          }
        >
          <Briefcase size={13} className="mr-1.5" />
          Post Security Job
        </Button>
      </div>

      {/* Shift Timetable */}
      <Card className="rounded-xl border-border shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-label font-semibold flex items-center gap-2">
            <Calendar size={15} className="text-primary" />
            Weekly Shift Timetable
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs font-label w-28">
                    Shift
                  </TableHead>
                  {DAYS.map((d) => (
                    <TableHead
                      key={d}
                      className="text-xs font-label text-center"
                    >
                      {d}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {(["Morning", "Afternoon", "Night"] as const).map((shift) => {
                  const sc = shiftColor[shift];
                  return (
                    <TableRow key={shift}>
                      <TableCell>
                        <span
                          className="text-[11px] font-label font-semibold px-2 py-1 rounded-md block text-center"
                          style={{ background: sc.bg, color: sc.fg }}
                        >
                          {shift}
                          <br />
                          <span className="text-[9px] font-normal opacity-70">
                            {shift === "Morning"
                              ? "6am–2pm"
                              : shift === "Afternoon"
                                ? "2pm–10pm"
                                : "10pm–6am"}
                          </span>
                        </span>
                      </TableCell>
                      {DAYS.map((day) => {
                        const names = SHIFT_TIMETABLE[shift][day] || [];
                        return (
                          <TableCell
                            key={day}
                            className="text-center align-top py-2"
                          >
                            {names.map((name) => (
                              <p
                                key={name}
                                className="text-[10px] font-label text-foreground leading-snug"
                              >
                                {name.split(" ")[0]}
                              </p>
                            ))}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Staff Directory */}
      <div>
        <h4 className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wide mb-3">
          Staff Directory
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {STAFF.map((s) => {
            const RoleIcon = roleIcon[s.role];
            const sc = shiftColor[s.shift];
            return (
              <Card key={s.id} className="rounded-xl border-border shadow-sm">
                <CardContent className="p-4 flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background: "oklch(0.55 0.22 280 / 0.12)",
                    }}
                  >
                    <RoleIcon
                      size={16}
                      style={{ color: "oklch(0.55 0.22 280)" }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">
                      {s.name}
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      {s.role}
                    </p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <Phone size={9} className="text-muted-foreground" />
                      <span className="text-[10px] font-label text-muted-foreground">
                        {s.phone}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span
                      className="text-[10px] font-label font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: sc.bg, color: sc.fg }}
                    >
                      {s.shift}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 text-[10px] font-label px-2"
                      onClick={() => toast.info(`Viewing ${s.name}'s profile`)}
                    >
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Tab 4: Complaints & Maintenance
// ─────────────────────────────────────────────
function ComplaintsTab() {
  const [complaints, setComplaints] = useState(INITIAL_COMPLAINTS);
  const [dues, setDues] = useState(MAINTENANCE_DUES);

  // Lodge complaint form state
  const [cFlat, setCFlat] = useState("");
  const [cCategory, setCCategory] = useState<ComplaintCategory>("Plumbing");
  const [cDesc, setCDesc] = useState("");
  const [cUrgency, setCUrgency] = useState<Urgency>("Medium");

  // Assign dialog state
  const [assignDialogId, setAssignDialogId] = useState<number | null>(null);
  const [assigneeName, setAssigneeName] = useState("");

  // Pay vendor dialog state
  const [payDialogId, setPayDialogId] = useState<number | null>(null);
  const [vendorAmount, setVendorAmount] = useState("");
  const [receiptNo, setReceiptNo] = useState("");

  const handleSubmitComplaint = () => {
    if (!cFlat || !cDesc) {
      toast.error("Please fill in flat number and description");
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
        assignedTo: null,
      },
    ]);
    toast.success(`Complaint #${newId} lodged successfully`);
    setCFlat("");
    setCDesc("");
    setCUrgency("Medium");
  };

  const handleAssign = () => {
    if (!assigneeName) return;
    setComplaints((prev) =>
      prev.map((c) =>
        c.id === assignDialogId
          ? { ...c, status: "Assigned", assignedTo: assigneeName }
          : c,
      ),
    );
    toast.success(`Complaint assigned to ${assigneeName}`);
    setAssignDialogId(null);
    setAssigneeName("");
  };

  const handleMarkResolved = (id: number) => {
    setComplaints((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: "Resolved" } : c)),
    );
    toast.success("Complaint marked as resolved");
  };

  const handlePayVendor = () => {
    if (!vendorAmount) return;
    toast.success(
      `Payment of PKR ${vendorAmount} recorded. Receipt: ${receiptNo || "N/A"}`,
    );
    setPayDialogId(null);
    setVendorAmount("");
    setReceiptNo("");
  };

  const handlePayDue = (id: number, title: string) => {
    setDues((prev) =>
      prev.map((d) => (d.id === id ? { ...d, paid: true } : d)),
    );
    toast.success(`${title} payment processed successfully`);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Lodge Complaint */}
      <Card className="rounded-xl border-border shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-label font-semibold flex items-center gap-2">
            <AlertTriangle size={15} className="text-accent" />
            Lodge a Complaint
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="space-y-1.5">
              <Label className="text-xs font-label">Flat Number</Label>
              <Input
                placeholder="e.g. A-101"
                value={cFlat}
                onChange={(e) => setCFlat(e.target.value)}
                className="h-8 text-sm"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-label">Category</Label>
              <Select
                value={cCategory}
                onValueChange={(v) => setCCategory(v as ComplaintCategory)}
              >
                <SelectTrigger className="h-8 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {(
                    [
                      "Plumbing",
                      "Electrical",
                      "Cleaning",
                      "Noise",
                      "Security",
                      "Other",
                    ] as ComplaintCategory[]
                  ).map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-label">Urgency</Label>
              <Select
                value={cUrgency}
                onValueChange={(v) => setCUrgency(v as Urgency)}
              >
                <SelectTrigger className="h-8 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Low">Low</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5 col-span-2 sm:col-span-4">
              <Label className="text-xs font-label">Description</Label>
              <div className="flex gap-2">
                <Textarea
                  placeholder="Describe the issue..."
                  value={cDesc}
                  onChange={(e) => setCDesc(e.target.value)}
                  className="text-sm resize-none h-16 flex-1"
                />
                <Button
                  className="h-16 px-5 font-label font-semibold self-end"
                  onClick={handleSubmitComplaint}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Complaints Table */}
      <Card className="rounded-xl border-border shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-label font-semibold flex items-center gap-2">
            <Wrench size={15} className="text-primary" />
            All Complaints
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs font-label">ID</TableHead>
                  <TableHead className="text-xs font-label">Flat</TableHead>
                  <TableHead className="text-xs font-label">Category</TableHead>
                  <TableHead className="text-xs font-label hidden md:table-cell">
                    Description
                  </TableHead>
                  <TableHead className="text-xs font-label">Urgency</TableHead>
                  <TableHead className="text-xs font-label">Status</TableHead>
                  <TableHead className="text-xs font-label hidden lg:table-cell">
                    Assigned To
                  </TableHead>
                  <TableHead className="text-xs font-label">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {complaints.map((c) => (
                  <TableRow key={c.id}>
                    <TableCell className="text-xs font-label text-muted-foreground">
                      #{c.id}
                    </TableCell>
                    <TableCell className="text-sm font-label font-medium">
                      {c.flat}
                    </TableCell>
                    <TableCell className="text-xs">{c.category}</TableCell>
                    <TableCell className="text-xs text-muted-foreground max-w-[160px] truncate hidden md:table-cell">
                      {c.description}
                    </TableCell>
                    <TableCell>
                      <UrgencyBadge urgency={c.urgency} />
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={c.status} />
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground hidden lg:table-cell">
                      {c.assignedTo ?? "—"}
                    </TableCell>
                    <TableCell>
                      {c.status === "Open" && (
                        <Dialog
                          open={assignDialogId === c.id}
                          onOpenChange={(open) => {
                            if (!open) setAssignDialogId(null);
                          }}
                        >
                          <DialogTrigger asChild>
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-7 text-xs font-label"
                              onClick={() => setAssignDialogId(c.id)}
                            >
                              Assign
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-sm">
                            <DialogHeader>
                              <DialogTitle className="text-sm font-label">
                                Assign Complaint #{c.id}
                              </DialogTitle>
                            </DialogHeader>
                            <div className="space-y-3 py-2">
                              <div className="space-y-1.5">
                                <Label className="text-xs font-label">
                                  Assign To (Staff / Vendor)
                                </Label>
                                <Input
                                  placeholder="Staff or vendor name"
                                  value={assigneeName}
                                  onChange={(e) =>
                                    setAssigneeName(e.target.value)
                                  }
                                  className="h-8 text-sm"
                                />
                              </div>
                            </div>
                            <DialogFooter>
                              <Button
                                size="sm"
                                className="font-label"
                                onClick={handleAssign}
                              >
                                Assign Complaint
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      )}
                      {c.status === "Assigned" && (
                        <Button
                          size="sm"
                          className="h-7 text-xs font-label"
                          onClick={() => handleMarkResolved(c.id)}
                        >
                          <CheckCircle2 size={11} className="mr-1" />
                          Resolve
                        </Button>
                      )}
                      {c.status === "Resolved" && (
                        <Dialog
                          open={payDialogId === c.id}
                          onOpenChange={(open) => {
                            if (!open) setPayDialogId(null);
                          }}
                        >
                          <DialogTrigger asChild>
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-7 text-xs font-label"
                              onClick={() => setPayDialogId(c.id)}
                            >
                              <CreditCard size={11} className="mr-1" />
                              Pay Vendor
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-sm">
                            <DialogHeader>
                              <DialogTitle className="text-sm font-label">
                                Pay Vendor — Complaint #{c.id}
                              </DialogTitle>
                            </DialogHeader>
                            <div className="space-y-3 py-2">
                              <div className="space-y-1.5">
                                <Label className="text-xs font-label">
                                  Amount (PKR)
                                </Label>
                                <Input
                                  type="number"
                                  placeholder="Enter amount"
                                  value={vendorAmount}
                                  onChange={(e) =>
                                    setVendorAmount(e.target.value)
                                  }
                                  className="h-8 text-sm"
                                />
                              </div>
                              <div className="space-y-1.5">
                                <Label className="text-xs font-label">
                                  Receipt / Reference No
                                </Label>
                                <Input
                                  placeholder="e.g. RCP-2025-001"
                                  value={receiptNo}
                                  onChange={(e) => setReceiptNo(e.target.value)}
                                  className="h-8 text-sm"
                                />
                              </div>
                            </div>
                            <DialogFooter>
                              <Button
                                size="sm"
                                className="font-label"
                                onClick={handlePayVendor}
                              >
                                <CreditCard size={13} className="mr-1.5" />
                                Record Payment
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Maintenance Dues Noticeboard */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm font-label font-semibold text-foreground flex items-center gap-2">
            <Tag size={14} className="text-primary" />
            Maintenance Dues Noticeboard
          </h4>
          <Button
            size="sm"
            variant="outline"
            className="h-8 text-xs font-label"
            onClick={() => toast.info("Add Due form — coming soon")}
          >
            <Plus size={13} className="mr-1" />
            Add Due
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {dues.map((due) => (
            <Card
              key={due.id}
              className="rounded-xl border-border shadow-sm"
              style={
                due.paid
                  ? { opacity: 0.65 }
                  : { borderColor: "oklch(0.72 0.19 85 / 0.4)" }
              }
            >
              <CardContent className="p-4 space-y-3">
                <div>
                  <p className="text-xs font-semibold text-foreground">
                    {due.title}
                  </p>
                  <p
                    className="text-lg font-display font-bold mt-0.5"
                    style={{ color: "oklch(0.55 0.22 280)" }}
                  >
                    PKR {due.amount.toLocaleString()}
                  </p>
                  <p className="text-[10px] font-label text-muted-foreground mt-0.5">
                    Due: {due.dueDate}
                  </p>
                </div>
                {due.paid ? (
                  <span
                    className="text-[11px] font-label font-semibold px-2 py-1 rounded-full block text-center"
                    style={{
                      background: "oklch(0.55 0.18 150 / 0.15)",
                      color: "oklch(0.45 0.18 150)",
                    }}
                  >
                    ✓ Paid
                  </span>
                ) : (
                  <Button
                    size="sm"
                    className="w-full h-7 text-xs font-label"
                    onClick={() => handlePayDue(due.id, due.title)}
                  >
                    <CreditCard size={11} className="mr-1.5" />
                    Pay Online
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Tab 5: Community Marketplace
// ─────────────────────────────────────────────
type MarketCategory =
  | "All"
  | "Food"
  | "Grocery"
  | "Medical"
  | "Services"
  | "Products";

function MarketplaceTab() {
  const [activeCategory, setActiveCategory] = useState<MarketCategory>("All");

  const categories: MarketCategory[] = [
    "All",
    "Food",
    "Grocery",
    "Medical",
    "Services",
    "Products",
  ];

  const filtered =
    activeCategory === "All"
      ? MARKETPLACE_ITEMS
      : MARKETPLACE_ITEMS.filter((i) => i.category === activeCategory);

  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex gap-1.5 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className="px-3 py-1.5 rounded-full text-xs font-label font-semibold transition-all"
              style={
                activeCategory === cat
                  ? {
                      background: "oklch(0.55 0.22 280)",
                      color: "oklch(0.98 0.005 280)",
                    }
                  : {
                      background: "oklch(0.55 0.22 280 / 0.08)",
                      color: "oklch(0.45 0.15 280)",
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>
        <Button
          size="sm"
          variant="outline"
          className="h-8 text-xs font-label"
          onClick={() =>
            toast.info("Opening Products & Services module", {
              description:
                "You can list your products there with community pricing.",
            })
          }
        >
          <Plus size={13} className="mr-1.5" />
          List Your Product/Service
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item) => (
          <Card
            key={item.id}
            className="rounded-xl border-border shadow-sm overflow-hidden"
          >
            {/* Image placeholder */}
            <div
              className={`h-32 bg-gradient-to-br ${item.gradient} flex items-center justify-center relative`}
            >
              <span className="text-white/30 text-4xl font-display font-bold">
                {item.name.slice(0, 2)}
              </span>
              <span
                className="absolute top-2 right-2 text-[9px] font-label font-bold px-2 py-0.5 rounded-full"
                style={{
                  background: "oklch(0.55 0.22 280)",
                  color: "oklch(0.98 0.005 280)",
                }}
              >
                COMMUNITY EXCLUSIVE
              </span>
            </div>
            <CardContent className="p-3 space-y-2">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {item.name}
                </p>
                <p className="text-[11px] font-label text-muted-foreground">
                  {item.seller}
                </p>
              </div>
              <div className="flex items-baseline gap-2">
                <span
                  className="text-base font-display font-bold"
                  style={{ color: "oklch(0.50 0.22 150)" }}
                >
                  PKR {item.communityPrice.toLocaleString()}
                </span>
                <span className="text-xs text-muted-foreground line-through">
                  PKR {item.regularPrice.toLocaleString()}
                </span>
                <span className="text-[10px] font-label text-muted-foreground">
                  / {item.unit}
                </span>
              </div>
              <Button
                size="sm"
                className="w-full h-7 text-xs font-label"
                onClick={() =>
                  toast.success("Order placed via Products module", {
                    description: `${item.name} ordered from ${item.seller}`,
                  })
                }
              >
                Order Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Tab 6: Parking & Property
// ─────────────────────────────────────────────
function ParkingPropertyTab() {
  const [selectedProp, setSelectedProp] = useState<
    (typeof COMMUNITY_PROPERTIES)[0] | null
  >(null);
  const [bidOpen, setBidOpen] = useState(false);
  const [bidItem, setBidItem] = useState<string>("");
  const [bidAmount, setBidAmount] = useState("");
  const [bidderName, setBidderName] = useState("");
  const [bids, setBids] = useState<BidEntry[]>([
    {
      id: 1,
      itemId: "A-101",
      itemName: "A-101 (Apartment)",
      itemType: "property",
      bidder: "Rahul Sharma",
      amount: 4800000,
      timestamp: "2 hrs ago",
      status: "Pending",
    },
    {
      id: 2,
      itemId: "A-101",
      itemName: "A-101 (Apartment)",
      itemType: "property",
      bidder: "Priya Patel",
      amount: 5200000,
      timestamp: "1 hr ago",
      status: "Pending",
    },
    {
      id: 3,
      itemId: "P-001",
      itemName: "Parking P-001",
      itemType: "parking",
      bidder: "Mohan Kumar",
      amount: 8000,
      timestamp: "30 min ago",
      status: "Pending",
    },
  ]);
  const [viewBidsItem, setViewBidsItem] = useState<{
    id: string;
    name: string;
  } | null>(null);
  // Add slot dialog
  const [addSlotOpen, setAddSlotOpen] = useState(false);
  const [newSlotNo, setNewSlotNo] = useState("");
  const [newBlock, setNewBlock] = useState("");
  const [newSlotType, setNewSlotType] = useState<"Covered" | "Open">("Covered");
  const [newDailyRate, setNewDailyRate] = useState("");
  const [newMonthlyRate, setNewMonthlyRate] = useState("");

  // Book slot dialog
  const [bookSlotId, setBookSlotId] = useState<number | null>(null);
  const [bookFrom, setBookFrom] = useState("");
  const [bookTo, setBookTo] = useState("");

  const [slots, setSlots] = useState(PARKING_SLOTS);

  const bookingSlot = slots.find((s) => s.id === bookSlotId);

  const totalDays = (() => {
    if (!bookFrom || !bookTo) return 0;
    const from = new Date(bookFrom);
    const to = new Date(bookTo);
    const diff = Math.ceil(
      (to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24),
    );
    return diff > 0 ? diff : 0;
  })();

  const totalCost = bookingSlot ? totalDays * bookingSlot.dailyRate : 0;

  const handleAcceptBid = (bid: BidEntry) => {
    setBids((prev) =>
      prev.map((b) => {
        if (b.itemId === bid.itemId) {
          return {
            ...b,
            status:
              b.id === bid.id ? ("Accepted" as const) : ("Rejected" as const),
          };
        }
        return b;
      }),
    );
    addNotification({
      module: "GatedCommunity",
      text: `uD83CuDF89 Congratulations ${bid.bidder}! Your bid of u20b9${bid.amount.toLocaleString("en-IN")} for ${bid.itemName} has been accepted.`,
      timestamp: "Just now",
      unread: true,
      initials: bid.bidder
        .split(" ")
        .map((w: string) => w[0])
        .join("")
        .slice(0, 2)
        .toUpperCase(),
    });
    toast.success(`Bid accepted! ${bid.bidder} has been notified.`);
    setViewBidsItem(null);
  };

  const handleRejectBid = (bidId: number) => {
    setBids((prev) =>
      prev.map((b) =>
        b.id === bidId ? { ...b, status: "Rejected" as const } : b,
      ),
    );
    toast.info("Bid rejected");
  };

  const handleAddSlot = () => {
    if (!newSlotNo || !newBlock) {
      toast.error("Please fill slot number and block");
      return;
    }
    const newSlot: ParkingSlot = {
      id: Date.now(),
      slotNo: newSlotNo,
      block: newBlock,
      type: newSlotType,
      dailyRate: Number(newDailyRate) || 0,
      monthlyRate: Number(newMonthlyRate) || 0,
      available: true,
      owner: "You",
    };
    setSlots((prev) => [...prev, newSlot]);
    toast.success(`Parking slot ${newSlotNo} listed successfully`);
    setAddSlotOpen(false);
    setNewSlotNo("");
    setNewBlock("");
    setNewDailyRate("");
    setNewMonthlyRate("");
  };

  const handleBookSlot = () => {
    if (!bookFrom || !bookTo || totalDays <= 0) {
      toast.error("Please select valid date range");
      return;
    }
    setSlots((prev) =>
      prev.map((s) => (s.id === bookSlotId ? { ...s, available: false } : s)),
    );
    toast.success(
      `Slot ${bookingSlot?.slotNo} booked for ${totalDays} days — PKR ${totalCost.toLocaleString()}`,
    );
    setBookSlotId(null);
    setBookFrom("");
    setBookTo("");
  };

  return (
    <div className="p-6 space-y-8">
      {/* Parking Slots */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-label font-semibold text-foreground flex items-center gap-2">
            <Car size={15} className="text-primary" />
            Parking Slots
          </h3>
          <Dialog open={addSlotOpen} onOpenChange={setAddSlotOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="h-8 text-xs font-label">
                <Plus size={13} className="mr-1.5" />
                Add My Parking Slot
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-sm">
              <DialogHeader>
                <DialogTitle className="text-sm font-label">
                  List Your Parking Slot
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-3 py-2">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-label">Slot Number</Label>
                    <Input
                      placeholder="e.g. P-42"
                      value={newSlotNo}
                      onChange={(e) => setNewSlotNo(e.target.value)}
                      className="h-8 text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-label">Block</Label>
                    <Input
                      placeholder="e.g. A"
                      value={newBlock}
                      onChange={(e) => setNewBlock(e.target.value)}
                      className="h-8 text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-label">Type</Label>
                  <Select
                    value={newSlotType}
                    onValueChange={(v) =>
                      setNewSlotType(v as "Covered" | "Open")
                    }
                  >
                    <SelectTrigger className="h-8 text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Covered">Covered</SelectItem>
                      <SelectItem value="Open">Open</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-label">
                      Daily Rate (PKR)
                    </Label>
                    <Input
                      type="number"
                      placeholder="200"
                      value={newDailyRate}
                      onChange={(e) => setNewDailyRate(e.target.value)}
                      className="h-8 text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs font-label">
                      Monthly Rate (PKR)
                    </Label>
                    <Input
                      type="number"
                      placeholder="3500"
                      value={newMonthlyRate}
                      onChange={(e) => setNewMonthlyRate(e.target.value)}
                      className="h-8 text-sm"
                    />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button
                  size="sm"
                  className="font-label"
                  onClick={handleAddSlot}
                >
                  List Slot
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {slots.map((slot) => (
            <Card key={slot.id} className="rounded-xl border-border shadow-sm">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <p
                      className="text-xl font-display font-bold"
                      style={{ color: "oklch(0.55 0.22 280)" }}
                    >
                      {slot.slotNo}
                    </p>
                    <p className="text-xs font-label text-muted-foreground">
                      Block {slot.block}
                    </p>
                  </div>
                  <span
                    className="text-[10px] font-label font-semibold px-2 py-0.5 rounded-full"
                    style={
                      slot.type === "Covered"
                        ? {
                            background: "oklch(0.55 0.22 280 / 0.12)",
                            color: "oklch(0.45 0.22 280)",
                          }
                        : {
                            background: "oklch(0.72 0.19 85 / 0.12)",
                            color: "oklch(0.60 0.22 85)",
                          }
                    }
                  >
                    {slot.type}
                  </span>
                </div>
                <div className="space-y-0.5 text-[11px] text-muted-foreground font-label">
                  <p>
                    Daily:{" "}
                    <span className="font-semibold text-foreground">
                      PKR {slot.dailyRate}
                    </span>
                  </p>
                  <p>
                    Monthly:{" "}
                    <span className="font-semibold text-foreground">
                      PKR {slot.monthlyRate.toLocaleString()}
                    </span>
                  </p>
                  <p className="text-[10px] opacity-70">{slot.owner}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] font-label font-bold px-2 py-0.5 rounded-full"
                    style={
                      slot.available
                        ? {
                            background: "oklch(0.55 0.18 150 / 0.15)",
                            color: "oklch(0.45 0.18 150)",
                          }
                        : {
                            background: "oklch(0.55 0.22 25 / 0.15)",
                            color: "oklch(0.50 0.22 25)",
                          }
                    }
                  >
                    {slot.available ? "Available" : "Occupied"}
                  </span>
                  {slot.available && (
                    <Dialog
                      open={bookSlotId === slot.id}
                      onOpenChange={(open) => {
                        if (!open) setBookSlotId(null);
                      }}
                    >
                      <DialogTrigger asChild>
                        <Button
                          size="sm"
                          className="h-6 text-[10px] font-label px-2"
                          onClick={() => setBookSlotId(slot.id)}
                        >
                          Book
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-sm">
                        <DialogHeader>
                          <DialogTitle className="text-sm font-label">
                            Book Slot {slot.slotNo} — Block {slot.block}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-3 py-2">
                          <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1.5">
                              <Label className="text-xs font-label">From</Label>
                              <Input
                                type="date"
                                value={bookFrom}
                                onChange={(e) => setBookFrom(e.target.value)}
                                className="h-8 text-sm"
                              />
                            </div>
                            <div className="space-y-1.5">
                              <Label className="text-xs font-label">To</Label>
                              <Input
                                type="date"
                                value={bookTo}
                                onChange={(e) => setBookTo(e.target.value)}
                                className="h-8 text-sm"
                              />
                            </div>
                          </div>
                          {totalDays > 0 && (
                            <div
                              className="rounded-lg p-3 text-sm"
                              style={{
                                background: "oklch(0.55 0.22 280 / 0.08)",
                              }}
                            >
                              <p className="text-xs font-label text-muted-foreground">
                                Duration:{" "}
                                <span className="font-semibold text-foreground">
                                  {totalDays} days
                                </span>
                              </p>
                              <p className="text-xs font-label text-muted-foreground">
                                Daily Rate:{" "}
                                <span className="font-semibold text-foreground">
                                  PKR {slot.dailyRate}
                                </span>
                              </p>
                              <Separator className="my-2" />
                              <p className="text-sm font-label font-bold text-foreground">
                                Total: PKR {totalCost.toLocaleString()}
                              </p>
                            </div>
                          )}
                        </div>
                        <DialogFooter>
                          <Button
                            size="sm"
                            className="font-label"
                            onClick={handleBookSlot}
                          >
                            Confirm Booking
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Community Properties */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-label font-semibold text-foreground flex items-center gap-2">
            <Building2 size={15} className="text-primary" />
            Community Properties
          </h3>
          <Button
            size="sm"
            variant="outline"
            className="h-8 text-xs font-label"
            onClick={() =>
              toast.info("Opening Real Estate module", {
                description: "List your property for buy, sell, or rent.",
              })
            }
          >
            <Plus size={13} className="mr-1.5" />
            List Property
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {COMMUNITY_PROPERTIES.map((prop) => (
            <Card
              key={prop.id}
              className="rounded-xl border-border shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <CardContent className="p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {prop.flatNo}
                    </p>
                    <p className="text-xs font-label text-muted-foreground">
                      {prop.type} · Floor {prop.floor === 0 ? "G" : prop.floor}
                    </p>
                  </div>
                  <span
                    className="text-[10px] font-label font-bold px-2 py-0.5 rounded-full"
                    style={
                      prop.listingType === "For Sale"
                        ? {
                            background: "oklch(0.65 0.25 335 / 0.15)",
                            color: "oklch(0.55 0.25 335)",
                          }
                        : {
                            background: "oklch(0.55 0.22 280 / 0.12)",
                            color: "oklch(0.45 0.22 280)",
                          }
                    }
                  >
                    {prop.listingType}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground font-label">
                  <MapPin size={10} />
                  {prop.size}
                </div>
                <p
                  className="text-base font-display font-bold"
                  style={{ color: "oklch(0.55 0.22 280)" }}
                >
                  {prop.price}
                </p>
                <div className="flex gap-1">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 h-7 text-xs font-label"
                    onClick={() => setSelectedProp(prop)}
                    data-ocid="gated.property.primary_button"
                  >
                    View Details
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 text-xs font-label"
                    onClick={() => {
                      setBidItem(prop.flatNo);
                      setBidOpen(true);
                    }}
                    data-ocid="gated.property.secondary_button"
                  >
                    Bid
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-7 text-xs font-label text-primary"
                    onClick={() =>
                      setViewBidsItem({ id: prop.flatNo, name: prop.flatNo })
                    }
                  >
                    View Bids (
                    {bids.filter((b) => b.itemId === prop.flatNo).length})
                  </Button>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="w-full h-6 text-xs font-label text-muted-foreground"
                  onClick={() =>
                    toast.success(
                      `Inquiry sent to open market for ${prop.flatNo}`,
                    )
                  }
                  data-ocid="gated.property.button"
                >
                  Send to Open Market
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {/* Property Detail Dialog */}
      {selectedProp && (
        <Dialog
          open={!!selectedProp}
          onOpenChange={() => setSelectedProp(null)}
        >
          <DialogContent data-ocid="gated.property.dialog">
            <DialogHeader>
              <DialogTitle>
                Property Details — {selectedProp.flatNo}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-muted-foreground text-xs">Type</p>
                  <p className="font-medium">{selectedProp.type}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">Floor</p>
                  <p className="font-medium">
                    {selectedProp.floor === 0
                      ? "Ground"
                      : `Floor ${selectedProp.floor}`}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">Size</p>
                  <p className="font-medium">{selectedProp.size}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">Listing</p>
                  <p className="font-medium">{selectedProp.listingType}</p>
                </div>
              </div>
              <div
                className="p-3 rounded-xl"
                style={{ background: "oklch(0.55 0.22 280 / 0.06)" }}
              >
                <p className="text-xs text-muted-foreground">Price</p>
                <p className="text-lg font-display font-bold text-primary">
                  {selectedProp.price}
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  className="flex-1"
                  onClick={() => {
                    toast.success(`Inquiry sent for ${selectedProp.flatNo}`);
                    setSelectedProp(null);
                  }}
                  data-ocid="gated.property.confirm_button"
                >
                  Send Inquiry
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setSelectedProp(null)}
                  data-ocid="gated.property.close_button"
                >
                  Close
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* View Bids Dialog */}
      <Dialog
        open={!!viewBidsItem}
        onOpenChange={(o) => !o && setViewBidsItem(null)}
      >
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Bids — {viewBidsItem?.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {bids.filter((b) => b.itemId === viewBidsItem?.id).length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-6">
                No bids yet
              </p>
            ) : (
              bids
                .filter((b) => b.itemId === viewBidsItem?.id)
                .map((bid) => (
                  <div
                    key={bid.id}
                    className="flex items-center justify-between p-3 rounded-lg border border-border"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {bid.bidder}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {bid.timestamp}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-primary">
                        ₹{bid.amount.toLocaleString("en-IN")}
                      </span>
                      {bid.status === "Pending" ? (
                        <div className="flex gap-1">
                          <Button
                            size="sm"
                            className="h-7 text-xs"
                            onClick={() => handleAcceptBid(bid)}
                          >
                            Accept
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-7 text-xs"
                            onClick={() => handleRejectBid(bid.id)}
                          >
                            Reject
                          </Button>
                        </div>
                      ) : (
                        <span
                          className={
                            bid.status === "Accepted"
                              ? "text-xs font-label font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700"
                              : "text-xs font-label font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700"
                          }
                        >
                          {bid.status}
                        </span>
                      )}
                    </div>
                  </div>
                ))
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Bid Dialog */}
      <Dialog open={bidOpen} onOpenChange={setBidOpen}>
        <DialogContent data-ocid="gated.bid.dialog">
          <DialogHeader>
            <DialogTitle>Place Bid — {bidItem}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <div>
              <Label className="text-xs">Your Name</Label>
              <Input
                className="mt-1"
                placeholder="e.g. Rahul Sharma"
                value={bidderName}
                onChange={(e) => setBidderName(e.target.value)}
              />
            </div>
            <div>
              <Label className="text-xs">Your Bid Amount (INR)</Label>
              <Input
                className="mt-1"
                type="number"
                placeholder="e.g. 1800000"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                data-ocid="gated.bid.input"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Your bid will be submitted to the open market and visible to all
              interested parties.
            </p>
            <div className="flex gap-2">
              <Button
                className="flex-1"
                onClick={() => {
                  if (!bidAmount) {
                    toast.error("Enter bid amount");
                    return;
                  }
                  const newBid: BidEntry = {
                    id: Date.now(),
                    itemId: bidItem,
                    itemName: bidItem,
                    itemType: "property",
                    bidder: bidderName || "You",
                    amount: Number(bidAmount),
                    timestamp: "Just now",
                    status: "Pending",
                  };
                  setBids((prev) => [...prev, newBid]);
                  toast.success(
                    `Bid of ₹${Number(bidAmount).toLocaleString("en-IN")} placed successfully!`,
                  );
                  setBidOpen(false);
                  setBidAmount("");
                  setBidderName("");
                }}
                data-ocid="gated.bid.confirm_button"
              >
                Place Bid
              </Button>
              <Button
                variant="outline"
                onClick={() => setBidOpen(false)}
                data-ocid="gated.bid.cancel_button"
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ─────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────
export default function GatedCommunityPage() {
  return (
    <div className="min-h-full bg-background">
      {/* Page header */}
      <div
        className="px-6 py-5 border-b border-border"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.55 0.22 280 / 0.06) 0%, oklch(0.65 0.25 335 / 0.04) 100%)",
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "oklch(0.55 0.22 280 / 0.12)" }}
          >
            <Building2 size={20} style={{ color: "oklch(0.55 0.22 280)" }} />
          </div>
          <div>
            <h1 className="text-xl font-display font-bold text-foreground">
              Gated Community
            </h1>
            <p className="text-xs font-label text-muted-foreground mt-0.5">
              Green Valley Society · DHA Phase 5, Lahore
            </p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <span
              className="text-xs font-label font-semibold px-3 py-1 rounded-full"
              style={{
                background: "oklch(0.55 0.18 150 / 0.12)",
                color: "oklch(0.45 0.18 150)",
                border: "1px solid oklch(0.55 0.18 150 / 0.25)",
              }}
            >
              ● Active Member
            </span>
            <span
              className="text-xs font-label font-semibold px-3 py-1 rounded-full hidden sm:inline-flex"
              style={{
                background: "oklch(0.55 0.22 280 / 0.1)",
                color: "oklch(0.45 0.22 280)",
                border: "1px solid oklch(0.55 0.22 280 / 0.2)",
              }}
            >
              Flat A-101 · Owner
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <QuickAddBar moduleName="Gated Community" />

      <Tabs defaultValue="overview" className="w-full">
        <div className="border-b border-border bg-card/50 px-6 overflow-x-auto">
          <TabsList className="bg-transparent gap-0 h-auto p-0 rounded-none">
            {[
              { value: "overview", label: "Overview", icon: Home },
              { value: "gate", label: "Gate Entry/Exit", icon: QrCode },
              { value: "staff", label: "Staff & Security", icon: ShieldCheck },
              { value: "complaints", label: "Complaints", icon: AlertTriangle },
              { value: "marketplace", label: "Marketplace", icon: Package },
              { value: "parking", label: "Parking & Property", icon: Car },
              { value: "events", label: "Events", icon: Calendar },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="relative rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-3 text-xs font-label font-medium text-muted-foreground data-[state=active]:text-primary transition-colors gap-1.5 flex items-center whitespace-nowrap"
                >
                  <Icon size={13} />
                  {tab.label}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </div>

        <TabsContent value="overview" className="mt-0">
          <OverviewTab />
        </TabsContent>
        <TabsContent value="gate" className="mt-0">
          <GateEntryTab />
        </TabsContent>
        <TabsContent value="staff" className="mt-0">
          <StaffTab />
        </TabsContent>
        <TabsContent value="complaints" className="mt-0">
          <ComplaintsTab />
        </TabsContent>
        <TabsContent value="marketplace" className="mt-0">
          <MarketplaceTab />
        </TabsContent>
        <TabsContent value="parking" className="mt-0">
          <ParkingPropertyTab />
        </TabsContent>
        <TabsContent value="events" className="mt-0 p-4 lg:p-6">
          <EventsTab
            moduleName="Gated Community"
            moduleColor="oklch(0.55 0.18 240)"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
