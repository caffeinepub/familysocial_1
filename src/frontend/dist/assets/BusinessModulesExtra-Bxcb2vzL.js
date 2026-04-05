import { l as createLucideIcon, j as jsxRuntimeExports, w as CircleCheck, v as Clock, r as reactExports, B as Badge, a as Button, S as Select, f as SelectTrigger, g as SelectValue, h as SelectContent, i as SelectItem, P as Package, T as Tabs, c as TabsList, d as TabsTrigger, e as TabsContent, D as Dialog, F as DialogContent, G as DialogHeader, J as DialogTitle, L as Label, I as Input, Z as Zap, E as DialogTrigger, x as Separator } from "./index-CRCVaugt.js";
import { C as Card, b as CardContent } from "./card-CsjVzhK5.js";
import { T as Textarea } from "./textarea-D6wf2djR.js";
import { T as Truck } from "./truck-DvqcAgzd.js";
import { W as Wrench } from "./wrench-TLHe2o1a.js";
import { D as Droplets } from "./droplets-E_5Rhuw7.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
      key: "96xj49"
    }
  ]
];
const Flame = createLucideIcon("flame", __iconNode);
const now = () => (/* @__PURE__ */ new Date()).toLocaleString("en-IN");
function StatusBadge({ status }) {
  const map = {
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
    Failed: "bg-red-500/15 text-red-700 border-red-500/30"
  };
  const cls = map[status] ?? "bg-muted text-muted-foreground border-border";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `text-[10px] font-semibold px-2 py-0.5 rounded-full border ${cls}`,
      children: status
    }
  );
}
function CourierDispatchModule() {
  const [shipments, setShipments] = reactExports.useState([
    {
      id: "SHP-001",
      customer: "Ramesh Gupta",
      origin: "Mumbai",
      destination: "Pune",
      weight: "2.5 kg",
      status: "Dispatched",
      courier: "Ravi Kumar",
      createdAt: "01 Apr 2026, 09:15"
    },
    {
      id: "SHP-002",
      customer: "Priya Sharma",
      origin: "Delhi",
      destination: "Agra",
      weight: "0.8 kg",
      status: "Pending",
      courier: "",
      createdAt: "01 Apr 2026, 10:00"
    },
    {
      id: "SHP-003",
      customer: "Ankit Joshi",
      origin: "Bangalore",
      destination: "Chennai",
      weight: "5 kg",
      status: "In Transit",
      courier: "Suresh Nair",
      createdAt: "31 Mar 2026, 16:30"
    }
  ]);
  const [addOpen, setAddOpen] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    customer: "",
    origin: "",
    destination: "",
    weight: ""
  });
  const couriers = ["Ravi Kumar", "Suresh Nair", "Amit Singh", "Neha Verma"];
  const addShipment = () => {
    if (!form.customer || !form.origin || !form.destination) return;
    const s = {
      id: `SHP-${String(shipments.length + 4).padStart(3, "0")}`,
      ...form,
      status: "Pending",
      courier: "",
      createdAt: now()
    };
    setShipments((p) => [s, ...p]);
    setForm({ customer: "", origin: "", destination: "", weight: "" });
    setAddOpen(false);
  };
  const assign = (id, courier) => setShipments(
    (p) => p.map((s) => s.id === id ? { ...s, courier, status: "Dispatched" } : s)
  );
  const advance = (id) => setShipments(
    (p) => p.map((s) => {
      if (s.id !== id) return s;
      const next = {
        Pending: "Dispatched",
        Dispatched: "In Transit",
        "In Transit": "Delivered"
      };
      return { ...s, status: next[s.status] ?? s.status };
    })
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", "data-ocid": "courier.module.panel", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "shipments", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "shipments", children: "📦 Shipments" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "dispatch", children: "🚚 Dispatch Board" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "routes", children: "🗺️ Route Plan" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "shipments", className: "space-y-3 mt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold", children: [
          shipments.length,
          " Shipments"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: addOpen, onOpenChange: setAddOpen, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", "data-ocid": "courier.add.button", children: "+ New Shipment" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { "data-ocid": "courier.add.dialog", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "New Shipment" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 py-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Customer" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: form.customer,
                    onChange: (e) => setForm((p) => ({ ...p, customer: e.target.value })),
                    placeholder: "Customer name",
                    className: "mt-1",
                    "data-ocid": "courier.customer.input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Origin" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      value: form.origin,
                      onChange: (e) => setForm((p) => ({ ...p, origin: e.target.value })),
                      placeholder: "City / Address",
                      className: "mt-1",
                      "data-ocid": "courier.origin.input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Destination" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      value: form.destination,
                      onChange: (e) => setForm((p) => ({
                        ...p,
                        destination: e.target.value
                      })),
                      placeholder: "City / Address",
                      className: "mt-1",
                      "data-ocid": "courier.destination.input"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Weight / Dimensions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: form.weight,
                    onChange: (e) => setForm((p) => ({ ...p, weight: e.target.value })),
                    placeholder: "e.g. 2 kg, 30x20x10 cm",
                    className: "mt-1",
                    "data-ocid": "courier.weight.input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  onClick: () => setAddOpen(false),
                  "data-ocid": "courier.add.cancel_button",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  onClick: addShipment,
                  "data-ocid": "courier.add.confirm_button",
                  children: "Create"
                }
              )
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: [
          "ID",
          "Customer",
          "Route",
          "Weight",
          "Courier",
          "Status",
          "Action"
        ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "th",
          {
            className: "px-3 py-2 text-left font-semibold text-muted-foreground",
            children: h
          },
          h
        )) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: shipments.map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: "border-t border-border hover:bg-muted/10",
            "data-ocid": `courier.shipment.row.${idx + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-mono", children: s.id }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: s.customer }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2", children: [
                s.origin,
                " → ",
                s.destination
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: s.weight }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: s.courier || "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: s.status }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: s.status !== "Delivered" && s.status !== "Failed" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "h-6 text-[10px] px-2",
                  onClick: () => advance(s.id),
                  children: "Advance"
                }
              ) })
            ]
          },
          s.id
        )) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "dispatch", className: "space-y-3 mt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Assign Couriers" }),
      shipments.filter((s) => s.status === "Pending").map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: s.id }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            s.customer,
            " · ",
            s.origin,
            " → ",
            s.destination
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: (v) => assign(s.id, v), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SelectTrigger,
            {
              className: "w-36 h-7 text-xs",
              "data-ocid": "courier.assign.select",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Assign" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: couriers.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
        ] })
      ] }) }, s.id)),
      shipments.filter((s) => s.status === "Pending").length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-center py-6", children: "No pending shipments to assign" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "routes", className: "space-y-3 mt-4", children: shipments.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center gap-3 p-3 rounded-xl border border-border bg-card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono font-semibold text-muted-foreground", children: s.id }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: s.status })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-blue-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: s.origin }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 border-t border-dashed border-border mx-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { size: 11, className: "text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 border-t border-dashed border-border mx-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-green-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: s.destination })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: s.weight })
        ]
      },
      s.id
    )) })
  ] }) });
}
function FuelDepotModule() {
  const [fuels, setFuels] = reactExports.useState([
    {
      id: "petrol",
      name: "Petrol",
      icon: "⛽",
      unit: "L",
      stock: 15e3,
      price: 94.72
    },
    {
      id: "diesel",
      name: "Diesel",
      icon: "🛢️",
      unit: "L",
      stock: 22e3,
      price: 87.45
    },
    {
      id: "lpg",
      name: "LPG",
      icon: "🔥",
      unit: "kg",
      stock: 3200,
      price: 52
    },
    {
      id: "png",
      name: "PNG",
      icon: "🏭",
      unit: "scm",
      stock: 8500,
      price: 38.5
    },
    {
      id: "cng",
      name: "CNG",
      icon: "💨",
      unit: "kg",
      stock: 5400,
      price: 76.18
    },
    { id: "lng", name: "LNG", icon: "❄️", unit: "kg", stock: 1800, price: 68 },
    {
      id: "hydrogen",
      name: "Hydrogen",
      icon: "⚛️",
      unit: "kg",
      stock: 420,
      price: 320
    },
    {
      id: "ev",
      name: "EV Charging",
      icon: "⚡",
      unit: "kWh",
      stock: 99999,
      price: 12.5
    },
    {
      id: "solar",
      name: "Solar",
      icon: "☀️",
      unit: "kWh",
      stock: 99999,
      price: 6
    },
    {
      id: "coal",
      name: "Coal",
      icon: "⬛",
      unit: "kg",
      stock: 45e3,
      price: 9.5
    }
  ]);
  const [logs, setLogs] = reactExports.useState([]);
  const [dispenseOpen, setDispenseOpen] = reactExports.useState(null);
  const [dispenseQty, setDispenseQty] = reactExports.useState("");
  const doDispense = () => {
    const qty = Number(dispenseQty);
    if (!qty || qty <= 0 || !dispenseOpen) return;
    const fuel = fuels.find((f) => f.id === dispenseOpen);
    if (!fuel || fuel.stock < qty) return;
    setFuels(
      (p) => p.map(
        (f) => f.id === dispenseOpen ? { ...f, stock: f.stock - qty } : f
      )
    );
    setLogs((p) => [
      {
        fuelId: dispenseOpen,
        fuelName: fuel.name,
        qty,
        amount: qty * fuel.price,
        time: now()
      },
      ...p
    ]);
    setDispenseQty("");
    setDispenseOpen(null);
  };
  const activeFuel = fuels.find((f) => f.id === dispenseOpen);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "fuel.module.panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3", children: fuels.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Card,
      {
        className: "rounded-xl border-border hover:border-primary/40 transition-colors",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3 space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: f.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { size: 12, className: "text-muted-foreground" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold", children: f.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", children: [
            f.stock.toLocaleString(),
            " ",
            f.unit
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] font-mono text-primary", children: [
            "₹",
            f.price,
            "/",
            f.unit
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "w-full h-6 text-[10px] mt-1",
              onClick: () => setDispenseOpen(f.id),
              "data-ocid": `fuel.dispense.${f.id}.button`,
              children: "Log Dispense"
            }
          )
        ] })
      },
      f.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: !!dispenseOpen,
        onOpenChange: (v) => !v && setDispenseOpen(null),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { "data-ocid": "fuel.dispense.dialog", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
            activeFuel == null ? void 0 : activeFuel.icon,
            " Dispense ",
            activeFuel == null ? void 0 : activeFuel.name
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
              "Available: ",
              activeFuel == null ? void 0 : activeFuel.stock.toLocaleString(),
              " ",
              activeFuel == null ? void 0 : activeFuel.unit,
              "· ₹",
              activeFuel == null ? void 0 : activeFuel.price,
              "/",
              activeFuel == null ? void 0 : activeFuel.unit
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-xs", children: [
                "Quantity (",
                activeFuel == null ? void 0 : activeFuel.unit,
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  value: dispenseQty,
                  onChange: (e) => setDispenseQty(e.target.value),
                  placeholder: "Enter quantity",
                  className: "mt-1",
                  "data-ocid": "fuel.qty.input"
                }
              )
            ] }),
            dispenseQty && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-primary", children: [
              "Total: ₹",
              (Number(dispenseQty) * ((activeFuel == null ? void 0 : activeFuel.price) ?? 0)).toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                onClick: () => setDispenseOpen(null),
                "data-ocid": "fuel.dispense.cancel_button",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: doDispense,
                "data-ocid": "fuel.dispense.confirm_button",
                children: "Log Dispense"
              }
            )
          ] })
        ] })
      }
    ),
    logs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold mb-2", children: "📋 Today's Dispense Log" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: ["Fuel", "Qty", "Amount", "Time"].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "th",
          {
            className: "px-3 py-2 text-left font-semibold text-muted-foreground",
            children: h
          },
          h
        )) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: logs.map((l) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "border-t border-border",
              "data-ocid": "fuel.log.row.1",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: l.fuelName }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2", children: [
                  l.qty,
                  " ",
                  (_a = fuels.find((f) => f.id === l.fuelId)) == null ? void 0 : _a.unit
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2", children: [
                  "₹",
                  l.amount.toFixed(2)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-muted-foreground", children: l.time })
              ]
            },
            l.time
          );
        }) })
      ] }) })
    ] })
  ] });
}
function TransportModule() {
  const [vehicles] = reactExports.useState([
    { no: "MH12AB1234", type: "Truck", driver: "Ramesh Das", status: "Active" },
    {
      no: "DL01XY5678",
      type: "Mini Truck",
      driver: "Suresh Kumar",
      status: "In Trip"
    },
    {
      no: "KA09PQ9999",
      type: "Pickup Van",
      driver: "Vikram Singh",
      status: "Maintenance"
    }
  ]);
  const [trips, setTrips] = reactExports.useState([
    {
      id: "TRP-001",
      vehicle: "MH12AB1234",
      origin: "Mumbai Warehouse",
      destination: "Pune Depot",
      cargo: "Electronics",
      distance: "148 km",
      status: "Completed"
    },
    {
      id: "TRP-002",
      vehicle: "DL01XY5678",
      origin: "Delhi Hub",
      destination: "Gurgaon Client",
      cargo: "FMCG Goods",
      distance: "32 km",
      status: "In Progress"
    }
  ]);
  const [addTrip, setAddTrip] = reactExports.useState(false);
  const [tripForm, setTripForm] = reactExports.useState({
    vehicle: "",
    origin: "",
    destination: "",
    cargo: "",
    distance: ""
  });
  const createTrip = () => {
    if (!tripForm.vehicle || !tripForm.origin) return;
    setTrips((p) => [
      ...p,
      {
        id: `TRP-${String(p.length + 3).padStart(3, "0")}`,
        ...tripForm,
        status: "Scheduled"
      }
    ]);
    setTripForm({
      vehicle: "",
      origin: "",
      destination: "",
      cargo: "",
      distance: ""
    });
    setAddTrip(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "transport.module.panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: vehicles.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: v.no }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: v.type }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs mt-1", children: [
          "Driver: ",
          v.driver
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: v.status })
    ] }) }) }, v.no)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Trip Log" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          onClick: () => setAddTrip(true),
          "data-ocid": "transport.add.button",
          children: "+ New Trip"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: addTrip, onOpenChange: setAddTrip, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { "data-ocid": "transport.trip.dialog", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "New Trip" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Vehicle No." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: tripForm.vehicle,
              onValueChange: (v) => setTripForm((p) => ({ ...p, vehicle: v })),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    className: "mt-1",
                    "data-ocid": "transport.vehicle.select",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select vehicle" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: vehicles.map((veh) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: veh.no, children: [
                  veh.no,
                  " (",
                  veh.type,
                  ")"
                ] }, veh.no)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Origin" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: tripForm.origin,
                onChange: (e) => setTripForm((p) => ({ ...p, origin: e.target.value })),
                className: "mt-1",
                placeholder: "From",
                "data-ocid": "transport.origin.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Destination" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: tripForm.destination,
                onChange: (e) => setTripForm((p) => ({ ...p, destination: e.target.value })),
                className: "mt-1",
                placeholder: "To",
                "data-ocid": "transport.destination.input"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Cargo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: tripForm.cargo,
                onChange: (e) => setTripForm((p) => ({ ...p, cargo: e.target.value })),
                className: "mt-1",
                placeholder: "Description",
                "data-ocid": "transport.cargo.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Distance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: tripForm.distance,
                onChange: (e) => setTripForm((p) => ({ ...p, distance: e.target.value })),
                className: "mt-1",
                placeholder: "km",
                "data-ocid": "transport.distance.input"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            onClick: () => setAddTrip(false),
            "data-ocid": "transport.trip.cancel_button",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: createTrip,
            "data-ocid": "transport.trip.confirm_button",
            children: "Create"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: ["Trip", "Vehicle", "Route", "Cargo", "Dist.", "Status"].map(
        (h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "th",
          {
            className: "px-3 py-2 text-left font-semibold text-muted-foreground",
            children: h
          },
          h
        )
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: trips.map((t, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "tr",
        {
          className: "border-t border-border hover:bg-muted/10",
          "data-ocid": `transport.trip.row.${idx + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-mono", children: t.id }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: t.vehicle }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2", children: [
              t.origin,
              " → ",
              t.destination
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: t.cargo }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: t.distance }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: t.status }) })
          ]
        },
        t.id
      )) })
    ] }) })
  ] });
}
function WaterDeliveryModule() {
  const [orders, setOrders] = reactExports.useState([
    {
      id: "WD-001",
      customer: "Sharma Household",
      qty: "20L × 2",
      scheduledDate: "01 Apr 2026",
      status: "Dispatched"
    },
    {
      id: "WD-002",
      customer: "Gupta Office",
      qty: "20L × 5",
      scheduledDate: "01 Apr 2026",
      status: "Pending"
    },
    {
      id: "WD-003",
      customer: "Patel Family",
      qty: "20L × 3",
      scheduledDate: "02 Apr 2026",
      status: "Pending"
    }
  ]);
  const [addOpen, setAddOpen] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    customer: "",
    qty: "",
    scheduledDate: ""
  });
  const addOrder = () => {
    if (!form.customer) return;
    setOrders((p) => [
      {
        id: `WD-${String(p.length + 4).padStart(3, "0")}`,
        ...form,
        status: "Pending"
      },
      ...p
    ]);
    setForm({ customer: "", qty: "", scheduledDate: "" });
    setAddOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "water.module.panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { size: 18, className: "text-blue-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Delivery Orders" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          onClick: () => setAddOpen(true),
          "data-ocid": "water.add.button",
          children: "+ New Order"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: addOpen, onOpenChange: setAddOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { "data-ocid": "water.add.dialog", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "New Water Delivery Order" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Customer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: form.customer,
              onChange: (e) => setForm((p) => ({ ...p, customer: e.target.value })),
              className: "mt-1",
              placeholder: "Customer name",
              "data-ocid": "water.customer.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Quantity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: form.qty,
              onChange: (e) => setForm((p) => ({ ...p, qty: e.target.value })),
              className: "mt-1",
              placeholder: "e.g. 20L × 3",
              "data-ocid": "water.qty.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Scheduled Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "date",
              value: form.scheduledDate,
              onChange: (e) => setForm((p) => ({ ...p, scheduledDate: e.target.value })),
              className: "mt-1",
              "data-ocid": "water.date.input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            onClick: () => setAddOpen(false),
            "data-ocid": "water.add.cancel_button",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: addOrder, "data-ocid": "water.add.confirm_button", children: "Create" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: orders.map((o, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center gap-3 p-3 rounded-xl border border-border bg-card",
        "data-ocid": `water.order.row.${idx + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-blue-500/15 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { size: 14, className: "text-blue-500" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: o.customer }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              o.qty,
              " · ",
              o.scheduledDate
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: o.status }),
          o.status !== "Delivered" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "ghost",
              className: "h-7 text-xs",
              onClick: () => setOrders(
                (p) => p.map(
                  (x) => x.id === o.id ? {
                    ...x,
                    status: o.status === "Pending" ? "Dispatched" : "Delivered"
                  } : x
                )
              ),
              children: o.status === "Pending" ? "Dispatch" : "Deliver"
            }
          )
        ]
      },
      o.id
    )) })
  ] });
}
function FoodParcelDeliveryModule() {
  const [orders, setOrders] = reactExports.useState([
    {
      id: "FPD-001",
      customer: "Raj Patel",
      items: "Biryani × 2, Raita × 1",
      address: "42, MG Road",
      rider: "Arjun",
      eta: "30 min",
      status: "In Transit"
    },
    {
      id: "FPD-002",
      customer: "Meena Iyer",
      items: "Pizza × 1, Coke × 2",
      address: "15, Park St",
      rider: "",
      eta: "—",
      status: "Pending"
    }
  ]);
  const riders = ["Arjun", "Vikash", "Deepak", "Mohan"];
  const assignRider = (id, rider) => setOrders(
    (p) => p.map(
      (o) => o.id === id ? { ...o, rider, status: "In Transit", eta: "25 min" } : o
    )
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "food_delivery.module.panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Incoming Orders" }),
    orders.map((o, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Card,
      {
        className: "rounded-xl",
        "data-ocid": `food_delivery.order.row.${idx + 1}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold", children: [
                o.customer,
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-muted-foreground ml-1", children: o.id })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: o.items }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                "📍 ",
                o.address
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: o.status })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            o.rider ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs", children: [
                "🛵 ",
                o.rider
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                "ETA: ",
                o.eta
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { onValueChange: (v) => assignRider(o.id, v), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectTrigger,
                {
                  className: "h-7 text-xs w-36",
                  "data-ocid": "food_delivery.rider.select",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Assign Rider" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: riders.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: r, children: r }, r)) })
            ] }),
            o.status === "In Transit" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                className: "h-7 text-xs",
                onClick: () => setOrders(
                  (p) => p.map(
                    (x) => x.id === o.id ? { ...x, status: "Delivered" } : x
                  )
                ),
                children: "Mark Delivered"
              }
            )
          ] })
        ] })
      },
      o.id
    ))
  ] });
}
function JobCardsModule({
  title,
  icon,
  ocid,
  extraLabel
}) {
  const [jobs, setJobs] = reactExports.useState([
    {
      id: "JC-001",
      customer: "Anand Verma",
      issue: "Leaking pipe under sink",
      materials: "PVC pipe, fittings",
      labor: 350,
      status: "Done",
      date: "31 Mar 2026"
    },
    {
      id: "JC-002",
      customer: "Sunita Rao",
      issue: "No hot water supply",
      materials: "Geyser element",
      labor: 600,
      status: "In Progress",
      date: "01 Apr 2026"
    }
  ]);
  const [addOpen, setAddOpen] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    customer: "",
    issue: "",
    materials: "",
    labor: "",
    extra: ""
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
        date: (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN")
      }
    ]);
    setForm({ customer: "", issue: "", materials: "", labor: "", extra: "" });
    setAddOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": `${ocid}.module.panel`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        icon,
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          size: "sm",
          onClick: () => setAddOpen(true),
          "data-ocid": `${ocid}.add.button`,
          children: "+ New Job Card"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: addOpen, onOpenChange: setAddOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { "data-ocid": `${ocid}.add.dialog`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "New Job Card" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Customer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: form.customer,
              onChange: (e) => setForm((p) => ({ ...p, customer: e.target.value })),
              className: "mt-1",
              placeholder: "Customer name",
              "data-ocid": `${ocid}.customer.input`
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Issue / Work Required" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              value: form.issue,
              onChange: (e) => setForm((p) => ({ ...p, issue: e.target.value })),
              className: "mt-1",
              placeholder: "Describe the issue",
              "data-ocid": `${ocid}.issue.textarea`
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Materials Used" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: form.materials,
              onChange: (e) => setForm((p) => ({ ...p, materials: e.target.value })),
              className: "mt-1",
              placeholder: "Parts and materials",
              "data-ocid": `${ocid}.materials.input`
            }
          )
        ] }),
        extraLabel && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: extraLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: form.extra,
              onChange: (e) => setForm((p) => ({ ...p, extra: e.target.value })),
              className: "mt-1",
              placeholder: extraLabel,
              "data-ocid": `${ocid}.extra.input`
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Labour Charge (₹)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "number",
              value: form.labor,
              onChange: (e) => setForm((p) => ({ ...p, labor: e.target.value })),
              className: "mt-1",
              placeholder: "0",
              "data-ocid": `${ocid}.labor.input`
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            onClick: () => setAddOpen(false),
            "data-ocid": `${ocid}.add.cancel_button`,
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: addJob, "data-ocid": `${ocid}.add.confirm_button`, children: "Create" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: jobs.map((j, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "p-3 rounded-xl border border-border bg-card space-y-1",
        "data-ocid": `${ocid}.job.row.${idx + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-muted-foreground", children: j.id }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: j.customer }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: j.issue }),
              j.extra && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                extraLabel,
                ": ",
                j.extra
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: j.status })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Materials: ",
              j.materials || "—"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { orientation: "vertical", className: "h-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Labour: ₹",
              j.labor
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { orientation: "vertical", className: "h-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: j.date })
          ] }),
          j.status !== "Done" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "h-6 text-[10px] mt-1",
              onClick: () => setJobs(
                (p) => p.map(
                  (x) => x.id === j.id ? {
                    ...x,
                    status: x.status === "Open" ? "In Progress" : "Done"
                  } : x
                )
              ),
              children: j.status === "Open" ? "Start" : "Mark Done"
            }
          )
        ]
      },
      j.id
    )) })
  ] });
}
const PlumbingModule = () => /* @__PURE__ */ jsxRuntimeExports.jsx(
  JobCardsModule,
  {
    title: "Plumbing Jobs",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Droplets, { size: 16, className: "text-blue-500" }),
    ocid: "plumbing"
  }
);
const ElectricalModule = () => /* @__PURE__ */ jsxRuntimeExports.jsx(
  JobCardsModule,
  {
    title: "Electrical Jobs",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 16, className: "text-yellow-500" }),
    ocid: "electrical"
  }
);
const ElectricianModule = () => /* @__PURE__ */ jsxRuntimeExports.jsx(
  JobCardsModule,
  {
    title: "Electrician (Field)",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 16, className: "text-amber-500" }),
    ocid: "electrician"
  }
);
const MechanicModule = () => /* @__PURE__ */ jsxRuntimeExports.jsx(
  JobCardsModule,
  {
    title: "Mechanic Shop",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { size: 16, className: "text-orange-500" }),
    ocid: "mechanic",
    extraLabel: "Vehicle No."
  }
);
const SweeperModule = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", "data-ocid": "sweeper.module.panel", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
  {
    area: "Block A – Residential",
    shift: "Morning 6–9 AM",
    worker: "Mala Devi",
    status: "Active"
  },
  {
    area: "Commercial Zone",
    shift: "Evening 5–8 PM",
    worker: "Renu Bai",
    status: "Scheduled"
  },
  {
    area: "Park & Garden",
    shift: "Morning 7–10 AM",
    worker: "Sunita",
    status: "Active"
  }
].map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Card,
  {
    className: "rounded-xl",
    "data-ocid": `sweeper.schedule.row.${idx + 1}`,
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 space-y-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: s.area }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: s.status })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
        "⏰ ",
        s.shift
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
        "👷 ",
        s.worker
      ] })
    ] })
  },
  s.area
)) }) });
function GarmentsModule() {
  const [fabrics] = reactExports.useState([
    { id: "1", material: "Cotton", color: "White", meters: 120 },
    { id: "2", material: "Silk", color: "Royal Blue", meters: 45 },
    { id: "3", material: "Linen", color: "Beige", meters: 88 },
    { id: "4", material: "Denim", color: "Indigo", meters: 200 }
  ]);
  const [orders, setOrders] = reactExports.useState([
    {
      id: "TO-001",
      customer: "Priya Singh",
      style: "Kurti",
      measurement: "M-38",
      dueDate: "05 Apr 2026",
      status: "In Progress"
    },
    {
      id: "TO-002",
      customer: "Rahul Mehta",
      style: "Shirt",
      measurement: "40 chest",
      dueDate: "07 Apr 2026",
      status: "Pending"
    }
  ]);
  const [addOpen, setAddOpen] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    customer: "",
    style: "",
    measurement: "",
    dueDate: ""
  });
  const addOrder = () => {
    if (!form.customer) return;
    setOrders((p) => [
      ...p,
      {
        id: `TO-${String(p.length + 3).padStart(3, "0")}`,
        ...form,
        status: "Pending"
      }
    ]);
    setForm({ customer: "", style: "", measurement: "", dueDate: "" });
    setAddOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", "data-ocid": "garments.module.panel", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "orders", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "orders", children: "✂️ Tailor Orders" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "fabric", children: "🧵 Fabric Stock" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "orders", className: "space-y-3 mt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold", children: [
          orders.length,
          " Orders"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            onClick: () => setAddOpen(true),
            "data-ocid": "garments.add.button",
            children: "+ New Order"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: addOpen, onOpenChange: setAddOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { "data-ocid": "garments.add.dialog", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "New Tailor Order" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Customer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: form.customer,
                onChange: (e) => setForm((p) => ({ ...p, customer: e.target.value })),
                className: "mt-1",
                placeholder: "Customer name",
                "data-ocid": "garments.customer.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Style / Garment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: form.style,
                onChange: (e) => setForm((p) => ({ ...p, style: e.target.value })),
                className: "mt-1",
                placeholder: "e.g. Kurti, Shirt, Blouse",
                "data-ocid": "garments.style.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Measurement" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: form.measurement,
                onChange: (e) => setForm((p) => ({ ...p, measurement: e.target.value })),
                className: "mt-1",
                placeholder: "Size / measurements",
                "data-ocid": "garments.measurement.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Due Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "date",
                value: form.dueDate,
                onChange: (e) => setForm((p) => ({ ...p, dueDate: e.target.value })),
                className: "mt-1",
                "data-ocid": "garments.date.input"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              onClick: () => setAddOpen(false),
              "data-ocid": "garments.add.cancel_button",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: addOrder,
              "data-ocid": "garments.add.confirm_button",
              children: "Create"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: orders.map((o, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "p-3 rounded-xl border border-border bg-card",
          "data-ocid": `garments.order.row.${idx + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: o.customer }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  o.style,
                  " · ",
                  o.measurement,
                  " · Due: ",
                  o.dueDate
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: o.status })
            ] }),
            o.status !== "Done" && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "h-6 text-[10px] mt-2",
                onClick: () => setOrders(
                  (p) => p.map(
                    (x) => x.id === o.id ? {
                      ...x,
                      status: x.status === "Pending" ? "In Progress" : "Done"
                    } : x
                  )
                ),
                children: o.status === "Pending" ? "Start" : "Mark Done"
              }
            )
          ]
        },
        o.id
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "fabric", className: "space-y-3 mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: fabrics.map((f, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Card,
      {
        className: "rounded-xl",
        "data-ocid": `garments.fabric.row.${idx + 1}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl mb-1", children: "🧵" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: f.material }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: f.color }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-mono font-semibold text-primary mt-1", children: [
            f.meters,
            " m"
          ] })
        ] })
      },
      f.id
    )) }) })
  ] }) });
}
const ORDER_STATUSES = [
  "Order Placed",
  "Vendor Notified",
  "Vendor Approved",
  "Assigned to Courier",
  "Courier Dispatched",
  "In Transit",
  "Out for Delivery",
  "Delivered"
];
function addNotification(msg) {
  try {
    const notifications = JSON.parse(localStorage.getItem("indyaNotifications") || "[]");
    notifications.unshift({
      id: `notif-${Date.now()}`,
      message: msg,
      time: (/* @__PURE__ */ new Date()).toISOString(),
      read: false
    });
    localStorage.setItem(
      "indyaNotifications",
      JSON.stringify(notifications.slice(0, 100))
    );
    window.dispatchEvent(new Event("notificationAdded"));
  } catch {
  }
}
function advanceOrderStatus(orderId, newStatus, note) {
  var _a;
  try {
    const orders = JSON.parse(
      localStorage.getItem("ic_user_orders") || "[]"
    );
    const updated = orders.map((o) => {
      if (o.id !== orderId) return o;
      const histEntry = {
        status: newStatus,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        note
      };
      return {
        ...o,
        status: newStatus,
        statusHistory: [...o.statusHistory || [], histEntry]
      };
    });
    localStorage.setItem("ic_user_orders", JSON.stringify(updated));
    window.dispatchEvent(new Event("orderPlaced"));
    const order = orders.find((o) => o.id === orderId);
    const customer = ((_a = order == null ? void 0 : order.billing) == null ? void 0 : _a.fullName) ?? "Customer";
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
        `Your order ${orderId} has been delivered. Thank you, ${customer}!`
      );
    else if (newStatus === "Delivery Failed")
      addNotification(`Delivery for order ${orderId} failed. We will retry.`);
  } catch {
  }
}
function OrderStatusStepper({
  order
}) {
  const isFailed = order.status === "Vendor Rejected" || order.status === "Delivery Failed";
  const steps = [...ORDER_STATUSES];
  const currentIdx = steps.indexOf(
    order.status
  );
  const getStepState = (_step, idx) => {
    if (isFailed) {
      const lastOkIdx = (order.statusHistory || []).filter(
        (h) => steps.includes(h.status)
      ).length - 1;
      if (idx <= lastOkIdx) return "done";
      return "pending";
    }
    if (idx < currentIdx) return "done";
    if (idx === currentIdx) return "current";
    return "pending";
  };
  const getTimestamp = (step) => {
    const entry = (order.statusHistory || []).find((h) => h.status === step);
    if (!entry) return null;
    return new Date(entry.timestamp).toLocaleString("en-IN", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
    isFailed && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-600 font-semibold", children: [
      "❌ ",
      order.status
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: steps.map((step, idx) => {
      const state = getStepState(step, idx);
      const ts = getTimestamp(step);
      const isLast = idx === steps.length - 1;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold transition-all ${state === "done" ? "bg-green-500 text-white" : state === "current" ? "bg-primary text-primary-foreground ring-2 ring-primary/30" : "bg-muted text-muted-foreground"}`,
              children: state === "done" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 12 }) : state === "current" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-pulse", children: "●" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: idx + 1 })
            }
          ),
          !isLast && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `w-0.5 h-5 mt-0.5 ${state === "done" ? "bg-green-500/50" : "bg-border"}`
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-3 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: `text-xs font-semibold ${state === "done" ? "text-green-600 dark:text-green-400" : state === "current" ? "text-primary" : "text-muted-foreground"}`,
              children: step
            }
          ),
          ts && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground flex items-center gap-1 mt-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 9 }),
            ts
          ] })
        ] })
      ] }, step);
    }) })
  ] });
}
function VendorOrdersPanel() {
  const [orders, setOrders] = reactExports.useState(() => {
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
    "Deepak Sharma"
  ];
  const refresh = () => {
    try {
      setOrders(JSON.parse(localStorage.getItem("ic_user_orders") || "[]"));
    } catch {
    }
  };
  reactExports.useEffect(() => {
    window.addEventListener("orderPlaced", refresh);
    return () => window.removeEventListener("orderPlaced", refresh);
  }, []);
  const act = (id, status, note) => {
    advanceOrderStatus(id, status, note);
    refresh();
    addNotification(
      status === "Vendor Approved" ? `New order ${id}: approved and notified customer.` : status === "Vendor Rejected" ? `Order ${id}: rejected — customer notified.` : `Order ${id} updated to ${status}.`
    );
  };
  const pendingOrders = orders.filter(
    (o) => !o.status || o.status === "Order Placed" || o.status === "Vendor Notified"
  );
  const activeOrders = orders.filter(
    (o) => o.status === "Vendor Approved" || o.status === "Assigned to Courier"
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", "data-ocid": "vendor.orders.panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: [
      {
        label: "Pending",
        val: pendingOrders.length,
        color: "oklch(0.72 0.19 85)"
      },
      {
        label: "Active",
        val: activeOrders.length,
        color: "oklch(0.55 0.22 280)"
      },
      { label: "Total", val: orders.length, color: "oklch(0.52 0.14 155)" }
    ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: s.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "text-2xl font-bold font-display",
          style: { color: s.color },
          children: s.val
        }
      )
    ] }) }, s.label)) }),
    pendingOrders.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold mb-3", children: "🔔 New Orders — Awaiting Approval" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: pendingOrders.map((o, idx) => {
        var _a, _b, _c;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "rounded-xl border-amber-500/30 bg-amber-500/5",
            "data-ocid": `vendor.pending.order.row.${idx + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold font-mono", children: o.id }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                    ((_a = o.billing) == null ? void 0 : _a.fullName) ?? "Customer",
                    " ·",
                    " ",
                    new Date(o.date).toLocaleDateString("en-IN")
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs mt-1", children: [
                    (_b = o.items) == null ? void 0 : _b.length,
                    " items · ₹",
                    (_c = o.total) == null ? void 0 : _c.toLocaleString()
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-amber-500/15 text-amber-600 border-amber-500/30 text-[10px]", children: "New" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    className: "h-7 text-xs flex-1 bg-green-600 hover:bg-green-700 text-white",
                    onClick: () => act(o.id, "Vendor Approved"),
                    "data-ocid": `vendor.approve.button.${idx + 1}`,
                    children: "✓ Approve"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-7 text-xs flex-1 border-red-400 text-red-500 hover:bg-red-50",
                    onClick: () => act(o.id, "Vendor Rejected"),
                    "data-ocid": `vendor.reject.button.${idx + 1}`,
                    children: "✗ Reject"
                  }
                )
              ] })
            ] })
          },
          o.id
        );
      }) })
    ] }),
    activeOrders.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold mb-3", children: "📦 Approved — Assign Courier" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: activeOrders.map((o, idx) => {
        var _a;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "rounded-xl",
            "data-ocid": `vendor.active.order.row.${idx + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold font-mono", children: o.id }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: ((_a = o.billing) == null ? void 0 : _a.fullName) ?? "Customer" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: o.status })
              ] }),
              o.status === "Vendor Approved" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Select,
                {
                  onValueChange: (v) => act(o.id, "Assigned to Courier", `Courier: ${v}`),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SelectTrigger,
                      {
                        className: "h-7 text-xs flex-1",
                        "data-ocid": `vendor.courier.select.${idx + 1}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Assign Courier" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: couriers.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
                  ]
                }
              ) }),
              o.status === "Assigned to Courier" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  className: "h-7 text-xs w-full",
                  onClick: () => act(o.id, "Courier Dispatched"),
                  "data-ocid": `vendor.dispatch.button.${idx + 1}`,
                  children: "🚚 Mark Dispatched"
                }
              )
            ] })
          },
          o.id
        );
      }) })
    ] }),
    orders.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "text-center py-12",
        "data-ocid": "vendor.orders.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 40, className: "mx-auto text-muted-foreground mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "No orders yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Orders placed from your shop will appear here" })
        ]
      }
    )
  ] });
}
function CourierDispatchBusinessPanel() {
  const [orders, setOrders] = reactExports.useState(() => {
    try {
      return JSON.parse(localStorage.getItem("ic_user_orders") || "[]").filter(
        (o) => o.status === "Assigned to Courier" || o.status === "Courier Dispatched" || o.status === "In Transit" || o.status === "Out for Delivery"
      );
    } catch {
      return [];
    }
  });
  const refresh = () => {
    try {
      setOrders(
        JSON.parse(localStorage.getItem("ic_user_orders") || "[]").filter(
          (o) => o.status === "Assigned to Courier" || o.status === "Courier Dispatched" || o.status === "In Transit" || o.status === "Out for Delivery"
        )
      );
    } catch {
    }
  };
  reactExports.useEffect(() => {
    window.addEventListener("orderPlaced", refresh);
    return () => window.removeEventListener("orderPlaced", refresh);
  }, []);
  const nextStatus = {
    "Assigned to Courier": "Courier Dispatched",
    "Courier Dispatched": "In Transit",
    "In Transit": "Out for Delivery",
    "Out for Delivery": "Delivered"
  };
  const act = (id, newStatus) => {
    advanceOrderStatus(id, newStatus);
    refresh();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "courier.dispatch.panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "🚚 Assigned Shipments" }),
    orders.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "text-center py-10",
        "data-ocid": "courier.dispatch.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { size: 36, className: "mx-auto text-muted-foreground mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "No active shipments" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Shipments assigned by vendors appear here" })
        ]
      }
    ),
    orders.map((o, idx) => {
      var _a, _b, _c, _d;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: "rounded-xl",
          "data-ocid": `courier.dispatch.row.${idx + 1}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold font-mono", children: o.id }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  ((_a = o.billing) == null ? void 0 : _a.fullName) ?? "Customer",
                  " ·",
                  " ",
                  ((_b = o.billing) == null ? void 0 : _b.address) ?? ""
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs", children: [
                  (_c = o.items) == null ? void 0 : _c.length,
                  " items · ₹",
                  (_d = o.total) == null ? void 0 : _d.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: o.status })
            ] }),
            nextStatus[o.status] && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  className: "h-7 text-xs flex-1",
                  onClick: () => act(o.id, nextStatus[o.status]),
                  "data-ocid": `courier.advance.button.${idx + 1}`,
                  children: [
                    "→ ",
                    nextStatus[o.status]
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "h-7 text-xs border-red-400 text-red-500",
                  onClick: () => act(o.id, "Delivery Failed"),
                  "data-ocid": `courier.fail.button.${idx + 1}`,
                  children: "✗ Failed"
                }
              )
            ] })
          ] })
        },
        o.id
      );
    })
  ] });
}
export {
  CourierDispatchBusinessPanel as C,
  ElectricianModule as E,
  FoodParcelDeliveryModule as F,
  GarmentsModule as G,
  MechanicModule as M,
  OrderStatusStepper as O,
  PlumbingModule as P,
  SweeperModule as S,
  TransportModule as T,
  VendorOrdersPanel as V,
  WaterDeliveryModule as W,
  ElectricalModule as a,
  FuelDepotModule as b,
  CourierDispatchModule as c
};
