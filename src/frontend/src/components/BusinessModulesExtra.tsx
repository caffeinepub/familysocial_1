import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2,
  Clock,
  Droplets,
  Flame,
  Package,
  Pencil,
  Trash2,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

// ── Shared helpers ─────────────────────────────────────────────────────────
const now = () => new Date().toLocaleString("en-IN");

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Pending: "bg-amber-500/15 text-amber-600 border-amber-500/30",
    "In Progress": "bg-blue-500/15 text-blue-700 border-blue-500/30",
    Open: "bg-amber-500/15 text-amber-600 border-amber-500/30",
    Dispatched: "bg-violet-500/15 text-violet-700 border-violet-500/30",
    "In Transit": "bg-blue-500/15 text-blue-700 border-blue-500/30",
    Delivered: "bg-green-500/15 text-green-700 border-green-500/30",
    Done: "bg-green-500/15 text-green-700 border-green-500/30",
    Active: "bg-green-500/15 text-green-700 border-green-500/30",
    Completed: "bg-green-500/15 text-green-700 border-green-500/30",
    Scheduled: "bg-sky-500/15 text-sky-700 border-sky-500/30",
    Failed: "bg-red-500/15 text-red-700 border-red-500/30",
  };
  const cls = map[status] ?? "bg-muted text-muted-foreground border-border";
  return (
    <span
      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${cls}`}
    >
      {status}
    </span>
  );
}

// ── COURIER & DISPATCH ─────────────────────────────────────────────────────
interface Shipment {
  id: string;
  customer: string;
  origin: string;
  destination: string;
  weight: string;
  status: "Pending" | "Dispatched" | "In Transit" | "Delivered" | "Failed";
  courier: string;
  createdAt: string;
  pod?: string;
}

export function CourierDispatchModule() {
  const DEFAULT_SHIPMENTS: Shipment[] = [
    {
      id: "SHP-001",
      customer: "Ramesh Gupta",
      origin: "Mumbai",
      destination: "Pune",
      weight: "2.5 kg",
      status: "Dispatched",
      courier: "Ravi Kumar",
      createdAt: "01 Apr 2026, 09:15",
    },
    {
      id: "SHP-002",
      customer: "Priya Sharma",
      origin: "Delhi",
      destination: "Agra",
      weight: "0.8 kg",
      status: "Pending",
      courier: "",
      createdAt: "01 Apr 2026, 10:00",
    },
    {
      id: "SHP-003",
      customer: "Ankit Joshi",
      origin: "Bangalore",
      destination: "Chennai",
      weight: "5 kg",
      status: "In Transit",
      courier: "Suresh Nair",
      createdAt: "31 Mar 2026, 16:30",
    },
  ];
  const [shipments, setShipments] = useState<Shipment[]>(() => {
    try {
      const saved = localStorage.getItem("ic_pos_courier");
      return saved ? JSON.parse(saved) : DEFAULT_SHIPMENTS;
    } catch {
      return DEFAULT_SHIPMENTS;
    }
  });
  const [editShipId, setEditShipId] = useState<string | null>(null);
  const [editShipOpen, setEditShipOpen] = useState(false);
  const [editShipForm, setEditShipForm] = useState({
    customer: "",
    origin: "",
    destination: "",
    weight: "",
  });
  const [addOpen, setAddOpen] = useState(false);
  const [form, setForm] = useState({
    customer: "",
    origin: "",
    destination: "",
    weight: "",
  });
  const couriers = ["Ravi Kumar", "Suresh Nair", "Amit Singh", "Neha Verma"];

  useEffect(() => {
    try {
      localStorage.setItem("ic_pos_courier", JSON.stringify(shipments));
    } catch {}
  }, [shipments]);

  const addShipment = () => {
    if (!form.customer || !form.origin || !form.destination) return;
    const s: Shipment = {
      id: `SHP-${String(shipments.length + 4).padStart(3, "0")}`,
      ...form,
      status: "Pending",
      courier: "",
      createdAt: now(),
    };
    setShipments((p) => [s, ...p]);
    setForm({ customer: "", origin: "", destination: "", weight: "" });
    setAddOpen(false);
  };

  const startEditShipment = (s: Shipment) => {
    setEditShipId(s.id);
    setEditShipForm({
      customer: s.customer,
      origin: s.origin,
      destination: s.destination,
      weight: s.weight,
    });
    setEditShipOpen(true);
  };

  const saveEditShipment = () => {
    setShipments((p) =>
      p.map((s) => (s.id === editShipId ? { ...s, ...editShipForm } : s)),
    );
    toast.success("Shipment updated");
    setEditShipId(null);
    setEditShipOpen(false);
  };

  const deleteShipment = (id: string) => {
    if (window.confirm("Delete this shipment?")) {
      setShipments((p) => p.filter((s) => s.id !== id));
      toast.success("Item removed");
    }
  };

  const assign = (id: string, courier: string) =>
    setShipments((p) =>
      p.map((s) => (s.id === id ? { ...s, courier, status: "Dispatched" } : s)),
    );

  const advance = (id: string) =>
    setShipments((p) =>
      p.map((s) => {
        if (s.id !== id) return s;
        const next: Record<string, Shipment["status"]> = {
          Pending: "Dispatched",
          Dispatched: "In Transit",
          "In Transit": "Delivered",
        };
        return { ...s, status: next[s.status] ?? s.status };
      }),
    );

  return (
    <div className="space-y-4" data-ocid="courier.module.panel">
      <Tabs defaultValue="shipments">
        <TabsList>
          <TabsTrigger value="shipments">📦 Shipments</TabsTrigger>
          <TabsTrigger value="dispatch">🚚 Dispatch Board</TabsTrigger>
          <TabsTrigger value="routes">🗺️ Route Plan</TabsTrigger>
        </TabsList>

        <TabsContent value="shipments" className="space-y-3 mt-4">
          <div className="flex justify-between items-center">
            <p className="text-sm font-semibold">
              {shipments.length} Shipments
            </p>
            <Dialog open={addOpen} onOpenChange={setAddOpen}>
              <DialogTrigger asChild>
                <Button size="sm" data-ocid="courier.add.button">
                  + New Shipment
                </Button>
              </DialogTrigger>
              <DialogContent data-ocid="courier.add.dialog">
                <DialogHeader>
                  <DialogTitle>New Shipment</DialogTitle>
                </DialogHeader>
                <div className="space-y-3 py-2">
                  <div>
                    <Label className="text-xs">Customer</Label>
                    <Input
                      value={form.customer}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, customer: e.target.value }))
                      }
                      placeholder="Customer name"
                      className="mt-1"
                      data-ocid="courier.customer.input"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label className="text-xs">Origin</Label>
                      <Input
                        value={form.origin}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, origin: e.target.value }))
                        }
                        placeholder="City / Address"
                        className="mt-1"
                        data-ocid="courier.origin.input"
                      />
                    </div>
                    <div>
                      <Label className="text-xs">Destination</Label>
                      <Input
                        value={form.destination}
                        onChange={(e) =>
                          setForm((p) => ({
                            ...p,
                            destination: e.target.value,
                          }))
                        }
                        placeholder="City / Address"
                        className="mt-1"
                        data-ocid="courier.destination.input"
                      />
                    </div>
                  </div>
                  <div>
                    <Label className="text-xs">Weight / Dimensions</Label>
                    <Input
                      value={form.weight}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, weight: e.target.value }))
                      }
                      placeholder="e.g. 2 kg, 30x20x10 cm"
                      className="mt-1"
                      data-ocid="courier.weight.input"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setAddOpen(false)}
                    data-ocid="courier.add.cancel_button"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={addShipment}
                    data-ocid="courier.add.confirm_button"
                  >
                    Create
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="rounded-xl border border-border overflow-hidden">
            <table className="w-full text-xs">
              <thead className="bg-muted/30">
                <tr>
                  {[
                    "ID",
                    "Customer",
                    "Route",
                    "Weight",
                    "Courier",
                    "Status",
                    "Action",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-3 py-2 text-left font-semibold text-muted-foreground"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {shipments.map((s, idx) => (
                  <tr
                    key={s.id}
                    className="border-t border-border hover:bg-muted/10"
                    data-ocid={`courier.shipment.row.${idx + 1}`}
                  >
                    <td className="px-3 py-2 font-mono">{s.id}</td>
                    <td className="px-3 py-2">{s.customer}</td>
                    <td className="px-3 py-2">
                      {s.origin} → {s.destination}
                    </td>
                    <td className="px-3 py-2">{s.weight}</td>
                    <td className="px-3 py-2">{s.courier || "—"}</td>
                    <td className="px-3 py-2">
                      <StatusBadge status={s.status} />
                    </td>
                    <td className="px-3 py-2">
                      <div className="flex gap-1 items-center">
                        {s.status !== "Delivered" && s.status !== "Failed" && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-6 text-[10px] px-2"
                            onClick={() => advance(s.id)}
                          >
                            Advance
                          </Button>
                        )}
                        <button
                          type="button"
                          onClick={() => startEditShipment(s)}
                          className="p-1 rounded hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors"
                          title="Edit"
                        >
                          <Pencil size={12} />
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteShipment(s.id)}
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
          </div>
        </TabsContent>

        <TabsContent value="dispatch" className="space-y-3 mt-4">
          <p className="text-sm font-semibold">Assign Couriers</p>
          {shipments
            .filter((s) => s.status === "Pending")
            .map((s) => (
              <Card key={s.id} className="rounded-xl">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{s.id}</p>
                    <p className="text-xs text-muted-foreground">
                      {s.customer} · {s.origin} → {s.destination}
                    </p>
                  </div>
                  <Select onValueChange={(v) => assign(s.id, v)}>
                    <SelectTrigger
                      className="w-36 h-7 text-xs"
                      data-ocid="courier.assign.select"
                    >
                      <SelectValue placeholder="Assign" />
                    </SelectTrigger>
                    <SelectContent>
                      {couriers.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>
            ))}
          {shipments.filter((s) => s.status === "Pending").length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-6">
              No pending shipments to assign
            </p>
          )}
        </TabsContent>

        <TabsContent value="routes" className="space-y-3 mt-4">
          {shipments.map((s) => (
            <div
              key={s.id}
              className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-semibold text-muted-foreground">
                    {s.id}
                  </span>
                  <StatusBadge status={s.status} />
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-xs">{s.origin}</span>
                  <span className="flex-1 border-t border-dashed border-border mx-1" />
                  <Truck size={11} className="text-muted-foreground" />
                  <span className="flex-1 border-t border-dashed border-border mx-1" />
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs">{s.destination}</span>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">{s.weight}</span>
            </div>
          ))}
        </TabsContent>
      </Tabs>

      <Dialog
        open={editShipOpen}
        onOpenChange={(v) => {
          if (!v) setEditShipId(null);
          setEditShipOpen(v);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Shipment</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 py-2">
            <div>
              <Label className="text-xs">Customer</Label>
              <Input
                value={editShipForm.customer}
                onChange={(e) =>
                  setEditShipForm((p) => ({ ...p, customer: e.target.value }))
                }
                className="mt-1"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs">Origin</Label>
                <Input
                  value={editShipForm.origin}
                  onChange={(e) =>
                    setEditShipForm((p) => ({ ...p, origin: e.target.value }))
                  }
                  className="mt-1"
                />
              </div>
              <div>
                <Label className="text-xs">Destination</Label>
                <Input
                  value={editShipForm.destination}
                  onChange={(e) =>
                    setEditShipForm((p) => ({
                      ...p,
                      destination: e.target.value,
                    }))
                  }
                  className="mt-1"
                />
              </div>
            </div>
            <div>
              <Label className="text-xs">Weight</Label>
              <Input
                value={editShipForm.weight}
                onChange={(e) =>
                  setEditShipForm((p) => ({ ...p, weight: e.target.value }))
                }
                className="mt-1"
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setEditShipOpen(false)}>
              Cancel
            </Button>
            <Button onClick={saveEditShipment}>Save Changes</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ── FUEL DEPOT ─────────────────────────────────────────────────────────────
interface FuelType {
  id: string;
  name: string;
  icon: string;
  unit: string;
  stock: number;
  price: number;
}

interface DispenseLog {
  fuelId: string;
  fuelName: string;
  qty: number;
  amount: number;
  time: string;
}

export function FuelDepotModule() {
  const DEFAULT_FUELS: FuelType[] = [
    {
      id: "petrol",
      name: "Petrol",
      icon: "⛽",
      unit: "L",
      stock: 15000,
      price: 94.72,
    },
    {
      id: "diesel",
      name: "Diesel",
      icon: "🛢️",
      unit: "L",
      stock: 22000,
      price: 87.45,
    },
    {
      id: "lpg",
      name: "LPG",
      icon: "🔥",
      unit: "kg",
      stock: 3200,
      price: 52.0,
    },
    {
      id: "png",
      name: "PNG",
      icon: "🏭",
      unit: "scm",
      stock: 8500,
      price: 38.5,
    },
    {
      id: "cng",
      name: "CNG",
      icon: "💨",
      unit: "kg",
      stock: 5400,
      price: 76.18,
    },
    { id: "lng", name: "LNG", icon: "❄️", unit: "kg", stock: 1800, price: 68.0 },
    {
      id: "hydrogen",
      name: "Hydrogen",
      icon: "⚛️",
      unit: "kg",
      stock: 420,
      price: 320.0,
    },
    {
      id: "ev",
      name: "EV Charging",
      icon: "⚡",
      unit: "kWh",
      stock: 99999,
      price: 12.5,
    },
    {
      id: "solar",
      name: "Solar",
      icon: "☀️",
      unit: "kWh",
      stock: 99999,
      price: 6.0,
    },
    {
      id: "coal",
      name: "Coal",
      icon: "⬛",
      unit: "kg",
      stock: 45000,
      price: 9.5,
    },
  ];
  const [fuels, setFuels] = useState<FuelType[]>(() => {
    try {
      const saved = localStorage.getItem("ic_pos_fuel");
      return saved ? JSON.parse(saved) : DEFAULT_FUELS;
    } catch {
      return DEFAULT_FUELS;
    }
  });
  const [editFuelId, setEditFuelId] = useState<string | null>(null);
  const [editFuelOpen, setEditFuelOpen] = useState(false);
  const [editFuelForm, setEditFuelForm] = useState({ stock: "", price: "" });
  const [logs, setLogs] = useState<DispenseLog[]>([]);
  const [dispenseOpen, setDispenseOpen] = useState<string | null>(null);
  const [dispenseQty, setDispenseQty] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem("ic_pos_fuel", JSON.stringify(fuels));
    } catch {}
  }, [fuels]);

  const doDispense = () => {
    const qty = Number(dispenseQty);
    if (!qty || qty <= 0 || !dispenseOpen) return;
    const fuel = fuels.find((f) => f.id === dispenseOpen);
    if (!fuel || fuel.stock < qty) return;
    setFuels((p) =>
      p.map((f) =>
        f.id === dispenseOpen ? { ...f, stock: f.stock - qty } : f,
      ),
    );
    setLogs((p) => [
      {
        fuelId: dispenseOpen,
        fuelName: fuel.name,
        qty,
        amount: qty * fuel.price,
        time: now(),
      },
      ...p,
    ]);
    setDispenseQty("");
    setDispenseOpen(null);
  };

  const startEditFuel = (f: FuelType) => {
    setEditFuelId(f.id);
    setEditFuelForm({ stock: String(f.stock), price: String(f.price) });
    setEditFuelOpen(true);
  };

  const saveEditFuel = () => {
    setFuels((p) =>
      p.map((f) =>
        f.id === editFuelId
          ? {
              ...f,
              stock: Number(editFuelForm.stock),
              price: Number(editFuelForm.price),
            }
          : f,
      ),
    );
    toast.success("Fuel entry updated");
    setEditFuelId(null);
    setEditFuelOpen(false);
  };

  const deleteFuel = (id: string) => {
    if (window.confirm("Delete this fuel entry?")) {
      setFuels((p) => p.filter((f) => f.id !== id));
      toast.success("Item removed");
    }
  };

  const activeFuel = fuels.find((f) => f.id === dispenseOpen);

  return (
    <div className="space-y-4" data-ocid="fuel.module.panel">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {fuels.map((f) => (
          <Card
            key={f.id}
            className="rounded-xl border-border hover:border-primary/40 transition-colors"
          >
            <CardContent className="p-3 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xl">{f.icon}</span>
                <Flame size={12} className="text-muted-foreground" />
              </div>
              <p className="text-xs font-semibold">{f.name}</p>
              <p className="text-[10px] text-muted-foreground">
                {f.stock.toLocaleString()} {f.unit}
              </p>
              <p className="text-[10px] font-mono text-primary">
                ₹{f.price}/{f.unit}
              </p>
              <Button
                size="sm"
                variant="outline"
                className="w-full h-6 text-[10px] mt-1"
                onClick={() => setDispenseOpen(f.id)}
                data-ocid={`fuel.dispense.${f.id}.button`}
              >
                Log Dispense
              </Button>
              <div className="flex gap-1 mt-1">
                <button
                  type="button"
                  onClick={() => startEditFuel(f)}
                  className="flex-1 h-6 text-[10px] rounded border border-border hover:bg-muted/50 text-muted-foreground hover:text-foreground flex items-center justify-center gap-1 transition-colors"
                >
                  <Pencil size={10} /> Edit
                </button>
                <button
                  type="button"
                  onClick={() => deleteFuel(f.id)}
                  className="flex-1 h-6 text-[10px] rounded border border-destructive/30 hover:bg-destructive/10 text-muted-foreground hover:text-destructive flex items-center justify-center gap-1 transition-colors"
                >
                  <Trash2 size={10} />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog
        open={!!dispenseOpen}
        onOpenChange={(v) => !v && setDispenseOpen(null)}
      >
        <DialogContent data-ocid="fuel.dispense.dialog">
          <DialogHeader>
            <DialogTitle>
              {activeFuel?.icon} Dispense {activeFuel?.name}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3 py-2">
            <p className="text-sm text-muted-foreground">
              Available: {activeFuel?.stock.toLocaleString()} {activeFuel?.unit}
              · ₹{activeFuel?.price}/{activeFuel?.unit}
            </p>
            <div>
              <Label className="text-xs">Quantity ({activeFuel?.unit})</Label>
              <Input
                type="number"
                value={dispenseQty}
                onChange={(e) => setDispenseQty(e.target.value)}
                placeholder="Enter quantity"
                className="mt-1"
                data-ocid="fuel.qty.input"
              />
            </div>
            {dispenseQty && (
              <p className="text-sm font-semibold text-primary">
                Total: ₹
                {(Number(dispenseQty) * (activeFuel?.price ?? 0)).toFixed(2)}
              </p>
            )}
          </div>
          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => setDispenseOpen(null)}
              data-ocid="fuel.dispense.cancel_button"
            >
              Cancel
            </Button>
            <Button
              onClick={doDispense}
              data-ocid="fuel.dispense.confirm_button"
            >
              Log Dispense
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Fuel Dialog */}
      <Dialog
        open={editFuelOpen}
        onOpenChange={(v) => {
          if (!v) setEditFuelId(null);
          setEditFuelOpen(v);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Edit Fuel — {fuels.find((f) => f.id === editFuelId)?.name}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3 py-2">
            <div>
              <Label className="text-xs">
                Stock ({fuels.find((f) => f.id === editFuelId)?.unit})
              </Label>
              <Input
                type="number"
                value={editFuelForm.stock}
                onChange={(e) =>
                  setEditFuelForm((p) => ({ ...p, stock: e.target.value }))
                }
                className="mt-1"
              />
            </div>
            <div>
              <Label className="text-xs">
                Price per {fuels.find((f) => f.id === editFuelId)?.unit} (₹)
              </Label>
              <Input
                type="number"
                value={editFuelForm.price}
                onChange={(e) =>
                  setEditFuelForm((p) => ({ ...p, price: e.target.value }))
                }
                className="mt-1"
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setEditFuelOpen(false)}>
              Cancel
            </Button>
            <Button onClick={saveEditFuel}>Save Changes</Button>
          </div>
        </DialogContent>
      </Dialog>

      {logs.length > 0 && (
        <div>
          <p className="text-sm font-semibold mb-2">📋 Today's Dispense Log</p>
          <div className="rounded-xl border border-border overflow-hidden">
            <table className="w-full text-xs">
              <thead className="bg-muted/30">
                <tr>
                  {["Fuel", "Qty", "Amount", "Time"].map((h) => (
                    <th
                      key={h}
                      className="px-3 py-2 text-left font-semibold text-muted-foreground"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {logs.map((l) => (
                  <tr
                    key={l.time}
                    className="border-t border-border"
                    data-ocid="fuel.log.row.1"
                  >
                    <td className="px-3 py-2">{l.fuelName}</td>
                    <td className="px-3 py-2">
                      {l.qty} {fuels.find((f) => f.id === l.fuelId)?.unit}
                    </td>
                    <td className="px-3 py-2">₹{l.amount.toFixed(2)}</td>
                    <td className="px-3 py-2 text-muted-foreground">
                      {l.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

// ── TRANSPORT ──────────────────────────────────────────────────────────────
interface Vehicle {
  no: string;
  type: string;
  driver: string;
  status: "Active" | "In Trip" | "Maintenance";
}

interface Trip {
  id: string;
  vehicle: string;
  origin: string;
  destination: string;
  cargo: string;
  distance: string;
  status: "Scheduled" | "In Progress" | "Completed";
}

export function TransportModule() {
  const [vehicles] = useState<Vehicle[]>([
    { no: "MH12AB1234", type: "Truck", driver: "Ramesh Das", status: "Active" },
    {
      no: "DL01XY5678",
      type: "Mini Truck",
      driver: "Suresh Kumar",
      status: "In Trip",
    },
    {
      no: "KA09PQ9999",
      type: "Pickup Van",
      driver: "Vikram Singh",
      status: "Maintenance",
    },
  ]);
  const [trips, setTrips] = useState<Trip[]>([
    {
      id: "TRP-001",
      vehicle: "MH12AB1234",
      origin: "Mumbai Warehouse",
      destination: "Pune Depot",
      cargo: "Electronics",
      distance: "148 km",
      status: "Completed",
    },
    {
      id: "TRP-002",
      vehicle: "DL01XY5678",
      origin: "Delhi Hub",
      destination: "Gurgaon Client",
      cargo: "FMCG Goods",
      distance: "32 km",
      status: "In Progress",
    },
  ]);
  const [addTrip, setAddTrip] = useState(false);
  const [tripForm, setTripForm] = useState({
    vehicle: "",
    origin: "",
    destination: "",
    cargo: "",
    distance: "",
  });

  const createTrip = () => {
    if (!tripForm.vehicle || !tripForm.origin) return;
    setTrips((p) => [
      ...p,
      {
        id: `TRP-${String(p.length + 3).padStart(3, "0")}`,
        ...tripForm,
        status: "Scheduled",
      },
    ]);
    setTripForm({
      vehicle: "",
      origin: "",
      destination: "",
      cargo: "",
      distance: "",
    });
    setAddTrip(false);
  };

  return (
    <div className="space-y-4" data-ocid="transport.module.panel">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {vehicles.map((v) => (
          <Card key={v.no} className="rounded-xl">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold">{v.no}</p>
                  <p className="text-xs text-muted-foreground">{v.type}</p>
                  <p className="text-xs mt-1">Driver: {v.driver}</p>
                </div>
                <StatusBadge status={v.status} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">Trip Log</p>
        <Button
          size="sm"
          onClick={() => setAddTrip(true)}
          data-ocid="transport.add.button"
        >
          + New Trip
        </Button>
      </div>

      <Dialog open={addTrip} onOpenChange={setAddTrip}>
        <DialogContent data-ocid="transport.trip.dialog">
          <DialogHeader>
            <DialogTitle>New Trip</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 py-2">
            <div>
              <Label className="text-xs">Vehicle No.</Label>
              <Select
                value={tripForm.vehicle}
                onValueChange={(v) =>
                  setTripForm((p) => ({ ...p, vehicle: v }))
                }
              >
                <SelectTrigger
                  className="mt-1"
                  data-ocid="transport.vehicle.select"
                >
                  <SelectValue placeholder="Select vehicle" />
                </SelectTrigger>
                <SelectContent>
                  {vehicles.map((veh) => (
                    <SelectItem key={veh.no} value={veh.no}>
                      {veh.no} ({veh.type})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs">Origin</Label>
                <Input
                  value={tripForm.origin}
                  onChange={(e) =>
                    setTripForm((p) => ({ ...p, origin: e.target.value }))
                  }
                  className="mt-1"
                  placeholder="From"
                  data-ocid="transport.origin.input"
                />
              </div>
              <div>
                <Label className="text-xs">Destination</Label>
                <Input
                  value={tripForm.destination}
                  onChange={(e) =>
                    setTripForm((p) => ({ ...p, destination: e.target.value }))
                  }
                  className="mt-1"
                  placeholder="To"
                  data-ocid="transport.destination.input"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs">Cargo</Label>
                <Input
                  value={tripForm.cargo}
                  onChange={(e) =>
                    setTripForm((p) => ({ ...p, cargo: e.target.value }))
                  }
                  className="mt-1"
                  placeholder="Description"
                  data-ocid="transport.cargo.input"
                />
              </div>
              <div>
                <Label className="text-xs">Distance</Label>
                <Input
                  value={tripForm.distance}
                  onChange={(e) =>
                    setTripForm((p) => ({ ...p, distance: e.target.value }))
                  }
                  className="mt-1"
                  placeholder="km"
                  data-ocid="transport.distance.input"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => setAddTrip(false)}
              data-ocid="transport.trip.cancel_button"
            >
              Cancel
            </Button>
            <Button
              onClick={createTrip}
              data-ocid="transport.trip.confirm_button"
            >
              Create
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="rounded-xl border border-border overflow-hidden">
        <table className="w-full text-xs">
          <thead className="bg-muted/30">
            <tr>
              {["Trip", "Vehicle", "Route", "Cargo", "Dist.", "Status"].map(
                (h) => (
                  <th
                    key={h}
                    className="px-3 py-2 text-left font-semibold text-muted-foreground"
                  >
                    {h}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {trips.map((t, idx) => (
              <tr
                key={t.id}
                className="border-t border-border hover:bg-muted/10"
                data-ocid={`transport.trip.row.${idx + 1}`}
              >
                <td className="px-3 py-2 font-mono">{t.id}</td>
                <td className="px-3 py-2">{t.vehicle}</td>
                <td className="px-3 py-2">
                  {t.origin} → {t.destination}
                </td>
                <td className="px-3 py-2">{t.cargo}</td>
                <td className="px-3 py-2">{t.distance}</td>
                <td className="px-3 py-2">
                  <StatusBadge status={t.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── WATER DELIVERY ─────────────────────────────────────────────────────────
interface WaterOrder {
  id: string;
  customer: string;
  qty: string;
  scheduledDate: string;
  status: "Pending" | "Dispatched" | "Delivered";
}

export function WaterDeliveryModule() {
  const [orders, setOrders] = useState<WaterOrder[]>([
    {
      id: "WD-001",
      customer: "Sharma Household",
      qty: "20L × 2",
      scheduledDate: "01 Apr 2026",
      status: "Dispatched",
    },
    {
      id: "WD-002",
      customer: "Gupta Office",
      qty: "20L × 5",
      scheduledDate: "01 Apr 2026",
      status: "Pending",
    },
    {
      id: "WD-003",
      customer: "Patel Family",
      qty: "20L × 3",
      scheduledDate: "02 Apr 2026",
      status: "Pending",
    },
  ]);
  const [addOpen, setAddOpen] = useState(false);
  const [form, setForm] = useState({
    customer: "",
    qty: "",
    scheduledDate: "",
  });

  const addOrder = () => {
    if (!form.customer) return;
    setOrders((p) => [
      {
        id: `WD-${String(p.length + 4).padStart(3, "0")}`,
        ...form,
        status: "Pending",
      },
      ...p,
    ]);
    setForm({ customer: "", qty: "", scheduledDate: "" });
    setAddOpen(false);
  };

  return (
    <div className="space-y-4" data-ocid="water.module.panel">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Droplets size={18} className="text-blue-500" />
          <p className="text-sm font-semibold">Delivery Orders</p>
        </div>
        <Button
          size="sm"
          onClick={() => setAddOpen(true)}
          data-ocid="water.add.button"
        >
          + New Order
        </Button>
      </div>

      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent data-ocid="water.add.dialog">
          <DialogHeader>
            <DialogTitle>New Water Delivery Order</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 py-2">
            <div>
              <Label className="text-xs">Customer</Label>
              <Input
                value={form.customer}
                onChange={(e) =>
                  setForm((p) => ({ ...p, customer: e.target.value }))
                }
                className="mt-1"
                placeholder="Customer name"
                data-ocid="water.customer.input"
              />
            </div>
            <div>
              <Label className="text-xs">Quantity</Label>
              <Input
                value={form.qty}
                onChange={(e) =>
                  setForm((p) => ({ ...p, qty: e.target.value }))
                }
                className="mt-1"
                placeholder="e.g. 20L × 3"
                data-ocid="water.qty.input"
              />
            </div>
            <div>
              <Label className="text-xs">Scheduled Date</Label>
              <Input
                type="date"
                value={form.scheduledDate}
                onChange={(e) =>
                  setForm((p) => ({ ...p, scheduledDate: e.target.value }))
                }
                className="mt-1"
                data-ocid="water.date.input"
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => setAddOpen(false)}
              data-ocid="water.add.cancel_button"
            >
              Cancel
            </Button>
            <Button onClick={addOrder} data-ocid="water.add.confirm_button">
              Create
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="space-y-2">
        {orders.map((o, idx) => (
          <div
            key={o.id}
            className="flex items-center gap-3 p-3 rounded-xl border border-border bg-card"
            data-ocid={`water.order.row.${idx + 1}`}
          >
            <div className="w-8 h-8 rounded-full bg-blue-500/15 flex items-center justify-center shrink-0">
              <Droplets size={14} className="text-blue-500" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold">{o.customer}</p>
              <p className="text-xs text-muted-foreground">
                {o.qty} · {o.scheduledDate}
              </p>
            </div>
            <StatusBadge status={o.status} />
            {o.status !== "Delivered" && (
              <Button
                size="sm"
                variant="ghost"
                className="h-7 text-xs"
                onClick={() =>
                  setOrders((p) =>
                    p.map((x) =>
                      x.id === o.id
                        ? {
                            ...x,
                            status:
                              o.status === "Pending"
                                ? "Dispatched"
                                : "Delivered",
                          }
                        : x,
                    ),
                  )
                }
              >
                {o.status === "Pending" ? "Dispatch" : "Deliver"}
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── FOOD & PARCEL DELIVERY ─────────────────────────────────────────────────
interface FoodOrder {
  id: string;
  customer: string;
  items: string;
  address: string;
  rider: string;
  eta: string;
  status: "Pending" | "In Transit" | "Delivered";
}

export function FoodParcelDeliveryModule() {
  const [orders, setOrders] = useState<FoodOrder[]>([
    {
      id: "FPD-001",
      customer: "Raj Patel",
      items: "Biryani × 2, Raita × 1",
      address: "42, MG Road",
      rider: "Arjun",
      eta: "30 min",
      status: "In Transit",
    },
    {
      id: "FPD-002",
      customer: "Meena Iyer",
      items: "Pizza × 1, Coke × 2",
      address: "15, Park St",
      rider: "",
      eta: "—",
      status: "Pending",
    },
  ]);
  const riders = ["Arjun", "Vikash", "Deepak", "Mohan"];

  const assignRider = (id: string, rider: string) =>
    setOrders((p) =>
      p.map((o) =>
        o.id === id ? { ...o, rider, status: "In Transit", eta: "25 min" } : o,
      ),
    );

  return (
    <div className="space-y-4" data-ocid="food_delivery.module.panel">
      <p className="text-sm font-semibold">Incoming Orders</p>
      {orders.map((o, idx) => (
        <Card
          key={o.id}
          className="rounded-xl"
          data-ocid={`food_delivery.order.row.${idx + 1}`}
        >
          <CardContent className="p-4 space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold">
                  {o.customer}{" "}
                  <span className="text-xs font-mono text-muted-foreground ml-1">
                    {o.id}
                  </span>
                </p>
                <p className="text-xs text-muted-foreground">{o.items}</p>
                <p className="text-xs text-muted-foreground">📍 {o.address}</p>
              </div>
              <StatusBadge status={o.status} />
            </div>
            <div className="flex items-center gap-2">
              {o.rider ? (
                <>
                  <span className="text-xs">🛵 {o.rider}</span>
                  <span className="text-xs text-muted-foreground">
                    ETA: {o.eta}
                  </span>
                </>
              ) : (
                <Select onValueChange={(v) => assignRider(o.id, v)}>
                  <SelectTrigger
                    className="h-7 text-xs w-36"
                    data-ocid="food_delivery.rider.select"
                  >
                    <SelectValue placeholder="Assign Rider" />
                  </SelectTrigger>
                  <SelectContent>
                    {riders.map((r) => (
                      <SelectItem key={r} value={r}>
                        {r}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
              {o.status === "In Transit" && (
                <Button
                  size="sm"
                  className="h-7 text-xs"
                  onClick={() =>
                    setOrders((p) =>
                      p.map((x) =>
                        x.id === o.id ? { ...x, status: "Delivered" } : x,
                      ),
                    )
                  }
                >
                  Mark Delivered
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// ── SERVICES / TRADES (shared job card module) ─────────────────────────────
interface JobCard {
  id: string;
  customer: string;
  issue: string;
  materials: string;
  labor: number;
  status: "Open" | "In Progress" | "Done";
  date: string;
  extra?: string;
}

function JobCardsModule({
  title,
  icon,
  ocid,
  extraLabel,
}: {
  title: string;
  icon: React.ReactNode;
  ocid: string;
  extraLabel?: string;
}) {
  const [jobs, setJobs] = useState<JobCard[]>([
    {
      id: "JC-001",
      customer: "Anand Verma",
      issue: "Leaking pipe under sink",
      materials: "PVC pipe, fittings",
      labor: 350,
      status: "Done",
      date: "31 Mar 2026",
    },
    {
      id: "JC-002",
      customer: "Sunita Rao",
      issue: "No hot water supply",
      materials: "Geyser element",
      labor: 600,
      status: "In Progress",
      date: "01 Apr 2026",
    },
  ]);
  const [addOpen, setAddOpen] = useState(false);
  const [form, setForm] = useState({
    customer: "",
    issue: "",
    materials: "",
    labor: "",
    extra: "",
  });

  const addJob = () => {
    if (!form.customer || !form.issue) return;
    setJobs((p) => [
      ...p,
      {
        id: `JC-${String(p.length + 3).padStart(3, "0")}`,
        customer: form.customer,
        issue: form.issue,
        materials: form.materials,
        labor: Number(form.labor) || 0,
        extra: form.extra,
        status: "Open",
        date: new Date().toLocaleDateString("en-IN"),
      },
    ]);
    setForm({ customer: "", issue: "", materials: "", labor: "", extra: "" });
    setAddOpen(false);
  };

  return (
    <div className="space-y-4" data-ocid={`${ocid}.module.panel`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon}
          <p className="text-sm font-semibold">{title}</p>
        </div>
        <Button
          size="sm"
          onClick={() => setAddOpen(true)}
          data-ocid={`${ocid}.add.button`}
        >
          + New Job Card
        </Button>
      </div>

      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent data-ocid={`${ocid}.add.dialog`}>
          <DialogHeader>
            <DialogTitle>New Job Card</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 py-2">
            <div>
              <Label className="text-xs">Customer</Label>
              <Input
                value={form.customer}
                onChange={(e) =>
                  setForm((p) => ({ ...p, customer: e.target.value }))
                }
                className="mt-1"
                placeholder="Customer name"
                data-ocid={`${ocid}.customer.input`}
              />
            </div>
            <div>
              <Label className="text-xs">Issue / Work Required</Label>
              <Textarea
                value={form.issue}
                onChange={(e) =>
                  setForm((p) => ({ ...p, issue: e.target.value }))
                }
                className="mt-1"
                placeholder="Describe the issue"
                data-ocid={`${ocid}.issue.textarea`}
              />
            </div>
            <div>
              <Label className="text-xs">Materials Used</Label>
              <Input
                value={form.materials}
                onChange={(e) =>
                  setForm((p) => ({ ...p, materials: e.target.value }))
                }
                className="mt-1"
                placeholder="Parts and materials"
                data-ocid={`${ocid}.materials.input`}
              />
            </div>
            {extraLabel && (
              <div>
                <Label className="text-xs">{extraLabel}</Label>
                <Input
                  value={form.extra}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, extra: e.target.value }))
                  }
                  className="mt-1"
                  placeholder={extraLabel}
                  data-ocid={`${ocid}.extra.input`}
                />
              </div>
            )}
            <div>
              <Label className="text-xs">Labour Charge (₹)</Label>
              <Input
                type="number"
                value={form.labor}
                onChange={(e) =>
                  setForm((p) => ({ ...p, labor: e.target.value }))
                }
                className="mt-1"
                placeholder="0"
                data-ocid={`${ocid}.labor.input`}
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => setAddOpen(false)}
              data-ocid={`${ocid}.add.cancel_button`}
            >
              Cancel
            </Button>
            <Button onClick={addJob} data-ocid={`${ocid}.add.confirm_button`}>
              Create
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="space-y-2">
        {jobs.map((j, idx) => (
          <div
            key={j.id}
            className="p-3 rounded-xl border border-border bg-card space-y-1"
            data-ocid={`${ocid}.job.row.${idx + 1}`}
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono text-muted-foreground">
                  {j.id}
                </span>
                <p className="text-sm font-semibold">{j.customer}</p>
                <p className="text-xs text-muted-foreground">{j.issue}</p>
                {j.extra && (
                  <p className="text-xs text-muted-foreground">
                    {extraLabel}: {j.extra}
                  </p>
                )}
              </div>
              <StatusBadge status={j.status} />
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>Materials: {j.materials || "—"}</span>
              <Separator orientation="vertical" className="h-3" />
              <span>Labour: ₹{j.labor}</span>
              <Separator orientation="vertical" className="h-3" />
              <span>{j.date}</span>
            </div>
            {j.status !== "Done" && (
              <Button
                size="sm"
                variant="outline"
                className="h-6 text-[10px] mt-1"
                onClick={() =>
                  setJobs((p) =>
                    p.map((x) =>
                      x.id === j.id
                        ? {
                            ...x,
                            status:
                              x.status === "Open" ? "In Progress" : "Done",
                          }
                        : x,
                    ),
                  )
                }
              >
                {j.status === "Open" ? "Start" : "Mark Done"}
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export const PlumbingModule = () => (
  <JobCardsModule
    title="Plumbing Jobs"
    icon={<Droplets size={16} className="text-blue-500" />}
    ocid="plumbing"
  />
);
export const ElectricalModule = () => (
  <JobCardsModule
    title="Electrical Jobs"
    icon={<Zap size={16} className="text-yellow-500" />}
    ocid="electrical"
  />
);
export const ElectricianModule = () => (
  <JobCardsModule
    title="Electrician (Field)"
    icon={<Zap size={16} className="text-amber-500" />}
    ocid="electrician"
  />
);
export const MechanicModule = () => (
  <JobCardsModule
    title="Mechanic Shop"
    icon={<Wrench size={16} className="text-orange-500" />}
    ocid="mechanic"
    extraLabel="Vehicle No."
  />
);
export const SweeperModule = () => (
  <div className="space-y-4" data-ocid="sweeper.module.panel">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {[
        {
          area: "Block A – Residential",
          shift: "Morning 6–9 AM",
          worker: "Mala Devi",
          status: "Active",
        },
        {
          area: "Commercial Zone",
          shift: "Evening 5–8 PM",
          worker: "Renu Bai",
          status: "Scheduled",
        },
        {
          area: "Park & Garden",
          shift: "Morning 7–10 AM",
          worker: "Sunita",
          status: "Active",
        },
      ].map((s, idx) => (
        <Card
          key={s.area}
          className="rounded-xl"
          data-ocid={`sweeper.schedule.row.${idx + 1}`}
        >
          <CardContent className="p-4 space-y-1">
            <div className="flex items-start justify-between">
              <p className="text-sm font-semibold">{s.area}</p>
              <StatusBadge status={s.status} />
            </div>
            <p className="text-xs text-muted-foreground">⏰ {s.shift}</p>
            <p className="text-xs text-muted-foreground">👷 {s.worker}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

// ── GARMENTS & TAILORING ──────────────────────────────────────────────────
interface FabricStock {
  id: string;
  material: string;
  color: string;
  meters: number;
}

interface TailorOrder {
  id: string;
  customer: string;
  style: string;
  measurement: string;
  dueDate: string;
  status: "Pending" | "In Progress" | "Done";
}

export function GarmentsModule() {
  const [fabrics] = useState<FabricStock[]>([
    { id: "1", material: "Cotton", color: "White", meters: 120 },
    { id: "2", material: "Silk", color: "Royal Blue", meters: 45 },
    { id: "3", material: "Linen", color: "Beige", meters: 88 },
    { id: "4", material: "Denim", color: "Indigo", meters: 200 },
  ]);
  const [orders, setOrders] = useState<TailorOrder[]>([
    {
      id: "TO-001",
      customer: "Priya Singh",
      style: "Kurti",
      measurement: "M-38",
      dueDate: "05 Apr 2026",
      status: "In Progress",
    },
    {
      id: "TO-002",
      customer: "Rahul Mehta",
      style: "Shirt",
      measurement: "40 chest",
      dueDate: "07 Apr 2026",
      status: "Pending",
    },
  ]);
  const [addOpen, setAddOpen] = useState(false);
  const [form, setForm] = useState({
    customer: "",
    style: "",
    measurement: "",
    dueDate: "",
  });

  const addOrder = () => {
    if (!form.customer) return;
    setOrders((p) => [
      ...p,
      {
        id: `TO-${String(p.length + 3).padStart(3, "0")}`,
        ...form,
        status: "Pending",
      },
    ]);
    setForm({ customer: "", style: "", measurement: "", dueDate: "" });
    setAddOpen(false);
  };

  return (
    <div className="space-y-4" data-ocid="garments.module.panel">
      <Tabs defaultValue="orders">
        <TabsList>
          <TabsTrigger value="orders">✂️ Tailor Orders</TabsTrigger>
          <TabsTrigger value="fabric">🧵 Fabric Stock</TabsTrigger>
        </TabsList>

        <TabsContent value="orders" className="space-y-3 mt-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">{orders.length} Orders</p>
            <Button
              size="sm"
              onClick={() => setAddOpen(true)}
              data-ocid="garments.add.button"
            >
              + New Order
            </Button>
          </div>
          <Dialog open={addOpen} onOpenChange={setAddOpen}>
            <DialogContent data-ocid="garments.add.dialog">
              <DialogHeader>
                <DialogTitle>New Tailor Order</DialogTitle>
              </DialogHeader>
              <div className="space-y-3 py-2">
                <div>
                  <Label className="text-xs">Customer</Label>
                  <Input
                    value={form.customer}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, customer: e.target.value }))
                    }
                    className="mt-1"
                    placeholder="Customer name"
                    data-ocid="garments.customer.input"
                  />
                </div>
                <div>
                  <Label className="text-xs">Style / Garment</Label>
                  <Input
                    value={form.style}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, style: e.target.value }))
                    }
                    className="mt-1"
                    placeholder="e.g. Kurti, Shirt, Blouse"
                    data-ocid="garments.style.input"
                  />
                </div>
                <div>
                  <Label className="text-xs">Measurement</Label>
                  <Input
                    value={form.measurement}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, measurement: e.target.value }))
                    }
                    className="mt-1"
                    placeholder="Size / measurements"
                    data-ocid="garments.measurement.input"
                  />
                </div>
                <div>
                  <Label className="text-xs">Due Date</Label>
                  <Input
                    type="date"
                    value={form.dueDate}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, dueDate: e.target.value }))
                    }
                    className="mt-1"
                    data-ocid="garments.date.input"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  onClick={() => setAddOpen(false)}
                  data-ocid="garments.add.cancel_button"
                >
                  Cancel
                </Button>
                <Button
                  onClick={addOrder}
                  data-ocid="garments.add.confirm_button"
                >
                  Create
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <div className="space-y-2">
            {orders.map((o, idx) => (
              <div
                key={o.id}
                className="p-3 rounded-xl border border-border bg-card"
                data-ocid={`garments.order.row.${idx + 1}`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold">{o.customer}</p>
                    <p className="text-xs text-muted-foreground">
                      {o.style} · {o.measurement} · Due: {o.dueDate}
                    </p>
                  </div>
                  <StatusBadge status={o.status} />
                </div>
                {o.status !== "Done" && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-6 text-[10px] mt-2"
                    onClick={() =>
                      setOrders((p) =>
                        p.map((x) =>
                          x.id === o.id
                            ? {
                                ...x,
                                status:
                                  x.status === "Pending"
                                    ? "In Progress"
                                    : "Done",
                              }
                            : x,
                        ),
                      )
                    }
                  >
                    {o.status === "Pending" ? "Start" : "Mark Done"}
                  </Button>
                )}
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="fabric" className="space-y-3 mt-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {fabrics.map((f, idx) => (
              <Card
                key={f.id}
                className="rounded-xl"
                data-ocid={`garments.fabric.row.${idx + 1}`}
              >
                <CardContent className="p-3 text-center">
                  <p className="text-2xl mb-1">🧵</p>
                  <p className="text-sm font-semibold">{f.material}</p>
                  <p className="text-xs text-muted-foreground">{f.color}</p>
                  <p className="text-sm font-mono font-semibold text-primary mt-1">
                    {f.meters} m
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

// ── ORDER LIFECYCLE STEPPER ────────────────────────────────────────────────
export const ORDER_STATUSES = [
  "Order Placed",
  "Vendor Notified",
  "Vendor Approved",
  "Assigned to Courier",
  "Courier Dispatched",
  "In Transit",
  "Out for Delivery",
  "Delivered",
] as const;

export const FAILURE_STATUSES = ["Vendor Rejected", "Delivery Failed"] as const;

export type OrderStatus =
  | (typeof ORDER_STATUSES)[number]
  | (typeof FAILURE_STATUSES)[number];

export interface OrderWithLifecycle {
  id: string;
  date: string;
  items: { name: string; qty: number; price: number }[];
  total: number;
  status: OrderStatus;
  statusHistory: { status: OrderStatus; timestamp: string; note?: string }[];
  vendorId?: string;
  courierId?: string;
  billing?: {
    fullName?: string;
    phone?: string;
    address?: string;
    city?: string;
    paymentMethod?: string;
    notes?: string;
  };
}

function addNotification(msg: string) {
  try {
    const notifications: {
      id: string;
      message: string;
      time: string;
      read: boolean;
    }[] = JSON.parse(localStorage.getItem("indyaNotifications") || "[]");
    notifications.unshift({
      id: `notif-${Date.now()}`,
      message: msg,
      time: new Date().toISOString(),
      read: false,
    });
    localStorage.setItem(
      "indyaNotifications",
      JSON.stringify(notifications.slice(0, 100)),
    );
    window.dispatchEvent(new Event("notificationAdded"));
  } catch {}
}

export function advanceOrderStatus(
  orderId: string,
  newStatus: OrderStatus,
  note?: string,
): void {
  try {
    const orders: OrderWithLifecycle[] = JSON.parse(
      localStorage.getItem("ic_user_orders") || "[]",
    );
    const updated = orders.map((o) => {
      if (o.id !== orderId) return o;
      const histEntry = {
        status: newStatus,
        timestamp: new Date().toISOString(),
        note,
      };
      return {
        ...o,
        status: newStatus,
        statusHistory: [...(o.statusHistory || []), histEntry],
      };
    });
    localStorage.setItem("ic_user_orders", JSON.stringify(updated));
    window.dispatchEvent(new Event("orderPlaced")); // reuse event to refresh UI
    // Notifications
    const order = orders.find((o) => o.id === orderId);
    const customer = order?.billing?.fullName ?? "Customer";
    if (newStatus === "Vendor Approved")
      addNotification(`Your order ${orderId} was approved by the vendor.`);
    else if (newStatus === "Vendor Rejected")
      addNotification(`Your order ${orderId} was rejected by the vendor.`);
    else if (newStatus === "Courier Dispatched")
      addNotification(`Your order ${orderId} has been dispatched.`);
    else if (newStatus === "Out for Delivery")
      addNotification(`Your order ${orderId} is out for delivery!`);
    else if (newStatus === "Delivered")
      addNotification(
        `Your order ${orderId} has been delivered. Thank you, ${customer}!`,
      );
    else if (newStatus === "Delivery Failed")
      addNotification(`Delivery for order ${orderId} failed. We will retry.`);
  } catch {}
}

export function OrderStatusStepper({
  order,
}: {
  order: OrderWithLifecycle;
}) {
  const isFailed =
    order.status === "Vendor Rejected" || order.status === "Delivery Failed";
  const steps = [...ORDER_STATUSES];
  const currentIdx = steps.indexOf(
    order.status as (typeof ORDER_STATUSES)[number],
  );

  const getStepState = (_step: string, idx: number) => {
    if (isFailed) {
      const lastOkIdx =
        (order.statusHistory || []).filter((h) =>
          steps.includes(h.status as (typeof ORDER_STATUSES)[number]),
        ).length - 1;
      if (idx <= lastOkIdx) return "done";
      return "pending";
    }
    if (idx < currentIdx) return "done";
    if (idx === currentIdx) return "current";
    return "pending";
  };

  const getTimestamp = (step: string) => {
    const entry = (order.statusHistory || []).find((h) => h.status === step);
    if (!entry) return null;
    return new Date(entry.timestamp).toLocaleString("en-IN", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="w-full">
      {isFailed && (
        <div className="mb-3 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-600 font-semibold">
          ❌ {order.status}
        </div>
      )}
      <div className="relative">
        {steps.map((step, idx) => {
          const state = getStepState(step, idx);
          const ts = getTimestamp(step);
          const isLast = idx === steps.length - 1;
          return (
            <div key={step} className="flex items-start gap-3">
              <div className="flex flex-col items-center">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold transition-all ${
                    state === "done"
                      ? "bg-green-500 text-white"
                      : state === "current"
                        ? "bg-primary text-primary-foreground ring-2 ring-primary/30"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {state === "done" ? (
                    <CheckCircle2 size={12} />
                  ) : state === "current" ? (
                    <span className="animate-pulse">●</span>
                  ) : (
                    <span>{idx + 1}</span>
                  )}
                </div>
                {!isLast && (
                  <div
                    className={`w-0.5 h-5 mt-0.5 ${
                      state === "done" ? "bg-green-500/50" : "bg-border"
                    }`}
                  />
                )}
              </div>
              <div className="pb-3 flex-1">
                <p
                  className={`text-xs font-semibold ${
                    state === "done"
                      ? "text-green-600 dark:text-green-400"
                      : state === "current"
                        ? "text-primary"
                        : "text-muted-foreground"
                  }`}
                >
                  {step}
                </p>
                {ts && (
                  <p className="text-[10px] text-muted-foreground flex items-center gap-1 mt-0.5">
                    <Clock size={9} />
                    {ts}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── VENDOR ORDERS PANEL ───────────────────────────────────────────────────
export function VendorOrdersPanel() {
  const [orders, setOrders] = useState<OrderWithLifecycle[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("ic_user_orders") || "[]");
    } catch {
      return [];
    }
  });

  const couriers = [
    "Ravi Kumar",
    "Suresh Nair",
    "Amit Singh",
    "Neha Verma",
    "Deepak Sharma",
  ];

  const refresh = () => {
    try {
      setOrders(JSON.parse(localStorage.getItem("ic_user_orders") || "[]"));
    } catch {}
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: refresh is stable within component
  useEffect(() => {
    window.addEventListener("orderPlaced", refresh);
    return () => window.removeEventListener("orderPlaced", refresh);
  }, []);

  const act = (id: string, status: OrderStatus, note?: string) => {
    advanceOrderStatus(id, status, note);
    refresh();
    // Vendor notification to customer
    addNotification(
      status === "Vendor Approved"
        ? `New order ${id}: approved and notified customer.`
        : status === "Vendor Rejected"
          ? `Order ${id}: rejected — customer notified.`
          : `Order ${id} updated to ${status}.`,
    );
  };

  const pendingOrders = orders.filter(
    (o) =>
      !o.status ||
      o.status === "Order Placed" ||
      o.status === "Vendor Notified",
  );
  const activeOrders = orders.filter(
    (o) => o.status === "Vendor Approved" || o.status === "Assigned to Courier",
  );

  return (
    <div className="space-y-6" data-ocid="vendor.orders.panel">
      <div className="grid grid-cols-3 gap-3">
        {[
          {
            label: "Pending",
            val: pendingOrders.length,
            color: "oklch(0.72 0.19 85)",
          },
          {
            label: "Active",
            val: activeOrders.length,
            color: "oklch(0.55 0.22 280)",
          },
          { label: "Total", val: orders.length, color: "oklch(0.52 0.14 155)" },
        ].map((s) => (
          <Card key={s.label} className="rounded-xl">
            <CardContent className="p-3 text-center">
              <p className="text-xs text-muted-foreground">{s.label}</p>
              <p
                className="text-2xl font-bold font-display"
                style={{ color: s.color }}
              >
                {s.val}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {pendingOrders.length > 0 && (
        <div>
          <p className="text-sm font-semibold mb-3">
            🔔 New Orders — Awaiting Approval
          </p>
          <div className="space-y-3">
            {pendingOrders.map((o, idx) => (
              <Card
                key={o.id}
                className="rounded-xl border-amber-500/30 bg-amber-500/5"
                data-ocid={`vendor.pending.order.row.${idx + 1}`}
              >
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold font-mono">{o.id}</p>
                      <p className="text-xs text-muted-foreground">
                        {o.billing?.fullName ?? "Customer"} ·{" "}
                        {new Date(o.date).toLocaleDateString("en-IN")}
                      </p>
                      <p className="text-xs mt-1">
                        {o.items?.length} items · ₹{o.total?.toLocaleString()}
                      </p>
                    </div>
                    <Badge className="bg-amber-500/15 text-amber-600 border-amber-500/30 text-[10px]">
                      New
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="h-7 text-xs flex-1 bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => act(o.id, "Vendor Approved")}
                      data-ocid={`vendor.approve.button.${idx + 1}`}
                    >
                      ✓ Approve
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-7 text-xs flex-1 border-red-400 text-red-500 hover:bg-red-50"
                      onClick={() => act(o.id, "Vendor Rejected")}
                      data-ocid={`vendor.reject.button.${idx + 1}`}
                    >
                      ✗ Reject
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeOrders.length > 0 && (
        <div>
          <p className="text-sm font-semibold mb-3">
            📦 Approved — Assign Courier
          </p>
          <div className="space-y-3">
            {activeOrders.map((o, idx) => (
              <Card
                key={o.id}
                className="rounded-xl"
                data-ocid={`vendor.active.order.row.${idx + 1}`}
              >
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold font-mono">{o.id}</p>
                      <p className="text-xs text-muted-foreground">
                        {o.billing?.fullName ?? "Customer"}
                      </p>
                    </div>
                    <StatusBadge status={o.status} />
                  </div>
                  {o.status === "Vendor Approved" && (
                    <div className="flex items-center gap-2">
                      <Select
                        onValueChange={(v) =>
                          act(o.id, "Assigned to Courier", `Courier: ${v}`)
                        }
                      >
                        <SelectTrigger
                          className="h-7 text-xs flex-1"
                          data-ocid={`vendor.courier.select.${idx + 1}`}
                        >
                          <SelectValue placeholder="Assign Courier" />
                        </SelectTrigger>
                        <SelectContent>
                          {couriers.map((c) => (
                            <SelectItem key={c} value={c}>
                              {c}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                  {o.status === "Assigned to Courier" && (
                    <Button
                      size="sm"
                      className="h-7 text-xs w-full"
                      onClick={() => act(o.id, "Courier Dispatched")}
                      data-ocid={`vendor.dispatch.button.${idx + 1}`}
                    >
                      🚚 Mark Dispatched
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {orders.length === 0 && (
        <div
          className="text-center py-12"
          data-ocid="vendor.orders.empty_state"
        >
          <Package size={40} className="mx-auto text-muted-foreground mb-3" />
          <p className="text-sm font-semibold">No orders yet</p>
          <p className="text-xs text-muted-foreground mt-1">
            Orders placed from your shop will appear here
          </p>
        </div>
      )}
    </div>
  );
}

// ── COURIER DISPATCH PANEL (for delivery businesses) ──────────────────────
export function CourierDispatchBusinessPanel() {
  const [orders, setOrders] = useState<OrderWithLifecycle[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("ic_user_orders") || "[]").filter(
        (o: OrderWithLifecycle) =>
          o.status === "Assigned to Courier" ||
          o.status === "Courier Dispatched" ||
          o.status === "In Transit" ||
          o.status === "Out for Delivery",
      );
    } catch {
      return [];
    }
  });

  const refresh = () => {
    try {
      setOrders(
        JSON.parse(localStorage.getItem("ic_user_orders") || "[]").filter(
          (o: OrderWithLifecycle) =>
            o.status === "Assigned to Courier" ||
            o.status === "Courier Dispatched" ||
            o.status === "In Transit" ||
            o.status === "Out for Delivery",
        ),
      );
    } catch {}
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: refresh is stable within component
  useEffect(() => {
    window.addEventListener("orderPlaced", refresh);
    return () => window.removeEventListener("orderPlaced", refresh);
  }, []);

  const nextStatus: Record<string, OrderStatus> = {
    "Assigned to Courier": "Courier Dispatched",
    "Courier Dispatched": "In Transit",
    "In Transit": "Out for Delivery",
    "Out for Delivery": "Delivered",
  };

  const act = (id: string, newStatus: OrderStatus) => {
    advanceOrderStatus(id, newStatus);
    refresh();
  };

  return (
    <div className="space-y-4" data-ocid="courier.dispatch.panel">
      <p className="text-sm font-semibold">🚚 Assigned Shipments</p>
      {orders.length === 0 && (
        <div
          className="text-center py-10"
          data-ocid="courier.dispatch.empty_state"
        >
          <Truck size={36} className="mx-auto text-muted-foreground mb-2" />
          <p className="text-sm font-semibold">No active shipments</p>
          <p className="text-xs text-muted-foreground">
            Shipments assigned by vendors appear here
          </p>
        </div>
      )}
      {orders.map((o, idx) => (
        <Card
          key={o.id}
          className="rounded-xl"
          data-ocid={`courier.dispatch.row.${idx + 1}`}
        >
          <CardContent className="p-4 space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold font-mono">{o.id}</p>
                <p className="text-xs text-muted-foreground">
                  {o.billing?.fullName ?? "Customer"} ·{" "}
                  {o.billing?.address ?? ""}
                </p>
                <p className="text-xs">
                  {o.items?.length} items · ₹{o.total?.toLocaleString()}
                </p>
              </div>
              <StatusBadge status={o.status} />
            </div>
            {nextStatus[o.status] && (
              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="h-7 text-xs flex-1"
                  onClick={() => act(o.id, nextStatus[o.status])}
                  data-ocid={`courier.advance.button.${idx + 1}`}
                >
                  → {nextStatus[o.status]}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-7 text-xs border-red-400 text-red-500"
                  onClick={() => act(o.id, "Delivery Failed")}
                  data-ocid={`courier.fail.button.${idx + 1}`}
                >
                  ✗ Failed
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// re-export StatusBadge so DashboardPage can use it
export { StatusBadge };
