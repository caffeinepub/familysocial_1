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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
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
  Copy,
  CreditCard,
  Download,
  GitBranch,
  Globe,
  Lock,
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
import {
  CourierDispatchBusinessPanel,
  CourierDispatchModule,
  ElectricalModule,
  ElectricianModule,
  FoodParcelDeliveryModule,
  FuelDepotModule,
  GarmentsModule,
  MechanicModule,
  PlumbingModule,
  SweeperModule,
  TransportModule,
  VendorOrdersPanel,
  WaterDeliveryModule,
} from "../components/BusinessModulesExtra";
import {
  AssemblyModule,
  FinancialModule,
  InventoryModule,
  LeadCRMModule,
  MoneyLendingModule,
  RepairServiceModule,
  RetailShopModule,
  SoftwareProjectModule,
  TelecomModule,
  VehicleModule,
} from "../components/BusinessModulesFull";
import { DeliveryPartnersPanel } from "../components/DeliveryPartnersPanel";
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
      ${menuItems.map((m) => `<p>${m.name} — ₹${m.price}</p>`).join("\n")}
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
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-xl font-display font-bold text-foreground">
                    {biz.name}
                  </h2>
                  <TrustScoreBadge biz={biz} />
                </div>
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
            {biz.category === "Healthcare Advisor" && (
              <div className="mt-2 text-[10px] px-2 py-1 rounded bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400 font-medium">
                💊 Healthcare Advisor — Registered on IndyaCentral
              </div>
            )}
            {biz.category === "Insurance Agent" && (
              <div className="mt-2 text-[10px] px-2 py-1 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 font-medium">
                🛡️ Insurance Agent — Registered on IndyaCentral
              </div>
            )}
            {biz.category?.toLowerCase().includes("health") &&
              biz.category !== "Healthcare Advisor" && (
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

// ─── BusinessPOSProducts (kept for reference) ───────────────────────────────────
function _BusinessPOSProducts() {
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

// ── Business Alerts Tab ──────────────────────────────────────────────────────

type AlertType =
  | "order"
  | "review"
  | "bid"
  | "inventory"
  | "promotion"
  | "delivery"
  | "hr"
  | "community"
  | "ondc";

interface BizAlert {
  id: string;
  type: AlertType;
  title: string;
  description: string;
  timestamp: Date;
  read: boolean;
  module: string;
  actionLabel?: string;
}

const ALERT_ICONS: Record<AlertType, string> = {
  order: "📦",
  review: "⭐",
  bid: "🏷️",
  inventory: "📊",
  promotion: "📣",
  delivery: "🚚",
  hr: "👥",
  community: "🏘️",
  ondc: "🌐",
};

const ALERT_COLORS: Record<AlertType, string> = {
  order: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  review:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  bid: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  inventory:
    "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  promotion:
    "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  delivery: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
  hr: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
  community:
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
  ondc: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300",
};

function seedAlerts(): BizAlert[] {
  const now = Date.now();
  const min = 60 * 1000;
  return [
    {
      id: "a1",
      type: "order",
      title: "New Order #1038 Placed",
      description: "Order for ₹1,240 placed by Ravi Kumar — 3 items",
      timestamp: new Date(now - 5 * min),
      read: false,
      module: "Shop",
      actionLabel: "View Order",
    },
    {
      id: "a2",
      type: "review",
      title: "New 5-Star Review",
      description:
        "Priya Sharma rated your Basmati Rice: 'Fresh and fragrant!'",
      timestamp: new Date(now - 18 * min),
      read: false,
      module: "Shop",
    },
    {
      id: "a3",
      type: "inventory",
      title: "Low Stock Alert",
      description: "Toor Dal (1 kg) has only 4 units left in inventory",
      timestamp: new Date(now - 32 * min),
      read: false,
      module: "POS",
      actionLabel: "Restock",
    },
    {
      id: "a4",
      type: "bid",
      title: "New Bid Received",
      description: "Arun Electrical bid ₹8,500 on Electrical Maintenance job",
      timestamp: new Date(now - 45 * min),
      read: true,
      module: "Community",
    },
    {
      id: "a5",
      type: "promotion",
      title: "Promotion Approved ✅",
      description:
        "Your Diwali Offer campaign is now live and reaching 2,400 users",
      timestamp: new Date(now - 58 * min),
      read: true,
      module: "Admin",
    },
    {
      id: "a6",
      type: "delivery",
      title: "Delivery Request Assigned",
      description: "Order #1035 assigned to Ramesh (Bike) — ETA 25 min",
      timestamp: new Date(now - 72 * min),
      read: true,
      module: "Delivery",
    },
    {
      id: "a7",
      type: "hr",
      title: "Leave Request Pending",
      description:
        "Suresh Kumar requested 2 days leave (Apr 5–6). Approval needed.",
      timestamp: new Date(now - 90 * min),
      read: false,
      module: "HR",
      actionLabel: "Review",
    },
    {
      id: "a8",
      type: "community",
      title: "Marketplace Activity",
      description:
        "3 new products listed in Society Marketplace linked to your business",
      timestamp: new Date(now - 110 * min),
      read: true,
      module: "Community",
    },
    {
      id: "a9",
      type: "ondc",
      title: "New ONDC Order #ONDC205",
      description: "ONDC order for ₹1,850 received via network — 2 items",
      timestamp: new Date(now - 12 * min),
      read: false,
      module: "ONDC",
      actionLabel: "View Order",
    },
    {
      id: "a10",
      type: "ondc",
      title: "ONDC Order Cancelled",
      description: "Order #ONDC198 cancelled by buyer. Reason: Change of mind",
      timestamp: new Date(now - 35 * min),
      read: false,
      module: "ONDC",
    },
    {
      id: "a11",
      type: "ondc",
      title: "ONDC Product Synced",
      description: "12 products successfully synced to ONDC network catalogue",
      timestamp: new Date(now - 65 * min),
      read: true,
      module: "ONDC",
    },
  ];
}

const AUTO_ALERTS: Omit<BizAlert, "id" | "timestamp" | "read">[] = [
  {
    type: "order",
    title: "New Order Placed",
    description: "Order #1042 for ₹850 from Meena Patel — 2 items",
    module: "Shop",
    actionLabel: "View",
  },
  {
    type: "inventory",
    title: "Low Stock: Basmati Rice",
    description: "Only 3 units remaining. Consider restocking soon.",
    module: "POS",
    actionLabel: "Restock",
  },
  {
    type: "review",
    title: "New Review Received",
    description: "Amit Singh left a 4-star review on Mustard Oil 1L",
    module: "Shop",
  },
  {
    type: "promotion",
    title: "Promotion Approved",
    description: "Your Eid Sale campaign is approved and going live",
    module: "Admin",
  },
  {
    type: "delivery",
    title: "New Delivery Request",
    description: "Order #1041 ready for pickup. Assign a rider.",
    module: "Delivery",
    actionLabel: "Assign",
  },
  {
    type: "bid",
    title: "New Bid on Auction",
    description: "Laptop Stand — current highest bid: ₹1,200 by Neha R.",
    module: "Shop",
  },
  {
    type: "hr",
    title: "Payroll Due This Week",
    description: "Monthly payroll for 4 employees is due on Apr 5",
    module: "HR",
    actionLabel: "Process",
  },
  {
    type: "community",
    title: "Vendor Bid Accepted",
    description: "Your bid for Plumbing Repair was accepted by Society Admin",
    module: "Community",
  },
  {
    type: "ondc",
    title: "New ONDC Order Received",
    description: "Order via ONDC network — confirm within 30 mins",
    module: "ONDC",
    actionLabel: "Accept",
  },
  {
    type: "ondc",
    title: "ONDC Catalogue Updated",
    description: "Your ONDC product catalogue has been synced successfully",
    module: "ONDC",
  },
  {
    type: "ondc",
    title: "ONDC Order Shipment Requested",
    description: "Buyer requesting shipment for ONDC Order #ONDC211",
    module: "ONDC",
    actionLabel: "Ship",
  },
];

function playAlertBeep() {
  try {
    const ctx = new (
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext
    )();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 880;
    osc.type = "sine";
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.2);
  } catch {
    // ignore audio errors
  }
}

function timeAgo(date: Date): string {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  return `${hours}h ago`;
}

const FILTER_TABS: { label: string; value: AlertType | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Orders", value: "order" },
  { label: "Reviews", value: "review" },
  { label: "Bids", value: "bid" },
  { label: "Inventory", value: "inventory" },
  { label: "Promotions", value: "promotion" },
  { label: "HR", value: "hr" },
  { label: "Deliveries", value: "delivery" },
  { label: "Community", value: "community" },
  { label: "ONDC", value: "ondc" },
];

const MODULE_TABS: { label: string; value: string }[] = [
  { label: "All Modules", value: "all" },
  { label: "Shop", value: "Shop" },
  { label: "POS", value: "POS" },
  { label: "Community", value: "Community" },
  { label: "Healthcare", value: "Healthcare" },
  { label: "Delivery", value: "Delivery" },
  { label: "HR", value: "HR" },
  { label: "Admin", value: "Admin" },
  { label: "ONDC", value: "ONDC" },
];

function BusinessAlertsTab({
  onUnreadChange,
}: { onUnreadChange: (count: number) => void }) {
  const [alerts, setAlerts] = useState<BizAlert[]>(() => seedAlerts());
  const [filter, setFilter] = useState<AlertType | "all">("all");
  const [moduleFilter, setModuleFilter] = useState<string>("all");
  const [soundOn, setSoundOn] = useState(true);
  const [, forceRender] = useState(0);

  // Bubble unread count up to parent
  React.useEffect(() => {
    const unread = alerts.filter((a) => !a.read).length;
    onUnreadChange(unread);
    localStorage.setItem("biz_alerts_unread", String(unread));
  }, [alerts, onUnreadChange]);

  // Auto-generate new alerts every 10s
  React.useEffect(() => {
    const timer = setInterval(() => {
      const template =
        AUTO_ALERTS[Math.floor(Math.random() * AUTO_ALERTS.length)];
      const newAlert: BizAlert = {
        ...template,
        id: `a-${Date.now()}`,
        timestamp: new Date(),
        read: false,
      };
      setAlerts((prev) => [newAlert, ...prev].slice(0, 50));
      if (soundOn) playAlertBeep();
    }, 10000);
    return () => clearInterval(timer);
  }, [soundOn]);

  // Re-render time-ago labels every 30s
  React.useEffect(() => {
    const t = setInterval(() => forceRender((n) => n + 1), 30000);
    return () => clearInterval(t);
  }, []);

  const markRead = (id: string) => {
    setAlerts((prev) =>
      prev.map((a) => (a.id === id ? { ...a, read: true } : a)),
    );
  };

  const markAllRead = () => {
    setAlerts((prev) => prev.map((a) => ({ ...a, read: true })));
  };

  const filtered = alerts
    .filter((a) => filter === "all" || a.type === filter)
    .filter((a) => moduleFilter === "all" || a.module === moduleFilter);

  const countByType = (type: AlertType | "all") => {
    const list =
      type === "all" ? alerts : alerts.filter((a) => a.type === type);
    return list.filter((a) => !a.read).length;
  };

  return (
    <div className="space-y-4" data-ocid="business.alerts.panel">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            Business Alerts
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Real-time notifications from all your business modules
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSoundOn((s) => !s)}
            title={soundOn ? "Mute alert sound" : "Enable alert sound"}
            className="text-lg p-1.5 rounded-md hover:bg-muted transition-colors"
            data-ocid="business.alerts.toggle"
          >
            {soundOn ? "🔔" : "🔕"}
          </button>
          <Button
            variant="outline"
            size="sm"
            onClick={markAllRead}
            data-ocid="business.alerts.button"
          >
            Mark All Read
          </Button>
        </div>
      </div>

      {/* Filter pills - By Type */}
      <div className="space-y-2">
        <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">
          By Type
        </p>
        <div className="flex flex-wrap gap-1.5" data-ocid="business.alerts.tab">
          {FILTER_TABS.map(({ label, value }) => {
            const unread = countByType(value);
            return (
              <button
                type="button"
                key={value}
                onClick={() => setFilter(value)}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-colors border ${
                  filter === value
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-muted-foreground border-border hover:bg-muted"
                }`}
              >
                {label}
                {unread > 0 && (
                  <span className="bg-red-500 text-white text-[9px] rounded-full w-3.5 h-3.5 flex items-center justify-center font-bold">
                    {unread > 9 ? "9+" : unread}
                  </span>
                )}
              </button>
            );
          })}
        </div>
        <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider pt-1">
          By Module
        </p>
        <div className="flex flex-wrap gap-1.5">
          {MODULE_TABS.map(({ label, value }) => (
            <button
              type="button"
              key={value}
              onClick={() => setModuleFilter(value)}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-colors border ${
                moduleFilter === value
                  ? "bg-secondary text-secondary-foreground border-secondary"
                  : "bg-background text-muted-foreground border-border hover:bg-muted"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Alert list */}
      <ScrollArea className="h-[500px] pr-2">
        {filtered.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center py-16 text-muted-foreground"
            data-ocid="business.alerts.empty_state"
          >
            <span className="text-4xl mb-3">🔔</span>
            <p className="text-sm font-medium">No alerts yet.</p>
            <p className="text-xs mt-1">
              Your business activity will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {filtered.map((alert, idx) => (
              <div
                key={alert.id}
                onClick={() => markRead(alert.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") markRead(alert.id);
                }}
                data-ocid={`business.alerts.item.${idx + 1}`}
                className={`flex gap-3 p-3 rounded-lg border cursor-pointer transition-all hover:bg-muted/50 ${
                  !alert.read
                    ? "border-l-4 border-l-primary border-border bg-primary/5"
                    : "border-border"
                }`}
              >
                <div className="text-xl shrink-0 mt-0.5">
                  {ALERT_ICONS[alert.type]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-sm font-medium text-foreground">
                        {alert.title}
                      </span>
                      {!alert.read && (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      )}
                    </div>
                    <span className="text-[11px] text-muted-foreground shrink-0">
                      {timeAgo(alert.timestamp)}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                    {alert.description}
                  </p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${ALERT_COLORS[alert.type]}`}
                    >
                      {alert.type.charAt(0).toUpperCase() + alert.type.slice(1)}
                    </span>
                    <span className="text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded-full">
                      {alert.module}
                    </span>
                    {alert.actionLabel && (
                      <button
                        type="button"
                        className="text-[10px] text-primary font-medium hover:underline ml-auto"
                      >
                        {alert.actionLabel} →
                      </button>
                    )}
                    {!alert.read && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          markRead(alert.id);
                        }}
                        className="text-[10px] text-muted-foreground hover:text-foreground ml-auto"
                        data-ocid={`business.alerts.save_button.${idx + 1}`}
                      >
                        Mark Read
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </ScrollArea>
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
  const [unreadAlertCount, setUnreadAlertCount] = useState(0);

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
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-display font-bold text-foreground">
              Business Dashboard
            </h1>
            <BusinessPrivacyBadge storageKey="ic_business_privacy" />
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Manage your storefront, tables, orders and payments
          </p>
        </div>
        <SharePageButton
          url={`${typeof window !== "undefined" ? window.location.origin : ""}?page=business`}
          label="Business Page"
          storageKey="ic_business_privacy"
          data-ocid="business.share.button"
        />
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
            🏪 Smart POS
          </TabsTrigger>
          <TabsTrigger value="csv-import" data-ocid="business.csv_import.tab">
            CSV Import
          </TabsTrigger>
          <TabsTrigger value="discover-claim" data-ocid="business.discover.tab">
            🔍 Discover & Claim
          </TabsTrigger>
          <TabsTrigger value="biz-modules" data-ocid="business.biz_modules.tab">
            🧩 Modules
          </TabsTrigger>
          <TabsTrigger
            value="vendor-orders"
            data-ocid="business.vendor_orders.tab"
          >
            📦 Vendor Orders
          </TabsTrigger>
          <TabsTrigger
            value="courier-panel"
            data-ocid="business.courier_panel.tab"
          >
            🚚 Courier Panel
          </TabsTrigger>
          <TabsTrigger
            value="delivery-partners"
            data-ocid="business.delivery_partners.tab"
          >
            🚚 Delivery Partners
          </TabsTrigger>
          <TabsTrigger value="hr-payroll" data-ocid="business.hr_payroll.tab">
            👥 HR &amp; Payroll
          </TabsTrigger>
          <TabsTrigger
            value="business-alerts"
            data-ocid="business.alerts.tab"
            className="relative"
          >
            🔔 Business Alerts
            {unreadAlertCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                {unreadAlertCount > 9 ? "9+" : unreadAlertCount}
              </span>
            )}
          </TabsTrigger>
          <TabsTrigger value="ondc" data-ocid="business.ondc.tab">
            🌐 ONDC
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
        {/* ── Smart POS ── */}
        <TabsContent value="pos-products" className="mt-6 space-y-6">
          <SmartPOSPanel />
        </TabsContent>

        <TabsContent value="csv-import" className="mt-6 space-y-6">
          <BusinessCSVImport />
        </TabsContent>

        {/* ── Discover & Claim ── */}
        <TabsContent value="discover-claim" className="mt-6 space-y-4">
          <DiscoverClaimTab />
        </TabsContent>
        <TabsContent value="biz-modules" className="mt-6 space-y-4">
          <BizModulesTab />
        </TabsContent>
        <TabsContent value="vendor-orders" className="mt-6 space-y-4">
          <VendorOrdersPanel />
        </TabsContent>
        <TabsContent value="courier-panel" className="mt-6 space-y-4">
          <CourierDispatchBusinessPanel />
        </TabsContent>
        <TabsContent value="delivery-partners" className="mt-6">
          <DeliveryPartnersPanel mode="business" />
        </TabsContent>
        <TabsContent value="hr-payroll" className="mt-6 space-y-4">
          <HRPayrollTab />
        </TabsContent>
        <TabsContent value="business-alerts" className="mt-6">
          <BusinessAlertsTab onUnreadChange={setUnreadAlertCount} />
        </TabsContent>
        <TabsContent value="ondc" className="mt-6 space-y-4">
          <ONDCVendorPanel />
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

// ─── Trust Score Badge ───────────────────────────────────────────────────────
function TrustScoreBadge({
  biz,
}: {
  biz: { phone?: string; location?: string; category?: string; type?: string };
}) {
  let score = 0;
  if (biz.phone) score += 10;
  if (biz.location) score += 10;
  score += 20; // assume reviews > 3 stars for registered businesses
  score += 30; // registered via Family Tree
  score += 10; // listing age
  score += 20; // no complaints by default

  let label = "";
  let cls = "";
  if (score >= 80) {
    label = "✅ Verified & Trusted";
    cls =
      "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/30";
  } else if (score >= 60) {
    label = "🔵 Generally Trusted";
    cls = "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/30";
  } else if (score >= 40) {
    label = "⚠️ Use Caution";
    cls =
      "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/30";
  } else {
    label = "🔴 Risky";
    cls = "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/30";
  }

  return (
    <span
      className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${cls}`}
      title={`Trust Score: ${score}/100`}
    >
      {label}
    </span>
  );
}

const BARCODE_WIDTHS = [
  1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1, 1, 3, 1, 2, 1, 2, 3, 1, 1, 2, 1, 1, 3, 2,
  1, 1, 2, 3, 1, 2, 1, 1, 3, 1, 2, 2, 1, 3,
] as const;
const BARCODE_HEIGHTS = [
  60, 100, 80, 90, 70, 100, 85, 60, 95, 75, 100, 65, 90, 80, 100, 70, 85, 100,
  60, 90, 75, 100, 80, 65, 90, 100, 70, 85, 95, 60, 100, 75, 85, 100, 60, 90,
  80, 70, 95, 100,
] as const;
// ─── SharePageButton & PrivacyBadge ─────────────────────────────────────────

type PrivacyLevel = "Public" | "Restricted" | "Private";

function BusinessPrivacyBadge({ storageKey }: { storageKey: string }) {
  const privacy =
    (localStorage.getItem(storageKey) as PrivacyLevel) || "Private";
  const colors: Record<PrivacyLevel, string> = {
    Public: "bg-green-500/15 text-green-600 border-green-500/30",
    Restricted: "bg-amber-500/15 text-amber-600 border-amber-500/30",
    Private: "bg-muted text-muted-foreground border-border",
  };
  return (
    <Badge className={`text-[10px] font-label gap-1 ${colors[privacy]}`}>
      <Lock size={9} />
      {privacy}
    </Badge>
  );
}

function SharePageButton({
  url,
  label,
  storageKey,
}: {
  url: string;
  label: string;
  storageKey: string;
}) {
  const [privacy, setPrivacy] = useState<PrivacyLevel>(
    () => (localStorage.getItem(storageKey) as PrivacyLevel) || "Private",
  );
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  const handlePrivacyChange = (val: PrivacyLevel) => {
    setPrivacy(val);
    localStorage.setItem(storageKey, val);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 font-label"
          data-ocid="business.share.button"
        >
          <Share2 size={14} />
          Share
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-80 p-4 space-y-4"
        align="end"
        data-ocid="business.share.popover"
      >
        <div>
          <p className="text-sm font-semibold text-foreground">Share {label}</p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Share this link to let others view your {label}
          </p>
        </div>
        <div className="space-y-1">
          <Label className="text-xs">Page URL</Label>
          <div className="flex gap-2">
            <Input value={url} readOnly className="text-xs h-8 flex-1" />
            <Button
              size="sm"
              variant="outline"
              className="h-8 px-2"
              onClick={copyLink}
            >
              {copied ? (
                <CheckCircle2 size={13} className="text-green-500" />
              ) : (
                <Copy size={13} />
              )}
            </Button>
          </div>
          {copied && <p className="text-xs text-green-600">Copied!</p>}
        </div>
        <div className="space-y-2">
          <Label className="text-xs">Visibility</Label>
          <RadioGroup
            value={privacy}
            onValueChange={(v) => handlePrivacyChange(v as PrivacyLevel)}
            className="space-y-1"
          >
            {(["Public", "Restricted", "Private"] as PrivacyLevel[]).map(
              (opt) => (
                <div key={opt} className="flex items-center gap-2">
                  <RadioGroupItem value={opt} id={`biz-privacy-${opt}`} />
                  <Label
                    htmlFor={`biz-privacy-${opt}`}
                    className="text-xs cursor-pointer"
                  >
                    {opt === "Public"
                      ? "🌍 Public — anyone with the link can view"
                      : opt === "Restricted"
                        ? "🔒 Restricted — only approved members"
                        : "🔐 Private — only you"}
                  </Label>
                </div>
              ),
            )}
          </RadioGroup>
        </div>
      </PopoverContent>
    </Popover>
  );
}

// ─── POSProductsTab ──────────────────────────────────────────────────────────

const POS_CATEGORIES = [
  "Food & Beverages",
  "Electronics",
  "Fashion",
  "Home Services",
  "Healthcare",
  "Books & Media",
  "Sports",
  "Beauty & Personal Care",
  "Automotive",
  "Agriculture",
  "Other",
];

const VARIANT_PRESETS: Record<string, string[]> = {
  Fashion: ["XS", "S", "M", "L", "XL", "XXL"],
  Electronics: ["64GB", "128GB", "256GB"],
  "Food & Beverages": ["Small", "Medium", "Large"],
  Healthcare: ["30 Tabs", "60 Tabs", "90 Tabs"],
  "Home Services": ["Basic", "Standard", "Premium"],
};

function POSProductsTab() {
  const [products, setProducts] = useState(() => getGlobalProducts());
  const [showForm, setShowForm] = useState<"product" | "service" | null>(null);
  const [form, setForm] = useState({
    name: "",
    category: "Food & Beverages",
    price: "",
    stock: "",
    description: "",
    videoUrl: "",
  });
  const [imagePreview, setImagePreview] = useState<string>("");
  const [variants, setVariants] = useState<
    { label: string; price: string; stock: string }[]
  >([]);

  // Refresh when products change
  useState(() => {
    const handler = () => setProducts(getGlobalProducts());
    window.addEventListener("globalProductsUpdated", handler);
    return () => window.removeEventListener("globalProductsUpdated", handler);
  });

  const detectVariants = (category: string) => {
    const presets = VARIANT_PRESETS[category] || [];
    setVariants(
      presets.map((label) => ({ label, price: form.price, stock: "10" })),
    );
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setImagePreview(ev.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    if (!form.name.trim() || !form.price) {
      toast.error("Name and price are required");
      return;
    }
    addGlobalProduct({
      name: form.name,
      description: form.description,
      price: Number.parseFloat(form.price) || 0,
      category: form.category,
      module: "POS",
      imageUrl: imagePreview || undefined,
      videoUrl: form.videoUrl || undefined,
      variantDetails: variants.map((v) => ({
        label: v.label,
        price: Number.parseFloat(v.price) || Number.parseFloat(form.price) || 0,
        stock: Number.parseInt(v.stock) || 0,
      })),
      isService: showForm === "service",
      status: "active",
    });
    toast.success(
      `${showForm === "service" ? "Service" : "Product"} "${form.name}" added to Shop`,
    );
    setForm({
      name: "",
      category: "Food & Beverages",
      price: "",
      stock: "",
      description: "",
      videoUrl: "",
    });
    setImagePreview("");
    setVariants([]);
    setShowForm(null);
    setProducts(getGlobalProducts());
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Button
          size="sm"
          className="gap-1.5 font-label"
          onClick={() => setShowForm("product")}
          data-ocid="pos.add_product.button"
        >
          <Plus size={14} /> Add Product
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="gap-1.5 font-label"
          onClick={() => setShowForm("service")}
          data-ocid="pos.add_service.button"
        >
          <Plus size={14} /> Add Service
        </Button>
      </div>

      {showForm && (
        <Card className="rounded-xl border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">
              {showForm === "product" ? "New Product" : "New Service"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 space-y-1">
                <Label className="text-xs">Name *</Label>
                <Input
                  placeholder="Product name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  data-ocid="pos.product.name_input"
                />
              </div>
              <div className="space-y-1">
                <Label className="text-xs">Category</Label>
                <Select
                  value={form.category}
                  onValueChange={(v) => {
                    setForm((p) => ({ ...p, category: v }));
                    detectVariants(v);
                  }}
                >
                  <SelectTrigger
                    className="text-xs h-8"
                    data-ocid="pos.product.category_select"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {POS_CATEGORIES.map((c) => (
                      <SelectItem key={c} value={c} className="text-xs">
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <Label className="text-xs">Price (₹) *</Label>
                <Input
                  type="number"
                  placeholder="0"
                  value={form.price}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, price: e.target.value }))
                  }
                  data-ocid="pos.product.price_input"
                />
              </div>
              <div className="col-span-2 space-y-1">
                <Label className="text-xs">Description</Label>
                <Textarea
                  placeholder="Product description..."
                  value={form.description}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, description: e.target.value }))
                  }
                  className="text-xs h-20 resize-none"
                  data-ocid="pos.product.description_input"
                />
              </div>
              <div className="space-y-1">
                <Label className="text-xs">Image</Label>
                <div className="flex items-center gap-2">
                  <input
                    type="file"
                    accept="image/*"
                    id="pos-img-upload"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="gap-1.5 text-xs h-8"
                    onClick={() =>
                      document.getElementById("pos-img-upload")?.click()
                    }
                    data-ocid="pos.product.upload_button"
                  >
                    <Upload size={12} /> Upload
                  </Button>
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="preview"
                      className="h-8 w-8 rounded object-cover"
                    />
                  )}
                </div>
              </div>
              <div className="space-y-1">
                <Label className="text-xs">Video Link</Label>
                <Input
                  placeholder="YouTube / Vimeo URL"
                  value={form.videoUrl}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, videoUrl: e.target.value }))
                  }
                  className="text-xs h-8"
                />
              </div>
            </div>

            {variants.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-xs">Variants (auto-detected)</Label>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-6 text-xs"
                    onClick={() =>
                      setVariants((v) => [
                        ...v,
                        { label: "", price: form.price, stock: "10" },
                      ])
                    }
                  >
                    + Add
                  </Button>
                </div>
                <div className="space-y-1.5">
                  {variants.map((v, i) => (
                    <div
                      key={`variant-${i}-${v.label}`}
                      className="flex gap-2 items-center"
                    >
                      <Input
                        value={v.label}
                        onChange={(e) =>
                          setVariants((prev) =>
                            prev.map((x, j) =>
                              j === i ? { ...x, label: e.target.value } : x,
                            ),
                          )
                        }
                        placeholder="Label"
                        className="text-xs h-7 flex-1"
                      />
                      <Input
                        value={v.price}
                        onChange={(e) =>
                          setVariants((prev) =>
                            prev.map((x, j) =>
                              j === i ? { ...x, price: e.target.value } : x,
                            ),
                          )
                        }
                        placeholder="₹"
                        type="number"
                        className="text-xs h-7 w-20"
                      />
                      <Input
                        value={v.stock}
                        onChange={(e) =>
                          setVariants((prev) =>
                            prev.map((x, j) =>
                              j === i ? { ...x, stock: e.target.value } : x,
                            ),
                          )
                        }
                        placeholder="Qty"
                        type="number"
                        className="text-xs h-7 w-16"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-7 w-7 p-0 text-destructive"
                        onClick={() =>
                          setVariants((prev) => prev.filter((_, j) => j !== i))
                        }
                      >
                        <X size={12} />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-2 pt-1">
              <Button
                size="sm"
                className="font-label"
                onClick={handleSave}
                data-ocid="pos.product.save_button"
              >
                Save & Add to Shop
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setShowForm(null);
                  setImagePreview("");
                  setVariants([]);
                }}
                data-ocid="pos.product.cancel_button"
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Product List */}
      <div className="space-y-2">
        <p className="text-xs font-medium text-muted-foreground">
          {products.length} products in your store
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {products.slice(0, 12).map((p, i) => (
            <Card
              key={p.id}
              className="rounded-xl border-border"
              data-ocid={`pos.products.item.${i + 1}`}
            >
              <CardContent className="p-3 flex gap-3">
                {p.imageUrl ? (
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                    <Sparkles size={16} className="text-muted-foreground" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{p.name}</p>
                  <p className="text-xs text-muted-foreground">{p.category}</p>
                  <p className="text-xs font-semibold text-primary mt-0.5">
                    ₹{p.price}
                  </p>
                  {p.isService && (
                    <Badge className="text-[9px] mt-1 bg-violet-500/15 text-violet-600 border-violet-500/30">
                      Service
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {products.length === 0 && (
          <div
            className="text-center py-8 text-muted-foreground text-sm"
            data-ocid="pos.products.empty_state"
          >
            No products yet. Click "Add Product" to get started.
          </div>
        )}
      </div>
    </div>
  );
}

// ─── SmartPOSPanel ────────────────────────────────────────────────────────────
type POSCartItem = {
  id: string;
  name: string;
  qty: number;
  price: number;
  discount: number;
};
type Invoice = {
  id: string;
  customer: string;
  date: string;
  amount: number;
  status: "Paid" | "Unpaid" | "Partial";
  items: POSCartItem[];
};
type LedgerEntry = {
  id: string;
  date: string;
  description: string;
  type: "Dr" | "Cr";
  amount: number;
};
type BariKhataEntry = {
  id: string;
  customer: string;
  phone: string;
  creditGiven: number;
  paid: number;
};

function SmartPOSPanel() {
  const allProducts = getGlobalProducts();

  // Billing state
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<POSCartItem[]>([]);
  const [taxRate, setTaxRate] = useState(18);
  const [gstEnabled, setGstEnabled] = useState(true);
  const [invoiceCustomer, setInvoiceCustomer] = useState("");

  // Invoices
  const [invoices, setInvoices] = useState<Invoice[]>(() =>
    JSON.parse(localStorage.getItem("ic_pos_invoices") || "[]"),
  );

  // Ledger
  const [ledger, setLedger] = useState<LedgerEntry[]>(() =>
    JSON.parse(localStorage.getItem("ic_pos_ledger") || "[]"),
  );
  const [ledgerForm, setLedgerForm] = useState({
    description: "",
    type: "Cr" as "Dr" | "Cr",
    amount: "",
  });

  // Bari Khata
  const [bariKhata, setBariKhata] = useState<BariKhataEntry[]>(() =>
    JSON.parse(localStorage.getItem("ic_pos_bari_khata") || "[]"),
  );
  const [bkForm, setBkForm] = useState({ customer: "", phone: "", amount: "" });
  const [bkPayForm, setBkPayForm] = useState<Record<string, string>>({});

  // Online store
  const [storeActive, setStoreActive] = useState(true);

  const filtered = allProducts.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  const addToCart = (p: {
    id: number | string;
    name: string;
    price: number;
  }) => {
    setCart((prev) => {
      const ex = prev.find((c) => c.id === String(p.id));
      if (ex)
        return prev.map((c) =>
          c.id === String(p.id) ? { ...c, qty: c.qty + 1 } : c,
        );
      return [
        ...prev,
        { id: String(p.id), name: p.name, qty: 1, price: p.price, discount: 0 },
      ];
    });
  };

  const subtotal = cart.reduce(
    (s, c) => s + c.price * c.qty * (1 - c.discount / 100),
    0,
  );
  const tax = gstEnabled ? (subtotal * taxRate) / 100 : 0;
  const grand = subtotal + tax;

  const printReceipt = () => {
    const w = window.open("", "_blank", "width=400,height=600");
    if (!w) return;
    w.document.write(`<html><head><title>Receipt</title><style>
      body{font-family:monospace;font-size:12px;width:80mm;margin:0;padding:10px}
      h2{text-align:center;margin:0 0 4px}
      .line{display:flex;justify-content:space-between}
      .divider{border-top:1px dashed #000;margin:6px 0}
      .footer{text-align:center;margin-top:8px;font-size:10px}
      @media print{body{margin:0}}
    </style></head><body>
    <h2>IndyaCentral POS</h2>
    <p style="text-align:center;font-size:10px;margin:0">${new Date().toLocaleString()}</p>
    <div class="divider"></div>
    ${cart.map((c) => `<div class="line"><span>${c.name} x${c.qty}</span><span>₹${(c.price * c.qty * (1 - c.discount / 100)).toFixed(2)}</span></div>`).join("\n")}
    <div class="divider"></div>
    <div class="line"><span>Subtotal</span><span>₹${subtotal.toFixed(2)}</span></div>
    ${gstEnabled ? `<div class="line"><span>GST ${taxRate}%</span><span>₹${tax.toFixed(2)}</span></div>` : ""}
    <div class="line" style="font-weight:bold"><span>TOTAL</span><span>₹${grand.toFixed(2)}</span></div>
    <div class="footer">Thank You! Visit Again 🙏</div>
    </body></html>`);
    w.document.close();
    w.print();
  };

  const saveInvoice = () => {
    if (!cart.length) {
      toast.error("Cart is empty");
      return;
    }
    const inv: Invoice = {
      id: `INV-${Date.now()}`,
      customer: invoiceCustomer || "Walk-in Customer",
      date: new Date().toLocaleDateString(),
      amount: grand,
      status: "Unpaid",
      items: [...cart],
    };
    const updated = [inv, ...invoices];
    setInvoices(updated);
    localStorage.setItem("ic_pos_invoices", JSON.stringify(updated));
    setCart([]);
    toast.success(`Invoice ${inv.id} saved`);
  };

  const addLedgerEntry = () => {
    if (!ledgerForm.description || !ledgerForm.amount) {
      toast.error("Fill all fields");
      return;
    }
    const entry: LedgerEntry = {
      id: `L${Date.now()}`,
      date: new Date().toLocaleDateString(),
      description: ledgerForm.description,
      type: ledgerForm.type,
      amount: Number(ledgerForm.amount),
    };
    const updated = [entry, ...ledger];
    setLedger(updated);
    localStorage.setItem("ic_pos_ledger", JSON.stringify(updated));
    setLedgerForm({ description: "", type: "Cr", amount: "" });
    toast.success("Entry added");
  };

  // Running balance
  const withBalance: (LedgerEntry & { balance: number })[] = [];
  let runBalance = 0;
  for (const e of [...ledger].reverse()) {
    runBalance += e.type === "Cr" ? e.amount : -e.amount;
    withBalance.push({ ...e, balance: runBalance });
  }
  withBalance.reverse();

  const addBariKhata = () => {
    if (!bkForm.customer || !bkForm.amount) {
      toast.error("Fill fields");
      return;
    }
    const entry: BariKhataEntry = {
      id: `BK${Date.now()}`,
      customer: bkForm.customer,
      phone: bkForm.phone,
      creditGiven: Number(bkForm.amount),
      paid: 0,
    };
    const updated = [entry, ...bariKhata];
    setBariKhata(updated);
    localStorage.setItem("ic_pos_bari_khata", JSON.stringify(updated));
    setBkForm({ customer: "", phone: "", amount: "" });
    toast.success("Credit entry added");
  };

  const recordPayment = (id: string) => {
    const amt = Number(bkPayForm[id] || 0);
    if (!amt) {
      toast.error("Enter amount");
      return;
    }
    const updated = bariKhata.map((e) =>
      e.id === id ? { ...e, paid: Math.min(e.paid + amt, e.creditGiven) } : e,
    );
    setBariKhata(updated);
    localStorage.setItem("ic_pos_bari_khata", JSON.stringify(updated));
    setBkPayForm((p) => ({ ...p, [id]: "" }));
    toast.success("Payment recorded");
  };

  const exportCSV = () => {
    const rows = [["Date", "Description", "Dr/Cr", "Amount", "Balance"]];
    for (const e of withBalance)
      rows.push([
        e.date,
        e.description,
        e.type,
        String(e.amount),
        String(e.balance),
      ]);
    const csv = rows.map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "financial_report.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  // Financial report data
  const totalRevenue = invoices.reduce(
    (s, i) => s + (i.status !== "Unpaid" ? i.amount : 0),
    0,
  );
  const totalExpenses = ledger
    .filter((e) => e.type === "Dr")
    .reduce((s, e) => s + e.amount, 0);
  const netProfit = totalRevenue - totalExpenses;

  // Last 7 days mock sales for bar chart
  const last7 = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    return {
      day: d.toLocaleDateString("en", { weekday: "short" }),
      amount: Math.floor(Math.random() * 8000 + 1000),
    };
  });
  const maxSale = Math.max(...last7.map((d) => d.amount));

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-display font-bold text-foreground">
          🏪 Smart POS
        </h2>
        <p className="text-xs text-muted-foreground mt-1">
          Smart billing, invoices, ledger, bari khata, barcodes, reports &
          online store
        </p>
      </div>
      <Tabs defaultValue="products">
        <TabsList className="flex flex-wrap gap-1 h-auto mb-4">
          <TabsTrigger
            value="products"
            className="text-xs"
            data-ocid="pos.products.tab"
          >
            📦 Products
          </TabsTrigger>
          <TabsTrigger
            value="billing"
            className="text-xs"
            data-ocid="pos.billing.tab"
          >
            💳 Billing
          </TabsTrigger>
          <TabsTrigger
            value="invoices"
            className="text-xs"
            data-ocid="pos.invoices.tab"
          >
            📄 Invoices
          </TabsTrigger>
          <TabsTrigger
            value="ledger"
            className="text-xs"
            data-ocid="pos.ledger.tab"
          >
            📒 Ledger
          </TabsTrigger>
          <TabsTrigger
            value="bari-khata"
            className="text-xs"
            data-ocid="pos.bari_khata.tab"
          >
            📖 Bari Khata
          </TabsTrigger>
          <TabsTrigger
            value="barcodes"
            className="text-xs"
            data-ocid="pos.barcodes.tab"
          >
            🔲 Barcodes
          </TabsTrigger>
          <TabsTrigger
            value="reports"
            className="text-xs"
            data-ocid="pos.reports.tab"
          >
            📊 Reports
          </TabsTrigger>
          <TabsTrigger
            value="online-store"
            className="text-xs"
            data-ocid="pos.online_store.tab"
          >
            🌐 Online Store
          </TabsTrigger>
          <TabsTrigger
            value="customers"
            className="text-xs"
            data-ocid="pos.customers.tab"
          >
            👥 Customers
          </TabsTrigger>
        </TabsList>

        {/* ── PRODUCTS ── */}
        <TabsContent value="products" className="mt-0 space-y-4">
          <POSProductsTab />
        </TabsContent>

        {/* ── BILLING ── */}
        <TabsContent value="billing" className="mt-0 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="rounded-xl border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Product Search</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Input
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  data-ocid="pos.billing.search_input"
                />
                <div className="space-y-1 max-h-48 overflow-y-auto">
                  {filtered.slice(0, 20).map((p) => (
                    <button
                      type="button"
                      key={p.id}
                      className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-muted/50 cursor-pointer"
                      onClick={() => addToCart(p)}
                    >
                      <span className="text-xs">{p.name}</span>
                      <span className="text-xs font-semibold text-primary">
                        ₹{p.price}
                      </span>
                    </button>
                  ))}
                  {filtered.length === 0 && (
                    <p className="text-xs text-muted-foreground text-center py-4">
                      No products. Add via Family Tree → Business
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Cart</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {cart.length === 0 ? (
                  <p className="text-xs text-muted-foreground text-center py-6">
                    Cart is empty
                  </p>
                ) : (
                  <div className="space-y-2">
                    {cart.map((item, idx) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-2 text-xs"
                        data-ocid={`pos.cart.item.${idx + 1}`}
                      >
                        <span className="flex-1 truncate">{item.name}</span>
                        <Input
                          type="number"
                          min={1}
                          value={item.qty}
                          className="w-12 h-7 text-xs px-1"
                          onChange={(e) =>
                            setCart((p) =>
                              p.map((c) =>
                                c.id === item.id
                                  ? { ...c, qty: Number(e.target.value) }
                                  : c,
                              ),
                            )
                          }
                        />
                        <Input
                          type="number"
                          min={0}
                          max={100}
                          value={item.discount}
                          className="w-14 h-7 text-xs px-1"
                          placeholder="Disc%"
                          onChange={(e) =>
                            setCart((p) =>
                              p.map((c) =>
                                c.id === item.id
                                  ? { ...c, discount: Number(e.target.value) }
                                  : c,
                              ),
                            )
                          }
                        />
                        <span className="w-16 text-right font-semibold">
                          ₹
                          {(
                            item.price *
                            item.qty *
                            (1 - item.discount / 100)
                          ).toFixed(0)}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setCart((p) => p.filter((c) => c.id !== item.id))
                          }
                          className="text-destructive hover:opacity-70"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                <Separator />
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Switch
                        checked={gstEnabled}
                        onCheckedChange={setGstEnabled}
                        className="scale-75"
                      />
                      <span>GST</span>
                      <Input
                        type="number"
                        value={taxRate}
                        onChange={(e) => setTaxRate(Number(e.target.value))}
                        className="w-12 h-6 text-xs px-1"
                      />
                      <span>%</span>
                    </div>
                    <span>₹{tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-sm">
                    <span>Grand Total</span>
                    <span className="text-primary">₹{grand.toFixed(2)}</span>
                  </div>
                </div>
                <Input
                  placeholder="Customer name (optional)"
                  value={invoiceCustomer}
                  onChange={(e) => setInvoiceCustomer(e.target.value)}
                  className="text-xs h-8"
                  data-ocid="pos.billing.input"
                />
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1"
                    onClick={printReceipt}
                    data-ocid="pos.billing.primary_button"
                  >
                    🖨️ Print Receipt
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={saveInvoice}
                    data-ocid="pos.billing.save_button"
                  >
                    💾 Save Invoice
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* ── INVOICES ── */}
        <TabsContent value="invoices" className="mt-0">
          <Card className="rounded-xl border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">
                Saved Invoices ({invoices.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              {invoices.length === 0 ? (
                <p className="text-xs text-muted-foreground text-center py-8">
                  No invoices yet. Create from Billing tab.
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 pr-4">Invoice #</th>
                        <th className="text-left py-2 pr-4">Customer</th>
                        <th className="text-left py-2 pr-4">Date</th>
                        <th className="text-right py-2 pr-4">Amount</th>
                        <th className="text-center py-2 pr-4">Status</th>
                        <th className="text-center py-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoices.map((inv, idx) => (
                        <tr
                          key={inv.id}
                          className="border-b border-border/30 hover:bg-muted/30"
                          data-ocid={`pos.invoice.item.${idx + 1}`}
                        >
                          <td className="py-2 pr-4 font-mono">{inv.id}</td>
                          <td className="py-2 pr-4">{inv.customer}</td>
                          <td className="py-2 pr-4">{inv.date}</td>
                          <td className="py-2 pr-4 text-right font-semibold">
                            ₹{inv.amount.toFixed(2)}
                          </td>
                          <td className="py-2 pr-4 text-center">
                            <Badge
                              className={
                                inv.status === "Paid"
                                  ? "bg-green-500/15 text-green-600 border-green-500/30"
                                  : inv.status === "Partial"
                                    ? "bg-yellow-500/15 text-yellow-600 border-yellow-500/30"
                                    : "bg-red-500/15 text-red-600 border-red-500/30"
                              }
                            >
                              {inv.status}
                            </Badge>
                          </td>
                          <td className="py-2 text-center">
                            <div className="flex gap-1 justify-center">
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-6 text-[10px] px-2"
                                onClick={() => {
                                  const updated = invoices.map((i) =>
                                    i.id === inv.id
                                      ? { ...i, status: "Paid" as const }
                                      : i,
                                  );
                                  setInvoices(updated);
                                  localStorage.setItem(
                                    "ic_pos_invoices",
                                    JSON.stringify(updated),
                                  );
                                  toast.success("Marked as Paid");
                                }}
                                data-ocid={`pos.invoice.edit_button.${idx + 1}`}
                              >
                                Mark Paid
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-6 text-[10px] px-2"
                                onClick={() => window.print()}
                                data-ocid={`pos.invoice.secondary_button.${idx + 1}`}
                              >
                                🖨️
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* ── LEDGER ── */}
        <TabsContent value="ledger" className="mt-0 space-y-4">
          <Card className="rounded-xl border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Add Ledger Entry</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                <Input
                  placeholder="Description"
                  value={ledgerForm.description}
                  onChange={(e) =>
                    setLedgerForm((p) => ({
                      ...p,
                      description: e.target.value,
                    }))
                  }
                  className="sm:col-span-2 text-xs"
                  data-ocid="pos.ledger.input"
                />
                <Select
                  value={ledgerForm.type}
                  onValueChange={(v) =>
                    setLedgerForm((p) => ({ ...p, type: v as "Dr" | "Cr" }))
                  }
                >
                  <SelectTrigger
                    className="text-xs h-9"
                    data-ocid="pos.ledger.select"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Cr">Credit (Cr)</SelectItem>
                    <SelectItem value="Dr">Debit (Dr)</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex gap-2">
                  <Input
                    type="number"
                    placeholder="Amount"
                    value={ledgerForm.amount}
                    onChange={(e) =>
                      setLedgerForm((p) => ({ ...p, amount: e.target.value }))
                    }
                    className="text-xs"
                  />
                  <Button
                    size="sm"
                    onClick={addLedgerEntry}
                    data-ocid="pos.ledger.primary_button"
                  >
                    Add
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-xl border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Ledger</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 pr-3">Date</th>
                      <th className="text-left py-2 pr-3">Description</th>
                      <th className="text-center py-2 pr-3">Type</th>
                      <th className="text-right py-2 pr-3">Amount</th>
                      <th className="text-right py-2">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {withBalance.map((e, idx) => (
                      <tr
                        key={e.id}
                        className="border-b border-border/30 hover:bg-muted/30"
                        data-ocid={`pos.ledger.item.${idx + 1}`}
                      >
                        <td className="py-2 pr-3 text-muted-foreground">
                          {e.date}
                        </td>
                        <td className="py-2 pr-3">{e.description}</td>
                        <td className="py-2 pr-3 text-center">
                          <Badge
                            className={
                              e.type === "Cr"
                                ? "bg-green-500/15 text-green-600 border-green-500/30"
                                : "bg-red-500/15 text-red-600 border-red-500/30"
                            }
                          >
                            {e.type}
                          </Badge>
                        </td>
                        <td className="py-2 pr-3 text-right">
                          ₹{e.amount.toLocaleString()}
                        </td>
                        <td
                          className={`py-2 text-right font-semibold ${e.balance >= 0 ? "text-green-600" : "text-red-600"}`}
                        >
                          ₹{e.balance.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                    {withBalance.length === 0 && (
                      <tr>
                        <td
                          colSpan={5}
                          className="text-center py-8 text-muted-foreground"
                        >
                          No entries yet
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ── BARI KHATA ── */}
        <TabsContent value="bari-khata" className="mt-0 space-y-4">
          <Card className="rounded-xl border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Add Credit (Udhaar)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                <Input
                  placeholder="Customer name"
                  value={bkForm.customer}
                  onChange={(e) =>
                    setBkForm((p) => ({ ...p, customer: e.target.value }))
                  }
                  className="text-xs"
                  data-ocid="pos.bari_khata.input"
                />
                <Input
                  placeholder="Phone"
                  value={bkForm.phone}
                  onChange={(e) =>
                    setBkForm((p) => ({ ...p, phone: e.target.value }))
                  }
                  className="text-xs"
                />
                <Input
                  type="number"
                  placeholder="Credit amount ₹"
                  value={bkForm.amount}
                  onChange={(e) =>
                    setBkForm((p) => ({ ...p, amount: e.target.value }))
                  }
                  className="text-xs"
                />
                <Button
                  size="sm"
                  onClick={addBariKhata}
                  data-ocid="pos.bari_khata.primary_button"
                >
                  Add Entry
                </Button>
              </div>
            </CardContent>
          </Card>
          <div className="space-y-3">
            {bariKhata.length === 0 ? (
              <p
                className="text-xs text-center text-muted-foreground py-8 border border-dashed border-border rounded-xl"
                data-ocid="pos.bari_khata.empty_state"
              >
                No credit entries. Add a customer's udhaar above.
              </p>
            ) : (
              bariKhata.map((e, idx) => {
                const outstanding = e.creditGiven - e.paid;
                const status =
                  outstanding === 0
                    ? "settled"
                    : e.paid > 0
                      ? "partial"
                      : "overdue";
                const borderCls =
                  status === "settled"
                    ? "border-green-500/40"
                    : status === "partial"
                      ? "border-yellow-500/40"
                      : "border-red-500/40";
                const bgCls =
                  status === "settled"
                    ? "bg-green-500/5"
                    : status === "partial"
                      ? "bg-yellow-500/5"
                      : "bg-red-500/5";
                return (
                  <Card
                    key={e.id}
                    className={`rounded-xl border ${borderCls} ${bgCls}`}
                    data-ocid={`pos.bari_khata.item.${idx + 1}`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-semibold text-sm">{e.customer}</p>
                          <p className="text-xs text-muted-foreground">
                            {e.phone}
                          </p>
                          <div className="flex gap-4 mt-2 text-xs">
                            <span>
                              Credit: <strong>₹{e.creditGiven}</strong>
                            </span>
                            <span>
                              Paid:{" "}
                              <strong className="text-green-600">
                                ₹{e.paid}
                              </strong>
                            </span>
                            <span>
                              Due:{" "}
                              <strong
                                className={
                                  outstanding > 0
                                    ? "text-red-600"
                                    : "text-green-600"
                                }
                              >
                                ₹{outstanding}
                              </strong>
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            className={
                              status === "settled"
                                ? "bg-green-500/15 text-green-600"
                                : status === "partial"
                                  ? "bg-yellow-500/15 text-yellow-600"
                                  : "bg-red-500/15 text-red-600"
                            }
                          >
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                          </Badge>
                        </div>
                      </div>
                      {outstanding > 0 && (
                        <div className="flex gap-2 mt-3">
                          <Input
                            type="number"
                            placeholder="Payment amount"
                            value={bkPayForm[e.id] || ""}
                            onChange={(ev) =>
                              setBkPayForm((p) => ({
                                ...p,
                                [e.id]: ev.target.value,
                              }))
                            }
                            className="text-xs h-7 max-w-[140px]"
                          />
                          <Button
                            size="sm"
                            className="h-7 text-xs"
                            onClick={() => recordPayment(e.id)}
                            data-ocid={`pos.bari_khata.save_button.${idx + 1}`}
                          >
                            Record Payment
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })
            )}
          </div>
        </TabsContent>

        {/* ── BARCODES ── */}
        <TabsContent value="barcodes" className="mt-0 space-y-4">
          <p className="text-xs text-muted-foreground">
            Barcode & QR labels for your products
          </p>
          {allProducts.length === 0 ? (
            <p
              className="text-xs text-center py-8 text-muted-foreground border border-dashed border-border rounded-xl"
              data-ocid="pos.barcodes.empty_state"
            >
              No products found. Add products via Family Tree → Business.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {allProducts.slice(0, 12).map((p, idx) => (
                <Card
                  key={p.id}
                  className="rounded-xl border-border"
                  data-ocid={`pos.barcodes.item.${idx + 1}`}
                >
                  <CardContent className="p-4 space-y-3">
                    <p className="text-xs font-semibold truncate">{p.name}</p>
                    <p className="text-[10px] text-muted-foreground font-mono">
                      SKU: IC{String(p.id).padStart(6, "0")}
                    </p>
                    {/* Barcode visual */}
                    <div className="flex gap-0.5 items-end h-10 bg-white p-1 rounded border border-border overflow-hidden">
                      {BARCODE_WIDTHS.map((w, bIdx) => (
                        <div
                          key={`w${w}h${BARCODE_HEIGHTS[bIdx]}`}
                          style={{
                            width: w * 1.5,
                            height: `${BARCODE_HEIGHTS[bIdx]}%`,
                            background: "#000",
                            borderRadius: 1,
                          }}
                        />
                      ))}
                    </div>
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${encodeURIComponent(`${p.name} IC${p.id}`)}`}
                      alt="QR"
                      className="w-16 h-16 border border-border rounded"
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full text-xs h-7"
                      onClick={() =>
                        toast.info("Camera scan simulation: product found")
                      }
                      data-ocid={`pos.barcodes.secondary_button.${idx + 1}`}
                    >
                      📷 Scan
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        {/* ── FINANCIAL REPORTS ── */}
        <TabsContent value="reports" className="mt-0 space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              {
                label: "Total Revenue",
                value: `₹${totalRevenue.toLocaleString()}`,
                color: "text-green-600",
              },
              {
                label: "Total Expenses",
                value: `₹${totalExpenses.toLocaleString()}`,
                color: "text-red-600",
              },
              {
                label: "Net Profit",
                value: `₹${netProfit.toLocaleString()}`,
                color: netProfit >= 0 ? "text-green-600" : "text-red-600",
              },
              {
                label: "Transactions",
                value: String(invoices.length),
                color: "text-primary",
              },
            ].map((c) => (
              <Card key={c.label} className="rounded-xl border-border">
                <CardContent className="p-4">
                  <p className="text-xs text-muted-foreground">{c.label}</p>
                  <p className={`text-xl font-bold mt-1 ${c.color}`}>
                    {c.value}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="rounded-xl border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Sales — Last 7 Days</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-2 h-32">
                {last7.map((d) => (
                  <div
                    key={d.day}
                    className="flex-1 flex flex-col items-center gap-1"
                  >
                    <span className="text-[9px] text-muted-foreground">
                      ₹{(d.amount / 1000).toFixed(1)}k
                    </span>
                    <div
                      className="w-full rounded-t-sm"
                      style={{
                        height: `${(d.amount / maxSale) * 100}%`,
                        background: "oklch(0.65 0.25 280 / 0.7)",
                      }}
                    />
                    <span className="text-[9px] text-muted-foreground">
                      {d.day}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-xl border-border">
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <CardTitle className="text-sm">Top Products</CardTitle>
              <Button
                size="sm"
                variant="outline"
                className="h-7 text-xs"
                onClick={exportCSV}
                data-ocid="pos.reports.secondary_button"
              >
                📥 Export CSV
              </Button>
            </CardHeader>
            <CardContent>
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2">Product</th>
                    <th className="text-right py-2">Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {allProducts.slice(0, 5).map((p, i) => (
                    <tr
                      key={p.id}
                      className="border-b border-border/30"
                      data-ocid={`pos.reports.item.${i + 1}`}
                    >
                      <td className="py-2">{p.name}</td>
                      <td className="py-2 text-right font-semibold">
                        ₹{(p.price * (5 - i) * 12).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                  {allProducts.length === 0 && (
                    <tr>
                      <td
                        colSpan={2}
                        className="text-center py-4 text-muted-foreground"
                      >
                        No products
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ── ONLINE STORE ── */}
        <TabsContent value="online-store" className="mt-0 space-y-4">
          <Card className="rounded-xl border-border">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm">Online Store</CardTitle>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    {storeActive ? "Active" : "Inactive"}
                  </span>
                  <Switch
                    checked={storeActive}
                    onCheckedChange={setStoreActive}
                    data-ocid="pos.online_store.switch"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted/30 rounded-lg p-3 flex items-center gap-2">
                <Globe size={14} className="text-muted-foreground shrink-0" />
                <code className="text-xs text-primary break-all">
                  https://indyacentral.app/store/my-business
                </code>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 text-xs ml-auto"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      "https://indyacentral.app/store/my-business",
                    );
                    toast.success("Link copied");
                  }}
                  data-ocid="pos.online_store.secondary_button"
                >
                  Copy
                </Button>
              </div>
              <div className="rounded-xl border border-border overflow-hidden">
                <div className="bg-primary/10 p-4 text-center">
                  <p className="font-display font-bold text-base">
                    My Business Store
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Powered by IndyaCentral
                  </p>
                </div>
                <div className="p-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {allProducts.slice(0, 6).map((p) => (
                    <div
                      key={p.id}
                      className="border border-border rounded-lg p-2 text-center"
                    >
                      <div className="w-full aspect-square bg-muted/30 rounded-md mb-2 flex items-center justify-center">
                        <span className="text-2xl">🛍️</span>
                      </div>
                      <p className="text-xs font-semibold truncate">{p.name}</p>
                      <p className="text-xs text-primary">₹{p.price}</p>
                    </div>
                  ))}
                  {allProducts.length === 0 && (
                    <div className="col-span-3 text-center py-6 text-muted-foreground text-xs">
                      Add products to display
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ── CUSTOMER PORTAL ── */}
        <TabsContent value="customers" className="mt-0">
          <Card className="rounded-xl border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Customer Portal</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {[
                  {
                    name: "Rahul Sharma",
                    email: "rahul@email.com",
                    orders: 5,
                    spent: 4200,
                    last: "2 days ago",
                  },
                  {
                    name: "Priya Gupta",
                    email: "priya@email.com",
                    orders: 3,
                    spent: 1800,
                    last: "1 week ago",
                  },
                  {
                    name: "Amit Kumar",
                    email: "amit@email.com",
                    orders: 8,
                    spent: 6500,
                    last: "Yesterday",
                  },
                ].map((c, idx) => (
                  <div
                    key={c.email}
                    className="border border-border rounded-lg p-3"
                    data-ocid={`pos.customers.item.${idx + 1}`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold">{c.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {c.email}
                        </p>
                      </div>
                      <div className="text-right text-xs">
                        <p>{c.orders} orders</p>
                        <p className="font-semibold text-primary">₹{c.spent}</p>
                        <p className="text-muted-foreground">{c.last}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// ─── Business Modules Tab ────────────────────────────────────────────────────
const BIZ_MODULES = [
  {
    id: "inventory",
    name: "Inventory & Material Management",
    desc: "Track stock, raw materials, reorder levels",
    icon: "📦",
    categories: ["Retail", "Manufacturing", "General"],
  },
  {
    id: "assembly",
    name: "Assembly & Manufacturing",
    desc: "Work orders, BOM, production tracking",
    icon: "🏭",
    categories: ["Manufacturing"],
  },
  {
    id: "repair",
    name: "Repair & Service Management",
    desc: "Job cards, technician assignment, spare parts",
    icon: "🔧",
    categories: ["Repair/Service"],
  },
  {
    id: "financial",
    name: "Financial Management",
    desc: "Profit & loss, cash flow, accounts",
    icon: "💰",
    categories: [
      "Retail",
      "Manufacturing",
      "Repair/Service",
      "Financial Services",
      "Telecom",
      "Vehicle Dealership",
      "Software/IT",
      "Lending/Finance",
      "General",
    ],
  },
  {
    id: "telecom",
    name: "Telecom Management",
    desc: "SIM cards, plans, recharge tracking",
    icon: "📡",
    categories: ["Telecom"],
  },
  {
    id: "retail",
    name: "Retail Shop Management",
    desc: "POS, billing, shelf management",
    icon: "🛍️",
    categories: ["Retail"],
  },
  {
    id: "vehicle",
    name: "Vehicle Sale & Purchase",
    desc: "Inventory, RC tracking, test drives",
    icon: "🚗",
    categories: ["Vehicle Dealership"],
  },
  {
    id: "crm",
    name: "Lead Generation / CRM",
    desc: "Leads pipeline, follow-ups, conversion",
    icon: "🎯",
    categories: [
      "Retail",
      "Manufacturing",
      "Repair/Service",
      "Financial Services",
      "Telecom",
      "Vehicle Dealership",
      "Software/IT",
      "Lending/Finance",
      "General",
    ],
  },
  {
    id: "software",
    name: "Software Project Management",
    desc: "Sprints, tasks, client billing",
    icon: "💻",
    categories: ["Software/IT"],
  },
  {
    id: "lending",
    name: "Money Lending",
    desc: "Loan accounts, EMI schedules, recovery",
    icon: "🏦",
    categories: ["Lending/Finance"],
  },
  {
    id: "courier-dispatch",
    name: "Courier & Dispatch",
    desc: "Shipment tracking, dispatch board, proof of delivery",
    icon: "🚚",
    categories: ["Logistics", "Transport", "General"],
  },
  {
    id: "fuel-depot",
    name: "Fuel Depot Management",
    desc: "Petrol, LPG, CNG, EV, Hydrogen & more — stock & dispense",
    icon: "⛽",
    categories: ["Fuel & Energy"],
  },
  {
    id: "transport-biz",
    name: "Transport Business",
    desc: "Fleet management, trip logs, cargo tracking",
    icon: "🚛",
    categories: ["Logistics", "Transport"],
  },
  {
    id: "water-delivery",
    name: "Water Delivery System",
    desc: "Bottle & bulk water orders, route planning",
    icon: "💧",
    categories: ["Logistics", "General"],
  },
  {
    id: "food-parcel",
    name: "Food & Parcel Delivery",
    desc: "Incoming orders, rider assignment, ETA tracking",
    icon: "🍱",
    categories: ["Food & Beverage", "Logistics"],
  },
  {
    id: "plumbing",
    name: "Plumbing Services",
    desc: "Job cards, materials tracking, labour billing",
    icon: "🔩",
    categories: ["Home Services"],
  },
  {
    id: "electrical",
    name: "Electrical Services",
    desc: "Wiring jobs, faults, inspection records",
    icon: "⚡",
    categories: ["Home Services"],
  },
  {
    id: "electrician",
    name: "Electrician (Field)",
    desc: "Field engineer job cards, parts used, billing",
    icon: "🔌",
    categories: ["Home Services"],
  },
  {
    id: "mechanic",
    name: "Mechanic Shop",
    desc: "Vehicle job cards, parts, service history",
    icon: "🔧",
    categories: ["Repair/Service", "Automotive"],
  },
  {
    id: "sweeper",
    name: "Sweeper / Cleaning",
    desc: "Area schedules, shift assignment, attendance",
    icon: "🧹",
    categories: ["Home Services", "General"],
  },
  {
    id: "garments",
    name: "Garments & Tailoring",
    desc: "Tailor orders, measurements, fabric stock",
    icon: "👗",
    categories: ["Retail", "Garments"],
  },
];

const BIZ_CATEGORIES = [
  "General",
  "Retail",
  "Manufacturing",
  "Repair/Service",
  "Financial Services",
  "Telecom",
  "Vehicle Dealership",
  "Software/IT",
  "Lending/Finance",
  "Logistics",
  "Transport",
  "Fuel & Energy",
  "Food & Beverage",
  "Home Services",
  "Automotive",
  "Garments",
  "Healthcare Advisor",
  "Insurance Agent",
];

function BizModulePanel({ moduleId }: { moduleId: string | null }) {
  if (!moduleId) return null;
  const panels: Record<string, React.ReactNode> = {
    "courier-dispatch": <CourierDispatchModule />,
    "fuel-depot": <FuelDepotModule />,
    "transport-biz": <TransportModule />,
    "water-delivery": <WaterDeliveryModule />,
    "food-parcel": <FoodParcelDeliveryModule />,
    plumbing: <PlumbingModule />,
    electrical: <ElectricalModule />,
    electrician: <ElectricianModule />,
    mechanic: <MechanicModule />,
    sweeper: <SweeperModule />,
    garments: <GarmentsModule />,
    inventory: <InventoryModule />,
    assembly: <AssemblyModule />,
    repair: <RepairServiceModule />,
    financial: <FinancialModule />,
    telecom: <TelecomModule />,
    retail: <RetailShopModule />,
    vehicle: <VehicleModule />,
    crm: <LeadCRMModule />,
    software: <SoftwareProjectModule />,
    lending: <MoneyLendingModule />,
  };
  return (
    panels[moduleId] ?? (
      <div className="space-y-3 py-2">
        <p className="text-sm text-muted-foreground">
          Module is active. Configure settings for your business below.
        </p>
        <div>
          <Label className="text-xs">Custom Label</Label>
          <Input
            placeholder="e.g. My Inventory"
            className="mt-1"
            data-ocid="biz.module.config.input"
          />
        </div>
        <div className="flex items-center gap-2">
          <Switch data-ocid="biz.module.config.switch" />
          <Label className="text-sm">
            Enable notifications for this module
          </Label>
        </div>
      </div>
    )
  );
}

function BizModulesTab() {
  const [category, setCategory] = React.useState("General");
  const [enabled, setEnabled] = React.useState<Record<string, boolean>>(() => {
    try {
      return JSON.parse(localStorage.getItem("enabledBizModules") || "{}");
    } catch {
      return {};
    }
  });
  const [configOpen, setConfigOpen] = React.useState<string | null>(null);

  const toggle = (id: string) => {
    setEnabled((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      localStorage.setItem("enabledBizModules", JSON.stringify(next));
      return next;
    });
  };

  const relevantModules = BIZ_MODULES.filter((m) =>
    category === "General" ? true : m.categories.includes(category),
  );
  const enabledCount = Object.values(enabled).filter(Boolean).length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <h2 className="text-lg font-semibold">Business Modules</h2>
          <p className="text-sm text-muted-foreground">
            Enable modules relevant to your business category
          </p>
        </div>
        <Badge variant="secondary" className="text-sm">
          {enabledCount} of {BIZ_MODULES.length} enabled
        </Badge>
      </div>

      <div className="flex items-center gap-3">
        <Label className="text-sm font-medium whitespace-nowrap">
          Business Category:
        </Label>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-52" data-ocid="biz.modules.select">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {BIZ_CATEGORIES.map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {relevantModules.map((mod) => {
          const isRecommended =
            category !== "General" &&
            mod.categories.includes(category) &&
            mod.categories.length <= 3;
          return (
            <Card
              key={mod.id}
              className={`relative transition-all ${enabled[mod.id] ? "border-primary/50 bg-primary/5" : ""}`}
              data-ocid={`biz.module.${mod.id}.card`}
            >
              <CardContent className="p-4 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{mod.icon}</span>
                    <div>
                      <p className="text-sm font-semibold leading-tight">
                        {mod.name}
                      </p>
                      {isRecommended && (
                        <Badge className="text-[10px] px-1.5 py-0 mt-0.5 bg-amber-500/15 text-amber-600 border-amber-500/30">
                          ✨ Recommended
                        </Badge>
                      )}
                    </div>
                  </div>
                  <Switch
                    checked={!!enabled[mod.id]}
                    onCheckedChange={() => toggle(mod.id)}
                    data-ocid={`biz.module.${mod.id}.toggle`}
                  />
                </div>
                <p className="text-xs text-muted-foreground">{mod.desc}</p>
                {enabled[mod.id] && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full text-xs"
                    onClick={() => setConfigOpen(mod.id)}
                    data-ocid={`biz.module.${mod.id}.button`}
                  >
                    ⚙️ Configure
                  </Button>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Dialog open={!!configOpen} onOpenChange={() => setConfigOpen(null)}>
        <DialogContent
          className="max-w-2xl max-h-[90vh] flex flex-col"
          data-ocid="biz.module.config.dialog"
        >
          <DialogHeader>
            <DialogTitle>
              {BIZ_MODULES.find((m) => m.id === configOpen)?.icon}{" "}
              {BIZ_MODULES.find((m) => m.id === configOpen)?.name}
            </DialogTitle>
          </DialogHeader>
          <ScrollArea className="flex-1 mt-2 pr-1">
            <div className="space-y-4 py-2">
              <BizModulePanel moduleId={configOpen} />
            </div>
          </ScrollArea>
          <DialogFooter className="mt-4">
            <Button
              variant="outline"
              onClick={() => setConfigOpen(null)}
              data-ocid="biz.module.config.cancel_button"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ─── HR & Payroll Tab ────────────────────────────────────────────────────────
interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  salary: number;
  phone: string;
  email: string;
  joinDate: string;
  status: "Active" | "Inactive";
}

interface LeaveRequest {
  id: string;
  employeeId: string;
  employeeName: string;
  type: string;
  from: string;
  to: string;
  days: number;
  reason: string;
  status: "Pending" | "Approved" | "Rejected";
}

function HRPayrollTab() {
  const [employees, setEmployees] = React.useState<Employee[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("bizEmployees") || "[]");
    } catch {
      return [];
    }
  });
  const [leaves, setLeaves] = React.useState<LeaveRequest[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("bizLeaves") || "[]");
    } catch {
      return [];
    }
  });
  const [payroll, setPayroll] = React.useState<
    Record<string, { paid: boolean; bonus: number }>
  >(() => {
    try {
      return JSON.parse(localStorage.getItem("bizPayroll") || "{}");
    } catch {
      return {};
    }
  });

  const [showAddEmp, setShowAddEmp] = React.useState(false);
  const [showAddLeave, setShowAddLeave] = React.useState(false);
  const [showPayslip, setShowPayslip] = React.useState<Employee | null>(null);
  const [empForm, setEmpForm] = React.useState({
    name: "",
    role: "Staff",
    department: "",
    salary: "",
    phone: "",
    email: "",
    joinDate: "",
  });
  const [leaveForm, setLeaveForm] = React.useState({
    employeeId: "",
    type: "Casual",
    from: "",
    to: "",
    reason: "",
  });

  const saveEmployees = (list: Employee[]) => {
    setEmployees(list);
    localStorage.setItem("bizEmployees", JSON.stringify(list));
  };

  const saveLeaves = (list: LeaveRequest[]) => {
    setLeaves(list);
    localStorage.setItem("bizLeaves", JSON.stringify(list));
  };

  const savePayroll = (
    rec: Record<string, { paid: boolean; bonus: number }>,
  ) => {
    setPayroll(rec);
    localStorage.setItem("bizPayroll", JSON.stringify(rec));
  };

  const addEmployee = () => {
    if (!empForm.name) return;
    const emp: Employee = {
      id: Date.now().toString(),
      name: empForm.name,
      role: empForm.role,
      department: empForm.department,
      salary: Number(empForm.salary) || 0,
      phone: empForm.phone,
      email: empForm.email,
      joinDate: empForm.joinDate,
      status: "Active",
    };
    saveEmployees([...employees, emp]);
    setEmpForm({
      name: "",
      role: "Staff",
      department: "",
      salary: "",
      phone: "",
      email: "",
      joinDate: "",
    });
    setShowAddEmp(false);
  };

  const addLeave = () => {
    if (!leaveForm.employeeId || !leaveForm.from || !leaveForm.to) return;
    const emp = employees.find((e) => e.id === leaveForm.employeeId);
    const from = new Date(leaveForm.from);
    const to = new Date(leaveForm.to);
    const days = Math.max(
      1,
      Math.round((to.getTime() - from.getTime()) / 86400000) + 1,
    );
    const req: LeaveRequest = {
      id: Date.now().toString(),
      employeeId: leaveForm.employeeId,
      employeeName: emp?.name || "",
      type: leaveForm.type,
      from: leaveForm.from,
      to: leaveForm.to,
      days,
      reason: leaveForm.reason,
      status: "Pending",
    };
    saveLeaves([...leaves, req]);
    setLeaveForm({
      employeeId: "",
      type: "Casual",
      from: "",
      to: "",
      reason: "",
    });
    setShowAddLeave(false);
  };

  const approveLeave = (id: string, status: "Approved" | "Rejected") => {
    saveLeaves(leaves.map((l) => (l.id === id ? { ...l, status } : l)));
  };

  const markPaid = (empId: string) => {
    const next = {
      ...payroll,
      [empId]: {
        ...payroll[empId],
        paid: true,
        bonus: payroll[empId]?.bonus || 0,
      },
    };
    savePayroll(next);
  };

  const calcNet = (emp: Employee) => {
    const pf = Math.round(emp.salary * 0.12);
    const esi = Math.round(emp.salary * 0.0175);
    const bonus = payroll[emp.id]?.bonus || 0;
    return { pf, esi, bonus, net: emp.salary - pf - esi + bonus };
  };

  const onLeaveToday = leaves.filter(
    (l) =>
      l.status === "Approved" &&
      new Date(l.from) <= new Date() &&
      new Date(l.to) >= new Date(),
  ).length;
  const presentToday =
    employees.filter((e) => e.status === "Active").length - onLeaveToday;

  return (
    <div className="space-y-4">
      <Tabs defaultValue="employees">
        <TabsList
          className="flex flex-wrap gap-1 h-auto"
          data-ocid="hr.tabs.list"
        >
          <TabsTrigger value="employees" data-ocid="hr.employees.tab">
            👤 Employees
          </TabsTrigger>
          <TabsTrigger value="absence" data-ocid="hr.absence.tab">
            📅 Absence Management
          </TabsTrigger>
          <TabsTrigger value="payroll" data-ocid="hr.payroll.tab">
            💵 Payroll
          </TabsTrigger>
        </TabsList>

        {/* Employees */}
        <TabsContent value="employees" className="mt-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">
              Employees ({employees.length})
            </h3>
            <Button
              size="sm"
              onClick={() => setShowAddEmp(true)}
              data-ocid="hr.employees.open_modal_button"
            >
              + Add Employee
            </Button>
          </div>
          {employees.length === 0 ? (
            <div
              className="text-center py-8 text-muted-foreground text-sm"
              data-ocid="hr.employees.empty_state"
            >
              No employees added yet. Click "Add Employee" to get started.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-xs text-muted-foreground">
                    <th className="text-left py-2 px-1">Name</th>
                    <th className="text-left py-2 px-1">Role</th>
                    <th className="text-left py-2 px-1">Department</th>
                    <th className="text-right py-2 px-1">Salary</th>
                    <th className="text-center py-2 px-1">Status</th>
                    <th className="text-center py-2 px-1">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((emp, idx) => (
                    <tr
                      key={emp.id}
                      className="border-b hover:bg-muted/30"
                      data-ocid={`hr.employees.item.${idx + 1}`}
                    >
                      <td className="py-2 px-1 font-medium">{emp.name}</td>
                      <td className="py-2 px-1 text-muted-foreground">
                        {emp.role}
                      </td>
                      <td className="py-2 px-1 text-muted-foreground">
                        {emp.department || "—"}
                      </td>
                      <td className="py-2 px-1 text-right">
                        ₹{emp.salary.toLocaleString()}
                      </td>
                      <td className="py-2 px-1 text-center">
                        <Badge
                          variant={
                            emp.status === "Active" ? "default" : "secondary"
                          }
                          className="text-xs"
                        >
                          {emp.status}
                        </Badge>
                      </td>
                      <td className="py-2 px-1 text-center">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-xs h-7"
                          onClick={() => setShowPayslip(emp)}
                          data-ocid={`hr.employees.edit_button.${idx + 1}`}
                        >
                          Payslip
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </TabsContent>

        {/* Absence Management */}
        <TabsContent value="absence" className="mt-4 space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <Card>
              <CardContent className="p-3 text-center">
                <p className="text-2xl font-bold text-green-600">
                  {presentToday}
                </p>
                <p className="text-xs text-muted-foreground">Present Today</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-3 text-center">
                <p className="text-2xl font-bold text-amber-600">
                  {onLeaveToday}
                </p>
                <p className="text-xs text-muted-foreground">On Leave</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-3 text-center">
                <p className="text-2xl font-bold text-primary">
                  {employees.length}
                </p>
                <p className="text-xs text-muted-foreground">Total Employees</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">Leave Requests</h3>
            <Button
              size="sm"
              onClick={() => setShowAddLeave(true)}
              data-ocid="hr.absence.open_modal_button"
            >
              + Request Leave
            </Button>
          </div>

          {leaves.length === 0 ? (
            <div
              className="text-center py-6 text-sm text-muted-foreground"
              data-ocid="hr.absence.empty_state"
            >
              No leave requests yet.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-xs text-muted-foreground">
                    <th className="text-left py-2 px-1">Employee</th>
                    <th className="text-left py-2 px-1">Type</th>
                    <th className="text-left py-2 px-1">From</th>
                    <th className="text-left py-2 px-1">To</th>
                    <th className="text-center py-2 px-1">Days</th>
                    <th className="text-center py-2 px-1">Status</th>
                    <th className="text-center py-2 px-1">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {leaves.map((l, idx) => (
                    <tr
                      key={l.id}
                      className="border-b hover:bg-muted/30"
                      data-ocid={`hr.absence.item.${idx + 1}`}
                    >
                      <td className="py-2 px-1 font-medium">
                        {l.employeeName}
                      </td>
                      <td className="py-2 px-1">{l.type}</td>
                      <td className="py-2 px-1 text-muted-foreground">
                        {l.from}
                      </td>
                      <td className="py-2 px-1 text-muted-foreground">
                        {l.to}
                      </td>
                      <td className="py-2 px-1 text-center">{l.days}</td>
                      <td className="py-2 px-1 text-center">
                        <Badge
                          variant={
                            l.status === "Approved"
                              ? "default"
                              : l.status === "Rejected"
                                ? "destructive"
                                : "secondary"
                          }
                          className="text-xs"
                        >
                          {l.status}
                        </Badge>
                      </td>
                      <td className="py-2 px-1 text-center space-x-1">
                        {l.status === "Pending" && (
                          <>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-xs h-7 text-green-600"
                              onClick={() => approveLeave(l.id, "Approved")}
                              data-ocid={`hr.absence.confirm_button.${idx + 1}`}
                            >
                              ✓
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-xs h-7 text-red-600"
                              onClick={() => approveLeave(l.id, "Rejected")}
                              data-ocid={`hr.absence.cancel_button.${idx + 1}`}
                            >
                              ✗
                            </Button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </TabsContent>

        {/* Payroll */}
        <TabsContent value="payroll" className="mt-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">
              Payroll —{" "}
              {new Date().toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </h3>
            <Button
              size="sm"
              onClick={() => {
                const next = { ...payroll };
                for (const e of employees) {
                  next[e.id] = { paid: false, bonus: next[e.id]?.bonus || 0 };
                }
                savePayroll(next);
              }}
              data-ocid="hr.payroll.primary_button"
            >
              ▶ Run Payroll
            </Button>
          </div>

          {employees.length === 0 ? (
            <div
              className="text-center py-6 text-sm text-muted-foreground"
              data-ocid="hr.payroll.empty_state"
            >
              Add employees first to run payroll.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-xs text-muted-foreground">
                    <th className="text-left py-2 px-1">Employee</th>
                    <th className="text-right py-2 px-1">Base</th>
                    <th className="text-right py-2 px-1">PF (12%)</th>
                    <th className="text-right py-2 px-1">ESI (1.75%)</th>
                    <th className="text-right py-2 px-1">Bonus</th>
                    <th className="text-right py-2 px-1">Net Pay</th>
                    <th className="text-center py-2 px-1">Status</th>
                    <th className="text-center py-2 px-1">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((emp, idx) => {
                    const { pf, esi, bonus, net } = calcNet(emp);
                    const paid = payroll[emp.id]?.paid;
                    return (
                      <tr
                        key={emp.id}
                        className="border-b hover:bg-muted/30"
                        data-ocid={`hr.payroll.item.${idx + 1}`}
                      >
                        <td className="py-2 px-1 font-medium">{emp.name}</td>
                        <td className="py-2 px-1 text-right">
                          ₹{emp.salary.toLocaleString()}
                        </td>
                        <td className="py-2 px-1 text-right text-red-600">
                          -₹{pf}
                        </td>
                        <td className="py-2 px-1 text-right text-red-600">
                          -₹{esi}
                        </td>
                        <td className="py-2 px-1 text-right text-green-600">
                          +₹{bonus}
                        </td>
                        <td className="py-2 px-1 text-right font-semibold">
                          ₹{net.toLocaleString()}
                        </td>
                        <td className="py-2 px-1 text-center">
                          <Badge
                            variant={paid ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {paid ? "Paid" : "Pending"}
                          </Badge>
                        </td>
                        <td className="py-2 px-1 text-center space-x-1">
                          {!paid && (
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-xs h-7"
                              onClick={() => markPaid(emp.id)}
                              data-ocid={`hr.payroll.confirm_button.${idx + 1}`}
                            >
                              Mark Paid
                            </Button>
                          )}
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-xs h-7"
                            onClick={() => setShowPayslip(emp)}
                            data-ocid={`hr.payroll.edit_button.${idx + 1}`}
                          >
                            Payslip
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Add Employee Dialog */}
      <Dialog open={showAddEmp} onOpenChange={setShowAddEmp}>
        <DialogContent data-ocid="hr.employees.dialog">
          <DialogHeader>
            <DialogTitle>Add Employee</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-3 py-2">
            <div className="col-span-2">
              <Label className="text-xs">Full Name *</Label>
              <Input
                className="mt-1"
                placeholder="Employee name"
                value={empForm.name}
                onChange={(e) =>
                  setEmpForm((p) => ({ ...p, name: e.target.value }))
                }
                data-ocid="hr.employees.input"
              />
            </div>
            <div>
              <Label className="text-xs">Role</Label>
              <Select
                value={empForm.role}
                onValueChange={(v) => setEmpForm((p) => ({ ...p, role: v }))}
              >
                <SelectTrigger className="mt-1" data-ocid="hr.employees.select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[
                    "Manager",
                    "Staff",
                    "Technician",
                    "Driver",
                    "Cook",
                    "Waiter",
                    "Guard",
                    "Other",
                  ].map((r) => (
                    <SelectItem key={r} value={r}>
                      {r}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-xs">Department</Label>
              <Input
                className="mt-1"
                placeholder="e.g. Sales"
                value={empForm.department}
                onChange={(e) =>
                  setEmpForm((p) => ({ ...p, department: e.target.value }))
                }
              />
            </div>
            <div>
              <Label className="text-xs">Monthly Salary (₹)</Label>
              <Input
                className="mt-1"
                type="number"
                placeholder="25000"
                value={empForm.salary}
                onChange={(e) =>
                  setEmpForm((p) => ({ ...p, salary: e.target.value }))
                }
              />
            </div>
            <div>
              <Label className="text-xs">Join Date</Label>
              <Input
                className="mt-1"
                type="date"
                value={empForm.joinDate}
                onChange={(e) =>
                  setEmpForm((p) => ({ ...p, joinDate: e.target.value }))
                }
              />
            </div>
            <div>
              <Label className="text-xs">Phone</Label>
              <Input
                className="mt-1"
                placeholder="+91 98765 43210"
                value={empForm.phone}
                onChange={(e) =>
                  setEmpForm((p) => ({ ...p, phone: e.target.value }))
                }
              />
            </div>
            <div>
              <Label className="text-xs">Email</Label>
              <Input
                className="mt-1"
                type="email"
                placeholder="email@example.com"
                value={empForm.email}
                onChange={(e) =>
                  setEmpForm((p) => ({ ...p, email: e.target.value }))
                }
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowAddEmp(false)}
              data-ocid="hr.employees.cancel_button"
            >
              Cancel
            </Button>
            <Button
              onClick={addEmployee}
              data-ocid="hr.employees.submit_button"
            >
              Add Employee
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Leave Dialog */}
      <Dialog open={showAddLeave} onOpenChange={setShowAddLeave}>
        <DialogContent data-ocid="hr.absence.dialog">
          <DialogHeader>
            <DialogTitle>Request Leave</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 py-2">
            <div>
              <Label className="text-xs">Employee *</Label>
              <Select
                value={leaveForm.employeeId}
                onValueChange={(v) =>
                  setLeaveForm((p) => ({ ...p, employeeId: v }))
                }
              >
                <SelectTrigger className="mt-1" data-ocid="hr.absence.select">
                  <SelectValue placeholder="Select employee" />
                </SelectTrigger>
                <SelectContent>
                  {employees.map((e) => (
                    <SelectItem key={e.id} value={e.id}>
                      {e.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-xs">Leave Type</Label>
              <Select
                value={leaveForm.type}
                onValueChange={(v) => setLeaveForm((p) => ({ ...p, type: v }))}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {["Sick", "Casual", "Annual", "Unpaid"].map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-xs">From Date</Label>
                <Input
                  className="mt-1"
                  type="date"
                  value={leaveForm.from}
                  onChange={(e) =>
                    setLeaveForm((p) => ({ ...p, from: e.target.value }))
                  }
                  data-ocid="hr.absence.input"
                />
              </div>
              <div>
                <Label className="text-xs">To Date</Label>
                <Input
                  className="mt-1"
                  type="date"
                  value={leaveForm.to}
                  onChange={(e) =>
                    setLeaveForm((p) => ({ ...p, to: e.target.value }))
                  }
                />
              </div>
            </div>
            <div>
              <Label className="text-xs">Reason</Label>
              <Input
                className="mt-1"
                placeholder="Brief reason..."
                value={leaveForm.reason}
                onChange={(e) =>
                  setLeaveForm((p) => ({ ...p, reason: e.target.value }))
                }
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowAddLeave(false)}
              data-ocid="hr.absence.cancel_button"
            >
              Cancel
            </Button>
            <Button onClick={addLeave} data-ocid="hr.absence.submit_button">
              Submit Request
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Payslip Dialog */}
      {showPayslip && (
        <Dialog open={!!showPayslip} onOpenChange={() => setShowPayslip(null)}>
          <DialogContent data-ocid="hr.payroll.dialog">
            <DialogHeader>
              <DialogTitle>Payslip — {showPayslip.name}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-2">
              <div className="bg-muted/40 rounded-lg p-4 space-y-2">
                <div className="flex justify-between border-b pb-2 mb-2">
                  <div>
                    <p className="text-sm font-semibold">{showPayslip.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {showPayslip.role} · {showPayslip.department}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">
                      {new Date().toLocaleString("default", {
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Joined: {showPayslip.joinDate || "—"}
                    </p>
                  </div>
                </div>
                {(() => {
                  const { pf, esi, bonus, net } = calcNet(showPayslip);
                  return (
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Basic Salary</span>
                        <span>₹{showPayslip.salary.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-green-600">
                        <span>Bonus</span>
                        <span>+₹{bonus}</span>
                      </div>
                      <div className="flex justify-between text-red-600">
                        <span>PF Deduction (12%)</span>
                        <span>-₹{pf}</span>
                      </div>
                      <div className="flex justify-between text-red-600">
                        <span>ESI (1.75%)</span>
                        <span>-₹{esi}</span>
                      </div>
                      <div className="flex justify-between font-bold border-t pt-2 mt-2">
                        <span>Net Pay</span>
                        <span>₹{net.toLocaleString()}</span>
                      </div>
                    </div>
                  );
                })()}
                <div className="mt-4 pt-3 border-t border-dashed text-center text-xs text-muted-foreground">
                  [Company Stamp] — IndyaCentral Business Platform
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setShowPayslip(null)}
                data-ocid="hr.payroll.close_button"
              >
                Close
              </Button>
              <Button
                onClick={() => {
                  window.print();
                }}
                data-ocid="hr.payroll.primary_button"
              >
                🖨️ Print
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

// ─── ONDC Vendor Panel ────────────────────────────────────────────────────────
function ONDCVendorPanel() {
  const ONDC_COLOR = "oklch(0.65 0.20 40)";
  const PARTICIPANT_ID = React.useMemo(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem("ic_ondc_registration") || "null",
      );
      if (saved?.participantId) return saved.participantId;
    } catch {
      // ignore
    }
    return null;
  }, []);

  const [registered, setRegistered] = React.useState<boolean>(!!PARTICIPANT_ID);
  const [participantId, _setParticipantId] = React.useState<string>(
    PARTICIPANT_ID || `IC-${Date.now()}`,
  );
  const [regForm, setRegForm] = React.useState({
    gstin: "",
    pan: "",
    category: "Food",
    bankAccount: "",
    ifsc: "",
    fssai: "",
  });

  const [catalogProducts, setCatalogProducts] = React.useState([
    {
      name: "Masala Pack 500g",
      category: "Food",
      price: "₹299",
      status: "Synced" as "Synced" | "Pending" | "Error",
      lastSync: "2h ago",
    },
    {
      name: "Basmati Rice 1kg",
      category: "Grocery",
      price: "₹180",
      status: "Synced" as "Synced" | "Pending" | "Error",
      lastSync: "2h ago",
    },
    {
      name: "Chana Dal 500g",
      category: "Grocery",
      price: "₹120",
      status: "Pending" as "Synced" | "Pending" | "Error",
      lastSync: "Never",
    },
    {
      name: "Turmeric Powder",
      category: "Food",
      price: "₹85",
      status: "Error" as "Synced" | "Pending" | "Error",
      lastSync: "5h ago",
    },
  ]);
  const [syncing, setSyncing] = React.useState(false);

  const [ondcOrders, setOndcOrders] = React.useState(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem("ic_ondc_orders") || "null",
      );
      if (saved) return saved;
    } catch {
      /**/
    }
    return [
      {
        id: "ONDC001",
        buyer: "Rahul S.",
        product: "Masala Pack 500g",
        amount: "₹299",
        status: "New" as "New" | "Confirmed" | "Shipped" | "Cancelled",
      },
      {
        id: "ONDC002",
        buyer: "Priya M.",
        product: "Basmati Rice 1kg",
        amount: "₹180",
        status: "Confirmed" as "New" | "Confirmed" | "Shipped" | "Cancelled",
      },
    ];
  });
  const [cancelOrderId, setCancelOrderId] = React.useState<string | null>(null);
  const [cancelReason, setCancelReason] = React.useState("");

  const [settings, setSettings] = React.useState({
    deliverySLA: "Next Day",
    cancellationWindow: "1 hour",
    returnPolicy: "7 Days",
    autoAccept: false,
  });

  function handleRegister() {
    if (!regForm.gstin) {
      toast.error("GSTIN is required");
      return;
    }
    const reg = { participantId, ...regForm };
    localStorage.setItem("ic_ondc_registration", JSON.stringify(reg));
    setRegistered(true);
    toast.success(`Registered on ONDC! Your Participant ID: ${participantId}`);
  }

  function saveOndcNotification(msg: string) {
    try {
      const existing = JSON.parse(
        localStorage.getItem("ic_notifications") || "[]",
      ) as any[];
      existing.unshift({ type: "ondc", message: msg, timestamp: Date.now() });
      localStorage.setItem("ic_notifications", JSON.stringify(existing));
      window.dispatchEvent(new Event("indya_notification_added"));
    } catch {
      /**/
    }
  }

  function handleAcceptOrder(orderId: string) {
    setOndcOrders((prev: any[]) =>
      prev.map((o: any) =>
        o.id === orderId ? { ...o, status: "Confirmed" } : o,
      ),
    );
    saveOndcNotification(
      `Your ONDC order #${orderId} has been accepted by seller`,
    );
    toast.success(`Order #${orderId} accepted`);
  }

  function handleCancelOrder(orderId: string) {
    if (!cancelReason) {
      toast.error("Please enter a cancellation reason");
      return;
    }
    setOndcOrders((prev: any[]) =>
      prev.map((o: any) =>
        o.id === orderId ? { ...o, status: "Cancelled" } : o,
      ),
    );
    saveOndcNotification(
      `Your ONDC order #${orderId} was cancelled: ${cancelReason}`,
    );
    setCancelOrderId(null);
    setCancelReason("");
    toast.success(`Order #${orderId} cancelled`);
  }

  function handleMarkShipped(orderId: string) {
    setOndcOrders((prev: any[]) =>
      prev.map((o: any) =>
        o.id === orderId ? { ...o, status: "Shipped" } : o,
      ),
    );
    toast.success(`Order #${orderId} marked as shipped`);
  }

  function handleSyncAll() {
    setSyncing(true);
    setTimeout(() => {
      setCatalogProducts((prev) =>
        prev.map((p) => ({ ...p, status: "Synced", lastSync: "Just now" })),
      );
      setSyncing(false);
      toast.success("12 products synced on ONDC Network");
    }, 1800);
  }

  const statusBadge = (s: "Synced" | "Pending" | "Error") => {
    if (s === "Synced")
      return (
        <Badge
          className="text-[10px]"
          style={{
            background: "oklch(0.52 0.14 155 / 0.15)",
            color: "oklch(0.52 0.14 155)",
          }}
        >
          ✅ Synced
        </Badge>
      );
    if (s === "Pending")
      return (
        <Badge
          className="text-[10px]"
          style={{
            background: "oklch(0.72 0.17 85 / 0.15)",
            color: "oklch(0.72 0.17 85)",
          }}
        >
          ⏳ Pending
        </Badge>
      );
    return (
      <Badge
        className="text-[10px]"
        style={{
          background: "oklch(0.55 0.22 22 / 0.15)",
          color: "oklch(0.55 0.22 22)",
        }}
      >
        ❌ Error
      </Badge>
    );
  };

  return (
    <div className="space-y-4" data-ocid="business.ondc.panel">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm"
          style={{ background: ONDC_COLOR }}
        >
          🌐
        </div>
        <div>
          <h2 className="text-sm font-bold" style={{ color: ONDC_COLOR }}>
            ONDC Vendor Portal
          </h2>
          <p className="text-[11px] text-muted-foreground">
            Open Network for Digital Commerce — Sell to millions of buyers
          </p>
        </div>
        {registered && (
          <Badge
            className="ml-auto text-[10px]"
            style={{
              background: "oklch(0.52 0.14 155 / 0.15)",
              color: "oklch(0.52 0.14 155)",
            }}
          >
            ● Active · {participantId}
          </Badge>
        )}
      </div>

      <Tabs defaultValue="registration">
        <TabsList className="flex flex-wrap h-auto gap-1">
          <TabsTrigger
            value="registration"
            className="text-xs"
            data-ocid="business.ondc.registration.tab"
          >
            📋 Registration
          </TabsTrigger>
          <TabsTrigger
            value="catalog"
            className="text-xs"
            data-ocid="business.ondc.catalog.tab"
          >
            📦 Catalog Sync
          </TabsTrigger>
          <TabsTrigger
            value="orders"
            className="text-xs"
            data-ocid="business.ondc.orders.tab"
          >
            🛒 ONDC Orders
          </TabsTrigger>
          <TabsTrigger
            value="settings"
            className="text-xs"
            data-ocid="business.ondc.settings.tab"
          >
            ⚙️ Settings
          </TabsTrigger>
        </TabsList>

        {/* Registration Tab */}
        <TabsContent value="registration" className="mt-4 space-y-4">
          {registered ? (
            <div
              className="p-4 rounded-xl border-2 text-center space-y-2"
              style={{
                borderColor: ONDC_COLOR,
                background: "oklch(0.65 0.20 40 / 0.05)",
              }}
            >
              <div className="text-3xl">✅</div>
              <p className="font-bold text-sm" style={{ color: ONDC_COLOR }}>
                Registered on ONDC Network!
              </p>
              <p className="text-xs text-muted-foreground">
                Your ONDC Participant ID:
              </p>
              <p
                className="text-base font-mono font-bold"
                style={{ color: ONDC_COLOR }}
              >
                {participantId}
              </p>
              <Button
                variant="outline"
                size="sm"
                className="text-xs mt-2"
                data-ocid="business.ondc.manage.button"
              >
                Manage Registration
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <Label className="text-xs">GSTIN *</Label>
                  <Input
                    className="mt-1 h-8 text-xs"
                    value={regForm.gstin}
                    onChange={(e) =>
                      setRegForm({ ...regForm, gstin: e.target.value })
                    }
                    placeholder="22AAAAA0000A1Z5"
                    data-ocid="business.ondc.gstin.input"
                  />
                </div>
                <div>
                  <Label className="text-xs">PAN *</Label>
                  <Input
                    className="mt-1 h-8 text-xs"
                    value={regForm.pan}
                    onChange={(e) =>
                      setRegForm({ ...regForm, pan: e.target.value })
                    }
                    placeholder="ABCDE1234F"
                    data-ocid="business.ondc.pan.input"
                  />
                </div>
                <div>
                  <Label className="text-xs">Business Category *</Label>
                  <Select
                    value={regForm.category}
                    onValueChange={(v) =>
                      setRegForm({ ...regForm, category: v })
                    }
                  >
                    <SelectTrigger className="mt-1 h-8 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[
                        "Food",
                        "Grocery",
                        "Electronics",
                        "Fashion",
                        "Beauty",
                        "Healthcare",
                      ].map((c) => (
                        <SelectItem key={c} value={c} className="text-xs">
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-xs">Bank Account Number</Label>
                  <Input
                    className="mt-1 h-8 text-xs"
                    value={regForm.bankAccount}
                    onChange={(e) =>
                      setRegForm({ ...regForm, bankAccount: e.target.value })
                    }
                    placeholder="12345678901234"
                    data-ocid="business.ondc.bank.input"
                  />
                </div>
                <div>
                  <Label className="text-xs">IFSC Code</Label>
                  <Input
                    className="mt-1 h-8 text-xs"
                    value={regForm.ifsc}
                    onChange={(e) =>
                      setRegForm({ ...regForm, ifsc: e.target.value })
                    }
                    placeholder="HDFC0001234"
                    data-ocid="business.ondc.ifsc.input"
                  />
                </div>
                {regForm.category === "Food" && (
                  <div>
                    <Label className="text-xs">FSSAI License Number</Label>
                    <Input
                      className="mt-1 h-8 text-xs"
                      value={regForm.fssai}
                      onChange={(e) =>
                        setRegForm({ ...regForm, fssai: e.target.value })
                      }
                      placeholder="12345678901234"
                      data-ocid="business.ondc.fssai.input"
                    />
                  </div>
                )}
                <div>
                  <Label className="text-xs">
                    ONDC Participant ID (auto-generated)
                  </Label>
                  <Input
                    className="mt-1 h-8 text-xs font-mono bg-muted/50"
                    value={participantId}
                    readOnly
                  />
                </div>
              </div>
              <Button
                className="text-xs font-label font-semibold"
                onClick={handleRegister}
                style={{ background: ONDC_COLOR }}
                data-ocid="business.ondc.register.submit_button"
              >
                🌐 Register on ONDC Network
              </Button>
            </div>
          )}
        </TabsContent>

        {/* Catalog Sync Tab */}
        <TabsContent value="catalog" className="mt-4 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground font-semibold">
              {catalogProducts.filter((p) => p.status === "Synced").length}{" "}
              products synced on ONDC Network
            </p>
            <Button
              size="sm"
              className="text-xs"
              onClick={handleSyncAll}
              disabled={syncing}
              style={{ background: ONDC_COLOR }}
              data-ocid="business.ondc.sync_all.button"
            >
              {syncing ? "Syncing..." : "🔄 Sync All"}
            </Button>
          </div>
          <div className="border border-border rounded-xl overflow-hidden">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left px-3 py-2 font-semibold text-muted-foreground">
                    Product
                  </th>
                  <th className="text-left px-3 py-2 font-semibold text-muted-foreground">
                    Category
                  </th>
                  <th className="text-left px-3 py-2 font-semibold text-muted-foreground">
                    Price
                  </th>
                  <th className="text-left px-3 py-2 font-semibold text-muted-foreground">
                    ONDC Status
                  </th>
                  <th className="text-left px-3 py-2 font-semibold text-muted-foreground">
                    Last Sync
                  </th>
                  <th className="px-3 py-2" />
                </tr>
              </thead>
              <tbody>
                {catalogProducts.map((p, i) => (
                  <tr
                    key={`${p.name}-${i}`}
                    className="border-t border-border/50"
                  >
                    <td className="px-3 py-2 font-medium">{p.name}</td>
                    <td className="px-3 py-2 text-muted-foreground">
                      {p.category}
                    </td>
                    <td className="px-3 py-2">{p.price}</td>
                    <td className="px-3 py-2">{statusBadge(p.status)}</td>
                    <td className="px-3 py-2 text-muted-foreground">
                      {p.lastSync}
                    </td>
                    <td className="px-3 py-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-6 text-[10px] px-2"
                        onClick={() => {
                          setCatalogProducts((prev) =>
                            prev.map((pp, ii) =>
                              ii === i
                                ? {
                                    ...pp,
                                    status: "Synced",
                                    lastSync: "Just now",
                                  }
                                : pp,
                            ),
                          );
                          toast.success(`${p.name} synced`);
                        }}
                        data-ocid={`business.ondc.sync.button.${i + 1}`}
                      >
                        Sync
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        {/* ONDC Orders Tab */}
        <TabsContent value="orders" className="mt-4 space-y-3">
          {ondcOrders.length === 0 ? (
            <div
              className="text-center py-8 text-muted-foreground text-xs"
              data-ocid="business.ondc.orders.empty_state"
            >
              No ONDC orders yet.
            </div>
          ) : (
            <div className="space-y-3">
              {ondcOrders.map((order: any, i: number) => (
                <div
                  key={order.id}
                  className="border border-border rounded-xl p-3 space-y-2"
                  data-ocid={`business.ondc.orders.item.${i + 1}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge
                        className="text-[10px] font-mono"
                        style={{
                          background: "oklch(0.65 0.20 40 / 0.15)",
                          color: ONDC_COLOR,
                        }}
                      >
                        ONDC
                      </Badge>
                      <span className="text-xs font-bold">#{order.id}</span>
                    </div>
                    <Badge
                      className="text-[10px]"
                      style={{
                        background:
                          order.status === "New"
                            ? "oklch(0.55 0.22 280 / 0.15)"
                            : order.status === "Confirmed"
                              ? "oklch(0.52 0.14 155 / 0.15)"
                              : order.status === "Shipped"
                                ? "oklch(0.72 0.17 85 / 0.15)"
                                : "oklch(0.55 0.22 22 / 0.15)",
                        color:
                          order.status === "New"
                            ? "oklch(0.55 0.22 280)"
                            : order.status === "Confirmed"
                              ? "oklch(0.52 0.14 155)"
                              : order.status === "Shipped"
                                ? "oklch(0.72 0.17 85)"
                                : "oklch(0.55 0.22 22)",
                      }}
                    >
                      {order.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-[11px]">
                    <span className="text-muted-foreground">
                      Buyer:{" "}
                      <span className="text-foreground font-medium">
                        {order.buyer}
                      </span>
                    </span>
                    <span className="text-muted-foreground">
                      Product:{" "}
                      <span className="text-foreground font-medium">
                        {order.product}
                      </span>
                    </span>
                    <span className="text-muted-foreground">
                      Amount:{" "}
                      <span className="text-foreground font-bold">
                        {order.amount}
                      </span>
                    </span>
                  </div>
                  {order.status === "New" && (
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="h-7 text-[11px]"
                        style={{ background: "oklch(0.52 0.14 155)" }}
                        onClick={() => handleAcceptOrder(order.id)}
                        data-ocid={`business.ondc.accept.button.${i + 1}`}
                      >
                        ✅ Accept
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-7 text-[11px]"
                        onClick={() => setCancelOrderId(order.id)}
                        data-ocid={`business.ondc.cancel.button.${i + 1}`}
                      >
                        ❌ Cancel
                      </Button>
                    </div>
                  )}
                  {order.status === "Confirmed" && (
                    <Button
                      size="sm"
                      className="h-7 text-[11px]"
                      style={{ background: ONDC_COLOR }}
                      onClick={() => handleMarkShipped(order.id)}
                      data-ocid={`business.ondc.ship.button.${i + 1}`}
                    >
                      🚚 Mark Shipped
                    </Button>
                  )}
                </div>
              ))}
            </div>
          )}
          {/* Cancel dialog */}
          <Dialog
            open={!!cancelOrderId}
            onOpenChange={() => setCancelOrderId(null)}
          >
            <DialogContent
              className="max-w-sm"
              data-ocid="business.ondc.cancel.dialog"
            >
              <DialogHeader>
                <DialogTitle className="text-sm">
                  Cancel ONDC Order #{cancelOrderId}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-3">
                <Label className="text-xs">Cancellation Reason *</Label>
                <Textarea
                  className="text-xs h-20 resize-none"
                  placeholder="Enter reason for cancellation..."
                  value={cancelReason}
                  onChange={(e) => setCancelReason(e.target.value)}
                  data-ocid="business.ondc.cancel.textarea"
                />
              </div>
              <div className="flex gap-2 mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 text-xs"
                  onClick={() => setCancelOrderId(null)}
                  data-ocid="business.ondc.cancel.close_button"
                >
                  Keep Order
                </Button>
                <Button
                  size="sm"
                  className="flex-1 text-xs"
                  style={{ background: "oklch(0.55 0.22 22)" }}
                  onClick={() =>
                    cancelOrderId && handleCancelOrder(cancelOrderId)
                  }
                  data-ocid="business.ondc.cancel.confirm_button"
                >
                  Confirm Cancel
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings" className="mt-4 space-y-3">
          <div className="space-y-4">
            {[
              {
                label: "Delivery SLA",
                key: "deliverySLA",
                options: ["Same Day", "Next Day", "2-3 Days", "5-7 Days"],
              },
              {
                label: "Cancellation Window",
                key: "cancellationWindow",
                options: ["30 min", "1 hour", "Before dispatch"],
              },
              {
                label: "Return Policy",
                key: "returnPolicy",
                options: ["No Returns", "7 Days", "15 Days"],
              },
            ].map((s) => (
              <div key={s.key}>
                <Label className="text-xs">{s.label}</Label>
                <Select
                  value={(settings as any)[s.key]}
                  onValueChange={(v) =>
                    setSettings({ ...settings, [s.key]: v })
                  }
                >
                  <SelectTrigger className="mt-1 h-8 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {s.options.map((o) => (
                      <SelectItem key={o} value={o} className="text-xs">
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ))}
            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <div>
                <p className="text-xs font-semibold">Auto-accept orders</p>
                <p className="text-[11px] text-muted-foreground">
                  Automatically confirm new ONDC orders
                </p>
              </div>
              <Switch
                checked={settings.autoAccept}
                onCheckedChange={(v) =>
                  setSettings({ ...settings, autoAccept: v })
                }
                data-ocid="business.ondc.autoaccept.switch"
              />
            </div>
          </div>
          <Button
            className="text-xs font-label"
            style={{ background: ONDC_COLOR }}
            onClick={() => toast.success("ONDC settings saved")}
            data-ocid="business.ondc.settings.save_button"
          >
            💾 Save Settings
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  );
}
