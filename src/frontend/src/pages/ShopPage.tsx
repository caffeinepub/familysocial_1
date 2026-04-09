import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import {
  Building2,
  Bus,
  CheckCircle2,
  ChevronRight,
  Globe,
  Info as InfoIcon,
  Loader2,
  MapPin,
  Minus,
  Package,
  Phone,
  Plane,
  Plus,
  RefreshCw,
  Search,
  ShoppingBag,
  ShoppingCart,
  Star,
  ThumbsDown,
  ThumbsUp,
  Train,
  Trash2,
  Truck,
  User,
  Users,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { Megaphone } from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import BoostPostDialog from "../components/BoostPostDialog";
import { ShopAuctionTab } from "../components/BusinessDiscoveryFeatures";
import { LikeVoteBar } from "../components/LikeVoteBar";
import { PaymentModal } from "../components/PaymentModal";
import { ReviewModal } from "../components/ReviewModal";
import { useCurrency } from "../contexts/CurrencyContext";
import {
  getFamilyTreeBusinesses,
  saveFamilyTreeBusiness,
} from "../utils/familyTreeState";
import {
  addGlobalProduct,
  getGlobalProducts,
} from "../utils/globalProductsState";
import { formatTimeAgo } from "../utils/timeUtils";
import { SAMPLE_PRODUCTS, SAMPLE_SERVICES } from "./ProductsServicesPage";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ShopCartItem {
  id: string;
  productId: number;
  name: string;
  unitPrice: number;
  qty: number;
  category: string;
  isService: boolean;
  photoUrl?: string;
}

type CheckoutStep = "billing" | "summary" | "confirmation";

interface BillingForm {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  paymentMethod: "cod" | "bank" | "card";
  notes: string;
}

interface DeliveryProvider {
  id: string;
  name: string;
  type: "freelancer" | "company" | "business";
  coverageArea: string;
  perOrderRate: number;
  perKmRate: number;
  contact: string;
  rating: number;
  deliveries: number;
}

interface SurveyVote {
  itemId: string;
  stars: number;
  categories: string[];
  comment: string;
}

type SortOption =
  | "relevance"
  | "top-voted"
  | "top-reviewed"
  | "newest"
  | "price-asc"
  | "price-desc"
  | "nearest";

// ─── Constants ────────────────────────────────────────────────────────────────

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
  "Other",
];

const CATEGORY_COLORS: Record<string, string> = {
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
  "Food & Beverages": "oklch(0.62 0.18 55)",
};

const TAX_RATE = 0.05;

// ─── External Search Types ─────────────────────────────────────────────────────

interface OpenFoodProduct {
  id: string;
  product_name: string;
  brands: string;
  categories_tags: string[];
  image_url?: string;
  nutriscore_grade?: string;
}

interface OSMBusiness {
  place_id: number;
  display_name: string;
  lat: string;
  lon: string;
  address?: {
    road?: string;
    city?: string;
    state?: string;
    country?: string;
  };
  distanceKm?: number;
}

interface LocalSeller {
  id: string;
  name: string;
  businessName: string;
  category: string;
  productCount: number;
  rating: number;
  location: string;
}

// Extra module-specific items
const EXTRA_SHOP_ITEMS = [
  {
    id: "travel-1",
    productId: 101,
    name: "Goa Beach Resort Package",
    description:
      "3-night stay at a beachfront resort with breakfast and transfers included.",
    price: 18500,
    category: "Travel",
    rating: 4.7,
    seller: "SunVista Travels",
    isService: true,
    sourceModule: "Travel",
    votes: 128,
    photoUrl: undefined as string | undefined,
  },
  {
    id: "healthcare-1",
    productId: 102,
    name: "Digital Blood Pressure Monitor",
    description:
      "Automatic upper arm BP monitor with memory for 60 readings. WHO approved.",
    price: 2800,
    category: "Healthcare",
    rating: 4.6,
    seller: "MediCare Supplies",
    isService: false,
    sourceModule: "Healthcare",
    votes: 74,
    photoUrl: undefined as string | undefined,
  },
  {
    id: "realestate-1",
    productId: 103,
    name: "Modular Kitchen Fitting",
    description:
      "Complete modular kitchen setup with granite countertop, cabinets, and sink.",
    price: 125000,
    category: "Real Estate",
    rating: 4.5,
    seller: "HomeStyle Interiors",
    isService: false,
    sourceModule: "Real Estate",
    votes: 45,
    photoUrl: undefined as string | undefined,
  },
  {
    id: "education-1",
    productId: 104,
    name: "CBSE Class 10 Complete Book Set",
    description:
      "Full set of NCERT textbooks for Class 10 all subjects, new edition.",
    price: 1850,
    category: "Education",
    rating: 4.8,
    seller: "KnowledgeNest Books",
    isService: false,
    sourceModule: "Education",
    votes: 210,
    photoUrl: undefined as string | undefined,
  },
  {
    id: "gated-1",
    productId: 105,
    name: "CCTV 8-Camera Kit",
    description:
      "Full HD night-vision cameras with DVR, cables, and remote monitoring app.",
    price: 24000,
    category: "Electronics",
    rating: 4.4,
    seller: "SecureZone India",
    isService: false,
    sourceModule: "Gated Community",
    votes: 88,
    photoUrl: undefined as string | undefined,
  },
  {
    id: "healthcare-2",
    productId: 106,
    name: "General Health Consultation",
    description:
      "30-minute general physician consultation via video or in-clinic. Prescription included.",
    price: 400,
    category: "Healthcare",
    rating: 4.9,
    seller: "Dr. Priya Sharma",
    isService: true,
    sourceModule: "Healthcare",
    votes: 305,
    photoUrl: undefined as string | undefined,
  },
  {
    id: "food-1",
    productId: 107,
    name: "Biryani House Special",
    description:
      "Aromatic dum biryani with tender chicken, saffron rice, and raita. Serves 1.",
    price: 299,
    category: "Food & Beverages",
    rating: 4.8,
    seller: "Biryani House Mumbai",
    isService: false,
    sourceModule: "Food",
    votes: 412,
    photoUrl: undefined as string | undefined,
    lat: 19.07,
    lng: 72.87,
  },
  {
    id: "food-2",
    productId: 108,
    name: "Fresh Organic Vegetables",
    description:
      "Seasonal fresh organic vegetables, locally sourced. 2kg assorted basket.",
    price: 150,
    category: "Food & Beverages",
    rating: 4.6,
    seller: "Green Earth Grocery",
    isService: false,
    sourceModule: "Food",
    votes: 285,
    photoUrl: undefined as string | undefined,
    lat: 28.7,
    lng: 77.1,
  },
  {
    id: "food-3",
    productId: 109,
    name: "South Indian Thali",
    description:
      "Authentic South Indian thali with rice, sambar, rasam, 3 curries and papad.",
    price: 199,
    category: "Food & Beverages",
    rating: 4.7,
    seller: "Udupi Palace Bengaluru",
    isService: false,
    sourceModule: "Food",
    votes: 356,
    photoUrl: undefined as string | undefined,
    lat: 12.97,
    lng: 77.59,
  },
  {
    id: "food-4",
    productId: 110,
    name: "Pizza & Pasta Combo",
    description:
      "7-inch wood-fired pizza with a side of pasta in choice of sauce. Vegetarian.",
    price: 349,
    category: "Food & Beverages",
    rating: 4.5,
    seller: "La Bella Chennai",
    isService: false,
    sourceModule: "Food",
    votes: 198,
    photoUrl: undefined as string | undefined,
    lat: 13.08,
    lng: 80.27,
  },
  {
    id: "food-5",
    productId: 111,
    name: "Sweets & Namkeen Box",
    description:
      "Assorted traditional sweets and namkeen in a festive gift box, 500g.",
    price: 250,
    category: "Food & Beverages",
    rating: 4.9,
    seller: "Halwai Sweets Hyderabad",
    isService: false,
    sourceModule: "Food",
    votes: 523,
    photoUrl: undefined as string | undefined,
    lat: 17.38,
    lng: 78.48,
  },
  {
    id: "food-6",
    productId: 112,
    name: "Fresh Fruit Basket",
    description:
      "Seasonal mixed fruit basket with mangoes, bananas, apples and pomegranates. 3kg.",
    price: 199,
    category: "Food & Beverages",
    rating: 4.7,
    seller: "Nature's Best Kolkata",
    isService: false,
    sourceModule: "Food",
    votes: 301,
    photoUrl: undefined as string | undefined,
    lat: 22.57,
    lng: 88.36,
  },
];

const INITIAL_DELIVERY_PROVIDERS: DeliveryProvider[] = [
  {
    id: "dp-1",
    name: "QuickRun Logistics",
    type: "company",
    coverageArea: "Mumbai, Thane, Navi Mumbai",
    perOrderRate: 49,
    perKmRate: 8,
    contact: "+91-9876543210",
    rating: 4.7,
    deliveries: 1240,
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
    deliveries: 380,
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
    deliveries: 3500,
  },
];

