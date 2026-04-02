import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowUpRight,
  Box,
  ClipboardList,
  CreditCard,
  DollarSign,
  Download,
  Edit,
  Globe,
  Instagram,
  Linkedin,
  MessageCircle,
  Package,
  Phone,
  PiggyBank,
  QrCode,
  Share2,
  ShoppingCart,
  Trash2,
  TrendingUp,
  Twitter,
  User,
} from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

const MOCK_ORDERS = [
  {
    id: "ORD-2024-001",
    product: "Organic Honey 500g",
    date: "12 Mar 2026",
    status: "Delivered",
    amount: "₹450",
  },
  {
    id: "ORD-2024-002",
    product: "Premium Yoga Mat",
    date: "10 Mar 2026",
    status: "In Transit",
    amount: "₹1,299",
  },
  {
    id: "ORD-2024-003",
    product: "Electric Kettle",
    date: "8 Mar 2026",
    status: "Processing",
    amount: "₹2,100",
  },
  {
    id: "ORD-2024-004",
    product: "Room Booking - Goa Resort",
    date: "5 Mar 2026",
    status: "Confirmed",
    amount: "₹8,500",
  },
  {
    id: "ORD-2024-005",
    product: "Laptop Stand",
    date: "2 Mar 2026",
    status: "Delivered",
    amount: "₹780",
  },
];

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Handmade Candles Set",
    category: "Home Decor",
    price: "₹699",
    stock: 24,
    status: "Active",
  },
  {
    id: 2,
    name: "Organic Face Cream",
    category: "Beauty",
    price: "₹549",
    stock: 12,
    status: "Active",
  },
  {
    id: 3,
    name: "Yoga Session (1hr)",
    category: "Service",
    price: "₹899",
    stock: null,
    status: "Active",
  },
  {
    id: 4,
    name: "Web Design Package",
    category: "Service",
    price: "₹15,000",
    stock: null,
    status: "Paused",
  },
];

const MOCK_INVENTORY = [
  {
    sku: "HC-001",
    name: "Handmade Candles Set",
    stock: 24,
    reorder: 5,
    purchasePrice: 320,
    sellPrice: 699,
  },
  {
    sku: "OFC-002",
    name: "Organic Face Cream",
    stock: 12,
    reorder: 8,
    purchasePrice: 230,
    sellPrice: 549,
  },
  {
    sku: "EK-003",
    name: "Electric Kettle",
    stock: 7,
    reorder: 10,
    purchasePrice: 1200,
    sellPrice: 2100,
  },
  {
    sku: "LS-004",
    name: "Laptop Stand",
    stock: 31,
    reorder: 5,
    purchasePrice: 350,
    sellPrice: 780,
  },
];

const STATUS_COLORS: Record<string, string> = {
  Delivered: "bg-green-500/10 text-green-600",
  "In Transit": "bg-blue-500/10 text-blue-600",
  Processing: "bg-yellow-500/10 text-yellow-600",
  Confirmed: "bg-purple-500/10 text-purple-600",
  Cancelled: "bg-red-500/10 text-red-600",
};

