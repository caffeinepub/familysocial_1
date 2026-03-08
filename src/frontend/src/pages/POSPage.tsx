import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
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
  Calendar,
  CalendarPlus,
  Check,
  ChevronDown,
  CreditCard,
  History,
  Minus,
  Package,
  PackagePlus,
  Percent,
  Plus,
  Printer,
  ShoppingCart,
  Trash2,
  Wrench,
  WrenchIcon,
  X,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useCurrency } from "../contexts/CurrencyContext";
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
    category: "Electronics",
    stockQty: "",
    supplierName: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    toast.success(`Product "${form.name}" added to catalog`);
    setForm({
      name: "",
      price: "",
      category: "Electronics",
      stockQty: "",
      supplierName: "",
      description: "",
    });
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="font-display flex items-center gap-2">
            <PackagePlus size={16} className="text-primary" /> Quick Add Product
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
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-xs">Price</Label>
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
    category: "Home Services",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    toast.success(`Service "${form.name}" added to catalog`);
    setForm({
      name: "",
      pricePerHour: "",
      category: "Home Services",
      description: "",
    });
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="font-display flex items-center gap-2">
            <WrenchIcon size={16} className="text-primary" /> Quick Add Service
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
  const [activeTab, setActiveTab] = useState<"new-sale" | "history">(
    "new-sale",
  );
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
                <WrenchIcon size={14} /> Add Service
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
