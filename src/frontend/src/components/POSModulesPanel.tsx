import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertTriangle,
  ArrowRight,
  Box,
  Building2,
  Car,
  Headphones,
  Package,
  Phone,
  Truck,
  Users,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

// ─── Inventory & Materials ────────────────────────────────────────────────────
const STOCK_ITEMS = [
  {
    sku: "RM-001",
    name: "Basmati Rice (50kg)",
    qty: 12,
    unit: "Bag",
    reorder: 5,
    supplier: "Kohinoor Agro",
  },
  {
    sku: "RM-002",
    name: "Refined Oil (15L)",
    qty: 8,
    unit: "Can",
    reorder: 10,
    supplier: "Fortune Foods",
  },
  {
    sku: "RM-003",
    name: "Chicken (Frozen)",
    qty: 25,
    unit: "Kg",
    reorder: 15,
    supplier: "Fresh Farms",
  },
  {
    sku: "RM-004",
    name: "Tomatoes",
    qty: 3,
    unit: "Crate",
    reorder: 5,
    supplier: "Local Mandi",
  },
  {
    sku: "FG-001",
    name: "Paper Cups (100pcs)",
    qty: 50,
    unit: "Pack",
    reorder: 20,
    supplier: "Print Pack",
  },
];

const BOM = [
  {
    product: "Butter Chicken (1 kg)",
    materials: "Chicken 400g, Butter 50g, Cream 100ml, Tomatoes 200g, Spices",
  },
  {
    product: "Dal Makhani (1 kg)",
    materials: "Black Lentils 300g, Butter 80g, Cream 100ml, Tomatoes 150g",
  },
  {
    product: "Garlic Naan (piece)",
    materials: "Flour 100g, Garlic 5g, Butter 10g, Yeast",
  },
];

// ─── Assembly Work Orders ────────────────────────────────────────────────────
const WORK_ORDERS = [
  {
    id: "WO-001",
    product: "Thali Special",
    qty: 20,
    bom: "Rice+Dal+Paneer+Roti",
    status: "In Progress",
  },
  {
    id: "WO-002",
    product: "Catering Box",
    qty: 50,
    bom: "Main+Bread+Dessert+Drink",
    status: "Pending",
  },
  {
    id: "WO-003",
    product: "Party Platter",
    qty: 10,
    bom: "Starters x6+Dips+Bread",
    status: "Done",
  },
];

// ─── Telecom ────────────────────────────────────────────────────────────────
const SIM_PLANS = [
  {
    id: "SIM-001",
    operator: "Jio",
    type: "Prepaid",
    plan: "₹299/mo",
    status: "Active",
  },
  {
    id: "SIM-002",
    operator: "Airtel",
    type: "Postpaid",
    plan: "₹599/mo",
    status: "Active",
  },
  {
    id: "SIM-003",
    operator: "Vi",
    type: "Prepaid",
    plan: "₹199/mo",
    status: "Inactive",
  },
];

// ─── Transport & Shipping ────────────────────────────────────────────────────
const SHIPMENTS = [
  {
    id: "SHP-001",
    carrier: "BlueDart",
    origin: "Delhi",
    dest: "Mumbai",
    status: "In Transit",
  },
  {
    id: "SHP-002",
    carrier: "Delhivery",
    origin: "Bangalore",
    dest: "Pune",
    status: "Delivered",
  },
  {
    id: "SHP-003",
    carrier: "DTDC",
    origin: "Chennai",
    dest: "Hyderabad",
    status: "Pending Pickup",
  },
];

// ─── Porter ──────────────────────────────────────────────────────────────────
const PORTERS = [
  {
    id: 1,
    name: "Ramesh Kumar",
    phone: "+91 98001 11111",
    available: true,
    zone: "Zone A",
  },
  {
    id: 2,
    name: "Suresh Singh",
    phone: "+91 98001 22222",
    available: false,
    zone: "Zone B",
  },
  {
    id: 3,
    name: "Mahesh Patel",
    phone: "+91 98001 33333",
    available: true,
    zone: "Zone A",
  },
];

// ─── Vehicle Rental ──────────────────────────────────────────────────────────
const FLEET = [
  {
    id: "VH-001",
    type: "Sedan",
    model: "Maruti Swift Dzire",
    status: "Available",
    daily: 1200,
    weekly: 7500,
    monthly: 28000,
  },
  {
    id: "VH-002",
    type: "SUV",
    model: "Mahindra Scorpio",
    status: "Rented",
    daily: 2500,
    weekly: 15000,
    monthly: 55000,
  },
  {
    id: "VH-003",
    type: "Tempo",
    model: "Tata Ace",
    status: "Maintenance",
    daily: 1800,
    weekly: 11000,
    monthly: 40000,
  },
];