export default function MyAccountPage() {
  const [searchOrders, setSearchOrders] = useState("");
  const [vcName, setVcName] = useState("Aakash Sharma");
  const [vcTitle, setVcTitle] = useState("Founder & CEO");
  const [vcPhone, setVcPhone] = useState("+91 98765 43210");
  const [vcEmail, setVcEmail] = useState("aakash@indyacentral.in");
  const [vcWebsite, setVcWebsite] = useState("www.indyacentral.in");
  const [vcInsta, setVcInsta] = useState("@aakash.sharma");
  const [vcLinkedin, setVcLinkedin] = useState("linkedin.com/in/aakash");
  const [vcTwitter, setVcTwitter] = useState("@aakash_s");
  const [vcWhatsapp, setVcWhatsapp] = useState("+91 98765 43210");
  const [vcPhoto, setVcPhoto] = useState<string | null>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6" data-ocid="myaccount.page">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">
          My Account
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Manage your orders, products, inventory and earnings.
        </p>
      </div>

      <Tabs defaultValue="dashboard">
        <TabsList className="flex flex-wrap h-auto gap-1 bg-muted/50">
          <TabsTrigger value="dashboard" data-ocid="myaccount.dashboard.tab">
            Dashboard
          </TabsTrigger>
          <TabsTrigger value="orders" data-ocid="myaccount.orders.tab">
            Orders &amp; Bookings
          </TabsTrigger>
          <TabsTrigger value="products" data-ocid="myaccount.products.tab">
            My Products &amp; Services
          </TabsTrigger>
          <TabsTrigger value="inventory" data-ocid="myaccount.inventory.tab">
            Inventory
          </TabsTrigger>
          <TabsTrigger
            value="visiting-card"
            data-ocid="myaccount.visiting_card.tab"
          >
            <CreditCard size={13} className="mr-1" /> Visiting Card
          </TabsTrigger>
        </TabsList>

        {/* Dashboard */}
        <TabsContent value="dashboard" className="mt-6 space-y-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: "Total Earnings",
                value: "₹48,350",
                icon: DollarSign,
                color: "text-green-600",
                bg: "bg-green-500/10",
                trend: "+12%",
              },
              {
                label: "Total Savings",
                value: "₹8,200",
                icon: PiggyBank,
                color: "text-blue-600",
                bg: "bg-blue-500/10",
                trend: "+5%",
              },
              {
                label: "Active Listings",
                value: "4",
                icon: Package,
                color: "text-purple-600",
                bg: "bg-purple-500/10",
                trend: "",
              },
              {
                label: "Pending Orders",
                value: "2",
                icon: ClipboardList,
                color: "text-orange-600",
                bg: "bg-orange-500/10",
                trend: "",
              },
            ].map((stat) => (
              <Card
                key={stat.label}
                className="rounded-2xl border-border shadow-sm"
              >
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground font-label">
                        {stat.label}
                      </p>
                      <p className="text-xl font-display font-bold text-foreground mt-1">
                        {stat.value}
                      </p>
                      {stat.trend && (
                        <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                          <TrendingUp size={11} />
                          {stat.trend} this month
                        </p>
                      )}
                    </div>
                    <div
                      className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center`}
                    >
                      <stat.icon size={17} className={stat.color} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Orders */}
          <Card className="rounded-2xl border-border shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-display flex items-center gap-2">
                <ShoppingCart size={15} className="text-primary" />
                Recent Orders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs">Order ID</TableHead>
                    <TableHead className="text-xs">Product</TableHead>
                    <TableHead className="text-xs">Date</TableHead>
                    <TableHead className="text-xs">Status</TableHead>
                    <TableHead className="text-xs text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MOCK_ORDERS.slice(0, 3).map((order, i) => (
                    <TableRow
                      key={order.id}
                      data-ocid={`myaccount.orders.row.${i + 1}`}
                    >
                      <TableCell className="text-xs font-mono">
                        {order.id}
                      </TableCell>
                      <TableCell className="text-xs">{order.product}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">
                        {order.date}
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={`text-[10px] ${STATUS_COLORS[order.status] || ""}`}
                          variant="secondary"
                        >
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-xs text-right font-semibold">
                        {order.amount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Earnings Chart Placeholder */}
          <Card className="rounded-2xl border-border shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-display flex items-center gap-2">
                <ArrowUpRight size={15} className="text-primary" />
                Earnings Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-2 h-32">
                {[28, 45, 38, 62, 55, 80, 72, 91, 68, 88, 76, 95].map(
                  (v, i) => (
                    <div
                      key={
                        [
                          "Jan",
                          "Feb",
                          "Mar",
                          "Apr",
                          "May",
                          "Jun",
                          "Jul",
                          "Aug",
                          "Sep",
                          "Oct",
                          "Nov",
                          "Dec",
                        ][i] ?? i
                      }
                      className="flex-1 rounded-t-sm"
                      style={{
                        height: `${v}%`,
                        background: "oklch(0.65 0.25 335 / 0.7)",
                      }}
                    />
                  ),
                )}
              </div>
              <div className="flex justify-between text-[10px] text-muted-foreground mt-2">
                {[
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ].map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Orders & Bookings */}
        <TabsContent value="orders" className="mt-6 space-y-4">
          <div className="flex items-center gap-3">
            <Input
              placeholder="Search orders..."
              value={searchOrders}
              onChange={(e) => setSearchOrders(e.target.value)}
              className="max-w-xs"
              data-ocid="myaccount.search_input"
            />
          </div>
          <Card className="rounded-2xl border-border shadow-sm">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs">Order ID</TableHead>
                    <TableHead className="text-xs">Product / Service</TableHead>
                    <TableHead className="text-xs">Date</TableHead>
                    <TableHead className="text-xs">Status</TableHead>
                    <TableHead className="text-xs text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MOCK_ORDERS.filter(
                    (o) =>
                      !searchOrders ||
                      o.product
                        .toLowerCase()
                        .includes(searchOrders.toLowerCase()) ||
                      o.id.toLowerCase().includes(searchOrders.toLowerCase()),
                  ).map((order, i) => (
                    <TableRow
                      key={order.id}
                      data-ocid={`myaccount.order.row.${i + 1}`}
                    >
                      <TableCell className="text-xs font-mono text-primary">
                        {order.id}
                      </TableCell>
                      <TableCell className="text-xs">{order.product}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">
                        {order.date}
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={`text-[10px] ${STATUS_COLORS[order.status] || ""}`}
                          variant="secondary"
                        >
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-xs text-right font-semibold">
                        {order.amount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* My Products & Services */}
        <TabsContent value="products" className="mt-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {MOCK_PRODUCTS.map((product, i) => (
              <Card
                key={product.id}
                className="rounded-2xl border-border shadow-sm"
                data-ocid={`myaccount.product.card.${i + 1}`}
              >
                <CardContent className="p-4 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Box size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {product.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {product.category}
                      </p>
                      <p className="text-sm font-bold text-primary mt-1">
                        {product.price}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge
                      variant="secondary"
                      className={`text-[10px] ${product.status === "Active" ? "bg-green-500/10 text-green-600" : "bg-muted text-muted-foreground"}`}
                    >
                      {product.status}
                    </Badge>
                    {product.stock !== null && (
                      <p className="text-[10px] text-muted-foreground">
                        Stock: {product.stock}
                      </p>
                    )}
                    <div className="flex gap-1">
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-7 w-7 p-0"
                        onClick={() => toast.info(`Editing ${product.name}`)}
                        data-ocid={`myaccount.product.edit_button.${i + 1}`}
                      >
                        <Edit size={12} />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-7 w-7 p-0 text-destructive hover:text-destructive"
                        onClick={() => toast.success(`${product.name} removed`)}
                        data-ocid={`myaccount.product.delete_button.${i + 1}`}
                      >
                        <Trash2 size={12} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Inventory */}
        <TabsContent value="inventory" className="mt-6">
          <Card className="rounded-2xl border-border shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-display">
                Product Inventory
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table data-ocid="myaccount.inventory.table">
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs">SKU</TableHead>
                    <TableHead className="text-xs">Product</TableHead>
                    <TableHead className="text-xs">Stock Qty</TableHead>
                    <TableHead className="text-xs">Reorder Level</TableHead>
                    <TableHead className="text-xs">Purchase Price</TableHead>
                    <TableHead className="text-xs">Sell Price</TableHead>
                    <TableHead className="text-xs">Margin %</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MOCK_INVENTORY.map((item, i) => {
                    const margin = Math.round(
                      ((item.sellPrice - item.purchasePrice) / item.sellPrice) *
                        100,
                    );
                    const lowStock = item.stock <= item.reorder;
                    return (
                      <TableRow
                        key={item.sku}
                        data-ocid={`myaccount.inventory.row.${i + 1}`}
                      >
                        <TableCell className="text-xs font-mono">
                          {item.sku}
                        </TableCell>
                        <TableCell className="text-xs font-medium">
                          {item.name}
                        </TableCell>
                        <TableCell className="text-xs">
                          <span
                            className={
                              lowStock ? "text-red-500 font-semibold" : ""
                            }
                          >
                            {item.stock}
                          </span>
                          {lowStock && (
                            <Badge
                              variant="destructive"
                              className="ml-2 text-[9px]"
                            >
                              Low
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-xs">
                          {item.reorder}
                        </TableCell>
                        <TableCell className="text-xs">
                          ₹{item.purchasePrice}
                        </TableCell>
                        <TableCell className="text-xs">
                          ₹{item.sellPrice}
                        </TableCell>
                        <TableCell className="text-xs">
                          <span className="text-green-600 font-semibold">
                            {margin}%
                          </span>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        {/* Visiting Card */}
        <TabsContent
          value="visiting-card"
          className="mt-6 space-y-6"
          data-ocid="myaccount.visiting_card.panel"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Card Preview */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Live Preview
              </h3>
              <div
                className="relative rounded-2xl p-6 overflow-hidden shadow-xl min-h-[200px] flex flex-col justify-between"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.32 0.20 280) 0%, oklch(0.25 0.22 310) 50%, oklch(0.30 0.25 335) 100%)",
                  color: "white",
                }}
                data-ocid="myaccount.visiting_card.card"
              >
                {/* Background decoration */}
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10"
                  style={{
                    background: "oklch(0.80 0.20 335)",
                    transform: "translate(30%, -30%)",
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-10"
                  style={{
                    background: "oklch(0.70 0.22 280)",
                    transform: "translate(-30%, 30%)",
                  }}
                />

                {/* Top section */}
                <div className="flex items-start justify-between relative z-10">
                  <div className="flex items-start gap-3">
                    {vcPhoto ? (
                      <img
                        src={vcPhoto}
                        alt="Profile"
                        className="w-14 h-14 rounded-full object-cover border-2 border-white/30"
                      />
                    ) : (
                      <div
                        className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center"
                        style={{ background: "oklch(0.45 0.22 280)" }}
                      >
                        <User size={24} className="text-white/80" />
                      </div>
                    )}
                    <div>
                      <h2 className="text-xl font-bold text-white leading-tight">
                        {vcName || "Your Name"}
                      </h2>
                      <p className="text-sm text-white/80 mt-0.5">
                        {vcTitle || "Your Title"}
                      </p>
                    </div>
                  </div>
                  {/* Decorative QR */}
                  <div className="shrink-0">
                    <DecorativeQR />
                  </div>
                </div>

                {/* Contact details */}
                <div className="relative z-10 space-y-1.5 mt-4">
                  <div className="flex items-center gap-2 text-xs text-white/90">
                    <Phone size={11} />
                    <span>{vcPhone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/90">
                    <MessageCircle size={11} />
                    <span>{vcEmail}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/90">
                    <Globe size={11} />
                    <span>{vcWebsite}</span>
                  </div>
                </div>

                {/* Social links */}
                <div className="relative z-10 flex items-center gap-3 mt-3 pt-3 border-t border-white/20">
                  {vcInsta && (
                    <div className="flex items-center gap-1 text-[10px] text-white/70">
                      <Instagram size={10} />
                      <span>{vcInsta}</span>
                    </div>
                  )}
                  {vcLinkedin && (
                    <div className="flex items-center gap-1 text-[10px] text-white/70">
                      <Linkedin size={10} />
                      <span>in</span>
                    </div>
                  )}
                  {vcTwitter && (
                    <div className="flex items-center gap-1 text-[10px] text-white/70">
                      <Twitter size={10} />
                      <span>{vcTwitter}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 gap-1.5"
                  onClick={() => toast.success("Card downloaded as image")}
                  data-ocid="myaccount.visiting_card.download_button"
                >
                  <Download size={14} /> Download
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 gap-1.5"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `https://indyacentral.in/card/${vcName.replace(/\s+/g, "-").toLowerCase()}`,
                    );
                    toast.success("Link copied!", {
                      description: "Share your visiting card link",
                    });
                  }}
                  data-ocid="myaccount.visiting_card.secondary_button"
                >
                  <QrCode size={14} /> Copy Link
                </Button>
                <Button
                  size="sm"
                  className="flex-1 gap-1.5"
                  onClick={() => toast.success("Card shared successfully")}
                  data-ocid="myaccount.visiting_card.primary_button"
                >
                  <Share2 size={14} /> Share
                </Button>
              </div>
            </div>

            {/* Edit Form */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Edit Details
              </h3>
              <Card className="rounded-2xl border-border">
                <CardContent className="p-4 space-y-3">
                  {/* Photo Upload */}
                  <div className="flex items-center gap-3">
                    <label
                      htmlFor="vc-photo-input"
                      className="w-16 h-16 rounded-full border-2 border-dashed border-border flex items-center justify-center cursor-pointer hover:border-primary transition-colors overflow-hidden"
                      data-ocid="myaccount.visiting_card.upload_button"
                    >
                      {vcPhoto ? (
                        <img
                          src={vcPhoto}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User size={20} className="text-muted-foreground" />
                      )}
                    </label>
                    <input
                      id="vc-photo-input"
                      ref={photoInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        const reader = new FileReader();
                        reader.onload = (ev) =>
                          setVcPhoto(ev.target?.result as string);
                        reader.readAsDataURL(file);
                      }}
                    />
                    <div>
                      <p className="text-xs font-medium">Profile Photo</p>
                      <p className="text-[10px] text-muted-foreground">
                        Click to upload (JPG, PNG)
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label className="text-xs">Full Name</Label>
                      <Input
                        value={vcName}
                        onChange={(e) => setVcName(e.target.value)}
                        className="mt-1 h-8 text-xs"
                        placeholder="Your name"
                        data-ocid="myaccount.visiting_card.input"
                      />
                    </div>
                    <div>
                      <Label className="text-xs">Designation / Title</Label>
                      <Input
                        value={vcTitle}
                        onChange={(e) => setVcTitle(e.target.value)}
                        className="mt-1 h-8 text-xs"
                        placeholder="CEO, Developer..."
                        data-ocid="myaccount.visiting_card.input"
                      />
                    </div>
                    <div>
                      <Label className="text-xs">Phone</Label>
                      <Input
                        value={vcPhone}
                        onChange={(e) => setVcPhone(e.target.value)}
                        className="mt-1 h-8 text-xs"
                        placeholder="+91..."
                        data-ocid="myaccount.visiting_card.input"
                      />
                    </div>
                    <div>
                      <Label className="text-xs">Email</Label>
                      <Input
                        value={vcEmail}
                        onChange={(e) => setVcEmail(e.target.value)}
                        className="mt-1 h-8 text-xs"
                        type="email"
                        placeholder="you@email.com"
                        data-ocid="myaccount.visiting_card.input"
                      />
                    </div>
                    <div className="col-span-2">
                      <Label className="text-xs">Website URL</Label>
                      <Input
                        value={vcWebsite}
                        onChange={(e) => setVcWebsite(e.target.value)}
                        className="mt-1 h-8 text-xs"
                        placeholder="www.yoursite.com"
                        data-ocid="myaccount.visiting_card.input"
                      />
                    </div>
                  </div>

                  <div className="pt-2 border-t border-border">
                    <p className="text-xs font-semibold text-muted-foreground mb-2">
                      Social Links
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Instagram
                          size={14}
                          className="text-muted-foreground shrink-0"
                        />
                        <Input
                          value={vcInsta}
                          onChange={(e) => setVcInsta(e.target.value)}
                          className="h-7 text-xs"
                          placeholder="@handle"
                          data-ocid="myaccount.visiting_card.input"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <Linkedin
                          size={14}
                          className="text-muted-foreground shrink-0"
                        />
                        <Input
                          value={vcLinkedin}
                          onChange={(e) => setVcLinkedin(e.target.value)}
                          className="h-7 text-xs"
                          placeholder="linkedin.com/in/..."
                          data-ocid="myaccount.visiting_card.input"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <Twitter
                          size={14}
                          className="text-muted-foreground shrink-0"
                        />
                        <Input
                          value={vcTwitter}
                          onChange={(e) => setVcTwitter(e.target.value)}
                          className="h-7 text-xs"
                          placeholder="@handle"
                          data-ocid="myaccount.visiting_card.input"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle
                          size={14}
                          className="text-muted-foreground shrink-0"
                        />
                        <Input
                          value={vcWhatsapp}
                          onChange={(e) => setVcWhatsapp(e.target.value)}
                          className="h-7 text-xs"
                          placeholder="+91..."
                          data-ocid="myaccount.visiting_card.input"
                        />
                      </div>
                    </div>
                  </div>

                  <Button
                    className="w-full gap-2"
                    onClick={() => toast.success("Visiting card saved!")}
                    data-ocid="myaccount.visiting_card.save_button"
                  >
                    <CreditCard size={14} /> Save Card
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Decorative QR code made from CSS grid
function DecorativeQR() {
  const pattern = [
    1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0,
    1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0,
    1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0,
    1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0,
    0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0,
    0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0,
    1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0,
    0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0,
    0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0,
    0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0,
    0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0,
    0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0,
    0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
    0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0,
  ];
  return (
    <div
      className="grid gap-0 rounded-sm overflow-hidden"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(19, 3px)",
        width: 57,
        height: 57,
        background: "white",
        padding: 3,
      }}
    >
      {pattern.map((cell, i) => {
        const row = Math.floor(i / 19);
        const col = i % 19;
        return (
          <div
            key={`r${row}c${col}`}
            style={{
              width: 3,
              height: 3,
              background: cell ? "#1a1a2e" : "white",
            }}
          />
        );
      })}
    </div>
  );
}
