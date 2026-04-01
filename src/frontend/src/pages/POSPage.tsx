import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Briefcase,
  Building2,
  Calendar,
  CalendarPlus,
  Check,
  ChevronDown,
  CreditCard,
  History,
  Minus,
  Package,
  PackagePlus,
  Palette,
  Percent,
  Plus,
  Printer,
  ShoppingCart,
  Trash2,
  Upload,
  Video,
  Wand2,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import BoostPostDialog from "../components/BoostPostDialog";
import { LikeVoteBar } from "../components/LikeVoteBar";
import POSModulesPanel from "../components/POSModulesPanel";
import { useCurrency } from "../contexts/CurrencyContext";
import {
  addGlobalProduct,
  deleteGlobalProduct,
  getGlobalProducts,
  saveGlobalProduct,
} from "../utils/globalProductsState";
import { formatTimeAgo } from "../utils/timeUtils";
import {
  type Product,
  SAMPLE_PRODUCTS,
  SAMPLE_SERVICES,
  type Service,
} from "./ProductsServicesPage";

// ─── Types ────────────────────────────────────────────────────────────────────

interface CartItem {
  productId: number;
  name: string;
  unitPrice: number;
  qty: number;
  variantLabel?: string;
  rentalDays?: number;
  rentalStart?: string;
  rentalEnd?: string;
  isRental: boolean;
  isService: boolean;
}

