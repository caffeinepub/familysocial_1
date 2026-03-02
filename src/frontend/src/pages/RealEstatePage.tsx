import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
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
  Bath,
  Bed,
  Briefcase,
  Building2,
  Car,
  CheckCircle2,
  Clock,
  FileText,
  Grid3X3,
  Home,
  LayoutList,
  MapPin,
  Maximize2,
  Percent,
  Phone,
  Plus,
  Search,
  Shield,
  ShieldAlert,
  User,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
type PropertyType = "Apartment" | "House" | "Plot" | "Commercial" | "Parking";
type PropertyPurpose = "For Sale" | "For Rent" | "Both";
type PropertyStatus = "Available" | "Rented" | "Sold";
type PrivacyLevel = "Public" | "Community Only" | "Family Only" | "Private";

interface Tenant {
  id: number;
  name: string;
  phone: string;
  monthlyRent: number;
  dueDate: string;
  status: "Paid" | "Due" | "Overdue";
}

interface PaymentRecord {
  id: number;
  month: string;
  amount: number;
  datePaid: string;
  status: "Paid" | "Due" | "Overdue";
}

interface Property {
  id: number;
  title: string;
  type: PropertyType;
  purpose: PropertyPurpose;
  status: PropertyStatus;
  city: string;
  area: string;
  price: number;
  monthlyRent?: number;
  sqft: number;
  bedrooms: number;
  bathrooms: number;
  commission: number;
  nocReady: boolean;
  description: string;
  ownerName: string;
  ownerPhone: string;
  privacy: PrivacyLevel;
  postedAt: string;
  tenants?: Tenant[];
  payments?: PaymentRecord[];
}

