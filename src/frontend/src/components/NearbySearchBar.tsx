import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Ban,
  Camera,
  Clock,
  ExternalLink,
  MapPin,
  Package,
  Search,
  ShieldCheck,
  Store,
  User,
  UserCheck,
  X,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import {
  broadcastToVendors,
  getApproaches,
  isVendorApproachEnabled,
  respondToApproach,
  setVendorApproachEnabled,
} from "../stores/vendorMatchStore";
import { getGlobalProducts } from "../utils/globalProductsState";

// ─── Types ────────────────────────────────────────────────────────────────────

interface OpenFoodProduct {
  id: string;
  name: string;
  brand?: string;
  source: "external";
}

interface NominatimPlace {
  place_id: number;
  display_name: string;
  lat: string;
  lon: string;
  type: string;
  address?: { country?: string; city?: string; state?: string };
  source: "external";
  distKm?: number;
}

interface GitHubUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  source: "github";
}

interface LocalUser {
  id: string;
  name: string;
  avatar: string;
  source: "local";
  privacyLevel?: string;
}

// ─── Seed data (fallback) ────────────────────────────────────────────────────

const SEED_USERS = [
  {
    id: 1,
    name: "Priya Sharma",
    distance: "0.3 km",
    lastSeen: "2 days ago",
    avatar: "PS",
  },
  {
    id: 2,
    name: "Rahul Verma",
    distance: "0.7 km",
    lastSeen: "1 week ago",
    avatar: "RV",
  },
  {
    id: 3,
    name: "Anita Patel",
    distance: "1.2 km",
    lastSeen: "3 weeks ago",
    avatar: "AP",
  },
  {
    id: 4,
    name: "Vikram Singh",
    distance: "0.9 km",
    lastSeen: "5 days ago",
    avatar: "VS",
  },
];

const SEED_PLACES = [
  { id: 1, name: "City Park", type: "Park", dist: "0.5 km", icon: "🌳" },
  {
    id: 2,
    name: "Spice Garden Restaurant",
    type: "Restaurant",
    dist: "0.7 km",
    icon: "🍽️",
  },
  { id: 3, name: "Sunrise Market", type: "Market", dist: "1.0 km", icon: "🛒" },
  {
    id: 4,
    name: "City Hospital",
    type: "Healthcare",
    dist: "1.3 km",
    icon: "🏥",
  },
  { id: 5, name: "Lotus Temple", type: "Temple", dist: "0.9 km", icon: "🛕" },
];

const IMAGE_CATEGORIES = [
  "Electronics",
  "Fashion",
  "Food",
  "Home",
  "Healthcare",
  "Books",
  "Vehicles",
  "Services",
];

const AVATAR_COLORS = [
  { bg: "oklch(0.55 0.22 280 / 0.15)", text: "oklch(0.50 0.20 280)" },
  { bg: "oklch(0.60 0.20 190 / 0.15)", text: "oklch(0.45 0.18 190)" },
  { bg: "oklch(0.62 0.20 150 / 0.15)", text: "oklch(0.45 0.18 150)" },
  { bg: "oklch(0.60 0.20 30 / 0.15)", text: "oklch(0.45 0.18 30)" },
  { bg: "oklch(0.60 0.20 320 / 0.15)", text: "oklch(0.45 0.18 320)" },
];

const FACE_RESULTS_DATA = [
  { id: 1, name: "Amit Sharma", similarity: 94, isPublic: true, avatar: "AS" },
  { id: 2, name: "Priya Mehta", similarity: 89, isPublic: true, avatar: "PM" },
  {
    id: 3,
    name: "Rajesh Kumar",
    similarity: 86,
    isPublic: false,
    avatar: "RK",
  },
  { id: 4, name: "Sunita Verma", similarity: 82, isPublic: true, avatar: "SV" },
];

const RECENT_KEY = "ic_recent_searches";
const PLACES_CACHE_PREFIX = "ic_places_search_";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function haversineKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function getRecentSearches(): string[] {
  try {
    return JSON.parse(localStorage.getItem(RECENT_KEY) || "[]") as string[];
  } catch {
    return [];
  }
}

function saveRecentSearch(q: string) {
  if (!q.trim()) return;
  const prev = getRecentSearches();
  const updated = [q, ...prev.filter((s) => s !== q)].slice(0, 5);
  localStorage.setItem(RECENT_KEY, JSON.stringify(updated));
}

function getPlacesCache(keyword: string): NominatimPlace[] | null {
  try {
    const raw = localStorage.getItem(
      `${PLACES_CACHE_PREFIX}${keyword.toLowerCase()}`,
    );
    return raw ? (JSON.parse(raw) as NominatimPlace[]) : null;
  } catch {
    return null;
  }
}

function setPlacesCache(keyword: string, data: NominatimPlace[]) {
  localStorage.setItem(
    `${PLACES_CACHE_PREFIX}${keyword.toLowerCase()}`,
    JSON.stringify(data),
  );
}