// ─── Call Center ─────────────────────────────────────────────────────────────
const TICKETS = [
  {
    id: "TKT-001",
    customer: "Priya Sharma",
    issue: "Order not delivered",
    priority: "High",
    agent: "Amit",
    status: "Open",
  },
  {
    id: "TKT-002",
    customer: "Rahul Verma",
    issue: "Wrong item received",
    priority: "Medium",
    agent: "Neha",
    status: "In Progress",
  },
  {
    id: "TKT-003",
    customer: "Sunita Patel",
    issue: "Refund request",
    priority: "Low",
    agent: "Unassigned",
    status: "Pending",
  },
  {
    id: "TKT-004",
    customer: "Arun Nair",
    issue: "Payment failed",
    priority: "High",
    agent: "Amit",
    status: "Resolved",
  },
];

const PRIORITY_COLORS: Record<string, string> = {
  High: "oklch(0.58 0.22 25)",
  Medium: "oklch(0.72 0.19 85)",
  Low: "oklch(0.52 0.14 155)",
};

const STATUS_COLORS: Record<string, string> = {
  Open: "oklch(0.58 0.22 25)",
  "In Progress": "oklch(0.72 0.19 85)",
  Pending: "oklch(0.55 0.22 280)",
  Resolved: "oklch(0.52 0.14 155)",
  Active: "oklch(0.52 0.14 155)",
  Inactive: "oklch(0.5 0.05 280)",
  Available: "oklch(0.52 0.14 155)",
  Rented: "oklch(0.72 0.19 85)",
  Maintenance: "oklch(0.58 0.22 25)",
  "In Transit": "oklch(0.55 0.22 280)",
  Delivered: "oklch(0.52 0.14 155)",
  "Pending Pickup": "oklch(0.72 0.19 85)",
  "In Progress wo": "oklch(0.55 0.22 280)",
  Done: "oklch(0.52 0.14 155)",
};

function SBadge({ label, color }: { label: string; color?: string }) {
  const c = color ?? STATUS_COLORS[label] ?? "oklch(0.5 0.05 280)";
  return (
    <span
      className="text-[11px] font-label font-semibold px-2 py-0.5 rounded-full"
      style={{ background: `${c}20`, color: c }}
    >
      {label}
    </span>
  );
}

function TH({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-4 py-3 text-left text-xs font-label font-semibold text-muted-foreground bg-muted/30">
      {children}
    </th>
  );
}

function TD({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <td
      className={`px-4 py-3 text-xs text-foreground ${className}`}
      style={style}
    >
      {children}
    </td>
  );
}

