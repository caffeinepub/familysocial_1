import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Check,
  ChevronDown,
  CreditCard,
  History,
  Minus,
  Package,
  Percent,
  Plus,
  Printer,
  ShoppingCart,
  Trash2,
  Wrench,
  X,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
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
                        {opt.priceModifier.toLocaleString()}
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
                {totalModifier > 0 ? "+" : ""}PKR{" "}
                {totalModifier.toLocaleString()}
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
              FamilySocial POS
            </p>
            <p className="text-xs font-label font-semibold text-primary mt-2">
              {sale.id}
            </p>
            <p className="text-xs text-muted-foreground">
              {new Date(sale.date).toLocaleString("en-PK")}
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
                    {item.qty} × PKR {item.unitPrice.toLocaleString()}
                  </p>
                </div>
                <p className="text-sm font-label font-semibold text-foreground whitespace-nowrap">
                  PKR {(item.qty * item.unitPrice).toLocaleString()}
                </p>
              </div>
            ))}
          </div>

          <Separator />

          {/* Totals */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <span>Subtotal</span>
              <span>PKR {sale.subtotal.toLocaleString()}</span>
            </div>
            {discountAmount > 0 && (
              <div className="flex justify-between text-green-600 dark:text-green-400">
                <span>
                  Discount
                  {sale.discountType === "pct" ? ` (${sale.discount}%)` : ""}
                </span>
                <span>− PKR {discountAmount.toLocaleString()}</span>
              </div>
            )}
            {taxAmount > 0 && (
              <div className="flex justify-between text-muted-foreground">
                <span>Tax ({sale.tax}%)</span>
                <span>+ PKR {Math.round(taxAmount).toLocaleString()}</span>
              </div>
            )}
            <Separator />
            <div className="flex justify-between font-display font-bold text-lg text-foreground">
              <span>Grand Total</span>
              <span className="text-primary">
                PKR {sale.grandTotal.toLocaleString()}
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
          PKR {price.toLocaleString()}
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
          PKR {item.unitPrice.toLocaleString()} each
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
          PKR {lineTotal.toLocaleString()}
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

// ─── Main POS Page ────────────────────────────────────────────────────────────

export default function POSPage() {
  const [activeTab, setActiveTab] = useState<"new-sale" | "history">(
    "new-sale",
  );
  const [mobileView, setMobileView] = useState<"catalog" | "cart">("catalog");

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
                <>PKR</>
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
              {tax > 0 && `+PKR ${Math.round(taxAmount).toLocaleString()}`}
            </span>
          </div>

          <Separator />

          {/* Subtotal / Discount / Grand Total */}
          <div className="space-y-1.5 text-sm">
            <div className="flex justify-between text-muted-foreground text-xs">
              <span>Subtotal</span>
              <span>PKR {subtotal.toLocaleString()}</span>
            </div>
            {discountAmount > 0 && (
              <div className="flex justify-between text-xs text-green-600 dark:text-green-400">
                <span>Discount</span>
                <span>− PKR {discountAmount.toLocaleString()}</span>
              </div>
            )}
            {taxAmount > 0 && (
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Tax ({tax}%)</span>
                <span>+ PKR {Math.round(taxAmount).toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between font-display font-bold text-base text-foreground pt-1">
              <span>Grand Total</span>
              <span className="text-primary">
                PKR {grandTotal.toLocaleString()}
              </span>
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
                    {new Date(sale.date).toLocaleString("en-PK")}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-display font-bold text-foreground text-sm">
                    PKR {sale.grandTotal.toLocaleString()}
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
        </div>
      </div>

      {activeTab === "history" ? (
        <HistoryPanel />
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
    </div>
  );
}