function placeTypeIcon(type: string): string {
  const t = type.toLowerCase();
  if (t.includes("restaurant") || t.includes("food") || t.includes("cafe"))
    return "🍽️";
  if (t.includes("hospital") || t.includes("clinic") || t.includes("pharmacy"))
    return "🏥";
  if (t.includes("park") || t.includes("garden")) return "🌳";
  if (t.includes("temple") || t.includes("mosque") || t.includes("church"))
    return "⛪";
  if (t.includes("school") || t.includes("college") || t.includes("university"))
    return "🏫";
  if (t.includes("market") || t.includes("shop") || t.includes("store"))
    return "🛒";
  if (t.includes("hotel") || t.includes("lodg")) return "🏨";
  return "📍";
}

// ─── Loading skeleton ────────────────────────────────────────────────────────

function CardSkeleton({ n = 3 }: { n?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: n }).map((_, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: skeleton has no stable id
        <div key={`skel_${i}`} className="flex items-center gap-2">
          <Skeleton className="w-7 h-7 rounded-full shrink-0" />
          <div className="flex-1 space-y-1">
            <Skeleton className="h-3 w-3/4" />
            <Skeleton className="h-2.5 w-1/2" />
          </div>
          <Skeleton className="h-5 w-12 rounded-full" />
        </div>
      ))}
    </div>
  );
}

// ─── Source Badge ─────────────────────────────────────────────────────────────

