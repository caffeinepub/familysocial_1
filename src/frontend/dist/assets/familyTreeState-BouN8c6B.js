const KEY = "ic_family_businesses";
const SEED_BUSINESSES = [
  {
    id: "seed_b1",
    name: "Sharma General Store",
    category: "Retail",
    type: "Retail Business",
    ownerName: "Raj Sharma",
    phone: "9876543210",
    location: "MG Road, Mumbai",
    description: "General grocery and household items"
  },
  {
    id: "seed_b2",
    name: "Sharma Healthcare Clinic",
    category: "Healthcare",
    type: "Service Business",
    ownerName: "Priya Sharma",
    phone: "9876543211",
    location: "Andheri West, Mumbai",
    description: "Family healthcare clinic with experienced doctors"
  },
  {
    id: "seed_b3",
    name: "Sharma Tech Solutions",
    category: "IT Services",
    type: "Service Business",
    ownerName: "Vikram Sharma",
    phone: "9876543212",
    location: "Powai, Mumbai",
    description: "Software development and IT consulting"
  }
];
function getFamilyTreeBusinesses() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const userBusinesses = JSON.parse(raw);
      const seedFiltered = SEED_BUSINESSES.filter(
        (s) => !userBusinesses.some((u) => u.id === s.id)
      );
      return [...seedFiltered, ...userBusinesses];
    }
  } catch {
  }
  return SEED_BUSINESSES;
}
function saveFamilyTreeBusiness(biz) {
  const current = getFamilyTreeBusinesses().filter(
    (b) => !b.id.startsWith("seed_")
  );
  const idx = current.findIndex((b) => b.id === biz.id);
  if (idx >= 0) {
    current[idx] = biz;
  } else {
    current.push(biz);
  }
  localStorage.setItem(KEY, JSON.stringify(current));
  window.dispatchEvent(new CustomEvent("familyBusinessUpdated"));
}
export {
  getFamilyTreeBusinesses as g,
  saveFamilyTreeBusiness as s
};
