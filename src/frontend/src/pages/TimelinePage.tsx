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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Briefcase,
  Building2,
  Calendar,
  Clock,
  Eye,
  FileText,
  Globe,
  GraduationCap,
  Heart,
  Home,
  Lock,
  MapPin,
  Plane,
  Plus,
  Search,
  Share2,
  ShoppingBag,
  TreePine,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import QuickAddBar from "../components/QuickAddBar";

// ─── Types ────────────────────────────────────────────────────────────────────

type Privacy = "Private" | "Family" | "Friends" | "Community" | "Public";
type Module =
  | "Family"
  | "Jobs"
  | "Healthcare"
  | "Real Estate"
  | "Education"
  | "Travel"
  | "Blog"
  | "Community"
  | "Products"
  | "Dating"
  | "Matrimony"
  | "Social";

interface TimelineEntry {
  id: number;
  title: string;
  description: string;
  module: Module;
  location?: string;
  timestamp: string;
  date: Date;
  privacy: Privacy;
  tags?: string[];
}

// ─── Constants ────────────────────────────────────────────────────────────────

const MODULE_COLORS: Record<Module, string> = {
  Family: "oklch(0.55 0.22 280)",
  Jobs: "oklch(0.52 0.14 155)",
  Healthcare: "oklch(0.58 0.22 25)",
  "Real Estate": "oklch(0.62 0.19 55)",
  Education: "oklch(0.55 0.18 240)",
  Travel: "oklch(0.48 0.12 200)",
  Blog: "oklch(0.60 0.22 310)",
  Community: "oklch(0.60 0.20 190)",
  Products: "oklch(0.65 0.25 335)",
  Dating: "oklch(0.62 0.24 350)",
  Matrimony: "oklch(0.65 0.25 335)",
  Social: "oklch(0.55 0.20 250)",
};

const MODULE_ICONS: Record<Module, React.ElementType> = {
  Family: TreePine,
  Jobs: Briefcase,
  Healthcare: Heart,
  "Real Estate": Building2,
  Education: GraduationCap,
  Travel: Plane,
  Blog: FileText,
  Community: Users,
  Products: ShoppingBag,
  Dating: Zap,
  Matrimony: Heart,
  Social: Home,
};

const PRIVACY_ICONS: Record<Privacy, React.ElementType> = {
  Private: Lock,
  Family: TreePine,
  Friends: Users,
  Community: Building2,
  Public: Globe,
};

const PRIVACY_COLORS: Record<Privacy, string> = {
  Private: "oklch(0.55 0.02 0)",
  Family: "oklch(0.55 0.22 280)",
  Friends: "oklch(0.52 0.14 155)",
  Community: "oklch(0.60 0.20 190)",
  Public: "oklch(0.62 0.19 55)",
};

// ─── Sample Data ──────────────────────────────────────────────────────────────

const now = new Date("2026-03-02T12:00:00");
const daysAgo = (d: number) =>
  new Date(now.getTime() - d * 24 * 60 * 60 * 1000);