// ─────────────────────────────────────────────
// Mock Data
// ─────────────────────────────────────────────
const SAMPLE_PROPERTIES: Property[] = [
  {
    id: 1,
    title: "Luxurious 3-Bedroom Apartment",
    type: "Apartment",
    purpose: "For Rent",
    status: "Available",
    city: "Lahore",
    area: "DHA Phase 5",
    price: 85000,
    monthlyRent: 85000,
    sqft: 1850,
    bedrooms: 3,
    bathrooms: 2,
    commission: 5,
    nocReady: true,
    description:
      "Fully furnished luxury apartment in the heart of DHA Phase 5. Includes parking, 24/7 security, gym, and rooftop terrace. Ideal for families or professionals.",
    ownerName: "Kamran Mirza",
    ownerPhone: "0300-1234567",
    privacy: "Public",
    postedAt: "2 days ago",
    tenants: [
      {
        id: 1,
        name: "Ali Hassan",
        phone: "0321-9876543",
        monthlyRent: 85000,
        dueDate: "5th of every month",
        status: "Paid",
      },
    ],
    payments: [
      {
        id: 1,
        month: "March 2026",
        amount: 85000,
        datePaid: "Mar 4, 2026",
        status: "Paid",
      },
      {
        id: 2,
        month: "February 2026",
        amount: 85000,
        datePaid: "Feb 3, 2026",
        status: "Paid",
      },
      {
        id: 3,
        month: "January 2026",
        amount: 85000,
        datePaid: "Jan 6, 2026",
        status: "Paid",
      },
    ],
  },
  {
    id: 2,
    title: "5-Marla Double Storey House",
    type: "House",
    purpose: "For Sale",
    status: "Available",
    city: "Lahore",
    area: "Bahria Town Sector E",
    price: 28500000,
    sqft: 2250,
    bedrooms: 4,
    bathrooms: 3,
    commission: 2,
    nocReady: true,
    description:
      "Brand new double storey house with modern kitchen, imported fittings, and spacious backyard. Close to school and commercial area.",
    ownerName: "Shahida Malik",
    ownerPhone: "0333-5554321",
    privacy: "Public",
    postedAt: "5 days ago",
  },
  {
    id: 3,
    title: "Commercial Office Space",
    type: "Commercial",
    purpose: "For Rent",
    status: "Available",
    city: "Karachi",
    area: "Clifton Block 5",
    price: 250000,
    monthlyRent: 250000,
    sqft: 3200,
    bedrooms: 0,
    bathrooms: 2,
    commission: 4,
    nocReady: false,
    description:
      "Prime commercial office space on the 6th floor with sea view. Fully wired for IT infrastructure, 2 conference rooms, pantry, and reception area.",
    ownerName: "Farrukh Baig",
    ownerPhone: "0311-7778899",
    privacy: "Public",
    postedAt: "1 week ago",
  },
  {
    id: 4,
    title: "Residential Plot — 10 Marla",
    type: "Plot",
    purpose: "For Sale",
    status: "Available",
    city: "Islamabad",
    area: "F-7/1",
    price: 65000000,
    sqft: 2722,
    bedrooms: 0,
    bathrooms: 0,
    commission: 3,
    nocReady: true,
    description:
      "Corner plot in the most sought-after sector of Islamabad. Level ground, all utilities connected. Ideal for both residential construction or investment.",
    ownerName: "Zubair Ahmed",
    ownerPhone: "0345-4443322",
    privacy: "Public",
    postedAt: "3 days ago",
  },
  {
    id: 5,
    title: "Studio Apartment — Short Stay",
    type: "Apartment",
    purpose: "For Rent",
    status: "Rented",
    city: "Lahore",
    area: "Gulberg III",
    price: 45000,
    monthlyRent: 45000,
    sqft: 650,
    bedrooms: 1,
    bathrooms: 1,
    commission: 6,
    nocReady: true,
    description:
      "Cozy studio apartment perfect for students and young professionals. Furnished with AC, fridge, and WiFi. Walking distance from Liberty Market.",
    ownerName: "Rabia Noor",
    ownerPhone: "0302-1122334",
    privacy: "Community Only",
    postedAt: "2 weeks ago",
    tenants: [
      {
        id: 1,
        name: "Sana Fatima",
        phone: "0316-6677889",
        monthlyRent: 45000,
        dueDate: "1st of every month",
        status: "Due",
      },
    ],
    payments: [
      {
        id: 1,
        month: "March 2026",
        amount: 45000,
        datePaid: "",
        status: "Due",
      },
      {
        id: 2,
        month: "February 2026",
        amount: 45000,
        datePaid: "Feb 2, 2026",
        status: "Paid",
      },
    ],
  },
  {
    id: 6,
    title: "Parking Space — Basement Level",
    type: "Parking",
    purpose: "For Rent",
    status: "Available",
    city: "Karachi",
    area: "Zamzama Commercial Area",
    price: 12000,
    monthlyRent: 12000,
    sqft: 250,
    bedrooms: 0,
    bathrooms: 0,
    commission: 0,
    nocReady: true,
    description:
      "Secure basement parking spot for cars or small SUVs. 24/7 CCTV, gated access. Monthly rent includes maintenance.",
    ownerName: "Hassan Traders LLC",
    ownerPhone: "0213-5678901",
    privacy: "Public",
    postedAt: "1 day ago",
  },
  {
    id: 7,
    title: "4-Bedroom Villa with Pool",
    type: "House",
    purpose: "Both",
    status: "Available",
    city: "Islamabad",
    area: "E-11/2",
    price: 95000000,
    monthlyRent: 350000,
    sqft: 5000,
    bedrooms: 4,
    bathrooms: 4,
    commission: 2.5,
    nocReady: true,
    description:
      "Grand villa with private swimming pool, landscaped gardens, servant quarters, and 5-car garage. Available for sale or long-term lease.",
    ownerName: "Maryam Tariq",
    ownerPhone: "0300-9998887",
    privacy: "Family Only",
    postedAt: "4 days ago",
  },
  {
    id: 8,
    title: "Shop Space — Ground Floor",
    type: "Commercial",
    purpose: "For Rent",
    status: "Sold",
    city: "Lahore",
    area: "MM Alam Road, Gulberg",
    price: 180000,
    monthlyRent: 180000,
    sqft: 900,
    bedrooms: 0,
    bathrooms: 1,
    commission: 5,
    nocReady: false,
    description:
      "High-footfall ground floor shop on MM Alam Road. Perfect for retail, restaurant, or clinic. Glass front, AC fitted, mezzanine floor included.",
    ownerName: "Bilal Properties",
    ownerPhone: "0300-4445566",
    privacy: "Public",
    postedAt: "1 week ago",
  },
  {
    id: 9,
    title: "2-Bedroom Apartment — Sea View",
    type: "Apartment",
    purpose: "For Sale",
    status: "Available",
    city: "Karachi",
    area: "DHA Phase 8",
    price: 18500000,
    sqft: 1450,
    bedrooms: 2,
    bathrooms: 2,
    commission: 3,
    nocReady: true,
    description:
      "Stunning sea-view apartment with modern finishes. Has a covered balcony, smart home wiring, and building amenities including gym and pool.",
    ownerName: "Imran Sheikh",
    ownerPhone: "0321-3344556",
    privacy: "Public",
    postedAt: "6 days ago",
  },
  {
    id: 10,
    title: "Agricultural Land — 2 Kanal",
    type: "Plot",
    purpose: "For Sale",
    status: "Available",
    city: "Lahore",
    area: "Bedian Road",
    price: 12000000,
    sqft: 10890,
    bedrooms: 0,
    bathrooms: 0,
    commission: 1.5,
    nocReady: false,
    description:
      "Fertile agricultural land on Bedian Road near Ring Road interchange. Electricity and tube well available. Excellent for farming or future development.",
    ownerName: "Nawab Estate",
    ownerPhone: "0300-7776665",
    privacy: "Public",
    postedAt: "3 weeks ago",
  },
];

// ─────────────────────────────────────────────
// Helper functions
// ─────────────────────────────────────────────
function formatPrice(
  price: number,
  purpose: PropertyPurpose,
  type?: "short",
): string {
  const isRent = purpose === "For Rent";
  if (type === "short") {
    if (price >= 10000000) return `PKR ${(price / 1000000).toFixed(1)}M`;
    if (price >= 100000) return `PKR ${(price / 100000).toFixed(1)} Lac`;
    return `PKR ${price.toLocaleString()}`;
  }
  const base =
    price >= 10000000
      ? `PKR ${(price / 1000000).toFixed(2)}M`
      : price >= 100000
        ? `PKR ${(price / 100000).toFixed(1)} Lac`
        : `PKR ${price.toLocaleString()}`;
  return isRent ? `${base}/mo` : base;
}

