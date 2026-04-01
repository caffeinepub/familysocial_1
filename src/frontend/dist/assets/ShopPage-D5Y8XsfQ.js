import { a5 as useInternetIdentity, r as reactExports, a6 as React, j as jsxRuntimeExports, a3 as ShoppingBag, a as Button, l as Building2, D as Dialog, z as DialogTrigger, K as Plus, E as DialogContent, F as DialogHeader, G as DialogTitle, a2 as DialogDescription, L as Label, I as Input, S as Select, f as SelectTrigger, g as SelectValue, h as SelectContent, i as SelectItem, a7 as Info, u as ue, T as Tabs, c as TabsList, d as TabsTrigger, e as TabsContent, Y as Search, X, B as Badge, P as Package, a8 as useCurrency, Z as Zap, a9 as ScrollArea, w as Separator, aa as ChevronRight, v as CircleCheck } from "./index-DQm1FmJn.js";
import { S as Sheet, a as SheetContent, b as SheetHeader, c as SheetTitle } from "./sheet-C82hzZ4P.js";
import { T as Textarea } from "./textarea-DC9R_hZQ.js";
import { B as BoostPostDialog } from "./BoostPostDialog-Ba5vWMvL.js";
import { S as ShopAuctionTab, R as ReviewModal } from "./ReviewModal-CLoZ4m30.js";
import { L as LikeVoteBar } from "./LikeVoteBar-CFp67XPh.js";
import { P as PaymentModal } from "./PaymentModal-CdSmoLbZ.js";
import { s as saveFamilyTreeBusiness, g as getFamilyTreeBusinesses } from "./familyTreeState-BANKLlxj.js";
import { g as getGlobalProducts } from "./globalProductsState-DsVVJw3h.js";
import { f as formatTimeAgo } from "./timeUtils-BFSNPdi8.js";
import { SAMPLE_PRODUCTS, SAMPLE_SERVICES } from "./ProductsServicesPage-Bhnw-YhP.js";
import { S as ShoppingCart } from "./shopping-cart-DEXEpAQa.js";
import { T as Truck } from "./truck-D7gfzCNv.js";
import { W as Wrench } from "./wrench-PciMSqpe.js";
import { S as Star } from "./star-C_hI7p9O.js";
import { T as ThumbsUp } from "./thumbs-up-C1f17TTZ.js";
import { M as Minus } from "./minus-CpUazRea.js";
import { T as Trash2 } from "./trash-2-CPcGU7UB.js";
import "./card-DLVGxgo7.js";
import "./checkbox-JMvKNsgZ.js";
import "./table-CjbhWZKd.js";
import "./globe-Dcf8giH1.js";
import "./circle-x-CIJWb6ku.js";
import "./gavel-CUkcCfgV.js";
import "./trending-up-DrAZSSQA.js";
import "./phone-DG-pZgsg.js";
import "./credit-card-CpxBp-1g.js";
import "./EventsTab-B9wJowPA.js";
import "./share-2-vXNuIgT0.js";
import "./lock-CYpmQvQa.js";
import "./calendar-JLv0_E-e.js";
import "./calendar-days-CTv_5uP-.js";
import "./layers-BFNWsVjf.js";
const CATEGORIES = [
  "All",
  "Electronics",
  "Food & Beverages",
  "Vehicles",
  "Fashion",
  "Events",
  "Furniture",
  "Home Services",
  "Education",
  "Beauty & Events",
  "Professional",
  "Healthcare",
  "Real Estate",
  "Travel",
  "Other"
];
const CATEGORY_COLORS = {
  Vehicles: "oklch(0.48 0.12 260)",
  Electronics: "oklch(0.52 0.14 155)",
  Fashion: "oklch(0.58 0.16 350)",
  Events: "oklch(0.72 0.17 85)",
  Education: "oklch(0.65 0.14 50)",
  "Home Services": "oklch(0.52 0.14 155)",
  "Beauty & Events": "oklch(0.58 0.16 350)",
  Professional: "oklch(0.48 0.12 260)",
  Furniture: "oklch(0.62 0.13 40)",
  Healthcare: "oklch(0.55 0.18 160)",
  "Real Estate": "oklch(0.55 0.14 240)",
  Travel: "oklch(0.60 0.18 200)",
  Other: "oklch(0.55 0.10 200)",
  "Food & Beverages": "oklch(0.62 0.18 55)"
};
const TAX_RATE = 0.05;
const EXTRA_SHOP_ITEMS = [
  {
    id: "travel-1",
    productId: 101,
    name: "Goa Beach Resort Package",
    description: "3-night stay at a beachfront resort with breakfast and transfers included.",
    price: 18500,
    category: "Travel",
    rating: 4.7,
    seller: "SunVista Travels",
    isService: true,
    sourceModule: "Travel",
    votes: 128,
    photoUrl: void 0
  },
  {
    id: "healthcare-1",
    productId: 102,
    name: "Digital Blood Pressure Monitor",
    description: "Automatic upper arm BP monitor with memory for 60 readings. WHO approved.",
    price: 2800,
    category: "Healthcare",
    rating: 4.6,
    seller: "MediCare Supplies",
    isService: false,
    sourceModule: "Healthcare",
    votes: 74,
    photoUrl: void 0
  },
  {
    id: "realestate-1",
    productId: 103,
    name: "Modular Kitchen Fitting",
    description: "Complete modular kitchen setup with granite countertop, cabinets, and sink.",
    price: 125e3,
    category: "Real Estate",
    rating: 4.5,
    seller: "HomeStyle Interiors",
    isService: false,
    sourceModule: "Real Estate",
    votes: 45,
    photoUrl: void 0
  },
  {
    id: "education-1",
    productId: 104,
    name: "CBSE Class 10 Complete Book Set",
    description: "Full set of NCERT textbooks for Class 10 all subjects, new edition.",
    price: 1850,
    category: "Education",
    rating: 4.8,
    seller: "KnowledgeNest Books",
    isService: false,
    sourceModule: "Education",
    votes: 210,
    photoUrl: void 0
  },
  {
    id: "gated-1",
    productId: 105,
    name: "CCTV 8-Camera Kit",
    description: "Full HD night-vision cameras with DVR, cables, and remote monitoring app.",
    price: 24e3,
    category: "Electronics",
    rating: 4.4,
    seller: "SecureZone India",
    isService: false,
    sourceModule: "Gated Community",
    votes: 88,
    photoUrl: void 0
  },
  {
    id: "healthcare-2",
    productId: 106,
    name: "General Health Consultation",
    description: "30-minute general physician consultation via video or in-clinic. Prescription included.",
    price: 400,
    category: "Healthcare",
    rating: 4.9,
    seller: "Dr. Priya Sharma",
    isService: true,
    sourceModule: "Healthcare",
    votes: 305,
    photoUrl: void 0
  },
  {
    id: "food-1",
    productId: 107,
    name: "Biryani House Special",
    description: "Aromatic dum biryani with tender chicken, saffron rice, and raita. Serves 1.",
    price: 299,
    category: "Food & Beverages",
    rating: 4.8,
    seller: "Biryani House Mumbai",
    isService: false,
    sourceModule: "Food",
    votes: 412,
    photoUrl: void 0,
    lat: 19.07,
    lng: 72.87
  },
  {
    id: "food-2",
    productId: 108,
    name: "Fresh Organic Vegetables",
    description: "Seasonal fresh organic vegetables, locally sourced. 2kg assorted basket.",
    price: 150,
    category: "Food & Beverages",
    rating: 4.6,
    seller: "Green Earth Grocery",
    isService: false,
    sourceModule: "Food",
    votes: 285,
    photoUrl: void 0,
    lat: 28.7,
    lng: 77.1
  },
  {
    id: "food-3",
    productId: 109,
    name: "South Indian Thali",
    description: "Authentic South Indian thali with rice, sambar, rasam, 3 curries and papad.",
    price: 199,
    category: "Food & Beverages",
    rating: 4.7,
    seller: "Udupi Palace Bengaluru",
    isService: false,
    sourceModule: "Food",
    votes: 356,
    photoUrl: void 0,
    lat: 12.97,
    lng: 77.59
  },
  {
    id: "food-4",
    productId: 110,
    name: "Pizza & Pasta Combo",
    description: "7-inch wood-fired pizza with a side of pasta in choice of sauce. Vegetarian.",
    price: 349,
    category: "Food & Beverages",
    rating: 4.5,
    seller: "La Bella Chennai",
    isService: false,
    sourceModule: "Food",
    votes: 198,
    photoUrl: void 0,
    lat: 13.08,
    lng: 80.27
  },
  {
    id: "food-5",
    productId: 111,
    name: "Sweets & Namkeen Box",
    description: "Assorted traditional sweets and namkeen in a festive gift box, 500g.",
    price: 250,
    category: "Food & Beverages",
    rating: 4.9,
    seller: "Halwai Sweets Hyderabad",
    isService: false,
    sourceModule: "Food",
    votes: 523,
    photoUrl: void 0,
    lat: 17.38,
    lng: 78.48
  },
  {
    id: "food-6",
    productId: 112,
    name: "Fresh Fruit Basket",
    description: "Seasonal mixed fruit basket with mangoes, bananas, apples and pomegranates. 3kg.",
    price: 199,
    category: "Food & Beverages",
    rating: 4.7,
    seller: "Nature's Best Kolkata",
    isService: false,
    sourceModule: "Food",
    votes: 301,
    photoUrl: void 0,
    lat: 22.57,
    lng: 88.36
  }
];
const INITIAL_DELIVERY_PROVIDERS = [
  {
    id: "dp-1",
    name: "QuickRun Logistics",
    type: "company",
    coverageArea: "Mumbai, Thane, Navi Mumbai",
    perOrderRate: 49,
    perKmRate: 8,
    contact: "+91-9876543210",
    rating: 4.7,
    deliveries: 1240
  },
  {
    id: "dp-2",
    name: "Arjun Kumar",
    type: "freelancer",
    coverageArea: "Bengaluru Central",
    perOrderRate: 30,
    perKmRate: 6,
    contact: "+91-9123456780",
    rating: 4.5,
    deliveries: 380
  },
  {
    id: "dp-3",
    name: "SpeedMart Delivery",
    type: "business",
    coverageArea: "Delhi NCR",
    perOrderRate: 59,
    perKmRate: 7,
    contact: "+91-9988776655",
    rating: 4.8,
    deliveries: 3500
  }
];
function ShopProductCard({
  id,
  name,
  description,
  price,
  category,
  rating,
  seller,
  isService,
  photoUrl,
  sourceModule,
  votes,
  isBestBuy,
  onAddToCart,
  distanceKm,
  isLoggedIn,
  createdAt
}) {
  const { formatPrice } = useCurrency();
  const color = CATEGORY_COLORS[category] || "oklch(0.55 0.10 200)";
  const [boostOpen, setBoostOpen] = reactExports.useState(false);
  const [boosted, setBoosted] = reactExports.useState(() => {
    const b = JSON.parse(
      localStorage.getItem("ic_boosted_posts") || "[]"
    );
    return b.includes(name);
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col group relative", children: [
    distanceKm !== void 0 && distanceKm > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute top-2 right-2 z-10 text-[10px] px-2 py-0.5 rounded-full font-semibold bg-primary/90 text-primary-foreground", children: [
      "~",
      distanceKm.toFixed(1),
      " km"
    ] }),
    isBestBuy && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-2 left-2 z-10 text-[10px] px-2 py-0.5 rounded-full font-bold bg-yellow-400 text-yellow-900", children: "⭐ Best Buy" }),
    photoUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: photoUrl, alt: name, className: "w-full h-44 object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "w-full h-44 flex items-center justify-center",
        style: {
          background: `linear-gradient(135deg, ${color}15 0%, ${color}35 100%)`
        },
        children: isService ? /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { size: 36, style: { color }, className: "opacity-60" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 36, style: { color }, className: "opacity-60" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex flex-col flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2 flex-wrap gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Badge,
          {
            className: "text-[10px] px-2 py-0 font-label border-0",
            style: { background: `${color}18`, color },
            children: category
          }
        ),
        sourceModule && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Badge,
          {
            variant: "outline",
            className: "text-[10px] px-1.5 py-0 font-label",
            children: sourceModule
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-label font-bold text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors", children: name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2 flex-1", children: description }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-2", children: [
        "by ",
        seller
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 11, className: "fill-current text-amber-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label font-semibold text-foreground", children: rating.toFixed(1) })
        ] }),
        votes !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ThumbsUp, { size: 11 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: votes })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-auto gap-2 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-foreground text-base", children: formatPrice(price) }),
          isService && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground ml-1", children: "/hr" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ReviewModal,
            {
              targetId: id,
              targetType: isService ? "service" : "product",
              targetName: name,
              currentRating: rating,
              reviewCount: 0
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              className: "h-8 text-xs font-label gap-1.5",
              onClick: onAddToCart,
              "data-ocid": "shop.cart.button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 12 }),
                isService ? "Book" : "Cart"
              ]
            }
          ),
          isLoggedIn && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "ghost",
              className: "h-8 text-xs font-label gap-1 px-2",
              onClick: () => setBoostOpen(true),
              style: { color: boosted ? "oklch(0.65 0.20 85)" : void 0 },
              "data-ocid": "shop.product.primary_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 11, fill: boosted ? "currentColor" : "none" }),
                boosted ? "Boosted" : "Boost"
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pb-3 flex items-center justify-between border-t border-border/40 pt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LikeVoteBar, { id }),
      createdAt && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: formatTimeAgo(createdAt) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      BoostPostDialog,
      {
        open: boostOpen,
        onClose: () => setBoostOpen(false),
        postTitle: name,
        postType: "product",
        onBoostSuccess: () => setBoosted(true)
      }
    )
  ] });
}
function DeliveryProviderCard({
  provider,
  selected,
  onSelect
}) {
  const { formatPrice } = useCurrency();
  const typeColor = provider.type === "freelancer" ? "oklch(0.62 0.18 290)" : provider.type === "company" ? "oklch(0.55 0.18 240)" : "oklch(0.58 0.18 160)";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `bg-card border rounded-xl p-4 transition-all ${selected ? "border-primary shadow-md ring-1 ring-primary/30" : "border-border hover:border-primary/40 hover:shadow-sm"} ${onSelect ? "cursor-pointer" : ""}`,
      onClick: onSelect,
      onKeyDown: (e) => e.key === "Enter" && (onSelect == null ? void 0 : onSelect()),
      role: onSelect ? "button" : void 0,
      tabIndex: onSelect ? 0 : void 0,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
                style: { background: `${typeColor}18` },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { size: 18, style: { color: typeColor } })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label font-semibold text-foreground text-sm", children: provider.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  className: "text-[10px] px-1.5 py-0 mt-0.5 capitalize",
                  style: { background: `${typeColor}18`, color: typeColor },
                  children: provider.type
                }
              )
            ] })
          ] }),
          selected && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 18, className: "text-primary shrink-0" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid grid-cols-2 gap-2 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Per Order" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label font-semibold text-foreground", children: formatPrice(provider.perOrderRate) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Per KM" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label font-semibold text-foreground", children: formatPrice(provider.perKmRate) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Coverage" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label font-medium text-foreground truncate", children: provider.coverageArea })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Rating" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-label font-semibold text-foreground flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 10, className: "fill-amber-400 text-amber-400" }),
              provider.rating,
              " · ",
              provider.deliveries,
              " deliveries"
            ] })
          ] })
        ] })
      ]
    }
  );
}
function CartDrawer({
  open,
  onClose,
  cartItems,
  onQtyChange,
  onRemove,
  subtotal,
  tax,
  grandTotal,
  onCheckout
}) {
  const { formatPrice } = useCurrency();
  const totalItems = cartItems.reduce((s, i) => s + i.qty, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    SheetContent,
    {
      side: "right",
      className: "w-full sm:max-w-md flex flex-col p-0",
      "data-ocid": "shop.cart.panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SheetHeader, { className: "px-5 py-4 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetTitle, { className: "font-display flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 18, className: "text-primary" }),
          "Cart",
          totalItems > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-xs bg-primary text-primary-foreground rounded-full px-2 py-0.5", children: totalItems })
        ] }) }),
        cartItems.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex-1 flex flex-col items-center justify-center text-center p-8 gap-3",
            "data-ocid": "shop.cart.empty_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 40, className: "text-muted-foreground/30" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Your cart is empty" })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "flex-1 px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: cartItems.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex gap-3 items-start",
              "data-ocid": `shop.cart.item.${idx + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-xl flex items-center justify-center shrink-0 bg-secondary/50", children: item.photoUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: item.photoUrl,
                    alt: item.name,
                    className: "w-full h-full object-cover rounded-xl"
                  }
                ) : item.isService ? /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { size: 20, className: "text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 20, className: "text-muted-foreground" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label font-semibold text-foreground text-sm truncate", children: item.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                    formatPrice(item.unitPrice),
                    item.isService ? "/hr" : ""
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => onQtyChange(item.id, -1),
                        className: "w-6 h-6 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { size: 11 })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-label font-semibold min-w-[20px] text-center", children: item.qty }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => onQtyChange(item.id, 1),
                        className: "w-6 h-6 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 11 })
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-2 shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label font-semibold text-foreground text-sm", children: formatPrice(item.qty * item.unitPrice) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => onRemove(item.id),
                      className: "text-destructive hover:opacity-70 transition-opacity",
                      "data-ocid": `shop.cart.delete_button.${idx + 1}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 14 })
                    }
                  )
                ] })
              ]
            },
            item.id
          )) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 border-t border-border space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Subtotal" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatPrice(subtotal) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Tax (5%)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "+ ",
                  formatPrice(Math.round(tax))
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-display font-bold text-base text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: formatPrice(Math.round(grandTotal)) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                className: "w-full font-label gap-2",
                onClick: onCheckout,
                "data-ocid": "shop.cart.checkout_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 15 }),
                  "Proceed to Checkout ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14 })
                ]
              }
            )
          ] })
        ] })
      ]
    }
  ) });
}
function CheckoutDialog({
  open,
  onClose,
  cartItems,
  subtotal,
  tax,
  grandTotal,
  deliveryProviders
}) {
  const { formatPrice } = useCurrency();
  const [step, setStep] = reactExports.useState("billing");
  const [orderId, setOrderId] = reactExports.useState("");
  const [paymentOpen, setPaymentOpen] = reactExports.useState(false);
  const [selectedProvider, setSelectedProvider] = reactExports.useState("");
  const [billingForm, setBillingForm] = reactExports.useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    paymentMethod: "cod",
    notes: ""
  });
  const chosenProvider = deliveryProviders.find(
    (p) => p.id === selectedProvider
  );
  const deliveryFee = chosenProvider ? chosenProvider.perOrderRate : 0;
  const finalTotal = grandTotal + deliveryFee;
  const handleBillingSubmit = (e) => {
    e.preventDefault();
    if (!billingForm.fullName.trim() || !billingForm.phone.trim() || !billingForm.address.trim()) {
      ue.error("Please fill in all required fields");
      return;
    }
    setStep("summary");
  };
  const handlePlaceOrder = () => {
    if (billingForm.paymentMethod !== "cod") {
      setPaymentOpen(true);
      return;
    }
    doPlaceOrder();
  };
  const doPlaceOrder = () => {
    const id = `#ORD-${Math.floor(1e5 + Math.random() * 9e5)}`;
    setOrderId(id);
    setStep("confirmation");
    ue.success("Order placed successfully!");
    const newOrder = {
      id,
      date: (/* @__PURE__ */ new Date()).toISOString(),
      items: cartItems.map((item) => ({
        name: item.name,
        qty: item.qty,
        price: item.unitPrice
      })),
      total: cartItems.reduce((s, i) => s + i.qty * i.unitPrice, 0),
      status: "Placed",
      billing: billingForm
    };
    try {
      const existing = JSON.parse(
        localStorage.getItem("ic_user_orders") || "[]"
      );
      existing.unshift(newOrder);
      localStorage.setItem(
        "ic_user_orders",
        JSON.stringify(existing.slice(0, 50))
      );
      window.dispatchEvent(new Event("orderPlaced"));
    } catch {
    }
  };
  const handleClose = () => {
    const clear = step === "confirmation";
    setStep("billing");
    setSelectedProvider("");
    setBillingForm({
      fullName: "",
      phone: "",
      address: "",
      city: "",
      paymentMethod: "cod",
      notes: ""
    });
    onClose(clear);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: (v) => !v && handleClose(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      DialogContent,
      {
        className: "sm:max-w-lg max-h-[90vh] flex flex-col",
        "data-ocid": "shop.checkout.dialog",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "font-display flex items-center gap-2", children: [
              step === "billing" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 16, className: "text-primary" }),
                " Billing Details"
              ] }),
              step === "summary" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 16, className: "text-primary" }),
                " Order Summary"
              ] }),
              step === "confirmation" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 16, className: "text-emerald-500" }),
                " Order Confirmed!"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mt-2", children: ["billing", "summary", "confirmation"].map(
              (s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${step === s ? "bg-primary text-primary-foreground" : ["billing", "summary", "confirmation"].indexOf(step) > i ? "bg-emerald-500 text-white" : "bg-secondary text-muted-foreground"}`,
                    children: i + 1
                  }
                ),
                i < 2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-px bg-border" })
              ] }, s)
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(ScrollArea, { className: "flex-1 overflow-y-auto pr-1", children: [
            step === "billing" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "form",
              {
                id: "checkout-billing-form",
                onSubmit: handleBillingSubmit,
                className: "space-y-4 mt-3 pb-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Full Name *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        placeholder: "Your full name",
                        value: billingForm.fullName,
                        onChange: (e) => setBillingForm((f) => ({ ...f, fullName: e.target.value })),
                        "data-ocid": "shop.checkout.name_input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Phone *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        placeholder: "+91 XXXXX XXXXX",
                        value: billingForm.phone,
                        onChange: (e) => setBillingForm((f) => ({ ...f, phone: e.target.value })),
                        "data-ocid": "shop.checkout.phone_input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Delivery Address *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Textarea,
                      {
                        placeholder: "Street address, area...",
                        value: billingForm.address,
                        onChange: (e) => setBillingForm((f) => ({ ...f, address: e.target.value })),
                        className: "resize-none text-sm",
                        rows: 2,
                        "data-ocid": "shop.checkout.address_textarea"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "City" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        placeholder: "City",
                        value: billingForm.city,
                        onChange: (e) => setBillingForm((f) => ({ ...f, city: e.target.value })),
                        "data-ocid": "shop.checkout.city_input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Payment Method" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Select,
                      {
                        value: billingForm.paymentMethod,
                        onValueChange: (v) => setBillingForm((f) => ({
                          ...f,
                          paymentMethod: v
                        })),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "shop.checkout.payment_select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "cod", children: "Cash on Delivery" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "bank", children: "Bank Transfer" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "card", children: "Card Payment" })
                          ] })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Order Notes" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Textarea,
                      {
                        placeholder: "Any special instructions...",
                        value: billingForm.notes,
                        onChange: (e) => setBillingForm((f) => ({ ...f, notes: e.target.value })),
                        className: "resize-none text-sm",
                        rows: 2,
                        "data-ocid": "shop.checkout.notes_textarea"
                      }
                    )
                  ] })
                ]
              }
            ),
            step === "summary" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 mt-3 pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wide mb-2", children: "Items" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: cartItems.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex justify-between items-start text-sm",
                    "data-ocid": `shop.summary.item.${idx + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label font-medium text-foreground truncate", children: item.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                          item.qty,
                          " × ",
                          formatPrice(item.unitPrice),
                          item.isService ? "/hr" : ""
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-label font-semibold text-foreground ml-3 shrink-0", children: formatPrice(item.qty * item.unitPrice) })
                    ]
                  },
                  item.id
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wide mb-2 flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { size: 12 }),
                  " Choose Delivery Provider"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  deliveryProviders.map((dp) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    DeliveryProviderCard,
                    {
                      provider: dp,
                      selected: selectedProvider === dp.id,
                      onSelect: () => setSelectedProvider(dp.id)
                    },
                    dp.id
                  )),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setSelectedProvider(""),
                      className: `w-full text-xs text-muted-foreground py-2 rounded-lg border border-dashed border-border hover:border-muted-foreground transition-colors ${selectedProvider === "" ? "bg-secondary" : ""}`,
                      children: "Self Pickup (no delivery)"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Subtotal" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatPrice(subtotal) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Tax (5%)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "+ ",
                    formatPrice(Math.round(tax))
                  ] })
                ] }),
                deliveryFee > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "Delivery (",
                    chosenProvider == null ? void 0 : chosenProvider.name,
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "+ ",
                    formatPrice(deliveryFee)
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-display font-bold text-base text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Grand Total" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: formatPrice(Math.round(finalTotal)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/40 rounded-xl p-3 text-xs space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label font-semibold text-foreground mb-1", children: "Delivering to" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
                  billingForm.fullName,
                  " · ",
                  billingForm.phone
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
                  billingForm.address,
                  billingForm.city ? `, ${billingForm.city}` : ""
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground capitalize", children: [
                  "Payment:",
                  " ",
                  billingForm.paymentMethod === "cod" ? "Cash on Delivery" : billingForm.paymentMethod === "bank" ? "Bank Transfer" : "Card"
                ] })
              ] })
            ] }),
            step === "confirmation" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center py-6 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 32, className: "text-emerald-500" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl text-foreground", children: "Order Placed!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Your order has been received and is being processed." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/60 rounded-xl px-6 py-3 w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Order ID" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-lg text-primary", children: orderId })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  "Delivering to:",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: billingForm.fullName })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  billingForm.address,
                  billingForm.city ? `, ${billingForm.city}` : ""
                ] }),
                chosenProvider && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  "Via:",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: chosenProvider.name })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-3 border-t border-border mt-2 flex gap-2", children: [
            step === "billing" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  className: "font-label flex-1",
                  onClick: handleClose,
                  "data-ocid": "shop.checkout.cancel_button",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  type: "submit",
                  form: "checkout-billing-form",
                  className: "font-label flex-1",
                  "data-ocid": "shop.checkout.submit_button",
                  children: [
                    "Review Order ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14, className: "ml-1" })
                  ]
                }
              )
            ] }),
            step === "summary" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  className: "font-label flex-1",
                  onClick: () => setStep("billing"),
                  "data-ocid": "shop.checkout.cancel_button",
                  children: "Back"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  className: "font-label flex-1",
                  onClick: handlePlaceOrder,
                  "data-ocid": "shop.checkout.confirm_button",
                  children: "Place Order"
                }
              )
            ] }),
            step === "confirmation" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "font-label w-full",
                onClick: handleClose,
                "data-ocid": "shop.checkout.close_button",
                children: "Continue Shopping"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PaymentModal,
      {
        open: paymentOpen,
        onCancel: () => setPaymentOpen(false),
        onSuccess: () => {
          setPaymentOpen(false);
          doPlaceOrder();
        },
        amount: finalTotal,
        title: "Order Payment"
      }
    )
  ] });
}
function DeliveryProvidersTab({
  providers,
  onRegister
}) {
  const [name, setName] = reactExports.useState("");
  const [type, setType] = reactExports.useState("freelancer");
  const [coverage, setCoverage] = reactExports.useState("");
  const [perOrder, setPerOrder] = reactExports.useState("");
  const [perKm, setPerKm] = reactExports.useState("");
  const [contact, setContact] = reactExports.useState("");
  const [vehicleType, setVehicleType] = reactExports.useState("Bike");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !coverage.trim() || !perOrder || !contact.trim()) {
      ue.error("Please fill in all required fields");
      return;
    }
    const newDp = {
      id: `dp-${Date.now()}`,
      name: name.trim(),
      type,
      coverageArea: coverage.trim(),
      perOrderRate: Number(perOrder) || 0,
      perKmRate: Number(perKm) || 0,
      contact: contact.trim(),
      rating: 0,
      deliveries: 0
    };
    onRegister(newDp);
    saveFamilyTreeBusiness({
      id: newDp.id,
      name: name.trim(),
      category: "Delivery",
      type: `Delivery Business (${vehicleType})`,
      ownerName: name.trim(),
      phone: contact.trim(),
      location: coverage.trim(),
      description: `Delivery provider — Vehicle: ${vehicleType}, ₹${perOrder}/order, ₹${perKm}/km`
    });
    ue.success(
      "Registered as delivery provider and added to Family Tree businesses!"
    );
    setName("");
    setCoverage("");
    setPerOrder("");
    setPerKm("");
    setContact("");
    setVehicleType("Bike");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-foreground text-base mb-1", children: "Register as Delivery Provider" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: "Offer delivery services to shop customers and earn per order." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: handleSubmit,
          className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Business / Name *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  placeholder: "Your name or business name",
                  value: name,
                  onChange: (e) => setName(e.target.value),
                  className: "text-sm",
                  "data-ocid": "delivery.name_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Type *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  value: type,
                  onValueChange: (v) => setType(v),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectTrigger,
                      {
                        className: "text-sm",
                        "data-ocid": "delivery.type_select",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "freelancer", children: "Freelancer" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "company", children: "Company" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "business", children: "Business" })
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Coverage Area *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  placeholder: "e.g. Mumbai, Andheri, Bandra",
                  value: coverage,
                  onChange: (e) => setCoverage(e.target.value),
                  className: "text-sm",
                  "data-ocid": "delivery.coverage_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Per Order Rate (INR) *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  placeholder: "e.g. 49",
                  value: perOrder,
                  onChange: (e) => setPerOrder(e.target.value),
                  className: "text-sm",
                  "data-ocid": "delivery.perorder_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Per KM Rate (INR)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  placeholder: "e.g. 8",
                  value: perKm,
                  onChange: (e) => setPerKm(e.target.value),
                  className: "text-sm",
                  "data-ocid": "delivery.perkm_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Contact *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  placeholder: "+91 XXXXX XXXXX",
                  value: contact,
                  onChange: (e) => setContact(e.target.value),
                  className: "text-sm",
                  "data-ocid": "delivery.contact_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Vehicle Type *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: vehicleType, onValueChange: setVehicleType, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    className: "text-sm",
                    "data-ocid": "delivery.vehicle_type_select",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                  "Bike",
                  "Scooter",
                  "Cycle",
                  "Auto",
                  "Car",
                  "Van",
                  "Truck",
                  "Mini Truck"
                ].map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: v, children: v }, v)) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                className: "font-label",
                "data-ocid": "delivery.submit_button",
                children: "Register as Provider"
              }
            ) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-foreground text-base mb-4", children: [
        "Registered Providers",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-sm text-muted-foreground font-label font-normal", children: [
          "(",
          providers.length,
          ")"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: providers.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(DeliveryProviderCard, { provider: p }, p.id)) }),
      providers.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "text-center py-12 text-muted-foreground",
          "data-ocid": "delivery.empty_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { size: 36, className: "mx-auto mb-2 opacity-30" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "No providers registered yet. Be the first!" })
          ]
        }
      )
    ] })
  ] });
}
function FamilyTreeBizLinker() {
  const [ftBizList] = React.useState(() => getFamilyTreeBusinesses());
  const [selected, setSelected] = React.useState("none");
  if (ftBizList.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 p-3 rounded-lg border border-border bg-secondary/20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Link to Family Tree Business" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: selected, onValueChange: setSelected, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9", "data-ocid": "shop.ft_biz.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select existing business..." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "none", children: "— Register as new —" }),
        ftBizList.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: b.id, children: [
          b.name,
          " (",
          b.category,
          ")"
        ] }, b.id))
      ] })
    ] }),
    selected && selected !== "none" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-green-600 dark:text-green-400", children: "✓ Linked to your family tree business. Fields will be pre-filled." })
  ] });
}
function haversineKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
function ShopPage() {
  const { identity } = useInternetIdentity();
  const isLoggedIn = !!identity;
  const [bizRegOpen, setBizRegOpen] = reactExports.useState(false);
  const [dpRegOpen, setDpRegOpen] = reactExports.useState(false);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const [sortBy, setSortBy] = reactExports.useState("relevance");
  const [userLocation, setUserLocation] = reactExports.useState(null);
  reactExports.useState(() => {
    if (typeof navigator !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserLocation({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          });
          setSortBy("nearest");
        },
        () => {
        }
      );
    }
  });
  const [cartItems, setCartItems] = reactExports.useState([]);
  const [productsVersion, setProductsVersion] = React.useState(0);
  React.useEffect(() => {
    const h = () => setProductsVersion((v) => v + 1);
    window.addEventListener("globalProductsUpdated", h);
    return () => window.removeEventListener("globalProductsUpdated", h);
  }, []);
  const [cartOpen, setCartOpen] = reactExports.useState(false);
  const [checkoutOpen, setCheckoutOpen] = reactExports.useState(false);
  const [deliveryProviders, setDeliveryProviders] = reactExports.useState(INITIAL_DELIVERY_PROVIDERS);
  const [_surveyVotes, _setSurveyVotes] = reactExports.useState([]);
  const userAddedProducts = React.useMemo(() => {
    try {
      const raw = localStorage.getItem("ic_user_products");
      if (!raw) return [];
      const arr = JSON.parse(raw);
      return arr.map((p, i) => ({
        id: `user-${p.id || i}`,
        productId: 9e3 + i,
        name: p.name || "User Product",
        description: p.description || "",
        price: p.price || 0,
        category: p.category || "Other",
        rating: 4,
        seller: p.seller || "IndyaCentral User",
        isService: p.isService || false,
        photoUrl: p.photoUrl || "",
        votes: 5,
        sourceModule: p.sourceModule || "User"
      }));
    } catch {
      return [];
    }
  }, []);
  const viewedCategories = React.useMemo(() => {
    try {
      return JSON.parse(
        localStorage.getItem("ic_viewed_categories") || "[]"
      );
    } catch {
      return [];
    }
  }, []);
  const globalProducts = getGlobalProducts().map((p, i) => ({
    id: `global-${p.id}`,
    productId: 8e3 + i,
    name: p.name,
    description: p.description,
    price: p.price,
    category: p.category,
    rating: p.rating || 4,
    seller: p.seller || p.businessName || "IndyaCentral",
    isService: p.isService || false,
    photoUrl: p.imageUrl || "",
    votes: p.votes,
    sourceModule: p.module,
    isBestBuy: p.isBestBuy || viewedCategories.includes(p.category)
  }));
  const baseItems = [
    ...globalProducts,
    ...userAddedProducts,
    ...SAMPLE_PRODUCTS.map((p) => ({
      id: `product-${p.id}`,
      productId: p.id,
      name: p.name,
      description: p.description,
      price: p.isRental && p.price === 0 ? p.rentalPricePerDay || 0 : p.price,
      category: p.category,
      rating: p.rating,
      seller: p.seller,
      isService: false,
      photoUrl: p.photos[0],
      votes: Math.floor(30 + Math.random() * 200),
      sourceModule: "Products"
    })),
    ...SAMPLE_SERVICES.map((s) => ({
      id: `service-${s.id}`,
      productId: s.id,
      name: s.name,
      description: s.description,
      price: s.pricePerHour,
      category: s.category,
      rating: s.rating,
      seller: s.provider,
      isService: true,
      photoUrl: s.photos[0],
      votes: Math.floor(20 + Math.random() * 150),
      sourceModule: "Services"
    })),
    ...EXTRA_SHOP_ITEMS
  ];
  const filteredItems = baseItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === "top-voted") return (b.votes || 0) - (a.votes || 0);
    if (sortBy === "top-reviewed") return b.rating - a.rating;
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "nearest" && userLocation) {
      const aDist = haversineKm(
        userLocation.lat,
        userLocation.lng,
        a.lat ?? 0,
        a.lng ?? 0
      );
      const bDist = haversineKm(
        userLocation.lat,
        userLocation.lng,
        b.lat ?? 0,
        b.lng ?? 0
      );
      return aDist - bDist;
    }
    return 0;
  });
  const subtotal = cartItems.reduce((s, i) => s + i.qty * i.unitPrice, 0);
  const tax = subtotal * TAX_RATE;
  const grandTotal = subtotal + tax;
  const totalCartItems = cartItems.reduce((s, i) => s + i.qty, 0);
  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.id === item.id);
      if (existing) {
        return prev.map(
          (ci) => ci.id === item.id ? { ...ci, qty: ci.qty + 1 } : ci
        );
      }
      return [
        ...prev,
        {
          id: item.id,
          productId: item.productId,
          name: item.name,
          unitPrice: item.price,
          qty: 1,
          category: item.category,
          isService: item.isService,
          photoUrl: item.photoUrl
        }
      ];
    });
    ue.success(`${item.name} added to cart`);
  };
  const updateQty = (id, delta) => {
    setCartItems(
      (prev) => prev.map((ci) => ci.id === id ? { ...ci, qty: ci.qty + delta } : ci).filter((ci) => ci.qty > 0)
    );
  };
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((ci) => ci.id !== id));
  };
  const handleCheckoutClose = (clearCart) => {
    setCheckoutOpen(false);
    if (clearCart) {
      setCartItems([]);
      setCartOpen(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 lg:p-8 pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 animate-fade-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-display font-bold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { size: 28, className: "text-primary" }),
          "Shop"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: "Browse products and services from all modules across IndyaCentral" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          className: "font-label gap-2 relative",
          onClick: () => setCartOpen(true),
          "data-ocid": "shop.cart.open_modal_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { size: 16 }),
            "Cart",
            totalCartItems > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1.5 -right-1.5 min-w-[20px] h-5 rounded-full flex items-center justify-center text-[10px] font-bold bg-primary text-primary-foreground px-1", children: totalCartItems })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5 flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
            style: { background: "oklch(0.55 0.22 280 / 0.15)" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 20, style: { color: "oklch(0.55 0.22 280)" } })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm text-foreground", children: "Register Your Business" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 mb-3", children: "List your products & services, reach thousands of customers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: bizRegOpen, onOpenChange: setBizRegOpen, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                className: "font-label h-8 text-xs gap-1.5",
                "data-ocid": "shop.register_business.open_modal_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 13 }),
                  " Register Business"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DialogContent,
              {
                className: "sm:max-w-md",
                "data-ocid": "shop.register_business.dialog",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display", children: "Register Your Business" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Fill in the details to get listed on IndyaCentral Shop" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "form",
                    {
                      onSubmit: (e) => {
                        e.preventDefault();
                        ue.success(
                          "Registration submitted! Your business will be linked to your Family Tree. A Family Circle admin will review and approve."
                        );
                        setBizRegOpen(false);
                      },
                      className: "space-y-3 mt-2",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(FamilyTreeBizLinker, {}),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Business Name *" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              placeholder: "e.g. Spice Garden Restaurant",
                              required: true,
                              "data-ocid": "shop.biz_name.input"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Category" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { defaultValue: "Food", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                                "Food",
                                "Electronics",
                                "Fashion",
                                "Healthcare",
                                "Education",
                                "Real Estate",
                                "Travel",
                                "Services",
                                "Other"
                              ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Pincode *" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Input,
                              {
                                placeholder: "110001",
                                required: true,
                                "data-ocid": "shop.biz_pincode.input"
                              }
                            )
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Area / Locality" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              placeholder: "e.g. Connaught Place, New Delhi",
                              "data-ocid": "shop.biz_area.input"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Phone" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              placeholder: "+91 98765 43210",
                              "data-ocid": "shop.biz_phone.input"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Description" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Textarea,
                            {
                              rows: 2,
                              placeholder: "What does your business offer?",
                              className: "resize-none"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { size: 11 }),
                          " You'll need to login to complete registration"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Button,
                            {
                              type: "button",
                              variant: "outline",
                              className: "flex-1 font-label h-9",
                              onClick: () => setBizRegOpen(false),
                              "data-ocid": "shop.biz_reg.cancel_button",
                              children: "Cancel"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Button,
                            {
                              type: "submit",
                              className: "flex-1 font-label h-9",
                              "data-ocid": "shop.biz_reg.submit_button",
                              children: "Submit"
                            }
                          )
                        ] })
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5 flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
            style: { background: "oklch(0.52 0.14 155 / 0.15)" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { size: 20, style: { color: "oklch(0.52 0.14 155)" } })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm text-foreground", children: "Become a Delivery Partner" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 mb-3", children: "Set your own rates and earn delivering orders" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: dpRegOpen, onOpenChange: setDpRegOpen, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "font-label h-8 text-xs gap-1.5 border-green-500/40 text-green-700 hover:bg-green-50",
                "data-ocid": "shop.delivery_partner.open_modal_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 13 }),
                  " Register as Partner"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DialogContent,
              {
                className: "sm:max-w-md max-h-[90vh] overflow-y-auto",
                "data-ocid": "shop.delivery_partner.dialog",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display", children: "Become a Delivery Partner" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Register with your coverage area and rates" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "form",
                    {
                      onSubmit: (e) => {
                        var _a;
                        e.preventDefault();
                        const fd = new FormData(e.currentTarget);
                        const dpName = fd.get("dp_name") || "Delivery Partner";
                        const dpArea = fd.get("dp_area") || "";
                        const dpPhone = fd.get("dp_phone") || "";
                        const dpRate = fd.get("dp_rate") || "0";
                        const dpVehicle = ((_a = e.currentTarget.querySelector("[data-dp-vehicle]")) == null ? void 0 : _a.value) || "Bike";
                        saveFamilyTreeBusiness({
                          id: `dp-cta-${Date.now()}`,
                          name: dpName,
                          category: "Delivery",
                          type: `Delivery Business (${dpVehicle})`,
                          ownerName: dpName,
                          phone: dpPhone,
                          location: dpArea,
                          description: `Delivery partner — Vehicle: ${dpVehicle}, ₹${dpRate}/km`
                        });
                        ue.success(
                          "Registered as delivery partner and added to Family Tree businesses!"
                        );
                        setDpRegOpen(false);
                      },
                      className: "space-y-3 mt-2",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Your Name *" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              name: "dp_name",
                              placeholder: "Full name",
                              required: true,
                              "data-ocid": "shop.dp_name.input"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Pincode(s)" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Input,
                              {
                                name: "dp_pincode",
                                placeholder: "110001, 110002",
                                "data-ocid": "shop.dp_pincode.input"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Per-km Rate (₹)" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Input,
                              {
                                type: "number",
                                name: "dp_rate",
                                placeholder: "12",
                                "data-ocid": "shop.dp_rate.input"
                              }
                            )
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Area / Locality" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              name: "dp_area",
                              placeholder: "e.g. South Delhi",
                              "data-ocid": "shop.dp_area.input"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Vehicle Type" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { defaultValue: "Bike", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-9", "data-dp-vehicle": "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Bike", "Scooter", "Auto", "Car", "Van", "Cycle"].map(
                              (v) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: v, children: v }, v)
                            ) })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Weight Rates (₹)" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: [
                            ["Up to 1 kg", "dp_w1"],
                            ["1–5 kg", "dp_w2"],
                            ["5–10 kg", "dp_w3"],
                            ["10 kg+", "dp_w4"]
                          ].map(([label, id]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] text-muted-foreground", children: label }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Input,
                              {
                                type: "number",
                                placeholder: "₹0",
                                className: "h-8 text-xs",
                                "data-ocid": `shop.${id}.input`
                              }
                            )
                          ] }, id)) })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Phone" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              name: "dp_phone",
                              placeholder: "+91 98765 43210",
                              "data-ocid": "shop.dp_phone.input"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Button,
                            {
                              type: "button",
                              variant: "outline",
                              className: "flex-1 font-label h-9",
                              onClick: () => setDpRegOpen(false),
                              "data-ocid": "shop.dp_reg.cancel_button",
                              children: "Cancel"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Button,
                            {
                              type: "submit",
                              className: "flex-1 font-label h-9",
                              "data-ocid": "shop.dp_reg.submit_button",
                              children: "Submit"
                            }
                          )
                        ] })
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "listings", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "listings", "data-ocid": "shop.listings.tab", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { size: 13, className: "mr-1.5" }),
          "Products & Services"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "delivery", "data-ocid": "shop.delivery.tab", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { size: 13, className: "mr-1.5" }),
          "Delivery Providers"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "auctions", "data-ocid": "shop.auction.tab", children: "🔨 Auctions" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "listings", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 max-w-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Search,
              {
                size: 15,
                className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "Search products and services...",
                value: searchQuery,
                onChange: (e) => setSearchQuery(e.target.value),
                className: "pl-9 h-10",
                "data-ocid": "shop.search_input"
              }
            ),
            searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setSearchQuery(""),
                className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 13 })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: sortBy,
              onValueChange: (v) => setSortBy(v),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    className: "w-full sm:w-48 h-10",
                    "data-ocid": "shop.sort.select",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Sort by" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "nearest", children: "Nearest First" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "relevance", children: "Relevance" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "top-voted", children: "Top Voted" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "top-reviewed", children: "Top Reviewed" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "newest", children: "Newest" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "price-asc", children: "Price: Low to High" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "price-desc", children: "Price: High to Low" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mb-5 overflow-x-auto pb-2 scrollbar-none", children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setActiveCategory(cat),
            className: `shrink-0 px-4 py-1.5 rounded-full text-xs font-label font-semibold transition-all border ${activeCategory === cat ? "bg-primary text-primary-foreground border-primary" : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"}`,
            "data-ocid": "shop.category.tab",
            children: cat
          },
          cat
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center gap-3 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
            sortedItems.length,
            " item",
            sortedItems.length !== 1 ? "s" : "",
            activeCategory !== "All" ? ` in ${activeCategory}` : "",
            searchQuery ? ` for "${searchQuery}"` : ""
          ] }),
          sortBy !== "relevance" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-xs capitalize", children: [
            "Sorted: ",
            sortBy.replace("-", " ")
          ] })
        ] }),
        sortedItems.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "text-center py-20 text-muted-foreground",
            "data-ocid": "shop.listings.empty_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 40, className: "mx-auto mb-3 opacity-30" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label font-semibold text-foreground mb-1", children: "No items found" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: searchQuery ? `No results for "${searchQuery}"` : `No items in ${activeCategory}` })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5", children: sortedItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          ShopProductCard,
          {
            id: item.id,
            name: item.name,
            description: item.description,
            price: item.price,
            category: item.category,
            rating: item.rating,
            seller: item.seller,
            isService: item.isService,
            photoUrl: item.photoUrl,
            sourceModule: item.sourceModule,
            votes: item.votes,
            isBestBuy: item.isBestBuy,
            isLoggedIn,
            createdAt: item.createdAt,
            onAddToCart: () => addToCart(item),
            distanceKm: userLocation && item.lat ? haversineKm(
              userLocation.lat,
              userLocation.lng,
              item.lat,
              item.lng
            ) : void 0
          },
          item.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "delivery", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        DeliveryProvidersTab,
        {
          providers: deliveryProviders,
          onRegister: (p) => setDeliveryProviders((prev) => [p, ...prev])
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "auctions", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShopAuctionTab, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CartDrawer,
      {
        open: cartOpen,
        onClose: () => setCartOpen(false),
        cartItems,
        onQtyChange: updateQty,
        onRemove: removeItem,
        subtotal,
        tax,
        grandTotal,
        onCheckout: () => {
          setCartOpen(false);
          setCheckoutOpen(true);
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CheckoutDialog,
      {
        open: checkoutOpen,
        onClose: handleCheckoutClose,
        cartItems,
        subtotal,
        tax,
        grandTotal,
        deliveryProviders
      }
    )
  ] });
}
export {
  ShopPage as default
};