interface SaleRecord {
  id: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  discountType: "flat" | "pct";
  tax: number;
  grandTotal: number;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const CATALOG_CATEGORIES = [
  "All",
  "Food & Beverages",
  "Electronics",
  "Vehicles",
  "Fashion",
  "Events",
  "Furniture",
  "Home Services",
  "Education",
  "Beauty & Events",
  "Professional",
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
  Other: "oklch(0.55 0.10 200)",
};

// ─── Variant Selector Modal ───────────────────────────────────────────────────

function VariantSelectorModal({
  open,
  onClose,
  item,
  onAdd,
}: {
  open: boolean;
  onClose: () => void;
  item: (Product | Service) | null;
  onAdd: (
    variantLabel: string,
    priceModifier: number,
    rentalData?: { start: string; end: string; days: number },
  ) => void;
}) {
  const { formatPrice } = useCurrency();
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >({});
  const [rentalStart, setRentalStart] = useState("");
  const [rentalEnd, setRentalEnd] = useState("");

  if (!item) return null;

  const isRental = "isRental" in item && item.isRental;
  const rentalDays =
    rentalStart && rentalEnd
      ? Math.max(
          0,
          Math.round(
            (new Date(rentalEnd).getTime() - new Date(rentalStart).getTime()) /
              86400000,
          ),
        )
      : 0;

  const totalModifier = item.variants.reduce((sum, group) => {
    const chosen = group.options.find(
      (o) => o.label === selectedOptions[group.name],
    );
    return sum + (chosen?.priceModifier || 0);
  }, 0);

  const variantLabel = Object.entries(selectedOptions)
    .map(([k, v]) => `${k}: ${v}`)
    .join(", ");

  const handleConfirm = () => {
    if (item.variants.length > 0) {
      const allSelected = item.variants.every((g) => selectedOptions[g.name]);
      if (!allSelected) {
        toast.error("Please select all variant options");
        return;
      }
    }
    if (isRental && (!rentalStart || !rentalEnd || rentalDays <= 0)) {
      toast.error("Please select valid rental dates");
      return;
    }
    onAdd(
      variantLabel,
      totalModifier,
      isRental && rentalDays > 0
        ? { start: rentalStart, end: rentalEnd, days: rentalDays }
        : undefined,
    );
    setSelectedOptions({});
    setRentalStart("");
    setRentalEnd("");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="font-display text-base">
            {item.name}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-1">
          {item.variants.map((group) => (
            <div key={group.name} className="space-y-2">
              <Label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {group.name}
              </Label>
              <div className="flex flex-wrap gap-2">
                {group.options.map((opt) => (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() =>
                      setSelectedOptions((prev) => ({
                        ...prev,
                        [group.name]: opt.label,
                      }))
                    }
                    className={`px-3 py-1.5 rounded-lg border text-xs font-label font-medium transition-all
                      ${
                        selectedOptions[group.name] === opt.label
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-secondary/40 text-foreground hover:border-primary/60"
                      }`}
                  >
                    {opt.label}
                    {opt.priceModifier !== 0 && (
                      <span className="ml-1 opacity-70">
                        {opt.priceModifier > 0 ? "+" : ""}
                        {formatPrice(Math.abs(opt.priceModifier))}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {isRental && (
            <div className="space-y-3 rounded-xl bg-secondary/40 p-3 border border-border">
              <Label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground flex items-center gap-1.5">
                <Calendar size={12} /> Rental Dates
              </Label>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <Label className="text-xs">From</Label>
                  <Input
                    type="date"
                    value={rentalStart}
                    onChange={(e) => setRentalStart(e.target.value)}
                    className="h-8 text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs">Until</Label>
                  <Input
                    type="date"
                    value={rentalEnd}
                    onChange={(e) => setRentalEnd(e.target.value)}
                    className="h-8 text-xs"
                  />
                </div>
              </div>
              {rentalDays > 0 && (
                <div className="text-xs text-primary font-label font-semibold bg-primary/10 rounded px-2 py-1">
                  {rentalDays} day{rentalDays !== 1 ? "s" : ""} selected
                </div>
              )}
            </div>
          )}

          {totalModifier !== 0 && (
            <div className="text-xs text-muted-foreground">
              Price modifier:{" "}
              <span className="font-semibold text-foreground">
                {totalModifier > 0 ? "+" : "-"}
                {formatPrice(Math.abs(totalModifier))}
              </span>
            </div>
          )}

          <Button onClick={handleConfirm} className="w-full font-label">
            <Check size={14} className="mr-1.5" /> Add to Cart
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ─── Receipt Modal ────────────────────────────────────────────────────────────

function ReceiptModal({
  sale,
  onClose,
  onNewSale,
}: {
  sale: SaleRecord | null;
  onClose: () => void;
  onNewSale?: () => void;
}) {
  const { formatPrice } = useCurrency();
  if (!sale) return null;

  const discountAmount =
    sale.discountType === "flat"
      ? sale.discount
      : (sale.subtotal * sale.discount) / 100;
  const taxAmount = (sale.subtotal - discountAmount) * (sale.tax / 100);

  return (
    <Dialog open={!!sale} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="sm:max-w-md print:shadow-none">
        <DialogHeader>
          <DialogTitle className="font-display flex items-center gap-2">
            <CreditCard size={16} className="text-primary" />
            Receipt
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-2" id="receipt-content">
          {/* Header */}
          <div className="text-center border-b border-dashed border-border pb-4">
            <p className="font-display font-bold text-lg text-foreground">
              My Store
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              IndyaCentral POS
            </p>
            <p className="text-xs font-label font-semibold text-primary mt-2">
              {sale.id}
            </p>
            <p className="text-xs text-muted-foreground">
              {new Date(sale.date).toLocaleString()}
            </p>
          </div>

          {/* Items */}
          <div className="space-y-2">
            {sale.items.map((item, i) => (
              <div
                key={`${item.productId}-${i}`}
                className="flex items-start justify-between gap-3"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-label font-medium text-foreground truncate">
                    {item.name}
                  </p>
                  {item.variantLabel && (
                    <p className="text-xs text-muted-foreground">
                      {item.variantLabel}
                    </p>
                  )}
                  {item.isRental && item.rentalStart && item.rentalEnd && (
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar size={10} />
                      {item.rentalStart} → {item.rentalEnd} ({item.rentalDays}d)
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    {item.qty} × {formatPrice(item.unitPrice)}
                  </p>
                </div>
                <p className="text-sm font-label font-semibold text-foreground whitespace-nowrap">
                  {formatPrice(item.qty * item.unitPrice)}
                </p>
              </div>
            ))}
          </div>

          <Separator />

          {/* Totals */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <span>Subtotal</span>
              <span>{formatPrice(sale.subtotal)}</span>
            </div>
            {discountAmount > 0 && (
              <div className="flex justify-between text-green-600 dark:text-green-400">
                <span>
                  Discount
                  {sale.discountType === "pct" ? ` (${sale.discount}%)` : ""}
                </span>
                <span>− {formatPrice(discountAmount)}</span>
              </div>
            )}
            {taxAmount > 0 && (
              <div className="flex justify-between text-muted-foreground">
                <span>Tax ({sale.tax}%)</span>
                <span>+ {formatPrice(Math.round(taxAmount))}</span>
              </div>
            )}
            <Separator />
            <div className="flex justify-between font-display font-bold text-lg text-foreground">
              <span>Grand Total</span>
              <span className="text-primary">
                {formatPrice(sale.grandTotal)}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-1 print:hidden">
            <Button
              variant="outline"
              className="flex-1 font-label gap-1.5"
              onClick={() => window.print()}
            >
              <Printer size={14} /> Print
            </Button>
            {onNewSale && (
              <Button
                className="flex-1 font-label gap-1.5"
                onClick={() => {
                  onNewSale();
                  onClose();
                }}
              >
                <Plus size={14} /> New Sale
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ─── Catalog Card ─────────────────────────────────────────────────────────────

function CatalogCard({
  item,
  price,
  category,
  isRental,
  isService,
  onAdd,
}: {
  item: Product | Service;
  price: number;
  category: string;
  isRental: boolean;
  isService: boolean;
  onAdd: (item: Product | Service) => void;
}) {
  const { formatPrice } = useCurrency();
  const color = CATEGORY_COLORS[category] || "oklch(0.55 0.10 200)";
  const hasVariants = item.variants.length > 0;

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-card-hover transition-all group">
      {/* Thumbnail */}
      {"photos" in item && item.photos.length > 0 ? (
        <img
          src={item.photos[0]}
          alt={item.name}
          className="w-full h-24 object-cover"
        />
      ) : (
        <div
          className="w-full h-24 flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${color}20 0%, ${color}40 100%)`,
          }}
        >
          {isService ? (
            <Wrench size={24} style={{ color }} />
          ) : (
            <Package size={24} style={{ color }} />
          )}
        </div>
      )}

      <div className="p-3">
        <p className="text-xs font-label font-semibold text-foreground truncate leading-tight mb-1">
          {item.name}
        </p>
        <div className="flex items-center gap-1 mb-2 flex-wrap">
          <Badge
            className="text-[9px] px-1 py-0 font-label border-0 leading-tight"
            style={{ background: `${color}18`, color }}
          >
            {category}
          </Badge>
          {isRental && (
            <Badge className="text-[9px] px-1 py-0 font-label bg-secondary text-secondary-foreground leading-tight">
              Rental
            </Badge>
          )}
          {hasVariants && (
            <Badge
              variant="outline"
              className="text-[9px] px-1 py-0 font-label leading-tight"
            >
              Variants
            </Badge>
          )}
        </div>
        <p className="text-sm font-display font-bold text-foreground mb-2">
          {formatPrice(price)}
          {isService && (
            <span className="text-[10px] font-normal text-muted-foreground">
              /hr
            </span>
          )}
          {isRental && (
            <span className="text-[10px] font-normal text-muted-foreground">
              /day
            </span>
          )}
        </p>
        <Button
          size="sm"
          className="w-full h-7 text-xs font-label gap-1"
          onClick={() => onAdd(item)}
        >
          <Plus size={11} />
          {hasVariants || isRental ? (
            <>
              Select
              <ChevronDown size={10} />
            </>
          ) : (
            "Add to Cart"
          )}
        </Button>
        <div className="flex items-center justify-between mt-2">
          <LikeVoteBar id={String(item.id)} className="scale-90 -ml-1" />
          {"createdAt" in item &&
            (item as { createdAt?: string }).createdAt && (
              <span className="text-[9px] text-muted-foreground">
                {formatTimeAgo((item as { createdAt: string }).createdAt)}
              </span>
            )}
        </div>
      </div>
    </div>
  );
}

// ─── Cart Item Row ────────────────────────────────────────────────────────────

function CartItemRow({
  item,
  onQtyChange,
  onRemove,
}: {
  item: CartItem;
  onQtyChange: (delta: number) => void;
  onRemove: () => void;
}) {
  const { formatPrice } = useCurrency();
  const lineTotal = item.qty * item.unitPrice;

  return (
    <div className="flex items-start gap-3 py-3 border-b border-border last:border-0">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-label font-semibold text-foreground truncate">
          {item.name}
        </p>
        {item.variantLabel && (
          <p className="text-xs text-muted-foreground">{item.variantLabel}</p>
        )}
        {item.isRental && item.rentalStart && item.rentalEnd && (
          <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
            <Calendar size={10} />
            {item.rentalStart} → {item.rentalEnd}
            {item.rentalDays && ` (${item.rentalDays}d)`}
          </p>
        )}
        <p className="text-xs text-muted-foreground mt-0.5">
          {formatPrice(item.unitPrice)} each
        </p>
      </div>

      <div className="flex items-center gap-1 shrink-0">
        <Button
          variant="outline"
          size="icon"
          className="h-6 w-6"
          onClick={() => onQtyChange(-1)}
          disabled={item.qty <= 1}
        >
          <Minus size={10} />
        </Button>
        <span className="w-6 text-center text-sm font-label font-semibold">
          {item.qty}
        </span>
        <Button
          variant="outline"
          size="icon"
          className="h-6 w-6"
          onClick={() => onQtyChange(1)}
        >
          <Plus size={10} />
        </Button>
      </div>

      <div className="text-right shrink-0 ml-1">
        <p className="text-sm font-label font-bold text-foreground">
          {formatPrice(lineTotal)}
        </p>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 text-muted-foreground hover:text-destructive mt-0.5"
          onClick={onRemove}
        >
          <Trash2 size={10} />
        </Button>
      </div>
    </div>
  );
}

// ─── POS Quick-Create Dialogs ─────────────────────────────────────────────────

const ALL_MODULES = [
  "Products & Services",
  "Family Tree",
  "Social Feed",
  "Community",
  "Gated Community",
  "Jobs",
  "Healthcare",
  "Real Estate",
  "Education",
  "Travel",
  "Blog",
  "Matrimony",
  "Dating",
];

function QuickAddProductDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    purchasePrice: "",
    category: "Electronics",
    stockQty: "",
    supplierName: "",
    supplierType: "Manufacturer",
    description: "",
    videoUrl: "",
    moderationStatus: "Pending Review",
  });
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [variants, setVariants] = useState<
    { label: string; price: string; stock: string }[]
  >([]);
  const [addons, setAddons] = useState<{ name: string; price: string }[]>([]);
  const [addonInput, setAddonInput] = useState({ name: "", price: "" });
  const [detectingVariants, setDetectingVariants] = useState(false);
  const margin =
    form.price && form.purchasePrice
      ? (
          ((Number.parseFloat(form.price) -
            Number.parseFloat(form.purchasePrice)) /
            Number.parseFloat(form.price)) *
          100
        ).toFixed(1)
      : null;

  const handleImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    for (const f of files) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (ev.target?.result) {
          setImagePreviews((prev) => [...prev, ev.target!.result as string]);
        }
      };
      reader.readAsDataURL(f);
    }
  };

  const detectVariants = () => {
    setDetectingVariants(true);
    setTimeout(() => {
      const basePrice = form.price || "0";
      let detected: { label: string; price: string; stock: string }[] = [];
      const cat = form.category;
      if (cat === "Fashion" || cat === "Clothing") {
        const colors = ["Red", "Blue", "Black", "White", "Green"];
        const sizes = ["S", "M", "L", "XL"];
        detected = colors.slice(0, 3).flatMap((color) =>
          sizes.slice(0, 2).map((size) => ({
            label: `${color} / ${size}`,
            price: basePrice,
            stock: "10",
          })),
        );
      } else if (cat === "Electronics") {
        detected = ["64GB / Black", "128GB / Silver", "256GB / Gold"].map(
          (label) => ({
            label,
            price: basePrice,
            stock: "5",
          }),
        );
      } else if (cat === "Food & Beverages" || cat === "Food") {
        detected = ["Small", "Medium", "Large", "Family Pack"].map((label) => ({
          label,
          price: basePrice,
          stock: "50",
        }));
      } else if (cat === "Healthcare") {
        detected = ["Strip of 10", "Pack of 30", "Pack of 100"].map(
          (label) => ({
            label,
            price: basePrice,
            stock: "20",
          }),
        );
      } else if (cat === "Home Services") {
        detected = ["Basic", "Standard", "Premium"].map((label, i) => ({
          label,
          price: String(Math.round(Number(basePrice) * (1 + i * 0.5))),
          stock: "999",
        }));
      } else {
        detected = ["Standard", "Deluxe", "Premium"].map((label, i) => ({
          label,
          price: String(Math.round(Number(basePrice) * (1 + i * 0.3))),
          stock: "10",
        }));
      }
      setVariants(detected);
      setDetectingVariants(false);
      toast.success(`${detected.length} variants detected for ${cat}`);
    }, 1200);
  };

  const detectColors = () => {
    setTimeout(() => {
      const detected = [
        { label: "Midnight Blue", price: form.price || "0", stock: "10" },
        { label: "Ivory White", price: form.price || "0", stock: "10" },
      ];
      setVariants((prev) => [...prev, ...detected]);
      toast.success("2 dominant colors detected");
    }, 800);
  };

  const generateDesc = () => {
    if (!form.name) {
      toast.error("Enter product name first");
      return;
    }
    const desc = `${form.name} — Premium quality product in the ${form.category} category. Sourced from verified ${form.supplierType.toLowerCase()} suppliers. Available in multiple variants to suit every preference.`;
    setForm((p) => ({ ...p, description: desc }));
    toast.success("AI description generated");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    const sameCatCount = getGlobalProducts().filter(
      (p) => p.category === form.category && !p.isService,
    ).length;
    addGlobalProduct({
      name: form.name,
      description: form.description,
      price: Number.parseFloat(form.price) || 0,
      category: form.category,
      module: "POS",
      seller: "Business Owner",
      supplier: form.supplierName,
      purchasePrice: Number.parseFloat(form.purchasePrice) || undefined,
      inventory: Number.parseInt(form.stockQty) || undefined,
      videoUrl: form.videoUrl || undefined,
      imageUrl: imagePreviews[0] || undefined,
      variantDetails: variants.map((v) => ({
        label: v.label,
        price: Number.parseFloat(v.price) || 0,
        stock: Number.parseInt(v.stock) || 0,
      })),
      addons: addons.map((a) => ({
        name: a.name,
        price: Number.parseFloat(a.price) || 0,
      })),
      isService: false,
      status: "pending",
    });
    toast.success(`Product "${form.name}" added to catalog`);
    if (sameCatCount >= 1) {
      setTimeout(() => {
        toast.info(
          `Tip: ${sameCatCount + 1} matching products found. Consider creating a combo!`,
        );
      }, 500);
    }
    setForm({
      name: "",
      price: "",
      purchasePrice: "",
      category: "Electronics",
      stockQty: "",
      supplierName: "",
      supplierType: "Manufacturer",
      description: "",
      videoUrl: "",
      moderationStatus: "Pending Review",
    });
    setImagePreviews([]);
    setVariants([]);
    setAddons([]);
    onClose();
  };

  const getEmbedUrl = (url: string) => {
    if (url.includes("youtube.com/watch?v="))
      return url.replace("watch?v=", "embed/");
    if (url.includes("youtu.be/"))
      return url.replace("youtu.be/", "www.youtube.com/embed/");
    return url;
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display flex items-center gap-2">
            <PackagePlus size={16} className="text-primary" /> Add Product
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-3 mt-1">
          <div className="space-y-1.5">
            <Label className="text-xs">Product Name *</Label>
            <Input
              placeholder="e.g. Laptop Bag"
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              required
              className="h-9"
              data-ocid="pos.product.input"
            />
          </div>

          {/* Image Upload */}
          <div className="space-y-1.5">
            <Label className="text-xs">Product Images</Label>
            <label
              className="flex items-center gap-2 border-2 border-dashed border-border rounded-lg p-3 cursor-pointer hover:border-primary/50 transition-colors"
              data-ocid="pos.product.dropzone"
            >
              <Upload size={14} className="text-muted-foreground" />
              <span className="text-xs text-muted-foreground">
                Upload images (JPG, PNG)
              </span>
              <input
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleImages}
              />
            </label>
            {imagePreviews.length > 0 && (
              <div className="flex gap-2 flex-wrap mt-1">
                {imagePreviews.map((url) => (
                  <img
                    key={url}
                    src={url}
                    alt=""
                    className="w-14 h-14 object-cover rounded-lg border border-border"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Video Link */}
          <div className="space-y-1.5">
            <Label className="text-xs flex items-center gap-1">
              <Video size={12} /> Video Link (YouTube / Vimeo)
            </Label>
            <Input
              placeholder="https://youtube.com/watch?v=..."
              value={form.videoUrl}
              onChange={(e) =>
                setForm((p) => ({ ...p, videoUrl: e.target.value }))
              }
              className="h-9"
            />
            {form.videoUrl && (
              <div className="rounded-lg overflow-hidden border border-border aspect-video mt-1">
                <iframe
                  src={getEmbedUrl(form.videoUrl)}
                  className="w-full h-full"
                  allowFullScreen
                  title="Product video"
                />
              </div>
            )}
          </div>

          {/* AI Variant Detection */}
          <div className="space-y-1.5">
            <Label className="text-xs">Variants</Label>
            <div className="flex gap-2">
              <Button
                type="button"
                size="sm"
                variant="outline"
                className="h-8 text-xs gap-1 font-label"
                onClick={detectVariants}
                disabled={detectingVariants}
                data-ocid="pos.product.detect_variants.button"
              >
                <Wand2 size={12} />{" "}
                {detectingVariants ? "Detecting..." : "Detect Variants (AI)"}
              </Button>
              <Button
                type="button"
                size="sm"
                variant="outline"
                className="h-8 text-xs gap-1 font-label"
                onClick={detectColors}
                data-ocid="pos.product.detect_colors.button"
              >
                <Palette size={12} /> Detect Colors
              </Button>
            </div>
            {variants.length > 0 && (
              <div className="border border-border rounded-lg overflow-hidden mt-1">
                <table className="w-full text-xs">
                  <thead className="bg-muted/40">
                    <tr>
                      <th className="p-1.5 text-left">Variant</th>
                      <th className="p-1.5 text-left">Price (₹)</th>
                      <th className="p-1.5 text-left">Stock</th>
                      <th className="p-1.5 text-left" />
                    </tr>
                  </thead>
                  <tbody>
                    {variants.map((v, i) => (
                      <tr key={v.label} className="border-t border-border/50">
                        <td className="p-1.5 font-medium">
                          <input
                            type="text"
                            value={v.label}
                            onChange={(e) =>
                              setVariants((prev) =>
                                prev.map((x, xi) =>
                                  xi === i
                                    ? { ...x, label: e.target.value }
                                    : x,
                                ),
                              )
                            }
                            className="w-28 border border-border rounded px-1.5 py-0.5 text-xs bg-background"
                          />
                        </td>
                        <td className="p-1.5">
                          <input
                            type="number"
                            value={v.price}
                            onChange={(e) =>
                              setVariants((prev) =>
                                prev.map((x, xi) =>
                                  xi === i
                                    ? { ...x, price: e.target.value }
                                    : x,
                                ),
                              )
                            }
                            className="w-20 border border-border rounded px-1.5 py-0.5 text-xs bg-background"
                          />
                        </td>
                        <td className="p-1.5">
                          <input
                            type="number"
                            value={v.stock}
                            onChange={(e) =>
                              setVariants((prev) =>
                                prev.map((x, xi) =>
                                  xi === i
                                    ? { ...x, stock: e.target.value }
                                    : x,
                                ),
                              )
                            }
                            className="w-16 border border-border rounded px-1.5 py-0.5 text-xs bg-background"
                          />
                        </td>
                        <td className="p-1.5">
                          <button
                            type="button"
                            onClick={() =>
                              setVariants((prev) =>
                                prev.filter((_, xi) => xi !== i),
                              )
                            }
                            className="text-destructive hover:opacity-70"
                          >
                            ✕
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Add-ons */}
          <div className="space-y-1.5">
            <Label className="text-xs font-semibold">Add-ons</Label>
            {addons.map((a, i) => (
              <div key={a.name} className="flex items-center gap-2 text-xs">
                <span className="flex-1 bg-muted/30 rounded px-2 py-1">
                  {a.name}
                </span>
                <span className="text-muted-foreground">₹{a.price}</span>
                <button
                  type="button"
                  onClick={() =>
                    setAddons((prev) => prev.filter((_, xi) => xi !== i))
                  }
                  className="text-destructive hover:opacity-70"
                >
                  ✕
                </button>
              </div>
            ))}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Addon name"
                value={addonInput.name}
                onChange={(e) =>
                  setAddonInput((p) => ({ ...p, name: e.target.value }))
                }
                className="flex-1 border border-border rounded px-2 py-1 text-xs bg-background"
              />
              <input
                type="number"
                placeholder="Price"
                value={addonInput.price}
                onChange={(e) =>
                  setAddonInput((p) => ({ ...p, price: e.target.value }))
                }
                className="w-20 border border-border rounded px-2 py-1 text-xs bg-background"
              />
              <button
                type="button"
                onClick={() => {
                  if (!addonInput.name.trim()) return;
                  setAddons((prev) => [...prev, { ...addonInput }]);
                  setAddonInput({ name: "", price: "" });
                }}
                className="px-2 py-1 bg-primary text-primary-foreground rounded text-xs"
              >
                + Add
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-xs">Selling Price (₹)</Label>
              <Input
                type="number"
                placeholder="0"
                value={form.price}
                onChange={(e) =>
                  setForm((p) => ({ ...p, price: e.target.value }))
                }
                className="h-9"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Purchase Rate (₹)</Label>
              <Input
                type="number"
                placeholder="0"
                value={form.purchasePrice}
                onChange={(e) =>
                  setForm((p) => ({ ...p, purchasePrice: e.target.value }))
                }
                className="h-9"
              />
            </div>
          </div>
          {margin && (
            <p className="text-xs text-green-600 font-medium">
              Margin: {margin}%
            </p>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-xs">Stock Qty</Label>
              <Input
                type="number"
                placeholder="0"
                value={form.stockQty}
                onChange={(e) =>
                  setForm((p) => ({ ...p, stockQty: e.target.value }))
                }
                className="h-9"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Category</Label>
              <Select
                value={form.category}
                onValueChange={(v) => setForm((p) => ({ ...p, category: v }))}
              >
                <SelectTrigger className="h-9">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[
                    "Electronics",
                    "Vehicles",
                    "Fashion",
                    "Events",
                    "Furniture",
                    "Food",
                    "Healthcare",
                    "Education",
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

          {/* Supplier */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-xs">Supplier Name</Label>
              <Input
                placeholder="Supplier / vendor"
                value={form.supplierName}
                onChange={(e) =>
                  setForm((p) => ({ ...p, supplierName: e.target.value }))
                }
                className="h-9"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Supplier Type</Label>
              <Select
                value={form.supplierType}
                onValueChange={(v) =>
                  setForm((p) => ({ ...p, supplierType: v }))
                }
              >
                <SelectTrigger className="h-9">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[
                    "Raw Material Supplier",
                    "Manufacturer",
                    "Job Work Party",
                    "In-house Manufacturing",
                  ].map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Description with AI */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <Label className="text-xs">Description</Label>
              <Button
                type="button"
                size="sm"
                variant="ghost"
                className="h-6 text-[10px] gap-1 font-label text-primary px-2"
                onClick={generateDesc}
                data-ocid="pos.product.ai_desc.button"
              >
                <Wand2 size={10} /> Generate (AI)
              </Button>
            </div>
            <Textarea
              rows={2}
              className="resize-none text-xs"
              placeholder="Product description..."
              value={form.description}
              onChange={(e) =>
                setForm((p) => ({ ...p, description: e.target.value }))
              }
            />
          </div>

          {/* Moderation Status */}
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
            <span className="text-xs font-medium text-amber-700 dark:text-amber-400">
              Moderation Status
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 font-medium">
              ⏳ {form.moderationStatus}
            </span>
          </div>

          <div className="flex gap-2 pt-1">
            <Button
              type="button"
              variant="outline"
              className="flex-1 font-label h-9"
              onClick={onClose}
              data-ocid="pos.product.cancel_button"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 font-label h-9"
              data-ocid="pos.product.submit_button"
            >
              Add Product
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function QuickAddServiceDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    name: "",
    pricePerHour: "",
    purchasePrice: "",
    category: "Home Services",
    supplierName: "",
    description: "",
    videoUrl: "",
    moderationStatus: "Pending Review",
  });
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [variants, setVariants] = useState<
    { label: string; price: string; stock: string }[]
  >([]);
  const [addons, setAddons] = useState<{ name: string; price: string }[]>([]);
  const [addonInput, setAddonInput] = useState({ name: "", price: "" });

  const handleImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    for (const f of files) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (ev.target?.result) {
          setImagePreviews((prev) => [...prev, ev.target!.result as string]);
        }
      };
      reader.readAsDataURL(f);
    }
  };

  const detectVariants = () => {
    setTimeout(() => {
      const base = Number.parseFloat(form.pricePerHour || "0");
      const cat = form.category;
      let detected: { label: string; price: string; stock: string }[] = [];
      if (cat === "Home Services") {
        detected = [
          { label: "Basic", price: String(base), stock: "999" },
          {
            label: "Standard",
            price: String(Math.round(base * 1.5)),
            stock: "999",
          },
          {
            label: "Premium",
            price: String(Math.round(base * 2)),
            stock: "999",
          },
        ];
      } else if (cat === "Healthcare" || cat === "Health") {
        detected = [
          { label: "15 min Consultation", price: String(base), stock: "20" },
          {
            label: "30 min Consultation",
            price: String(Math.round(base * 1.8)),
            stock: "20",
          },
          {
            label: "60 min Session",
            price: String(Math.round(base * 3)),
            stock: "10",
          },
        ];
      } else if (cat === "Education") {
        detected = [
          { label: "Single Session", price: String(base), stock: "999" },
          {
            label: "Monthly Plan (12 sessions)",
            price: String(Math.round(base * 10)),
            stock: "50",
          },
          {
            label: "Crash Course",
            price: String(Math.round(base * 5)),
            stock: "30",
          },
        ];
      } else {
        detected = [
          { label: "Basic Package", price: String(base), stock: "999" },
          {
            label: "Standard Package",
            price: String(Math.round(base * 1.5)),
            stock: "999",
          },
          {
            label: "Premium Package",
            price: String(Math.round(base * 2)),
            stock: "999",
          },
        ];
      }
      setVariants(detected);
      toast.success("Service variants detected");
    }, 900);
  };

  const generateDesc = () => {
    if (!form.name) {
      toast.error("Enter service name first");
      return;
    }
    setForm((p) => ({
      ...p,
      description: `${p.name} — Professional ${p.category} service with experienced providers. Rated highly for quality and reliability. Customizable packages available for all budgets.`,
    }));
    toast.success("AI description generated");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    addGlobalProduct({
      name: form.name,
      description: form.description,
      price: Number.parseFloat(form.pricePerHour) || 0,
      category: form.category,
      module: "POS",
      seller: "Business Owner",
      supplier: form.supplierName,
      purchasePrice: Number.parseFloat(form.purchasePrice) || undefined,
      videoUrl: form.videoUrl || undefined,
      imageUrl: imagePreviews[0] || undefined,
      variantDetails: variants.map((v) => ({
        label: v.label,
        price: Number.parseFloat(v.price) || 0,
        stock: Number.parseInt(v.stock) || 0,
      })),
      addons: addons.map((a) => ({
        name: a.name,
        price: Number.parseFloat(a.price) || 0,
      })),
      isService: true,
      status: "pending",
    });
    toast.success(`Service "${form.name}" added to catalog`);
    setForm({
      name: "",
      pricePerHour: "",
      purchasePrice: "",
      category: "Home Services",
      supplierName: "",
      description: "",
      videoUrl: "",
      moderationStatus: "Pending Review",
    });
    setImagePreviews([]);
    setVariants([]);
    setAddons([]);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display flex items-center gap-2">
            <Wrench size={16} className="text-primary" /> Add Service
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-3 mt-1">
          <div className="space-y-1.5">
            <Label className="text-xs">Service Name *</Label>
            <Input
              placeholder="e.g. Plumbing Repair"
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              required
              className="h-9"
              data-ocid="pos.service.input"
            />
          </div>
          {/* Image Upload */}
          <div className="space-y-1.5">
            <Label className="text-xs">Service Images</Label>
            <label
              className="flex items-center gap-2 border-2 border-dashed border-border rounded-lg p-3 cursor-pointer hover:border-primary/50 transition-colors"
              data-ocid="pos.service.dropzone"
            >
              <Upload size={14} className="text-muted-foreground" />
              <span className="text-xs text-muted-foreground">
                Upload images
              </span>
              <input
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleImages}
              />
            </label>
            {imagePreviews.length > 0 && (
              <div className="flex gap-2 flex-wrap mt-1">
                {imagePreviews.map((url) => (
                  <img
                    key={url}
                    src={url}
                    alt=""
                    className="w-14 h-14 object-cover rounded-lg border border-border"
                  />
                ))}
              </div>
            )}
          </div>
          {/* Video Link */}
          <div className="space-y-1.5">
            <Label className="text-xs flex items-center gap-1">
              <Video size={12} /> Video Link
            </Label>
            <Input
              placeholder="YouTube / Vimeo URL"
              value={form.videoUrl}
              onChange={(e) =>
                setForm((p) => ({ ...p, videoUrl: e.target.value }))
              }
              className="h-9"
            />
          </div>
          {/* Variants */}
          <div className="space-y-1.5">
            <Label className="text-xs">Service Variants</Label>
            <Button
              type="button"
              size="sm"
              variant="outline"
              className="h-8 text-xs gap-1 font-label"
              onClick={detectVariants}
              data-ocid="pos.service.detect_variants.button"
            >
              <Wand2 size={12} /> Detect Variants (AI)
            </Button>
            {variants.length > 0 && (
              <div className="border border-border rounded-lg overflow-hidden mt-1">
                <table className="w-full text-xs">
                  <thead className="bg-muted/40">
                    <tr>
                      <th className="p-1.5 text-left">Variant</th>
                      <th className="p-1.5 text-left">Price (₹)</th>
                      <th className="p-1.5 text-left">Slots</th>
                      <th className="p-1.5" />
                    </tr>
                  </thead>
                  <tbody>
                    {variants.map((v, i) => (
                      <tr key={v.label} className="border-t border-border/50">
                        <td className="p-1.5 font-medium">
                          <input
                            type="text"
                            value={v.label}
                            onChange={(e) =>
                              setVariants((prev) =>
                                prev.map((x, xi) =>
                                  xi === i
                                    ? { ...x, label: e.target.value }
                                    : x,
                                ),
                              )
                            }
                            className="w-28 border border-border rounded px-1.5 py-0.5 text-xs bg-background"
                          />
                        </td>
                        <td className="p-1.5">
                          <input
                            type="number"
                            value={v.price}
                            onChange={(e) =>
                              setVariants((prev) =>
                                prev.map((x, xi) =>
                                  xi === i
                                    ? { ...x, price: e.target.value }
                                    : x,
                                ),
                              )
                            }
                            className="w-20 border border-border rounded px-1.5 py-0.5 text-xs bg-background"
                          />
                        </td>
                        <td className="p-1.5">
                          <input
                            type="number"
                            value={v.stock}
                            onChange={(e) =>
                              setVariants((prev) =>
                                prev.map((x, xi) =>
                                  xi === i
                                    ? { ...x, stock: e.target.value }
                                    : x,
                                ),
                              )
                            }
                            className="w-16 border border-border rounded px-1.5 py-0.5 text-xs bg-background"
                          />
                        </td>
                        <td className="p-1.5">
                          <button
                            type="button"
                            onClick={() =>
                              setVariants((prev) =>
                                prev.filter((_, xi) => xi !== i),
                              )
                            }
                            className="text-destructive hover:opacity-70"
                          >
                            ✕
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Add-ons */}
          <div className="space-y-1.5">
            <Label className="text-xs font-semibold">Add-ons</Label>
            {addons.map((a, i) => (
              <div key={a.name} className="flex items-center gap-2 text-xs">
                <span className="flex-1 bg-muted/30 rounded px-2 py-1">
                  {a.name}
                </span>
                <span className="text-muted-foreground">₹{a.price}</span>
                <button
                  type="button"
                  onClick={() =>
                    setAddons((prev) => prev.filter((_, xi) => xi !== i))
                  }
                  className="text-destructive hover:opacity-70"
                >
                  ✕
                </button>
              </div>
            ))}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Addon name"
                value={addonInput.name}
                onChange={(e) =>
                  setAddonInput((p) => ({ ...p, name: e.target.value }))
                }
                className="flex-1 border border-border rounded px-2 py-1 text-xs bg-background"
              />
              <input
                type="number"
                placeholder="Price"
                value={addonInput.price}
                onChange={(e) =>
                  setAddonInput((p) => ({ ...p, price: e.target.value }))
                }
                className="w-20 border border-border rounded px-2 py-1 text-xs bg-background"
              />
              <button
                type="button"
                onClick={() => {
                  if (!addonInput.name.trim()) return;
                  setAddons((prev) => [...prev, { ...addonInput }]);
                  setAddonInput({ name: "", price: "" });
                }}
                className="px-2 py-1 bg-primary text-primary-foreground rounded text-xs"
              >
                + Add
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-xs">Price / Hour</Label>
              <Input
                type="number"
                placeholder="0"
                value={form.pricePerHour}
                onChange={(e) =>
                  setForm((p) => ({ ...p, pricePerHour: e.target.value }))
                }
                className="h-9"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Category</Label>
              <Select
                value={form.category}
                onValueChange={(v) => setForm((p) => ({ ...p, category: v }))}
              >
                <SelectTrigger className="h-9">
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
          <div className="space-y-1.5">
            <Label className="text-xs">Description</Label>
            <Textarea
              rows={2}
              className="resize-none text-xs"
              placeholder="Brief description..."
              value={form.description}
              onChange={(e) =>
                setForm((p) => ({ ...p, description: e.target.value }))
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-xs">Purchase Rate (₹/hr)</Label>
              <Input
                type="number"
                placeholder="0"
                value={form.purchasePrice}
                onChange={(e) =>
                  setForm((p) => ({ ...p, purchasePrice: e.target.value }))
                }
                className="h-9"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Supplier / Provider</Label>
              <Input
                placeholder="Provider name"
                value={form.supplierName}
                onChange={(e) =>
                  setForm((p) => ({ ...p, supplierName: e.target.value }))
                }
                className="h-9"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <Label className="text-xs">Description</Label>
              <Button
                type="button"
                size="sm"
                variant="ghost"
                className="h-6 text-[10px] gap-1 font-label text-primary px-2"
                onClick={generateDesc}
                data-ocid="pos.service.ai_desc.button"
              >
                <Wand2 size={10} /> Generate (AI)
              </Button>
            </div>
            <Textarea
              rows={2}
              className="resize-none text-xs"
              placeholder="Service description..."
              value={form.description}
              onChange={(e) =>
                setForm((p) => ({ ...p, description: e.target.value }))
              }
            />
          </div>
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
            <span className="text-xs font-medium text-amber-700 dark:text-amber-400">
              Moderation Status
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 font-medium">
              ⏳ {form.moderationStatus}
            </span>
          </div>
          <div className="flex gap-2 pt-1">
            <Button
              type="button"
              variant="outline"
              className="flex-1 font-label h-9"
              onClick={onClose}
              data-ocid="pos.service.cancel_button"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 font-label h-9"
              data-ocid="pos.service.submit_button"
            >
              Add Service
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function QuickAddEventDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    title: "",
    module: "Products & Services",
    date: "",
    time: "",
    location: "",
    type: "public" as "public" | "private" | "ticket",
    ticketPrice: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    toast.success(`Event "${form.title}" created`);
    setForm({
      title: "",
      module: "Products & Services",
      date: "",
      time: "",
      location: "",
      type: "public",
      ticketPrice: "",
    });
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="font-display flex items-center gap-2">
            <CalendarPlus size={16} className="text-primary" /> Create Event
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-3 mt-1">
          <div className="space-y-1.5">
            <Label className="text-xs">Event Title *</Label>
            <Input
              placeholder="e.g. Summer Sale Launch"
              value={form.title}
              onChange={(e) =>
                setForm((p) => ({ ...p, title: e.target.value }))
              }
              required
              className="h-9"
              data-ocid="pos.event.input"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Module</Label>
            <Select
              value={form.module}
              onValueChange={(v) => setForm((p) => ({ ...p, module: v }))}
            >
              <SelectTrigger className="h-9">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {ALL_MODULES.map((m) => (
                  <SelectItem key={m} value={m}>
                    {m}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-xs">Date</Label>
              <Input
                type="date"
                value={form.date}
                onChange={(e) =>
                  setForm((p) => ({ ...p, date: e.target.value }))
                }
                className="h-9"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Time</Label>
              <Input
                type="time"
                value={form.time}
                onChange={(e) =>
                  setForm((p) => ({ ...p, time: e.target.value }))
                }
                className="h-9"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Location</Label>
            <Input
              placeholder="Venue or Online"
              value={form.location}
              onChange={(e) =>
                setForm((p) => ({ ...p, location: e.target.value }))
              }
              className="h-9"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Event Type</Label>
            <Select
              value={form.type}
              onValueChange={(v) =>
                setForm((p) => ({ ...p, type: v as typeof form.type }))
              }
            >
              <SelectTrigger className="h-9">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="public">Public</SelectItem>
                <SelectItem value="private">Private</SelectItem>
                <SelectItem value="ticket">Ticket-based</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {form.type === "ticket" && (
            <div className="space-y-1.5">
              <Label className="text-xs">Ticket Price</Label>
              <Input
                type="number"
                placeholder="0"
                value={form.ticketPrice}
                onChange={(e) =>
                  setForm((p) => ({ ...p, ticketPrice: e.target.value }))
                }
                className="h-9"
              />
            </div>
          )}
          <div className="flex gap-2 pt-1">
            <Button
              type="button"
              variant="outline"
              className="flex-1 font-label h-9"
              onClick={onClose}
              data-ocid="pos.event.cancel_button"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 font-label h-9"
              data-ocid="pos.event.submit_button"
            >
              Create Event
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function QuickAddJobDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    jobType: "full_time" as
      | "full_time"
      | "part_time"
      | "freelance"
      | "contract",
    salary: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    toast.success(`Job "${form.title}" posted`);
    setForm({
      title: "",
      company: "",
      location: "",
      jobType: "full_time",
      salary: "",
    });
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="font-display flex items-center gap-2">
            <Briefcase size={16} className="text-primary" /> Post a Job
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-3 mt-1">
          <div className="space-y-1.5">
            <Label className="text-xs">Job Title *</Label>
            <Input
              placeholder="e.g. Senior Developer"
              value={form.title}
              onChange={(e) =>
                setForm((p) => ({ ...p, title: e.target.value }))
              }
              required
              className="h-9"
              data-ocid="pos.job.input"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Company</Label>
            <Input
              placeholder="Company name"
              value={form.company}
              onChange={(e) =>
                setForm((p) => ({ ...p, company: e.target.value }))
              }
              className="h-9"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-xs">Location</Label>
              <Input
                placeholder="City or Remote"
                value={form.location}
                onChange={(e) =>
                  setForm((p) => ({ ...p, location: e.target.value }))
                }
                className="h-9"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Salary / Rate</Label>
              <Input
                placeholder="e.g. 50,000/mo"
                value={form.salary}
                onChange={(e) =>
                  setForm((p) => ({ ...p, salary: e.target.value }))
                }
                className="h-9"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Job Type</Label>
            <Select
              value={form.jobType}
              onValueChange={(v) =>
                setForm((p) => ({ ...p, jobType: v as typeof form.jobType }))
              }
            >
              <SelectTrigger className="h-9">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full_time">Full Time</SelectItem>
                <SelectItem value="part_time">Part Time</SelectItem>
                <SelectItem value="freelance">Freelance</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2 pt-1">
            <Button
              type="button"
              variant="outline"
              className="flex-1 font-label h-9"
              onClick={onClose}
              data-ocid="pos.job.cancel_button"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 font-label h-9"
              data-ocid="pos.job.submit_button"
            >
              Post Job
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// ─── Main POS Page ────────────────────────────────────────────────────────────

export default function POSPage() {
  const { formatPrice, currency } = useCurrency();
  const [activeTab, setActiveTab] = useState<
    "new-sale" | "history" | "my-catalog"
  >("new-sale");
  const [mobileView, setMobileView] = useState<"catalog" | "cart">("catalog");

  // Quick-create dialog states
  const [quickProductOpen, setQuickProductOpen] = useState(false);
  const [quickServiceOpen, setQuickServiceOpen] = useState(false);
  const [quickEventOpen, setQuickEventOpen] = useState(false);
  const [quickJobOpen, setQuickJobOpen] = useState(false);

  // Catalog state
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [discount, setDiscount] = useState(0);
  const [discountType, setDiscountType] = useState<"flat" | "pct">("flat");
  const [tax, setTax] = useState(0);

  // Variant modal
  const [variantModalItem, setVariantModalItem] = useState<
    Product | Service | null
  >(null);

  // Receipt
  const [receiptSale, setReceiptSale] = useState<SaleRecord | null>(null);
  const [salesHistory, setSalesHistory] = useState<SaleRecord[]>([]);

  // Global products state (user-added)
  const [globalProds, setGlobalProds] = useState(() =>
    getGlobalProducts().filter(
      (p) => p.module === "POS" || p.seller === "Business Owner",
    ),
  );
  const [editProduct, setEditProduct] = useState<null | {
    id: string;
    name: string;
    price: number;
    description: string;
    stock: number;
    category: string;
    images: string[];
    videoUrl: string;
    supplierName: string;
    supplierType: string;
    purchasePrice: number;
    variants: { label: string; price: string; stock: string }[];
    addons: { name: string; price: string }[];
    moderationStatus: string;
    isService: boolean;
  }>(null);
  const [editOpen, setEditOpen] = useState(false);
  const [boostTarget, setBoostTarget] = useState<string | null>(null);
  const [boostedItems, setBoostedItems] = useState<Record<string, boolean>>(
    () => {
      const b: string[] = JSON.parse(
        localStorage.getItem("ic_boosted_posts") || "[]",
      );
      return Object.fromEntries(b.map((id) => [id, true]));
    },
  );

  useEffect(() => {
    const h = () =>
      setGlobalProds(
        getGlobalProducts().filter(
          (p) => p.module === "POS" || p.seller === "Business Owner",
        ),
      );
    window.addEventListener("globalProductsUpdated", h);
    return () => window.removeEventListener("globalProductsUpdated", h);
  }, []);

  // Build catalog
  const allItems: Array<{
    item: Product | Service;
    price: number;
    category: string;
    isRental: boolean;
    isService: boolean;
  }> = [
    ...SAMPLE_PRODUCTS.map((p) => ({
      item: p as Product | Service,
      price: p.isRental && p.price === 0 ? p.rentalPricePerDay || 0 : p.price,
      category: p.category,
      isRental: p.isRental,
      isService: false,
    })),
    ...SAMPLE_SERVICES.map((s) => ({
      item: s as Product | Service,
      price: s.pricePerHour,
      category: s.category,
      isRental: false,
      isService: true,
    })),
    ...globalProds.map((p) => ({
      item: {
        id: p.id as unknown as number,
        name: p.name,
        category: p.category,
        price: p.price,
        description: p.description,
        photos: p.imageUrl ? [p.imageUrl] : [],
        variants: [],
        isRental: false,
        isVeg: false,
        seller: p.seller ?? "",
        rating: p.rating ?? 4.5,
        reviews: p.reviews ?? 0,
      } as unknown as Product,
      price: p.price,
      category: p.category,
      isRental: false,
      isService: p.isService || false,
    })),
  ];

  const filteredItems = allItems.filter((c) => {
    const matchesSearch = c.item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      categoryFilter === "All" || c.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  // Cart calculations
  const subtotal = cartItems.reduce((sum, i) => sum + i.qty * i.unitPrice, 0);
  const discountAmount =
    discountType === "flat" ? discount : (subtotal * discount) / 100;
  const taxBase = subtotal - discountAmount;
  const taxAmount = taxBase * (tax / 100);
  const grandTotal = Math.max(
    0,
    Math.round(subtotal - discountAmount + taxAmount),
  );

  const addToCart = (
    item: Product | Service,
    variantLabel = "",
    priceModifier = 0,
    rentalData?: { start: string; end: string; days: number },
  ) => {
    const basePrice =
      "isRental" in item && item.isRental && (item as Product).price === 0
        ? ((item as Product).rentalPricePerDay || 0) * (rentalData?.days || 1)
        : "pricePerHour" in item
          ? item.pricePerHour
          : (item as Product).price;

    const unitPrice = basePrice + priceModifier;

    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (ci) =>
          ci.productId === item.id &&
          ci.variantLabel === variantLabel &&
          ci.isService === "pricePerHour" in item,
      );
      if (existingIdx >= 0 && !rentalData) {
        return prev.map((ci, i) =>
          i === existingIdx ? { ...ci, qty: ci.qty + 1 } : ci,
        );
      }
      return [
        ...prev,
        {
          productId: item.id,
          name: item.name,
          unitPrice,
          qty: 1,
          variantLabel: variantLabel || undefined,
          rentalDays: rentalData?.days,
          rentalStart: rentalData?.start,
          rentalEnd: rentalData?.end,
          isRental: !!rentalData,
          isService: "pricePerHour" in item,
        },
      ];
    });
    toast.success(`${item.name} added to cart`);
  };

  const handleCatalogAdd = (item: Product | Service) => {
    const hasVariants = item.variants.length > 0;
    const isRental = "isRental" in item && item.isRental;
    if (hasVariants || isRental) {
      setVariantModalItem(item);
    } else {
      addToCart(item);
    }
  };

  const handleVariantConfirm = (
    variantLabel: string,
    priceModifier: number,
    rentalData?: { start: string; end: string; days: number },
  ) => {
    if (variantModalItem) {
      addToCart(variantModalItem, variantLabel, priceModifier, rentalData);
    }
    setVariantModalItem(null);
  };

  const updateQty = (idx: number, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((ci, i) => (i === idx ? { ...ci, qty: ci.qty + delta } : ci))
        .filter((ci) => ci.qty > 0),
    );
  };

  const removeItem = (idx: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== idx));
  };

  const clearCart = () => {
    setCartItems([]);
    setDiscount(0);
    setTax(0);
  };

  const completeSale = () => {
    if (cartItems.length === 0) {
      toast.error("Cart is empty");
      return;
    }
    const sale: SaleRecord = {
      id: `#ORD-${Date.now()}`,
      date: new Date().toISOString(),
      items: [...cartItems],
      subtotal,
      discount,
      discountType,
      tax,
      grandTotal,
    };
    setSalesHistory((prev) => [sale, ...prev]);
    setReceiptSale(sale);
  };

  const handleNewSale = () => {
    clearCart();
  };

  // ─── Catalog Panel ──────────────────────────────────────────────────────────

  const CatalogPanel = () => (
    <div className="flex flex-col h-full">
      {/* Search + Filter */}
      <div className="shrink-0 space-y-3 pb-4">
        <div className="relative">
          <Package
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            placeholder="Search products & services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8 h-9 text-sm"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X size={13} />
            </button>
          )}
        </div>
        <div className="overflow-x-auto scrollbar-none">
          <div className="flex gap-1.5 pb-1 min-w-max">
            {CATALOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategoryFilter(cat)}
                className={`shrink-0 px-3 py-1 rounded-full text-xs font-label font-medium transition-all
                  ${
                    categoryFilter === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/70 hover:text-foreground"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <ScrollArea className="flex-1">
        {filteredItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Package size={32} className="text-muted-foreground mb-3" />
            <p className="text-sm font-label text-muted-foreground">
              No items match your search
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-3 gap-3 pr-2">
            {filteredItems.map(
              ({ item, price, category, isRental, isService }) => (
                <CatalogCard
                  key={`${isService ? "s" : "p"}-${item.id}`}
                  item={item}
                  price={price}
                  category={category}
                  isRental={isRental}
                  isService={isService}
                  onAdd={handleCatalogAdd}
                />
              ),
            )}
          </div>
        )}
      </ScrollArea>
    </div>
  );

  // ─── Cart Panel ─────────────────────────────────────────────────────────────

  const CartPanel = () => (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="shrink-0 flex items-center justify-between pb-4 border-b border-border">
        <h2 className="font-display font-bold text-foreground flex items-center gap-2">
          <ShoppingCart size={17} />
          Current Sale
          {cartItems.length > 0 && (
            <span
              className="text-xs rounded-full px-2 py-0.5 font-label font-bold"
              style={{
                background: "oklch(0.65 0.25 335 / 0.2)",
                color: "oklch(0.55 0.22 280)",
              }}
            >
              {cartItems.reduce((s, i) => s + i.qty, 0)} items
            </span>
          )}
        </h2>
        {cartItems.length > 0 && (
          <Button
            variant="outline"
            size="sm"
            className="h-7 text-xs gap-1 text-destructive border-destructive/30 hover:bg-destructive/10"
            onClick={clearCart}
          >
            <Trash2 size={11} /> Clear
          </Button>
        )}
      </div>

      {/* Items */}
      <ScrollArea className="flex-1 my-3">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <ShoppingCart
              size={36}
              className="text-muted-foreground mb-3 opacity-40"
            />
            <p className="text-sm font-label font-medium text-muted-foreground">
              Your cart is empty
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Add products or services from the catalog
            </p>
          </div>
        ) : (
          <div className="pr-2">
            {cartItems.map((item, i) => (
              <CartItemRow
                key={`${item.productId}-${i}`}
                item={item}
                onQtyChange={(delta) => updateQty(i, delta)}
                onRemove={() => removeItem(i)}
              />
            ))}
          </div>
        )}
      </ScrollArea>

      {/* Summary */}
      {cartItems.length > 0 && (
        <div className="shrink-0 border-t border-border pt-4 space-y-3">
          {/* Discount */}
          <div className="flex items-center gap-2">
            <Label className="text-xs w-16 shrink-0">Discount</Label>
            <Input
              type="number"
              min={0}
              value={discount || ""}
              onChange={(e) => setDiscount(Number(e.target.value))}
              placeholder="0"
              className="h-8 text-xs flex-1"
            />
            <button
              type="button"
              onClick={() =>
                setDiscountType((prev) => (prev === "flat" ? "pct" : "flat"))
              }
              className="h-8 px-2.5 rounded-md border border-border bg-secondary text-xs font-label font-medium hover:bg-secondary/70 transition-colors shrink-0 flex items-center gap-1"
            >
              {discountType === "pct" ? (
                <>
                  <Percent size={11} /> %
                </>
              ) : (
                <>{currency.symbol}</>
              )}
            </button>
          </div>

          {/* Tax */}
          <div className="flex items-center gap-2">
            <Label className="text-xs w-16 shrink-0">Tax %</Label>
            <Input
              type="number"
              min={0}
              max={100}
              value={tax || ""}
              onChange={(e) => setTax(Number(e.target.value))}
              placeholder="0"
              className="h-8 text-xs flex-1"
            />
            <span className="text-xs text-muted-foreground shrink-0 w-[52px] text-right">
              {tax > 0 && `+${formatPrice(Math.round(taxAmount))}`}
            </span>
          </div>

          <Separator />

          {/* Subtotal / Discount / Grand Total */}
          <div className="space-y-1.5 text-sm">
            <div className="flex justify-between text-muted-foreground text-xs">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            {discountAmount > 0 && (
              <div className="flex justify-between text-xs text-green-600 dark:text-green-400">
                <span>Discount</span>
                <span>− {formatPrice(discountAmount)}</span>
              </div>
            )}
            {taxAmount > 0 && (
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Tax ({tax}%)</span>
                <span>+ {formatPrice(Math.round(taxAmount))}</span>
              </div>
            )}
            <div className="flex justify-between font-display font-bold text-base text-foreground pt-1">
              <span>Grand Total</span>
              <span className="text-primary">{formatPrice(grandTotal)}</span>
            </div>
          </div>

          <Button
            className="w-full font-label gap-1.5 h-10 text-sm"
            onClick={completeSale}
          >
            <CreditCard size={15} /> Complete Sale
          </Button>
        </div>
      )}
    </div>
  );

  // ─── Sales History ──────────────────────────────────────────────────────────

  const HistoryPanel = () => (
    <div>
      <div className="mb-4">
        <h2 className="font-display font-bold text-foreground">
          Sales History
        </h2>
        <p className="text-xs text-muted-foreground mt-0.5">
          {salesHistory.length} completed sale
          {salesHistory.length !== 1 ? "s" : ""}
        </p>
      </div>

      {salesHistory.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <History
            size={36}
            className="text-muted-foreground mb-3 opacity-40"
          />
          <p className="text-sm font-label font-medium text-muted-foreground">
            No sales yet
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Complete a sale to see it here
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {salesHistory.map((sale) => (
            <button
              key={sale.id}
              type="button"
              onClick={() => setReceiptSale(sale)}
              className="w-full bg-card border border-border rounded-xl p-4 hover:border-primary/50 hover:shadow-card-hover transition-all text-left"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-label font-semibold text-foreground">
                    {sale.id}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {new Date(sale.date).toLocaleString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-display font-bold text-foreground text-sm">
                    {formatPrice(sale.grandTotal)}
                  </p>
                  <div className="flex items-center justify-end gap-1.5 mt-1">
                    <Badge className="text-[10px] px-1.5 py-0 bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-0 font-label">
                      <Check size={9} className="mr-0.5" /> Completed
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {sale.items.reduce((s, i) => s + i.qty, 0)} items
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );

  // ─── Render ─────────────────────────────────────────────────────────────────

  return (
    <div className="p-6 lg:p-8 flex flex-col h-full max-h-full">
      {/* Page header */}
      <div className="mb-6 animate-fade-up flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-3xl font-display font-bold text-foreground flex items-center gap-2">
            <CreditCard size={28} className="text-primary" />
            Point of Sale
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage sales, track orders, and generate receipts
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* Create New FAB */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="sm"
                variant="outline"
                className="font-label gap-1.5 text-sm border-primary/40 text-primary hover:bg-primary/5"
                data-ocid="pos.create.open_modal_button"
              >
                <Plus size={14} /> Create New
                <ChevronDown size={12} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuItem
                onClick={() => setQuickProductOpen(true)}
                className="gap-2 font-label text-sm"
                data-ocid="pos.create.product.button"
              >
                <PackagePlus size={14} /> Add Product
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setQuickServiceOpen(true)}
                className="gap-2 font-label text-sm"
                data-ocid="pos.create.service.button"
              >
                <Wrench size={14} /> Add Service
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setQuickEventOpen(true)}
                className="gap-2 font-label text-sm"
                data-ocid="pos.create.event.button"
              >
                <CalendarPlus size={14} /> Add Event
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setQuickJobOpen(true)}
                className="gap-2 font-label text-sm"
                data-ocid="pos.create.job.button"
              >
                <Briefcase size={14} /> Post Job
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* My Business Page Link */}
          <a
            href="/business"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border text-sm font-label text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
            data-ocid="pos.my_business.link"
          >
            <Building2 size={14} /> My Business
          </a>

          {/* Top-level tab: New Sale vs History */}
          <div className="flex rounded-lg overflow-hidden border border-border">
            <button
              type="button"
              onClick={() => setActiveTab("new-sale")}
              className={`px-4 py-2 text-sm font-label font-medium transition-colors flex items-center gap-1.5
                ${activeTab === "new-sale" ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:text-foreground"}`}
            >
              <ShoppingCart size={14} /> New Sale
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("history")}
              className={`px-4 py-2 text-sm font-label font-medium transition-colors flex items-center gap-1.5
                ${activeTab === "history" ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:text-foreground"}`}
            >
              <History size={14} /> History
              {salesHistory.length > 0 && (
                <span
                  className="text-[10px] rounded-full px-1.5 py-0.5 font-bold"
                  style={{
                    background:
                      activeTab === "history"
                        ? "oklch(1 0 0 / 0.25)"
                        : "oklch(0.65 0.25 335 / 0.2)",
                    color:
                      activeTab === "history"
                        ? "oklch(1 0 0)"
                        : "oklch(0.55 0.22 280)",
                  }}
                >
                  {salesHistory.length}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("my-catalog")}
              className={`px-4 py-2 text-sm font-label font-medium transition-colors flex items-center gap-1.5
                ${activeTab === "my-catalog" ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:text-foreground"}`}
            >
              <Package size={14} /> My Catalog
              {globalProds.length > 0 && (
                <span
                  className="text-[10px] rounded-full px-1.5 py-0.5 font-bold"
                  style={{
                    background:
                      activeTab === "my-catalog"
                        ? "oklch(1 0 0 / 0.25)"
                        : "oklch(0.65 0.25 155 / 0.2)",
                    color:
                      activeTab === "my-catalog"
                        ? "oklch(1 0 0)"
                        : "oklch(0.45 0.15 155)",
                  }}
                >
                  {globalProds.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {activeTab === "history" ? (
        <HistoryPanel />
      ) : activeTab === "my-catalog" ? (
        <div className="space-y-4 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display font-bold text-foreground">
                My Catalog
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                {globalProds.length} product
                {globalProds.length !== 1 ? "s" : ""} you have added
              </p>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setActiveTab("new-sale")}
              data-ocid="pos.add_product_button"
            >
              + Add Product
            </Button>
          </div>
          {globalProds.length === 0 ? (
            <div
              className="flex flex-col items-center justify-center py-16 text-center"
              data-ocid="pos.catalog.empty_state"
            >
              <Package
                size={36}
                className="text-muted-foreground mb-3 opacity-40"
              />
              <p className="text-sm font-label font-medium text-muted-foreground">
                No products added yet
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Use the Quick Add buttons to add your first product
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {globalProds.map((p, idx) => (
                <Card
                  key={p.id}
                  className="rounded-2xl border-border"
                  data-ocid={`pos.catalog.item.${idx + 1}`}
                >
                  {p.imageUrl && (
                    <img
                      src={p.imageUrl}
                      alt={p.name}
                      className="w-full h-32 object-cover rounded-t-2xl"
                    />
                  )}
                  <CardContent className="p-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <p className="font-label font-semibold text-sm text-foreground truncate">
                          {p.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {p.category}
                        </p>
                        <p
                          className="text-sm font-bold mt-1"
                          style={{ color: "oklch(0.55 0.22 280)" }}
                        >
                          ₹{p.price}
                        </p>
                        {p.stock !== undefined && (
                          <p className="text-xs text-muted-foreground">
                            Stock: {p.stock}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 text-xs"
                        data-ocid={`pos.catalog.edit_button.${idx + 1}`}
                        onClick={() => {
                          setEditProduct({
                            id: p.id,
                            name: p.name,
                            price: p.price,
                            description: p.description,
                            stock: p.stock ?? 0,
                            category: p.category ?? "Electronics",
                            images: p.imageUrl ? [p.imageUrl] : [],
                            videoUrl: p.videoUrl ?? "",
                            supplierName: p.supplier ?? "",
                            supplierType: "Manufacturer",
                            purchasePrice: p.purchasePrice ?? 0,
                            variants: (p.variantDetails ?? []).map((v) => ({
                              label: v.label ?? "",
                              price: String(v.price ?? "0"),
                              stock: String(v.stock ?? "0"),
                            })),
                            addons: (p.addons ?? []).map(
                              (a: { name?: string; price?: number }) => ({
                                name: a.name ?? "",
                                price: String(a.price ?? "0"),
                              }),
                            ),
                            moderationStatus:
                              p.status === "moderated"
                                ? "Moderated"
                                : p.status === "pending"
                                  ? "Pending Review"
                                  : "Approved",
                            isService: p.isService ?? false,
                          });
                          setEditOpen(true);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        className="flex-1 text-xs"
                        data-ocid={`pos.catalog.delete_button.${idx + 1}`}
                        onClick={() => {
                          deleteGlobalProduct(p.id);
                        }}
                      >
                        Delete
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs px-2"
                        onClick={() => setBoostTarget(p.id)}
                        style={{
                          color: boostedItems[p.id]
                            ? "oklch(0.65 0.20 85)"
                            : undefined,
                        }}
                        data-ocid={`pos.catalog.primary_button.${idx + 1}`}
                      >
                        <Zap
                          size={11}
                          fill={boostedItems[p.id] ? "currentColor" : "none"}
                        />
                      </Button>
                    </div>
                    <BoostPostDialog
                      open={boostTarget === p.id}
                      onClose={() => setBoostTarget(null)}
                      postTitle={p.name}
                      postType="product"
                      onBoostSuccess={() =>
                        setBoostedItems((prev) => ({ ...prev, [p.id]: true }))
                      }
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          {editOpen && editProduct && (
            <Dialog open={editOpen} onOpenChange={setEditOpen}>
              <DialogContent
                className="sm:max-w-lg max-h-[90vh] overflow-y-auto"
                data-ocid="pos.edit_product.dialog"
              >
                <DialogHeader>
                  <DialogTitle className="font-display flex items-center gap-2">
                    {editProduct.isService ? (
                      <Wrench size={16} className="text-primary" />
                    ) : (
                      <Package size={16} className="text-primary" />
                    )}
                    Edit {editProduct.isService ? "Service" : "Product"}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-3 py-2">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <Label className="text-xs">Name *</Label>
                    <Input
                      value={editProduct.name}
                      onChange={(e) =>
                        setEditProduct((p) =>
                          p ? { ...p, name: e.target.value } : p,
                        )
                      }
                      className="h-9"
                      data-ocid="pos.edit_product.input"
                    />
                  </div>

                  {/* Images */}
                  <div className="space-y-1.5">
                    <Label className="text-xs">Images</Label>
                    <label
                      className="flex items-center gap-2 border-2 border-dashed border-border rounded-lg p-3 cursor-pointer hover:border-primary/50 transition-colors"
                      data-ocid="pos.edit_product.dropzone"
                    >
                      <Upload size={14} className="text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        Upload images
                      </span>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const files = Array.from(e.target.files || []);
                          for (const f of files) {
                            const reader = new FileReader();
                            reader.onload = (ev) => {
                              if (ev.target?.result) {
                                setEditProduct((p) =>
                                  p
                                    ? {
                                        ...p,
                                        images: [
                                          ...p.images,
                                          ev.target!.result as string,
                                        ],
                                      }
                                    : p,
                                );
                              }
                            };
                            reader.readAsDataURL(f);
                          }
                        }}
                      />
                    </label>
                    {editProduct.images.length > 0 && (
                      <div className="flex gap-2 flex-wrap">
                        {editProduct.images.map((url, i) => (
                          <div key={url} className="relative">
                            <img
                              src={url}
                              alt=""
                              className="w-14 h-14 object-cover rounded-lg border border-border"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setEditProduct((p) =>
                                  p
                                    ? {
                                        ...p,
                                        images: p.images.filter(
                                          (_, j) => j !== i,
                                        ),
                                      }
                                    : p,
                                )
                              }
                              className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full w-4 h-4 flex items-center justify-center text-xs"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Video */}
                  <div className="space-y-1.5">
                    <Label className="text-xs flex items-center gap-1">
                      <Video size={12} /> Video Link
                    </Label>
                    <Input
                      placeholder="https://youtube.com/watch?v=..."
                      value={editProduct.videoUrl}
                      onChange={(e) =>
                        setEditProduct((p) =>
                          p ? { ...p, videoUrl: e.target.value } : p,
                        )
                      }
                      className="h-9"
                    />
                  </div>

                  {/* Category */}
                  <div className="space-y-1.5">
                    <Label className="text-xs">Category</Label>
                    <Select
                      value={editProduct.category}
                      onValueChange={(v) =>
                        setEditProduct((p) => (p ? { ...p, category: v } : p))
                      }
                    >
                      <SelectTrigger className="h-9">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[
                          "Electronics",
                          "Fashion",
                          "Food & Beverages",
                          "Healthcare",
                          "Home Services",
                          "Books",
                          "Automotive",
                          "Sports",
                          "Real Estate",
                          "Travel",
                          "Beauty",
                          "Toys",
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

                  {/* Price & Stock */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <Label className="text-xs">Price (₹) *</Label>
                      <Input
                        type="number"
                        value={editProduct.price}
                        onChange={(e) =>
                          setEditProduct((p) =>
                            p ? { ...p, price: Number(e.target.value) } : p,
                          )
                        }
                        className="h-9"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-xs">Stock</Label>
                      <Input
                        type="number"
                        value={editProduct.stock}
                        onChange={(e) =>
                          setEditProduct((p) =>
                            p ? { ...p, stock: Number(e.target.value) } : p,
                          )
                        }
                        className="h-9"
                      />
                    </div>
                  </div>

                  {/* Supplier */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <Label className="text-xs">Supplier Name</Label>
                      <Input
                        value={editProduct.supplierName}
                        onChange={(e) =>
                          setEditProduct((p) =>
                            p ? { ...p, supplierName: e.target.value } : p,
                          )
                        }
                        className="h-9"
                        placeholder="Supplier name"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-xs">Purchase Price (₹)</Label>
                      <Input
                        type="number"
                        value={editProduct.purchasePrice}
                        onChange={(e) =>
                          setEditProduct((p) =>
                            p
                              ? { ...p, purchasePrice: Number(e.target.value) }
                              : p,
                          )
                        }
                        className="h-9"
                      />
                    </div>
                  </div>

                  {/* Variants */}
                  <div className="space-y-1.5">
                    <Label className="text-xs">Variants</Label>
                    {editProduct.variants.map((v, i) => (
                      <div
                        key={`v-${v.label}-${v.price}`}
                        className="flex gap-2 items-center"
                      >
                        <Input
                          value={v.label}
                          onChange={(e) =>
                            setEditProduct((p) => {
                              if (!p) return p;
                              const vs = [...p.variants];
                              vs[i] = { ...vs[i], label: e.target.value };
                              return { ...p, variants: vs };
                            })
                          }
                          placeholder="Name"
                          className="h-8 text-xs flex-1"
                        />
                        <Input
                          type="number"
                          value={v.price}
                          onChange={(e) =>
                            setEditProduct((p) => {
                              if (!p) return p;
                              const vs = [...p.variants];
                              vs[i] = { ...vs[i], price: e.target.value };
                              return { ...p, variants: vs };
                            })
                          }
                          placeholder="₹"
                          className="h-8 text-xs w-20"
                        />
                        <Input
                          type="number"
                          value={v.stock}
                          onChange={(e) =>
                            setEditProduct((p) => {
                              if (!p) return p;
                              const vs = [...p.variants];
                              vs[i] = { ...vs[i], stock: e.target.value };
                              return { ...p, variants: vs };
                            })
                          }
                          placeholder="Qty"
                          className="h-8 text-xs w-20"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setEditProduct((p) =>
                              p
                                ? {
                                    ...p,
                                    variants: p.variants.filter(
                                      (_, j) => j !== i,
                                    ),
                                  }
                                : p,
                            )
                          }
                          className="text-destructive"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      className="h-7 text-xs gap-1"
                      onClick={() =>
                        setEditProduct((p) =>
                          p
                            ? {
                                ...p,
                                variants: [
                                  ...p.variants,
                                  {
                                    label: "",
                                    price: String(p.price),
                                    stock: "10",
                                  },
                                ],
                              }
                            : p,
                        )
                      }
                    >
                      <Plus size={12} /> Add Variant
                    </Button>
                  </div>

                  {/* Addons */}
                  <div className="space-y-1.5">
                    <Label className="text-xs">Add-ons</Label>
                    {editProduct.addons.map((a, i) => (
                      <div
                        key={`a-${a.name}-${a.price}`}
                        className="flex gap-2 items-center"
                      >
                        <Input
                          value={a.name}
                          onChange={(e) =>
                            setEditProduct((p) => {
                              if (!p) return p;
                              const ads = [...p.addons];
                              ads[i] = { ...ads[i], name: e.target.value };
                              return { ...p, addons: ads };
                            })
                          }
                          placeholder="Add-on name"
                          className="h-8 text-xs flex-1"
                        />
                        <Input
                          type="number"
                          value={a.price}
                          onChange={(e) =>
                            setEditProduct((p) => {
                              if (!p) return p;
                              const ads = [...p.addons];
                              ads[i] = { ...ads[i], price: e.target.value };
                              return { ...p, addons: ads };
                            })
                          }
                          placeholder="₹"
                          className="h-8 text-xs w-24"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setEditProduct((p) =>
                              p
                                ? {
                                    ...p,
                                    addons: p.addons.filter((_, j) => j !== i),
                                  }
                                : p,
                            )
                          }
                          className="text-destructive"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      className="h-7 text-xs gap-1"
                      onClick={() =>
                        setEditProduct((p) =>
                          p
                            ? {
                                ...p,
                                addons: [...p.addons, { name: "", price: "" }],
                              }
                            : p,
                        )
                      }
                    >
                      <Plus size={12} /> Add Add-on
                    </Button>
                  </div>

                  {/* Description */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <Label className="text-xs">Description</Label>
                      <Button
                        type="button"
                        size="sm"
                        variant="ghost"
                        className="h-6 text-xs gap-1 px-2"
                        onClick={() => {
                          if (!editProduct.name) {
                            toast.error("Add a name first");
                            return;
                          }
                          const desc = `${editProduct.name} — Premium quality ${editProduct.isService ? "service" : "product"} in the ${editProduct.category} category. Available with multiple variants and add-on options to suit every preference.`;
                          setEditProduct((p) =>
                            p ? { ...p, description: desc } : p,
                          );
                          toast.success("AI description generated");
                        }}
                      >
                        <Wand2 size={11} /> AI Generate
                      </Button>
                    </div>
                    <Textarea
                      value={editProduct.description}
                      onChange={(e) =>
                        setEditProduct((p) =>
                          p ? { ...p, description: e.target.value } : p,
                        )
                      }
                      rows={2}
                      className="text-xs"
                    />
                  </div>

                  {/* Moderation status */}
                  <div className="flex items-center gap-2">
                    <Label className="text-xs text-muted-foreground">
                      Moderation:
                    </Label>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-label"
                      style={{
                        background:
                          editProduct.moderationStatus === "Approved"
                            ? "oklch(0.52 0.14 155 / 0.15)"
                            : "oklch(0.72 0.17 55 / 0.15)",
                        color:
                          editProduct.moderationStatus === "Approved"
                            ? "oklch(0.42 0.14 155)"
                            : "oklch(0.55 0.17 55)",
                      }}
                    >
                      {editProduct.moderationStatus}
                    </span>
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    variant="outline"
                    onClick={() => setEditOpen(false)}
                    data-ocid="pos.edit_product.cancel_button"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => {
                      if (editProduct) {
                        const existing = getGlobalProducts().find(
                          (p) => p.id === editProduct.id,
                        );
                        if (existing)
                          saveGlobalProduct({
                            ...existing,
                            name: editProduct.name,
                            price: editProduct.price,
                            description: editProduct.description,
                            stock: editProduct.stock,
                            category: editProduct.category,
                            imageUrl:
                              editProduct.images[0] ?? existing.imageUrl,
                            videoUrl: editProduct.videoUrl,
                            supplier: editProduct.supplierName,
                            purchasePrice: editProduct.purchasePrice,
                            variantDetails: editProduct.variants.map((v) => ({
                              label: v.label,
                              price: Number(v.price) || 0,
                              stock: Number(v.stock) || 0,
                            })),
                            addons: editProduct.addons.map((a) => ({
                              name: a.name,
                              price: Number(a.price) || 0,
                            })),
                            status: (editProduct.moderationStatus === "Approved"
                              ? "active"
                              : editProduct.moderationStatus === "Moderated"
                                ? "moderated"
                                : "pending") as
                              | "active"
                              | "pending"
                              | "moderated",
                          });
                        toast.success("Product updated");
                      }
                      setEditOpen(false);
                    }}
                    data-ocid="pos.edit_product.save_button"
                  >
                    Save Changes
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
        </div>
      ) : (
        <>
          {/* Mobile tab switcher */}
          <div className="lg:hidden mb-4">
            <Tabs
              value={mobileView}
              onValueChange={(v) => setMobileView(v as "catalog" | "cart")}
            >
              <TabsList className="w-full">
                <TabsTrigger
                  value="catalog"
                  className="flex-1 font-label gap-1.5"
                >
                  <Package size={13} /> Catalog
                </TabsTrigger>
                <TabsTrigger value="cart" className="flex-1 font-label gap-1.5">
                  <ShoppingCart size={13} /> Cart
                  {cartItems.length > 0 && (
                    <span
                      className="text-[10px] rounded-full px-1.5 py-0.5 font-bold ml-1"
                      style={{
                        background: "oklch(0.65 0.25 335 / 0.3)",
                        color: "oklch(0.55 0.22 280)",
                      }}
                    >
                      {cartItems.reduce((s, i) => s + i.qty, 0)}
                    </span>
                  )}
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Desktop two-column / Mobile single-view */}
          <div className="flex-1 overflow-hidden flex flex-col lg:flex-row gap-6 min-h-0">
            {/* Catalog panel */}
            <div
              className={`lg:flex-[3] flex flex-col min-h-0 overflow-hidden
                ${mobileView === "cart" ? "hidden lg:flex" : "flex"}`}
            >
              <CatalogPanel />
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px bg-border shrink-0" />

            {/* Cart panel */}
            <div
              className={`lg:flex-[2] flex flex-col min-h-0 overflow-hidden
                ${mobileView === "catalog" ? "hidden lg:flex" : "flex"}`}
            >
              <CartPanel />
            </div>
          </div>
        </>
      )}

      {/* Variant selector modal */}
      <VariantSelectorModal
        open={!!variantModalItem}
        onClose={() => setVariantModalItem(null)}
        item={variantModalItem}
        onAdd={handleVariantConfirm}
      />

      {/* Receipt modal */}
      <ReceiptModal
        sale={receiptSale}
        onClose={() => setReceiptSale(null)}
        onNewSale={
          salesHistory.find((s) => s.id === receiptSale?.id) &&
          cartItems.length > 0
            ? undefined
            : handleNewSale
        }
      />

      {/* Extended Business Modules */}
      <POSModulesPanel />

      {/* Quick-create dialogs */}
      <QuickAddProductDialog
        open={quickProductOpen}
        onClose={() => setQuickProductOpen(false)}
      />
      <QuickAddServiceDialog
        open={quickServiceOpen}
        onClose={() => setQuickServiceOpen(false)}
      />
      <QuickAddEventDialog
        open={quickEventOpen}
        onClose={() => setQuickEventOpen(false)}
      />
      <QuickAddJobDialog
        open={quickJobOpen}
        onClose={() => setQuickJobOpen(false)}
      />
    </div>
  );
}
