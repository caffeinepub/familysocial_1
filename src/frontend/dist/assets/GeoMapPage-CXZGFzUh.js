import { r as reactExports, R as TreePine, q as Users, y as Briefcase, l as Building2, H as Heart, V as Plane, W as BookOpen, O as MapPin, Z as Zap, j as jsxRuntimeExports, Y as Sparkles, a as Button, X, T as Tabs, c as TabsList, d as TabsTrigger, e as TabsContent, B as Badge, L as Label, S as Select, f as SelectTrigger, g as SelectValue, h as SelectContent, i as SelectItem, D as Dialog, F as DialogContent, G as DialogHeader, J as DialogTitle, m as House } from "./index-C-O55065.js";
import { S as Sheet, a as SheetContent, b as SheetHeader, c as SheetTitle } from "./sheet-oAPCN1uE.js";
import { S as Slider } from "./slider-cok8pPwN.js";
import { F as Funnel } from "./funnel-DX-DZu2_.js";
import { L as Layers } from "./layers-VacPMOjG.js";
const SEED_BUSINESS_PINS = [
  {
    id: 1,
    name: "TechPK Solutions",
    type: "Technology",
    city: "Mumbai",
    lat: 19.076,
    lng: 72.877
  },
  {
    id: 2,
    name: "Spice Garden Restaurant",
    type: "Food & Beverage",
    city: "Delhi",
    lat: 28.613,
    lng: 77.209
  },
  {
    id: 3,
    name: "MediCare Clinic",
    type: "Healthcare",
    city: "Bangalore",
    lat: 12.971,
    lng: 77.594
  },
  {
    id: 4,
    name: "EduBright Academy",
    type: "Education",
    city: "Chennai",
    lat: 13.082,
    lng: 80.27
  },
  {
    id: 5,
    name: "HomeStyle Realty",
    type: "Real Estate",
    city: "Hyderabad",
    lat: 17.385,
    lng: 78.486
  }
];
const SEED_COMMUNITY_PINS = [
  {
    id: 1,
    name: "Sunrise Residency",
    type: "Gated Community",
    city: "Mumbai",
    lat: 19.12,
    lng: 72.85
  },
  {
    id: 2,
    name: "Green Valley Society",
    type: "Housing Society",
    city: "Pune",
    lat: 18.52,
    lng: 73.856
  },
  {
    id: 3,
    name: "River View Apartments",
    type: "Apartment Complex",
    city: "Delhi",
    lat: 28.65,
    lng: 77.23
  }
];
const LAYERS = [
  {
    id: "family",
    label: "Family",
    color: "oklch(0.55 0.22 280)",
    icon: TreePine
  },
  {
    id: "friends",
    label: "Friends",
    color: "oklch(0.60 0.22 310)",
    icon: Users
  },
  {
    id: "community",
    label: "Community",
    color: "oklch(0.60 0.20 190)",
    icon: Users
  },
  { id: "jobs", label: "Jobs", color: "oklch(0.62 0.20 150)", icon: Briefcase },
  {
    id: "real-estate",
    label: "Real Estate",
    color: "oklch(0.62 0.19 55)",
    icon: Building2
  },
  {
    id: "healthcare",
    label: "Healthcare",
    color: "oklch(0.58 0.22 25)",
    icon: Heart
  },
  { id: "travel", label: "Travel", color: "oklch(0.55 0.18 240)", icon: Plane },
  { id: "blog", label: "Blog", color: "oklch(0.60 0.22 310)", icon: BookOpen },
  {
    id: "events",
    label: "Events",
    color: "oklch(0.65 0.20 55)",
    icon: MapPin
  },
  {
    id: "matrimony",
    label: "Matrimony",
    color: "oklch(0.62 0.22 350)",
    icon: Heart
  },
  {
    id: "dating",
    label: "Dating",
    color: "oklch(0.60 0.22 280)",
    icon: Zap
  }
];
const LAYER_HEX = {
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
  dating: "#8b5cf6"
};
const MAP_PINS = [
  {
    id: 1,
    name: "Khalid Hassan",
    layer: "family",
    lat: 31.548,
    lng: 74.358,
    preview: "Father · Hassan Textiles owner",
    privacy: "family",
    timestamp: "2 hrs ago"
  },
  {
    id: 2,
    name: "Fatima Hassan",
    layer: "family",
    lat: 31.523,
    lng: 74.312,
    preview: "Mother · DHA Phase 5",
    privacy: "family",
    timestamp: "4 hrs ago"
  },
  {
    id: 3,
    name: "Omar Hassan",
    layer: "family",
    lat: 31.487,
    lng: 74.276,
    preview: "Brother · Johar Town, Lahore",
    privacy: "family",
    timestamp: "1 day ago"
  },
  {
    id: 4,
    name: "Hamza Raza",
    layer: "friends",
    lat: 31.511,
    lng: 74.339,
    preview: "5 mutual connections · Gulberg",
    privacy: "friends",
    timestamp: "30 min ago"
  },
  {
    id: 5,
    name: "Sana Malik",
    layer: "friends",
    lat: 31.462,
    lng: 74.301,
    preview: "University friend · Model Town",
    privacy: "friends",
    timestamp: "3 hrs ago"
  },
  {
    id: 6,
    name: "Bilal Chaudhry",
    layer: "friends",
    lat: 31.418,
    lng: 74.227,
    preview: "Colleague · Bahria Town",
    privacy: "public",
    timestamp: "Yesterday"
  },
  {
    id: 7,
    name: "DHA Phase 5 Society",
    layer: "community",
    lat: 31.475,
    lng: 74.393,
    preview: "Gate entry system active · 1,240 residents",
    privacy: "community",
    timestamp: "Live"
  },
  {
    id: 8,
    name: "Green Valley Society",
    layer: "community",
    lat: 31.533,
    lng: 74.382,
    preview: "Community announcement: Maintenance 8AM",
    privacy: "community",
    timestamp: "2 hrs ago"
  },
  {
    id: 9,
    name: "Asif Javed",
    layer: "community",
    lat: 31.491,
    lng: 74.355,
    preview: "Active community member · Allama Iqbal Town",
    privacy: "community",
    timestamp: "5 hrs ago"
  },
  {
    id: 10,
    name: "TechCorp Pakistan",
    layer: "jobs",
    lat: 31.508,
    lng: 74.344,
    preview: "Senior Software Engineer · PKR 3.5L/mo",
    privacy: "public",
    timestamp: "4 hrs ago"
  },
  {
    id: 11,
    name: "StartupPK Office",
    layer: "jobs",
    lat: 31.519,
    lng: 74.329,
    preview: "Product Manager position open",
    privacy: "public",
    timestamp: "1 day ago"
  },
  {
    id: 12,
    name: "Graphic Studio Karachi",
    layer: "jobs",
    lat: 24.875,
    lng: 67.022,
    preview: "Part-time designer role · Karachi",
    privacy: "public",
    timestamp: "1 day ago"
  },
  {
    id: 13,
    name: "DHA Phase 6 Apartment",
    layer: "real-estate",
    lat: 31.468,
    lng: 74.409,
    preview: "3BR · 1800 sqft · PKR 2.8 Cr",
    privacy: "public",
    timestamp: "3 hrs ago"
  },
  {
    id: 14,
    name: "Gulberg III House",
    layer: "real-estate",
    lat: 31.513,
    lng: 74.345,
    preview: "5 Marla · Renovated · PKR 1.95 Cr",
    privacy: "public",
    timestamp: "2 days ago"
  },
  {
    id: 15,
    name: "Model Town Property",
    layer: "real-estate",
    lat: 31.462,
    lng: 74.301,
    preview: "10 Marla corner plot · PKR 4.2 Cr",
    privacy: "public",
    timestamp: "3 days ago"
  },
  {
    id: 16,
    name: "Dr. Ayesha Clinic",
    layer: "healthcare",
    lat: 31.503,
    lng: 74.362,
    preview: "General Physician · DHA Phase 4",
    privacy: "public",
    timestamp: "Live"
  },
  {
    id: 17,
    name: "Shaukat Khanum Hospital",
    layer: "healthcare",
    lat: 31.437,
    lng: 74.259,
    preview: "Cancer care & general medicine",
    privacy: "public",
    timestamp: "Live"
  },
  {
    id: 18,
    name: "Fairy Meadows Tour",
    layer: "travel",
    lat: 35.375,
    lng: 74.585,
    preview: "Group tour July 12–18 · PKR 45K",
    privacy: "public",
    timestamp: "Posted 1 day ago"
  },
  {
    id: 19,
    name: "Lahore Airport",
    layer: "travel",
    lat: 31.522,
    lng: 74.404,
    preview: "Maldives Honeymoon Package departs here",
    privacy: "public",
    timestamp: "Upcoming"
  },
  {
    id: 20,
    name: "Imran Qureshi",
    layer: "blog",
    lat: 31.488,
    lng: 74.336,
    preview: "'Digital Family Trees in South Asia' — 50 reads",
    privacy: "public",
    timestamp: "8 hrs ago"
  },
  {
    id: 21,
    name: "Eid Bazaar 2026",
    layer: "events",
    lat: 31.557,
    lng: 74.316,
    preview: "Annual community market · Liberty Roundabout",
    privacy: "public",
    timestamp: "Tomorrow"
  },
  {
    id: 22,
    name: "Tech Summit Lahore",
    layer: "events",
    lat: 31.474,
    lng: 74.392,
    preview: "Annual technology conference · Expo Centre",
    privacy: "public",
    timestamp: "March 15"
  },
  {
    id: 23,
    name: "TechPK Solutions – Lahore HQ",
    layer: "jobs",
    lat: 31.527,
    lng: 74.348,
    preview: "6 open roles · Senior Engineer, Frontend Dev",
    privacy: "public",
    timestamp: "Hiring now"
  },
  {
    id: 24,
    name: "MediCare Clinics – Karachi",
    layer: "jobs",
    lat: 24.855,
    lng: 67.01,
    preview: "5 open roles · General Physician, Receptionist",
    privacy: "public",
    timestamp: "Hiring now"
  },
  {
    id: 25,
    name: "Beacon House School – Islamabad",
    layer: "jobs",
    lat: 33.718,
    lng: 73.063,
    preview: "4 open roles · Teacher, Admin, Library Staff",
    privacy: "public",
    timestamp: "Hiring now"
  },
  {
    id: 26,
    name: "QuickEats HQ – Rawalpindi",
    layer: "jobs",
    lat: 33.597,
    lng: 73.048,
    preview: "12 open roles · Delivery Riders, Ops Manager",
    privacy: "public",
    timestamp: "Urgent hiring"
  },
  {
    id: 27,
    name: "Hamza Raza – Software Engineer",
    layer: "jobs",
    lat: 31.499,
    lng: 74.337,
    preview: "Shortlisted · TechPK Solutions",
    privacy: "friends",
    timestamp: "Applied 2 days ago"
  },
  {
    id: 28,
    name: "Sana Malik – Frontend Dev",
    layer: "jobs",
    lat: 31.517,
    lng: 74.318,
    preview: "Interview Scheduled · TechPK Solutions",
    privacy: "friends",
    timestamp: "Interview Mar 5"
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
    ageRange: "24-28"
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
    ageRange: "23-27"
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
    ageRange: "26-30"
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
    ageRange: "25-30"
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
    ageRange: "22-26"
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
    ageRange: "22-28"
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
    ageRange: "25-30"
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
    ageRange: "20-25"
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
    ageRange: "24-29"
  }
];
const PRIVACY_LEVELS = [
  { value: "all", label: "All My Connections" },
  { value: "family", label: "Family Only" },
  { value: "community", label: "Community Only" },
  { value: "friends", label: "Friends Only" },
  { value: "public", label: "Public" }
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
  "Pisces"
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
  "Fitness Enthusiast"
];
const SHARE_LEVEL_LABELS = {
  hidden: "Hidden",
  nickname: "Nickname Only",
  basic: "Basic Profile",
  full: "Full Profile"
};
const DEFAULT_MATRIMONY_FILTERS = {
  caste: "",
  religion: "any",
  ageRange: [18, 50],
  profession: "",
  livingStandard: "any",
  horoscope: "Any",
  heightRange: "any"
};
const DEFAULT_DATING_FILTERS = {
  habits: [],
  lifestyle: "any",
  relationshipGoal: "any",
  ageRange: [18, 50],
  personalityType: "any",
  eatingHabits: "any",
  drinkingHabits: "any"
};
const MAP_BOUNDS = { minLat: 23, maxLat: 37, minLng: 60, maxLng: 77 };
function latLngToPercent(lat, lng) {
  const x = (lng - MAP_BOUNDS.minLng) / (MAP_BOUNDS.maxLng - MAP_BOUNDS.minLng) * 100;
  const y = (MAP_BOUNDS.maxLat - lat) / (MAP_BOUNDS.maxLat - MAP_BOUNDS.minLat) * 100;
  return { x, y };
}
function GeoMapPage() {
  const [activePinId, setActivePinId] = reactExports.useState(null);
  const [pinAnchor, setPinAnchor] = reactExports.useState(
    null
  );
  const mapContainerRef = reactExports.useRef(null);
  const [activeLayers, setActiveLayers] = reactExports.useState(
    new Set(LAYERS.map((l) => l.id))
  );
  const [privacyFilter, setPrivacyFilter] = reactExports.useState("all");
  const [layersPanelOpen, setLayersPanelOpen] = reactExports.useState(true);
  const [dailyMatchesOpen, setDailyMatchesOpen] = reactExports.useState(false);
  const [filtersOpen, setFiltersOpen] = reactExports.useState(false);
  const [locationPromptDismissed, setLocationPromptDismissed] = reactExports.useState(false);
  const [locationDialogOpen, setLocationDialogOpen] = reactExports.useState(false);
  const [locationPrecision, setLocationPrecision] = reactExports.useState("city");
  const [matrimonyShareLevel, setMatrimonyShareLevel] = reactExports.useState("nickname");
  const [datingShareLevel, setDatingShareLevel] = reactExports.useState("nickname");
  const [shareSettingsOpen, setShareSettingsOpen] = reactExports.useState(null);
  const [matrimonyFilters, setMatrimonyFilters] = reactExports.useState(
    DEFAULT_MATRIMONY_FILTERS
  );
  const [datingFilters, setDatingFilters] = reactExports.useState(
    DEFAULT_DATING_FILTERS
  );
  const readLifestyle = () => {
    try {
      const key = Object.keys(localStorage).find(
        (k) => k.startsWith("familysocial_lifestyle_")
      );
      if (!key) return { matrimony: false, dating: false };
      const parsed = JSON.parse(localStorage.getItem(key) ?? "{}");
      return {
        matrimony: parsed.matrimony ?? false,
        dating: parsed.dating ?? false
      };
    } catch {
      return { matrimony: false, dating: false };
    }
  };
  const [userMatrimonyEnabled, setUserMatrimonyEnabled] = reactExports.useState(
    () => readLifestyle().matrimony
  );
  const [userDatingEnabled, setUserDatingEnabled] = reactExports.useState(
    () => readLifestyle().dating
  );
  reactExports.useEffect(() => {
    const handleStorage = () => {
      try {
        const key = Object.keys(localStorage).find(
          (k) => k.startsWith("familysocial_lifestyle_")
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
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);
  const toggleLayer = (id) => {
    setActiveLayers((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };
  const toggleDatingHabit = (habit) => {
    setDatingFilters((prev) => ({
      ...prev,
      habits: prev.habits.includes(habit) ? prev.habits.filter((h) => h !== habit) : [...prev.habits, habit]
    }));
  };
  const showLocationPrompt = !locationPromptDismissed && (activeLayers.has("matrimony") || activeLayers.has("dating"));
  const newMatrimonyPins = MAP_PINS.filter(
    (p) => p.layer === "matrimony" && p.isNew && p.shareLevel !== "hidden"
  );
  const newDatingPins = MAP_PINS.filter(
    (p) => p.layer === "dating" && p.isNew && p.shareLevel !== "hidden"
  );
  const totalNewMatches = newMatrimonyPins.length + newDatingPins.length;
  const selfMatrimonyPin = userMatrimonyEnabled ? {
    id: 9001,
    name: "You",
    layer: "matrimony",
    lat: 31.513,
    lng: 74.341,
    preview: "Your matrimony profile is active",
    privacy: "private",
    timestamp: "Active now",
    shareLevel: matrimonyShareLevel,
    isNew: false,
    compatScore: void 0,
    ageRange: void 0
  } : null;
  const selfDatingPin = userDatingEnabled ? {
    id: 9002,
    name: "You",
    layer: "dating",
    lat: 31.513,
    lng: 74.344,
    preview: "Your dating profile is active",
    privacy: "private",
    timestamp: "Active now",
    shareLevel: datingShareLevel,
    isNew: false,
    compatScore: void 0,
    relationshipGoal: void 0,
    ageRange: void 0
  } : null;
  const ALL_PINS = [
    ...MAP_PINS,
    ...selfMatrimonyPin ? [selfMatrimonyPin] : [],
    ...selfDatingPin ? [selfDatingPin] : []
  ];
  const isSelfPin = (pin) => pin.id >= 9e3;
  const filteredPins = ALL_PINS.filter((pin) => {
    if (isSelfPin(pin)) return activeLayers.has(pin.layer);
    if (!activeLayers.has(pin.layer)) return false;
    if (pin.shareLevel === "hidden") return false;
    if (privacyFilter !== "all" && pin.privacy !== privacyFilter) return false;
    if (pin.layer === "matrimony" && pin.ageRange) {
      const [minAge] = pin.ageRange.split("-").map(Number);
      if (minAge < matrimonyFilters.ageRange[0] || minAge > matrimonyFilters.ageRange[1])
        return false;
    }
    if (pin.layer === "dating") {
      if (datingFilters.relationshipGoal !== "any" && pin.relationshipGoal !== datingFilters.relationshipGoal)
        return false;
      if (pin.ageRange) {
        const [minAge] = pin.ageRange.split("-").map(Number);
        if (minAge < datingFilters.ageRange[0] || minAge > datingFilters.ageRange[1])
          return false;
      }
    }
    return true;
  });
  const getShareBadgeColor = (shareLevel) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative w-full h-full flex flex-col",
      style: { minHeight: "100%" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-b border-border bg-card shrink-0 flex items-center justify-between flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-display font-bold text-foreground", children: "Connections Map" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Private — your connections, activities & module entries on a live map" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label text-muted-foreground hidden sm:inline", children: "Showing:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "select",
                {
                  value: privacyFilter,
                  onChange: (e) => setPrivacyFilter(e.target.value),
                  className: "h-8 text-xs font-label rounded-md border border-border bg-card px-2 pr-6 text-foreground focus:outline-none focus:ring-1 focus:ring-primary",
                  "data-ocid": "geomap.privacy_filter.select",
                  children: PRIVACY_LEVELS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: p.value, children: p.label }, p.value))
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                "data-ocid": "geomap.daily_matches.button",
                onClick: () => setDailyMatchesOpen(true),
                className: "relative h-8 px-3 text-xs font-label rounded-md border transition-colors flex items-center gap-1.5",
                style: {
                  background: "oklch(0.62 0.22 350 / 0.12)",
                  color: "oklch(0.72 0.22 350)",
                  borderColor: "oklch(0.62 0.22 350 / 0.3)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 12 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Daily Matches" }),
                  totalNewMatches > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center text-white",
                      style: { background: "#f43f5e" },
                      children: totalNewMatches
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "h-8 gap-1.5 text-xs font-label",
                onClick: () => setFiltersOpen(true),
                "data-ocid": "geomap.filters.button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { size: 13 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Filters" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "h-8 gap-1.5 text-xs font-label",
                onClick: () => setLayersPanelOpen((v) => !v),
                "data-ocid": "geomap.layers.toggle",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { size: 13 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Layers" })
                ]
              }
            )
          ] })
        ] }),
        showLocationPrompt && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "shrink-0 px-6 py-2.5 flex items-center gap-3 flex-wrap",
            style: {
              background: "oklch(0.75 0.18 85 / 0.15)",
              borderBottom: "1px solid oklch(0.75 0.18 85 / 0.3)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-xs font-label",
                  style: { color: "oklch(0.78 0.18 85)" },
                  children: "📍 Improve your matches — add your area/neighborhood for better results"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "text-xs font-label font-semibold px-3 py-1 rounded-md transition-colors",
                  style: {
                    background: "oklch(0.75 0.18 85 / 0.25)",
                    color: "oklch(0.78 0.18 85)",
                    border: "1px solid oklch(0.75 0.18 85 / 0.4)"
                  },
                  onClick: () => setLocationDialogOpen(true),
                  "data-ocid": "geomap.set_location.button",
                  children: "Set Location"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "ml-auto text-xs text-muted-foreground hover:text-foreground transition-colors",
                  onClick: () => setLocationPromptDismissed(true),
                  children: "Dismiss"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            ref: mapContainerRef,
            className: "relative flex-1 overflow-hidden",
            style: { minHeight: "500px", background: "#0d1117" },
            "data-ocid": "geomap.map_container",
            onClick: () => {
              setActivePinId(null);
              setPinAnchor(null);
            },
            onKeyDown: (e) => {
              if (e.key === "Escape") {
                setActivePinId(null);
                setPinAnchor(null);
              }
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "iframe",
                {
                  title: "IndyaCentral Connections Map",
                  src: "https://www.openstreetmap.org/export/embed.html?bbox=60%2C23%2C77%2C37&layer=carto-dark&marker=30.5%2C73.0",
                  style: {
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                    opacity: 0.85,
                    pointerEvents: "none"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(10,8,24,0.55) 0%, rgba(10,8,24,0.3) 100%)",
                    pointerEvents: "none"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "svg",
                {
                  role: "img",
                  "aria-label": "Connection pins on map",
                  style: {
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    overflow: "visible"
                  },
                  preserveAspectRatio: "none",
                  viewBox: "0 0 100 100",
                  children: filteredPins.map((pin) => {
                    const hex = LAYER_HEX[pin.layer] ?? "#7c3aed";
                    const isMatrimonyOrDating = pin.layer === "matrimony" || pin.layer === "dating";
                    const isNewPin = pin.isNew && isMatrimonyOrDating;
                    const isSelf = isSelfPin(pin);
                    const { x, y } = latLngToPercent(pin.lat, pin.lng);
                    const r = isSelf ? 1.6 : isNewPin ? 1.3 : 1;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
                      (isNewPin || isSelf) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "circle",
                        {
                          cx: x,
                          cy: y,
                          r: r + 1.2,
                          fill: "none",
                          stroke: hex,
                          strokeWidth: "0.3",
                          opacity: "0.4"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "circle",
                        {
                          cx: x,
                          cy: y,
                          r,
                          fill: hex,
                          stroke: "#fff",
                          strokeWidth: isSelf ? "0.5" : "0.3",
                          opacity: "0.92",
                          style: { cursor: "pointer" },
                          "data-ocid": "geomap.map_marker",
                          onClick: (e) => {
                            var _a;
                            e.stopPropagation();
                            const rect = (_a = mapContainerRef.current) == null ? void 0 : _a.getBoundingClientRect();
                            if (rect) {
                              setPinAnchor({
                                x: e.clientX - rect.left,
                                y: e.clientY - rect.top
                              });
                            }
                            setActivePinId(pin.id);
                          }
                        }
                      ),
                      isSelf && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "text",
                        {
                          x,
                          y: y - r - 0.6,
                          textAnchor: "middle",
                          fontSize: "1.2",
                          fill: hex,
                          fontWeight: "bold",
                          style: { pointerEvents: "none", userSelect: "none" },
                          children: "★"
                        }
                      )
                    ] }, pin.id);
                  })
                }
              ),
              activePinId !== null && pinAnchor && (() => {
                var _a, _b;
                const pin = filteredPins.find((p) => p.id === activePinId);
                if (!pin) return null;
                const hex = LAYER_HEX[pin.layer] ?? "#7c3aed";
                const layer = LAYERS.find((l) => l.id === pin.layer);
                const isMatrimonyOrDating = pin.layer === "matrimony" || pin.layer === "dating";
                const isNewPin = pin.isNew && isMatrimonyOrDating;
                const isSelf = isSelfPin(pin);
                const shareBadge = pin.shareLevel ? getShareBadgeColor(pin.shareLevel) : null;
                const containerW = ((_a = mapContainerRef.current) == null ? void 0 : _a.offsetWidth) ?? 800;
                const containerH = ((_b = mapContainerRef.current) == null ? void 0 : _b.offsetHeight) ?? 500;
                const popupW = 220;
                const popupLeft = pinAnchor.x + popupW + 12 > containerW ? pinAnchor.x - popupW - 8 : pinAnchor.x + 12;
                const popupTop = Math.max(
                  8,
                  Math.min(pinAnchor.y - 20, containerH - 260)
                );
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      left: popupLeft,
                      top: popupTop,
                      zIndex: 1e3,
                      background: "#13111f",
                      border: `1px solid ${isSelf ? hex : `${hex}55`}`,
                      borderRadius: "12px",
                      padding: "12px",
                      width: `${popupW}px`,
                      boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
                      pointerEvents: "auto"
                    },
                    onClick: (e) => e.stopPropagation(),
                    onKeyDown: (e) => e.stopPropagation(),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          style: {
                            position: "absolute",
                            top: "6px",
                            right: "8px",
                            background: "none",
                            border: "none",
                            color: "rgba(255,255,255,0.4)",
                            cursor: "pointer",
                            fontSize: "14px",
                            lineHeight: 1
                          },
                          onClick: () => {
                            setActivePinId(null);
                            setPinAnchor(null);
                          },
                          "aria-label": "Close popup",
                          children: "×"
                        }
                      ),
                      isSelf && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            marginBottom: "8px",
                            paddingBottom: "8px",
                            borderBottom: `1px solid ${hex}30`
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                style: {
                                  color: hex,
                                  fontSize: "11px",
                                  fontWeight: "bold"
                                },
                                children: "★ You"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                style: {
                                  color: "rgba(255,255,255,0.5)",
                                  fontSize: "10px"
                                },
                                children: "— This is your pin"
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          style: {
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "8px",
                            marginBottom: "8px"
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                style: {
                                  width: "20px",
                                  height: "20px",
                                  borderRadius: "6px",
                                  background: `${hex}25`,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  flexShrink: 0,
                                  marginTop: "2px"
                                },
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: hex, fontSize: "10px" }, children: "●" })
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: 1, minWidth: 0 }, children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "p",
                                {
                                  style: {
                                    color: isSelf ? hex : "#fff",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    margin: 0,
                                    lineHeight: 1.3
                                  },
                                  children: isSelf ? "★ You" : pin.name
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "div",
                                {
                                  style: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "4px",
                                    marginTop: "4px"
                                  },
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      "span",
                                      {
                                        style: {
                                          background: `${hex}25`,
                                          color: hex,
                                          fontSize: "9px",
                                          fontWeight: "bold",
                                          padding: "1px 5px",
                                          borderRadius: "4px"
                                        },
                                        children: (layer == null ? void 0 : layer.label) ?? pin.layer
                                      }
                                    ),
                                    isNewPin && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      "span",
                                      {
                                        style: {
                                          background: "#f43f5e20",
                                          color: "#f43f5e",
                                          fontSize: "9px",
                                          fontWeight: "bold",
                                          padding: "1px 5px",
                                          borderRadius: "4px"
                                        },
                                        children: "New Today"
                                      }
                                    ),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      "span",
                                      {
                                        style: {
                                          background: pin.privacy === "public" ? "#22c55e20" : pin.privacy === "family" ? "#7c3aed20" : pin.privacy === "friends" ? "#3b82f620" : "#06b6d420",
                                          color: pin.privacy === "public" ? "#22c55e" : pin.privacy === "family" ? "#a78bfa" : pin.privacy === "friends" ? "#60a5fa" : "#22d3ee",
                                          fontSize: "9px",
                                          padding: "1px 5px",
                                          borderRadius: "4px"
                                        },
                                        children: pin.privacy
                                      }
                                    )
                                  ]
                                }
                              )
                            ] })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          style: {
                            color: "rgba(255,255,255,0.6)",
                            fontSize: "10px",
                            lineHeight: 1.5,
                            margin: 0
                          },
                          children: pin.preview
                        }
                      ),
                      isMatrimonyOrDating && !isSelf && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "8px" }, children: [
                        pin.compatScore !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              marginBottom: "4px"
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  style: {
                                    flex: 1,
                                    height: "4px",
                                    borderRadius: "2px",
                                    background: "rgba(255,255,255,0.1)"
                                  },
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "div",
                                    {
                                      style: {
                                        height: "4px",
                                        borderRadius: "2px",
                                        width: `${pin.compatScore}%`,
                                        background: hex
                                      }
                                    }
                                  )
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "span",
                                {
                                  style: {
                                    color: hex,
                                    fontSize: "9px",
                                    fontWeight: "bold"
                                  },
                                  children: [
                                    pin.compatScore,
                                    "% Match"
                                  ]
                                }
                              )
                            ]
                          }
                        ),
                        pin.ageRange && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "p",
                          {
                            style: {
                              color: "rgba(255,255,255,0.4)",
                              fontSize: "9px",
                              margin: "2px 0"
                            },
                            children: [
                              "Age range: ",
                              pin.ageRange
                            ]
                          }
                        ),
                        pin.relationshipGoal && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "p",
                          {
                            style: {
                              color: "rgba(255,255,255,0.4)",
                              fontSize: "9px",
                              margin: "2px 0"
                            },
                            children: [
                              "Goal: ",
                              pin.relationshipGoal
                            ]
                          }
                        ),
                        shareBadge && pin.shareLevel && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            style: {
                              display: "inline-block",
                              background: shareBadge.bg,
                              color: shareBadge.color,
                              fontSize: "9px",
                              padding: "1px 5px",
                              borderRadius: "4px",
                              marginTop: "4px"
                            },
                            children: SHARE_LEVEL_LABELS[pin.shareLevel]
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          style: {
                            color: "rgba(255,255,255,0.35)",
                            fontSize: "9px",
                            marginTop: "6px",
                            marginBottom: 0
                          },
                          children: pin.timestamp
                        }
                      )
                    ]
                  }
                );
              })(),
              layersPanelOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "absolute top-3 left-3 z-[1000] rounded-xl border shadow-elevated overflow-hidden",
                  style: {
                    background: "oklch(var(--card))",
                    borderColor: "oklch(var(--border))",
                    width: "210px"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex items-center justify-between px-3 py-2.5 border-b",
                        style: {
                          background: "oklch(var(--sidebar))",
                          borderColor: "oklch(var(--sidebar-border))"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Layers,
                              {
                                size: 13,
                                style: { color: "oklch(var(--sidebar-foreground))" }
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label font-bold text-sidebar-foreground", children: "Map Layers" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => setLayersPanelOpen(false),
                              className: "text-sidebar-foreground/40 hover:text-sidebar-foreground transition-colors",
                              "aria-label": "Close layers panel",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 13 })
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-1.5 px-2 space-y-0.5", children: LAYERS.map((layer) => {
                      const LayerIcon = layer.icon;
                      const isActive = activeLayers.has(layer.id);
                      const hex = LAYER_HEX[layer.id];
                      const isMatchLayer = layer.id === "matrimony" || layer.id === "dating";
                      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            type: "button",
                            onClick: () => toggleLayer(layer.id),
                            className: "w-full flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-xs font-label transition-colors hover:bg-secondary/50",
                            style: { opacity: isActive ? 1 : 0.45 },
                            "data-ocid": `geomap.layer.${layer.id}.toggle`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  className: "w-3 h-3 rounded-full shrink-0",
                                  style: { background: hex }
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                LayerIcon,
                                {
                                  size: 11,
                                  className: "text-foreground/70 shrink-0"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: layer.label }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  className: "ml-auto w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-all",
                                  style: {
                                    borderColor: isActive ? hex : "oklch(var(--border))",
                                    background: isActive ? `${hex}20` : "transparent"
                                  },
                                  children: isActive && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "div",
                                    {
                                      className: "w-2 h-2 rounded-sm",
                                      style: { background: hex }
                                    }
                                  )
                                }
                              )
                            ]
                          }
                        ),
                        isMatchLayer && isActive && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            type: "button",
                            className: "w-full text-left px-2 pb-1 text-[9px] font-label transition-colors hover:opacity-80",
                            style: { color: hex, paddingLeft: "32px" },
                            onClick: () => setShareSettingsOpen(
                              layer.id === "matrimony" ? "matrimony" : "dating"
                            ),
                            children: [
                              "Visibility:",
                              " ",
                              SHARE_LEVEL_LABELS[layer.id === "matrimony" ? matrimonyShareLevel : datingShareLevel],
                              " ",
                              "(tap to change)"
                            ]
                          }
                        )
                      ] }, layer.id);
                    }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-2 border-t border-border text-[10px] text-muted-foreground font-label", children: [
                      filteredPins.length,
                      " pins visible"
                    ] })
                  ]
                }
              ),
              !layersPanelOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setLayersPanelOpen(true),
                  className: "absolute top-3 left-3 z-[1000] w-9 h-9 rounded-xl bg-card border border-border shadow-elevated flex items-center justify-center hover:bg-secondary transition-colors",
                  "aria-label": "Open layers panel",
                  "data-ocid": "geomap.layers_open.button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { size: 15, className: "text-foreground/70" })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open: dailyMatchesOpen, onOpenChange: setDailyMatchesOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          SheetContent,
          {
            side: "right",
            className: "w-full sm:max-w-md overflow-y-auto",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SheetHeader, { className: "mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetTitle, { className: "font-display flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 18, style: { color: "#f43f5e" } }),
                "Daily Matches"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "matrimony", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "w-full mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    TabsTrigger,
                    {
                      value: "matrimony",
                      className: "flex-1 font-label text-xs",
                      children: [
                        "Matrimony (",
                        newMatrimonyPins.length,
                        ")"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "dating", className: "flex-1 font-label text-xs", children: [
                    "Dating (",
                    newDatingPins.length,
                    ")"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "matrimony", className: "space-y-3", children: newMatrimonyPins.sort((a, b) => (b.compatScore ?? 0) - (a.compatScore ?? 0)).map((pin) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "bg-card border border-border rounded-xl p-4",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label font-semibold text-sm text-foreground", children: pin.name }),
                        pin.compatScore !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "span",
                          {
                            className: "text-xs font-bold px-2 py-0.5 rounded-full",
                            style: { background: "#f43f5e20", color: "#f43f5e" },
                            children: [
                              pin.compatScore,
                              "% Match"
                            ]
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: pin.preview }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[10px]", children: "New Today" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: pin.ageRange && `Age: ${pin.ageRange}` })
                      ] })
                    ]
                  },
                  pin.id
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "dating", className: "space-y-3", children: newDatingPins.sort((a, b) => (b.compatScore ?? 0) - (a.compatScore ?? 0)).map((pin) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "bg-card border border-border rounded-xl p-4",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label font-semibold text-sm text-foreground", children: pin.name }),
                        pin.compatScore !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "span",
                          {
                            className: "text-xs font-bold px-2 py-0.5 rounded-full",
                            style: { background: "#8b5cf620", color: "#8b5cf6" },
                            children: [
                              pin.compatScore,
                              "% Match"
                            ]
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: pin.preview }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[10px]", children: "New Today" }),
                        pin.relationshipGoal && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground", children: [
                          "Goal: ",
                          pin.relationshipGoal
                        ] })
                      ] })
                    ]
                  },
                  pin.id
                )) })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open: filtersOpen, onOpenChange: setFiltersOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          SheetContent,
          {
            side: "left",
            className: "w-full sm:max-w-sm overflow-y-auto",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SheetHeader, { className: "mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetTitle, { className: "font-display flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { size: 16 }),
                "Map Filters"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "matrimony", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "w-full mb-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    TabsTrigger,
                    {
                      value: "matrimony",
                      className: "flex-1 font-label text-xs",
                      children: "Matrimony"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "dating", className: "flex-1 font-label text-xs", children: "Dating" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "matrimony", className: "space-y-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label", children: "Age Range" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Slider,
                      {
                        value: matrimonyFilters.ageRange,
                        onValueChange: (v) => setMatrimonyFilters((p) => ({
                          ...p,
                          ageRange: v
                        })),
                        min: 18,
                        max: 60,
                        step: 1
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                      matrimonyFilters.ageRange[0],
                      " –",
                      " ",
                      matrimonyFilters.ageRange[1],
                      " years"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label", children: "Horoscope" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Select,
                      {
                        value: matrimonyFilters.horoscope,
                        onValueChange: (v) => setMatrimonyFilters((p) => ({ ...p, horoscope: v })),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 text-xs font-label", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: HOROSCOPE_SIGNS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label", children: "Living Standard" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Select,
                      {
                        value: matrimonyFilters.livingStandard,
                        onValueChange: (v) => setMatrimonyFilters((p) => ({ ...p, livingStandard: v })),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 text-xs font-label", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "any", children: "Any" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "middle", children: "Middle Class" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "upper-middle", children: "Upper Middle" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "upper", children: "Upper Class" })
                          ] })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "outline",
                      size: "sm",
                      className: "w-full text-xs font-label",
                      onClick: () => setMatrimonyFilters(DEFAULT_MATRIMONY_FILTERS),
                      children: "Reset Matrimony Filters"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "dating", className: "space-y-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label", children: "Age Range" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Slider,
                      {
                        value: datingFilters.ageRange,
                        onValueChange: (v) => setDatingFilters((p) => ({
                          ...p,
                          ageRange: v
                        })),
                        min: 18,
                        max: 60,
                        step: 1
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                      datingFilters.ageRange[0],
                      " – ",
                      datingFilters.ageRange[1],
                      " ",
                      "years"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label", children: "Relationship Goal" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Select,
                      {
                        value: datingFilters.relationshipGoal,
                        onValueChange: (v) => setDatingFilters((p) => ({ ...p, relationshipGoal: v })),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 text-xs font-label", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "any", children: "Any" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Serious Relationship", children: "Serious Relationship" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Marriage", children: "Marriage" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Friendship First", children: "Friendship First" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Casual Dating", children: "Casual Dating" })
                          ] })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label", children: "Habits" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: DATING_HABITS.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => toggleDatingHabit(h),
                        className: "text-[10px] font-label px-2 py-1 rounded-full transition-all border",
                        style: datingFilters.habits.includes(h) ? {
                          background: "oklch(0.55 0.22 280 / 0.2)",
                          borderColor: "oklch(0.55 0.22 280)",
                          color: "oklch(0.55 0.22 280)"
                        } : {
                          background: "transparent",
                          borderColor: "oklch(var(--border))",
                          color: "oklch(var(--muted-foreground))"
                        },
                        children: h
                      },
                      h
                    )) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "outline",
                      size: "sm",
                      className: "w-full text-xs font-label",
                      onClick: () => setDatingFilters(DEFAULT_DATING_FILTERS),
                      children: "Reset Dating Filters"
                    }
                  )
                ] })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: locationDialogOpen, onOpenChange: setLocationDialogOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display", children: "Set Your Location" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Choose how precisely to share your location for better matches. Your exact address is never shared." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label", children: "Location Precision" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: locationPrecision,
                  onValueChange: setLocationPrecision,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 text-xs font-label", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "city", children: "City only (e.g. Lahore)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "district", children: "District (e.g. DHA, Gulberg)" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "neighborhood", children: "Neighborhood (e.g. DHA Phase 5)" })
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "w-full font-label",
                onClick: () => {
                  setLocationDialogOpen(false);
                  setLocationPromptDismissed(true);
                },
                children: "Save Location Precision"
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 px-4 pb-4 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold font-display", children: "Registered Locations" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": "geomap.business_pins.section",
                className: "bg-card border border-border rounded-xl p-4 space-y-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 15, style: { color: "oklch(0.55 0.22 280)" } }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label font-semibold", children: "Business Locations" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "ml-auto text-[10px]", children: SEED_BUSINESS_PINS.length })
                  ] }),
                  SEED_BUSINESS_PINS.map((pin, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-2.5 p-2 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors",
                      "data-ocid": `geomap.business_pins.item.${i + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0",
                            style: { background: "oklch(0.55 0.22 280 / 0.15)" },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Building2,
                              {
                                size: 13,
                                style: { color: "oklch(0.55 0.22 280)" }
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold truncate", children: pin.name }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: pin.city })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[9px] shrink-0", children: pin.type })
                      ]
                    },
                    pin.id
                  ))
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": "geomap.community_pins.section",
                className: "bg-card border border-border rounded-xl p-4 space-y-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(House, { size: 15, style: { color: "oklch(0.55 0.18 185)" } }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label font-semibold", children: "Community Locations" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "ml-auto text-[10px]", children: SEED_COMMUNITY_PINS.length })
                  ] }),
                  SEED_COMMUNITY_PINS.map((pin, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-2.5 p-2 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors",
                      "data-ocid": `geomap.community_pins.item.${i + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0",
                            style: { background: "oklch(0.55 0.18 185 / 0.15)" },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(House, { size: 13, style: { color: "oklch(0.55 0.18 185)" } })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold truncate", children: pin.name }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: pin.city })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[9px] shrink-0", children: pin.type })
                      ]
                    },
                    pin.id
                  ))
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Dialog,
          {
            open: shareSettingsOpen !== null,
            onOpenChange: () => setShareSettingsOpen(null),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "font-display", children: [
                shareSettingsOpen === "matrimony" ? "Matrimony" : "Dating",
                " ",
                "Visibility"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 mt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Control how much of your profile other users can see when they click your pin on the map." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label", children: "Share Level" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Select,
                    {
                      value: shareSettingsOpen === "matrimony" ? matrimonyShareLevel : datingShareLevel,
                      onValueChange: (v) => {
                        if (shareSettingsOpen === "matrimony")
                          setMatrimonyShareLevel(v);
                        else setDatingShareLevel(v);
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9 text-xs font-label", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "hidden", children: "Hidden — not visible on map" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "nickname", children: "Nickname Only" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "basic", children: "Basic Profile (age, city, profession)" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "full", children: "Full Profile" })
                        ] })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    className: "w-full font-label",
                    onClick: () => setShareSettingsOpen(null),
                    children: "Save Settings"
                  }
                )
              ] })
            ] })
          }
        )
      ]
    }
  );
}
export {
  GeoMapPage as default
};