const TYPE_GRADIENTS: Record<PropertyType, string> = {
  Apartment:
    "linear-gradient(135deg, oklch(0.55 0.22 280 / 0.25), oklch(0.65 0.25 335 / 0.25))",
  House:
    "linear-gradient(135deg, oklch(0.52 0.14 155 / 0.25), oklch(0.60 0.22 190 / 0.25))",
  Plot: "linear-gradient(135deg, oklch(0.72 0.17 85 / 0.25), oklch(0.65 0.14 50 / 0.25))",
  Commercial:
    "linear-gradient(135deg, oklch(0.48 0.12 260 / 0.25), oklch(0.55 0.22 280 / 0.25))",
  Parking:
    "linear-gradient(135deg, oklch(0.60 0.14 220 / 0.25), oklch(0.55 0.10 200 / 0.25))",
};

const TYPE_COLORS: Record<PropertyType, string> = {
  Apartment: "oklch(0.55 0.22 280)",
  House: "oklch(0.52 0.14 155)",
  Plot: "oklch(0.72 0.17 85)",
  Commercial: "oklch(0.48 0.12 260)",
  Parking: "oklch(0.60 0.14 220)",
};

const PURPOSE_STYLES: Record<PropertyPurpose, { bg: string; color: string }> = {
  "For Sale": {
    bg: "oklch(0.52 0.14 155 / 0.15)",
    color: "oklch(0.52 0.14 155)",
  },
  "For Rent": {
    bg: "oklch(0.55 0.22 280 / 0.15)",
    color: "oklch(0.55 0.22 280)",
  },
  Both: { bg: "oklch(0.65 0.25 335 / 0.15)", color: "oklch(0.65 0.25 335)" },
};

const STATUS_STYLES: Record<PropertyStatus, { bg: string; color: string }> = {
  Available: {
    bg: "oklch(0.52 0.14 155 / 0.15)",
    color: "oklch(0.52 0.14 155)",
  },
  Rented: { bg: "oklch(0.65 0.14 50 / 0.15)", color: "oklch(0.65 0.14 50)" },
  Sold: { bg: "oklch(0.55 0.22 25 / 0.15)", color: "oklch(0.55 0.22 25)" },
};

const TENANT_STATUS_STYLES = {
  Paid: { bg: "oklch(0.52 0.14 155 / 0.15)", color: "oklch(0.52 0.14 155)" },
  Due: { bg: "oklch(0.65 0.14 50 / 0.15)", color: "oklch(0.65 0.14 50)" },
  Overdue: { bg: "oklch(0.55 0.22 25 / 0.15)", color: "oklch(0.55 0.22 25)" },
};

