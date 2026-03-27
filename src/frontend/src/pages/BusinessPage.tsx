import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Building2,
  CheckCircle2,
  ChefHat,
  Clock,
  CreditCard,
  Download,
  GitBranch,
  Globe,
  Mail,
  MapPin,
  Phone,
  Plus,
  QrCode,
  RefreshCw,
  Share2,
  Sparkles,
  Star,
  Truck,
  Upload,
  User,
  Utensils,
  X,
  Zap,
} from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";
import BoostPostDialog from "../components/BoostPostDialog";
import { DiscoverClaimTab } from "../components/BusinessDiscoveryFeatures";
import { LikeVoteBar } from "../components/LikeVoteBar";
import { ReviewModal } from "../components/ReviewModal";
import { getFamilyTreeBusinesses } from "../utils/familyTreeState";
import {
  addGlobalProduct,
  getGlobalProducts,
} from "../utils/globalProductsState";
import { formatTimeAgo } from "../utils/timeUtils";

// ─── Mock Data ───────────────────────────────────────────────────────────────

const _MOCK_PRODUCTS = [
  { id: 1, name: "Masala Chai", price: 60, category: "Beverages", stock: 200 },
  {
    id: 2,
    name: "Butter Chicken",
    price: 320,
    category: "Main Course",
    stock: 50,
  },
  { id: 3, name: "Paneer Tikka", price: 280, category: "Starters", stock: 40 },
  { id: 4, name: "Garlic Naan", price: 60, category: "Breads", stock: 150 },
  { id: 5, name: "Gulab Jamun", price: 120, category: "Desserts", stock: 80 },
  { id: 6, name: "Mango Lassi", price: 100, category: "Beverages", stock: 100 },
];

const _MOCK_SERVICES = [
  { id: 1, name: "Home Delivery", price: 40, duration: "30-45 min" },
  { id: 2, name: "Catering Package", price: 5000, duration: "Per event" },
  { id: 3, name: "Private Dining", price: 2000, duration: "2 hours" },
  { id: 4, name: "Corporate Lunch Box", price: 200, duration: "Per person" },
];

const BRANCHES_DEFAULT = [
  {
    id: "b1",
    name: "Connaught Place, Delhi",
    tables: 20,
    activeOrders: 12,
    revenue: 45200,
    paymentModes: { cash: true, online: true, advance: false },
    deliveryAreas: "110001, 110002",
    perKmRate: 30,
  },
  {
    id: "b2",
    name: "Bandra West, Mumbai",
    tables: 15,
    activeOrders: 8,
    revenue: 32800,
    paymentModes: { cash: true, online: true, advance: false },
    deliveryAreas: "400050, 400051",
    perKmRate: 35,
  },
  {
    id: "b3",
    name: "MG Road, Bangalore",
    tables: 18,
    activeOrders: 5,
    revenue: 28600,
    paymentModes: { cash: true, online: false, advance: false },
    deliveryAreas: "560001",
    perKmRate: 28,
  },
];

const MOCK_ORDERS = [
  {
    id: "ORD-001",
    table: 4,
    items: "Butter Chicken x2, Naan x4",
    time: "2 min ago",
    cook: "Chef Ravi",
    status: "New",
  },
  {
    id: "ORD-002",
    table: 7,
    items: "Paneer Tikka x1, Lassi x2",
    time: "8 min ago",
    cook: "Chef Priya",
    status: "Cooking",
  },
  {
    id: "ORD-003",
    table: 2,
    items: "Thali Special x3",
    time: "15 min ago",
    cook: "Chef Ravi",
    status: "Ready",
  },
  {
    id: "ORD-004",
    table: 9,
    items: "Gulab Jamun x4, Chai x2",
    time: "22 min ago",
    cook: "Chef Meera",
    status: "Served",
  },
];

const STATUS_COLORS: Record<string, string> = {
  New: "oklch(0.55 0.22 280)",
  Cooking: "oklch(0.72 0.19 85)",
  Ready: "oklch(0.52 0.14 155)",
  Served: "oklch(0.55 0.05 280)",
  Available: "oklch(0.52 0.14 155)",
  Occupied: "oklch(0.58 0.22 25)",
  Ordered: "oklch(0.72 0.19 85)",
};