function SourceBadge({ label }: { label: string }) {
  return (
    <span
      className="text-[9px] px-1.5 py-0.5 rounded-full border font-medium shrink-0"
      style={{
        background: "oklch(0.60 0.18 200 / 0.12)",
        color: "oklch(0.45 0.16 200)",
        borderColor: "oklch(0.60 0.18 200 / 0.25)",
      }}
    >
      {label}
    </span>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function NearbySearchBar() {
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("products");
  const [avoidedPeople, setAvoidedPeople] = useState<number[]>([]);
  const [avoidedPlaces, setAvoidedPlaces] = useState<number[]>([]);
  const [keptPeople, setKeptPeople] = useState<number[]>([]);
  const [softNudgeCount, setSoftNudgeCount] = useState(0);

  // Recent searches
  const [recentSearches, setRecentSearches] =
    useState<string[]>(getRecentSearches);

  // Products state
  const [externalProducts, setExternalProducts] = useState<OpenFoodProduct[]>(
    [],
  );
  const [productsLoading, setProductsLoading] = useState(false);

  // Places state
  const [externalPlaces, setExternalPlaces] = useState<NominatimPlace[]>([]);
  const [placesLoading, setPlacesLoading] = useState(false);
  const [userLatLon, setUserLatLon] = useState<{
    lat: number;
    lon: number;
  } | null>(null);

  // People state
  const [githubUsers, setGithubUsers] = useState<GitHubUser[]>([]);
  const [localUsers, setLocalUsers] = useState<LocalUser[]>([]);
  const [peopleLoading, setPeopleLoading] = useState(false);

  // Image / face search
  const ref = useRef<HTMLDivElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [_imageSearchCategory, setImageSearchCategory] = useState<
    string | null
  >(null);
  const [imageName, setImageName] = useState<string | null>(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [faceSearchFile, setFaceSearchFile] = useState<string | null>(null);
  const [faceSearching, setFaceSearching] = useState(false);
  const [faceResults, setFaceResults] = useState<Array<{
    id: number;
    name: string;
    similarity: number;
    isPublic: boolean;
    avatar: string;
  }> | null>(null);
  const faceInputRef = useRef<HTMLInputElement>(null);
  const faceTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const faceObjectUrlRef = useRef<string | null>(null);

  // Vendor approach state
  const [vendorApproachOn, setVendorApproachOn] = useState(
    isVendorApproachEnabled,
  );
  const [approachRequests, setApproachRequests] = useState(() =>
    getApproaches().filter((a) => a.status === "pending"),
  );

  // Debounce refs
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Acquire geolocation once ─────────────────────────────────────────────

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        setUserLatLon({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
      () => {}, // silently fail
    );
  }, []);

  // ── Close on outside click ───────────────────────────────────────────────

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setExpanded(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // ── Approach updates ────────────────────────────────────────────────────

  useEffect(() => {
    const handler = () =>
      setApproachRequests(
        getApproaches().filter((a) => a.status === "pending"),
      );
    window.addEventListener("indya_approach_updated", handler);
    return () => window.removeEventListener("indya_approach_updated", handler);
  }, []);

  // ── Cleanup face resources ──────────────────────────────────────────────

  useEffect(() => {
    return () => {
      if (faceTimeoutRef.current) clearTimeout(faceTimeoutRef.current);
      if (faceObjectUrlRef.current)
        URL.revokeObjectURL(faceObjectUrlRef.current);
    };
  }, []);

  // ── API search functions ─────────────────────────────────────────────────

  const searchProducts = useCallback(async (kw: string) => {
    // Always show local results
    const locals = getGlobalProducts().filter(
      (p) =>
        p.status === "active" &&
        (!kw ||
          p.name.toLowerCase().includes(kw) ||
          p.category.toLowerCase().includes(kw)),
    );

    if (!kw) {
      setExternalProducts([]);
      return;
    }

    setProductsLoading(true);
    try {
      const res = await fetch(
        `https://world.openfoodfacts.org/cgi/search.pl?action=process&search_terms=${encodeURIComponent(kw)}&json=true&page_size=10`,
      );
      if (!res.ok) throw new Error("OFF API error");
      const data = (await res.json()) as {
        products?: Array<{
          code: string;
          product_name?: string;
          brands?: string;
        }>;
      };
      const items: OpenFoodProduct[] = (data.products || [])
        .filter((p) => p.product_name)
        .slice(0, 8)
        .map((p) => ({
          id: p.code || `off_${Math.random()}`,
          name: p.product_name!,
          brand: p.brands,
          source: "external" as const,
        }));
      setExternalProducts(items);
    } catch {
      setExternalProducts([]);
    } finally {
      setProductsLoading(false);
    }

    return locals;
  }, []);

  const searchPlaces = useCallback(
    async (kw: string) => {
      if (!kw) {
        setExternalPlaces([]);
        return;
      }

      // Cache hit
      const cached = getPlacesCache(kw);
      if (cached) {
        setExternalPlaces(cached);
        return;
      }

      setPlacesLoading(true);
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(kw)}&format=json&limit=12&addressdetails=1`,
          { headers: { "Accept-Language": "en" } },
        );
        if (!res.ok) throw new Error("Nominatim error");
        const data = (await res.json()) as Array<{
          place_id: number;
          display_name: string;
          lat: string;
          lon: string;
          type: string;
          address?: { country?: string; city?: string; state?: string };
        }>;
        const places: NominatimPlace[] = data.slice(0, 12).map((p) => {
          const distKm = userLatLon
            ? haversineKm(
                userLatLon.lat,
                userLatLon.lon,
                Number.parseFloat(p.lat),
                Number.parseFloat(p.lon),
              )
            : undefined;
          return { ...p, source: "external" as const, distKm };
        });
        setExternalPlaces(places);
        setPlacesCache(kw, places);
      } catch {
        setExternalPlaces([]);
      } finally {
        setPlacesLoading(false);
      }
    },
    [userLatLon],
  );

  const searchPeople = useCallback(async (kw: string) => {
    // Local users (privacy-filtered)
    try {
      const stored = JSON.parse(
        localStorage.getItem("ic_users") || "[]",
      ) as LocalUser[];
      const filtered = stored.filter(
        (u) =>
          u.privacyLevel !== "private" &&
          (!kw || u.name?.toLowerCase().includes(kw)),
      );
      setLocalUsers(filtered);
    } catch {
      setLocalUsers([]);
    }

    if (!kw) {
      setGithubUsers([]);
      return;
    }

    setPeopleLoading(true);
    try {
      const res = await fetch(
        `https://api.github.com/search/users?q=${encodeURIComponent(kw)}&per_page=12`,
      );
      if (!res.ok) throw new Error("GitHub API error");
      const data = (await res.json()) as { items?: GitHubUser[] };
      setGithubUsers(
        (data.items || [])
          .slice(0, 12)
          .map((u) => ({ ...u, source: "github" as const })),
      );
    } catch {
      setGithubUsers([]);
    } finally {
      setPeopleLoading(false);
    }
  }, []);

  // ── Debounced search trigger ─────────────────────────────────────────────

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    const kw = query.trim().toLowerCase();

    debounceRef.current = setTimeout(() => {
      if (activeTab === "products") searchProducts(kw);
      else if (activeTab === "places") searchPlaces(kw);
      else if (activeTab === "people") searchPeople(kw);
    }, 400);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query, activeTab, searchProducts, searchPlaces, searchPeople]);

  // ── Run search when tab switches ─────────────────────────────────────────

  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally only run on tab change
  useEffect(() => {
    const kw = query.trim().toLowerCase();
    if (activeTab === "products") searchProducts(kw);
    else if (activeTab === "places") searchPlaces(kw);
    else if (activeTab === "people") searchPeople(kw);
  }, [activeTab]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Local filtered data ───────────────────────────────────────────────────

  const q = query.trim().toLowerCase();

  const localProducts = getGlobalProducts().filter(
    (p) =>
      p.status === "active" &&
      (!q ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)),
  );

  const filteredSeedPlaces = SEED_PLACES.filter(
    (p) =>
      !avoidedPlaces.includes(p.id) &&
      (!q ||
        p.name.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q)),
  );

  const filteredSeedPeople = SEED_USERS.filter(
    (u) =>
      !avoidedPeople.includes(u.id) && (!q || u.name.toLowerCase().includes(q)),
  );

  const totalProductCount = localProducts.length + externalProducts.length;
  const totalPlaceCount = filteredSeedPlaces.length + externalPlaces.length;
  const totalPeopleCount =
    filteredSeedPeople.length + githubUsers.length + localUsers.length;

  // ── Handlers ─────────────────────────────────────────────────────────────

  function handleAvoidPerson(id: number, name: string) {
    setAvoidedPeople((prev) => [...prev, id]);
    setSoftNudgeCount((c) => c + 1);
    toast.info(`${name} hidden from suggestions`);
  }

  function handleAvoidPlace(id: number, name: string) {
    setAvoidedPlaces((prev) => [...prev, id]);
    toast.info(`"${name}" removed from suggestions`);
  }

  function handleKeepPerson(id: number, name: string) {
    setKeptPeople((prev) => [...prev, id]);
    toast.success(`Connection request sent to ${name}`);
  }

  const handleSearchSubmit = () => {
    if (!query.trim()) return;
    saveRecentSearch(query.trim());
    setRecentSearches(getRecentSearches());

    const avoidNames = avoidedPlaces.map(
      (id) => SEED_PLACES.find((p) => p.id === id)?.name || "",
    );
    const count = broadcastToVendors(query, avoidNames);
    if (count > 0) {
      toast.success(
        `🏪 ${count} vendor${count > 1 ? "s" : ""} notified about "${query}"`,
      );
    }

    // Immediately trigger external search
    const kw = query.trim().toLowerCase();
    if (activeTab === "products") searchProducts(kw);
    else if (activeTab === "places") searchPlaces(kw);
    else if (activeTab === "people") searchPeople(kw);
  };

  const handleRecentClick = (recent: string) => {
    setQuery(recent);
    setExpanded(true);
    // Searches will trigger via debounce effect on query change
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }
    setImageName(file.name);
    setShowImageModal(true);
    setExpanded(true);
    e.target.value = "";
  };

  const handleImageCategory = (cat: string) => {
    setImageSearchCategory(cat);
    setShowImageModal(false);
    setQuery(cat.toLowerCase());
    setActiveTab("products");
    toast.success(`Searching for ${cat} products`);
    const avoidNames = avoidedPlaces.map(
      (id) => SEED_PLACES.find((p) => p.id === id)?.name || "",
    );
    const count = broadcastToVendors(cat, avoidNames);
    if (count > 0) {
      toast.success(
        `🏪 ${count} vendor${count > 1 ? "s" : ""} notified — they may approach you`,
      );
    }
  };

  const handleFaceSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image");
      return;
    }
    if (faceObjectUrlRef.current) URL.revokeObjectURL(faceObjectUrlRef.current);
    const objectUrl = URL.createObjectURL(file);
    faceObjectUrlRef.current = objectUrl;
    setFaceSearchFile(objectUrl);
    setFaceSearching(true);
    setFaceResults(null);
    setActiveTab("face");
    setExpanded(true);
    if (faceTimeoutRef.current) clearTimeout(faceTimeoutRef.current);
    faceTimeoutRef.current = setTimeout(() => {
      setFaceSearching(false);
      setFaceResults(FACE_RESULTS_DATA);
    }, 2000);
    e.target.value = "";
  };

  const handleToggleVendorApproach = () => {
    const next = !vendorApproachOn;
    setVendorApproachEnabled(next);
    setVendorApproachOn(next);
    toast.info(
      next ? "Vendors can now approach you" : "Vendor approach disabled",
    );
  };

  const handleAcceptApproach = (id: string, vendorName: string) => {
    respondToApproach(id, true);
    setApproachRequests((prev) => prev.filter((a) => a.id !== id));
    toast.success(`You've connected with ${vendorName}`);
  };

  const handleDeclineApproach = (id: string) => {
    respondToApproach(id, false);
    setApproachRequests((prev) => prev.filter((a) => a.id !== id));
  };

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <div
      ref={ref}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-300"
      style={{ width: expanded ? "min(580px, 96vw)" : "min(280px, 80vw)" }}
      data-ocid="nearby.panel"
    >
      <div
        className="rounded-2xl border shadow-2xl overflow-hidden"
        style={{
          background: "oklch(var(--card))",
          borderColor: expanded
            ? "oklch(0.55 0.22 280 / 0.4)"
            : "oklch(var(--border))",
          transition: "border-color 0.2s",
        }}
      >
        {/* Search pill */}
        <div className="relative flex items-center gap-2 px-4 py-3">
          <MapPin size={14} className="text-primary shrink-0" />
          <Input
            placeholder={
              expanded
                ? "Search products, places, people..."
                : "Search nearby..."
            }
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setExpanded(true)}
            onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
            className="border-0 bg-transparent p-0 h-auto focus-visible:ring-0 text-sm placeholder:text-muted-foreground/60"
            data-ocid="nearby.search_input"
          />

          {/* Vendor approach toggle */}
          <Button
            size="sm"
            variant={vendorApproachOn ? "default" : "ghost"}
            className="h-7 px-2 text-[10px] gap-1 shrink-0"
            title={
              vendorApproachOn
                ? "Vendors can approach you"
                : "Vendor approach OFF"
            }
            onClick={handleToggleVendorApproach}
            data-ocid="nearby.toggle"
          >
            <Store size={10} />
            {vendorApproachOn ? "Open" : "Closed"}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 p-0 shrink-0 text-muted-foreground hover:text-primary"
            title="Image search"
            onClick={() => imageInputRef.current?.click()}
            data-ocid="nearby.upload_button"
          >
            <Camera size={13} />
          </Button>
          <input
            ref={imageInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageSelect}
            data-ocid="nearby.dropzone"
          />
          {expanded ? (
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 p-0 shrink-0"
              onClick={() => {
                setExpanded(false);
                setQuery("");
                setImageSearchCategory(null);
                setExternalProducts([]);
                setExternalPlaces([]);
                setGithubUsers([]);
              }}
              data-ocid="nearby.close_button"
            >
              <X size={13} />
            </Button>
          ) : (
            <Search size={13} className="text-muted-foreground shrink-0" />
          )}

          {/* Image Search Category Modal */}
          {showImageModal && (
            <div className="absolute bottom-full left-0 right-0 mb-2 bg-card border border-border rounded-xl shadow-xl p-3 z-50">
              <p className="text-[11px] font-semibold text-foreground mb-1">
                📷 {imageName ? `"${imageName.slice(0, 20)}"` : "Image"} — What
                are you searching for?
              </p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {IMAGE_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleImageCategory(cat)}
                    className="text-[10px] px-2 py-1 rounded-full border border-border hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
                    data-ocid="nearby.toggle"
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setShowImageModal(false)}
                className="mt-2 text-[10px] text-muted-foreground hover:text-foreground"
                data-ocid="nearby.close_button"
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        {/* Recent searches */}
        {expanded && recentSearches.length > 0 && !query && (
          <div
            className="px-4 pb-2 flex flex-wrap gap-1.5 border-b"
            style={{ borderColor: "oklch(var(--border))" }}
          >
            <span className="text-[10px] text-muted-foreground flex items-center gap-0.5 mr-1">
              <Clock size={9} /> Recent:
            </span>
            {recentSearches.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => handleRecentClick(s)}
                className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Expanded tabs */}
        {expanded && (
          <div
            className="border-t"
            style={{ borderColor: "oklch(var(--border))" }}
          >
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList
                className="w-full rounded-none border-b bg-transparent px-2 h-9"
                style={{ borderColor: "oklch(var(--border))" }}
              >
                <TabsTrigger
                  value="products"
                  className="flex-1 text-[11px] h-7 data-[state=active]:bg-primary/10 data-[state=active]:text-primary rounded"
                  data-ocid="nearby.products.tab"
                >
                  <Package size={11} className="mr-1" />
                  Products
                  {totalProductCount > 0 && (
                    <Badge
                      className="ml-1 h-4 px-1 text-[9px]"
                      style={{
                        background: "oklch(0.55 0.22 280 / 0.15)",
                        color: "oklch(0.55 0.22 280)",
                      }}
                    >
                      {totalProductCount}
                    </Badge>
                  )}
                </TabsTrigger>
                <TabsTrigger
                  value="places"
                  className="flex-1 text-[11px] h-7 data-[state=active]:bg-primary/10 data-[state=active]:text-primary rounded"
                  data-ocid="nearby.places.tab"
                >
                  <Store size={11} className="mr-1" />
                  Places
                  {totalPlaceCount > 0 && (
                    <Badge
                      className="ml-1 h-4 px-1 text-[9px]"
                      style={{
                        background: "oklch(0.60 0.20 190 / 0.15)",
                        color: "oklch(0.50 0.18 190)",
                      }}
                    >
                      {totalPlaceCount}
                    </Badge>
                  )}
                </TabsTrigger>
                <TabsTrigger
                  value="people"
                  className="flex-1 text-[11px] h-7 data-[state=active]:bg-primary/10 data-[state=active]:text-primary rounded"
                  data-ocid="nearby.people.tab"
                >
                  <User size={11} className="mr-1" />
                  People
                  {totalPeopleCount + softNudgeCount > 0 && (
                    <Badge
                      className="ml-1 h-4 px-1 text-[9px]"
                      style={{
                        background: "oklch(0.62 0.20 150 / 0.15)",
                        color: "oklch(0.50 0.18 150)",
                      }}
                    >
                      {totalPeopleCount + softNudgeCount}
                    </Badge>
                  )}
                </TabsTrigger>
                <TabsTrigger
                  value="approaches"
                  className="flex-1 text-[11px] h-7 data-[state=active]:bg-primary/10 data-[state=active]:text-primary rounded"
                  data-ocid="nearby.approaches.tab"
                >
                  🤝
                  {approachRequests.length > 0 && (
                    <Badge
                      className="ml-1 h-4 px-1 text-[9px]"
                      style={{
                        background: "oklch(0.60 0.22 30 / 0.2)",
                        color: "oklch(0.45 0.20 30)",
                      }}
                    >
                      {approachRequests.length}
                    </Badge>
                  )}
                </TabsTrigger>
                <TabsTrigger
                  value="face"
                  className="flex-1 text-[11px] h-7 data-[state=active]:bg-primary/10 data-[state=active]:text-primary rounded"
                  data-ocid="nearby.face.tab"
                >
                  👤 Face
                </TabsTrigger>
              </TabsList>

              {/* ── Products Tab ─────────────────────────────────────────── */}
              <TabsContent value="products" className="m-0">
                <div className="px-4 py-3 max-h-72 overflow-y-auto space-y-3">
                  {/* Local products */}
                  {localProducts.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                        <MapPin size={9} /> IndyaCentral
                      </p>
                      {localProducts.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between gap-2"
                        >
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-foreground truncate">
                              {item.name}
                            </p>
                            <p className="text-[10px] text-muted-foreground">
                              {item.businessName || item.seller || "—"} ·{" "}
                              {item.category}
                            </p>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <Badge variant="secondary" className="text-[10px]">
                              ₹{item.price.toLocaleString("en-IN")}
                            </Badge>
                            <SourceBadge label="👤 IndyaCentral" />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Loading skeleton */}
                  {productsLoading && (
                    <div data-ocid="nearby.products.loading_state">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        🌐 OpenFoodFacts
                      </p>
                      <CardSkeleton n={4} />
                    </div>
                  )}

                  {/* External products */}
                  {!productsLoading && externalProducts.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                        🌐 OpenFoodFacts
                      </p>
                      {externalProducts.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between gap-2"
                        >
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-foreground truncate">
                              {item.name}
                            </p>
                            {item.brand && (
                              <p className="text-[10px] text-muted-foreground truncate">
                                {item.brand}
                              </p>
                            )}
                          </div>
                          <SourceBadge label="🌐 OpenFoodFacts" />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Empty state */}
                  {!productsLoading &&
                    localProducts.length === 0 &&
                    externalProducts.length === 0 && (
                      <p className="text-xs text-muted-foreground text-center py-4">
                        {q
                          ? `No products found for "${q}"`
                          : "Search for products above"}
                      </p>
                    )}
                </div>
              </TabsContent>

              {/* ── Places Tab ───────────────────────────────────────────── */}
              <TabsContent value="places" className="m-0">
                <div className="px-4 py-3 max-h-72 overflow-y-auto space-y-3">
                  {/* Seed places */}
                  {filteredSeedPlaces.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                        📍 Local
                      </p>
                      {filteredSeedPlaces.map((place) => (
                        <div key={place.id} className="flex items-center gap-2">
                          <span className="text-base shrink-0">
                            {place.icon}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-foreground truncate">
                              {place.name}
                            </p>
                            <p className="text-[10px] text-muted-foreground">
                              {place.type} · {place.dist}
                            </p>
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive shrink-0"
                            title={`Avoid ${place.name}`}
                            onClick={() =>
                              handleAvoidPlace(place.id, place.name)
                            }
                            data-ocid="nearby.place.delete_button"
                          >
                            <Ban size={11} />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Loading skeleton */}
                  {placesLoading && (
                    <div data-ocid="nearby.places.loading_state">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        🌐 OpenStreetMap
                      </p>
                      <CardSkeleton n={4} />
                    </div>
                  )}

                  {/* External places */}
                  {!placesLoading && externalPlaces.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                        🌐 OpenStreetMap
                      </p>
                      {externalPlaces.map((place) => {
                        const shortName = place.display_name.split(",")[0];
                        const city =
                          place.address?.city || place.address?.state || "";
                        const mapsUrl = `https://www.openstreetmap.org/?mlat=${place.lat}&mlon=${place.lon}#map=16`;
                        return (
                          <div
                            key={place.place_id}
                            className="flex items-center gap-2"
                          >
                            <span className="text-base shrink-0">
                              {placeTypeIcon(place.type)}
                            </span>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold text-foreground truncate">
                                {shortName}
                              </p>
                              <p className="text-[10px] text-muted-foreground truncate">
                                {city}
                                {place.distKm !== undefined
                                  ? ` · ~${place.distKm.toFixed(1)} km`
                                  : ""}
                              </p>
                            </div>
                            <div className="flex items-center gap-1 shrink-0">
                              <SourceBadge label="🌐 OSM" />
                              <a
                                href={mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:opacity-80"
                                title="Open in Maps"
                              >
                                <ExternalLink size={11} />
                              </a>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {!placesLoading &&
                    filteredSeedPlaces.length === 0 &&
                    externalPlaces.length === 0 && (
                      <p className="text-xs text-muted-foreground text-center py-4">
                        {q
                          ? `No places found for "${q}"`
                          : "Search for a location above"}
                      </p>
                    )}
                </div>
              </TabsContent>

              {/* ── People Tab ───────────────────────────────────────────── */}
              <TabsContent value="people" className="m-0">
                <div className="px-4 py-3 max-h-72 overflow-y-auto space-y-3">
                  <p className="text-[10px] text-muted-foreground">
                    People nearby in the last month
                  </p>

                  {/* Seed people */}
                  {filteredSeedPeople.length > 0 && (
                    <div className="space-y-2">
                      {filteredSeedPeople.map((u) => (
                        <div key={u.id} className="flex items-center gap-2.5">
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0"
                            style={{
                              background: "oklch(0.55 0.22 280 / 0.12)",
                              color: "oklch(0.55 0.22 280)",
                            }}
                          >
                            {u.avatar}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-foreground truncate">
                              {u.name}
                            </p>
                            <p className="text-[10px] text-muted-foreground">
                              {u.distance} · last seen {u.lastSeen}
                            </p>
                          </div>
                          <div className="flex gap-1 shrink-0">
                            {keptPeople.includes(u.id) ? (
                              <Badge
                                className="text-[10px] px-2 h-6"
                                style={{
                                  background: "oklch(0.60 0.18 150 / 0.15)",
                                  color: "oklch(0.50 0.16 150)",
                                }}
                              >
                                <UserCheck size={9} className="mr-1" /> Kept
                              </Badge>
                            ) : (
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-6 text-[10px] px-2"
                                onClick={() => handleKeepPerson(u.id, u.name)}
                                data-ocid="nearby.person.primary_button"
                              >
                                Keep
                              </Button>
                            )}
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive"
                              title={`Avoid ${u.name}`}
                              onClick={() => handleAvoidPerson(u.id, u.name)}
                              data-ocid="nearby.person.delete_button"
                            >
                              <X size={10} />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Local IndyaCentral users */}
                  {localUsers.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                        👤 IndyaCentral Members
                      </p>
                      {localUsers.map((u) => (
                        <div key={u.id} className="flex items-center gap-2.5">
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0"
                            style={{
                              background: "oklch(0.60 0.20 30 / 0.12)",
                              color: "oklch(0.50 0.18 30)",
                            }}
                          >
                            {u.avatar ||
                              u.name?.slice(0, 2).toUpperCase() ||
                              "U"}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-foreground truncate">
                              {u.name}
                            </p>
                          </div>
                          <SourceBadge label="👤 IndyaCentral" />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* GitHub loading */}
                  {peopleLoading && (
                    <div data-ocid="nearby.people.loading_state">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        🌐 GitHub
                      </p>
                      <CardSkeleton n={4} />
                    </div>
                  )}

                  {/* GitHub users */}
                  {!peopleLoading && githubUsers.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                        🌐 GitHub Profiles
                      </p>
                      {githubUsers.map((u) => (
                        <div key={u.id} className="flex items-center gap-2.5">
                          <img
                            src={u.avatar_url}
                            alt={u.login}
                            className="w-7 h-7 rounded-full shrink-0 border border-border"
                            loading="lazy"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-foreground truncate">
                              {u.login}
                            </p>
                          </div>
                          <div className="flex items-center gap-1 shrink-0">
                            <SourceBadge label="🌐 GitHub" />
                            <a
                              href={u.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:opacity-80"
                            >
                              <ExternalLink size={11} />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {softNudgeCount > 0 && (
                    <div
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-muted-foreground mt-1"
                      style={{
                        background: "oklch(0.55 0.22 280 / 0.05)",
                        border: "1px dashed oklch(0.55 0.22 280 / 0.2)",
                      }}
                    >
                      <User size={12} className="text-primary shrink-0" />
                      Someone nearby you may know
                    </div>
                  )}

                  {!peopleLoading &&
                    filteredSeedPeople.length === 0 &&
                    githubUsers.length === 0 &&
                    localUsers.length === 0 &&
                    softNudgeCount === 0 && (
                      <p className="text-xs text-muted-foreground text-center py-3">
                        {q ? `No people found for "${q}"` : "No people nearby"}
                      </p>
                    )}
                </div>
              </TabsContent>

              {/* ── Vendor Approaches Tab ────────────────────────────────── */}
              <TabsContent value="approaches" className="m-0">
                <div className="px-4 py-3 max-h-72 overflow-y-auto space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      🏪 Vendor Approach Requests
                    </p>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-muted-foreground">
                        {vendorApproachOn ? "Receiving" : "Paused"}
                      </span>
                      <button
                        type="button"
                        onClick={handleToggleVendorApproach}
                        className={`w-8 h-4 rounded-full relative transition-colors ${
                          vendorApproachOn
                            ? "bg-primary"
                            : "bg-muted-foreground/30"
                        }`}
                        data-ocid="nearby.switch"
                      >
                        <span
                          className={`absolute top-0.5 w-3 h-3 bg-white rounded-full shadow transition-transform ${
                            vendorApproachOn
                              ? "translate-x-4"
                              : "translate-x-0.5"
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {approachRequests.length === 0 ? (
                    <p
                      className="text-xs text-muted-foreground text-center py-4"
                      data-ocid="nearby.approaches.empty_state"
                    >
                      Search for something to get vendor suggestions
                    </p>
                  ) : (
                    <div className="space-y-2">
                      {approachRequests.map((approach, idx) => {
                        const color = AVATAR_COLORS[idx % AVATAR_COLORS.length];
                        return (
                          <div
                            key={approach.id}
                            className="flex items-start gap-2.5 p-2.5 rounded-xl"
                            style={{
                              background: "oklch(0.55 0.22 280 / 0.04)",
                              border: "1px solid oklch(0.55 0.22 280 / 0.12)",
                            }}
                            data-ocid={`nearby.approaches.item.${idx + 1}`}
                          >
                            <div
                              className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5"
                              style={{
                                background: color.bg,
                                color: color.text,
                              }}
                            >
                              {approach.initials}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold text-foreground">
                                {approach.vendorName}
                              </p>
                              <p className="text-[10px] text-muted-foreground">
                                {approach.vendorCategory} · wants to help with
                                &ldquo;{approach.keyword}&rdquo;
                              </p>
                              <p className="text-[10px] text-muted-foreground/60">
                                {approach.timestamp}
                              </p>
                              <div className="flex gap-1.5 mt-2">
                                <Button
                                  size="sm"
                                  className="h-6 text-[10px] px-3"
                                  style={{
                                    background: "oklch(0.60 0.18 150)",
                                    color: "white",
                                  }}
                                  onClick={() =>
                                    handleAcceptApproach(
                                      approach.id,
                                      approach.vendorName,
                                    )
                                  }
                                  data-ocid={`nearby.approaches.confirm_button.${idx + 1}`}
                                >
                                  Accept
                                </Button>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-6 text-[10px] px-3 text-muted-foreground hover:text-destructive"
                                  onClick={() =>
                                    handleDeclineApproach(approach.id)
                                  }
                                  data-ocid={`nearby.approaches.cancel_button.${idx + 1}`}
                                >
                                  Decline
                                </Button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {!vendorApproachOn && (
                    <p className="text-[10px] text-muted-foreground text-center border-t border-border pt-2">
                      Toggle to &ldquo;Open&rdquo; to let vendors approach you
                    </p>
                  )}
                </div>
              </TabsContent>

              {/* ── Face Search Tab ──────────────────────────────────────── */}
              <TabsContent value="face" className="m-0">
                <div className="px-4 py-3 max-h-72 overflow-y-auto space-y-3">
                  <button
                    type="button"
                    className="w-full border-2 border-dashed border-border rounded-xl p-4 text-center cursor-pointer hover:border-primary/40 transition-colors"
                    onClick={() => faceInputRef.current?.click()}
                    data-ocid="nearby.upload_button"
                  >
                    <p className="text-xs font-semibold text-foreground">
                      📷 Upload a photo to find similar faces
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-1">
                      Respects user privacy settings
                    </p>
                    <input
                      ref={faceInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFaceSearch}
                    />
                  </button>
                  {faceSearchFile && (
                    <img
                      src={faceSearchFile}
                      alt="Search face"
                      className="w-16 h-16 rounded-full object-cover mx-auto border-2 border-primary/40"
                    />
                  )}
                  {faceSearching && (
                    <div
                      className="flex items-center justify-center gap-2 py-3"
                      data-ocid="nearby.face.loading_state"
                    >
                      <span className="text-xs text-muted-foreground animate-pulse">
                        🔍 Searching faces...
                      </span>
                    </div>
                  )}
                  {faceResults && !faceSearching && (
                    <div
                      className="space-y-2"
                      data-ocid="nearby.face.success_state"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                        <ShieldCheck size={9} /> Matched Profiles
                        (privacy-filtered)
                      </p>
                      {faceResults.map((r) => (
                        <div key={r.id} className="flex items-center gap-2.5">
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0"
                            style={{
                              background: "oklch(0.55 0.22 280 / 0.12)",
                              color: "oklch(0.55 0.22 280)",
                            }}
                          >
                            {r.avatar}
                          </div>
                          <div className="flex-1 min-w-0">
                            {r.isPublic ? (
                              <>
                                <p className="text-xs font-semibold text-foreground">
                                  {r.name}
                                </p>
                                <p className="text-[10px] text-muted-foreground">
                                  {r.similarity}% match · Public profile
                                </p>
                              </>
                            ) : (
                              <>
                                <p className="text-xs font-semibold text-foreground">
                                  {r.name.split(" ")[0]} ••••
                                </p>
                                <p className="text-[10px] text-muted-foreground">
                                  {r.similarity}% match · Private profile
                                </p>
                              </>
                            )}
                          </div>
                          {!r.isPublic && (
                            <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground shrink-0">
                              Private
                            </span>
                          )}
                        </div>
                      ))}
                      <p className="text-[9px] text-muted-foreground border-t border-border pt-2 mt-1">
                        ⚠️ Face search only shows public profiles. Admin users
                        see full results.
                      </p>
                    </div>
                  )}
                  {!faceSearchFile && !faceSearching && !faceResults && (
                    <p
                      className="text-xs text-muted-foreground text-center py-2"
                      data-ocid="nearby.face.empty_state"
                    >
                      Upload a photo to search for similar faces in the platform
                    </p>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
    </div>
  );
}
