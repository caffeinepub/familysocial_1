import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

// ─── Shared helpers ────────────────────────────────────────────────────────────
function SummaryCard({
  label,
  value,
  sub,
  color,
}: {
  label: string;
  value: string | number;
  sub?: string;
  color?: string;
}) {
  return (
    <Card className="flex-1 min-w-[120px]">
      <CardContent className="p-3">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p
          className="text-xl font-bold mt-0.5"
          style={{ color: color ?? "inherit" }}
        >
          {value}
        </p>
        {sub && (
          <p className="text-[10px] text-muted-foreground mt-0.5">{sub}</p>
        )}
      </CardContent>
    </Card>
  );
}

function statusBadge(status: string) {
  const map: Record<string, string> = {
    OK: "bg-green-100 text-green-700",
    Low: "bg-yellow-100 text-yellow-700",
    Critical: "bg-red-100 text-red-700",
    Active: "bg-green-100 text-green-700",
    Inactive: "bg-gray-100 text-gray-600",
    Suspended: "bg-red-100 text-red-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Ordered: "bg-blue-100 text-blue-700",
    Received: "bg-green-100 text-green-700",
    Planned: "bg-blue-100 text-blue-700",
    "In Progress": "bg-purple-100 text-purple-700",
    Done: "bg-green-100 text-green-700",
    Completed: "bg-green-100 text-green-700",
    Available: "bg-green-100 text-green-700",
    Reserved: "bg-yellow-100 text-yellow-700",
    Sold: "bg-gray-100 text-gray-600",
    Paid: "bg-green-100 text-green-700",
    Overdue: "bg-red-100 text-red-700",
    Defaulted: "bg-red-100 text-red-700",
    Closed: "bg-gray-100 text-gray-600",
    Draft: "bg-gray-100 text-gray-600",
    Sent: "bg-blue-100 text-blue-700",
    "On Hold": "bg-orange-100 text-orange-700",
    Received_: "bg-blue-100 text-blue-700",
    Diagnosing: "bg-purple-100 text-purple-700",
    Repairing: "bg-orange-100 text-orange-700",
    Ready: "bg-teal-100 text-teal-700",
    Delivered: "bg-green-100 text-green-700",
  };
  return (
    <Badge
      className={`text-[10px] px-1.5 py-0 ${map[status] ?? "bg-gray-100 text-gray-600"}`}
    >
      {status}
    </Badge>
  );
}

