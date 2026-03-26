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
  createdAt?: string;
}

const KEY = "ic_family_businesses";

export function getFamilyTreeBusinesses(): FamilyTreeBusiness[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const userBusinesses = JSON.parse(raw) as FamilyTreeBusiness[];
      if (userBusinesses.length > 0) {
        return userBusinesses;
      }
    }
  } catch {
    // ignore parse errors
  }
  return [];
}

export function saveFamilyTreeBusiness(biz: FamilyTreeBusiness): void {
  const current = getFamilyTreeBusinesses();
  const idx = current.findIndex((b) => b.id === biz.id);
  if (idx >= 0) {
    current[idx] = {
      ...biz,
      createdAt: biz.createdAt || current[idx].createdAt,
    };
  } else {
    current.push({
      ...biz,
      createdAt: biz.createdAt || new Date().toISOString(),
    });
  }
  localStorage.setItem(KEY, JSON.stringify(current));
  // Notify other components
  window.dispatchEvent(new CustomEvent("familyBusinessUpdated"));
}