const SAMPLE_ENTRIES: TimelineEntry[] = [
  {
    id: 1,
    title: "Applied for Senior Frontend Engineer role at TechPK",
    description:
      "Submitted my application for the senior engineer position. Attached portfolio and updated resume.",
    module: "Jobs",
    location: "Lahore",
    timestamp: "Today, 10:30 AM",
    date: daysAgo(0),
    privacy: "Private",
    tags: ["Job Application", "Frontend"],
  },
  {
    id: 2,
    title: "Added Father — Khalid Hassan — to Family Tree",
    description:
      "Completed Father's profile with blood type, medical conditions, and occupation details.",
    module: "Family",
    location: "Lahore",
    timestamp: "Yesterday, 3:15 PM",
    date: daysAgo(1),
    privacy: "Family",
    tags: ["Family Tree", "Profile"],
  },
  {
    id: 3,
    title: "Booked appointment with Dr. Ayesha Mirza",
    description:
      "Cardiology consultation scheduled for next Tuesday at 3:00 PM.",
    module: "Healthcare",
    location: "Shaukat Khanum Hospital, Lahore",
    timestamp: "Yesterday, 11:00 AM",
    date: daysAgo(1),
    privacy: "Private",
    tags: ["Appointment", "Cardiology"],
  },
  {
    id: 4,
    title: "Enrolled in O-Level Chemistry at Green Valley Academy",
    description:
      "Registration complete. Classes start March 10th. Subject teacher: Prof. Nasir Ahmed.",
    module: "Education",
    location: "Green Valley Academy, DHA Phase 5",
    timestamp: "2 days ago",
    date: daysAgo(2),
    privacy: "Family",
    tags: ["Enrollment", "O-Levels", "Chemistry"],
  },
  {
    id: 5,
    title: "Purchased Handwoven Kashmiri Shawl",
    description:
      "Order placed for 2 shawls. Estimated delivery in 5-7 business days.",
    module: "Products",
    location: "Online — Sana Boutique",
    timestamp: "2 days ago",
    date: daysAgo(2),
    privacy: "Private",
    tags: ["Purchase", "Fashion"],
  },
  {
    id: 6,
    title: "Listed 5-Marla House in Johar Town for Sale",
    description:
      "Property listed at PKR 1.8 Crore. 3 bedrooms, 2 bathrooms, covered parking.",
    module: "Real Estate",
    location: "Johar Town, Lahore",
    timestamp: "3 days ago",
    date: daysAgo(3),
    privacy: "Public",
    tags: ["Property Listing", "Sale"],
  },
  {
    id: 7,
    title: "Joined Green Valley Society Community",
    description:
      "Successfully enrolled as a resident member. Unit: Block C, Flat 204.",
    module: "Community",
    location: "Green Valley Society, Islamabad",
    timestamp: "4 days ago",
    date: daysAgo(4),
    privacy: "Community",
    tags: ["Community Join"],
  },
  {
    id: 8,
    title: "Published Blog: 'Best Eid Recipes from My Mother'",
    description:
      "Blog post published with affiliate links to 3 cookware products. 245 reads in first hour.",
    module: "Blog",
    location: "Online",
    timestamp: "5 days ago",
    date: daysAgo(5),
    privacy: "Public",
    tags: ["Blog Post", "Recipes", "Affiliate"],
  },
  {
    id: 9,
    title: "Booked Northern Pakistan Tour — July 2026",
    description:
      "8-day Hunza & Skardu tour with Usman Travels. PKR 45,000 per person. Booking confirmed.",
    module: "Travel",
    location: "Hunza & Skardu, KPK",
    timestamp: "6 days ago",
    date: daysAgo(6),
    privacy: "Friends",
    tags: ["Tour Booking", "Northern Pakistan"],
  },
  {
    id: 10,
    title: "Enabled Matrimony Profile",
    description:
      "Matrimony profile activated. Preferences set: Sunni, professional, Lahore-based.",
    module: "Matrimony",
    location: "Lahore",
    timestamp: "1 week ago",
    date: daysAgo(7),
    privacy: "Family",
    tags: ["Matrimony", "Profile"],
  },
  {
    id: 11,
    title: "Added Family Circle — The Khan Family",
    description:
      "Created family circle with 8 initial members. Admin privileges granted to 2 co-admins.",
    module: "Family",
    location: "Lahore",
    timestamp: "1 week ago",
    date: daysAgo(7),
    privacy: "Family",
    tags: ["Family Circle"],
  },
  {
    id: 12,
    title: "Hired as Security Guard — Green Valley Society",
    description:
      "Job offer accepted for morning shift security position. Start date: March 5th.",
    module: "Jobs",
    location: "Green Valley Society, Islamabad",
    timestamp: "8 days ago",
    date: daysAgo(8),
    privacy: "Family",
    tags: ["Job Hired", "Security"],
  },
  {
    id: 13,
    title: "Checked in at Pearl Continental Hotel",
    description: "Business trip to Karachi. Checked in for 3 nights. Room 512.",
    module: "Travel",
    location: "Pearl Continental, Karachi",
    timestamp: "10 days ago",
    date: daysAgo(10),
    privacy: "Friends",
    tags: ["Hotel", "Business Trip"],
  },
  {
    id: 14,
    title: "Purchased Jubilee Health Insurance Policy",
    description:
      "Annual health insurance policy activated. Coverage: PKR 20 Lakh family coverage.",
    module: "Healthcare",
    location: "Online",
    timestamp: "12 days ago",
    date: daysAgo(12),
    privacy: "Family",
    tags: ["Insurance", "Healthcare"],
  },
  {
    id: 15,
    title: "Added Business — Khan Electronics to Family Tree",
    description:
      "Retail electronics business linked to profile. Registered in Lahore.",
    module: "Family",
    location: "Liberty Market, Lahore",
    timestamp: "2 weeks ago",
    date: daysAgo(14),
    privacy: "Public",
    tags: ["Business", "Family Tree"],
  },
  {
    id: 16,
    title: "Attended Career Fair 2026 at Expo Centre",
    description:
      "Connected with 8 companies. Dropped resume at TechPK, SystemsPK, and NetSol booths.",
    module: "Jobs",
    location: "Expo Centre, Lahore",
    timestamp: "2 weeks ago",
    date: daysAgo(14),
    privacy: "Public",
    tags: ["Career Fair", "Networking"],
  },
  {
    id: 17,
    title: "Transferred to DHA Branch — Green Valley Academy",
    description:
      "School transfer processed. Records forwarded to new school. New term starts April 1.",
    module: "Education",
    location: "DHA Phase 8, Lahore",
    timestamp: "3 weeks ago",
    date: daysAgo(21),
    privacy: "Family",
    tags: ["School Transfer"],
  },
  {
    id: 18,
    title: "Listed Parking Spot for Rent",
    description:
      "Parking slot #P-14 listed for community rent at PKR 3,000/month.",
    module: "Community",
    location: "Green Valley Society, Block C",
    timestamp: "3 weeks ago",
    date: daysAgo(21),
    privacy: "Community",
    tags: ["Parking Rental"],
  },
  {
    id: 19,
    title: "Matched with Ayesha Siddiqui — Matrimony",
    description:
      "85% compatibility match. Sent introduction request. Awaiting response.",
    module: "Matrimony",
    location: "Lahore",
    timestamp: "1 month ago",
    date: daysAgo(30),
    privacy: "Private",
    tags: ["Match", "Matrimony"],
  },
  {
    id: 20,
    title: "Created Tour Package — Murree Weekend Getaway",
    description:
      "Travel package created for 2-day Murree trip. PKR 8,500 per person. 15 slots available.",
    module: "Travel",
    location: "Murree, Punjab",
    timestamp: "1 month ago",
    date: daysAgo(30),
    privacy: "Public",
    tags: ["Tour Package", "Travel"],
  },
  {
    id: 21,
    title: "Registered as Freelancer Teacher — Mathematics",
    description:
      "Freelancer profile created. Hourly rate: PKR 2,000. Available for O & A Level students.",
    module: "Education",
    location: "Lahore (Online & Home Visits)",
    timestamp: "6 weeks ago",
    date: daysAgo(42),
    privacy: "Public",
    tags: ["Freelance", "Teaching"],
  },
  {
    id: 22,
    title: "Posted Social Update in Community Feed",
    description:
      "Shared post about the upcoming Eid Bazaar event with 3 photos.",
    module: "Social",
    location: "Lahore",
    timestamp: "2 months ago",
    date: daysAgo(60),
    privacy: "Community",
    tags: ["Post", "Eid"],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getDateGroup(date: Date): string {
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (24 * 60 * 60 * 1000));
  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return "This Week";
  if (diffDays < 14) return "Last Week";
  if (diffDays < 30) return "This Month";
  if (diffDays < 60) return "Last Month";
  return "Earlier";
}

const DATE_GROUP_ORDER = [
  "Today",
  "Yesterday",
  "This Week",
  "Last Week",
  "This Month",
  "Last Month",
  "Earlier",
];

// ─── Main component ───────────────────────────────────────────────────────────

export default function TimelinePage() {
  const [entries, setEntries] = useState<TimelineEntry[]>(SAMPLE_ENTRIES);
  const [searchQuery, setSearchQuery] = useState("");
  const [moduleFilter, setModuleFilter] = useState<string>("All");
  const [dateFilter, setDateFilter] = useState<string>("All Time");
  const [checkInOpen, setCheckInOpen] = useState(false);
  const [newCheckIn, setNewCheckIn] = useState({
    title: "",
    description: "",
    location: "",
    module: "Social" as Module,
    privacy: "Friends" as Privacy,
  });

  const modules: Module[] = [
    "Family",
    "Jobs",
    "Healthcare",
    "Real Estate",
    "Education",
    "Travel",
    "Blog",
    "Community",
    "Products",
    "Dating",
    "Matrimony",
    "Social",
  ];

  const handlePrivacyChange = (id: number, privacy: Privacy) => {
    setEntries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, privacy } : e)),
    );
    toast.success("Privacy updated");
  };

  const handleCrossPost = (entry: TimelineEntry) => {
    toast.success(
      `Cross-posted to ${entry.privacy === "Public" ? "Social Feed" : `${entry.privacy} Feed`}`,
    );
  };

  const handleCheckIn = () => {
    if (!newCheckIn.title) {
      toast.error("Title is required");
      return;
    }
    const entry: TimelineEntry = {
      id: Date.now(),
      title: newCheckIn.title,
      description: newCheckIn.description,
      module: newCheckIn.module,
      location: newCheckIn.location,
      timestamp: "Just now",
      date: new Date(),
      privacy: newCheckIn.privacy,
      tags: ["Check In"],
    };
    setEntries((prev) => [entry, ...prev]);
    setCheckInOpen(false);
    setNewCheckIn({
      title: "",
      description: "",
      location: "",
      module: "Social",
      privacy: "Friends",
    });
    toast.success("Activity added to timeline!");
  };

  const filteredEntries = useMemo(() => {
    return entries.filter((e) => {
      if (moduleFilter !== "All" && e.module !== moduleFilter) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        if (
          !e.title.toLowerCase().includes(q) &&
          !e.description.toLowerCase().includes(q) &&
          !(e.location || "").toLowerCase().includes(q) &&
          !(e.tags || []).some((t) => t.toLowerCase().includes(q))
        )
          return false;
      }
      if (dateFilter !== "All Time") {
        const group = getDateGroup(e.date);
        if (group !== dateFilter) return false;
      }
      return true;
    });
  }, [entries, searchQuery, moduleFilter, dateFilter]);

  const grouped = useMemo(() => {
    const map: Record<string, TimelineEntry[]> = {};
    for (const entry of filteredEntries) {
      const group = getDateGroup(entry.date);
      if (!map[group]) map[group] = [];
      map[group].push(entry);
    }
    return map;
  }, [filteredEntries]);

  const EntryCard = ({ entry }: { entry: TimelineEntry }) => {
    const color = MODULE_COLORS[entry.module];
    const ModIcon = MODULE_ICONS[entry.module];
    const PrivacyIcon = PRIVACY_ICONS[entry.privacy];
    const privacyColor = PRIVACY_COLORS[entry.privacy];

    return (
      <div className="relative flex gap-4 group">
        {/* Timeline dot & line */}
        <div className="relative flex flex-col items-center">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 shadow-sm group-hover:scale-110 transition-transform"
            style={{ background: `${color}18`, border: `2px solid ${color}40` }}
          >
            <ModIcon size={14} style={{ color }} />
          </div>
          <div
            className="w-px flex-1 mt-1"
            style={{ background: `${color}20` }}
          />
        </div>

        {/* Entry card */}
        <div className="flex-1 pb-4 min-w-0">
          <div className="bg-card border border-border rounded-xl p-3.5 hover:border-border/80 hover:shadow-sm transition-all">
            {/* Header */}
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span
                    className="text-[10px] font-label font-bold px-2 py-0.5 rounded-full"
                    style={{ background: `${color}15`, color }}
                  >
                    {entry.module}
                  </span>
                  {(entry.tags || []).slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-label px-1.5 py-0.5 rounded bg-secondary/60 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-sm font-label font-semibold text-foreground leading-snug">
                  {entry.title}
                </h3>
              </div>

              {/* Privacy selector */}
              <Select
                value={entry.privacy}
                onValueChange={(v) =>
                  handlePrivacyChange(entry.id, v as Privacy)
                }
              >
                <SelectTrigger className="h-6 w-auto gap-1 border-0 bg-transparent px-1.5 text-[10px] font-label hover:bg-secondary/60 transition-colors shrink-0">
                  <PrivacyIcon size={10} style={{ color: privacyColor }} />
                  <span style={{ color: privacyColor }}>{entry.privacy}</span>
                </SelectTrigger>
                <SelectContent>
                  {(
                    [
                      "Private",
                      "Family",
                      "Friends",
                      "Community",
                      "Public",
                    ] as Privacy[]
                  ).map((p) => {
                    const PIcon = PRIVACY_ICONS[p];
                    return (
                      <SelectItem key={p} value={p}>
                        <div className="flex items-center gap-2">
                          <PIcon size={11} />
                          {p}
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>

            <p className="text-[11px] text-muted-foreground mb-2 leading-relaxed">
              {entry.description}
            </p>

            {/* Meta */}
            <div className="flex items-center gap-3 text-[10px] text-muted-foreground/70 mb-2.5">
              <span className="flex items-center gap-1">
                <Clock size={9} />
                {entry.timestamp}
              </span>
              {entry.location && (
                <span className="flex items-center gap-1">
                  <MapPin size={9} />
                  {entry.location}
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="h-6 text-[10px] font-label text-muted-foreground hover:text-foreground px-2 gap-1"
                onClick={() => handleCrossPost(entry)}
              >
                <Share2 size={10} />
                Cross-post to Feed
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 text-[10px] font-label text-muted-foreground hover:text-foreground px-2 gap-1"
              >
                <Eye size={10} />
                View
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-4 lg:p-6 max-w-3xl mx-auto">
      {/* Page header */}
      <div className="mb-6 animate-fade-up">
        <div className="flex items-center justify-between mb-1">
          <div>
            <h1 className="text-2xl font-display font-bold text-foreground">
              My Timeline
            </h1>
            <p className="text-sm text-muted-foreground">
              Your complete activity history across all modules
            </p>
          </div>
          <Dialog open={checkInOpen} onOpenChange={setCheckInOpen}>
            <DialogTrigger asChild>
              <Button
                size="sm"
                className="h-9 text-xs font-label gap-1.5"
                style={{ background: "oklch(0.55 0.22 280)" }}
              >
                <Plus size={14} />
                Check In
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="font-label">
                  Add to Timeline
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-2">
                <div className="space-y-1.5">
                  <Label className="text-xs">Activity / Title *</Label>
                  <Input
                    value={newCheckIn.title}
                    onChange={(e) =>
                      setNewCheckIn((p) => ({ ...p, title: e.target.value }))
                    }
                    placeholder="e.g. Visited Lahore Museum"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Description</Label>
                  <Textarea
                    value={newCheckIn.description}
                    onChange={(e) =>
                      setNewCheckIn((p) => ({
                        ...p,
                        description: e.target.value,
                      }))
                    }
                    placeholder="What happened? How was the experience?"
                    rows={3}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Location</Label>
                  <Input
                    value={newCheckIn.location}
                    onChange={(e) =>
                      setNewCheckIn((p) => ({ ...p, location: e.target.value }))
                    }
                    placeholder="e.g. Lahore Museum, Mall Road"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label className="text-xs">Module</Label>
                    <Select
                      value={newCheckIn.module}
                      onValueChange={(v) =>
                        setNewCheckIn((p) => ({ ...p, module: v as Module }))
                      }
                    >
                      <SelectTrigger className="h-9 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {modules.map((m) => (
                          <SelectItem key={m} value={m} className="text-xs">
                            {m}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs">Privacy</Label>
                    <Select
                      value={newCheckIn.privacy}
                      onValueChange={(v) =>
                        setNewCheckIn((p) => ({ ...p, privacy: v as Privacy }))
                      }
                    >
                      <SelectTrigger className="h-9 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {(
                          [
                            "Private",
                            "Family",
                            "Friends",
                            "Community",
                            "Public",
                          ] as Privacy[]
                        ).map((p) => (
                          <SelectItem key={p} value={p} className="text-xs">
                            {p}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCheckInOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  size="sm"
                  style={{ background: "oklch(0.55 0.22 280)", color: "white" }}
                  onClick={handleCheckIn}
                >
                  Add to Timeline
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-card border border-border rounded-xl p-3 mb-5 space-y-3 animate-fade-up">
        <div className="relative">
          <QuickAddBar moduleName="Timeline" />

          <Search
            size={13}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            placeholder="Search timeline by keyword, location, activity..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8 h-9 text-xs bg-secondary/60 border-0 focus-visible:ring-1"
          />
          {searchQuery && (
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              onClick={() => setSearchQuery("")}
            >
              <X size={12} />
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {/* Module filter */}
          <Select value={moduleFilter} onValueChange={setModuleFilter}>
            <SelectTrigger className="h-7 w-auto text-[11px] font-label border-border bg-secondary/40 gap-1.5 min-w-[100px]">
              <SelectValue placeholder="All Modules" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All" className="text-xs">
                All Modules
              </SelectItem>
              {modules.map((m) => (
                <SelectItem key={m} value={m} className="text-xs">
                  {m}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Date filter */}
          <Select value={dateFilter} onValueChange={setDateFilter}>
            <SelectTrigger className="h-7 w-auto text-[11px] font-label border-border bg-secondary/40 gap-1.5 min-w-[100px]">
              <SelectValue placeholder="All Time" />
            </SelectTrigger>
            <SelectContent>
              {["All Time", ...DATE_GROUP_ORDER].map((d) => (
                <SelectItem key={d} value={d} className="text-xs">
                  {d}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Clear filters */}
          {(searchQuery ||
            moduleFilter !== "All" ||
            dateFilter !== "All Time") && (
            <Button
              variant="ghost"
              size="sm"
              className="h-7 text-[11px] font-label text-muted-foreground hover:text-foreground px-2"
              onClick={() => {
                setSearchQuery("");
                setModuleFilter("All");
                setDateFilter("All Time");
              }}
            >
              Clear filters
            </Button>
          )}
        </div>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          {
            label: "Total Activities",
            value: entries.length,
            color: "oklch(0.55 0.22 280)",
          },
          {
            label: "This Month",
            value: entries.filter(
              (e) =>
                getDateGroup(e.date) === "This Month" ||
                getDateGroup(e.date) === "Today" ||
                getDateGroup(e.date) === "Yesterday" ||
                getDateGroup(e.date) === "This Week" ||
                getDateGroup(e.date) === "Last Week",
            ).length,
            color: "oklch(0.52 0.14 155)",
          },
          {
            label: "Public Posts",
            value: entries.filter((e) => e.privacy === "Public").length,
            color: "oklch(0.62 0.19 55)",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-card border border-border rounded-lg p-3 text-center"
          >
            <p
              className="text-xl font-display font-bold"
              style={{ color: stat.color }}
            >
              {stat.value}
            </p>
            <p className="text-[10px] font-label text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Timeline */}
      {filteredEntries.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          <Clock size={32} className="mx-auto mb-3 opacity-30" />
          <p className="text-sm font-label">No timeline entries found</p>
          <p className="text-xs mt-1">
            Try adjusting your filters or add a new check-in
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {DATE_GROUP_ORDER.filter((g) => grouped[g]?.length > 0).map(
            (group) => (
              <div key={group}>
                {/* Date group separator */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-muted-foreground/60" />
                    <span className="text-[11px] font-label font-bold text-muted-foreground uppercase tracking-wider">
                      {group}
                    </span>
                  </div>
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-[10px] font-label text-muted-foreground/60">
                    {grouped[group].length} activities
                  </span>
                </div>

                {/* Entries */}
                <div className="pl-2">
                  {grouped[group].map((entry) => (
                    <EntryCard key={entry.id} entry={entry} />
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      )}
    </div>
  );
}
