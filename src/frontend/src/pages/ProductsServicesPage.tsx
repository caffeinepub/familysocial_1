import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
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
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar,
  Clock,
  ImagePlus,
  Layers,
  Package,
  Plus,
  Star,
  Trash2,
  Wrench,
  X,
} from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { toast } from "sonner";

// ─── Types ───────────────────────────────────────────────────────────────────

interface VariantOption {
  label: string;
  priceModifier: number;
  stock: number;
}

interface VariantGroup {
  name: string;
  options: VariantOption[];
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  isRental: boolean;
  rentalPricePerDay?: number;
  rating: number;
  seller: string;
  photos: string[];
  variants: VariantGroup[];
  rentalStartDate?: string;
  rentalEndDate?: string;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  pricePerHour: number;
  category: string;
  isBookable: boolean;
  provider: string;
  rating: number;
  photos: string[];
  variants: VariantGroup[];
}

// ─── Sample Data ──────────────────────────────────────────────────────────────

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Honda Civic 2022",
    description:
      "Well-maintained Honda Civic with leather seats, sunroof, and new tires. Perfect for families.",
    price: 4500000,
    category: "Vehicles",
    isRental: true,
    rentalPricePerDay: 5000,
    rating: 4.8,
    seller: "Khalid Hassan",
    photos: [],
    variants: [
      {
        name: "Fuel Type",
        options: [
          { label: "Petrol", priceModifier: 0, stock: 1 },
          { label: "Hybrid", priceModifier: 50000, stock: 1 },
        ],
      },
    ],
    rentalStartDate: "2026-03-01",
    rentalEndDate: "2026-06-30",
  },
  {
    id: 2,
    name: 'MacBook Pro 16"',
    description:
      "M2 Pro chip, 16GB RAM, 512GB SSD. Excellent condition with original box and accessories.",
    price: 320000,
    category: "Electronics",
    isRental: false,
    rating: 4.9,
    seller: "Omar Tech Store",
    photos: [],
    variants: [
      {
        name: "Storage",
        options: [
          { label: "512 GB", priceModifier: 0, stock: 3 },
          { label: "1 TB", priceModifier: 40000, stock: 2 },
        ],
      },
      {
        name: "RAM",
        options: [
          { label: "16 GB", priceModifier: 0, stock: 3 },
          { label: "32 GB", priceModifier: 60000, stock: 1 },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Bridal Lehenga Set",
    description:
      "Stunning hand-embroidered bridal lehenga in deep maroon and gold. Size M, worn once.",
    price: 85000,
    category: "Fashion",
    isRental: true,
    rentalPricePerDay: 8000,
    rating: 5.0,
    seller: "Sana Boutique",
    photos: [],
    variants: [
      {
        name: "Size",
        options: [
          { label: "S", priceModifier: 0, stock: 1 },
          { label: "M", priceModifier: 0, stock: 1 },
          { label: "L", priceModifier: 2000, stock: 1 },
        ],
      },
    ],
    rentalStartDate: "2026-03-15",
    rentalEndDate: "2026-12-31",
  },
  {
    id: 4,
    name: "Party Tent & Furniture",
    description:
      "Complete party setup: large marquee tent, 200 chairs, 20 tables. Available for rent.",
    price: 0,
    category: "Events",
    isRental: true,
    rentalPricePerDay: 45000,
    rating: 4.6,
    seller: "Events by Malik",
    photos: [],
    variants: [
      {
        name: "Capacity",
        options: [
          { label: "100 guests", priceModifier: 0, stock: 2 },
          { label: "200 guests", priceModifier: 20000, stock: 1 },
          { label: "500 guests", priceModifier: 60000, stock: 1 },
        ],
      },
    ],
    rentalStartDate: "2026-03-01",
    rentalEndDate: "2026-12-31",
  },
];

export const SAMPLE_SERVICES: Service[] = [
  {
    id: 1,
    name: "Home Tutoring — Mathematics",
    description:
      "Expert math tutoring for O & A levels. 10+ years experience. Home visits available.",
    pricePerHour: 1500,
    category: "Education",
    isBookable: true,
    provider: "Prof. Adnan Khan",
    rating: 4.9,
    photos: [],
    variants: [
      {
        name: "Session Duration",
        options: [
          { label: "1 hour", priceModifier: 0, stock: 10 },
          { label: "2 hours", priceModifier: 1200, stock: 5 },
          { label: "3 hours", priceModifier: 2500, stock: 3 },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "AC Installation & Repair",
    description:
      "Professional AC installation, servicing, and gas charging. All brands covered.",
    pricePerHour: 2000,
    category: "Home Services",
    isBookable: true,
    provider: "Cool Tech Services",
    rating: 4.7,
    photos: [],
    variants: [
      {
        name: "Service Type",
        options: [
          { label: "Installation", priceModifier: 0, stock: 5 },
          { label: "Gas Charging", priceModifier: 1000, stock: 5 },
          { label: "Full Service", priceModifier: 2500, stock: 3 },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Mehndi Artist",
    description:
      "Arabic and traditional Pakistani mehndi designs for weddings and events. Beautiful intricate patterns.",
    pricePerHour: 3000,
    category: "Beauty & Events",
    isBookable: true,
    provider: "Henna by Nadia",
    rating: 4.95,
    photos: [],
    variants: [
      {
        name: "Design Style",
        options: [
          { label: "Arabic (simple)", priceModifier: 0, stock: 10 },
          { label: "Pakistani (bridal)", priceModifier: 5000, stock: 5 },
          { label: "Full bridal set", priceModifier: 12000, stock: 2 },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Legal Consultation",
    description:
      "Property, family, and business law consultation. Licensed advocate with 15 years experience.",
    pricePerHour: 5000,
    category: "Professional",
    isBookable: true,
    provider: "Advocate Tariq Nisar",
    rating: 4.8,
    photos: [],
    variants: [
      {
        name: "Consultation Type",
        options: [
          { label: "Property Law", priceModifier: 0, stock: 10 },
          { label: "Family Law", priceModifier: 0, stock: 10 },
          { label: "Business Law", priceModifier: 2000, stock: 5 },
        ],
      },
    ],
  },
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
  Other: "oklch(0.55 0.10 200)",
};

// ─── Shared Components ────────────────────────────────────────────────────────

function PhotoUploadArea({
  photos,
  onAdd,
  onRemove,
}: {
  photos: string[];
  onAdd: (urls: string[]) => void;
  onRemove: (idx: number) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  const handleFiles = useCallback(
    (files: FileList | null) => {
      if (!files) return;
      const urls = Array.from(files).map((f) => URL.createObjectURL(f));
      onAdd(urls);
    },
    [onAdd],
  );

  return (
    <div className="space-y-3">
      <Label>Photos</Label>
      <button
        type="button"
        aria-label="Upload photos"
        className={`w-full border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-colors
          ${dragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 hover:bg-secondary/40"}`}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          handleFiles(e.dataTransfer.files);
        }}
      >
        <ImagePlus size={22} className="mx-auto mb-2 text-muted-foreground" />
        <p className="text-xs text-muted-foreground">
          Drag & drop or click to upload photos
        </p>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </button>
      {photos.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {photos.map((url, i) => (
            <div key={url} className="relative group">
              <img
                src={url}
                alt={`Preview ${i + 1}`}
                className="w-16 h-16 object-cover rounded-lg border border-border"
              />
              <button
                type="button"
                onClick={() => onRemove(i)}
                className="absolute -top-1.5 -right-1.5 bg-destructive text-destructive-foreground rounded-full w-4.5 h-4.5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Remove photo"
              >
                <X size={10} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function VariantsBuilder({
  variants,
  onChange,
}: {
  variants: VariantGroup[];
  onChange: (v: VariantGroup[]) => void;
}) {
  const addGroup = () =>
    onChange([
      ...variants,
      { name: "", options: [{ label: "", priceModifier: 0, stock: 0 }] },
    ]);

  const removeGroup = (gi: number) =>
    onChange(variants.filter((_, i) => i !== gi));

  const updateGroupName = (gi: number, name: string) => {
    const copy = [...variants];
    copy[gi] = { ...copy[gi], name };
    onChange(copy);
  };

  const addOption = (gi: number) => {
    const copy = [...variants];
    copy[gi] = {
      ...copy[gi],
      options: [...copy[gi].options, { label: "", priceModifier: 0, stock: 0 }],
    };
    onChange(copy);
  };

  const removeOption = (gi: number, oi: number) => {
    const copy = [...variants];
    copy[gi] = {
      ...copy[gi],
      options: copy[gi].options.filter((_, i) => i !== oi),
    };
    onChange(copy);
  };

  const updateOption = (
    gi: number,
    oi: number,
    field: keyof VariantOption,
    value: string | number,
  ) => {
    const copy = [...variants];
    const opts = [...copy[gi].options];
    opts[oi] = { ...opts[oi], [field]: value };
    copy[gi] = { ...copy[gi], options: opts };
    onChange(copy);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <Label className="flex items-center gap-1.5">
          <Layers size={13} /> Product Variants
        </Label>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-7 text-xs gap-1"
          onClick={addGroup}
        >
          <Plus size={11} /> Add Variant Group
        </Button>
      </div>

      {variants.length === 0 && (
        <p className="text-xs text-muted-foreground italic">
          No variants added. Click "Add Variant Group" to create size, color,
          etc.
        </p>
      )}

      <div className="space-y-4">
        {variants.map((group, gi) => (
          <div
            key={`group-${group.name || gi}-${gi}`}
            className="rounded-xl border border-border bg-secondary/30 p-3 space-y-3"
          >
            <div className="flex items-center gap-2">
              <Input
                placeholder="Group name (e.g. Size, Color)"
                value={group.name}
                onChange={(e) => updateGroupName(gi, e.target.value)}
                className="h-8 text-xs flex-1"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-destructive hover:text-destructive shrink-0"
                onClick={() => removeGroup(gi)}
              >
                <Trash2 size={13} />
              </Button>
            </div>

            <div className="space-y-2">
              {group.options.map((opt, oi) => (
                <div
                  key={`opt-${gi}-${opt.label || oi}-${oi}`}
                  className="flex items-center gap-2"
                >
                  <Input
                    placeholder="Label (e.g. Small)"
                    value={opt.label}
                    onChange={(e) =>
                      updateOption(gi, oi, "label", e.target.value)
                    }
                    className="h-7 text-xs flex-1"
                  />
                  <Input
                    type="number"
                    placeholder="±PKR"
                    value={opt.priceModifier || ""}
                    onChange={(e) =>
                      updateOption(
                        gi,
                        oi,
                        "priceModifier",
                        Number(e.target.value),
                      )
                    }
                    className="h-7 text-xs w-20"
                  />
                  <Input
                    type="number"
                    placeholder="Stock"
                    value={opt.stock || ""}
                    onChange={(e) =>
                      updateOption(gi, oi, "stock", Number(e.target.value))
                    }
                    className="h-7 text-xs w-16"
                  />
                  {group.options.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 text-muted-foreground hover:text-destructive shrink-0"
                      onClick={() => removeOption(gi, oi)}
                    >
                      <X size={11} />
                    </Button>
                  )}
                </div>
              ))}
            </div>

            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-6 text-xs gap-1 text-primary"
              onClick={() => addOption(gi)}
            >
              <Plus size={10} /> Add Option
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Card Components ──────────────────────────────────────────────────────────

function ProductCard({ product }: { product: Product }) {
  const color = CATEGORY_COLORS[product.category] || "oklch(0.52 0.14 155)";
  const totalVariants = product.variants.reduce(
    (acc, g) => acc + g.options.length,
    0,
  );

  return (
    <div className="bg-card border border-border rounded-xl shadow-card hover:shadow-card-hover transition-all animate-fade-up overflow-hidden">
      {product.photos.length > 0 ? (
        <img
          src={product.photos[0]}
          alt={product.name}
          className="w-full h-40 object-cover"
        />
      ) : (
        <div className="h-1 rounded-t-xl" style={{ background: color }} />
      )}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-label font-semibold text-foreground truncate">
              {product.name}
            </h3>
            <div className="flex items-center gap-2 mt-1 flex-wrap">
              <Badge
                className="text-[10px] px-1.5 py-0 font-label border-0"
                style={{ background: `${color}18`, color }}
              >
                {product.category}
              </Badge>
              {product.isRental && (
                <Badge className="text-[10px] px-1.5 py-0 font-label bg-secondary text-secondary-foreground">
                  Rental Available
                </Badge>
              )}
              {totalVariants > 0 && (
                <Badge
                  variant="outline"
                  className="text-[10px] px-1.5 py-0 font-label gap-0.5"
                >
                  <Layers size={9} /> {product.variants.length} variants
                </Badge>
              )}
            </div>
          </div>
          <Package size={16} className="text-muted-foreground shrink-0 ml-2" />
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
          {product.description}
        </p>
        {product.isRental &&
          product.rentalStartDate &&
          product.rentalEndDate && (
            <div className="flex items-center gap-1 mb-2">
              <Calendar size={11} className="text-muted-foreground" />
              <span className="text-xs text-muted-foreground">
                {product.rentalStartDate} → {product.rentalEndDate}
              </span>
            </div>
          )}
        <div className="flex items-center gap-1 mb-3">
          <Star
            size={11}
            className="fill-current"
            style={{ color: "oklch(0.78 0.13 65)" }}
          />
          <span className="text-xs font-label font-semibold">
            {product.rating}
          </span>
          <span className="text-xs text-muted-foreground ml-1">
            · {product.seller}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            {product.price > 0 && (
              <p className="font-label font-bold text-foreground">
                PKR {product.price.toLocaleString()}
              </p>
            )}
            {product.isRental && product.rentalPricePerDay && (
              <p className="text-xs text-muted-foreground font-label">
                PKR {product.rentalPricePerDay.toLocaleString()}/day rental
              </p>
            )}
          </div>
          <Button size="sm" className="h-7 text-xs font-label">
            {product.isRental && product.price === 0
              ? "Book Rental"
              : "Contact Seller"}
          </Button>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const color = CATEGORY_COLORS[service.category] || "oklch(0.52 0.14 155)";
  const totalVariants = service.variants.reduce(
    (acc, g) => acc + g.options.length,
    0,
  );

  return (
    <div className="bg-card border border-border rounded-xl shadow-card hover:shadow-card-hover transition-all animate-fade-up overflow-hidden">
      {service.photos.length > 0 ? (
        <img
          src={service.photos[0]}
          alt={service.name}
          className="w-full h-40 object-cover"
        />
      ) : (
        <div className="h-1 rounded-t-xl" style={{ background: color }} />
      )}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-label font-semibold text-foreground truncate">
              {service.name}
            </h3>
            <div className="flex items-center gap-2 mt-1 flex-wrap">
              <Badge
                className="text-[10px] px-1.5 py-0 font-label border-0"
                style={{ background: `${color}18`, color }}
              >
                {service.category}
              </Badge>
              {service.isBookable && (
                <Badge className="text-[10px] px-1.5 py-0 font-label bg-secondary text-secondary-foreground">
                  Bookable
                </Badge>
              )}
              {totalVariants > 0 && (
                <Badge
                  variant="outline"
                  className="text-[10px] px-1.5 py-0 font-label gap-0.5"
                >
                  <Layers size={9} /> {service.variants.length} variants
                </Badge>
              )}
            </div>
          </div>
          <Wrench size={16} className="text-muted-foreground shrink-0 ml-2" />
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
          {service.description}
        </p>
        <div className="flex items-center gap-1 mb-3">
          <Star
            size={11}
            className="fill-current"
            style={{ color: "oklch(0.78 0.13 65)" }}
          />
          <span className="text-xs font-label font-semibold">
            {service.rating}
          </span>
          <span className="text-xs text-muted-foreground ml-1">
            · {service.provider}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Clock size={12} className="text-muted-foreground" />
            <span className="font-label font-bold text-foreground text-sm">
              PKR {service.pricePerHour.toLocaleString()}
            </span>
            <span className="text-xs text-muted-foreground">/hr</span>
          </div>
          <Button size="sm" className="h-7 text-xs font-label">
            {service.isBookable ? "Book Now" : "Contact"}
          </Button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function ProductsServicesPage() {
  const [products, setProducts] = useState<Product[]>(SAMPLE_PRODUCTS);
  const [services, setServices] = useState<Service[]>(SAMPLE_SERVICES);
  const [productOpen, setProductOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  // Product form state
  const [productPhotos, setProductPhotos] = useState<string[]>([]);
  const [productVariants, setProductVariants] = useState<VariantGroup[]>([]);
  const [productForm, setProductForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "Electronics",
    isRental: false,
    rentalPricePerDay: "",
    rentalStartDate: "",
    rentalEndDate: "",
  });

  // Service form state
  const [servicePhotos, setServicePhotos] = useState<string[]>([]);
  const [serviceVariants, setServiceVariants] = useState<VariantGroup[]>([]);
  const [serviceForm, setServiceForm] = useState({
    name: "",
    description: "",
    pricePerHour: "",
    category: "Home Services",
    isBookable: true,
  });

  // Rental date calc
  const rentalDays =
    productForm.rentalStartDate && productForm.rentalEndDate
      ? Math.max(
          0,
          Math.round(
            (new Date(productForm.rentalEndDate).getTime() -
              new Date(productForm.rentalStartDate).getTime()) /
              86400000,
          ),
        )
      : 0;
  const rentalTotal = rentalDays * (Number(productForm.rentalPricePerDay) || 0);

  const resetProductForm = () => {
    setProductForm({
      name: "",
      description: "",
      price: "",
      category: "Electronics",
      isRental: false,
      rentalPricePerDay: "",
      rentalStartDate: "",
      rentalEndDate: "",
    });
    setProductPhotos([]);
    setProductVariants([]);
  };

  const resetServiceForm = () => {
    setServiceForm({
      name: "",
      description: "",
      pricePerHour: "",
      category: "Home Services",
      isBookable: true,
    });
    setServicePhotos([]);
    setServiceVariants([]);
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!productForm.name.trim()) return;
    const p: Product = {
      id: Date.now(),
      name: productForm.name,
      description: productForm.description || "No description",
      price: Number.parseFloat(productForm.price) || 0,
      category: productForm.category,
      isRental: productForm.isRental,
      rentalPricePerDay: productForm.isRental
        ? Number.parseFloat(productForm.rentalPricePerDay) || undefined
        : undefined,
      rating: 0,
      seller: "You",
      photos: productPhotos,
      variants: productVariants,
      rentalStartDate: productForm.isRental
        ? productForm.rentalStartDate
        : undefined,
      rentalEndDate: productForm.isRental
        ? productForm.rentalEndDate
        : undefined,
    };
    setProducts((prev) => [p, ...prev]);
    toast.success("Product listed successfully");
    setProductOpen(false);
    resetProductForm();
  };

  const handleAddService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceForm.name.trim()) return;
    const s: Service = {
      id: Date.now(),
      name: serviceForm.name,
      description: serviceForm.description || "No description",
      pricePerHour: Number.parseFloat(serviceForm.pricePerHour) || 0,
      category: serviceForm.category,
      isBookable: serviceForm.isBookable,
      provider: "You",
      rating: 0,
      photos: servicePhotos,
      variants: serviceVariants,
    };
    setServices((prev) => [s, ...prev]);
    toast.success("Service listed successfully");
    setServiceOpen(false);
    resetServiceForm();
  };

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-6 animate-fade-up">
        <h1 className="text-3xl font-display font-bold text-foreground">
          Products & Services
        </h1>
        <p className="text-muted-foreground mt-1">
          Buy, sell, rent, and book within your community
        </p>
      </div>

      <Tabs defaultValue="products">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <TabsList>
            <TabsTrigger value="products" className="font-label gap-2">
              <Package size={14} /> Products
            </TabsTrigger>
            <TabsTrigger value="services" className="font-label gap-2">
              <Wrench size={14} /> Services
            </TabsTrigger>
          </TabsList>

          <div className="flex gap-2">
            {/* Add Product Dialog */}
            <Dialog
              open={productOpen}
              onOpenChange={(v) => {
                setProductOpen(v);
                if (!v) resetProductForm();
              }}
            >
              <DialogTrigger asChild>
                <Button
                  size="sm"
                  variant="outline"
                  className="font-label gap-1.5 text-xs"
                >
                  <Plus size={14} /> Add Product
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg max-h-[90vh] flex flex-col">
                <DialogHeader>
                  <DialogTitle className="font-display">
                    List a Product
                  </DialogTitle>
                </DialogHeader>
                <ScrollArea className="flex-1 overflow-y-auto pr-3 -mr-3">
                  <form
                    id="add-product-form"
                    onSubmit={handleAddProduct}
                    className="space-y-5 mt-2 pb-2"
                  >
                    {/* Photos */}
                    <PhotoUploadArea
                      photos={productPhotos}
                      onAdd={(urls) =>
                        setProductPhotos((prev) => [...prev, ...urls])
                      }
                      onRemove={(idx) =>
                        setProductPhotos((prev) =>
                          prev.filter((_, i) => i !== idx),
                        )
                      }
                    />

                    {/* Name */}
                    <div className="space-y-2">
                      <Label>Product Name *</Label>
                      <Input
                        placeholder="e.g. Toyota Corolla 2020"
                        value={productForm.name}
                        onChange={(e) =>
                          setProductForm((p) => ({
                            ...p,
                            name: e.target.value,
                          }))
                        }
                        required
                      />
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <Textarea
                        rows={2}
                        className="resize-none"
                        placeholder="Describe the product..."
                        value={productForm.description}
                        onChange={(e) =>
                          setProductForm((p) => ({
                            ...p,
                            description: e.target.value,
                          }))
                        }
                      />
                    </div>

                    {/* Price & Category */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Price (PKR)</Label>
                        <Input
                          type="number"
                          placeholder="0"
                          value={productForm.price}
                          onChange={(e) =>
                            setProductForm((p) => ({
                              ...p,
                              price: e.target.value,
                            }))
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Category</Label>
                        <Select
                          value={productForm.category}
                          onValueChange={(v) =>
                            setProductForm((p) => ({ ...p, category: v }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[
                              "Electronics",
                              "Vehicles",
                              "Fashion",
                              "Events",
                              "Furniture",
                              "Other",
                            ].map((c) => (
                              <SelectItem key={c} value={c}>
                                {c}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Rental toggle */}
                    <div className="flex items-center justify-between rounded-lg bg-secondary/60 p-3">
                      <Label>Rental Available</Label>
                      <Switch
                        checked={productForm.isRental}
                        onCheckedChange={(v) =>
                          setProductForm((p) => ({ ...p, isRental: v }))
                        }
                      />
                    </div>

                    {/* Rental fields */}
                    {productForm.isRental && (
                      <div className="space-y-3 rounded-xl bg-secondary/30 p-4 border border-border">
                        <div className="space-y-2">
                          <Label>Rental Price / Day (PKR)</Label>
                          <Input
                            type="number"
                            placeholder="0"
                            value={productForm.rentalPricePerDay}
                            onChange={(e) =>
                              setProductForm((p) => ({
                                ...p,
                                rentalPricePerDay: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="space-y-2">
                            <Label>Available From</Label>
                            <Input
                              type="date"
                              value={productForm.rentalStartDate}
                              onChange={(e) =>
                                setProductForm((p) => ({
                                  ...p,
                                  rentalStartDate: e.target.value,
                                }))
                              }
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Available Until</Label>
                            <Input
                              type="date"
                              value={productForm.rentalEndDate}
                              onChange={(e) =>
                                setProductForm((p) => ({
                                  ...p,
                                  rentalEndDate: e.target.value,
                                }))
                              }
                            />
                          </div>
                        </div>
                        {rentalDays > 0 && (
                          <div className="text-xs text-primary font-label font-semibold bg-primary/10 rounded-lg px-3 py-2">
                            {rentalDays} days availability window ·{" "}
                            {rentalTotal > 0
                              ? `PKR ${rentalTotal.toLocaleString()} max rental`
                              : "Set rental price/day to calculate total"}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Variants */}
                    <VariantsBuilder
                      variants={productVariants}
                      onChange={setProductVariants}
                    />
                  </form>
                </ScrollArea>
                <div className="pt-3 border-t border-border mt-2">
                  <Button
                    type="submit"
                    form="add-product-form"
                    className="w-full font-label"
                  >
                    List Product
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* Add Service Dialog */}
            <Dialog
              open={serviceOpen}
              onOpenChange={(v) => {
                setServiceOpen(v);
                if (!v) resetServiceForm();
              }}
            >
              <DialogTrigger asChild>
                <Button size="sm" className="font-label gap-1.5 text-xs">
                  <Plus size={14} /> Add Service
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg max-h-[90vh] flex flex-col">
                <DialogHeader>
                  <DialogTitle className="font-display">
                    List a Service
                  </DialogTitle>
                </DialogHeader>
                <ScrollArea className="flex-1 overflow-y-auto pr-3 -mr-3">
                  <form
                    id="add-service-form"
                    onSubmit={handleAddService}
                    className="space-y-5 mt-2 pb-2"
                  >
                    {/* Photos */}
                    <PhotoUploadArea
                      photos={servicePhotos}
                      onAdd={(urls) =>
                        setServicePhotos((prev) => [...prev, ...urls])
                      }
                      onRemove={(idx) =>
                        setServicePhotos((prev) =>
                          prev.filter((_, i) => i !== idx),
                        )
                      }
                    />

                    <div className="space-y-2">
                      <Label>Service Name *</Label>
                      <Input
                        placeholder="e.g. Home Plumbing Repair"
                        value={serviceForm.name}
                        onChange={(e) =>
                          setServiceForm((p) => ({
                            ...p,
                            name: e.target.value,
                          }))
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <Textarea
                        rows={2}
                        className="resize-none"
                        placeholder="Describe your service..."
                        value={serviceForm.description}
                        onChange={(e) =>
                          setServiceForm((p) => ({
                            ...p,
                            description: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Price / Hour (PKR)</Label>
                        <Input
                          type="number"
                          placeholder="0"
                          value={serviceForm.pricePerHour}
                          onChange={(e) =>
                            setServiceForm((p) => ({
                              ...p,
                              pricePerHour: e.target.value,
                            }))
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Category</Label>
                        <Select
                          value={serviceForm.category}
                          onValueChange={(v) =>
                            setServiceForm((p) => ({ ...p, category: v }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[
                              "Home Services",
                              "Education",
                              "Beauty & Events",
                              "Professional",
                              "Health",
                              "Technology",
                              "Other",
                            ].map((c) => (
                              <SelectItem key={c} value={c}>
                                {c}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-secondary/60 p-3">
                      <Label>Booking Enabled</Label>
                      <Switch
                        checked={serviceForm.isBookable}
                        onCheckedChange={(v) =>
                          setServiceForm((p) => ({ ...p, isBookable: v }))
                        }
                      />
                    </div>

                    {/* Variants */}
                    <VariantsBuilder
                      variants={serviceVariants}
                      onChange={setServiceVariants}
                    />
                  </form>
                </ScrollArea>
                <div className="pt-3 border-t border-border mt-2">
                  <Button
                    type="submit"
                    form="add-service-form"
                    className="w-full font-label"
                  >
                    List Service
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <TabsContent value="products">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {products.map((p, i) => (
              <div key={p.id} style={{ animationDelay: `${i * 0.05}s` }}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="services">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <div key={s.id} style={{ animationDelay: `${i * 0.05}s` }}>
                <ServiceCard service={s} />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