// ─────────────────────────────────────────────
// Stat Card
// ─────────────────────────────────────────────
function StatCard({
  label,
  value,
  icon: Icon,
  color,
}: {
  label: string;
  value: string | number;
  icon: React.ElementType;
  color: string;
}) {
  return (
    <div className="bg-card border border-border rounded-xl shadow-card p-4 flex items-center gap-4 animate-fade-up">
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
        style={{ background: `${color}18` }}
      >
        <Icon size={20} style={{ color }} />
      </div>
      <div>
        <p className="text-2xl font-display font-bold text-foreground leading-tight">
          {value}
        </p>
        <p className="text-xs text-muted-foreground font-label mt-0.5">
          {label}
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Property Card
// ─────────────────────────────────────────────
function PropertyCard({
  property,
  onViewDetails,
  viewMode,
}: {
  property: Property;
  onViewDetails: (p: Property) => void;
  viewMode: "grid" | "list";
}) {
  const typeColor = TYPE_COLORS[property.type];
  const purposeStyle = PURPOSE_STYLES[property.purpose];
  const statusStyle = STATUS_STYLES[property.status];

  if (viewMode === "list") {
    return (
      <div className="bg-card border border-border rounded-xl shadow-card hover:shadow-card-hover transition-all animate-fade-up flex gap-0 overflow-hidden">
        {/* Color strip image area */}
        <div
          className="w-36 shrink-0 flex items-center justify-center"
          style={{ background: TYPE_GRADIENTS[property.type] }}
        >
          <Building2 size={36} style={{ color: typeColor, opacity: 0.7 }} />
        </div>

        <div className="flex-1 p-4 flex flex-col sm:flex-row sm:items-center gap-3 min-w-0">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-1.5 mb-1">
              <Badge
                className="text-[10px] px-1.5 py-0 border-0 font-label"
                style={{ background: `${typeColor}18`, color: typeColor }}
              >
                {property.type}
              </Badge>
              <Badge
                className="text-[10px] px-1.5 py-0 border-0 font-label"
                style={purposeStyle}
              >
                {property.purpose}
              </Badge>
              <Badge
                className="text-[10px] px-1.5 py-0 border-0 font-label"
                style={statusStyle}
              >
                {property.status}
              </Badge>
            </div>
            <h3 className="font-label font-semibold text-foreground text-sm leading-snug truncate">
              {property.title}
            </h3>
            <div className="flex items-center gap-1 mt-0.5 text-xs text-muted-foreground">
              <MapPin size={10} />
              <span>
                {property.area}, {property.city}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-muted-foreground">
              {property.sqft > 0 && (
                <span className="flex items-center gap-1">
                  <Maximize2 size={10} />
                  {property.sqft.toLocaleString()} sqft
                </span>
              )}
              {property.bedrooms > 0 && (
                <span className="flex items-center gap-1">
                  <Bed size={10} />
                  {property.bedrooms} Bed
                </span>
              )}
              {property.bathrooms > 0 && (
                <span className="flex items-center gap-1">
                  <Bath size={10} />
                  {property.bathrooms} Bath
                </span>
              )}
              <span className="flex items-center gap-1">
                <Percent size={10} />
                {property.commission}% commission
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:items-end shrink-0">
            <p
              className="font-display font-bold text-lg"
              style={{ color: typeColor }}
            >
              {formatPrice(property.price, property.purpose)}
            </p>
            <div className="flex items-center gap-1.5">
              {property.nocReady ? (
                <span className="flex items-center gap-1 text-[10px] font-label text-green-600">
                  <CheckCircle2 size={10} /> NOC Ready
                </span>
              ) : (
                <span className="flex items-center gap-1 text-[10px] font-label text-amber-600">
                  <ShieldAlert size={10} /> NOC Pending
                </span>
              )}
            </div>
            <div className="flex gap-2 mt-1">
              <Button
                size="sm"
                className="h-7 text-xs font-label px-3"
                onClick={() => onViewDetails(property)}
              >
                View Details
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="h-7 text-xs font-label px-3 gap-1"
              >
                <Phone size={11} /> Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl shadow-card hover:shadow-card-hover transition-all animate-fade-up overflow-hidden flex flex-col">
      {/* Image / gradient header */}
      <div
        className="h-36 flex items-center justify-center relative"
        style={{ background: TYPE_GRADIENTS[property.type] }}
      >
        <Building2 size={44} style={{ color: typeColor, opacity: 0.6 }} />
        {/* Badges overlay */}
        <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1">
          <Badge
            className="text-[9px] px-1.5 py-0.5 border-0 font-label backdrop-blur-sm"
            style={{ background: `${typeColor}dd`, color: "white" }}
          >
            {property.type}
          </Badge>
        </div>
        <div className="absolute top-2.5 right-2.5">
          <Badge
            className="text-[9px] px-1.5 py-0.5 border-0 font-label"
            style={statusStyle}
          >
            {property.status}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-label font-semibold text-foreground text-sm leading-snug flex-1">
            {property.title}
          </h3>
          <Badge
            className="text-[9px] px-1.5 py-0.5 border-0 font-label shrink-0"
            style={purposeStyle}
          >
            {property.purpose}
          </Badge>
        </div>

        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
          <MapPin size={11} />
          <span>
            {property.area}, {property.city}
          </span>
        </div>

        {/* Price */}
        <p
          className="font-display font-bold text-xl mb-3"
          style={{ color: typeColor }}
        >
          {formatPrice(property.price, property.purpose)}
        </p>

        {/* Property stats */}
        <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-muted-foreground">
          {property.sqft > 0 && (
            <span className="flex items-center gap-1">
              <Maximize2 size={11} />
              <span className="font-label">
                {property.sqft.toLocaleString()} sqft
              </span>
            </span>
          )}
          {property.bedrooms > 0 && (
            <span className="flex items-center gap-1">
              <Bed size={11} />
              <span className="font-label">{property.bedrooms}</span>
            </span>
          )}
          {property.bathrooms > 0 && (
            <span className="flex items-center gap-1">
              <Bath size={11} />
              <span className="font-label">{property.bathrooms}</span>
            </span>
          )}
        </div>

        {/* Commission + NOC */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-label text-muted-foreground flex items-center gap-1">
            <Percent size={10} />
            {property.commission}% commission
          </span>
          {property.nocReady ? (
            <span className="flex items-center gap-1 text-[10px] font-label text-green-600">
              <CheckCircle2 size={10} /> NOC Ready
            </span>
          ) : (
            <span className="flex items-center gap-1 text-[10px] font-label text-amber-600">
              <ShieldAlert size={10} /> NOC Pending
            </span>
          )}
        </div>

        {/* Owner */}
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
          <User size={11} />
          <span>{property.ownerName}</span>
        </div>

        {/* Actions */}
        <div className="mt-auto flex gap-2">
          <Button
            size="sm"
            className="flex-1 h-8 text-xs font-label"
            onClick={() => onViewDetails(property)}
          >
            View Details
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="h-8 text-xs font-label px-3 gap-1"
          >
            <Phone size={11} />
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Property Detail Drawer
// ─────────────────────────────────────────────
function PropertyDetailDrawer({
  property,
  open,
  onClose,
}: {
  property: Property | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!property) return null;

  const typeColor = TYPE_COLORS[property.type];
  const purposeStyle = PURPOSE_STYLES[property.purpose];
  const statusStyle = STATUS_STYLES[property.status];

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent
        side="right"
        className="w-full sm:w-[520px] p-0 overflow-hidden flex flex-col"
      >
        <SheetHeader className="p-5 border-b border-border shrink-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <Badge
              className="text-[10px] px-2 py-0.5 border-0 font-label"
              style={{ background: `${typeColor}18`, color: typeColor }}
            >
              {property.type}
            </Badge>
            <Badge
              className="text-[10px] px-2 py-0.5 border-0 font-label"
              style={purposeStyle}
            >
              {property.purpose}
            </Badge>
            <Badge
              className="text-[10px] px-2 py-0.5 border-0 font-label"
              style={statusStyle}
            >
              {property.status}
            </Badge>
            {property.nocReady ? (
              <span className="flex items-center gap-1 text-[10px] font-label text-green-600">
                <CheckCircle2 size={10} /> NOC Ready
              </span>
            ) : (
              <span className="flex items-center gap-1 text-[10px] font-label text-amber-600">
                <ShieldAlert size={10} /> NOC Pending
              </span>
            )}
          </div>
          <SheetTitle className="font-display text-lg leading-snug">
            {property.title}
          </SheetTitle>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin size={13} />
            {property.area}, {property.city}
          </div>
        </SheetHeader>

        <ScrollArea className="flex-1">
          <div className="p-5">
            {/* Image area */}
            <div
              className="h-44 rounded-xl flex items-center justify-center mb-5"
              style={{ background: TYPE_GRADIENTS[property.type] }}
            >
              <Building2 size={56} style={{ color: typeColor, opacity: 0.5 }} />
            </div>

            <Tabs defaultValue="overview">
              <TabsList className="mb-4 w-full">
                <TabsTrigger
                  value="overview"
                  className="flex-1 text-xs font-label"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger value="rent" className="flex-1 text-xs font-label">
                  Rent Management
                </TabsTrigger>
                <TabsTrigger value="docs" className="flex-1 text-xs font-label">
                  Documents
                </TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-5">
                {/* Price */}
                <div className="bg-secondary/50 rounded-xl p-4">
                  <p
                    className="text-2xl font-display font-bold"
                    style={{ color: typeColor }}
                  >
                    {formatPrice(property.price, property.purpose)}
                  </p>
                  {property.monthlyRent && property.purpose === "Both" && (
                    <p className="text-sm text-muted-foreground mt-0.5 font-label">
                      Also available for rent:{" "}
                      <span style={{ color: typeColor }}>
                        PKR {property.monthlyRent.toLocaleString()}/mo
                      </span>
                    </p>
                  )}
                </div>

                {/* Property Details Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {property.sqft > 0 && (
                    <div className="bg-card border border-border rounded-lg p-3 flex items-center gap-2">
                      <Maximize2 size={16} style={{ color: typeColor }} />
                      <div>
                        <p className="text-xs text-muted-foreground font-label">
                          Area
                        </p>
                        <p className="text-sm font-label font-semibold">
                          {property.sqft.toLocaleString()} sqft
                        </p>
                      </div>
                    </div>
                  )}
                  {property.bedrooms > 0 && (
                    <div className="bg-card border border-border rounded-lg p-3 flex items-center gap-2">
                      <Bed size={16} style={{ color: typeColor }} />
                      <div>
                        <p className="text-xs text-muted-foreground font-label">
                          Bedrooms
                        </p>
                        <p className="text-sm font-label font-semibold">
                          {property.bedrooms}
                        </p>
                      </div>
                    </div>
                  )}
                  {property.bathrooms > 0 && (
                    <div className="bg-card border border-border rounded-lg p-3 flex items-center gap-2">
                      <Bath size={16} style={{ color: typeColor }} />
                      <div>
                        <p className="text-xs text-muted-foreground font-label">
                          Bathrooms
                        </p>
                        <p className="text-sm font-label font-semibold">
                          {property.bathrooms}
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="bg-card border border-border rounded-lg p-3 flex items-center gap-2">
                    <Percent size={16} style={{ color: typeColor }} />
                    <div>
                      <p className="text-xs text-muted-foreground font-label">
                        Commission
                      </p>
                      <p className="text-sm font-label font-semibold">
                        {property.commission}%
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-sm font-label font-semibold mb-2">
                    Description
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {property.description}
                  </p>
                </div>

                {/* Owner Info */}
                <div className="bg-secondary/50 rounded-xl p-4">
                  <h4 className="text-sm font-label font-semibold mb-3">
                    Owner Information
                  </h4>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ background: `${typeColor}20` }}
                    >
                      <User size={18} style={{ color: typeColor }} />
                    </div>
                    <div>
                      <p className="text-sm font-label font-semibold">
                        {property.ownerName}
                      </p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                        <Phone size={10} />
                        {property.ownerPhone}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      className="ml-auto h-8 text-xs font-label gap-1"
                    >
                      <Phone size={11} /> Call
                    </Button>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock size={11} /> Posted {property.postedAt}
                </p>
              </TabsContent>

              {/* Rent Management Tab */}
              <TabsContent value="rent" className="space-y-5">
                {/* Active Tenants */}
                <div>
                  <h4 className="text-sm font-label font-semibold mb-3 flex items-center gap-2">
                    <User size={14} /> Active Tenants
                  </h4>
                  {!property.tenants || property.tenants.length === 0 ? (
                    <div className="text-center py-8 bg-secondary/30 rounded-xl">
                      <User
                        size={28}
                        className="mx-auto text-muted-foreground/30 mb-2"
                      />
                      <p className="text-sm text-muted-foreground font-label">
                        No active tenants
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {property.tenants.map((tenant) => {
                        const ts = TENANT_STATUS_STYLES[tenant.status];
                        return (
                          <div
                            key={tenant.id}
                            className="bg-card border border-border rounded-xl p-3 flex items-center gap-3"
                          >
                            <div
                              className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                              style={{ background: `${typeColor}15` }}
                            >
                              <User size={16} style={{ color: typeColor }} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-label font-semibold">
                                {tenant.name}
                              </p>
                              <p className="text-xs text-muted-foreground flex items-center gap-1">
                                <Phone size={9} /> {tenant.phone}
                              </p>
                              <p className="text-xs text-muted-foreground mt-0.5">
                                PKR {tenant.monthlyRent.toLocaleString()}/mo ·
                                Due: {tenant.dueDate}
                              </p>
                            </div>
                            <Badge
                              className="text-[10px] px-2 py-0.5 border-0 font-label shrink-0"
                              style={ts}
                            >
                              {tenant.status}
                            </Badge>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Payment History */}
                <div>
                  <h4 className="text-sm font-label font-semibold mb-3">
                    Payment History
                  </h4>
                  {!property.payments || property.payments.length === 0 ? (
                    <div className="text-center py-8 bg-secondary/30 rounded-xl">
                      <p className="text-sm text-muted-foreground font-label">
                        No payment records
                      </p>
                    </div>
                  ) : (
                    <div className="border border-border rounded-xl overflow-hidden">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="text-xs font-label">
                              Month
                            </TableHead>
                            <TableHead className="text-xs font-label">
                              Amount
                            </TableHead>
                            <TableHead className="text-xs font-label">
                              Date Paid
                            </TableHead>
                            <TableHead className="text-xs font-label">
                              Status
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {property.payments.map((p) => {
                            const ts = TENANT_STATUS_STYLES[p.status];
                            return (
                              <TableRow key={p.id}>
                                <TableCell className="text-xs font-label">
                                  {p.month}
                                </TableCell>
                                <TableCell className="text-xs font-label font-semibold">
                                  PKR {p.amount.toLocaleString()}
                                </TableCell>
                                <TableCell className="text-xs text-muted-foreground">
                                  {p.datePaid || "—"}
                                </TableCell>
                                <TableCell>
                                  <Badge
                                    className="text-[9px] px-1.5 py-0 border-0 font-label"
                                    style={ts}
                                  >
                                    {p.status}
                                  </Badge>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </div>
                  )}
                </div>
              </TabsContent>

              {/* Documents Tab */}
              <TabsContent value="docs" className="space-y-3">
                <div className="bg-card border border-border rounded-xl p-4 flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: property.nocReady
                        ? "oklch(0.52 0.14 155 / 0.15)"
                        : "oklch(0.65 0.14 50 / 0.15)",
                    }}
                  >
                    {property.nocReady ? (
                      <Shield
                        size={18}
                        style={{ color: "oklch(0.52 0.14 155)" }}
                      />
                    ) : (
                      <ShieldAlert
                        size={18}
                        style={{ color: "oklch(0.65 0.14 50)" }}
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-label font-semibold">
                      NOC Certificate
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {property.nocReady
                        ? "Verified and cleared"
                        : "Pending verification"}
                    </p>
                  </div>
                  <Badge
                    className="text-[10px] px-2 py-0.5 border-0 font-label"
                    style={
                      property.nocReady
                        ? {
                            background: "oklch(0.52 0.14 155 / 0.15)",
                            color: "oklch(0.52 0.14 155)",
                          }
                        : {
                            background: "oklch(0.65 0.14 50 / 0.15)",
                            color: "oklch(0.65 0.14 50)",
                          }
                    }
                  >
                    {property.nocReady ? "Ready" : "Pending"}
                  </Badge>
                </div>

                {[
                  { label: "Lease Agreement", icon: FileText },
                  { label: "Title Deed", icon: FileText },
                  { label: "Property Tax Certificate", icon: FileText },
                  { label: "Utility Bills", icon: FileText },
                ].map(({ label, icon: DocIcon }) => (
                  <div
                    key={label}
                    className="bg-card border border-border rounded-xl p-4 flex items-center gap-3"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "oklch(0.55 0.22 280 / 0.1)" }}
                    >
                      <DocIcon
                        size={18}
                        style={{ color: "oklch(0.55 0.22 280)" }}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-label font-semibold">
                        {label}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Not uploaded yet
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-7 text-xs font-label"
                    >
                      Upload
                    </Button>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

// ─────────────────────────────────────────────
// Add Property Form
// ─────────────────────────────────────────────
interface PropertyForm {
  title: string;
  type: PropertyType;
  purpose: PropertyPurpose;
  city: string;
  area: string;
  price: string;
  monthlyRent: string;
  sqft: string;
  bedrooms: string;
  bathrooms: string;
  commission: string;
  nocReady: boolean;
  description: string;
  privacy: PrivacyLevel;
}

const DEFAULT_FORM: PropertyForm = {
  title: "",
  type: "Apartment",
  purpose: "For Sale",
  city: "",
  area: "",
  price: "",
  monthlyRent: "",
  sqft: "",
  bedrooms: "",
  bathrooms: "",
  commission: "2",
  nocReady: false,
  description: "",
  privacy: "Public",
};

// ─────────────────────────────────────────────
// Main RealEstatePage
// ─────────────────────────────────────────────
export default function RealEstatePage() {
  const [properties, setProperties] = useState<Property[]>(SAMPLE_PROPERTIES);
  const [search, setSearch] = useState("");
  const [purposeFilter, setPurposeFilter] = useState<"All" | PropertyPurpose>(
    "All",
  );
  const [typeFilter, setTypeFilter] = useState<"All Types" | PropertyType>(
    "All Types",
  );
  const [priceFilter, setPriceFilter] = useState("Any");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [addOpen, setAddOpen] = useState(false);
  const [form, setForm] = useState<PropertyForm>(DEFAULT_FORM);
  const [detailProperty, setDetailProperty] = useState<Property | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  // Stats
  const totalListings = properties.length;
  const forSale = properties.filter(
    (p) => p.purpose === "For Sale" || p.purpose === "Both",
  ).length;
  const forRent = properties.filter(
    (p) => p.purpose === "For Rent" || p.purpose === "Both",
  ).length;
  const parkingCount = properties.filter((p) => p.type === "Parking").length;

  // Filter logic
  const filtered = properties.filter((p) => {
    const searchMatch =
      search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.city.toLowerCase().includes(search.toLowerCase()) ||
      p.area.toLowerCase().includes(search.toLowerCase());

    const purposeMatch =
      purposeFilter === "All" ||
      p.purpose === purposeFilter ||
      (purposeFilter === "For Rent" && p.purpose === "Both") ||
      (purposeFilter === "For Sale" && p.purpose === "Both");

    const typeMatch = typeFilter === "All Types" || p.type === typeFilter;

    let priceMatch = true;
    if (priceFilter !== "Any") {
      const price = p.price;
      if (priceFilter === "Under 50K") priceMatch = price < 50000;
      else if (priceFilter === "50K–200K")
        priceMatch = price >= 50000 && price <= 200000;
      else if (priceFilter === "200K–500K")
        priceMatch = price > 200000 && price <= 500000;
      else if (priceFilter === "500K+") priceMatch = price > 500000;
    }

    return searchMatch && purposeMatch && typeMatch && priceMatch;
  });

  const handleAddProperty = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.city.trim()) return;

    const newProperty: Property = {
      id: Date.now(),
      title: form.title,
      type: form.type,
      purpose: form.purpose,
      status: "Available",
      city: form.city,
      area: form.area,
      price: Number(form.price) || 0,
      monthlyRent: form.monthlyRent ? Number(form.monthlyRent) : undefined,
      sqft: Number(form.sqft) || 0,
      bedrooms: Number(form.bedrooms) || 0,
      bathrooms: Number(form.bathrooms) || 0,
      commission: Number(form.commission) || 0,
      nocReady: form.nocReady,
      description: form.description || "No description provided.",
      ownerName: "Me",
      ownerPhone: "0300-0000000",
      privacy: form.privacy,
      postedAt: "Just now",
    };

    setProperties((prev) => [newProperty, ...prev]);
    toast.success("Property listed successfully!");
    setAddOpen(false);
    setForm(DEFAULT_FORM);
  };

  const handleViewDetails = (p: Property) => {
    setDetailProperty(p);
    setDetailOpen(true);
  };

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 animate-fade-up">
        <div>
          <h1 className="text-3xl font-display font-bold text-foreground">
            Real Estate
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">
            {filtered.length} properties · Lahore, Karachi, Islamabad &amp; more
          </p>
        </div>

        <Dialog open={addOpen} onOpenChange={setAddOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2 font-label">
              <Plus size={16} /> Add Property
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-display">
                List a Property
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddProperty} className="space-y-4 mt-2">
              <div className="space-y-2">
                <Label>Title *</Label>
                <Input
                  placeholder="e.g. 3-Bedroom Apartment in DHA"
                  value={form.title}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, title: e.target.value }))
                  }
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Property Type</Label>
                  <Select
                    value={form.type}
                    onValueChange={(v) =>
                      setForm((p) => ({ ...p, type: v as PropertyType }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {(
                        [
                          "Apartment",
                          "House",
                          "Plot",
                          "Commercial",
                          "Parking",
                        ] as PropertyType[]
                      ).map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Purpose</Label>
                  <Select
                    value={form.purpose}
                    onValueChange={(v) =>
                      setForm((p) => ({ ...p, purpose: v as PropertyPurpose }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="For Sale">For Sale</SelectItem>
                      <SelectItem value="For Rent">For Rent</SelectItem>
                      <SelectItem value="Both">Both</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>City *</Label>
                  <Input
                    placeholder="e.g. Lahore"
                    value={form.city}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, city: e.target.value }))
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Area / Sector</Label>
                  <Input
                    placeholder="e.g. DHA Phase 5"
                    value={form.area}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, area: e.target.value }))
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>
                    {form.purpose === "For Rent"
                      ? "Monthly Rent (PKR)"
                      : "Sale Price (PKR)"}
                  </Label>
                  <Input
                    type="number"
                    placeholder="e.g. 25000000"
                    value={form.price}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, price: e.target.value }))
                    }
                  />
                </div>
                {(form.purpose === "For Rent" || form.purpose === "Both") && (
                  <div className="space-y-2">
                    <Label>Monthly Rent (PKR)</Label>
                    <Input
                      type="number"
                      placeholder="e.g. 85000"
                      value={form.monthlyRent}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, monthlyRent: e.target.value }))
                      }
                    />
                  </div>
                )}
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Area (sqft)</Label>
                  <Input
                    type="number"
                    placeholder="e.g. 1850"
                    value={form.sqft}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, sqft: e.target.value }))
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>Bedrooms</Label>
                  <Input
                    type="number"
                    placeholder="3"
                    value={form.bedrooms}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, bedrooms: e.target.value }))
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>Bathrooms</Label>
                  <Input
                    type="number"
                    placeholder="2"
                    value={form.bathrooms}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, bathrooms: e.target.value }))
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Commission (%)</Label>
                  <Input
                    type="number"
                    step="0.5"
                    placeholder="2"
                    value={form.commission}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, commission: e.target.value }))
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>Privacy</Label>
                  <Select
                    value={form.privacy}
                    onValueChange={(v) =>
                      setForm((p) => ({ ...p, privacy: v as PrivacyLevel }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Public">Public</SelectItem>
                      <SelectItem value="Community Only">
                        Community Only
                      </SelectItem>
                      <SelectItem value="Family Only">Family Only</SelectItem>
                      <SelectItem value="Private">Private</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Switch
                  id="noc"
                  checked={form.nocReady}
                  onCheckedChange={(v) =>
                    setForm((p) => ({ ...p, nocReady: v }))
                  }
                />
                <Label htmlFor="noc" className="font-label cursor-pointer">
                  NOC Ready
                </Label>
              </div>

              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  rows={3}
                  className="resize-none"
                  placeholder="Describe the property, features, and surroundings..."
                  value={form.description}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, description: e.target.value }))
                  }
                />
              </div>

              <Button type="submit" className="w-full font-label">
                List Property
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Jobs banner */}
      <div
        className="flex items-center justify-between gap-3 mb-5 px-4 py-2.5 rounded-xl border animate-fade-up"
        style={{
          background: "oklch(0.65 0.14 50 / 0.06)",
          borderColor: "oklch(0.65 0.14 50 / 0.2)",
        }}
      >
        <div className="flex items-center gap-2">
          <Briefcase size={14} style={{ color: "oklch(0.65 0.14 50)" }} />
          <span className="text-xs font-label text-foreground font-medium">
            Real Estate Jobs Available
          </span>
          <span className="text-xs text-muted-foreground hidden sm:inline">
            — agents, property managers &amp; sales coordinators
          </span>
        </div>
        <Button
          size="sm"
          variant="outline"
          className="h-7 text-xs font-label shrink-0"
          onClick={() => toast.info("Navigating to Jobs...")}
        >
          View Jobs
        </Button>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          label="Total Listings"
          value={totalListings}
          icon={Building2}
          color="oklch(0.55 0.22 280)"
        />
        <StatCard
          label="For Sale"
          value={forSale}
          icon={Home}
          color="oklch(0.52 0.14 155)"
        />
        <StatCard
          label="For Rent"
          value={forRent}
          icon={Building2}
          color="oklch(0.65 0.25 335)"
        />
        <StatCard
          label="Parking Available"
          value={parkingCount}
          icon={Car}
          color="oklch(0.60 0.14 220)"
        />
      </div>

      {/* Filters */}
      <div className="space-y-3 mb-6 animate-fade-up animate-fade-up-2">
        {/* Search */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              placeholder="Search by title, city, or area..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 h-9 text-sm"
            />
          </div>
          <div className="flex gap-2">
            <Select
              value={typeFilter}
              onValueChange={(v) => setTypeFilter(v as typeof typeFilter)}
            >
              <SelectTrigger className="h-9 text-xs font-label w-[140px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Types">All Types</SelectItem>
                {(
                  [
                    "Apartment",
                    "House",
                    "Plot",
                    "Commercial",
                    "Parking",
                  ] as PropertyType[]
                ).map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger className="h-9 text-xs font-label w-[140px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Any">Any Price</SelectItem>
                <SelectItem value="Under 50K">Under 50K</SelectItem>
                <SelectItem value="50K–200K">50K – 200K</SelectItem>
                <SelectItem value="200K–500K">200K – 500K</SelectItem>
                <SelectItem value="500K+">500K+</SelectItem>
              </SelectContent>
            </Select>

            {/* View Toggle */}
            <div className="flex border border-border rounded-lg overflow-hidden">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`px-2.5 py-1.5 transition-colors ${
                  viewMode === "grid"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Grid3X3 size={14} />
              </button>
              <button
                type="button"
                onClick={() => setViewMode("list")}
                className={`px-2.5 py-1.5 transition-colors ${
                  viewMode === "list"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <LayoutList size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Purpose Tabs */}
        <div className="flex gap-1.5 flex-wrap">
          {(["All", "For Sale", "For Rent", "Parking"] as const).map((tab) => {
            const isActive =
              tab === "All"
                ? purposeFilter === "All"
                : tab === "Parking"
                  ? typeFilter === "Parking"
                  : purposeFilter === tab;

            return (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  if (tab === "Parking") {
                    setTypeFilter(
                      typeFilter === "Parking" ? "All Types" : "Parking",
                    );
                  } else {
                    setPurposeFilter(
                      tab === "All" ? "All" : (tab as PropertyPurpose),
                    );
                  }
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-label font-medium transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {tab}
              </button>
            );
          })}
          <span className="ml-auto text-xs font-label text-muted-foreground self-center">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* Property Listings */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <Building2
            size={44}
            className="mx-auto text-muted-foreground/25 mb-4"
          />
          <p className="text-muted-foreground font-label text-sm">
            No properties match your filters
          </p>
          <Button
            variant="outline"
            size="sm"
            className="mt-4 font-label"
            onClick={() => {
              setSearch("");
              setPurposeFilter("All");
              setTypeFilter("All Types");
              setPriceFilter("Any");
            }}
          >
            Clear Filters
          </Button>
        </div>
      ) : viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((p, i) => (
            <div key={p.id} style={{ animationDelay: `${i * 0.04}s` }}>
              <PropertyCard
                property={p}
                onViewDetails={handleViewDetails}
                viewMode="grid"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {filtered.map((p, i) => (
            <div key={p.id} style={{ animationDelay: `${i * 0.03}s` }}>
              <PropertyCard
                property={p}
                onViewDetails={handleViewDetails}
                viewMode="list"
              />
            </div>
          ))}
        </div>
      )}

      {/* Property Detail Drawer */}
      <PropertyDetailDrawer
        property={detailProperty}
        open={detailOpen}
        onClose={() => setDetailOpen(false)}
      />
    </div>
  );
}