// ─── Shop Product Card ────────────────────────────────────────────────────────

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
  source,
  isBestBuy,
  onAddToCart,
  distanceKm,
  isLoggedIn,
  createdAt,
}: {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  seller: string;
  isService: boolean;
  photoUrl?: string;
  sourceModule?: string;
  votes?: number;
  source?: string;
  isBestBuy?: boolean;
  onAddToCart: () => void;
  distanceKm?: number;
  isLoggedIn?: boolean;
  createdAt?: string;
}) {
  const { formatPrice } = useCurrency();
  const color = CATEGORY_COLORS[category] || "oklch(0.55 0.10 200)";
  const [boostOpen, setBoostOpen] = useState(false);
  const [boosted, setBoosted] = useState(() => {
    const b: string[] = JSON.parse(
      localStorage.getItem("ic_boosted_posts") || "[]",
    );
    return b.includes(name);
  });
  const isExternalSource = source === "OpenFoodFacts" || source === "API";

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col group relative">
      {distanceKm !== undefined && distanceKm > 0 && (
        <span className="absolute top-2 right-2 z-10 text-[10px] px-2 py-0.5 rounded-full font-semibold bg-primary/90 text-primary-foreground">
          ~{distanceKm.toFixed(1)} km
        </span>
      )}
      {isBestBuy && (
        <span className="absolute top-2 left-2 z-10 text-[10px] px-2 py-0.5 rounded-full font-bold bg-yellow-400 text-yellow-900">
          ⭐ Best Buy
        </span>
      )}
      {isExternalSource && !isBestBuy && (
        <span className="absolute top-2 left-2 z-10 flex items-center gap-0.5 text-[9px] px-1.5 py-0.5 rounded-full font-semibold bg-blue-500/90 text-white">
          <Globe size={8} /> 🌐
        </span>
      )}
      {photoUrl ? (
        <img src={photoUrl} alt={name} className="w-full h-44 object-cover" />
      ) : (
        <div
          className="w-full h-44 flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${color}15 0%, ${color}35 100%)`,
          }}
        >
          {isService ? (
            <Wrench size={36} style={{ color }} className="opacity-60" />
          ) : (
            <Package size={36} style={{ color }} className="opacity-60" />
          )}
        </div>
      )}

      <div className="p-4 flex flex-col flex-1">
        {/* Category + module badge */}
        <div className="flex items-center justify-between mb-2 flex-wrap gap-1">
          <Badge
            className="text-[10px] px-2 py-0 font-label border-0"
            style={{ background: `${color}18`, color }}
          >
            {category}
          </Badge>
          {sourceModule && (
            <Badge
              variant="outline"
              className="text-[10px] px-1.5 py-0 font-label"
            >
              {sourceModule}
            </Badge>
          )}
        </div>

        <h3 className="font-label font-bold text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2 flex-1">
          {description}
        </p>
        <p className="text-xs text-muted-foreground mb-2">by {seller}</p>

        {/* Rating + votes */}
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center gap-1">
            <Star size={11} className="fill-current text-amber-400" />
            <span className="text-xs font-label font-semibold text-foreground">
              {rating.toFixed(1)}
            </span>
          </div>
          {votes !== undefined && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <ThumbsUp size={11} />
              <span>{votes}</span>
            </div>
          )}
        </div>

        {/* Price + CTAs */}
        <div className="flex items-center justify-between mt-auto gap-2 flex-wrap">
          <div>
            <span className="font-display font-bold text-foreground text-base">
              {formatPrice(price)}
            </span>
            {isService && (
              <span className="text-xs text-muted-foreground ml-1">/hr</span>
            )}
          </div>
          <div className="flex gap-1.5">
            <ReviewModal
              targetId={id}
              targetType={isService ? "service" : "product"}
              targetName={name}
              currentRating={rating}
              reviewCount={0}
            />
            <Button
              size="sm"
              className="h-8 text-xs font-label gap-1.5"
              onClick={onAddToCart}
              data-ocid="shop.cart.button"
            >
              <ShoppingCart size={12} />
              {isService ? "Book" : "Cart"}
            </Button>
            {isLoggedIn && (
              <Button
                size="sm"
                variant="ghost"
                className="h-8 text-xs font-label gap-1 px-2"
                onClick={() => setBoostOpen(true)}
                style={{ color: boosted ? "oklch(0.65 0.20 85)" : undefined }}
                data-ocid="shop.product.primary_button"
              >
                <Zap size={11} fill={boosted ? "currentColor" : "none"} />
                {boosted ? "Boosted" : "Boost"}
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="px-4 pb-3 flex items-center justify-between border-t border-border/40 pt-2">
        <LikeVoteBar id={id} />
        {createdAt && (
          <span className="text-[10px] text-muted-foreground">
            {formatTimeAgo(createdAt)}
          </span>
        )}
      </div>
      <BoostPostDialog
        open={boostOpen}
        onClose={() => setBoostOpen(false)}
        postTitle={name}
        postType="product"
        onBoostSuccess={() => setBoosted(true)}
      />
    </div>
  );
}

// ─── External Food Product Card (OpenFoodFacts) ───────────────────────────────

function ExternalFoodCard({
  product,
  onAddToShop,
}: {
  product: OpenFoodProduct;
  onAddToShop: (p: OpenFoodProduct) => void;
}) {
  const category = product.categories_tags?.[0]
    ? product.categories_tags[0].replace(/^en:/, "").replace(/-/g, " ")
    : "Food & Beverages";

  return (
    <div className="bg-card border border-primary/20 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col group relative">
      {/* Web source badge */}
      <span className="absolute top-2 right-2 z-10 flex items-center gap-0.5 text-[9px] px-1.5 py-0.5 rounded-full font-semibold bg-blue-500/90 text-white">
        <Globe size={8} /> Web
      </span>
      {product.image_url ? (
        <img
          src={product.image_url}
          alt={product.product_name}
          className="w-full h-36 object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      ) : (
        <div className="w-full h-36 flex items-center justify-center bg-blue-500/8">
          <Package size={32} className="text-blue-400 opacity-50" />
        </div>
      )}
      <div className="p-3 flex flex-col flex-1 gap-1.5">
        <div className="flex items-center gap-1 flex-wrap">
          <Badge className="text-[9px] px-1.5 py-0 border-0 bg-blue-500/12 text-blue-600 dark:text-blue-400 capitalize">
            {category.slice(0, 20)}
          </Badge>
          <Badge variant="outline" className="text-[9px] px-1.5 py-0 gap-0.5">
            <Globe size={8} /> OpenFoodFacts
          </Badge>
        </div>
        <h3 className="font-label font-bold text-foreground text-sm line-clamp-2 group-hover:text-primary transition-colors">
          {product.product_name || "Unknown Product"}
        </h3>
        {product.brands && (
          <p className="text-xs text-muted-foreground">by {product.brands}</p>
        )}
        <div className="flex gap-2 mt-auto pt-1">
          <Button
            size="sm"
            variant="outline"
            className="h-7 text-xs font-label flex-1 gap-1 border-blue-400/40 text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-950/30"
            onClick={() => onAddToShop(product)}
            data-ocid="shop.ext_food.add_button"
          >
            <Plus size={10} /> Add to My Shop
          </Button>
        </div>
      </div>
    </div>
  );
}

// ─── Business Search Modal (Nominatim) ────────────────────────────────────────

