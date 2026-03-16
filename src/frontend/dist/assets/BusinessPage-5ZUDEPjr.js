import { g as createLucideIcon, r as reactExports, j as jsxRuntimeExports, h as Building2, F as MapPin, B as Badge, p as Clock, a as Button, u as ue, I as Input, L as Label, R as Switch, n as CreditCard, q as CircleCheck, s as Separator, S as Select, c as SelectTrigger, d as SelectValue, e as SelectContent, f as SelectItem, N as Sparkles, X } from "./index-BfRdVjGV.js";
import { C as Card, b as CardContent, a as CardHeader, c as CardTitle } from "./card-D8c-fFR9.js";
import { P as Progress } from "./progress-fDZ5KLrH.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-tXwTKNle.js";
import { P as Phone } from "./phone-D5GLLlop.js";
import { M as Mail } from "./mail-DDZqaj9P.js";
import { S as Star } from "./star-CvJ8uf_w.js";
import { Q as QrCode } from "./qr-code-m8p3MuBT.js";
import { C as ChefHat } from "./chef-hat-l8-r9QLb.js";
import { T as Truck } from "./truck-Dn4gMZfN.js";
import { U as Upload } from "./upload-DUHcJiv6.js";
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
const MOCK_PRODUCTS = [
  { id: 1, name: "Masala Chai", price: 60, category: "Beverages", stock: 200 },
  {
    id: 2,
    name: "Butter Chicken",
    price: 320,
    category: "Main Course",
    stock: 50
  },
  { id: 3, name: "Paneer Tikka", price: 280, category: "Starters", stock: 40 },
  { id: 4, name: "Garlic Naan", price: 60, category: "Breads", stock: 150 },
  { id: 5, name: "Gulab Jamun", price: 120, category: "Desserts", stock: 80 },
  { id: 6, name: "Mango Lassi", price: 100, category: "Beverages", stock: 100 }
];
const MOCK_SERVICES = [
  { id: 1, name: "Home Delivery", price: 40, duration: "30-45 min" },
  { id: 2, name: "Catering Package", price: 5e3, duration: "Per event" },
  { id: 3, name: "Private Dining", price: 2e3, duration: "2 hours" },
  { id: 4, name: "Corporate Lunch Box", price: 200, duration: "Per person" }
];
const BRANCHES = [
  {
    id: "b1",
    name: "Connaught Place, Delhi",
    tables: 20,
    activeOrders: 12,
    revenue: 45200
  },
  {
    id: "b2",
    name: "Bandra West, Mumbai",
    tables: 15,
    activeOrders: 8,
    revenue: 32800
  },
  {
    id: "b3",
    name: "MG Road, Bangalore",
    tables: 18,
    activeOrders: 5,
    revenue: 28600
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
  const [rating, setRating] = reactExports.useState(0);
  const [hoverRating, setHoverRating] = reactExports.useState(0);
  const [selectedBranch, setSelectedBranch] = reactExports.useState("b1");
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-bold text-foreground", children: "Business Dashboard" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Manage your storefront, tables, orders and payments" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "storefront", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "flex flex-wrap h-auto gap-1 bg-muted/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "storefront", "data-ocid": "business.storefront.tab", children: "Storefront" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "tables", "data-ocid": "business.tables.tab", children: "Table Mgmt" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "orders", "data-ocid": "business.orders.tab", children: "Live Orders" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "branches", "data-ocid": "business.branches.tab", children: "Multi-Branch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "payments", "data-ocid": "business.payments.tab", children: "Payment Setup" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "ai-marketing",
            "data-ocid": "business.ai_marketing.tab",
            children: "AI Marketing"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "csv-import", "data-ocid": "business.csv_import.tab", children: "CSV Import" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "storefront", className: "mt-6 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "rounded-2xl border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-6", children: [
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-bold text-foreground", children: "Spice Garden Restaurant" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Authentic North Indian Cuisine · Est. 2018" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 mt-3 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 12 }),
                " Connaught Place, New Delhi"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 12 }),
                " +91 98765 43210"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 12 }),
                " hello@spicegarden.in"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-3", children: [
              [1, 2, 3, 4].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Star,
                {
                  size: 14,
                  fill: "oklch(0.72 0.19 85)",
                  style: { color: "oklch(0.72 0.19 85)" }
                },
                s
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 14, className: "text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground ml-1", children: "4.2 (128 reviews)" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-xl border-2 p-4 text-center shrink-0 w-40",
              style: { borderColor: "oklch(0.65 0.25 335 / 0.4)" },
              "data-ocid": "business.qr.card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-20 h-20 border-2 rounded-lg mx-auto flex items-center justify-center mb-2",
                    style: { borderColor: "oklch(0.55 0.22 280)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      QrCode,
                      {
                        size: 36,
                        style: { color: "oklch(0.55 0.22 280)" }
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold text-foreground", children: "Spice Garden" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-muted-foreground", children: "CP, New Delhi" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-muted-foreground", children: "+91 98765 43210" })
              ]
            }
          )
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-display font-semibold text-foreground mb-3", children: "Products" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3", children: MOCK_PRODUCTS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "rounded-xl border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[10px] mb-2", children: p.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "p",
              {
                className: "text-xs font-bold mt-1",
                style: { color: "oklch(0.52 0.14 155)" },
                children: [
                  "₹",
                  p.price
                ]
              }
            )
          ] }) }, p.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-display font-semibold text-foreground mb-3", children: "Services" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: MOCK_SERVICES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "rounded-xl border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground", children: s.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: s.duration })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "text-sm font-bold",
                style: { color: "oklch(0.55 0.22 280)" },
                children: [
                  "₹",
                  s.price
                ]
              }
            )
          ] }) }, s.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-2xl border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-display flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 15, style: { color: "oklch(0.52 0.14 155)" } }),
            "Customer Care"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 13 }),
              " +91 98765 43210"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 13 }),
              " support@spicegarden.in"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 13 }),
              " Mon–Sun: 11 AM – 11 PM"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-2xl border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-display", children: "Rate This Business" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setRating(s),
                onMouseEnter: () => setHoverRating(s),
                onMouseLeave: () => setHoverRating(0),
                "data-ocid": "business.star.button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Star,
                  {
                    size: 28,
                    fill: (hoverRating || rating) >= s ? "oklch(0.72 0.19 85)" : "transparent",
                    style: {
                      color: (hoverRating || rating) >= s ? "oklch(0.72 0.19 85)" : "oklch(0.7 0.05 280)"
                    }
                  }
                )
              },
              s
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                disabled: rating === 0,
                onClick: () => {
                  ue.success("Thank you for your review!");
                  setRating(0);
                },
                "data-ocid": "business.rating.submit_button",
                children: "Submit Rating"
              }
            )
          ] })
        ] })
      ] }),
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
                ] })
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: BRANCHES.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
        )) }),
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: BRANCHES.map((b, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "csv-import", className: "mt-6 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BusinessCSVImport, {}) })
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
export {
  BusinessPage as default
};
