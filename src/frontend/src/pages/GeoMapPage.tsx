import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

// ── Mock pin data ────────────────────────────────────────────────────────────

interface GeoPin {
  id: number;
  name: string;
  layer: string;
  // Normalized 0-100 coordinates for the CSS map (x from left, y from top)
  x: number;
  y: number;
  preview: string;
  privacy: "private" | "family" | "community" | "friends" | "public";
  timestamp: string;
  // Matrimony / Dating extras
  shareLevel?: "hidden" | "nickname" | "basic" | "full";
  isNew?: boolean;
  compatScore?: number;
  relationshipGoal?: string;
  ageRange?: string;
}

// Coordinates normalised to a 0-100 grid representing Lahore area (roughly)
const MAP_PINS: GeoPin[] = [
  {
    id: 1,
    name: "Khalid Hassan",
    layer: "family",
    x: 58,
    y: 38,
    preview: "Father · Hassan Textiles owner",
    privacy: "family",
    timestamp: "2 hrs ago",
  },
  {
    id: 2,
    name: "Fatima Hassan",
    layer: "family",
    x: 53,
    y: 42,
    preview: "Mother · DHA Phase 5",
    privacy: "family",
    timestamp: "4 hrs ago",
  },
  {
    id: 3,
    name: "Omar Hassan",
    layer: "family",
    x: 64,
    y: 31,
    preview: "Brother · Johar Town, Lahore",
    privacy: "family",
    timestamp: "1 day ago",
  },
  {
    id: 4,
    name: "Hamza Raza",
    layer: "friends",
    x: 38,
    y: 52,
    preview: "5 mutual connections · Gulberg",
    privacy: "friends",
    timestamp: "30 min ago",
  },
  {
    id: 5,
    name: "Sana Malik",
    layer: "friends",
    x: 74,
    y: 23,
    preview: "University friend · Model Town",
    privacy: "friends",
    timestamp: "3 hrs ago",
  },
  {
    id: 6,
    name: "Bilal Chaudhry",
    layer: "friends",
    x: 68,
    y: 65,
    preview: "Colleague · Bahria Town",
    privacy: "public",
    timestamp: "Yesterday",
  },
  {
    id: 7,
    name: "DHA Phase 5 Society",
    layer: "community",
    x: 29,
    y: 78,
    preview: "Gate entry system active · 1,240 residents",
    privacy: "community",
    timestamp: "Live",
  },
  {
    id: 8,
    name: "Green Valley Society",
    layer: "community",
    x: 41,
    y: 70,
    preview: "Community announcement: Maintenance 8AM",
    privacy: "community",
    timestamp: "2 hrs ago",
  },
  {
    id: 9,
    name: "Asif Javed",
    layer: "community",
    x: 48,
    y: 57,
    preview: "Active community member · Allama Iqbal Town",
    privacy: "community",
    timestamp: "5 hrs ago",
  },
  {
    id: 10,
    name: "TechCorp Pakistan",
    layer: "jobs",
    x: 46,
    y: 54,
    preview: "Senior Software Engineer · PKR 3.5L/mo",
    privacy: "public",
    timestamp: "4 hrs ago",
  },
  {
    id: 11,
    name: "StartupPK Office",
    layer: "jobs",
    x: 61,
    y: 43,
    preview: "Product Manager position open",
    privacy: "public",
    timestamp: "1 day ago",
  },
  {
    id: 12,
    name: "Graphic Studio Karachi",
    layer: "jobs",
    x: 82,
    y: 88,
    preview: "Part-time designer role · Karachi",
    privacy: "public",
    timestamp: "1 day ago",
  },
  {
    id: 13,
    name: "DHA Phase 6 Apartment",
    layer: "real-estate",
    x: 25,
    y: 83,
    preview: "3BR · 1800 sqft · PKR 2.8 Cr",
    privacy: "public",
    timestamp: "3 hrs ago",
  },
  {
    id: 14,
    name: "Gulberg III House",
    layer: "real-estate",
    x: 43,
    y: 56,
    preview: "5 Marla · Renovated · PKR 1.95 Cr",
    privacy: "public",
    timestamp: "2 days ago",
  },
  {
    id: 15,
    name: "Model Town Property",
    layer: "real-estate",
    x: 35,
    y: 50,
    preview: "10 Marla corner plot · PKR 4.2 Cr",
    privacy: "public",
    timestamp: "3 days ago",
  },
  {
    id: 16,
    name: "Dr. Ayesha Clinic",
    layer: "healthcare",
    x: 52,
    y: 48,
    preview: "General Physician · DHA Phase 4",
    privacy: "public",
    timestamp: "Live",
  },
  {
    id: 17,
    name: "Shaukat Khanum Hospital",
    layer: "healthcare",
    x: 28,
    y: 68,
    preview: "Cancer care & general medicine",
    privacy: "public",
    timestamp: "Live",
  },
  {
    id: 18,
    name: "Fairy Meadows Tour",
    layer: "travel",
    x: 65,
    y: 8,
    preview: "Group tour July 12–18 · PKR 45K",
    privacy: "public",
    timestamp: "Posted 1 day ago",
  },
  {
    id: 19,
    name: "Lahore Airport",
    layer: "travel",
    x: 72,
    y: 46,
    preview: "Maldives Honeymoon Package departs here",
    privacy: "public",
    timestamp: "Upcoming",
  },
  {
    id: 20,
    name: "Imran Qureshi",
    layer: "blog",
    x: 60,
    y: 34,
    preview: "'Digital Family Trees in South Asia' — 50 reads",
    privacy: "public",
    timestamp: "8 hrs ago",
  },
  {
    id: 21,
    name: "Eid Bazaar 2026",
    layer: "events",
    x: 49,
    y: 55,
    preview: "Annual community market · Liberty Roundabout",
    privacy: "public",
    timestamp: "Tomorrow",
  },
  {
    id: 22,
    name: "Tech Summit Lahore",
    layer: "events",
    x: 66,
    y: 27,
    preview: "Annual technology conference · Expo Centre",
    privacy: "public",
    timestamp: "March 15",
  },
  // Recruiter / Company pins (jobs layer, green #22c55e)
  {
    id: 23,
    name: "TechPK Solutions – Lahore HQ",
    layer: "jobs",
    x: 55,
    y: 45,
    preview: "6 open roles · Senior Engineer, Frontend Dev, Full-Stack",
    privacy: "public",
    timestamp: "Hiring now",
  },
  {
    id: 24,
    name: "MediCare Clinics – Karachi",
    layer: "jobs",
    x: 25,
    y: 82,
    preview: "5 open roles · General Physician, Receptionist",
    privacy: "public",
    timestamp: "Hiring now",
  },
  {
    id: 25,
    name: "Beacon House School – Islamabad",
    layer: "jobs",
    x: 32,
    y: 22,
    preview: "4 open roles · Teacher, Admin, Library Staff",
    privacy: "public",
    timestamp: "Hiring now",
  },
  {
    id: 26,
    name: "QuickEats HQ – Rawalpindi",
    layer: "jobs",
    x: 37,
    y: 28,
    preview: "12 open roles · Delivery Riders, Ops Manager",
    privacy: "public",
    timestamp: "Urgent hiring",
  },
  // Applicant / Employee pins (jobs layer, teal #06b6d4)
  {
    id: 27,
    name: "Hamza Raza – Software Engineer",
    layer: "jobs",
    x: 47,
    y: 50,
    preview: "Shortlisted · TechPK Solutions",
    privacy: "friends",
    timestamp: "Applied 2 days ago",
  },
  {
    id: 28,
    name: "Sana Malik – Frontend Dev",
    layer: "jobs",
    x: 60,
    y: 40,
    preview: "Interview Scheduled · TechPK Solutions",
    privacy: "friends",
    timestamp: "Interview Mar 5",
  },
  {
    id: 29,
    name: "Nadia Hussain – Physician",
    layer: "jobs",
    x: 22,
    y: 78,
    preview: "Interview Scheduled · MediCare Clinics",
    privacy: "friends",
    timestamp: "Interview Mar 8",
  },
  {
    id: 30,
    name: "Omar Qureshi – Finance",
    layer: "jobs",
    x: 52,
    y: 58,
    preview: "Shortlisted · Hassan Textiles",
    privacy: "friends",
    timestamp: "Applied 3 days ago",
  },
  {
    id: 31,
    name: "Ayesha Tariq – Designer",
    layer: "jobs",
    x: 72,
    y: 35,
    preview: "Hired · TechPK Solutions – Joining Mar 15",
    privacy: "friends",
    timestamp: "Hired",
  },
  {
    id: 32,
    name: "Zara Siddiqui – Teacher",
    layer: "jobs",
    x: 28,
    y: 19,
    preview: "Applied · Beacon House School",
    privacy: "friends",
    timestamp: "Applied recently",
  },
  // ── Matrimony pins ──────────────────────────────────────────────────────────
  {
    id: 101,
    name: "Aisha F.",
    layer: "matrimony",
    x: 22,
    y: 35,
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
    x: 45,
    y: 20,
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
    x: 70,
    y: 72,
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
    x: 33,
    y: 60,
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
    x: 80,
    y: 30,
    preview: "Rawalpindi · Dentist · 24 yrs",
    privacy: "friends",
    timestamp: "Yesterday",
    shareLevel: "basic",
    isNew: false,
    compatScore: 71,
    ageRange: "22-26",
  },
  {
    id: 106,
    name: "Noor M.",
    layer: "matrimony",
    x: 56,
    y: 15,
    preview: "Karachi · Business Owner · 30 yrs",
    privacy: "public",
    timestamp: "3 hrs ago",
    shareLevel: "basic",
    isNew: false,
    compatScore: 68,
    ageRange: "28-33",
  },
  {
    id: 107,
    name: "Amna R.",
    layer: "matrimony",
    x: 18,
    y: 55,
    preview: "Lahore · Pharmacist · 25 yrs",
    privacy: "family",
    timestamp: "5 hrs ago",
    shareLevel: "nickname",
    isNew: false,
    compatScore: 65,
    ageRange: "23-28",
  },
  {
    id: 108,
    name: "Saba Q.",
    layer: "matrimony",
    x: 88,
    y: 65,
    preview: "Islamabad · Lecturer · 29 yrs",
    privacy: "public",
    timestamp: "1 day ago",
    shareLevel: "full",
    isNew: false,
    compatScore: 79,
    ageRange: "27-32",
  },
  // ── Dating pins ─────────────────────────────────────────────────────────────
  {
    id: 201,
    name: "Zara K.",
    layer: "dating",
    x: 27,
    y: 42,
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
    x: 50,
    y: 30,
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
    x: 75,
    y: 55,
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
    x: 38,
    y: 80,
    preview: "Lahore · Foodie · Night Owl",
    privacy: "public",
    timestamp: "2 hrs ago",
    shareLevel: "full",
    isNew: false,
    compatScore: 72,
    relationshipGoal: "Casual Dating",
    ageRange: "24-29",
  },
  {
    id: 205,
    name: "Sara T.",
    layer: "dating",
    x: 62,
    y: 18,
    preview: "Rawalpindi · Fitness lover · Extrovert",
    privacy: "public",
    timestamp: "4 hrs ago",
    shareLevel: "basic",
    isNew: false,
    compatScore: 65,
    relationshipGoal: "Serious Relationship",
    ageRange: "21-26",
  },
  {
    id: 206,
    name: "Raza H.",
    layer: "dating",
    x: 84,
    y: 42,
    preview: "Karachi · Intellectual · Ambivert",
    privacy: "friends",
    timestamp: "Yesterday",
    shareLevel: "nickname",
    isNew: false,
    compatScore: 55,
    relationshipGoal: "Friendship First",
    ageRange: "26-32",
  },
  {
    id: 207,
    name: "Nadia F.",
    layer: "dating",
    x: 20,
    y: 70,
    preview: "Lahore · Traveler · Morning Person",
    privacy: "public",
    timestamp: "6 hrs ago",
    shareLevel: "basic",
    isNew: false,
    compatScore: 83,
    relationshipGoal: "Marriage",
    ageRange: "23-27",
  },
  {
    id: 208,
    name: "Hassan B.",
    layer: "dating",
    x: 44,
    y: 88,
    preview: "Islamabad · Chef · Vegetarian",
    privacy: "public",
    timestamp: "3 hrs ago",
    shareLevel: "full",
    isNew: false,
    compatScore: 90,
    relationshipGoal: "Marriage",
    ageRange: "27-33",
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

// ── Matrimony filter state ────────────────────────────────────────────────────
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

export default function GeoMapPage() {
  const [activeLayers, setActiveLayers] = useState<Set<string>>(
    new Set(LAYERS.map((l) => l.id)),
  );
  const [privacyFilter, setPrivacyFilter] = useState("all");
  const [showRecentPosts, setShowRecentPosts] = useState(false);
  const [layersPanelOpen, setLayersPanelOpen] = useState(true);
  const [hoveredPin, setHoveredPin] = useState<GeoPin | null>(null);

  // New state
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

  // Filters state
  const [matrimonyFilters, setMatrimonyFilters] = useState<MatrimonyFilters>(
    DEFAULT_MATRIMONY_FILTERS,
  );
  const [datingFilters, setDatingFilters] = useState<DatingFilters>(
    DEFAULT_DATING_FILTERS,
  );

  // ── Self-pin state: read from FamilyTree lifestyle localStorage key ──
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

  // Keep self-pin in sync if the toggle changes in another tab or the same page
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
        // ignore parse errors
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

  // Derived data
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

  // Build self-pins derived from lifestyle toggles
  const selfMatrimonyPin: GeoPin | null = userMatrimonyEnabled
    ? {
        id: 9001,
        name: "You",
        layer: "matrimony",
        x: 50,
        y: 50,
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
        x: 50,
        y: 50,
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
    // Self-pins are never filtered out (only hidden by layer toggle)
    if (isSelfPin(pin)) {
      return activeLayers.has(pin.layer);
    }

    if (!activeLayers.has(pin.layer)) return false;
    // Never show hidden pins
    if (pin.shareLevel === "hidden") return false;
    if (privacyFilter !== "all" && pin.privacy !== privacyFilter) return false;

    // Matrimony filters
    if (pin.layer === "matrimony") {
      if (
        matrimonyFilters.caste &&
        !pin.preview
          .toLowerCase()
          .includes(matrimonyFilters.caste.toLowerCase())
      ) {
        // caste is metadata we don't have fully modeled; skip strict filter
      }
      // age range filter (parse ageRange like "24-28")
      if (pin.ageRange) {
        const [minAge] = pin.ageRange.split("-").map(Number);
        if (
          minAge < matrimonyFilters.ageRange[0] ||
          minAge > matrimonyFilters.ageRange[1]
        ) {
          return false;
        }
      }
    }

    // Dating filters
    if (pin.layer === "dating") {
      if (
        datingFilters.relationshipGoal !== "any" &&
        pin.relationshipGoal !== datingFilters.relationshipGoal
      ) {
        return false;
      }
      if (pin.ageRange) {
        const [minAge] = pin.ageRange.split("-").map(Number);
        if (
          minAge < datingFilters.ageRange[0] ||
          minAge > datingFilters.ageRange[1]
        ) {
          return false;
        }
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
      {/* Pulse animation style */}
      <style>{`
        @keyframes pinPulse {
          0%, 100% { box-shadow: 0 0 0 0px rgba(244, 63, 94, 0.5); }
          50% { box-shadow: 0 0 0 8px rgba(244, 63, 94, 0); }
        }
        @keyframes pinPulseDating {
          0%, 100% { box-shadow: 0 0 0 0px rgba(139, 92, 246, 0.5); }
          50% { box-shadow: 0 0 0 8px rgba(139, 92, 246, 0); }
        }
        .pin-pulse-matrimony { animation: pinPulse 2s infinite; }
        .pin-pulse-dating { animation: pinPulseDating 2s infinite; }
      `}</style>

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
          {/* Privacy filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-label text-muted-foreground hidden sm:inline">
              Showing:
            </span>
            <select
              value={privacyFilter}
              onChange={(e) => setPrivacyFilter(e.target.value)}
              className="h-8 text-xs font-label rounded-md border border-border bg-card px-2 pr-6 text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            >
              {PRIVACY_LEVELS.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>

          {/* Daily Matches button */}
          <button
            type="button"
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

          {/* Filters button */}
          <Button
            variant="outline"
            size="sm"
            className="h-8 gap-1.5 text-xs font-label"
            onClick={() => setFiltersOpen(true)}
          >
            <Filter size={13} />
            <span className="hidden sm:inline">Filters</span>
          </Button>

          {/* Recent posts toggle */}
          <button
            type="button"
            onClick={() => setShowRecentPosts((v) => !v)}
            className="h-8 px-3 text-xs font-label rounded-md border transition-colors"
            style={
              showRecentPosts
                ? {
                    background: "oklch(0.65 0.25 335 / 0.15)",
                    color: "oklch(0.65 0.25 335)",
                    borderColor: "oklch(0.65 0.25 335 / 0.3)",
                  }
                : {
                    background: "oklch(var(--secondary))",
                    color: "oklch(var(--foreground))",
                    borderColor: "oklch(var(--border))",
                  }
            }
          >
            Recent Posts
          </button>

          {/* Layers toggle */}
          <Button
            variant="outline"
            size="sm"
            className="h-8 gap-1.5 text-xs font-label"
            onClick={() => setLayersPanelOpen((v) => !v)}
          >
            <Layers size={13} />
            <span className="hidden sm:inline">Layers</span>
          </Button>
        </div>
      </div>

      {/* Location accuracy prompt banner */}
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
        {/* SVG map background */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.18 0.02 240) 0%, oklch(0.14 0.03 260) 50%, oklch(0.16 0.02 220) 100%)",
          }}
        >
          {/* Grid lines */}
          <svg
            aria-hidden="true"
            width="100%"
            height="100%"
            className="absolute inset-0 opacity-10"
          >
            <line
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
              stroke="oklch(0.7 0.1 260)"
              strokeWidth="1"
            />
            <line
              x1="10%"
              y1="0%"
              x2="10%"
              y2="100%"
              stroke="oklch(0.7 0.1 260)"
              strokeWidth="1"
            />
            <line
              x1="20%"
              y1="0%"
              x2="20%"
              y2="100%"
              stroke="oklch(0.7 0.1 260)"
              strokeWidth="1"
            />
            <line
              x1="30%"
              y1="0%"
              x2="30%"
              y2="100%"
              stroke="oklch(0.7 0.1 260)"
              strokeWidth="1"
            />
            <line
              x1="40%"
              y1="0%"
              x2="40%"
              y2="100%"
              stroke="oklch(0.7 0.1 260)"
              strokeWidth="1"
            />
            <line
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              stroke="oklch(0.7 0.1 260)"
              strokeWidth="1"
            />
            <line
              x1="60%"
              y1="0%"
              x2="60%"
              y2="100%"
              stroke="oklch(0.7 0.1 260)"
              strokeWidth="1"
            />
            <line
              x1="70%"
              y1="0%"
              x2="70%"
              y2="100%"
              stroke="oklch(0.7 0.1 260)"
              strokeWidth="1"
            />
            <line
              x1="80%"
              y1="0%"
              x2="80%"
              y2="100%"
              stroke="oklch(0.7 0.1 260)"
              strokeWidth="1"
            />
            <line
              x1="90%"
              y1="0%"
              x2="90%"
              y2="100%"
              stroke="oklch(0.7 0.1 260)"
              strokeWidth="1"
            />
            <line
              x1="100%"
              y1="0%"
              x2="100%"
              y2="100%"
              stroke="oklch(0.7 0.1 260)"
              strokeWidth="1"
            />
            <line
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
              stroke="oklch(0.7 0.1 260)"
              strokeWidth="1"
            />
            <line
              x1="0%"
              y1="10%"
              x2="100%"
              y2="10%"
              stroke="oklch(0.7 0.1 260)"
              strokeWidth="1"
            />
            <line
              x1="0%"
              y1="20%"
              x2="100%"
              y2="20%"
              stroke="oklch(0.7 0.1 260)"
              strokeWidth="1"
            />
            <line
              x1="0%"
              y1="30%"
              x2="100%"
              y2="30%"
              stroke="oklch(0.7 0.1 260)"
              strokeWidth="1"
            />
            <line
              x1="0%"
              y1="40%"
              x2="100%"
              y2="40%"
              stroke="oklch(0.7 0.1 260)"
              strokeWidth="1"
            />
            <line
              x1="0%"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke="oklch(0.7 0.1 260)"
              strokeWidth="1"
            />
            <line
              x1="0%"
              y1="60%"
              x2="100%"
              y2="60%"
              stroke="oklch(0.7 0.1 260)"
              strokeWidth="1"
            />
            <line
              x1="0%"
              y1="70%"
              x2="100%"
              y2="70%"
              stroke="oklch(0.7 0.1 260)"
              strokeWidth="1"
            />
            <line
              x1="0%"
              y1="80%"
              x2="100%"
              y2="80%"
              stroke="oklch(0.7 0.1 260)"
              strokeWidth="1"
            />
            <line
              x1="0%"
              y1="90%"
              x2="100%"
              y2="90%"
              stroke="oklch(0.7 0.1 260)"
              strokeWidth="1"
            />
            <line
              x1="0%"
              y1="100%"
              x2="100%"
              y2="100%"
              stroke="oklch(0.7 0.1 260)"
              strokeWidth="1"
            />
          </svg>

          {/* Decorative "road" lines */}
          <svg
            aria-hidden="true"
            width="100%"
            height="100%"
            className="absolute inset-0 opacity-20"
          >
            <path
              d="M 0% 45% Q 30% 43% 50% 50% T 100% 48%"
              stroke="oklch(0.6 0.05 240)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M 0% 65% Q 40% 62% 60% 60% T 100% 62%"
              stroke="oklch(0.6 0.05 240)"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M 48% 0% Q 52% 35% 50% 55% T 49% 100%"
              stroke="oklch(0.6 0.05 240)"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M 65% 0% Q 67% 40% 66% 60% T 68% 100%"
              stroke="oklch(0.6 0.05 240)"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M 0% 30% Q 20% 28% 35% 32% T 70% 30% Q 85% 28% 100% 32%"
              stroke="oklch(0.6 0.05 240)"
              strokeWidth="1"
              fill="none"
            />
          </svg>

          {/* Subtle region blobs */}
          <svg
            aria-hidden="true"
            width="100%"
            height="100%"
            className="absolute inset-0 opacity-8"
          >
            <ellipse
              cx="50%"
              cy="55%"
              rx="18%"
              ry="12%"
              fill="oklch(0.55 0.1 260)"
            />
            <ellipse
              cx="30%"
              cy="72%"
              rx="12%"
              ry="8%"
              fill="oklch(0.50 0.08 200)"
            />
            <ellipse
              cx="70%"
              cy="40%"
              rx="10%"
              ry="7%"
              fill="oklch(0.52 0.08 230)"
            />
          </svg>

          {/* Pins */}
          {filteredPins.map((pin) => {
            const hex = LAYER_HEX[pin.layer] ?? "#7c3aed";
            const layer = LAYERS.find((l) => l.id === pin.layer);
            const LayerIcon = layer?.icon ?? MapPinIcon;
            const isHovered = hoveredPin?.id === pin.id;
            const isMatrimonyOrDating =
              pin.layer === "matrimony" || pin.layer === "dating";
            const isNewPin = pin.isNew && isMatrimonyOrDating;
            const isSelf = isSelfPin(pin);
            const pulseClass = isNewPin
              ? pin.layer === "matrimony"
                ? "pin-pulse-matrimony"
                : "pin-pulse-dating"
              : isSelf
                ? pin.layer === "matrimony"
                  ? "pin-pulse-matrimony"
                  : "pin-pulse-dating"
                : "";
            const shareBadge = pin.shareLevel
              ? getShareBadgeColor(pin.shareLevel)
              : null;

            return (
              <button
                key={pin.id}
                type="button"
                className="absolute group transition-all duration-150 focus:outline-none"
                style={{
                  left: `${pin.x}%`,
                  top: `${pin.y}%`,
                  transform: "translate(-50%, -50%)",
                  zIndex: isSelf ? 40 : isHovered ? 30 : 10,
                }}
                onMouseEnter={() => setHoveredPin(pin)}
                onMouseLeave={() => setHoveredPin(null)}
                onClick={() =>
                  setHoveredPin((prev) => (prev?.id === pin.id ? null : pin))
                }
                aria-label={`${pin.name} – ${layer?.label ?? pin.layer}`}
              >
                {/* "New" badge */}
                {isNewPin && (
                  <span
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[8px] font-bold px-1 py-0.5 rounded whitespace-nowrap"
                    style={{ background: hex, color: "#fff" }}
                  >
                    New
                  </span>
                )}

                {/* "You" label for self-pins */}
                {isSelf && (
                  <span
                    className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap border"
                    style={{
                      background: `${hex}22`,
                      color: hex,
                      borderColor: `${hex}55`,
                    }}
                  >
                    ★ You
                  </span>
                )}

                {/* Pin dot — self-pin is larger */}
                <div
                  className={`rounded-full border-2 border-white shadow-lg transition-transform duration-150 ${pulseClass}`}
                  style={{
                    width: isSelf ? "20px" : "16px",
                    height: isSelf ? "20px" : "16px",
                    background: hex,
                    boxShadow: `0 0 0 ${isHovered || isSelf ? "6px" : "3px"} ${hex}30`,
                    transform: isHovered
                      ? "scale(1.4)"
                      : isSelf
                        ? "scale(1.2)"
                        : "scale(1)",
                  }}
                />

                {/* Popup */}
                {isHovered && (
                  <div
                    className="absolute z-50 rounded-xl border shadow-elevated text-left pointer-events-none"
                    style={{
                      background: "oklch(0.15 0.02 260)",
                      borderColor: isSelf ? hex : `${hex}50`,
                      width: "220px",
                      top: "calc(100% + 8px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    <div className="p-3">
                      {/* Self-pin header */}
                      {isSelf && (
                        <div
                          className="flex items-center gap-1.5 mb-2 pb-2 border-b"
                          style={{ borderColor: `${hex}30` }}
                        >
                          <span
                            className="text-[11px] font-bold"
                            style={{ color: hex }}
                          >
                            ★ You
                          </span>
                          <span className="text-[10px] text-white/50">
                            — This is your pin
                          </span>
                        </div>
                      )}

                      <div className="flex items-start gap-2 mb-2">
                        <div
                          className="w-5 h-5 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                          style={{ background: `${hex}25` }}
                        >
                          <LayerIcon size={11} style={{ color: hex }} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-semibold text-white truncate">
                            {isSelf ? (
                              <span style={{ color: hex }}>★ You</span>
                            ) : (
                              pin.name
                            )}
                          </p>
                          <div className="flex items-center gap-1 mt-0.5 flex-wrap">
                            <span
                              className="text-[9px] font-bold px-1 py-0.5 rounded"
                              style={{ background: `${hex}25`, color: hex }}
                            >
                              {layer?.label ?? pin.layer}
                            </span>
                            {isNewPin && (
                              <span
                                className="text-[9px] font-bold px-1 py-0.5 rounded"
                                style={{
                                  background: "#f43f5e20",
                                  color: "#f43f5e",
                                }}
                              >
                                New Today
                              </span>
                            )}
                            <span
                              className="text-[9px] px-1 py-0.5 rounded"
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
                              }}
                            >
                              {pin.privacy}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-[10px] text-white/60 leading-relaxed">
                        {pin.preview}
                      </p>

                      {/* Matrimony/Dating extras */}
                      {isMatrimonyOrDating && !isSelf && (
                        <div className="mt-2 space-y-1">
                          {pin.compatScore !== undefined && (
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-1 rounded-full bg-white/10">
                                <div
                                  className="h-1 rounded-full"
                                  style={{
                                    width: `${pin.compatScore}%`,
                                    background: hex,
                                  }}
                                />
                              </div>
                              <span
                                className="text-[9px] font-bold"
                                style={{ color: hex }}
                              >
                                {pin.compatScore}% Match
                              </span>
                            </div>
                          )}
                          {pin.ageRange && (
                            <p className="text-[9px] text-white/50">
                              Age range: {pin.ageRange}
                            </p>
                          )}
                          {pin.relationshipGoal && (
                            <p className="text-[9px] text-white/50">
                              Goal: {pin.relationshipGoal}
                            </p>
                          )}
                          {shareBadge && pin.shareLevel && (
                            <span
                              className="inline-block text-[9px] px-1 py-0.5 rounded"
                              style={{
                                background: shareBadge.bg,
                                color: shareBadge.color,
                              }}
                            >
                              {SHARE_LEVEL_LABELS[pin.shareLevel]}
                            </span>
                          )}
                        </div>
                      )}

                      <p className="text-[9px] text-white/40 mt-1">
                        {pin.timestamp}
                      </p>
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Layers panel */}
        {layersPanelOpen && (
          <div
            className="absolute top-3 left-3 z-20 rounded-xl border shadow-elevated overflow-hidden"
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
                    {/* Visibility settings for matrimony/dating */}
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
            className="absolute top-3 left-3 z-20 w-9 h-9 rounded-xl flex items-center justify-center shadow-elevated border border-border transition-colors hover:bg-secondary/50"
            style={{ background: "oklch(var(--card))" }}
            aria-label="Open layers panel"
          >
            <Layers size={16} className="text-foreground" />
          </button>
        )}

        {/* Legend */}
        <div
          className="absolute bottom-4 right-3 z-20 rounded-xl border shadow-elevated px-3 py-2"
          style={{
            background: "oklch(var(--card) / 0.92)",
            borderColor: "oklch(var(--border))",
          }}
        >
          <p className="text-[10px] font-label font-bold text-muted-foreground uppercase tracking-wide mb-1.5">
            Legend
          </p>
          <div className="space-y-1">
            {LAYERS.filter((l) => activeLayers.has(l.id))
              .slice(0, 5)
              .map((l) => (
                <div key={l.id} className="flex items-center gap-2">
                  <div
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ background: LAYER_HEX[l.id] }}
                  />
                  <span className="text-[10px] font-label text-foreground">
                    {l.label}
                  </span>
                </div>
              ))}
            {activeLayers.size > 5 && (
              <p className="text-[10px] text-muted-foreground">
                +{activeLayers.size - 5} more
              </p>
            )}
          </div>
        </div>

        {/* Recent posts badge */}
        {showRecentPosts && (
          <div
            className="absolute top-3 right-3 z-20 rounded-xl border shadow-elevated px-3 py-2 text-xs font-label"
            style={{
              background: "oklch(0.65 0.25 335 / 0.12)",
              borderColor: "oklch(0.65 0.25 335 / 0.3)",
              color: "oklch(0.65 0.25 335)",
            }}
          >
            📍 Recent posts shown on map
          </div>
        )}
      </div>

      {/* Stats bar */}
      <div className="shrink-0 border-t border-border bg-card px-6 py-2 flex items-center gap-6 overflow-x-auto">
        <div className="flex items-center gap-2 shrink-0">
          <MapPinIcon size={13} className="text-muted-foreground" />
          <span className="text-xs font-label text-muted-foreground">
            <span className="font-semibold text-foreground">
              {filteredPins.length}
            </span>{" "}
            pins
          </span>
        </div>
        {LAYERS.filter((l) => activeLayers.has(l.id)).map((l) => {
          const count = filteredPins.filter((p) => p.layer === l.id).length;
          if (count === 0) return null;
          return (
            <div key={l.id} className="flex items-center gap-1.5 shrink-0">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: LAYER_HEX[l.id] }}
              />
              <span className="text-xs font-label text-muted-foreground">
                <span className="font-semibold text-foreground">{count}</span>{" "}
                {l.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* ── Daily Matches Sheet (right slide-in) ──────────────────────────────── */}
      <Sheet open={dailyMatchesOpen} onOpenChange={setDailyMatchesOpen}>
        <SheetContent side="right" className="w-full sm:w-[400px] p-0">
          <SheetHeader className="px-5 py-4 border-b border-border">
            <SheetTitle className="flex items-center gap-2">
              <Sparkles size={16} className="text-rose-500" />
              Daily Matches
              {totalNewMatches > 0 && (
                <Badge
                  className="text-white text-[10px] px-1.5 py-0"
                  style={{ background: "#f43f5e" }}
                >
                  {totalNewMatches} New
                </Badge>
              )}
            </SheetTitle>
          </SheetHeader>

          <Tabs
            defaultValue="matrimony"
            className="flex flex-col h-[calc(100%-68px)]"
          >
            <TabsList className="mx-5 mt-4 mb-2 grid grid-cols-2">
              <TabsTrigger value="matrimony" className="gap-1.5">
                <Heart size={12} />
                Matrimony
                {newMatrimonyPins.length > 0 && (
                  <span
                    className="ml-1 text-[9px] font-bold px-1 rounded"
                    style={{ background: "#f43f5e20", color: "#f43f5e" }}
                  >
                    {newMatrimonyPins.length}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="dating" className="gap-1.5">
                <Zap size={12} />
                Dating
                {newDatingPins.length > 0 && (
                  <span
                    className="ml-1 text-[9px] font-bold px-1 rounded"
                    style={{ background: "#8b5cf620", color: "#8b5cf6" }}
                  >
                    {newDatingPins.length}
                  </span>
                )}
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="matrimony"
              className="flex-1 overflow-hidden m-0"
            >
              <ScrollArea className="h-full px-5 pb-4">
                {newMatrimonyPins.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-8">
                    No new matrimony matches today
                  </p>
                ) : (
                  <div className="space-y-3 pt-1">
                    {[...newMatrimonyPins]
                      .sort(
                        (a, b) => (b.compatScore ?? 0) - (a.compatScore ?? 0),
                      )
                      .map((pin) => (
                        <div
                          key={pin.id}
                          className="rounded-xl border border-border p-3 flex items-start gap-3"
                          style={{ background: "#f43f5e08" }}
                        >
                          <div
                            className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-sm font-bold text-white"
                            style={{ background: "#f43f5e" }}
                          >
                            {pin.name.charAt(0)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-semibold text-foreground">
                                {pin.name}
                              </p>
                              {pin.compatScore !== undefined && (
                                <span
                                  className="text-[10px] font-bold px-1.5 py-0.5 rounded-full text-white"
                                  style={{ background: "#f43f5e" }}
                                >
                                  {pin.compatScore}%
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {pin.preview}
                            </p>
                            {pin.ageRange && (
                              <p className="text-[10px] text-muted-foreground mt-0.5">
                                Age range: {pin.ageRange}
                              </p>
                            )}
                            <button
                              type="button"
                              className="mt-2 text-[10px] font-label font-semibold px-2 py-1 rounded-md transition-colors"
                              style={{
                                background: "#f43f5e15",
                                color: "#f43f5e",
                                border: "1px solid #f43f5e30",
                              }}
                              onClick={() => {
                                setDailyMatchesOpen(false);
                                setActiveLayers(
                                  (prev) => new Set([...prev, "matrimony"]),
                                );
                              }}
                            >
                              View on Map
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </ScrollArea>
            </TabsContent>

            <TabsContent value="dating" className="flex-1 overflow-hidden m-0">
              <ScrollArea className="h-full px-5 pb-4">
                {newDatingPins.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-8">
                    No new dating matches today
                  </p>
                ) : (
                  <div className="space-y-3 pt-1">
                    {[...newDatingPins]
                      .sort(
                        (a, b) => (b.compatScore ?? 0) - (a.compatScore ?? 0),
                      )
                      .map((pin) => (
                        <div
                          key={pin.id}
                          className="rounded-xl border border-border p-3 flex items-start gap-3"
                          style={{ background: "#8b5cf608" }}
                        >
                          <div
                            className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-sm font-bold text-white"
                            style={{ background: "#8b5cf6" }}
                          >
                            {pin.name.charAt(0)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-semibold text-foreground">
                                {pin.name}
                              </p>
                              {pin.compatScore !== undefined && (
                                <span
                                  className="text-[10px] font-bold px-1.5 py-0.5 rounded-full text-white"
                                  style={{ background: "#8b5cf6" }}
                                >
                                  {pin.compatScore}%
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {pin.preview}
                            </p>
                            {pin.relationshipGoal && (
                              <p className="text-[10px] text-muted-foreground mt-0.5">
                                Goal: {pin.relationshipGoal}
                              </p>
                            )}
                            <button
                              type="button"
                              className="mt-2 text-[10px] font-label font-semibold px-2 py-1 rounded-md transition-colors"
                              style={{
                                background: "#8b5cf615",
                                color: "#8b5cf6",
                                border: "1px solid #8b5cf630",
                              }}
                              onClick={() => {
                                setDailyMatchesOpen(false);
                                setActiveLayers(
                                  (prev) => new Set([...prev, "dating"]),
                                );
                              }}
                            >
                              View on Map
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </SheetContent>
      </Sheet>

      {/* ── Filters Sheet (left slide-in) ─────────────────────────────────────── */}
      <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
        <SheetContent side="left" className="w-full sm:w-[380px] p-0">
          <SheetHeader className="px-5 py-4 border-b border-border">
            <SheetTitle className="flex items-center gap-2">
              <Filter size={16} />
              Map Filters
            </SheetTitle>
          </SheetHeader>

          <Tabs
            defaultValue="matrimony"
            className="flex flex-col h-[calc(100%-68px)]"
          >
            <TabsList className="mx-5 mt-4 mb-2 grid grid-cols-2">
              <TabsTrigger value="matrimony" className="gap-1.5">
                <Heart size={12} />
                Matrimony
              </TabsTrigger>
              <TabsTrigger value="dating" className="gap-1.5">
                <Zap size={12} />
                Dating
              </TabsTrigger>
            </TabsList>

            {/* Matrimony Filters */}
            <TabsContent
              value="matrimony"
              className="flex-1 overflow-hidden m-0"
            >
              <ScrollArea className="h-full px-5 pb-4">
                <div className="space-y-4 pt-2">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-label">Caste</Label>
                    <input
                      type="text"
                      value={matrimonyFilters.caste}
                      onChange={(e) =>
                        setMatrimonyFilters((p) => ({
                          ...p,
                          caste: e.target.value,
                        }))
                      }
                      placeholder="e.g. Rajput, Arain..."
                      className="w-full h-8 text-xs rounded-md border border-border bg-background px-3 text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs font-label">
                      Religion / Sect
                    </Label>
                    <Select
                      value={matrimonyFilters.religion}
                      onValueChange={(v) =>
                        setMatrimonyFilters((p) => ({ ...p, religion: v }))
                      }
                    >
                      <SelectTrigger className="h-8 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="sunni">Sunni</SelectItem>
                        <SelectItem value="shia">Shia</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs font-label">
                      Age Range:{" "}
                      <span className="font-semibold text-foreground">
                        {matrimonyFilters.ageRange[0]} –{" "}
                        {matrimonyFilters.ageRange[1]}
                      </span>
                    </Label>
                    <Slider
                      min={18}
                      max={60}
                      step={1}
                      value={matrimonyFilters.ageRange}
                      onValueChange={(v) =>
                        setMatrimonyFilters((p) => ({
                          ...p,
                          ageRange: v as [number, number],
                        }))
                      }
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs font-label">Profession</Label>
                    <input
                      type="text"
                      value={matrimonyFilters.profession}
                      onChange={(e) =>
                        setMatrimonyFilters((p) => ({
                          ...p,
                          profession: e.target.value,
                        }))
                      }
                      placeholder="e.g. Doctor, Engineer..."
                      className="w-full h-8 text-xs rounded-md border border-border bg-background px-3 text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs font-label">
                      Living Standard
                    </Label>
                    <Select
                      value={matrimonyFilters.livingStandard}
                      onValueChange={(v) =>
                        setMatrimonyFilters((p) => ({
                          ...p,
                          livingStandard: v,
                        }))
                      }
                    >
                      <SelectTrigger className="h-8 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="lower">Lower</SelectItem>
                        <SelectItem value="middle">Middle</SelectItem>
                        <SelectItem value="upper-middle">
                          Upper-Middle
                        </SelectItem>
                        <SelectItem value="upper">Upper</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs font-label">Horoscope Sign</Label>
                    <Select
                      value={matrimonyFilters.horoscope}
                      onValueChange={(v) =>
                        setMatrimonyFilters((p) => ({ ...p, horoscope: v }))
                      }
                    >
                      <SelectTrigger className="h-8 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {HOROSCOPE_SIGNS.map((sign) => (
                          <SelectItem key={sign} value={sign}>
                            {sign}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs font-label">Height Range</Label>
                    <Select
                      value={matrimonyFilters.heightRange}
                      onValueChange={(v) =>
                        setMatrimonyFilters((p) => ({ ...p, heightRange: v }))
                      }
                    >
                      <SelectTrigger className="h-8 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="under-52">Under 5'2"</SelectItem>
                        <SelectItem value="52-55">5'2" – 5'5"</SelectItem>
                        <SelectItem value="55-58">5'5" – 5'8"</SelectItem>
                        <SelectItem value="over-58">Over 5'8"</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() =>
                      setMatrimonyFilters(DEFAULT_MATRIMONY_FILTERS)
                    }
                  >
                    Reset Matrimony Filters
                  </Button>
                </div>
              </ScrollArea>
            </TabsContent>

            {/* Dating Filters */}
            <TabsContent value="dating" className="flex-1 overflow-hidden m-0">
              <ScrollArea className="h-full px-5 pb-4">
                <div className="space-y-4 pt-2">
                  <div className="space-y-2">
                    <Label className="text-xs font-label">
                      Habits (select all that apply)
                    </Label>
                    <div className="flex flex-wrap gap-1.5">
                      {DATING_HABITS.map((habit) => {
                        const isSelected = datingFilters.habits.includes(habit);
                        return (
                          <button
                            key={habit}
                            type="button"
                            onClick={() => toggleDatingHabit(habit)}
                            className="text-[10px] font-label px-2 py-1 rounded-full border transition-all"
                            style={
                              isSelected
                                ? {
                                    background: "#8b5cf620",
                                    color: "#8b5cf6",
                                    borderColor: "#8b5cf640",
                                  }
                                : {
                                    background: "transparent",
                                    color: "oklch(var(--muted-foreground))",
                                    borderColor: "oklch(var(--border))",
                                  }
                            }
                          >
                            {habit}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs font-label">Lifestyle</Label>
                    <Select
                      value={datingFilters.lifestyle}
                      onValueChange={(v) =>
                        setDatingFilters((p) => ({ ...p, lifestyle: v }))
                      }
                    >
                      <SelectTrigger className="h-8 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="active">
                          Active & Outdoorsy
                        </SelectItem>
                        <SelectItem value="creative">
                          Creative & Artistic
                        </SelectItem>
                        <SelectItem value="intellectual">
                          Intellectual
                        </SelectItem>
                        <SelectItem value="social">Social & Party</SelectItem>
                        <SelectItem value="homebody">Homebody</SelectItem>
                        <SelectItem value="adventurous">Adventurous</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs font-label">
                      Relationship Goal
                    </Label>
                    <Select
                      value={datingFilters.relationshipGoal}
                      onValueChange={(v) =>
                        setDatingFilters((p) => ({
                          ...p,
                          relationshipGoal: v,
                        }))
                      }
                    >
                      <SelectTrigger className="h-8 text-xs">
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
                        <SelectItem value="Casual Dating">
                          Casual Dating
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs font-label">
                      Age Range:{" "}
                      <span className="font-semibold text-foreground">
                        {datingFilters.ageRange[0]} –{" "}
                        {datingFilters.ageRange[1]}
                      </span>
                    </Label>
                    <Slider
                      min={18}
                      max={60}
                      step={1}
                      value={datingFilters.ageRange}
                      onValueChange={(v) =>
                        setDatingFilters((p) => ({
                          ...p,
                          ageRange: v as [number, number],
                        }))
                      }
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs font-label">
                      Personality Type
                    </Label>
                    <Select
                      value={datingFilters.personalityType}
                      onValueChange={(v) =>
                        setDatingFilters((p) => ({
                          ...p,
                          personalityType: v,
                        }))
                      }
                    >
                      <SelectTrigger className="h-8 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="introvert">Introvert</SelectItem>
                        <SelectItem value="extrovert">Extrovert</SelectItem>
                        <SelectItem value="ambivert">Ambivert</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs font-label">Eating Habits</Label>
                    <Select
                      value={datingFilters.eatingHabits}
                      onValueChange={(v) =>
                        setDatingFilters((p) => ({ ...p, eatingHabits: v }))
                      }
                    >
                      <SelectTrigger className="h-8 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="vegetarian">Vegetarian</SelectItem>
                        <SelectItem value="vegan">Vegan</SelectItem>
                        <SelectItem value="non-vegetarian">
                          Non-Vegetarian
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs font-label">
                      Drinking Habits
                    </Label>
                    <Select
                      value={datingFilters.drinkingHabits}
                      onValueChange={(v) =>
                        setDatingFilters((p) => ({
                          ...p,
                          drinkingHabits: v,
                        }))
                      }
                    >
                      <SelectTrigger className="h-8 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="non-drinker">Non-Drinker</SelectItem>
                        <SelectItem value="social-drinker">
                          Social Drinker
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => setDatingFilters(DEFAULT_DATING_FILTERS)}
                  >
                    Reset Dating Filters
                  </Button>
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </SheetContent>
      </Sheet>

      {/* ── Location precision dialog ─────────────────────────────────────────── */}
      <Dialog open={locationDialogOpen} onOpenChange={setLocationDialogOpen}>
        <DialogContent className="sm:max-w-[360px]">
          <DialogHeader>
            <DialogTitle>Set Location Precision</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 py-2">
            <p className="text-xs text-muted-foreground">
              Choose how precisely your location is shown on the map. More
              precise settings improve match quality. Your exact address is
              never shared.
            </p>
            <div className="space-y-2">
              {[
                {
                  value: "city",
                  label: "City Only",
                  desc: "e.g. Lahore",
                },
                {
                  value: "district",
                  label: "District",
                  desc: "e.g. Gulberg, DHA",
                },
                {
                  value: "neighborhood",
                  label: "Neighborhood",
                  desc: "e.g. DHA Phase 5, Block D",
                },
              ].map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setLocationPrecision(opt.value)}
                  className="w-full flex items-start gap-3 p-3 rounded-lg border transition-all text-left"
                  style={
                    locationPrecision === opt.value
                      ? {
                          borderColor: "#f43f5e",
                          background: "#f43f5e10",
                        }
                      : {
                          borderColor: "oklch(var(--border))",
                          background: "transparent",
                        }
                  }
                >
                  <div
                    className="w-4 h-4 rounded-full border-2 mt-0.5 flex items-center justify-center shrink-0"
                    style={{
                      borderColor:
                        locationPrecision === opt.value
                          ? "#f43f5e"
                          : "oklch(var(--border))",
                    }}
                  >
                    {locationPrecision === opt.value && (
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: "#f43f5e" }}
                      />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {opt.label}
                    </p>
                    <p className="text-xs text-muted-foreground">{opt.desc}</p>
                  </div>
                </button>
              ))}
            </div>
            <Button
              className="w-full"
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

      {/* ── Share visibility settings dialog ─────────────────────────────────── */}
      <Dialog
        open={shareSettingsOpen !== null}
        onOpenChange={(open) => !open && setShareSettingsOpen(null)}
      >
        <DialogContent className="sm:max-w-[340px]">
          <DialogHeader>
            <DialogTitle>
              {shareSettingsOpen === "matrimony" ? "Matrimony" : "Dating"}{" "}
              Visibility
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3 py-2">
            <p className="text-xs text-muted-foreground">
              Choose how much of your profile is visible to others on the map.
            </p>
            <div className="space-y-2">
              {(["hidden", "nickname", "basic", "full"] as const).map(
                (level) => {
                  const current =
                    shareSettingsOpen === "matrimony"
                      ? matrimonyShareLevel
                      : datingShareLevel;
                  return (
                    <button
                      key={level}
                      type="button"
                      onClick={() => {
                        if (shareSettingsOpen === "matrimony") {
                          setMatrimonyShareLevel(level);
                        } else {
                          setDatingShareLevel(level);
                        }
                      }}
                      className="w-full flex items-center gap-3 p-3 rounded-lg border transition-all text-left"
                      style={
                        current === level
                          ? {
                              borderColor:
                                shareSettingsOpen === "matrimony"
                                  ? "#f43f5e"
                                  : "#8b5cf6",
                              background:
                                shareSettingsOpen === "matrimony"
                                  ? "#f43f5e10"
                                  : "#8b5cf610",
                            }
                          : {
                              borderColor: "oklch(var(--border))",
                              background: "transparent",
                            }
                      }
                    >
                      <div
                        className="w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0"
                        style={{
                          borderColor:
                            current === level
                              ? shareSettingsOpen === "matrimony"
                                ? "#f43f5e"
                                : "#8b5cf6"
                              : "oklch(var(--border))",
                        }}
                      >
                        {current === level && (
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{
                              background:
                                shareSettingsOpen === "matrimony"
                                  ? "#f43f5e"
                                  : "#8b5cf6",
                            }}
                          />
                        )}
                      </div>
                      <span className="text-sm font-semibold text-foreground">
                        {SHARE_LEVEL_LABELS[level]}
                      </span>
                    </button>
                  );
                },
              )}
            </div>
            <Button
              className="w-full"
              onClick={() => setShareSettingsOpen(null)}
            >
              Save
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
