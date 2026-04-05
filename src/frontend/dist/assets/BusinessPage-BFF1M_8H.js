import { l as createLucideIcon, r as reactExports, j as jsxRuntimeExports, T as Tabs, c as TabsList, d as TabsTrigger, e as TabsContent, aa as ScrollArea, a as Button, u as ue, B as Badge, I as Input, D as Dialog, E as DialogTrigger, F as DialogContent, G as DialogHeader, J as DialogTitle, L as Label, K as DialogFooter, a0 as Switch, m as Building2, w as CircleCheck, x as Separator, a7 as React, O as MapPin, N as Plus, Z as Zap, k as Star, S as Select, f as SelectTrigger, g as SelectValue, h as SelectContent, i as SelectItem, Y as Sparkles, X } from "./index-lw5pjVJK.js";
import { C as Card, b as CardContent, a as CardHeader, c as CardTitle } from "./card-CqMfxsLj.js";
import { P as Popover, a as PopoverTrigger, b as PopoverContent } from "./popover-B_hMYkF4.js";
import { P as Progress } from "./progress-D6ePfeJT.js";
import { R as RadioGroup, a as RadioGroupItem } from "./radio-group-bqDyRiI-.js";
import { S as Slider } from "./slider-KXmPqt_y.js";
import { T as Textarea } from "./textarea-fKvKYplq.js";
import { B as BoostPostDialog } from "./BoostPostDialog-BMBO8iwU.js";
import { D as DiscoverClaimTab, R as ReviewModal } from "./ReviewModal-mHbTm4hT.js";
import { V as VendorOrdersPanel, C as CourierDispatchBusinessPanel, G as GarmentsModule, S as SweeperModule, M as MechanicModule, E as ElectricianModule, a as ElectricalModule, P as PlumbingModule, F as FoodParcelDeliveryModule, W as WaterDeliveryModule, T as TransportModule, b as FuelDepotModule, c as CourierDispatchModule } from "./BusinessModulesExtra-8D8RHkhe.js";
import { D as DeliveryPartnersPanel } from "./DeliveryPartnersPanel-h7Olqroe.js";
import { L as LikeVoteBar } from "./LikeVoteBar-DHVzRo-v.js";
import { g as getFamilyTreeBusinesses } from "./familyTreeState-BANKLlxj.js";
import { g as getGlobalProducts, a as addGlobalProduct } from "./globalProductsState-DsVVJw3h.js";
import { f as formatTimeAgo } from "./timeUtils-BFSNPdi8.js";
import { C as ChefHat } from "./chef-hat-CvAhx5SF.js";
import { Q as QrCode } from "./qr-code-DyxGAHXl.js";
import { C as CreditCard } from "./credit-card-w8Pb9-O-.js";
import { T as Truck } from "./truck-D0r0QsgK.js";
import { L as Lock } from "./lock-q4Co4miu.js";
import { S as Share2 } from "./share-2-DUI91J_K.js";
import { C as Copy } from "./copy-CejgfI15.js";
import { P as Phone } from "./phone-a8fMug0r.js";
import { G as Globe } from "./globe-CTGspTLv.js";
import { U as Upload } from "./upload-XzXhKw7K.js";
import { M as Mail } from "./mail-DXeqe_WA.js";
import { D as Download } from "./download-DLaSWpdA.js";
import "./PaymentModal-DXe_t4kr.js";
import "./checkbox-g2PvVHHG.js";
import "./table-ASDwut9q.js";
import "./circle-x-BA9W6Sck.js";
import "./gavel-2FZ6zXlh.js";
import "./trending-up-D0iSXnWj.js";
import "./wrench-nCVU7wS1.js";
import "./droplets-Bh3z-zH5.js";
import "./thumbs-up-COoxu0a_.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }]
];
const GitBranch = createLucideIcon("git-branch", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
  ["path", { d: "M7 2v20", key: "1473qp" }],
  ["path", { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "j28e5" }]
];
const Utensils = createLucideIcon("utensils", __iconNode);
function SummaryCard({
  label,
  value,
  sub,
  color
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "flex-1 min-w-[120px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: "text-xl font-bold mt-0.5",
        style: { color: color ?? "inherit" },
        children: value
      }
    ),
    sub && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-0.5", children: sub })
  ] }) });
}
function statusBadge(status) {
  const map = {
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
    Delivered: "bg-green-100 text-green-700"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Badge,
    {
      className: `text-[10px] px-1.5 py-0 ${map[status] ?? "bg-gray-100 text-gray-600"}`,
      children: status
    }
  );
}
function InventoryModule() {
  const [stock, setStock] = reactExports.useState([
    {
      id: 1,
      name: "Basmati Rice",
      cat: "Grains",
      qty: 240,
      unit: "kg",
      reorder: 50,
      updated: "2m ago",
      status: "OK"
    },
    {
      id: 2,
      name: "Mustard Oil",
      cat: "Oil",
      qty: 18,
      unit: "L",
      reorder: 20,
      updated: "5m ago",
      status: "Low"
    },
    {
      id: 3,
      name: "Printer Paper A4",
      cat: "Stationery",
      qty: 3,
      unit: "ream",
      reorder: 10,
      updated: "1h ago",
      status: "Critical"
    }
  ]);
  const [suppliers] = reactExports.useState([
    {
      name: "AgroStar Supplies",
      contact: "9876543210",
      cat: "Grains",
      rating: 4.5
    },
    { name: "Deepak Traders", contact: "9123456780", cat: "Oil", rating: 4.2 }
  ]);
  const [pos] = reactExports.useState([
    {
      po: "PO-001",
      supplier: "AgroStar",
      items: "Rice 100kg",
      total: "₹4,500",
      status: "Received"
    },
    {
      po: "PO-002",
      supplier: "Deepak Traders",
      items: "Oil 30L",
      total: "₹3,200",
      status: "Pending"
    }
  ]);
  const [open, setOpen] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    cat: "",
    qty: "",
    unit: "",
    reorder: ""
  });
  reactExports.useEffect(() => {
    const id = setInterval(() => {
      setStock(
        (s) => s.map((i) => ({
          ...i,
          updated: `${Math.floor(Math.random() * 10) + 1}m ago`,
          status: i.qty < i.reorder ? i.qty < i.reorder / 2 ? "Critical" : "Low" : "OK"
        }))
      );
    }, 12e3);
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
        status: Number(form.qty) < Number(form.reorder) ? "Low" : "OK"
      }
    ]);
    ue.success("Stock item added");
    setOpen(false);
    setForm({ name: "", cat: "", qty: "", unit: "", reorder: "" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryCard, { label: "Total Items", value: stock.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SummaryCard,
        {
          label: "Low Stock",
          value: stock.filter((s) => s.status !== "OK").length,
          color: "oklch(0.62 0.18 45)"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryCard, { label: "Suppliers", value: suppliers.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SummaryCard,
        {
          label: "Open POs",
          value: pos.filter((p) => p.status === "Pending").length
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "stock", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "flex-wrap gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "stock", children: "Stock" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "po", children: "Purchase Orders" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "suppliers", children: "Suppliers" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "stock", className: "mt-3 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: setOpen, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", children: "+ Add Stock" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Add Stock Item" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: ["name", "cat", "qty", "unit", "reorder"].map(
              (f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "capitalize", children: f }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: form[f],
                    onChange: (e) => setForm((p) => ({ ...p, [f]: e.target.value }))
                  }
                )
              ] }, f)
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: addItem, children: "Save" }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "text-xs text-muted-foreground border-b", children: [
            "Name",
            "Category",
            "Qty",
            "Unit",
            "Reorder",
            "Updated",
            "Status"
          ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1 pr-2", children: h }, h)) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: stock.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b last:border-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 pr-2", children: r.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-2 text-muted-foreground", children: r.cat }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-2 font-mono", children: r.qty }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-2", children: r.unit }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-2", children: r.reorder }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-2 text-muted-foreground", children: r.updated }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: statusBadge(r.status) })
          ] }, r.id)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "po", className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "text-xs text-muted-foreground border-b", children: ["PO", "Supplier", "Items", "Total", "Status"].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1 pr-3", children: h }, h)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: pos.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 pr-3 font-mono text-xs", children: r.po }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3", children: r.supplier }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3 text-muted-foreground", children: r.items }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3", children: r.total }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: statusBadge(r.status) })
        ] }, r.po)) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "suppliers", className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: suppliers.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: s.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          s.contact,
          " · ",
          s.cat
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs mt-1", children: [
          "Rating: ",
          s.rating,
          "⭐"
        ] })
      ] }) }, s.name)) }) })
    ] })
  ] });
}
function AssemblyModule() {
  const [orders, setOrders] = reactExports.useState([
    {
      id: "PO-A01",
      product: "Wooden Chair",
      qty: 20,
      due: "Apr 10",
      status: "In Progress"
    },
    {
      id: "PO-A02",
      product: "Steel Shelf",
      qty: 5,
      due: "Apr 15",
      status: "Planned"
    },
    {
      id: "PO-A03",
      product: "Leather Bag",
      qty: 50,
      due: "Apr 8",
      status: "Done"
    }
  ]);
  const bom = [
    {
      product: "Wooden Chair",
      components: [
        { part: "Seat Board", qty: 1, unit: "pcs" },
        { part: "Legs", qty: 4, unit: "pcs" },
        { part: "Screws", qty: 16, unit: "pcs" }
      ]
    }
  ];
  const wip = [
    { order: "PO-A01", stage: "Assembly", progress: 60 },
    { order: "PO-A02", stage: "Raw Material", progress: 15 }
  ];
  const finished = [
    { product: "Leather Bag", qty: 50, batch: "B-202", date: "Apr 1" }
  ];
  reactExports.useEffect(() => {
    const id = setInterval(() => {
      setOrders(
        (o) => o.map((r) => ({
          ...r,
          status: r.status === "Planned" && Math.random() > 0.7 ? "In Progress" : r.status
        }))
      );
    }, 12e3);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryCard, { label: "Total Orders", value: orders.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SummaryCard,
        {
          label: "In Progress",
          value: orders.filter((o) => o.status === "In Progress").length,
          color: "oklch(0.55 0.22 280)"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SummaryCard,
        {
          label: "Completed",
          value: orders.filter((o) => o.status === "Done").length,
          color: "oklch(0.52 0.18 155)"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "orders", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "orders", children: "Production Orders" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "bom", children: "BOM" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "wip", children: "WIP" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "finished", children: "Finished Goods" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "orders", className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-56", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "text-xs text-muted-foreground border-b", children: ["ID", "Product", "Qty", "Due", "Status"].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1 pr-3", children: h }, h)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: orders.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 pr-2 font-mono text-xs", children: r.id }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3", children: r.product }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3", children: r.qty }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3 text-muted-foreground", children: r.due }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: statusBadge(r.status) })
        ] }, r.id)) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "bom", className: "mt-3 space-y-3", children: bom.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm", children: b.product }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-xs text-muted-foreground border-b", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1 pr-3", children: "Component" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1 pr-3", children: "Qty" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1", children: "Unit" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: b.components.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b last:border-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1 pr-3", children: c.part }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3", children: c.qty }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: c.unit })
          ] }, c.part)) })
        ] }) })
      ] }, b.product)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "wip", className: "mt-3 space-y-3", children: wip.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: w.order }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: w.stage })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: w.progress, className: "h-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
          w.progress,
          "% complete"
        ] })
      ] }) }, w.order)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "finished", className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "text-xs text-muted-foreground border-b", children: ["Product", "Qty", "Batch", "Date"].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1 pr-3", children: h }, h)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: finished.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 pr-3", children: r.product }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3", children: r.qty }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3 font-mono text-xs", children: r.batch }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: r.date })
        ] }, r.product)) })
      ] }) })
    ] })
  ] });
}
function RepairServiceModule() {
  const [jobs, setJobs] = reactExports.useState([
    {
      id: "JC-001",
      customer: "Ravi Kumar",
      item: "Samsung TV",
      issue: "No display",
      tech: "Suresh",
      status: "Repairing",
      est: "₹1,200"
    },
    {
      id: "JC-002",
      customer: "Priya Sharma",
      item: "Washing Machine",
      issue: "Noisy spin",
      tech: "Mohan",
      status: "Diagnosing",
      est: "₹800"
    },
    {
      id: "JC-003",
      customer: "Amit Joshi",
      item: "iPhone 12",
      issue: "Cracked screen",
      tech: "Raj",
      status: "Ready",
      est: "₹3,500"
    }
  ]);
  const parts = [
    { name: "Samsung Panel 32", qty: 2, price: "₹4,500" },
    { name: "Gorilla Glass 6.1", qty: 5, price: "₹800" }
  ];
  const warranty = [
    { item: "LG AC", until: "Dec 2025", customer: "Deepa Singh" },
    { item: "Bosch Fridge", until: "Mar 2026", customer: "Ajay Mehta" }
  ];
  const [open, setOpen] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    customer: "",
    item: "",
    issue: "",
    tech: "",
    est: ""
  });
  reactExports.useEffect(() => {
    const id = setInterval(() => {
      setJobs(
        (j) => j.map((r) => ({
          ...r,
          status: r.status === "Diagnosing" && Math.random() > 0.6 ? "Repairing" : r.status
        }))
      );
    }, 12e3);
    return () => clearInterval(id);
  }, []);
  function addJob() {
    setJobs((j) => [
      ...j,
      {
        id: `JC-00${j.length + 1}`,
        ...form,
        status: "Received"
      }
    ]);
    ue.success("Job card created");
    setOpen(false);
    setForm({ customer: "", item: "", issue: "", tech: "", est: "" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SummaryCard,
        {
          label: "Open Jobs",
          value: jobs.filter((j) => j.status !== "Delivered").length
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SummaryCard,
        {
          label: "Ready",
          value: jobs.filter((j) => j.status === "Ready").length,
          color: "oklch(0.52 0.18 155)"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "jobs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "jobs", children: "Job Cards" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "parts", children: "Parts" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "warranty", children: "Warranty" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "jobs", className: "mt-3 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: setOpen, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", children: "+ New Job" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "New Job Card" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: ["customer", "item", "issue", "tech", "est"].map(
              (f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "capitalize", children: f }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: form[f],
                    onChange: (e) => setForm((p) => ({ ...p, [f]: e.target.value }))
                  }
                )
              ] }, f)
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: addJob, children: "Create" }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-56", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "text-xs text-muted-foreground border-b", children: [
            "ID",
            "Customer",
            "Item",
            "Issue",
            "Tech",
            "Est.",
            "Status"
          ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1 pr-2", children: h }, h)) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: jobs.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b last:border-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 pr-2 font-mono text-xs", children: r.id }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-2", children: r.customer }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-2", children: r.item }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-2 text-muted-foreground text-xs", children: r.issue }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-2", children: r.tech }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-2", children: r.est }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: statusBadge(r.status) })
          ] }, r.id)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "parts", className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "text-xs text-muted-foreground border-b", children: ["Part", "Qty", "Price"].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1 pr-3", children: h }, h)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: parts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 pr-3", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3", children: p.qty }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: p.price })
        ] }, p.name)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "warranty", className: "mt-3", children: warranty.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3 flex justify-between items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: w.item }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: w.customer })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", children: [
          "Until ",
          w.until
        ] })
      ] }) }, w.item)) })
    ] })
  ] });
}
function FinancialModule() {
  const [txns] = reactExports.useState([
    {
      date: "Apr 1",
      desc: "Product Sale",
      debit: "",
      credit: "₹12,500",
      bal: "₹1,12,500",
      cat: "Revenue"
    },
    {
      date: "Apr 2",
      desc: "Supplier Payment",
      debit: "₹4,200",
      credit: "",
      bal: "₹1,08,300",
      cat: "Expense"
    },
    {
      date: "Apr 3",
      desc: "Service Income",
      debit: "",
      credit: "₹3,800",
      bal: "₹1,12,100",
      cat: "Revenue"
    }
  ]);
  const invoices = [
    {
      inv: "INV-101",
      party: "Ravi Enterprises",
      amt: "₹18,000",
      due: "Apr 15",
      status: "Pending"
    },
    {
      inv: "INV-100",
      party: "Sharma & Co",
      amt: "₹9,500",
      due: "Mar 30",
      status: "Overdue"
    },
    {
      inv: "INV-099",
      party: "Tech Solutions",
      amt: "₹32,000",
      due: "Apr 30",
      status: "Paid"
    }
  ];
  const tax = [
    { period: "Mar 2026", collected: "₹6,240", paid: "₹3,120", net: "₹3,120" },
    { period: "Feb 2026", collected: "₹5,400", paid: "₹2,700", net: "₹2,700" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SummaryCard,
        {
          label: "Revenue",
          value: "₹1.12L",
          color: "oklch(0.52 0.18 155)"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SummaryCard,
        {
          label: "Expenses",
          value: "₹42K",
          color: "oklch(0.55 0.22 25)"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SummaryCard,
        {
          label: "Net Profit",
          value: "₹70K",
          color: "oklch(0.55 0.22 280)"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SummaryCard,
        {
          label: "Pending Inv.",
          value: invoices.filter(
            (i) => i.status === "Pending" || i.status === "Overdue"
          ).length,
          color: "oklch(0.62 0.18 45)"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "txns", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "txns", children: "Transactions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "invoices", children: "Invoices" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "tax", children: "Tax Reports" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "txns", className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-56", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "text-xs text-muted-foreground border-b", children: [
          "Date",
          "Description",
          "Debit",
          "Credit",
          "Balance",
          "Category"
        ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1 pr-3", children: h }, h)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: txns.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: "border-b last:border-0",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 pr-3", children: r.date }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3", children: r.desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3 text-red-600", children: r.debit }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3 text-green-600", children: r.credit }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3 font-mono", children: r.bal }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-muted-foreground", children: r.cat })
            ]
          },
          r.desc + String(i)
        )) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "invoices", className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-56", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "text-xs text-muted-foreground border-b", children: ["Invoice", "Party", "Amount", "Due", "Status"].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1 pr-3", children: h }, h)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: invoices.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 pr-3 font-mono text-xs", children: r.inv }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3", children: r.party }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3", children: r.amt }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3", children: r.due }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: statusBadge(r.status) })
        ] }, r.inv)) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "tax", className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "text-xs text-muted-foreground border-b", children: ["Period", "GST Collected", "GST Paid", "Net Payable"].map(
          (h) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1 pr-3", children: h }, h)
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: tax.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 pr-3", children: r.period }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3 text-green-600", children: r.collected }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3 text-red-600", children: r.paid }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "font-semibold", children: r.net })
        ] }, r.period)) })
      ] }) })
    ] })
  ] });
}
function TelecomModule() {
  const [conns, setConns] = reactExports.useState([
    {
      sim: "9876543210",
      customer: "Ramesh Patel",
      plan: "2GB/day",
      status: "Active",
      validity: "Apr 30"
    },
    {
      sim: "9012345678",
      customer: "Sunita Rao",
      plan: "1GB/day",
      status: "Inactive",
      validity: "Mar 15"
    },
    {
      sim: "9988776655",
      customer: "Mohan Lal",
      plan: "3GB/day",
      status: "Suspended",
      validity: "Apr 10"
    }
  ]);
  const plans = [
    {
      name: "Basic 1GB",
      data: "1GB/day",
      calls: "Unlimited",
      validity: "28 days",
      price: "₹199"
    },
    {
      name: "Standard 2GB",
      data: "2GB/day",
      calls: "Unlimited",
      validity: "28 days",
      price: "₹299"
    },
    {
      name: "Premium 3GB",
      data: "3GB/day",
      calls: "Unlimited + ISD",
      validity: "56 days",
      price: "₹599"
    }
  ];
  reactExports.useEffect(() => {
    const id = setInterval(() => {
      setConns(
        (c) => c.map((r) => ({
          ...r,
          status: r.status === "Inactive" && Math.random() > 0.8 ? "Active" : r.status
        }))
      );
    }, 12e3);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryCard, { label: "Total SIMs", value: conns.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SummaryCard,
        {
          label: "Active",
          value: conns.filter((c) => c.status === "Active").length,
          color: "oklch(0.52 0.18 155)"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SummaryCard,
        {
          label: "Suspended",
          value: conns.filter((c) => c.status === "Suspended").length,
          color: "oklch(0.55 0.22 25)"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "conns", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "conns", children: "Connections" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "plans", children: "Plans" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "reports", children: "Reports" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "conns", className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-56", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "text-xs text-muted-foreground border-b", children: ["SIM", "Customer", "Plan", "Validity", "Status"].map(
          (h) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1 pr-3", children: h }, h)
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: conns.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 pr-3 font-mono text-xs", children: r.sim }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3", children: r.customer }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3", children: r.plan }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3 text-muted-foreground", children: r.validity }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: statusBadge(r.status) })
        ] }, r.sim)) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TabsContent,
        {
          value: "plans",
          className: "mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3",
          children: plans.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
              p.data,
              " · ",
              p.calls
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: p.validity }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-lg mt-2", children: p.price }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "mt-2 w-full", children: "Recharge" })
          ] }) }, p.name))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "reports", className: "mt-3 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryCard, { label: "Monthly Revenue", value: "₹18,400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryCard, { label: "Active", value: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryCard, { label: "Churned", value: "1" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground", children: [
          "Recharge success rate:",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: "94%" })
        ] })
      ] })
    ] })
  ] });
}
function RetailShopModule() {
  const [billItems, setBillItems] = reactExports.useState([]);
  const [search, setSearch] = reactExports.useState("");
  const catalog = [
    { name: "Colgate 100g", price: 45 },
    { name: "Maggi 70g", price: 14 },
    { name: "Amul Butter 500g", price: 260 },
    { name: "Lays Chips", price: 20 }
  ];
  const loyalty = [
    { name: "Priya Singh", points: 1240, tier: "Gold", last: "Apr 1" },
    { name: "Raj Kumar", points: 380, tier: "Silver", last: "Mar 28" },
    { name: "Anita Rao", points: 5600, tier: "Platinum", last: "Apr 3" }
  ];
  const sales = [
    {
      date: "Apr 3",
      items: 42,
      revenue: "₹3,200",
      returns: "₹120",
      net: "₹3,080"
    },
    {
      date: "Apr 2",
      items: 38,
      revenue: "₹2,800",
      returns: "₹0",
      net: "₹2,800"
    }
  ];
  const total = billItems.reduce((s, i) => s + i.price * i.qty, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "bill", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "bill", children: "Quick Bill" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "sales", children: "Daily Sales" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "loyalty", children: "Loyalty" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "bill", className: "mt-3 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          placeholder: "Search product...",
          value: search,
          onChange: (e) => setSearch(e.target.value),
          className: "flex-1"
        }
      ) }),
      search && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border rounded-md bg-popover shadow-md", children: catalog.filter(
        (c) => c.name.toLowerCase().includes(search.toLowerCase())
      ).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: "w-full text-left px-3 py-2 text-sm hover:bg-accent flex justify-between",
          onClick: () => {
            setBillItems((b) => {
              const ex = b.find((x) => x.name === p.name);
              return ex ? b.map(
                (x) => x.name === p.name ? { ...x, qty: x.qty + 1 } : x
              ) : [...b, { ...p, qty: 1 }];
            });
            setSearch("");
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              "₹",
              p.price
            ] })
          ]
        },
        p.name
      )) }),
      billItems.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-xs text-muted-foreground border-b", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1 pr-3", children: "Item" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Qty" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", {})
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: billItems.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "border-b last:border-0",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 pr-3", children: r.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center", children: r.qty }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-center", children: [
                  "₹",
                  r.price
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "text-center font-mono", children: [
                  "₹",
                  r.price * r.qty
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "ghost",
                    className: "text-red-500 px-1",
                    onClick: () => setBillItems((b) => b.filter((_, j) => j !== i)),
                    children: "✕"
                  }
                ) })
              ]
            },
            r.name + String(i)
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center font-bold text-base pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "₹",
            total
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            className: "w-full",
            onClick: () => {
              ue.success(`Payment of ₹${total} received!`);
              setBillItems([]);
            },
            children: [
              "💳 Pay ₹",
              total
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "sales", className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "text-xs text-muted-foreground border-b", children: ["Date", "Items Sold", "Revenue", "Returns", "Net"].map(
        (h) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1 pr-3", children: h }, h)
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: sales.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b last:border-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 pr-3", children: r.date }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3", children: r.items }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3 text-green-600", children: r.revenue }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3 text-red-600", children: r.returns }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "font-semibold", children: r.net })
      ] }, r.date)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "loyalty", className: "mt-3 space-y-2", children: loyalty.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3 flex justify-between items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: c.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          "Last: ",
          c.last
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold", children: [
          c.points,
          " pts"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs", children: c.tier })
      ] })
    ] }) }, c.name)) })
  ] }) });
}
function VehicleModule() {
  const [inventory] = reactExports.useState([
    {
      make: "Maruti",
      model: "Swift",
      year: 2023,
      color: "Red",
      price: "₹6.8L",
      status: "Available"
    },
    {
      make: "Honda",
      model: "City",
      year: 2022,
      color: "White",
      price: "₹11.5L",
      status: "Reserved"
    },
    {
      make: "Tata",
      model: "Nexon EV",
      year: 2024,
      color: "Navy",
      price: "₹14.9L",
      status: "Sold"
    }
  ]);
  const drives = [
    {
      customer: "Anil Mehta",
      vehicle: "Swift Red 2023",
      date: "Apr 5 11:00",
      status: "Scheduled"
    },
    {
      customer: "Preeti Kaur",
      vehicle: "City White 2022",
      date: "Apr 3 15:00",
      status: "Completed"
    }
  ];
  const sales = [
    {
      id: "S-001",
      customer: "Rakesh Yadav",
      vehicle: "Nexon EV",
      price: "₹14.9L",
      date: "Apr 1",
      mode: "Loan"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SummaryCard,
        {
          label: "In Stock",
          value: inventory.filter((v) => v.status === "Available").length,
          color: "oklch(0.52 0.18 155)"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SummaryCard,
        {
          label: "Reserved",
          value: inventory.filter((v) => v.status === "Reserved").length,
          color: "oklch(0.62 0.18 45)"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SummaryCard,
        {
          label: "Sold",
          value: inventory.filter((v) => v.status === "Sold").length
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "inv", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "inv", children: "Inventory" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "drives", children: "Test Drives" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "sales", children: "Sales" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "inv", className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-56", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "text-xs text-muted-foreground border-b", children: ["Make", "Model", "Year", "Color", "Price", "Status"].map(
          (h) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1 pr-3", children: h }, h)
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: inventory.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 pr-3", children: r.make }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3", children: r.model }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3", children: r.year }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3", children: r.color }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3", children: r.price }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: statusBadge(r.status) })
        ] }, r.make + r.model)) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "drives", className: "mt-3 space-y-2", children: drives.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3 flex justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: d.customer }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            d.vehicle,
            " · ",
            d.date
          ] })
        ] }),
        statusBadge(d.status)
      ] }) }, d.customer + d.vehicle)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "sales", className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "text-xs text-muted-foreground border-b", children: ["ID", "Customer", "Vehicle", "Price", "Date", "Mode"].map(
          (h) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1 pr-3", children: h }, h)
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: sales.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 pr-2 font-mono text-xs", children: r.id }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3", children: r.customer }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3", children: r.vehicle }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3", children: r.price }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3", children: r.date }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: r.mode })
        ] }, r.id)) })
      ] }) })
    ] })
  ] });
}
function LeadCRMModule() {
  const stages = [
    "New",
    "Contacted",
    "Qualified",
    "Proposal",
    "Closed Won",
    "Closed Lost"
  ];
  const [leads] = reactExports.useState([
    {
      name: "Reliance Foods",
      value: "₹2.4L",
      source: "Referral",
      stage: "Proposal"
    },
    {
      name: "Gupta Textiles",
      value: "₹80K",
      source: "Website",
      stage: "Qualified"
    },
    { name: "Metro Bakery", value: "₹45K", source: "Cold Call", stage: "New" },
    {
      name: "SunTech Solutions",
      value: "₹1.2L",
      source: "Partner",
      stage: "Closed Won"
    },
    {
      name: "Ajay Motors",
      value: "₹3.5L",
      source: "Social",
      stage: "Contacted"
    }
  ]);
  const followups = [
    {
      lead: "Reliance Foods",
      action: "Send proposal",
      due: "Apr 5",
      priority: "High",
      notes: "Interested in bulk order"
    },
    {
      lead: "Gupta Textiles",
      action: "Demo call",
      due: "Apr 7",
      priority: "Medium",
      notes: "Request for 3 months trial"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryCard, { label: "Total Leads", value: leads.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SummaryCard,
        {
          label: "Won",
          value: leads.filter((l) => l.stage === "Closed Won").length,
          color: "oklch(0.52 0.18 155)"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SummaryCard,
        {
          label: "Conversion",
          value: "20%",
          color: "oklch(0.55 0.22 280)"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "pipeline", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "pipeline", children: "Pipeline" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "followups", children: "Follow-ups" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "contacts", children: "Contacts" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "pipeline", className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 min-w-max pb-2", children: stages.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-40 flex-shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground mb-2", children: s }),
        leads.filter((l) => l.stage === s).map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium", children: l.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: l.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              className: "text-[9px] px-1 mt-1",
              variant: "outline",
              children: l.source
            }
          )
        ] }) }, l.name))
      ] }, s)) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "followups", className: "mt-3 space-y-2", children: followups.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: f.lead }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              className: f.priority === "High" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700",
              children: f.priority
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs mt-1", children: [
          f.action,
          " — Due ",
          f.due
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: f.notes })
      ] }) }, f.lead)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "contacts", className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "text-xs text-muted-foreground border-b", children: ["Name", "Phone", "Source", "Stage"].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1 pr-3", children: h }, h)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: leads.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 pr-3", children: r.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "pr-3 font-mono text-xs", children: [
            "+91 98765 ",
            i,
            "0000"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3", children: r.source }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: statusBadge(
            r.stage === "Closed Won" ? "Active" : r.stage === "Closed Lost" ? "Inactive" : "Pending"
          ) })
        ] }, r.name)) })
      ] }) })
    ] })
  ] });
}
function SoftwareProjectModule() {
  const [projects] = reactExports.useState([
    {
      name: "ERP Portal",
      client: "Sharma Enterprises",
      start: "Jan 1",
      deadline: "Jun 30",
      status: "Active",
      budget: "₹4.5L"
    },
    {
      name: "Mobile App",
      client: "FashionHub",
      start: "Feb 15",
      deadline: "May 15",
      status: "On Hold",
      budget: "₹2.2L"
    }
  ]);
  const board = {
    "To Do": [
      { task: "API Integration", assignee: "Dev A", sp: 5 },
      { task: "DB Schema", assignee: "Dev B", sp: 3 }
    ],
    "In Progress": [
      { task: "Auth Module", assignee: "Dev A", sp: 8 },
      { task: "Dashboard UI", assignee: "Dev C", sp: 5 }
    ],
    Done: [
      { task: "Project Setup", assignee: "Dev B", sp: 2 },
      { task: "Design Mockup", assignee: "Dev C", sp: 3 }
    ]
  };
  const logs = [
    {
      dev: "Dev A",
      project: "ERP Portal",
      date: "Apr 3",
      hours: 6.5,
      task: "Auth Module"
    },
    {
      dev: "Dev C",
      project: "ERP Portal",
      date: "Apr 3",
      hours: 5,
      task: "Dashboard UI"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryCard, { label: "Projects", value: projects.length }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SummaryCard,
        {
          label: "Active",
          value: projects.filter((p) => p.status === "Active").length,
          color: "oklch(0.52 0.18 155)"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "projects", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "projects", children: "Projects" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "sprint", children: "Sprint Board" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "logs", children: "Time Logs" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "projects", className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "text-xs text-muted-foreground border-b", children: ["Name", "Client", "Deadline", "Budget", "Status"].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1 pr-3", children: h }, h)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: projects.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 pr-3 font-medium", children: r.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3 text-muted-foreground", children: r.client }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3", children: r.deadline }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3", children: r.budget }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: statusBadge(r.status) })
        ] }, r.name)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "sprint", className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: Object.entries(board).map(([col, tasks]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground mb-2 uppercase", children: col }),
        tasks.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium", children: t.task }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", children: [
            t.assignee,
            " · ",
            t.sp,
            "sp"
          ] })
        ] }) }, t.task))
      ] }, col)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "logs", className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "text-xs text-muted-foreground border-b", children: ["Developer", "Project", "Date", "Hours", "Task"].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1 pr-3", children: h }, h)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: logs.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: "border-b last:border-0",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 pr-3", children: r.dev }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3", children: r.project }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-3", children: r.date }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "pr-3 font-mono", children: [
                r.hours,
                "h"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-muted-foreground", children: r.task })
            ]
          },
          r.dev + r.date + r.task
        )) })
      ] }) })
    ] })
  ] });
}
function MoneyLendingModule() {
  const [loans] = reactExports.useState([
    {
      id: "L-001",
      borrower: "Sunil Gupta",
      amt: "₹50,000",
      rate: "12%",
      tenure: "12m",
      disbursed: "Jan 1",
      status: "Active"
    },
    {
      id: "L-002",
      borrower: "Kavita Sharma",
      amt: "₹20,000",
      rate: "10%",
      tenure: "6m",
      disbursed: "Feb 15",
      status: "Closed"
    },
    {
      id: "L-003",
      borrower: "Deepak Jain",
      amt: "₹1,00,000",
      rate: "14%",
      tenure: "24m",
      disbursed: "Mar 1",
      status: "Active"
    }
  ]);
  const emi = [
    {
      loan: "L-001",
      borrower: "Sunil Gupta",
      emi: "₹4,440",
      due: "Apr 1, May 1, Jun 1",
      status: "Pending"
    },
    {
      loan: "L-003",
      borrower: "Deepak Jain",
      emi: "₹4,815",
      due: "Apr 1, May 1, Jun 1",
      status: "Pending"
    }
  ];
  const overdue = [
    {
      borrower: "Rakesh Mishra",
      loan: "₹35,000",
      since: "15 days",
      penalty: "₹525",
      note: ""
    }
  ];
  const [notes, setNotes] = reactExports.useState(overdue.map(() => ""));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SummaryCard,
        {
          label: "Active Loans",
          value: loans.filter((l) => l.status === "Active").length,
          color: "oklch(0.55 0.22 280)"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryCard, { label: "Total Disbursed", value: "₹1.7L" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SummaryCard,
        {
          label: "Overdue",
          value: overdue.length,
          color: "oklch(0.55 0.22 25)"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "loans", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "loans", children: "Loans" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "emi", children: "EMI Schedule" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "overdue", children: "Overdue" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "loans", className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-56", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "text-xs text-muted-foreground border-b", children: [
          "ID",
          "Borrower",
          "Amount",
          "Rate",
          "Tenure",
          "Disbursed",
          "Status"
        ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-1 pr-2", children: h }, h)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: loans.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-1.5 pr-2 font-mono text-xs", children: r.id }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-2", children: r.borrower }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-2", children: r.amt }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-2", children: r.rate }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-2", children: r.tenure }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "pr-2", children: r.disbursed }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: statusBadge(r.status) })
        ] }, r.id)) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "emi", className: "mt-3 space-y-2", children: emi.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: e.borrower }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-sm", children: [
            e.emi,
            "/mo"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
          "Due: ",
          e.due
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            variant: "outline",
            onClick: () => ue.success(`EMI recorded for ${e.borrower}`),
            children: "Mark Paid"
          }
        ) })
      ] }) }, e.loan)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "overdue", className: "mt-3 space-y-2", children: overdue.map((o, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-red-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: o.borrower }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-red-100 text-red-700", children: [
            "Overdue ",
            o.since
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
          "Loan: ",
          o.loan,
          " · Penalty:",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600", children: o.penalty })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            placeholder: "Recovery note...",
            value: notes[i],
            onChange: (e) => setNotes((n) => {
              const c = [...n];
              c[i] = e.target.value;
              return c;
            }),
            rows: 2
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", onClick: () => ue.success("Note saved"), children: "Save Note" })
      ] }) }, o.borrower)) })
    ] })
  ] });
}
const BRANCHES_DEFAULT = [
  {
    id: "b1",
    name: "Connaught Place, Delhi",
    tables: 20,
    activeOrders: 12,
    revenue: 45200,
    paymentModes: { cash: true, online: true, advance: false },
    deliveryAreas: "110001, 110002",
    perKmRate: 30
  },
  {
    id: "b2",
    name: "Bandra West, Mumbai",
    tables: 15,
    activeOrders: 8,
    revenue: 32800,
    paymentModes: { cash: true, online: true, advance: false },
    deliveryAreas: "400050, 400051",
    perKmRate: 35
  },
  {
    id: "b3",
    name: "MG Road, Bangalore",
    tables: 18,
    activeOrders: 5,
    revenue: 28600,
    paymentModes: { cash: true, online: false, advance: false },
    deliveryAreas: "560001",
    perKmRate: 28
  }
];
const MOCK_ORDERS = [
  {
    id: "ORD-001",
    table: 4,
    items: "Butter Chicken x2, Naan x4",
    time: "2 min ago",
    cook: "Chef Ravi",
    status: "New"
  },
  {
    id: "ORD-002",
    table: 7,
    items: "Paneer Tikka x1, Lassi x2",
    time: "8 min ago",
    cook: "Chef Priya",
    status: "Cooking"
  },
  {
    id: "ORD-003",
    table: 2,
    items: "Thali Special x3",
    time: "15 min ago",
    cook: "Chef Ravi",
    status: "Ready"
  },
  {
    id: "ORD-004",
    table: 9,
    items: "Gulab Jamun x4, Chai x2",
    time: "22 min ago",
    cook: "Chef Meera",
    status: "Served"
  }
];
const STATUS_COLORS = {
  New: "oklch(0.55 0.22 280)",
  Cooking: "oklch(0.72 0.19 85)",
  Ready: "oklch(0.52 0.14 155)",
  Served: "oklch(0.55 0.05 280)",
  Available: "oklch(0.52 0.14 155)",
  Occupied: "oklch(0.58 0.22 25)",
  Ordered: "oklch(0.72 0.19 85)"
};
function BusinessAIMarketing() {
  const [festival, setFestival] = reactExports.useState("Diwali");
  const [brand, setBrand] = reactExports.useState("Spice Garden");
  const [offerText, setOfferText] = reactExports.useState(
    "20% OFF on all orders above ₹500!"
  );
  const [scheduleDate, setScheduleDate] = reactExports.useState("");
  const [preview, setPreview] = reactExports.useState(false);
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
    "Baisakhi"
  ];
  const FESTIVAL_COLORS = {
    Diwali: "from-yellow-500 via-orange-500 to-red-500",
    Eid: "from-emerald-500 via-teal-500 to-cyan-500",
    Christmas: "from-green-600 via-red-600 to-green-600",
    "New Year": "from-purple-600 via-blue-600 to-purple-600",
    Holi: "from-pink-500 via-purple-500 to-indigo-500",
    "Independence Day": "from-orange-500 via-white to-green-600",
    Navratri: "from-red-500 via-yellow-400 to-red-500",
    Pongal: "from-yellow-400 via-green-400 to-yellow-400",
    Onam: "from-yellow-500 via-green-500 to-yellow-500",
    Baisakhi: "from-yellow-400 via-orange-400 to-yellow-400"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-display font-bold", children: "AI Marketing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Generate festival posts and AI offer images for your customers" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "rounded-2xl border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Festival / Occasion" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: festival, onValueChange: setFestival, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "business.marketing.festival.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: FESTIVALS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: f, children: f }, f)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Brand Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: brand,
              onChange: (e) => setBrand(e.target.value),
              placeholder: "Your business name",
              "data-ocid": "business.marketing.brand.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Offer Text" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: offerText,
              onChange: (e) => setOfferText(e.target.value),
              placeholder: "e.g. 30% OFF this Diwali!",
              "data-ocid": "business.marketing.offer.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Schedule Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "date",
              value: scheduleDate,
              onChange: (e) => setScheduleDate(e.target.value),
              "data-ocid": "business.marketing.schedule.input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: () => setPreview(true),
          className: "gap-2",
          "data-ocid": "business.marketing.primary_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 15 }),
            " Generate Festival Post"
          ]
        }
      )
    ] }) }),
    preview && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Preview" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `relative rounded-2xl p-8 bg-gradient-to-br ${FESTIVAL_COLORS[festival] || FESTIVAL_COLORS.Diwali} text-white text-center overflow-hidden`,
          "data-ocid": "business.marketing.card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0 opacity-20",
                style: {
                  backgroundImage: "radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 20%, white 0%, transparent 40%)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] uppercase tracking-widest opacity-80 mb-2", children: [
              "✨ ",
              festival,
              " Special ✨"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display font-bold mb-1", children: brand }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold mb-4 opacity-90", children: offerText }),
            scheduleDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs opacity-70", children: [
              "Scheduled: ",
              scheduleDate
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex gap-3 justify-center flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "secondary",
                  className: "rounded-full text-xs",
                  onClick: () => ue.success("Pushed to all customers!"),
                  "data-ocid": "business.marketing.push.button",
                  children: "Push to Customers"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "rounded-full text-xs border-white/40 text-white hover:bg-white/20",
                  onClick: () => setPreview(false),
                  "data-ocid": "business.marketing.close_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12, className: "mr-1" }),
                    " Close"
                  ]
                }
              )
            ] })
          ]
        }
      )
    ] })
  ] });
}
function BusinessCSVImport() {
  const [progress, setProgress] = reactExports.useState(0);
  const [uploading, setUploading] = reactExports.useState(false);
  const [done, setDone] = reactExports.useState(false);
  const MOCK_ROWS = [
    { name: "Butter Chicken (250g)", status: "Approved" },
    { name: "Masala Dosa Pack", status: "Approved" },
    { name: "Gulab Jamun Mix", status: "Pending" },
    { name: "Invalid Row — Missing Price", status: "Rejected" },
    { name: "Paneer Tikka Masala", status: "Pending" }
  ];
  const [rows, setRows] = reactExports.useState(MOCK_ROWS);
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-display font-bold", children: "CSV Product Import" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Upload a CSV file with product data and an images ZIP. Files are scanned for viruses and deleted after processing." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "rounded-2xl border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: "w-full border-2 border-dashed border-border rounded-xl p-8 text-center cursor-pointer hover:bg-muted/30 transition-colors",
          onClick: simulateUpload,
          "data-ocid": "business.csv.dropzone",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 28, className: "mx-auto text-muted-foreground mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Click to upload CSV + images ZIP" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Accepted: .csv, .zip (max 50MB per file)" })
          ]
        }
      ),
      uploading && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Scanning & processing..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            progress,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Progress,
          {
            value: progress,
            "data-ocid": "business.csv.loading_state"
          }
        )
      ] }),
      done && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "p-3 rounded-lg bg-primary/5 border border-primary/20 text-xs text-primary",
          "data-ocid": "business.csv.success_state",
          children: [
            "✅ File processed. Temp file deleted. ",
            rows.length,
            " rows found."
          ]
        }
      )
    ] }) }),
    done && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "rounded-2xl border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold mb-3", children: "Import Results" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: rows.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center justify-between p-3 rounded-lg bg-secondary/30",
          "data-ocid": `business.csv.item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: row.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  className: "text-xs",
                  style: {
                    background: row.status === "Approved" ? "oklch(0.52 0.14 155 / 0.15)" : row.status === "Rejected" ? "oklch(0.55 0.22 25 / 0.15)" : "oklch(0.65 0.14 50 / 0.15)",
                    color: row.status === "Approved" ? "oklch(0.52 0.14 155)" : row.status === "Rejected" ? "oklch(0.55 0.22 25)" : "oklch(0.65 0.14 50)"
                  },
                  children: row.status
                }
              ),
              row.status === "Pending" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-6 text-xs",
                    onClick: () => setRows(
                      (prev) => prev.map(
                        (r, ri) => ri === i ? { ...r, status: "Approved" } : r
                      )
                    ),
                    "data-ocid": `business.csv.confirm_button.${i + 1}`,
                    children: "Approve"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "destructive",
                    className: "h-6 text-xs",
                    onClick: () => setRows(
                      (prev) => prev.map(
                        (r, ri) => ri === i ? { ...r, status: "Rejected" } : r
                      )
                    ),
                    "data-ocid": `business.csv.delete_button.${i + 1}`,
                    children: "Reject"
                  }
                )
              ] })
            ] })
          ]
        },
        row.name
      )) })
    ] }) })
  ] });
}
function BusinessDeliverySetup() {
  const [pincodes, setPincodes] = reactExports.useState("110001, 110002, 110003");
  const [area, setArea] = reactExports.useState("South Delhi, Central Delhi");
  const [radius, setRadius] = reactExports.useState([10]);
  const [perKmRate, setPerKmRate] = reactExports.useState("12");
  const [minOrder, setMinOrder] = reactExports.useState("200");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Coverage Area" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Pincodes Served (comma-separated)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: pincodes,
            onChange: (e) => setPincodes(e.target.value),
            placeholder: "110001, 110002...",
            "data-ocid": "business.delivery.pincodes.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Area / Locality" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: area,
            onChange: (e) => setArea(e.target.value),
            placeholder: "e.g. South Delhi, Saket",
            "data-ocid": "business.delivery.area.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Delivery Radius" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-primary", children: [
            radius[0],
            " km"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Slider,
          {
            value: radius,
            onValueChange: setRadius,
            min: 1,
            max: 50,
            step: 1,
            className: "w-full",
            "data-ocid": "business.delivery.radius.toggle"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Rate Configuration" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Per-km Rate (₹)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "number",
            value: perKmRate,
            onChange: (e) => setPerKmRate(e.target.value),
            placeholder: "12",
            "data-ocid": "business.delivery.per_km.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Minimum Order Amount (₹)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "number",
            value: minOrder,
            onChange: (e) => setMinOrder(e.target.value),
            placeholder: "200",
            "data-ocid": "business.delivery.min_order.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-lg p-3 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground mb-1", children: "Delivery Estimate" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "Base fare: ₹30 + ₹",
          perKmRate,
          "/km"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "Coverage: ",
          radius[0],
          " km radius from business location"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          onClick: () => ue.success("Delivery setup saved"),
          className: "w-full font-label",
          "data-ocid": "business.delivery.save.primary_button",
          children: "Save Delivery Setup"
        }
      )
    ] })
  ] });
}
function BusinessCommissionConfig() {
  const [categories, setCategories] = reactExports.useState([
    { name: "Electronics", percent: "8", flat: "50" },
    { name: "Clothing & Fashion", percent: "12", flat: "30" },
    { name: "Food & Beverages", percent: "15", flat: "20" },
    { name: "Services", percent: "10", flat: "0" },
    { name: "Healthcare", percent: "7", flat: "100" },
    { name: "Real Estate", percent: "2", flat: "500" },
    { name: "Travel", percent: "10", flat: "200" },
    { name: "Education", percent: "5", flat: "50" },
    { name: "Other", percent: "10", flat: "25" }
  ]);
  const updateCategory = (i, field, value) => {
    setCategories(
      (prev) => prev.map((c, idx) => idx === i ? { ...c, [field]: value } : c)
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-b border-border bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Set commission rates per category. Platform charges the lower of % or flat amount." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 text-left text-xs font-semibold text-muted-foreground", children: "Category" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 text-left text-xs font-semibold text-muted-foreground", children: "Commission %" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 text-left text-xs font-semibold text-muted-foreground", children: "Flat Amount (₹)" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: categories.map((cat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "tr",
        {
          className: "border-b border-border/50 hover:bg-secondary/20",
          "data-ocid": `business.commission.row.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-medium text-xs", children: cat.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  value: cat.percent,
                  onChange: (e) => updateCategory(i, "percent", e.target.value),
                  className: "h-8 w-20 text-xs",
                  "data-ocid": `business.commission.percent.input.${i + 1}`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "%" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "₹" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  value: cat.flat,
                  onChange: (e) => updateCategory(i, "flat", e.target.value),
                  className: "h-8 w-20 text-xs",
                  "data-ocid": `business.commission.flat.input.${i + 1}`
                }
              )
            ] }) })
          ]
        },
        cat.name
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        onClick: () => ue.success("Commission rates saved"),
        className: "font-label",
        "data-ocid": "business.commission.save.primary_button",
        children: "Save Commission Rates"
      }
    ) })
  ] });
}
function TableQRButton({
  tableNo,
  businessId,
  businessName
}) {
  const [open, setOpen] = React.useState(false);
  const tableUrl = `https://app.indyacentral.com?business=${businessId}&table=${encodeURIComponent(tableNo)}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(tableUrl)}`;
  const products = getGlobalProducts();
  const menuItems = products.length > 0 ? products.slice(0, 6).map((p) => ({ name: p.name, price: p.price })) : [
    { name: "Masala Chai", price: 60 },
    { name: "Butter Chicken", price: 320 },
    { name: "Paneer Tikka", price: 280 },
    { name: "Garlic Naan", price: 60 },
    { name: "Mango Lassi", price: 100 }
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        size: "sm",
        variant: "outline",
        className: "w-full text-xs gap-1.5",
        onClick: () => setOpen(true),
        "data-ocid": "business.table.qr.button",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { size: 13 }),
          " Table QR"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: setOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      DialogContent,
      {
        className: "max-w-sm rounded-2xl",
        "data-ocid": "business.table_qr.dialog",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "font-display text-sm", children: [
            "Table ",
            tableNo,
            " — Scan to Order"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: qrUrl,
                alt: `Table ${tableNo} QR`,
                className: "w-48 h-48 rounded-2xl border-2 border-primary/30"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: businessName }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                "Table No: ",
                tableNo
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wide", children: "Menu Items" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-1 max-h-40 overflow-y-auto", children: menuItems.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs",
                style: { background: "oklch(var(--muted) / 0.5)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground truncate", children: item.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary font-semibold ml-1 shrink-0", children: [
                    "₹",
                    item.price
                  ] })
                ]
              },
              String(i)
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              className: "w-full gap-2",
              onClick: handlePrint,
              "data-ocid": "business.table_qr.print_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 14 }),
                " Print QR Code"
              ]
            }
          )
        ]
      }
    ) })
  ] });
}
function BusinessVisitingCard({
  biz
}) {
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
    "END:VCARD"
  ].filter(Boolean).join("\n");
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(vcard)}`;
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = qrUrl;
    link.download = `${biz.name}-qr.png`;
    link.click();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0", "data-ocid": "business.qr.card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setShowCard(true),
        className: "rounded-xl border-2 p-2 text-center block hover:shadow-md transition-shadow",
        style: { borderColor: "oklch(0.65 0.25 335 / 0.4)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: qrUrl,
              alt: "Business QR",
              className: "w-20 h-20 rounded-lg mx-auto",
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-bold text-foreground mt-1 truncate max-w-[80px]", children: biz.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[8px] text-primary mt-0.5", children: "View Card" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: showCard, onOpenChange: setShowCard, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      DialogContent,
      {
        className: "max-w-md rounded-2xl",
        "data-ocid": "business.visiting_card.dialog",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display text-sm", children: "Business Visiting Card" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-2xl p-6 text-white relative overflow-hidden",
              style: {
                background: "linear-gradient(135deg, oklch(0.45 0.25 280), oklch(0.55 0.28 310), oklch(0.65 0.25 340))",
                minHeight: 180
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/10" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-12 h-12 rounded-xl flex items-center justify-center mb-3",
                        style: { background: "oklch(1 0 0 / 0.2)" },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 22, className: "text-white" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-label opacity-70 uppercase tracking-widest", children: biz.category })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-bold leading-tight", children: biz.name }),
                  biz.type && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-80 mt-0.5", children: biz.type }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-1", children: [
                    biz.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs opacity-90", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 11 }),
                      " ",
                      biz.phone
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs opacity-90", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 11 }),
                      "contact@",
                      biz.name.toLowerCase().replace(/\s+/g, ""),
                      ".com"
                    ] }),
                    biz.location && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs opacity-90", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 11 }),
                      " ",
                      biz.location
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs opacity-90", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 11 }),
                      "indyacentral.com/biz/",
                      biz.id
                    ] })
                  ] })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: qrUrl,
                alt: "vCard QR Code",
                className: "w-36 h-36 rounded-xl border border-border"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground text-center", children: "Scan to save contact • vCard 3.0" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                className: "flex-1 text-xs gap-1",
                onClick: handleDownload,
                "data-ocid": "business.qr.download_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 13 }),
                  " Download QR"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                className: "flex-1 text-xs gap-1",
                onClick: () => {
                  var _a;
                  (_a = navigator.clipboard) == null ? void 0 : _a.writeText(
                    `https://indyacentral.com/biz/${biz.id}`
                  );
                  ue.success("Business link copied!");
                },
                "data-ocid": "business.qr.share_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { size: 13 }),
                  " Share Card"
                ]
              }
            )
          ] })
        ]
      }
    ) })
  ] });
}
function StorefrontTab() {
  const [bizList, setBizList] = React.useState([]);
  const [boostTarget, setBoostTarget] = reactExports.useState(null);
  const [boosted, setBoosted] = reactExports.useState(() => {
    const b = JSON.parse(
      localStorage.getItem("ic_boosted_posts") || "[]"
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
      2e3
    );
    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("familyBusinessUpdated", handleStorage);
      clearInterval(interval);
    };
  }, []);
  if (bizList.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-xl border border-dashed border-border p-12 text-center space-y-4",
        "data-ocid": "business.storefront.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 40, className: "mx-auto text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-display font-semibold text-foreground", children: "No businesses registered yet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
              "Register a business through ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Family Tree" }),
              " module to see your storefront here."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                window.location.hash = "family-tree";
              },
              className: "text-sm text-primary underline-offset-4 hover:underline cursor-pointer bg-transparent border-0 p-0",
              children: "→ Go to Family Tree to register a business"
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    bizList.map((biz) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "rounded-2xl border-border",
        "data-ocid": "business.storefront.card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-20 h-20 rounded-2xl flex items-center justify-center shrink-0",
                style: { background: "oklch(0.65 0.25 335 / 0.15)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Building2,
                  {
                    size: 32,
                    style: { color: "oklch(0.65 0.25 335)" }
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-bold text-foreground", children: biz.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrustScoreBadge, { biz })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
                biz.category,
                " · ",
                biz.type
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 mt-3 text-xs text-muted-foreground", children: [
                biz.location && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 12 }),
                  " ",
                  biz.location
                ] }),
                biz.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 12 }),
                  " ",
                  biz.phone
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setBoostTarget(biz.id),
                className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all",
                style: {
                  borderColor: boosted[biz.id] ? "oklch(0.65 0.20 85)" : "oklch(var(--border))",
                  color: boosted[biz.id] ? "oklch(0.55 0.18 85)" : "oklch(var(--muted-foreground))",
                  background: boosted[biz.id] ? "oklch(0.65 0.20 85 / 0.1)" : "transparent"
                },
                "data-ocid": "business.storefront.primary_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Zap,
                    {
                      size: 12,
                      fill: boosted[biz.id] ? "currentColor" : "none"
                    }
                  ),
                  boosted[biz.id] ? "Promoted" : "Boost"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(BusinessVisitingCard, { biz })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pb-4 flex items-center justify-between border-t border-border/30 pt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LikeVoteBar, { id: biz.id }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ReviewModal,
                {
                  targetId: biz.id,
                  targetType: "business",
                  targetName: biz.name
                }
              ),
              biz.createdAt && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: formatTimeAgo(biz.createdAt) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            BoostPostDialog,
            {
              open: boostTarget === biz.id,
              onClose: () => setBoostTarget(null),
              postTitle: biz.name,
              postType: "product",
              onBoostSuccess: () => setBoosted((prev) => ({ ...prev, [biz.id]: true }))
            }
          )
        ]
      },
      biz.id
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground text-center", children: [
      "Showing ",
      bizList.length,
      " business",
      bizList.length !== 1 ? "es" : "",
      " from your Family Tree.",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            window.location.hash = "family-tree";
          },
          className: "text-primary underline-offset-4 hover:underline cursor-pointer bg-transparent border-0 p-0",
          children: "Add more in Family Tree →"
        }
      )
    ] })
  ] });
}
function MyBusinessesTab({
  onNavigate
}) {
  const [bizList, setBizList] = React.useState([]);
  React.useEffect(() => {
    setBizList(getFamilyTreeBusinesses());
    const handleStorage = () => setBizList(getFamilyTreeBusinesses());
    window.addEventListener("storage", handleStorage);
    window.addEventListener("familyBusinessUpdated", handleStorage);
    const interval = setInterval(
      () => setBizList(getFamilyTreeBusinesses()),
      2e3
    );
    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("familyBusinessUpdated", handleStorage);
      clearInterval(interval);
    };
  }, []);
  const refresh = () => setBizList(getFamilyTreeBusinesses());
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-display font-bold", children: "My Businesses" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Businesses registered through your Family Tree profile" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "h-8 text-xs gap-1",
            onClick: refresh,
            "data-ocid": "business.refresh.button",
            children: "↻ Refresh"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              window.location.hash = "family-tree";
            },
            className: "text-xs text-primary underline-offset-4 hover:underline cursor-pointer bg-transparent border-0 p-0",
            children: "→ Go to Family Tree"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-lg border border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800 text-xs text-amber-700 dark:text-amber-400", children: [
      "💡 Business registration is done through the",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Family Tree" }),
      " module. Add a business to yourself or a family member there and it will appear here automatically."
    ] }),
    bizList.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-xl border border-dashed border-border p-8 text-center space-y-3",
        "data-ocid": "business.my_business.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 32, className: "mx-auto text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No businesses linked yet. Register a business via Family Tree to see it here." }),
          onNavigate && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              onClick: () => onNavigate("family-tree"),
              children: "Go to Family Tree"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: [
      bizList.map((biz, i) => {
        var _a;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card border border-border rounded-xl p-4",
            "data-ocid": `business.my_business.card.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-10 h-10 rounded-lg flex items-center justify-center",
                    style: { background: "oklch(0.65 0.25 335 / 0.12)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Building2,
                      {
                        size: 18,
                        style: { color: "oklch(0.65 0.25 335)" }
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-2 py-0.5 rounded-full font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400", children: "Active" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm text-foreground mt-2", children: biz.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
                biz.category,
                biz.type ? ` · ${biz.type}` : ""
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-2 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 10 }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: biz.location })
              ] }),
              biz.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-1 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 10 }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: biz.phone })
              ] }),
              biz.category === "Healthcare Advisor" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[10px] px-2 py-1 rounded bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400 font-medium", children: "💊 Healthcare Advisor — Registered on IndyaCentral" }),
              biz.category === "Insurance Agent" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[10px] px-2 py-1 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 font-medium", children: "🛡️ Insurance Agent — Registered on IndyaCentral" }),
              ((_a = biz.category) == null ? void 0 : _a.toLowerCase().includes("health")) && biz.category !== "Healthcare Advisor" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[10px] px-2 py-1 rounded bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400", children: "💊 Healthcare — Advisor profile available" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "w-full mt-3 h-8 text-xs font-label",
                  "data-ocid": `business.manage.primary_button.${i + 1}`,
                  onClick: () => ue.success(`Managing ${biz.name}`),
                  children: "Manage"
                }
              )
            ]
          },
          biz.id
        );
      }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border-2 border-dashed border-border rounded-xl p-4 flex flex-col items-center justify-center gap-2 min-h-[160px] cursor-pointer hover:border-primary/50 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 24, className: "text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-label text-center", children: "Add via Family Tree" })
      ] })
    ] })
  ] });
}
const ALERT_ICONS = {
  order: "📦",
  review: "⭐",
  bid: "🏷️",
  inventory: "📊",
  promotion: "📣",
  delivery: "🚚",
  hr: "👥",
  community: "🏘️",
  ondc: "🌐"
};
const ALERT_COLORS = {
  order: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  review: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  bid: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  inventory: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  promotion: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  delivery: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
  hr: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
  community: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
  ondc: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300"
};
function seedAlerts() {
  const now = Date.now();
  const min = 60 * 1e3;
  return [
    {
      id: "a1",
      type: "order",
      title: "New Order #1038 Placed",
      description: "Order for ₹1,240 placed by Ravi Kumar — 3 items",
      timestamp: new Date(now - 5 * min),
      read: false,
      module: "Shop",
      actionLabel: "View Order"
    },
    {
      id: "a2",
      type: "review",
      title: "New 5-Star Review",
      description: "Priya Sharma rated your Basmati Rice: 'Fresh and fragrant!'",
      timestamp: new Date(now - 18 * min),
      read: false,
      module: "Shop"
    },
    {
      id: "a3",
      type: "inventory",
      title: "Low Stock Alert",
      description: "Toor Dal (1 kg) has only 4 units left in inventory",
      timestamp: new Date(now - 32 * min),
      read: false,
      module: "POS",
      actionLabel: "Restock"
    },
    {
      id: "a4",
      type: "bid",
      title: "New Bid Received",
      description: "Arun Electrical bid ₹8,500 on Electrical Maintenance job",
      timestamp: new Date(now - 45 * min),
      read: true,
      module: "Community"
    },
    {
      id: "a5",
      type: "promotion",
      title: "Promotion Approved ✅",
      description: "Your Diwali Offer campaign is now live and reaching 2,400 users",
      timestamp: new Date(now - 58 * min),
      read: true,
      module: "Admin"
    },
    {
      id: "a6",
      type: "delivery",
      title: "Delivery Request Assigned",
      description: "Order #1035 assigned to Ramesh (Bike) — ETA 25 min",
      timestamp: new Date(now - 72 * min),
      read: true,
      module: "Delivery"
    },
    {
      id: "a7",
      type: "hr",
      title: "Leave Request Pending",
      description: "Suresh Kumar requested 2 days leave (Apr 5–6). Approval needed.",
      timestamp: new Date(now - 90 * min),
      read: false,
      module: "HR",
      actionLabel: "Review"
    },
    {
      id: "a8",
      type: "community",
      title: "Marketplace Activity",
      description: "3 new products listed in Society Marketplace linked to your business",
      timestamp: new Date(now - 110 * min),
      read: true,
      module: "Community"
    },
    {
      id: "a9",
      type: "ondc",
      title: "New ONDC Order #ONDC205",
      description: "ONDC order for ₹1,850 received via network — 2 items",
      timestamp: new Date(now - 12 * min),
      read: false,
      module: "ONDC",
      actionLabel: "View Order"
    },
    {
      id: "a10",
      type: "ondc",
      title: "ONDC Order Cancelled",
      description: "Order #ONDC198 cancelled by buyer. Reason: Change of mind",
      timestamp: new Date(now - 35 * min),
      read: false,
      module: "ONDC"
    },
    {
      id: "a11",
      type: "ondc",
      title: "ONDC Product Synced",
      description: "12 products successfully synced to ONDC network catalogue",
      timestamp: new Date(now - 65 * min),
      read: true,
      module: "ONDC"
    }
  ];
}
const AUTO_ALERTS = [
  {
    type: "order",
    title: "New Order Placed",
    description: "Order #1042 for ₹850 from Meena Patel — 2 items",
    module: "Shop",
    actionLabel: "View"
  },
  {
    type: "inventory",
    title: "Low Stock: Basmati Rice",
    description: "Only 3 units remaining. Consider restocking soon.",
    module: "POS",
    actionLabel: "Restock"
  },
  {
    type: "review",
    title: "New Review Received",
    description: "Amit Singh left a 4-star review on Mustard Oil 1L",
    module: "Shop"
  },
  {
    type: "promotion",
    title: "Promotion Approved",
    description: "Your Eid Sale campaign is approved and going live",
    module: "Admin"
  },
  {
    type: "delivery",
    title: "New Delivery Request",
    description: "Order #1041 ready for pickup. Assign a rider.",
    module: "Delivery",
    actionLabel: "Assign"
  },
  {
    type: "bid",
    title: "New Bid on Auction",
    description: "Laptop Stand — current highest bid: ₹1,200 by Neha R.",
    module: "Shop"
  },
  {
    type: "hr",
    title: "Payroll Due This Week",
    description: "Monthly payroll for 4 employees is due on Apr 5",
    module: "HR",
    actionLabel: "Process"
  },
  {
    type: "community",
    title: "Vendor Bid Accepted",
    description: "Your bid for Plumbing Repair was accepted by Society Admin",
    module: "Community"
  },
  {
    type: "ondc",
    title: "New ONDC Order Received",
    description: "Order via ONDC network — confirm within 30 mins",
    module: "ONDC",
    actionLabel: "Accept"
  },
  {
    type: "ondc",
    title: "ONDC Catalogue Updated",
    description: "Your ONDC product catalogue has been synced successfully",
    module: "ONDC"
  },
  {
    type: "ondc",
    title: "ONDC Order Shipment Requested",
    description: "Buyer requesting shipment for ONDC Order #ONDC211",
    module: "ONDC",
    actionLabel: "Ship"
  }
];
function playAlertBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 880;
    osc.type = "sine";
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(1e-3, ctx.currentTime + 0.2);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.2);
  } catch {
  }
}
function timeAgo(date) {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1e3);
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  return `${hours}h ago`;
}
const FILTER_TABS = [
  { label: "All", value: "all" },
  { label: "Orders", value: "order" },
  { label: "Reviews", value: "review" },
  { label: "Bids", value: "bid" },
  { label: "Inventory", value: "inventory" },
  { label: "Promotions", value: "promotion" },
  { label: "HR", value: "hr" },
  { label: "Deliveries", value: "delivery" },
  { label: "Community", value: "community" },
  { label: "ONDC", value: "ondc" }
];
const MODULE_TABS = [
  { label: "All Modules", value: "all" },
  { label: "Shop", value: "Shop" },
  { label: "POS", value: "POS" },
  { label: "Community", value: "Community" },
  { label: "Healthcare", value: "Healthcare" },
  { label: "Delivery", value: "Delivery" },
  { label: "HR", value: "HR" },
  { label: "Admin", value: "Admin" },
  { label: "ONDC", value: "ONDC" }
];
function BusinessAlertsTab({
  onUnreadChange
}) {
  const [alerts, setAlerts] = reactExports.useState(() => seedAlerts());
  const [filter, setFilter] = reactExports.useState("all");
  const [moduleFilter, setModuleFilter] = reactExports.useState("all");
  const [soundOn, setSoundOn] = reactExports.useState(true);
  const [, forceRender] = reactExports.useState(0);
  React.useEffect(() => {
    const unread = alerts.filter((a) => !a.read).length;
    onUnreadChange(unread);
    localStorage.setItem("biz_alerts_unread", String(unread));
  }, [alerts, onUnreadChange]);
  React.useEffect(() => {
    const timer = setInterval(() => {
      const template = AUTO_ALERTS[Math.floor(Math.random() * AUTO_ALERTS.length)];
      const newAlert = {
        ...template,
        id: `a-${Date.now()}`,
        timestamp: /* @__PURE__ */ new Date(),
        read: false
      };
      setAlerts((prev) => [newAlert, ...prev].slice(0, 50));
      if (soundOn) playAlertBeep();
    }, 1e4);
    return () => clearInterval(timer);
  }, [soundOn]);
  React.useEffect(() => {
    const t = setInterval(() => forceRender((n) => n + 1), 3e4);
    return () => clearInterval(t);
  }, []);
  const markRead = (id) => {
    setAlerts(
      (prev) => prev.map((a) => a.id === id ? { ...a, read: true } : a)
    );
  };
  const markAllRead = () => {
    setAlerts((prev) => prev.map((a) => ({ ...a, read: true })));
  };
  const filtered = alerts.filter((a) => filter === "all" || a.type === filter).filter((a) => moduleFilter === "all" || a.module === moduleFilter);
  const countByType = (type) => {
    const list = type === "all" ? alerts : alerts.filter((a) => a.type === type);
    return list.filter((a) => !a.read).length;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "business.alerts.panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-foreground", children: "Business Alerts" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Real-time notifications from all your business modules" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setSoundOn((s) => !s),
            title: soundOn ? "Mute alert sound" : "Enable alert sound",
            className: "text-lg p-1.5 rounded-md hover:bg-muted transition-colors",
            "data-ocid": "business.alerts.toggle",
            children: soundOn ? "🔔" : "🔕"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            size: "sm",
            onClick: markAllRead,
            "data-ocid": "business.alerts.button",
            children: "Mark All Read"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground font-semibold uppercase tracking-wider", children: "By Type" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", "data-ocid": "business.alerts.tab", children: FILTER_TABS.map(({ label, value }) => {
        const unread = countByType(value);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setFilter(value),
            className: `inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-colors border ${filter === value ? "bg-primary text-primary-foreground border-primary" : "bg-background text-muted-foreground border-border hover:bg-muted"}`,
            children: [
              label,
              unread > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-red-500 text-white text-[9px] rounded-full w-3.5 h-3.5 flex items-center justify-center font-bold", children: unread > 9 ? "9+" : unread })
            ]
          },
          value
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground font-semibold uppercase tracking-wider pt-1", children: "By Module" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: MODULE_TABS.map(({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setModuleFilter(value),
          className: `inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-colors border ${moduleFilter === value ? "bg-secondary text-secondary-foreground border-secondary" : "bg-background text-muted-foreground border-border hover:bg-muted"}`,
          children: label
        },
        value
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "h-[500px] pr-2", children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center py-16 text-muted-foreground",
        "data-ocid": "business.alerts.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl mb-3", children: "🔔" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "No alerts yet." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-1", children: "Your business activity will appear here." })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: filtered.map((alert, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        onClick: () => markRead(alert.id),
        onKeyDown: (e) => {
          if (e.key === "Enter") markRead(alert.id);
        },
        "data-ocid": `business.alerts.item.${idx + 1}`,
        className: `flex gap-3 p-3 rounded-lg border cursor-pointer transition-all hover:bg-muted/50 ${!alert.read ? "border-l-4 border-l-primary border-border bg-primary/5" : "border-border"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl shrink-0 mt-0.5", children: ALERT_ICONS[alert.type] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: alert.title }),
                !alert.read && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary shrink-0" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground shrink-0", children: timeAgo(alert.timestamp) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 line-clamp-2", children: alert.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `text-[10px] px-1.5 py-0.5 rounded-full font-medium ${ALERT_COLORS[alert.type]}`,
                  children: alert.type.charAt(0).toUpperCase() + alert.type.slice(1)
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded-full", children: alert.module }),
              alert.actionLabel && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: "text-[10px] text-primary font-medium hover:underline ml-auto",
                  children: [
                    alert.actionLabel,
                    " →"
                  ]
                }
              ),
              !alert.read && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: (e) => {
                    e.stopPropagation();
                    markRead(alert.id);
                  },
                  className: "text-[10px] text-muted-foreground hover:text-foreground ml-auto",
                  "data-ocid": `business.alerts.save_button.${idx + 1}`,
                  children: "Mark Read"
                }
              )
            ] })
          ] })
        ]
      },
      alert.id
    )) }) })
  ] });
}
function BusinessPage() {
  const [tables, setTables] = reactExports.useState([
    {
      id: 1,
      no: "T1",
      status: "Available",
      service: "+91 98765 00001",
      cook: "C1"
    },
    {
      id: 2,
      no: "T2",
      status: "Occupied",
      service: "+91 98765 00002",
      cook: "C2"
    },
    {
      id: 3,
      no: "T3",
      status: "Ordered",
      service: "+91 98765 00001",
      cook: "C1"
    },
    {
      id: 4,
      no: "T4",
      status: "Served",
      service: "+91 98765 00003",
      cook: "C3"
    }
  ]);
  const [newTableNo, setNewTableNo] = reactExports.useState("");
  const [_rating, _setRating] = reactExports.useState(0);
  const [_hoverRating, _setHoverRating] = reactExports.useState(0);
  const [branches, setBranches] = reactExports.useState(BRANCHES_DEFAULT);
  const [selectedBranch, setSelectedBranch] = reactExports.useState("b1");
  const [addBranchOpen, setAddBranchOpen] = reactExports.useState(false);
  const [newBranch, setNewBranch] = reactExports.useState({
    name: "",
    city: "",
    tables: "5",
    deliveryAreas: "",
    perKmRate: "30",
    cash: true,
    online: true,
    advance: false
  });
  const [dynamicQrGenerated, setDynamicQrGenerated] = reactExports.useState(false);
  const [paymentModes, setPaymentModes] = reactExports.useState({
    cod: true,
    online: true,
    advance: false
  });
  const [deliveryModes, setDeliveryModes] = reactExports.useState({
    takeaway: true,
    homeDelivery: true
  });
  const [orders, setOrders] = reactExports.useState(MOCK_ORDERS);
  const [liveRefresh, setLiveRefresh] = reactExports.useState(true);
  const [unreadAlertCount, setUnreadAlertCount] = reactExports.useState(0);
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
        cook: ""
      }
    ]);
    setNewTableNo("");
    ue.success(`Table ${newTableNo} added`);
  };
  const updateOrderStatus = (id, status) => {
    setOrders((prev) => prev.map((o) => o.id === id ? { ...o, status } : o));
    ue.success(`Order ${id} updated to ${status}`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto p-6 space-y-6", "data-ocid": "business.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-bold text-foreground", children: "Business Dashboard" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(BusinessPrivacyBadge, { storageKey: "ic_business_privacy" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Manage your storefront, tables, orders and payments" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SharePageButton,
        {
          url: `${typeof window !== "undefined" ? window.location.origin : ""}?page=business`,
          label: "Business Page",
          storageKey: "ic_business_privacy",
          "data-ocid": "business.share.button"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "my-businesses", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "flex flex-wrap h-auto gap-1 bg-muted/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "my-businesses",
            "data-ocid": "business.my_businesses.tab",
            children: "My Businesses"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "storefront", "data-ocid": "business.storefront.tab", children: "Storefront" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "tables", "data-ocid": "business.tables.tab", children: "Table Mgmt" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "orders", "data-ocid": "business.orders.tab", children: "Live Orders" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "branches", "data-ocid": "business.branches.tab", children: "Multi-Branch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "payments", "data-ocid": "business.payments.tab", children: "Payment Setup" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "delivery-setup",
            "data-ocid": "business.delivery_setup.tab",
            children: "Delivery Setup"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "commission", "data-ocid": "business.commission.tab", children: "Commission" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "ai-marketing",
            "data-ocid": "business.ai_marketing.tab",
            children: "AI Marketing"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "pos-products",
            "data-ocid": "business.pos_products.tab",
            children: "🏪 Smart POS"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "csv-import", "data-ocid": "business.csv_import.tab", children: "CSV Import" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "discover-claim", "data-ocid": "business.discover.tab", children: "🔍 Discover & Claim" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "biz-modules", "data-ocid": "business.biz_modules.tab", children: "🧩 Modules" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "vendor-orders",
            "data-ocid": "business.vendor_orders.tab",
            children: "📦 Vendor Orders"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "courier-panel",
            "data-ocid": "business.courier_panel.tab",
            children: "🚚 Courier Panel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "delivery-partners",
            "data-ocid": "business.delivery_partners.tab",
            children: "🚚 Delivery Partners"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "hr-payroll", "data-ocid": "business.hr_payroll.tab", children: "👥 HR & Payroll" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: "business-alerts",
            "data-ocid": "business.alerts.tab",
            className: "relative",
            children: [
              "🔔 Business Alerts",
              unreadAlertCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center", children: unreadAlertCount > 9 ? "9+" : unreadAlertCount })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "ondc", "data-ocid": "business.ondc.tab", children: "🌐 ONDC" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "my-businesses", className: "mt-6 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MyBusinessesTab, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "delivery-setup", className: "mt-6 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-display font-bold", children: "Delivery Setup" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Configure delivery zones, radius, and per-km rates for your business" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BusinessDeliverySetup, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "commission", className: "mt-6 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-display font-bold", children: "Commission Configuration" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Set platform commission rates per product category" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BusinessCommissionConfig, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "storefront", className: "mt-6 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StorefrontTab, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "tables", className: "mt-6 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-2xl border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-display", children: "Add New Table" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "Table number (e.g. T5)",
                value: newTableNo,
                onChange: (e) => setNewTableNo(e.target.value),
                onKeyDown: (e) => e.key === "Enter" && addTable(),
                "data-ocid": "business.table.input"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: addTable,
                "data-ocid": "business.table.primary_button",
                children: "Add Table"
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: tables.map((t, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "rounded-2xl border-border",
            "data-ocid": `business.table.item.${idx + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Utensils, { size: 16, className: "text-muted-foreground" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-lg text-foreground", children: t.no })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-xs font-label font-semibold px-2 py-1 rounded-full",
                    style: {
                      background: `${STATUS_COLORS[t.status] ?? "oklch(0.5 0.05 280)"}20`,
                      color: STATUS_COLORS[t.status] ?? "oklch(0.5 0.05 280)"
                    },
                    children: t.status
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] text-muted-foreground", children: "Service Person Phone" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      className: "h-8 text-xs mt-1",
                      value: t.service,
                      onChange: (e) => setTables(
                        (prev) => prev.map(
                          (tb) => tb.id === t.id ? { ...tb, service: e.target.value } : tb
                        )
                      ),
                      placeholder: "+91 ...",
                      "data-ocid": "business.table.service.input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-[10px] text-muted-foreground", children: "Assign Cook No" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      className: "h-8 text-xs mt-1",
                      value: t.cook,
                      onChange: (e) => setTables(
                        (prev) => prev.map(
                          (tb) => tb.id === t.id ? { ...tb, cook: e.target.value } : tb
                        )
                      ),
                      placeholder: "C1, C2 ...",
                      "data-ocid": "business.table.cook.input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TableQRButton,
                  {
                    tableNo: t.no,
                    businessId: "my-business",
                    businessName: "My Business"
                  }
                ) })
              ] })
            ] })
          },
          t.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "orders", className: "mt-6 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
          {
            label: "Total Today",
            val: orders.length,
            color: "oklch(0.55 0.22 280)"
          },
          {
            label: "Pending",
            val: orders.filter((o) => o.status === "New").length,
            color: "oklch(0.72 0.19 85)"
          },
          {
            label: "In Kitchen",
            val: orders.filter((o) => o.status === "Cooking").length,
            color: "oklch(0.58 0.22 25)"
          },
          {
            label: "Served",
            val: orders.filter((o) => o.status === "Served").length,
            color: "oklch(0.52 0.14 155)"
          }
        ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "rounded-xl border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: s.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-2xl font-display font-bold mt-1",
              style: { color: s.color },
              children: s.val
            }
          )
        ] }) }, s.label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2.5 w-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                style: { background: "oklch(0.52 0.14 155)" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "relative inline-flex rounded-full h-2.5 w-2.5",
                style: { background: "oklch(0.52 0.14 155)" }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-xs font-label font-semibold",
              style: { color: "oklch(0.52 0.14 155)" },
              children: "LIVE"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Switch,
            {
              checked: liveRefresh,
              onCheckedChange: setLiveRefresh,
              "data-ocid": "business.live.switch"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Auto-refresh" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-2xl border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left text-xs font-label font-semibold text-muted-foreground", children: "Order ID" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left text-xs font-label font-semibold text-muted-foreground", children: "Table" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left text-xs font-label font-semibold text-muted-foreground", children: "Items" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left text-xs font-label font-semibold text-muted-foreground", children: "Time" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left text-xs font-label font-semibold text-muted-foreground", children: "Cook" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left text-xs font-label font-semibold text-muted-foreground", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left text-xs font-label font-semibold text-muted-foreground", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: orders.map((order, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "border-t border-border hover:bg-muted/20",
              "data-ocid": `business.order.row.${idx + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs font-mono text-muted-foreground", children: order.id }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3 text-xs font-bold text-foreground", children: [
                  "T",
                  order.table
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs text-foreground max-w-[160px] truncate", children: order.items }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs text-muted-foreground", children: order.time }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChefHat, { size: 12, className: "text-muted-foreground" }),
                  order.cook
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-[11px] font-label font-semibold px-2 py-1 rounded-full",
                    style: {
                      background: `${STATUS_COLORS[order.status] ?? "oklch(0.5 0.05 280)"}20`,
                      color: STATUS_COLORS[order.status] ?? "oklch(0.5 0.05 280)"
                    },
                    children: order.status
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                  order.status === "New" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      className: "h-6 text-[10px] px-2",
                      onClick: () => updateOrderStatus(order.id, "Cooking"),
                      "data-ocid": `business.order.cooking.button.${idx + 1}`,
                      children: "Start"
                    }
                  ),
                  order.status === "Cooking" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      className: "h-6 text-[10px] px-2",
                      onClick: () => updateOrderStatus(order.id, "Ready"),
                      "data-ocid": `business.order.ready.button.${idx + 1}`,
                      children: "Ready"
                    }
                  ),
                  order.status === "Ready" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      className: "h-6 text-[10px] px-2",
                      onClick: () => updateOrderStatus(order.id, "Served"),
                      "data-ocid": `business.order.serve.button.${idx + 1}`,
                      children: "Served"
                    }
                  )
                ] }) })
              ]
            },
            order.id
          )) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "branches", className: "mt-6 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 items-center", children: [
          branches.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setSelectedBranch(b.id),
              className: `px-4 py-2 rounded-xl text-sm font-label font-medium border transition-colors ${selectedBranch === b.id ? "border-primary text-primary bg-primary/10" : "border-border text-muted-foreground hover:bg-muted/30"}`,
              "data-ocid": "business.branch.button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(GitBranch, { size: 12, className: "inline mr-1.5" }),
                b.name
              ]
            },
            b.id
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              onClick: () => setAddBranchOpen(true),
              "data-ocid": "business.add_branch_button",
              children: "+ Add Branch"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: addBranchOpen, onOpenChange: setAddBranchOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { "data-ocid": "business.add_branch.dialog", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Add New Branch" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Branch Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  placeholder: "e.g. Juhu, Mumbai",
                  value: newBranch.name,
                  onChange: (e) => setNewBranch((p) => ({ ...p, name: e.target.value })),
                  "data-ocid": "business.branch_name.input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "City" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  placeholder: "City",
                  value: newBranch.city,
                  onChange: (e) => setNewBranch((p) => ({ ...p, city: e.target.value })),
                  "data-ocid": "business.branch_city.input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Number of Tables" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  min: "1",
                  value: newBranch.tables,
                  onChange: (e) => setNewBranch((p) => ({ ...p, tables: e.target.value })),
                  "data-ocid": "business.branch_tables.input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Delivery Pincodes (comma separated)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  placeholder: "110001, 110002",
                  value: newBranch.deliveryAreas,
                  onChange: (e) => setNewBranch((p) => ({
                    ...p,
                    deliveryAreas: e.target.value
                  })),
                  "data-ocid": "business.branch_delivery.input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Rate per km (₹)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  min: "0",
                  value: newBranch.perKmRate,
                  onChange: (e) => setNewBranch((p) => ({ ...p, perKmRate: e.target.value }))
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Payment Modes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-1.5 text-xs cursor-pointer", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: newBranch.cash,
                      onChange: (e) => setNewBranch((p) => ({
                        ...p,
                        cash: e.target.checked
                      }))
                    }
                  ),
                  "Cash"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-1.5 text-xs cursor-pointer", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: newBranch.online,
                      onChange: (e) => setNewBranch((p) => ({
                        ...p,
                        online: e.target.checked
                      }))
                    }
                  ),
                  "Online"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-1.5 text-xs cursor-pointer", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: newBranch.advance,
                      onChange: (e) => setNewBranch((p) => ({
                        ...p,
                        advance: e.target.checked
                      }))
                    }
                  ),
                  "Advance"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                onClick: () => setAddBranchOpen(false),
                "data-ocid": "business.add_branch.cancel_button",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: () => {
                  if (!newBranch.name.trim()) return;
                  const id = `b${Date.now()}`;
                  setBranches((prev) => [
                    ...prev,
                    {
                      id,
                      name: newBranch.city ? `${newBranch.name}, ${newBranch.city}` : newBranch.name,
                      tables: Number(newBranch.tables) || 5,
                      activeOrders: 0,
                      revenue: 0,
                      paymentModes: {
                        cash: newBranch.cash,
                        online: newBranch.online,
                        advance: newBranch.advance
                      },
                      deliveryAreas: newBranch.deliveryAreas,
                      perKmRate: Number(newBranch.perKmRate) || 30
                    }
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
                    advance: false
                  });
                },
                "data-ocid": "business.add_branch.confirm_button",
                children: "Add Branch"
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "rounded-2xl border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Total Tables" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-display font-bold text-foreground mt-1", children: branch.tables })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "rounded-2xl border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Active Orders" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-3xl font-display font-bold mt-1",
                style: { color: "oklch(0.58 0.22 25)" },
                children: branch.activeOrders
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "rounded-2xl border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Revenue Today" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "p",
              {
                className: "text-3xl font-display font-bold mt-1",
                style: { color: "oklch(0.52 0.14 155)" },
                children: [
                  "₹",
                  branch.revenue.toLocaleString()
                ]
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-2xl border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-display flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 15 }),
            "All Branches Overview"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-2 text-left text-xs font-label text-muted-foreground", children: "Branch" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-2 text-right text-xs font-label text-muted-foreground", children: "Tables" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-2 text-right text-xs font-label text-muted-foreground", children: "Active Orders" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-2 text-right text-xs font-label text-muted-foreground", children: "Revenue Today" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: branches.map((b, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "border-t border-border",
                "data-ocid": `business.branch.row.${idx + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 text-xs font-semibold text-foreground", children: b.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 text-xs text-right text-muted-foreground", children: b.tables }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: "py-2 text-xs text-right",
                      style: { color: "oklch(0.58 0.22 25)" },
                      children: b.activeOrders
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "td",
                    {
                      className: "py-2 text-xs text-right font-semibold",
                      style: { color: "oklch(0.52 0.14 155)" },
                      children: [
                        "₹",
                        b.revenue.toLocaleString()
                      ]
                    }
                  )
                ]
              },
              b.id
            )) })
          ] }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "payments", className: "mt-6 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-2xl border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-display flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { size: 15 }),
            " Static UPI QR"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "label",
            {
              className: "flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-8 text-center cursor-pointer hover:bg-muted/20 transition-colors",
              style: { borderColor: "oklch(0.65 0.25 335 / 0.4)" },
              "data-ocid": "business.qr.dropzone",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  QrCode,
                  {
                    size: 32,
                    className: "mx-auto mb-3 text-muted-foreground"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground", children: "Upload UPI QR Code" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "JPG or PNG · Max 2MB" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "file",
                    accept: "image/*",
                    className: "hidden",
                    "data-ocid": "business.qr.upload_button"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-3 px-3 py-1.5 text-xs font-label rounded-lg border border-border hover:bg-muted/30 transition-colors", children: "Choose File" })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-2xl border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-display flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { size: 15 }),
            " Dynamic QR (Bank Details)"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Account Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    placeholder: "Spice Garden Pvt Ltd",
                    "data-ocid": "business.bank.account.input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Account Number" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    placeholder: "XXXXXXXXXX",
                    "data-ocid": "business.bank.number.input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "IFSC Code" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    placeholder: "HDFC0001234",
                    "data-ocid": "business.bank.ifsc.input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "UPI ID" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    placeholder: "spicegarden@hdfc",
                    "data-ocid": "business.bank.upi.input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Bank Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    placeholder: "HDFC Bank",
                    "data-ocid": "business.bank.name.input"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: () => setDynamicQrGenerated(true),
                "data-ocid": "business.qr.generate.primary_button",
                children: "Generate QR"
              }
            ),
            dynamicQrGenerated && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-3 p-4 rounded-xl",
                style: { background: "oklch(0.52 0.14 155 / 0.1)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CircleCheck,
                    {
                      size: 20,
                      style: { color: "oklch(0.52 0.14 155)" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground", children: "QR Generated Successfully" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Dynamic QR will appear at checkout" })
                  ] })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-2xl border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-display", children: "Payment Modes" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-3", children: [
              { key: "cod", label: "Cash on Delivery" },
              { key: "online", label: "Online Payment (QR)" },
              { key: "advance", label: "Advance Payment" }
            ].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center justify-between",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-label", children: m.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Switch,
                    {
                      checked: paymentModes[m.key],
                      onCheckedChange: (v) => setPaymentModes((p) => ({ ...p, [m.key]: v })),
                      "data-ocid": `business.payment.${m.key}.switch`
                    }
                  )
                ]
              },
              m.key
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-2xl border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-display", children: "Delivery Modes" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-label", children: "Takeaway" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Switch,
                  {
                    checked: deliveryModes.takeaway,
                    onCheckedChange: (v) => setDeliveryModes((p) => ({ ...p, takeaway: v })),
                    "data-ocid": "business.delivery.takeaway.switch"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-label", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { size: 14, className: "text-muted-foreground" }),
                  " Home Delivery"
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Switch,
                  {
                    checked: deliveryModes.homeDelivery,
                    onCheckedChange: (v) => setDeliveryModes((p) => ({ ...p, homeDelivery: v })),
                    "data-ocid": "business.delivery.home.switch"
                  }
                )
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-2xl border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-display", children: "Merchant Fee Configuration" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Platform Fee (%)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  defaultValue: "2",
                  min: "0",
                  max: "10",
                  "data-ocid": "business.fee.platform.input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Service Charge (%)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  defaultValue: "5",
                  min: "0",
                  max: "20",
                  "data-ocid": "business.fee.service.input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: () => ue.success("Fee configuration saved"),
                "data-ocid": "business.fee.save_button",
                children: "Save Configuration"
              }
            ) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "ai-marketing", className: "mt-6 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BusinessAIMarketing, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "pos-products", className: "mt-6 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SmartPOSPanel, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "csv-import", className: "mt-6 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BusinessCSVImport, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "discover-claim", className: "mt-6 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DiscoverClaimTab, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "biz-modules", className: "mt-6 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BizModulesTab, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "vendor-orders", className: "mt-6 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(VendorOrdersPanel, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "courier-panel", className: "mt-6 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CourierDispatchBusinessPanel, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "delivery-partners", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DeliveryPartnersPanel, { mode: "business" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "hr-payroll", className: "mt-6 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HRPayrollTab, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "business-alerts", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BusinessAlertsTab, { onUnreadChange: setUnreadAlertCount }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "ondc", className: "mt-6 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ONDCVendorPanel, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-center text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      ". Built with love using",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "underline hover:text-foreground transition-colors",
          children: "caffeine.ai"
        }
      )
    ] })
  ] });
}
function TrustScoreBadge({
  biz
}) {
  let score = 0;
  if (biz.phone) score += 10;
  if (biz.location) score += 10;
  score += 20;
  score += 30;
  score += 10;
  score += 20;
  let label = "";
  let cls = "";
  if (score >= 80) {
    label = "✅ Verified & Trusted";
    cls = "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/30";
  } else if (score >= 60) {
    label = "🔵 Generally Trusted";
    cls = "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/30";
  } else if (score >= 40) {
    label = "⚠️ Use Caution";
    cls = "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/30";
  } else {
    label = "🔴 Risky";
    cls = "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/30";
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${cls}`,
      title: `Trust Score: ${score}/100`,
      children: label
    }
  );
}
const BARCODE_WIDTHS = [
  1,
  2,
  1,
  3,
  2,
  1,
  1,
  2,
  3,
  1,
  2,
  1,
  1,
  3,
  1,
  2,
  1,
  2,
  3,
  1,
  1,
  2,
  1,
  1,
  3,
  2,
  1,
  1,
  2,
  3,
  1,
  2,
  1,
  1,
  3,
  1,
  2,
  2,
  1,
  3
];
const BARCODE_HEIGHTS = [
  60,
  100,
  80,
  90,
  70,
  100,
  85,
  60,
  95,
  75,
  100,
  65,
  90,
  80,
  100,
  70,
  85,
  100,
  60,
  90,
  75,
  100,
  80,
  65,
  90,
  100,
  70,
  85,
  95,
  60,
  100,
  75,
  85,
  100,
  60,
  90,
  80,
  70,
  95,
  100
];
function BusinessPrivacyBadge({ storageKey }) {
  const privacy = localStorage.getItem(storageKey) || "Private";
  const colors = {
    Public: "bg-green-500/15 text-green-600 border-green-500/30",
    Restricted: "bg-amber-500/15 text-amber-600 border-amber-500/30",
    Private: "bg-muted text-muted-foreground border-border"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: `text-[10px] font-label gap-1 ${colors[privacy]}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 9 }),
    privacy
  ] });
}
function SharePageButton({
  url,
  label,
  storageKey
}) {
  const [privacy, setPrivacy] = reactExports.useState(
    () => localStorage.getItem(storageKey) || "Private"
  );
  const [copied, setCopied] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const handlePrivacyChange = (val) => {
    setPrivacy(val);
    localStorage.setItem(storageKey, val);
  };
  const copyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        variant: "outline",
        size: "sm",
        className: "gap-2 font-label",
        "data-ocid": "business.share.button",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { size: 14 }),
          "Share"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      PopoverContent,
      {
        className: "w-80 p-4 space-y-4",
        align: "end",
        "data-ocid": "business.share.popover",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-foreground", children: [
              "Share ",
              label
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
              "Share this link to let others view your ",
              label
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Page URL" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: url, readOnly: true, className: "text-xs h-8 flex-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "h-8 px-2",
                  onClick: copyLink,
                  children: copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 13, className: "text-green-500" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 13 })
                }
              )
            ] }),
            copied && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-green-600", children: "Copied!" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Visibility" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              RadioGroup,
              {
                value: privacy,
                onValueChange: (v) => handlePrivacyChange(v),
                className: "space-y-1",
                children: ["Public", "Restricted", "Private"].map(
                  (opt) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: opt, id: `biz-privacy-${opt}` }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Label,
                      {
                        htmlFor: `biz-privacy-${opt}`,
                        className: "text-xs cursor-pointer",
                        children: opt === "Public" ? "🌍 Public — anyone with the link can view" : opt === "Restricted" ? "🔒 Restricted — only approved members" : "🔐 Private — only you"
                      }
                    )
                  ] }, opt)
                )
              }
            )
          ] })
        ]
      }
    )
  ] });
}
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
  "Other"
];
const VARIANT_PRESETS = {
  Fashion: ["XS", "S", "M", "L", "XL", "XXL"],
  Electronics: ["64GB", "128GB", "256GB"],
  "Food & Beverages": ["Small", "Medium", "Large"],
  Healthcare: ["30 Tabs", "60 Tabs", "90 Tabs"],
  "Home Services": ["Basic", "Standard", "Premium"]
};
function POSProductsTab() {
  const [products, setProducts] = reactExports.useState(() => getGlobalProducts());
  const [showForm, setShowForm] = reactExports.useState(null);
  const [form, setForm] = reactExports.useState({
    name: "",
    category: "Food & Beverages",
    price: "",
    stock: "",
    description: "",
    videoUrl: ""
  });
  const [imagePreview, setImagePreview] = reactExports.useState("");
  const [variants, setVariants] = reactExports.useState([]);
  reactExports.useState(() => {
    const handler = () => setProducts(getGlobalProducts());
    window.addEventListener("globalProductsUpdated", handler);
    return () => window.removeEventListener("globalProductsUpdated", handler);
  });
  const detectVariants = (category) => {
    const presets = VARIANT_PRESETS[category] || [];
    setVariants(
      presets.map((label) => ({ label, price: form.price, stock: "10" }))
    );
  };
  const handleImageUpload = (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      var _a2;
      setImagePreview((_a2 = ev.target) == null ? void 0 : _a2.result);
    };
    reader.readAsDataURL(file);
  };
  const handleSave = () => {
    if (!form.name.trim() || !form.price) {
      ue.error("Name and price are required");
      return;
    }
    addGlobalProduct({
      name: form.name,
      description: form.description,
      price: Number.parseFloat(form.price) || 0,
      category: form.category,
      module: "POS",
      imageUrl: imagePreview || void 0,
      videoUrl: form.videoUrl || void 0,
      variantDetails: variants.map((v) => ({
        label: v.label,
        price: Number.parseFloat(v.price) || Number.parseFloat(form.price) || 0,
        stock: Number.parseInt(v.stock) || 0
      })),
      isService: showForm === "service",
      status: "active"
    });
    ue.success(
      `${showForm === "service" ? "Service" : "Product"} "${form.name}" added to Shop`
    );
    setForm({
      name: "",
      category: "Food & Beverages",
      price: "",
      stock: "",
      description: "",
      videoUrl: ""
    });
    setImagePreview("");
    setVariants([]);
    setShowForm(null);
    setProducts(getGlobalProducts());
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          className: "gap-1.5 font-label",
          onClick: () => setShowForm("product"),
          "data-ocid": "pos.add_product.button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 }),
            " Add Product"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          variant: "outline",
          className: "gap-1.5 font-label",
          onClick: () => setShowForm("service"),
          "data-ocid": "pos.add_service.button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 }),
            " Add Service"
          ]
        }
      )
    ] }),
    showForm && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-xl border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm", children: showForm === "product" ? "New Product" : "New Service" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Name *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "Product name",
                value: form.name,
                onChange: (e) => setForm((p) => ({ ...p, name: e.target.value })),
                "data-ocid": "pos.product.name_input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Category" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: form.category,
                onValueChange: (v) => {
                  setForm((p) => ({ ...p, category: v }));
                  detectVariants(v);
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      className: "text-xs h-8",
                      "data-ocid": "pos.product.category_select",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: POS_CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, className: "text-xs", children: c }, c)) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Price (₹) *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "number",
                placeholder: "0",
                value: form.price,
                onChange: (e) => setForm((p) => ({ ...p, price: e.target.value })),
                "data-ocid": "pos.product.price_input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Description" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                placeholder: "Product description...",
                value: form.description,
                onChange: (e) => setForm((p) => ({ ...p, description: e.target.value })),
                className: "text-xs h-20 resize-none",
                "data-ocid": "pos.product.description_input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Image" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "file",
                  accept: "image/*",
                  id: "pos-img-upload",
                  className: "hidden",
                  onChange: handleImageUpload
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  size: "sm",
                  className: "gap-1.5 text-xs h-8",
                  onClick: () => {
                    var _a;
                    return (_a = document.getElementById("pos-img-upload")) == null ? void 0 : _a.click();
                  },
                  "data-ocid": "pos.product.upload_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 12 }),
                    " Upload"
                  ]
                }
              ),
              imagePreview && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: imagePreview,
                  alt: "preview",
                  className: "h-8 w-8 rounded object-cover"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Video Link" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "YouTube / Vimeo URL",
                value: form.videoUrl,
                onChange: (e) => setForm((p) => ({ ...p, videoUrl: e.target.value })),
                className: "text-xs h-8"
              }
            )
          ] })
        ] }),
        variants.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Variants (auto-detected)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "ghost",
                size: "sm",
                className: "h-6 text-xs",
                onClick: () => setVariants((v) => [
                  ...v,
                  { label: "", price: form.price, stock: "10" }
                ]),
                children: "+ Add"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: variants.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex gap-2 items-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: v.label,
                    onChange: (e) => setVariants(
                      (prev) => prev.map(
                        (x, j) => j === i ? { ...x, label: e.target.value } : x
                      )
                    ),
                    placeholder: "Label",
                    className: "text-xs h-7 flex-1"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: v.price,
                    onChange: (e) => setVariants(
                      (prev) => prev.map(
                        (x, j) => j === i ? { ...x, price: e.target.value } : x
                      )
                    ),
                    placeholder: "₹",
                    type: "number",
                    className: "text-xs h-7 w-20"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: v.stock,
                    onChange: (e) => setVariants(
                      (prev) => prev.map(
                        (x, j) => j === i ? { ...x, stock: e.target.value } : x
                      )
                    ),
                    placeholder: "Qty",
                    type: "number",
                    className: "text-xs h-7 w-16"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    variant: "ghost",
                    size: "sm",
                    className: "h-7 w-7 p-0 text-destructive",
                    onClick: () => setVariants((prev) => prev.filter((_, j) => j !== i)),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12 })
                  }
                )
              ]
            },
            `variant-${i}-${v.label}`
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              className: "font-label",
              onClick: handleSave,
              "data-ocid": "pos.product.save_button",
              children: "Save & Add to Shop"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              onClick: () => {
                setShowForm(null);
                setImagePreview("");
                setVariants([]);
              },
              "data-ocid": "pos.product.cancel_button",
              children: "Cancel"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-medium text-muted-foreground", children: [
        products.length,
        " products in your store"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3", children: products.slice(0, 12).map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: "rounded-xl border-border",
          "data-ocid": `pos.products.item.${i + 1}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3 flex gap-3", children: [
            p.imageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: p.imageUrl,
                alt: p.name,
                className: "w-12 h-12 rounded-lg object-cover flex-shrink-0"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 16, className: "text-muted-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium truncate", children: p.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: p.category }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-primary mt-0.5", children: [
                "₹",
                p.price
              ] }),
              p.isService && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-[9px] mt-1 bg-violet-500/15 text-violet-600 border-violet-500/30", children: "Service" })
            ] })
          ] })
        },
        p.id
      )) }),
      products.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "text-center py-8 text-muted-foreground text-sm",
          "data-ocid": "pos.products.empty_state",
          children: 'No products yet. Click "Add Product" to get started.'
        }
      )
    ] })
  ] });
}
function SmartPOSPanel() {
  const allProducts = getGlobalProducts();
  const [search, setSearch] = reactExports.useState("");
  const [cart, setCart] = reactExports.useState([]);
  const [taxRate, setTaxRate] = reactExports.useState(18);
  const [gstEnabled, setGstEnabled] = reactExports.useState(true);
  const [invoiceCustomer, setInvoiceCustomer] = reactExports.useState("");
  const [invoices, setInvoices] = reactExports.useState(
    () => JSON.parse(localStorage.getItem("ic_pos_invoices") || "[]")
  );
  const [ledger, setLedger] = reactExports.useState(
    () => JSON.parse(localStorage.getItem("ic_pos_ledger") || "[]")
  );
  const [ledgerForm, setLedgerForm] = reactExports.useState({
    description: "",
    type: "Cr",
    amount: ""
  });
  const [bariKhata, setBariKhata] = reactExports.useState(
    () => JSON.parse(localStorage.getItem("ic_pos_bari_khata") || "[]")
  );
  const [bkForm, setBkForm] = reactExports.useState({ customer: "", phone: "", amount: "" });
  const [bkPayForm, setBkPayForm] = reactExports.useState({});
  const [storeActive, setStoreActive] = reactExports.useState(true);
  const filtered = allProducts.filter(
    (p) => p.name.toLowerCase().includes(search.toLowerCase())
  );
  const addToCart = (p) => {
    setCart((prev) => {
      const ex = prev.find((c) => c.id === String(p.id));
      if (ex)
        return prev.map(
          (c) => c.id === String(p.id) ? { ...c, qty: c.qty + 1 } : c
        );
      return [
        ...prev,
        { id: String(p.id), name: p.name, qty: 1, price: p.price, discount: 0 }
      ];
    });
  };
  const subtotal = cart.reduce(
    (s, c) => s + c.price * c.qty * (1 - c.discount / 100),
    0
  );
  const tax = gstEnabled ? subtotal * taxRate / 100 : 0;
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
    <p style="text-align:center;font-size:10px;margin:0">${(/* @__PURE__ */ new Date()).toLocaleString()}</p>
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
      ue.error("Cart is empty");
      return;
    }
    const inv = {
      id: `INV-${Date.now()}`,
      customer: invoiceCustomer || "Walk-in Customer",
      date: (/* @__PURE__ */ new Date()).toLocaleDateString(),
      amount: grand,
      status: "Unpaid",
      items: [...cart]
    };
    const updated = [inv, ...invoices];
    setInvoices(updated);
    localStorage.setItem("ic_pos_invoices", JSON.stringify(updated));
    setCart([]);
    ue.success(`Invoice ${inv.id} saved`);
  };
  const addLedgerEntry = () => {
    if (!ledgerForm.description || !ledgerForm.amount) {
      ue.error("Fill all fields");
      return;
    }
    const entry = {
      id: `L${Date.now()}`,
      date: (/* @__PURE__ */ new Date()).toLocaleDateString(),
      description: ledgerForm.description,
      type: ledgerForm.type,
      amount: Number(ledgerForm.amount)
    };
    const updated = [entry, ...ledger];
    setLedger(updated);
    localStorage.setItem("ic_pos_ledger", JSON.stringify(updated));
    setLedgerForm({ description: "", type: "Cr", amount: "" });
    ue.success("Entry added");
  };
  const withBalance = [];
  let runBalance = 0;
  for (const e of [...ledger].reverse()) {
    runBalance += e.type === "Cr" ? e.amount : -e.amount;
    withBalance.push({ ...e, balance: runBalance });
  }
  withBalance.reverse();
  const addBariKhata = () => {
    if (!bkForm.customer || !bkForm.amount) {
      ue.error("Fill fields");
      return;
    }
    const entry = {
      id: `BK${Date.now()}`,
      customer: bkForm.customer,
      phone: bkForm.phone,
      creditGiven: Number(bkForm.amount),
      paid: 0
    };
    const updated = [entry, ...bariKhata];
    setBariKhata(updated);
    localStorage.setItem("ic_pos_bari_khata", JSON.stringify(updated));
    setBkForm({ customer: "", phone: "", amount: "" });
    ue.success("Credit entry added");
  };
  const recordPayment = (id) => {
    const amt = Number(bkPayForm[id] || 0);
    if (!amt) {
      ue.error("Enter amount");
      return;
    }
    const updated = bariKhata.map(
      (e) => e.id === id ? { ...e, paid: Math.min(e.paid + amt, e.creditGiven) } : e
    );
    setBariKhata(updated);
    localStorage.setItem("ic_pos_bari_khata", JSON.stringify(updated));
    setBkPayForm((p) => ({ ...p, [id]: "" }));
    ue.success("Payment recorded");
  };
  const exportCSV = () => {
    const rows = [["Date", "Description", "Dr/Cr", "Amount", "Balance"]];
    for (const e of withBalance)
      rows.push([
        e.date,
        e.description,
        e.type,
        String(e.amount),
        String(e.balance)
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
  const totalRevenue = invoices.reduce(
    (s, i) => s + (i.status !== "Unpaid" ? i.amount : 0),
    0
  );
  const totalExpenses = ledger.filter((e) => e.type === "Dr").reduce((s, e) => s + e.amount, 0);
  const netProfit = totalRevenue - totalExpenses;
  const last7 = Array.from({ length: 7 }, (_, i) => {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() - (6 - i));
    return {
      day: d.toLocaleDateString("en", { weekday: "short" }),
      amount: Math.floor(Math.random() * 8e3 + 1e3)
    };
  });
  const maxSale = Math.max(...last7.map((d) => d.amount));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-display font-bold text-foreground", children: "🏪 Smart POS" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Smart billing, invoices, ledger, bari khata, barcodes, reports & online store" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "products", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "flex flex-wrap gap-1 h-auto mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "products",
            className: "text-xs",
            "data-ocid": "pos.products.tab",
            children: "📦 Products"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "billing",
            className: "text-xs",
            "data-ocid": "pos.billing.tab",
            children: "💳 Billing"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "invoices",
            className: "text-xs",
            "data-ocid": "pos.invoices.tab",
            children: "📄 Invoices"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "ledger",
            className: "text-xs",
            "data-ocid": "pos.ledger.tab",
            children: "📒 Ledger"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "bari-khata",
            className: "text-xs",
            "data-ocid": "pos.bari_khata.tab",
            children: "📖 Bari Khata"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "barcodes",
            className: "text-xs",
            "data-ocid": "pos.barcodes.tab",
            children: "🔲 Barcodes"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "reports",
            className: "text-xs",
            "data-ocid": "pos.reports.tab",
            children: "📊 Reports"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "online-store",
            className: "text-xs",
            "data-ocid": "pos.online_store.tab",
            children: "🌐 Online Store"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "customers",
            className: "text-xs",
            "data-ocid": "pos.customers.tab",
            children: "👥 Customers"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "products", className: "mt-0 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(POSProductsTab, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "billing", className: "mt-0 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-xl border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm", children: "Product Search" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "Search products...",
                value: search,
                onChange: (e) => setSearch(e.target.value),
                "data-ocid": "pos.billing.search_input"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 max-h-48 overflow-y-auto", children: [
              filtered.slice(0, 20).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: "flex items-center justify-between w-full p-2 rounded-lg hover:bg-muted/50 cursor-pointer",
                  onClick: () => addToCart(p),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: p.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-primary", children: [
                      "₹",
                      p.price
                    ] })
                  ]
                },
                p.id
              )),
              filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center py-4", children: "No products. Add via Family Tree → Business" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-xl border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm", children: "Cart" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
            cart.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center py-6", children: "Cart is empty" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: cart.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-2 text-xs",
                "data-ocid": `pos.cart.item.${idx + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 truncate", children: item.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "number",
                      min: 1,
                      value: item.qty,
                      className: "w-12 h-7 text-xs px-1",
                      onChange: (e) => setCart(
                        (p) => p.map(
                          (c) => c.id === item.id ? { ...c, qty: Number(e.target.value) } : c
                        )
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "number",
                      min: 0,
                      max: 100,
                      value: item.discount,
                      className: "w-14 h-7 text-xs px-1",
                      placeholder: "Disc%",
                      onChange: (e) => setCart(
                        (p) => p.map(
                          (c) => c.id === item.id ? { ...c, discount: Number(e.target.value) } : c
                        )
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "w-16 text-right font-semibold", children: [
                    "₹",
                    (item.price * item.qty * (1 - item.discount / 100)).toFixed(0)
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setCart((p) => p.filter((c) => c.id !== item.id)),
                      className: "text-destructive hover:opacity-70",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12 })
                    }
                  )
                ]
              },
              item.id
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Subtotal" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "₹",
                  subtotal.toFixed(2)
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Switch,
                    {
                      checked: gstEnabled,
                      onCheckedChange: setGstEnabled,
                      className: "scale-75"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "GST" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "number",
                      value: taxRate,
                      onChange: (e) => setTaxRate(Number(e.target.value)),
                      className: "w-12 h-6 text-xs px-1"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "%" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "₹",
                  tax.toFixed(2)
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-bold text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Grand Total" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary", children: [
                  "₹",
                  grand.toFixed(2)
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "Customer name (optional)",
                value: invoiceCustomer,
                onChange: (e) => setInvoiceCustomer(e.target.value),
                className: "text-xs h-8",
                "data-ocid": "pos.billing.input"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  className: "flex-1",
                  onClick: printReceipt,
                  "data-ocid": "pos.billing.primary_button",
                  children: "🖨️ Print Receipt"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "flex-1",
                  onClick: saveInvoice,
                  "data-ocid": "pos.billing.save_button",
                  children: "💾 Save Invoice"
                }
              )
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "invoices", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-xl border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm", children: [
          "Saved Invoices (",
          invoices.length,
          ")"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: invoices.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center py-8", children: "No invoices yet. Create from Billing tab." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 pr-4", children: "Invoice #" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 pr-4", children: "Customer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 pr-4", children: "Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-2 pr-4", children: "Amount" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 pr-4", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: invoices.map((inv, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "border-b border-border/30 hover:bg-muted/30",
              "data-ocid": `pos.invoice.item.${idx + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4 font-mono", children: inv.id }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: inv.customer }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4", children: inv.date }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 pr-4 text-right font-semibold", children: [
                  "₹",
                  inv.amount.toFixed(2)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    className: inv.status === "Paid" ? "bg-green-500/15 text-green-600 border-green-500/30" : inv.status === "Partial" ? "bg-yellow-500/15 text-yellow-600 border-yellow-500/30" : "bg-red-500/15 text-red-600 border-red-500/30",
                    children: inv.status
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 justify-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      className: "h-6 text-[10px] px-2",
                      onClick: () => {
                        const updated = invoices.map(
                          (i) => i.id === inv.id ? { ...i, status: "Paid" } : i
                        );
                        setInvoices(updated);
                        localStorage.setItem(
                          "ic_pos_invoices",
                          JSON.stringify(updated)
                        );
                        ue.success("Marked as Paid");
                      },
                      "data-ocid": `pos.invoice.edit_button.${idx + 1}`,
                      children: "Mark Paid"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      className: "h-6 text-[10px] px-2",
                      onClick: () => window.print(),
                      "data-ocid": `pos.invoice.secondary_button.${idx + 1}`,
                      children: "🖨️"
                    }
                  )
                ] }) })
              ]
            },
            inv.id
          )) })
        ] }) }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "ledger", className: "mt-0 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-xl border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm", children: "Add Ledger Entry" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-4 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "Description",
                value: ledgerForm.description,
                onChange: (e) => setLedgerForm((p) => ({
                  ...p,
                  description: e.target.value
                })),
                className: "sm:col-span-2 text-xs",
                "data-ocid": "pos.ledger.input"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: ledgerForm.type,
                onValueChange: (v) => setLedgerForm((p) => ({ ...p, type: v })),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      className: "text-xs h-9",
                      "data-ocid": "pos.ledger.select",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Cr", children: "Credit (Cr)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "Dr", children: "Debit (Dr)" })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  placeholder: "Amount",
                  value: ledgerForm.amount,
                  onChange: (e) => setLedgerForm((p) => ({ ...p, amount: e.target.value })),
                  className: "text-xs"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  onClick: addLedgerEntry,
                  "data-ocid": "pos.ledger.primary_button",
                  children: "Add"
                }
              )
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-xl border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm", children: "Ledger" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 pr-3", children: "Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 pr-3", children: "Description" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 pr-3", children: "Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-2 pr-3", children: "Amount" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-2", children: "Balance" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
              withBalance.map((e, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "tr",
                {
                  className: "border-b border-border/30 hover:bg-muted/30",
                  "data-ocid": `pos.ledger.item.${idx + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-3 text-muted-foreground", children: e.date }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-3", children: e.description }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        className: e.type === "Cr" ? "bg-green-500/15 text-green-600 border-green-500/30" : "bg-red-500/15 text-red-600 border-red-500/30",
                        children: e.type
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 pr-3 text-right", children: [
                      "₹",
                      e.amount.toLocaleString()
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "td",
                      {
                        className: `py-2 text-right font-semibold ${e.balance >= 0 ? "text-green-600" : "text-red-600"}`,
                        children: [
                          "₹",
                          e.balance.toLocaleString()
                        ]
                      }
                    )
                  ]
                },
                e.id
              )),
              withBalance.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "td",
                {
                  colSpan: 5,
                  className: "text-center py-8 text-muted-foreground",
                  children: "No entries yet"
                }
              ) })
            ] })
          ] }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "bari-khata", className: "mt-0 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-xl border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm", children: "Add Credit (Udhaar)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-4 gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "Customer name",
                value: bkForm.customer,
                onChange: (e) => setBkForm((p) => ({ ...p, customer: e.target.value })),
                className: "text-xs",
                "data-ocid": "pos.bari_khata.input"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "Phone",
                value: bkForm.phone,
                onChange: (e) => setBkForm((p) => ({ ...p, phone: e.target.value })),
                className: "text-xs"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "number",
                placeholder: "Credit amount ₹",
                value: bkForm.amount,
                onChange: (e) => setBkForm((p) => ({ ...p, amount: e.target.value })),
                className: "text-xs"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                onClick: addBariKhata,
                "data-ocid": "pos.bari_khata.primary_button",
                children: "Add Entry"
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: bariKhata.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-xs text-center text-muted-foreground py-8 border border-dashed border-border rounded-xl",
            "data-ocid": "pos.bari_khata.empty_state",
            children: "No credit entries. Add a customer's udhaar above."
          }
        ) : bariKhata.map((e, idx) => {
          const outstanding = e.creditGiven - e.paid;
          const status = outstanding === 0 ? "settled" : e.paid > 0 ? "partial" : "overdue";
          const borderCls = status === "settled" ? "border-green-500/40" : status === "partial" ? "border-yellow-500/40" : "border-red-500/40";
          const bgCls = status === "settled" ? "bg-green-500/5" : status === "partial" ? "bg-yellow-500/5" : "bg-red-500/5";
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Card,
            {
              className: `rounded-xl border ${borderCls} ${bgCls}`,
              "data-ocid": `pos.bari_khata.item.${idx + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm", children: e.customer }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: e.phone }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 mt-2 text-xs", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "Credit: ",
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
                          "₹",
                          e.creditGiven
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "Paid:",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "text-green-600", children: [
                          "₹",
                          e.paid
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        "Due:",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "strong",
                          {
                            className: outstanding > 0 ? "text-red-600" : "text-green-600",
                            children: [
                              "₹",
                              outstanding
                            ]
                          }
                        )
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      className: status === "settled" ? "bg-green-500/15 text-green-600" : status === "partial" ? "bg-yellow-500/15 text-yellow-600" : "bg-red-500/15 text-red-600",
                      children: status.charAt(0).toUpperCase() + status.slice(1)
                    }
                  ) })
                ] }),
                outstanding > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "number",
                      placeholder: "Payment amount",
                      value: bkPayForm[e.id] || "",
                      onChange: (ev) => setBkPayForm((p) => ({
                        ...p,
                        [e.id]: ev.target.value
                      })),
                      className: "text-xs h-7 max-w-[140px]"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      className: "h-7 text-xs",
                      onClick: () => recordPayment(e.id),
                      "data-ocid": `pos.bari_khata.save_button.${idx + 1}`,
                      children: "Record Payment"
                    }
                  )
                ] })
              ] })
            },
            e.id
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "barcodes", className: "mt-0 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Barcode & QR labels for your products" }),
        allProducts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-xs text-center py-8 text-muted-foreground border border-dashed border-border rounded-xl",
            "data-ocid": "pos.barcodes.empty_state",
            children: "No products found. Add products via Family Tree → Business."
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: allProducts.slice(0, 12).map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "rounded-xl border-border",
            "data-ocid": `pos.barcodes.item.${idx + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold truncate", children: p.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground font-mono", children: [
                "SKU: IC",
                String(p.id).padStart(6, "0")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 items-end h-10 bg-white p-1 rounded border border-border overflow-hidden", children: BARCODE_WIDTHS.map((w, bIdx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  style: {
                    width: w * 1.5,
                    height: `${BARCODE_HEIGHTS[bIdx]}%`,
                    background: "#000",
                    borderRadius: 1
                  }
                },
                `w${w}h${BARCODE_HEIGHTS[bIdx]}`
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: `https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${encodeURIComponent(`${p.name} IC${p.id}`)}`,
                  alt: "QR",
                  className: "w-16 h-16 border border-border rounded"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "w-full text-xs h-7",
                  onClick: () => ue.info("Camera scan simulation: product found"),
                  "data-ocid": `pos.barcodes.secondary_button.${idx + 1}`,
                  children: "📷 Scan"
                }
              )
            ] })
          },
          p.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "reports", className: "mt-0 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
          {
            label: "Total Revenue",
            value: `₹${totalRevenue.toLocaleString()}`,
            color: "text-green-600"
          },
          {
            label: "Total Expenses",
            value: `₹${totalExpenses.toLocaleString()}`,
            color: "text-red-600"
          },
          {
            label: "Net Profit",
            value: `₹${netProfit.toLocaleString()}`,
            color: netProfit >= 0 ? "text-green-600" : "text-red-600"
          },
          {
            label: "Transactions",
            value: String(invoices.length),
            color: "text-primary"
          }
        ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "rounded-xl border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: c.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xl font-bold mt-1 ${c.color}`, children: c.value })
        ] }) }, c.label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-xl border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm", children: "Sales — Last 7 Days" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-2 h-32", children: last7.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex-1 flex flex-col items-center gap-1",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] text-muted-foreground", children: [
                  "₹",
                  (d.amount / 1e3).toFixed(1),
                  "k"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-full rounded-t-sm",
                    style: {
                      height: `${d.amount / maxSale * 100}%`,
                      background: "oklch(0.65 0.25 280 / 0.7)"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-muted-foreground", children: d.day })
              ]
            },
            d.day
          )) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-xl border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2 flex flex-row items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm", children: "Top Products" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "h-7 text-xs",
                onClick: exportCSV,
                "data-ocid": "pos.reports.secondary_button",
                children: "📥 Export CSV"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2", children: "Product" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-2", children: "Revenue" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
              allProducts.slice(0, 5).map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "tr",
                {
                  className: "border-b border-border/30",
                  "data-ocid": `pos.reports.item.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2", children: p.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 text-right font-semibold", children: [
                      "₹",
                      (p.price * (5 - i) * 12).toLocaleString()
                    ] })
                  ]
                },
                p.id
              )),
              allProducts.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "td",
                {
                  colSpan: 2,
                  className: "text-center py-4 text-muted-foreground",
                  children: "No products"
                }
              ) })
            ] })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "online-store", className: "mt-0 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-xl border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm", children: "Online Store" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: storeActive ? "Active" : "Inactive" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Switch,
              {
                checked: storeActive,
                onCheckedChange: setStoreActive,
                "data-ocid": "pos.online_store.switch"
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 rounded-lg p-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 14, className: "text-muted-foreground shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-xs text-primary break-all", children: "https://indyacentral.app/store/my-business" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "ghost",
                className: "h-6 text-xs ml-auto",
                onClick: () => {
                  navigator.clipboard.writeText(
                    "https://indyacentral.app/store/my-business"
                  );
                  ue.success("Link copied");
                },
                "data-ocid": "pos.online_store.secondary_button",
                children: "Copy"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary/10 p-4 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-base", children: "My Business Store" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Powered by IndyaCentral" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 grid grid-cols-2 sm:grid-cols-3 gap-3", children: [
              allProducts.slice(0, 6).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "border border-border rounded-lg p-2 text-center",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full aspect-square bg-muted/30 rounded-md mb-2 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🛍️" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold truncate", children: p.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-primary", children: [
                      "₹",
                      p.price
                    ] })
                  ]
                },
                p.id
              )),
              allProducts.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-3 text-center py-6 text-muted-foreground text-xs", children: "Add products to display" })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "customers", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-xl border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm", children: "Customer Portal" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
          {
            name: "Rahul Sharma",
            email: "rahul@email.com",
            orders: 5,
            spent: 4200,
            last: "2 days ago"
          },
          {
            name: "Priya Gupta",
            email: "priya@email.com",
            orders: 3,
            spent: 1800,
            last: "1 week ago"
          },
          {
            name: "Amit Kumar",
            email: "amit@email.com",
            orders: 8,
            spent: 6500,
            last: "Yesterday"
          }
        ].map((c, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "border border-border rounded-lg p-3",
            "data-ocid": `pos.customers.item.${idx + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: c.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: c.email })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                  c.orders,
                  " orders"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-primary", children: [
                  "₹",
                  c.spent
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: c.last })
              ] })
            ] })
          },
          c.email
        )) }) })
      ] }) })
    ] })
  ] });
}
const BIZ_MODULES = [
  {
    id: "inventory",
    name: "Inventory & Material Management",
    desc: "Track stock, raw materials, reorder levels",
    icon: "📦",
    categories: ["Retail", "Manufacturing", "General"]
  },
  {
    id: "assembly",
    name: "Assembly & Manufacturing",
    desc: "Work orders, BOM, production tracking",
    icon: "🏭",
    categories: ["Manufacturing"]
  },
  {
    id: "repair",
    name: "Repair & Service Management",
    desc: "Job cards, technician assignment, spare parts",
    icon: "🔧",
    categories: ["Repair/Service"]
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
      "General"
    ]
  },
  {
    id: "telecom",
    name: "Telecom Management",
    desc: "SIM cards, plans, recharge tracking",
    icon: "📡",
    categories: ["Telecom"]
  },
  {
    id: "retail",
    name: "Retail Shop Management",
    desc: "POS, billing, shelf management",
    icon: "🛍️",
    categories: ["Retail"]
  },
  {
    id: "vehicle",
    name: "Vehicle Sale & Purchase",
    desc: "Inventory, RC tracking, test drives",
    icon: "🚗",
    categories: ["Vehicle Dealership"]
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
      "General"
    ]
  },
  {
    id: "software",
    name: "Software Project Management",
    desc: "Sprints, tasks, client billing",
    icon: "💻",
    categories: ["Software/IT"]
  },
  {
    id: "lending",
    name: "Money Lending",
    desc: "Loan accounts, EMI schedules, recovery",
    icon: "🏦",
    categories: ["Lending/Finance"]
  },
  {
    id: "courier-dispatch",
    name: "Courier & Dispatch",
    desc: "Shipment tracking, dispatch board, proof of delivery",
    icon: "🚚",
    categories: ["Logistics", "Transport", "General"]
  },
  {
    id: "fuel-depot",
    name: "Fuel Depot Management",
    desc: "Petrol, LPG, CNG, EV, Hydrogen & more — stock & dispense",
    icon: "⛽",
    categories: ["Fuel & Energy"]
  },
  {
    id: "transport-biz",
    name: "Transport Business",
    desc: "Fleet management, trip logs, cargo tracking",
    icon: "🚛",
    categories: ["Logistics", "Transport"]
  },
  {
    id: "water-delivery",
    name: "Water Delivery System",
    desc: "Bottle & bulk water orders, route planning",
    icon: "💧",
    categories: ["Logistics", "General"]
  },
  {
    id: "food-parcel",
    name: "Food & Parcel Delivery",
    desc: "Incoming orders, rider assignment, ETA tracking",
    icon: "🍱",
    categories: ["Food & Beverage", "Logistics"]
  },
  {
    id: "plumbing",
    name: "Plumbing Services",
    desc: "Job cards, materials tracking, labour billing",
    icon: "🔩",
    categories: ["Home Services"]
  },
  {
    id: "electrical",
    name: "Electrical Services",
    desc: "Wiring jobs, faults, inspection records",
    icon: "⚡",
    categories: ["Home Services"]
  },
  {
    id: "electrician",
    name: "Electrician (Field)",
    desc: "Field engineer job cards, parts used, billing",
    icon: "🔌",
    categories: ["Home Services"]
  },
  {
    id: "mechanic",
    name: "Mechanic Shop",
    desc: "Vehicle job cards, parts, service history",
    icon: "🔧",
    categories: ["Repair/Service", "Automotive"]
  },
  {
    id: "sweeper",
    name: "Sweeper / Cleaning",
    desc: "Area schedules, shift assignment, attendance",
    icon: "🧹",
    categories: ["Home Services", "General"]
  },
  {
    id: "garments",
    name: "Garments & Tailoring",
    desc: "Tailor orders, measurements, fabric stock",
    icon: "👗",
    categories: ["Retail", "Garments"]
  }
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
  "Insurance Agent"
];
function BizModulePanel({ moduleId }) {
  if (!moduleId) return null;
  const panels = {
    "courier-dispatch": /* @__PURE__ */ jsxRuntimeExports.jsx(CourierDispatchModule, {}),
    "fuel-depot": /* @__PURE__ */ jsxRuntimeExports.jsx(FuelDepotModule, {}),
    "transport-biz": /* @__PURE__ */ jsxRuntimeExports.jsx(TransportModule, {}),
    "water-delivery": /* @__PURE__ */ jsxRuntimeExports.jsx(WaterDeliveryModule, {}),
    "food-parcel": /* @__PURE__ */ jsxRuntimeExports.jsx(FoodParcelDeliveryModule, {}),
    plumbing: /* @__PURE__ */ jsxRuntimeExports.jsx(PlumbingModule, {}),
    electrical: /* @__PURE__ */ jsxRuntimeExports.jsx(ElectricalModule, {}),
    electrician: /* @__PURE__ */ jsxRuntimeExports.jsx(ElectricianModule, {}),
    mechanic: /* @__PURE__ */ jsxRuntimeExports.jsx(MechanicModule, {}),
    sweeper: /* @__PURE__ */ jsxRuntimeExports.jsx(SweeperModule, {}),
    garments: /* @__PURE__ */ jsxRuntimeExports.jsx(GarmentsModule, {}),
    inventory: /* @__PURE__ */ jsxRuntimeExports.jsx(InventoryModule, {}),
    assembly: /* @__PURE__ */ jsxRuntimeExports.jsx(AssemblyModule, {}),
    repair: /* @__PURE__ */ jsxRuntimeExports.jsx(RepairServiceModule, {}),
    financial: /* @__PURE__ */ jsxRuntimeExports.jsx(FinancialModule, {}),
    telecom: /* @__PURE__ */ jsxRuntimeExports.jsx(TelecomModule, {}),
    retail: /* @__PURE__ */ jsxRuntimeExports.jsx(RetailShopModule, {}),
    vehicle: /* @__PURE__ */ jsxRuntimeExports.jsx(VehicleModule, {}),
    crm: /* @__PURE__ */ jsxRuntimeExports.jsx(LeadCRMModule, {}),
    software: /* @__PURE__ */ jsxRuntimeExports.jsx(SoftwareProjectModule, {}),
    lending: /* @__PURE__ */ jsxRuntimeExports.jsx(MoneyLendingModule, {})
  };
  return panels[moduleId] ?? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 py-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Module is active. Configure settings for your business below." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Custom Label" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          placeholder: "e.g. My Inventory",
          className: "mt-1",
          "data-ocid": "biz.module.config.input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { "data-ocid": "biz.module.config.switch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm", children: "Enable notifications for this module" })
    ] })
  ] });
}
function BizModulesTab() {
  var _a, _b;
  const [category, setCategory] = React.useState("General");
  const [enabled, setEnabled] = React.useState(() => {
    try {
      return JSON.parse(localStorage.getItem("enabledBizModules") || "{}");
    } catch {
      return {};
    }
  });
  const [configOpen, setConfigOpen] = React.useState(null);
  const toggle = (id) => {
    setEnabled((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      localStorage.setItem("enabledBizModules", JSON.stringify(next));
      return next;
    });
  };
  const relevantModules = BIZ_MODULES.filter(
    (m) => category === "General" ? true : m.categories.includes(category)
  );
  const enabledCount = Object.values(enabled).filter(Boolean).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold", children: "Business Modules" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Enable modules relevant to your business category" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-sm", children: [
        enabledCount,
        " of ",
        BIZ_MODULES.length,
        " enabled"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-medium whitespace-nowrap", children: "Business Category:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: category, onValueChange: setCategory, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "w-52", "data-ocid": "biz.modules.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: BIZ_CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: relevantModules.map((mod) => {
      const isRecommended = category !== "General" && mod.categories.includes(category) && mod.categories.length <= 3;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: `relative transition-all ${enabled[mod.id] ? "border-primary/50 bg-primary/5" : ""}`,
          "data-ocid": `biz.module.${mod.id}.card`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: mod.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold leading-tight", children: mod.name }),
                  isRecommended && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-[10px] px-1.5 py-0 mt-0.5 bg-amber-500/15 text-amber-600 border-amber-500/30", children: "✨ Recommended" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Switch,
                {
                  checked: !!enabled[mod.id],
                  onCheckedChange: () => toggle(mod.id),
                  "data-ocid": `biz.module.${mod.id}.toggle`
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: mod.desc }),
            enabled[mod.id] && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                variant: "outline",
                className: "w-full text-xs",
                onClick: () => setConfigOpen(mod.id),
                "data-ocid": `biz.module.${mod.id}.button`,
                children: "⚙️ Configure"
              }
            )
          ] })
        },
        mod.id
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!configOpen, onOpenChange: () => setConfigOpen(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      DialogContent,
      {
        className: "max-w-2xl max-h-[90vh] flex flex-col",
        "data-ocid": "biz.module.config.dialog",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
            (_a = BIZ_MODULES.find((m) => m.id === configOpen)) == null ? void 0 : _a.icon,
            " ",
            (_b = BIZ_MODULES.find((m) => m.id === configOpen)) == null ? void 0 : _b.name
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "flex-1 mt-2 pr-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BizModulePanel, { moduleId: configOpen }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogFooter, { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              onClick: () => setConfigOpen(null),
              "data-ocid": "biz.module.config.cancel_button",
              children: "Close"
            }
          ) })
        ]
      }
    ) })
  ] });
}
function HRPayrollTab() {
  const [employees, setEmployees] = React.useState(() => {
    try {
      return JSON.parse(localStorage.getItem("bizEmployees") || "[]");
    } catch {
      return [];
    }
  });
  const [leaves, setLeaves] = React.useState(() => {
    try {
      return JSON.parse(localStorage.getItem("bizLeaves") || "[]");
    } catch {
      return [];
    }
  });
  const [payroll, setPayroll] = React.useState(() => {
    try {
      return JSON.parse(localStorage.getItem("bizPayroll") || "{}");
    } catch {
      return {};
    }
  });
  const [showAddEmp, setShowAddEmp] = React.useState(false);
  const [showAddLeave, setShowAddLeave] = React.useState(false);
  const [showPayslip, setShowPayslip] = React.useState(null);
  const [empForm, setEmpForm] = React.useState({
    name: "",
    role: "Staff",
    department: "",
    salary: "",
    phone: "",
    email: "",
    joinDate: ""
  });
  const [leaveForm, setLeaveForm] = React.useState({
    employeeId: "",
    type: "Casual",
    from: "",
    to: "",
    reason: ""
  });
  const saveEmployees = (list) => {
    setEmployees(list);
    localStorage.setItem("bizEmployees", JSON.stringify(list));
  };
  const saveLeaves = (list) => {
    setLeaves(list);
    localStorage.setItem("bizLeaves", JSON.stringify(list));
  };
  const savePayroll = (rec) => {
    setPayroll(rec);
    localStorage.setItem("bizPayroll", JSON.stringify(rec));
  };
  const addEmployee = () => {
    if (!empForm.name) return;
    const emp = {
      id: Date.now().toString(),
      name: empForm.name,
      role: empForm.role,
      department: empForm.department,
      salary: Number(empForm.salary) || 0,
      phone: empForm.phone,
      email: empForm.email,
      joinDate: empForm.joinDate,
      status: "Active"
    };
    saveEmployees([...employees, emp]);
    setEmpForm({
      name: "",
      role: "Staff",
      department: "",
      salary: "",
      phone: "",
      email: "",
      joinDate: ""
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
      Math.round((to.getTime() - from.getTime()) / 864e5) + 1
    );
    const req = {
      id: Date.now().toString(),
      employeeId: leaveForm.employeeId,
      employeeName: (emp == null ? void 0 : emp.name) || "",
      type: leaveForm.type,
      from: leaveForm.from,
      to: leaveForm.to,
      days,
      reason: leaveForm.reason,
      status: "Pending"
    };
    saveLeaves([...leaves, req]);
    setLeaveForm({
      employeeId: "",
      type: "Casual",
      from: "",
      to: "",
      reason: ""
    });
    setShowAddLeave(false);
  };
  const approveLeave = (id, status) => {
    saveLeaves(leaves.map((l) => l.id === id ? { ...l, status } : l));
  };
  const markPaid = (empId) => {
    var _a;
    const next = {
      ...payroll,
      [empId]: {
        ...payroll[empId],
        paid: true,
        bonus: ((_a = payroll[empId]) == null ? void 0 : _a.bonus) || 0
      }
    };
    savePayroll(next);
  };
  const calcNet = (emp) => {
    var _a;
    const pf = Math.round(emp.salary * 0.12);
    const esi = Math.round(emp.salary * 0.0175);
    const bonus = ((_a = payroll[emp.id]) == null ? void 0 : _a.bonus) || 0;
    return { pf, esi, bonus, net: emp.salary - pf - esi + bonus };
  };
  const onLeaveToday = leaves.filter(
    (l) => l.status === "Approved" && new Date(l.from) <= /* @__PURE__ */ new Date() && new Date(l.to) >= /* @__PURE__ */ new Date()
  ).length;
  const presentToday = employees.filter((e) => e.status === "Active").length - onLeaveToday;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "employees", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        TabsList,
        {
          className: "flex flex-wrap gap-1 h-auto",
          "data-ocid": "hr.tabs.list",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "employees", "data-ocid": "hr.employees.tab", children: "👤 Employees" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "absence", "data-ocid": "hr.absence.tab", children: "📅 Absence Management" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "payroll", "data-ocid": "hr.payroll.tab", children: "💵 Payroll" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "employees", className: "mt-4 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-semibold", children: [
            "Employees (",
            employees.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              onClick: () => setShowAddEmp(true),
              "data-ocid": "hr.employees.open_modal_button",
              children: "+ Add Employee"
            }
          )
        ] }),
        employees.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "text-center py-8 text-muted-foreground text-sm",
            "data-ocid": "hr.employees.empty_state",
            children: 'No employees added yet. Click "Add Employee" to get started.'
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 px-1", children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 px-1", children: "Role" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 px-1", children: "Department" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-2 px-1", children: "Salary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 px-1", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 px-1", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: employees.map((emp, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "border-b hover:bg-muted/30",
              "data-ocid": `hr.employees.item.${idx + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-1 font-medium", children: emp.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-1 text-muted-foreground", children: emp.role }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-1 text-muted-foreground", children: emp.department || "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 px-1 text-right", children: [
                  "₹",
                  emp.salary.toLocaleString()
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-1 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: emp.status === "Active" ? "default" : "secondary",
                    className: "text-xs",
                    children: emp.status
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-1 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "ghost",
                    className: "text-xs h-7",
                    onClick: () => setShowPayslip(emp),
                    "data-ocid": `hr.employees.edit_button.${idx + 1}`,
                    children: "Payslip"
                  }
                ) })
              ]
            },
            emp.id
          )) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "absence", className: "mt-4 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-green-600", children: presentToday }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Present Today" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-amber-600", children: onLeaveToday }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "On Leave" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-primary", children: employees.length }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Total Employees" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Leave Requests" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              onClick: () => setShowAddLeave(true),
              "data-ocid": "hr.absence.open_modal_button",
              children: "+ Request Leave"
            }
          )
        ] }),
        leaves.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "text-center py-6 text-sm text-muted-foreground",
            "data-ocid": "hr.absence.empty_state",
            children: "No leave requests yet."
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 px-1", children: "Employee" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 px-1", children: "Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 px-1", children: "From" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 px-1", children: "To" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 px-1", children: "Days" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 px-1", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 px-1", children: "Action" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: leaves.map((l, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "border-b hover:bg-muted/30",
              "data-ocid": `hr.absence.item.${idx + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-1 font-medium", children: l.employeeName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-1", children: l.type }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-1 text-muted-foreground", children: l.from }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-1 text-muted-foreground", children: l.to }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-1 text-center", children: l.days }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-1 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: l.status === "Approved" ? "default" : l.status === "Rejected" ? "destructive" : "secondary",
                    className: "text-xs",
                    children: l.status
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-1 text-center space-x-1", children: l.status === "Pending" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      variant: "ghost",
                      className: "text-xs h-7 text-green-600",
                      onClick: () => approveLeave(l.id, "Approved"),
                      "data-ocid": `hr.absence.confirm_button.${idx + 1}`,
                      children: "✓"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      variant: "ghost",
                      className: "text-xs h-7 text-red-600",
                      onClick: () => approveLeave(l.id, "Rejected"),
                      "data-ocid": `hr.absence.cancel_button.${idx + 1}`,
                      children: "✗"
                    }
                  )
                ] }) })
              ]
            },
            l.id
          )) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "payroll", className: "mt-4 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-semibold", children: [
            "Payroll —",
            " ",
            (/* @__PURE__ */ new Date()).toLocaleString("default", {
              month: "long",
              year: "numeric"
            })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              onClick: () => {
                var _a;
                const next = { ...payroll };
                for (const e of employees) {
                  next[e.id] = { paid: false, bonus: ((_a = next[e.id]) == null ? void 0 : _a.bonus) || 0 };
                }
                savePayroll(next);
              },
              "data-ocid": "hr.payroll.primary_button",
              children: "▶ Run Payroll"
            }
          )
        ] }),
        employees.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "text-center py-6 text-sm text-muted-foreground",
            "data-ocid": "hr.payroll.empty_state",
            children: "Add employees first to run payroll."
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 px-1", children: "Employee" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-2 px-1", children: "Base" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-2 px-1", children: "PF (12%)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-2 px-1", children: "ESI (1.75%)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-2 px-1", children: "Bonus" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-2 px-1", children: "Net Pay" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 px-1", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center py-2 px-1", children: "Action" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: employees.map((emp, idx) => {
            var _a;
            const { pf, esi, bonus, net } = calcNet(emp);
            const paid = (_a = payroll[emp.id]) == null ? void 0 : _a.paid;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "border-b hover:bg-muted/30",
                "data-ocid": `hr.payroll.item.${idx + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-1 font-medium", children: emp.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 px-1 text-right", children: [
                    "₹",
                    emp.salary.toLocaleString()
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 px-1 text-right text-red-600", children: [
                    "-₹",
                    pf
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 px-1 text-right text-red-600", children: [
                    "-₹",
                    esi
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 px-1 text-right text-green-600", children: [
                    "+₹",
                    bonus
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 px-1 text-right font-semibold", children: [
                    "₹",
                    net.toLocaleString()
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 px-1 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: paid ? "default" : "secondary",
                      className: "text-xs",
                      children: paid ? "Paid" : "Pending"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 px-1 text-center space-x-1", children: [
                    !paid && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "sm",
                        variant: "ghost",
                        className: "text-xs h-7",
                        onClick: () => markPaid(emp.id),
                        "data-ocid": `hr.payroll.confirm_button.${idx + 1}`,
                        children: "Mark Paid"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "sm",
                        variant: "ghost",
                        className: "text-xs h-7",
                        onClick: () => setShowPayslip(emp),
                        "data-ocid": `hr.payroll.edit_button.${idx + 1}`,
                        children: "Payslip"
                      }
                    )
                  ] })
                ]
              },
              emp.id
            );
          }) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: showAddEmp, onOpenChange: setShowAddEmp, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { "data-ocid": "hr.employees.dialog", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Add Employee" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Full Name *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "mt-1",
              placeholder: "Employee name",
              value: empForm.name,
              onChange: (e) => setEmpForm((p) => ({ ...p, name: e.target.value })),
              "data-ocid": "hr.employees.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Role" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: empForm.role,
              onValueChange: (v) => setEmpForm((p) => ({ ...p, role: v })),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1", "data-ocid": "hr.employees.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                  "Manager",
                  "Staff",
                  "Technician",
                  "Driver",
                  "Cook",
                  "Waiter",
                  "Guard",
                  "Other"
                ].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: r, children: r }, r)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Department" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "mt-1",
              placeholder: "e.g. Sales",
              value: empForm.department,
              onChange: (e) => setEmpForm((p) => ({ ...p, department: e.target.value }))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Monthly Salary (₹)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "mt-1",
              type: "number",
              placeholder: "25000",
              value: empForm.salary,
              onChange: (e) => setEmpForm((p) => ({ ...p, salary: e.target.value }))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Join Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "mt-1",
              type: "date",
              value: empForm.joinDate,
              onChange: (e) => setEmpForm((p) => ({ ...p, joinDate: e.target.value }))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "mt-1",
              placeholder: "+91 98765 43210",
              value: empForm.phone,
              onChange: (e) => setEmpForm((p) => ({ ...p, phone: e.target.value }))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "mt-1",
              type: "email",
              placeholder: "email@example.com",
              value: empForm.email,
              onChange: (e) => setEmpForm((p) => ({ ...p, email: e.target.value }))
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            onClick: () => setShowAddEmp(false),
            "data-ocid": "hr.employees.cancel_button",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: addEmployee,
            "data-ocid": "hr.employees.submit_button",
            children: "Add Employee"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: showAddLeave, onOpenChange: setShowAddLeave, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { "data-ocid": "hr.absence.dialog", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Request Leave" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Employee *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: leaveForm.employeeId,
              onValueChange: (v) => setLeaveForm((p) => ({ ...p, employeeId: v })),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1", "data-ocid": "hr.absence.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select employee" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: employees.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: e.id, children: e.name }, e.id)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Leave Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: leaveForm.type,
              onValueChange: (v) => setLeaveForm((p) => ({ ...p, type: v })),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Sick", "Casual", "Annual", "Unpaid"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: t }, t)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "From Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                className: "mt-1",
                type: "date",
                value: leaveForm.from,
                onChange: (e) => setLeaveForm((p) => ({ ...p, from: e.target.value })),
                "data-ocid": "hr.absence.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "To Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                className: "mt-1",
                type: "date",
                value: leaveForm.to,
                onChange: (e) => setLeaveForm((p) => ({ ...p, to: e.target.value }))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Reason" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "mt-1",
              placeholder: "Brief reason...",
              value: leaveForm.reason,
              onChange: (e) => setLeaveForm((p) => ({ ...p, reason: e.target.value }))
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            onClick: () => setShowAddLeave(false),
            "data-ocid": "hr.absence.cancel_button",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: addLeave, "data-ocid": "hr.absence.submit_button", children: "Submit Request" })
      ] })
    ] }) }),
    showPayslip && /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!showPayslip, onOpenChange: () => setShowPayslip(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { "data-ocid": "hr.payroll.dialog", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
        "Payslip — ",
        showPayslip.name
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-lg p-4 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between border-b pb-2 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: showPayslip.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              showPayslip.role,
              " · ",
              showPayslip.department
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: (/* @__PURE__ */ new Date()).toLocaleString("default", {
              month: "long",
              year: "numeric"
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              "Joined: ",
              showPayslip.joinDate || "—"
            ] })
          ] })
        ] }),
        (() => {
          const { pf, esi, bonus, net } = calcNet(showPayslip);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Basic Salary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "₹",
                showPayslip.salary.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-green-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Bonus" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "+₹",
                bonus
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-red-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "PF Deduction (12%)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "-₹",
                pf
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-red-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "ESI (1.75%)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "-₹",
                esi
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-bold border-t pt-2 mt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Net Pay" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "₹",
                net.toLocaleString()
              ] })
            ] })
          ] });
        })(),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 pt-3 border-t border-dashed text-center text-xs text-muted-foreground", children: "[Company Stamp] — IndyaCentral Business Platform" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            onClick: () => setShowPayslip(null),
            "data-ocid": "hr.payroll.close_button",
            children: "Close"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: () => {
              window.print();
            },
            "data-ocid": "hr.payroll.primary_button",
            children: "🖨️ Print"
          }
        )
      ] })
    ] }) })
  ] });
}
function ONDCVendorPanel() {
  const ONDC_COLOR = "oklch(0.65 0.20 40)";
  const PARTICIPANT_ID = React.useMemo(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem("ic_ondc_registration") || "null"
      );
      if (saved == null ? void 0 : saved.participantId) return saved.participantId;
    } catch {
    }
    return null;
  }, []);
  const [registered, setRegistered] = React.useState(!!PARTICIPANT_ID);
  const [participantId, _setParticipantId] = React.useState(
    PARTICIPANT_ID || `IC-${Date.now()}`
  );
  const [regForm, setRegForm] = React.useState({
    gstin: "",
    pan: "",
    category: "Food",
    bankAccount: "",
    ifsc: "",
    fssai: ""
  });
  const [catalogProducts, setCatalogProducts] = React.useState([
    {
      name: "Masala Pack 500g",
      category: "Food",
      price: "₹299",
      status: "Synced",
      lastSync: "2h ago"
    },
    {
      name: "Basmati Rice 1kg",
      category: "Grocery",
      price: "₹180",
      status: "Synced",
      lastSync: "2h ago"
    },
    {
      name: "Chana Dal 500g",
      category: "Grocery",
      price: "₹120",
      status: "Pending",
      lastSync: "Never"
    },
    {
      name: "Turmeric Powder",
      category: "Food",
      price: "₹85",
      status: "Error",
      lastSync: "5h ago"
    }
  ]);
  const [syncing, setSyncing] = React.useState(false);
  const [ondcOrders, setOndcOrders] = React.useState(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem("ic_ondc_orders") || "null"
      );
      if (saved) return saved;
    } catch {
    }
    return [
      {
        id: "ONDC001",
        buyer: "Rahul S.",
        product: "Masala Pack 500g",
        amount: "₹299",
        status: "New"
      },
      {
        id: "ONDC002",
        buyer: "Priya M.",
        product: "Basmati Rice 1kg",
        amount: "₹180",
        status: "Confirmed"
      }
    ];
  });
  const [cancelOrderId, setCancelOrderId] = React.useState(null);
  const [cancelReason, setCancelReason] = React.useState("");
  const [settings, setSettings] = React.useState({
    deliverySLA: "Next Day",
    cancellationWindow: "1 hour",
    returnPolicy: "7 Days",
    autoAccept: false
  });
  function handleRegister() {
    if (!regForm.gstin) {
      ue.error("GSTIN is required");
      return;
    }
    const reg = { participantId, ...regForm };
    localStorage.setItem("ic_ondc_registration", JSON.stringify(reg));
    setRegistered(true);
    ue.success(`Registered on ONDC! Your Participant ID: ${participantId}`);
  }
  function saveOndcNotification(msg) {
    try {
      const existing = JSON.parse(
        localStorage.getItem("ic_notifications") || "[]"
      );
      existing.unshift({ type: "ondc", message: msg, timestamp: Date.now() });
      localStorage.setItem("ic_notifications", JSON.stringify(existing));
      window.dispatchEvent(new Event("indya_notification_added"));
    } catch {
    }
  }
  function handleAcceptOrder(orderId) {
    setOndcOrders(
      (prev) => prev.map(
        (o) => o.id === orderId ? { ...o, status: "Confirmed" } : o
      )
    );
    saveOndcNotification(
      `Your ONDC order #${orderId} has been accepted by seller`
    );
    ue.success(`Order #${orderId} accepted`);
  }
  function handleCancelOrder(orderId) {
    if (!cancelReason) {
      ue.error("Please enter a cancellation reason");
      return;
    }
    setOndcOrders(
      (prev) => prev.map(
        (o) => o.id === orderId ? { ...o, status: "Cancelled" } : o
      )
    );
    saveOndcNotification(
      `Your ONDC order #${orderId} was cancelled: ${cancelReason}`
    );
    setCancelOrderId(null);
    setCancelReason("");
    ue.success(`Order #${orderId} cancelled`);
  }
  function handleMarkShipped(orderId) {
    setOndcOrders(
      (prev) => prev.map(
        (o) => o.id === orderId ? { ...o, status: "Shipped" } : o
      )
    );
    ue.success(`Order #${orderId} marked as shipped`);
  }
  function handleSyncAll() {
    setSyncing(true);
    setTimeout(() => {
      setCatalogProducts(
        (prev) => prev.map((p) => ({ ...p, status: "Synced", lastSync: "Just now" }))
      );
      setSyncing(false);
      ue.success("12 products synced on ONDC Network");
    }, 1800);
  }
  const statusBadge2 = (s) => {
    if (s === "Synced")
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Badge,
        {
          className: "text-[10px]",
          style: {
            background: "oklch(0.52 0.14 155 / 0.15)",
            color: "oklch(0.52 0.14 155)"
          },
          children: "✅ Synced"
        }
      );
    if (s === "Pending")
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Badge,
        {
          className: "text-[10px]",
          style: {
            background: "oklch(0.72 0.17 85 / 0.15)",
            color: "oklch(0.72 0.17 85)"
          },
          children: "⏳ Pending"
        }
      );
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Badge,
      {
        className: "text-[10px]",
        style: {
          background: "oklch(0.55 0.22 22 / 0.15)",
          color: "oklch(0.55 0.22 22)"
        },
        children: "❌ Error"
      }
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "business.ondc.panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-4 bg-card border border-border rounded-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm",
          style: { background: ONDC_COLOR },
          children: "🌐"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold", style: { color: ONDC_COLOR }, children: "ONDC Vendor Portal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Open Network for Digital Commerce — Sell to millions of buyers" })
      ] }),
      registered && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Badge,
        {
          className: "ml-auto text-[10px]",
          style: {
            background: "oklch(0.52 0.14 155 / 0.15)",
            color: "oklch(0.52 0.14 155)"
          },
          children: [
            "● Active · ",
            participantId
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "registration", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "flex flex-wrap h-auto gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "registration",
            className: "text-xs",
            "data-ocid": "business.ondc.registration.tab",
            children: "📋 Registration"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "catalog",
            className: "text-xs",
            "data-ocid": "business.ondc.catalog.tab",
            children: "📦 Catalog Sync"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "orders",
            className: "text-xs",
            "data-ocid": "business.ondc.orders.tab",
            children: "🛒 ONDC Orders"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "settings",
            className: "text-xs",
            "data-ocid": "business.ondc.settings.tab",
            children: "⚙️ Settings"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "registration", className: "mt-4 space-y-4", children: registered ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "p-4 rounded-xl border-2 text-center space-y-2",
          style: {
            borderColor: ONDC_COLOR,
            background: "oklch(0.65 0.20 40 / 0.05)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl", children: "✅" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm", style: { color: ONDC_COLOR }, children: "Registered on ONDC Network!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Your ONDC Participant ID:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-base font-mono font-bold",
                style: { color: ONDC_COLOR },
                children: participantId
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "text-xs mt-2",
                "data-ocid": "business.ondc.manage.button",
                children: "Manage Registration"
              }
            )
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "GSTIN *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                className: "mt-1 h-8 text-xs",
                value: regForm.gstin,
                onChange: (e) => setRegForm({ ...regForm, gstin: e.target.value }),
                placeholder: "22AAAAA0000A1Z5",
                "data-ocid": "business.ondc.gstin.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "PAN *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                className: "mt-1 h-8 text-xs",
                value: regForm.pan,
                onChange: (e) => setRegForm({ ...regForm, pan: e.target.value }),
                placeholder: "ABCDE1234F",
                "data-ocid": "business.ondc.pan.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Business Category *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: regForm.category,
                onValueChange: (v) => setRegForm({ ...regForm, category: v }),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1 h-8 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                    "Food",
                    "Grocery",
                    "Electronics",
                    "Fashion",
                    "Beauty",
                    "Healthcare"
                  ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, className: "text-xs", children: c }, c)) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Bank Account Number" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                className: "mt-1 h-8 text-xs",
                value: regForm.bankAccount,
                onChange: (e) => setRegForm({ ...regForm, bankAccount: e.target.value }),
                placeholder: "12345678901234",
                "data-ocid": "business.ondc.bank.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "IFSC Code" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                className: "mt-1 h-8 text-xs",
                value: regForm.ifsc,
                onChange: (e) => setRegForm({ ...regForm, ifsc: e.target.value }),
                placeholder: "HDFC0001234",
                "data-ocid": "business.ondc.ifsc.input"
              }
            )
          ] }),
          regForm.category === "Food" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "FSSAI License Number" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                className: "mt-1 h-8 text-xs",
                value: regForm.fssai,
                onChange: (e) => setRegForm({ ...regForm, fssai: e.target.value }),
                placeholder: "12345678901234",
                "data-ocid": "business.ondc.fssai.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "ONDC Participant ID (auto-generated)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                className: "mt-1 h-8 text-xs font-mono bg-muted/50",
                value: participantId,
                readOnly: true
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            className: "text-xs font-label font-semibold",
            onClick: handleRegister,
            style: { background: ONDC_COLOR },
            "data-ocid": "business.ondc.register.submit_button",
            children: "🌐 Register on ONDC Network"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "catalog", className: "mt-4 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground font-semibold", children: [
            catalogProducts.filter((p) => p.status === "Synced").length,
            " ",
            "products synced on ONDC Network"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              className: "text-xs",
              onClick: handleSyncAll,
              disabled: syncing,
              style: { background: ONDC_COLOR },
              "data-ocid": "business.ondc.sync_all.button",
              children: syncing ? "Syncing..." : "🔄 Sync All"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2 font-semibold text-muted-foreground", children: "Product" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2 font-semibold text-muted-foreground", children: "Category" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2 font-semibold text-muted-foreground", children: "Price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2 font-semibold text-muted-foreground", children: "ONDC Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2 font-semibold text-muted-foreground", children: "Last Sync" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: catalogProducts.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: "border-t border-border/50",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-medium", children: p.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-muted-foreground", children: p.category }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: p.price }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: statusBadge2(p.status) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 text-muted-foreground", children: p.lastSync }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "ghost",
                    className: "h-6 text-[10px] px-2",
                    onClick: () => {
                      setCatalogProducts(
                        (prev) => prev.map(
                          (pp, ii) => ii === i ? {
                            ...pp,
                            status: "Synced",
                            lastSync: "Just now"
                          } : pp
                        )
                      );
                      ue.success(`${p.name} synced`);
                    },
                    "data-ocid": `business.ondc.sync.button.${i + 1}`,
                    children: "Sync"
                  }
                ) })
              ]
            },
            `${p.name}-${i}`
          )) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "orders", className: "mt-4 space-y-3", children: [
        ondcOrders.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "text-center py-8 text-muted-foreground text-xs",
            "data-ocid": "business.ondc.orders.empty_state",
            children: "No ONDC orders yet."
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: ondcOrders.map((order, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "border border-border rounded-xl p-3 space-y-2",
            "data-ocid": `business.ondc.orders.item.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      className: "text-[10px] font-mono",
                      style: {
                        background: "oklch(0.65 0.20 40 / 0.15)",
                        color: ONDC_COLOR
                      },
                      children: "ONDC"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold", children: [
                    "#",
                    order.id
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    className: "text-[10px]",
                    style: {
                      background: order.status === "New" ? "oklch(0.55 0.22 280 / 0.15)" : order.status === "Confirmed" ? "oklch(0.52 0.14 155 / 0.15)" : order.status === "Shipped" ? "oklch(0.72 0.17 85 / 0.15)" : "oklch(0.55 0.22 22 / 0.15)",
                      color: order.status === "New" ? "oklch(0.55 0.22 280)" : order.status === "Confirmed" ? "oklch(0.52 0.14 155)" : order.status === "Shipped" ? "oklch(0.72 0.17 85)" : "oklch(0.55 0.22 22)"
                    },
                    children: order.status
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-1 text-[11px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                  "Buyer:",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: order.buyer })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                  "Product:",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: order.product })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                  "Amount:",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-bold", children: order.amount })
                ] })
              ] }),
              order.status === "New" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    className: "h-7 text-[11px]",
                    style: { background: "oklch(0.52 0.14 155)" },
                    onClick: () => handleAcceptOrder(order.id),
                    "data-ocid": `business.ondc.accept.button.${i + 1}`,
                    children: "✅ Accept"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-7 text-[11px]",
                    onClick: () => setCancelOrderId(order.id),
                    "data-ocid": `business.ondc.cancel.button.${i + 1}`,
                    children: "❌ Cancel"
                  }
                )
              ] }),
              order.status === "Confirmed" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  className: "h-7 text-[11px]",
                  style: { background: ONDC_COLOR },
                  onClick: () => handleMarkShipped(order.id),
                  "data-ocid": `business.ondc.ship.button.${i + 1}`,
                  children: "🚚 Mark Shipped"
                }
              )
            ]
          },
          order.id
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Dialog,
          {
            open: !!cancelOrderId,
            onOpenChange: () => setCancelOrderId(null),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              DialogContent,
              {
                className: "max-w-sm",
                "data-ocid": "business.ondc.cancel.dialog",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "text-sm", children: [
                    "Cancel ONDC Order #",
                    cancelOrderId
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Cancellation Reason *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Textarea,
                      {
                        className: "text-xs h-20 resize-none",
                        placeholder: "Enter reason for cancellation...",
                        value: cancelReason,
                        onChange: (e) => setCancelReason(e.target.value),
                        "data-ocid": "business.ondc.cancel.textarea"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        variant: "outline",
                        size: "sm",
                        className: "flex-1 text-xs",
                        onClick: () => setCancelOrderId(null),
                        "data-ocid": "business.ondc.cancel.close_button",
                        children: "Keep Order"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "sm",
                        className: "flex-1 text-xs",
                        style: { background: "oklch(0.55 0.22 22)" },
                        onClick: () => cancelOrderId && handleCancelOrder(cancelOrderId),
                        "data-ocid": "business.ondc.cancel.confirm_button",
                        children: "Confirm Cancel"
                      }
                    )
                  ] })
                ]
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "settings", className: "mt-4 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          [
            {
              label: "Delivery SLA",
              key: "deliverySLA",
              options: ["Same Day", "Next Day", "2-3 Days", "5-7 Days"]
            },
            {
              label: "Cancellation Window",
              key: "cancellationWindow",
              options: ["30 min", "1 hour", "Before dispatch"]
            },
            {
              label: "Return Policy",
              key: "returnPolicy",
              options: ["No Returns", "7 Days", "15 Days"]
            }
          ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: s.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: settings[s.key],
                onValueChange: (v) => setSettings({ ...settings, [s.key]: v }),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1 h-8 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: s.options.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: o, className: "text-xs", children: o }, o)) })
                ]
              }
            )
          ] }, s.key)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 bg-muted/30 rounded-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold", children: "Auto-accept orders" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Automatically confirm new ONDC orders" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Switch,
              {
                checked: settings.autoAccept,
                onCheckedChange: (v) => setSettings({ ...settings, autoAccept: v }),
                "data-ocid": "business.ondc.autoaccept.switch"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            className: "text-xs font-label",
            style: { background: ONDC_COLOR },
            onClick: () => ue.success("ONDC settings saved"),
            "data-ocid": "business.ondc.settings.save_button",
            children: "💾 Save Settings"
          }
        )
      ] })
    ] })
  ] });
}
export {
  BusinessPage as default
};