export default function POSModulesPanel() {
  const [newWoProduct, setNewWoProduct] = useState("");
  const [newWoQty, setNewWoQty] = useState("1");

  return (
    <div
      className="mt-8 border-t border-border pt-8"
      data-ocid="pos.modules.section"
    >
      <div className="mb-4">
        <h2 className="text-lg font-display font-bold text-foreground">
          Business Modules
        </h2>
        <p className="text-xs text-muted-foreground mt-1">
          Integrated supply chain: Manufacturer → Distributor → Retailer
        </p>
      </div>

      <Tabs defaultValue="inventory">
        <TabsList className="flex flex-wrap h-auto gap-1 bg-muted/50 mb-4">
          <TabsTrigger value="inventory" data-ocid="pos.modules.inventory.tab">
            <Box size={12} className="mr-1" />
            Inventory
          </TabsTrigger>
          <TabsTrigger value="assembly" data-ocid="pos.modules.assembly.tab">
            <Wrench size={12} className="mr-1" />
            Assembly
          </TabsTrigger>
          <TabsTrigger value="telecom" data-ocid="pos.modules.telecom.tab">
            <Phone size={12} className="mr-1" />
            Telecom
          </TabsTrigger>
          <TabsTrigger value="transport" data-ocid="pos.modules.transport.tab">
            <Truck size={12} className="mr-1" />
            Transport
          </TabsTrigger>
          <TabsTrigger value="porter" data-ocid="pos.modules.porter.tab">
            <Users size={12} className="mr-1" />
            Porter
          </TabsTrigger>
          <TabsTrigger value="vehicles" data-ocid="pos.modules.vehicles.tab">
            <Car size={12} className="mr-1" />
            Vehicle Rental
          </TabsTrigger>
          <TabsTrigger
            value="callcenter"
            data-ocid="pos.modules.callcenter.tab"
          >
            <Headphones size={12} className="mr-1" />
            Call Center
          </TabsTrigger>
          <TabsTrigger
            value="supplychain"
            data-ocid="pos.modules.supplychain.tab"
          >
            <Building2 size={12} className="mr-1" />
            Supply Chain
          </TabsTrigger>
        </TabsList>

        {/* ── Inventory & Materials ── */}
        <TabsContent value="inventory" className="space-y-4">
          {STOCK_ITEMS.some((s) => s.qty <= s.reorder) && (
            <div
              className="flex items-center gap-2 p-3 rounded-xl text-sm"
              style={{
                background: "oklch(0.58 0.22 25 / 0.1)",
                color: "oklch(0.58 0.22 25)",
              }}
              data-ocid="pos.inventory.alert"
            >
              <AlertTriangle size={15} />
              <span className="font-label font-semibold">Low Stock Alert:</span>
              <span>
                {STOCK_ITEMS.filter((s) => s.qty <= s.reorder)
                  .map((s) => s.name)
                  .join(", ")}
              </span>
            </div>
          )}

          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full">
              <thead>
                <tr>
                  <TH>SKU</TH>
                  <TH>Item</TH>
                  <TH>Qty</TH>
                  <TH>Unit</TH>
                  <TH>Reorder Level</TH>
                  <TH>Supplier</TH>
                  <TH>Status</TH>
                </tr>
              </thead>
              <tbody>
                {STOCK_ITEMS.map((s, i) => (
                  <tr
                    key={s.sku}
                    className="border-t border-border"
                    data-ocid={`pos.inventory.row.${i + 1}`}
                  >
                    <TD className="font-mono text-muted-foreground">{s.sku}</TD>
                    <TD className="font-semibold">{s.name}</TD>
                    <TD>
                      <span
                        className={
                          s.qty <= s.reorder ? "text-destructive font-bold" : ""
                        }
                      >
                        {s.qty}
                      </span>
                    </TD>
                    <TD>{s.unit}</TD>
                    <TD>{s.reorder}</TD>
                    <TD>{s.supplier}</TD>
                    <TD>
                      {s.qty <= s.reorder ? (
                        <SBadge label="Low Stock" color="oklch(0.58 0.22 25)" />
                      ) : (
                        <SBadge label="OK" color="oklch(0.52 0.14 155)" />
                      )}
                    </TD>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Card className="rounded-xl border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-display">
                Bill of Materials (BOM)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {BOM.map((b) => (
                <div
                  key={b.product}
                  className="flex gap-3 text-xs border-b border-border pb-2 last:border-0 last:pb-0"
                >
                  <span className="font-semibold text-foreground min-w-[140px]">
                    {b.product}
                  </span>
                  <span className="text-muted-foreground">{b.materials}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* ── Assembly ── */}
        <TabsContent value="assembly" className="space-y-4">
          <Card className="rounded-xl border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-xs font-display">
                Create Work Order
              </CardTitle>
            </CardHeader>
            <CardContent className="flex gap-3 flex-wrap">
              <div className="flex-1 min-w-[140px] space-y-1">
                <Label className="text-[10px]">Product</Label>
                <Input
                  className="h-8 text-xs"
                  placeholder="Product name"
                  value={newWoProduct}
                  onChange={(e) => setNewWoProduct(e.target.value)}
                  data-ocid="pos.assembly.product.input"
                />
              </div>
              <div className="w-24 space-y-1">
                <Label className="text-[10px]">Qty</Label>
                <Input
                  className="h-8 text-xs"
                  type="number"
                  value={newWoQty}
                  onChange={(e) => setNewWoQty(e.target.value)}
                  data-ocid="pos.assembly.qty.input"
                />
              </div>
              <div className="flex items-end">
                <Button
                  size="sm"
                  className="h-8"
                  onClick={() => {
                    if (!newWoProduct) return;
                    toast.success(
                      `Work order created for ${newWoProduct} x${newWoQty}`,
                    );
                    setNewWoProduct("");
                    setNewWoQty("1");
                  }}
                  data-ocid="pos.assembly.create.primary_button"
                >
                  Create WO
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full">
              <thead>
                <tr>
                  <TH>WO ID</TH>
                  <TH>Product</TH>
                  <TH>BOM</TH>
                  <TH>Qty</TH>
                  <TH>Status</TH>
                </tr>
              </thead>
              <tbody>
                {WORK_ORDERS.map((w, i) => (
                  <tr
                    key={w.id}
                    className="border-t border-border"
                    data-ocid={`pos.assembly.row.${i + 1}`}
                  >
                    <TD className="font-mono">{w.id}</TD>
                    <TD className="font-semibold">{w.product}</TD>
                    <TD className="text-muted-foreground">{w.bom}</TD>
                    <TD>{w.qty}</TD>
                    <TD>
                      <SBadge label={w.status} />
                    </TD>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        {/* ── Telecom ── */}
        <TabsContent value="telecom" className="space-y-4">
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full">
              <thead>
                <tr>
                  <TH>SIM ID</TH>
                  <TH>Operator</TH>
                  <TH>Type</TH>
                  <TH>Plan</TH>
                  <TH>Status</TH>
                  <TH>Actions</TH>
                </tr>
              </thead>
              <tbody>
                {SIM_PLANS.map((s, i) => (
                  <tr
                    key={s.id}
                    className="border-t border-border"
                    data-ocid={`pos.telecom.row.${i + 1}`}
                  >
                    <TD className="font-mono">{s.id}</TD>
                    <TD className="font-semibold">{s.operator}</TD>
                    <TD>{s.type}</TD>
                    <TD
                      className="font-semibold"
                      style={{ color: "oklch(0.52 0.14 155)" }}
                    >
                      {s.plan}
                    </TD>
                    <TD>
                      <SBadge label={s.status} />
                    </TD>
                    <TD>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-6 text-[10px] px-2"
                        onClick={() => toast.info("Edit plan config")}
                        data-ocid={`pos.telecom.edit.button.${i + 1}`}
                      >
                        Edit
                      </Button>
                    </TD>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => toast.success("Add SIM dialog would open")}
            data-ocid="pos.telecom.add.button"
          >
            <Phone size={13} className="mr-1.5" /> Add SIM/Plan
          </Button>
        </TabsContent>

        {/* ── Transport & Shipping ── */}
        <TabsContent value="transport" className="space-y-4">
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full">
              <thead>
                <tr>
                  <TH>Tracking ID</TH>
                  <TH>Carrier</TH>
                  <TH>Origin</TH>
                  <TH>Destination</TH>
                  <TH>Status</TH>
                </tr>
              </thead>
              <tbody>
                {SHIPMENTS.map((s, i) => (
                  <tr
                    key={s.id}
                    className="border-t border-border"
                    data-ocid={`pos.shipping.row.${i + 1}`}
                  >
                    <TD className="font-mono">{s.id}</TD>
                    <TD className="font-semibold">{s.carrier}</TD>
                    <TD>{s.origin}</TD>
                    <TD>{s.dest}</TD>
                    <TD>
                      <SBadge label={s.status} />
                    </TD>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => toast.success("Add shipment dialog")}
            data-ocid="pos.shipping.add.button"
          >
            <Truck size={13} className="mr-1.5" /> New Shipment
          </Button>
        </TabsContent>

        {/* ── Porter ── */}
        <TabsContent value="porter" className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {PORTERS.map((p, i) => (
              <Card
                key={p.id}
                className="rounded-xl border-border"
                data-ocid={`pos.porter.card.${i + 1}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        background: p.available
                          ? "oklch(0.52 0.14 155 / 0.15)"
                          : "oklch(0.5 0.05 280 / 0.15)",
                        color: p.available
                          ? "oklch(0.52 0.14 155)"
                          : "oklch(0.5 0.05 280)",
                      }}
                    >
                      {p.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-foreground truncate">
                        {p.name}
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        {p.phone}
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        {p.zone}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <SBadge label={p.available ? "Available" : "Busy"} />
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-6 text-[10px] px-2"
                      disabled={!p.available}
                      onClick={() => toast.success(`${p.name} assigned`)}
                      data-ocid={`pos.porter.assign.button.${i + 1}`}
                    >
                      Assign
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* ── Vehicle Rental ── */}
        <TabsContent value="vehicles" className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {FLEET.map((v, i) => (
              <Card
                key={v.id}
                className="rounded-xl border-border"
                data-ocid={`pos.vehicle.card.${i + 1}`}
              >
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-label font-semibold text-foreground">
                        {v.model}
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        {v.type} · {v.id}
                      </p>
                    </div>
                    <SBadge label={v.status} />
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <p className="text-[10px] text-muted-foreground">Daily</p>
                      <p className="text-xs font-bold text-foreground">
                        ₹{v.daily}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground">
                        Weekly
                      </p>
                      <p className="text-xs font-bold text-foreground">
                        ₹{v.weekly}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground">
                        Monthly
                      </p>
                      <p className="text-xs font-bold text-foreground">
                        ₹{v.monthly}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full h-7 text-xs"
                    disabled={v.status !== "Available"}
                    onClick={() =>
                      toast.success(`${v.model} booking initiated`)
                    }
                    data-ocid={`pos.vehicle.book.button.${i + 1}`}
                  >
                    {v.status === "Available" ? "Book Now" : v.status}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* ── Call Center ── */}
        <TabsContent value="callcenter" className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              {
                label: "Open",
                val: TICKETS.filter((t) => t.status === "Open").length,
                color: "oklch(0.58 0.22 25)",
              },
              {
                label: "In Progress",
                val: TICKETS.filter((t) => t.status === "In Progress").length,
                color: "oklch(0.55 0.22 280)",
              },
              {
                label: "Pending",
                val: TICKETS.filter((t) => t.status === "Pending").length,
                color: "oklch(0.72 0.19 85)",
              },
              {
                label: "Resolved",
                val: TICKETS.filter((t) => t.status === "Resolved").length,
                color: "oklch(0.52 0.14 155)",
              },
            ].map((s) => (
              <Card key={s.label} className="rounded-xl border-border">
                <CardContent className="p-3">
                  <p className="text-[10px] text-muted-foreground">{s.label}</p>
                  <p
                    className="text-xl font-display font-bold mt-0.5"
                    style={{ color: s.color }}
                  >
                    {s.val}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full">
              <thead>
                <tr>
                  <TH>Ticket</TH>
                  <TH>Customer</TH>
                  <TH>Issue</TH>
                  <TH>Priority</TH>
                  <TH>Agent</TH>
                  <TH>Status</TH>
                </tr>
              </thead>
              <tbody>
                {TICKETS.map((t, i) => (
                  <tr
                    key={t.id}
                    className="border-t border-border"
                    data-ocid={`pos.callcenter.row.${i + 1}`}
                  >
                    <TD className="font-mono">{t.id}</TD>
                    <TD className="font-semibold">{t.customer}</TD>
                    <TD className="text-muted-foreground">{t.issue}</TD>
                    <TD>
                      <SBadge
                        label={t.priority}
                        color={PRIORITY_COLORS[t.priority]}
                      />
                    </TD>
                    <TD>{t.agent}</TD>
                    <TD>
                      <SBadge label={t.status} />
                    </TD>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        {/* ── Supply Chain ── */}
        <TabsContent value="supplychain" className="space-y-4">
          <p className="text-xs text-muted-foreground">
            End-to-end supply chain flow — no data duplication across stages
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2">
            {[
              {
                label: "Manufacturer",
                count: 3,
                color: "oklch(0.55 0.22 280)",
              },
              null,
              { label: "Distributor", count: 8, color: "oklch(0.72 0.19 85)" },
              null,
              { label: "Wholesaler", count: 15, color: "oklch(0.58 0.22 25)" },
              null,
              { label: "Retailer", count: 42, color: "oklch(0.52 0.14 155)" },
            ].map((item) => {
              if (!item) {
                return (
                  <div
                    key="arrow-mfr-dist"
                    className="hidden sm:flex items-center justify-center shrink-0"
                  >
                    <ArrowRight size={20} className="text-muted-foreground" />
                  </div>
                );
              }
              return (
                <div
                  key={item.label}
                  className="flex-1 text-center p-4 rounded-xl border-2"
                  style={{
                    borderColor: `${item.color}40`,
                    background: `${item.color}08`,
                  }}
                >
                  <p
                    className="text-2xl font-display font-bold"
                    style={{ color: item.color }}
                  >
                    {item.count}
                  </p>
                  <p className="text-xs font-label font-semibold text-foreground mt-1">
                    {item.label}
                  </p>
                  <p className="text-[10px] text-muted-foreground">entities</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                label: "Total SKUs",
                val: "1,248",
                color: "oklch(0.55 0.22 280)",
              },
              {
                label: "Active Orders",
                val: "87",
                color: "oklch(0.72 0.19 85)",
              },
              {
                label: "Fulfillment Rate",
                val: "94.2%",
                color: "oklch(0.52 0.14 155)",
              },
            ].map((s) => (
              <Card key={s.label} className="rounded-xl border-border">
                <CardContent className="p-3">
                  <p className="text-[10px] text-muted-foreground">{s.label}</p>
                  <p
                    className="text-xl font-display font-bold mt-1"
                    style={{ color: s.color }}
                  >
                    {s.val}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
