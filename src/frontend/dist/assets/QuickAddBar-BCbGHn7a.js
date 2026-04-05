import { r as reactExports, j as jsxRuntimeExports, a as Button, P as Package, y as Briefcase, X, D as Dialog, F as DialogContent, G as DialogHeader, J as DialogTitle, K as DialogFooter, L as Label, I as Input, u as ue, T as Tabs, c as TabsList, d as TabsTrigger, e as TabsContent, S as Select, f as SelectTrigger, g as SelectValue, h as SelectContent, i as SelectItem, Y as Sparkles, B as Badge } from "./index-CRCVaugt.js";
import { C as Checkbox } from "./checkbox-CWgJ4BVd.js";
import { T as Textarea } from "./textarea-D6wf2djR.js";
import { S as Settings2 } from "./settings-2-Dm6RUSXc.js";
import { M as Megaphone } from "./megaphone-DCCbF8js.js";
import { U as Upload } from "./upload-D3d2Z2vL.js";
const STORAGE_KEY = "quickAddBar_dismissed";
function generateAIDescription(title, moduleName) {
  if (!title.trim()) return "";
  const templates = [
    `Premium quality ${title.toLowerCase()} designed for modern ${moduleName.toLowerCase()} needs. Crafted with attention to detail and built to last, this offering delivers exceptional value and performance.`,
    `Introducing ${title} — a top-tier solution for ${moduleName.toLowerCase()}. Trusted by thousands of users, it combines reliability with cutting-edge features to meet all your requirements.`,
    `Experience the best of ${title.toLowerCase()} with our expertly curated selection. Perfect for ${moduleName.toLowerCase()} enthusiasts, this product/service is backed by quality assurance and customer satisfaction guarantee.`
  ];
  return templates[title.length % 3];
}
function PriceComparisonPanel({
  title,
  price
}) {
  const numPrice = Number.parseFloat(price) || 0;
  const comparable = [
    {
      name: `${title} - Basic`,
      store: "ShopIndia",
      price: numPrice ? numPrice * 0.9 : 299
    },
    {
      name: `${title} Premium`,
      store: "Flipkart",
      price: numPrice ? numPrice * 1.1 : 399
    },
    {
      name: `${title} Standard`,
      store: "Amazon India",
      price: numPrice ? numPrice * 0.95 : 349
    },
    {
      name: `Similar ${title}`,
      store: "Meesho",
      price: numPrice ? numPrice * 0.85 : 279
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", "data-ocid": "quickadd.price_comparison.panel", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Price Comparison" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5", children: comparable.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center justify-between text-xs",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground truncate", children: item.store }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: `font-semibold ml-2 ${numPrice && item.price < numPrice ? "text-green-600" : "text-muted-foreground"}`,
              children: [
                "₹",
                item.price.toFixed(0)
              ]
            }
          )
        ]
      },
      item.store
    )) }),
    numPrice > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground mt-2", children: [
      "Your price: ₹",
      numPrice,
      " ",
      numPrice <= comparable[2].price ? "✓ Competitive" : "⚠ Above market avg"
    ] })
  ] });
}
function ImageUploadPanel({
  onDetected
}) {
  const [preview, setPreview] = reactExports.useState(null);
  const [detecting, setDetecting] = reactExports.useState(false);
  const [detected, setDetected] = reactExports.useState([]);
  const inputRef = reactExports.useRef(null);
  const handleFile = (file) => {
    const url = URL.createObjectURL(file);
    setPreview(url);
    setDetected([]);
  };
  const handleAutoDetect = () => {
    if (!preview) {
      ue.error("Upload an image first");
      return;
    }
    setDetecting(true);
    setTimeout(() => {
      const variants = [
        { label: "Color", value: "Ivory White" },
        { label: "Size", value: "Medium" },
        { label: "Material", value: "Cotton Blend" }
      ];
      setDetected(variants);
      onDetected == null ? void 0 : onDetected(variants);
      setDetecting(false);
      ue.success("Variants detected from image");
    }, 1200);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Product Image" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        className: "w-full border-2 border-dashed border-border rounded-lg p-4 text-center cursor-pointer hover:border-primary/50 transition-colors",
        onClick: () => {
          var _a;
          return (_a = inputRef.current) == null ? void 0 : _a.click();
        },
        "data-ocid": "quickadd.product.dropzone",
        children: preview ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: preview,
            alt: "preview",
            className: "h-24 mx-auto object-contain rounded"
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 20 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: "Click to upload image" })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ref: inputRef,
        type: "file",
        accept: "image/*",
        className: "hidden",
        onChange: (e) => {
          var _a;
          return ((_a = e.target.files) == null ? void 0 : _a[0]) && handleFile(e.target.files[0]);
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        type: "button",
        size: "sm",
        variant: "outline",
        className: "gap-1.5 text-xs",
        onClick: handleAutoDetect,
        disabled: detecting,
        "data-ocid": "quickadd.product.upload_button",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 12 }),
          detecting ? "Detecting..." : "Auto-detect Variants"
        ]
      }
    ),
    detected.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: detected.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-xs gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
        d.label,
        ":"
      ] }),
      " ",
      d.value
    ] }, d.label)) })
  ] });
}
const ROOM_TYPES = ["Single", "Double", "Suite", "Deluxe"];
const WEEK_RANGES = [
  "Mar 1–7",
  "Mar 8–14",
  "Mar 15–21",
  "Mar 22–31",
  "Apr 1–7",
  "Apr 8–14"
];
function RoomPricingCalendar() {
  const [rooms, setRooms] = reactExports.useState(ROOM_TYPES);
  const [prices, setPrices] = reactExports.useState(
    () => {
      const init = {};
      for (const r of ROOM_TYPES) {
        init[r] = {};
        for (const w of WEEK_RANGES) {
          init[r][w] = "";
        }
      }
      return init;
    }
  );
  const [newRoom, setNewRoom] = reactExports.useState("");
  const addRoom = () => {
    if (!newRoom.trim() || rooms.includes(newRoom.trim())) return;
    const name = newRoom.trim();
    setRooms((prev) => [...prev, name]);
    setPrices((prev) => {
      const updated = { ...prev };
      updated[name] = {};
      for (const w of WEEK_RANGES) {
        updated[name][w] = "";
      }
      return updated;
    });
    setNewRoom("");
  };
  const removeRoom = (r) => {
    setRooms((prev) => prev.filter((x) => x !== r));
    setPrices((prev) => {
      const updated = { ...prev };
      delete updated[r];
      return updated;
    });
  };
  const setPrice = (room, week, val) => {
    setPrices((prev) => ({
      ...prev,
      [room]: { ...prev[room], [week]: val }
    }));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-semibold", children: "Room Types & Pricing Calendar (₹/night)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-lg border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "text-xs min-w-max w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left font-medium", children: "Room Type" }),
        WEEK_RANGES.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "th",
          {
            className: "px-2 py-2 text-center font-medium whitespace-nowrap",
            children: w
          },
          w
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-2 py-2" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: rooms.map((room) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "tr",
        {
          className: "border-t border-border hover:bg-secondary/10",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5 font-medium whitespace-nowrap", children: room }),
            WEEK_RANGES.map((w) => {
              var _a;
              return /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-1.5 py-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  placeholder: "0",
                  className: "h-7 w-20 text-xs text-center",
                  value: ((_a = prices[room]) == null ? void 0 : _a[w]) ?? "",
                  onChange: (e) => setPrice(room, w, e.target.value)
                }
              ) }, w);
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-1.5 py-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                size: "icon",
                variant: "ghost",
                className: "h-6 w-6",
                onClick: () => removeRoom(room),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 10 })
              }
            ) })
          ]
        },
        room
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "h-7 text-xs",
          placeholder: "New room type (e.g. Presidential)",
          value: newRoom,
          onChange: (e) => setNewRoom(e.target.value),
          onKeyDown: (e) => e.key === "Enter" && addRoom()
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          size: "sm",
          variant: "outline",
          className: "text-xs",
          onClick: addRoom,
          children: "Add Room"
        }
      )
    ] })
  ] });
}
function TravelProductForm({ onSubmit }) {
  const AMENITIES = [
    "Pool",
    "Gym",
    "Spa",
    "Restaurant",
    "WiFi",
    "Parking",
    "Airport Shuttle"
  ];
  const [form, setForm] = reactExports.useState({
    name: "",
    stars: "",
    location: "",
    amenities: []
  });
  const toggleAmenity = (a) => setForm((p) => ({
    ...p,
    amenities: p.amenities.includes(a) ? p.amenities.filter((x) => x !== a) : [...p.amenities, a]
  }));
  const handleSubmit = () => {
    if (!form.name) {
      ue.error("Hotel name is required");
      return;
    }
    ue.success(`Hotel "${form.name}" submitted for approval`);
    onSubmit();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "basic", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "w-full text-xs mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "basic", className: "flex-1 text-xs", children: "Basic Info" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "pricing", className: "flex-1 text-xs", children: "Room Pricing" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "basic", className: "space-y-3 mt-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ImageUploadPanel, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Hotel Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            className: "mt-1",
            placeholder: "e.g. The Grand Palace",
            value: form.name,
            onChange: (e) => setForm((p) => ({ ...p, name: e.target.value })),
            "data-ocid": "quickadd.product.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Star Rating" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.stars,
              onValueChange: (v) => setForm((p) => ({ ...p, stars: v })),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SelectTrigger,
                  {
                    className: "mt-1 h-8 text-xs",
                    "data-ocid": "quickadd.product.select",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Stars" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["1", "2", "3", "4", "5"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectItem, { value: s, children: [
                  "★".repeat(Number(s)),
                  " ",
                  s,
                  "-Star"
                ] }, s)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Location" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "mt-1 h-8 text-xs",
              placeholder: "City / Area",
              value: form.location,
              onChange: (e) => setForm((p) => ({ ...p, location: e.target.value }))
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs mb-2 block", children: "Amenities" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: AMENITIES.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-1.5 text-xs cursor-pointer",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Checkbox,
                {
                  checked: form.amenities.includes(a),
                  onCheckedChange: () => toggleAmenity(a)
                }
              ),
              a
            ]
          },
          a
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "pricing", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RoomPricingCalendar, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end gap-2 pt-3 border-t border-border mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        size: "sm",
        onClick: handleSubmit,
        "data-ocid": "quickadd.product.submit_button",
        children: "Submit for Approval"
      }
    ) })
  ] });
}
function TravelServiceForm({ onSubmit }) {
  const [form, setForm] = reactExports.useState({
    type: "",
    hotel: "",
    time: "",
    price: "",
    description: ""
  });
  const handleSubmit = () => {
    if (!form.type) {
      ue.error("Service type is required");
      return;
    }
    ue.success("Travel service added");
    onSubmit();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Service Type" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: form.type,
          onValueChange: (v) => setForm((p) => ({ ...p, type: v })),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1", "data-ocid": "quickadd.service.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select type" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
              "Housekeeping",
              "Spa",
              "Airport Transfer",
              "Guided Tour",
              "Laundry",
              "Other"
            ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: t }, t)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Linked Hotel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "mt-1",
          placeholder: "Hotel name",
          value: form.hotel,
          onChange: (e) => setForm((p) => ({ ...p, hotel: e.target.value })),
          "data-ocid": "quickadd.service.input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Schedule / Time" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            className: "mt-1",
            type: "time",
            value: form.time,
            onChange: (e) => setForm((p) => ({ ...p, time: e.target.value }))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Price (INR)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            className: "mt-1",
            type: "number",
            placeholder: "e.g. 2500",
            value: form.price,
            onChange: (e) => setForm((p) => ({ ...p, price: e.target.value }))
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Description" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Textarea,
        {
          className: "mt-1",
          placeholder: "Service details...",
          value: form.description,
          onChange: (e) => setForm((p) => ({ ...p, description: e.target.value })),
          "data-ocid": "quickadd.service.textarea"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        size: "sm",
        onClick: handleSubmit,
        "data-ocid": "quickadd.service.submit_button",
        children: "Add Service"
      }
    ) })
  ] });
}
function TravelJobForm({ onSubmit }) {
  const [form, setForm] = reactExports.useState({
    role: "",
    shift: "",
    location: "",
    transport: "",
    languages: ""
  });
  const handleSubmit = () => {
    if (!form.role) {
      ue.error("Role is required");
      return;
    }
    ue.success("Travel job posted");
    onSubmit();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Role" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            value: form.role,
            onValueChange: (v) => setForm((p) => ({ ...p, role: v })),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1", "data-ocid": "quickadd.job.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select role" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                "Tour Guide",
                "Driver",
                "Hotel Staff",
                "Concierge",
                "Travel Agent"
              ].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: r, children: r }, r)) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Shift" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            value: form.shift,
            onValueChange: (v) => setForm((p) => ({ ...p, shift: v })),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Shift" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Morning", "Evening", "Night", "Flexible"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Work Location" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "mt-1",
          placeholder: "e.g. Goa / Remote",
          value: form.location,
          onChange: (e) => setForm((p) => ({ ...p, location: e.target.value })),
          "data-ocid": "quickadd.job.input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Transport Type" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "mt-1",
          placeholder: "e.g. SUV, Bus, Van",
          value: form.transport,
          onChange: (e) => setForm((p) => ({ ...p, transport: e.target.value }))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Languages Spoken (comma-separated)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "mt-1",
          placeholder: "e.g. Hindi, English, French",
          value: form.languages,
          onChange: (e) => setForm((p) => ({ ...p, languages: e.target.value }))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        size: "sm",
        onClick: handleSubmit,
        "data-ocid": "quickadd.job.submit_button",
        children: "Post Job"
      }
    ) })
  ] });
}
function HealthcareProductForm({ onSubmit }) {
  const [form, setForm] = reactExports.useState({
    name: "",
    category: "",
    sku: "",
    stock: "",
    reorder: "",
    supplier: ""
  });
  const handleSubmit = () => {
    if (!form.name) {
      ue.error("Item name is required");
      return;
    }
    ue.success("Healthcare product added");
    onSubmit();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ImageUploadPanel, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Item Name" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "mt-1",
          placeholder: "e.g. Digital Thermometer",
          value: form.name,
          onChange: (e) => setForm((p) => ({ ...p, name: e.target.value })),
          "data-ocid": "quickadd.product.input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Category" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: form.category,
          onValueChange: (v) => setForm((p) => ({ ...p, category: v })),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1", "data-ocid": "quickadd.product.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select category" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Equipment", "Supplies", "Consumables", "Pharmaceuticals"].map(
              (c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)
            ) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "SKU" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            className: "mt-1 h-8 text-xs",
            placeholder: "SKU-001",
            value: form.sku,
            onChange: (e) => setForm((p) => ({ ...p, sku: e.target.value }))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Stock" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            className: "mt-1 h-8 text-xs",
            type: "number",
            placeholder: "100",
            value: form.stock,
            onChange: (e) => setForm((p) => ({ ...p, stock: e.target.value }))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Reorder Level" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            className: "mt-1 h-8 text-xs",
            type: "number",
            placeholder: "20",
            value: form.reorder,
            onChange: (e) => setForm((p) => ({ ...p, reorder: e.target.value }))
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Supplier Name" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "mt-1",
          placeholder: "e.g. MedSupply India",
          value: form.supplier,
          onChange: (e) => setForm((p) => ({ ...p, supplier: e.target.value }))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        size: "sm",
        onClick: handleSubmit,
        "data-ocid": "quickadd.product.submit_button",
        children: "Add Product"
      }
    ) })
  ] });
}
function HealthcareServiceForm({ onSubmit }) {
  const [form, setForm] = reactExports.useState({
    type: "",
    duration: "",
    price: "",
    specialist: false,
    specialistType: ""
  });
  const handleSubmit = () => {
    if (!form.type) {
      ue.error("Service type is required");
      return;
    }
    ue.success("Healthcare service added");
    onSubmit();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Service Type" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: form.type,
          onValueChange: (v) => setForm((p) => ({ ...p, type: v })),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1", "data-ocid": "quickadd.service.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select type" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
              "Consultation",
              "Therapy",
              "Lab Test",
              "Surgery",
              "Diagnostic"
            ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: t }, t)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Duration (minutes)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            className: "mt-1",
            type: "number",
            placeholder: "30",
            value: form.duration,
            onChange: (e) => setForm((p) => ({ ...p, duration: e.target.value })),
            "data-ocid": "quickadd.service.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Price (INR)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            className: "mt-1",
            type: "number",
            placeholder: "500",
            value: form.price,
            onChange: (e) => setForm((p) => ({ ...p, price: e.target.value }))
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs cursor-pointer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Checkbox,
        {
          checked: form.specialist,
          onCheckedChange: (v) => setForm((p) => ({ ...p, specialist: Boolean(v) }))
        }
      ),
      "Requires Specialist"
    ] }),
    form.specialist && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Specialist Type" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "mt-1",
          placeholder: "e.g. Cardiologist",
          value: form.specialistType,
          onChange: (e) => setForm((p) => ({ ...p, specialistType: e.target.value }))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        size: "sm",
        onClick: handleSubmit,
        "data-ocid": "quickadd.service.submit_button",
        children: "Add Service"
      }
    ) })
  ] });
}
function HealthcareJobForm({ onSubmit }) {
  const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const [form, setForm] = reactExports.useState({
    role: "",
    specialization: "",
    license: "",
    availability: []
  });
  const toggleDay = (d) => setForm((p) => ({
    ...p,
    availability: p.availability.includes(d) ? p.availability.filter((x) => x !== d) : [...p.availability, d]
  }));
  const handleSubmit = () => {
    if (!form.role) {
      ue.error("Role is required");
      return;
    }
    ue.success("Healthcare job posted");
    onSubmit();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Role" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: form.role,
          onValueChange: (v) => setForm((p) => ({ ...p, role: v })),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1", "data-ocid": "quickadd.job.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select role" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Doctor", "Nurse", "Technician", "Therapist", "Pharmacist"].map(
              (r) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: r, children: r }, r)
            ) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Specialization" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "mt-1",
          placeholder: "e.g. Cardiology, Orthopedics",
          value: form.specialization,
          onChange: (e) => setForm((p) => ({ ...p, specialization: e.target.value })),
          "data-ocid": "quickadd.job.input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "License Number" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "mt-1",
          placeholder: "e.g. MCI-12345",
          value: form.license,
          onChange: (e) => setForm((p) => ({ ...p, license: e.target.value }))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs mb-2 block", children: "Availability" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: DAYS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-1.5 text-xs cursor-pointer",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Checkbox,
              {
                checked: form.availability.includes(d),
                onCheckedChange: () => toggleDay(d)
              }
            ),
            d
          ]
        },
        d
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        size: "sm",
        onClick: handleSubmit,
        "data-ocid": "quickadd.job.submit_button",
        children: "Post Job"
      }
    ) })
  ] });
}
function GatedProductForm({ onSubmit }) {
  const [form, setForm] = reactExports.useState({
    name: "",
    category: "",
    qty: "",
    reorder: "",
    location: ""
  });
  const handleSubmit = () => {
    if (!form.name) {
      ue.error("Item name required");
      return;
    }
    ue.success("Maintenance item added");
    onSubmit();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ImageUploadPanel, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Item Name" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "mt-1",
          placeholder: "e.g. Smoke Detector",
          value: form.name,
          onChange: (e) => setForm((p) => ({ ...p, name: e.target.value })),
          "data-ocid": "quickadd.product.input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Category" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: form.category,
          onValueChange: (v) => setForm((p) => ({ ...p, category: v })),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1", "data-ocid": "quickadd.product.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Category" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Maintenance", "Amenity", "Cleaning", "Security"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Quantity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            className: "mt-1 h-8 text-xs",
            type: "number",
            placeholder: "10",
            value: form.qty,
            onChange: (e) => setForm((p) => ({ ...p, qty: e.target.value }))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Reorder Level" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            className: "mt-1 h-8 text-xs",
            type: "number",
            placeholder: "3",
            value: form.reorder,
            onChange: (e) => setForm((p) => ({ ...p, reorder: e.target.value }))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Storage Location" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            className: "mt-1 h-8 text-xs",
            placeholder: "Store room A",
            value: form.location,
            onChange: (e) => setForm((p) => ({ ...p, location: e.target.value }))
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        size: "sm",
        onClick: handleSubmit,
        "data-ocid": "quickadd.product.submit_button",
        children: "Add Item"
      }
    ) })
  ] });
}
function GatedServiceForm({ onSubmit }) {
  const [form, setForm] = reactExports.useState({
    type: "",
    zone: "",
    frequency: "",
    price: ""
  });
  const handleSubmit = () => {
    if (!form.type) {
      ue.error("Service type required");
      return;
    }
    ue.success("Facility service added");
    onSubmit();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Service Type" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: form.type,
          onValueChange: (v) => setForm((p) => ({ ...p, type: v })),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1", "data-ocid": "quickadd.service.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select type" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
              "Facility Management",
              "Cleaning",
              "Security",
              "Plumbing",
              "Electrical",
              "Landscaping"
            ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: t }, t)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Zone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            className: "mt-1",
            placeholder: "e.g. Block A",
            value: form.zone,
            onChange: (e) => setForm((p) => ({ ...p, zone: e.target.value })),
            "data-ocid": "quickadd.service.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Frequency" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            value: form.frequency,
            onValueChange: (v) => setForm((p) => ({ ...p, frequency: v })),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Frequency" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Daily", "Weekly", "Monthly", "On-demand"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: f, children: f }, f)) })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Price (INR)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "mt-1",
          type: "number",
          placeholder: "1000",
          value: form.price,
          onChange: (e) => setForm((p) => ({ ...p, price: e.target.value }))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        size: "sm",
        onClick: handleSubmit,
        "data-ocid": "quickadd.service.submit_button",
        children: "Add Service"
      }
    ) })
  ] });
}
function GatedJobForm({ onSubmit }) {
  const [form, setForm] = reactExports.useState({ role: "", shift: "", zone: "" });
  const handleSubmit = () => {
    if (!form.role) {
      ue.error("Role required");
      return;
    }
    ue.success("Staff job posted");
    onSubmit();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Role" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: form.role,
          onValueChange: (v) => setForm((p) => ({ ...p, role: v })),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1", "data-ocid": "quickadd.job.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select role" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
              "Security Guard",
              "Maintenance",
              "Housekeeper",
              "Manager",
              "Electrician",
              "Plumber"
            ].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: r, children: r }, r)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Shift" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            value: form.shift,
            onValueChange: (v) => setForm((p) => ({ ...p, shift: v })),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Shift" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Morning", "Evening", "Night", "24hr"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Property Zone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            className: "mt-1",
            placeholder: "e.g. Zone B",
            value: form.zone,
            onChange: (e) => setForm((p) => ({ ...p, zone: e.target.value })),
            "data-ocid": "quickadd.job.input"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        size: "sm",
        onClick: handleSubmit,
        "data-ocid": "quickadd.job.submit_button",
        children: "Post Job"
      }
    ) })
  ] });
}
function RealEstateProductForm({ onSubmit }) {
  const [form, setForm] = reactExports.useState({
    name: "",
    category: "",
    condition: "",
    price: ""
  });
  const handleSubmit = () => {
    if (!form.name) {
      ue.error("Item name required");
      return;
    }
    ue.success("Property item added");
    onSubmit();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ImageUploadPanel, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Item Name" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "mt-1",
          placeholder: "e.g. Oak Hardwood Flooring",
          value: form.name,
          onChange: (e) => setForm((p) => ({ ...p, name: e.target.value })),
          "data-ocid": "quickadd.product.input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Category" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            value: form.category,
            onValueChange: (v) => setForm((p) => ({ ...p, category: v })),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1", "data-ocid": "quickadd.product.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Category" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                "Fittings",
                "Fixtures",
                "Appliances",
                "Furniture",
                "Flooring"
              ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Condition" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            value: form.condition,
            onValueChange: (v) => setForm((p) => ({ ...p, condition: v })),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Condition" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["New", "Good", "Fair"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Price (INR)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "mt-1",
          type: "number",
          placeholder: "50000",
          value: form.price,
          onChange: (e) => setForm((p) => ({ ...p, price: e.target.value }))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        size: "sm",
        onClick: handleSubmit,
        "data-ocid": "quickadd.product.submit_button",
        children: "Add Item"
      }
    ) })
  ] });
}
function RealEstateServiceForm({ onSubmit }) {
  const [form, setForm] = reactExports.useState({
    type: "",
    area: "",
    duration: "",
    price: ""
  });
  const handleSubmit = () => {
    if (!form.type) {
      ue.error("Service type required");
      return;
    }
    ue.success("Property service added");
    onSubmit();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Service Type" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: form.type,
          onValueChange: (v) => setForm((p) => ({ ...p, type: v })),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1", "data-ocid": "quickadd.service.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select type" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
              "Property Management",
              "Valuation",
              "Inspection",
              "Renovation",
              "Staging"
            ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: t }, t)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Area (sq ft)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            className: "mt-1 h-8 text-xs",
            type: "number",
            placeholder: "1200",
            value: form.area,
            onChange: (e) => setForm((p) => ({ ...p, area: e.target.value })),
            "data-ocid": "quickadd.service.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Duration (days)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            className: "mt-1 h-8 text-xs",
            type: "number",
            placeholder: "7",
            value: form.duration,
            onChange: (e) => setForm((p) => ({ ...p, duration: e.target.value }))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Price (INR)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            className: "mt-1 h-8 text-xs",
            type: "number",
            placeholder: "5000",
            value: form.price,
            onChange: (e) => setForm((p) => ({ ...p, price: e.target.value }))
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        size: "sm",
        onClick: handleSubmit,
        "data-ocid": "quickadd.service.submit_button",
        children: "Add Service"
      }
    ) })
  ] });
}
function RealEstateJobForm({ onSubmit }) {
  const [form, setForm] = reactExports.useState({ role: "", license: "", area: "" });
  const handleSubmit = () => {
    if (!form.role) {
      ue.error("Role required");
      return;
    }
    ue.success("Real estate job posted");
    onSubmit();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Role" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: form.role,
          onValueChange: (v) => setForm((p) => ({ ...p, role: v })),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1", "data-ocid": "quickadd.job.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select role" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
              "Agent",
              "Maintenance",
              "Surveyor",
              "Property Manager",
              "Architect"
            ].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: r, children: r }, r)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "License Number" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "mt-1",
          placeholder: "e.g. RERA-MH-12345",
          value: form.license,
          onChange: (e) => setForm((p) => ({ ...p, license: e.target.value })),
          "data-ocid": "quickadd.job.input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Area Specialization" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "mt-1",
          placeholder: "e.g. South Mumbai, Bandra",
          value: form.area,
          onChange: (e) => setForm((p) => ({ ...p, area: e.target.value }))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        size: "sm",
        onClick: handleSubmit,
        "data-ocid": "quickadd.job.submit_button",
        children: "Post Job"
      }
    ) })
  ] });
}
const GRADE_LEVELS = [
  "Pre-K",
  "Kindergarten",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
  "Grade 11",
  "Grade 12",
  "University"
];
function EducationProductForm({ onSubmit }) {
  const [form, setForm] = reactExports.useState({
    name: "",
    category: "",
    subject: "",
    grade: "",
    isbn: ""
  });
  const handleSubmit = () => {
    if (!form.name) {
      ue.error("Item name required");
      return;
    }
    ue.success("Education item added");
    onSubmit();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ImageUploadPanel, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Item Name" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "mt-1",
          placeholder: "e.g. Mathematics Textbook Std 10",
          value: form.name,
          onChange: (e) => setForm((p) => ({ ...p, name: e.target.value })),
          "data-ocid": "quickadd.product.input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Category" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            value: form.category,
            onValueChange: (v) => setForm((p) => ({ ...p, category: v })),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1", "data-ocid": "quickadd.product.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Category" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                "Books",
                "Stationery",
                "Library Item",
                "Uniform",
                "Lab Equipment"
              ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Grade Level" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            value: form.grade,
            onValueChange: (v) => setForm((p) => ({ ...p, grade: v })),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Grade" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: GRADE_LEVELS.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: g, children: g }, g)) })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Subject" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "mt-1",
          placeholder: "e.g. Mathematics",
          value: form.subject,
          onChange: (e) => setForm((p) => ({ ...p, subject: e.target.value }))
        }
      )
    ] }),
    form.category === "Books" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "ISBN" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "mt-1",
          placeholder: "978-3-16-148410-0",
          value: form.isbn,
          onChange: (e) => setForm((p) => ({ ...p, isbn: e.target.value }))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        size: "sm",
        onClick: handleSubmit,
        "data-ocid": "quickadd.product.submit_button",
        children: "Add Item"
      }
    ) })
  ] });
}
function EducationServiceForm({ onSubmit }) {
  const [form, setForm] = reactExports.useState({
    type: "",
    subject: "",
    grade: "",
    duration: "",
    price: ""
  });
  const handleSubmit = () => {
    if (!form.type) {
      ue.error("Service type required");
      return;
    }
    ue.success("Education service added");
    onSubmit();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Service Type" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: form.type,
          onValueChange: (v) => setForm((p) => ({ ...p, type: v })),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1", "data-ocid": "quickadd.service.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select type" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
              "Tutoring",
              "Coaching",
              "Counselling",
              "Library Access",
              "Online Course"
            ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: t }, t)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Subject" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            className: "mt-1",
            placeholder: "e.g. Physics",
            value: form.subject,
            onChange: (e) => setForm((p) => ({ ...p, subject: e.target.value })),
            "data-ocid": "quickadd.service.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Grade Level" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            value: form.grade,
            onValueChange: (v) => setForm((p) => ({ ...p, grade: v })),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Grade" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: GRADE_LEVELS.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: g, children: g }, g)) })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Duration / Session (min)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            className: "mt-1",
            type: "number",
            placeholder: "60",
            value: form.duration,
            onChange: (e) => setForm((p) => ({ ...p, duration: e.target.value }))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Price / Session (INR)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            className: "mt-1",
            type: "number",
            placeholder: "500",
            value: form.price,
            onChange: (e) => setForm((p) => ({ ...p, price: e.target.value }))
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        size: "sm",
        onClick: handleSubmit,
        "data-ocid": "quickadd.service.submit_button",
        children: "Add Service"
      }
    ) })
  ] });
}
function EducationJobForm({ onSubmit }) {
  const [form, setForm] = reactExports.useState({
    role: "",
    subject: "",
    grade: "",
    qualification: ""
  });
  const handleSubmit = () => {
    if (!form.role) {
      ue.error("Role required");
      return;
    }
    ue.success("Education job posted");
    onSubmit();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Role" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: form.role,
          onValueChange: (v) => setForm((p) => ({ ...p, role: v })),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1", "data-ocid": "quickadd.job.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select role" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
              "Teacher",
              "Admin",
              "Support Staff",
              "Librarian",
              "Counsellor"
            ].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: r, children: r }, r)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Subject Taught" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            className: "mt-1",
            placeholder: "e.g. Biology",
            value: form.subject,
            onChange: (e) => setForm((p) => ({ ...p, subject: e.target.value })),
            "data-ocid": "quickadd.job.input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Grade Level" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            value: form.grade,
            onValueChange: (v) => setForm((p) => ({ ...p, grade: v })),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Grade" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: GRADE_LEVELS.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: g, children: g }, g)) })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Qualification" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "mt-1",
          placeholder: "e.g. B.Ed, M.Sc",
          value: form.qualification,
          onChange: (e) => setForm((p) => ({ ...p, qualification: e.target.value }))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        size: "sm",
        onClick: handleSubmit,
        "data-ocid": "quickadd.job.submit_button",
        children: "Post Job"
      }
    ) })
  ] });
}
function GenericProductForm({
  moduleName,
  onSubmit
}) {
  const [form, setForm] = reactExports.useState({
    name: "",
    category: "",
    price: "",
    description: ""
  });
  const handleSubmit = () => {
    if (!form.name) {
      ue.error("Product name is required");
      return;
    }
    try {
      const existing = JSON.parse(
        localStorage.getItem("ic_user_products") || "[]"
      );
      const newProduct = {
        id: `${Date.now()}-${Math.random()}`,
        name: form.name,
        description: form.description,
        price: Number.parseFloat(form.price) || 0,
        category: form.category || "Other",
        seller: "You",
        isService: false,
        sourceModule: moduleName
      };
      existing.push(newProduct);
      localStorage.setItem("ic_user_products", JSON.stringify(existing));
    } catch {
    }
    ue.success(
      `Product "${form.name}" added to Shop and linked to ${moduleName}`
    );
    onSubmit();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ImageUploadPanel, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Product Name" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "mt-1",
          placeholder: "e.g. Organic Honey 500g",
          value: form.name,
          onChange: (e) => setForm((p) => ({ ...p, name: e.target.value })),
          "data-ocid": "quickadd.product.input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Category" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: form.category,
          onValueChange: (v) => setForm((p) => ({ ...p, category: v })),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1", "data-ocid": "quickadd.product.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select category" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
              "Food & Grocery",
              "Electronics",
              "Clothing",
              "Health & Beauty",
              "Education",
              "Travel",
              "Other"
            ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Price (INR)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "mt-1",
          type: "number",
          placeholder: "499",
          value: form.price,
          onChange: (e) => setForm((p) => ({ ...p, price: e.target.value }))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Description" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            className: "mt-1 flex-1",
            placeholder: "Brief description...",
            value: form.description,
            onChange: (e) => setForm((p) => ({ ...p, description: e.target.value })),
            "data-ocid": "quickadd.product.textarea"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            size: "sm",
            variant: "outline",
            className: "h-9 text-xs shrink-0",
            onClick: () => {
              const desc = generateAIDescription(form.name, moduleName);
              setForm((p) => ({ ...p, description: desc }));
              ue.success("AI description generated");
            },
            "data-ocid": "quickadd.product.secondary_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 12, className: "mr-1" }),
              "AI"
            ]
          }
        )
      ] })
    ] }),
    form.price && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-border p-3 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PriceComparisonPanel, { title: form.name, price: form.price }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        size: "sm",
        onClick: handleSubmit,
        "data-ocid": "quickadd.product.submit_button",
        children: "Add Product"
      }
    ) })
  ] });
}
function GenericServiceForm({
  moduleName,
  onSubmit
}) {
  const [form, setForm] = reactExports.useState({
    name: "",
    category: "",
    rate: "",
    description: ""
  });
  const handleSubmit = () => {
    if (!form.name) {
      ue.error("Service name is required");
      return;
    }
    try {
      const existing = JSON.parse(
        localStorage.getItem("ic_user_products") || "[]"
      );
      existing.push({
        id: `${Date.now()}-${Math.random()}`,
        name: form.name,
        description: form.description,
        price: Number.parseFloat(form.rate) || 0,
        category: form.category || "Services",
        seller: "You",
        isService: true,
        sourceModule: moduleName
      });
      localStorage.setItem("ic_user_products", JSON.stringify(existing));
    } catch {
    }
    ue.success(
      `Service "${form.name}" added to Shop and linked to ${moduleName}`
    );
    onSubmit();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Service Name" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "mt-1",
          placeholder: "e.g. Home Cleaning",
          value: form.name,
          onChange: (e) => setForm((p) => ({ ...p, name: e.target.value })),
          "data-ocid": "quickadd.service.input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Category" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: form.category,
          onValueChange: (v) => setForm((p) => ({ ...p, category: v })),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select category" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
              "Home Services",
              "Tech Support",
              "Healthcare",
              "Tutoring / Education",
              "Transport",
              "Hospitality",
              "Other"
            ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Rate / Price (INR)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "mt-1",
          type: "number",
          placeholder: "1500",
          value: form.rate,
          onChange: (e) => setForm((p) => ({ ...p, rate: e.target.value }))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Description" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Textarea,
        {
          className: "mt-1",
          placeholder: "Brief description...",
          value: form.description,
          onChange: (e) => setForm((p) => ({ ...p, description: e.target.value })),
          "data-ocid": "quickadd.service.textarea"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        size: "sm",
        onClick: handleSubmit,
        "data-ocid": "quickadd.service.submit_button",
        children: "Add Service"
      }
    ) })
  ] });
}
function GenericJobForm({
  moduleName,
  onSubmit
}) {
  const [form, setForm] = reactExports.useState({
    title: "",
    type: "",
    location: "",
    salary: "",
    description: ""
  });
  const handleSubmit = () => {
    if (!form.title) {
      ue.error("Job title is required");
      return;
    }
    ue.success(`Job "${form.title}" posted and linked to ${moduleName}`);
    onSubmit();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Job Title" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "mt-1",
          placeholder: "e.g. Senior Developer",
          value: form.title,
          onChange: (e) => setForm((p) => ({ ...p, title: e.target.value })),
          "data-ocid": "quickadd.job.input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Employment Type" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          value: form.type,
          onValueChange: (v) => setForm((p) => ({ ...p, type: v })),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "mt-1", "data-ocid": "quickadd.job.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select type" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
              "Full-Time",
              "Part-Time",
              "Freelance",
              "Contract",
              "Internship"
            ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: t }, t)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Location" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "mt-1",
          placeholder: "e.g. Mumbai / Remote",
          value: form.location,
          onChange: (e) => setForm((p) => ({ ...p, location: e.target.value }))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Salary / Rate (INR)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          className: "mt-1",
          placeholder: "e.g. 50000/month",
          value: form.salary,
          onChange: (e) => setForm((p) => ({ ...p, salary: e.target.value }))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Description" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Textarea,
        {
          className: "mt-1",
          placeholder: "Job responsibilities...",
          value: form.description,
          onChange: (e) => setForm((p) => ({ ...p, description: e.target.value })),
          "data-ocid": "quickadd.job.textarea"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        size: "sm",
        onClick: handleSubmit,
        "data-ocid": "quickadd.job.submit_button",
        children: "Post Job"
      }
    ) })
  ] });
}
function normalizeModule(name) {
  const lower = name.toLowerCase();
  if (lower.includes("travel")) return "travel";
  if (lower.includes("health")) return "healthcare";
  if (lower.includes("gated")) return "gated";
  if (lower.includes("real") || lower.includes("estate")) return "real-estate";
  if (lower.includes("edu") || lower.includes("school") || lower.includes("academy"))
    return "education";
  return "default";
}
function getProductForm(module, onSubmit, moduleName) {
  if (module === "travel") return /* @__PURE__ */ jsxRuntimeExports.jsx(TravelProductForm, { onSubmit });
  if (module === "healthcare")
    return /* @__PURE__ */ jsxRuntimeExports.jsx(HealthcareProductForm, { onSubmit });
  if (module === "gated") return /* @__PURE__ */ jsxRuntimeExports.jsx(GatedProductForm, { onSubmit });
  if (module === "real-estate" || module === "realestate")
    return /* @__PURE__ */ jsxRuntimeExports.jsx(RealEstateProductForm, { onSubmit });
  if (module === "education")
    return /* @__PURE__ */ jsxRuntimeExports.jsx(EducationProductForm, { onSubmit });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(GenericProductForm, { moduleName, onSubmit });
}
function getServiceForm(module, onSubmit, moduleName) {
  if (module === "travel") return /* @__PURE__ */ jsxRuntimeExports.jsx(TravelServiceForm, { onSubmit });
  if (module === "healthcare")
    return /* @__PURE__ */ jsxRuntimeExports.jsx(HealthcareServiceForm, { onSubmit });
  if (module === "gated") return /* @__PURE__ */ jsxRuntimeExports.jsx(GatedServiceForm, { onSubmit });
  if (module === "real-estate" || module === "realestate")
    return /* @__PURE__ */ jsxRuntimeExports.jsx(RealEstateServiceForm, { onSubmit });
  if (module === "education")
    return /* @__PURE__ */ jsxRuntimeExports.jsx(EducationServiceForm, { onSubmit });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(GenericServiceForm, { moduleName, onSubmit });
}
function getJobForm(module, onSubmit, moduleName) {
  if (module === "travel") return /* @__PURE__ */ jsxRuntimeExports.jsx(TravelJobForm, { onSubmit });
  if (module === "healthcare") return /* @__PURE__ */ jsxRuntimeExports.jsx(HealthcareJobForm, { onSubmit });
  if (module === "gated") return /* @__PURE__ */ jsxRuntimeExports.jsx(GatedJobForm, { onSubmit });
  if (module === "real-estate" || module === "realestate")
    return /* @__PURE__ */ jsxRuntimeExports.jsx(RealEstateJobForm, { onSubmit });
  if (module === "education") return /* @__PURE__ */ jsxRuntimeExports.jsx(EducationJobForm, { onSubmit });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(GenericJobForm, { moduleName, onSubmit });
}
function QuickAddBar({ moduleName }) {
  const [dismissed, setDismissed] = reactExports.useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved).includes(moduleName) : false;
    } catch {
      return false;
    }
  });
  const [productOpen, setProductOpen] = reactExports.useState(false);
  const [serviceOpen, setServiceOpen] = reactExports.useState(false);
  const [jobOpen, setJobOpen] = reactExports.useState(false);
  const [adOpen, setAdOpen] = reactExports.useState(false);
  const [adForm, setAdForm] = reactExports.useState({
    title: "",
    description: "",
    budget: "",
    isAdult: false
  });
  const moduleKey = normalizeModule(moduleName);
  const dismiss = () => {
    setDismissed(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const arr = saved ? JSON.parse(saved) : [];
      if (!arr.includes(moduleName)) arr.push(moduleName);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
    } catch {
    }
  };
  if (dismissed) return null;
  const getDialogTitle = (type) => {
    var _a;
    const labels = {
      travel: {
        Product: "Hotel & Rooms",
        Service: "Travel Service",
        Job: "Travel Role"
      },
      healthcare: {
        Product: "Medical Item",
        Service: "Healthcare Service",
        Job: "Healthcare Role"
      },
      gated: {
        Product: "Maintenance Item",
        Service: "Facility Service",
        Job: "Staff Role"
      },
      "real-estate": {
        Product: "Property Item",
        Service: "Property Service",
        Job: "Property Role"
      },
      realestate: {
        Product: "Property Item",
        Service: "Property Service",
        Job: "Property Role"
      },
      education: {
        Product: "Education Item",
        Service: "Academic Service",
        Job: "Education Role"
      },
      default: { Product: "Product", Service: "Service", Job: "Job" }
    };
    return `Add ${((_a = labels[moduleKey]) == null ? void 0 : _a[type]) ?? type} — ${moduleName}`;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "mx-4 mb-4 flex flex-wrap items-center gap-2 px-3 py-2 rounded-xl border",
        style: {
          background: "oklch(var(--primary) / 0.04)",
          borderColor: "oklch(var(--primary) / 0.15)"
        },
        "data-ocid": "quickadd.panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-muted-foreground mr-1", children: "Quick Add:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "h-7 text-xs gap-1",
              onClick: () => setProductOpen(true),
              "data-ocid": "quickadd.product.button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 12 }),
                "+",
                " ",
                moduleKey === "travel" ? "Hotel" : moduleKey === "gated" ? "Item" : "Product"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "h-7 text-xs gap-1",
              onClick: () => setServiceOpen(true),
              "data-ocid": "quickadd.service.button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Settings2, { size: 12 }),
                "+",
                " ",
                moduleKey === "travel" ? "Travel Service" : moduleKey === "gated" ? "Facility Service" : "Service"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "h-7 text-xs gap-1",
              onClick: () => setJobOpen(true),
              "data-ocid": "quickadd.job.button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 12 }),
                "+",
                " ",
                moduleKey === "travel" ? "Travel Role" : moduleKey === "healthcare" ? "Healthcare Role" : "Job"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              className: "h-7 text-xs gap-1 ml-auto",
              onClick: () => setAdOpen(true),
              "data-ocid": "quickadd.ad.button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { size: 12 }),
                "+ Promote"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "ghost",
              className: "h-7 w-7 p-0 text-muted-foreground hover:text-foreground",
              onClick: dismiss,
              "data-ocid": "quickadd.close_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 12 })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: productOpen, onOpenChange: setProductOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      DialogContent,
      {
        className: "max-w-2xl max-h-[90vh] overflow-y-auto",
        "data-ocid": "quickadd.product.dialog",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: getDialogTitle("Product") }) }),
          getProductForm(moduleKey, () => setProductOpen(false), moduleName),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogFooter, { className: "hidden" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: serviceOpen, onOpenChange: setServiceOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      DialogContent,
      {
        className: "max-w-lg max-h-[90vh] overflow-y-auto",
        "data-ocid": "quickadd.service.dialog",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: getDialogTitle("Service") }) }),
          getServiceForm(moduleKey, () => setServiceOpen(false), moduleName),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogFooter, { className: "hidden" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: jobOpen, onOpenChange: setJobOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      DialogContent,
      {
        className: "max-w-lg max-h-[90vh] overflow-y-auto",
        "data-ocid": "quickadd.job.dialog",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: getDialogTitle("Job") }) }),
          getJobForm(moduleKey, () => setJobOpen(false), moduleName),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogFooter, { className: "hidden" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: adOpen, onOpenChange: setAdOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-md", "data-ocid": "quickadd.ad.dialog", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Megaphone, { size: 16, className: "text-primary" }),
        "Place Ad / Promotion — ",
        moduleName
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Ad Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "mt-1",
              placeholder: "e.g. Summer Sale 50% Off",
              value: adForm.title,
              onChange: (e) => setAdForm((p) => ({ ...p, title: e.target.value })),
              "data-ocid": "quickadd.ad.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              className: "mt-1",
              placeholder: "Describe your promotion...",
              value: adForm.description,
              onChange: (e) => setAdForm((p) => ({ ...p, description: e.target.value })),
              "data-ocid": "quickadd.ad.textarea"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Budget (INR)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              className: "mt-1",
              type: "number",
              placeholder: "e.g. 5000",
              value: adForm.budget,
              onChange: (e) => setAdForm((p) => ({ ...p, budget: e.target.value }))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "checkbox",
              id: "adult-content",
              checked: adForm.isAdult,
              onChange: (e) => setAdForm((p) => ({ ...p, isAdult: e.target.checked })),
              className: "rounded",
              "data-ocid": "quickadd.ad.checkbox"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "adult-content", className: "text-xs", children: "18+ Content (requires age verification)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              variant: "outline",
              onClick: () => setAdOpen(false),
              "data-ocid": "quickadd.ad.cancel_button",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              onClick: () => {
                if (!adForm.title) {
                  ue.error("Ad title required");
                  return;
                }
                ue.success("Ad submitted for admin approval");
                setAdOpen(false);
                setAdForm({
                  title: "",
                  description: "",
                  budget: "",
                  isAdult: false
                });
              },
              "data-ocid": "quickadd.ad.submit_button",
              children: "Submit for Approval"
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}
export {
  QuickAddBar as Q
};