function BusinessSearchModal({
  open,
  onClose,
  userLocation,
}: {
  open: boolean;
  onClose: () => void;
  userLocation: { lat: number; lng: number } | null;
}) {
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("Food");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<OSMBusiness[]>([]);
  const [shopSheet, setShopSheet] = useState<OSMBusiness | null>(null);

  const handleSearch = useCallback(async () => {
    const q = city.trim();
    if (!q) {
      toast.error("Please enter a city name");
      return;
    }
    setLoading(true);
    setResults([]);
    try {
      const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(`${category} shop ${q}`)}&format=json&limit=8&addressdetails=1`;
      const res = await fetch(url, {
        headers: { "Accept-Language": "en", "User-Agent": "IndyaCentral/1.0" },
      });
      if (!res.ok) throw new Error("API error");
      const data = (await res.json()) as OSMBusiness[];
      const enriched = data.map((b) => ({
        ...b,
        distanceKm: userLocation
          ? haversineKm(
              userLocation.lat,
              userLocation.lng,
              Number.parseFloat(b.lat),
              Number.parseFloat(b.lon),
            )
          : undefined,
      }));
      setResults(enriched);
      if (enriched.length === 0)
        toast.info("No businesses found — try another city or category");
    } catch {
      toast.error("Could not reach OpenStreetMap — showing local results only");
    } finally {
      setLoading(false);
    }
  }, [city, category, userLocation]);

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        className="sm:max-w-lg max-h-[85vh] flex flex-col"
        data-ocid="shop.biz_search.dialog"
      >
        <DialogHeader>
          <DialogTitle className="font-display flex items-center gap-2">
            <Building2 size={16} className="text-primary" /> Find Businesses
          </DialogTitle>
          <DialogDescription>
            Search local businesses via OpenStreetMap
          </DialogDescription>
        </DialogHeader>

        <div className="flex gap-2 mt-2">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger
              className="w-40 h-9"
              data-ocid="shop.biz_search.category_select"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[
                "Food",
                "Electronics",
                "Fashion",
                "Healthcare",
                "Education",
                "Grocery",
                "Pharmacy",
                "Books",
                "Bakery",
              ].map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            placeholder="City (e.g. Mumbai)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 h-9"
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            data-ocid="shop.biz_search.city_input"
          />
          <Button
            size="sm"
            className="h-9 px-3 font-label"
            onClick={handleSearch}
            disabled={loading}
            data-ocid="shop.biz_search.search_button"
          >
            {loading ? (
              <Loader2 size={14} className="animate-spin" />
            ) : (
              <Search size={14} />
            )}
          </Button>
        </div>

        <ScrollArea className="flex-1 mt-3">
          {loading && (
            <div className="flex items-center justify-center py-12 gap-2 text-muted-foreground">
              <Loader2 size={20} className="animate-spin" />
              <span className="text-sm">Searching...</span>
            </div>
          )}
          {!loading && results.length === 0 && (
            <div
              className="text-center py-12 text-muted-foreground"
              data-ocid="shop.biz_search.empty_state"
            >
              <Building2 size={36} className="mx-auto mb-2 opacity-30" />
              <p className="text-sm">
                Search a city to discover local businesses
              </p>
            </div>
          )}
          <div className="space-y-3">
            {results.map((biz) => (
              <div
                key={biz.place_id}
                className="bg-secondary/30 border border-border rounded-xl p-3 flex flex-col gap-2"
                data-ocid="shop.biz_search.result"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="font-label font-semibold text-foreground text-sm line-clamp-1">
                      {biz.display_name.split(",")[0]}
                    </p>
                    <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">
                      {biz.display_name}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <Badge
                      variant="outline"
                      className="text-[9px] gap-0.5 px-1.5"
                    >
                      <Globe size={8} /> OSM
                    </Badge>
                    {biz.distanceKm !== undefined && (
                      <span className="text-[10px] text-primary font-semibold">
                        ~{biz.distanceKm.toFixed(1)} km
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 text-xs font-label flex-1 gap-1"
                    onClick={() => setShopSheet(biz)}
                    data-ocid="shop.biz_search.visit_button"
                  >
                    <ShoppingBag size={10} /> Visit Shop
                  </Button>
                  <Button
                    size="sm"
                    className="h-7 text-xs font-label flex-1 gap-1"
                    onClick={() => {
                      toast.success(
                        "Registration flow opened — complete in Business Page",
                      );
                      onClose();
                    }}
                    data-ocid="shop.biz_search.register_button"
                  >
                    <Plus size={10} /> Register on IndyaCentral
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Mock products sheet for OSM business */}
        <Sheet
          open={!!shopSheet}
          onOpenChange={(v) => !v && setShopSheet(null)}
        >
          <SheetContent side="bottom" className="h-[60vh]">
            <SheetHeader>
              <SheetTitle className="font-display text-sm">
                {shopSheet?.display_name.split(",")[0]}
              </SheetTitle>
            </SheetHeader>
            <ScrollArea className="h-full mt-3">
              <div className="grid grid-cols-2 gap-3 pb-6">
                {[
                  "Signature Item",
                  "Popular Choice",
                  "Daily Special",
                  "House Favourite",
                ].map((name) => (
                  <div
                    key={name}
                    className="bg-card border border-border rounded-xl p-3"
                  >
                    <div className="w-full h-20 rounded-lg bg-primary/8 flex items-center justify-center mb-2">
                      <Package size={20} className="text-primary/50" />
                    </div>
                    <p className="font-label font-semibold text-xs text-foreground">
                      {name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">₹149</p>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </DialogContent>
    </Dialog>
  );
}

// ─── Seller Search Panel ──────────────────────────────────────────────────────

function SellerSearchPanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const sellers: LocalSeller[] = React.useMemo(() => {
    const ft = (() => {
      try {
        return JSON.parse(
          localStorage.getItem("ic_family_businesses") || "[]",
        ) as Array<{
          id: string;
          name: string;
          category: string;
          ownerName?: string;
          location?: string;
        }>;
      } catch {
        return [];
      }
    })();
    const gp = (() => {
      try {
        return JSON.parse(
          localStorage.getItem("ic_global_products") || "[]",
        ) as Array<{
          seller?: string;
          businessName?: string;
          category?: string;
        }>;
      } catch {
        return [];
      }
    })();

    // Count products per seller
    const counts: Record<string, number> = {};
    for (const p of gp) {
      const s = p.seller || p.businessName || "";
      if (s) counts[s] = (counts[s] || 0) + 1;
    }

    const ftSellers: LocalSeller[] = ft.map((b) => ({
      id: b.id,
      name: b.ownerName || b.name,
      businessName: b.name,
      category: b.category,
      productCount: counts[b.name] || 0,
      rating: 4.0 + Math.random() * 0.9,
      location: b.location || "India",
    }));

    const seedSellers: LocalSeller[] = [
      {
        id: "s1",
        name: "Raj Sharma",
        businessName: "Sharma General Store",
        category: "Food & Beverages",
        productCount: 12,
        rating: 4.7,
        location: "Mumbai",
      },
      {
        id: "s2",
        name: "Priya Iyer",
        businessName: "TeaTime India",
        category: "Food & Beverages",
        productCount: 8,
        rating: 4.5,
        location: "Chennai",
      },
      {
        id: "s3",
        name: "Amit Verma",
        businessName: "Tech Planet",
        category: "Electronics",
        productCount: 24,
        rating: 4.6,
        location: "Bengaluru",
      },
      {
        id: "s4",
        name: "Kavya Nair",
        businessName: "Khadi Crafts",
        category: "Fashion",
        productCount: 18,
        rating: 4.4,
        location: "Kochi",
      },
    ];

    const all = [...ftSellers, ...seedSellers];
    const seen = new Set<string>();
    return all.filter((s) => {
      if (seen.has(s.id)) return false;
      seen.add(s.id);
      return true;
    });
  }, []);

  const [query, setQuery] = useState("");
  const filtered = sellers.filter(
    (s) =>
      s.businessName.toLowerCase().includes(query.toLowerCase()) ||
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.category.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md flex flex-col p-0"
        data-ocid="shop.sellers.panel"
      >
        <SheetHeader className="px-5 py-4 border-b border-border">
          <SheetTitle className="font-display flex items-center gap-2">
            <Users size={16} className="text-primary" /> Find Sellers
          </SheetTitle>
        </SheetHeader>
        <div className="px-4 pt-3">
          <div className="relative">
            <Search
              size={13}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              placeholder="Search sellers, businesses..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-8 h-9 text-sm"
              data-ocid="shop.sellers.search_input"
            />
          </div>
        </div>
        <ScrollArea className="flex-1 px-4 py-3">
          {filtered.length === 0 ? (
            <div
              className="text-center py-12 text-muted-foreground"
              data-ocid="shop.sellers.empty_state"
            >
              <Users size={32} className="mx-auto mb-2 opacity-30" />
              <p className="text-sm">No sellers found</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((seller) => (
                <div
                  key={seller.id}
                  className="bg-card border border-border rounded-xl p-3 flex items-center gap-3"
                  data-ocid="shop.sellers.card"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <User size={18} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-label font-semibold text-foreground text-sm truncate">
                      {seller.businessName}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {seller.name} · {seller.location}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary font-label font-semibold">
                        {seller.category}
                      </span>
                      <span className="flex items-center gap-0.5 text-[10px] text-amber-500 font-semibold">
                        <Star size={9} className="fill-current" />{" "}
                        {seller.rating.toFixed(1)}
                      </span>
                      {seller.productCount > 0 && (
                        <span className="text-[10px] text-muted-foreground">
                          {seller.productCount} products
                        </span>
                      )}
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 text-xs font-label shrink-0"
                    onClick={() => toast.info(`Viewing ${seller.businessName}`)}
                    data-ocid="shop.sellers.view_button"
                  >
                    View
                  </Button>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

function DeliveryProviderCard({
  provider,
  selected,
  onSelect,
}: {
  provider: DeliveryProvider;
  selected?: boolean;
  onSelect?: () => void;
}) {
  const { formatPrice } = useCurrency();
  const typeColor =
    provider.type === "freelancer"
      ? "oklch(0.62 0.18 290)"
      : provider.type === "company"
        ? "oklch(0.55 0.18 240)"
        : "oklch(0.58 0.18 160)";

  return (
    <div
      className={`bg-card border rounded-xl p-4 transition-all ${
        selected
          ? "border-primary shadow-md ring-1 ring-primary/30"
          : "border-border hover:border-primary/40 hover:shadow-sm"
      } ${onSelect ? "cursor-pointer" : ""}`}
      onClick={onSelect}
      onKeyDown={(e) => e.key === "Enter" && onSelect?.()}
      role={onSelect ? "button" : undefined}
      tabIndex={onSelect ? 0 : undefined}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: `${typeColor}18` }}
          >
            <Truck size={18} style={{ color: typeColor }} />
          </div>
          <div>
            <p className="font-label font-semibold text-foreground text-sm">
              {provider.name}
            </p>
            <Badge
              className="text-[10px] px-1.5 py-0 mt-0.5 capitalize"
              style={{ background: `${typeColor}18`, color: typeColor }}
            >
              {provider.type}
            </Badge>
          </div>
        </div>
        {selected && (
          <CheckCircle2 size={18} className="text-primary shrink-0" />
        )}
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
        <div>
          <p className="text-muted-foreground">Per Order</p>
          <p className="font-label font-semibold text-foreground">
            {formatPrice(provider.perOrderRate)}
          </p>
        </div>
        <div>
          <p className="text-muted-foreground">Per KM</p>
          <p className="font-label font-semibold text-foreground">
            {formatPrice(provider.perKmRate)}
          </p>
        </div>
        <div>
          <p className="text-muted-foreground">Coverage</p>
          <p className="font-label font-medium text-foreground truncate">
            {provider.coverageArea}
          </p>
        </div>
        <div>
          <p className="text-muted-foreground">Rating</p>
          <p className="font-label font-semibold text-foreground flex items-center gap-1">
            <Star size={10} className="fill-amber-400 text-amber-400" />
            {provider.rating} · {provider.deliveries} deliveries
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Cart Drawer ──────────────────────────────────────────────────────────────

function CartDrawer({
  open,
  onClose,
  cartItems,
  onQtyChange,
  onRemove,
  subtotal,
  tax,
  grandTotal,
  onCheckout,
}: {
  open: boolean;
  onClose: () => void;
  cartItems: ShopCartItem[];
  onQtyChange: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  subtotal: number;
  tax: number;
  grandTotal: number;
  onCheckout: () => void;
}) {
  const { formatPrice } = useCurrency();
  const totalItems = cartItems.reduce((s, i) => s + i.qty, 0);

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md flex flex-col p-0"
        data-ocid="shop.cart.panel"
      >
        <SheetHeader className="px-5 py-4 border-b border-border">
          <SheetTitle className="font-display flex items-center gap-2">
            <ShoppingCart size={18} className="text-primary" />
            Cart
            {totalItems > 0 && (
              <span className="ml-1 text-xs bg-primary text-primary-foreground rounded-full px-2 py-0.5">
                {totalItems}
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        {cartItems.length === 0 ? (
          <div
            className="flex-1 flex flex-col items-center justify-center text-center p-8 gap-3"
            data-ocid="shop.cart.empty_state"
          >
            <ShoppingCart size={40} className="text-muted-foreground/30" />
            <p className="text-muted-foreground text-sm">Your cart is empty</p>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 px-5 py-4">
              <div className="space-y-4">
                {cartItems.map((item, idx) => (
                  <div
                    key={item.id}
                    className="flex gap-3 items-start"
                    data-ocid={`shop.cart.item.${idx + 1}`}
                  >
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 bg-secondary/50">
                      {item.photoUrl ? (
                        <img
                          src={item.photoUrl}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      ) : item.isService ? (
                        <Wrench size={20} className="text-muted-foreground" />
                      ) : (
                        <Package size={20} className="text-muted-foreground" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-label font-semibold text-foreground text-sm truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formatPrice(item.unitPrice)}
                        {item.isService ? "/hr" : ""}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          type="button"
                          onClick={() => onQtyChange(item.id, -1)}
                          className="w-6 h-6 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                        >
                          <Minus size={11} />
                        </button>
                        <span className="text-sm font-label font-semibold min-w-[20px] text-center">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => onQtyChange(item.id, 1)}
                          className="w-6 h-6 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                        >
                          <Plus size={11} />
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <p className="font-label font-semibold text-foreground text-sm">
                        {formatPrice(item.qty * item.unitPrice)}
                      </p>
                      <button
                        type="button"
                        onClick={() => onRemove(item.id)}
                        className="text-destructive hover:opacity-70 transition-opacity"
                        data-ocid={`shop.cart.delete_button.${idx + 1}`}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="px-5 py-4 border-t border-border space-y-3">
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Tax (5%)</span>
                  <span>+ {formatPrice(Math.round(tax))}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-display font-bold text-base text-foreground">
                  <span>Total</span>
                  <span className="text-primary">
                    {formatPrice(Math.round(grandTotal))}
                  </span>
                </div>
              </div>
              <Button
                className="w-full font-label gap-2"
                onClick={onCheckout}
                data-ocid="shop.cart.checkout_button"
              >
                <ShoppingCart size={15} />
                Proceed to Checkout <ChevronRight size={14} />
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}

// ─── Checkout Dialog ──────────────────────────────────────────────────────────

function CheckoutDialog({
  open,
  onClose,
  cartItems,
  subtotal,
  tax,
  grandTotal,
  deliveryProviders,
}: {
  open: boolean;
  onClose: (clearCart?: boolean) => void;
  cartItems: ShopCartItem[];
  subtotal: number;
  tax: number;
  grandTotal: number;
  deliveryProviders: DeliveryProvider[];
}) {
  const { formatPrice } = useCurrency();
  const [step, setStep] = useState<CheckoutStep>("billing");
  const [orderId, setOrderId] = useState("");
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<string>("");
  const [billingForm, setBillingForm] = useState<BillingForm>({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    paymentMethod: "cod",
    notes: "",
  });

  const chosenProvider = deliveryProviders.find(
    (p) => p.id === selectedProvider,
  );
  const deliveryFee = chosenProvider ? chosenProvider.perOrderRate : 0;
  const finalTotal = grandTotal + deliveryFee;

  const handleBillingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !billingForm.fullName.trim() ||
      !billingForm.phone.trim() ||
      !billingForm.address.trim()
    ) {
      toast.error("Please fill in all required fields");
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
    const id = `#ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(id);
    setStep("confirmation");
    toast.success("Order placed successfully!");
    // Save order to localStorage for Dashboard
    const ts = new Date().toISOString();
    const newOrder = {
      id,
      date: ts,
      items: cartItems.map((item) => ({
        name: item.name,
        qty: item.qty,
        price: item.unitPrice,
      })),
      total: cartItems.reduce((s, i) => s + i.qty * i.unitPrice, 0),
      status: "Order Placed",
      statusHistory: [
        { status: "Order Placed", timestamp: ts },
        {
          status: "Vendor Notified",
          timestamp: new Date(Date.now() + 2000).toISOString(),
          note: "Vendor notified automatically",
        },
      ],
      vendorId: "",
      courierId: "",
      billing: billingForm,
    };
    try {
      const existing = JSON.parse(
        localStorage.getItem("ic_user_orders") || "[]",
      );
      existing.unshift(newOrder);
      localStorage.setItem(
        "ic_user_orders",
        JSON.stringify(existing.slice(0, 50)),
      );
      // Fire vendor notification
      try {
        const notifications = JSON.parse(
          localStorage.getItem("indyaNotifications") || "[]",
        );
        notifications.unshift({
          id: `notif-${Date.now()}`,
          message: `New order ${id} received from ${billingForm.fullName || "Customer"}`,
          time: ts,
          read: false,
        });
        localStorage.setItem(
          "indyaNotifications",
          JSON.stringify(notifications.slice(0, 100)),
        );
        window.dispatchEvent(new Event("notificationAdded"));
      } catch {}
      window.dispatchEvent(new Event("orderPlaced"));
    } catch {}
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
      notes: "",
    });
    onClose(clear);
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && handleClose()}>
      <DialogContent
        className="sm:max-w-lg max-h-[90vh] flex flex-col"
        data-ocid="shop.checkout.dialog"
      >
        <DialogHeader>
          <DialogTitle className="font-display flex items-center gap-2">
            {step === "billing" && (
              <>
                <ShoppingCart size={16} className="text-primary" /> Billing
                Details
              </>
            )}
            {step === "summary" && (
              <>
                <Package size={16} className="text-primary" /> Order Summary
              </>
            )}
            {step === "confirmation" && (
              <>
                <CheckCircle2 size={16} className="text-emerald-500" /> Order
                Confirmed!
              </>
            )}
          </DialogTitle>
          <div className="flex items-center gap-2 mt-2">
            {(["billing", "summary", "confirmation"] as CheckoutStep[]).map(
              (s, i) => (
                <div key={s} className="flex items-center gap-2">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      step === s
                        ? "bg-primary text-primary-foreground"
                        : ["billing", "summary", "confirmation"].indexOf(step) >
                            i
                          ? "bg-emerald-500 text-white"
                          : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {i + 1}
                  </div>
                  {i < 2 && <div className="w-8 h-px bg-border" />}
                </div>
              ),
            )}
          </div>
        </DialogHeader>

        <ScrollArea className="flex-1 overflow-y-auto pr-1">
          {/* Step 1: Billing */}
          {step === "billing" && (
            <form
              id="checkout-billing-form"
              onSubmit={handleBillingSubmit}
              className="space-y-4 mt-3 pb-2"
            >
              <div className="space-y-2">
                <Label>Full Name *</Label>
                <Input
                  placeholder="Your full name"
                  value={billingForm.fullName}
                  onChange={(e) =>
                    setBillingForm((f) => ({ ...f, fullName: e.target.value }))
                  }
                  data-ocid="shop.checkout.name_input"
                />
              </div>
              <div className="space-y-2">
                <Label>Phone *</Label>
                <Input
                  placeholder="+91 XXXXX XXXXX"
                  value={billingForm.phone}
                  onChange={(e) =>
                    setBillingForm((f) => ({ ...f, phone: e.target.value }))
                  }
                  data-ocid="shop.checkout.phone_input"
                />
              </div>
              <div className="space-y-2">
                <Label>Delivery Address *</Label>
                <Textarea
                  placeholder="Street address, area..."
                  value={billingForm.address}
                  onChange={(e) =>
                    setBillingForm((f) => ({ ...f, address: e.target.value }))
                  }
                  className="resize-none text-sm"
                  rows={2}
                  data-ocid="shop.checkout.address_textarea"
                />
              </div>
              <div className="space-y-2">
                <Label>City</Label>
                <Input
                  placeholder="City"
                  value={billingForm.city}
                  onChange={(e) =>
                    setBillingForm((f) => ({ ...f, city: e.target.value }))
                  }
                  data-ocid="shop.checkout.city_input"
                />
              </div>
              <div className="space-y-2">
                <Label>Payment Method</Label>
                <Select
                  value={billingForm.paymentMethod}
                  onValueChange={(v) =>
                    setBillingForm((f) => ({
                      ...f,
                      paymentMethod: v as BillingForm["paymentMethod"],
                    }))
                  }
                >
                  <SelectTrigger data-ocid="shop.checkout.payment_select">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cod">Cash on Delivery</SelectItem>
                    <SelectItem value="bank">Bank Transfer</SelectItem>
                    <SelectItem value="card">Card Payment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Order Notes</Label>
                <Textarea
                  placeholder="Any special instructions..."
                  value={billingForm.notes}
                  onChange={(e) =>
                    setBillingForm((f) => ({ ...f, notes: e.target.value }))
                  }
                  className="resize-none text-sm"
                  rows={2}
                  data-ocid="shop.checkout.notes_textarea"
                />
              </div>
            </form>
          )}

          {/* Step 2: Order Summary + Delivery */}
          {step === "summary" && (
            <div className="space-y-4 mt-3 pb-2">
              {/* Items */}
              <div>
                <p className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  Items
                </p>
                <div className="space-y-2">
                  {cartItems.map((item, idx) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-start text-sm"
                      data-ocid={`shop.summary.item.${idx + 1}`}
                    >
                      <div className="flex-1 min-w-0">
                        <p className="font-label font-medium text-foreground truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {item.qty} × {formatPrice(item.unitPrice)}
                          {item.isService ? "/hr" : ""}
                        </p>
                      </div>
                      <span className="font-label font-semibold text-foreground ml-3 shrink-0">
                        {formatPrice(item.qty * item.unitPrice)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Choose Delivery Provider */}
              <div>
                <p className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wide mb-2 flex items-center gap-1">
                  <Truck size={12} /> Choose Delivery Provider
                </p>
                <div className="space-y-2">
                  {deliveryProviders.map((dp) => (
                    <DeliveryProviderCard
                      key={dp.id}
                      provider={dp}
                      selected={selectedProvider === dp.id}
                      onSelect={() => setSelectedProvider(dp.id)}
                    />
                  ))}
                  <button
                    type="button"
                    onClick={() => setSelectedProvider("")}
                    className={`w-full text-xs text-muted-foreground py-2 rounded-lg border border-dashed border-border hover:border-muted-foreground transition-colors ${
                      selectedProvider === "" ? "bg-secondary" : ""
                    }`}
                  >
                    Self Pickup (no delivery)
                  </button>
                </div>
              </div>

              <Separator />

              {/* Totals */}
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Tax (5%)</span>
                  <span>+ {formatPrice(Math.round(tax))}</span>
                </div>
                {deliveryFee > 0 && (
                  <div className="flex justify-between text-muted-foreground">
                    <span>Delivery ({chosenProvider?.name})</span>
                    <span>+ {formatPrice(deliveryFee)}</span>
                  </div>
                )}
                <Separator />
                <div className="flex justify-between font-display font-bold text-base text-foreground">
                  <span>Grand Total</span>
                  <span className="text-primary">
                    {formatPrice(Math.round(finalTotal))}
                  </span>
                </div>
              </div>

              {/* Billing summary */}
              <div className="bg-secondary/40 rounded-xl p-3 text-xs space-y-1">
                <p className="font-label font-semibold text-foreground mb-1">
                  Delivering to
                </p>
                <p className="text-muted-foreground">
                  {billingForm.fullName} · {billingForm.phone}
                </p>
                <p className="text-muted-foreground">
                  {billingForm.address}
                  {billingForm.city ? `, ${billingForm.city}` : ""}
                </p>
                <p className="text-muted-foreground capitalize">
                  Payment:{" "}
                  {billingForm.paymentMethod === "cod"
                    ? "Cash on Delivery"
                    : billingForm.paymentMethod === "bank"
                      ? "Bank Transfer"
                      : "Card"}
                </p>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === "confirmation" && (
            <div className="flex flex-col items-center text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center">
                <CheckCircle2 size={32} className="text-emerald-500" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-foreground">
                  Order Placed!
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Your order has been received and is being processed.
                </p>
              </div>
              <div className="bg-secondary/60 rounded-xl px-6 py-3 w-full">
                <p className="text-xs text-muted-foreground mb-1">Order ID</p>
                <p className="font-display font-bold text-lg text-primary">
                  {orderId}
                </p>
              </div>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>
                  Delivering to:{" "}
                  <span className="font-medium text-foreground">
                    {billingForm.fullName}
                  </span>
                </p>
                <p>
                  {billingForm.address}
                  {billingForm.city ? `, ${billingForm.city}` : ""}
                </p>
                {chosenProvider && (
                  <p>
                    Via:{" "}
                    <span className="font-medium text-foreground">
                      {chosenProvider.name}
                    </span>
                  </p>
                )}
              </div>
            </div>
          )}
        </ScrollArea>

        <div className="pt-3 border-t border-border mt-2 flex gap-2">
          {step === "billing" && (
            <>
              <Button
                variant="outline"
                className="font-label flex-1"
                onClick={handleClose}
                data-ocid="shop.checkout.cancel_button"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                form="checkout-billing-form"
                className="font-label flex-1"
                data-ocid="shop.checkout.submit_button"
              >
                Review Order <ChevronRight size={14} className="ml-1" />
              </Button>
            </>
          )}
          {step === "summary" && (
            <>
              <Button
                variant="outline"
                className="font-label flex-1"
                onClick={() => setStep("billing")}
                data-ocid="shop.checkout.cancel_button"
              >
                Back
              </Button>
              <Button
                className="font-label flex-1"
                onClick={handlePlaceOrder}
                data-ocid="shop.checkout.confirm_button"
              >
                Place Order
              </Button>
            </>
          )}
          {step === "confirmation" && (
            <Button
              className="font-label w-full"
              onClick={handleClose}
              data-ocid="shop.checkout.close_button"
            >
              Continue Shopping
            </Button>
          )}
        </div>
      </DialogContent>
      <PaymentModal
        open={paymentOpen}
        onCancel={() => setPaymentOpen(false)}
        onSuccess={() => {
          setPaymentOpen(false);
          doPlaceOrder();
        }}
        amount={finalTotal}
        title="Order Payment"
      />
    </Dialog>
  );
}

// ─── Delivery Providers Tab ───────────────────────────────────────────────────

function DeliveryProvidersTab({
  providers,
  onRegister,
}: {
  providers: DeliveryProvider[];
  onRegister: (p: DeliveryProvider) => void;
}) {
  const [name, setName] = useState("");
  const [type, setType] = useState<DeliveryProvider["type"]>("freelancer");
  const [coverage, setCoverage] = useState("");
  const [perOrder, setPerOrder] = useState("");
  const [perKm, setPerKm] = useState("");
  const [contact, setContact] = useState("");
  const [vehicleType, setVehicleType] = useState("Bike");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !coverage.trim() || !perOrder || !contact.trim()) {
      toast.error("Please fill in all required fields");
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
      deliveries: 0,
    };
    onRegister(newDp);
    // Save as business in Family Tree so it appears in Business Page
    saveFamilyTreeBusiness({
      id: newDp.id,
      name: name.trim(),
      category: "Delivery",
      type: `Delivery Business (${vehicleType})`,
      ownerName: name.trim(),
      phone: contact.trim(),
      location: coverage.trim(),
      description: `Delivery provider — Vehicle: ${vehicleType}, ₹${perOrder}/order, ₹${perKm}/km`,
    });
    toast.success(
      "Registered as delivery provider and added to Family Tree businesses!",
    );
    setName("");
    setCoverage("");
    setPerOrder("");
    setPerKm("");
    setContact("");
    setVehicleType("Bike");
  };

  return (
    <div className="space-y-8">
      {/* Register form */}
      <div className="bg-card border border-border rounded-2xl p-5">
        <h2 className="font-display font-bold text-foreground text-base mb-1">
          Register as Delivery Provider
        </h2>
        <p className="text-xs text-muted-foreground mb-4">
          Offer delivery services to shop customers and earn per order.
        </p>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <div className="space-y-1.5">
            <Label className="text-xs">Business / Name *</Label>
            <Input
              placeholder="Your name or business name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-sm"
              data-ocid="delivery.name_input"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Type *</Label>
            <Select
              value={type}
              onValueChange={(v) => setType(v as DeliveryProvider["type"])}
            >
              <SelectTrigger
                className="text-sm"
                data-ocid="delivery.type_select"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="freelancer">Freelancer</SelectItem>
                <SelectItem value="company">Company</SelectItem>
                <SelectItem value="business">Business</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Coverage Area *</Label>
            <Input
              placeholder="e.g. Mumbai, Andheri, Bandra"
              value={coverage}
              onChange={(e) => setCoverage(e.target.value)}
              className="text-sm"
              data-ocid="delivery.coverage_input"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Per Order Rate (INR) *</Label>
            <Input
              type="number"
              placeholder="e.g. 49"
              value={perOrder}
              onChange={(e) => setPerOrder(e.target.value)}
              className="text-sm"
              data-ocid="delivery.perorder_input"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Per KM Rate (INR)</Label>
            <Input
              type="number"
              placeholder="e.g. 8"
              value={perKm}
              onChange={(e) => setPerKm(e.target.value)}
              className="text-sm"
              data-ocid="delivery.perkm_input"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Contact *</Label>
            <Input
              placeholder="+91 XXXXX XXXXX"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="text-sm"
              data-ocid="delivery.contact_input"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Vehicle Type *</Label>
            <Select value={vehicleType} onValueChange={setVehicleType}>
              <SelectTrigger
                className="text-sm"
                data-ocid="delivery.vehicle_type_select"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[
                  "Bike",
                  "Scooter",
                  "Cycle",
                  "Auto",
                  "Car",
                  "Van",
                  "Truck",
                  "Mini Truck",
                ].map((v) => (
                  <SelectItem key={v} value={v}>
                    {v}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="sm:col-span-2">
            <Button
              type="submit"
              className="font-label"
              data-ocid="delivery.submit_button"
            >
              Register as Provider
            </Button>
          </div>
        </form>
      </div>

      {/* Provider list */}
      <div>
        <h2 className="font-display font-bold text-foreground text-base mb-4">
          Registered Providers
          <span className="ml-2 text-sm text-muted-foreground font-label font-normal">
            ({providers.length})
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {providers.map((p) => (
            <DeliveryProviderCard key={p.id} provider={p} />
          ))}
        </div>
        {providers.length === 0 && (
          <div
            className="text-center py-12 text-muted-foreground"
            data-ocid="delivery.empty_state"
          >
            <Truck size={36} className="mx-auto mb-2 opacity-30" />
            <p className="text-sm">
              No providers registered yet. Be the first!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main Shop Page ───────────────────────────────────────────────────────────

function FamilyTreeBizLinker() {
  const [ftBizList] = React.useState(() => getFamilyTreeBusinesses());
  const [selected, setSelected] = React.useState("none");

  if (ftBizList.length === 0) return null;

  return (
    <div className="space-y-1.5 p-3 rounded-lg border border-border bg-secondary/20">
      <Label className="text-xs font-semibold">
        Link to Family Tree Business
      </Label>
      <Select value={selected} onValueChange={setSelected}>
        <SelectTrigger className="h-9" data-ocid="shop.ft_biz.select">
          <SelectValue placeholder="Select existing business..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="none">— Register as new —</SelectItem>
          {ftBizList.map((b) => (
            <SelectItem key={b.id} value={b.id}>
              {b.name} ({b.category})
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {selected && selected !== "none" && (
        <p className="text-[10px] text-green-600 dark:text-green-400">
          ✓ Linked to your family tree business. Fields will be pre-filled.
        </p>
      )}
    </div>
  );
}

function haversineKm(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number,
): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export default function ShopPage() {
  const { identity } = useInternetIdentity();
  const isLoggedIn = !!identity;
  const [bizRegOpen, setBizRegOpen] = useState(false);
  const [dpRegOpen, setDpRegOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState<SortOption>("relevance");
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  // Get user geolocation on mount
  useState(() => {
    if (typeof navigator !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserLocation({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
          setSortBy("nearest");
        },
        () => {
          /* denied or unavailable */
        },
      );
    }
  });
  const [cartItems, setCartItems] = useState<ShopCartItem[]>([]);
  const [productsVersion, setProductsVersion] = React.useState(0);
  React.useEffect(() => {
    const h = () => setProductsVersion((v) => v + 1);
    window.addEventListener("globalProductsUpdated", h);
    return () => window.removeEventListener("globalProductsUpdated", h);
  }, []);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [deliveryProviders, setDeliveryProviders] = useState<
    DeliveryProvider[]
  >(INITIAL_DELIVERY_PROVIDERS);
  const [_surveyVotes, _setSurveyVotes] = useState<SurveyVote[]>([]);

  // ── External search state ──────────────────────────────────────────────────
  const [extFoodResults, setExtFoodResults] = useState<OpenFoodProduct[]>([]);
  const [extSearchLoading, setExtSearchLoading] = useState(false);
  const [bizSearchOpen, setBizSearchOpen] = useState(false);
  const [sellerPanelOpen, setSellerPanelOpen] = useState(false);
  const searchDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fetchExternalFood = useCallback(async (keyword: string) => {
    if (!keyword.trim() || keyword.length < 2) {
      setExtFoodResults([]);
      return;
    }
    setExtSearchLoading(true);
    try {
      const res = await fetch(
        `https://world.openfoodfacts.org/cgi/search.pl?action=process&search_terms=${encodeURIComponent(keyword)}&json=true&page_size=8`,
      );
      if (!res.ok) throw new Error("API error");
      const data = (await res.json()) as {
        products?: Array<{
          id?: string;
          product_name?: string;
          brands?: string;
          categories_tags?: string[];
          image_url?: string;
          nutriscore_grade?: string;
        }>;
      };
      const products: OpenFoodProduct[] = (data.products || []).map((p) => ({
        id: p.id || `off_${Math.random().toString(36).slice(2)}`,
        product_name: p.product_name || "Unknown Product",
        brands: p.brands || "",
        categories_tags: p.categories_tags || [],
        image_url: p.image_url,
        nutriscore_grade: p.nutriscore_grade,
      }));
      setExtFoodResults(products);
    } catch {
      toast.error("Web search unavailable — showing local results only");
      setExtFoodResults([]);
    } finally {
      setExtSearchLoading(false);
    }
  }, []);

  // Debounced search trigger
  const handleSearchChange = useCallback(
    (val: string) => {
      setSearchQuery(val);
      if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
      if (!val.trim()) {
        setExtFoodResults([]);
        return;
      }
      searchDebounceRef.current = setTimeout(() => {
        void fetchExternalFood(val);
      }, 600);
    },
    [fetchExternalFood],
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
    };
  }, []);

  const handleAddExternalToShop = useCallback((p: OpenFoodProduct) => {
    const category = p.categories_tags?.[0]
      ? p.categories_tags[0].replace(/^en:/, "").replace(/-/g, " ")
      : "Food & Beverages";
    addGlobalProduct({
      name: p.product_name,
      description: `${p.brands ? `Brand: ${p.brands}. ` : ""}Category: ${category}`,
      price: 0,
      category: "Food & Beverages",
      module: "Shop",
      seller: p.brands || "OpenFoodFacts",
      imageUrl: p.image_url,
      source: "OpenFoodFacts",
      isService: false,
      status: "active",
    });
    toast.success(`"${p.product_name}" added to your shop!`);
    setExtFoodResults((prev) => prev.filter((x) => x.id !== p.id));
  }, []);

  // Build shop catalog from products + services + extra module items
  // Include user-added products from QuickAddBar (shared via localStorage)
  const userAddedProducts = React.useMemo(() => {
    try {
      const raw = localStorage.getItem("ic_user_products");
      if (!raw) return [];
      const arr = JSON.parse(raw) as Array<{
        id: string;
        name: string;
        description?: string;
        price?: number;
        category?: string;
        seller?: string;
        photoUrl?: string;
        isService?: boolean;
        sourceModule?: string;
      }>;
      return arr.map((p, i) => ({
        id: `user-${p.id || i}`,
        productId: 9000 + i,
        name: p.name || "User Product",
        description: p.description || "",
        price: p.price || 0,
        category: p.category || "Other",
        rating: 4.0,
        seller: p.seller || "IndyaCentral User",
        isService: p.isService || false,
        photoUrl: p.photoUrl || "",
        votes: 5,
        sourceModule: p.sourceModule || "User",
      }));
    } catch {
      return [];
    }
  }, []);

  const viewedCategories = React.useMemo(() => {
    try {
      return JSON.parse(
        localStorage.getItem("ic_viewed_categories") || "[]",
      ) as string[];
    } catch {
      return [];
    }
  }, []);

  const globalProducts = getGlobalProducts().map((p, i) => ({
    id: `global-${p.id}`,
    productId: 8000 + i,
    name: p.name,
    description: p.description,
    price: p.price,
    category: p.category,
    rating: p.rating || 4.0,
    seller: p.seller || p.businessName || "IndyaCentral",
    isService: p.isService || false,
    photoUrl: p.imageUrl || "",
    votes: p.votes,
    sourceModule: p.module,
    isBestBuy: p.isBestBuy || viewedCategories.includes(p.category),
  }));
  // productsVersion is used above to trigger re-render when products change
  void productsVersion;

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
      sourceModule: "Products" as string | undefined,
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
      sourceModule: "Services" as string | undefined,
    })),
    ...EXTRA_SHOP_ITEMS,
  ];

  const filteredItems = baseItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
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
        (a as { lat?: number }).lat ?? 0,
        (a as { lng?: number }).lng ?? 0,
      );
      const bDist = haversineKm(
        userLocation.lat,
        userLocation.lng,
        (b as { lat?: number }).lat ?? 0,
        (b as { lng?: number }).lng ?? 0,
      );
      return aDist - bDist;
    }
    return 0; // relevance / newest: original order
  });

  // Cart calculations
  const subtotal = cartItems.reduce((s, i) => s + i.qty * i.unitPrice, 0);
  const tax = subtotal * TAX_RATE;
  const grandTotal = subtotal + tax;
  const totalCartItems = cartItems.reduce((s, i) => s + i.qty, 0);

  const addToCart = (item: (typeof baseItems)[0]) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.id === item.id ? { ...ci, qty: ci.qty + 1 } : ci,
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
          photoUrl: item.photoUrl,
        },
      ];
    });
    toast.success(`${item.name} added to cart`);
  };

  const updateQty = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((ci) => (ci.id === id ? { ...ci, qty: ci.qty + delta } : ci))
        .filter((ci) => ci.qty > 0),
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.id !== id));
  };

  const handleCheckoutClose = (clearCart?: boolean) => {
    setCheckoutOpen(false);
    if (clearCart) {
      setCartItems([]);
      setCartOpen(false);
    }
  };

  return (
    <div className="p-6 lg:p-8 pb-24">
      {/* Page Header */}
      <div className="mb-6 animate-fade-up">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-display font-bold text-foreground flex items-center gap-2">
              <ShoppingBag size={28} className="text-primary" />
              Shop
            </h1>
            <p className="text-muted-foreground mt-1">
              Browse products and services from all modules across IndyaCentral
            </p>
          </div>
          <Button
            variant="outline"
            className="font-label gap-2 relative"
            onClick={() => setCartOpen(true)}
            data-ocid="shop.cart.open_modal_button"
          >
            <ShoppingCart size={16} />
            Cart
            {totalCartItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 rounded-full flex items-center justify-center text-[10px] font-bold bg-primary text-primary-foreground px-1">
                {totalCartItems}
              </span>
            )}
          </Button>
        </div>
      </div>

      {/* ── Register CTA Cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="bg-card border border-border rounded-xl p-5 flex items-start gap-4">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: "oklch(0.55 0.22 280 / 0.15)" }}
          >
            <Building2 size={20} style={{ color: "oklch(0.55 0.22 280)" }} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-display font-bold text-sm text-foreground">
              Register Your Business
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5 mb-3">
              List your products & services, reach thousands of customers
            </p>
            <Dialog open={bizRegOpen} onOpenChange={setBizRegOpen}>
              <DialogTrigger asChild>
                <Button
                  size="sm"
                  className="font-label h-8 text-xs gap-1.5"
                  data-ocid="shop.register_business.open_modal_button"
                >
                  <Plus size={13} /> Register Business
                </Button>
              </DialogTrigger>
              <DialogContent
                className="sm:max-w-md"
                data-ocid="shop.register_business.dialog"
              >
                <DialogHeader>
                  <DialogTitle className="font-display">
                    Register Your Business
                  </DialogTitle>
                  <DialogDescription>
                    Fill in the details to get listed on IndyaCentral Shop
                  </DialogDescription>
                </DialogHeader>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    toast.success(
                      "Registration submitted! Your business will be linked to your Family Tree. A Family Circle admin will review and approve.",
                    );
                    setBizRegOpen(false);
                  }}
                  className="space-y-3 mt-2"
                >
                  <FamilyTreeBizLinker />
                  <div className="space-y-1.5">
                    <Label className="text-xs">Business Name *</Label>
                    <Input
                      placeholder="e.g. Spice Garden Restaurant"
                      required
                      data-ocid="shop.biz_name.input"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <Label className="text-xs">Category</Label>
                      <Select defaultValue="Food">
                        <SelectTrigger className="h-9">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[
                            "Food",
                            "Electronics",
                            "Fashion",
                            "Healthcare",
                            "Education",
                            "Real Estate",
                            "Travel",
                            "Services",
                            "Other",
                          ].map((c) => (
                            <SelectItem key={c} value={c}>
                              {c}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-xs">Pincode *</Label>
                      <Input
                        placeholder="110001"
                        required
                        data-ocid="shop.biz_pincode.input"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs">Area / Locality</Label>
                    <Input
                      placeholder="e.g. Connaught Place, New Delhi"
                      data-ocid="shop.biz_area.input"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs">Phone</Label>
                    <Input
                      placeholder="+91 98765 43210"
                      data-ocid="shop.biz_phone.input"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs">Description</Label>
                    <Textarea
                      rows={2}
                      placeholder="What does your business offer?"
                      className="resize-none"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <InfoIcon size={11} /> You'll need to login to complete
                    registration
                  </p>
                  <div className="flex gap-2 pt-1">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1 font-label h-9"
                      onClick={() => setBizRegOpen(false)}
                      data-ocid="shop.biz_reg.cancel_button"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 font-label h-9"
                      data-ocid="shop.biz_reg.submit_button"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-5 flex items-start gap-4">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: "oklch(0.52 0.14 155 / 0.15)" }}
          >
            <Truck size={20} style={{ color: "oklch(0.52 0.14 155)" }} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-display font-bold text-sm text-foreground">
              Become a Delivery Partner
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5 mb-3">
              Set your own rates and earn delivering orders
            </p>
            <Dialog open={dpRegOpen} onOpenChange={setDpRegOpen}>
              <DialogTrigger asChild>
                <Button
                  size="sm"
                  variant="outline"
                  className="font-label h-8 text-xs gap-1.5 border-green-500/40 text-green-700 hover:bg-green-50"
                  data-ocid="shop.delivery_partner.open_modal_button"
                >
                  <Plus size={13} /> Register as Partner
                </Button>
              </DialogTrigger>
              <DialogContent
                className="sm:max-w-md max-h-[90vh] overflow-y-auto"
                data-ocid="shop.delivery_partner.dialog"
              >
                <DialogHeader>
                  <DialogTitle className="font-display">
                    Become a Delivery Partner
                  </DialogTitle>
                  <DialogDescription>
                    Register with your coverage area and rates
                  </DialogDescription>
                </DialogHeader>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const fd = new FormData(e.currentTarget as HTMLFormElement);
                    const dpName =
                      (fd.get("dp_name") as string) || "Delivery Partner";
                    const dpArea = (fd.get("dp_area") as string) || "";
                    const dpPhone = (fd.get("dp_phone") as string) || "";
                    const dpRate = (fd.get("dp_rate") as string) || "0";
                    const dpVehicle =
                      (
                        e.currentTarget as HTMLFormElement
                      ).querySelector<HTMLInputElement>("[data-dp-vehicle]")
                        ?.value || "Bike";
                    saveFamilyTreeBusiness({
                      id: `dp-cta-${Date.now()}`,
                      name: dpName,
                      category: "Delivery",
                      type: `Delivery Business (${dpVehicle})`,
                      ownerName: dpName,
                      phone: dpPhone,
                      location: dpArea,
                      description: `Delivery partner — Vehicle: ${dpVehicle}, ₹${dpRate}/km`,
                    });
                    toast.success(
                      "Registered as delivery partner and added to Family Tree businesses!",
                    );
                    setDpRegOpen(false);
                  }}
                  className="space-y-3 mt-2"
                >
                  <div className="space-y-1.5">
                    <Label className="text-xs">Your Name *</Label>
                    <Input
                      name="dp_name"
                      placeholder="Full name"
                      required
                      data-ocid="shop.dp_name.input"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <Label className="text-xs">Pincode(s)</Label>
                      <Input
                        name="dp_pincode"
                        placeholder="110001, 110002"
                        data-ocid="shop.dp_pincode.input"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-xs">Per-km Rate (₹)</Label>
                      <Input
                        type="number"
                        name="dp_rate"
                        placeholder="12"
                        data-ocid="shop.dp_rate.input"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs">Area / Locality</Label>
                    <Input
                      name="dp_area"
                      placeholder="e.g. South Delhi"
                      data-ocid="shop.dp_area.input"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs">Vehicle Type</Label>
                    <Select defaultValue="Bike">
                      <SelectTrigger className="h-9" data-dp-vehicle="">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {["Bike", "Scooter", "Auto", "Car", "Van", "Cycle"].map(
                          (v) => (
                            <SelectItem key={v} value={v}>
                              {v}
                            </SelectItem>
                          ),
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs">Weight Rates (₹)</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        ["Up to 1 kg", "dp_w1"],
                        ["1–5 kg", "dp_w2"],
                        ["5–10 kg", "dp_w3"],
                        ["10 kg+", "dp_w4"],
                      ].map(([label, id]) => (
                        <div key={id} className="space-y-1">
                          <Label className="text-[10px] text-muted-foreground">
                            {label}
                          </Label>
                          <Input
                            type="number"
                            placeholder="₹0"
                            className="h-8 text-xs"
                            data-ocid={`shop.${id}.input`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs">Phone</Label>
                    <Input
                      name="dp_phone"
                      placeholder="+91 98765 43210"
                      data-ocid="shop.dp_phone.input"
                    />
                  </div>
                  <div className="flex gap-2 pt-1">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1 font-label h-9"
                      onClick={() => setDpRegOpen(false)}
                      data-ocid="shop.dp_reg.cancel_button"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 font-label h-9"
                      data-ocid="shop.dp_reg.submit_button"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      <Tabs defaultValue="listings">
        <TabsList className="mb-6">
          <TabsTrigger value="listings" data-ocid="shop.listings.tab">
            <ShoppingBag size={13} className="mr-1.5" />
            Products &amp; Services
          </TabsTrigger>
          <TabsTrigger value="delivery" data-ocid="shop.delivery.tab">
            <Truck size={13} className="mr-1.5" />
            Delivery Providers
          </TabsTrigger>
          <TabsTrigger value="auctions" data-ocid="shop.auction.tab">
            🔨 Auctions
          </TabsTrigger>
        </TabsList>

        {/* ── Listings Tab ── */}
        <TabsContent value="listings">
          {/* Search + Sort + Discovery buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="relative flex-1 max-w-md">
              {extSearchLoading ? (
                <Loader2
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-primary animate-spin"
                />
              ) : (
                <Search
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
              )}
              <Input
                placeholder="Search products and services..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") void fetchExternalFood(searchQuery);
                }}
                className="pl-9 h-10"
                data-ocid="shop.search_input"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    handleSearchChange("");
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X size={13} />
                </button>
              )}
            </div>
            <div className="flex gap-2 shrink-0">
              <Button
                variant="outline"
                size="sm"
                className="h-10 font-label gap-1.5 text-xs border-primary/30 text-primary hover:bg-primary/8"
                onClick={() => setBizSearchOpen(true)}
                data-ocid="shop.biz_search.open_button"
              >
                <Building2 size={13} /> Find Businesses
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-10 font-label gap-1.5 text-xs"
                onClick={() => setSellerPanelOpen(true)}
                data-ocid="shop.sellers.open_button"
              >
                <Users size={13} /> Find Sellers
              </Button>
            </div>
            <Select
              value={sortBy}
              onValueChange={(v) => setSortBy(v as SortOption)}
            >
              <SelectTrigger
                className="w-full sm:w-48 h-10"
                data-ocid="shop.sort.select"
              >
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nearest">Nearest First</SelectItem>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="top-voted">Top Voted</SelectItem>
                <SelectItem value="top-reviewed">Top Reviewed</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Category filters */}
          <div className="flex gap-2 mb-5 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-label font-semibold transition-all border ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                }`}
                data-ocid="shop.category.tab"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results count */}
          <div className="mb-4 flex items-center gap-3 flex-wrap">
            <p className="text-sm text-muted-foreground">
              {sortedItems.length} item{sortedItems.length !== 1 ? "s" : ""}
              {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
              {searchQuery ? ` for "${searchQuery}"` : ""}
            </p>
            {sortBy !== "relevance" && (
              <Badge variant="outline" className="text-xs capitalize">
                Sorted: {sortBy.replace("-", " ")}
              </Badge>
            )}
          </div>

          {/* Product grid */}
          {sortedItems.length === 0 ? (
            <div
              className="text-center py-20 text-muted-foreground"
              data-ocid="shop.listings.empty_state"
            >
              <Package size={40} className="mx-auto mb-3 opacity-30" />
              <p className="font-label font-semibold text-foreground mb-1">
                No items found
              </p>
              <p className="text-sm">
                {searchQuery
                  ? `No results for "${searchQuery}"`
                  : `No items in ${activeCategory}`}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {(() => {
                const activePromos: any[] = (() => {
                  try {
                    return JSON.parse(
                      localStorage.getItem("ic_active_promos") || "[]",
                    );
                  } catch {
                    return [];
                  }
                })();
                const shopPromos = activePromos.filter((p) =>
                  ["product", "listing", "post"].includes(p.postType),
                );
                let promoIdx = 0;
                const elements: React.ReactNode[] = [];
                sortedItems.forEach((item, idx) => {
                  elements.push(
                    <ShopProductCard
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      category={item.category}
                      rating={item.rating}
                      seller={item.seller}
                      isService={item.isService}
                      photoUrl={item.photoUrl}
                      sourceModule={item.sourceModule}
                      votes={item.votes}
                      isBestBuy={(item as { isBestBuy?: boolean }).isBestBuy}
                      isLoggedIn={isLoggedIn}
                      createdAt={(item as { createdAt?: string }).createdAt}
                      onAddToCart={() => addToCart(item)}
                      distanceKm={
                        userLocation &&
                        (item as { lat?: number; lng?: number }).lat
                          ? haversineKm(
                              userLocation.lat,
                              userLocation.lng,
                              (item as { lat?: number }).lat!,
                              (item as { lng?: number }).lng!,
                            )
                          : undefined
                      }
                    />,
                  );
                  if ((idx + 1) % 5 === 0 && promoIdx < shopPromos.length) {
                    const promo = shopPromos[promoIdx++];
                    elements.push(
                      <div
                        key={`promo-${promo.id}`}
                        className="bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-400/60 rounded-2xl p-4 flex flex-col gap-2"
                        data-ocid="shop.promoted.card"
                      >
                        <div className="flex items-center gap-1.5">
                          <Megaphone size={12} className="text-amber-600" />
                          <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">
                            Sponsored
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-foreground line-clamp-2">
                          {promo.postTitle}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {promo.plan?.charAt(0).toUpperCase() +
                            promo.plan?.slice(1)}{" "}
                          Plan · {promo.regions?.join(", ") || "All India"}
                        </p>
                        <div className="text-[10px] text-amber-600 font-medium">
                          ~
                          {promo.plan === "premium"
                            ? "10,000"
                            : promo.plan === "standard"
                              ? "2,000"
                              : "500"}{" "}
                          impressions
                        </div>
                      </div>,
                    );
                  }
                });
                return elements;
              })()}
            </div>
          )}

          {/* ── From Web: OpenFoodFacts results ── */}
          {searchQuery && extFoodResults.length > 0 && (
            <div className="mt-8" data-ocid="shop.web_results.section">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 h-px bg-border" />
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-400/40 bg-blue-500/8">
                  <Globe size={13} className="text-blue-500" />
                  <span className="text-xs font-label font-semibold text-blue-600 dark:text-blue-400">
                    🌐 From Web ({extFoodResults.length} results)
                  </span>
                </div>
                <div className="flex-1 h-px bg-border" />
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                External results from OpenFoodFacts. Click "Add to My Shop" to
                save permanently.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {extFoodResults.map((p) => (
                  <ExternalFoodCard
                    key={p.id}
                    product={p}
                    onAddToShop={handleAddExternalToShop}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Loading spinner for external search */}
          {extSearchLoading && (
            <div
              className="flex items-center justify-center gap-2 py-6 text-muted-foreground"
              data-ocid="shop.web_search.loading"
            >
              <Loader2 size={16} className="animate-spin text-primary" />
              <span className="text-sm">
                Searching web for food products...
              </span>
            </div>
          )}
        </TabsContent>

        {/* ── Delivery Providers Tab ── */}
        <TabsContent value="delivery">
          <DeliveryProvidersTab
            providers={deliveryProviders}
            onRegister={(p) => setDeliveryProviders((prev) => [p, ...prev])}
          />
        </TabsContent>

        {/* ── Auctions Tab ── */}
        <TabsContent value="auctions">
          <ShopAuctionTab />
        </TabsContent>
      </Tabs>

      {/* Cart Drawer */}
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onQtyChange={updateQty}
        onRemove={removeItem}
        subtotal={subtotal}
        tax={tax}
        grandTotal={grandTotal}
        onCheckout={() => {
          setCartOpen(false);
          setCheckoutOpen(true);
        }}
      />

      {/* Checkout Dialog */}
      <CheckoutDialog
        open={checkoutOpen}
        onClose={handleCheckoutClose}
        cartItems={cartItems}
        subtotal={subtotal}
        tax={tax}
        grandTotal={grandTotal}
        deliveryProviders={deliveryProviders}
      />

      {/* Business Search Modal */}
      <BusinessSearchModal
        open={bizSearchOpen}
        onClose={() => setBizSearchOpen(false)}
        userLocation={userLocation}
      />

      {/* Seller Search Panel */}
      <SellerSearchPanel
        open={sellerPanelOpen}
        onClose={() => setSellerPanelOpen(false)}
      />
    </div>
  );
}

// Export survey votes for AdminPanel use
export type { SurveyVote, DeliveryProvider };
