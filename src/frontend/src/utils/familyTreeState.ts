// ─── Family Tree Business Shared State ───────────────────────────────────────
// Utility for sharing family-tree-registered businesses across modules.

export interface FamilyTreeBusiness {
  id: string;
  name: string;
  category: string;
  type?: string;
  ownerName: string;
  phone: string;
  location: string;
  description?: string;
  email?: string;
}

const KEY = "ic_family_businesses";

const SEED_BUSINESSES: FamilyTreeBusiness[] = [
  {
    id: "seed_b1",
    name: "Sharma General Store",
    category: "Retail",
    type: "Retail Business",
    ownerName: "Raj Sharma",
    phone: "9876543210",
    location: "MG Road, Mumbai",
    description: "General grocery and household items",
  },
  {
    id: "seed_b2",
    name: "Sharma Healthcare Clinic",
    category: "Healthcare",
    type: "Service Business",
    ownerName: "Priya Sharma",
    phone: "9876543211",
    location: "Andheri West, Mumbai",
    description: "Family healthcare clinic with experienced doctors",
  },
  {
    id: "seed_b3",
    name: "Sharma Tech Solutions",
    category: "IT Services",
    type: "Service Business",
    ownerName: "Vikram Sharma",
    phone: "9876543212",
    location: "Powai, Mumbai",
    description: "Software development and IT consulting",
  },
];

export function getFamilyTreeBusinesses(): FamilyTreeBusiness[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as FamilyTreeBusiness[];
      if (parsed.length > 0) return parsed;
    }
  } catch {
    // ignore parse errors
  }
  // Return seed data so pages aren't empty on first load
  return SEED_BUSINESSES;
}

export function saveFamilyTreeBusiness(biz: FamilyTreeBusiness): void {
  const current = getFamilyTreeBusinesses().filter(
    (b) => !b.id.startsWith("seed_"),
  );
  const idx = current.findIndex((b) => b.id === biz.id);
  if (idx >= 0) {
    current[idx] = biz;
  } else {
    current.push(biz);
  }
  localStorage.setItem(KEY, JSON.stringify(current));
  // Notify other components
  window.dispatchEvent(new CustomEvent("familyBusinessUpdated"));
}
