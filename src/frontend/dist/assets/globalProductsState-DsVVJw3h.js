const KEY = "ic_global_products";
const SEED_PRODUCTS = [
  {
    id: "seed_p1",
    name: "Homemade Biryani (Full Tray)",
    description: "Authentic Hyderabadi biryani made fresh daily, serves 4-6 people.",
    price: 850,
    category: "Food & Beverages",
    module: "POS",
    businessName: "Sharma General Store",
    seller: "Raj Sharma",
    isService: false,
    status: "active",
    votes: 48,
    reviews: 12,
    rating: 4.7,
    createdAt: "2026-03-15T10:00:00Z"
  },
  {
    id: "seed_p2",
    name: "Fresh Masala Chai (Box of 50)",
    description: "Aromatic masala chai blend with ginger, cardamom, and fresh spices.",
    price: 199,
    category: "Food & Beverages",
    module: "Shop",
    seller: "TeaTime India",
    isService: false,
    status: "active",
    votes: 34,
    reviews: 8,
    rating: 4.5,
    createdAt: "2026-03-16T09:00:00Z"
  },
  {
    id: "seed_p3",
    name: 'Samsung 65" 4K QLED TV',
    description: "Stunning 4K resolution with QLED technology, smart features and 2-year warranty.",
    price: 89999,
    category: "Electronics",
    module: "POS",
    seller: "Tech Planet",
    isService: false,
    status: "active",
    votes: 22,
    reviews: 5,
    rating: 4.6,
    createdAt: "2026-03-10T12:00:00Z"
  },
  {
    id: "seed_p4",
    name: "Yoga & Wellness Sessions",
    description: "Personal yoga sessions with certified instructor. Sessions available morning and evening.",
    price: 1500,
    category: "Healthcare",
    module: "Healthcare",
    seller: "WellnessFirst",
    isService: true,
    status: "active",
    votes: 67,
    reviews: 19,
    rating: 4.9,
    createdAt: "2026-03-12T08:00:00Z"
  },
  {
    id: "seed_p5",
    name: "Handcrafted Cotton Kurta",
    description: "Premium handloom cotton kurta, available in multiple colors and sizes.",
    price: 1299,
    category: "Fashion",
    module: "Shop",
    seller: "Khadi Crafts",
    isService: false,
    status: "active",
    votes: 41,
    reviews: 14,
    rating: 4.4,
    createdAt: "2026-03-14T11:00:00Z"
  },
  {
    id: "seed_p6",
    name: "Home Deep Cleaning Service",
    description: "Professional deep cleaning for 2BHK/3BHK. Includes kitchen, bathrooms, and all rooms.",
    price: 2499,
    category: "Home Services",
    module: "Community",
    seller: "CleanHome Pro",
    isService: true,
    status: "active",
    votes: 29,
    reviews: 7,
    rating: 4.3,
    createdAt: "2026-03-17T07:00:00Z"
  }
];
function getGlobalProducts() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const userProducts = JSON.parse(raw);
      const seedFiltered = SEED_PRODUCTS.filter(
        (s) => !userProducts.some((u) => u.id === s.id)
      );
      return [...seedFiltered, ...userProducts];
    }
  } catch {
  }
  return SEED_PRODUCTS;
}
function saveGlobalProduct(product) {
  const current = getGlobalProducts().filter((p) => !p.id.startsWith("seed_"));
  const idx = current.findIndex((p) => p.id === product.id);
  if (idx >= 0) {
    current[idx] = product;
  } else {
    current.push(product);
  }
  localStorage.setItem(KEY, JSON.stringify(current));
  window.dispatchEvent(new CustomEvent("globalProductsUpdated"));
}
function addGlobalProduct(product) {
  let isBestBuy = false;
  try {
    const viewed = JSON.parse(
      localStorage.getItem("ic_viewed_categories") || "[]"
    );
    if (viewed.includes(product.category)) isBestBuy = true;
  } catch {
  }
  const newProduct = {
    ...product,
    id: `prod_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    isBestBuy,
    votes: 0,
    reviews: 0,
    rating: 0,
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  saveGlobalProduct(newProduct);
  return newProduct;
}
function deleteGlobalProduct(id) {
  const current = getGlobalProducts().filter(
    (p) => !p.id.startsWith("seed_") && p.id !== id
  );
  localStorage.setItem(KEY, JSON.stringify(current));
  window.dispatchEvent(new CustomEvent("globalProductsUpdated"));
}
export {
  addGlobalProduct as a,
  deleteGlobalProduct as d,
  getGlobalProducts as g,
  saveGlobalProduct as s
};