// ─── 1. INVENTORY MODULE ───────────────────────────────────────────────────────
export function InventoryModule() {
  const [stock, setStock] = useState([
    {
      id: 1,
      name: "Basmati Rice",
      cat: "Grains",
      qty: 240,
      unit: "kg",
      reorder: 50,
      updated: "2m ago",
      status: "OK",
    },
    {
      id: 2,
      name: "Mustard Oil",
      cat: "Oil",
      qty: 18,
      unit: "L",
      reorder: 20,
      updated: "5m ago",
      status: "Low",
    },
    {
      id: 3,
      name: "Printer Paper A4",
      cat: "Stationery",
      qty: 3,
      unit: "ream",
      reorder: 10,
      updated: "1h ago",
      status: "Critical",
    },
  ]);
  const [suppliers] = useState([
    {
      name: "AgroStar Supplies",
      contact: "9876543210",
      cat: "Grains",
      rating: 4.5,
    },
    { name: "Deepak Traders", contact: "9123456780", cat: "Oil", rating: 4.2 },
  ]);
  const [pos] = useState([
    {
      po: "PO-001",
      supplier: "AgroStar",
      items: "Rice 100kg",
      total: "₹4,500",
      status: "Received",
    },
    {
      po: "PO-002",
      supplier: "Deepak Traders",
      items: "Oil 30L",
      total: "₹3,200",
      status: "Pending",
    },
  ]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    cat: "",
    qty: "",
    unit: "",
    reorder: "",
  });

  useEffect(() => {
    const id = setInterval(() => {
      setStock((s) =>
        s.map((i) => ({
          ...i,
          updated: `${Math.floor(Math.random() * 10) + 1}m ago`,
          status:
            i.qty < i.reorder
              ? i.qty < i.reorder / 2
                ? "Critical"
                : "Low"
              : "OK",
        })),
      );
    }, 12000);
    return () => clearInterval(id);
  }, []);

  function addItem() {
    setStock((s) => [
      ...s,
      {
        id: Date.now(),
        name: form.name,
        cat: form.cat,
        qty: Number(form.qty),
        unit: form.unit,
        reorder: Number(form.reorder),
        updated: "just now",
        status: Number(form.qty) < Number(form.reorder) ? "Low" : "OK",
      },
    ]);
    toast.success("Stock item added");
    setOpen(false);
    setForm({ name: "", cat: "", qty: "", unit: "", reorder: "" });
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <SummaryCard label="Total Items" value={stock.length} />
        <SummaryCard
          label="Low Stock"
          value={stock.filter((s) => s.status !== "OK").length}
          color="oklch(0.62 0.18 45)"
        />
        <SummaryCard label="Suppliers" value={suppliers.length} />
        <SummaryCard
          label="Open POs"
          value={pos.filter((p) => p.status === "Pending").length}
        />
      </div>
      <Tabs defaultValue="stock">
        <TabsList className="flex-wrap gap-1">
          <TabsTrigger value="stock">Stock</TabsTrigger>
          <TabsTrigger value="po">Purchase Orders</TabsTrigger>
          <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
        </TabsList>
        <TabsContent value="stock" className="mt-3 space-y-3">
          <div className="flex justify-end">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button size="sm">+ Add Stock</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Stock Item</DialogTitle>
                </DialogHeader>
                <div className="space-y-3">
                  {(["name", "cat", "qty", "unit", "reorder"] as const).map(
                    (f) => (
                      <div key={f}>
                        <Label className="capitalize">{f}</Label>
                        <Input
                          value={form[f]}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, [f]: e.target.value }))
                          }
                        />
                      </div>
                    ),
                  )}
                </div>
                <DialogFooter>
                  <Button onClick={addItem}>Save</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <ScrollArea className="h-64">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-muted-foreground border-b">
                  {[
                    "Name",
                    "Category",
                    "Qty",
                    "Unit",
                    "Reorder",
                    "Updated",
                    "Status",
                  ].map((h) => (
                    <th key={h} className="text-left py-1 pr-2">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {stock.map((r) => (
                  <tr key={r.id} className="border-b last:border-0">
                    <td className="py-1.5 pr-2">{r.name}</td>
                    <td className="pr-2 text-muted-foreground">{r.cat}</td>
                    <td className="pr-2 font-mono">{r.qty}</td>
                    <td className="pr-2">{r.unit}</td>
                    <td className="pr-2">{r.reorder}</td>
                    <td className="pr-2 text-muted-foreground">{r.updated}</td>
                    <td>{statusBadge(r.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="po" className="mt-3">
          <ScrollArea className="h-64">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-muted-foreground border-b">
                  {["PO", "Supplier", "Items", "Total", "Status"].map((h) => (
                    <th key={h} className="text-left py-1 pr-3">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pos.map((r) => (
                  <tr key={r.po} className="border-b last:border-0">
                    <td className="py-1.5 pr-3 font-mono text-xs">{r.po}</td>
                    <td className="pr-3">{r.supplier}</td>
                    <td className="pr-3 text-muted-foreground">{r.items}</td>
                    <td className="pr-3">{r.total}</td>
                    <td>{statusBadge(r.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="suppliers" className="mt-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {suppliers.map((s) => (
              <Card key={s.name}>
                <CardContent className="p-3">
                  <p className="font-semibold">{s.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {s.contact} · {s.cat}
                  </p>
                  <p className="text-xs mt-1">Rating: {s.rating}⭐</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// ─── 2. ASSEMBLY MODULE ────────────────────────────────────────────────────────
export function AssemblyModule() {
  const [orders, setOrders] = useState([
    {
      id: "PO-A01",
      product: "Wooden Chair",
      qty: 20,
      due: "Apr 10",
      status: "In Progress",
    },
    {
      id: "PO-A02",
      product: "Steel Shelf",
      qty: 5,
      due: "Apr 15",
      status: "Planned",
    },
    {
      id: "PO-A03",
      product: "Leather Bag",
      qty: 50,
      due: "Apr 8",
      status: "Done",
    },
  ]);
  const bom = [
    {
      product: "Wooden Chair",
      components: [
        { part: "Seat Board", qty: 1, unit: "pcs" },
        { part: "Legs", qty: 4, unit: "pcs" },
        { part: "Screws", qty: 16, unit: "pcs" },
      ],
    },
  ];
  const wip = [
    { order: "PO-A01", stage: "Assembly", progress: 60 },
    { order: "PO-A02", stage: "Raw Material", progress: 15 },
  ];
  const finished = [
    { product: "Leather Bag", qty: 50, batch: "B-202", date: "Apr 1" },
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setOrders((o) =>
        o.map((r) => ({
          ...r,
          status:
            r.status === "Planned" && Math.random() > 0.7
              ? "In Progress"
              : r.status,
        })),
      );
    }, 12000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <SummaryCard label="Total Orders" value={orders.length} />
        <SummaryCard
          label="In Progress"
          value={orders.filter((o) => o.status === "In Progress").length}
          color="oklch(0.55 0.22 280)"
        />
        <SummaryCard
          label="Completed"
          value={orders.filter((o) => o.status === "Done").length}
          color="oklch(0.52 0.18 155)"
        />
      </div>
      <Tabs defaultValue="orders">
        <TabsList>
          <TabsTrigger value="orders">Production Orders</TabsTrigger>
          <TabsTrigger value="bom">BOM</TabsTrigger>
          <TabsTrigger value="wip">WIP</TabsTrigger>
          <TabsTrigger value="finished">Finished Goods</TabsTrigger>
        </TabsList>
        <TabsContent value="orders" className="mt-3">
          <ScrollArea className="h-56">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-muted-foreground border-b">
                  {["ID", "Product", "Qty", "Due", "Status"].map((h) => (
                    <th key={h} className="text-left py-1 pr-3">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {orders.map((r) => (
                  <tr key={r.id} className="border-b last:border-0">
                    <td className="py-1.5 pr-2 font-mono text-xs">{r.id}</td>
                    <td className="pr-3">{r.product}</td>
                    <td className="pr-3">{r.qty}</td>
                    <td className="pr-3 text-muted-foreground">{r.due}</td>
                    <td>{statusBadge(r.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="bom" className="mt-3 space-y-3">
          {bom.map((b) => (
            <Card key={b.product}>
              <CardHeader className="pb-1">
                <CardTitle className="text-sm">{b.product}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-xs text-muted-foreground border-b">
                      <th className="text-left py-1 pr-3">Component</th>
                      <th className="text-left py-1 pr-3">Qty</th>
                      <th className="text-left py-1">Unit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {b.components.map((c) => (
                      <tr key={c.part} className="border-b last:border-0">
                        <td className="py-1 pr-3">{c.part}</td>
                        <td className="pr-3">{c.qty}</td>
                        <td>{c.unit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="wip" className="mt-3 space-y-3">
          {wip.map((w) => (
            <Card key={w.order}>
              <CardContent className="p-3">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">{w.order}</span>
                  <Badge variant="outline">{w.stage}</Badge>
                </div>
                <Progress value={w.progress} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">
                  {w.progress}% complete
                </p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="finished" className="mt-3">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-muted-foreground border-b">
                {["Product", "Qty", "Batch", "Date"].map((h) => (
                  <th key={h} className="text-left py-1 pr-3">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {finished.map((r) => (
                <tr key={r.product} className="border-b last:border-0">
                  <td className="py-1.5 pr-3">{r.product}</td>
                  <td className="pr-3">{r.qty}</td>
                  <td className="pr-3 font-mono text-xs">{r.batch}</td>
                  <td>{r.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// ─── 3. REPAIR SERVICE MODULE ──────────────────────────────────────────────────
export function RepairServiceModule() {
  const [jobs, setJobs] = useState([
    {
      id: "JC-001",
      customer: "Ravi Kumar",
      item: "Samsung TV",
      issue: "No display",
      tech: "Suresh",
      status: "Repairing",
      est: "₹1,200",
    },
    {
      id: "JC-002",
      customer: "Priya Sharma",
      item: "Washing Machine",
      issue: "Noisy spin",
      tech: "Mohan",
      status: "Diagnosing",
      est: "₹800",
    },
    {
      id: "JC-003",
      customer: "Amit Joshi",
      item: "iPhone 12",
      issue: "Cracked screen",
      tech: "Raj",
      status: "Ready",
      est: "₹3,500",
    },
  ]);
  const parts = [
    { name: "Samsung Panel 32", qty: 2, price: "₹4,500" },
    { name: "Gorilla Glass 6.1", qty: 5, price: "₹800" },
  ];
  const warranty = [
    { item: "LG AC", until: "Dec 2025", customer: "Deepa Singh" },
    { item: "Bosch Fridge", until: "Mar 2026", customer: "Ajay Mehta" },
  ];
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    customer: "",
    item: "",
    issue: "",
    tech: "",
    est: "",
  });

  useEffect(() => {
    const id = setInterval(() => {
      setJobs((j) =>
        j.map((r) => ({
          ...r,
          status:
            r.status === "Diagnosing" && Math.random() > 0.6
              ? "Repairing"
              : r.status,
        })),
      );
    }, 12000);
    return () => clearInterval(id);
  }, []);

  function addJob() {
    setJobs((j) => [
      ...j,
      {
        id: `JC-00${j.length + 1}`,
        ...form,
        status: "Received",
      } as (typeof j)[0],
    ]);
    toast.success("Job card created");
    setOpen(false);
    setForm({ customer: "", item: "", issue: "", tech: "", est: "" });
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <SummaryCard
          label="Open Jobs"
          value={jobs.filter((j) => j.status !== "Delivered").length}
        />
        <SummaryCard
          label="Ready"
          value={jobs.filter((j) => j.status === "Ready").length}
          color="oklch(0.52 0.18 155)"
        />
      </div>
      <Tabs defaultValue="jobs">
        <TabsList>
          <TabsTrigger value="jobs">Job Cards</TabsTrigger>
          <TabsTrigger value="parts">Parts</TabsTrigger>
          <TabsTrigger value="warranty">Warranty</TabsTrigger>
        </TabsList>
        <TabsContent value="jobs" className="mt-3 space-y-2">
          <div className="flex justify-end">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button size="sm">+ New Job</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>New Job Card</DialogTitle>
                </DialogHeader>
                <div className="space-y-3">
                  {(["customer", "item", "issue", "tech", "est"] as const).map(
                    (f) => (
                      <div key={f}>
                        <Label className="capitalize">{f}</Label>
                        <Input
                          value={form[f]}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, [f]: e.target.value }))
                          }
                        />
                      </div>
                    ),
                  )}
                </div>
                <DialogFooter>
                  <Button onClick={addJob}>Create</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <ScrollArea className="h-56">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-muted-foreground border-b">
                  {[
                    "ID",
                    "Customer",
                    "Item",
                    "Issue",
                    "Tech",
                    "Est.",
                    "Status",
                  ].map((h) => (
                    <th key={h} className="text-left py-1 pr-2">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {jobs.map((r) => (
                  <tr key={r.id} className="border-b last:border-0">
                    <td className="py-1.5 pr-2 font-mono text-xs">{r.id}</td>
                    <td className="pr-2">{r.customer}</td>
                    <td className="pr-2">{r.item}</td>
                    <td className="pr-2 text-muted-foreground text-xs">
                      {r.issue}
                    </td>
                    <td className="pr-2">{r.tech}</td>
                    <td className="pr-2">{r.est}</td>
                    <td>{statusBadge(r.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="parts" className="mt-3">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-muted-foreground border-b">
                {["Part", "Qty", "Price"].map((h) => (
                  <th key={h} className="text-left py-1 pr-3">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {parts.map((p) => (
                <tr key={p.name} className="border-b last:border-0">
                  <td className="py-1.5 pr-3">{p.name}</td>
                  <td className="pr-3">{p.qty}</td>
                  <td>{p.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TabsContent>
        <TabsContent value="warranty" className="mt-3">
          {warranty.map((w) => (
            <Card key={w.item} className="mb-2">
              <CardContent className="p-3 flex justify-between items-center">
                <div>
                  <p className="font-medium">{w.item}</p>
                  <p className="text-xs text-muted-foreground">{w.customer}</p>
                </div>
                <Badge variant="outline">Until {w.until}</Badge>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}

// ─── 4. FINANCIAL MODULE ───────────────────────────────────────────────────────
export function FinancialModule() {
  const [txns] = useState([
    {
      date: "Apr 1",
      desc: "Product Sale",
      debit: "",
      credit: "₹12,500",
      bal: "₹1,12,500",
      cat: "Revenue",
    },
    {
      date: "Apr 2",
      desc: "Supplier Payment",
      debit: "₹4,200",
      credit: "",
      bal: "₹1,08,300",
      cat: "Expense",
    },
    {
      date: "Apr 3",
      desc: "Service Income",
      debit: "",
      credit: "₹3,800",
      bal: "₹1,12,100",
      cat: "Revenue",
    },
  ]);
  const invoices = [
    {
      inv: "INV-101",
      party: "Ravi Enterprises",
      amt: "₹18,000",
      due: "Apr 15",
      status: "Pending",
    },
    {
      inv: "INV-100",
      party: "Sharma & Co",
      amt: "₹9,500",
      due: "Mar 30",
      status: "Overdue",
    },
    {
      inv: "INV-099",
      party: "Tech Solutions",
      amt: "₹32,000",
      due: "Apr 30",
      status: "Paid",
    },
  ];
  const tax = [
    { period: "Mar 2026", collected: "₹6,240", paid: "₹3,120", net: "₹3,120" },
    { period: "Feb 2026", collected: "₹5,400", paid: "₹2,700", net: "₹2,700" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <SummaryCard
          label="Revenue"
          value="₹1.12L"
          color="oklch(0.52 0.18 155)"
        />
        <SummaryCard
          label="Expenses"
          value="₹42K"
          color="oklch(0.55 0.22 25)"
        />
        <SummaryCard
          label="Net Profit"
          value="₹70K"
          color="oklch(0.55 0.22 280)"
        />
        <SummaryCard
          label="Pending Inv."
          value={
            invoices.filter(
              (i) => i.status === "Pending" || i.status === "Overdue",
            ).length
          }
          color="oklch(0.62 0.18 45)"
        />
      </div>
      <Tabs defaultValue="txns">
        <TabsList>
          <TabsTrigger value="txns">Transactions</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="tax">Tax Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="txns" className="mt-3">
          <ScrollArea className="h-56">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-muted-foreground border-b">
                  {[
                    "Date",
                    "Description",
                    "Debit",
                    "Credit",
                    "Balance",
                    "Category",
                  ].map((h) => (
                    <th key={h} className="text-left py-1 pr-3">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {txns.map((r, i) => (
                  <tr
                    key={r.desc + String(i)}
                    className="border-b last:border-0"
                  >
                    <td className="py-1.5 pr-3">{r.date}</td>
                    <td className="pr-3">{r.desc}</td>
                    <td className="pr-3 text-red-600">{r.debit}</td>
                    <td className="pr-3 text-green-600">{r.credit}</td>
                    <td className="pr-3 font-mono">{r.bal}</td>
                    <td className="text-muted-foreground">{r.cat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="invoices" className="mt-3">
          <ScrollArea className="h-56">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-muted-foreground border-b">
                  {["Invoice", "Party", "Amount", "Due", "Status"].map((h) => (
                    <th key={h} className="text-left py-1 pr-3">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {invoices.map((r) => (
                  <tr key={r.inv} className="border-b last:border-0">
                    <td className="py-1.5 pr-3 font-mono text-xs">{r.inv}</td>
                    <td className="pr-3">{r.party}</td>
                    <td className="pr-3">{r.amt}</td>
                    <td className="pr-3">{r.due}</td>
                    <td>{statusBadge(r.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="tax" className="mt-3">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-muted-foreground border-b">
                {["Period", "GST Collected", "GST Paid", "Net Payable"].map(
                  (h) => (
                    <th key={h} className="text-left py-1 pr-3">
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {tax.map((r) => (
                <tr key={r.period} className="border-b last:border-0">
                  <td className="py-1.5 pr-3">{r.period}</td>
                  <td className="pr-3 text-green-600">{r.collected}</td>
                  <td className="pr-3 text-red-600">{r.paid}</td>
                  <td className="font-semibold">{r.net}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// ─── 5. TELECOM MODULE ─────────────────────────────────────────────────────────
export function TelecomModule() {
  const [conns, setConns] = useState([
    {
      sim: "9876543210",
      customer: "Ramesh Patel",
      plan: "2GB/day",
      status: "Active",
      validity: "Apr 30",
    },
    {
      sim: "9012345678",
      customer: "Sunita Rao",
      plan: "1GB/day",
      status: "Inactive",
      validity: "Mar 15",
    },
    {
      sim: "9988776655",
      customer: "Mohan Lal",
      plan: "3GB/day",
      status: "Suspended",
      validity: "Apr 10",
    },
  ]);
  const plans = [
    {
      name: "Basic 1GB",
      data: "1GB/day",
      calls: "Unlimited",
      validity: "28 days",
      price: "₹199",
    },
    {
      name: "Standard 2GB",
      data: "2GB/day",
      calls: "Unlimited",
      validity: "28 days",
      price: "₹299",
    },
    {
      name: "Premium 3GB",
      data: "3GB/day",
      calls: "Unlimited + ISD",
      validity: "56 days",
      price: "₹599",
    },
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setConns((c) =>
        c.map((r) => ({
          ...r,
          status:
            r.status === "Inactive" && Math.random() > 0.8
              ? "Active"
              : r.status,
        })),
      );
    }, 12000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <SummaryCard label="Total SIMs" value={conns.length} />
        <SummaryCard
          label="Active"
          value={conns.filter((c) => c.status === "Active").length}
          color="oklch(0.52 0.18 155)"
        />
        <SummaryCard
          label="Suspended"
          value={conns.filter((c) => c.status === "Suspended").length}
          color="oklch(0.55 0.22 25)"
        />
      </div>
      <Tabs defaultValue="conns">
        <TabsList>
          <TabsTrigger value="conns">Connections</TabsTrigger>
          <TabsTrigger value="plans">Plans</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="conns" className="mt-3">
          <ScrollArea className="h-56">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-muted-foreground border-b">
                  {["SIM", "Customer", "Plan", "Validity", "Status"].map(
                    (h) => (
                      <th key={h} className="text-left py-1 pr-3">
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {conns.map((r) => (
                  <tr key={r.sim} className="border-b last:border-0">
                    <td className="py-1.5 pr-3 font-mono text-xs">{r.sim}</td>
                    <td className="pr-3">{r.customer}</td>
                    <td className="pr-3">{r.plan}</td>
                    <td className="pr-3 text-muted-foreground">{r.validity}</td>
                    <td>{statusBadge(r.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollArea>
        </TabsContent>
        <TabsContent
          value="plans"
          className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3"
        >
          {plans.map((p) => (
            <Card key={p.name}>
              <CardContent className="p-3">
                <p className="font-semibold">{p.name}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {p.data} · {p.calls}
                </p>
                <p className="text-xs text-muted-foreground">{p.validity}</p>
                <p className="font-bold text-lg mt-2">{p.price}</p>
                <Button size="sm" className="mt-2 w-full">
                  Recharge
                </Button>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="reports" className="mt-3 space-y-3">
          <div className="flex gap-3">
            <SummaryCard label="Monthly Revenue" value="₹18,400" />
            <SummaryCard label="Active" value="1" />
            <SummaryCard label="Churned" value="1" />
          </div>
          <div className="text-sm text-muted-foreground">
            Recharge success rate:{" "}
            <span className="font-bold text-foreground">94%</span>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// ─── 6. RETAIL SHOP MODULE ─────────────────────────────────────────────────────
export function RetailShopModule() {
  const [billItems, setBillItems] = useState<
    { name: string; qty: number; price: number }[]
  >([]);
  const [search, setSearch] = useState("");
  const catalog = [
    { name: "Colgate 100g", price: 45 },
    { name: "Maggi 70g", price: 14 },
    { name: "Amul Butter 500g", price: 260 },
    { name: "Lays Chips", price: 20 },
  ];
  const loyalty = [
    { name: "Priya Singh", points: 1240, tier: "Gold", last: "Apr 1" },
    { name: "Raj Kumar", points: 380, tier: "Silver", last: "Mar 28" },
    { name: "Anita Rao", points: 5600, tier: "Platinum", last: "Apr 3" },
  ];
  const sales = [
    {
      date: "Apr 3",
      items: 42,
      revenue: "₹3,200",
      returns: "₹120",
      net: "₹3,080",
    },
    {
      date: "Apr 2",
      items: 38,
      revenue: "₹2,800",
      returns: "₹0",
      net: "₹2,800",
    },
  ];

  const total = billItems.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div className="space-y-4">
      <Tabs defaultValue="bill">
        <TabsList>
          <TabsTrigger value="bill">Quick Bill</TabsTrigger>
          <TabsTrigger value="sales">Daily Sales</TabsTrigger>
          <TabsTrigger value="loyalty">Loyalty</TabsTrigger>
        </TabsList>
        <TabsContent value="bill" className="mt-3 space-y-3">
          <div className="flex gap-2">
            <Input
              placeholder="Search product..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1"
            />
          </div>
          {search && (
            <div className="border rounded-md bg-popover shadow-md">
              {catalog
                .filter((c) =>
                  c.name.toLowerCase().includes(search.toLowerCase()),
                )
                .map((p) => (
                  <button
                    type="button"
                    key={p.name}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-accent flex justify-between"
                    onClick={() => {
                      setBillItems((b) => {
                        const ex = b.find((x) => x.name === p.name);
                        return ex
                          ? b.map((x) =>
                              x.name === p.name ? { ...x, qty: x.qty + 1 } : x,
                            )
                          : [...b, { ...p, qty: 1 }];
                      });
                      setSearch("");
                    }}
                  >
                    <span>{p.name}</span>
                    <span className="text-muted-foreground">₹{p.price}</span>
                  </button>
                ))}
            </div>
          )}
          {billItems.length > 0 && (
            <>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-xs text-muted-foreground border-b">
                    <th className="text-left py-1 pr-3">Item</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {billItems.map((r, i) => (
                    <tr
                      key={r.name + String(i)}
                      className="border-b last:border-0"
                    >
                      <td className="py-1.5 pr-3">{r.name}</td>
                      <td className="text-center">{r.qty}</td>
                      <td className="text-center">₹{r.price}</td>
                      <td className="text-center font-mono">
                        ₹{r.price * r.qty}
                      </td>
                      <td>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-red-500 px-1"
                          onClick={() =>
                            setBillItems((b) => b.filter((_, j) => j !== i))
                          }
                        >
                          ✕
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-between items-center font-bold text-base pt-2">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
              <Button
                className="w-full"
                onClick={() => {
                  toast.success(`Payment of ₹${total} received!`);
                  setBillItems([]);
                }}
              >
                💳 Pay ₹{total}
              </Button>
            </>
          )}
        </TabsContent>
        <TabsContent value="sales" className="mt-3">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-muted-foreground border-b">
                {["Date", "Items Sold", "Revenue", "Returns", "Net"].map(
                  (h) => (
                    <th key={h} className="text-left py-1 pr-3">
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {sales.map((r) => (
                <tr key={r.date} className="border-b last:border-0">
                  <td className="py-1.5 pr-3">{r.date}</td>
                  <td className="pr-3">{r.items}</td>
                  <td className="pr-3 text-green-600">{r.revenue}</td>
                  <td className="pr-3 text-red-600">{r.returns}</td>
                  <td className="font-semibold">{r.net}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TabsContent>
        <TabsContent value="loyalty" className="mt-3 space-y-2">
          {loyalty.map((c) => (
            <Card key={c.name}>
              <CardContent className="p-3 flex justify-between items-center">
                <div>
                  <p className="font-medium">{c.name}</p>
                  <p className="text-xs text-muted-foreground">
                    Last: {c.last}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold">{c.points} pts</p>
                  <Badge variant="outline" className="text-xs">
                    {c.tier}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}

// ─── 7. VEHICLE MODULE ─────────────────────────────────────────────────────────
export function VehicleModule() {
  const [inventory] = useState([
    {
      make: "Maruti",
      model: "Swift",
      year: 2023,
      color: "Red",
      price: "₹6.8L",
      status: "Available",
    },
    {
      make: "Honda",
      model: "City",
      year: 2022,
      color: "White",
      price: "₹11.5L",
      status: "Reserved",
    },
    {
      make: "Tata",
      model: "Nexon EV",
      year: 2024,
      color: "Navy",
      price: "₹14.9L",
      status: "Sold",
    },
  ]);
  const drives = [
    {
      customer: "Anil Mehta",
      vehicle: "Swift Red 2023",
      date: "Apr 5 11:00",
      status: "Scheduled",
    },
    {
      customer: "Preeti Kaur",
      vehicle: "City White 2022",
      date: "Apr 3 15:00",
      status: "Completed",
    },
  ];
  const sales = [
    {
      id: "S-001",
      customer: "Rakesh Yadav",
      vehicle: "Nexon EV",
      price: "₹14.9L",
      date: "Apr 1",
      mode: "Loan",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <SummaryCard
          label="In Stock"
          value={inventory.filter((v) => v.status === "Available").length}
          color="oklch(0.52 0.18 155)"
        />
        <SummaryCard
          label="Reserved"
          value={inventory.filter((v) => v.status === "Reserved").length}
          color="oklch(0.62 0.18 45)"
        />
        <SummaryCard
          label="Sold"
          value={inventory.filter((v) => v.status === "Sold").length}
        />
      </div>
      <Tabs defaultValue="inv">
        <TabsList>
          <TabsTrigger value="inv">Inventory</TabsTrigger>
          <TabsTrigger value="drives">Test Drives</TabsTrigger>
          <TabsTrigger value="sales">Sales</TabsTrigger>
        </TabsList>
        <TabsContent value="inv" className="mt-3">
          <ScrollArea className="h-56">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-muted-foreground border-b">
                  {["Make", "Model", "Year", "Color", "Price", "Status"].map(
                    (h) => (
                      <th key={h} className="text-left py-1 pr-3">
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {inventory.map((r) => (
                  <tr key={r.make + r.model} className="border-b last:border-0">
                    <td className="py-1.5 pr-3">{r.make}</td>
                    <td className="pr-3">{r.model}</td>
                    <td className="pr-3">{r.year}</td>
                    <td className="pr-3">{r.color}</td>
                    <td className="pr-3">{r.price}</td>
                    <td>{statusBadge(r.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="drives" className="mt-3 space-y-2">
          {drives.map((d) => (
            <Card key={d.customer + d.vehicle}>
              <CardContent className="p-3 flex justify-between">
                <div>
                  <p className="font-medium">{d.customer}</p>
                  <p className="text-xs text-muted-foreground">
                    {d.vehicle} · {d.date}
                  </p>
                </div>
                {statusBadge(d.status)}
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="sales" className="mt-3">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-muted-foreground border-b">
                {["ID", "Customer", "Vehicle", "Price", "Date", "Mode"].map(
                  (h) => (
                    <th key={h} className="text-left py-1 pr-3">
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {sales.map((r) => (
                <tr key={r.id} className="border-b last:border-0">
                  <td className="py-1.5 pr-2 font-mono text-xs">{r.id}</td>
                  <td className="pr-3">{r.customer}</td>
                  <td className="pr-3">{r.vehicle}</td>
                  <td className="pr-3">{r.price}</td>
                  <td className="pr-3">{r.date}</td>
                  <td>{r.mode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// ─── 8. LEAD CRM MODULE ────────────────────────────────────────────────────────
export function LeadCRMModule() {
  const stages = [
    "New",
    "Contacted",
    "Qualified",
    "Proposal",
    "Closed Won",
    "Closed Lost",
  ];
  const [leads] = useState([
    {
      name: "Reliance Foods",
      value: "₹2.4L",
      source: "Referral",
      stage: "Proposal",
    },
    {
      name: "Gupta Textiles",
      value: "₹80K",
      source: "Website",
      stage: "Qualified",
    },
    { name: "Metro Bakery", value: "₹45K", source: "Cold Call", stage: "New" },
    {
      name: "SunTech Solutions",
      value: "₹1.2L",
      source: "Partner",
      stage: "Closed Won",
    },
    {
      name: "Ajay Motors",
      value: "₹3.5L",
      source: "Social",
      stage: "Contacted",
    },
  ]);
  const followups = [
    {
      lead: "Reliance Foods",
      action: "Send proposal",
      due: "Apr 5",
      priority: "High",
      notes: "Interested in bulk order",
    },
    {
      lead: "Gupta Textiles",
      action: "Demo call",
      due: "Apr 7",
      priority: "Medium",
      notes: "Request for 3 months trial",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <SummaryCard label="Total Leads" value={leads.length} />
        <SummaryCard
          label="Won"
          value={leads.filter((l) => l.stage === "Closed Won").length}
          color="oklch(0.52 0.18 155)"
        />
        <SummaryCard
          label="Conversion"
          value="20%"
          color="oklch(0.55 0.22 280)"
        />
      </div>
      <Tabs defaultValue="pipeline">
        <TabsList>
          <TabsTrigger value="pipeline">Pipeline</TabsTrigger>
          <TabsTrigger value="followups">Follow-ups</TabsTrigger>
          <TabsTrigger value="contacts">Contacts</TabsTrigger>
        </TabsList>
        <TabsContent value="pipeline" className="mt-3">
          <ScrollArea className="h-64">
            <div className="flex gap-3 min-w-max pb-2">
              {stages.map((s) => (
                <div key={s} className="w-40 flex-shrink-0">
                  <p className="text-xs font-semibold text-muted-foreground mb-2">
                    {s}
                  </p>
                  {leads
                    .filter((l) => l.stage === s)
                    .map((l) => (
                      <Card key={l.name} className="mb-2">
                        <CardContent className="p-2">
                          <p className="text-xs font-medium">{l.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {l.value}
                          </p>
                          <Badge
                            className="text-[9px] px-1 mt-1"
                            variant="outline"
                          >
                            {l.source}
                          </Badge>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="followups" className="mt-3 space-y-2">
          {followups.map((f) => (
            <Card key={f.lead}>
              <CardContent className="p-3">
                <div className="flex justify-between">
                  <span className="font-medium">{f.lead}</span>
                  <Badge
                    className={
                      f.priority === "High"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }
                  >
                    {f.priority}
                  </Badge>
                </div>
                <p className="text-xs mt-1">
                  {f.action} — Due {f.due}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {f.notes}
                </p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="contacts" className="mt-3">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-muted-foreground border-b">
                {["Name", "Phone", "Source", "Stage"].map((h) => (
                  <th key={h} className="text-left py-1 pr-3">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {leads.map((r, i) => (
                <tr key={r.name} className="border-b last:border-0">
                  <td className="py-1.5 pr-3">{r.name}</td>
                  <td className="pr-3 font-mono text-xs">+91 98765 {i}0000</td>
                  <td className="pr-3">{r.source}</td>
                  <td>
                    {statusBadge(
                      r.stage === "Closed Won"
                        ? "Active"
                        : r.stage === "Closed Lost"
                          ? "Inactive"
                          : "Pending",
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// ─── 9. SOFTWARE PROJECT MODULE ────────────────────────────────────────────────
export function SoftwareProjectModule() {
  const [projects] = useState([
    {
      name: "ERP Portal",
      client: "Sharma Enterprises",
      start: "Jan 1",
      deadline: "Jun 30",
      status: "Active",
      budget: "₹4.5L",
    },
    {
      name: "Mobile App",
      client: "FashionHub",
      start: "Feb 15",
      deadline: "May 15",
      status: "On Hold",
      budget: "₹2.2L",
    },
  ]);
  const board = {
    "To Do": [
      { task: "API Integration", assignee: "Dev A", sp: 5 },
      { task: "DB Schema", assignee: "Dev B", sp: 3 },
    ],
    "In Progress": [
      { task: "Auth Module", assignee: "Dev A", sp: 8 },
      { task: "Dashboard UI", assignee: "Dev C", sp: 5 },
    ],
    Done: [
      { task: "Project Setup", assignee: "Dev B", sp: 2 },
      { task: "Design Mockup", assignee: "Dev C", sp: 3 },
    ],
  };
  const logs = [
    {
      dev: "Dev A",
      project: "ERP Portal",
      date: "Apr 3",
      hours: 6.5,
      task: "Auth Module",
    },
    {
      dev: "Dev C",
      project: "ERP Portal",
      date: "Apr 3",
      hours: 5.0,
      task: "Dashboard UI",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <SummaryCard label="Projects" value={projects.length} />
        <SummaryCard
          label="Active"
          value={projects.filter((p) => p.status === "Active").length}
          color="oklch(0.52 0.18 155)"
        />
      </div>
      <Tabs defaultValue="projects">
        <TabsList>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="sprint">Sprint Board</TabsTrigger>
          <TabsTrigger value="logs">Time Logs</TabsTrigger>
        </TabsList>
        <TabsContent value="projects" className="mt-3">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-muted-foreground border-b">
                {["Name", "Client", "Deadline", "Budget", "Status"].map((h) => (
                  <th key={h} className="text-left py-1 pr-3">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {projects.map((r) => (
                <tr key={r.name} className="border-b last:border-0">
                  <td className="py-1.5 pr-3 font-medium">{r.name}</td>
                  <td className="pr-3 text-muted-foreground">{r.client}</td>
                  <td className="pr-3">{r.deadline}</td>
                  <td className="pr-3">{r.budget}</td>
                  <td>{statusBadge(r.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TabsContent>
        <TabsContent value="sprint" className="mt-3">
          <div className="grid grid-cols-3 gap-3">
            {Object.entries(board).map(([col, tasks]) => (
              <div key={col}>
                <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase">
                  {col}
                </p>
                {tasks.map((t) => (
                  <Card key={t.task} className="mb-2">
                    <CardContent className="p-2">
                      <p className="text-xs font-medium">{t.task}</p>
                      <p className="text-[10px] text-muted-foreground">
                        {t.assignee} · {t.sp}sp
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="logs" className="mt-3">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-muted-foreground border-b">
                {["Developer", "Project", "Date", "Hours", "Task"].map((h) => (
                  <th key={h} className="text-left py-1 pr-3">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {logs.map((r) => (
                <tr
                  key={r.dev + r.date + r.task}
                  className="border-b last:border-0"
                >
                  <td className="py-1.5 pr-3">{r.dev}</td>
                  <td className="pr-3">{r.project}</td>
                  <td className="pr-3">{r.date}</td>
                  <td className="pr-3 font-mono">{r.hours}h</td>
                  <td className="text-muted-foreground">{r.task}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// ─── 10. MONEY LENDING MODULE ──────────────────────────────────────────────────
export function MoneyLendingModule() {
  const [loans] = useState([
    {
      id: "L-001",
      borrower: "Sunil Gupta",
      amt: "₹50,000",
      rate: "12%",
      tenure: "12m",
      disbursed: "Jan 1",
      status: "Active",
    },
    {
      id: "L-002",
      borrower: "Kavita Sharma",
      amt: "₹20,000",
      rate: "10%",
      tenure: "6m",
      disbursed: "Feb 15",
      status: "Closed",
    },
    {
      id: "L-003",
      borrower: "Deepak Jain",
      amt: "₹1,00,000",
      rate: "14%",
      tenure: "24m",
      disbursed: "Mar 1",
      status: "Active",
    },
  ]);
  const emi = [
    {
      loan: "L-001",
      borrower: "Sunil Gupta",
      emi: "₹4,440",
      due: "Apr 1, May 1, Jun 1",
      status: "Pending",
    },
    {
      loan: "L-003",
      borrower: "Deepak Jain",
      emi: "₹4,815",
      due: "Apr 1, May 1, Jun 1",
      status: "Pending",
    },
  ];
  const overdue = [
    {
      borrower: "Rakesh Mishra",
      loan: "₹35,000",
      since: "15 days",
      penalty: "₹525",
      note: "",
    },
  ];
  const [notes, setNotes] = useState<string[]>(overdue.map(() => ""));

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <SummaryCard
          label="Active Loans"
          value={loans.filter((l) => l.status === "Active").length}
          color="oklch(0.55 0.22 280)"
        />
        <SummaryCard label="Total Disbursed" value="₹1.7L" />
        <SummaryCard
          label="Overdue"
          value={overdue.length}
          color="oklch(0.55 0.22 25)"
        />
      </div>
      <Tabs defaultValue="loans">
        <TabsList>
          <TabsTrigger value="loans">Loans</TabsTrigger>
          <TabsTrigger value="emi">EMI Schedule</TabsTrigger>
          <TabsTrigger value="overdue">Overdue</TabsTrigger>
        </TabsList>
        <TabsContent value="loans" className="mt-3">
          <ScrollArea className="h-56">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-muted-foreground border-b">
                  {[
                    "ID",
                    "Borrower",
                    "Amount",
                    "Rate",
                    "Tenure",
                    "Disbursed",
                    "Status",
                  ].map((h) => (
                    <th key={h} className="text-left py-1 pr-2">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loans.map((r) => (
                  <tr key={r.id} className="border-b last:border-0">
                    <td className="py-1.5 pr-2 font-mono text-xs">{r.id}</td>
                    <td className="pr-2">{r.borrower}</td>
                    <td className="pr-2">{r.amt}</td>
                    <td className="pr-2">{r.rate}</td>
                    <td className="pr-2">{r.tenure}</td>
                    <td className="pr-2">{r.disbursed}</td>
                    <td>{statusBadge(r.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="emi" className="mt-3 space-y-2">
          {emi.map((e) => (
            <Card key={e.loan}>
              <CardContent className="p-3">
                <div className="flex justify-between">
                  <span className="font-medium">{e.borrower}</span>
                  <span className="font-mono text-sm">{e.emi}/mo</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Due: {e.due}
                </p>
                <div className="flex gap-2 mt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      toast.success(`EMI recorded for ${e.borrower}`)
                    }
                  >
                    Mark Paid
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="overdue" className="mt-3 space-y-2">
          {overdue.map((o, i) => (
            <Card key={o.borrower} className="border-red-200">
              <CardContent className="p-3 space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{o.borrower}</span>
                  <Badge className="bg-red-100 text-red-700">
                    Overdue {o.since}
                  </Badge>
                </div>
                <p className="text-sm">
                  Loan: {o.loan} · Penalty:{" "}
                  <span className="text-red-600">{o.penalty}</span>
                </p>
                <Textarea
                  placeholder="Recovery note..."
                  value={notes[i]}
                  onChange={(e) =>
                    setNotes((n) => {
                      const c = [...n];
                      c[i] = e.target.value;
                      return c;
                    })
                  }
                  rows={2}
                />
                <Button size="sm" onClick={() => toast.success("Note saved")}>
                  Save Note
                </Button>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
