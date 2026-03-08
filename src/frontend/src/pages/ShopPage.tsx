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
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2,
  ChevronRight,
  Minus,
  Package,
  Plus,
  Search,
  ShoppingBag,
  ShoppingCart,
  Star,
  Trash2,
  Wrench,
  X,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useCurrency } from "../contexts/CurrencyContext";
import { SAMPLE_PRODUCTS, SAMPLE_SERVICES } from "./ProductsServicesPage";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ShopCartItem {
  id: string; // unique key: "product-1" or "service-2"
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

// ─── Constants ────────────────────────────────────────────────────────────────

const CATEGORIES = [
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

const TAX_RATE = 0.05; // 5%

// ─── Shop Product Card ────────────────────────────────────────────────────────

function ShopProductCard({
  name,
  description,
  price,
  category,
  rating,
  seller,
  isService,
  photoUrl,
  onAddToCart,
}: {
  name: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  seller: string;
  isService: boolean;
  photoUrl?: string;
  onAddToCart: () => void;
}) {
  const { formatPrice } = useCurrency();
  const color = CATEGORY_COLORS[category] || "oklch(0.55 0.10 200)";

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col group">
      {/* Product image or gradient */}
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
        {/* Category + rating */}
        <div className="flex items-center justify-between mb-2">
          <Badge
            className="text-[10px] px-2 py-0 font-label border-0"
            style={{ background: `${color}18`, color }}
          >
            {category}
          </Badge>
          <div className="flex items-center gap-1">
            <Star size={11} className="fill-current text-amber-400" />
            <span className="text-xs font-label font-semibold text-foreground">
              {rating.toFixed(1)}
            </span>
          </div>
        </div>

        {/* Name */}
        <h3 className="font-label font-bold text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Description */}
        <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2 flex-1">
          {description}
        </p>

        {/* Seller */}
        <p className="text-xs text-muted-foreground mb-3">by {seller}</p>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="font-display font-bold text-foreground text-base">
              {formatPrice(price)}
            </span>
            {isService && (
              <span className="text-xs text-muted-foreground ml-1">/hr</span>
            )}
          </div>
          <Button
            size="sm"
            className="h-8 text-xs font-label gap-1.5"
            onClick={onAddToCart}
            data-ocid="shop.cart.button"
          >
            <ShoppingCart size={12} />
            {isService ? "Book" : "Add to Cart"}
          </Button>
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
      >
        <SheetHeader className="px-5 pt-5 pb-4 border-b border-border">
          <SheetTitle className="font-display flex items-center gap-2">
            <ShoppingCart size={18} className="text-primary" />
            Your Cart
            {totalItems > 0 && (
              <span className="text-xs rounded-full px-2 py-0.5 font-label font-bold bg-primary/15 text-primary ml-1">
                {totalItems} item{totalItems !== 1 ? "s" : ""}
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        <ScrollArea className="flex-1 px-5">
          {cartItems.length === 0 ? (
            <div
              className="flex flex-col items-center justify-center py-16 text-center"
              data-ocid="shop.cart.empty_state"
            >
              <ShoppingBag
                size={40}
                className="text-muted-foreground mb-3 opacity-30"
              />
              <p className="text-sm font-label font-medium text-muted-foreground">
                Your cart is empty
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Browse products and services to add items
              </p>
            </div>
          ) : (
            <div className="space-y-1 py-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-3 py-3 border-b border-border last:border-0"
                  data-ocid="shop.cart.item"
                >
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: `${CATEGORY_COLORS[item.category] || "oklch(0.55 0.10 200)"}18`,
                    }}
                  >
                    {item.isService ? (
                      <Wrench
                        size={14}
                        style={{
                          color:
                            CATEGORY_COLORS[item.category] ||
                            "oklch(0.55 0.10 200)",
                        }}
                      />
                    ) : (
                      <Package
                        size={14}
                        style={{
                          color:
                            CATEGORY_COLORS[item.category] ||
                            "oklch(0.55 0.10 200)",
                        }}
                      />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-label font-semibold text-foreground truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {formatPrice(item.unitPrice)}
                      {item.isService ? "/hr" : ""} each
                    </p>
                  </div>

                  {/* Qty controls */}
                  <div className="flex items-center gap-1 shrink-0">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => onQtyChange(item.id, -1)}
                      disabled={item.qty <= 1}
                      data-ocid="shop.cart.secondary_button"
                    >
                      <Minus size={10} />
                    </Button>
                    <span className="w-6 text-center text-sm font-label font-bold">
                      {item.qty}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => onQtyChange(item.id, 1)}
                      data-ocid="shop.cart.primary_button"
                    >
                      <Plus size={10} />
                    </Button>
                  </div>

                  {/* Line total + remove */}
                  <div className="text-right shrink-0">
                    <p className="text-sm font-label font-bold text-foreground">
                      {formatPrice(item.qty * item.unitPrice)}
                    </p>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 text-muted-foreground hover:text-destructive mt-0.5"
                      onClick={() => onRemove(item.id)}
                      data-ocid="shop.cart.delete_button"
                    >
                      <Trash2 size={10} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        {cartItems.length > 0 && (
          <div className="border-t border-border px-5 py-4 space-y-3">
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
                <span>Grand Total</span>
                <span className="text-primary">
                  {formatPrice(Math.round(grandTotal))}
                </span>
              </div>
            </div>
            <Button
              className="w-full font-label gap-1.5 h-10"
              onClick={onCheckout}
              data-ocid="shop.checkout.primary_button"
            >
              Proceed to Checkout <ChevronRight size={14} />
            </Button>
          </div>
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
}: {
  open: boolean;
  onClose: (clearCart?: boolean) => void;
  cartItems: ShopCartItem[];
  subtotal: number;
  tax: number;
  grandTotal: number;
}) {
  const { formatPrice } = useCurrency();
  const [step, setStep] = useState<CheckoutStep>("billing");
  const [orderId, setOrderId] = useState("");
  const [billingForm, setBillingForm] = useState<BillingForm>({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    paymentMethod: "cod",
    notes: "",
  });

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
    const id = `#ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(id);
    setStep("confirmation");
    toast.success("Order placed successfully!");
  };

  const handleClose = () => {
    const clear = step === "confirmation";
    setStep("billing");
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
          {/* Progress dots */}
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
                    setBillingForm((p) => ({ ...p, fullName: e.target.value }))
                  }
                  required
                  data-ocid="shop.billing.input"
                />
              </div>
              <div className="space-y-2">
                <Label>Phone *</Label>
                <Input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={billingForm.phone}
                  onChange={(e) =>
                    setBillingForm((p) => ({ ...p, phone: e.target.value }))
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Delivery Address *</Label>
                <Textarea
                  rows={2}
                  className="resize-none"
                  placeholder="House/flat number, street, area"
                  value={billingForm.address}
                  onChange={(e) =>
                    setBillingForm((p) => ({ ...p, address: e.target.value }))
                  }
                  required
                  data-ocid="shop.billing.textarea"
                />
              </div>
              <div className="space-y-2">
                <Label>City</Label>
                <Input
                  placeholder="e.g. Mumbai, Delhi, Bangalore"
                  value={billingForm.city}
                  onChange={(e) =>
                    setBillingForm((p) => ({ ...p, city: e.target.value }))
                  }
                />
              </div>
              <div className="space-y-2">
                <Label>Payment Method</Label>
                <Select
                  value={billingForm.paymentMethod}
                  onValueChange={(v) =>
                    setBillingForm((p) => ({
                      ...p,
                      paymentMethod: v as BillingForm["paymentMethod"],
                    }))
                  }
                >
                  <SelectTrigger data-ocid="shop.billing.select">
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
                <Label>Order Notes (optional)</Label>
                <Textarea
                  rows={2}
                  className="resize-none"
                  placeholder="Any special instructions..."
                  value={billingForm.notes}
                  onChange={(e) =>
                    setBillingForm((p) => ({ ...p, notes: e.target.value }))
                  }
                />
              </div>
            </form>
          )}

          {/* Step 2: Summary */}
          {step === "summary" && (
            <div className="space-y-4 mt-3">
              {/* Delivery details */}
              <div className="rounded-xl bg-secondary/40 p-3 space-y-1.5 text-sm">
                <p className="font-label font-semibold text-foreground">
                  {billingForm.fullName}
                </p>
                <p className="text-muted-foreground">{billingForm.phone}</p>
                <p className="text-muted-foreground">
                  {billingForm.address}
                  {billingForm.city ? `, ${billingForm.city}` : ""}
                </p>
                <Badge
                  variant="outline"
                  className="text-xs font-label capitalize mt-1"
                >
                  {billingForm.paymentMethod === "cod"
                    ? "Cash on Delivery"
                    : billingForm.paymentMethod === "bank"
                      ? "Bank Transfer"
                      : "Card Payment"}
                </Badge>
              </div>

              {/* Items */}
              <div className="space-y-2">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-start text-sm"
                    data-ocid="shop.summary.item"
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
                <Separator />
                <div className="flex justify-between font-display font-bold text-base text-foreground">
                  <span>Grand Total</span>
                  <span className="text-primary">
                    {formatPrice(Math.round(grandTotal))}
                  </span>
                </div>
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
                <p>
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
        </ScrollArea>

        {/* Actions */}
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
    </Dialog>
  );
}

// ─── Main Shop Page ───────────────────────────────────────────────────────────

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [cartItems, setCartItems] = useState<ShopCartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  // Build shop catalog from products + services
  const allItems = [
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
    })),
  ];

  const filteredItems = allItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Cart calculations
  const subtotal = cartItems.reduce((s, i) => s + i.qty * i.unitPrice, 0);
  const tax = subtotal * TAX_RATE;
  const grandTotal = subtotal + tax;
  const totalCartItems = cartItems.reduce((s, i) => s + i.qty, 0);

  const addToCart = (item: (typeof allItems)[0]) => {
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
              Browse products and services from your community
            </p>
          </div>

          {/* Cart button */}
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

        {/* Search */}
        <div className="relative mt-4 max-w-md">
          <Search
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            placeholder="Search products and services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 h-10"
            data-ocid="shop.search_input"
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

        {/* Category filters */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-none">
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
      </div>

      {/* Results count */}
      <div className="mb-4 flex items-center gap-2">
        <p className="text-sm text-muted-foreground">
          {filteredItems.length} item{filteredItems.length !== 1 ? "s" : ""}
          {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
          {searchQuery ? ` for "${searchQuery}"` : ""}
        </p>
      </div>

      {/* Product grid */}
      {filteredItems.length === 0 ? (
        <div
          className="flex flex-col items-center justify-center py-20 text-center"
          data-ocid="shop.empty_state"
        >
          <ShoppingBag
            size={48}
            className="text-muted-foreground mb-4 opacity-30"
          />
          <p className="text-base font-label font-semibold text-muted-foreground">
            No items found
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Try adjusting your search or category filters
          </p>
          <Button
            variant="outline"
            size="sm"
            className="mt-4 font-label"
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("All");
            }}
          >
            Clear filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredItems.map((item, i) => (
            <div
              key={item.id}
              style={{ animationDelay: `${i * 0.04}s` }}
              className="animate-fade-up"
            >
              <ShopProductCard
                name={item.name}
                description={item.description}
                price={item.price}
                category={item.category}
                rating={item.rating}
                seller={item.seller}
                isService={item.isService}
                photoUrl={item.photoUrl}
                onAddToCart={() => addToCart(item)}
              />
            </div>
          ))}
        </div>
      )}

      {/* Floating cart button (mobile) */}
      {totalCartItems > 0 && (
        <button
          type="button"
          onClick={() => setCartOpen(true)}
          className="fixed bottom-6 right-6 lg:hidden z-40 flex items-center gap-2 px-4 py-3 rounded-full shadow-xl font-label font-bold text-sm bg-primary text-primary-foreground"
          data-ocid="shop.cart.open_modal_button"
        >
          <ShoppingCart size={16} />
          View Cart ({totalCartItems})
        </button>
      )}

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
      />
    </div>
  );
}
