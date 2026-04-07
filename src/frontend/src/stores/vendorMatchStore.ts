export interface VendorApproach {
  id: string;
  vendorName: string;
  vendorCategory: string;
  keyword: string;
  timestamp: string;
  status: "pending" | "accepted" | "declined";
  initials: string;
}

const VENDOR_CATEGORIES = [
  {
    id: "v1",
    name: "Fresh Mart",
    category: "Grocery",
    keywords: ["vegetable", "fruit", "organic", "grocery", "food"],
    initials: "FM",
  },
  {
    id: "v2",
    name: "CleanPro Services",
    category: "Cleaning",
    keywords: ["clean", "cleaning", "maid", "sweep", "hygiene"],
    initials: "CP",
  },
  {
    id: "v3",
    name: "QuickFix Electricals",
    category: "Electrical",
    keywords: ["electric", "electrician", "wiring", "switch", "repair"],
    initials: "QF",
  },
  {
    id: "v4",
    name: "Sharma General Store",
    category: "Retail",
    keywords: ["rice", "dal", "grocery", "store", "general"],
    initials: "SG",
  },
  {
    id: "v5",
    name: "Sweet Bakes",
    category: "Bakery",
    keywords: ["cake", "bakery", "pastry", "sweet", "dessert", "bake"],
    initials: "SB",
  },
  {
    id: "v6",
    name: "TechRepair Hub",
    category: "Electronics",
    keywords: ["phone", "mobile", "laptop", "repair", "screen", "electronic"],
    initials: "TR",
  },
  {
    id: "v7",
    name: "Fashion Zone",
    category: "Clothing",
    keywords: ["clothes", "dress", "fashion", "shirt", "saree", "garment"],
    initials: "FZ",
  },
  {
    id: "v8",
    name: "MediCare Pharmacy",
    category: "Healthcare",
    keywords: ["medicine", "pharmacy", "health", "medical", "drug", "tablet"],
    initials: "MC",
  },
  {
    id: "v9",
    name: "SpiceGarden Restaurant",
    category: "Food",
    keywords: [
      "food",
      "restaurant",
      "meal",
      "lunch",
      "dinner",
      "biryani",
      "thali",
    ],
    initials: "SG",
  },
  {
    id: "v10",
    name: "AutoFix Garage",
    category: "Automotive",
    keywords: ["car", "vehicle", "mechanic", "auto", "bike", "service", "tyre"],
    initials: "AF",
  },
  {
    id: "v11",
    name: "BuildRight Construction",
    category: "Construction",
    keywords: [
      "plumber",
      "plumbing",
      "pipe",
      "construction",
      "build",
      "paint",
      "tiles",
    ],
    initials: "BR",
  },
  {
    id: "v12",
    name: "Greenfield Nursery",
    category: "Plants",
    keywords: ["plant", "flower", "garden", "nursery", "seed", "pot"],
    initials: "GN",
  },
];

const APPROACHES_KEY = "indya_vendor_approaches";
const PRIVACY_KEY = "indya_vendor_approach_enabled";

export function isVendorApproachEnabled(): boolean {
  const val = localStorage.getItem(PRIVACY_KEY);
  return val === null ? true : val === "true";
}

export function setVendorApproachEnabled(enabled: boolean): void {
  localStorage.setItem(PRIVACY_KEY, String(enabled));
  window.dispatchEvent(new CustomEvent("indya_approach_setting_changed"));
}

export function getApproaches(): VendorApproach[] {
  try {
    const raw = localStorage.getItem(APPROACHES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveApproaches(list: VendorApproach[]): void {
  localStorage.setItem(APPROACHES_KEY, JSON.stringify(list.slice(0, 50)));
}

export function respondToApproach(id: string, accepted: boolean): void {
  const list = getApproaches();
  const updated = list.map((a) =>
    a.id === id
      ? {
          ...a,
          status: accepted ? ("accepted" as const) : ("declined" as const),
        }
      : a,
  );
  saveApproaches(updated);
  window.dispatchEvent(new CustomEvent("indya_approach_updated"));
}

export function broadcastToVendors(
  keyword: string,
  avoidList: string[] = [],
): number {
  if (!isVendorApproachEnabled()) return 0;

  const kw = keyword.toLowerCase().trim();
  if (!kw || kw.length < 2) return 0;

  const isAvoided = avoidList.some(
    (a) => kw.includes(a.toLowerCase()) || a.toLowerCase().includes(kw),
  );
  if (isAvoided) return 0;

  const matched = VENDOR_CATEGORIES.filter(
    (v) =>
      v.keywords.some((k) => kw.includes(k) || k.includes(kw)) ||
      v.category.toLowerCase().includes(kw) ||
      v.name.toLowerCase().includes(kw),
  );

  if (matched.length === 0) return 0;

  const now = new Date();
  const timeStr = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const newApproaches: VendorApproach[] = matched.slice(0, 4).map((v) => ({
    id: `approach_${Date.now()}_${v.id}`,
    vendorName: v.name,
    vendorCategory: v.category,
    keyword,
    timestamp: timeStr,
    status: "pending",
    initials: v.initials,
  }));

  const existing = getApproaches();
  saveApproaches([...newApproaches, ...existing]);

  // Also add to main notification store (dynamic import to avoid circular deps)
  import("./notificationStore").then(({ addNotification }) => {
    for (const v of matched.slice(0, 2)) {
      addNotification({
        module: "Vendor",
        text: `${v.name} wants to approach you for "${keyword}" — tap to respond`,
        timestamp: timeStr,
        unread: true,
        initials: v.initials,
      });
    }
  });

  window.dispatchEvent(new CustomEvent("indya_approach_updated"));

  window.dispatchEvent(
    new CustomEvent("indya_vendor_match", {
      detail: { keyword, userInitials: "U", count: matched.length },
    }),
  );

  return matched.length;
}
