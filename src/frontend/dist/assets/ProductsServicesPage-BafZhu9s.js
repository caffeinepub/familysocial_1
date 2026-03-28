import { k as createLucideIcon, a8 as useCurrency, r as reactExports, j as jsxRuntimeExports, T as Tabs, c as TabsList, d as TabsTrigger, P as Package, D as Dialog, z as DialogTrigger, a as Button, K as Plus, E as DialogContent, F as DialogHeader, G as DialogTitle, a9 as ScrollArea, I as Input, L as Label, S as Select, f as SelectTrigger, g as SelectValue, h as SelectContent, i as SelectItem, $ as Switch, aD as ChevronUp, _ as ChevronDown, e as TabsContent, u as ue, X, B as Badge, t as Clock, o as TriangleAlert } from "./index-CuoHjzF3.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-BKToLjvu.js";
import { T as Textarea } from "./textarea-BEezV4qu.js";
import { E as EventsTab } from "./EventsTab-BJq6quuV.js";
import { W as Wrench } from "./wrench-C3c8dd9j.js";
import { C as CalendarDays } from "./calendar-days-CXBsLXie.js";
import { T as Truck } from "./truck-BU24npLK.js";
import { L as Layers } from "./layers-R2kkatN3.js";
import { T as Trash2 } from "./trash-2-BdLi1tsm.js";
import { C as Calendar } from "./calendar-BLOauReA.js";
import { S as Star } from "./star-BtDepPZz.js";
import { T as ThumbsUp } from "./thumbs-up-iDmQwOPU.js";
import "./share-2-BbVKweiM.js";
import "./lock-BX5f4bC1.js";
import "./globe-DYI_z5M5.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
];
const ChartColumn = createLucideIcon("chart-column", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M16 5h6", key: "1vod17" }],
  ["path", { d: "M19 2v6", key: "4bpg5p" }],
  ["path", { d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5", key: "1ue2ih" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }]
];
const ImagePlus = createLucideIcon("image-plus", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M17 14V2", key: "8ymqnk" }],
  [
    "path",
    {
      d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",
      key: "m61m77"
    }
  ]
];
const ThumbsDown = createLucideIcon("thumbs-down", __iconNode);
const SAMPLE_PRODUCTS = [
  {
    id: 1,
    name: "Honda Civic 2022",
    description: "Well-maintained Honda Civic with leather seats, sunroof, and new tires. Perfect for families.",
    price: 45e5,
    category: "Vehicles",
    isRental: true,
    rentalPricePerDay: 5e3,
    rating: 4.8,
    seller: "Khalid Hassan",
    photos: [],
    variants: [
      {
        name: "Fuel Type",
        options: [
          { label: "Petrol", priceModifier: 0, stock: 1 },
          { label: "Hybrid", priceModifier: 5e4, stock: 1 }
        ]
      }
    ],
    rentalStartDate: "2026-03-01",
    rentalEndDate: "2026-06-30",
    inventory: {
      purchasePrice: 38e5,
      stockQty: 2,
      reorderLevel: 1,
      sku: "VEH-HC-2022"
    },
    supplier: {
      name: "Honda Pakistan Ltd.",
      type: "manufacturer",
      contact: "+92-21-111-466-322",
      rawMaterialSupplier: void 0,
      jobWorkParty: void 0
    }
  },
  {
    id: 2,
    name: 'MacBook Pro 16"',
    description: "M2 Pro chip, 16GB RAM, 512GB SSD. Excellent condition with original box and accessories.",
    price: 32e4,
    category: "Electronics",
    isRental: false,
    rating: 4.9,
    seller: "Omar Tech Store",
    photos: [],
    variants: [
      {
        name: "Storage",
        options: [
          { label: "512 GB", priceModifier: 0, stock: 3 },
          { label: "1 TB", priceModifier: 4e4, stock: 2 }
        ]
      },
      {
        name: "RAM",
        options: [
          { label: "16 GB", priceModifier: 0, stock: 3 },
          { label: "32 GB", priceModifier: 6e4, stock: 1 }
        ]
      }
    ],
    inventory: {
      purchasePrice: 265e3,
      stockQty: 5,
      reorderLevel: 2,
      sku: "ELEC-MBP-16-M2"
    },
    supplier: {
      name: "Apple Authorized Distributor",
      type: "manufacturer",
      contact: "+92-51-2345678"
    }
  },
  {
    id: 3,
    name: "Bridal Lehenga Set",
    description: "Stunning hand-embroidered bridal lehenga in deep maroon and gold. Size M, worn once.",
    price: 85e3,
    category: "Fashion",
    isRental: true,
    rentalPricePerDay: 8e3,
    rating: 5,
    seller: "Sana Boutique",
    photos: [],
    variants: [
      {
        name: "Size",
        options: [
          { label: "S", priceModifier: 0, stock: 1 },
          { label: "M", priceModifier: 0, stock: 1 },
          { label: "L", priceModifier: 2e3, stock: 1 }
        ]
      }
    ],
    rentalStartDate: "2026-03-15",
    rentalEndDate: "2026-12-31",
    inventory: {
      purchasePrice: 48e3,
      stockQty: 3,
      reorderLevel: 5,
      sku: "FASH-BLS-RED-M"
    },
    supplier: {
      name: "Rang Mahal Fabrics",
      type: "raw_material",
      contact: "+92-42-7654321",
      rawMaterialSupplier: "Gul Ahmed Textile Mills"
    }
  },
  {
    id: 4,
    name: "Party Tent & Furniture",
    description: "Complete party setup: large marquee tent, 200 chairs, 20 tables. Available for rent.",
    price: 0,
    category: "Events",
    isRental: true,
    rentalPricePerDay: 45e3,
    rating: 4.6,
    seller: "Events by Malik",
    photos: [],
    variants: [
      {
        name: "Capacity",
        options: [
          { label: "100 guests", priceModifier: 0, stock: 2 },
          { label: "200 guests", priceModifier: 2e4, stock: 1 },
          { label: "500 guests", priceModifier: 6e4, stock: 1 }
        ]
      }
    ],
    rentalStartDate: "2026-03-01",
    rentalEndDate: "2026-12-31",
    inventory: {
      purchasePrice: 32e4,
      stockQty: 4,
      reorderLevel: 1,
      sku: "EVT-TENT-FULL"
    },
    supplier: {
      name: "Decorex Pakistan",
      type: "job_work",
      contact: "+92-300-1234567",
      jobWorkParty: "Malik Tent Works Lahore"
    }
  }
];
const SAMPLE_SERVICES = [
  {
    id: 1,
    name: "Home Tutoring — Mathematics",
    description: "Expert math tutoring for O & A levels. 10+ years experience. Home visits available.",
    pricePerHour: 1500,
    category: "Education",
    isBookable: true,
    provider: "Prof. Adnan Khan",
    rating: 4.9,
    photos: [],
    variants: [
      {
        name: "Session Duration",
        options: [
          { label: "1 hour", priceModifier: 0, stock: 10 },
          { label: "2 hours", priceModifier: 1200, stock: 5 },
          { label: "3 hours", priceModifier: 2500, stock: 3 }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "AC Installation & Repair",
    description: "Professional AC installation, servicing, and gas charging. All brands covered.",
    pricePerHour: 2e3,
    category: "Home Services",
    isBookable: true,
    provider: "Cool Tech Services",
    rating: 4.7,
    photos: [],
    variants: [
      {
        name: "Service Type",
        options: [
          { label: "Installation", priceModifier: 0, stock: 5 },
          { label: "Gas Charging", priceModifier: 1e3, stock: 5 },
          { label: "Full Service", priceModifier: 2500, stock: 3 }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Mehndi Artist",
    description: "Arabic and traditional Pakistani mehndi designs for weddings and events. Beautiful intricate patterns.",
    pricePerHour: 3e3,
    category: "Beauty & Events",
    isBookable: true,
    provider: "Henna by Nadia",
    rating: 4.95,
    photos: [],
    variants: [
      {
        name: "Design Style",
        options: [
          { label: "Arabic (simple)", priceModifier: 0, stock: 10 },
          { label: "Pakistani (bridal)", priceModifier: 5e3, stock: 5 },
          { label: "Full bridal set", priceModifier: 12e3, stock: 2 }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Legal Consultation",
    description: "Property, family, and business law consultation. Licensed advocate with 15 years experience.",
    pricePerHour: 5e3,
    category: "Professional",
    isBookable: true,
    provider: "Advocate Tariq Nisar",
    rating: 4.8,
    photos: [],
    variants: [
      {
        name: "Consultation Type",
        options: [
          { label: "Property Law", priceModifier: 0, stock: 10 },
          { label: "Family Law", priceModifier: 0, stock: 10 },
          { label: "Business Law", priceModifier: 2e3, stock: 5 }
        ]
      }
    ]
  }
];
const CATEGORY_COLORS = {
  Vehicles: "oklch(0.48 0.12 260)",
  Electronics: "oklch(0.52 0.14 155)",
  Fashion: "oklch(0.58 0.16 350)",
  Events: "oklch(0.72 0.17 85)",
  Education: "oklch(0.65 0.14 50)",
  "Home Services": "oklch(0.52 0.14 155)",
  "Beauty & Events": "oklch(0.58 0.16 350)",
  Professional: "oklch(0.48 0.12 260)",
  Furniture: "oklch(0.62 0.13 40)",
  Other: "oklch(0.55 0.10 200)"
};
function PhotoUploadArea({
  photos,
  onAdd,
  onRemove
}) {
  const inputRef = reactExports.useRef(null);
  const [dragging, setDragging] = reactExports.useState(false);
  const handleFiles = reactExports.useCallback(
    (files) => {
      if (!files) return;
      const urls = Array.from(files).map((f) => URL.createObjectURL(f));
      onAdd(urls);
    },
    [onAdd]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Photos" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        "aria-label": "Upload photos",
        className: `w-full border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-colors
          ${dragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 hover:bg-secondary/40"}`,
        onClick: () => {
          var _a;
          return (_a = inputRef.current) == null ? void 0 : _a.click();
        },
        onDragOver: (e) => {
          e.preventDefault();
          setDragging(true);
        },
        onDragLeave: () => setDragging(false),
        onDrop: (e) => {
          e.preventDefault();
          setDragging(false);
          handleFiles(e.dataTransfer.files);
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ImagePlus, { size: 22, className: "mx-auto mb-2 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Drag & drop or click to upload photos" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              ref: inputRef,
              type: "file",
              accept: "image/*",
              multiple: true,
              className: "hidden",
              onChange: (e) => handleFiles(e.target.files)
            }
          )
        ]
      }
    ),
    photos.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: photos.map((url, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: url,
          alt: `Preview ${i + 1}`,
          className: "w-16 h-16 object-cover rounded-lg border border-border"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => onRemove(i),
          className: "absolute -top-1.5 -right-1.5 bg-destructive text-destructive-foreground rounded-full w-4.5 h-4.5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
          "aria-label": "Remove photo",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 10 })
        }
      )
    ] }, url)) })
  ] });
}
function VariantsBuilder({
  variants,
  onChange
}) {
  const addGroup = () => onChange([
    ...variants,
    { name: "", options: [{ label: "", priceModifier: 0, stock: 0 }] }
  ]);
  const removeGroup = (gi) => onChange(variants.filter((_, i) => i !== gi));
  const updateGroupName = (gi, name) => {
    const copy = [...variants];
    copy[gi] = { ...copy[gi], name };
    onChange(copy);
  };
  const addOption = (gi) => {
    const copy = [...variants];
    copy[gi] = {
      ...copy[gi],
      options: [...copy[gi].options, { label: "", priceModifier: 0, stock: 0 }]
    };
    onChange(copy);
  };
  const removeOption = (gi, oi) => {
    const copy = [...variants];
    copy[gi] = {
      ...copy[gi],
      options: copy[gi].options.filter((_, i) => i !== oi)
    };
    onChange(copy);
  };
  const updateOption = (gi, oi, field, value) => {
    const copy = [...variants];
    const opts = [...copy[gi].options];
    opts[oi] = { ...opts[oi], [field]: value };
    copy[gi] = { ...copy[gi], options: opts };
    onChange(copy);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { size: 13 }),
        " Product Variants"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          variant: "outline",
          size: "sm",
          className: "h-7 text-xs gap-1",
          onClick: addGroup,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 11 }),
            " Add Variant Group"
          ]
        }
      )
    ] }),
    variants.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground italic", children: 'No variants added. Click "Add Variant Group" to create size, color, etc.' }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: variants.map((group, gi) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-xl border border-border bg-secondary/30 p-3 space-y-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "Group name (e.g. Size, Color)",
                value: group.name,
                onChange: (e) => updateGroupName(gi, e.target.value),
                className: "h-8 text-xs flex-1"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "ghost",
                size: "icon",
                className: "h-8 w-8 text-destructive hover:text-destructive shrink-0",
                onClick: () => removeGroup(gi),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 13 })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: group.options.map((opt, oi) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    placeholder: "Label (e.g. Small)",
                    value: opt.label,
                    onChange: (e) => updateOption(gi, oi, "label", e.target.value),
                    className: "h-7 text-xs flex-1"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "number",
                    placeholder: "±PKR",
                    value: opt.priceModifier || "",
                    onChange: (e) => updateOption(
                      gi,
                      oi,
                      "priceModifier",
                      Number(e.target.value)
                    ),
                    className: "h-7 text-xs w-20"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    type: "number",
                    placeholder: "Stock",
                    value: opt.stock || "",
                    onChange: (e) => updateOption(gi, oi, "stock", Number(e.target.value)),
                    className: "h-7 text-xs w-16"
                  }
                ),
                group.options.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    variant: "ghost",
                    size: "icon",
                    className: "h-7 w-7 text-muted-foreground hover:text-destructive shrink-0",
                    onClick: () => removeOption(gi, oi),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 11 })
                  }
                )
              ]
            },
            `opt-${gi}-${opt.label || oi}-${oi}`
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "button",
              variant: "ghost",
              size: "sm",
              className: "h-6 text-xs gap-1 text-primary",
              onClick: () => addOption(gi),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 10 }),
                " Add Option"
              ]
            }
          )
        ]
      },
      `group-${group.name || gi}-${gi}`
    )) })
  ] });
}
const globalLikeState = {};
function LikeDislikeButtons({ itemId }) {
  if (!globalLikeState[itemId]) {
    globalLikeState[itemId] = {
      likes: Math.floor(20 + Math.random() * 150),
      dislikes: Math.floor(1 + Math.random() * 10),
      voted: null
    };
  }
  const [state, setState] = reactExports.useState(() => ({ ...globalLikeState[itemId] }));
  const vote = (type) => {
    setState((prev) => {
      const next = { ...prev };
      if (prev.voted === type) {
        next.voted = null;
        if (type === "like") next.likes -= 1;
        else next.dislikes -= 1;
      } else {
        if (prev.voted === "like") next.likes -= 1;
        if (prev.voted === "dislike") next.dislikes -= 1;
        next.voted = type;
        if (type === "like") next.likes += 1;
        else next.dislikes += 1;
      }
      globalLikeState[itemId] = next;
      return next;
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => vote("like"),
        className: `flex items-center gap-0.5 px-1.5 py-1 rounded-lg text-xs transition-colors ${state.voted === "like" ? "bg-emerald-500/15 text-emerald-600" : "text-muted-foreground hover:text-emerald-600 hover:bg-emerald-500/10"}`,
        "data-ocid": "products.like_button",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ThumbsUp, { size: 11 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-label", children: state.likes })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => vote("dislike"),
        className: `flex items-center gap-0.5 px-1.5 py-1 rounded-lg text-xs transition-colors ${state.voted === "dislike" ? "bg-destructive/15 text-destructive" : "text-muted-foreground hover:text-destructive hover:bg-destructive/10"}`,
        "data-ocid": "products.dislike_button",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ThumbsDown, { size: 11 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-label", children: state.dislikes })
        ]
      }
    )
  ] });
}
function ProductCard({ product }) {
  const { formatPrice } = useCurrency();
  const color = CATEGORY_COLORS[product.category] || "oklch(0.52 0.14 155)";
  const totalVariants = product.variants.reduce(
    (acc, g) => acc + g.options.length,
    0
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl shadow-card hover:shadow-card-hover transition-all animate-fade-up overflow-hidden", children: [
    product.photos.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: product.photos[0],
        alt: product.name,
        className: "w-full h-40 object-cover"
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 rounded-t-xl", style: { background: color } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-label font-semibold text-foreground truncate", children: product.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                className: "text-[10px] px-1.5 py-0 font-label border-0",
                style: { background: `${color}18`, color },
                children: product.category
              }
            ),
            product.isRental && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-[10px] px-1.5 py-0 font-label bg-secondary text-secondary-foreground", children: "Rental Available" }),
            totalVariants > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: "outline",
                className: "text-[10px] px-1.5 py-0 font-label gap-0.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { size: 9 }),
                  " ",
                  product.variants.length,
                  " variants"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 16, className: "text-muted-foreground shrink-0 ml-2" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2", children: product.description }),
      product.isRental && product.rentalStartDate && product.rentalEndDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 11, className: "text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
          product.rentalStartDate,
          " → ",
          product.rentalEndDate
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Star,
          {
            size: 11,
            className: "fill-current",
            style: { color: "oklch(0.78 0.13 65)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label font-semibold", children: product.rating }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground ml-1", children: [
          "· ",
          product.seller
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          product.price > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label font-bold text-foreground", children: formatPrice(product.price) }),
          product.isRental && product.rentalPricePerDay && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground font-label", children: [
            formatPrice(product.rentalPricePerDay),
            "/day rental"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LikeDislikeButtons, { itemId: `p-${product.id}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "h-7 text-xs font-label", children: product.isRental && product.price === 0 ? "Book Rental" : "Contact Seller" })
        ] })
      ] })
    ] })
  ] });
}
function ServiceCard({ service }) {
  const { formatPrice } = useCurrency();
  const color = CATEGORY_COLORS[service.category] || "oklch(0.52 0.14 155)";
  const totalVariants = service.variants.reduce(
    (acc, g) => acc + g.options.length,
    0
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl shadow-card hover:shadow-card-hover transition-all animate-fade-up overflow-hidden", children: [
    service.photos.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: service.photos[0],
        alt: service.name,
        className: "w-full h-40 object-cover"
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 rounded-t-xl", style: { background: color } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-label font-semibold text-foreground truncate", children: service.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                className: "text-[10px] px-1.5 py-0 font-label border-0",
                style: { background: `${color}18`, color },
                children: service.category
              }
            ),
            service.isBookable && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-[10px] px-1.5 py-0 font-label bg-secondary text-secondary-foreground", children: "Bookable" }),
            totalVariants > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: "outline",
                className: "text-[10px] px-1.5 py-0 font-label gap-0.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { size: 9 }),
                  " ",
                  service.variants.length,
                  " variants"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { size: 16, className: "text-muted-foreground shrink-0 ml-2" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2", children: service.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Star,
          {
            size: 11,
            className: "fill-current",
            style: { color: "oklch(0.78 0.13 65)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label font-semibold", children: service.rating }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground ml-1", children: [
          "· ",
          service.provider
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 12, className: "text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-label font-bold text-foreground text-sm", children: formatPrice(service.pricePerHour) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "/hr" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LikeDislikeButtons, { itemId: `s-${service.id}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "h-7 text-xs font-label", children: service.isBookable ? "Book Now" : "Contact" })
        ] })
      ] })
    ] })
  ] });
}
const MOCK_DETECTED_COLORS = [
  { name: "Black", hex: "#1a1a1a" },
  { name: "White", hex: "#f5f5f5" },
  { name: "Red", hex: "#dc2626" },
  { name: "Blue", hex: "#2563eb" },
  { name: "Green", hex: "#16a34a" },
  { name: "Yellow", hex: "#ca8a04" },
  { name: "Pink", hex: "#db2777" },
  { name: "Brown", hex: "#92400e" }
];
function pickRandomColors() {
  const shuffled = [...MOCK_DETECTED_COLORS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 3 + Math.floor(Math.random() * 2));
}
function ProductsServicesPage() {
  const { formatPrice } = useCurrency();
  const [products, setProducts] = reactExports.useState(SAMPLE_PRODUCTS);
  const [services, setServices] = reactExports.useState(SAMPLE_SERVICES);
  const [productOpen, setProductOpen] = reactExports.useState(false);
  const [serviceOpen, setServiceOpen] = reactExports.useState(false);
  const [colorDetecting, setColorDetecting] = reactExports.useState(false);
  const [detectedColors, setDetectedColors] = reactExports.useState([]);
  const [showColorPrompt, setShowColorPrompt] = reactExports.useState(false);
  const [colorVariants, setColorVariants] = reactExports.useState([]);
  const [productPhotos, setProductPhotos] = reactExports.useState([]);
  const [productVariants, setProductVariants] = reactExports.useState([]);
  const [productForm, setProductForm] = reactExports.useState({
    name: "",
    description: "",
    price: "",
    category: "Electronics",
    isRental: false,
    rentalPricePerDay: "",
    rentalStartDate: "",
    rentalEndDate: ""
  });
  const [showInventorySection, setShowInventorySection] = reactExports.useState(false);
  const [showSupplierSection, setShowSupplierSection] = reactExports.useState(false);
  const [inventoryForm, setInventoryForm] = reactExports.useState({
    sku: "",
    purchasePrice: "",
    stockQty: "",
    reorderLevel: ""
  });
  const [supplierForm, setSupplierForm] = reactExports.useState({
    name: "",
    type: "manufacturer",
    contact: "",
    rawMaterialSupplier: "",
    jobWorkParty: ""
  });
  const [servicePhotos, setServicePhotos] = reactExports.useState([]);
  const [serviceVariants, setServiceVariants] = reactExports.useState([]);
  const [serviceForm, setServiceForm] = reactExports.useState({
    name: "",
    description: "",
    pricePerHour: "",
    category: "Home Services",
    isBookable: true
  });
  const rentalDays = productForm.rentalStartDate && productForm.rentalEndDate ? Math.max(
    0,
    Math.round(
      (new Date(productForm.rentalEndDate).getTime() - new Date(productForm.rentalStartDate).getTime()) / 864e5
    )
  ) : 0;
  const rentalTotal = rentalDays * (Number(productForm.rentalPricePerDay) || 0);
  const resetProductForm = () => {
    setProductForm({
      name: "",
      description: "",
      price: "",
      category: "Electronics",
      isRental: false,
      rentalPricePerDay: "",
      rentalStartDate: "",
      rentalEndDate: ""
    });
    setProductPhotos([]);
    setProductVariants([]);
    setDetectedColors([]);
    setShowColorPrompt(false);
    setColorVariants([]);
    setColorDetecting(false);
    setInventoryForm({
      sku: "",
      purchasePrice: "",
      stockQty: "",
      reorderLevel: ""
    });
    setSupplierForm({
      name: "",
      type: "manufacturer",
      contact: "",
      rawMaterialSupplier: "",
      jobWorkParty: ""
    });
    setShowInventorySection(false);
    setShowSupplierSection(false);
  };
  const handleProductPhotosAdd = (urls) => {
    setProductPhotos((prev) => {
      const next = [...prev, ...urls];
      if (next.length > 0 && prev.length === 0) {
        setColorDetecting(true);
        setShowColorPrompt(false);
        setTimeout(() => {
          const colors = pickRandomColors();
          setDetectedColors(colors);
          setColorDetecting(false);
          setShowColorPrompt(true);
        }, 1200);
      }
      return next;
    });
  };
  const handleAcceptColorVariants = () => {
    const colorGroup = {
      name: "Color",
      options: colorVariants.map((cv) => ({
        label: cv.color.name,
        priceModifier: Number(cv.price) || 0,
        stock: Number(cv.stock) || 1
      }))
    };
    setProductVariants((prev) => {
      const filtered = prev.filter((v) => v.name !== "Color");
      return [colorGroup, ...filtered];
    });
    setShowColorPrompt(false);
    ue.success("Color variants added to product!");
  };
  const resetServiceForm = () => {
    setServiceForm({
      name: "",
      description: "",
      pricePerHour: "",
      category: "Home Services",
      isBookable: true
    });
    setServicePhotos([]);
    setServiceVariants([]);
  };
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!productForm.name.trim()) return;
    const hasInventory = inventoryForm.sku || inventoryForm.stockQty;
    const hasSupplier = supplierForm.name;
    const p = {
      id: Date.now(),
      name: productForm.name,
      description: productForm.description || "No description",
      price: Number.parseFloat(productForm.price) || 0,
      category: productForm.category,
      isRental: productForm.isRental,
      rentalPricePerDay: productForm.isRental ? Number.parseFloat(productForm.rentalPricePerDay) || void 0 : void 0,
      rating: 0,
      seller: "You",
      photos: productPhotos,
      variants: productVariants,
      rentalStartDate: productForm.isRental ? productForm.rentalStartDate : void 0,
      rentalEndDate: productForm.isRental ? productForm.rentalEndDate : void 0,
      inventory: hasInventory ? {
        sku: inventoryForm.sku,
        purchasePrice: Number.parseFloat(inventoryForm.purchasePrice) || 0,
        stockQty: Number.parseInt(inventoryForm.stockQty) || 0,
        reorderLevel: Number.parseInt(inventoryForm.reorderLevel) || 5
      } : void 0,
      supplier: hasSupplier ? {
        name: supplierForm.name,
        type: supplierForm.type,
        contact: supplierForm.contact,
        rawMaterialSupplier: supplierForm.type === "raw_material" ? supplierForm.rawMaterialSupplier : void 0,
        jobWorkParty: supplierForm.type === "job_work" ? supplierForm.jobWorkParty : void 0
      } : void 0
    };
    setProducts((prev) => [p, ...prev]);
    ue.success("Product listed successfully");
    setProductOpen(false);
    resetProductForm();
  };
  const handleAddService = (e) => {
    e.preventDefault();
    if (!serviceForm.name.trim()) return;
    const s = {
      id: Date.now(),
      name: serviceForm.name,
      description: serviceForm.description || "No description",
      pricePerHour: Number.parseFloat(serviceForm.pricePerHour) || 0,
      category: serviceForm.category,
      isBookable: serviceForm.isBookable,
      provider: "You",
      rating: 0,
      photos: servicePhotos,
      variants: serviceVariants
    };
    setServices((prev) => [s, ...prev]);
    ue.success("Service listed successfully");
    setServiceOpen(false);
    resetServiceForm();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 lg:p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 animate-fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-display font-bold text-foreground", children: "Products & Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: "Buy, sell, rent, and book within your community" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "products", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6 flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            TabsTrigger,
            {
              value: "products",
              className: "font-label gap-2",
              "data-ocid": "products.products.tab",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 14 }),
                " Products"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            TabsTrigger,
            {
              value: "services",
              className: "font-label gap-2",
              "data-ocid": "products.services.tab",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { size: 14 }),
                " Services"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            TabsTrigger,
            {
              value: "events",
              className: "font-label gap-2",
              "data-ocid": "products.events.tab",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { size: 14 }),
                " Events"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            TabsTrigger,
            {
              value: "inventory",
              className: "font-label gap-2",
              "data-ocid": "products.inventory.tab",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { size: 14 }),
                " Inventory"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Dialog,
            {
              open: productOpen,
              onOpenChange: (v) => {
                setProductOpen(v);
                if (!v) resetProductForm();
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "font-label gap-1.5 text-xs",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 }),
                      " Add Product"
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-lg max-h-[90vh] flex flex-col", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display", children: "List a Product" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "flex-1 overflow-y-auto pr-3 -mr-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "form",
                    {
                      id: "add-product-form",
                      onSubmit: handleAddProduct,
                      className: "space-y-5 mt-2 pb-2",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          PhotoUploadArea,
                          {
                            photos: productPhotos,
                            onAdd: handleProductPhotosAdd,
                            onRemove: (idx) => setProductPhotos(
                              (prev) => prev.filter((_, i) => i !== idx)
                            )
                          }
                        ),
                        colorDetecting && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 p-3 rounded-lg bg-secondary/60 border border-border", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin shrink-0" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label text-muted-foreground", children: "Analyzing colors in your image..." })
                        ] }),
                        showColorPrompt && detectedColors.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-lg border border-border bg-secondary/40 space-y-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: detectedColors.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: "w-4 h-4 rounded-full border border-border/50",
                                style: { background: c.hex },
                                title: c.name
                              },
                              c.name
                            )) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-label font-semibold text-foreground", children: [
                              "Detected:",
                              " ",
                              detectedColors.map((c) => c.name).join(", ")
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Would you like to add color variants with individual pricing?" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: detectedColors.map((c) => {
                            var _a, _b;
                            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "div",
                              {
                                className: "flex items-center gap-2",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "span",
                                    {
                                      className: "w-5 h-5 rounded-full border border-border/50 shrink-0",
                                      style: { background: c.hex }
                                    }
                                  ),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label w-16 shrink-0", children: c.name }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    Input,
                                    {
                                      type: "number",
                                      placeholder: "+/- price",
                                      className: "h-7 text-xs w-24",
                                      value: ((_a = colorVariants.find(
                                        (cv) => cv.color.name === c.name
                                      )) == null ? void 0 : _a.price) || "",
                                      onChange: (e) => {
                                        setColorVariants((prev) => {
                                          const existing = prev.find(
                                            (cv) => cv.color.name === c.name
                                          );
                                          if (existing) {
                                            return prev.map(
                                              (cv) => cv.color.name === c.name ? { ...cv, price: e.target.value } : cv
                                            );
                                          }
                                          return [
                                            ...prev,
                                            {
                                              color: c,
                                              price: e.target.value,
                                              stock: "1"
                                            }
                                          ];
                                        });
                                      }
                                    }
                                  ),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    Input,
                                    {
                                      type: "number",
                                      placeholder: "stock",
                                      className: "h-7 text-xs w-20",
                                      value: ((_b = colorVariants.find(
                                        (cv) => cv.color.name === c.name
                                      )) == null ? void 0 : _b.stock) || "",
                                      onChange: (e) => {
                                        setColorVariants((prev) => {
                                          const existing = prev.find(
                                            (cv) => cv.color.name === c.name
                                          );
                                          if (existing) {
                                            return prev.map(
                                              (cv) => cv.color.name === c.name ? { ...cv, stock: e.target.value } : cv
                                            );
                                          }
                                          return [
                                            ...prev,
                                            {
                                              color: c,
                                              price: "0",
                                              stock: e.target.value
                                            }
                                          ];
                                        });
                                      }
                                    }
                                  )
                                ]
                              },
                              c.name
                            );
                          }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Button,
                              {
                                type: "button",
                                size: "sm",
                                className: "h-7 text-xs font-label",
                                onClick: () => {
                                  const allColors = detectedColors.map((c) => {
                                    const existing = colorVariants.find(
                                      (cv) => cv.color.name === c.name
                                    );
                                    return existing || {
                                      color: c,
                                      price: "0",
                                      stock: "1"
                                    };
                                  });
                                  setColorVariants(allColors);
                                  handleAcceptColorVariants();
                                },
                                children: "Yes, Add Color Variants"
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Button,
                              {
                                type: "button",
                                size: "sm",
                                variant: "ghost",
                                className: "h-7 text-xs font-label",
                                onClick: () => setShowColorPrompt(false),
                                children: "Skip"
                              }
                            )
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Product Name *" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              placeholder: "e.g. Toyota Corolla 2020",
                              value: productForm.name,
                              onChange: (e) => setProductForm((p) => ({
                                ...p,
                                name: e.target.value
                              })),
                              required: true
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Description" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Textarea,
                            {
                              rows: 2,
                              className: "resize-none",
                              placeholder: "Describe the product...",
                              value: productForm.description,
                              onChange: (e) => setProductForm((p) => ({
                                ...p,
                                description: e.target.value
                              }))
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Price (PKR)" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Input,
                              {
                                type: "number",
                                placeholder: "0",
                                value: productForm.price,
                                onChange: (e) => setProductForm((p) => ({
                                  ...p,
                                  price: e.target.value
                                }))
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Category" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              Select,
                              {
                                value: productForm.category,
                                onValueChange: (v) => setProductForm((p) => ({ ...p, category: v })),
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                                    "Electronics",
                                    "Vehicles",
                                    "Fashion",
                                    "Events",
                                    "Furniture",
                                    "Other"
                                  ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
                                ]
                              }
                            )
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-lg bg-secondary/60 p-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Rental Available" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Switch,
                            {
                              checked: productForm.isRental,
                              onCheckedChange: (v) => setProductForm((p) => ({ ...p, isRental: v }))
                            }
                          )
                        ] }),
                        productForm.isRental && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 rounded-xl bg-secondary/30 p-4 border border-border", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Rental Price / Day (PKR)" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Input,
                              {
                                type: "number",
                                placeholder: "0",
                                value: productForm.rentalPricePerDay,
                                onChange: (e) => setProductForm((p) => ({
                                  ...p,
                                  rentalPricePerDay: e.target.value
                                }))
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Available From" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Input,
                                {
                                  type: "date",
                                  value: productForm.rentalStartDate,
                                  onChange: (e) => setProductForm((p) => ({
                                    ...p,
                                    rentalStartDate: e.target.value
                                  }))
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Available Until" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Input,
                                {
                                  type: "date",
                                  value: productForm.rentalEndDate,
                                  onChange: (e) => setProductForm((p) => ({
                                    ...p,
                                    rentalEndDate: e.target.value
                                  }))
                                }
                              )
                            ] })
                          ] }),
                          rentalDays > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-primary font-label font-semibold bg-primary/10 rounded-lg px-3 py-2", children: [
                            rentalDays,
                            " days availability window ·",
                            " ",
                            rentalTotal > 0 ? `${formatPrice(rentalTotal)} max rental` : "Set rental price/day to calculate total"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          VariantsBuilder,
                          {
                            variants: productVariants,
                            onChange: setProductVariants
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border overflow-hidden", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "button",
                            {
                              type: "button",
                              onClick: () => setShowInventorySection((v) => !v),
                              className: "w-full flex items-center justify-between px-4 py-3 bg-secondary/40 hover:bg-secondary/60 transition-colors",
                              "data-ocid": "product.inventory.toggle",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { size: 14, className: "text-primary" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-label font-semibold text-foreground", children: "Inventory & Pricing" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "(optional)" })
                                ] }),
                                showInventorySection ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  ChevronUp,
                                  {
                                    size: 14,
                                    className: "text-muted-foreground"
                                  }
                                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  ChevronDown,
                                  {
                                    size: 14,
                                    className: "text-muted-foreground"
                                  }
                                )
                              ]
                            }
                          ),
                          showInventorySection && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-3 bg-secondary/10", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "SKU Code" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  Input,
                                  {
                                    placeholder: "e.g. ELEC-001",
                                    value: inventoryForm.sku,
                                    onChange: (e) => setInventoryForm((p) => ({
                                      ...p,
                                      sku: e.target.value
                                    })),
                                    className: "h-8 text-xs",
                                    "data-ocid": "product.inventory.input"
                                  }
                                )
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Purchase Price" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  Input,
                                  {
                                    type: "number",
                                    placeholder: "Cost price",
                                    value: inventoryForm.purchasePrice,
                                    onChange: (e) => setInventoryForm((p) => ({
                                      ...p,
                                      purchasePrice: e.target.value
                                    })),
                                    className: "h-8 text-xs"
                                  }
                                )
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Stock Quantity" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  Input,
                                  {
                                    type: "number",
                                    placeholder: "Units in stock",
                                    value: inventoryForm.stockQty,
                                    onChange: (e) => setInventoryForm((p) => ({
                                      ...p,
                                      stockQty: e.target.value
                                    })),
                                    className: "h-8 text-xs"
                                  }
                                )
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Reorder Level" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  Input,
                                  {
                                    type: "number",
                                    placeholder: "Low stock threshold",
                                    value: inventoryForm.reorderLevel,
                                    onChange: (e) => setInventoryForm((p) => ({
                                      ...p,
                                      reorderLevel: e.target.value
                                    })),
                                    className: "h-8 text-xs"
                                  }
                                )
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border overflow-hidden", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "button",
                            {
                              type: "button",
                              onClick: () => setShowSupplierSection((v) => !v),
                              className: "w-full flex items-center justify-between px-4 py-3 bg-secondary/40 hover:bg-secondary/60 transition-colors",
                              "data-ocid": "product.supplier.toggle",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { size: 14, className: "text-primary" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-label font-semibold text-foreground", children: "Supplier / Vendor" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "(optional)" })
                                ] }),
                                showSupplierSection ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  ChevronUp,
                                  {
                                    size: 14,
                                    className: "text-muted-foreground"
                                  }
                                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  ChevronDown,
                                  {
                                    size: 14,
                                    className: "text-muted-foreground"
                                  }
                                )
                              ]
                            }
                          ),
                          showSupplierSection && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-3 bg-secondary/10", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Supplier / Vendor Name" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Input,
                                {
                                  placeholder: "e.g. ABC Suppliers Ltd.",
                                  value: supplierForm.name,
                                  onChange: (e) => setSupplierForm((p) => ({
                                    ...p,
                                    name: e.target.value
                                  })),
                                  className: "h-8 text-xs",
                                  "data-ocid": "product.supplier.input"
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Supplier Type" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                Select,
                                {
                                  value: supplierForm.type,
                                  onValueChange: (v) => setSupplierForm((p) => ({
                                    ...p,
                                    type: v
                                  })),
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                                      SelectTrigger,
                                      {
                                        className: "h-8 text-xs",
                                        "data-ocid": "product.supplier.select",
                                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {})
                                      }
                                    ),
                                    /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "raw_material", children: "Raw Material Supplier" }),
                                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "manufacturer", children: "Manufacturer" }),
                                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "job_work", children: "Job Work Party" }),
                                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "inhouse", children: "In-house Manufacturing" })
                                    ] })
                                  ]
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Contact" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Input,
                                {
                                  placeholder: "Phone / email",
                                  value: supplierForm.contact,
                                  onChange: (e) => setSupplierForm((p) => ({
                                    ...p,
                                    contact: e.target.value
                                  })),
                                  className: "h-8 text-xs"
                                }
                              )
                            ] }),
                            supplierForm.type === "raw_material" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Raw Material Supplier Name" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Input,
                                {
                                  placeholder: "Name of raw material supplier",
                                  value: supplierForm.rawMaterialSupplier,
                                  onChange: (e) => setSupplierForm((p) => ({
                                    ...p,
                                    rawMaterialSupplier: e.target.value
                                  })),
                                  className: "h-8 text-xs"
                                }
                              )
                            ] }),
                            supplierForm.type === "job_work" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Job Work Party" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Input,
                                {
                                  placeholder: "Name of job work party / contractor",
                                  value: supplierForm.jobWorkParty,
                                  onChange: (e) => setSupplierForm((p) => ({
                                    ...p,
                                    jobWorkParty: e.target.value
                                  })),
                                  className: "h-8 text-xs"
                                }
                              )
                            ] })
                          ] })
                        ] })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-3 border-t border-border mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "submit",
                      form: "add-product-form",
                      className: "w-full font-label",
                      "data-ocid": "product.submit_button",
                      children: "List Product"
                    }
                  ) })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Dialog,
            {
              open: serviceOpen,
              onOpenChange: (v) => {
                setServiceOpen(v);
                if (!v) resetServiceForm();
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", className: "font-label gap-1.5 text-xs", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 }),
                  " Add Service"
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-lg max-h-[90vh] flex flex-col", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display", children: "List a Service" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { className: "flex-1 overflow-y-auto pr-3 -mr-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "form",
                    {
                      id: "add-service-form",
                      onSubmit: handleAddService,
                      className: "space-y-5 mt-2 pb-2",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          PhotoUploadArea,
                          {
                            photos: servicePhotos,
                            onAdd: (urls) => setServicePhotos((prev) => [...prev, ...urls]),
                            onRemove: (idx) => setServicePhotos(
                              (prev) => prev.filter((_, i) => i !== idx)
                            )
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Service Name *" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Input,
                            {
                              placeholder: "e.g. Home Plumbing Repair",
                              value: serviceForm.name,
                              onChange: (e) => setServiceForm((p) => ({
                                ...p,
                                name: e.target.value
                              })),
                              required: true
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Description" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Textarea,
                            {
                              rows: 2,
                              className: "resize-none",
                              placeholder: "Describe your service...",
                              value: serviceForm.description,
                              onChange: (e) => setServiceForm((p) => ({
                                ...p,
                                description: e.target.value
                              }))
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Price / Hour (PKR)" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Input,
                              {
                                type: "number",
                                placeholder: "0",
                                value: serviceForm.pricePerHour,
                                onChange: (e) => setServiceForm((p) => ({
                                  ...p,
                                  pricePerHour: e.target.value
                                }))
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Category" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              Select,
                              {
                                value: serviceForm.category,
                                onValueChange: (v) => setServiceForm((p) => ({ ...p, category: v })),
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                                    "Home Services",
                                    "Education",
                                    "Beauty & Events",
                                    "Professional",
                                    "Health",
                                    "Technology",
                                    "Other"
                                  ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: c, children: c }, c)) })
                                ]
                              }
                            )
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-lg bg-secondary/60 p-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Booking Enabled" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Switch,
                            {
                              checked: serviceForm.isBookable,
                              onCheckedChange: (v) => setServiceForm((p) => ({ ...p, isBookable: v }))
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          VariantsBuilder,
                          {
                            variants: serviceVariants,
                            onChange: setServiceVariants
                          }
                        )
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-3 border-t border-border mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "submit",
                      form: "add-service-form",
                      className: "w-full font-label",
                      children: "List Service"
                    }
                  ) })
                ] })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "products", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4", children: products.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { animationDelay: `${i * 0.05}s` }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }) }, p.id)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "services", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { animationDelay: `${i * 0.05}s` }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCard, { service: s }) }, s.id)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "events", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        EventsTab,
        {
          moduleName: "Products & Services",
          moduleColor: "oklch(0.65 0.25 335)"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "inventory", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InventoryTab, { products }) })
    ] })
  ] });
}
function InventoryTab({ products }) {
  const { formatPrice } = useCurrency();
  const productsWithInventory = products.filter((p) => p.inventory);
  if (productsWithInventory.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center py-16 text-center",
        "data-ocid": "inventory.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChartColumn,
            {
              size: 40,
              className: "text-muted-foreground mb-4 opacity-40"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-label font-semibold text-muted-foreground", children: "No inventory data yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Add products with inventory details to see them here." })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "rounded-xl border border-border overflow-hidden",
      "data-ocid": "inventory.table",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "bg-secondary/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "font-label text-xs font-semibold", children: "Product" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "font-label text-xs font-semibold", children: "SKU" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "font-label text-xs font-semibold text-right", children: "Stock" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "font-label text-xs font-semibold text-right", children: "Reorder At" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "font-label text-xs font-semibold text-right", children: "Purchase Price" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "font-label text-xs font-semibold text-right", children: "Selling Price" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "font-label text-xs font-semibold text-right", children: "Margin" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "font-label text-xs font-semibold", children: "Supplier" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "font-label text-xs font-semibold", children: "Status" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: productsWithInventory.map((product, i) => {
          const inv = product.inventory;
          const isLowStock = inv.stockQty <= inv.reorderLevel;
          const margin = inv.purchasePrice > 0 ? Math.round(
            (product.price - inv.purchasePrice) / product.price * 100
          ) : null;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            TableRow,
            {
              className: isLowStock ? "bg-amber-500/5 hover:bg-amber-500/10" : "",
              "data-ocid": `inventory.row.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground truncate max-w-[160px]", children: product.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: product.category })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-xs bg-secondary/60 px-2 py-0.5 rounded font-mono", children: inv.sku || "—" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `text-sm font-label font-bold ${isLowStock ? "text-amber-600 dark:text-amber-400" : "text-foreground"}`,
                    children: inv.stockQty
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: inv.reorderLevel }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-label text-muted-foreground", children: inv.purchasePrice > 0 ? formatPrice(inv.purchasePrice) : "—" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-label font-semibold text-foreground", children: product.price > 0 ? formatPrice(product.price) : "—" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: margin !== null ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    className: `text-sm font-label font-bold ${margin >= 20 ? "text-emerald-600 dark:text-emerald-400" : margin >= 0 ? "text-foreground" : "text-destructive"}`,
                    children: [
                      margin,
                      "%"
                    ]
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "—" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: product.supplier ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-label font-medium text-foreground truncate max-w-[120px]", children: product.supplier.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground capitalize", children: product.supplier.type.replace("_", " ") })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "—" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: isLowStock ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "text-[10px] px-1.5 py-0 font-label bg-amber-500/15 text-amber-600 dark:text-amber-400 border-0 gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { size: 9 }),
                  " Low Stock"
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-[10px] px-1.5 py-0 font-label bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-0", children: "In Stock" }) })
              ]
            },
            product.id
          );
        }) })
      ] })
    }
  );
}
export {
  SAMPLE_PRODUCTS,
  SAMPLE_SERVICES,
  ProductsServicesPage as default
};
