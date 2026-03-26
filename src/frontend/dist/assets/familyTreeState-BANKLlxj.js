const KEY = "ic_family_businesses";
function getFamilyTreeBusinesses() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const userBusinesses = JSON.parse(raw);
      if (userBusinesses.length > 0) {
        return userBusinesses;
      }
    }
  } catch {
  }
  return [];
}
function saveFamilyTreeBusiness(biz) {
  const current = getFamilyTreeBusinesses();
  const idx = current.findIndex((b) => b.id === biz.id);
  if (idx >= 0) {
    current[idx] = {
      ...biz,
      createdAt: biz.createdAt || current[idx].createdAt
    };
  } else {
    current.push({
      ...biz,
      createdAt: biz.createdAt || (/* @__PURE__ */ new Date()).toISOString()
    });
  }
  localStorage.setItem(KEY, JSON.stringify(current));
  window.dispatchEvent(new CustomEvent("familyBusinessUpdated"));
}
export {
  getFamilyTreeBusinesses as g,
  saveFamilyTreeBusiness as s
};
