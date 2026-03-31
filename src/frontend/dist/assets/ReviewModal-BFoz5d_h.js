import { k as createLucideIcon, r as reactExports, j as jsxRuntimeExports, B as Badge, a as Button, t as Clock, T as Tabs, c as TabsList, d as TabsTrigger, e as TabsContent, L as Label, a9 as ScrollArea, D as Dialog, E as DialogContent, F as DialogHeader, G as DialogTitle, J as DialogFooter, n as ShieldCheck, w as Separator, I as Input, Y as Search, l as Building2, N as MapPin, aj as LoaderCircle, u as ue, z as DialogTrigger } from "./index-DRWZCthO.js";
import { C as Card, b as CardContent, a as CardHeader, c as CardTitle } from "./card-B2LWIaFT.js";
import { C as Checkbox } from "./checkbox-DdbDMk6S.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-FmXh70w5.js";
import { T as Textarea } from "./textarea-BqOhMXsk.js";
import { G as Globe } from "./globe-QsckznU8.js";
import { C as CircleX } from "./circle-x-MflPbPzT.js";
import { G as Gavel } from "./gavel-B_AO821f.js";
import { T as TrendingUp } from "./trending-up-BwgqyxNU.js";
import { P as Phone } from "./phone-XkrTUkG6.js";
import { f as formatTimeAgo } from "./timeUtils-BFSNPdi8.js";
import { S as Star } from "./star-BFEkWO3O.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const CircleCheckBig = createLucideIcon("circle-check-big", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M6 3h12", key: "ggurg9" }],
  ["path", { d: "M6 8h12", key: "6g4wlu" }],
  ["path", { d: "m6 13 8.5 8", key: "u1kupk" }],
  ["path", { d: "M6 13h3", key: "wdp6ag" }],
  ["path", { d: "M9 13c6.667 0 6.667-10 0-10", key: "1nkvk2" }]
];
const IndianRupee = createLucideIcon("indian-rupee", __iconNode);
const SEED_UNCLAIMED = [
  {
    id: "ub1",
    name: "MedPlus Pharmacy",
    category: "Healthcare",
    city: "Bangalore",
    phone: "080-4124-0000",
    status: "Unclaimed"
  },
  {
    id: "ub2",
    name: "Sharma General Store",
    category: "Retail",
    city: "Delhi",
    phone: "011-2345-6789",
    status: "Unclaimed"
  },
  {
    id: "ub3",
    name: "Biryani House",
    category: "Food",
    city: "Hyderabad",
    phone: "040-6677-8899",
    status: "Unclaimed"
  },
  {
    id: "ub4",
    name: "Green Valley School",
    category: "Education",
    city: "Pune",
    phone: "020-2244-5566",
    status: "Unclaimed"
  },
  {
    id: "ub5",
    name: "FastFix Repairs",
    category: "Services",
    city: "Chennai",
    phone: "044-7788-9900",
    status: "Unclaimed"
  },
  {
    id: "ub6",
    name: "Prime Properties",
    category: "Real Estate",
    city: "Mumbai",
    phone: "022-6655-4433",
    status: "Unclaimed"
  },
  {
    id: "ub7",
    name: "Om Sweet Shop",
    category: "Food",
    city: "Jaipur",
    phone: "0141-223-4455",
    status: "Unclaimed"
  },
  {
    id: "ub8",
    name: "Digital Bazaar",
    category: "Retail",
    city: "Kolkata",
    phone: "033-4455-6677",
    status: "Unclaimed"
  },
  {
    id: "ub9",
    name: "CityFit Gym",
    category: "Services",
    city: "Ahmedabad",
    phone: "079-3344-5566",
    status: "Unclaimed"
  },
  {
    id: "ub10",
    name: "Sunrise Clinic",
    category: "Healthcare",
    city: "Lucknow",
    phone: "0522-334-4455",
    status: "Unclaimed"
  }
];
const STORAGE_BUSINESSES = "indyacentral-discovered-businesses";
const STORAGE_CLAIMS = "indyacentral-business-claims";
function loadBusinesses() {
  try {
    const raw = localStorage.getItem(STORAGE_BUSINESSES);
    if (raw) return JSON.parse(raw);
  } catch {
  }
  return SEED_UNCLAIMED;
}
function saveBusinesses(list) {
  localStorage.setItem(STORAGE_BUSINESSES, JSON.stringify(list));
}
function loadClaims() {
  try {
    const raw = localStorage.getItem(STORAGE_CLAIMS);
    if (raw) return JSON.parse(raw);
  } catch {
  }
  return [];
}
function saveClaims(list) {
  localStorage.setItem(STORAGE_CLAIMS, JSON.stringify(list));
  window.dispatchEvent(new Event("businessClaimsUpdated"));
}
const DISCOVERY_LOG_TEMPLATES = [
  (city, cat) => `🔍 Searching ${city} for ${cat} businesses...`,
  (city, cat) => `✅ Found: ${cat} business in ${city}`,
  (city, _cat) => `📋 Added unclaimed listing from ${city} to queue`,
  (city, cat) => `🌐 Cross-checking ${cat} listing in ${city} with open data...`,
  (_city, cat) => `📊 Ranking ${cat} listings by relevance score`,
  (city, _cat) => `💾 Synced ${city} data — queue updated`
];
const CITIES = [
  "Bangalore",
  "Delhi",
  "Mumbai",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Kolkata",
  "Jaipur",
  "Ahmedabad",
  "Lucknow"
];
const CATEGORIES_LIST = [
  "Retail",
  "Food",
  "Healthcare",
  "Education",
  "Services",
  "Real Estate"
];
function Agent11BusinessDiscovery() {
  const [activeTab, setActiveTab] = reactExports.useState("config");
  const [running, setRunning] = reactExports.useState(false);
  const [regions, setRegions] = reactExports.useState(["India"]);
  const [selectedCats, setSelectedCats] = reactExports.useState([
    "Retail",
    "Food",
    "Healthcare"
  ]);
  const [frequency, setFrequency] = reactExports.useState("daily");
  const [logs, setLogs] = reactExports.useState([]);
  const [businesses, setBusinesses] = reactExports.useState(loadBusinesses);
  const [rejectId, setRejectId] = reactExports.useState(null);
  const logEndRef = reactExports.useRef(null);
  const appendLog = reactExports.useCallback((msg) => {
    setLogs((prev) => [
      ...prev.slice(-99),
      `[${(/* @__PURE__ */ new Date()).toLocaleTimeString()}] ${msg}`
    ]);
  }, []);
  reactExports.useEffect(() => {
    if (!running) return;
    const tick = () => {
      const city = CITIES[Math.floor(Math.random() * CITIES.length)];
      const cat = selectedCats.length ? selectedCats[Math.floor(Math.random() * selectedCats.length)] : CATEGORIES_LIST[Math.floor(Math.random() * CATEGORIES_LIST.length)];
      const tmpl = DISCOVERY_LOG_TEMPLATES[Math.floor(Math.random() * DISCOVERY_LOG_TEMPLATES.length)];
      appendLog(tmpl(city, cat));
      if (Math.random() > 0.65) {
        const newBiz = {
          id: `ub_${Date.now()}`,
          name: `${city} ${cat} Hub`,
          category: cat,
          city,
          phone: `+91 98${Math.floor(1e7 + Math.random() * 89999999)}`,
          status: "Unclaimed"
        };
        setBusinesses((prev) => {
          const updated = [newBiz, ...prev];
          saveBusinesses(updated);
          return updated;
        });
      }
    };
    tick();
    const id = setInterval(tick, 1e4);
    return () => clearInterval(id);
  }, [running, appendLog, selectedCats]);
  reactExports.useEffect(() => {
    var _a;
    (_a = logEndRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  }, []);
  const toggleCat = (cat) => setSelectedCats(
    (prev) => prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
  );
  const approveB = (id) => {
    setBusinesses((prev) => {
      const updated = prev.map(
        (b) => b.id === id ? { ...b, status: "Claimed" } : b
      );
      saveBusinesses(updated);
      return updated;
    });
    ue.success("Business approved and visible to users");
  };
  const rejectB = (id) => {
    setBusinesses((prev) => {
      const updated = prev.map(
        (b) => b.id === id ? { ...b, status: "Rejected" } : b
      );
      saveBusinesses(updated);
      return updated;
    });
    setRejectId(null);
    ue.error("Business listing rejected");
  };
  const pendingCount = businesses.filter(
    (b) => b.status === "Unclaimed"
  ).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "admin.agent11discovery.panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-base", children: "Agent 11 — Business Discovery" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Discovers and indexes businesses across regions for users to claim" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        running && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Badge,
          {
            className: "bg-green-500/15 text-green-600 border-green-500/30 animate-pulse",
            "data-ocid": "admin.agent11discovery.loading_state",
            children: "● LIVE"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "sm",
            variant: running ? "destructive" : "default",
            onClick: () => {
              setRunning((r) => !r);
              if (!running) appendLog("▶ Discovery agent started");
              else appendLog("⏹ Discovery agent stopped");
            },
            "data-ocid": "admin.agent11discovery.toggle",
            children: running ? "Stop Agent" : "Start Agent"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: [
      { label: "Discovered", value: businesses.length, icon: Globe },
      { label: "Pending Claim", value: pendingCount, icon: Clock },
      {
        label: "Claimed",
        value: businesses.filter((b) => b.status === "Claimed").length,
        icon: CircleCheckBig
      }
    ].map(({ label, value, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18, className: "text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold", children: value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: label })
      ] })
    ] }) }, label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "config", "data-ocid": "admin.agent11discovery.tab", children: "Config" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "monitoring",
            "data-ocid": "admin.agent11discovery.tab",
            children: "Monitoring"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TabsTrigger,
          {
            value: "businesses",
            "data-ocid": "admin.agent11discovery.tab",
            children: [
              "Discovered (",
              businesses.length,
              ")"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "config", className: "mt-4 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Discovery Region" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["India", "South Asia", "Global"].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setRegions([r]),
              className: `px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${regions.includes(r) ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-muted"}`,
              "data-ocid": "admin.agent11discovery.toggle",
              children: r
            },
            r
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Business Categories" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: CATEGORIES_LIST.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Checkbox,
              {
                id: `cat-${cat}`,
                checked: selectedCats.includes(cat),
                onCheckedChange: () => toggleCat(cat),
                "data-ocid": "admin.agent11discovery.checkbox"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: `cat-${cat}`,
                className: "text-xs cursor-pointer",
                children: cat
              }
            )
          ] }, cat)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Discovery Frequency" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["hourly", "daily"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setFrequency(f),
              className: `px-3 py-1.5 rounded-lg text-xs font-medium border capitalize transition-colors ${frequency === f ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-muted"}`,
              "data-ocid": "admin.agent11discovery.select",
              children: f
            },
            f
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "monitoring", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        ScrollArea,
        {
          className: "h-64 rounded-lg border border-border bg-muted/40 p-3",
          "data-ocid": "admin.agent11discovery.panel",
          children: [
            logs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Start the agent to see live discovery logs…" }) : logs.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-[11px] font-mono mb-1 leading-relaxed",
                children: l
              },
              l
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: logEndRef })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "businesses", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { "data-ocid": "admin.agent11discovery.table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Category" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "City" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: businesses.slice(0, 30).map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TableRow,
          {
            "data-ocid": `admin.agent11discovery.row.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium text-sm", children: b.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px]", children: b.category }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs", children: b.city }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs", children: b.phone }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  className: `text-[10px] ${b.status === "Claimed" ? "bg-green-500/15 text-green-700 border-green-400/30" : b.status === "Rejected" ? "bg-red-500/15 text-red-700 border-red-400/30" : b.status === "Pending" ? "bg-amber-500/15 text-amber-700 border-amber-400/30" : "bg-blue-500/15 text-blue-700 border-blue-400/30"}`,
                  children: b.status
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: b.status === "Unclaimed" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-6 text-[10px] px-2",
                    onClick: () => approveB(b.id),
                    "data-ocid": "admin.agent11discovery.confirm_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 10, className: "mr-1" }),
                      "Approve"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "h-6 text-[10px] px-2 text-destructive hover:text-destructive",
                    onClick: () => setRejectId(b.id),
                    "data-ocid": "admin.agent11discovery.delete_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { size: 10, className: "mr-1" }),
                      "Reject"
                    ]
                  }
                )
              ] }) })
            ]
          },
          b.id
        )) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!rejectId, onOpenChange: () => setRejectId(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { "data-ocid": "admin.agent11discovery.dialog", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Reject Business Listing?" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "This listing will be hidden from the platform." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            onClick: () => setRejectId(null),
            "data-ocid": "admin.agent11discovery.cancel_button",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "destructive",
            onClick: () => rejectId && rejectB(rejectId),
            "data-ocid": "admin.agent11discovery.confirm_button",
            children: "Reject"
          }
        )
      ] })
    ] }) })
  ] });
}
function BusinessClaimsAdmin() {
  const [claims, setClaims] = reactExports.useState(loadClaims);
  const [rejectOpen, setRejectOpen] = reactExports.useState(false);
  const [rejectId, setRejectId] = reactExports.useState(null);
  const [rejectReason, setRejectReason] = reactExports.useState("");
  reactExports.useEffect(() => {
    const h = () => setClaims(loadClaims());
    window.addEventListener("businessClaimsUpdated", h);
    return () => window.removeEventListener("businessClaimsUpdated", h);
  }, []);
  const stats = {
    total: claims.length,
    pending: claims.filter((c) => c.status === "Pending").length,
    approved: claims.filter((c) => c.status === "Approved").length,
    rejected: claims.filter((c) => c.status === "Rejected").length
  };
  const approve = (id) => {
    setClaims((prev) => {
      const updated = prev.map(
        (c) => c.id === id ? { ...c, status: "Approved" } : c
      );
      saveClaims(updated);
      return updated;
    });
    ue.success("Claim approved — business linked to user's Family Tree");
  };
  const reject = () => {
    if (!rejectId) return;
    setClaims((prev) => {
      const updated = prev.map(
        (c) => c.id === rejectId ? { ...c, status: "Rejected", rejectReason } : c
      );
      saveClaims(updated);
      return updated;
    });
    setRejectOpen(false);
    setRejectId(null);
    setRejectReason("");
    ue.error("Claim rejected");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "admin.claims.panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-base", children: "Business Claim Requests" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Review ownership claims submitted by users" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-3", children: [
      { label: "Total", value: stats.total, color: "text-foreground" },
      { label: "Pending", value: stats.pending, color: "text-amber-600" },
      { label: "Approved", value: stats.approved, color: "text-green-600" },
      { label: "Rejected", value: stats.rejected, color: "text-red-600" }
    ].map(({ label, value, color }) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-3 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xl font-bold ${color}`, children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: label })
    ] }) }, label)) }),
    claims.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "text-center py-10 text-muted-foreground",
        "data-ocid": "admin.claims.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 32, className: "mx-auto mb-2 opacity-40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "No claim requests yet" })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { "data-ocid": "admin.claims.table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Business Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Claimed By" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Phone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Submitted" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: claims.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { "data-ocid": `admin.claims.row.${i + 1}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium text-sm", children: c.businessName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs", children: c.claimedBy }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs", children: c.phone }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-xs", children: c.submittedDate }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Badge,
          {
            className: `text-[10px] ${c.status === "Approved" ? "bg-green-500/15 text-green-700 border-green-400/30" : c.status === "Rejected" ? "bg-red-500/15 text-red-700 border-red-400/30" : "bg-amber-500/15 text-amber-700 border-amber-400/30"}`,
            children: c.status
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: c.status === "Pending" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "h-6 text-[10px] px-2",
              onClick: () => approve(c.id),
              "data-ocid": "admin.claims.confirm_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 10, className: "mr-1" }),
                "Approve"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "h-6 text-[10px] px-2 text-destructive",
              onClick: () => {
                setRejectId(c.id);
                setRejectOpen(true);
              },
              "data-ocid": "admin.claims.delete_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { size: 10, className: "mr-1" }),
                "Reject"
              ]
            }
          )
        ] }) })
      ] }, c.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: rejectOpen, onOpenChange: setRejectOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { "data-ocid": "admin.claims.dialog", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Reject Claim" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Reason for rejection" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            placeholder: "Enter reason...",
            value: rejectReason,
            onChange: (e) => setRejectReason(e.target.value),
            rows: 3,
            "data-ocid": "admin.claims.textarea"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            onClick: () => setRejectOpen(false),
            "data-ocid": "admin.claims.cancel_button",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "destructive",
            onClick: reject,
            "data-ocid": "admin.claims.confirm_button",
            children: "Reject Claim"
          }
        )
      ] })
    ] }) })
  ] });
}
function DiscoverClaimTab() {
  const [businesses, setBusinesses] = reactExports.useState(loadBusinesses);
  const [claimTarget, setClaimTarget] = reactExports.useState(
    null
  );
  const [step, setStep] = reactExports.useState("phone");
  const [phone, setPhone] = reactExports.useState("");
  const [otp, setOtp] = reactExports.useState("");
  const [sendingOtp, setSendingOtp] = reactExports.useState(false);
  const [searchQ, setSearchQ] = reactExports.useState("");
  reactExports.useEffect(() => {
    const h = () => setBusinesses(loadBusinesses());
    window.addEventListener("storage", h);
    return () => window.removeEventListener("storage", h);
  }, []);
  const displayList = businesses.filter(
    (b) => b.status === "Unclaimed" && (b.name.toLowerCase().includes(searchQ.toLowerCase()) || b.city.toLowerCase().includes(searchQ.toLowerCase()) || b.category.toLowerCase().includes(searchQ.toLowerCase()))
  );
  const sendOtp = () => {
    if (!phone) {
      ue.error("Enter your phone number");
      return;
    }
    setSendingOtp(true);
    setTimeout(() => {
      setSendingOtp(false);
      setStep("otp");
      ue.success(`OTP sent to ${phone}`);
    }, 1500);
  };
  const submitClaim = () => {
    if (otp.length < 4) {
      ue.error("Enter the OTP");
      return;
    }
    if (!claimTarget) return;
    const claim = {
      id: `cl_${Date.now()}`,
      businessId: claimTarget.id,
      businessName: claimTarget.name,
      claimedBy: "Current User",
      phone,
      submittedDate: (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN"),
      status: "Pending"
    };
    saveClaims([...loadClaims(), claim]);
    setBusinesses((prev) => {
      const updated = prev.map(
        (b) => b.id === claimTarget.id ? { ...b, status: "Pending" } : b
      );
      saveBusinesses(updated);
      return updated;
    });
    setStep("done");
    ue.success(
      `Claim submitted for "${claimTarget.name}" — admin will review`
    );
  };
  const resetDialog = () => {
    setClaimTarget(null);
    setStep("phone");
    setPhone("");
    setOtp("");
  };
  const CATEGORY_ICONS = {
    Healthcare: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "🏥" }),
    Retail: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "🛒" }),
    Food: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "🍽️" }),
    Education: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "📚" }),
    Services: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "🔧" }),
    "Real Estate": /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "🏘️" })
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "business.discover.panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-display font-bold", children: "Discover & Claim Businesses" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Agent 11 continuously discovers businesses. Claim yours to manage it here." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-primary/10 text-primary border-primary/20", children: [
        displayList.length,
        " available"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Search,
        {
          size: 14,
          className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          placeholder: "Search by name, city or category…",
          value: searchQ,
          onChange: (e) => setSearchQ(e.target.value),
          className: "pl-9 h-9 text-sm",
          "data-ocid": "business.discover.search_input"
        }
      )
    ] }),
    displayList.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "text-center py-10 text-muted-foreground",
        "data-ocid": "business.discover.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 32, className: "mx-auto mb-2 opacity-40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "No unclaimed businesses found" })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: displayList.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "border-border/60 hover:shadow-md transition-shadow",
        "data-ocid": `business.discover.item.${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2 pt-4 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              CATEGORY_ICONS[b.category] ?? /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 16 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold leading-tight", children: b.name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "outline",
                className: "text-[9px] shrink-0 bg-blue-500/10 text-blue-600 border-blue-400/30",
                children: "Unclaimed"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "px-4 pb-4 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 11 }),
              b.city
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 11 }),
              b.phone
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[10px]", children: b.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "sm",
                className: "w-full mt-2 h-8 text-xs",
                onClick: () => {
                  setClaimTarget(b);
                  setStep("phone");
                },
                "data-ocid": "business.discover.primary_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 12, className: "mr-1.5" }),
                  "Claim This Business"
                ]
              }
            )
          ] })
        ]
      },
      b.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: !!claimTarget, onOpenChange: () => resetDialog(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { "data-ocid": "business.discover.dialog", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: step === "done" ? "Claim Submitted!" : `Verify Ownership — ${claimTarget == null ? void 0 : claimTarget.name}` }) }),
      step === "phone" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Enter the phone number registered with this business to verify ownership." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Phone Number" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "+91 98765 43210",
              value: phone,
              onChange: (e) => setPhone(e.target.value),
              "data-ocid": "business.discover.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            className: "w-full",
            onClick: sendOtp,
            disabled: sendingOtp,
            "data-ocid": "business.discover.primary_button",
            children: [
              sendingOtp ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 14, className: "mr-2 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 14, className: "mr-2" }),
              sendingOtp ? "Sending OTP…" : "Send OTP"
            ]
          }
        )
      ] }),
      step === "otp" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "Enter the OTP sent to ",
          phone
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "OTP" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "Enter 6-digit OTP",
              value: otp,
              onChange: (e) => setOtp(e.target.value),
              maxLength: 6,
              "data-ocid": "business.discover.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            className: "w-full",
            onClick: submitClaim,
            "data-ocid": "business.discover.submit_button",
            children: "Submit Claim"
          }
        )
      ] }),
      step === "done" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-4 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 40, className: "mx-auto text-green-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Your claim is under admin review." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          "Once approved, ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: claimTarget == null ? void 0 : claimTarget.name }),
          " will be linked to your Family Tree."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            onClick: resetDialog,
            "data-ocid": "business.discover.close_button",
            children: "Close"
          }
        )
      ] })
    ] }) })
  ] });
}
const STORAGE_BIDS = "indyacentral-shop-bids";
function loadAuctions() {
  try {
    const raw = localStorage.getItem(STORAGE_BIDS);
    if (raw) return JSON.parse(raw);
  } catch {
  }
  return [
    {
      productId: "auction_1",
      productName: "Vintage Handloom Saree",
      currentBid: 1200,
      startingPrice: 800,
      endTime: new Date(Date.now() + 24 * 3600 * 1e3).toISOString(),
      bidCount: 5,
      seller: "Priya Textiles"
    },
    {
      productId: "auction_2",
      productName: "Antique Brass Lamp",
      currentBid: 3500,
      startingPrice: 2e3,
      endTime: new Date(Date.now() + 2 * 24 * 3600 * 1e3).toISOString(),
      bidCount: 12,
      seller: "Heritage Crafts"
    },
    {
      productId: "auction_3",
      productName: "Hand-painted Madhubani Art",
      currentBid: 850,
      startingPrice: 500,
      endTime: new Date(Date.now() + 6 * 3600 * 1e3).toISOString(),
      bidCount: 3,
      seller: "Bihar Art Gallery"
    }
  ];
}
function saveAuctions(list) {
  localStorage.setItem(STORAGE_BIDS, JSON.stringify(list));
}
function timeLeft(endTime) {
  const diff = new Date(endTime).getTime() - Date.now();
  if (diff <= 0) return "Ended";
  const h = Math.floor(diff / 36e5);
  const m = Math.floor(diff % 36e5 / 6e4);
  if (h > 24) return `${Math.floor(h / 24)}d left`;
  return `${h}h ${m}m left`;
}
function ShopAuctionTab() {
  const [auctions, setAuctions] = reactExports.useState(loadAuctions);
  const [bidTarget, setBidTarget] = reactExports.useState(null);
  const [bidAmount, setBidAmount] = reactExports.useState("");
  const [newAuction, setNewAuction] = reactExports.useState(false);
  const [newForm, setNewForm] = reactExports.useState({
    name: "",
    startingPrice: "",
    hours: "24"
  });
  const placeBid = () => {
    if (!bidTarget) return;
    const amt = Number(bidAmount);
    if (!amt || amt <= bidTarget.currentBid) {
      ue.error(
        `Bid must be higher than ₹${bidTarget.currentBid.toLocaleString("en-IN")}`
      );
      return;
    }
    setAuctions((prev) => {
      const updated = prev.map(
        (a) => a.productId === bidTarget.productId ? { ...a, currentBid: amt, bidCount: a.bidCount + 1 } : a
      );
      saveAuctions(updated);
      return updated;
    });
    ue.success(
      `Bid of ₹${amt.toLocaleString("en-IN")} placed successfully!`
    );
    setBidTarget(null);
    setBidAmount("");
  };
  const createAuction = () => {
    if (!newForm.name || !newForm.startingPrice) {
      ue.error("Fill in all fields");
      return;
    }
    const a = {
      productId: `auction_${Date.now()}`,
      productName: newForm.name,
      currentBid: Number(newForm.startingPrice),
      startingPrice: Number(newForm.startingPrice),
      endTime: new Date(
        Date.now() + Number(newForm.hours) * 36e5
      ).toISOString(),
      bidCount: 0,
      seller: "You"
    };
    setAuctions((prev) => {
      const updated = [a, ...prev];
      saveAuctions(updated);
      return updated;
    });
    setNewAuction(false);
    setNewForm({ name: "", startingPrice: "", hours: "24" });
    ue.success("Auction listing created!");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "shop.auction.panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-display font-bold", children: "🔨 Live Auctions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Bid on exclusive items — highest bid wins" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          onClick: () => setNewAuction(true),
          "data-ocid": "shop.auction.open_modal_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Gavel, { size: 13, className: "mr-1.5" }),
            "List Auction"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: auctions.map((a, i) => {
      const ended = new Date(a.endTime).getTime() < Date.now();
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "border-border/60 hover:shadow-md transition-shadow",
          "data-ocid": `shop.auction.item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2 pt-4 px-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold leading-tight", children: a.productName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    className: `text-[9px] shrink-0 ${ended ? "bg-muted text-muted-foreground" : "bg-amber-500/15 text-amber-700 border-amber-400/30 animate-pulse"}`,
                    children: ended ? "Ended" : "🔨 Auction"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground", children: [
                "by ",
                a.seller
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "px-4 pb-4 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-end", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: "Current Bid" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lg font-bold text-primary flex items-center gap-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { size: 14 }),
                    a.currentBid.toLocaleString("en-IN")
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground", children: [
                    a.bidCount,
                    " bids"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: `text-[10px] font-medium ${ended ? "text-muted-foreground" : "text-amber-600"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 9, className: "inline mr-0.5" }),
                        timeLeft(a.endTime)
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  className: "flex-1 h-8 text-xs",
                  disabled: ended,
                  onClick: () => {
                    setBidTarget(a);
                    setBidAmount(String(a.currentBid + 1));
                  },
                  "data-ocid": "shop.auction.primary_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 12, className: "mr-1" }),
                    ended ? "Auction Ended" : "Place Bid"
                  ]
                }
              ) })
            ] })
          ]
        },
        a.productId
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        open: !!bidTarget,
        onOpenChange: () => {
          setBidTarget(null);
          setBidAmount("");
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { "data-ocid": "shop.auction.dialog", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
            "Place Bid — ",
            bidTarget == null ? void 0 : bidTarget.productName
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Current Bid" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold", children: [
                "₹",
                bidTarget == null ? void 0 : bidTarget.currentBid.toLocaleString("en-IN")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Your Bid Amount (INR) — must be higher than current" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  value: bidAmount,
                  onChange: (e) => setBidAmount(e.target.value),
                  placeholder: `More than ₹${bidTarget == null ? void 0 : bidTarget.currentBid}`,
                  "data-ocid": "shop.auction.input"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                onClick: () => setBidTarget(null),
                "data-ocid": "shop.auction.cancel_button",
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: placeBid, "data-ocid": "shop.auction.confirm_button", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Gavel, { size: 13, className: "mr-1.5" }),
              "Confirm Bid"
            ] })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: newAuction, onOpenChange: setNewAuction, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { "data-ocid": "shop.auction.modal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Create Auction Listing" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Product / Item Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: newForm.name,
              onChange: (e) => setNewForm((f) => ({ ...f, name: e.target.value })),
              placeholder: "e.g. Antique Jewelry Box",
              "data-ocid": "shop.auction.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Starting Price (INR)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "number",
              value: newForm.startingPrice,
              onChange: (e) => setNewForm((f) => ({ ...f, startingPrice: e.target.value })),
              placeholder: "500",
              "data-ocid": "shop.auction.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Auction Duration" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              className: "w-full h-9 rounded-md border border-input bg-background px-3 text-sm",
              value: newForm.hours,
              onChange: (e) => setNewForm((f) => ({ ...f, hours: e.target.value })),
              "data-ocid": "shop.auction.select",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "6", children: "6 hours" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "12", children: "12 hours" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "24", children: "24 hours" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "48", children: "48 hours" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "72", children: "72 hours" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            onClick: () => setNewAuction(false),
            "data-ocid": "shop.auction.cancel_button",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: createAuction,
            "data-ocid": "shop.auction.submit_button",
            children: "Create Auction"
          }
        )
      ] })
    ] }) })
  ] });
}
const REVIEWS_KEY = "ic_reviews";
function getReviews() {
  try {
    return JSON.parse(localStorage.getItem(REVIEWS_KEY) || "[]");
  } catch {
    return [];
  }
}
function saveReview(review) {
  const all = getReviews();
  const idx = all.findIndex((r) => r.id === review.id);
  if (idx >= 0) {
    all[idx] = review;
  } else {
    all.push(review);
  }
  localStorage.setItem(REVIEWS_KEY, JSON.stringify(all));
}
function StarPicker({
  value,
  onChange
}) {
  const [hover, setHover] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onMouseEnter: () => setHover(i),
      onMouseLeave: () => setHover(0),
      onClick: () => onChange(i),
      className: "transition-transform hover:scale-110",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Star,
        {
          size: 22,
          className: (hover || value) >= i ? "fill-amber-400 text-amber-400" : "text-muted-foreground"
        }
      )
    },
    i
  )) });
}
function ReviewModal({
  targetId,
  targetType,
  targetName,
  currentRating = 0,
  reviewCount = 0
}) {
  const [open, setOpen] = reactExports.useState(false);
  const [stars, setStars] = reactExports.useState(0);
  const [comment, setComment] = reactExports.useState("");
  const existing = getReviews().filter((r) => r.targetId === targetId);
  function handleSubmit() {
    if (stars === 0) {
      ue.error("Please select a star rating");
      return;
    }
    const review = {
      id: `rev_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      targetId,
      targetType,
      stars,
      comment,
      author: "You",
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    saveReview(review);
    ue.success("Review submitted!");
    setStars(0);
    setComment("");
    setOpen(false);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        size: "sm",
        variant: "outline",
        className: "h-7 text-xs px-2 gap-1",
        "data-ocid": "review.open_modal_button",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Star,
            {
              size: 10,
              className: currentRating > 0 ? "fill-amber-400 text-amber-400" : ""
            }
          ),
          currentRating > 0 ? currentRating.toFixed(1) : "Rate",
          reviewCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
            "(",
            reviewCount,
            ")"
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-md", "data-ocid": "review.dialog", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-base font-display", children: "Rate & Review" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: targetName }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StarPicker, { value: stars, onChange: setStars }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            placeholder: "Share your experience (optional)…",
            value: comment,
            onChange: (e) => setComment(e.target.value),
            rows: 3,
            "data-ocid": "review.textarea"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            className: "w-full",
            onClick: handleSubmit,
            "data-ocid": "review.submit_button",
            children: "Submit Review"
          }
        )
      ] }),
      existing.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 space-y-2", "data-ocid": "review.list", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: [
          existing.length,
          " Review",
          existing.length !== 1 ? "s" : ""
        ] }),
        existing.slice(0, 5).map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "border border-border rounded-lg p-3 space-y-1",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Star,
                  {
                    size: 11,
                    className: r.stars >= i ? "fill-amber-400 text-amber-400" : "text-muted-foreground"
                  },
                  i
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: r.author }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground ml-auto", children: formatTimeAgo(r.createdAt) })
              ] }),
              r.comment && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground", children: r.comment })
            ]
          },
          r.id
        ))
      ] })
    ] })
  ] });
}
export {
  Agent11BusinessDiscovery as A,
  BusinessClaimsAdmin as B,
  DiscoverClaimTab as D,
  ReviewModal as R,
  ShopAuctionTab as S,
  getReviews as g
};
