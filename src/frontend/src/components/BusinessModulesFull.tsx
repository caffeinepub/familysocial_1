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
import { Pencil, Plus, Trash2 } from "lucide-react";
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
  const DEFAULT_STOCK = [
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
  ];
  const [stock, setStock] = useState(() => {
    try {
      const saved = localStorage.getItem("ic_pos_inventory");
      return saved ? JSON.parse(saved) : DEFAULT_STOCK;
    } catch {
      return DEFAULT_STOCK;
    }
  });
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
  const [editId, setEditId] = useState<number | null>(null);
  const [form, setForm] = useState({
    name: "",
    cat: "",
    qty: "",
    unit: "",
    reorder: "",
  });

  useEffect(() => {
    try {
      localStorage.setItem("ic_pos_inventory", JSON.stringify(stock));
    } catch {}
  }, [stock]);

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
    if (editId !== null) {
      setStock((s) =>
        s.map((item) =>
          item.id === editId
            ? {
                ...item,
                name: form.name,
                cat: form.cat,
                qty: Number(form.qty),
                unit: form.unit,
                reorder: Number(form.reorder),
                status: Number(form.qty) < Number(form.reorder) ? "Low" : "OK",
              }
            : item,
        ),
      );
      toast.success("Stock item updated");
      setEditId(null);
    } else {
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
    }
    setOpen(false);
    setForm({ name: "", cat: "", qty: "", unit: "", reorder: "" });
  }

  function editItem(item: (typeof stock)[0]) {
    setEditId(item.id);
    setForm({
      name: item.name,
      cat: item.cat,
      qty: String(item.qty),
      unit: item.unit,
      reorder: String(item.reorder),
    });
    setOpen(true);
  }

  function deleteItem(id: number) {
    if (window.confirm("Delete this item?")) {
      setStock((s) => s.filter((i) => i.id !== id));
      toast.success("Item removed");
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <SummaryCard label="Total SKUs" value={stock.length} />
        <SummaryCard
          label="Low Stock"
          value={stock.filter((s) => s.status === "Low").length}
          color="oklch(0.62 0.18 45)"
        />
        <SummaryCard
          label="Critical"
          value={stock.filter((s) => s.status === "Critical").length}
          color="oklch(0.55 0.22 25)"
        />
        <SummaryCard label="Suppliers" value={suppliers.length} />
      </div>
      <Tabs defaultValue="stock">
        <TabsList className="flex-wrap gap-1">
          <TabsTrigger value="stock">Stock</TabsTrigger>
          <TabsTrigger value="po">Purchase Orders</TabsTrigger>
          <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
        </TabsList>
        <TabsContent value="stock" className="mt-3 space-y-3">
          <div className="flex justify-end">
            <Dialog
              open={open}
              onOpenChange={(v) => {
                if (!v) {
                  setEditId(null);
                  setForm({
                    name: "",
                    cat: "",
                    qty: "",
                    unit: "",
                    reorder: "",
                  });
                }
                setOpen(v);
              }}
            >
              <DialogTrigger asChild>
                <Button size="sm">+ Add Stock</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {editId !== null ? "Edit Stock Item" : "Add Stock Item"}
                  </DialogTitle>
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
                    "",
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
                    <td className="pr-2">
                      <div className="flex gap-1">
                        <button
                          type="button"
                          onClick={() => editItem(r)}
                          className="p-1 rounded hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors"
                          title="Edit"
                        >
                          <Pencil size={12} />
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteItem(r.id)}
                          className="p-1 rounded hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    </td>
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
  const DEFAULT_ASSEMBLY = [
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
  ];
  const [orders, setOrders] = useState(() => {
    try {
      const s = localStorage.getItem("biz_assembly");
      return s ? JSON.parse(s) : DEFAULT_ASSEMBLY;
    } catch {
      return DEFAULT_ASSEMBLY;
    }
  });
  const [asmDialog, setAsmDialog] = useState(false);
  const [asmEdit, setAsmEdit] = useState<{
    id: string;
    product: string;
    qty: number;
    due: string;
    status: string;
  } | null>(null);
  const [asmForm, setAsmForm] = useState({
    product: "",
    qty: "",
    due: "",
    status: "Planned",
  });

  useEffect(() => {
    localStorage.setItem("biz_assembly", JSON.stringify(orders));
  }, [orders]);

  const openAsmAdd = () => {
    setAsmEdit(null);
    setAsmForm({ product: "", qty: "", due: "", status: "Planned" });
    setAsmDialog(true);
  };
  const openAsmEdit = (r: (typeof orders)[0]) => {
    setAsmEdit(r);
    setAsmForm({
      product: r.product,
      qty: String(r.qty),
      due: r.due,
      status: r.status,
    });
    setAsmDialog(true);
  };
  const saveAsm = () => {
    if (!asmForm.product) return;
    if (asmEdit) {
      setOrders((o: typeof orders) =>
        o.map((r: (typeof orders)[0]) =>
          r.id === asmEdit.id
            ? { ...r, ...asmForm, qty: Number(asmForm.qty) }
            : r,
        ),
      );
      toast.success("Order updated");
    } else {
      setOrders((o: typeof orders) => [
        ...o,
        { id: `PO-A${Date.now()}`, ...asmForm, qty: Number(asmForm.qty) },
      ]);
      toast.success("Order added");
    }
    setAsmDialog(false);
  };
  const deleteAsm = (id: string) => {
    setOrders((o: typeof orders) =>
      o.filter((r: (typeof orders)[0]) => r.id !== id),
    );
    toast.success("Deleted");
  };
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
      setOrders((o: typeof orders) =>
        o.map((r: (typeof orders)[0]) => ({
          ...r,
          status:
            r.status === "Planned" && Math.random() > 0.7
              ? "In Progress"
              : r.status,
        })),
      );
    }, 25000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="space-y-4">
      <Dialog open={asmDialog} onOpenChange={setAsmDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {asmEdit ? "Edit Order" : "Add Production Order"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <div className="space-y-1">
              <Label>Product</Label>
              <Input
                value={asmForm.product}
                onChange={(e) =>
                  setAsmForm((f) => ({ ...f, product: e.target.value }))
                }
                placeholder="Product name"
              />
            </div>
            <div className="space-y-1">
              <Label>Quantity</Label>
              <Input
                type="number"
                value={asmForm.qty}
                onChange={(e) =>
                  setAsmForm((f) => ({ ...f, qty: e.target.value }))
                }
                placeholder="0"
              />
            </div>
            <div className="space-y-1">
              <Label>Due Date</Label>
              <Input
                value={asmForm.due}
                onChange={(e) =>
                  setAsmForm((f) => ({ ...f, due: e.target.value }))
                }
                placeholder="Apr 20"
              />
            </div>
            <div className="space-y-1">
              <Label>Status</Label>
              <Select
                value={asmForm.status}
                onValueChange={(v) => setAsmForm((f) => ({ ...f, status: v }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Planned">Planned</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Done">Done</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setAsmDialog(false)}>
              Cancel
            </Button>
            <Button onClick={saveAsm}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="flex gap-3">
        <SummaryCard label="Total Orders" value={orders.length} />
        <SummaryCard
          label="In Progress"
          value={
            orders.filter((o: (typeof orders)[0]) => o.status === "In Progress")
              .length
          }
          color="oklch(0.55 0.22 280)"
        />
        <SummaryCard
          label="Completed"
          value={
            orders.filter((o: (typeof orders)[0]) => o.status === "Done").length
          }
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
                <tr key="__add__">
                  <td colSpan={6} className="py-1">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full h-7 text-xs"
                      onClick={openAsmAdd}
                    >
                      <Plus size={12} className="mr-1" />
                      Add Order
                    </Button>
                  </td>
                </tr>
                {orders.map((r: (typeof orders)[0]) => (
                  <tr key={r.id} className="border-b last:border-0">
                    <td className="py-1.5 pr-2 font-mono text-xs">{r.id}</td>
                    <td className="pr-3">{r.product}</td>
                    <td className="pr-3">{r.qty}</td>
                    <td className="pr-3 text-muted-foreground">{r.due}</td>
                    <td>{statusBadge(r.status)}</td>
                    <td className="flex gap-1 py-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-6 w-6 p-0"
                        onClick={() => openAsmEdit(r)}
                      >
                        <Pencil size={11} />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-6 w-6 p-0 text-red-500"
                        onClick={() => deleteAsm(r.id)}
                      >
                        <Trash2 size={11} />
                      </Button>
                    </td>
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
  const DEFAULT_JOBS = [
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
  ];
  const [jobs, setJobs] = useState(() => {
    try {
      const saved = localStorage.getItem("ic_pos_repair");
      return saved ? JSON.parse(saved) : DEFAULT_JOBS;
    } catch {
      return DEFAULT_JOBS;
    }
  });
  const parts = [
    { name: "Samsung Panel 32", qty: 2, price: "₹4,500" },
    { name: "Gorilla Glass 6.1", qty: 5, price: "₹800" },
  ];
  const warranty = [
    { item: "LG AC", until: "Dec 2025", customer: "Deepa Singh" },
    { item: "Bosch Fridge", until: "Mar 2026", customer: "Ajay Mehta" },
  ];
  const [open, setOpen] = useState(false);
  const [editJobId, setEditJobId] = useState<string | null>(null);
  const [form, setForm] = useState({
    customer: "",
    item: "",
    issue: "",
    tech: "",
    est: "",
  });

  useEffect(() => {
    try {
      localStorage.setItem("ic_pos_repair", JSON.stringify(jobs));
    } catch {}
  }, [jobs]);

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
    if (editJobId !== null) {
      setJobs((j) =>
        j.map((job) => (job.id === editJobId ? { ...job, ...form } : job)),
      );
      toast.success("Job card updated");
      setEditJobId(null);
    } else {
      setJobs((j) => [
        ...j,
        {
          id: `JC-00${j.length + 1}`,
          ...form,
          status: "Received",
        } as (typeof j)[0],
      ]);
      toast.success("Job card created");
    }
    setOpen(false);
    setForm({ customer: "", item: "", issue: "", tech: "", est: "" });
  }

  function editJob(job: (typeof jobs)[0]) {
    setEditJobId(job.id);
    setForm({
      customer: job.customer,
      item: job.item,
      issue: job.issue,
      tech: job.tech,
      est: job.est,
    });
    setOpen(true);
  }

  function deleteJob(id: string) {
    if (window.confirm("Delete this job card?")) {
      setJobs((j) => j.filter((job) => job.id !== id));
      toast.success("Item removed");
    }
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
                  <DialogTitle>
                    {editJobId !== null ? "Edit Job Card" : "New Job Card"}
                  </DialogTitle>
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
                    "",
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
                    <td className="pr-2">
                      <div className="flex gap-1">
                        <button
                          type="button"
                          onClick={() => editJob(r)}
                          className="p-1 rounded hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors"
                          title="Edit"
                        >
                          <Pencil size={12} />
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteJob(r.id)}
                          className="p-1 rounded hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    </td>
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
  const DEFAULT_TXNS = [
    {
      id: 1,
      date: "Apr 1",
      desc: "Product Sale",
      debit: "",
      credit: "₹12,500",
      bal: "₹1,12,500",
      cat: "Revenue",
    },
    {
      id: 2,
      date: "Apr 2",
      desc: "Supplier Payment",
      debit: "₹4,200",
      credit: "",
      bal: "₹1,08,300",
      cat: "Expense",
    },
    {
      id: 3,
      date: "Apr 3",
      desc: "Service Income",
      debit: "",
      credit: "₹3,800",
      bal: "₹1,12,100",
      cat: "Revenue",
    },
  ];
  const [txns, setTxns] = useState(() => {
    try {
      const saved = localStorage.getItem("ic_pos_financial");
      return saved ? JSON.parse(saved) : DEFAULT_TXNS;
    } catch {
      return DEFAULT_TXNS;
    }
  });
  const [editTxnId, setEditTxnId] = useState<number | null>(null);
  const [txnOpen, setTxnOpen] = useState(false);
  const [txnForm, setTxnForm] = useState({
    date: "",
    desc: "",
    debit: "",
    credit: "",
    cat: "",
  });

  useEffect(() => {
    try {
      localStorage.setItem("ic_pos_financial", JSON.stringify(txns));
    } catch {}
  }, [txns]);

  function saveTxn() {
    if (editTxnId !== null) {
      setTxns((t: typeof DEFAULT_TXNS) =>
        t.map((tx) => (tx.id === editTxnId ? { ...tx, ...txnForm } : tx)),
      );
      toast.success("Transaction updated");
      setEditTxnId(null);
    } else {
      setTxns((t: typeof DEFAULT_TXNS) => [
        ...t,
        { id: Date.now(), ...txnForm, bal: "—" },
      ]);
      toast.success("Transaction added");
    }
    setTxnOpen(false);
    setTxnForm({ date: "", desc: "", debit: "", credit: "", cat: "" });
  }

  function editTxn(tx: (typeof DEFAULT_TXNS)[0]) {
    setEditTxnId(tx.id);
    setTxnForm({
      date: tx.date,
      desc: tx.desc,
      debit: tx.debit,
      credit: tx.credit,
      cat: tx.cat,
    });
    setTxnOpen(true);
  }

  function deleteTxn(id: number) {
    if (window.confirm("Delete this transaction?")) {
      setTxns((t: typeof DEFAULT_TXNS) => t.filter((tx) => tx.id !== id));
      toast.success("Item removed");
    }
  }
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
        <TabsContent value="txns" className="mt-3 space-y-3">
          <div className="flex justify-end">
            <Dialog
              open={txnOpen}
              onOpenChange={(v) => {
                if (!v) {
                  setEditTxnId(null);
                  setTxnForm({
                    date: "",
                    desc: "",
                    debit: "",
                    credit: "",
                    cat: "",
                  });
                }
                setTxnOpen(v);
              }}
            >
              <DialogTrigger asChild>
                <Button size="sm">+ Add Transaction</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {editTxnId !== null
                      ? "Edit Transaction"
                      : "Add Transaction"}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-3">
                  {(["date", "desc", "debit", "credit", "cat"] as const).map(
                    (f) => (
                      <div key={f}>
                        <Label className="capitalize">
                          {f === "cat"
                            ? "Category"
                            : f === "desc"
                              ? "Description"
                              : f}
                        </Label>
                        <Input
                          value={txnForm[f]}
                          onChange={(e) =>
                            setTxnForm((p) => ({ ...p, [f]: e.target.value }))
                          }
                        />
                      </div>
                    ),
                  )}
                </div>
                <DialogFooter>
                  <Button onClick={saveTxn}>Save</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
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
                    "",
                  ].map((h) => (
                    <th key={h} className="text-left py-1 pr-3">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {txns.map((r: (typeof DEFAULT_TXNS)[0], i: number) => (
                  <tr
                    key={r.id ?? r.desc + String(i)}
                    className="border-b last:border-0"
                  >
                    <td className="py-1.5 pr-3">{r.date}</td>
                    <td className="pr-3">{r.desc}</td>
                    <td className="pr-3 text-red-600">{r.debit}</td>
                    <td className="pr-3 text-green-600">{r.credit}</td>
                    <td className="pr-3 font-mono">{r.bal}</td>
                    <td className="text-muted-foreground">{r.cat}</td>
                    <td className="pr-2">
                      <div className="flex gap-1">
                        <button
                          type="button"
                          onClick={() => editTxn(r)}
                          className="p-1 rounded hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors"
                          title="Edit"
                        >
                          <Pencil size={12} />
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteTxn(r.id)}
                          className="p-1 rounded hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    </td>
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
  const DEFAULT_CONNS = [
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
  ];
  const [conns, setConns] = useState(() => {
    try {
      const s = localStorage.getItem("biz_telecom");
      return s ? JSON.parse(s) : DEFAULT_CONNS;
    } catch {
      return DEFAULT_CONNS;
    }
  });
  const [telDialog, setTelDialog] = useState(false);
  const [telEdit, setTelEdit] = useState<{
    sim: string;
    customer: string;
    plan: string;
    status: string;
    validity: string;
  } | null>(null);
  const [telForm, setTelForm] = useState({
    sim: "",
    customer: "",
    plan: "1GB/day",
    status: "Active",
    validity: "",
  });
  useEffect(() => {
    localStorage.setItem("biz_telecom", JSON.stringify(conns));
  }, [conns]);
  const openTelAdd = () => {
    setTelEdit(null);
    setTelForm({
      sim: "",
      customer: "",
      plan: "1GB/day",
      status: "Active",
      validity: "",
    });
    setTelDialog(true);
  };
  const openTelEdit = (r: (typeof conns)[0]) => {
    setTelEdit(r);
    setTelForm({
      sim: r.sim,
      customer: r.customer,
      plan: r.plan,
      status: r.status,
      validity: r.validity,
    });
    setTelDialog(true);
  };
  const saveTel = () => {
    if (!telForm.sim) return;
    if (telEdit) {
      setConns((c: typeof conns) =>
        c.map((r: (typeof conns)[0]) =>
          r.sim === telEdit.sim ? { ...r, ...telForm } : r,
        ),
      );
      toast.success("Updated");
    } else {
      setConns((c: typeof conns) => [...c, { ...telForm }]);
      toast.success("Added");
    }
    setTelDialog(false);
  };
  const deleteTel = (sim: string) => {
    setConns((c: typeof conns) =>
      c.filter((r: (typeof conns)[0]) => r.sim !== sim),
    );
    toast.success("Deleted");
  };
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
      setConns((c: typeof conns) =>
        c.map((r: (typeof conns)[0]) => ({
          ...r,
          status:
            r.status === "Inactive" && Math.random() > 0.8
              ? "Active"
              : r.status,
        })),
      );
    }, 25000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="space-y-4">
      <Dialog open={telDialog} onOpenChange={setTelDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {telEdit ? "Edit Connection" : "Add SIM Connection"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <div className="space-y-1">
              <Label>SIM Number</Label>
              <Input
                value={telForm.sim}
                onChange={(e) =>
                  setTelForm((f) => ({ ...f, sim: e.target.value }))
                }
                placeholder="10-digit number"
              />
            </div>
            <div className="space-y-1">
              <Label>Customer Name</Label>
              <Input
                value={telForm.customer}
                onChange={(e) =>
                  setTelForm((f) => ({ ...f, customer: e.target.value }))
                }
                placeholder="Customer name"
              />
            </div>
            <div className="space-y-1">
              <Label>Plan</Label>
              <Input
                value={telForm.plan}
                onChange={(e) =>
                  setTelForm((f) => ({ ...f, plan: e.target.value }))
                }
                placeholder="2GB/day"
              />
            </div>
            <div className="space-y-1">
              <Label>Validity</Label>
              <Input
                value={telForm.validity}
                onChange={(e) =>
                  setTelForm((f) => ({ ...f, validity: e.target.value }))
                }
                placeholder="Apr 30"
              />
            </div>
            <div className="space-y-1">
              <Label>Status</Label>
              <Select
                value={telForm.status}
                onValueChange={(v) => setTelForm((f) => ({ ...f, status: v }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                  <SelectItem value="Suspended">Suspended</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setTelDialog(false)}>
              Cancel
            </Button>
            <Button onClick={saveTel}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
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
                <tr key="__add__">
                  <td colSpan={6} className="py-1">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full h-7 text-xs"
                      onClick={openTelAdd}
                    >
                      <Plus size={12} className="mr-1" />
                      Add Connection
                    </Button>
                  </td>
                </tr>
                {conns.map((r: (typeof conns)[0]) => (
                  <tr key={r.sim} className="border-b last:border-0">
                    <td className="py-1.5 pr-3 font-mono text-xs">{r.sim}</td>
                    <td className="pr-3">{r.customer}</td>
                    <td className="pr-3">{r.plan}</td>
                    <td className="pr-3 text-muted-foreground">{r.validity}</td>
                    <td>{statusBadge(r.status)}</td>
                    <td className="flex gap-1 py-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-6 w-6 p-0"
                        onClick={() => openTelEdit(r)}
                      >
                        <Pencil size={11} />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-6 w-6 p-0 text-red-500"
                        onClick={() => deleteTel(r.sim)}
                      >
                        <Trash2 size={11} />
                      </Button>
                    </td>
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
  const DEFAULT_CATALOG = [
    { name: "Colgate 100g", price: 45 },
    { name: "Maggi 70g", price: 14 },
    { name: "Amul Butter 500g", price: 260 },
    { name: "Lays Chips", price: 20 },
  ];
  const DEFAULT_LOYALTY = [
    { name: "Priya Singh", points: 1240, tier: "Gold", last: "Apr 1" },
    { name: "Raj Kumar", points: 380, tier: "Silver", last: "Mar 28" },
    { name: "Anita Rao", points: 5600, tier: "Platinum", last: "Apr 3" },
  ];
  const [billItems, setBillItems] = useState<
    { name: string; qty: number; price: number }[]
  >([]);
  const [search, setSearch] = useState("");
  const [catalog, setCatalog] = useState<{ name: string; price: number }[]>(
    () => {
      try {
        const s = localStorage.getItem("biz_retail_catalog");
        return s ? JSON.parse(s) : DEFAULT_CATALOG;
      } catch {
        return DEFAULT_CATALOG;
      }
    },
  );
  const [loyalty, setLoyalty] = useState<
    { name: string; points: number; tier: string; last: string }[]
  >(() => {
    try {
      const s = localStorage.getItem("biz_retail_loyalty");
      return s ? JSON.parse(s) : DEFAULT_LOYALTY;
    } catch {
      return DEFAULT_LOYALTY;
    }
  });
  const [catDialog, setCatDialog] = useState(false);
  const [catEdit, setCatEdit] = useState<{
    name: string;
    price: number;
  } | null>(null);
  const [catForm, setCatForm] = useState({ name: "", price: "" });
  const [loyDialog, setLoyDialog] = useState(false);
  const [loyEdit, setLoyEdit] = useState<(typeof DEFAULT_LOYALTY)[0] | null>(
    null,
  );
  const [loyForm, setLoyForm] = useState({
    name: "",
    points: "",
    tier: "Silver",
    last: "",
  });

  useEffect(() => {
    localStorage.setItem("biz_retail_catalog", JSON.stringify(catalog));
  }, [catalog]);
  useEffect(() => {
    localStorage.setItem("biz_retail_loyalty", JSON.stringify(loyalty));
  }, [loyalty]);

  const openCatAdd = () => {
    setCatEdit(null);
    setCatForm({ name: "", price: "" });
    setCatDialog(true);
  };
  const openCatEdit = (r: { name: string; price: number }) => {
    setCatEdit(r);
    setCatForm({ name: r.name, price: String(r.price) });
    setCatDialog(true);
  };
  const saveCat = () => {
    if (!catForm.name) return;
    if (catEdit) {
      setCatalog((c) =>
        c.map((r) =>
          r.name === catEdit.name
            ? { name: catForm.name, price: Number(catForm.price) }
            : r,
        ),
      );
      toast.success("Updated");
    } else {
      setCatalog((c) => [
        ...c,
        { name: catForm.name, price: Number(catForm.price) },
      ]);
      toast.success("Added");
    }
    setCatDialog(false);
  };
  const deleteCat = (name: string) => {
    setCatalog((c) => c.filter((r) => r.name !== name));
    toast.success("Deleted");
  };

  const openLoyAdd = () => {
    setLoyEdit(null);
    setLoyForm({ name: "", points: "", tier: "Silver", last: "" });
    setLoyDialog(true);
  };
  const openLoyEdit = (r: (typeof DEFAULT_LOYALTY)[0]) => {
    setLoyEdit(r);
    setLoyForm({
      name: r.name,
      points: String(r.points),
      tier: r.tier,
      last: r.last,
    });
    setLoyDialog(true);
  };
  const saveLoy = () => {
    if (!loyForm.name) return;
    if (loyEdit) {
      setLoyalty((l) =>
        l.map((r) =>
          r.name === loyEdit.name
            ? {
                name: loyForm.name,
                points: Number(loyForm.points),
                tier: loyForm.tier,
                last: loyForm.last,
              }
            : r,
        ),
      );
      toast.success("Updated");
    } else {
      setLoyalty((l) => [
        ...l,
        {
          name: loyForm.name,
          points: Number(loyForm.points),
          tier: loyForm.tier,
          last: loyForm.last,
        },
      ]);
      toast.success("Added");
    }
    setLoyDialog(false);
  };
  const deleteLoy = (name: string) => {
    setLoyalty((l) => l.filter((r) => r.name !== name));
    toast.success("Deleted");
  };
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
            <Button size="sm" variant="outline" onClick={openCatAdd}>
              <Plus size={12} className="mr-1" />
              Add Item
            </Button>
          </div>
          {search && (
            <div className="border rounded-md bg-popover shadow-md">
              {catalog
                .filter((c) =>
                  c.name.toLowerCase().includes(search.toLowerCase()),
                )
                .map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center px-1 hover:bg-accent"
                  >
                    <button
                      type="button"
                      className="flex-1 text-left px-2 py-2 text-sm flex justify-between"
                      onClick={() => {
                        setBillItems((b) => {
                          const ex = b.find((x) => x.name === p.name);
                          return ex
                            ? b.map((x) =>
                                x.name === p.name
                                  ? { ...x, qty: x.qty + 1 }
                                  : x,
                              )
                            : [...b, { ...p, qty: 1 }];
                        });
                        setSearch("");
                      }}
                    >
                      <span>{p.name}</span>
                      <span className="text-muted-foreground">₹{p.price}</span>
                    </button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-6 w-6 p-0 shrink-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        openCatEdit(p);
                        setSearch("");
                      }}
                    >
                      <Pencil size={10} />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-6 w-6 p-0 shrink-0 text-red-500"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteCat(p.name);
                        setSearch("");
                      }}
                    >
                      <Trash2 size={10} />
                    </Button>
                  </div>
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
          <Dialog open={loyDialog} onOpenChange={setLoyDialog}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {loyEdit ? "Edit Customer" : "Add Loyalty Customer"}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-3">
                <div className="space-y-1">
                  <Label>Name</Label>
                  <Input
                    value={loyForm.name}
                    onChange={(e) =>
                      setLoyForm((f) => ({ ...f, name: e.target.value }))
                    }
                    placeholder="Customer name"
                  />
                </div>
                <div className="space-y-1">
                  <Label>Points</Label>
                  <Input
                    type="number"
                    value={loyForm.points}
                    onChange={(e) =>
                      setLoyForm((f) => ({ ...f, points: e.target.value }))
                    }
                    placeholder="0"
                  />
                </div>
                <div className="space-y-1">
                  <Label>Tier</Label>
                  <Select
                    value={loyForm.tier}
                    onValueChange={(v) =>
                      setLoyForm((f) => ({ ...f, tier: v }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Silver">Silver</SelectItem>
                      <SelectItem value="Gold">Gold</SelectItem>
                      <SelectItem value="Platinum">Platinum</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1">
                  <Label>Last Visit</Label>
                  <Input
                    value={loyForm.last}
                    onChange={(e) =>
                      setLoyForm((f) => ({ ...f, last: e.target.value }))
                    }
                    placeholder="Apr 1"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setLoyDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={saveLoy}>Save</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button
            size="sm"
            variant="outline"
            className="w-full h-8 text-xs"
            onClick={openLoyAdd}
          >
            <Plus size={12} className="mr-1" />
            Add Customer
          </Button>
          {loyalty.map((c) => (
            <Card key={c.name}>
              <CardContent className="p-3 flex justify-between items-center">
                <div>
                  <p className="font-medium">{c.name}</p>
                  <p className="text-xs text-muted-foreground">
                    Last: {c.last}
                  </p>
                </div>
                <div className="text-right flex items-center gap-2">
                  <div>
                    <p className="font-bold">{c.points} pts</p>
                    <Badge variant="outline" className="text-xs">
                      {c.tier}
                    </Badge>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 w-6 p-0"
                    onClick={() => openLoyEdit(c)}
                  >
                    <Pencil size={11} />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 w-6 p-0 text-red-500"
                    onClick={() => deleteLoy(c.name)}
                  >
                    <Trash2 size={11} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
      <Dialog open={catDialog} onOpenChange={setCatDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {catEdit ? "Edit Item" : "Add Catalog Item"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <div className="space-y-1">
              <Label>Item Name</Label>
              <Input
                value={catForm.name}
                onChange={(e) =>
                  setCatForm((f) => ({ ...f, name: e.target.value }))
                }
                placeholder="Product name"
              />
            </div>
            <div className="space-y-1">
              <Label>Price (₹)</Label>
              <Input
                type="number"
                value={catForm.price}
                onChange={(e) =>
                  setCatForm((f) => ({ ...f, price: e.target.value }))
                }
                placeholder="0"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCatDialog(false)}>
              Cancel
            </Button>
            <Button onClick={saveCat}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ─── 7. VEHICLE MODULE ─────────────────────────────────────────────────────────
export function VehicleModule() {
  const DEFAULT_VEHICLES = [
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
  ];
  const [inventory, setInventory] = useState<
    {
      make: string;
      model: string;
      year: number;
      color: string;
      price: string;
      status: string;
    }[]
  >(() => {
    try {
      const s = localStorage.getItem("biz_vehicle");
      return s ? JSON.parse(s) : DEFAULT_VEHICLES;
    } catch {
      return DEFAULT_VEHICLES;
    }
  });
  const [vehDialog, setVehDialog] = useState(false);
  const [vehEdit, setVehEdit] = useState<(typeof DEFAULT_VEHICLES)[0] | null>(
    null,
  );
  const [vehForm, setVehForm] = useState({
    make: "",
    model: "",
    year: "",
    color: "",
    price: "",
    status: "Available",
  });
  useEffect(() => {
    localStorage.setItem("biz_vehicle", JSON.stringify(inventory));
  }, [inventory]);
  const openVehAdd = () => {
    setVehEdit(null);
    setVehForm({
      make: "",
      model: "",
      year: "",
      color: "",
      price: "",
      status: "Available",
    });
    setVehDialog(true);
  };
  const openVehEdit = (r: (typeof DEFAULT_VEHICLES)[0]) => {
    setVehEdit(r);
    setVehForm({
      make: r.make,
      model: r.model,
      year: String(r.year),
      color: r.color,
      price: r.price,
      status: r.status,
    });
    setVehDialog(true);
  };
  const saveVeh = () => {
    if (!vehForm.make) return;
    const entry = { ...vehForm, year: Number(vehForm.year) };
    if (vehEdit) {
      setInventory((v) =>
        v.map((r) =>
          r.make + r.model === vehEdit.make + vehEdit.model ? entry : r,
        ),
      );
      toast.success("Updated");
    } else {
      setInventory((v) => [...v, entry]);
      toast.success("Added");
    }
    setVehDialog(false);
  };
  const deleteVeh = (make: string, model: string) => {
    setInventory((v) =>
      v.filter((r) => !(r.make === make && r.model === model)),
    );
    toast.success("Deleted");
  };
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
      <Dialog open={vehDialog} onOpenChange={setVehDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {vehEdit ? "Edit Vehicle" : "Add Vehicle"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label>Make</Label>
                <Input
                  value={vehForm.make}
                  onChange={(e) =>
                    setVehForm((f) => ({ ...f, make: e.target.value }))
                  }
                  placeholder="Maruti"
                />
              </div>
              <div className="space-y-1">
                <Label>Model</Label>
                <Input
                  value={vehForm.model}
                  onChange={(e) =>
                    setVehForm((f) => ({ ...f, model: e.target.value }))
                  }
                  placeholder="Swift"
                />
              </div>
              <div className="space-y-1">
                <Label>Year</Label>
                <Input
                  type="number"
                  value={vehForm.year}
                  onChange={(e) =>
                    setVehForm((f) => ({ ...f, year: e.target.value }))
                  }
                  placeholder="2024"
                />
              </div>
              <div className="space-y-1">
                <Label>Color</Label>
                <Input
                  value={vehForm.color}
                  onChange={(e) =>
                    setVehForm((f) => ({ ...f, color: e.target.value }))
                  }
                  placeholder="White"
                />
              </div>
            </div>
            <div className="space-y-1">
              <Label>Price</Label>
              <Input
                value={vehForm.price}
                onChange={(e) =>
                  setVehForm((f) => ({ ...f, price: e.target.value }))
                }
                placeholder="₹8.5L"
              />
            </div>
            <div className="space-y-1">
              <Label>Status</Label>
              <Select
                value={vehForm.status}
                onValueChange={(v) => setVehForm((f) => ({ ...f, status: v }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Available">Available</SelectItem>
                  <SelectItem value="Reserved">Reserved</SelectItem>
                  <SelectItem value="Sold">Sold</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setVehDialog(false)}>
              Cancel
            </Button>
            <Button onClick={saveVeh}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
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
                <tr key="__veh_add__">
                  <td colSpan={7} className="py-1">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full h-7 text-xs"
                      onClick={openVehAdd}
                    >
                      <Plus size={12} className="mr-1" />
                      Add Vehicle
                    </Button>
                  </td>
                </tr>
                {inventory.map((r) => (
                  <tr key={r.make + r.model} className="border-b last:border-0">
                    <td className="py-1.5 pr-3">{r.make}</td>
                    <td className="pr-3">{r.model}</td>
                    <td className="pr-3">{r.year}</td>
                    <td className="pr-3">{r.color}</td>
                    <td className="pr-3">{r.price}</td>
                    <td>{statusBadge(r.status)}</td>
                    <td className="flex gap-1 py-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-6 w-6 p-0"
                        onClick={() => openVehEdit(r)}
                      >
                        <Pencil size={11} />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-6 w-6 p-0 text-red-500"
                        onClick={() => deleteVeh(r.make, r.model)}
                      >
                        <Trash2 size={11} />
                      </Button>
                    </td>
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
  const DEFAULT_LEADS = [
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
  ];
  const [leads, setLeads] = useState<
    { name: string; value: string; source: string; stage: string }[]
  >(() => {
    try {
      const s = localStorage.getItem("biz_leads");
      return s ? JSON.parse(s) : DEFAULT_LEADS;
    } catch {
      return DEFAULT_LEADS;
    }
  });
  const [leadDialog, setLeadDialog] = useState(false);
  const [leadEdit, setLeadEdit] = useState<(typeof DEFAULT_LEADS)[0] | null>(
    null,
  );
  const [leadForm, setLeadForm] = useState({
    name: "",
    value: "",
    source: "",
    stage: "New",
  });
  useEffect(() => {
    localStorage.setItem("biz_leads", JSON.stringify(leads));
  }, [leads]);
  const openLeadAdd = () => {
    setLeadEdit(null);
    setLeadForm({ name: "", value: "", source: "", stage: "New" });
    setLeadDialog(true);
  };
  const openLeadEdit = (r: (typeof DEFAULT_LEADS)[0]) => {
    setLeadEdit(r);
    setLeadForm({
      name: r.name,
      value: r.value,
      source: r.source,
      stage: r.stage,
    });
    setLeadDialog(true);
  };
  const saveLead = () => {
    if (!leadForm.name) return;
    if (leadEdit) {
      setLeads((l) =>
        l.map((r) => (r.name === leadEdit.name ? { ...leadForm } : r)),
      );
      toast.success("Updated");
    } else {
      setLeads((l) => [...l, { ...leadForm }]);
      toast.success("Lead added");
    }
    setLeadDialog(false);
  };
  const deleteLead = (name: string) => {
    setLeads((l) => l.filter((r) => r.name !== name));
    toast.success("Deleted");
  };
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
      <Dialog open={leadDialog} onOpenChange={setLeadDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{leadEdit ? "Edit Lead" : "Add Lead"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <div className="space-y-1">
              <Label>Company / Lead Name</Label>
              <Input
                value={leadForm.name}
                onChange={(e) =>
                  setLeadForm((f) => ({ ...f, name: e.target.value }))
                }
                placeholder="Company name"
              />
            </div>
            <div className="space-y-1">
              <Label>Deal Value</Label>
              <Input
                value={leadForm.value}
                onChange={(e) =>
                  setLeadForm((f) => ({ ...f, value: e.target.value }))
                }
                placeholder="₹1L"
              />
            </div>
            <div className="space-y-1">
              <Label>Source</Label>
              <Input
                value={leadForm.source}
                onChange={(e) =>
                  setLeadForm((f) => ({ ...f, source: e.target.value }))
                }
                placeholder="Referral"
              />
            </div>
            <div className="space-y-1">
              <Label>Stage</Label>
              <Select
                value={leadForm.stage}
                onValueChange={(v) => setLeadForm((f) => ({ ...f, stage: v }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {stages.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setLeadDialog(false)}>
              Cancel
            </Button>
            <Button onClick={saveLead}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
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
          <Button
            size="sm"
            variant="outline"
            className="mb-3 w-full h-8 text-xs"
            onClick={openLeadAdd}
          >
            <Plus size={12} className="mr-1" />
            Add Lead
          </Button>
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
                          <div className="flex justify-between items-start">
                            <p className="text-xs font-medium">{l.name}</p>
                            <div className="flex gap-0.5">
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-5 w-5 p-0"
                                onClick={() => openLeadEdit(l)}
                              >
                                <Pencil size={9} />
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-5 w-5 p-0 text-red-500"
                                onClick={() => deleteLead(l.name)}
                              >
                                <Trash2 size={9} />
                              </Button>
                            </div>
                          </div>
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
  const DEFAULT_PROJECTS = [
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
  ];
  const [projects, setProjects] = useState<typeof DEFAULT_PROJECTS>(() => {
    try {
      const s = localStorage.getItem("biz_software");
      return s ? JSON.parse(s) : DEFAULT_PROJECTS;
    } catch {
      return DEFAULT_PROJECTS;
    }
  });
  const [swDialog, setSwDialog] = useState(false);
  const [swEdit, setSwEdit] = useState<(typeof DEFAULT_PROJECTS)[0] | null>(
    null,
  );
  const [swForm, setSwForm] = useState({
    name: "",
    client: "",
    start: "",
    deadline: "",
    budget: "",
    status: "Active",
  });
  useEffect(() => {
    localStorage.setItem("biz_software", JSON.stringify(projects));
  }, [projects]);
  const openSwAdd = () => {
    setSwEdit(null);
    setSwForm({
      name: "",
      client: "",
      start: "",
      deadline: "",
      budget: "",
      status: "Active",
    });
    setSwDialog(true);
  };
  const openSwEdit = (r: (typeof DEFAULT_PROJECTS)[0]) => {
    setSwEdit(r);
    setSwForm({
      name: r.name,
      client: r.client,
      start: r.start,
      deadline: r.deadline,
      budget: r.budget,
      status: r.status,
    });
    setSwDialog(true);
  };
  const saveSw = () => {
    if (!swForm.name) return;
    if (swEdit) {
      setProjects((p) =>
        p.map((r) => (r.name === swEdit.name ? { ...swForm } : r)),
      );
      toast.success("Updated");
    } else {
      setProjects((p) => [...p, { ...swForm }]);
      toast.success("Project added");
    }
    setSwDialog(false);
  };
  const deleteSw = (name: string) => {
    setProjects((p) => p.filter((r) => r.name !== name));
    toast.success("Deleted");
  };
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
      <Dialog open={swDialog} onOpenChange={setSwDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{swEdit ? "Edit Project" : "Add Project"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <div className="space-y-1">
              <Label>Project Name</Label>
              <Input
                value={swForm.name}
                onChange={(e) =>
                  setSwForm((f) => ({ ...f, name: e.target.value }))
                }
                placeholder="Project name"
              />
            </div>
            <div className="space-y-1">
              <Label>Client</Label>
              <Input
                value={swForm.client}
                onChange={(e) =>
                  setSwForm((f) => ({ ...f, client: e.target.value }))
                }
                placeholder="Client name"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label>Start Date</Label>
                <Input
                  value={swForm.start}
                  onChange={(e) =>
                    setSwForm((f) => ({ ...f, start: e.target.value }))
                  }
                  placeholder="Jan 1"
                />
              </div>
              <div className="space-y-1">
                <Label>Deadline</Label>
                <Input
                  value={swForm.deadline}
                  onChange={(e) =>
                    setSwForm((f) => ({ ...f, deadline: e.target.value }))
                  }
                  placeholder="Dec 31"
                />
              </div>
            </div>
            <div className="space-y-1">
              <Label>Budget</Label>
              <Input
                value={swForm.budget}
                onChange={(e) =>
                  setSwForm((f) => ({ ...f, budget: e.target.value }))
                }
                placeholder="₹2L"
              />
            </div>
            <div className="space-y-1">
              <Label>Status</Label>
              <Select
                value={swForm.status}
                onValueChange={(v) => setSwForm((f) => ({ ...f, status: v }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="On Hold">On Hold</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setSwDialog(false)}>
              Cancel
            </Button>
            <Button onClick={saveSw}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
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
              <tr key="__sw_add__">
                <td colSpan={6} className="py-1">
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full h-7 text-xs"
                    onClick={openSwAdd}
                  >
                    <Plus size={12} className="mr-1" />
                    Add Project
                  </Button>
                </td>
              </tr>
              {projects.map((r) => (
                <tr key={r.name} className="border-b last:border-0">
                  <td className="py-1.5 pr-3 font-medium">{r.name}</td>
                  <td className="pr-3 text-muted-foreground">{r.client}</td>
                  <td className="pr-3">{r.deadline}</td>
                  <td className="pr-3">{r.budget}</td>
                  <td>{statusBadge(r.status)}</td>
                  <td className="flex gap-1 py-1">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-6 w-6 p-0"
                      onClick={() => openSwEdit(r)}
                    >
                      <Pencil size={11} />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-6 w-6 p-0 text-red-500"
                      onClick={() => deleteSw(r.name)}
                    >
                      <Trash2 size={11} />
                    </Button>
                  </td>
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
  const DEFAULT_LOANS = [
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
  ];
  const [loans, setLoans] = useState<typeof DEFAULT_LOANS>(() => {
    try {
      const s = localStorage.getItem("biz_loans");
      return s ? JSON.parse(s) : DEFAULT_LOANS;
    } catch {
      return DEFAULT_LOANS;
    }
  });
  const [loanDialog, setLoanDialog] = useState(false);
  const [loanEdit, setLoanEdit] = useState<(typeof DEFAULT_LOANS)[0] | null>(
    null,
  );
  const [loanForm, setLoanForm] = useState({
    borrower: "",
    amt: "",
    rate: "",
    tenure: "",
    disbursed: "",
    status: "Active",
  });
  useEffect(() => {
    localStorage.setItem("biz_loans", JSON.stringify(loans));
  }, [loans]);
  const openLoanAdd = () => {
    setLoanEdit(null);
    setLoanForm({
      borrower: "",
      amt: "",
      rate: "",
      tenure: "",
      disbursed: "",
      status: "Active",
    });
    setLoanDialog(true);
  };
  const openLoanEdit = (r: (typeof DEFAULT_LOANS)[0]) => {
    setLoanEdit(r);
    setLoanForm({
      borrower: r.borrower,
      amt: r.amt,
      rate: r.rate,
      tenure: r.tenure,
      disbursed: r.disbursed,
      status: r.status,
    });
    setLoanDialog(true);
  };
  const saveLoan = () => {
    if (!loanForm.borrower) return;
    if (loanEdit) {
      setLoans((l) =>
        l.map((r) => (r.id === loanEdit.id ? { ...r, ...loanForm } : r)),
      );
      toast.success("Updated");
    } else {
      setLoans((l) => [...l, { id: `L-${Date.now()}`, ...loanForm }]);
      toast.success("Loan added");
    }
    setLoanDialog(false);
  };
  const deleteLoan = (id: string) => {
    setLoans((l) => l.filter((r) => r.id !== id));
    toast.success("Deleted");
  };
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
      <Dialog open={loanDialog} onOpenChange={setLoanDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{loanEdit ? "Edit Loan" : "Add Loan"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <div className="space-y-1">
              <Label>Borrower Name</Label>
              <Input
                value={loanForm.borrower}
                onChange={(e) =>
                  setLoanForm((f) => ({ ...f, borrower: e.target.value }))
                }
                placeholder="Borrower name"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label>Amount</Label>
                <Input
                  value={loanForm.amt}
                  onChange={(e) =>
                    setLoanForm((f) => ({ ...f, amt: e.target.value }))
                  }
                  placeholder="₹50,000"
                />
              </div>
              <div className="space-y-1">
                <Label>Interest Rate</Label>
                <Input
                  value={loanForm.rate}
                  onChange={(e) =>
                    setLoanForm((f) => ({ ...f, rate: e.target.value }))
                  }
                  placeholder="12%"
                />
              </div>
              <div className="space-y-1">
                <Label>Tenure</Label>
                <Input
                  value={loanForm.tenure}
                  onChange={(e) =>
                    setLoanForm((f) => ({ ...f, tenure: e.target.value }))
                  }
                  placeholder="12m"
                />
              </div>
              <div className="space-y-1">
                <Label>Disbursed Date</Label>
                <Input
                  value={loanForm.disbursed}
                  onChange={(e) =>
                    setLoanForm((f) => ({ ...f, disbursed: e.target.value }))
                  }
                  placeholder="Jan 1"
                />
              </div>
            </div>
            <div className="space-y-1">
              <Label>Status</Label>
              <Select
                value={loanForm.status}
                onValueChange={(v) => setLoanForm((f) => ({ ...f, status: v }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Closed">Closed</SelectItem>
                  <SelectItem value="Defaulted">Defaulted</SelectItem>
                  <SelectItem value="Overdue">Overdue</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setLoanDialog(false)}>
              Cancel
            </Button>
            <Button onClick={saveLoan}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
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
                <tr key="__loan_add__">
                  <td colSpan={8} className="py-1">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full h-7 text-xs"
                      onClick={openLoanAdd}
                    >
                      <Plus size={12} className="mr-1" />
                      Add Loan
                    </Button>
                  </td>
                </tr>
                {loans.map((r) => (
                  <tr key={r.id} className="border-b last:border-0">
                    <td className="py-1.5 pr-2 font-mono text-xs">{r.id}</td>
                    <td className="pr-2">{r.borrower}</td>
                    <td className="pr-2">{r.amt}</td>
                    <td className="pr-2">{r.rate}</td>
                    <td className="pr-2">{r.tenure}</td>
                    <td className="pr-2">{r.disbursed}</td>
                    <td>{statusBadge(r.status)}</td>
                    <td className="flex gap-1 py-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-6 w-6 p-0"
                        onClick={() => openLoanEdit(r)}
                      >
                        <Pencil size={11} />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-6 w-6 p-0 text-red-500"
                        onClick={() => deleteLoan(r.id)}
                      >
                        <Trash2 size={11} />
                      </Button>
                    </td>
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
