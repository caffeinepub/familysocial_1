import { h as createLucideIcon, r as reactExports, j as jsxRuntimeExports, I as Input, a as Button, L as Label, R as Switch, i as Building2, o as CreditCard, s as CircleCheck, u as ue, t as Separator, a1 as React, G as MapPin, P as Plus, S as Select, c as SelectTrigger, d as SelectValue, e as SelectContent, f as SelectItem, N as Sparkles, X, B as Badge } from "./index-rbU7eNkU.js";
import { C as Card, a as CardHeader, c as CardTitle, b as CardContent } from "./card-C3nPFKb8.js";
import { P as Progress } from "./progress-KjbN4d1I.js";
import { S as Slider } from "./slider-BQtLhrl9.js";
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from "./tabs-BgMiZSWa.js";
import { g as getFamilyTreeBusinesses } from "./familyTreeState-BqPJO2GN.js";
import { C as ChefHat } from "./chef-hat-YvV4jE4i.js";
import { Q as QrCode } from "./qr-code-BXLlFUKf.js";
import { T as Truck } from "./truck-xdRAWAQg.js";
import { P as Phone } from "./phone-BOrk5Yo2.js";
import { U as Upload } from "./upload-Bf4cnpaC.js";
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
function StorefrontTab() {
  const [bizList, setBizList] = React.useState([]);
  React.useEffect(() => {
    setBizList(getFamilyTreeBusinesses());
    const handleStorage = () => setBizList(getFamilyTreeBusinesses());
    window.addEventListener("storage", handleStorage);
    const interval = setInterval(
      () => setBizList(getFamilyTreeBusinesses()),
      2e3
    );
    return () => {
      window.removeEventListener("storage", handleStorage);
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
    bizList.map((biz) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Card,
      {
        className: "rounded-2xl border-border",
        "data-ocid": "business.storefront.card",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-6", children: [
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-bold text-foreground", children: biz.name }),
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
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { size: 36, style: { color: "oklch(0.55 0.22 280)" } })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold text-foreground", children: biz.name }),
                biz.location && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-muted-foreground", children: biz.location }),
                biz.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-muted-foreground", children: biz.phone })
              ]
            }
          )
        ] }) })
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
    const interval = setInterval(
      () => setBizList(getFamilyTreeBusinesses()),
      2e3
    );
    return () => {
      window.removeEventListener("storage", handleStorage);
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
              ((_a = biz.category) == null ? void 0 : _a.toLowerCase().includes("health")) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[10px] px-2 py-1 rounded bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400", children: "💊 Healthcare — Advisor profile available" }),
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
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "csv-import", "data-ocid": "business.csv_import.tab", children: "CSV Import" })
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
