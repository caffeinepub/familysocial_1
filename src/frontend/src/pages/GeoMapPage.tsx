import "leaflet/dist/leaflet.css";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
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
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import L from "leaflet";
import {
  BookOpen,
  Briefcase,
  Building2,
  Filter,
  Heart,
  Layers,
  MapPin as MapPinIcon,
  Plane,
  Sparkles,
  TreePine,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  CircleMarker,
  MapContainer,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";

// Fix Leaflet default marker icons
(L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl =
  undefined;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// ── Layer definitions ────────────────────────────────────────────────────────

interface LayerDef {
  id: string;
  label: string;
  color: string;
  icon: React.ElementType;
}

const LAYERS: LayerDef[] = [
  {
    id: "family",
    label: "Family",
    color: "oklch(0.55 0.22 280)",
    icon: TreePine,
  },
  {
    id: "friends",
    label: "Friends",
    color: "oklch(0.60 0.22 310)",
    icon: Users,
  },
  {
    id: "community",
    label: "Community",
    color: "oklch(0.60 0.20 190)",
    icon: Users,
  },
  { id: "jobs", label: "Jobs", color: "oklch(0.62 0.20 150)", icon: Briefcase },
  {
    id: "real-estate",
    label: "Real Estate",
    color: "oklch(0.62 0.19 55)",
    icon: Building2,
  },
  {
    id: "healthcare",
    label: "Healthcare",
    color: "oklch(0.58 0.22 25)",
    icon: Heart,
  },
  { id: "travel", label: "Travel", color: "oklch(0.55 0.18 240)", icon: Plane },
  { id: "blog", label: "Blog", color: "oklch(0.60 0.22 310)", icon: BookOpen },
  {
    id: "events",
    label: "Events",
    color: "oklch(0.65 0.20 55)",
    icon: MapPinIcon,
  },
  {
    id: "matrimony",
    label: "Matrimony",
    color: "oklch(0.62 0.22 350)",
    icon: Heart,
  },
  {
    id: "dating",
    label: "Dating",
    color: "oklch(0.60 0.22 280)",
    icon: Zap,
  },
];

const LAYER_HEX: Record<string, string> = {
  family: "#7c3aed",
  friends: "#a855f7",
  community: "#06b6d4",
  jobs: "#22c55e",
  "real-estate": "#f59e0b",
  healthcare: "#ef4444",
  travel: "#3b82f6",
  blog: "#ec4899",
  events: "#f97316",
  matrimony: "#f43f5e",
  dating: "#8b5cf6",
};

// ── Mock pin data with real lat/lng ─────────────────────────────────────────

interface GeoPin {
  id: number;
  name: string;
  layer: string;
  lat: number;
  lng: number;
  preview: string;
  privacy: "private" | "family" | "community" | "friends" | "public";
  timestamp: string;
  shareLevel?: "hidden" | "nickname" | "basic" | "full";
  isNew?: boolean;
  compatScore?: number;
  relationshipGoal?: string;
  ageRange?: string;
}

// Lahore: ~31.5, 74.3 | Karachi: ~24.86, 67.01 | Islamabad: ~33.72, 73.06
const MAP_PINS: GeoPin[] = [
  {
    id: 1,
    name: "Khalid Hassan",
    layer: "family",
    lat: 31.548,
    lng: 74.358,
    preview: "Father · Hassan Textiles owner",
    privacy: "family",
    timestamp: "2 hrs ago",
  },
  {
    id: 2,
    name: "Fatima Hassan",
    layer: "family",
    lat: 31.523,
    lng: 74.312,
    preview: "Mother · DHA Phase 5",
    privacy: "family",
    timestamp: "4 hrs ago",
  },
  {
    id: 3,
    name: "Omar Hassan",
    layer: "family",
    lat: 31.487,
    lng: 74.276,
    preview: "Brother · Johar Town, Lahore",
    privacy: "family",
    timestamp: "1 day ago",
  },
  {
    id: 4,
    name: "Hamza Raza",
    layer: "friends",
    lat: 31.511,
    lng: 74.339,
    preview: "5 mutual connections · Gulberg",
    privacy: "friends",
    timestamp: "30 min ago",
  },
  {
    id: 5,
    name: "Sana Malik",
    layer: "friends",
    lat: 31.462,
    lng: 74.301,
    preview: "University friend · Model Town",
    privacy: "friends",
    timestamp: "3 hrs ago",
  },
  {
    id: 6,
    name: "Bilal Chaudhry",
    layer: "friends",
    lat: 31.418,
    lng: 74.227,
    preview: "Colleague · Bahria Town",
    privacy: "public",
    timestamp: "Yesterday",
  },
  {
    id: 7,
    name: "DHA Phase 5 Society",
    layer: "community",
    lat: 31.475,
    lng: 74.393,
    preview: "Gate entry system active · 1,240 residents",
    privacy: "community",
    timestamp: "Live",
  },
  {
    id: 8,
    name: "Green Valley Society",
    layer: "community",
    lat: 31.533,
    lng: 74.382,
    preview: "Community announcement: Maintenance 8AM",
    privacy: "community",
    timestamp: "2 hrs ago",
  },
  {
    id: 9,
    name: "Asif Javed",
    layer: "community",
    lat: 31.491,
    lng: 74.355,
    preview: "Active community member · Allama Iqbal Town",
    privacy: "community",
    timestamp: "5 hrs ago",
  },
  {
    id: 10,
    name: "TechCorp Pakistan",
    layer: "jobs",
    lat: 31.508,
    lng: 74.344,
    preview: "Senior Software Engineer · PKR 3.5L/mo",
    privacy: "public",
    timestamp: "4 hrs ago",
  },
  {
    id: 11,
    name: "StartupPK Office",
    layer: "jobs",
    lat: 31.519,
    lng: 74.329,
    preview: "Product Manager position open",
    privacy: "public",
    timestamp: "1 day ago",
  },
  {
    id: 12,
    name: "Graphic Studio Karachi",
    layer: "jobs",
    lat: 24.875,
    lng: 67.022,
    preview: "Part-time designer role · Karachi",
    privacy: "public",
    timestamp: "1 day ago",
  },
  {
    id: 13,
    name: "DHA Phase 6 Apartment",
    layer: "real-estate",
    lat: 31.468,
    lng: 74.409,
    preview: "3BR · 1800 sqft · PKR 2.8 Cr",
    privacy: "public",
    timestamp: "3 hrs ago",
  },
  {
    id: 14,
    name: "Gulberg III House",
    layer: "real-estate",
    lat: 31.513,
    lng: 74.345,
    preview: "5 Marla · Renovated · PKR 1.95 Cr",
    privacy: "public",
    timestamp: "2 days ago",
  },
  {
    id: 15,
    name: "Model Town Property",
    layer: "real-estate",
    lat: 31.462,
    lng: 74.301,
    preview: "10 Marla corner plot · PKR 4.2 Cr",
    privacy: "public",
    timestamp: "3 days ago",
  },
  {
    id: 16,
    name: "Dr. Ayesha Clinic",
    layer: "healthcare",
    lat: 31.503,
    lng: 74.362,
    preview: "General Physician · DHA Phase 4",
    privacy: "public",
    timestamp: "Live",
  },
  {
    id: 17,
    name: "Shaukat Khanum Hospital",
    layer: "healthcare",
    lat: 31.437,
    lng: 74.259,
    preview: "Cancer care & general medicine",
    privacy: "public",
    timestamp: "Live",
  },
  {
    id: 18,
    name: "Fairy Meadows Tour",
    layer: "travel",
    lat: 35.375,
    lng: 74.585,
    preview: "Group tour July 12–18 · PKR 45K",
    privacy: "public",
    timestamp: "Posted 1 day ago",
  },
  {
    id: 19,
    name: "Lahore Airport",
    layer: "travel",
    lat: 31.522,
    lng: 74.404,
    preview: "Maldives Honeymoon Package departs here",
    privacy: "public",
    timestamp: "Upcoming",
  },
  {
    id: 20,
    name: "Imran Qureshi",
    layer: "blog",
    lat: 31.488,
    lng: 74.336,
    preview: "'Digital Family Trees in South Asia' — 50 reads",
    privacy: "public",
    timestamp: "8 hrs ago",
  },
  {
    id: 21,
    name: "Eid Bazaar 2026",
    layer: "events",
    lat: 31.557,
    lng: 74.316,
    preview: "Annual community market · Liberty Roundabout",
    privacy: "public",
    timestamp: "Tomorrow",
  },
  {
    id: 22,
    name: "Tech Summit Lahore",
    layer: "events",
    lat: 31.474,
    lng: 74.392,
    preview: "Annual technology conference · Expo Centre",
    privacy: "public",
    timestamp: "March 15",
  },
  {
    id: 23,
    name: "TechPK Solutions – Lahore HQ",
    layer: "jobs",
    lat: 31.527,
    lng: 74.348,
    preview: "6 open roles · Senior Engineer, Frontend Dev",
    privacy: "public",
    timestamp: "Hiring now",
  },
  {
    id: 24,
    name: "MediCare Clinics – Karachi",
    layer: "jobs",
    lat: 24.855,
    lng: 67.01,
    preview: "5 open roles · General Physician, Receptionist",
    privacy: "public",
    timestamp: "Hiring now",
  },
  {
    id: 25,
    name: "Beacon House School – Islamabad",
    layer: "jobs",
    lat: 33.718,
    lng: 73.063,
    preview: "4 open roles · Teacher, Admin, Library Staff",
    privacy: "public",
    timestamp: "Hiring now",
  },
  {
    id: 26,
    name: "QuickEats HQ – Rawalpindi",
    layer: "jobs",
    lat: 33.597,
    lng: 73.048,
    preview: "12 open roles · Delivery Riders, Ops Manager",
    privacy: "public",
    timestamp: "Urgent hiring",
  },
  {
    id: 27,
    name: "Hamza Raza – Software Engineer",
    layer: "jobs",
    lat: 31.499,
    lng: 74.337,
    preview: "Shortlisted · TechPK Solutions",
    privacy: "friends",
    timestamp: "Applied 2 days ago",
  },
  {
    id: 28,
    name: "Sana Malik – Frontend Dev",
    layer: "jobs",
    lat: 31.517,
    lng: 74.318,
    preview: "Interview Scheduled · TechPK Solutions",
    privacy: "friends",
    timestamp: "Interview Mar 5",
  },
  // Matrimony pins
  {
    id: 101,
    name: "Aisha F.",
    layer: "matrimony",
    lat: 31.558,
    lng: 74.284,
    preview: "Lahore · Doctor · 26 yrs",
    privacy: "public",
    timestamp: "Today",
    shareLevel: "basic",
    isNew: true,
    compatScore: 88,
    ageRange: "24-28",
  },
  {
    id: 102,
    name: "Zara K.",
    layer: "matrimony",
    lat: 24.891,
    lng: 67.036,
    preview: "Karachi · Software Engineer · 25 yrs",
    privacy: "friends",
    timestamp: "Today",
    shareLevel: "full",
    isNew: true,
    compatScore: 92,
    ageRange: "23-27",
  },
  {
    id: 103,
    name: "Hina N.",
    layer: "matrimony",
    lat: 33.733,
    lng: 73.079,
    preview: "Islamabad · Teacher · 28 yrs",
    privacy: "family",
    timestamp: "2 hrs ago",
    shareLevel: "nickname",
    isNew: false,
    compatScore: 75,
    ageRange: "26-30",
  },
  {
    id: 104,
    name: "Maryam A.",
    layer: "matrimony",
    lat: 31.482,
    lng: 74.323,
    preview: "Lahore · Architect · 27 yrs",
    privacy: "public",
    timestamp: "Today",
    shareLevel: "full",
    isNew: true,
    compatScore: 82,
    ageRange: "25-30",
  },
  {
    id: 105,
    name: "Saira B.",
    layer: "matrimony",
    lat: 33.612,
    lng: 73.062,
    preview: "Rawalpindi · Dentist · 24 yrs",
    privacy: "friends",
    timestamp: "Yesterday",
    shareLevel: "basic",
    isNew: false,
    compatScore: 71,
    ageRange: "22-26",
  },
  // Dating pins
  {
    id: 201,
    name: "Zara K.",
    layer: "dating",
    lat: 31.542,
    lng: 74.296,
    preview: "Lahore · Creative · Adventurous",
    privacy: "public",
    timestamp: "Today",
    shareLevel: "basic",
    isNew: true,
    compatScore: 87,
    relationshipGoal: "Serious Relationship",
    ageRange: "22-28",
  },
  {
    id: 202,
    name: "Ali M.",
    layer: "dating",
    lat: 24.867,
    lng: 67.008,
    preview: "Karachi · Tech enthusiast · Social",
    privacy: "public",
    timestamp: "Today",
    shareLevel: "full",
    isNew: true,
    compatScore: 91,
    relationshipGoal: "Marriage",
    ageRange: "25-30",
  },
  {
    id: 203,
    name: "Iqra N.",
    layer: "dating",
    lat: 33.741,
    lng: 73.095,
    preview: "Islamabad · Artist · Homebody",
    privacy: "friends",
    timestamp: "Today",
    shareLevel: "nickname",
    isNew: true,
    compatScore: 78,
    relationshipGoal: "Friendship First",
    ageRange: "20-25",
  },
  {
    id: 204,
    name: "Kamran S.",
    layer: "dating",
    lat: 31.448,
    lng: 74.268,
    preview: "Lahore · Foodie · Night Owl",
    privacy: "public",
    timestamp: "2 hrs ago",
    shareLevel: "full",
    isNew: false,
    compatScore: 72,
    relationshipGoal: "Casual Dating",
    ageRange: "24-29",
  },
];

const PRIVACY_LEVELS = [
  { value: "all", label: "All My Connections" },
  { value: "family", label: "Family Only" },
  { value: "community", label: "Community Only" },
  { value: "friends", label: "Friends Only" },
  { value: "public", label: "Public" },
];

const HOROSCOPE_SIGNS = [
  "Any",
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

const DATING_HABITS = [
  "Morning Person",
  "Night Owl",
  "Non-Drinker",
  "Social Drinker",
  "Vegetarian",
  "Non-Vegetarian",
  "Exercise Daily",
  "Bookworm",
  "Traveler",
  "Foodie",
  "Gamer",
  "Fitness Enthusiast",
];

const SHARE_LEVEL_LABELS: Record<string, string> = {
  hidden: "Hidden",
  nickname: "Nickname Only",
  basic: "Basic Profile",
  full: "Full Profile",
};

interface MatrimonyFilters {
  caste: string;
  religion: string;
  ageRange: [number, number];
  profession: string;
  livingStandard: string;
  horoscope: string;
  heightRange: string;
}

interface DatingFilters {
  habits: string[];
  lifestyle: string;
  relationshipGoal: string;
  ageRange: [number, number];
  personalityType: string;
  eatingHabits: string;
  drinkingHabits: string;
}

const DEFAULT_MATRIMONY_FILTERS: MatrimonyFilters = {
  caste: "",
  religion: "any",
  ageRange: [18, 50],
  profession: "",
  livingStandard: "any",
  horoscope: "Any",
  heightRange: "any",
};

const DEFAULT_DATING_FILTERS: DatingFilters = {
  habits: [],
  lifestyle: "any",
  relationshipGoal: "any",
  ageRange: [18, 50],
  personalityType: "any",
  eatingHabits: "any",
  drinkingHabits: "any",
};

// ── Map view resetter ─────────────────────────────────────────────────────────

function MapInvalidator() {
  const map = useMap();
  useEffect(() => {
    const timer = setTimeout(() => {
      (map as unknown as { invalidateSize: () => void }).invalidateSize();
    }, 100);
    return () => clearTimeout(timer);
  }, [map]);
  return null;
}

// ── Main component ────────────────────────────────────────────────────────────

export default function GeoMapPage() {
  const [activeLayers, setActiveLayers] = useState<Set<string>>(
    new Set(LAYERS.map((l) => l.id)),
  );
  const [privacyFilter, setPrivacyFilter] = useState("all");
  const [layersPanelOpen, setLayersPanelOpen] = useState(true);
  const [dailyMatchesOpen, setDailyMatchesOpen] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [locationPromptDismissed, setLocationPromptDismissed] = useState(false);
  const [locationDialogOpen, setLocationDialogOpen] = useState(false);
  const [locationPrecision, setLocationPrecision] = useState("city");
  const [matrimonyShareLevel, setMatrimonyShareLevel] = useState("nickname");
  const [datingShareLevel, setDatingShareLevel] = useState("nickname");
  const [shareSettingsOpen, setShareSettingsOpen] = useState<
    "matrimony" | "dating" | null
  >(null);
  const [matrimonyFilters, setMatrimonyFilters] = useState<MatrimonyFilters>(
    DEFAULT_MATRIMONY_FILTERS,
  );
  const [datingFilters, setDatingFilters] = useState<DatingFilters>(
    DEFAULT_DATING_FILTERS,
  );

  const readLifestyle = (): { matrimony: boolean; dating: boolean } => {
    try {
      const key = Object.keys(localStorage).find((k) =>
        k.startsWith("familysocial_lifestyle_"),
      );
      if (!key) return { matrimony: false, dating: false };
      const parsed = JSON.parse(localStorage.getItem(key) ?? "{}");
      return {
        matrimony: parsed.matrimony ?? false,
        dating: parsed.dating ?? false,
      };
    } catch {
      return { matrimony: false, dating: false };
    }
  };

  const [userMatrimonyEnabled, setUserMatrimonyEnabled] = useState(
    () => readLifestyle().matrimony,
  );
  const [userDatingEnabled, setUserDatingEnabled] = useState(
    () => readLifestyle().dating,
  );

  useEffect(() => {
    const handleStorage = () => {
      try {
        const key = Object.keys(localStorage).find((k) =>
          k.startsWith("familysocial_lifestyle_"),
        );
        if (!key) {
          setUserMatrimonyEnabled(false);
          setUserDatingEnabled(false);
          return;
        }
        const parsed = JSON.parse(localStorage.getItem(key) ?? "{}");
        setUserMatrimonyEnabled(parsed.matrimony ?? false);
        setUserDatingEnabled(parsed.dating ?? false);
      } catch {
        // ignore
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const toggleLayer = (id: string) => {
    setActiveLayers((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleDatingHabit = (habit: string) => {
    setDatingFilters((prev) => ({
      ...prev,
      habits: prev.habits.includes(habit)
        ? prev.habits.filter((h) => h !== habit)
        : [...prev.habits, habit],
    }));
  };

  const showLocationPrompt =
    !locationPromptDismissed &&
    (activeLayers.has("matrimony") || activeLayers.has("dating"));

  const newMatrimonyPins = MAP_PINS.filter(
    (p) => p.layer === "matrimony" && p.isNew && p.shareLevel !== "hidden",
  );
  const newDatingPins = MAP_PINS.filter(
    (p) => p.layer === "dating" && p.isNew && p.shareLevel !== "hidden",
  );
  const totalNewMatches = newMatrimonyPins.length + newDatingPins.length;

  // Self-pins: Lahore center
  const selfMatrimonyPin: GeoPin | null = userMatrimonyEnabled
    ? {
        id: 9001,
        name: "You",
        layer: "matrimony",
        lat: 31.513,
        lng: 74.341,
        preview: "Your matrimony profile is active",
        privacy: "private",
        timestamp: "Active now",
        shareLevel: matrimonyShareLevel as GeoPin["shareLevel"],
        isNew: false,
        compatScore: undefined,
        ageRange: undefined,
      }
    : null;

  const selfDatingPin: GeoPin | null = userDatingEnabled
    ? {
        id: 9002,
        name: "You",
        layer: "dating",
        lat: 31.513,
        lng: 74.344,
        preview: "Your dating profile is active",
        privacy: "private",
        timestamp: "Active now",
        shareLevel: datingShareLevel as GeoPin["shareLevel"],
        isNew: false,
        compatScore: undefined,
        relationshipGoal: undefined,
        ageRange: undefined,
      }
    : null;

  const ALL_PINS: GeoPin[] = [
    ...MAP_PINS,
    ...(selfMatrimonyPin ? [selfMatrimonyPin] : []),
    ...(selfDatingPin ? [selfDatingPin] : []),
  ];

  const isSelfPin = (pin: GeoPin) => pin.id >= 9000;

  const filteredPins = ALL_PINS.filter((pin) => {
    if (isSelfPin(pin)) return activeLayers.has(pin.layer);
    if (!activeLayers.has(pin.layer)) return false;
    if (pin.shareLevel === "hidden") return false;
    if (privacyFilter !== "all" && pin.privacy !== privacyFilter) return false;
    if (pin.layer === "matrimony" && pin.ageRange) {
      const [minAge] = pin.ageRange.split("-").map(Number);
      if (
        minAge < matrimonyFilters.ageRange[0] ||
        minAge > matrimonyFilters.ageRange[1]
      )
        return false;
    }
    if (pin.layer === "dating") {
      if (
        datingFilters.relationshipGoal !== "any" &&
        pin.relationshipGoal !== datingFilters.relationshipGoal
      )
        return false;
      if (pin.ageRange) {
        const [minAge] = pin.ageRange.split("-").map(Number);
        if (
          minAge < datingFilters.ageRange[0] ||
          minAge > datingFilters.ageRange[1]
        )
          return false;
      }
    }
    return true;
  });

  const getShareBadgeColor = (shareLevel: string) => {
    switch (shareLevel) {
      case "full":
        return { bg: "#22c55e20", color: "#22c55e" };
      case "basic":
        return { bg: "#3b82f620", color: "#60a5fa" };
      case "nickname":
        return { bg: "#f59e0b20", color: "#fbbf24" };
      default:
        return { bg: "#6b728020", color: "#9ca3af" };
    }
  };

  return (
    <div
      className="relative w-full h-full flex flex-col"
      style={{ minHeight: "100%" }}
    >
      {/* Page header */}
      <div className="px-6 py-4 border-b border-border bg-card shrink-0 flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-xl font-display font-bold text-foreground">
            Connections Map
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Private — your connections, activities & module entries on a live
            map
          </p>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-xs font-label text-muted-foreground hidden sm:inline">
              Showing:
            </span>
            <select
              value={privacyFilter}
              onChange={(e) => setPrivacyFilter(e.target.value)}
              className="h-8 text-xs font-label rounded-md border border-border bg-card px-2 pr-6 text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              data-ocid="geomap.privacy_filter.select"
            >
              {PRIVACY_LEVELS.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            data-ocid="geomap.daily_matches.button"
            onClick={() => setDailyMatchesOpen(true)}
            className="relative h-8 px-3 text-xs font-label rounded-md border transition-colors flex items-center gap-1.5"
            style={{
              background: "oklch(0.62 0.22 350 / 0.12)",
              color: "oklch(0.72 0.22 350)",
              borderColor: "oklch(0.62 0.22 350 / 0.3)",
            }}
          >
            <Sparkles size={12} />
            <span className="hidden sm:inline">Daily Matches</span>
            {totalNewMatches > 0 && (
              <span
                className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center text-white"
                style={{ background: "#f43f5e" }}
              >
                {totalNewMatches}
              </span>
            )}
          </button>

          <Button
            variant="outline"
            size="sm"
            className="h-8 gap-1.5 text-xs font-label"
            onClick={() => setFiltersOpen(true)}
            data-ocid="geomap.filters.button"
          >
            <Filter size={13} />
            <span className="hidden sm:inline">Filters</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="h-8 gap-1.5 text-xs font-label"
            onClick={() => setLayersPanelOpen((v) => !v)}
            data-ocid="geomap.layers.toggle"
          >
            <Layers size={13} />
            <span className="hidden sm:inline">Layers</span>
          </Button>
        </div>
      </div>

      {/* Location accuracy prompt */}
      {showLocationPrompt && (
        <div
          className="shrink-0 px-6 py-2.5 flex items-center gap-3 flex-wrap"
          style={{
            background: "oklch(0.75 0.18 85 / 0.15)",
            borderBottom: "1px solid oklch(0.75 0.18 85 / 0.3)",
          }}
        >
          <span
            className="text-xs font-label"
            style={{ color: "oklch(0.78 0.18 85)" }}
          >
            📍 Improve your matches — add your area/neighborhood for better
            results
          </span>
          <button
            type="button"
            className="text-xs font-label font-semibold px-3 py-1 rounded-md transition-colors"
            style={{
              background: "oklch(0.75 0.18 85 / 0.25)",
              color: "oklch(0.78 0.18 85)",
              border: "1px solid oklch(0.75 0.18 85 / 0.4)",
            }}
            onClick={() => setLocationDialogOpen(true)}
            data-ocid="geomap.set_location.button"
          >
            Set Location
          </button>
          <button
            type="button"
            className="ml-auto text-xs text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setLocationPromptDismissed(true)}
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Map area */}
      <div
        className="relative flex-1 overflow-hidden"
        style={{ minHeight: "500px" }}
      >
        {/* Real Leaflet Map */}
        <MapContainer
          center={[30.5, 73.0]}
          zoom={6}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            inset: 0,
          }}
          zoomControl={true}
          scrollWheelZoom={true}
          data-ocid="geomap.map_container"
        >
          <MapInvalidator />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />

          {filteredPins.map((pin) => {
            const hex = LAYER_HEX[pin.layer] ?? "#7c3aed";
            const layer = LAYERS.find((l) => l.id === pin.layer);
            const isMatrimonyOrDating =
              pin.layer === "matrimony" || pin.layer === "dating";
            const isNewPin = pin.isNew && isMatrimonyOrDating;
            const isSelf = isSelfPin(pin);
            const shareBadge = pin.shareLevel
              ? getShareBadgeColor(pin.shareLevel)
              : null;

            return (
              <CircleMarker
                key={pin.id}
                center={[pin.lat, pin.lng]}
                radius={isSelf ? 12 : isNewPin ? 10 : 8}
                pathOptions={{
                  color: "#fff",
                  weight: isSelf ? 3 : 2,
                  fillColor: hex,
                  fillOpacity: 0.9,
                  opacity: 1,
                }}
                data-ocid={`geomap.map_marker.${pin.id}`}
              >
                <Popup
                  className="leaflet-popup-custom"
                  maxWidth={240}
                  minWidth={200}
                >
                  <div
                    style={{
                      background: "#1a1a2e",
                      border: `1px solid ${isSelf ? hex : `${hex}55`}`,
                      borderRadius: "12px",
                      padding: "12px",
                      minWidth: "190px",
                    }}
                  >
                    {isSelf && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          marginBottom: "8px",
                          paddingBottom: "8px",
                          borderBottom: `1px solid ${hex}30`,
                        }}
                      >
                        <span
                          style={{
                            color: hex,
                            fontSize: "11px",
                            fontWeight: "bold",
                          }}
                        >
                          ★ You
                        </span>
                        <span
                          style={{
                            color: "rgba(255,255,255,0.5)",
                            fontSize: "10px",
                          }}
                        >
                          — This is your pin
                        </span>
                      </div>
                    )}

                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        marginBottom: "8px",
                      }}
                    >
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "6px",
                          background: `${hex}25`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      >
                        <span style={{ color: hex, fontSize: "10px" }}>●</span>
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p
                          style={{
                            color: isSelf ? hex : "#fff",
                            fontSize: "12px",
                            fontWeight: "600",
                            margin: 0,
                            lineHeight: 1.3,
                          }}
                        >
                          {isSelf ? "★ You" : pin.name}
                        </p>
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "4px",
                            marginTop: "4px",
                          }}
                        >
                          <span
                            style={{
                              background: `${hex}25`,
                              color: hex,
                              fontSize: "9px",
                              fontWeight: "bold",
                              padding: "1px 5px",
                              borderRadius: "4px",
                            }}
                          >
                            {layer?.label ?? pin.layer}
                          </span>
                          {isNewPin && (
                            <span
                              style={{
                                background: "#f43f5e20",
                                color: "#f43f5e",
                                fontSize: "9px",
                                fontWeight: "bold",
                                padding: "1px 5px",
                                borderRadius: "4px",
                              }}
                            >
                              New Today
                            </span>
                          )}
                          <span
                            style={{
                              background:
                                pin.privacy === "public"
                                  ? "#22c55e20"
                                  : pin.privacy === "family"
                                    ? "#7c3aed20"
                                    : pin.privacy === "friends"
                                      ? "#3b82f620"
                                      : "#06b6d420",
                              color:
                                pin.privacy === "public"
                                  ? "#22c55e"
                                  : pin.privacy === "family"
                                    ? "#a78bfa"
                                    : pin.privacy === "friends"
                                      ? "#60a5fa"
                                      : "#22d3ee",
                              fontSize: "9px",
                              padding: "1px 5px",
                              borderRadius: "4px",
                            }}
                          >
                            {pin.privacy}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p
                      style={{
                        color: "rgba(255,255,255,0.6)",
                        fontSize: "10px",
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      {pin.preview}
                    </p>

                    {isMatrimonyOrDating && !isSelf && (
                      <div style={{ marginTop: "8px" }}>
                        {pin.compatScore !== undefined && (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              marginBottom: "4px",
                            }}
                          >
                            <div
                              style={{
                                flex: 1,
                                height: "4px",
                                borderRadius: "2px",
                                background: "rgba(255,255,255,0.1)",
                              }}
                            >
                              <div
                                style={{
                                  height: "4px",
                                  borderRadius: "2px",
                                  width: `${pin.compatScore}%`,
                                  background: hex,
                                }}
                              />
                            </div>
                            <span
                              style={{
                                color: hex,
                                fontSize: "9px",
                                fontWeight: "bold",
                              }}
                            >
                              {pin.compatScore}% Match
                            </span>
                          </div>
                        )}
                        {pin.ageRange && (
                          <p
                            style={{
                              color: "rgba(255,255,255,0.4)",
                              fontSize: "9px",
                              margin: "2px 0",
                            }}
                          >
                            Age range: {pin.ageRange}
                          </p>
                        )}
                        {pin.relationshipGoal && (
                          <p
                            style={{
                              color: "rgba(255,255,255,0.4)",
                              fontSize: "9px",
                              margin: "2px 0",
                            }}
                          >
                            Goal: {pin.relationshipGoal}
                          </p>
                        )}
                        {shareBadge && pin.shareLevel && (
                          <span
                            style={{
                              display: "inline-block",
                              background: shareBadge.bg,
                              color: shareBadge.color,
                              fontSize: "9px",
                              padding: "1px 5px",
                              borderRadius: "4px",
                              marginTop: "4px",
                            }}
                          >
                            {SHARE_LEVEL_LABELS[pin.shareLevel]}
                          </span>
                        )}
                      </div>
                    )}

                    <p
                      style={{
                        color: "rgba(255,255,255,0.35)",
                        fontSize: "9px",
                        marginTop: "6px",
                        marginBottom: 0,
                      }}
                    >
                      {pin.timestamp}
                    </p>
                  </div>
                </Popup>
              </CircleMarker>
            );
          })}
        </MapContainer>

        {/* Layers panel */}
        {layersPanelOpen && (
          <div
            className="absolute top-3 left-3 z-[1000] rounded-xl border shadow-elevated overflow-hidden"
            style={{
              background: "oklch(var(--card))",
              borderColor: "oklch(var(--border))",
              width: "210px",
            }}
          >
            <div
              className="flex items-center justify-between px-3 py-2.5 border-b"
              style={{
                background: "oklch(var(--sidebar))",
                borderColor: "oklch(var(--sidebar-border))",
              }}
            >
              <div className="flex items-center gap-2">
                <Layers
                  size={13}
                  style={{ color: "oklch(var(--sidebar-foreground))" }}
                />
                <span className="text-xs font-label font-bold text-sidebar-foreground">
                  Map Layers
                </span>
              </div>
              <button
                type="button"
                onClick={() => setLayersPanelOpen(false)}
                className="text-sidebar-foreground/40 hover:text-sidebar-foreground transition-colors"
                aria-label="Close layers panel"
              >
                <X size={13} />
              </button>
            </div>

            <div className="py-1.5 px-2 space-y-0.5">
              {LAYERS.map((layer) => {
                const LayerIcon = layer.icon;
                const isActive = activeLayers.has(layer.id);
                const hex = LAYER_HEX[layer.id];
                const isMatchLayer =
                  layer.id === "matrimony" || layer.id === "dating";
                return (
                  <div key={layer.id}>
                    <button
                      type="button"
                      onClick={() => toggleLayer(layer.id)}
                      className="w-full flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-xs font-label transition-colors hover:bg-secondary/50"
                      style={{ opacity: isActive ? 1 : 0.45 }}
                      data-ocid={`geomap.layer.${layer.id}.toggle`}
                    >
                      <div
                        className="w-3 h-3 rounded-full shrink-0"
                        style={{ background: hex }}
                      />
                      <LayerIcon
                        size={11}
                        className="text-foreground/70 shrink-0"
                      />
                      <span className="text-foreground">{layer.label}</span>
                      <div
                        className="ml-auto w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-all"
                        style={{
                          borderColor: isActive ? hex : "oklch(var(--border))",
                          background: isActive ? `${hex}20` : "transparent",
                        }}
                      >
                        {isActive && (
                          <div
                            className="w-2 h-2 rounded-sm"
                            style={{ background: hex }}
                          />
                        )}
                      </div>
                    </button>
                    {isMatchLayer && isActive && (
                      <button
                        type="button"
                        className="w-full text-left px-2 pb-1 text-[9px] font-label transition-colors hover:opacity-80"
                        style={{ color: hex, paddingLeft: "32px" }}
                        onClick={() =>
                          setShareSettingsOpen(
                            layer.id === "matrimony" ? "matrimony" : "dating",
                          )
                        }
                      >
                        Visibility:{" "}
                        {
                          SHARE_LEVEL_LABELS[
                            layer.id === "matrimony"
                              ? matrimonyShareLevel
                              : datingShareLevel
                          ]
                        }{" "}
                        (tap to change)
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="px-3 py-2 border-t border-border text-[10px] text-muted-foreground font-label">
              {filteredPins.length} pins visible
            </div>
          </div>
        )}

        {!layersPanelOpen && (
          <button
            type="button"
            onClick={() => setLayersPanelOpen(true)}
            className="absolute top-3 left-3 z-[1000] w-9 h-9 rounded-xl bg-card border border-border shadow-elevated flex items-center justify-center hover:bg-secondary transition-colors"
            aria-label="Open layers panel"
            data-ocid="geomap.layers_open.button"
          >
            <Layers size={15} className="text-foreground/70" />
          </button>
        )}
      </div>

      {/* Daily Matches Sheet */}
      <Sheet open={dailyMatchesOpen} onOpenChange={setDailyMatchesOpen}>
        <SheetContent
          side="right"
          className="w-full sm:max-w-md overflow-y-auto"
        >
          <SheetHeader className="mb-5">
            <SheetTitle className="font-display flex items-center gap-2">
              <Sparkles size={18} style={{ color: "#f43f5e" }} />
              Daily Matches
            </SheetTitle>
          </SheetHeader>
          <Tabs defaultValue="matrimony">
            <TabsList className="w-full mb-4">
              <TabsTrigger
                value="matrimony"
                className="flex-1 font-label text-xs"
              >
                Matrimony ({newMatrimonyPins.length})
              </TabsTrigger>
              <TabsTrigger value="dating" className="flex-1 font-label text-xs">
                Dating ({newDatingPins.length})
              </TabsTrigger>
            </TabsList>
            <TabsContent value="matrimony" className="space-y-3">
              {newMatrimonyPins
                .sort((a, b) => (b.compatScore ?? 0) - (a.compatScore ?? 0))
                .map((pin) => (
                  <div
                    key={pin.id}
                    className="bg-card border border-border rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-label font-semibold text-sm text-foreground">
                        {pin.name}
                      </p>
                      {pin.compatScore !== undefined && (
                        <span
                          className="text-xs font-bold px-2 py-0.5 rounded-full"
                          style={{ background: "#f43f5e20", color: "#f43f5e" }}
                        >
                          {pin.compatScore}% Match
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {pin.preview}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="secondary" className="text-[10px]">
                        New Today
                      </Badge>
                      <span className="text-[10px] text-muted-foreground">
                        {pin.ageRange && `Age: ${pin.ageRange}`}
                      </span>
                    </div>
                  </div>
                ))}
            </TabsContent>
            <TabsContent value="dating" className="space-y-3">
              {newDatingPins
                .sort((a, b) => (b.compatScore ?? 0) - (a.compatScore ?? 0))
                .map((pin) => (
                  <div
                    key={pin.id}
                    className="bg-card border border-border rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-label font-semibold text-sm text-foreground">
                        {pin.name}
                      </p>
                      {pin.compatScore !== undefined && (
                        <span
                          className="text-xs font-bold px-2 py-0.5 rounded-full"
                          style={{ background: "#8b5cf620", color: "#8b5cf6" }}
                        >
                          {pin.compatScore}% Match
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {pin.preview}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="secondary" className="text-[10px]">
                        New Today
                      </Badge>
                      {pin.relationshipGoal && (
                        <span className="text-[10px] text-muted-foreground">
                          Goal: {pin.relationshipGoal}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
            </TabsContent>
          </Tabs>
        </SheetContent>
      </Sheet>

      {/* Filters Sheet */}
      <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
        <SheetContent
          side="left"
          className="w-full sm:max-w-sm overflow-y-auto"
        >
          <SheetHeader className="mb-5">
            <SheetTitle className="font-display flex items-center gap-2">
              <Filter size={16} />
              Map Filters
            </SheetTitle>
          </SheetHeader>
          <Tabs defaultValue="matrimony">
            <TabsList className="w-full mb-5">
              <TabsTrigger
                value="matrimony"
                className="flex-1 font-label text-xs"
              >
                Matrimony
              </TabsTrigger>
              <TabsTrigger value="dating" className="flex-1 font-label text-xs">
                Dating
              </TabsTrigger>
            </TabsList>
            <TabsContent value="matrimony" className="space-y-5">
              <div className="space-y-2">
                <Label className="text-xs font-label">Age Range</Label>
                <Slider
                  value={matrimonyFilters.ageRange}
                  onValueChange={(v) =>
                    setMatrimonyFilters((p) => ({
                      ...p,
                      ageRange: v as [number, number],
                    }))
                  }
                  min={18}
                  max={60}
                  step={1}
                />
                <p className="text-xs text-muted-foreground">
                  {matrimonyFilters.ageRange[0]} –{" "}
                  {matrimonyFilters.ageRange[1]} years
                </p>
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-label">Horoscope</Label>
                <Select
                  value={matrimonyFilters.horoscope}
                  onValueChange={(v) =>
                    setMatrimonyFilters((p) => ({ ...p, horoscope: v }))
                  }
                >
                  <SelectTrigger className="h-9 text-xs font-label">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {HOROSCOPE_SIGNS.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-label">Living Standard</Label>
                <Select
                  value={matrimonyFilters.livingStandard}
                  onValueChange={(v) =>
                    setMatrimonyFilters((p) => ({ ...p, livingStandard: v }))
                  }
                >
                  <SelectTrigger className="h-9 text-xs font-label">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="middle">Middle Class</SelectItem>
                    <SelectItem value="upper-middle">Upper Middle</SelectItem>
                    <SelectItem value="upper">Upper Class</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full text-xs font-label"
                onClick={() => setMatrimonyFilters(DEFAULT_MATRIMONY_FILTERS)}
              >
                Reset Matrimony Filters
              </Button>
            </TabsContent>
            <TabsContent value="dating" className="space-y-5">
              <div className="space-y-2">
                <Label className="text-xs font-label">Age Range</Label>
                <Slider
                  value={datingFilters.ageRange}
                  onValueChange={(v) =>
                    setDatingFilters((p) => ({
                      ...p,
                      ageRange: v as [number, number],
                    }))
                  }
                  min={18}
                  max={60}
                  step={1}
                />
                <p className="text-xs text-muted-foreground">
                  {datingFilters.ageRange[0]} – {datingFilters.ageRange[1]}{" "}
                  years
                </p>
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-label">Relationship Goal</Label>
                <Select
                  value={datingFilters.relationshipGoal}
                  onValueChange={(v) =>
                    setDatingFilters((p) => ({ ...p, relationshipGoal: v }))
                  }
                >
                  <SelectTrigger className="h-9 text-xs font-label">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="Serious Relationship">
                      Serious Relationship
                    </SelectItem>
                    <SelectItem value="Marriage">Marriage</SelectItem>
                    <SelectItem value="Friendship First">
                      Friendship First
                    </SelectItem>
                    <SelectItem value="Casual Dating">Casual Dating</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-label">Habits</Label>
                <div className="flex flex-wrap gap-2">
                  {DATING_HABITS.map((h) => (
                    <button
                      key={h}
                      type="button"
                      onClick={() => toggleDatingHabit(h)}
                      className="text-[10px] font-label px-2 py-1 rounded-full transition-all border"
                      style={
                        datingFilters.habits.includes(h)
                          ? {
                              background: "oklch(0.55 0.22 280 / 0.2)",
                              borderColor: "oklch(0.55 0.22 280)",
                              color: "oklch(0.55 0.22 280)",
                            }
                          : {
                              background: "transparent",
                              borderColor: "oklch(var(--border))",
                              color: "oklch(var(--muted-foreground))",
                            }
                      }
                    >
                      {h}
                    </button>
                  ))}
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full text-xs font-label"
                onClick={() => setDatingFilters(DEFAULT_DATING_FILTERS)}
              >
                Reset Dating Filters
              </Button>
            </TabsContent>
          </Tabs>
        </SheetContent>
      </Sheet>

      {/* Location precision dialog */}
      <Dialog open={locationDialogOpen} onOpenChange={setLocationDialogOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle className="font-display">
              Set Your Location
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            <p className="text-sm text-muted-foreground">
              Choose how precisely to share your location for better matches.
              Your exact address is never shared.
            </p>
            <div className="space-y-2">
              <Label className="text-xs font-label">Location Precision</Label>
              <Select
                value={locationPrecision}
                onValueChange={setLocationPrecision}
              >
                <SelectTrigger className="h-9 text-xs font-label">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="city">City only (e.g. Lahore)</SelectItem>
                  <SelectItem value="district">
                    District (e.g. DHA, Gulberg)
                  </SelectItem>
                  <SelectItem value="neighborhood">
                    Neighborhood (e.g. DHA Phase 5)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              className="w-full font-label"
              onClick={() => {
                setLocationDialogOpen(false);
                setLocationPromptDismissed(true);
              }}
            >
              Save Location Precision
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Share settings dialog */}
      <Dialog
        open={shareSettingsOpen !== null}
        onOpenChange={() => setShareSettingsOpen(null)}
      >
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle className="font-display">
              {shareSettingsOpen === "matrimony" ? "Matrimony" : "Dating"}{" "}
              Visibility
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            <p className="text-sm text-muted-foreground">
              Control how much of your profile other users can see when they
              click your pin on the map.
            </p>
            <div className="space-y-2">
              <Label className="text-xs font-label">Share Level</Label>
              <Select
                value={
                  shareSettingsOpen === "matrimony"
                    ? matrimonyShareLevel
                    : datingShareLevel
                }
                onValueChange={(v) => {
                  if (shareSettingsOpen === "matrimony")
                    setMatrimonyShareLevel(v);
                  else setDatingShareLevel(v);
                }}
              >
                <SelectTrigger className="h-9 text-xs font-label">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hidden">
                    Hidden — not visible on map
                  </SelectItem>
                  <SelectItem value="nickname">Nickname Only</SelectItem>
                  <SelectItem value="basic">
                    Basic Profile (age, city, profession)
                  </SelectItem>
                  <SelectItem value="full">Full Profile</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              className="w-full font-label"
              onClick={() => setShareSettingsOpen(null)}
            >
              Save Settings
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Custom popup styles */}
      <style>{`
        .leaflet-popup-content-wrapper {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          padding: 0 !important;
        }
        .leaflet-popup-content {
          margin: 0 !important;
        }
        .leaflet-popup-tip-container {
          display: none !important;
        }
        .leaflet-container {
          font-family: inherit;
        }
      `}</style>
    </div>
  );
}