// ─── AI Marketing ────────────────────────────────────────────────────────────
function BusinessAIMarketing() {
  const [festival, setFestival] = useState("Diwali");
  const [brand, setBrand] = useState("Spice Garden");
  const [offerText, setOfferText] = useState(
    "20% OFF on all orders above ₹500!",
  );
  const [scheduleDate, setScheduleDate] = useState("");
  const [preview, setPreview] = useState(false);

  const FESTIVALS = [
    "Diwali",
    "Eid",
    "Christmas",
    "New Year",
    "Holi",
    "Independence Day",
    "Navratri",
    "Pongal",
    "Onam",
    "Baisakhi",
  ];

  const FESTIVAL_COLORS: Record<string, string> = {
    Diwali: "from-yellow-500 via-orange-500 to-red-500",
    Eid: "from-emerald-500 via-teal-500 to-cyan-500",
    Christmas: "from-green-600 via-red-600 to-green-600",
    "New Year": "from-purple-600 via-blue-600 to-purple-600",
    Holi: "from-pink-500 via-purple-500 to-indigo-500",
    "Independence Day": "from-orange-500 via-white to-green-600",
    Navratri: "from-red-500 via-yellow-400 to-red-500",
    Pongal: "from-yellow-400 via-green-400 to-yellow-400",
    Onam: "from-yellow-500 via-green-500 to-yellow-500",
    Baisakhi: "from-yellow-400 via-orange-400 to-yellow-400",
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-display font-bold">AI Marketing</h2>
        <p className="text-xs text-muted-foreground mt-1">
          Generate festival posts and AI offer images for your customers
        </p>
      </div>
      <Card className="rounded-2xl border-border">
        <CardContent className="p-5 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-xs">Festival / Occasion</Label>
              <Select value={festival} onValueChange={setFestival}>
                <SelectTrigger data-ocid="business.marketing.festival.select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {FESTIVALS.map((f) => (
                    <SelectItem key={f} value={f}>
                      {f}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-xs">Brand Name</Label>
              <Input
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="Your business name"
                data-ocid="business.marketing.brand.input"
              />
            </div>
            <div className="sm:col-span-2 space-y-2">
              <Label className="text-xs">Offer Text</Label>
              <Input
                value={offerText}
                onChange={(e) => setOfferText(e.target.value)}
                placeholder="e.g. 30% OFF this Diwali!"
                data-ocid="business.marketing.offer.input"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-xs">Schedule Date</Label>
              <Input
                type="date"
                value={scheduleDate}
                onChange={(e) => setScheduleDate(e.target.value)}
                data-ocid="business.marketing.schedule.input"
              />
            </div>
          </div>
          <Button
            onClick={() => setPreview(true)}
            className="gap-2"
            data-ocid="business.marketing.primary_button"
          >
            <Sparkles size={15} /> Generate Festival Post
          </Button>
        </CardContent>
      </Card>

      {preview && (
        <div className="space-y-4">
          <h3 className="text-sm font-semibold">Preview</h3>
          <div
            className={`relative rounded-2xl p-8 bg-gradient-to-br ${FESTIVAL_COLORS[festival] || FESTIVAL_COLORS.Diwali} text-white text-center overflow-hidden`}
            data-ocid="business.marketing.card"
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 20%, white 0%, transparent 40%)",
              }}
            />
            <p className="text-[10px] uppercase tracking-widest opacity-80 mb-2">
              ✨ {festival} Special ✨
            </p>
            <h2 className="text-2xl font-display font-bold mb-1">{brand}</h2>
            <p className="text-lg font-semibold mb-4 opacity-90">{offerText}</p>
            {scheduleDate && (
              <p className="text-xs opacity-70">Scheduled: {scheduleDate}</p>
            )}
            <div className="mt-5 flex gap-3 justify-center flex-wrap">
              <Button
                size="sm"
                variant="secondary"
                className="rounded-full text-xs"
                onClick={() => toast.success("Pushed to all customers!")}
                data-ocid="business.marketing.push.button"
              >
                Push to Customers
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="rounded-full text-xs border-white/40 text-white hover:bg-white/20"
                onClick={() => setPreview(false)}
                data-ocid="business.marketing.close_button"
              >
                <X size={12} className="mr-1" /> Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── CSV Import ────────────────────────────────────────────────────────────────
function BusinessCSVImport() {
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [done, setDone] = useState(false);

  const MOCK_ROWS = [
    { name: "Butter Chicken (250g)", status: "Approved" as const },
    { name: "Masala Dosa Pack", status: "Approved" as const },
    { name: "Gulab Jamun Mix", status: "Pending" as const },
    { name: "Invalid Row — Missing Price", status: "Rejected" as const },
    { name: "Paneer Tikka Masala", status: "Pending" as const },
  ];
  const [rows, setRows] = useState(MOCK_ROWS);

  const simulateUpload = () => {
    setUploading(true);
    setDone(false);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setUploading(false);
          setDone(true);
          return 100;
        }
        return p + 10;
      });
    }, 200);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-display font-bold">CSV Product Import</h2>
        <p className="text-xs text-muted-foreground mt-1">
          Upload a CSV file with product data and an images ZIP. Files are
          scanned for viruses and deleted after processing.
        </p>
      </div>
      <Card className="rounded-2xl border-border">
        <CardContent className="p-5 space-y-4">
          <button
            type="button"
            className="w-full border-2 border-dashed border-border rounded-xl p-8 text-center cursor-pointer hover:bg-muted/30 transition-colors"
            onClick={simulateUpload}
            data-ocid="business.csv.dropzone"
          >
            <Upload size={28} className="mx-auto text-muted-foreground mb-2" />
            <p className="text-sm font-medium">
              Click to upload CSV + images ZIP
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Accepted: .csv, .zip (max 50MB per file)
            </p>
          </button>
          {uploading && (
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Scanning &amp; processing...</span>
                <span>{progress}%</span>
              </div>
              <Progress
                value={progress}
                data-ocid="business.csv.loading_state"
              />
            </div>
          )}
          {done && (
            <div
              className="p-3 rounded-lg bg-primary/5 border border-primary/20 text-xs text-primary"
              data-ocid="business.csv.success_state"
            >
              ✅ File processed. Temp file deleted. {rows.length} rows found.
            </div>
          )}
        </CardContent>
      </Card>

      {done && (
        <Card className="rounded-2xl border-border">
          <CardContent className="p-5">
            <h3 className="text-sm font-semibold mb-3">Import Results</h3>
            <div className="space-y-2">
              {rows.map((row, i) => (
                <div
                  key={row.name}
                  className="flex items-center justify-between p-3 rounded-lg bg-secondary/30"
                  data-ocid={`business.csv.item.${i + 1}`}
                >
                  <span className="text-sm">{row.name}</span>
                  <div className="flex items-center gap-2">
                    <Badge
                      className="text-xs"
                      style={{
                        background:
                          row.status === "Approved"
                            ? "oklch(0.52 0.14 155 / 0.15)"
                            : row.status === "Rejected"
                              ? "oklch(0.55 0.22 25 / 0.15)"
                              : "oklch(0.65 0.14 50 / 0.15)",
                        color:
                          row.status === "Approved"
                            ? "oklch(0.52 0.14 155)"
                            : row.status === "Rejected"
                              ? "oklch(0.55 0.22 25)"
                              : "oklch(0.65 0.14 50)",
                      }}
                    >
                      {row.status}
                    </Badge>
                    {row.status === "Pending" && (
                      <>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-6 text-xs"
                          onClick={() =>
                            setRows((prev) =>
                              prev.map((r, ri) =>
                                ri === i
                                  ? { ...r, status: "Approved" as const }
                                  : r,
                              ),
                            )
                          }
                          data-ocid={`business.csv.confirm_button.${i + 1}`}
                        >
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          className="h-6 text-xs"
                          onClick={() =>
                            setRows((prev) =>
                              prev.map((r, ri) =>
                                ri === i
                                  ? { ...r, status: "Rejected" as const }
                                  : r,
                              ),
                            )
                          }
                          data-ocid={`business.csv.delete_button.${i + 1}`}
                        >
                          Reject
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

// ─── Business Delivery Setup ──────────────────────────────────────────────────
function BusinessDeliverySetup() {
  const [pincodes, setPincodes] = useState("110001, 110002, 110003");
  const [area, setArea] = useState("South Delhi, Central Delhi");
  const [radius, setRadius] = useState([10]);
  const [perKmRate, setPerKmRate] = useState("12");
  const [minOrder, setMinOrder] = useState("200");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="bg-card border border-border rounded-xl p-5 space-y-4">
        <h3 className="text-sm font-semibold">Coverage Area</h3>
        <div className="space-y-2">
          <Label className="text-xs">Pincodes Served (comma-separated)</Label>
          <Input
            value={pincodes}
            onChange={(e) => setPincodes(e.target.value)}
            placeholder="110001, 110002..."
            data-ocid="business.delivery.pincodes.input"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-xs">Area / Locality</Label>
          <Input
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="e.g. South Delhi, Saket"
            data-ocid="business.delivery.area.input"
          />
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-xs">Delivery Radius</Label>
            <span className="text-xs font-semibold text-primary">
              {radius[0]} km
            </span>
          </div>
          <Slider
            value={radius}
            onValueChange={setRadius}
            min={1}
            max={50}
            step={1}
            className="w-full"
            data-ocid="business.delivery.radius.toggle"
          />
        </div>
      </div>
      <div className="bg-card border border-border rounded-xl p-5 space-y-4">
        <h3 className="text-sm font-semibold">Rate Configuration</h3>
        <div className="space-y-2">
          <Label className="text-xs">Per-km Rate (₹)</Label>
          <Input
            type="number"
            value={perKmRate}
            onChange={(e) => setPerKmRate(e.target.value)}
            placeholder="12"
            data-ocid="business.delivery.per_km.input"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-xs">Minimum Order Amount (₹)</Label>
          <Input
            type="number"
            value={minOrder}
            onChange={(e) => setMinOrder(e.target.value)}
            placeholder="200"
            data-ocid="business.delivery.min_order.input"
          />
        </div>
        <div className="pt-2">
          <div className="bg-muted/40 rounded-lg p-3 text-xs text-muted-foreground">
            <p className="font-medium text-foreground mb-1">
              Delivery Estimate
            </p>
            <p>Base fare: ₹30 + ₹{perKmRate}/km</p>
            <p>Coverage: {radius[0]} km radius from business location</p>
          </div>
        </div>
        <Button
          onClick={() => toast.success("Delivery setup saved")}
          className="w-full font-label"
          data-ocid="business.delivery.save.primary_button"
        >
          Save Delivery Setup
        </Button>
      </div>
    </div>
  );
}

// ─── Business Commission Config ────────────────────────────────────────────────
function BusinessCommissionConfig() {
  const [categories, setCategories] = useState([
    { name: "Electronics", percent: "8", flat: "50" },
    { name: "Clothing & Fashion", percent: "12", flat: "30" },
    { name: "Food & Beverages", percent: "15", flat: "20" },
    { name: "Services", percent: "10", flat: "0" },
    { name: "Healthcare", percent: "7", flat: "100" },
    { name: "Real Estate", percent: "2", flat: "500" },
    { name: "Travel", percent: "10", flat: "200" },
    { name: "Education", percent: "5", flat: "50" },
    { name: "Other", percent: "10", flat: "25" },
  ]);

  const updateCategory = (
    i: number,
    field: "percent" | "flat",
    value: string,
  ) => {
    setCategories((prev) =>
      prev.map((c, idx) => (idx === i ? { ...c, [field]: value } : c)),
    );
  };

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="p-4 border-b border-border bg-muted/30">
        <p className="text-xs text-muted-foreground">
          Set commission rates per category. Platform charges the lower of % or
          flat amount.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="p-3 text-left text-xs font-semibold text-muted-foreground">
                Category
              </th>
              <th className="p-3 text-left text-xs font-semibold text-muted-foreground">
                Commission %
              </th>
              <th className="p-3 text-left text-xs font-semibold text-muted-foreground">
                Flat Amount (₹)
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, i) => (
              <tr
                key={cat.name}
                className="border-b border-border/50 hover:bg-secondary/20"
                data-ocid={`business.commission.row.${i + 1}`}
              >
                <td className="p-3 font-medium text-xs">{cat.name}</td>
                <td className="p-3">
                  <div className="flex items-center gap-1">
                    <Input
                      type="number"
                      value={cat.percent}
                      onChange={(e) =>
                        updateCategory(i, "percent", e.target.value)
                      }
                      className="h-8 w-20 text-xs"
                      data-ocid={`business.commission.percent.input.${i + 1}`}
                    />
                    <span className="text-xs text-muted-foreground">%</span>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-muted-foreground">₹</span>
                    <Input
                      type="number"
                      value={cat.flat}
                      onChange={(e) =>
                        updateCategory(i, "flat", e.target.value)
                      }
                      className="h-8 w-20 text-xs"
                      data-ocid={`business.commission.flat.input.${i + 1}`}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 border-t border-border">
        <Button
          onClick={() => toast.success("Commission rates saved")}
          className="font-label"
          data-ocid="business.commission.save.primary_button"
        >
          Save Commission Rates
        </Button>
      </div>
    </div>
  );
}

// ─── Table QR Code Button ─────────────────────────────────────────────────
function TableQRButton({
  tableNo,
  businessId,
  businessName,
}: {
  tableNo: string;
  businessId: string;
  businessName: string;
}) {
  const [open, setOpen] = React.useState(false);

  const tableUrl = `https://app.indyacentral.com?business=${businessId}&table=${encodeURIComponent(tableNo)}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(tableUrl)}`;

  // Get menu items from global products or use seed items
  const products = getGlobalProducts();
  const menuItems =
    products.length > 0
      ? products.slice(0, 6).map((p) => ({ name: p.name, price: p.price }))
      : [
          { name: "Masala Chai", price: 60 },
          { name: "Butter Chicken", price: 320 },
          { name: "Paneer Tikka", price: 280 },
          { name: "Garlic Naan", price: 60 },
          { name: "Mango Lassi", price: 100 },
        ];

  const handlePrint = () => {
    const w = window.open("", "_blank");
    if (!w) return;
    w.document.write(`
      <html><body style="text-align:center;font-family:sans-serif;padding:20px">
      <h2>${businessName}</h2>
      <h3>Table ${tableNo}</h3>
      <img src="${qrUrl}" width="200" height="200"/>
      <p style="font-size:12px;color:#666">Scan to order • ${tableUrl}</p>
      <hr/>
      <h4>Menu</h4>
      ${menuItems.map((m) => `<p>${m.name} — ₹${m.price}</p>`).join("")}
      </body></html>
    `);
    w.document.close();
    w.print();
  };

  return (
    <>
      <Button
        size="sm"
        variant="outline"
        className="w-full text-xs gap-1.5"
        onClick={() => setOpen(true)}
        data-ocid="business.table.qr.button"
      >
        <QrCode size={13} /> Table QR
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="max-w-sm rounded-2xl"
          data-ocid="business.table_qr.dialog"
        >
          <DialogHeader>
            <DialogTitle className="font-display text-sm">
              Table {tableNo} — Scan to Order
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col items-center gap-3">
            <img
              src={qrUrl}
              alt={`Table ${tableNo} QR`}
              className="w-48 h-48 rounded-2xl border-2 border-primary/30"
            />
            <div className="text-center">
              <p className="text-sm font-bold text-foreground">
                {businessName}
              </p>
              <p className="text-xs text-muted-foreground">
                Table No: {tableNo}
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-label font-semibold text-muted-foreground uppercase tracking-wide">
              Menu Items
            </p>
            <div className="grid grid-cols-2 gap-1 max-h-40 overflow-y-auto">
              {menuItems.map((item, i) => (
                <div
                  key={String(i)}
                  className="flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs"
                  style={{ background: "oklch(var(--muted) / 0.5)" }}
                >
                  <span className="text-foreground truncate">{item.name}</span>
                  <span className="text-primary font-semibold ml-1 shrink-0">
                    ₹{item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <Button
            className="w-full gap-2"
            onClick={handlePrint}
            data-ocid="business.table_qr.print_button"
          >
            <Star size={14} /> Print QR Code
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}

// ─── Business Visiting Card with QR ─────────────────────────────────────────
function BusinessVisitingCard({
  biz,
}: { biz: ReturnType<typeof getFamilyTreeBusinesses>[number] }) {
  const [showCard, setShowCard] = React.useState(false);
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${biz.name}`,
    `ORG:${biz.name}`,
    biz.phone ? `TEL:${biz.phone}` : "",
    `EMAIL:contact@${biz.name.toLowerCase().replace(/\s+/g, "")}.com`,
    `URL:https://indyacentral.com/biz/${biz.id}`,
    biz.location ? `ADR:;;${biz.location}` : "",
    "END:VCARD",
  ]
    .filter(Boolean)
    .join("\n");

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(vcard)}`;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = qrUrl;
    link.download = `${biz.name}-qr.png`;
    link.click();
  };

  return (
    <div className="shrink-0" data-ocid="business.qr.card">
      {/* Mini QR preview */}
      <button
        type="button"
        onClick={() => setShowCard(true)}
        className="rounded-xl border-2 p-2 text-center block hover:shadow-md transition-shadow"
        style={{ borderColor: "oklch(0.65 0.25 335 / 0.4)" }}
      >
        <img
          src={qrUrl}
          alt="Business QR"
          className="w-20 h-20 rounded-lg mx-auto"
          loading="lazy"
        />
        <p className="text-[9px] font-bold text-foreground mt-1 truncate max-w-[80px]">
          {biz.name}
        </p>
        <p className="text-[8px] text-primary mt-0.5">View Card</p>
      </button>

      {/* Full Business Card Dialog */}
      <Dialog open={showCard} onOpenChange={setShowCard}>
        <DialogContent
          className="max-w-md rounded-2xl"
          data-ocid="business.visiting_card.dialog"
        >
          <DialogHeader>
            <DialogTitle className="font-display text-sm">
              Business Visiting Card
            </DialogTitle>
          </DialogHeader>

          {/* Physical-style business card */}
          <div
            className="rounded-2xl p-6 text-white relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.45 0.25 280), oklch(0.55 0.28 310), oklch(0.65 0.25 340))",
              minHeight: 180,
            }}
          >
            {/* Decorative circles */}
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/10" />

            <div className="relative z-10">
              <div className="flex items-start justify-between">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: "oklch(1 0 0 / 0.2)" }}
                >
                  <Building2 size={22} className="text-white" />
                </div>
                <span className="text-[9px] font-label opacity-70 uppercase tracking-widest">
                  {biz.category}
                </span>
              </div>
              <h2 className="text-xl font-display font-bold leading-tight">
                {biz.name}
              </h2>
              {biz.type && (
                <p className="text-xs opacity-80 mt-0.5">{biz.type}</p>
              )}
              <div className="mt-4 space-y-1">
                {biz.phone && (
                  <div className="flex items-center gap-2 text-xs opacity-90">
                    <Phone size={11} /> {biz.phone}
                  </div>
                )}
                <div className="flex items-center gap-2 text-xs opacity-90">
                  <Mail size={11} />
                  contact@{biz.name.toLowerCase().replace(/\s+/g, "")}.com
                </div>
                {biz.location && (
                  <div className="flex items-center gap-2 text-xs opacity-90">
                    <MapPin size={11} /> {biz.location}
                  </div>
                )}
                <div className="flex items-center gap-2 text-xs opacity-90">
                  <Globe size={11} />
                  indyacentral.com/biz/{biz.id}
                </div>
              </div>
            </div>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center gap-2 py-2">
            <img
              src={qrUrl}
              alt="vCard QR Code"
              className="w-36 h-36 rounded-xl border border-border"
            />
            <p className="text-[10px] text-muted-foreground text-center">
              Scan to save contact • vCard 3.0
            </p>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex-1 text-xs gap-1"
              onClick={handleDownload}
              data-ocid="business.qr.download_button"
            >
              <Download size={13} /> Download QR
            </Button>
            <Button
              className="flex-1 text-xs gap-1"
              onClick={() => {
                navigator.clipboard?.writeText(
                  `https://indyacentral.com/biz/${biz.id}`,
                );
                toast.success("Business link copied!");
              }}
              data-ocid="business.qr.share_button"
            >
              <Share2 size={13} /> Share Card
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function StorefrontTab() {
  const [bizList, setBizList] = React.useState<
    ReturnType<typeof getFamilyTreeBusinesses>
  >([]);
  const [boostTarget, setBoostTarget] = useState<string | null>(null);
  const [boosted, setBoosted] = useState<Record<string, boolean>>(() => {
    const b: string[] = JSON.parse(
      localStorage.getItem("ic_boosted_posts") || "[]",
    );
    return Object.fromEntries(b.map((id) => [id, true]));
  });

  React.useEffect(() => {
    setBizList(getFamilyTreeBusinesses());
    const handleStorage = () => setBizList(getFamilyTreeBusinesses());
    window.addEventListener("storage", handleStorage);
    window.addEventListener("familyBusinessUpdated", handleStorage);
    const interval = setInterval(
      () => setBizList(getFamilyTreeBusinesses()),
      2000,
    );
    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("familyBusinessUpdated", handleStorage);
      clearInterval(interval);
    };
  }, []);

  if (bizList.length === 0) {
    return (
      <div
        className="rounded-xl border border-dashed border-border p-12 text-center space-y-4"
        data-ocid="business.storefront.empty_state"
      >
        <Building2 size={40} className="mx-auto text-muted-foreground" />
        <div>
          <p className="text-base font-display font-semibold text-foreground">
            No businesses registered yet
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Register a business through <strong>Family Tree</strong> module to
            see your storefront here.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            window.location.hash = "family-tree";
          }}
          className="text-sm text-primary underline-offset-4 hover:underline cursor-pointer bg-transparent border-0 p-0"
        >
          → Go to Family Tree to register a business
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {bizList.map((biz) => (
        <Card
          key={biz.id}
          className="rounded-2xl border-border"
          data-ocid="business.storefront.card"
        >
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-6">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: "oklch(0.65 0.25 335 / 0.15)" }}
              >
                <Building2
                  size={32}
                  style={{ color: "oklch(0.65 0.25 335)" }}
                />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-display font-bold text-foreground">
                  {biz.name}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {biz.category} · {biz.type}
                </p>
                <div className="flex flex-wrap gap-3 mt-3 text-xs text-muted-foreground">
                  {biz.location && (
                    <span className="flex items-center gap-1">
                      <MapPin size={12} /> {biz.location}
                    </span>
                  )}
                  {biz.phone && (
                    <span className="flex items-center gap-1">
                      <Phone size={12} /> {biz.phone}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setBoostTarget(biz.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all"
                  style={{
                    borderColor: boosted[biz.id]
                      ? "oklch(0.65 0.20 85)"
                      : "oklch(var(--border))",
                    color: boosted[biz.id]
                      ? "oklch(0.55 0.18 85)"
                      : "oklch(var(--muted-foreground))",
                    background: boosted[biz.id]
                      ? "oklch(0.65 0.20 85 / 0.1)"
                      : "transparent",
                  }}
                  data-ocid="business.storefront.primary_button"
                >
                  <Zap
                    size={12}
                    fill={boosted[biz.id] ? "currentColor" : "none"}
                  />
                  {boosted[biz.id] ? "Promoted" : "Boost"}
                </button>
              </div>
              <BusinessVisitingCard biz={biz} />
            </div>
          </CardContent>
          <div className="px-6 pb-4 flex items-center justify-between border-t border-border/30 pt-3">
            <LikeVoteBar id={biz.id} />
            <div className="flex items-center gap-2">
              <ReviewModal
                targetId={biz.id}
                targetType="business"
                targetName={biz.name}
              />
              {biz.createdAt && (
                <span className="text-[10px] text-muted-foreground">
                  {formatTimeAgo(biz.createdAt)}
                </span>
              )}
            </div>
          </div>
          <BoostPostDialog
            open={boostTarget === biz.id}
            onClose={() => setBoostTarget(null)}
            postTitle={biz.name}
            postType="product"
            onBoostSuccess={() =>
              setBoosted((prev) => ({ ...prev, [biz.id]: true }))
            }
          />
        </Card>
      ))}
      <p className="text-xs text-muted-foreground text-center">
        Showing {bizList.length} business{bizList.length !== 1 ? "es" : ""} from
        your Family Tree.{" "}
        <button
          type="button"
          onClick={() => {
            window.location.hash = "family-tree";
          }}
          className="text-primary underline-offset-4 hover:underline cursor-pointer bg-transparent border-0 p-0"
        >
          Add more in Family Tree →
        </button>
      </p>
    </div>
  );
}

function MyBusinessesTab({
  onNavigate,
}: { onNavigate?: (page: string) => void }) {
  const [bizList, setBizList] = React.useState<
    ReturnType<typeof getFamilyTreeBusinesses>
  >([]);

  React.useEffect(() => {
    setBizList(getFamilyTreeBusinesses());
    const handleStorage = () => setBizList(getFamilyTreeBusinesses());
    window.addEventListener("storage", handleStorage);
    window.addEventListener("familyBusinessUpdated", handleStorage);
    // Also poll for same-tab updates
    const interval = setInterval(
      () => setBizList(getFamilyTreeBusinesses()),
      2000,
    );
    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("familyBusinessUpdated", handleStorage);
      clearInterval(interval);
    };
  }, []);

  // Refresh when tab becomes visible
  const refresh = () => setBizList(getFamilyTreeBusinesses());

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-display font-bold">My Businesses</h2>
          <p className="text-xs text-muted-foreground mt-1">
            Businesses registered through your Family Tree profile
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            className="h-8 text-xs gap-1"
            onClick={refresh}
            data-ocid="business.refresh.button"
          >
            ↻ Refresh
          </Button>
          <button
            type="button"
            onClick={() => {
              window.location.hash = "family-tree";
            }}
            className="text-xs text-primary underline-offset-4 hover:underline cursor-pointer bg-transparent border-0 p-0"
          >
            → Go to Family Tree
          </button>
        </div>
      </div>
      <div className="p-3 rounded-lg border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800 text-xs text-amber-700 dark:text-amber-400">
        💡 Business registration is done through the{" "}
        <strong>Family Tree</strong> module. Add a business to yourself or a
        family member there and it will appear here automatically.
      </div>
      {bizList.length === 0 && (
        <div
          className="rounded-xl border border-dashed border-border p-8 text-center space-y-3"
          data-ocid="business.my_business.empty_state"
        >
          <Building2 size={32} className="mx-auto text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            No businesses linked yet. Register a business via Family Tree to see
            it here.
          </p>
          {onNavigate && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => onNavigate("family-tree")}
            >
              Go to Family Tree
            </Button>
          )}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {bizList.map((biz, i) => (
          <div
            key={biz.id}
            className="bg-card border border-border rounded-xl p-4"
            data-ocid={`business.my_business.card.${i + 1}`}
          >
            <div className="flex items-start justify-between mb-2">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: "oklch(0.65 0.25 335 / 0.12)" }}
              >
                <Building2
                  size={18}
                  style={{ color: "oklch(0.65 0.25 335)" }}
                />
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                Active
              </span>
            </div>
            <h3 className="font-semibold text-sm text-foreground mt-2">
              {biz.name}
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              {biz.category}
              {biz.type ? ` · ${biz.type}` : ""}
            </p>
            <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
              <MapPin size={10} /> <span>{biz.location}</span>
            </div>
            {biz.phone && (
              <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                <Phone size={10} /> <span>{biz.phone}</span>
              </div>
            )}
            {biz.category?.toLowerCase().includes("health") && (
              <div className="mt-2 text-[10px] px-2 py-1 rounded bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400">
                💊 Healthcare — Advisor profile available
              </div>
            )}
            <Button
              size="sm"
              variant="outline"
              className="w-full mt-3 h-8 text-xs font-label"
              data-ocid={`business.manage.primary_button.${i + 1}`}
              onClick={() => toast.success(`Managing ${biz.name}`)}
            >
              Manage
            </Button>
          </div>
        ))}
        <div className="bg-card border-2 border-dashed border-border rounded-xl p-4 flex flex-col items-center justify-center gap-2 min-h-[160px] cursor-pointer hover:border-primary/50 transition-colors">
          <Plus size={24} className="text-muted-foreground" />
          <p className="text-sm text-muted-foreground font-label text-center">
            Add via Family Tree
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── BusinessPOSProducts ──────────────────────────────────────────────────────
function BusinessPOSProducts() {
  const [bizList, setBizList] = React.useState(() => getFamilyTreeBusinesses());
  const [selectedBiz, setSelectedBiz] = React.useState(
    () => getFamilyTreeBusinesses()[0]?.id || "",
  );
  const [form, setForm] = React.useState({
    name: "",
    category: "Food & Beverages",
    price: "",
    description: "",
    videoUrl: "",
  });
  const [imagePreviews, setImagePreviews] = React.useState<string[]>([]);
  const [variants, setVariants] = React.useState<
    { label: string; price: string; stock: string }[]
  >([]);
  const [addons, setAddons] = React.useState<{ name: string; price: string }[]>(
    [],
  );
  const [addonInput, setAddonInput] = React.useState({ name: "", price: "" });
  const [detectingVariants, setDetectingVariants] = React.useState(false);
  const [products, setProducts] = React.useState(() => getGlobalProducts());

  React.useEffect(() => {
    const refresh = () => {
      setBizList(getFamilyTreeBusinesses());
      setProducts(getGlobalProducts());
    };
    window.addEventListener("familyBusinessUpdated", refresh);
    window.addEventListener("globalProductsUpdated", refresh);
    return () => {
      window.removeEventListener("familyBusinessUpdated", refresh);
      window.removeEventListener("globalProductsUpdated", refresh);
    };
  }, []);

  const handleImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setImagePreviews((prev) => [
      ...prev,
      ...files.map((f) => URL.createObjectURL(f)),
    ]);
  };

  const detectVariants = () => {
    setDetectingVariants(true);
    setTimeout(() => {
      const base = form.price || "0";
      const cat = form.category;
      let detected: { label: string; price: string; stock: string }[] = [];
      if (cat === "Fashion") {
        detected = [
          "Red / S",
          "Red / M",
          "Blue / S",
          "Blue / M",
          "Black / L",
        ].map((label) => ({ label, price: base, stock: "10" }));
      } else if (cat === "Electronics") {
        detected = ["64GB / Black", "128GB / Silver", "256GB / Gold"].map(
          (label) => ({ label, price: base, stock: "5" }),
        );
      } else if (cat === "Food & Beverages") {
        detected = ["Small", "Medium", "Large", "Family Pack"].map((label) => ({
          label,
          price: base,
          stock: "50",
        }));
      } else if (cat === "Healthcare") {
        detected = ["Strip of 10", "Pack of 30", "Pack of 100"].map(
          (label) => ({ label, price: base, stock: "20" }),
        );
      } else if (cat === "Home Services") {
        detected = ["Basic", "Standard", "Premium"].map((label, i) => ({
          label,
          price: String(Math.round(Number(base) * (1 + i * 0.5))),
          stock: "999",
        }));
      } else {
        detected = ["Standard", "Deluxe", "Premium"].map((label, i) => ({
          label,
          price: String(Math.round(Number(base) * (1 + i * 0.3))),
          stock: "10",
        }));
      }
      setVariants(detected);
      setDetectingVariants(false);
      toast.success(`${detected.length} variants detected`);
    }, 1000);
  };

  const refresh = () => setProducts(getGlobalProducts());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    const biz = bizList.find((b) => b.id === selectedBiz);
    addGlobalProduct({
      name: form.name,
      description: form.description,
      price: Number.parseFloat(form.price) || 0,
      category: form.category,
      module: "Business",
      businessId: selectedBiz,
      businessName: biz?.name,
      seller: biz?.ownerName || "Business Owner",
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
    toast.success(`"${form.name}" added to Products & Services`);
    setForm({
      name: "",
      category: "Food & Beverages",
      price: "",
      description: "",
      videoUrl: "",
    });
    setImagePreviews([]);
    setVariants([]);
    setAddons([]);
    refresh();
  };

  const bizProducts = products.filter(
    (p) =>
      !selectedBiz || p.businessId === selectedBiz || p.module === "Business",
  );

  const CATS = [
    "Food & Beverages",
    "Electronics",
    "Fashion",
    "Healthcare",
    "Home Services",
    "Education",
    "Travel",
    "Real Estate",
    "Other",
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-display font-bold">Products & Services</h2>
        <p className="text-xs text-muted-foreground mt-1">
          Add products and services directly to your business catalog. They will
          appear in the Shop.
        </p>
      </div>
      {bizList.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border p-8 text-center">
          <p className="text-sm text-muted-foreground">
            No businesses found. Register one in Family Tree first.
          </p>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-3 flex-wrap">
            <Label className="text-sm font-medium">Business:</Label>
            <select
              value={selectedBiz}
              onChange={(e) => setSelectedBiz(e.target.value)}
              className="border border-border rounded-md px-3 py-1.5 text-sm bg-background text-foreground"
            >
              {bizList.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name}
                </option>
              ))}
            </select>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-xl p-5 space-y-4"
          >
            <h3 className="text-sm font-semibold">Add New Product/Service</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label className="text-xs">Name *</Label>
                <Input
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  placeholder="Product name"
                  className="h-9"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label className="text-xs">Category</Label>
                <select
                  value={form.category}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, category: e.target.value }))
                  }
                  className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background text-foreground"
                >
                  {CATS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-1">
                <Label className="text-xs">Price (₹)</Label>
                <Input
                  type="number"
                  value={form.price}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, price: e.target.value }))
                  }
                  placeholder="0.00"
                  className="h-9"
                />
              </div>
              <div className="space-y-1">
                <Label className="text-xs">Video URL</Label>
                <Input
                  value={form.videoUrl}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, videoUrl: e.target.value }))
                  }
                  placeholder="YouTube link"
                  className="h-9"
                />
              </div>
            </div>
            {/* Image Upload */}
            <div className="space-y-1">
              <Label className="text-xs">Product Images</Label>
              <label className="flex items-center gap-2 border-2 border-dashed border-border rounded-lg p-3 cursor-pointer hover:border-primary/50 transition-colors">
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
                  data-ocid="business.pos_products.upload_button"
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
            <div className="space-y-1">
              <Label className="text-xs">Description</Label>
              <Textarea
                value={form.description}
                onChange={(e) =>
                  setForm((p) => ({ ...p, description: e.target.value }))
                }
                placeholder="Describe your product or service..."
                rows={3}
              />
            </div>
            {/* Variant Detection */}
            <div className="space-y-1.5">
              <Label className="text-xs">Variants</Label>
              <Button
                type="button"
                size="sm"
                variant="outline"
                className="h-8 text-xs gap-1"
                onClick={detectVariants}
                disabled={detectingVariants}
              >
                {detectingVariants ? "Detecting..." : "Detect Variants (AI)"}
              </Button>
              {variants.length > 0 && (
                <div className="border border-border rounded-lg overflow-hidden">
                  <table className="w-full text-xs">
                    <thead className="bg-muted/40">
                      <tr>
                        <th className="p-1.5 text-left">Variant</th>
                        <th className="p-1.5 text-left">Price (₹)</th>
                        <th className="p-1.5 text-left">Stock</th>
                        <th className="p-1.5" />
                      </tr>
                    </thead>
                    <tbody>
                      {variants.map((v, i) => (
                        <tr key={v.label} className="border-t border-border/50">
                          <td className="p-1.5 font-medium">{v.label}</td>
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
                              className="text-destructive hover:opacity-70 text-xs"
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
                    className="text-destructive text-xs"
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
            <Button
              type="submit"
              size="sm"
              data-ocid="business.pos_products.submit_button"
            >
              Add to Products &amp; Services
            </Button>
          </form>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">
              Products &amp; Services ({bizProducts.length})
            </h3>
            {bizProducts.length === 0 ? (
              <p className="text-sm text-muted-foreground py-4 text-center">
                No products added yet.
              </p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {bizProducts.map((p, i) => (
                  <div
                    key={p.id}
                    className="border border-border rounded-xl overflow-hidden bg-card"
                    data-ocid={`business.pos_products.item.${i + 1}`}
                  >
                    {p.imageUrl ? (
                      <img
                        src={p.imageUrl}
                        alt={p.name}
                        className="w-full h-28 object-cover"
                      />
                    ) : (
                      <div className="w-full h-28 bg-muted/40 flex items-center justify-center text-2xl font-bold text-muted-foreground">
                        {p.category.charAt(0)}
                      </div>
                    )}
                    <div className="p-2 space-y-1">
                      <p className="text-xs font-semibold truncate">{p.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {p.category}
                      </p>
                      <p className="text-xs font-medium text-primary">
                        ₹{p.price.toLocaleString()}
                      </p>
                      {p.variantDetails && p.variantDetails.length > 0 && (
                        <p className="text-[10px] text-muted-foreground">
                          {p.variantDetails.length} variants
                        </p>
                      )}
                      <span
                        className={`inline-block px-1.5 py-0.5 rounded-full text-[10px] ${p.status === "active" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}
                      >
                        {p.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default function BusinessPage() {
  const [tables, setTables] = useState([
    {
      id: 1,
      no: "T1",
      status: "Available",
      service: "+91 98765 00001",
      cook: "C1",
    },
    {
      id: 2,
      no: "T2",
      status: "Occupied",
      service: "+91 98765 00002",
      cook: "C2",
    },
    {
      id: 3,
      no: "T3",
      status: "Ordered",
      service: "+91 98765 00001",
      cook: "C1",
    },
    {
      id: 4,
      no: "T4",
      status: "Served",
      service: "+91 98765 00003",
      cook: "C3",
    },
  ]);
  const [newTableNo, setNewTableNo] = useState("");
  const [_rating, _setRating] = useState(0);
  const [_hoverRating, _setHoverRating] = useState(0);
  const [branches, setBranches] = useState(BRANCHES_DEFAULT);
  const [selectedBranch, setSelectedBranch] = useState("b1");
  const [addBranchOpen, setAddBranchOpen] = useState(false);
  const [newBranch, setNewBranch] = useState({
    name: "",
    city: "",
    tables: "5",
    deliveryAreas: "",
    perKmRate: "30",
    cash: true,
    online: true,
    advance: false,
  });
  const [dynamicQrGenerated, setDynamicQrGenerated] = useState(false);
  const [paymentModes, setPaymentModes] = useState({
    cod: true,
    online: true,
    advance: false,
  });
  const [deliveryModes, setDeliveryModes] = useState({
    takeaway: true,
    homeDelivery: true,
  });
  const [orders, setOrders] = useState(MOCK_ORDERS);
  const [liveRefresh, setLiveRefresh] = useState(true);

  const branch = branches.find((b) => b.id === selectedBranch) ?? branches[0];

  const addTable = () => {
    if (!newTableNo.trim()) return;
    setTables((prev) => [
      ...prev,
      {
        id: Date.now(),
        no: newTableNo.trim(),
        status: "Available",
        service: "",
        cook: "",
      },
    ]);
    setNewTableNo("");
    toast.success(`Table ${newTableNo} added`);
  };

  const updateOrderStatus = (id: string, status: string) => {
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status } : o)));
    toast.success(`Order ${id} updated to ${status}`);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6" data-ocid="business.page">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">
          Business Dashboard
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Manage your storefront, tables, orders and payments
        </p>
      </div>

      <Tabs defaultValue="my-businesses">
        <TabsList className="flex flex-wrap h-auto gap-1 bg-muted/50">
          <TabsTrigger
            value="my-businesses"
            data-ocid="business.my_businesses.tab"
          >
            My Businesses
          </TabsTrigger>
          <TabsTrigger value="storefront" data-ocid="business.storefront.tab">
            Storefront
          </TabsTrigger>
          <TabsTrigger value="tables" data-ocid="business.tables.tab">
            Table Mgmt
          </TabsTrigger>
          <TabsTrigger value="orders" data-ocid="business.orders.tab">
            Live Orders
          </TabsTrigger>
          <TabsTrigger value="branches" data-ocid="business.branches.tab">
            Multi-Branch
          </TabsTrigger>
          <TabsTrigger value="payments" data-ocid="business.payments.tab">
            Payment Setup
          </TabsTrigger>
          <TabsTrigger
            value="delivery-setup"
            data-ocid="business.delivery_setup.tab"
          >
            Delivery Setup
          </TabsTrigger>
          <TabsTrigger value="commission" data-ocid="business.commission.tab">
            Commission
          </TabsTrigger>
          <TabsTrigger
            value="ai-marketing"
            data-ocid="business.ai_marketing.tab"
          >
            AI Marketing
          </TabsTrigger>
          <TabsTrigger
            value="pos-products"
            data-ocid="business.pos_products.tab"
          >
            Products & Services
          </TabsTrigger>
          <TabsTrigger value="csv-import" data-ocid="business.csv_import.tab">
            CSV Import
          </TabsTrigger>
          <TabsTrigger value="discover-claim" data-ocid="business.discover.tab">
            🔍 Discover & Claim
          </TabsTrigger>
        </TabsList>

        {/* ── My Businesses ── */}
        <TabsContent value="my-businesses" className="mt-6 space-y-4">
          <MyBusinessesTab />
        </TabsContent>

        {/* ── Delivery Setup ── */}
        <TabsContent value="delivery-setup" className="mt-6 space-y-6">
          <div>
            <h2 className="text-lg font-display font-bold">Delivery Setup</h2>
            <p className="text-xs text-muted-foreground mt-1">
              Configure delivery zones, radius, and per-km rates for your
              business
            </p>
          </div>
          <BusinessDeliverySetup />
        </TabsContent>

        {/* ── Commission Configuration ── */}
        <TabsContent value="commission" className="mt-6 space-y-6">
          <div>
            <h2 className="text-lg font-display font-bold">
              Commission Configuration
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              Set platform commission rates per product category
            </p>
          </div>
          <BusinessCommissionConfig />
        </TabsContent>

        {/* ── Storefront ── */}
        <TabsContent value="storefront" className="mt-6 space-y-6">
          <StorefrontTab />
        </TabsContent>

        {/* ── Table Management ── */}
        <TabsContent value="tables" className="mt-6 space-y-6">
          <Card className="rounded-2xl border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-display">
                Add New Table
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input
                  placeholder="Table number (e.g. T5)"
                  value={newTableNo}
                  onChange={(e) => setNewTableNo(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addTable()}
                  data-ocid="business.table.input"
                />
                <Button
                  onClick={addTable}
                  data-ocid="business.table.primary_button"
                >
                  Add Table
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tables.map((t, idx) => (
              <Card
                key={t.id}
                className="rounded-2xl border-border"
                data-ocid={`business.table.item.${idx + 1}`}
              >
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Utensils size={16} className="text-muted-foreground" />
                      <span className="font-display font-bold text-lg text-foreground">
                        {t.no}
                      </span>
                    </div>
                    <span
                      className="text-xs font-label font-semibold px-2 py-1 rounded-full"
                      style={{
                        background: `${STATUS_COLORS[t.status] ?? "oklch(0.5 0.05 280)"}20`,
                        color: STATUS_COLORS[t.status] ?? "oklch(0.5 0.05 280)",
                      }}
                    >
                      {t.status}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <Label className="text-[10px] text-muted-foreground">
                        Service Person Phone
                      </Label>
                      <Input
                        className="h-8 text-xs mt-1"
                        value={t.service}
                        onChange={(e) =>
                          setTables((prev) =>
                            prev.map((tb) =>
                              tb.id === t.id
                                ? { ...tb, service: e.target.value }
                                : tb,
                            ),
                          )
                        }
                        placeholder="+91 ..."
                        data-ocid="business.table.service.input"
                      />
                    </div>
                    <div>
                      <Label className="text-[10px] text-muted-foreground">
                        Assign Cook No
                      </Label>
                      <Input
                        className="h-8 text-xs mt-1"
                        value={t.cook}
                        onChange={(e) =>
                          setTables((prev) =>
                            prev.map((tb) =>
                              tb.id === t.id
                                ? { ...tb, cook: e.target.value }
                                : tb,
                            ),
                          )
                        }
                        placeholder="C1, C2 ..."
                        data-ocid="business.table.cook.input"
                      />
                    </div>
                    <div className="mt-2">
                      <TableQRButton
                        tableNo={t.no}
                        businessId="my-business"
                        businessName="My Business"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* ── Live Orders ── */}
        <TabsContent value="orders" className="mt-6 space-y-4">
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              {
                label: "Total Today",
                val: orders.length,
                color: "oklch(0.55 0.22 280)",
              },
              {
                label: "Pending",
                val: orders.filter((o) => o.status === "New").length,
                color: "oklch(0.72 0.19 85)",
              },
              {
                label: "In Kitchen",
                val: orders.filter((o) => o.status === "Cooking").length,
                color: "oklch(0.58 0.22 25)",
              },
              {
                label: "Served",
                val: orders.filter((o) => o.status === "Served").length,
                color: "oklch(0.52 0.14 155)",
              },
            ].map((s) => (
              <Card key={s.label} className="rounded-xl border-border">
                <CardContent className="p-3">
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                  <p
                    className="text-2xl font-display font-bold mt-1"
                    style={{ color: s.color }}
                  >
                    {s.val}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Live badge */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ background: "oklch(0.52 0.14 155)" }}
              />
              <span
                className="relative inline-flex rounded-full h-2.5 w-2.5"
                style={{ background: "oklch(0.52 0.14 155)" }}
              />
            </span>
            <span
              className="text-xs font-label font-semibold"
              style={{ color: "oklch(0.52 0.14 155)" }}
            >
              LIVE
            </span>
            <Switch
              checked={liveRefresh}
              onCheckedChange={setLiveRefresh}
              data-ocid="business.live.switch"
            />
            <span className="text-xs text-muted-foreground">Auto-refresh</span>
          </div>

          {/* Orders table */}
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted/30">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-label font-semibold text-muted-foreground">
                    Order ID
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-label font-semibold text-muted-foreground">
                    Table
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-label font-semibold text-muted-foreground">
                    Items
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-label font-semibold text-muted-foreground">
                    Time
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-label font-semibold text-muted-foreground">
                    Cook
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-label font-semibold text-muted-foreground">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-label font-semibold text-muted-foreground">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, idx) => (
                  <tr
                    key={order.id}
                    className="border-t border-border hover:bg-muted/20"
                    data-ocid={`business.order.row.${idx + 1}`}
                  >
                    <td className="px-4 py-3 text-xs font-mono text-muted-foreground">
                      {order.id}
                    </td>
                    <td className="px-4 py-3 text-xs font-bold text-foreground">
                      T{order.table}
                    </td>
                    <td className="px-4 py-3 text-xs text-foreground max-w-[160px] truncate">
                      {order.items}
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">
                      {order.time}
                    </td>
                    <td className="px-4 py-3 text-xs">
                      <span className="flex items-center gap-1">
                        <ChefHat size={12} className="text-muted-foreground" />
                        {order.cook}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className="text-[11px] font-label font-semibold px-2 py-1 rounded-full"
                        style={{
                          background: `${STATUS_COLORS[order.status] ?? "oklch(0.5 0.05 280)"}20`,
                          color:
                            STATUS_COLORS[order.status] ??
                            "oklch(0.5 0.05 280)",
                        }}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-1">
                        {order.status === "New" && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-6 text-[10px] px-2"
                            onClick={() =>
                              updateOrderStatus(order.id, "Cooking")
                            }
                            data-ocid={`business.order.cooking.button.${idx + 1}`}
                          >
                            Start
                          </Button>
                        )}
                        {order.status === "Cooking" && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-6 text-[10px] px-2"
                            onClick={() => updateOrderStatus(order.id, "Ready")}
                            data-ocid={`business.order.ready.button.${idx + 1}`}
                          >
                            Ready
                          </Button>
                        )}
                        {order.status === "Ready" && (
                          <Button
                            size="sm"
                            className="h-6 text-[10px] px-2"
                            onClick={() =>
                              updateOrderStatus(order.id, "Served")
                            }
                            data-ocid={`business.order.serve.button.${idx + 1}`}
                          >
                            Served
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        {/* ── Multi-Branch ── */}
        <TabsContent value="branches" className="mt-6 space-y-4">
          <div className="flex flex-wrap gap-2 items-center">
            {branches.map((b) => (
              <button
                key={b.id}
                type="button"
                onClick={() => setSelectedBranch(b.id)}
                className={`px-4 py-2 rounded-xl text-sm font-label font-medium border transition-colors ${
                  selectedBranch === b.id
                    ? "border-primary text-primary bg-primary/10"
                    : "border-border text-muted-foreground hover:bg-muted/30"
                }`}
                data-ocid="business.branch.button"
              >
                <GitBranch size={12} className="inline mr-1.5" />
                {b.name}
              </button>
            ))}
            <Button
              size="sm"
              variant="outline"
              onClick={() => setAddBranchOpen(true)}
              data-ocid="business.add_branch_button"
            >
              + Add Branch
            </Button>
          </div>
          <Dialog open={addBranchOpen} onOpenChange={setAddBranchOpen}>
            <DialogContent data-ocid="business.add_branch.dialog">
              <DialogHeader>
                <DialogTitle>Add New Branch</DialogTitle>
              </DialogHeader>
              <div className="space-y-3 py-2">
                <div>
                  <Label className="text-xs">Branch Name</Label>
                  <Input
                    placeholder="e.g. Juhu, Mumbai"
                    value={newBranch.name}
                    onChange={(e) =>
                      setNewBranch((p) => ({ ...p, name: e.target.value }))
                    }
                    data-ocid="business.branch_name.input"
                  />
                </div>
                <div>
                  <Label className="text-xs">City</Label>
                  <Input
                    placeholder="City"
                    value={newBranch.city}
                    onChange={(e) =>
                      setNewBranch((p) => ({ ...p, city: e.target.value }))
                    }
                    data-ocid="business.branch_city.input"
                  />
                </div>
                <div>
                  <Label className="text-xs">Number of Tables</Label>
                  <Input
                    type="number"
                    min="1"
                    value={newBranch.tables}
                    onChange={(e) =>
                      setNewBranch((p) => ({ ...p, tables: e.target.value }))
                    }
                    data-ocid="business.branch_tables.input"
                  />
                </div>
                <div>
                  <Label className="text-xs">
                    Delivery Pincodes (comma separated)
                  </Label>
                  <Input
                    placeholder="110001, 110002"
                    value={newBranch.deliveryAreas}
                    onChange={(e) =>
                      setNewBranch((p) => ({
                        ...p,
                        deliveryAreas: e.target.value,
                      }))
                    }
                    data-ocid="business.branch_delivery.input"
                  />
                </div>
                <div>
                  <Label className="text-xs">Rate per km (₹)</Label>
                  <Input
                    type="number"
                    min="0"
                    value={newBranch.perKmRate}
                    onChange={(e) =>
                      setNewBranch((p) => ({ ...p, perKmRate: e.target.value }))
                    }
                  />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs">Payment Modes</Label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-1.5 text-xs cursor-pointer">
                      <input
                        type="checkbox"
                        checked={newBranch.cash}
                        onChange={(e) =>
                          setNewBranch((p) => ({
                            ...p,
                            cash: e.target.checked,
                          }))
                        }
                      />
                      Cash
                    </label>
                    <label className="flex items-center gap-1.5 text-xs cursor-pointer">
                      <input
                        type="checkbox"
                        checked={newBranch.online}
                        onChange={(e) =>
                          setNewBranch((p) => ({
                            ...p,
                            online: e.target.checked,
                          }))
                        }
                      />
                      Online
                    </label>
                    <label className="flex items-center gap-1.5 text-xs cursor-pointer">
                      <input
                        type="checkbox"
                        checked={newBranch.advance}
                        onChange={(e) =>
                          setNewBranch((p) => ({
                            ...p,
                            advance: e.target.checked,
                          }))
                        }
                      />
                      Advance
                    </label>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setAddBranchOpen(false)}
                  data-ocid="business.add_branch.cancel_button"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    if (!newBranch.name.trim()) return;
                    const id = `b${Date.now()}`;
                    setBranches((prev) => [
                      ...prev,
                      {
                        id,
                        name: newBranch.city
                          ? `${newBranch.name}, ${newBranch.city}`
                          : newBranch.name,
                        tables: Number(newBranch.tables) || 5,
                        activeOrders: 0,
                        revenue: 0,
                        paymentModes: {
                          cash: newBranch.cash,
                          online: newBranch.online,
                          advance: newBranch.advance,
                        },
                        deliveryAreas: newBranch.deliveryAreas,
                        perKmRate: Number(newBranch.perKmRate) || 30,
                      },
                    ]);
                    setSelectedBranch(id);
                    setAddBranchOpen(false);
                    setNewBranch({
                      name: "",
                      city: "",
                      tables: "5",
                      deliveryAreas: "",
                      perKmRate: "30",
                      cash: true,
                      online: true,
                      advance: false,
                    });
                  }}
                  data-ocid="business.add_branch.confirm_button"
                >
                  Add Branch
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Branch stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="rounded-2xl border-border">
              <CardContent className="p-4">
                <p className="text-xs text-muted-foreground">Total Tables</p>
                <p className="text-3xl font-display font-bold text-foreground mt-1">
                  {branch.tables}
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-border">
              <CardContent className="p-4">
                <p className="text-xs text-muted-foreground">Active Orders</p>
                <p
                  className="text-3xl font-display font-bold mt-1"
                  style={{ color: "oklch(0.58 0.22 25)" }}
                >
                  {branch.activeOrders}
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-border">
              <CardContent className="p-4">
                <p className="text-xs text-muted-foreground">Revenue Today</p>
                <p
                  className="text-3xl font-display font-bold mt-1"
                  style={{ color: "oklch(0.52 0.14 155)" }}
                >
                  ₹{branch.revenue.toLocaleString()}
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="rounded-2xl border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-display flex items-center gap-2">
                <Building2 size={15} />
                All Branches Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="pb-2 text-left text-xs font-label text-muted-foreground">
                        Branch
                      </th>
                      <th className="pb-2 text-right text-xs font-label text-muted-foreground">
                        Tables
                      </th>
                      <th className="pb-2 text-right text-xs font-label text-muted-foreground">
                        Active Orders
                      </th>
                      <th className="pb-2 text-right text-xs font-label text-muted-foreground">
                        Revenue Today
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {branches.map((b, idx) => (
                      <tr
                        key={b.id}
                        className="border-t border-border"
                        data-ocid={`business.branch.row.${idx + 1}`}
                      >
                        <td className="py-2 text-xs font-semibold text-foreground">
                          {b.name}
                        </td>
                        <td className="py-2 text-xs text-right text-muted-foreground">
                          {b.tables}
                        </td>
                        <td
                          className="py-2 text-xs text-right"
                          style={{ color: "oklch(0.58 0.22 25)" }}
                        >
                          {b.activeOrders}
                        </td>
                        <td
                          className="py-2 text-xs text-right font-semibold"
                          style={{ color: "oklch(0.52 0.14 155)" }}
                        >
                          ₹{b.revenue.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ── Payment Setup ── */}
        <TabsContent value="payments" className="mt-6 space-y-6">
          {/* Static QR */}
          <Card className="rounded-2xl border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-display flex items-center gap-2">
                <QrCode size={15} /> Static UPI QR
              </CardTitle>
            </CardHeader>
            <CardContent>
              <label
                className="flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-8 text-center cursor-pointer hover:bg-muted/20 transition-colors"
                style={{ borderColor: "oklch(0.65 0.25 335 / 0.4)" }}
                data-ocid="business.qr.dropzone"
              >
                <QrCode
                  size={32}
                  className="mx-auto mb-3 text-muted-foreground"
                />
                <p className="text-sm font-label font-semibold text-foreground">
                  Upload UPI QR Code
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  JPG or PNG · Max 2MB
                </p>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  data-ocid="business.qr.upload_button"
                />
                <span className="mt-3 px-3 py-1.5 text-xs font-label rounded-lg border border-border hover:bg-muted/30 transition-colors">
                  Choose File
                </span>
              </label>
            </CardContent>
          </Card>

          {/* Dynamic QR */}
          <Card className="rounded-2xl border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-display flex items-center gap-2">
                <CreditCard size={15} /> Dynamic QR (Bank Details)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs">Account Name</Label>
                  <Input
                    placeholder="Spice Garden Pvt Ltd"
                    data-ocid="business.bank.account.input"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Account Number</Label>
                  <Input
                    placeholder="XXXXXXXXXX"
                    data-ocid="business.bank.number.input"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">IFSC Code</Label>
                  <Input
                    placeholder="HDFC0001234"
                    data-ocid="business.bank.ifsc.input"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">UPI ID</Label>
                  <Input
                    placeholder="spicegarden@hdfc"
                    data-ocid="business.bank.upi.input"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Bank Name</Label>
                  <Input
                    placeholder="HDFC Bank"
                    data-ocid="business.bank.name.input"
                  />
                </div>
              </div>
              <Button
                onClick={() => setDynamicQrGenerated(true)}
                data-ocid="business.qr.generate.primary_button"
              >
                Generate QR
              </Button>
              {dynamicQrGenerated && (
                <div
                  className="flex items-center gap-3 p-4 rounded-xl"
                  style={{ background: "oklch(0.52 0.14 155 / 0.1)" }}
                >
                  <CheckCircle2
                    size={20}
                    style={{ color: "oklch(0.52 0.14 155)" }}
                  />
                  <div>
                    <p className="text-sm font-label font-semibold text-foreground">
                      QR Generated Successfully
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Dynamic QR will appear at checkout
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Payment & Delivery Modes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="rounded-2xl border-border">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-display">
                  Payment Modes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {(
                  [
                    { key: "cod" as const, label: "Cash on Delivery" },
                    { key: "online" as const, label: "Online Payment (QR)" },
                    { key: "advance" as const, label: "Advance Payment" },
                  ] as const
                ).map((m) => (
                  <div
                    key={m.key}
                    className="flex items-center justify-between"
                  >
                    <Label className="text-sm font-label">{m.label}</Label>
                    <Switch
                      checked={paymentModes[m.key]}
                      onCheckedChange={(v) =>
                        setPaymentModes((p) => ({ ...p, [m.key]: v }))
                      }
                      data-ocid={`business.payment.${m.key}.switch`}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-border">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-display">
                  Delivery Modes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-label">Takeaway</Label>
                  <Switch
                    checked={deliveryModes.takeaway}
                    onCheckedChange={(v) =>
                      setDeliveryModes((p) => ({ ...p, takeaway: v }))
                    }
                    data-ocid="business.delivery.takeaway.switch"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-label">
                    <span className="flex items-center gap-2">
                      <Truck size={14} className="text-muted-foreground" /> Home
                      Delivery
                    </span>
                  </Label>
                  <Switch
                    checked={deliveryModes.homeDelivery}
                    onCheckedChange={(v) =>
                      setDeliveryModes((p) => ({ ...p, homeDelivery: v }))
                    }
                    data-ocid="business.delivery.home.switch"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Merchant Fee Config */}
          <Card className="rounded-2xl border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-display">
                Merchant Fee Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-xs">Platform Fee (%)</Label>
                <Input
                  type="number"
                  defaultValue="2"
                  min="0"
                  max="10"
                  data-ocid="business.fee.platform.input"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs">Service Charge (%)</Label>
                <Input
                  type="number"
                  defaultValue="5"
                  min="0"
                  max="20"
                  data-ocid="business.fee.service.input"
                />
              </div>
              <div className="sm:col-span-2">
                <Button
                  onClick={() => toast.success("Fee configuration saved")}
                  data-ocid="business.fee.save_button"
                >
                  Save Configuration
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ── AI Marketing ── */}
        <TabsContent value="ai-marketing" className="mt-6 space-y-6">
          <BusinessAIMarketing />
        </TabsContent>

        {/* ── CSV Import ── */}
        {/* u2500u2500 POS Products u2500u2500 */}
        <TabsContent value="pos-products" className="mt-6 space-y-6">
          <BusinessPOSProducts />
        </TabsContent>

        <TabsContent value="csv-import" className="mt-6 space-y-6">
          <BusinessCSVImport />
        </TabsContent>

        {/* ── Discover & Claim ── */}
        <TabsContent value="discover-claim" className="mt-6 space-y-4">
          <DiscoverClaimTab />
        </TabsContent>
      </Tabs>

      {/* Footer */}
      <Separator />
      <p className="text-xs text-center text-muted-foreground">
        © {new Date().getFullYear()}. Built with love using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground transition-colors"
        >
          caffeine.ai
        </a>
      </p>
    </div>
  );
}
