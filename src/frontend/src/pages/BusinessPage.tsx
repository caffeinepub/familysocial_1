import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Building2,
  CheckCircle2,
  ChefHat,
  Clock,
  CreditCard,
  GitBranch,
  Mail,
  MapPin,
  Phone,
  QrCode,
  RefreshCw,
  Star,
  Truck,
  User,
  Utensils,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

// ─── Mock Data ───────────────────────────────────────────────────────────────

const MOCK_PRODUCTS = [
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

const MOCK_SERVICES = [
  { id: 1, name: "Home Delivery", price: 40, duration: "30-45 min" },
  { id: 2, name: "Catering Package", price: 5000, duration: "Per event" },
  { id: 3, name: "Private Dining", price: 2000, duration: "2 hours" },
  { id: 4, name: "Corporate Lunch Box", price: 200, duration: "Per person" },
];

const BRANCHES = [
  {
    id: "b1",
    name: "Connaught Place, Delhi",
    tables: 20,
    activeOrders: 12,
    revenue: 45200,
  },
  {
    id: "b2",
    name: "Bandra West, Mumbai",
    tables: 15,
    activeOrders: 8,
    revenue: 32800,
  },
  {
    id: "b3",
    name: "MG Road, Bangalore",
    tables: 18,
    activeOrders: 5,
    revenue: 28600,
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
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedBranch, setSelectedBranch] = useState("b1");
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

  const branch = BRANCHES.find((b) => b.id === selectedBranch) ?? BRANCHES[0];

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

      <Tabs defaultValue="storefront">
        <TabsList className="flex flex-wrap h-auto gap-1 bg-muted/50">
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
        </TabsList>

        {/* ── Storefront ── */}
        <TabsContent value="storefront" className="mt-6 space-y-6">
          {/* Business Header */}
          <Card className="rounded-2xl border-border">
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
                    Spice Garden Restaurant
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Authentic North Indian Cuisine · Est. 2018
                  </p>
                  <div className="flex flex-wrap gap-3 mt-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} /> Connaught Place, New Delhi
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone size={12} /> +91 98765 43210
                    </span>
                    <span className="flex items-center gap-1">
                      <Mail size={12} /> hello@spicegarden.in
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mt-3">
                    {[1, 2, 3, 4].map((s) => (
                      <Star
                        key={s}
                        size={14}
                        fill="oklch(0.72 0.19 85)"
                        style={{ color: "oklch(0.72 0.19 85)" }}
                      />
                    ))}
                    <Star size={14} className="text-muted-foreground" />
                    <span className="text-xs text-muted-foreground ml-1">
                      4.2 (128 reviews)
                    </span>
                  </div>
                </div>
                {/* Business QR Card */}
                <div
                  className="rounded-xl border-2 p-4 text-center shrink-0 w-40"
                  style={{ borderColor: "oklch(0.65 0.25 335 / 0.4)" }}
                  data-ocid="business.qr.card"
                >
                  <div
                    className="w-20 h-20 border-2 rounded-lg mx-auto flex items-center justify-center mb-2"
                    style={{ borderColor: "oklch(0.55 0.22 280)" }}
                  >
                    <QrCode
                      size={36}
                      style={{ color: "oklch(0.55 0.22 280)" }}
                    />
                  </div>
                  <p className="text-[10px] font-bold text-foreground">
                    Spice Garden
                  </p>
                  <p className="text-[9px] text-muted-foreground">
                    CP, New Delhi
                  </p>
                  <p className="text-[9px] text-muted-foreground">
                    +91 98765 43210
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Products */}
          <div>
            <h3 className="text-base font-display font-semibold text-foreground mb-3">
              Products
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {MOCK_PRODUCTS.map((p) => (
                <Card key={p.id} className="rounded-xl border-border">
                  <CardContent className="p-3">
                    <Badge variant="secondary" className="text-[10px] mb-2">
                      {p.category}
                    </Badge>
                    <p className="text-sm font-label font-semibold text-foreground">
                      {p.name}
                    </p>
                    <p
                      className="text-xs font-bold mt-1"
                      style={{ color: "oklch(0.52 0.14 155)" }}
                    >
                      ₹{p.price}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-display font-semibold text-foreground mb-3">
              Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {MOCK_SERVICES.map((s) => (
                <Card key={s.id} className="rounded-xl border-border">
                  <CardContent className="p-3 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-label font-semibold text-foreground">
                        {s.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {s.duration}
                      </p>
                    </div>
                    <span
                      className="text-sm font-bold"
                      style={{ color: "oklch(0.55 0.22 280)" }}
                    >
                      ₹{s.price}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Customer Care */}
          <Card className="rounded-2xl border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-display flex items-center gap-2">
                <Phone size={15} style={{ color: "oklch(0.52 0.14 155)" }} />
                Customer Care
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="flex items-center gap-2 text-muted-foreground">
                <Phone size={13} /> +91 98765 43210
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <Mail size={13} /> support@spicegarden.in
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <Clock size={13} /> Mon–Sun: 11 AM – 11 PM
              </p>
            </CardContent>
          </Card>

          {/* Rate Business */}
          <Card className="rounded-2xl border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-display">
                Rate This Business
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setRating(s)}
                    onMouseEnter={() => setHoverRating(s)}
                    onMouseLeave={() => setHoverRating(0)}
                    data-ocid="business.star.button"
                  >
                    <Star
                      size={28}
                      fill={
                        (hoverRating || rating) >= s
                          ? "oklch(0.72 0.19 85)"
                          : "transparent"
                      }
                      style={{
                        color:
                          (hoverRating || rating) >= s
                            ? "oklch(0.72 0.19 85)"
                            : "oklch(0.7 0.05 280)",
                      }}
                    />
                  </button>
                ))}
              </div>
              <Button
                size="sm"
                disabled={rating === 0}
                onClick={() => {
                  toast.success("Thank you for your review!");
                  setRating(0);
                }}
                data-ocid="business.rating.submit_button"
              >
                Submit Rating
              </Button>
            </CardContent>
          </Card>
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
          <div className="flex flex-wrap gap-2">
            {BRANCHES.map((b) => (
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
          </div>

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
                    {BRANCHES.map((b, idx) => (
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
