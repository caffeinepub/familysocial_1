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
  DollarSign,
  Edit,
  Package,
  PiggyBank,
  ShoppingCart,
  Trash2,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
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
      </Tabs>
    </div>
  );
}
